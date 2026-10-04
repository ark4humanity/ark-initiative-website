/* The Living Garden slice v0.1 — The Ark Initiative
   Plain JS + canvas. No external assets. — Grok */
(function(){
'use strict';
var Q = new URLSearchParams(location.search);
var SPEED = Math.max(0.25, Math.min(8, parseFloat(Q.get('speed')) || 1));
var cv = document.getElementById('c'), cx = cv.getContext('2d');
var $ = function(id){ return document.getElementById(id); };
var W=0,H=0,DPR=1,T=60,BX=0,BY=0,COLS=4,ROWS=5,GAP=6;
var LAND=innerWidth>innerHeight*1.2; if(LAND){COLS=5;ROWS=4;}

/* ---------- plant types ---------- */
var TYPES = {
  bean:     {name:'Bean',     grow:1/12, food:1, seeds:1, tip:'feeds the soil'},
  squash:   {name:'Squash',   grow:1/15, food:2, seeds:1, tip:'shades soil'},
  marigold: {name:'Marigold', grow:1/9,  food:0, seeds:0, tip:'calls helpers'},
  corn:     {name:'Corn',     grow:1/16, food:2, seeds:1, tip:'the tall sister'}
};
/* ---------- days ---------- */
var G2=+(Q.get('g2')||12), G3=5, G5=+(Q.get('g5')||30);
var ST2=25, ST3=8, ST5=45; /* stretch (★★) goals: the easy floor stays, attentive players chase these */
var DAYS = [
 {n:1,title:'First Sprouts', goalText:function(){return 'Goal: harvest 3';}, goal:function(){return S.dayHarvest>=3;}, prog:function(){return S.dayHarvest+'/3';},
  time:0, heat:0.8, pests:0, unlock:'bean', line:'Soil is alive. Give it water and it gives back.', by:'Terra · soil & water'},
 {n:2,title:'Heat Wave', goalText:function(){return 'Goal: harvest '+G2+' ★ · stretch '+ST2+' ★★';},
    sgoal:function(){return S.dayHarvest>=ST2;}, goal:function(){return S.dayHarvest>=G2;}, prog:function(){return Math.min(S.dayHarvest,G2)+'/'+G2;},
  time:50, heat:1.7, pests:0, unlock:'squash', line:'Heat is a signal, not a panic. Shade first.', by:'Vagus · calm under pressure'},
 {n:3,title:'Visitors', goalText:function(){return 'Goal: '+G3+' ladybugs ★ · stretch '+ST3+' ★★';},
    sgoal:function(){return S.dayLady>=ST3;}, goal:function(){return S.dayLady>=G3;}, prog:function(){return Math.min(S.dayLady,G3)+'/'+G3;},
  time:50, heat:1.2, pests:5.5, unlock:'marigold', line:'Aphids aren\u2019t enemies. They\u2019re dinner for a friend.', by:'HALO · sees what arrives'},
 {n:4,title:'Three Sisters', goalText:function(){return 'Goal: 1 corn trio ★ · stretch 2 ★★';},
    sgoal:function(){return S.dayTrio>=2;}, goal:function(){return S.dayTrio>=1;}, prog:function(){return S.dayTrio>=1?'done':'0/1';},
  time:55, heat:1.35, pests:6, unlock:'corn', line:'Corn climbs, bean feeds, squash shades. Each holds the others up.', by:'Symbiosis · mutual thriving'},
 {n:5,title:'Monsoon', goalText:function(){return 'Goal: harvest '+G5+' ★ · stretch '+ST5+' ★★';},
    sgoal:function(){return S.dayHarvest>=ST5;}, goal:function(){return S.dayHarvest>=G5;}, prog:function(){return Math.min(S.dayHarvest,G5)+'/'+G5;},
  time:60, heat:1.5, pests:4.5, unlock:null, line:'The rains change everything. Catch what falls.', by:'Delta · the change layer'}
];
var LOOP = ['Sense','Interpret','Regulate','Circulate','Repair','Adapt','Remember'];
var VISITORS = {bee:'Bee',ladybug:'Ladybug',butterfly:'Painted lady',hummingbird:'Hummingbird',quail:'Quail family',roadrunner:'Roadrunner'};

var S; // state
var SEEDCAP=10;
function fresh(){
  var tiles=[]; for(var i=0;i<COLS*ROWS;i++) tiles.push({m:0.26,s:0.25,p:null});
  return {mode:'title',day:0,t:0,dayT:0,water:6,waterMax:8,seeds:3,harvest:0,dayHarvest:0,dayLady:0,dayTrio:0,
    tiles:tiles,sel:'bean',unlocked:['bean'],stars:[0,0,0,0,0],loop:{},dayLoop:{},visitors:{},withered:0,dayWithered:0,
    fx:[],bugs:[],walkers:[],pestT:3,refillT:0,rain:0,cloud:0,flash:0,rainbow:0,hintStep:0,hintT:0,shown:{},stats:{water:0,lady:0,repair:0,planted:0},
    ladyTotal:0,aphids:0};
}
S=fresh();

/* ---------- audio (tiny synth) ---------- */
var AC=null, muted=false;
function ensureAudio(){ if(!AC){ try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){AC=null;} } if(AC&&AC.state==='suspended')AC.resume(); }
function tone(f,d,type,vol,slide){ if(!AC||muted)return; var o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime;
  o.type=type||'sine'; o.frequency.setValueAtTime(f,t); if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol||0.12,t+0.015); g.gain.exponentialRampToValueAtTime(0.0001,t+d);
  o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t+d+0.05); }
var SFX={
  plant:function(){tone(420,0.12,'triangle',0.12,640);},
  water:function(){tone(900,0.08,'sine',0.08,500);setTimeout(function(){tone(700,0.08,'sine',0.06,380);},60);},
  harvest:function(){[523,659,784].forEach(function(f,i){setTimeout(function(){tone(f,0.18,'triangle',0.11);},i*70);});},
  lady:function(){tone(1200,0.1,'sine',0.07,1600);setTimeout(function(){tone(1500,0.12,'sine',0.06,1900);},90);},
  nope:function(){tone(220,0.12,'sine',0.07,180);},
  star:function(){[523,659,784,1046].forEach(function(f,i){setTimeout(function(){tone(f,0.3,'triangle',0.1);},i*110);});},
  repair:function(){tone(500,0.2,'sine',0.09,900);},
  thunder:function(){ if(!AC||muted)return; var b=AC.createBuffer(1,AC.sampleRate*1.2,AC.sampleRate),d=b.getChannelData(0); for(var i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,2);
    var s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain(); f.type='lowpass'; f.frequency.value=260; g.gain.value=0.35; s.buffer=b; s.connect(f); f.connect(g); g.connect(AC.destination); s.start(); }
};
$('rest').onclick=function(){ if(S.mode==='play'&&D().goal()) endDay(); };
$('mute').onclick=function(){muted=!muted;this.textContent=muted?'🔈':'🔊';};

/* ---------- layout ---------- */
function resize(){
  DPR=Math.min(2,window.devicePixelRatio||1); W=innerWidth; H=innerHeight;
  cv.width=W*DPR; cv.height=H*DPR; cx.setTransform(DPR,0,0,DPR,0,0);
  var top=LAND?100:136, bottom=LAND?86:108;
  T=Math.floor(Math.min((W-24-GAP*(COLS-1))/COLS,(H-top-bottom-GAP*(ROWS-1))/ROWS,110));
  BX=Math.round((W-(T*COLS+GAP*(COLS-1)))/2);
  BY=Math.round(top+Math.max(0,(H-top-bottom-(T*ROWS+GAP*(ROWS-1))))*0.55);
}
addEventListener('resize',resize); resize();
function tileXY(i){ var c=i%COLS,r=(i/COLS)|0; return {x:BX+c*(T+GAP),y:BY+r*(T+GAP),cx:BX+c*(T+GAP)+T/2,cy:BY+r*(T+GAP)+T/2}; }
function nb(i,diag){ var c=i%COLS,r=(i/COLS)|0,out=[];
  for(var dr=-1;dr<=1;dr++)for(var dc=-1;dc<=1;dc++){ if(!dr&&!dc)continue; if(!diag&&dr&&dc)continue;
    var rr=r+dr,cc=c+dc; if(rr>=0&&rr<ROWS&&cc>=0&&cc<COLS)out.push(rr*COLS+cc);} return out; }

/* ---------- helpers ---------- */
function lerp(a,b,t){return a+(b-a)*t;}
function clamp(v,a,b){return v<a?a:v>b?b:v;}
function rgb(c){ if(c[0]==='#'){ var a=parseInt(c.slice(1),16); return [a>>16,(a>>8)&255,a&255]; } var m=c.match(/\d+/g); return [+m[0],+m[1],+m[2]]; }
function mix(c1,c2,t){ var a=rgb(c1),b=rgb(c2); t=clamp(t,0,1);
  return 'rgb('+Math.round(lerp(a[0],b[0],t))+','+Math.round(lerp(a[1],b[1],t))+','+Math.round(lerp(a[2],b[2],t))+')'; }
function toast(txt,gold){ var d=document.createElement('div'); d.className='toast'+(gold?' gold':''); d.textContent=txt; $('toasts').appendChild(d); setTimeout(function(){d.remove();},2500); }
function bump(id){ var e=$(id); if(!e)return; e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); }
function loop(v){ S.loop[v]=1; S.dayLoop[v]=1; }
function D(){ return DAYS[S.day]; }
function plants(){ var n=0; S.tiles.forEach(function(t){if(t.p)n++;}); return n; }
function spark(x,y,col,n,up){ for(var k=0;k<(n||8);k++) S.fx.push({x:x,y:y,vx:(Math.random()-.5)*80,vy:-(Math.random()*70+(up||30)),life:0.8+Math.random()*0.5,t:0,col:col||'#ffd35a',r:2+Math.random()*2.5}); }
function floatText(x,y,txt,col){ S.fx.push({x:x,y:y,vx:0,vy:-38,life:1.1,t:0,txt:txt,col:col||'#3b2a1e'}); }
function meet(k,x,y){ if(S.visitors[k])return; S.visitors[k]=1; toast('New visitor: '+VISITORS[k]+'!',true); SFX.star(); }
function hasNear(i,type,minG,diag){ var r=false; nb(i,diag).forEach(function(j){var p=S.tiles[j].p; if(p&&p.type===type&&p.g>=(minG||0)&&p.wilt<1)r=true;}); return r; }
function isTrio(i){ var p=S.tiles[i].p; return p&&p.type==='corn'&&hasNear(i,'bean',0.3,true)&&hasNear(i,'squash',0.3,true); }

/* ---------- input ---------- */
cv.addEventListener('pointerdown',function(e){
  if(S.mode!=='play')return; ensureAudio();
  var x=e.clientX,y=e.clientY;
  for(var i=0;i<S.tiles.length;i++){ var p=tileXY(i); if(x>=p.x-GAP/2&&x<=p.x+T+GAP/2&&y>=p.y-GAP/2&&y<=p.y+T+GAP/2){ tapTile(i); return; } }
});
function tapTile(i){
  var t=S.tiles[i], c=tileXY(i), p=t.p;
  if(!p){ // plant
    if(S.seeds<=0){ floatText(c.cx,c.cy,'No seeds \u2014 harvest to get more','#8a3b2e'); SFX.nope(); return; }
    var type=S.sel;
    t.p={type:type,g:0.02,wilt:0,aphid:0,ripe:false,born:S.t,sway:Math.random()*6.28,pop:0};
    S.seeds--; S.stats.planted++; bump('pSeeds'); SFX.plant(); spark(c.cx,c.cy+T*0.2,'#a8d27a',7,20);
    if((type==='squash'&&D().heat>1.5)||(type==='marigold'&&D().pests)||type==='corn') loop('Adapt');
    return;
  }
  if(p.aphid>0){ inviteLady(i,false); return; }
  if(p.ripe){ harvestAt(i); return; }
  if(t.m<0.85 || p.wilt>0.25){
    if(S.water<1){ floatText(c.cx,c.cy,'Cistern empty \u2014 wait for it to refill','#8a3b2e'); SFX.nope(); bump('pWater'); return; }
    S.water--; bump('pWater'); S.stats.water++;
    if(t.m<0.3) loop('Sense');
    loop('Regulate');
    if(p.wilt>0.25){ p.wilt=0; S.stats.repair++; loop('Repair'); floatText(c.cx,c.y+8,'Revived!','#3d6123'); SFX.repair(); spark(c.cx,c.cy,'#9be07a',10); }
    else SFX.water();
    t.m=1; nb(i,false).forEach(function(j){ var n=S.tiles[j]; n.m=Math.min(1,n.m+0.2); if(n.p)loop('Circulate'); });
    for(var k=0;k<10;k++) S.fx.push({x:c.cx+(Math.random()-.5)*T*0.6,y:c.y+T*0.1,vx:0,vy:60+Math.random()*60,life:0.5,t:0,col:'#57c0d0',r:2.2,drop:1});
    return;
  }
  p.pop=1; floatText(c.cx,c.y+10,'Happy & growing','#3d6123');
}
function harvestAt(i){
  var t=S.tiles[i],p=t.p,c=tileXY(i),ty=TYPES[p.type];
  var trio=isTrio(i), mult=trio?2:1;
  var food=ty.food*mult, sd=ty.seeds+(trio?1:0);
  S.harvest+=food; S.dayHarvest+=food; var room=SEEDCAP-S.seeds; sd=Math.max(0,Math.min(sd,room)); S.seeds+=sd; bump('pSeeds');
  if(trio){ S.dayTrio++; toast('Three Sisters! Double harvest',true); spark(c.cx,c.cy,'#ffd35a',22,60); }
  floatText(c.cx,c.y+6,'+'+food+' \uD83E\uDDFA'+(sd?'  +'+sd+' \uD83C\uDF31':''),'#3b2a1e');
  spark(c.cx,c.cy,'#ffcf4a',12,50); SFX.harvest(); loop('Circulate');
  p.ripe=false; p.g=0.15; p.h=(p.h||0)+1; // cut and come again
  if(p.h>=4){ // a full life: it goes to seed and returns to the soil, making room
    t.p=null; t.s=Math.min(1,t.s+0.2); if(S.seeds<SEEDCAP){S.seeds++;}
    setTimeout(function(){ floatText(c.cx,c.cy+14,'Went to seed \u00B7 replant!','#6b5a2a'); },350); loop('Remember'); }
}
function inviteLady(i,auto){
  var t=S.tiles[i],p=t.p; if(!p||p.aphid<=0||p.lady)return; var c=tileXY(i);
  p.lady=1; var fromL=Math.random()<.5;
  S.bugs.push({kind:'ladybug',x:fromL?-20:W+20,y:c.cy-T*0.8,tx:c.cx,ty:c.cy-T*0.1,tile:i,phase:0,t:0});
  if(!auto){ loop('Sense'); loop('Interpret'); }
}
function ladyArrived(b){
  var p=S.tiles[b.tile].p; if(p){ p.aphid=0; p.lady=0; }
  S.dayLady++; S.ladyTotal++; S.stats.lady++; SFX.lady(); meet('ladybug');
  var c=tileXY(b.tile); floatText(c.cx,c.y+4,'Ladybug lunch!','#b3322a'); spark(c.cx,c.cy,'#e5533d',6);
  b.phase=1; b.t=0; b.tx=b.x<W/2?W+30:-30; b.ty=b.y-T*1.5;
}

/* ---------- hints (one short instruction at a time) ---------- */
function firstTile(fn){ for(var i=0;i<S.tiles.length;i++) if(fn(S.tiles[i],i)) return i; return -1; }
var CENTER=2*COLS+1;
var HINTS={
 0:[
  {text:'Tap the glowing soil to plant a bean', tile:function(){return S.tiles[CENTER].p?firstTile(function(t){return !t.p;}):CENTER;}, done:function(){return plants()>=1;}},
  {text:'Pale soil means thirsty. Tap the sprout to water it', tile:function(){return firstTile(function(t){return t.p&&t.m<0.85;});}, done:function(){return S.stats.water>=1;}, wait:function(){ var i=firstTile(function(t){return t.p;}); if(i>=0)S.tiles[i].m=Math.min(S.tiles[i].m,0.5); return true; }},
  {text:'Nice! Plant 2 more beans', tile:function(){return firstTile(function(t,i){return !t.p&&nb(i,false).some(function(j){return S.tiles[j].p;});});}, done:function(){return plants()>=3;}},
  {text:'Water them when the soil turns pale', tile:function(){return firstTile(function(t){return t.p&&t.m<0.3;});}, done:function(){return firstTile(function(t){return t.p&&t.p.ripe;})>=0;}},
  {text:'Ripe! Tap it to harvest', tile:function(){return firstTile(function(t){return t.p&&t.p.ripe;});}, done:function(){return S.dayHarvest>=1;}},
  {text:'Harvest gives seeds too. Keep going!', tile:function(){return -1;}, done:function(){return S.hintT>3;}}
 ],
 1:[
  {text:'New seed: squash! Tap bare soil to plant it', el:'seed-squash', done:function(){return S.stats.sq>=1;}},
  {text:'Squash shades the soil next to it', tile:function(){return firstTile(function(t){return t.p&&t.p.type==='squash';});}, done:function(){return S.hintT>3.5;}}
 ],
 2:[
  {text:'Aphids! Tap the plant to invite a ladybug', tile:function(){return firstTile(function(t){return t.p&&t.p.aphid>0&&!t.p.lady;});}, done:function(){return S.dayLady>=1;}, gate:function(){return firstTile(function(t){return t.p&&t.p.aphid>0;})>=0;}},
  {text:'Now plant a marigold. It calls ladybugs for you', el:'seed-marigold', done:function(){return S.stats.mari>=1;}},
  {text:'Bees love it too. They help neighbors grow', tile:function(){return firstTile(function(t){return t.p&&t.p.type==='marigold';});}, done:function(){return S.hintT>3.5;}}
 ],
 3:[
  {text:'Plant corn touching a bean AND a squash', el:'seed-corn', tile:function(){ return firstTile(function(t,i){ return !t.p&&hasNear(i,'bean',0,true)&&hasNear(i,'squash',0,true); }); }, done:function(){return S.stats.corn>=1;}},
  {text:'Sisters touch, even corner to corner. Gold ring = trio', tile:function(){return firstTile(function(t){return t.p&&t.p.type==='corn';});}, done:function(){return S.hintT>4.5;}}
 ],
 4:[
  {text:'Clouds are gathering. Grow now, rain soon', tile:function(){return -1;}, done:function(){return S.dayT>8;}},
  {text:'Rain! The cistern fills. Harvest fast', tile:function(){return -1;}, done:function(){return S.rain>0&&S.hintT>3.5;}, gate:function(){return S.rain>0;}}
 ]
};
function curHint(){ var list=HINTS[S.day]||[]; var h=list[S.hintStep]; return h||null; }
function updateHint(dt){
  if(S.day===0&&S.hintStep>0&&S.hintStep<4&&plants()===0&&S.dayHarvest===0){ S.hintStep=0; HINTS[0].forEach(function(x){x._shown=0;}); }
  var h=curHint(), el=$('hint');
  if(!h){ el.classList.add('hidden'); clearNew(); return; }
  if(h.gate&&!h.gate()){ el.classList.add('hidden'); return; }
  if(!h._shown){ h._shown=1; S.hintT=0; if(h.wait)h.wait(); el.textContent=h.text; el.classList.remove('hidden'); el.style.animation='none'; void el.offsetWidth; el.style.animation='';
    clearNew(); if(h.el){ var b=$(h.el); if(b)b.classList.add('new'); } }
  S.hintT+=dt;
  if(h.done()){ S.hintStep++; }
}
function clearNew(){ document.querySelectorAll('.seed.new').forEach(function(b){b.classList.remove('new');}); }
function hintTile(){ var h=curHint(); if(!h||!h._shown||!h.tile)return -1; if(h.gate&&!h.gate())return -1; return h.tile(); }

/* ---------- tray ---------- */
function buildTray(){
  var tr=$('tray'); tr.innerHTML='';
  S.unlocked.forEach(function(k){
    var b=document.createElement('button'); b.className='seed'+(S.sel===k?' on':''); b.id='seed-'+k;
    var c=document.createElement('canvas'); c.width=88; c.height=88; drawIcon(c,k);
    var l=document.createElement('span'); l.textContent=TYPES[k].name;
    b.appendChild(c); b.appendChild(l);
    b.onclick=function(){ ensureAudio(); S.sel=k; SFX.plant(); document.querySelectorAll('.seed').forEach(function(x){x.classList.toggle('on',x.id==='seed-'+k);}); };
    tr.appendChild(b);
  });
  tr.classList.toggle('hidden', S.unlocked.length<2);
}
function drawIcon(c,k){ var g=c.getContext('2d'); g.clearRect(0,0,88,88); drawPlant(g,{type:k,g:1,wilt:0,ripe:k!=='marigold',sway:0,pop:0},44,78,72,0); }

/* ---------- flow ---------- */
function startDay(d){
  S.day=d; S.dayT=0; S.dayHarvest=0; S.dayLady=0; S.dayTrio=0; S._goalToast=false; $('rest').classList.add('hidden'); S.dayWithered=0; S.dayLoop={}; S.hintStep=0; S.hintT=0;
  (HINTS[d]||[]).forEach(function(h){h._shown=0;});
  var u=DAYS[d].unlock; if(u&&S.unlocked.indexOf(u)<0){ S.unlocked.push(u); S.sel=u; }
  S.seeds=Math.max(S.seeds, d===0?3:4); S.water=Math.max(S.water,5);
  S.rain=0; S.cloud=0; S.rainbow=0; S.pestT=d===2?4:3;
  $('dayName').textContent='Day '+(d+1)+' \u00B7 '+DAYS[d].title;
  $('timebar').classList.toggle('hidden',!DAYS[d].time);
  buildTray(); S.mode='play';
  ['hud'].forEach(function(id){$(id).classList.remove('hidden');});
}
function endDay(){
  var d=D(), won=d.goal(); var sup=d.sgoal&&d.sgoal(); S.stars[S.day]=won?(sup?2:1):0; S.mode='card'; $('rest').classList.add('hidden');
  if(S.seeds>0) loop('Remember');
  $('hint').classList.add('hidden');
  if(won){ SFX.star(); }
  if(S.day>=DAYS.length-1){ showEnd(); return; }
  var nx=DAYS[S.day+1];
  var chips=LOOP.map(function(v){return '<span class="chip'+(S.dayLoop[v]?' on':'')+'">'+v+'</span>';}).join('');
  $('dcDone').innerHTML=(won?'<b>'+(sup?'★★ Stretch goal met!':'★ Day '+(S.day+1)+' goal met!')+'</b>':'Day '+(S.day+1)+' done \u2014 the garden carries on.')+
     (S.seeds>0?'<br><small>You saved '+S.seeds+' seeds for tomorrow.</small>':'')+'<div class="chips">'+chips+'</div>';
  $('dcKicker').textContent='Day '+nx.n+' of 5';
  $('dcTitle').textContent=nx.title;
  $('dcLine').textContent='\u201C'+nx.line+'\u201D';
  $('dcBy').textContent='\u2014 '+nx.by;
  var nw=$('dcNew'); nw.innerHTML='';
  if(nx.unlock){ var c=document.createElement('canvas'); c.width=96;c.height=96; drawIcon(c,nx.unlock); nw.appendChild(c);
    var s=document.createElement('span'); s.innerHTML='New seed: <b>'+TYPES[nx.unlock].name+'</b><br><small>'+TYPES[nx.unlock].tip+'</small>'; nw.appendChild(s); }
  $('dcGo').textContent='Start Day '+nx.n+' \u25B6';
  $('daycard').classList.remove('hidden');
  $('dcGo').focus();
}
$('dcGo').onclick=function(){ ensureAudio(); $('daycard').classList.add('hidden'); startDay(S.day+1); };
$('start').onclick=function(){ ensureAudio(); SFX.plant(); $('title').classList.add('hidden'); S=fresh(); startDay(0); };
$('again').onclick=function(){ ensureAudio(); $('end').classList.add('hidden'); S=fresh(); startDay(0); };
function showEnd(){ S.mode='end';
  var st=S.stars.reduce(function(a,b){return a+b;},0);
  $('stars').innerHTML=S.stars.map(function(s){return s>=2?'★★':(s?'★':'<span class="off">★</span>');}).join('');
  var alive=plants();
  var rank=S.harvest>=260?'Ark Keeper':S.harvest>=160?'Steward':S.harvest>=80?'Gardener':'Seedling';
  var best=0; try{ best=+localStorage.getItem('ark-garden-best-harvest')||0; if(S.harvest>best)localStorage.setItem('ark-garden-best-harvest',S.harvest); }catch(e){}
  $('endStats').innerHTML='Rank: <b>'+rank+'</b>'+(S.harvest>best&&best?' \u00B7 new best!':'')+'<br>'+'<b>'+S.harvest+'</b> harvested \u00B7 <b>'+S.ladyTotal+'</b> ladybugs welcomed \u00B7 <b>'+alive+'</b> plants thriving';
  var v=Object.keys(VISITORS).map(function(k){return S.visitors[k]?VISITORS[k]:'?';});
  $('endVisitors').innerHTML='Visitors met: '+Object.keys(S.visitors).length+'/6 \u2014 '+v.join(' \u00B7 ');
  try{ var best=+localStorage.getItem('ark-garden-best')||0; if(st>best)localStorage.setItem('ark-garden-best',st); }catch(e){}
  $('end').classList.remove('hidden'); $('hud').classList.add('hidden'); $('tray').classList.add('hidden');
}

/* ---------- simulation ---------- */
function update(dt){
  S.t+=dt;
  // ambient fx always
  S.fx=S.fx.filter(function(f){ f.t+=dt; f.x+=f.vx*dt; f.y+=f.vy*dt; if(!f.txt&&!f.drop)f.vy+=40*dt; return f.t<f.life; });
  updateBugs(dt);
  if(S.mode!=='play'){ return; }
  var d=D(); S.dayT+=dt;
  // weather (day 5)
  var heat=d.heat;
  if(S.day===4){
    S.cloud=clamp((S.dayT-4)/8,0,1)*(S.dayT<42?1:clamp(1-(S.dayT-42)/5,0,1));
    var raining=S.dayT>12&&S.dayT<40; S.rain=lerp(S.rain,raining?1:0,dt*1.5);
    if(raining){ heat=0.2; if(Math.random()<dt*0.12){S.flash=1;SFX.thunder();} }
    if(S.dayT>40&&!S.bloomed){ S.bloomed=1; toast('The rain woke the seed bank!',true); }
    if(S.bloomed&&Math.random()<dt*2.2){ var bare=[]; S.tiles.forEach(function(t,i){ if(!t.p)bare.push(i); });
      if(bare.length){ var bi=bare[(Math.random()*bare.length)|0], bc=tileXY(bi); S.tiles[bi].p={type:'marigold',wild:1,g:0.2,wilt:0,aphid:0,ripe:false,sway:Math.random()*6,pop:1}; spark(bc.cx,bc.cy,'#ffe27a',8,30); } }
    if(S.dayT>40){ S.rainbow=Math.min(1,S.rainbow+dt*0.4); if(!S.visitors.roadrunner&&S.dayT>44){ spawnWalker('roadrunner'); } }
  }
  S.flash=Math.max(0,S.flash-dt*3);
  // water refill
  S.refillT+=dt; var rate=S.day===0?2.2:3.2; if(S.rain>0.5)rate=0.8;
  if(S.refillT>=rate){ S.refillT=0; if(S.water<S.waterMax){S.water++;} }
  // pests
  if(d.pests && !(S.day===4&&S.rain>0.5)){
    S.pestT-=dt; if(S.pestT<=0){ S.pestT=d.pests*(0.75+Math.random()*0.5)*(S.day===4&&S.dayT>40?0.6:1); spawnAphid(); }
  }
  // tiles
  var anyPlant=false;
  S.tiles.forEach(function(t,i){
    var p=t.p;
    var shade=(p&&p.type==='squash'&&p.g>0.35)||hasNear(i,'squash',0.35,false);
    var evap=0.034*heat*(shade?0.5:1)*(p?1:0.6);
    t.m=clamp(t.m-evap*dt+S.rain*0.1*dt,0,1);
    if(!p)return; anyPlant=true;
    p.pop=Math.max(0,p.pop-dt*3);
    if(p.type==='bean'&&p.g>0.3){ t.s=Math.min(1,t.s+0.02*dt); nb(i,false).forEach(function(j){S.tiles[j].s=Math.min(1,S.tiles[j].s+0.01*dt);}); }
    if(p.aphid>0){ t.m=Math.max(0,t.m-0.03*dt); p.aphid+=dt;
      if(!p.lady&&hasNear(i,'marigold',0.55,true)&&p.aphid>1.3) inviteLady(i,true);
      if(p.aphid>12) p.wilt+=dt/10; }
    var dry=t.m<0.14;
    if(dry){ p.wilt+=dt/(S.day===0?14:9); } else if(t.m>0.3){ p.wilt=Math.max(0,p.wilt-dt*0.05); }
    if(p.wilt>=1){ // returns to the soil as compost \u2014 nothing is wasted
      var c=tileXY(i); floatText(c.cx,c.y+8,'Back to the soil (compost)','#7a5a3a'); spark(c.cx,c.cy+T*0.2,'#9a7650',8,10);
      t.p=null; t.s=Math.min(1,t.s+0.15); S.withered++; S.dayWithered++; return; }
    if(!p.ripe && p.aphid<=0){
      var ty=TYPES[p.type], wet=t.m>0.3?1:(t.m>0.14?0.45:0);
      var bee=hasNear(i,'marigold',0.55,true)?1.3:1;
      var sis=(p.type==='corn'&&isTrio(i))?1.25:1;
      p.g+=ty.grow*(0.6+0.7*t.s)*wet*bee*sis*(p.wilt>0.3?0.4:1)*dt;
      if(p.g>=1){ p.g=1; if(p.type!=='marigold'){ p.ripe=true; var c2=tileXY(i); spark(c2.cx,c2.cy,'#ffe27a',6,20); } }
    }
    if(p.type==='marigold'&&p.g>0.55&&!p.bee){ p.bee=1; S.bugs.push({kind:'bee',home:i,t:Math.random()*9,x:tileXY(i).cx,y:tileXY(i).cy}); meet('bee'); }
    if(p.type==='squash'&&p.g>0.6&&!S.visitors.butterfly&&Math.random()<dt*0.08){ S.bugs.push({kind:'butterfly',x:-20,y:BY+T,t:0,life:9}); meet('butterfly'); }
  });
  // never stuck: no plants + no seeds \u2192 a gift seed
  if(!anyPlant&&S.seeds<=0){ S.seeds=2; toast('Terra found 2 seeds in the sand'); bump('pSeeds'); }
  // hummingbird: 2+ blooming marigolds, or ripe corn
  if(!S.visitors.hummingbird){ var mg=0,cr=0; S.tiles.forEach(function(t){ if(t.p&&t.p.type==='marigold'&&t.p.g>0.55)mg++; if(t.p&&t.p.type==='corn'&&t.p.g>0.8)cr++; });
    if(mg>=2||cr>=1){ S.bugs.push({kind:'hummingbird',x:W+20,y:BY,t:0,life:8}); meet('hummingbird'); } }
  if(!S.visitors.quail&&plants()>=9){ spawnWalker('quail'); meet('quail'); }
  // tracking for hints
  S.stats.sq=0;S.stats.mari=0;S.stats.corn=0; S.tiles.forEach(function(t){ if(t.p){ if(t.p.type==='squash')S.stats.sq++; if(t.p.type==='marigold')S.stats.mari++; if(t.p.type==='corn')S.stats.corn++; }});
  updateHint(dt);
  // day end
  if(d.time){ $('timefill').style.width=(100*Math.min(1,S.dayT/d.time))+'%'; if(S.dayT>=d.time) endDay(); }
  else if(d.goal()){ S.goalT=(S.goalT||0)+dt; if(S.goalT>1.4){ S.goalT=0; endDay(); } }
  // hud
  $('water').textContent=S.water; $('seeds').textContent=S.seeds; $('harvest').textContent=S.harvest;
  $('pWater').classList.toggle('low',S.water===0);
  $('goal').textContent=d.goalText()+' \u00B7 '+d.prog()+(d.goal()?' \u2713':'');
  if(d.time&&S.mode==='play'){ if(d.goal()&&!S._goalToast){S._goalToast=true; toast('Goal met ★ — keep growing, or rest ▶',true);} $('rest').classList.toggle('hidden',!d.goal()); }
}
function spawnAphid(){
  var c=[]; S.tiles.forEach(function(t,i){ if(t.p&&t.p.g>0.2&&t.p.aphid<=0&&t.p.type!=='marigold')c.push(i); });
  if(!c.length)return; var i=c[(Math.random()*c.length)|0]; S.tiles[i].p.aphid=0.001; S.aphids++;
}
function spawnWalker(kind){ if(S.walkers.some(function(w){return w.kind===kind;}))return;
  S.walkers.push({kind:kind,x:-60,y:BY+ROWS*(T+GAP)+14,t:0}); if(kind==='roadrunner')meet('roadrunner'); }
function updateBugs(dt){
  S.bugs=S.bugs.filter(function(b){
    b.t+=dt;
    if(b.kind==='ladybug'){
      var sp=b.phase?2.2:3.2; b.x=lerp(b.x,b.tx,Math.min(1,dt*sp)); b.y=lerp(b.y,b.ty,Math.min(1,dt*sp));
      if(!b.phase&&Math.hypot(b.x-b.tx,b.y-b.ty)<4) ladyArrived(b);
      return !(b.phase&&(b.x<-20||b.x>W+20));
    }
    if(b.kind==='bee'){ var p=S.tiles[b.home].p; if(!p||p.type!=='marigold')return false;
      var c=tileXY(b.home); b.x=c.cx+Math.cos(b.t*1.3)*T*0.9+Math.sin(b.t*3.1)*8; b.y=c.cy-T*0.2+Math.sin(b.t*1.9)*T*0.6; return true; }
    if(b.kind==='butterfly'){ b.x+=45*dt; b.y=BY+T+Math.sin(b.t*2)*T*0.8; return b.x<W+30; }
    if(b.kind==='hummingbird'){ b.x=lerp(W+20,W*0.55,Math.min(1,b.t/1.5)) - (b.t>6?(b.t-6)*300:0); b.y=BY+T*0.3+Math.sin(b.t*9)*3; return b.t<b.life; }
    return true;
  });
  S.walkers=S.walkers.filter(function(w){ w.t+=dt; w.x+=(w.kind==='roadrunner'?150:40)*dt; return w.x<W+120; });
}

/* ---------- drawing ---------- */
function drawSky(){
  var d=S.mode==='title'?null:D();
  var prog=d&&d.time?clamp(S.dayT/d.time,0,1):0.25;
  var g=cx.createLinearGradient(0,0,0,H);
  var dusk=prog>0.8?(prog-0.8)/0.2:0, cl=S.cloud;
  g.addColorStop(0,mix(mix('#f7b98c','#b98aa8',dusk*0.6),'#8f96a3',cl*0.8));
  g.addColorStop(0.5,mix(mix('#fbe0bf','#f3b58e',dusk*0.5),'#b9bcc0',cl*0.7));
  g.addColorStop(1,mix('#f4d7a8','#c9bfae',cl*0.5));
  cx.fillStyle=g; cx.fillRect(0,0,W,H);
  // sun
  var sx=lerp(W*0.1,W*0.9,prog), sy=H*0.22-Math.sin(prog*Math.PI)*H*0.12;
  cx.globalAlpha=1-cl*0.85; var sg=cx.createRadialGradient(sx,sy,4,sx,sy,70); sg.addColorStop(0,'rgba(255,245,210,.95)'); sg.addColorStop(0.3,'rgba(255,214,140,.6)'); sg.addColorStop(1,'rgba(255,200,120,0)');
  cx.fillStyle=sg; cx.beginPath(); cx.arc(sx,sy,70,0,7); cx.fill(); cx.globalAlpha=1;
  // mountains (Santa Rosas)
  var base=BY-6;
  mtn(base-40,'#c79aa6',0.9,17,40); mtn(base-10,'#b2849a',0.7,11,55); mtn(base+8,'#d7a98c',0.5,7,30);
  // desert floor
  cx.fillStyle=mix('#ecd3a3','#cbbd9f',cl*0.6); cx.fillRect(0,base+8,W,H);
  // ocotillo + creosote
  ocotillo(BX-18,base+30,0.9); ocotillo(W-BX+14,base+50,1.1);
  if(S.rainbow>0){ cx.globalAlpha=S.rainbow*0.45; ['#e57373','#f6b26b','#ffe082','#9ccc65','#64b5f6','#9575cd'].forEach(function(c,k){ cx.strokeStyle=c; cx.lineWidth=6; cx.beginPath(); cx.arc(W*0.5,base+40,W*0.62-k*6,Math.PI*1.05,Math.PI*1.95); cx.stroke(); }); cx.globalAlpha=1; }
  if(cl>0){ for(var k=0;k<5;k++){ var x=((k*W/4)+S.t*8)%(W+160)-80, y=40+k%2*30; cx.fillStyle='rgba(120,120,135,'+(0.5*cl)+')'; blob(x,y,80+k*10,28); } }
}
function mtn(y,col,amp,seed,h){ cx.fillStyle=col; cx.beginPath(); cx.moveTo(0,y+20);
  for(var x=0;x<=W;x+=12){ var v=Math.sin(x*0.013+seed)*0.6+Math.sin(x*0.031+seed*2)*0.3+Math.sin(x*0.07+seed)*0.1; cx.lineTo(x,y-v*h*amp-h*0.4); }
  cx.lineTo(W,H); cx.lineTo(0,H); cx.fill(); }
function blob(x,y,w,h){ cx.beginPath(); cx.ellipse(x,y,w/2,h/2,0,0,7); cx.ellipse(x-w*0.25,y+4,w*0.3,h*0.45,0,0,7); cx.ellipse(x+w*0.28,y+3,w*0.3,h*0.42,0,0,7); cx.fill(); }
function ocotillo(x,y,s){ cx.strokeStyle='#6d5a3e'; cx.lineCap='round'; for(var k=-3;k<=3;k++){ var a=k*0.16+Math.sin(S.t*0.8+k)*0.02; cx.lineWidth=2.2*s;
  cx.beginPath(); cx.moveTo(x,y); cx.quadraticCurveTo(x+Math.sin(a)*30*s,y-40*s,x+Math.sin(a)*52*s,y-78*s); cx.stroke();
  cx.fillStyle='#e0553a'; cx.beginPath(); cx.arc(x+Math.sin(a)*52*s,y-80*s,2.4*s,0,7); cx.fill(); } }

function drawTiles(){
  var ht=hintTile();
  S.tiles.forEach(function(t,i){
    var p=tileXY(i), r=10;
    // adobe bed border
    cx.fillStyle='#b9764e'; rr(p.x-2,p.y+2,T+4,T+4,r+2); cx.fill();
    var soil=mix('#e2bf8a','#6a472c',clamp(t.m,0,1));
    cx.fillStyle=soil; rr(p.x,p.y,T,T,r); cx.fill();
    // soil life speckles
    cx.fillStyle='rgba(255,250,230,'+(0.25*t.s)+')';
    for(var k=0;k<Math.floor(t.s*8);k++){ var sx=p.x+((i*37+k*53)%100)/100*T, sy=p.y+((i*71+k*29)%100)/100*T; cx.beginPath(); cx.arc(sx,sy,1.4,0,7); cx.fill(); }
    // cracks when dry
    if(t.m<0.2){ cx.strokeStyle='rgba(120,80,40,.35)'; cx.lineWidth=1; cx.beginPath(); cx.moveTo(p.x+T*0.2,p.y+T*0.3); cx.lineTo(p.x+T*0.45,p.y+T*0.5); cx.lineTo(p.x+T*0.4,p.y+T*0.8); cx.moveTo(p.x+T*0.45,p.y+T*0.5); cx.lineTo(p.x+T*0.8,p.y+T*0.55); cx.stroke(); }
    // three sisters aura
    if(t.p&&t.p.type==='corn'&&isTrio(i)){ cx.strokeStyle='rgba(255,205,70,'+(0.6+0.3*Math.sin(S.t*4))+')'; cx.lineWidth=3; rr(p.x+2,p.y+2,T-4,T-4,r); cx.stroke(); }
    // hint ring
    if(i===ht){ var pu=(Math.sin(S.t*5)+1)/2; cx.strokeStyle='rgba(255,236,150,'+(0.6+pu*0.4)+')'; cx.lineWidth=3+pu*3; rr(p.x-3-pu*3,p.y-3-pu*3,T+6+pu*6,T+6+pu*6,r+4); cx.stroke();
      if(!t.p){ cx.fillStyle='rgba(255,240,180,'+(0.15+pu*0.2)+')'; rr(p.x,p.y,T,T,r); cx.fill(); } 
}
  });
  // plants, drawn top to bottom so lower rows overlap
  S.tiles.forEach(function(t,i){ if(!t.p)return; var p=tileXY(i);
    drawPlant(cx,t.p,p.cx,p.y+T*0.86,T,S.t);
    if(t.p.aphid>0) drawAphids(p.cx,p.cy,t.p);
    if(t.p.ripe){ var a=0.5+0.5*Math.sin(S.t*4+i); cx.fillStyle='rgba(255,228,120,'+(0.35*a)+')'; cx.beginPath(); cx.arc(p.cx,p.cy,T*0.46,0,7); cx.fill();
      star4(p.x+T*0.82,p.y+T*0.18,4+a*3,'#fff3b0'); }
    if(t.m<0.3&&!t.p.ripe&&t.p.aphid<=0){ // thirsty drop badge
      var bob=Math.sin(S.t*4)*2; cx.fillStyle='rgba(255,247,234,.92)'; cx.beginPath(); cx.arc(p.x+T*0.84,p.y+T*0.16+bob,9,0,7); cx.fill();
      drop(p.x+T*0.84,p.y+T*0.16+bob,5,t.m<0.14?'#d9534f':'#2f9fb1'); }
  });
  if(ht>=0){ var q=tileXY(ht), ay=q.y+T*0.22-Math.abs(Math.sin(S.t*4))*10, ax=q.x+T*0.2; // bouncing pointer, top-left of target
    cx.fillStyle='rgba(255,247,234,.97)'; cx.strokeStyle='#3b2a1e'; cx.lineWidth=2.5; cx.lineJoin='round';
    cx.beginPath(); cx.moveTo(ax,ay); cx.lineTo(ax-10,ay-15); cx.lineTo(ax-4,ay-15); cx.lineTo(ax-4,ay-30); cx.lineTo(ax+4,ay-30); cx.lineTo(ax+4,ay-15); cx.lineTo(ax+10,ay-15); cx.closePath(); cx.fill(); cx.stroke(); }
}
function rr(x,y,w,h,r){ cx.beginPath(); cx.moveTo(x+r,y); cx.arcTo(x+w,y,x+w,y+h,r); cx.arcTo(x+w,y+h,x,y+h,r); cx.arcTo(x,y+h,x,y,r); cx.arcTo(x,y,x+w,y,r); cx.closePath(); }
function drop(x,y,s,col){ cx.fillStyle=col; cx.beginPath(); cx.moveTo(x,y-s*1.4); cx.quadraticCurveTo(x+s,y-s*0.2,x+s*0.9,y+s*0.3); cx.arc(x,y+s*0.3,s*0.9,0,Math.PI); cx.quadraticCurveTo(x-s,y-s*0.2,x,y-s*1.4); cx.fill(); }
function star4(x,y,s,col){ cx.fillStyle=col; cx.beginPath(); cx.moveTo(x,y-s); cx.lineTo(x+s*0.3,y-s*0.3); cx.lineTo(x+s,y); cx.lineTo(x+s*0.3,y+s*0.3); cx.lineTo(x,y+s); cx.lineTo(x-s*0.3,y+s*0.3); cx.lineTo(x-s,y); cx.lineTo(x-s*0.3,y-s*0.3); cx.fill(); }

function drawPlant(g,p,x,y,s,t){
  var gr=clamp(p.g,0,1), w=clamp(p.wilt,0,1), sw=Math.sin(t*1.6+p.sway)*0.04*(1-w);
  var leaf=mix('#7fae4f','#b5a15c',w), dark=mix('#557a35','#8a7443',w);
  var pop=1+p.pop*0.12;
  g.save(); g.translate(x,y); g.scale(pop,pop); g.rotate(sw);
  // shadow
  g.fillStyle='rgba(60,35,15,.18)'; g.beginPath(); g.ellipse(0,2,s*0.28*Math.max(.3,gr),s*0.06,0,0,7); g.fill();
  if(gr<0.14){ // sprout
    var k=gr/0.14; g.strokeStyle=dark; g.lineWidth=2; g.beginPath(); g.moveTo(0,0); g.lineTo(0,-s*0.12*k-3); g.stroke();
    g.fillStyle=leaf; ell(g,-5*k-2,-s*0.12*k-4,5*k+2,3*k+1.5,-0.5); ell(g,5*k+2,-s*0.12*k-4,5*k+2,3*k+1.5,0.5); g.restore(); return; }
  var droop=w*0.9;
  if(p.type==='bean'){
    var h=s*(0.25+0.45*gr); g.strokeStyle=dark; g.lineWidth=2.4; g.beginPath(); g.moveTo(0,0);
    g.bezierCurveTo(s*0.12,-h*0.35,-s*0.12,-h*0.7,0,-h); g.stroke();
    // pole
    g.strokeStyle='#9c7650'; g.lineWidth=2; g.beginPath(); g.moveTo(s*0.2,2); g.lineTo(s*0.2,-h*1.02); g.stroke();
    var n=Math.floor(2+gr*4); for(var k=0;k<n;k++){ var yy=-h*(0.2+0.8*k/n), side=k%2?1:-1;
      g.fillStyle=k%2?leaf:mix(leaf,'#5f8c3c',0.3); ell(g,side*s*0.11,yy+droop*6,s*0.1,s*0.065,side*(0.4+droop)); }
    if(p.ripe||gr>0.85){ g.fillStyle=p.ripe?'#9fca4f':'#86b04a'; for(var j=0;j<3;j++){ g.save(); g.translate((j-1)*s*0.09,-h*(0.35+j*0.18)); g.rotate(0.3*(j-1)); ell(g,0,0,s*0.025,s*0.09,0); g.restore(); } }
  } else if(p.type==='squash'){
    var R=s*(0.08+0.12*gr), n2=Math.floor(2+gr*3);
    g.strokeStyle=dark; g.lineWidth=2; for(var k2=0;k2<n2;k2++){ var a=-Math.PI/2+(k2-(n2-1)/2)*0.7; var lx=Math.cos(a)*R*1.3, ly=Math.sin(a)*R*1.1-R*0.4+droop*R*0.5;
      g.beginPath(); g.moveTo(0,0); g.lineTo(lx,ly); g.stroke(); g.fillStyle=k2%2?leaf:mix(leaf,'#4f7a30',0.35);
      lobe(g,lx,ly,R*(0.8+0.2*(k2%2)),a); }
    if(gr>0.55){ g.fillStyle='#f7c030'; flower(g,R*0.5,-R*0.3,s*0.05,5,'#f7c030','#e8902a'); }
    if(p.ripe){ g.fillStyle='#e8892f'; ell(g,-R*0.5,-s*0.02,s*0.11,s*0.075,0.2); g.fillStyle='#f4b25a'; ell(g,-R*0.55,-s*0.04,s*0.05,s*0.025,0.2); }
  } else if(p.type==='marigold'){
    g.strokeStyle='#8fa585'; g.lineWidth=2; var n3=7; for(var k3=0;k3<n3;k3++){ var a3=-Math.PI/2+(k3-3)*0.28; var L=s*(0.12+0.18*gr);
      g.beginPath(); g.moveTo(0,0); g.quadraticCurveTo(Math.cos(a3)*L*0.5,Math.sin(a3)*L*0.6,Math.cos(a3)*L+Math.sin(t+k3)*1.5,Math.sin(a3)*L+droop*8); g.stroke(); }
    if(gr>0.45){ var fl=Math.floor((gr-0.45)/0.55*5)+1; for(var f=0;f<fl;f++){ var fx=(f-(fl-1)/2)*s*0.1, fy=-s*(0.28+0.1*gr)+Math.abs(f-(fl-1)/2)*s*0.04+Math.sin(t*2+f)*1.5+droop*10;
      g.strokeStyle='#8fa585'; g.lineWidth=1.3; g.beginPath(); g.moveTo(0,-s*0.08); g.lineTo(fx,fy); g.stroke(); flower(g,fx,fy,s*0.055,10,'#ffd51f','#e7a51a'); } }
  } else if(p.type==='corn'){
    var h4=s*(0.3+0.7*gr); g.strokeStyle=mix('#6e9a3c','#a48f4d',w); g.lineWidth=3.2; g.beginPath(); g.moveTo(0,0); g.lineTo(0,-h4); g.stroke();
    var n4=Math.floor(2+gr*5); for(var k4=0;k4<n4;k4++){ var yy4=-h4*(0.15+0.75*k4/n4), sd=k4%2?1:-1;
      g.strokeStyle=k4%2?leaf:dark; g.lineWidth=3; g.beginPath(); g.moveTo(0,yy4); g.quadraticCurveTo(sd*s*0.16,yy4-s*0.1+droop*10,sd*s*0.27,yy4+s*0.02+droop*18); g.stroke(); }
    if(gr>0.8){ g.strokeStyle='#d9b24a'; g.lineWidth=1.5; for(var q=-2;q<=2;q++){ g.beginPath(); g.moveTo(0,-h4); g.lineTo(q*3,-h4-s*0.08); g.stroke(); } }
    if(p.ripe){ g.save(); g.translate(s*0.04,-h4*0.5); g.rotate(0.35); g.fillStyle='#f3cf45'; ell(g,0,0,s*0.035,s*0.1,0); g.fillStyle='#7fae4f'; ell(g,-s*0.03,s*0.02,s*0.025,s*0.09,-0.2); g.restore(); }
  }
  g.restore();
}
function ell(g,x,y,rx,ry,a){ g.beginPath(); g.ellipse(x,y,Math.max(0.5,rx),Math.max(0.5,ry),a||0,0,7); g.fill(); }
function lobe(g,x,y,r,a){ g.beginPath(); for(var k=0;k<=10;k++){ var aa=a+ (k/10)*Math.PI*2, rr2=r*(0.8+0.2*Math.cos(k*Math.PI*0.5*2.5)); g.lineTo(x+Math.cos(aa)*rr2,y+Math.sin(aa)*rr2*0.75); } g.fill(); }
function flower(g,x,y,r,n,col,mid){ g.fillStyle=col; for(var k=0;k<n;k++){ var a=k/n*Math.PI*2; g.beginPath(); g.ellipse(x+Math.cos(a)*r*0.6,y+Math.sin(a)*r*0.6,r*0.5,r*0.22,a,0,7); g.fill(); } g.fillStyle=mid; g.beginPath(); g.arc(x,y,r*0.32,0,7); g.fill(); }
function drawAphids(x,y,p){ var n=4; cx.fillStyle='#9ccf3f'; for(var k=0;k<n;k++){ var a=k*1.7+S.t*0.8; cx.beginPath(); cx.arc(x+Math.cos(a)*T*0.13,y-T*0.05+Math.sin(a)*T*0.1,2.6,0,7); cx.fill(); }
  // gentle attention ping (HALO sense)
  var pu=(S.t*1.5)%1; cx.strokeStyle='rgba(217,119,106,'+(1-pu)*0.8+')'; cx.lineWidth=2; cx.beginPath(); cx.arc(x,y,T*(0.2+pu*0.3),0,7); cx.stroke(); }
function drawBugs(){
  S.bugs.forEach(function(b){
    if(b.kind==='ladybug'){ cx.save(); cx.translate(b.x,b.y); var fl=Math.sin(S.t*40)*0.5+0.5;
      cx.fillStyle='rgba(255,255,255,.55)'; cx.beginPath(); cx.ellipse(-5,-4,5,2.5+fl*2,-0.4,0,7); cx.ellipse(5,-4,5,2.5+fl*2,0.4,0,7); cx.fill();
      cx.fillStyle='#d8392b'; cx.beginPath(); cx.arc(0,0,6.5,0,7); cx.fill(); cx.fillStyle='#222'; cx.beginPath(); cx.arc(0,-5.5,3.2,0,7); cx.fill();
      [[-2.5,0],[2.5,1],[0,3.5]].forEach(function(d){ cx.beginPath(); cx.arc(d[0],d[1],1.3,0,7); cx.fill(); }); cx.restore(); }
    if(b.kind==='bee'){ cx.save(); cx.translate(b.x,b.y); var f2=Math.sin(S.t*50)*0.5+0.5; cx.fillStyle='rgba(255,255,255,.7)'; cx.beginPath(); cx.ellipse(-2,-5,3.5,2+f2*1.5,-0.5,0,7); cx.ellipse(2,-5,3.5,2+f2*1.5,0.5,0,7); cx.fill();
      cx.fillStyle='#f2b632'; cx.beginPath(); cx.ellipse(0,0,6,4,0,0,7); cx.fill(); cx.fillStyle='#3b2a1e'; cx.fillRect(-1.5,-4,2,8); cx.fillRect(2.5,-3.5,1.6,7); cx.restore(); }
    if(b.kind==='butterfly'){ cx.save(); cx.translate(b.x,b.y); var f3=Math.abs(Math.sin(S.t*9)); cx.fillStyle='#e8893a'; cx.beginPath(); cx.ellipse(-5*f3,0,7*f3+1,5,-.3,0,7); cx.ellipse(5*f3,0,7*f3+1,5,.3,0,7); cx.fill(); cx.fillStyle='#3b2a1e'; cx.fillRect(-1,-5,2,10); cx.restore(); }
    if(b.kind==='hummingbird'){ cx.save(); cx.translate(b.x,b.y); cx.fillStyle='#3f9f7a'; cx.beginPath(); cx.ellipse(0,0,9,4.5,-0.3,0,7); cx.fill(); cx.fillStyle='#c2365a'; cx.beginPath(); cx.arc(-6,-2,3,0,7); cx.fill();
      cx.strokeStyle='#3b2a1e'; cx.lineWidth=1.2; cx.beginPath(); cx.moveTo(-8,-2); cx.lineTo(-16,0); cx.stroke(); cx.fillStyle='rgba(200,240,230,.6)'; cx.beginPath(); cx.ellipse(1,-6,7,2+Math.abs(Math.sin(S.t*60))*3,0.4,0,7); cx.fill(); cx.restore(); }
  });
  S.walkers.forEach(function(w){
    if(w.kind==='quail'){ for(var k=0;k<4;k++){ var x=w.x-k*(k?14:0)-(k?10:0), y=w.y+Math.abs(Math.sin(w.t*10+k))*-2, s=k?0.6:1;
      cx.fillStyle='#8a8278'; cx.beginPath(); cx.ellipse(x,y,9*s,6.5*s,0,0,7); cx.fill(); cx.fillStyle='#6e6258'; cx.beginPath(); cx.arc(x+7*s,y-5*s,4*s,0,7); cx.fill();
      if(!k){ cx.strokeStyle='#3b2a1e'; cx.lineWidth=1.5; cx.beginPath(); cx.moveTo(x+7,y-9); cx.quadraticCurveTo(x+10,y-15,x+6,y-15); cx.stroke(); } } }
    if(w.kind==='roadrunner'){ var x2=w.x,y2=w.y-2+Math.abs(Math.sin(w.t*18))*-3; cx.fillStyle='#7b6a55'; cx.beginPath(); cx.ellipse(x2,y2,12,6,-0.15,0,7); cx.fill();
      cx.beginPath(); cx.moveTo(x2-10,y2-2); cx.lineTo(x2-30,y2-10); cx.lineTo(x2-28,y2-4); cx.fill(); cx.beginPath(); cx.arc(x2+10,y2-9,5,0,7); cx.fill();
      cx.fillStyle='#3b2a1e'; cx.beginPath(); cx.moveTo(x2+14,y2-10); cx.lineTo(x2+24,y2-8); cx.lineTo(x2+14,y2-7); cx.fill(); }
  });
}
function drawFx(){
  S.fx.forEach(function(f){ var a=1-f.t/f.life;
    if(f.txt){ cx.globalAlpha=Math.min(1,a*1.6); cx.font='700 14px system-ui'; cx.textAlign='center'; var hw=cx.measureText(f.txt).width/2+6; f.x=clamp(f.x,hw,W-hw); cx.lineWidth=4; cx.strokeStyle='rgba(255,247,234,.9)'; cx.strokeText(f.txt,f.x,f.y); cx.fillStyle=f.col; cx.fillText(f.txt,f.x,f.y); cx.globalAlpha=1; return; }
    cx.globalAlpha=a; cx.fillStyle=f.col; cx.beginPath(); cx.arc(f.x,f.y,f.r*(f.drop?1:a+0.3),0,7); cx.fill(); cx.globalAlpha=1; });
}
function drawRain(){ if(S.rain<0.05)return; cx.strokeStyle='rgba(200,225,240,'+(0.55*S.rain)+')'; cx.lineWidth=1.2; cx.beginPath();
  for(var k=0;k<120*S.rain;k++){ var x=(k*97.3+S.t*60)%W, y=((k*53.1)+S.t*700)%H; cx.moveTo(x,y); cx.lineTo(x-4,y+14); } cx.stroke();
  if(S.flash>0){ cx.fillStyle='rgba(255,255,255,'+S.flash*0.5+')'; cx.fillRect(0,0,W,H); } }
function drawCistern(){ if(S.mode==='title')return;
  var y=BY+ROWS*(T+GAP)+6, x=BX, w=T*COLS+GAP*(COLS-1), h=16;
  cx.fillStyle='rgba(150,90,50,.35)'; rr(x,y,w,h,8); cx.fill();
  var f=S.water/S.waterMax; var wg=cx.createLinearGradient(x,0,x+w,0); wg.addColorStop(0,'#3aa6b8'); wg.addColorStop(1,'#6fd0da');
  cx.fillStyle=wg; if(f>0){ rr(x+2,y+2,Math.max(10,(w-4)*f),h-4,6); cx.fill(); }
  cx.fillStyle='rgba(255,255,255,.35)'; for(var k=1;k<S.waterMax;k++){ cx.fillRect(x+2+(w-4)*k/S.waterMax,y+3,1,h-6); }
  cx.fillStyle='#5a3a24'; cx.font='600 11px system-ui'; cx.textAlign='left'; cx.fillText('Cistern \u00B7 '+S.water+' water \u00B7 refills on its own',x+2,y+h+14); }
function drawForeground(){ var y0=BY+ROWS*(T+GAP)+40; if(y0>H-10)return;
  [[0.08,1],[0.86,1.3],[0.62,0.8],[0.3,0.7]].forEach(function(b,k){ var x=W*b[0], y=Math.min(H-20,y0+30+k*18), s=b[1];
    cx.fillStyle='rgba(120,110,70,.5)'; cx.beginPath(); cx.ellipse(x,y+4,22*s,5*s,0,0,7); cx.fill();
    cx.strokeStyle='#7c8a55'; cx.lineWidth=1.6; for(var j=-3;j<=3;j++){ cx.beginPath(); cx.moveTo(x,y); cx.lineTo(x+j*6*s+Math.sin(S.t+j)*1.5,y-18*s-Math.abs(j)*-2); cx.stroke(); cx.fillStyle='#a3b06a'; cx.beginPath(); cx.arc(x+j*6*s,y-18*s,2.2*s,0,7); cx.fill(); } });
  cx.fillStyle='#c9a47a'; [[0.45,0],[0.72,10],[0.18,24]].forEach(function(r){ cx.beginPath(); cx.ellipse(W*r[0],Math.min(H-12,y0+60+r[1]),9,5,0,0,7); cx.fill(); }); }
function titleScene(){ // decorative garden behind the title card
  if(S._deco)return; S._deco=1;
  var layout={5:'corn',6:'bean',9:'squash',10:'marigold',4:'marigold',7:'squash',13:'bean',14:'corn'};
  Object.keys(layout).forEach(function(k){ S.tiles[k].p={type:layout[k],g:1,wilt:0,aphid:0,ripe:layout[k]!=='marigold',sway:Math.random()*6,pop:0}; S.tiles[k].m=0.8; S.tiles[k].s=0.7; });
  S.bugs.push({kind:'bee',home:10,t:0,x:0,y:0}); S.bugs.push({kind:'bee',home:4,t:3,x:0,y:0});
}

var last=performance.now();
function frame(now){
  var dt=Math.min(0.05,(now-last)/1000)*SPEED; last=now;
  if(S.mode==='title') titleScene();
  update(dt);
  cx.clearRect(0,0,W,H); drawSky(); drawForeground(); drawTiles(); drawCistern(); drawBugs(); drawRain(); drawFx();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
document.addEventListener('visibilitychange',function(){ last=performance.now(); });
window.__garden={get S(){return S;},tap:tapTile,tileXY:tileXY,DAYS:DAYS};
})();
