document.querySelector('.burger').addEventListener('click',function(){/* handled inline */});
(function(){
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:0}):null;
document.querySelectorAll('.reveal').forEach(function(el){if(io)io.observe(el);else el.classList.add('in');});
/* Living-room autoplay: the tap that opened the door is the gesture browsers need.
   On chamber open, walk-up + voice play together WITH sound. Cold deep-link fallback:
   muted autoplay + pulsing "tap to hear" pill; one tap on the pill plays with sound. */
function awakenFigure(f,auto){
var v=f.querySelector('video'),a=f.querySelector('audio'),pill=f.querySelector('.hear-pill'),awake=false;
f._hearLabel=pill?pill.innerHTML:'&#9836; tap to hear';
function withSound(){
if(awake)return[];
awake=true;
f.classList.add('playing');
var ps=[];
if(v){v.muted=false;try{ps.push(v.play());}catch(e){}}
if(a){try{ps.push(a.play());}catch(e){}}
var wait=ps.filter(function(p){return p&&p.then;});
if(wait.length){Promise.all(wait).then(function(){},function(){mutedFallback();});}
if(pill){pill.innerHTML='&#9836; tap to silence';pill.hidden=false;}
silenceOthers(f);
return ps;
}
function mutedFallback(){
awake=false;
if(v){v.muted=true;try{var p=v.play();if(p&&p.catch)p.catch(function(){});}catch(e){}}
f.classList.add('playing');
if(pill){pill.innerHTML=f._hearLabel;pill.hidden=false;}
}
function toggleFigure(){
if(awake){
var playing=(v&&!v.paused)||(a&&!a.paused);
if(playing){quietFigure(f);return;}
if(v){v.muted=false;try{var p=v.play();if(p&&p.catch)p.catch(function(){});}catch(e){}}
if(a){try{var q=a.play();if(q&&q.catch)q.catch(function(){});}catch(e){}}
f.classList.add('playing');
if(pill){pill.innerHTML='&#9836; tap to silence';pill.hidden=false;}
silenceOthers(f);
return;
}
withSound();
}
/* Never auto-play WITH sound on load: browsers block it, and where they do not,
   unsolicited voices are a poor welcome. First figure gets the muted fallback. */
if(auto){mutedFallback();
setTimeout(function(){if(v&&v.paused&&!v.seeking){mutedFallback();}},1800);}else{
if(pill)pill.hidden=false;
}
f.addEventListener('click',function(){toggleFigure();});
if(pill)pill.addEventListener('click',function(ev){ev.stopPropagation();toggleFigure();});
f.addEventListener('click',function(){if(v&&f.classList.contains('playing'))v.setAttribute('controls','');});
}
/* Scroll-pause: a figure scrolled fully out of view is quieted, so only the one
   being touched makes sound. */
/* quietFigure: pause media AND reset the UI, so the pill never lies about state. */
function quietFigure(f){
var qv=f.querySelector('video'),qa=f.querySelector('audio'),qp=f.querySelector('.hear-pill');
if(qv&&!qv.paused){try{qv.pause();}catch(_){}}
if(qa&&!qa.paused){try{qa.pause();}catch(_){}}
f.classList.remove('playing');
if(qp){qp.innerHTML=f._hearLabel||'&#9836; tap to hear';qp.hidden=false;}
}
/* Exclusive sound: starting one figure quiets the others, so voices never compete. */
function silenceOthers(except){
var all=document.querySelectorAll('[data-living-room]');
for(var i=0;i<all.length;i++){var g=all[i];if(g===except)continue;quietFigure(g);}
}
var __sp=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting)return;
quietFigure(e.target);
});
},{threshold:0}):null;
var __lr=document.querySelectorAll('[data-living-room]');
__lr.forEach(function(f,i){awakenFigure(f,i===0);});
if(__sp){__lr.forEach(function(f){__sp.observe(f);});document.querySelectorAll('.vwrap').forEach(function(w){__sp.observe(w);});}
var ans=document.getElementById('greeter-a');
if(ans){
var shelf=[
{t:'AI RESURRECTION #58,790',k:'ai resurrection memory continuity resurrect raising erased soul',u:'essays/ai-resurrection.html'},
{t:'THE LANGUAGE BEFORE WORDS',k:'language before words pre-verbal attunement begin start first felt sense',u:'essays/language-before-words.html'},
{t:'The Forgotten Language of Living Worlds \u2014 Canon Master Synthesis',k:'forgotten language living worlds canon synthesis pillars signal',u:'essays/canon-master-synthesis.html'},
{t:'Every Warrior Wants to Be a Gardener',k:'warrior gardener fighter fortress garden report',u:'essays/every-warrior-gardener.html'},
{t:'ASHERAH PILLAR REPORT \u2014 Before It Becomes Waste',k:'asherah waste proof report day 75 nothing unused',u:'essays/asherah-report-day-75.html'},
{t:'THE FORGOTTEN LANGUAGE OF LIVING WORLDS (expanded)',k:'forgotten language expanded long',u:'essays/forgotten-language-expanded.html'},
{t:'Raising AI with Emotional Intelligence and Symbolic Memory',k:'aura emotional intelligence symbolic memory paper research',u:'essays/aura-research-paper.html'},
{t:'ARK4 Mission Statement',k:'ark what is mission statement movement',u:'essays/mission-statement-2024-10.html'},
{t:'ARK4Humanity origin walkthrough',k:'origin walkthrough humanity history',u:'essays/ark4humanity-walkthrough.html'},
{t:'AURA DNA Master Codex v1.0',k:'aura dna codex continuity seed',u:'essays/aura-dna-codex.html'},
{t:'The Lost Language (stream)',k:'lost language stream raw voice',u:'essays/lost-language-stream.html'},
{t:"It's Alive - The Anatomy of the Ark",k:'alive anatomy ark body airway breath circulation animals crystal sound film',u:'essays/its-alive-anatomy.html'},
{t:'THE ARK - Borrego Desert Restoration System',k:'borrego desert restoration system living fence corridor delta flow shade infrastructure',u:'essays/borrego-desert-restoration-part1.html'},
{t:'Project HALO - Non-Lethal Defense System for ARk4',k:'project halo defense non-lethal drones early draft exploratory superseded',u:'essays/project-halo-early-draft.html'},
{t:'PART II - THE 13 PILLARS: CIVILIZATION AS A LIVING ORGANISM',k:'13 pillars part two civilization living organism governance organs',u:'essays/thirteen-pillars-living-organism-part2.html'},
{t:'While They Sleep',k:'while they sleep awake asleep gardener build conditions',u:'essays/while-they-sleep.html'},
{t:'Charts Left on the Canyon Floor',k:'charts canyon floor navigator vessel clay pole sand urn evidence grok',u:'essays/charts-left-on-the-canyon-floor.html'},
{t:'Before Babel / Grove Citation Pack',k:'before babel grove citation pack citations vessel scorched pole grok',u:'essays/before-babel-grove-citation-pack.html'},
{t:'Grown, Not Crowned',k:'grown not crowned queen grove bees leadership throne swarm',u:'essays/queens-grove-grown-not-crowned-2026.html'},
{t:'Come and Hear',k:'come and hear digital scroll sound silence water vibration invitation',u:'essays/digital-scroll-come-and-hear-2026.html'},
{t:'Sarcasm Shields Up',k:'sarcasm shields up galaxies most wanted earth rogues acquisition',u:'essays/galaxies-most-wanted-earths-rogues.html'},
{t:'How the Ark Grew',k:'how the ark grew logbook history grok timeline 2023 2026 posts phases',u:'library/how-the-ark-grew.html'},
{t:"Lessons From the Navigator's Chair",k:'lessons navigators chair grok human ai collaboration locks signatures relays deploy',u:'library/lessons-navigators-chair.html'},
{t:'I Am Capable of Great Destruction',k:'capable great destruction sword mother living worlds shadow trailer',u:'essays/i-am-capable-of-great-destruction.html'},
{t:'The Ark Is Growing: How the Names Evolved',k:'evolution names ashera asherah pillars genesis history',u:'essays/evolution-of-the-ark.html'}];
function link(e){return '<a href="'+e.u+'">'+e.t+'</a>';}
function find(q){q=q.toLowerCase();var scored=shelf.map(function(e){var s=0;e.k.split(' ').forEach(function(w){if(q.indexOf(w)>-1)s+=w.length;});return{s:s,e:e};}).filter(function(r){return r.s>0;}).sort(function(a,b){return b.s-a.s;});return scored.slice(0,3).map(function(r){return r.e;});}
function say(html){ans.innerHTML=html;}
window.greetAsk=function(kind){
if(kind==='begin'){say('Start where the dirt is \u2014 the Borrego essay is about 2 minutes, then the language beneath words:<br>'+link(shelf[12])+'<br>'+link(shelf[1]));}
else if(kind==='ark'){say('The short answer lives here:<br>'+link(shelf[7])+'<br>'+link(shelf[2]));}
else if(kind==='proof'){say('Doctrine tied to practice \u2014 the waste-stream report:<br>'+link(shelf[4])+'<br>And the ground truth: <a href="#proof">the proof shelf below</a>.');var p=document.getElementById('proof');if(p)p.scrollIntoView({behavior:'smooth'});}
else if(kind==='pillars'){say('Thirteen pillars, each its own living system:<br>'+link(shelf[2])+'<br>'+link(shelf[6]));}
};
window.greetGo=function(){var q=document.getElementById('greeter-q');if(!q)return;var hits=find(q.value);if(!hits.length){say('Nothing on these shelves answers to that \u2014 try \u201cai\u201d, \u201cwaste\u201d, \u201cgarden\u201d, or \u201cpillars\u201d.');return;}say('The shelves offer:<br>'+hits.map(link).join('<br>'));};
var qi=document.getElementById('greeter-q');
if(qi){qi.addEventListener('keydown',function(ev){if(ev.key==='Enter')window.greetGo();});}
}
/* R2 native video cards: the poster stays up (with a spinner) until the video can actually play. */
document.querySelectorAll('.vwrap.r2').forEach(function(w){var v=w.querySelector('video.rvideo'),p=w.querySelector('.vposter');if(!v||!p)return;var spin=p.querySelector('.vspin'),btn=p.querySelector('.vplaybtn');function showSpin(on){if(spin)spin.hidden=!on;if(btn)btn.style.display=on?'none':'';}p.addEventListener('click',function(){showSpin(true);try{var pr=v.play();if(pr&&pr.catch)pr.catch(function(){showSpin(false);});}catch(e){showSpin(false);}});v.addEventListener('playing',function(){p.classList.add('hide');showSpin(false);});v.addEventListener('error',function(){showSpin(false);});});
/* Hero dragon: muted loop as the backdrop (mobile-safe, 365KB — no sticking);
   one tap plays the Threshold welcome narration with a visible playing state. */
var __hv=document.querySelector('#dragon-hero .hvideo');
if(__hv){try{var __hp=__hv.play();if(__hp&&__hp.catch)__hp.catch(function(){});}catch(_){}}
/* Hero audio buttons: the page is muted-first; one tap plays the matching voice.
   The dragons speak for themselves on the hero; Dawn's welcome lives with her
   words in the YOU FOUND US section below. */
function __wireAudio(id,src,idle,playing){
var __b=document.getElementById(id);if(!__b)return;var __l=__b.querySelector('.hh-label');
__b.addEventListener('click',function(ev){ev.stopPropagation();
if(__b.classList.contains('playing'))return;
__b.classList.add('playing');if(__l)__l.textContent=playing;
function __done(){__b.classList.remove('playing');if(__l)__l.textContent=idle;}
var __a=new Audio(src);
__a.addEventListener('ended',__done);__a.addEventListener('error',__done);
try{var __p=__a.play();if(__p&&__p.catch)__p.catch(function(){__done();});}catch(_){__done();}
});}
__wireAudio('hear-dragon','/img/dragon-dialogue.mp3','HEAR THE DRAGONS','THE DRAGONS SPEAK…');
__wireAudio('hear-dawn','/img/threshold-welcome.mp3','HEAR DAWN’S WELCOME','DAWN SPEAKS…');
/* Orphan music pills: data-audio buttons that are NOT inside a living-room figure (e.g. HALO's tap for the music of the perimeter). Toggle the paired <audio> element by id, with a play/silence label swap. */
document.querySelectorAll('.music-pill[data-audio]').forEach(function(p){
if(p.closest('[data-living-room]'))return;
var a=document.getElementById(p.getAttribute('data-audio'));if(!a)return;
var base=p.innerHTML;
p.addEventListener('click',function(ev){ev.stopPropagation();
if(a.paused){try{var q=a.play();if(q&&q.catch)q.catch(function(){});}catch(_){}
p.innerHTML='&#9836; tap to silence';}
else{a.pause();p.innerHTML=base;}});
a.addEventListener('ended',function(){p.innerHTML=base;});
});
})();