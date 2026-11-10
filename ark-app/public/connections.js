/* Read-only service boundary. No device-control, identity or dispensing API is exposed. */
(function(root){
 'use strict';
 const units={'soil-moisture':['%'],'air-temperature':['degC','degF'],'relative-humidity':['%'],'water-flow':['L/min'],'water-temperature':['degC','degF'],'reservoir-level':['%','L'],'soil-temperature':['degC','degF']};
 function timestamp(value,now,maxAge){const ms=typeof value==='string'?Date.parse(value):NaN;return Number.isFinite(ms)&&ms<=now+30000&&now-ms<=maxAge*1000;}
 function telemetry(payload,{now=Date.now(),maxAge=900,nodeIds=[]}={}){
  if(!payload||payload.schemaVersion!=='1.0'||!Array.isArray(payload.readings)||payload.readings.length>1000)throw Error('Unsupported telemetry response');
  const valid=[], rejected=[];
  payload.readings.forEach((r,i)=>{if(r&&typeof r.nodeId==='string'&&nodeIds.includes(r.nodeId)&&typeof r.sensorId==='string'&&r.sensorId.length<=100&&Object.hasOwn(units,r.metric)&&units[r.metric].includes(r.unit)&&typeof r.value==='number'&&Number.isFinite(r.value)&&r.quality==='validated'&&timestamp(r.measuredAt,now,maxAge)&&(r.unit!=='%'||(r.value>=0&&r.value<=100))){valid.push({nodeId:r.nodeId,sensorId:r.sensorId,metric:r.metric,value:r.value,unit:r.unit,measuredAt:r.measuredAt,quality:r.quality});}else rejected.push(i);});
  return {readings:valid,rejected};
 }
 function inventory(payload,{now=Date.now(),maxAge=300}={}){
  if(!payload||payload.schemaVersion!=='1.0'||payload.nodeId!=='little-ark-01'||!timestamp(payload.updatedAt,now,maxAge)||!Array.isArray(payload.items)||payload.items.length>100)throw Error('Unsupported or stale inventory response');
  return {nodeId:payload.nodeId,updatedAt:payload.updatedAt,items:payload.items.map(item=>{if(!item||typeof item.id!=='string'||item.id.length>100||typeof item.name!=='string'||item.name.length>100||!Number.isSafeInteger(item.availableQuantity)||item.availableQuantity<0||typeof item.unit!=='string'||item.unit.length>30)throw Error('Invalid inventory item');return {id:item.id,name:item.name,availableQuantity:item.availableQuantity,unit:item.unit};})};
 }
 async function read(url,timeout=8000){const target=new URL(url,root.location?.href||'https://ark-app.ark4humanity.workers.dev/');if(target.protocol!=='https:'&&!(target.protocol==='http:'&&['localhost','127.0.0.1'].includes(target.hostname)))throw Error('HTTPS service required');const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),Math.min(15000,Math.max(1000,timeout)));try{const response=await fetch(target,{signal:controller.signal,credentials:'omit',cache:'no-store',headers:{Accept:'application/json'}});if(!response.ok)throw Error('Service unavailable');return await response.json();}finally{clearTimeout(timer);}}
 async function connect(config,nodeIds){
  if(config.schemaVersion!=='1.0'||config.mode!=='commissioned')return {status:'disconnected',telemetry:null,inventory:null};
  const result={status:'commissioned',telemetry:null,inventory:null,errors:[]};
  await Promise.all(['telemetry','inventory'].map(async key=>{const url=config[key+'Url'];if(!url)return;try{const payload=await read(url,config.requestTimeoutMs);result[key]=key==='telemetry'?telemetry(payload,{nodeIds,maxAge:Math.min(900,config.maxReadingAgeSeconds||900)}):inventory(payload,{maxAge:Math.min(300,config.maxInventoryAgeSeconds||300)});}catch{result.errors.push(key+' unavailable or invalid');}}));return result;
 }
 const api={telemetry,inventory,connect};root.ArkConnections=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
