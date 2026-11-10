const {test}=require('node:test');
const assert=require('node:assert/strict');
const api=require('../public/connections.js');
const now=Date.parse('2026-11-10T22:00:00Z');
const reading={nodeId:'edn-tree-01',sensorId:'flow-01',metric:'water-flow',value:1.2,unit:'L/min',measuredAt:'2026-11-10T21:59:00Z',quality:'validated'};
test('Only fresh, validated readings from known nodes reach the display',()=>{
 const invalid=[{measuredAt:'2026-11-10T20:00:00Z'},{measuredAt:'2026-11-10T23:00:00Z'},{nodeId:'unknown'},{unit:'unsupported'},{quality:'unverified'},{value:Infinity},{metric:'soil-moisture',unit:'%',value:101}];
 const result=api.telemetry({schemaVersion:'1.0',readings:[reading,...invalid.map(x=>({...reading,...x}))]},{now,nodeIds:['edn-tree-01']});
 assert.equal(result.readings.length,1);assert.equal(result.rejected.length,invalid.length);
});
test('Stale inventory and negative stock never become public availability',()=>{
 const base={schemaVersion:'1.0',nodeId:'little-ark-01',updatedAt:'2026-11-10T21:59:00Z',items:[{id:'eggs',name:'Eggs',unit:'eggs',availableQuantity:0}]};
 assert.equal(api.inventory(base,{now}).items[0].availableQuantity,0);
 assert.throws(()=>api.inventory({...base,updatedAt:'2026-11-10T20:00:00Z'},{now}));
 assert.throws(()=>api.inventory({...base,items:[{...base.items[0],availableQuantity:-1}]},{now}));
});
test('Disconnected mode performs no service requests',async()=>{
 const original=global.fetch;let requests=0;global.fetch=async()=>{requests++;throw Error('unexpected');};
 try{const result=await api.connect({schemaVersion:'1.0',mode:'disconnected',telemetryUrl:'https://example.invalid'},[]);assert.equal(result.status,'disconnected');assert.equal(requests,0);}finally{global.fetch=original;}
});
test('A commissioned endpoint is read and validated through the adapter',async()=>{
 const original=global.fetch;let requests=0;global.fetch=async()=>{requests++;return{ok:true,json:async()=>({schemaVersion:'1.0',readings:[{...reading,measuredAt:new Date().toISOString()}]})};};
 try{const result=await api.connect({schemaVersion:'1.0',mode:'commissioned',telemetryUrl:'https://example.invalid/telemetry'},['edn-tree-01']);assert.equal(result.telemetry.readings.length,1);assert.equal(requests,1);}finally{global.fetch=original;}
});
