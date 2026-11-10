'use strict';
const $ = id => document.getElementById(id);
const site = 'https://thearkinitiative.com';
const emblemNames = {bear:'White bear · Center',lion:'White lion · Garden',wolf:'White wolf · Discovery',bee:'Bee · Cooperation'};
const destinations = [
 ['THE CENTER','Museum · Place of Choosing','Meet the Pillars and choose where your curiosity leads.','/library/museum.html','assets/aura-room.webp'],
 ['TIME & MEMORY','Cave of Time','Walk the timeline, its surviving traces and its missing places.','/library/museum-room/','assets/aeon.webp'],
 ['A LIVING LIBRARY','Walk among the shelves','Explore the existing three-dimensional library and its discoveries.','/library/room/','assets/aura-room.webp'],
 ['ASHERAH’S WORLD','The garden remembers','Enter Asherah’s existing world, with her white lion, and follow its ecology and learning.','/asherah-world','assets/asherah-original.webp'],
 ['AMBER’S CONSERVATORY','A place to grow','Meet Amber and her white wolf in the existing garden chapter.','/asherah-world#amber','assets/amber-original.webp'],
 ['VEGA’S OBSERVATORY','Find your bearings','Follow stars, maps and sensing into Vega’s existing Pillar world.','/pillar-09-vega.html','assets/vega-room.webp'],
 ['PLAY & LEARN','The garden, played','Meet the existing playable garden and discover its learning through play.','/play.html','assets/hens.webp'],
 ['THE CAPTAIN’S ROOM','Where the work connects','Follow the wider initiative, its projects and paths for participation.','/captains-room/','assets/hero-ark.webp']
];
const reading = [
 ['Gardens, pollinators & regeneration','Asherah','/pillar-05-asherah.html','Follow living ecologies, planting and cooperative systems.'],
 ['Water, circulation & EDN','Delta','/pillar-04-delta.html','Explore circulation, resource paths and the ideas behind future nodes.'],
 ['Maps, stars & orientation','Vega','/pillar-09-vega.html','Enter Vega’s world of sensing, navigation and observation.'],
 ['Memory, evidence & learning','Aeon','/pillar-07-aeon.html','Keep sources, stories and discoveries connected.'],
 ['Soil, mulch & foundations','Terra','/pillar-11-terra.html','Begin with the ground and learn through comparison.'],
 ['Protection & gentle boundaries','HALO','/pillar-02-halo.html','Explore protective symbiosis and peaceful thresholds.'],
 ['Original research & essays','Living Library','/library.html','Browse the broader ARK research collection.'],
 ['Field photographs & observations','Unit 1','/field-reports.html','Follow documented observations from the Borrego Springs site.']
];
let worlds = [], systems = [], activeWorld = null;
let passport = {schemaVersion:'1.0',name:'',emblem:'bear',reflections:[],saved:[]};
let remember = false;
const storageKey = 'ark-explorer-passport-v1';
function element(tag, text, className) { const el=document.createElement(tag); if(text!==undefined) el.textContent=text; if(className) el.className=className; return el; }
function link(text,href,className) {const a=element('a',text,className);a.href=href;if(href.startsWith('https:')){a.target='_blank';a.rel='noopener';}return a;}
function action(text,fn,className='button'){const b=element('button',text,className);b.type='button';b.addEventListener('click',fn);return b;}
function announce(message){$('passportStatus').textContent=message;}
function validPassport(v){return v && v.schemaVersion==='1.0' && typeof v.name==='string' && v.name.length<=40 && Object.hasOwn(emblemNames,v.emblem) && ['reflections','saved'].every(k=>Array.isArray(v[k])&&v[k].length<=100&&v[k].every(x=>typeof x==='string'&&/^pillar-\d{2}-[a-z-]+$/.test(x)));}
function persist(){if(remember){try{localStorage.setItem(storageKey,JSON.stringify(passport));}catch{remember=false;$('rememberPassport').checked=false;announce('Browser storage is unavailable. Your passport works for this visit; save a copy to keep it.');}}}
function renderPassport(){
 $('passportName').textContent=passport.name ? 'Welcome, '+passport.name+'.' : 'Everyone is welcome.';
 $('passportEmblem').textContent=emblemNames[passport.emblem];
 $('passportCount').textContent=passport.reflections.length+' learning reflection'+(passport.reflections.length===1?'':'s')+' collected';
 $('visitorName').value=passport.name;
 document.querySelector('input[name="emblem"][value="'+passport.emblem+'"]').checked=true;
 $('rememberPassport').checked=remember;
 const saved=$('savedPaths');saved.replaceChildren();
 if(passport.saved.length){saved.append(element('h3','Your saved doorways'));const row=element('div',undefined,'saved-doors');passport.saved.forEach(id=>{const w=worlds.find(w=>w.id===id);if(w)row.append(link(w.name,'#'+w.id,'button'));});saved.append(row);}
}
try{const saved=JSON.parse(localStorage.getItem(storageKey));if(validPassport(saved)){passport=saved;remember=true;}}catch{/* Private browsing can disable storage. A passport remains optional. */}
$('passportForm').addEventListener('submit',event=>{event.preventDefault();passport.name=$('visitorName').value.trim();passport.emblem=document.querySelector('input[name="emblem"]:checked').value;remember=$('rememberPassport').checked;if(!remember){try{localStorage.removeItem(storageKey);}catch{}}persist();renderPassport();announce(remember?'Passport saved on this device. Nothing was sent to a server.':'Passport ready for this visit only. Nothing was sent to a server.');});
$('forgetPassport').addEventListener('click',()=>{try{localStorage.removeItem(storageKey);}catch{}passport={schemaVersion:'1.0',name:'',emblem:'bear',reflections:[],saved:[]};remember=false;renderPassport();if(activeWorld)showWorld(activeWorld,false);announce('Passport and learning progress cleared from this browser.');});
$('exportPassport').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(passport,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=link('Save','');a.href=url;a.download='ark-explorer-passport.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);announce('Your passport copy is ready. It is a learning record, not a kiosk access credential.');});
$('importPassport').addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;try{if(file.size>20000)throw Error('size');const data=JSON.parse(await file.text());if(!validPassport(data))throw Error('format');passport={schemaVersion:data.schemaVersion,name:data.name,emblem:data.emblem,reflections:[...new Set(data.reflections)],saved:[...new Set(data.saved)]};remember=false;try{localStorage.removeItem(storageKey);}catch{}renderPassport();if(activeWorld)showWorld(activeWorld,false);announce('Passport restored for this visit. Choose “Remember” and update it if you want to keep it on this device.');}catch{announce('That file is not a supported ARK passport. Your existing passport has not changed.');}event.target.value='';});
function showWorld(w,focus=true){
 activeWorld=w;const box=$('worldDetail');box.hidden=false;box.replaceChildren();
 box.append(element('div','PILLAR '+String(w.number).padStart(2,'0')+' · A WORLD WITHIN THE WORLD','eyebrow'));
 const top=element('div',undefined,'detail-heading');const heading=element('h3',w.name);heading.tabIndex=-1;top.append(heading,action('Close',()=>{box.hidden=true;history.replaceState(null,'','#pillars');$('pillarGrid').querySelector('[data-world="'+w.id+'"]').focus();},'button compact'));box.append(top,element('p',w.description,'world-summary'));
 const lesson=element('article',undefined,'lesson');lesson.append(element('h4',w.lesson.title),element('p',w.lesson.text),element('p',w.lesson.prompt,'reflection-prompt'));
 const collected=passport.reflections.includes(w.id);
 lesson.append(action(collected?'Reflection collected ✓':'Mark this reflection explored',()=>{if(!passport.reflections.includes(w.id)){passport.reflections.push(w.id);persist();renderPassport();}showWorld(w,false);},'button primary'));
 box.append(lesson);
 const doors=element('div',undefined,'actions');doors.append(link('Enter the '+w.name+' world ↗',w.url,'button'),link('Browse the Living Library ↗',w.library,'button'));
 if(w.name==='Asherah')doors.append(link('Enter Asherah’s garden chapter ↗',site+'/asherah-world','button'));
 if(['Delta','Asherah','Terra','Exchange','Matrix','Soma','Symbiosis','Vega'].includes(w.name))doors.append(link('Follow the Unit 1 plans ↓','#systems','button'));
 if(w.shopUrl)doors.append(link('Explore the related shop cabinet ↗',w.shopUrl,'button'));
 doors.append(action(passport.saved.includes(w.id)?'Doorway saved ✓':'Save this doorway',()=>{passport.saved=passport.saved.includes(w.id)?passport.saved.filter(x=>x!==w.id):[...passport.saved,w.id];persist();renderPassport();showWorld(w,false);}));box.append(doors,element('p','Learning progress stays in this browser unless you choose to save a passport copy. No account is required.','small-copy'));
 if(focus){box.scrollIntoView({behavior:'instant',block:'start'});heading.focus({preventScroll:true});}
}
function route(){const id=location.hash.slice(1);const world=worlds.find(w=>w.id===id);if(world)showWorld(world);if(id.startsWith('system-')){$('systemFilter').value='all';renderSystems();setTimeout(()=>document.getElementById(id)?.scrollIntoView({block:'start'}),20);}}
function renderWorlds(){
 const orbit=$('pillarOrbit'),grid=$('pillarGrid');orbit.replaceChildren();grid.replaceChildren();
 worlds.slice(1).forEach((w,i)=>{const a=link('','#'+w.id,'orbit-node');const angle=(-90+i*30)*Math.PI/180;a.style.left=(50+40*Math.cos(angle))+'%';a.style.top=(50+40*Math.sin(angle))+'%';a.setAttribute('aria-label','Explore '+w.name);a.append(element('span',String(w.number).padStart(2,'0')),element('strong',w.name));orbit.append(a);});
 worlds.forEach(w=>{const a=link('','#'+w.id,'pillar-card');a.dataset.world=w.id;a.append(element('strong',String(w.number).padStart(2,'0')+' · '+w.name),element('small',w.description),element('span','Open a doorway →','card-hint'));grid.append(a);});
}
function renderDestinations(){destinations.forEach(([eyebrow,title,desc,path,image])=>{const a=link('',site+path,'destination');const img=document.createElement('img');img.src=image;img.alt='';img.loading='lazy';const body=element('div',undefined,'destination-body');body.append(element('span',eyebrow,'eyebrow'),element('h3',title+' ↗'),element('p',desc));a.append(img,body);$('destinations').append(a);});}
function renderReading(){const query=$('librarySearch').value.trim().toLocaleLowerCase();const matches=reading.filter(r=>r.join(' ').toLowerCase().includes(query));$('readingList').replaceChildren();matches.forEach(([title,pillar,path,desc])=>{const a=link('',site+path,'reading-card');a.append(element('small',pillar,'eyebrow'),element('h3',title+' ↗'),element('p',desc));$('readingList').append(a);});$('searchStatus').textContent=matches.length?matches.length+' learning paths':'No matching path. Try another word or browse the Living Library.';}
function renderSystems(){const filter=$('systemFilter').value;const list=$('systemList');list.replaceChildren();systems.filter(r=>filter==='all'||r.status===filter||r.type===filter||(filter==='water-node'&&r.type==='service-interface')).forEach(r=>{const card=element('article',undefined,'system-card');card.id='system-'+r.id;const label=r.status==='documented-existing'?'Documented existing feature':'Proposed · seeking funding';card.append(element('span',label,'status '+(r.status==='documented-existing'?'available':'proposed')),element('small',r.pillar+' · '+r.location,'system-location'),element('h3',r.name),element('p',r.description));const details=element('details');details.append(element('summary','Record and future connection'));details.append(element('p','Record ID: '+r.id,'record-id'),element('p',r.metrics.length?'Planned observations: '+r.metrics.join(', ')+'. No measurements connected.':'No live inventory, activity or service connection.','small-copy'));card.append(details,link('Explore '+r.pillar+' ↓','#'+worlds.find(w=>w.name===r.pillar).id,'textlink'));list.append(card);});}
renderDestinations();renderReading();renderPassport();
$('librarySearch').addEventListener('input',renderReading);$('systemFilter').addEventListener('change',renderSystems);
const toggle=$('menuToggle'),nav=$('nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
async function start(){try{const results=await Promise.all([fetch('worlds.json?v=20261110'),fetch('systems.json?v=20261110')]);if(results.some(r=>!r.ok))throw Error('load');worlds=await results[0].json();systems=(await results[1].json()).records;renderWorlds();renderSystems();renderPassport();route();window.addEventListener('hashchange',route);}catch{$('pillarGrid').append(element('p','The doorway list could not load. Please refresh, or enter the full Pillar directory on the ARK website.'),link('Open all thirteen Pillars ↗',site+'/pillars.html','button'));}}
start();
const shops=[['Explore the ARK shop','Art, books and available offerings','https://thearkinitiative.myshopify.com/'],['Vega’s explorer cabinet','Maps, globes and objects for a curious world. Store listings govern current availability.','https://thearkinitiative.myshopify.com/collections/the-explorers-cabinet'],['Asherah’s garden','Follow the garden’s artwork into its existing shop collection.','https://thearkinitiative.myshopify.com/collections/asherah'],['Delta’s water cabinet','Explore the existing collection beside the circulation lessons.','https://thearkinitiative.myshopify.com/collections/delta-the-water-cabinet']];shops.forEach(([title,desc,url])=>{const a=link('',url,'reading-card');a.append(element('h3',title+' ↗'),element('p',desc));$('shopDoors').append(a);});
async function connectFieldServices(){
 const values=[...document.querySelectorAll('.metrics strong')],labels=[...document.querySelectorAll('.metrics small')];
 const metrics=['soil-moisture','air-temperature','water-flow'];
 const reset=()=>{values.forEach(v=>v.textContent='—');labels.forEach(l=>l.textContent='Not connected · no live reading');};
 reset();
 try{const response=await fetch('connections.json?v=20261110',{cache:'no-store'});if(!response.ok)return;const config=await response.json();
  if(config.mode!=='commissioned')return;
  const registryResponse=await fetch('systems.json?v=20261110');if(!registryResponse.ok)return;const registry=await registryResponse.json();
  const connected=await window.ArkConnections.connect(config,registry.records.map(r=>r.id));
  metrics.forEach((metric,i)=>{const reading=connected.telemetry?.readings.filter(r=>r.metric===metric).sort((a,b)=>Date.parse(b.measuredAt)-Date.parse(a.measuredAt))[0];if(!reading)return;values[i].textContent=reading.value+' '+reading.unit.replace('deg','°');labels[i].textContent=reading.nodeId+' · '+new Date(reading.measuredAt).toLocaleString();const expires=Date.parse(reading.measuredAt)+(Math.min(900,config.maxReadingAgeSeconds||900)*1000)-Date.now();setTimeout(()=>{values[i].textContent='—';labels[i].textContent='Reading expired · refresh to check again';},Math.max(0,expires));});
  const inventoryBox=$('resourceInventory');inventoryBox.replaceChildren();
  if(connected.inventory){inventoryBox.append(element('h3','Connected resource availability'));const list=element('ul');connected.inventory.items.forEach(item=>list.append(element('li',item.name+': '+item.availableQuantity+' '+item.unit)));inventoryBox.append(list,element('p','Updated '+new Date(connected.inventory.updatedAt).toLocaleString()+'. Availability only; no reservation or dispensing control.','small-copy'));setTimeout(()=>inventoryBox.replaceChildren(element('p','Resource inventory has expired. Refresh to check the service.')),Math.min(300,config.maxInventoryAgeSeconds||300)*1000-(Date.now()-Date.parse(connected.inventory.updatedAt)));}
 }catch{reset();}
}
connectFieldServices();
