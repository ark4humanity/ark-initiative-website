var kd=0,qh=1,Vd=2;var Ko=1,Wd=2,Zr=3,Ss=0,Jt=1,Pt=2,Wn=0,$r=1,at=2,Yh=3,Zh=4,Xd=5;var Xs=100,qd=101,Yd=102,Zd=103,$d=104,Jd=200,Kd=201,Qd=202,jd=203,$h=204,Jh=205,ef=206,tf=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,ol=0,al=1,ll=2,Lr=3,cl=4,hl=5,ul=6,dl=7,Kh=0,hf=1,uf=2,hi=0,Qo=1,jo=2,ea=3,qs=4,ta=5,na=6,ia=7;var Qh=300,bs=301,Ys=302,Jr=303,zl=304,sa=306,Mi=1e3,vi=1001,fl=1002,an=1003,df=1004;var ra=1005;var hn=1006,Gl=1007;var Es=1008;var En=1009,jh=1010,eu=1011,Kr=1012,kl=1013,ui=1014,Xn=1015,un=1016,Vl=1017,Wl=1018,Qr=1020,tu=35902,nu=35899,iu=1021,su=1022,qn=1023,Si=1026,Ts=1027,Xl=1028,ql=1029,ws=1030,Yl=1031;var Zl=1033,oa=33776,aa=33777,la=33778,ca=33779,$l=35840,Jl=35841,Kl=35842,Ql=35843,jl=36196,ec=37492,tc=37496,nc=37488,ic=37489,ha=37490,sc=37491,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,xc=37820,_c=37821,yc=36492,vc=36494,Mc=36495,Sc=36283,bc=36284,ua=36285,Ec=36286;var Ro=2300,pl=2301,il=2302,Fh=2303,Bh=2400,Oh=2401,Hh=2402;var ff=3200;var Tc=0,pf=1,Ji="",kt="srgb",Co="srgb-linear",Po="linear",_t="srgb";var sl=7680;var mf=519,gf=512,xf=513,_f=514,wc=515,yf=516,vf=517,Ac=518,Mf=519,ru=35044;var ou="300 es",ai=2e3,Dr=2001;function am(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){let i=Nr("canvas");return i.style.display="block",i}var ld={},Ur=null;function Io(...i){let e="THREE."+i.shift();Ur?Ur("log",e,...i):console.log(e,...i)}function bf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=bf(i);let e="THREE."+i.shift();if(Ur)Ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=bf(i);let e="THREE."+i.shift();if(Ur)Ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Os(...i){let e=i.join(" ");e in ld||(ld[e]=!0,ke(...i))}function Ef(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Tf={[ol]:al,[ll]:ul,[cl]:dl,[Lr]:hl,[al]:ol,[ul]:ll,[dl]:cl,[hl]:Lr},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,Eo=Math.PI/180,Fr=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hm(i,e,t){return i!==e?(t-i)/(e-i):0}function To(i,e,t){return(1-t)*i+t*e}function um(i,e,t,n){return To(i,e,1-Math.exp(-t*n))}function dm(i,e=1){return e-Math.abs(au(i,e*2)-e)}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gm(i,e){return i+Math.random()*(e-i)}function xm(i){return i*(.5-Math.random())}function _m(i){i!==void 0&&(cd=i);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(i){return i*Eo}function vm(i){return i*Fr}function Mm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Em(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wt={DEG2RAD:Eo,RAD2DEG:Fr,generateUUID:Xi,clamp:Je,euclideanModulo:au,mapLinear:cm,inverseLerp:hm,lerp:To,damp:um,pingpong:dm,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:xm,seededRandom:_m,degToRad:ym,radToDeg:vm,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:bm,setQuaternionFromProperEuler:Em,normalize:Tt,denormalize:oi},fu=class fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;var ge=fu,bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,a=Math.sin(a*S)/A,l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a}else{l=l*p+h*a,c=c*p+f*a,u=u*p+g*a,d=d*p+y*a;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var I=pu,uh=new I,hd=new bn,mu=class mu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],A=s[4],M=s[7],b=s[2],v=s[5],R=s[8];return r[0]=o*y+a*S+l*b,r[3]=o*m+a*A+l*v,r[6]=o*p+a*M+l*R,r[1]=c*y+u*S+d*b,r[4]=c*m+u*A+d*v,r[7]=c*p+u*M+d*R,r[2]=h*y+f*S+g*b,r[5]=h*m+f*A+g*v,r[8]=h*p+f*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*n)*y,e[2]=(a*n-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dh.makeScale(e,t)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var Ye=mu,dh=new Ye,ud=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let i={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Co]:{primaries:e,whitePoint:n,transfer:Po,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var nt=Tm();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var dr,ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Nr("canvas")),dr.width=e.width,dr.height=e.height;let s=dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wm=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fh(s[o].image)):r.push(fh(s[o]))}else r=fh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Am=0,ph=new I,_n=class i extends bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=hn,o=Es,a=qn,l=En,c=i.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Xi(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Qh;_n.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(f+1)/2,b=(p+1)/2,v=(u+h)/4,R=(d+y)/4,x=(g+m)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=v/n,r=R/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=v/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Vt=gu,gl=class extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new _n(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lo=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xl=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Hl=class Hl{constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,y,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),hs.crossVectors(n,In),hs.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),hs.crossVectors(n,In)),hs.normalize(),La.crossVectors(In,hs),s[0]=hs.x,s[4]=La.x,s[8]=In.x,s[1]=hs.y,s[5]=La.y,s[9]=In.y,s[2]=hs.z,s[6]=La.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],A=n[7],M=n[11],b=n[15],v=s[0],R=s[4],x=s[8],T=s[12],P=s[1],U=s[5],O=s[9],X=s[13],N=s[2],W=s[6],Z=s[10],z=s[14],ne=s[3],Y=s[7],$=s[11],te=s[15];return r[0]=o*v+a*P+l*N+c*ne,r[4]=o*R+a*U+l*W+c*Y,r[8]=o*x+a*O+l*Z+c*$,r[12]=o*T+a*X+l*z+c*te,r[1]=u*v+d*P+h*N+f*ne,r[5]=u*R+d*U+h*W+f*Y,r[9]=u*x+d*O+h*Z+f*$,r[13]=u*T+d*X+h*z+f*te,r[2]=g*v+y*P+m*N+p*ne,r[6]=g*R+y*U+m*W+p*Y,r[10]=g*x+y*O+m*Z+p*$,r[14]=g*T+y*X+m*z+p*te,r[3]=S*v+A*P+M*N+b*ne,r[7]=S*R+A*U+M*W+b*Y,r[11]=S*x+A*O+M*Z+b*$,r[15]=S*T+A*X+M*z+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*h,A=a*f-c*d,M=a*h-l*d,b=o*f-c*u,v=o*h-l*u,R=o*d-a*u;return t*(y*S-m*A+p*M)-n*(g*S-m*b+p*v)+s*(g*A-y*b+p*R)-r*(g*M-y*v+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-n*o,A=t*l-s*o,M=t*c-r*o,b=n*l-s*a,v=n*c-r*a,R=s*c-r*l,x=u*y-d*g,T=u*m-h*g,P=u*p-f*g,U=d*m-h*y,O=d*p-f*y,X=h*p-f*m,N=S*X-A*O+M*U+b*P-v*T+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(a*X-l*O+c*U)*W,e[1]=(s*O-n*X-r*U)*W,e[2]=(y*R-m*v+p*b)*W,e[3]=(h*v-d*R-f*b)*W,e[4]=(l*P-o*X-c*T)*W,e[5]=(t*X-s*P+r*T)*W,e[6]=(m*M-g*R-p*A)*W,e[7]=(u*R-h*M+f*A)*W,e[8]=(o*O-a*P+c*x)*W,e[9]=(n*P-t*O-r*x)*W,e[10]=(g*v-y*M+p*S)*W,e[11]=(d*M-u*v-f*S)*W,e[12]=(a*T-o*U-l*x)*W,e[13]=(t*U-n*T+s*x)*W,e[14]=(y*A-g*b-m*S)*W,e[15]=(u*b-d*A+h*S)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,y=o*u,m=o*d,p=a*d,S=l*c,A=l*u,M=l*d,b=n.x,v=n.y,R=n.z;return s[0]=(1-(y+p))*b,s[1]=(f+M)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(f-M)*v,s[5]=(1-(h+p))*v,s[6]=(m+S)*v,s[7]=0,s[8]=(g+A)*R,s[9]=(m-S)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=fr.set(s[0],s[1],s[2]).length(),a=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,u=1/a,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ai,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===ai)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ai,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===ai)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Hl.prototype.isMatrix4=!0;var it=Hl,fr=new I,ni=new it,Rm=new I(0,0,0),Cm=new I(1,1,1),hs=new I,La=new I,In=new I,fd=new it,pd=new bn,Yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pm=0,md=new I,pr=new bn,Hi=new it,Da=new I,mo=new I,Im=new I,Lm=new bn,gd=new I(1,0,0),xd=new I(0,1,0),_d=new I(0,0,1),yd={type:"added"},Dm={type:"removed"},mr={type:"childadded",child:null},mh={type:"childremoved",child:null},qt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Yi,n=new bn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ye}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(mo,Da,this.up):Hi.lookAt(Da,mo,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Hi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),mr.child=e,this.dispatchEvent(mr),mr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),mh.child=e,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new I(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Na={h:0,s:0,l:0};function gh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=au(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gh(o,r,e+1/3),this.g=gh(o,r,e),this.b=gh(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.workingToColorSpace(xn.copy(this),e),Math.round(Je(xn.r*255,0,255))*65536+Math.round(Je(xn.g*255,0,255))*256+Math.round(Je(xn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=kt){nt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Na);let n=To(us.h,Na.h,t),s=To(us.s,Na.s,t),r=To(us.l,Na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Te;Te.NAMES=wf;var Zi=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Do=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new I,zi=new I,xh=new I,Gi=new I,gr=new I,xr=new I,vd=new I,_h=new I,yh=new I,vh=new I,Mh=new Vt,Sh=new Vt,bh=new Vt,Wi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),zi.subVectors(n,t),xh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(zi),l=ii.dot(xh),c=zi.dot(zi),u=zi.dot(xh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mh.setScalar(0),Sh.setScalar(0),bh.setScalar(0),Mh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),bh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mh,r.x),o.addScaledVector(Sh,r.y),o.addScaledVector(bh,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),zi.subVectors(e,t),ii.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ii.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),xr.subVectors(r,n),_h.subVectors(e,n);let l=gr.dot(_h),c=xr.dot(_h);if(l<=0&&c<=0)return t.copy(n);yh.subVectors(e,s);let u=gr.dot(yh),d=xr.dot(yh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(gr,o);vh.subVectors(e,r);let f=gr.dot(vh),g=xr.dot(vh);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(xr,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return vd.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(vd,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Fa.subVectors(this.max,go),_r.subVectors(e.a,go),yr.subVectors(e.b,go),vr.subVectors(e.c,go),ds.subVectors(yr,_r),fs.subVectors(vr,yr),Ns.subVectors(_r,vr);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-Ns.z,Ns.y,ds.z,0,-ds.x,fs.z,0,-fs.x,Ns.z,0,-Ns.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-Ns.y,Ns.x,0];return!Eh(t,_r,yr,vr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,_r,yr,vr,Fa))?!1:(Ba.crossVectors(ds,fs),t=[Ba.x,Ba.y,Ba.z],Eh(t,_r,yr,vr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new I,new I,new I,new I,new I,new I,new I,new I],si=new I,Ua=new Ei,_r=new I,yr=new I,vr=new I,ds=new I,fs=new I,Ns=new I,go=new I,Fa=new I,Ba=new I,Us=new I;function Eh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Us.fromArray(i,r);let a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Qt=new I,Oa=new ge,Um=0,pt=class extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var No=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Uo=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fm=new Ei,xo=new I,Th=new I,$i=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Th)),this.expandByPoint(xo.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bm=0,zn=new it,wh=new qt,Mr=new I,Ln=new Ei,_o=new Ei,on=new I,lt=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(am(e)?Uo:No)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Ln.min,_o.min),Ln.expandByPoint(on),on.addVectors(Ln.max,_o.max),Ln.expandByPoint(on)):(Ln.expandByPoint(_o.min),Ln.expandByPoint(_o.max))}Ln.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),on.add(Mr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,u=new I,d=new I,h=new ge,f=new ge,g=new ge,y=new I,m=new I;function p(x,T,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[x].add(y),a[T].add(y),a[P].add(y),l[x].add(m),l[T].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,T=S.length;x<T;++x){let P=S[x],U=P.start,O=P.count;for(let X=U,N=U+O;X<N;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let A=new I,M=new I,b=new I,v=new I;function R(x){b.fromBufferAttribute(s,x),v.copy(b);let T=a[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(v,T);let U=M.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,U)}for(let x=0,T=S.length;x<T;++x){let P=S[x],U=P.start,O=P.count;for(let X=U,N=U+O;X<N;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new pt(h,u,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Sn=new I,zr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ah=new I,Om=new I,Hm=new Ye,ri=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ah.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ah),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hm.getNormalMatrix(e),s=this.coplanarPoint(Ah).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zm=0,Ti=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=$r,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Jh,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wt=class extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,yo=new I,br=new I,Er=new I,Tr=new ge,vo=new ge,Af=new it,Ha=new I,Mo=new I,za=new I,Md=new ge,Rh=new ge,Sd=new ge,Rt=class extends qt{constructor(e=new wt){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new zr(n,3,0,!1)),Sr.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ga(Ha.set(-.5,-.5,0),Er,o,br,s,r),Ga(Mo.set(.5,-.5,0),Er,o,br,s,r),Ga(za.set(.5,.5,0),Er,o,br,s,r),Md.set(0,0),Rh.set(1,0),Sd.set(1,1);let a=e.ray.intersectTriangle(Ha,Mo,za,!1,yo);if(a===null&&(Ga(Mo.set(-.5,.5,0),Er,o,br,s,r),Rh.set(0,1),a=e.ray.intersectTriangle(Ha,za,Mo,!1,yo),a===null))return;let l=e.ray.origin.distanceTo(yo);l<e.near||l>e.far||t.push({distance:l,point:yo.clone(),uv:Wi.getInterpolation(yo,Ha,Mo,za,Md,Rh,Sd,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ga(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vo.x=r*Tr.x-s*Tr.y,vo.y=s*Tr.x+r*Tr.y):vo.copy(Tr),i.copy(e),i.x+=vo.x,i.y+=vo.y,i.applyMatrix4(Af)}var Vi=new I,Ch=new I,ka=new I,Va=new I,Gr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ch.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Va.copy(this.origin).sub(Ch);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=Va.dot(this.direction),l=-Va.dot(ka),c=Va.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ch).addScaledVector(ka,h),f}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,S=n.y-o.y,A=n.z-o.z,M=Math.abs(l),b=Math.abs(c),v=Math.abs(u),R,x,T,P,U,O,X,N,W,Z,z,ne;if(M>=b&&M>=v?(T=l,O=d,W=g,ne=p,l>=0?(R=c,x=u,P=h,U=f,X=y,N=m,Z=S,z=A):(R=u,x=c,P=f,U=h,X=m,N=y,Z=A,z=S)):b>=v?(T=c,O=h,W=y,ne=S,c>=0?(R=u,x=l,P=f,U=d,X=m,N=g,Z=A,z=p):(R=l,x=u,P=d,U=f,X=g,N=m,Z=p,z=A)):(T=u,O=f,W=m,ne=A,u>=0?(R=l,x=c,P=d,U=h,X=g,N=y,Z=p,z=S):(R=c,x=l,P=h,U=d,X=y,N=g,Z=S,z=p)),T===0)return null;let Y=R/T,$=x/T,te=1/T,pe=P-Y*O,ue=U-$*O,Me=X-Y*W,Ee=N-$*W,Ue=Z-Y*ne,ie=z-$*ne,oe=Ue*Ee-ie*Me,xe=pe*ie-ue*Ue,Ne=Me*ue-Ee*pe;if(s){if(oe<0||xe<0||Ne<0)return null}else if((oe<0||xe<0||Ne<0)&&(oe>0||xe>0||Ne>0))return null;let ve=oe+xe+Ne;if(ve===0)return null;let ze=te*(oe*O+xe*W+Ne*ne);return(ve>0?ze<0:ze>0)?null:this.at(ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bd=new it,Fs=new Gr,Wa=new $i,Ed=new I,Xa=new I,qa=new I,Ya=new I,Ph=new I,Za=new I,Td=new I,$a=new I,le=class extends qt{constructor(e=new lt,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Ph.fromBufferAttribute(d,e),o?Za.addScaledVector(Ph,u):Za.addScaledVector(Ph.sub(t),u))}t.add(Za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(Wa.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Wa,Ed)===null||Fs.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(bd.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=A;M<b;M+=3){let v=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);s=Ja(this,p,e,n,c,u,d,v,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Ja(this,o,e,n,c,u,d,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=A;M<b;M+=3){let v=M,R=M+1,x=M+2;s=Ja(this,p,e,n,c,u,d,v,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,A=m+1,M=m+2;s=Ja(this,o,e,n,c,u,d,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gm(i,e,t,n,s,r,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ss,a),l===null)return null;$a.copy(a),$a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:i}}function Ja(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xa),i.getVertexPosition(l,qa),i.getVertexPosition(c,Ya);let u=Gm(i,e,t,n,Xa,qa,Ya,Td);if(u){let d=new I;Wi.getBarycoord(Td,Xa,qa,Ya,d),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,l,c,d,new ge)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,l,c,d,new ge)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};Wi.getNormal(Xa,qa,Ya,h.normal),u.face=h,u.barycoord=d}return u}var Bo=class extends _n{constructor(e=null,t=1,n=1,s,r,o,a,l,c=an,u=an,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new it,wd=new it,Ka=[],Ad=new Ei,km=new it,So=new le,bo=new $i,Dn=class extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,km)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Ad.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),bo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),wd.multiplyMatrices(n,wr),So.matrixWorld=wd,So.raycast(e,Ka);for(let o=0,a=Ka.length;o<a;o++){let l=Ka[o];l.instanceId=r,l.object=this,t.push(l)}Ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bo(new Float32Array(s*this.count),s,this.count,Xl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new $i,Vm=new ge(.5,.5),Qa=new I,Vr=class{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,p-g,b-S).normalize(),s[1].setComponents(c+o,f+u,p+g,b+S).normalize(),s[2].setComponents(c+a,f+d,p+y,b+A).normalize(),s[3].setComponents(c-a,f-d,p-y,b-A).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,b-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,b-M).normalize(),t===ai)s[5].setComponents(c+l,f+h,p+m,b+M).normalize();else if(t===Dr)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=Vm.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rd=new it,zh=new Gr,ja=new $i,el=new I,li=class extends qt{constructor(e=new lt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Rd.copy(s).invert(),zh.copy(e.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,y=f;g<y;g++){let m=c.getX(g);el.fromBufferAttribute(d,m),Cd(el,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,y=f;g<y;g++)el.fromBufferAttribute(d,g),Cd(el,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(i,e,t,n,s,r,o){let a=zh.distanceSqToPoint(i);if(a<t){let l=new I;zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Oo=class extends _n{constructor(e=[],t=bs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gn=class extends _n{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends _n{constructor(e,t,n=ui,s,r,o,a=an,l=an,c,u=Si,d=1){if(u!==Si&&u!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_l=class extends ms{constructor(e,t=ui,n=bs,s,r,o=an,a=an,l,c=Si){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ho=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ut=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function g(y,m,p,S,A,M,b,v,R,x,T){let P=M/R,U=b/x,O=M/2,X=b/2,N=v/2,W=R+1,Z=x+1,z=0,ne=0,Y=new I;for(let $=0;$<Z;$++){let te=$*U-X;for(let pe=0;pe<W;pe++){let ue=pe*P-O;Y[y]=ue*S,Y[m]=te*A,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=v>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(pe/R),d.push(1-$/x),z+=1}}for(let $=0;$<x;$++)for(let te=0;te<R;te++){let pe=h+te+W*$,ue=h+te+W*($+1),Me=h+(te+1)+W*($+1),Ee=h+(te+1)+W*$;l.push(pe,ue,Ee),l.push(ue,Me,Ee),ne+=6}a.addGroup(f,ne,T),f+=ne,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},zo=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=n*2+r,y=s+1,m=new I,p=new I;for(let S=0;S<=g;S++){let A=0,M=0,b=0,v=0;if(S<=n){let T=S/n,P=T*Math.PI/2;M=-u-e*Math.cos(P),b=e*Math.sin(P),v=-e*Math.cos(P),A=T*d}else if(S<=n+r){let T=(S-n)/r;M=-u+T*t,b=e,v=0,A=d+T*h}else{let T=(S-n-r)/n,P=T*Math.PI/2;M=u+e*Math.sin(P),b=e*Math.cos(P),v=e*Math.sin(P),A=d+h+T*d}let R=Math.max(0,Math.min(1,A/f)),x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let T=0;T<=s;T++){let P=T/s,U=P*Math.PI*2,O=Math.sin(U),X=Math.cos(U);p.x=-b*X,p.y=M,p.z=b*O,a.push(p.x,p.y,p.z),m.set(-b*X,v,b*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+x,R)}if(S>0){let T=(S-1)*y;for(let P=0;P<s;P++){let U=T+P,O=T+P+1,X=S*y+P,N=S*y+P+1;o.push(U,O,X),o.push(O,N,X)}}}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},wi=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=n/2,p=0;S(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function S(){let M=new I,b=new I,v=0,R=(t-e)/n;for(let x=0;x<=r;x++){let T=[],P=x/r,U=P*(t-e)+e;for(let O=0;O<=s;O++){let X=O/s,N=X*l+a,W=Math.sin(N),Z=Math.cos(N);b.x=U*W,b.y=-P*n+m,b.z=U*Z,d.push(b.x,b.y,b.z),M.set(W,R,Z).normalize(),h.push(M.x,M.y,M.z),f.push(X,1-P),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let P=y[T][x],U=y[T+1][x],O=y[T+1][x+1],X=y[T][x+1];(e>0||T!==0)&&(u.push(P,U,X),v+=3),(t>0||T!==r-1)&&(u.push(U,O,X),v+=3)}c.addGroup(p,v,0),p+=v}function A(M){let b=g,v=new ge,R=new I,x=0,T=M===!0?e:t,P=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let N=O/s*l+a,W=Math.cos(N),Z=Math.sin(N);R.x=T*Z,R.y=m*P,R.z=T*W,d.push(R.x,R.y,R.z),h.push(0,P,0),v.x=W*.5+.5,v.y=Z*.5*P+.5,f.push(v.x,v.y),g++}for(let O=0;O<s;O++){let X=b+O,N=U+O;M===!0?u.push(N,N+1,X):u.push(N+1,N,X),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ai=class i extends yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Go=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let A=new I,M=new I,b=new I;for(let v=0;v<t.length;v+=3)f(t[v+0],A),f(t[v+1],M),f(t[v+2],b),l(A,M,b,S)}function l(S,A,M,b){let v=b+1,R=[];for(let x=0;x<=v;x++){R[x]=[];let T=S.clone().lerp(M,x/v),P=A.clone().lerp(M,x/v),U=v-x;for(let O=0;O<=U;O++)O===0&&x===v?R[x][O]=T:R[x][O]=T.clone().lerp(P,O/U)}for(let x=0;x<v;x++)for(let T=0;T<2*(v-x)-1;T++){let P=Math.floor(T/2);T%2===0?(h(R[x][P+1]),h(R[x+1][P]),h(R[x][P])):(h(R[x][P+1]),h(R[x+1][P+1]),h(R[x+1][P]))}}function c(S){let A=new I;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(S),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function u(){let S=new I;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];let M=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;o.push(M,1-b)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let A=o[S+0],M=o[S+2],b=o[S+4],v=Math.max(A,M,b),R=Math.min(A,M,b);v>.9&&R<.1&&(A<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),b<.2&&(o[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,A){let M=S*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function g(){let S=new I,A=new I,M=new I,b=new I,v=new ge,R=new ge,x=new ge;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),v.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),x.set(o[P+4],o[P+5]),b.copy(S).add(A).add(M).divideScalar(3);let U=m(b);y(v,P+0,S,U),y(R,P+2,A,U),y(x,P+4,M,U)}}function y(S,A,M,b){b<0&&S.x===1&&(o[A]=S.x-1),M.x===0&&M.z===0&&(o[A]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new it;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ko=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yl=class extends ko{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Pd=new I,Id=new I,Ih=new lu,Lh=new lu,Dh=new lu,Vn=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Id.subVectors(s[0],s[1]).add(s[0]),c=Id);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ih.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,m),Lh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,m),Dh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Lh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Dh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ih.calc(l),Lh.calc(l),Dh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ld(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Wm(i,e){let t=1-i;return t*t*e}function Xm(i,e){return 2*(1-i)*i*e}function qm(i,e){return i*i*e}function wo(i,e,t,n){return Wm(i,e)+Xm(i,t)+qm(i,n)}function Ym(i,e){let t=1-i;return t*t*t*e}function Zm(i,e){let t=1-i;return 3*t*t*i*e}function $m(i,e){return 3*(1-i)*i*i*e}function Jm(i,e){return i*i*i*e}function Ao(i,e,t,n,s){return Ym(i,e)+Zm(i,t)+$m(i,n)+Jm(i,s)}var vl=class extends kn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ml=class extends kn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y),Ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends kn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends kn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends kn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wo(e,s.x,r.x,o.x),wo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends kn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(wo(e,s.x,r.x,o.x),wo(e,s.y,r.y,o.y),wo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ld(a,l.x,c.x,u.x,d.x),Ld(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Km=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Vn,CubicBezierCurve:vl,CubicBezierCurve3:Ml,EllipseCurve:ko,LineCurve:Sl,LineCurve3:bl,QuadraticBezierCurve:El,QuadraticBezierCurve3:Vo,SplineCurve:Wr});var Wo=class i extends Go{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},gs=class i extends lt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new I,h=new ge,f=new I,g=new I,y=new I,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let S=0;S<=t;S++){let A=n+S*u*s,M=Math.sin(A),b=Math.cos(A);for(let v=0;v<=e.length-1;v++){d.x=e[v].x*M,d.y=e[v].y,d.z=e[v].x*b,o.push(d.x,d.y,d.z),h.x=S/t,h.y=v/(e.length-1),a.push(h.x,h.y);let R=l[3*v+0]*M,x=l[3*v+1],T=l[3*v+0]*b;c.push(R,x,T)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){let M=A+S*e.length,b=M,v=M+e.length,R=M+e.length+1,x=M+1;r.push(b,v,x),r.push(R,x,v)}this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(a,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},zs=class i extends Go{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ot=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*h-o;for(let A=0;A<c;A++){let M=A*d-r;g.push(M,-S,0),y.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let A=S+c*p,M=S+c*(p+1),b=S+1+c*(p+1),v=S+1+c*p;f.push(A,M,v),f.push(M,b,v)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},xs=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new I,g=new ge;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,A=S,M=S+n+1,b=S+n+2,v=S+1;a.push(A,M,v),a.push(M,b,v)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $t=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new I,h=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,M=o+A*a,b=e*Math.cos(M),v=Math.sqrt(e*e-b*b),R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let T=x/t,P=s+T*r;d.x=-v*Math.cos(P),d.y=b,d.z=v*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(T+R,1-A),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let A=u[p][S+1],M=u[p][S],b=u[p+1][S],v=u[p+1][S+1];(p!==0||o>0)&&f.push(A,M,v),(p!==n-1||l<Math.PI)&&f.push(M,b,v)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var en=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,g=new I;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,A=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(p,S,M),l.push(S,A,M)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ri=class i extends lt{constructor(e=new Vo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ge,u=new I,d=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function y(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),S(),p()}function m(A){u=e.getPointAt(A/t,u);let M=o.normals[A],b=o.binormals[A];for(let v=0;v<=s;v++){let R=v/s*Math.PI*2,x=Math.sin(R),T=-Math.cos(R);l.x=T*M.x+x*b.x,l.y=T*M.y+x*b.y,l.z=T*M.z+x*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=t;A++)for(let M=1;M<=s;M++){let b=(s+1)*(A-1)+(M-1),v=(s+1)*A+(M-1),R=(s+1)*A+M,x=(s+1)*(A-1)+M;g.push(b,v,x),g.push(v,R,x)}}function S(){for(let A=0;A<=t;A++)for(let M=0;M<=s;M++)c.x=A/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Km[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Dd(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Dd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Ki={clone:Zs,merge:yn},jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dt=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qr=class extends dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tl=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,a=2*t-n;break;case Hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:o=e,l=2*n-t;break;case Hh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+S*o[c+b]+A*o[l+b]+M*o[d+b];return r}},Rl=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Cl=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pl=class extends _s{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let h=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*h+g*2,S=d[p],A=d[p+1],M=e*h+g*2,b=u[M],v=u[M+1],R=n0(n,t,S,b,s);r[g]=Rf(R,y,A,v,m)}return r}};function Rf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function t0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function n0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Rf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=t0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Nh(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case Fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Nh(this.settings)&&(Nd(this.settings.inTangents,e),Nd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&lm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=pl;var ys=class extends Nn{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Ro;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Il.prototype.ValueTypeName="color";var Ll=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ll.prototype.ValueTypeName="number";var Dl=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xo=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Nn{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ro;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Nl.prototype.ValueTypeName="vector";var rl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ud(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ud(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ud(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cf=new Ul,Yr=class{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=new WeakMap,Fl=class extends Yr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Rr.get(o);d===void 0&&(d=[],Rr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Nr("img");function l(){u(),t&&t(this);let d=Rr.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Rr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),rl.remove(`image:${e}`);let h=Rr.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var qo=class extends Yr{constructor(e){super(e)}load(e,t,n,s){let r=new _n,o=new Fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Gs=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ks=class extends Gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uh=new it,Fd=new I,Bd=new I,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Dr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new I,nl=new bn,yi=new I,Zo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tl,nl,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new I,Od=new ge,Hd=new ge,cn=class extends Zo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Od,Hd),t.subVectors(Hd,Od)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gh=class extends Yo{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},ci=class extends Gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ms=class extends Zo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kh=class extends Yo{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ws=class extends Gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cr=-90,Pr=1,Bl=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Cr,Pr,e,t);s.layers=this.layers,this.add(s);let r=new cn(Cr,Pr,e,t);r.layers=this.layers,this.add(r);let o=new cn(Cr,Pr,e,t);o.layers=this.layers,this.add(o);let a=new cn(Cr,Pr,e,t);a.layers=this.layers,this.add(a);let l=new cn(Cr,Pr,e,t);l.layers=this.layers,this.add(l);let c=new cn(Cr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ol=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$o=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=i0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function i0(){this._document.hidden===!1&&this.reset()}var hu="\\[\\]\\.:\\/",s0=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",r0="[^"+hu.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",uu),a0=/(WCOD+)?/.source.replace("WCOD",r0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),h0=new RegExp("^"+o0+a0+l0+c0+"$"),u0=["material","materials","bones","map"],Vh=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(e){let t=h0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);u0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Vh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);var zd=new it,Jo=class{constructor(e,t,n=0,s=1/0){this.ray=new Gr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(Gd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wh(e[s],this,n,t);return n.sort(Gd),n}};function Gd(i,e){return i.distance-e.distance}function Wh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wh(r[o],e,t,!0)}}var xu=class xu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};xu.prototype.isMatrix2=!0;var Xh=xu;function du(i,e,t,n){let s=d0(n);switch(t){case iu:return i*e;case Xl:return i*e/s.components*s.byteLength;case ql:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case Yl:return i*e*2/s.components*s.byteLength;case su:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Zl:return i*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(i,16)*Math.max(e,8)/4;case $l:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case jl:case ec:case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:case ha:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case vc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(i){switch(i){case En:case jh:return{byteLength:1,components:1};case Kr:case eu:case un:return{byteLength:2,components:1};case Vl:case Wl:return{byteLength:2,components:4};case ui:case kl:case Xn:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kf(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function x0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:_0,alphahash_pars_fragment:y0,alphamap_fragment:v0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:b0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:w0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:I0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:F0,color_fragment:B0,color_pars_fragment:O0,color_pars_vertex:H0,color_vertex:z0,common:G0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:$0,envmap_fragment:J0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:hg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:og,lights_lambert_fragment:ag,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:ug,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:xg,lights_fragment_maps:_g,lights_fragment_end:yg,lightprobes_pars_fragment:vg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Eg,map_fragment:Tg,map_pars_fragment:wg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Ig,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ng,morphtarget_vertex:Ug,normal_fragment_begin:Fg,normal_fragment_maps:Bg,normal_pars_fragment:Og,normal_pars_vertex:Hg,normal_vertex:zg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:Zg,project_vertex:$g,dithering_fragment:Jg,dithering_pars_fragment:Kg,roughnessmap_fragment:Qg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:xx,background_vert:_x,background_frag:yx,backgroundCube_vert:vx,backgroundCube_frag:Mx,cube_vert:Sx,cube_frag:bx,depth_vert:Ex,depth_frag:Tx,distance_vert:wx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:Dx,meshlambert_vert:Nx,meshlambert_frag:Ux,meshmatcap_vert:Fx,meshmatcap_frag:Bx,meshnormal_vert:Ox,meshnormal_frag:Hx,meshphong_vert:zx,meshphong_frag:Gx,meshphysical_vert:kx,meshphysical_frag:Vx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Zx,shadow_frag:$x,sprite_vert:Jx,sprite_frag:Kx},we={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Pi={basic:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:yn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:yn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:yn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:yn([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:yn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:yn([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:yn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:yn([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:yn([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:yn([we.lights,we.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Pi.physical={uniforms:yn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Rc={r:0,b:0,g:0},Qx=new it,Qf=new Ye;Qf.set(-1,0,0,0,1,0,0,0,1);function jx(i,e,t,n,s,r){let o=new Te(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function g(S){let A=!1,M=f(S);M===null?m(o,a):M&&M.isColor&&(m(M,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,A){let M=f(A);M&&(M.isCubeTexture||M.mapping===sa)?(c===void 0&&(c=new le(new ut(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Zs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qf),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==_t,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new le(new Ot(2,2),new Ct({name:"BackgroundMaterial",uniforms:Zs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Rc,cu(i)),t.buffers.color.setClear(Rc.r,Rc.g,Rc.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function e_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(U,O,X,N,W){let Z=!1,z=d(U,N,X,O);r!==z&&(r=z,c(r.object)),Z=f(U,N,X,W),Z&&g(U,N,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(U,O,X,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function d(U,O,X,N){let W=N.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let z=U.isInstancedMesh===!0?U.id:0,ne=Z[z];ne===void 0&&(ne={},Z[z]=ne);let Y=ne[X.id];Y===void 0&&(Y={},ne[X.id]=Y);let $=Y[W];return $===void 0&&($=h(l()),Y[W]=$),$}function h(U){let O=[],X=[],N=[];for(let W=0;W<t;W++)O[W]=0,X[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,O,X,N){let W=r.attributes,Z=O.attributes,z=0,ne=X.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=W[Y],pe=Z[Y];if(pe===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(U,O,X,N){let W={},Z=O.attributes,z=0,ne=X.getAttributes();for(let Y in ne)if(ne[Y].location>=0){let te=Z[Y];te===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),W[Y]=pe,z++}r.attributes=W,r.attributesNum=z,r.index=N}function y(){let U=r.newAttributes;for(let O=0,X=U.length;O<X;O++)U[O]=0}function m(U){p(U,0)}function p(U,O){let X=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;X[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),W[U]!==O&&(i.vertexAttribDivisor(U,O),W[U]=O)}function S(){let U=r.newAttributes,O=r.enabledAttributes;for(let X=0,N=O.length;X<N;X++)O[X]!==U[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function A(U,O,X,N,W,Z,z){z===!0?i.vertexAttribIPointer(U,O,X,W,Z):i.vertexAttribPointer(U,O,X,N,W,Z)}function M(U,O,X,N){y();let W=N.attributes,Z=X.getAttributes(),z=O.defaultAttributeValues;for(let ne in Z){let Y=Z[ne];if(Y.location>=0){let $=W[ne];if($===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let te=$.normalized,pe=$.itemSize,ue=e.get($);if(ue===void 0)continue;let Me=ue.buffer,Ee=ue.type,Ue=ue.bytesPerElement,ie=Ee===i.INT||Ee===i.UNSIGNED_INT||$.gpuType===kl;if($.isInterleavedBufferAttribute){let oe=$.data,xe=oe.stride,Ne=$.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)p(Y.location+ve,oe.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ve=0;ve<Y.locationSize;ve++)A(Y.location+ve,pe/Y.locationSize,Ee,te,xe*Ue,(Ne+pe/Y.locationSize*ve)*Ue,ie)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)p(Y.location+oe,$.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<Y.locationSize;oe++)m(Y.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let oe=0;oe<Y.locationSize;oe++)A(Y.location+oe,pe/Y.locationSize,Ee,te,pe*Ue,pe/Y.locationSize*oe*Ue,ie)}}else if(z!==void 0){let te=z[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Y.location,te);break;case 3:i.vertexAttrib3fv(Y.location,te);break;case 4:i.vertexAttrib4fv(Y.location,te);break;default:i.vertexAttrib1fv(Y.location,te)}}}}S()}function b(){T();for(let U in n){let O=n[U];for(let X in O){let N=O[X];for(let W in N){let Z=N[W];for(let z in Z)u(Z[z].object),delete Z[z];delete N[W]}}delete n[U]}}function v(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let X in O){let N=O[X];for(let W in N){let Z=N[W];for(let z in Z)u(Z[z].object),delete Z[z];delete N[W]}}delete n[U.id]}function R(U){for(let O in n){let X=n[O];for(let N in X){let W=X[N];if(W[U.id]===void 0)continue;let Z=W[U.id];for(let z in Z)u(Z[z].object),delete Z[z];delete W[U.id]}}}function x(U){for(let O in n){let X=n[O],N=U.isInstancedMesh===!0?U.id:0,W=X[N];if(W!==void 0){for(let Z in W){let z=W[Z];for(let ne in z)u(z[ne].object),delete z[ne];delete W[Z]}delete X[N],Object.keys(X).length===0&&delete n[O]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function t_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&R!==Xn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:v}}function i_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,A=S*4,M=p.clippingState||null;l.value=M,M=u(g,h,A,f);for(let b=0;b!==A;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=f;A!==y;++A,M+=4)o.copy(d[A]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var eo=4,s_=6,r_=20,o_=256,da=new Ms,Pf=new Te,_u=null,yu=0,vu=0,Mu=!1,a_=new I,$s=new I,Pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=a_}=r;_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,yu,vu),this._renderer.xr.enabled=Mu,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:un,format:qn,colorSpace:Co,depthBuffer:!1},s=If(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l_(r)),this._blurMaterial=h_(r,e,t),this._ggxMaterial=c_(r,e,t)}return s}_compileMaterial(e){let t=new le(new lt,e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,s,r){let l=new cn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pf),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new ut,new Ze({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Pf),p=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;jr(s,M*b,A>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-eo?n-g+eo:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,jr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,da),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,jr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,da)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-eo?s-this._lodMax+eo:0),h=4*(this._cubeSize-u);jr(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,da)}};function l_(i){let e=[],t=[],n=i,s=i-eo+1+s_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,A=p>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(M,f*h*p);for(let b=0;b<h;b++){let v=u[b*2]*2-1,R=u[b*2+1]*2-1;p===0?$s.set(1,R,v):p===1?$s.set(-v,1,-R):p===2?$s.set(-v,R,1):p===3?$s.set(-1,R,-v):p===4?$s.set(-v,-1,R):$s.set(v,R,-1),$s.toArray(y,(p*h+b)*f)}}let m=new lt;m.setAttribute("position",new pt(g,f)),m.setAttribute("outputDirection",new pt(y,f)),t.push(new le(m,null)),n>eo&&n--}return{lodMeshes:t,sizeLods:e}}function If(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c_(i,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function h_(i,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:r_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Lf(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Df(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ic=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Oo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ut(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Wn});r.uniforms.tEquirect.value=t;let o=new le(s,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=hn),new Bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function u_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Jr||f===zl)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Ic(g.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===Jr||f===zl,y=f===bs||f===Ys;if(g||y){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Pc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Pc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Jr?h.mapping=bs:f===zl&&(h.mapping=Ys),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function d_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function f_(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let A=0,M=S.length;A<M;A+=3){let b=S[A+0],v=S[A+1],R=S[A+2];h.push(b,v,v,R,R,b)}}else{let S=g.array;y=g.version;for(let A=0,M=S.length/3-1;A<M;A+=3){let b=A+0,v=A+1,R=A+2;h.push(b,v,v,R,R,b)}}let m=new(g.count>=65535?Uo:No)(h,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function p_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function m_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function g_(i,e,t){let n=new WeakMap,s=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let M=a.attributes.position.count*A,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let v=new Float32Array(M*b*4*d),R=new Lo(v,M,b,d);R.type=Xn,R.needsUpdate=!0;let x=A*4;for(let P=0;P<d;P++){let U=m[P],O=p[P],X=S[P],N=M*b*4*P;for(let W=0;W<U.count;W++){let Z=W*x;f===!0&&(s.fromBufferAttribute(U,W),v[N+Z+0]=s.x,v[N+Z+1]=s.y,v[N+Z+2]=s.z,v[N+Z+3]=0),g===!0&&(s.fromBufferAttribute(O,W),v[N+Z+4]=s.x,v[N+Z+5]=s.y,v[N+Z+6]=s.z,v[N+Z+7]=0),y===!0&&(s.fromBufferAttribute(X,W),v[N+Z+8]=s.x,v[N+Z+9]=s.y,v[N+Z+10]=s.z,v[N+Z+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new ge(M,b)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function x_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var __={[Qo]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[ea]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[na]:"AGX_TONE_MAPPING",[ia]:"NEUTRAL_TONE_MAPPING",[ta]:"CUSTOM_TONE_MAPPING"};function y_(i,e,t,n,s,r){let o=new jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new lt;c.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let u=new Xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new le(c,u),h=new Ms(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],A=!1;this.setSize=function(M,b){o.setSize(M,b),a!==null&&a.setSize(M,b),l!==null&&l.setSize(M,b);for(let v=0;v<S.length;v++){let R=S[v];R.setSize&&R.setSize(M,b)}},this.setEffects=function(M){S=M,A=S.length>0&&S[0].isRenderPass===!0;let b=o.width,v=o.height;S.length>0&&a===null&&(a=new jt(b,v,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new jt(b,v,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let x=S[R];x.setSize&&x.setSize(b,v)}},this.begin=function(M,b){if(y||M.toneMapping===hi&&S.length===0)return!1;if(p=b,b!==null){let v=b.width,R=b.height;(o.width!==v||o.height!==R)&&this.setSize(v,R)}return A===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=hi,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=m,y=!0;let v=o,R=a;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(M,R,v,b),T.needsSwap!==!1&&(v=R,R=R===a?l:a))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},nt.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");let x=__[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(p),M.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var jf=new _n,Eu=new ms(1,1),ep=new Lo,tp=new xl,np=new Oo,Nf=[],Uf=[],Ff=new Float32Array(16),Bf=new Float32Array(9),Of=new Float32Array(4);function no(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nf[s];if(r===void 0&&(r=new Float32Array(s),Nf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),nn(t,n)}}function T_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Bf.set(n),i.uniformMatrix3fv(this.addr,!1,Bf),nn(t,n)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),nn(t,n)}}function A_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?Ac:wc,r=Eu):r=jf,t.setTexture2D(e||r,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tp,s)}function B_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||np,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ep,s)}function H_(i){switch(i){case 5126:return v_;case 35664:return M_;case 35665:return S_;case 35666:return b_;case 35674:return E_;case 35675:return T_;case 35676:return w_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,e){i.uniform1fv(this.addr,e)}function G_(i,e){let t=no(e,this.size,2);i.uniform2fv(this.addr,t)}function k_(i,e){let t=no(e,this.size,3);i.uniform3fv(this.addr,t)}function V_(i,e){let t=no(e,this.size,4);i.uniform4fv(this.addr,t)}function W_(i,e){let t=no(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function X_(i,e){let t=no(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q_(i,e){let t=no(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y_(i,e){i.uniform1iv(this.addr,e)}function Z_(i,e){i.uniform2iv(this.addr,e)}function $_(i,e){i.uniform3iv(this.addr,e)}function J_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function Q_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eu:o=jf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ny(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function iy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function sy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function ry(i){switch(i){case 5126:return z_;case 35664:return G_;case 35665:return k_;case 35666:return V_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return $_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return Q_;case 36295:return j_;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var Tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ry(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function Hf(i,e){i.seq.push(e),i.map[e.id]=e}function oy(i,e,t){let n=i.name,s=n.length;for(Su.lastIndex=0;;){let r=Su.exec(n),o=Su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hf(t,c===void 0?new Tu(a,i,e):new wu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Au(a),Hf(t,d)),t=d}}}var to=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);oy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function zf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ay=37297,ly=0;function cy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gf=new Ye;function hy(i){nt._getMatrix(Gf,nt.workingColorSpace,i);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Po:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(e),a)}else return r}function uy(i,e){let t=hy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dy={[Qo]:"Linear",[jo]:"Reinhard",[ea]:"Cineon",[qs]:"ACESFilmic",[na]:"AgX",[ia]:"Neutral",[ta]:"Custom"};function fy(i,e){let t=dy[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new I;function py(){nt.getLuminanceCoefficients(Cc);let i=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pa(i){return i!==""}function Vf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(_y,vy)}var yy=new Map;function vy(i,e){let t=Ke[e];if(t===void 0){let n=yy.get(e);if(n!==void 0)t=Ke[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ru(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(i){return i.replace(My,Sy)}function Sy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var by={[Ko]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function Ey(i){return by[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[bs]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ay={[Ys]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cy={[Kh]:"ENVMAP_BLENDING_MULTIPLY",[hf]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function Py(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[i.combine]||"ENVMAP_BLENDING_NONE"}function Iy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ly(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ey(t),c=wy(t),u=Ry(t),d=Py(t),h=Iy(t),f=my(t),g=gy(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==hi?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=Ru(o),o=Vf(o,t),o=Wf(o,t),a=Ru(a),a=Vf(a,t),a=Wf(a,t),o=Xf(o),a=Xf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+o,M=S+p+a,b=zf(s,s.VERTEX_SHADER,A),v=zf(s,s.FRAGMENT_SHADER,M);s.attachShader(y,b),s.attachShader(y,v),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",X=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(v)||"",W=O.trim(),Z=X.trim(),z=N.trim(),ne=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,v);else{let $=kf(s,b,"vertex"),te=kf(s,v,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+$+`
`+te)}else W!==""?ke("WebGLProgram: Program Info Log:",W):(Z===""||z==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ne,programLog:W,vertexShader:{log:Z,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(b),s.deleteShader(v),x=new to(s,y),T=xy(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,ay)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=v,this}var Dy=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pu(e),t.set(e,n)),n}},Pu=class{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}};function Ny(i){return i===ws||i===ha||i===ua}function Uy(i,e,t,n,s,r){let o=new Or,a=new Cu,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,P,U,O,X){let N=U.fog,W=O.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||Z,z),Y=ne&&ne.mapping===sa?ne.image.height:null,$=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=te!==void 0?te.length:0,ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Me,Ee,Ue,ie;if($){let tt=Pi[$];Me=tt.vertexShader,Ee=tt.fragmentShader}else{Me=x.vertexShader,Ee=x.fragmentShader;let tt=a.getVertexShaderStage(x),rt=a.getFragmentShaderStage(x);a.update(x,tt,rt),Ue=tt.id,ie=rt.id}let oe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,ze=!!x.map,Mt=!!x.matcap,Oe=!!ne,He=!!x.aoMap,je=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,et=!!x.normalMap,qe=!!x.displacementMap,Nt=!!x.emissiveMap,ht=!!x.metalnessMap,Lt=!!x.roughnessMap,V=x.anisotropy>0,Et=x.clearcoat>0,Ge=x.dispersion>0,L=x.retroreflectivity>0,_=x.iridescence>0,J=x.sheen>0,F=x.transmission>0,C=V&&!!x.anisotropyMap,H=Et&&!!x.clearcoatMap,K=Et&&!!x.clearcoatNormalMap,G=Et&&!!x.clearcoatRoughnessMap,w=_&&!!x.iridescenceMap,D=_&&!!x.iridescenceThicknessMap,q=J&&!!x.sheenColorMap,se=J&&!!x.sheenRoughnessMap,Q=!!x.specularMap,he=!!x.specularColorMap,de=!!x.specularIntensityMap,Se=F&&!!x.transmissionMap,B=F&&!!x.thicknessMap,me=!!x.gradientMap,ae=!!x.alphaMap,fe=x.alphaTest>0,ye=!!x.alphaHash,ce=!!x.extensions,Ce=hi;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let be={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:Ee,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:Mt,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:Y,aoMap:He,lightMap:je,bumpMap:Ve,normalMap:et,displacementMap:qe,emissiveMap:Nt,normalMapObjectSpace:et&&x.normalMapType===pf,normalMapTangentSpace:et&&x.normalMapType===Tc,packedNormalMap:et&&x.normalMapType===Tc&&Ny(x.normalMap.format),metalnessMap:ht,roughnessMap:Lt,anisotropy:V,anisotropyMap:C,clearcoat:Et,clearcoatMap:H,clearcoatNormalMap:K,clearcoatRoughnessMap:G,dispersion:Ge,retroreflection:L,iridescence:_,iridescenceMap:w,iridescenceThicknessMap:D,sheen:J,sheenColorMap:q,sheenRoughnessMap:se,specularMap:Q,specularColorMap:he,specularIntensityMap:de,transmission:F,transmissionMap:Se,thicknessMap:B,gradientMap:me,opaque:x.transparent===!1&&x.blending===$r&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:fe,alphaHash:ye,combine:x.combine,mapUv:ze&&g(x.map.channel),aoMapUv:He&&g(x.aoMap.channel),lightMapUv:je&&g(x.lightMap.channel),bumpMapUv:Ve&&g(x.bumpMap.channel),normalMapUv:et&&g(x.normalMap.channel),displacementMapUv:qe&&g(x.displacementMap.channel),emissiveMapUv:Nt&&g(x.emissiveMap.channel),metalnessMapUv:ht&&g(x.metalnessMap.channel),roughnessMapUv:Lt&&g(x.roughnessMap.channel),anisotropyMapUv:C&&g(x.anisotropyMap.channel),clearcoatMapUv:H&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:w&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:q&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(x.sheenRoughnessMap.channel),specularMapUv:Q&&g(x.specularMap.channel),specularColorMapUv:he&&g(x.specularColorMap.channel),specularIntensityMapUv:de&&g(x.specularIntensityMap.channel),transmissionMapUv:Se&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:ae&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(et||V),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(ze||ae),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&et===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ue,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pt,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=f[x.type],P;if(T){let U=Pi[T];P=Ki.clone(U.uniforms)}else P=x.uniforms;return P}function M(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Ly(i,T,x,s),c.push(P),u.set(T,P)),P}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:v,programs:c,dispose:R}}function Fy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function By(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,y,m,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let A=a(h,f,g,y,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(h,f,g,y,m,p){let S=a(h,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||By),n.length>1&&n.sort(f||Yf),s.length>1&&s.sort(f||Yf)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Oy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zf,i.set(n,[o])):s>=r.length?(o=new Zf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gy=0;function ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vy(i){let e=new Hy,t=zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new it,o=new it;function a(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,A=0,M=0,b=0,v=0,R=0,x=0,T=0,P=0;c.sort(ky);for(let O=0,X=c.length;O<X;O++){let N=c[O],W=N.color,Z=N.intensity,z=N.distance,ne=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ws?ne=N.shadow.map.texture:ne=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*Z,d+=W.g*Z,h+=W.b*Z;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],Z);P++}else if(N.isSunLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ne;let pe=$.getViewportCount();for(let ue=0;ue<pe;ue++)n.sunShadowMatrix[y+ue]=$.getMatrix(ue),n.sunShadowCascade[y+ue]=$._cascadeData[ue];y+=pe,g++}n.sun[f]=Y,f++}else if(N.isDirectionalLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=Y,m++}else if(N.isSpotLight){let Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(W).multiplyScalar(Z),Y.distance=z,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[S]=Y;let $=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,$.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[S]=$.matrix,N.castShadow){let te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ne,R++}S++}else if(N.isRectAreaLight){let Y=e.get(N);Y.color.copy(W).multiplyScalar(Z),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=Y,A++}else if(N.isPointLight){let Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let $=N.shadow,te=t.get(N);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=N.shadow.matrix,v++}n.point[p]=Y,p++}else if(N.isHemisphereLight){let Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(Z),Y.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[M]=Y,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==S||U.rectAreaLength!==A||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==v||U.numSpotShadows!==R||U.numSpotMaps!==x||U.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=S,U.rectAreaLength=A,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=v,U.numSpotShadows=R,U.numSpotMaps=x,U.numLightProbes=P,n.version=Gy++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let M=c[S];if(M.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function $f(i){let e=new Vy(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Wy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $f(i),e.set(s,[a])):r>=o.length?(a=new $f(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Zy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Jf=new it,fa=new I,bu=new I;function $y(i,e,t){let n=new Vr,s=new ge,r=new ge,o=new Vt,a=new Tl,l=new wl,c={},u=t.maxTextureSize,d={[Ss]:Jt,[Jt]:Ss,[Pt]:Pt},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let p=this.type;this.render=function(v,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Wd&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=p!==this.type;X&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=v.length;N<W;N++){let Z=v[N],z=Z.shadow;if(z===void 0){ke("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ne=z.getFrameExtents();s.multiply(ne),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zr){if(Z.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new jt(s.x,s.y,{format:ws,type:un,minFilter:hn,magFilter:hn,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new ms(s.x,s.y,Xn),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=Si,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an}else Z.isPointLight?(z.map=new Ic(s.x),z.map.depthTexture=new _l(s.x,ui)):(z.map=new jt(s.x,s.y),z.map.depthTexture=new ms(s.x,s.y,ui)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=Si,this.type===Ko?(z.map.depthTexture.compareFunction=Y?Ac:wc,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let $=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Z.isPointLight!==!0&&z.updateMatrices(Z,x);for(let te=0;te<$;te++){let pe=z.getCamera(te);if(Z.isPointLight){let ue=z.camera,Me=z.matrix,Ee=Z.distance||ue.far;Ee!==ue.far&&(ue.far=Ee,ue.updateProjectionMatrix()),fa.setFromMatrixPosition(Z.matrixWorld),ue.position.copy(fa),bu.copy(ue.position),bu.add(Yy[te]),ue.up.copy(Zy[te]),ue.lookAt(bu),ue.updateMatrixWorld(),Me.makeTranslation(-fa.x,-fa.y,-fa.z),Jf.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Jf,ue.coordinateSystem,ue.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,te),i.clear();else{te===0&&(i.setRenderTarget(z.map),i.clear());let ue=z.getViewport(te);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),O.viewport(o)}n=z.getFrustum(te),M(R,x,pe,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Zr&&S(z,x),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,U)};function S(v,R){let x=e.update(y);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new jt(s.x,s.y,{format:ws,type:un}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(R,null,x,f,y,null)}function A(v,R,x,T){let P=null,U=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0)P=U;else if(P=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=P.uuid,X=R.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let W=N[X];W===void 0&&(W=P.clone(),N[X]=W,R.addEventListener("dispose",b)),P=W}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Zr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=x}return P}function M(v,R,x,T,P){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===Zr)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);let X=e.update(v),N=v.material;if(Array.isArray(N)){let W=X.groups;for(let Z=0,z=W.length;Z<z;Z++){let ne=W[Z],Y=N[ne.materialIndex];if(Y&&Y.visible){let $=A(v,Y,T,P);v.onBeforeShadow(i,v,R,x,X,$,ne),i.renderBufferDirect(x,null,X,$,v,ne),v.onAfterShadow(i,v,R,x,X,$,ne)}}}else if(N.visible){let W=A(v,N,T,P);v.onBeforeShadow(i,v,R,x,X,W,null),i.renderBufferDirect(x,null,X,W,v,null),v.onAfterShadow(i,v,R,x,X,W,null)}}let O=v.children;for(let X=0,N=O.length;X<N;X++)M(O[X],R,x,T,P)}function b(v){v.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],P=v.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Jy(i,e){function t(){let B=!1,me=new Vt,ae=null,fe=new Vt(0,0,0,0);return{setMask:function(ye){ae!==ye&&!B&&(i.colorMask(ye,ye,ye,ye),ae=ye)},setLocked:function(ye){B=ye},setClear:function(ye,ce,Ce,be,tt){tt===!0&&(ye*=be,ce*=be,Ce*=be),me.set(ye,ce,Ce,be),fe.equals(me)===!1&&(i.clearColor(ye,ce,Ce,be),fe.copy(me))},reset:function(){B=!1,ae=null,fe.set(-1,0,0,0)}}}function n(){let B=!1,me=!1,ae=null,fe=null,ye=null;return{setReversed:function(ce){if(me!==ce){let Ce=e.get("EXT_clip_control");ce?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),me=ce;let be=ye;ye=null,this.setClear(be)}},getReversed:function(){return me},setTest:function(ce){ce?oe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!B&&(i.depthMask(ce),ae=ce)},setFunc:function(ce){if(me&&(ce=Tf[ce]),fe!==ce){switch(ce){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ce}},setLocked:function(ce){B=ce},setClear:function(ce){ye!==ce&&(ye=ce,me&&(ce=1-ce),i.clearDepth(ce))},reset:function(){B=!1,ae=null,fe=null,ye=null,me=!1}}}function s(){let B=!1,me=null,ae=null,fe=null,ye=null,ce=null,Ce=null,be=null,tt=null;return{setTest:function(rt){B||(rt?oe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!B&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,Gt,Yt){(ae!==rt||fe!==Gt||ye!==Yt)&&(i.stencilFunc(rt,Gt,Yt),ae=rt,fe=Gt,ye=Yt)},setOp:function(rt,Gt,Yt){(ce!==rt||Ce!==Gt||be!==Yt)&&(i.stencilOp(rt,Gt,Yt),ce=rt,Ce=Gt,be=Yt)},setLocked:function(rt){B=rt},setClear:function(rt){tt!==rt&&(i.clearStencil(rt),tt=rt)},reset:function(){B=!1,me=null,ae=null,fe=null,ye=null,ce=null,Ce=null,be=null,tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,A=null,M=null,b=null,v=null,R=null,x=new Te(0,0,0),T=0,P=!1,U=null,O=null,X=null,N=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ne=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ne>=2);let $=null,te={},pe=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Me=new Vt().fromArray(pe),Ee=new Vt().fromArray(ue);function Ue(B,me,ae,fe){let ye=new Uint8Array(4),ce=i.createTexture();i.bindTexture(B,ce),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ae;Ce++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(me+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ce}let ie={};ie[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Lr),Ve(!1),et(qh),oe(i.CULL_FACE),He(Wn);function oe(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function xe(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Ne(B,me){return h[B]!==me?(i.bindFramebuffer(B,me),h[B]=me,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function ve(B,me){let ae=g,fe=!1;if(B){ae=f.get(me),ae===void 0&&(ae=[],f.set(me,ae));let ye=B.textures;if(ae.length!==ye.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ce=ye.length;ce<Ce;ce++)ae[ce]=i.COLOR_ATTACHMENT0+ce;ae.length=ye.length,fe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ae)}function ze(B){return y!==B?(i.useProgram(B),y=B,!0):!1}let Mt={[Xs]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};Mt[Zd]=i.MIN,Mt[$d]=i.MAX;let Oe={[Jd]:i.ZERO,[Kd]:i.ONE,[Qd]:i.SRC_COLOR,[$h]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[ef]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[Jh]:i.ONE_MINUS_SRC_ALPHA,[sf]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function He(B,me,ae,fe,ye,ce,Ce,be,tt,rt){if(B===Wn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(oe(i.BLEND),m=!0),B!==Xd){if(B!==p||rt!==P){if((S!==Xs||b!==Xs)&&(i.blendEquation(i.FUNC_ADD),S=Xs,b=Xs),rt)switch(B){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case at:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",B);break}else switch(B){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case at:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",B);break}A=null,M=null,v=null,R=null,x.set(0,0,0),T=0,p=B,P=rt}return}ye=ye||me,ce=ce||ae,Ce=Ce||fe,(me!==S||ye!==b)&&(i.blendEquationSeparate(Mt[me],Mt[ye]),S=me,b=ye),(ae!==A||fe!==M||ce!==v||Ce!==R)&&(i.blendFuncSeparate(Oe[ae],Oe[fe],Oe[ce],Oe[Ce]),A=ae,M=fe,v=ce,R=Ce),(be.equals(x)===!1||tt!==T)&&(i.blendColor(be.r,be.g,be.b,tt),x.copy(be),T=tt),p=B,P=!1}function je(B,me){B.side===Pt?xe(i.CULL_FACE):oe(i.CULL_FACE);let ae=B.side===Jt;me&&(ae=!ae),Ve(ae),B.blending===$r&&B.transparent===!1?He(Wn):He(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let fe=B.stencilWrite;a.setTest(fe),fe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function et(B){B!==kd?(oe(i.CULL_FACE),B!==O&&(B===qh?i.cullFace(i.BACK):B===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=B}function qe(B){B!==X&&(z&&i.lineWidth(B),X=B)}function Nt(B,me,ae){B?(oe(i.POLYGON_OFFSET_FILL),(N!==me||W!==ae)&&(N=me,W=ae,o.getReversed()&&(me=-me),i.polygonOffset(me,ae))):xe(i.POLYGON_OFFSET_FILL)}function ht(B){B?oe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Lt(B){B===void 0&&(B=i.TEXTURE0+Z-1),$!==B&&(i.activeTexture(B),$=B)}function V(B,me,ae){ae===void 0&&($===null?ae=i.TEXTURE0+Z-1:ae=$);let fe=te[ae];fe===void 0&&(fe={type:void 0,texture:void 0},te[ae]=fe),(fe.type!==B||fe.texture!==me)&&($!==ae&&(i.activeTexture(ae),$=ae),i.bindTexture(B,me||ie[B]),fe.type=B,fe.texture=me)}function Et(){let B=te[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function J(){try{i.texSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function C(){try{i.compressedTexSubImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function H(){try{i.texStorage2D(...arguments)}catch(B){We("WebGLState:",B)}}function K(){try{i.texStorage3D(...arguments)}catch(B){We("WebGLState:",B)}}function G(){try{i.texImage2D(...arguments)}catch(B){We("WebGLState:",B)}}function w(){try{i.texImage3D(...arguments)}catch(B){We("WebGLState:",B)}}function D(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function q(B,me){d[B]!==me&&(i.pixelStorei(B,me),d[B]=me)}function se(B){Me.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function Q(B){Ee.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ee.copy(B))}function he(B,me){let ae=c.get(me);ae===void 0&&(ae=new WeakMap,c.set(me,ae));let fe=ae.get(B);fe===void 0&&(fe=i.getUniformBlockIndex(me,B.name),ae.set(B,fe))}function de(B,me){let fe=c.get(me).get(B);l.get(me)!==fe&&(i.uniformBlockBinding(me,fe,B.__bindingPointIndex),l.set(me,fe))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,te={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,A=null,M=null,b=null,v=null,R=null,x=new Te(0,0,0),T=0,P=!1,U=null,O=null,X=null,N=null,W=null,Me.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:xe,bindFramebuffer:Ne,drawBuffers:ve,useProgram:ze,setBlending:He,setMaterial:je,setFlipSided:Ve,setCullFace:et,setLineWidth:qe,setPolygonOffset:Nt,setScissorTest:ht,activeTexture:Lt,bindTexture:V,unbindTexture:Et,compressedTexImage2D:Ge,compressedTexImage3D:L,texImage2D:G,texImage3D:w,pixelStorei:q,getParameter:D,updateUBOMapping:he,uniformBlockBinding:de,texStorage2D:H,texStorage3D:K,texSubImage2D:_,texSubImage3D:J,compressedTexSubImage2D:F,compressedTexSubImage3D:C,scissor:se,viewport:Q,reset:Se}}function Ky(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,_){return g?new OffscreenCanvas(L,_):Nr("canvas")}function m(L,_,J){let F=1,C=Ge(L);if((C.width>J||C.height>J)&&(F=J/Math.max(C.width,C.height)),F<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let H=Math.floor(F*C.width),K=Math.floor(F*C.height);h===void 0&&(h=y(H,K));let G=_?y(H,K):h;return G.width=H,G.height=K,G.getContext("2d").drawImage(L,0,0,H,K),ke("WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+H+"x"+K+")."),G}else return"data"in L&&ke("WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),L;return L}function p(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,_,J,F,C,H=!1){if(L!==null){if(i[L]!==void 0)return i[L];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K;F&&(K=e.get("EXT_texture_norm16"),K||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=_;if(_===i.RED&&(J===i.FLOAT&&(G=i.R32F),J===i.HALF_FLOAT&&(G=i.R16F),J===i.UNSIGNED_BYTE&&(G=i.R8),J===i.UNSIGNED_SHORT&&K&&(G=K.R16_EXT),J===i.SHORT&&K&&(G=K.R16_SNORM_EXT)),_===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(G=i.R8UI),J===i.UNSIGNED_SHORT&&(G=i.R16UI),J===i.UNSIGNED_INT&&(G=i.R32UI),J===i.BYTE&&(G=i.R8I),J===i.SHORT&&(G=i.R16I),J===i.INT&&(G=i.R32I)),_===i.RG&&(J===i.FLOAT&&(G=i.RG32F),J===i.HALF_FLOAT&&(G=i.RG16F),J===i.UNSIGNED_BYTE&&(G=i.RG8),J===i.UNSIGNED_SHORT&&K&&(G=K.RG16_EXT),J===i.SHORT&&K&&(G=K.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(G=i.RG8UI),J===i.UNSIGNED_SHORT&&(G=i.RG16UI),J===i.UNSIGNED_INT&&(G=i.RG32UI),J===i.BYTE&&(G=i.RG8I),J===i.SHORT&&(G=i.RG16I),J===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(G=i.RGB8UI),J===i.UNSIGNED_SHORT&&(G=i.RGB16UI),J===i.UNSIGNED_INT&&(G=i.RGB32UI),J===i.BYTE&&(G=i.RGB8I),J===i.SHORT&&(G=i.RGB16I),J===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),J===i.UNSIGNED_INT&&(G=i.RGBA32UI),J===i.BYTE&&(G=i.RGBA8I),J===i.SHORT&&(G=i.RGBA16I),J===i.INT&&(G=i.RGBA32I)),_===i.RGB&&(J===i.UNSIGNED_SHORT&&K&&(G=K.RGB16_EXT),J===i.SHORT&&K&&(G=K.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),_===i.RGBA){let w=H?Po:nt.getTransfer(C);J===i.FLOAT&&(G=i.RGBA32F),J===i.HALF_FLOAT&&(G=i.RGBA16F),J===i.UNSIGNED_BYTE&&(G=w===_t?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&K&&(G=K.RGBA16_EXT),J===i.SHORT&&K&&(G=K.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function b(L,_){let J;return L?_===null||_===ui||_===Qr?J=i.DEPTH24_STENCIL8:_===Xn?J=i.DEPTH32F_STENCIL8:_===Kr&&(J=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===Qr?J=i.DEPTH_COMPONENT24:_===Xn?J=i.DEPTH_COMPONENT32F:_===Kr&&(J=i.DEPTH_COMPONENT16),J}function v(L,_){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?_.mipmaps.length:1}function R(L){let _=L.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(L){let _=L.target;_.removeEventListener("dispose",x),U(_)}function T(L){let _=n.get(L);if(_.__webglInit===void 0)return;let J=L.source,F=f.get(J);if(F){let C=F[_.__cacheKey];C.usedTimes--,C.usedTimes===0&&P(L),Object.keys(F).length===0&&f.delete(J)}n.remove(L)}function P(L){let _=n.get(L);i.deleteTexture(_.__webglTexture);let J=L.source,F=f.get(J);delete F[_.__cacheKey],o.memory.textures--}function U(L){let _=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let C=0;C<_.__webglFramebuffer[F].length;C++)i.deleteFramebuffer(_.__webglFramebuffer[F][C]);else i.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)i.deleteFramebuffer(_.__webglFramebuffer[F]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let J=L.textures;for(let F=0,C=J.length;F<C;F++){let H=n.get(J[F]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(J[F])}n.remove(L)}let O=0;function X(){O=0}function N(){return O}function W(L){O=L}function Z(){let L=O;return L>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function z(L){let _=[];return _.push(L.wrapS),_.push(L.wrapT),_.push(L.wrapR||0),_.push(L.magFilter),_.push(L.minFilter),_.push(L.anisotropy),_.push(L.internalFormat),_.push(L.format),_.push(L.type),_.push(L.generateMipmaps),_.push(L.premultiplyAlpha),_.push(L.flipY),_.push(L.unpackAlignment),_.push(L.colorSpace),_.join()}function ne(L,_){let J=n.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){let F=L.image;if(F===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(J,L,_);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+_)}function Y(L,_){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){xe(J,L,_);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+_)}function $(L,_){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){xe(J,L,_);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+_)}function te(L,_){let J=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){Ne(J,L,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+_)}let pe={[Mi]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},ue={[an]:i.NEAREST,[df]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Gl]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},Me={[gf]:i.NEVER,[Mf]:i.ALWAYS,[xf]:i.LESS,[wc]:i.LEQUAL,[_f]:i.EQUAL,[Ac]:i.GEQUAL,[yf]:i.GREATER,[vf]:i.NOTEQUAL};function Ee(L,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===Gl||_.magFilter===ra||_.magFilter===Es||_.minFilter===hn||_.minFilter===Gl||_.minFilter===ra||_.minFilter===Es)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,pe[_.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,pe[_.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,pe[_.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==ra&&_.minFilter!==Es||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(L,_){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,_.addEventListener("dispose",R));let F=_.source,C=f.get(F);C===void 0&&(C={},f.set(F,C));let H=z(_);if(H!==L.__cacheKey){C[H]===void 0&&(C[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),C[H].usedTimes++;let K=C[L.__cacheKey];K!==void 0&&(C[L.__cacheKey].usedTimes--,K.usedTimes===0&&P(_)),L.__cacheKey=H,L.__webglTexture=C[H].texture}return J}function ie(L,_,J){return Math.floor(Math.floor(L/J)/_)}function oe(L,_,J,F){let H=L.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,J,F,_.data);else{H.sort((q,se)=>q.start-se.start);let K=0;for(let q=1;q<H.length;q++){let se=H[K],Q=H[q],he=se.start+se.count,de=ie(Q.start,_.width,4),Se=ie(se.start,_.width,4);Q.start<=he+1&&de===Se&&ie(Q.start+Q.count-1,_.width,4)===de?se.count=Math.max(se.count,Q.start+Q.count-se.start):(++K,H[K]=Q)}H.length=K+1;let G=t.getParameter(i.UNPACK_ROW_LENGTH),w=t.getParameter(i.UNPACK_SKIP_PIXELS),D=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let q=0,se=H.length;q<se;q++){let Q=H[q],he=Math.floor(Q.start/4),de=Math.ceil(Q.count/4),Se=he%_.width,B=Math.floor(he/_.width),me=de,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Se,B,me,ae,J,F,_.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,G),t.pixelStorei(i.UNPACK_SKIP_PIXELS,w),t.pixelStorei(i.UNPACK_SKIP_ROWS,D)}}function xe(L,_,J){let F=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=i.TEXTURE_3D);let C=Ue(L,_),H=_.source;t.bindTexture(F,L.__webglTexture,i.TEXTURE0+J);let K=n.get(H);if(H.version!==K.__version||C===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),fe=_.colorSpace===Ji?null:nt.getPrimaries(_.colorSpace),ye=_.colorSpace===Ji||ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let w=m(_.image,!1,s.maxTextureSize);w=Et(_,w);let D=r.convert(_.format,_.colorSpace),q=r.convert(_.type),se=M(_.internalFormat,D,q,_.normalized,_.colorSpace,_.isVideoTexture);Ee(F,_);let Q,he=_.mipmaps,de=_.isVideoTexture!==!0,Se=K.__version===void 0||C===!0,B=H.dataReady,me=v(_,w);if(_.isDepthTexture)se=b(_.format===Ts,_.type),Se&&(de?t.texStorage2D(i.TEXTURE_2D,1,se,w.width,w.height):t.texImage2D(i.TEXTURE_2D,0,se,w.width,w.height,0,D,q,null));else if(_.isDataTexture)if(he.length>0){de&&Se&&t.texStorage2D(i.TEXTURE_2D,me,se,he[0].width,he[0].height);for(let ae=0,fe=he.length;ae<fe;ae++)Q=he[ae],de?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Q.width,Q.height,D,q,Q.data):t.texImage2D(i.TEXTURE_2D,ae,se,Q.width,Q.height,0,D,q,Q.data);_.generateMipmaps=!1}else de?(Se&&t.texStorage2D(i.TEXTURE_2D,me,se,w.width,w.height),B&&oe(_,w,D,q)):t.texImage2D(i.TEXTURE_2D,0,se,w.width,w.height,0,D,q,w.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){de&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,se,he[0].width,he[0].height,w.depth);for(let ae=0,fe=he.length;ae<fe;ae++)if(Q=he[ae],_.format!==qn)if(D!==null)if(de){if(B)if(_.layerUpdates.size>0){let ye=du(Q.width,Q.height,_.format,_.type);for(let ce of _.layerUpdates){let Ce=Q.data.subarray(ce*ye/Q.data.BYTES_PER_ELEMENT,(ce+1)*ye/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ce,Q.width,Q.height,1,D,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,w.depth,D,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,se,Q.width,Q.height,w.depth,0,Q.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,w.depth,D,q,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,se,Q.width,Q.height,w.depth,0,D,q,Q.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{de&&Se&&t.texStorage2D(i.TEXTURE_2D,me,se,he[0].width,he[0].height);for(let ae=0,fe=he.length;ae<fe;ae++)Q=he[ae],_.format!==qn?D!==null?de?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Q.width,Q.height,D,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,se,Q.width,Q.height,0,Q.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Q.width,Q.height,D,q,Q.data):t.texImage2D(i.TEXTURE_2D,ae,se,Q.width,Q.height,0,D,q,Q.data)}else if(_.isDataArrayTexture)if(de){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,se,w.width,w.height,w.depth),B)if(_.layerUpdates.size>0){let ae=du(w.width,w.height,_.format,_.type);for(let fe of _.layerUpdates){let ye=w.data.subarray(fe*ae/w.data.BYTES_PER_ELEMENT,(fe+1)*ae/w.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,w.width,w.height,1,D,q,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,D,q,w.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,w.width,w.height,w.depth,0,D,q,w.data);else if(_.isData3DTexture)de?(Se&&t.texStorage3D(i.TEXTURE_3D,me,se,w.width,w.height,w.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,D,q,w.data)):t.texImage3D(i.TEXTURE_3D,0,se,w.width,w.height,w.depth,0,D,q,w.data);else if(_.isFramebufferTexture){if(Se)if(de)t.texStorage2D(i.TEXTURE_2D,me,se,w.width,w.height);else{let ae=w.width,fe=w.height;for(let ye=0;ye<me;ye++)t.texImage2D(i.TEXTURE_2D,ye,se,ae,fe,0,D,q,null),ae>>=1,fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),w.parentNode!==ae){ae.appendChild(w),d.add(_),ae.onpaint=fe=>{let ye=fe.changedElements;for(let ce of d)ye.includes(ce.image)&&(ce.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,w);else{let ye=i.RGBA,ce=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ce,Ce,w)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(de&&Se){let ae=Ge(he[0]);t.texStorage2D(i.TEXTURE_2D,me,se,ae.width,ae.height)}for(let ae=0,fe=he.length;ae<fe;ae++)Q=he[ae],de?B&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,D,q,Q):t.texImage2D(i.TEXTURE_2D,ae,se,D,q,Q);_.generateMipmaps=!1}else if(de){if(Se){let ae=Ge(w);t.texStorage2D(i.TEXTURE_2D,me,se,ae.width,ae.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,D,q,w)}else t.texImage2D(i.TEXTURE_2D,0,se,D,q,w);p(_)&&S(F),K.__version=H.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function Ne(L,_,J){if(_.image.length!==6)return;let F=Ue(L,_),C=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);let H=n.get(C);if(C.version!==H.__version||F===!0){t.activeTexture(i.TEXTURE0+J);let K=nt.getPrimaries(nt.workingColorSpace),G=_.colorSpace===Ji?null:nt.getPrimaries(_.colorSpace),w=_.colorSpace===Ji||K===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let D=_.isCompressedTexture||_.image[0].isCompressedTexture,q=_.image[0]&&_.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!D&&!q?se[ce]=m(_.image[ce],!0,s.maxCubemapSize):se[ce]=q?_.image[ce].image:_.image[ce],se[ce]=Et(_,se[ce]);let Q=se[0],he=r.convert(_.format,_.colorSpace),de=r.convert(_.type),Se=M(_.internalFormat,he,de,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,me=H.__version===void 0||F===!0,ae=C.dataReady,fe=v(_,Q);Ee(i.TEXTURE_CUBE_MAP,_);let ye;if(D){B&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Se,Q.width,Q.height);for(let ce=0;ce<6;ce++){ye=se[ce].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){let be=ye[Ce];_.format!==qn?he!==null?B?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,be.width,be.height,he,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Se,be.width,be.height,0,be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,be.width,be.height,he,de,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,Se,be.width,be.height,0,he,de,be.data)}}}else{if(ye=_.mipmaps,B&&me){ye.length>0&&fe++;let ce=Ge(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Se,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(q){B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,he,de,se[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Se,se[ce].width,se[ce].height,0,he,de,se[ce].data);for(let Ce=0;Ce<ye.length;Ce++){let tt=ye[Ce].image[ce].image;B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,tt.width,tt.height,he,de,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Se,tt.width,tt.height,0,he,de,tt.data)}}else{B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,he,de,se[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Se,he,de,se[ce]);for(let Ce=0;Ce<ye.length;Ce++){let be=ye[Ce];B?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,he,de,be.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,Se,he,de,be.image[ce])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),H.__version=C.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function ve(L,_,J,F,C,H){let K=r.convert(J.format,J.colorSpace),G=r.convert(J.type),w=M(J.internalFormat,K,G,J.normalized,J.colorSpace),D=n.get(_),q=n.get(J);if(q.__renderTarget=_,!D.__hasExternalTextures){let se=Math.max(1,_.width>>H),Q=Math.max(1,_.height>>H);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?t.texImage3D(C,H,w,se,Q,_.depth,0,K,G,null):t.texImage2D(C,H,w,se,Q,0,K,G,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,C,q.__webglTexture,0,ht(_)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,C,q.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(L,_,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),_.depthBuffer){let F=_.depthTexture,C=F&&F.isDepthTexture?F.type:null,H=b(_.stencilBuffer,C),K=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(_),H,_.width,_.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(_),H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,L)}else{let F=_.textures;for(let C=0;C<F.length;C++){let H=F[C],K=r.convert(H.format,H.colorSpace),G=r.convert(H.type),w=M(H.internalFormat,K,G,H.normalized,H.colorSpace);Lt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(_),w,_.width,_.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(_),w,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,w,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(L,_,J){let F=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let C=n.get(_.depthTexture);if(C.__renderTarget=_,(!C.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),F){if(C.__webglInit===void 0&&(C.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),C.__webglTexture===void 0){C.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,_.depthTexture);let D=r.convert(_.depthTexture.format),q=r.convert(_.depthTexture.type),se;_.depthTexture.format===Si?se=i.DEPTH_COMPONENT24:_.depthTexture.format===Ts&&(se=i.DEPTH24_STENCIL8);for(let Q=0;Q<6;Q++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,se,_.width,_.height,0,D,q,null)}}else ne(_.depthTexture,0);let H=C.__webglTexture,K=ht(_),G=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,w=_.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Si)Lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,w,G,H,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,w,G,H,0);else if(_.depthTexture.format===Ts)Lt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,w,G,H,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,w,G,H,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(L){let _=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==L.depthTexture){let F=L.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){let C=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",C)};F.addEventListener("dispose",C),_.__depthDisposeCallback=C}_.__boundDepthTexture=F}if(L.depthTexture&&!_.__autoAllocateDepthBuffer)if(J)for(let F=0;F<6;F++)Mt(_.__webglFramebuffer[F],L,F);else{let F=L.texture.mipmaps;F&&F.length>0?Mt(_.__webglFramebuffer[0],L,0):Mt(_.__webglFramebuffer,L,0)}else if(J){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[F],L,!1);else{let C=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,H)}}else{let F=L.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,L,!1);else{let C=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(L,_,J){let F=n.get(L);_!==void 0&&ve(F.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Oe(L)}function je(L){let _=L.texture,J=n.get(L),F=n.get(_);L.addEventListener("dispose",x);let C=L.textures,H=L.isWebGLCubeRenderTarget===!0,K=C.length>1;if(K||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=_.version,o.memory.textures++),H){J.__webglFramebuffer=[];for(let G=0;G<6;G++)if(_.mipmaps&&_.mipmaps.length>0){J.__webglFramebuffer[G]=[];for(let w=0;w<_.mipmaps.length;w++)J.__webglFramebuffer[G][w]=i.createFramebuffer()}else J.__webglFramebuffer[G]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){J.__webglFramebuffer=[];for(let G=0;G<_.mipmaps.length;G++)J.__webglFramebuffer[G]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(K)for(let G=0,w=C.length;G<w;G++){let D=n.get(C[G]);D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Lt(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let G=0;G<C.length;G++){let w=C[G];J.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[G]);let D=r.convert(w.format,w.colorSpace),q=r.convert(w.type),se=M(w.internalFormat,D,q,w.normalized,w.colorSpace,L.isXRRenderTarget===!0),Q=ht(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,se,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,J.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,_);for(let G=0;G<6;G++)if(_.mipmaps&&_.mipmaps.length>0)for(let w=0;w<_.mipmaps.length;w++)ve(J.__webglFramebuffer[G][w],L,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,w);else ve(J.__webglFramebuffer[G],L,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);p(_)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let G=0,w=C.length;G<w;G++){let D=C[G],q=n.get(D),se=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ee(se,D),ve(J.__webglFramebuffer,L,D,i.COLOR_ATTACHMENT0+G,se,0),p(D)&&S(se)}t.unbindTexture()}else{let G=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(G=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(G,F.__webglTexture),Ee(G,_),_.mipmaps&&_.mipmaps.length>0)for(let w=0;w<_.mipmaps.length;w++)ve(J.__webglFramebuffer[w],L,_,i.COLOR_ATTACHMENT0,G,w);else ve(J.__webglFramebuffer,L,_,i.COLOR_ATTACHMENT0,G,0);p(_)&&S(G),t.unbindTexture()}L.depthBuffer&&Oe(L)}function Ve(L){let _=L.textures;for(let J=0,F=_.length;J<F;J++){let C=_[J];if(p(C)){let H=A(L),K=n.get(C).__webglTexture;t.bindTexture(H,K),S(H),t.unbindTexture()}}}let et=[],qe=[];function Nt(L){if(L.samples>0){if(Lt(L)===!1){let _=L.textures,J=L.width,F=L.height,C=i.COLOR_BUFFER_BIT,H=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(L),G=_.length>1;if(G)for(let D=0;D<_.length;D++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer);let w=L.texture.mipmaps;w&&w.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let D=0;D<_.length;D++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[D]);let q=n.get(_[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,J,F,0,0,J,F,C,i.NEAREST),l===!0&&(et.length=0,qe.length=0,et.push(i.COLOR_ATTACHMENT0+D),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(et.push(H),qe.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let D=0;D<_.length;D++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,K.__webglColorRenderbuffer[D]);let q=n.get(_[D]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let _=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ht(L){return Math.min(s.maxSamples,L.samples)}function Lt(L){let _=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function V(L){let _=o.render.frame;u.get(L)!==_&&(u.set(L,_),L.update())}function Et(L,_){let J=L.colorSpace,F=L.format,C=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Co&&J!==Ji&&(nt.getTransfer(J)===_t?(F!==qn||C!==En)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",J)),_}function Ge(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=He,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qy(i,e){function t(n,s=Ji){let r,o=nt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===eu)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===kl)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===qn)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Jl||n===Kl||n===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===ec||n===tc||n===nc||n===ic||n===ha||n===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===ec)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nc)return r.COMPRESSED_R11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===vc||n===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===bc||n===ua||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:jy,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends bi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new Iu,p={},S=t.getContextAttributes(),A=null,M=null,b=[],v=[],R=new ge,x=null,T=null,P=new cn;P.viewport=new Vt;let U=new cn;U.viewport=new Vt;let O=[P,U],X=new Ol,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=b[ie];return oe===void 0&&(oe=new Hr,b[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=b[ie];return oe===void 0&&(oe=new Hr,b[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=b[ie];return oe===void 0&&(oe=new Hr,b[ie]=oe),oe.getHandSpace()};function Z(ie){let oe=v.indexOf(ie.inputSource);if(oe===-1)return;let xe=b[oe];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||o),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<b.length;ie++){let oe=v[ie];oe!==null&&(v[ie]=null,b[ie].disconnect(oe))}N=null,W=null,m.reset();for(let ie in p)delete p[ie];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,M=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),T!==null){let ie=T.camera;ie.fov=T.fov,ie.zoom=T.zoom,ie.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ne=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?Ts:Si,Ne=S.stencil?Qr:ui);let ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new jt(h.textureWidth,h.textureHeight,{format:qn,type:En,depthTexture:new ms(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new jt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ie){for(let oe=0;oe<ie.removed.length;oe++){let xe=ie.removed[oe],Ne=v.indexOf(xe);Ne>=0&&(v[Ne]=null,b[Ne].disconnect(xe))}for(let oe=0;oe<ie.added.length;oe++){let xe=ie.added[oe],Ne=v.indexOf(xe);if(Ne===-1){for(let ze=0;ze<b.length;ze++)if(ze>=v.length){v.push(xe),Ne=ze;break}else if(v[ze]===null){v[ze]=xe,Ne=ze;break}if(Ne===-1)break}let ve=b[Ne];ve&&ve.connect(xe)}}let Y=new I,$=new I;function te(ie,oe,xe){Y.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(xe.matrixWorld);let Ne=Y.distanceTo($),ve=oe.projectionMatrix.elements,ze=xe.projectionMatrix.elements,Mt=ve[14]/(ve[10]-1),Oe=ve[14]/(ve[10]+1),He=(ve[9]+1)/ve[5],je=(ve[9]-1)/ve[5],Ve=(ve[8]-1)/ve[0],et=(ze[8]+1)/ze[0],qe=Mt*Ve,Nt=Mt*et,ht=Ne/(-Ve+et),Lt=ht*-Ve;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Lt),ie.translateZ(ht),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ve[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let V=Mt+ht,Et=Oe+ht,Ge=qe-Lt,L=Nt+(Ne-Lt),_=He*Oe/Et*V,J=je*Oe/Et*V;ie.projectionMatrix.makePerspective(Ge,L,_,J,V,Et),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let oe=ie.near,xe=ie.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),X.near=U.near=P.near=oe,X.far=U.far=P.far=xe,(N!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,W=X.far),X.layers.mask=ie.layers.mask|6,P.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let Ne=ie.parent,ve=X.cameras;pe(X,Ne);for(let ze=0;ze<ve.length;ze++)pe(ve[ze],Ne);ve.length===2?te(X,P,U):X.projectionMatrix.copy(P.projectionMatrix),T===null&&ie.isPerspectiveCamera&&(T={camera:ie,fov:ie.fov,zoom:ie.zoom}),ue(ie,X,Ne)};function ue(ie,oe,xe){xe===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Fr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(ie){return p[ie]};let Me=null;function Ee(ie,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;xe.length!==X.cameras.length&&(X.cameras.length=0,Ne=!0);for(let Oe=0;Oe<xe.length;Oe++){let He=xe[Oe],je=null;if(f!==null)je=f.getViewport(He);else{let et=d.getViewSubImage(h,He);je=et.viewport,Oe===0&&(e.setRenderTargetTextures(M,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(M))}let Ve=O[Oe];Ve===void 0&&(Ve=new cn,Ve.layers.enable(Oe),Ve.viewport=new Vt,O[Oe]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(je.x,je.y,je.width,je.height),Oe===0&&(X.matrix.copy(Ve.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ne===!0&&X.cameras.push(Ve)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Oe=d.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<xe.length;Oe++){let He=xe[Oe].camera;if(He){let je=p[He];je||(je=new Ho,p[He]=je);let Ve=d.getCameraImage(He);je.sourceTexture=Ve}}}}for(let xe=0;xe<b.length;xe++){let Ne=v[xe],ve=b[xe];Ne!==null&&ve!==void 0&&ve.update(Ne,oe,c||o)}Me&&Me(ie,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ue=new Kf;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}},tv=new it,ip=new Ye;ip.set(-1,0,0,0,1,0,0,0,1);function nv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ip),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=s[M.id];v===void 0&&(m(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",S));let R=b.program;n.updateUBOMapping(M,R);let x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){let b=d();M.__bindingPointIndex=b;let v=i.createBuffer(),R=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=v.length;x<T;x++){let P=v[x];if(Array.isArray(P))for(let U=0,O=P.length;U<O;U++)f(P[U],x,U,R);else f(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,v,R){if(y(M,b,v,R)===!0){let x=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let U=0;U<T.length;U++){let O=T[U],X=p(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,v){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,v)}function y(M,b,v,R){let x=M.value,T=b+"_"+v;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{let P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(M){let b=M.uniforms,v=0,R=16;for(let T=0,P=b.length;T<P;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let O=0,X=U.length;O<X;O++){let N=U[O],W=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,z=W.length;Z<z;Z++){let ne=W[Z],Y=p(ne),$=v%R,te=$%Y.boundary,pe=$+te;v+=te,pe!==0&&R-pe<Y.storage&&(v+=R-pe),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}let x=v%R;return x>0&&(v+=R-x),M.__size=v,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){let b=M.target;b.removeEventListener("dispose",S);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function rv(){return Ci===null&&(Ci=new Bo(sv,16,16,ws,un),Ci.name="DFG_LUT",Ci.minFilter=hn,Ci.magFilter=hn,Ci.wrapS=vi,Ci.wrapT=vi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Lc=class{constructor(e={}){let{canvas:t=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([Zl,Yl,ql]),p=new Set([En,ui,Kr,Qr,Vl,Wl]),S=new Uint32Array(4),A=new Int32Array(4),M=new I,b=null,v=null,R=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,O=null,X=null,N=null,W=null;this._outputColorSpace=kt;let Z=0,z=0,ne=null,Y=-1,$=null,te=new Vt,pe=new Vt,ue=null,Me=new Te(0),Ee=0,Ue=t.width,ie=t.height,oe=1,xe=null,Ne=null,ve=new Vt(0,0,Ue,ie),ze=new Vt(0,0,Ue,ie),Mt=!1,Oe=new Vr,He=!1,je=!1,Ve=new it,et=new I,qe=new Vt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function Lt(){return ne===null?oe:1}let V=n;function Et(E,k){return t.getContext(E,k)}let Ge,L,_,J,F,C,H,K,G,w,D,q,se,Q,he,de,Se,B,me,ae,fe,ye,ce;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Gt,!1),V===null){let k="webgl2";if(V=Et(k,E),V===null)throw Et(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(E){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),We("WebGLRenderer: "+E.message),E}function Ce(){Ge=new d_(V),Ge.init(),fe=new Qy(V,Ge),L=new n_(V,Ge,e,fe),_=new Jy(V,Ge),L.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),X=V.createFramebuffer(),N=V.createFramebuffer(),W=V.createFramebuffer(),J=new m_(V),F=new Fy,C=new Ky(V,Ge,_,F,L,fe,J),H=new u_(P),K=new x0(V),ye=new e_(V,K),G=new f_(V,K,J,ye),w=new x_(V,G,K,ye,J),B=new g_(V,L,C),he=new i_(F),D=new Uy(P,H,Ge,L,ye,he),q=new nv(P,F),se=new Oy,Q=new Wy(Ge),Se=new jx(P,H,_,w,g,l),de=new $y(P,w,L),ce=new iv(V,J,L,_),me=new t_(V,Ge,J),ae=new p_(V,Ge,J),J.programs=D.programs,P.capabilities=L,P.extensions=Ge,P.properties=F,P.renderLists=se,P.shadowMap=de,P.state=_,P.info=J}y!==En&&(T=new y_(y,t.width,t.height,a,s,r));let be=new Lu(P,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(Ue,ie,!1))},this.getSize=function(E){return E.set(Ue,ie)},this.setSize=function(E,k,re=!0){if(be.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,ie=k,t.width=Math.floor(E*oe),t.height=Math.floor(k*oe),re===!0&&(t.style.width=E+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Ue*oe,ie*oe).floor()},this.setDrawingBufferSize=function(E,k,re){Ue=E,ie=k,oe=re,t.width=Math.floor(E*re),t.height=Math.floor(k*re),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(y===En){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(te)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,k,re,j){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,k,re,j),_.viewport(te.copy(ve).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,k,re,j){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,k,re,j),_.scissor(pe.copy(ze).multiplyScalar(oe).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(E){_.setScissorTest(Mt=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,re=!0){let j=0;if(E){let ee=!1;if(ne!==null){let Re=ne.texture.format;ee=m.has(Re)}if(ee){let Re=ne.texture.type,Ie=p.has(Re),Ae=Se.getClearColor(),Le=Se.getClearAlpha(),Fe=Ae.r,$e=Ae.g,ot=Ae.b;Ie?(S[0]=Fe,S[1]=$e,S[2]=ot,S[3]=Le,V.clearBufferuiv(V.COLOR,0,S)):(A[0]=Fe,A[1]=$e,A[2]=ot,A[3]=Le,V.clearBufferiv(V.COLOR,0,A))}else j|=V.COLOR_BUFFER_BIT}k&&(j|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),Se.dispose(),se.dispose(),Q.dispose(),F.dispose(),H.dispose(),w.dispose(),ye.dispose(),ce.dispose(),D.dispose(),be.dispose(),be.removeEventListener("sessionstart",ss),be.removeEventListener("sessionend",Ca),Oi.stop()};function tt(E){E.preventDefault(),Io("WebGLRenderer: Context Lost."),U=!0}function rt(){Io("WebGLRenderer: Context Restored."),U=!1;let E=J.autoReset,k=de.enabled,re=de.autoUpdate,j=de.needsUpdate,ee=de.type;Ce(),J.autoReset=E,de.enabled=k,de.autoUpdate=re,de.needsUpdate=j,de.type=ee}function Gt(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){let k=E.target;k.removeEventListener("dispose",Yt),Rn(k)}function Rn(E){is(E),F.remove(E)}function is(E){let k=F.get(E).programs;k!==void 0&&(k.forEach(function(re){D.releaseProgram(re)}),E.isShaderMaterial&&D.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,re,j,ee,Re){k===null&&(k=Nt);let Ie=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ae=Cn(E,k,re,j,ee);_.setMaterial(j,Ie);let Le=re.index,Fe=1;if(j.wireframe===!0){if(Le=G.getWireframeAttribute(re),Le===void 0)return;Fe=2}let $e=re.drawRange,ot=re.attributes.position,De=$e.start*Fe,St=($e.start+$e.count)*Fe;Re!==null&&(De=Math.max(De,Re.start*Fe),St=Math.min(St,(Re.start+Re.count)*Fe)),Le!==null?(De=Math.max(De,0),St=Math.min(St,Le.count)):ot!=null&&(De=Math.max(De,0),St=Math.min(St,ot.count));let Kt=St-De;if(Kt<0||Kt===1/0)return;ye.setup(ee,j,Ae,re,Le);let Ft,Dt=me;if(Le!==null&&(Ft=K.get(Le),Dt=ae,Dt.setIndex(Ft)),ee.isMesh)j.wireframe===!0?(_.setLineWidth(j.wireframeLinewidth*Lt()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(ee.isLine){let mn=j.linewidth;mn===void 0&&(mn=1),_.setLineWidth(mn*Lt()),ee.isLineSegments?Dt.setMode(V.LINES):ee.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else ee.isPoints?Dt.setMode(V.POINTS):ee.isSprite&&Dt.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let mn=ee._multiDrawStarts,Pe=ee._multiDrawCounts,Mn=ee._multiDrawCount,ft=Le?K.get(Le).bytesPerElement:1,Hn=F.get(j).currentProgram.getUniforms();for(let _i=0;_i<Mn;_i++)Hn.setValue(V,"_gl_DrawID",_i),Dt.render(mn[_i]/ft,Pe[_i])}else if(ee.isInstancedMesh)Dt.renderInstances(De,Kt,ee.count);else if(re.isInstancedBufferGeometry){let mn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Pe=Math.min(re.instanceCount,mn);Dt.renderInstances(De,Kt,Pe)}else Dt.render(De,Kt)};function Qn(E,k,re,j){O!==null&&E.isNodeMaterial&&O.setObject(j,E),He===!0&&he.setState(E,re,!1),E.transparent===!0&&E.side===Pt&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,os(E,k,j),E.side=Ss,E.needsUpdate=!0,os(E,k,j),E.side=Pt):os(E,k,j)}this.compile=function(E,k,re=null){re===null&&(re=E),O!==null&&O.renderStart(E,k,re),v=Q.get(re),v.init(k),x.push(v),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),E!==re&&E.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),je=this.localClippingEnabled,He=he.init(this.clippingPlanes,je),He===!0&&he.setGlobalState(this.clippingPlanes,k),O!==null&&de.render(v.state.shadowsArray,re,k);let j=new Set;return E.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){let Ae=Re[Ie];Qn(Ae,re,k,ee),j.add(Ae)}else Qn(Re,re,k,ee),j.add(Re)}),v=x.pop(),O!==null&&O.renderEnd(),j},this.compileAsync=function(E,k,re=null){let j=this.compile(E,k,re);return new Promise(ee=>{function Re(){if(j.forEach(function(Ie){let Le=F.get(Ie).currentProgram;(Le===void 0||Le.isReady())&&j.delete(Ie)}),j.size===0){ee(E);return}setTimeout(Re,10)}Ge.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let jn=null;function ei(E){jn&&jn(E)}function ss(){Oi.stop()}function Ca(){Oi.start()}let Oi=new Kf;Oi.setAnimationLoop(ei),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(E){jn=E,be.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},be.addEventListener("sessionstart",ss),be.addEventListener("sessionend",Ca),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(E,k);let re=be.enabled===!0&&be.isPresenting===!0,j=T!==null&&(ne===null||re)&&T.begin(P,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(k),k=be.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,k,ne),v=Q.get(E,x.length),v.init(k),v.state.textureUnits=C.getTextureUnits(),x.push(v),Ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Oe.setFromProjectionMatrix(Ve,ai,k.reversedDepth),je=this.localClippingEnabled,He=he.init(this.clippingPlanes,je),b=se.get(E,R.length),b.init(),R.push(b),be.enabled===!0&&be.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&rs(Ie,k,-1/0,P.sortObjects)}rs(E,k,0,P.sortObjects),b.finish(),O!==null&&O.updateLights(v.state.lightsArray),P.sortObjects===!0&&b.sort(xe,Ne),ht=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ht&&Se.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&he.beginShadows();let ee=v.state.shadowsArray;if(de.render(ee,E,k),He===!0&&he.endShadows(),(j&&T.hasRenderPass())===!1){let Ie=b.opaque,Ae=b.transmissive;if(v.setupLights(),k.isArrayCamera){let Le=k.cameras;if(Ae.length>0)for(let Fe=0,$e=Le.length;Fe<$e;Fe++){let ot=Le[Fe];Pa(Ie,Ae,E,ot)}ht&&Se.render(E);for(let Fe=0,$e=Le.length;Fe<$e;Fe++){let ot=Le[Fe];lr(b,E,ot,ot.viewport)}}else Ae.length>0&&Pa(Ie,Ae,E,k),ht&&Se.render(E),lr(b,E,k)}ne!==null&&z===0&&(C.updateMultisampleRenderTarget(ne),C.updateRenderTargetMipmap(ne)),j&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,k),ye.resetDefaultState(),Y=-1,$=null,x.pop(),x.length>0?(v=x[x.length-1],C.setTextureUnits(v.state.textureUnits),He===!0&&he.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,O!==null&&O.renderEnd()};function rs(E,k,re,j){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)re=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)v.pushLightProbeGrid(E);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Oe)){j&&qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ve);let Ie=w.update(E),Ae=E.material;Ae.visible&&b.push(E,Ie,Ae,re,qe.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Oe))){let Ie=w.update(E),Ae=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qe.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),qe.copy(Ie.boundingSphere.center)),qe.applyMatrix4(E.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ae)){let Le=Ie.groups;for(let Fe=0,$e=Le.length;Fe<$e;Fe++){let ot=Le[Fe],De=Ae[ot.materialIndex];De&&De.visible&&b.push(E,Ie,De,re,qe.z,ot,k)}}else Ae.visible&&b.push(E,Ie,Ae,re,qe.z,null,k)}}let Re=E.children;for(let Ie=0,Ae=Re.length;Ie<Ae;Ie++)rs(Re[Ie],k,re,j)}function lr(E,k,re,j){let{opaque:ee,transmissive:Re,transparent:Ie}=E;v.setupLightsView(re),He===!0&&he.setGlobalState(P.clippingPlanes,re),j&&_.viewport(te.copy(j)),ee.length>0&&gi(ee,k,re),Re.length>0&&gi(Re,k,re),Ie.length>0&&gi(Ie,k,re),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Pa(E,k,re,j){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[j.id]===void 0){let De=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[j.id]=new jt(1,1,{generateMipmaps:!0,type:De?un:En,minFilter:Es,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Re=v.state.transmissionRenderTarget[j.id],Ie=j.viewport||te;Re.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let Ae=P.getRenderTarget(),Le=P.getActiveCubeFace(),Fe=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(Me),Ee=P.getClearAlpha(),Ee<1&&P.setClearColor(16777215,.5),P.clear(),ht&&Se.render(re);let $e=P.toneMapping;P.toneMapping=hi;let ot=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),v.setupLightsView(j),He===!0&&he.setGlobalState(P.clippingPlanes,j),gi(E,re,j),C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let St=0,Kt=k.length;St<Kt;St++){let Ft=k[St],{object:Dt,geometry:mn,material:Pe,group:Mn}=Ft;if(Pe.side===Pt&&Dt.layers.test(j.layers)){let ft=Pe.side;Pe.side=Jt,Pe.needsUpdate=!0,cr(Dt,re,j,mn,Pe,Mn),Pe.side=ft,Pe.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ae,Le,Fe),P.setClearColor(Me,Ee),ot!==void 0&&(j.viewport=ot),P.toneMapping=$e}function gi(E,k,re){let j=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Re=E.length;ee<Re;ee++){let Ie=E[ee],{object:Ae,geometry:Le,group:Fe}=Ie,$e=Ie.material;$e.allowOverride===!0&&j!==null&&($e=j),Ae.layers.test(re.layers)&&cr(Ae,k,re,Le,$e,Fe)}}function cr(E,k,re,j,ee,Re){O!==null&&ee.isNodeMaterial&&O.setObject(E,ee),E.onBeforeRender(P,k,re,j,ee,Re),E.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(P,k,re,j,E,Re),ee.transparent===!0&&ee.side===Pt&&ee.forceSinglePass===!1?(ee.side=Jt,ee.needsUpdate=!0,P.renderBufferDirect(re,k,j,ee,E,Re),ee.side=Ss,ee.needsUpdate=!0,P.renderBufferDirect(re,k,j,ee,E,Re),ee.side=Pt):P.renderBufferDirect(re,k,j,ee,E,Re),E.onAfterRender(P,k,re,j,ee,Re)}function os(E,k,re){k.isScene!==!0&&(k=Nt);let j=F.get(E),ee=v.state.lights,Re=v.state.shadowsArray,Ie=ee.state.version,Ae=D.getParameters(E,ee.state,Re,k,re,v.state.lightProbeGridArray),Le=D.getProgramCacheKey(Ae),Fe=j.programs;j.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;let $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;j.envMap=H.get(E.envMap||j.environment,$e),j.envMapRotation=j.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Yt),Fe=new Map,j.programs=Fe);let ot=Fe.get(Le);if(ot!==void 0){if(j.currentProgram===ot&&j.lightsStateVersion===Ie)return xi(E,Ae),ot}else Ae.uniforms=D.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,re,Ae),E.onBeforeCompile(Ae,P),ot=D.acquireProgram(Ae,Le),Fe.set(Le,ot),j.uniforms=Ae.uniforms;let De=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=he.uniform),xi(E,Ae),j.needsLights=Pn(E),j.lightsStateVersion=Ie,j.needsLights&&(De.ambientLightColor.value=ee.state.ambient,De.lightProbe.value=ee.state.probe,De.sunLights.value=ee.state.sun,De.sunLightShadows.value=ee.state.sunShadow,De.directionalLights.value=ee.state.directional,De.directionalLightShadows.value=ee.state.directionalShadow,De.spotLights.value=ee.state.spot,De.spotLightShadows.value=ee.state.spotShadow,De.rectAreaLights.value=ee.state.rectArea,De.ltc_1.value=ee.state.rectAreaLTC1,De.ltc_2.value=ee.state.rectAreaLTC2,De.pointLights.value=ee.state.point,De.pointLightShadows.value=ee.state.pointShadow,De.hemisphereLights.value=ee.state.hemi,De.sunShadowMatrix.value=ee.state.sunShadowMatrix,De.sunShadowCascade.value=ee.state.sunShadowCascade,De.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,De.spotLightMatrix.value=ee.state.spotLightMatrix,De.spotLightMap.value=ee.state.spotLightMap,De.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=v.state.lightProbeGridArray.length>0,j.currentProgram=ot,j.uniformsList=null,ot}function Ia(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function xi(E,k){let re=F.get(E);re.outputColorSpace=k.outputColorSpace,re.batching=k.batching,re.batchingColor=k.batchingColor,re.instancing=k.instancing,re.instancingColor=k.instancingColor,re.instancingMorph=k.instancingMorph,re.skinning=k.skinning,re.morphTargets=k.morphTargets,re.morphNormals=k.morphNormals,re.morphColors=k.morphColors,re.morphTargetsCount=k.morphTargetsCount,re.numClippingPlanes=k.numClippingPlanes,re.numIntersection=k.numClipIntersection,re.vertexAlphas=k.vertexAlphas,re.vertexTangents=k.vertexTangents,re.toneMapping=k.toneMapping}function xt(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let re=0,j=E.length;re<j;re++){let ee=E[re];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function Cn(E,k,re,j,ee){k.isScene!==!0&&(k=Nt),C.resetTextureUnits();let Re=k.fog,Ie=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Ae=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Fe=H.get(j.envMap||Ie,Le),$e=j.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!re.morphAttributes.position,St=!!re.morphAttributes.normal,Kt=!!re.morphAttributes.color,Ft=hi;j.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ft=P.toneMapping);let Dt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mn=Dt!==void 0?Dt.length:0,Pe=F.get(j),Mn=v.state.lights;if(He===!0&&(je===!0||E!==$)){let Ut=E===$&&j.id===Y;he.setState(j,E,Ut)}let ft=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Mn.state.version||Pe.outputColorSpace!==Ae||ee.isBatchedMesh&&Pe.batching===!1||!ee.isBatchedMesh&&Pe.batching===!0||ee.isBatchedMesh&&Pe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Pe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Pe.instancing===!1||!ee.isInstancedMesh&&Pe.instancing===!0||ee.isSkinnedMesh&&Pe.skinning===!1||!ee.isSkinnedMesh&&Pe.skinning===!0||ee.isInstancedMesh&&Pe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Pe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Pe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Pe.instancingMorph===!1&&ee.morphTexture!==null||Pe.envMap!==Fe||j.fog===!0&&Pe.fog!==Re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==he.numPlanes||Pe.numIntersection!==he.numIntersection)||Pe.vertexAlphas!==$e||Pe.vertexTangents!==ot||Pe.morphTargets!==De||Pe.morphNormals!==St||Pe.morphColors!==Kt||Pe.toneMapping!==Ft||Pe.morphTargetsCount!==mn||!!Pe.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Pe.__version=j.version);let Hn=Pe.currentProgram;ft===!0&&(Hn=os(j,k,ee),O&&j.isNodeMaterial&&O.onUpdateProgram(j,Hn,Pe));let _i=!1,as=!1,hr=!1,At=Hn.getUniforms(),Zt=Pe.uniforms;if(_.useProgram(Hn.program)&&(_i=!0,as=!0,hr=!0),j.id!==Y&&(Y=j.id,as=!0),Pe.needsLights){let Ut=xt(v.state.lightProbeGridArray,ee);Pe.lightProbeGrid!==Ut&&(Pe.lightProbeGrid=Ut,as=!0)}if(_i||$!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(V,"projectionMatrix",E.projectionMatrix),At.setValue(V,"viewMatrix",E.matrixWorldInverse);let cs=At.map.cameraPosition;cs!==void 0&&cs.setValue(V,et.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&At.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,as=!0,hr=!0)}if(Pe.needsLights&&(Mn.state.sunShadowMap.length>0&&At.setValue(V,"sunShadowMap",Mn.state.sunShadowMap,C),Mn.state.directionalShadowMap.length>0&&At.setValue(V,"directionalShadowMap",Mn.state.directionalShadowMap,C),Mn.state.spotShadowMap.length>0&&At.setValue(V,"spotShadowMap",Mn.state.spotShadowMap,C),Mn.state.pointShadowMap.length>0&&At.setValue(V,"pointShadowMap",Mn.state.pointShadowMap,C)),ee.isSkinnedMesh){At.setOptional(V,ee,"bindMatrix"),At.setOptional(V,ee,"bindMatrixInverse");let Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),At.setValue(V,"boneTexture",Ut.boneTexture,C))}ee.isBatchedMesh&&(At.setOptional(V,ee,"batchingTexture"),At.setValue(V,"batchingTexture",ee._matricesTexture,C),At.setOptional(V,ee,"batchingIdTexture"),At.setValue(V,"batchingIdTexture",ee._indirectTexture,C),At.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(V,"batchingColorTexture",ee._colorsTexture,C));let ls=re.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&B.update(ee,re,Hn),(as||Pe.receiveShadow!==ee.receiveShadow)&&(Pe.receiveShadow=ee.receiveShadow,At.setValue(V,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Zt.envMapIntensity.value=k.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=rv()),as){if(At.setValue(V,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&On(Zt,hr),Re&&j.fog===!0&&q.refreshFogUniforms(Zt,Re),q.refreshMaterialUniforms(Zt,j,oe,ie,v.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.lightProbeGrid){let Ut=Pe.lightProbeGrid;Zt.probesSH.value=Ut.texture,Zt.probesMin.value.copy(Ut.boundingBox.min),Zt.probesMax.value.copy(Ut.boundingBox.max),Zt.probesResolution.value.copy(Ut.resolution)}to.upload(V,Ia(Pe),Zt,C)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(to.upload(V,Ia(Pe),Zt,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(V,"center",ee.center),At.setValue(V,"modelViewMatrix",ee.modelViewMatrix),At.setValue(V,"normalMatrix",ee.normalMatrix),At.setValue(V,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){let Ut=j.uniformsGroups;for(let cs=0,ur=Ut.length;cs<ur;cs++){let ad=Ut[cs];ce.update(ad,Hn),ce.bind(ad,Hn)}}return Hn}function On(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Pn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,k,re){let j=F.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),F.get(E.texture).__webglTexture=k,F.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:re,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let re=F.get(E);re.__webglFramebuffer=k,re.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,re=0){ne=E,Z=k,z=re;let j=null,ee=!1,Re=!1;if(E){let Ae=F.get(E);if(Ae.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),te.copy(E.viewport),pe.copy(E.scissor),ue=E.scissorTest,_.viewport(te),_.scissor(pe),_.setScissorTest(ue),Y=-1;return}else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Ae.__hasExternalTextures)C.rebindTextures(E,F.get(E.texture).__webglTexture,F.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $e=E.depthTexture;if(Ae.__boundDepthTexture!==$e){if($e!==null&&F.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Re=!0);let Fe=F.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?j=Fe[k][re]:j=Fe[k],ee=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?j=F.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[re]:j=Fe,te.copy(E.viewport),pe.copy(E.scissor),ue=E.scissorTest}else te.copy(ve).multiplyScalar(oe).floor(),pe.copy(ze).multiplyScalar(oe).floor(),ue=Mt;if(re!==0&&(j=X),_.bindFramebuffer(V.FRAMEBUFFER,j)&&_.drawBuffers(E,j),_.viewport(te),_.scissor(pe),_.setScissorTest(ue),ee){let Ae=F.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,re)}else if(Re){let Ae=k;for(let Le=0;Le<E.textures.length;Le++){let Fe=F.get(E.textures[Le]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,re,Ae)}}else if(E!==null&&re!==0){let Ae=F.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,re)}Y=-1};function ti(E){let k=F.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=L.textureFormatReadable(E.format),k.__typeReadable=L.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,re,j,ee,Re,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=F.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){_.bindFramebuffer(V.FRAMEBUFFER,Le);try{let Fe=E.textures[Ae],$e=Fe.format,ot=Fe.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let De=ti(Fe);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-j&&re>=0&&re<=E.height-ee&&V.readPixels(k,re,j,ee,fe.convert($e),fe.convert(ot),Re)}finally{let Fe=ne!==null?F.get(ne).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,k,re,j,ee,Re,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=F.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(k>=0&&k<=E.width-j&&re>=0&&re<=E.height-ee){_.bindFramebuffer(V.FRAMEBUFFER,Le);let Fe=E.textures[Ae],$e=Fe.format,ot=Fe.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let De=ti(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(k,re,j,ee,fe.convert($e),fe.convert(ot),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Kt=ne!==null?F.get(ne).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Kt);let Ft=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ef(V,Ft,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(St),V.deleteSync(Ft),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,re=0){let j=Math.pow(2,-re),ee=Math.floor(E.image.width*j),Re=Math.floor(E.image.height*j),Ie=k!==null?k.x:0,Ae=k!==null?k.y:0;C.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ie,Ae,ee,Re),_.unbindTexture()},this.copyTextureToTexture=function(E,k,re=null,j=null,ee=0,Re=0){let Ie,Ae,Le,Fe,$e,ot,De,St,Kt,Ft=E.isCompressedTexture?E.mipmaps[Re]:E.image;if(re!==null)Ie=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Le=re.isBox3?re.max.z-re.min.z:1,Fe=re.min.x,$e=re.min.y,ot=re.isBox3?re.min.z:0;else{let Zt=Math.pow(2,-ee);Ie=Math.floor(Ft.width*Zt),Ae=Math.floor(Ft.height*Zt),E.isDataArrayTexture?Le=Ft.depth:E.isData3DTexture?Le=Math.floor(Ft.depth*Zt):Le=1,Fe=0,$e=0,ot=0}j!==null?(De=j.x,St=j.y,Kt=j.z):(De=0,St=0,Kt=0);let Dt=fe.convert(k.format),mn=fe.convert(k.type),Pe;k.isData3DTexture?(C.setTexture3D(k,0),Pe=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Pe=V.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Pe=V.TEXTURE_2D),_.activeTexture(V.TEXTURE0),_.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);let Mn=_.getParameter(V.UNPACK_ROW_LENGTH),ft=_.getParameter(V.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(V.UNPACK_SKIP_PIXELS),_i=_.getParameter(V.UNPACK_SKIP_ROWS),as=_.getParameter(V.UNPACK_SKIP_IMAGES);_.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Fe),_.pixelStorei(V.UNPACK_SKIP_ROWS,$e),_.pixelStorei(V.UNPACK_SKIP_IMAGES,ot);let hr=E.isDataArrayTexture||E.isData3DTexture,At=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Zt=F.get(E),ls=F.get(k),Ut=F.get(Zt.__renderTarget),cs=F.get(ls.__renderTarget);_.bindFramebuffer(V.READ_FRAMEBUFFER,Ut.__webglFramebuffer),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let ur=0;ur<Le;ur++)hr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,F.get(E).__webglTexture,ee,ot+ur),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,F.get(k).__webglTexture,Re,Kt+ur)),V.blitFramebuffer(Fe,$e,Ie,Ae,De,St,Ie,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||E.isRenderTargetTexture||F.has(E)){let Zt=F.get(E),ls=F.get(k);_.bindFramebuffer(V.READ_FRAMEBUFFER,N),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,W);for(let Ut=0;Ut<Le;Ut++)hr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,ee,ot+Ut):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Zt.__webglTexture,ee),At?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ls.__webglTexture,Re,Kt+Ut):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ls.__webglTexture,Re),ee!==0?V.blitFramebuffer(Fe,$e,Ie,Ae,De,St,Ie,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):At?V.copyTexSubImage3D(Pe,Re,De,St,Kt+Ut,Fe,$e,Ie,Ae):V.copyTexSubImage2D(Pe,Re,De,St,Fe,$e,Ie,Ae);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else At?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(Pe,Re,De,St,Kt,Ie,Ae,Le,Dt,mn,Ft.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Pe,Re,De,St,Kt,Ie,Ae,Le,Dt,Ft.data):V.texSubImage3D(Pe,Re,De,St,Kt,Ie,Ae,Le,Dt,mn,Ft):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,De,St,Ie,Ae,Dt,mn,Ft.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,De,St,Ft.width,Ft.height,Dt,Ft.data):V.texSubImage2D(V.TEXTURE_2D,Re,De,St,Ie,Ae,Dt,mn,Ft);_.pixelStorei(V.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(V.UNPACK_SKIP_ROWS,_i),_.pixelStorei(V.UNPACK_SKIP_IMAGES,as),Re===0&&k.generateMipmaps&&V.generateMipmap(Pe),_.unbindTexture()},this.initRenderTarget=function(E){F.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){Z=0,z=0,ne=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ov=new Ms(-1,1,1,-1,0,1),Du=class extends lt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},av=new Du,As=class{constructor(e){this._mesh=new le(av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ov)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Uc=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ki.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new As(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fc=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uc(so),this.copyPass.material.blending=Wn,this.timer=new $o}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(o instanceof ma?n=!0:o instanceof Fc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oc=class extends Un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var sp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ro=class i extends Un{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new jt(r,o,{type:un,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new jt(r,o,{type:un,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=sp;this.highPassUniforms=Ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ge(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ki.clone(so.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,premultipliedAlpha:!0,blending:at,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new Ze,this._fsQuad=new As(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ge(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ro.BlurDirectionX=new ge(1,0);ro.BlurDirectionY=new ge(0,1);var ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Hc=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ki.clone(ga.uniforms),this.material=new Xr({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new As(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===na?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ta&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function mt(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function xa(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function vt(i,{repeat:e,srgb:t=!0}={}){let n=new Gn(i);return t&&(n.colorSpace=kt),n.anisotropy=4,e&&(n.wrapS=n.wrapT=Mi,n.repeat.set(e[0],e[1])),n}function zc(i,e,t,n,s,r=.08){for(let o=0;o<n;o++){let a=s()*255|0;i.fillStyle=`rgba(${a},${a*.85|0},${a*.6|0},${r*s()})`,i.fillRect(s()*e,s()*t,1+s()*3,1+s()*3)}}function rp(i=1,e=18){let[t,n]=mt(512,256),s=xa(i);n.fillStyle=`hsl(${e},55%,42%)`,n.fillRect(0,0,512,256),zc(n,512,256,9e3,s,.18),n.strokeStyle="rgba(40,18,6,.75)",n.fillStyle="rgba(40,18,6,.75)";for(let o of[40,52,196,208])n.fillRect(0,o,512,4);n.lineWidth=4;for(let o=0;o<12;o++){let a=22+o*42,l=124,c=(o+i)%4;if(n.beginPath(),c===0)for(let u=0;u<12;u+=.3)n.lineTo(a+Math.cos(u)*u*1.4,l+Math.sin(u)*u*1.4);else c===1?(n.moveTo(a-14,l+14),n.lineTo(a-5,l-14),n.lineTo(a+5,l+14),n.lineTo(a+14,l-14)):c===2?(n.arc(a,l,12,0,7),n.moveTo(a,l-22),n.lineTo(a,l+22)):(n.moveTo(a-12,l),n.lineTo(a,l-16),n.lineTo(a+12,l),n.lineTo(a,l+16),n.closePath());n.stroke()}let r=n.createLinearGradient(0,0,0,256);return r.addColorStop(0,"rgba(255,220,170,.12)"),r.addColorStop(1,"rgba(0,0,0,.25)"),n.fillStyle=r,n.fillRect(0,0,512,256),vt(t)}function op(i=2,e=20,t=24){let[n,s]=mt(256,256),r=xa(i);return s.fillStyle=`hsl(${e},45%,${t}%)`,s.fillRect(0,0,256,256),zc(s,256,256,6e3,r,.2),vt(n)}function Gc(i,e,{w:t=768,h:n=512,seed:s=5,ink:r="#3a2610",font:o="Georgia,serif"}={}){let[a,l]=mt(t,n),c=xa(s),u=l.createRadialGradient(t/2,n/2,40,t/2,n/2,t*.7);if(u.addColorStop(0,"#f6e7c2"),u.addColorStop(.7,"#e6cf9c"),u.addColorStop(1,"#b98f55"),l.fillStyle=u,l.fillRect(0,0,t,n),zc(l,t,n,7e3,c,.1),i){l.fillStyle=r,l.textAlign="center";let d=_a(l,i,t*.82,`600 ${Math.round(n*.1)}px ${o}`),h=n*.12,f=n*.36-(d.length-1)*h/2;for(let g of d)l.fillText(g,t/2,f),f+=h;e&&(l.font=`italic ${Math.round(n*.055)}px ${o}`,l.fillStyle="rgba(58,38,16,.8)",l.fillText(e,t/2,f+h*.2)),l.fillStyle="rgba(58,38,16,.25)";for(let g=f+h*.9;g<n*.92;g+=n*.045)l.fillRect(t*.12,g,t*(.6+c()*.16),3)}return vt(a)}function _a(i,e,t,n){i.font=n;let s=e.split(/\s+/),r=[],o="";for(let a of s){let l=o?o+" "+a:a;i.measureText(l).width>t&&o?(r.push(o),o=a):o=l}return o&&r.push(o),r}function ap(i,{w:e=128,h:t=768,color:n="#9ff4ff",bg:s="#050b1a"}={}){let[r,o]=mt(e,t);o.fillStyle=s,o.fillRect(0,0,e,t),o.save(),o.translate(e/2,t/2),o.rotate(-Math.PI/2);let a=64;for(o.font=`600 ${a}px Georgia,serif`;o.measureText(i).width>t*.86&&a>22;)a-=2,o.font=`600 ${a}px Georgia,serif`;let l=o.measureText(i).width>t*.86?_a(o,i,t*.86,o.font).slice(0,2):[i];return o.textAlign="center",o.textBaseline="middle",o.fillStyle=n,o.shadowColor=n,o.shadowBlur=14,l.forEach((c,u)=>o.fillText(c,0,(u-(l.length-1)/2)*a*1.05)),o.restore(),o.strokeStyle=n,o.lineWidth=3,o.globalAlpha=.8,o.strokeRect(10,10,e-20,t-20),vt(r)}function Nu(i,{w:e=512,h:t=700,bg:n="#4a2412",color:s="#f0cf79",seed:r=3,border:o=!0}={}){let[a,l]=mt(e,t),c=xa(r);l.fillStyle=n,l.fillRect(0,0,e,t),zc(l,e,t,5e3,c,.2),o&&(l.strokeStyle=s,l.lineWidth=6,l.strokeRect(24,24,e-48,t-48),l.lineWidth=2,l.strokeRect(38,38,e-76,t-76)),l.fillStyle=s,l.textAlign="center",l.shadowColor=s,l.shadowBlur=6;let u=_a(l,i,e*.74,`600 ${Math.round(e*.1)}px Georgia,serif`).slice(0,6),d=e*.12,h=t*.45-(u.length-1)*d/2;for(let f of u)l.fillText(f,e/2,h),h+=d;return l.beginPath(),l.arc(e/2,t*.82,22,0,7),l.lineWidth=3,l.stroke(),vt(a)}function Xt(i="rgba(255,220,150,1)",e="rgba(255,180,80,0)",t=128){let[n,s]=mt(t,t),r=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);return r.addColorStop(0,i),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,t,t),vt(n)}function kc(){let[i,e]=mt(256,256);e.fillStyle="#ffd98a",e.shadowColor="#ffcf70",e.shadowBlur=18,e.beginPath(),e.ellipse(128,160,50,42,0,0,7),e.fill();for(let[t,n,s]of[[70,100,20],[105,70,22],[151,70,22],[186,100,20]])e.beginPath(),e.ellipse(t,n,s,s*1.2,0,0,7),e.fill();return e.strokeStyle="#ffd98a",e.lineWidth=5,e.beginPath(),e.arc(128,128,118,0,7),e.stroke(),vt(i)}function Uu(i,e,t){let[r,o]=mt(1280,512),a="600 88px Georgia,serif",l=_a(o,i,1140,a),c=l.slice(0,3);l.length>3&&(c[2]=c[2].replace(/\s*\S*$/,"")+"\u2026");let u=(30+c.length*50+(e?40:0)+12)*2;return r.height=u,o.fillStyle=t?"rgba(62,42,8,.88)":"rgba(24,15,6,.8)",Vc(o,8,8,1264,u-16,52),o.fill(),o.strokeStyle=t?"rgba(255,215,120,.98)":"rgba(240,207,121,.8)",o.lineWidth=6,o.stroke(),o.textAlign="center",o.fillStyle="#fff4dc",o.font=a,o.shadowColor="rgba(0,0,0,.55)",o.shadowBlur=8,c.forEach((d,h)=>o.fillText(d,1280/2,(62+h*50)*2)),e&&(o.font="700 48px system-ui,Helvetica,sans-serif",o.fillStyle="#f0cf79",o.fillText((t?"\u2713 FOUND \xB7 ":"")+e.toUpperCase(),1280/2,(62+c.length*50-6)*2)),r}function Vc(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function lp(i,e){let[s,r]=mt(1e3,560),o={jar:["#5a2a12","#c8743a","#ffd08a"],future:["#07122e","#1d4f8a","#9ff4ff"],scroll:["#3b2613","#8a6238","#f6e3b4"],table:["#2e1d0e","#7a5530","#f0cf79"],hidden:["#3a2605","#c9a043","#fff1c0"],video:["#120c05","#40301a","#f0cf79"],secret:["#2a1e04","#b8902e","#fff4c8"],book:["#2a1a0c","#7a5028","#ffe08a"]}[i.kind]||["#222","#555","#fff"],a=r.createRadialGradient(1e3/2,560*.45,30,1e3/2,560/2,1e3*.65);a.addColorStop(0,o[1]),a.addColorStop(1,o[0]),r.fillStyle=a,r.fillRect(0,0,1e3,560);let l=xa(i.id.charCodeAt(1)*31+i.id.charCodeAt(2));for(let u=0;u<160;u++)r.fillStyle=`rgba(255,230,170,${l()*.5})`,r.beginPath(),r.arc(l()*1e3,l()*560,l()*2.2,0,7),r.fill();if(r.save(),r.translate(1e3/2,560*.36),r.strokeStyle=o[2],r.fillStyle=o[2],r.lineWidth=5,r.shadowColor=o[2],r.shadowBlur=24,i.kind==="jar")r.beginPath(),r.moveTo(-30,-80),r.quadraticCurveTo(-95,-20,-60,70),r.lineTo(60,70),r.quadraticCurveTo(95,-20,30,-80),r.closePath(),r.stroke(),r.strokeRect(-40,-100,80,16);else if(i.kind==="future")r.strokeRect(-60,-90,120,170),r.beginPath(),r.moveTo(-40,-90),r.lineTo(-40,80),r.stroke();else if(i.kind==="scroll")r.strokeRect(-110,-60,220,120),r.beginPath(),r.arc(-110,0,16,0,7),r.arc(110,0,16,0,7),r.stroke();else{r.strokeRect(-80,-70,160,120),r.beginPath();for(let u=-40;u<40;u+=18)r.moveTo(-55,u),r.lineTo(55,u);r.stroke()}r.restore(),r.textAlign="center",r.fillStyle="#fff4dc",r.shadowColor="rgba(0,0,0,.6)",r.shadowBlur=10;let c=_a(r,i.title,1e3*.84,"600 50px Georgia,serif").slice(0,3);return c.forEach((u,d)=>r.fillText(u,1e3/2,560*.72+d*56-(c.length-1)*20)),r.font="600 20px system-ui,sans-serif",r.fillStyle=o[2],r.fillText((e||"").toUpperCase(),1e3/2,560*.62),s}function hp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new lt,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=cp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<o[u].length;++y)f.push(o[u][y][h]);let g=cp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function cp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new pt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){let y=u.getComponent(h,g);a.setComponent(h+d,g,y)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Yc=typeof matchMedia!="undefined"&&matchMedia("(prefers-reduced-motion: reduce)").matches,_e=(i=0,e=0,t=0)=>new I(i,e,t),Ou=Wt.clamp,Qi=Wt.lerp,Hu={name:"HALO",armor:!0,scale:1.14,coat:13804382,coatDeep:11041344,cream:15786692,nose:7293506,mane:15986922,maneIn:14078148,maneTip:16777215,maneSheen:13624063,maneE:9224447,maneEI:.02,eye:[.35,1.25,3],eyeCore:[1.1,2,3.2],eyeGlow:.16,halo:{color:15255939,glow:[.35,.8,1.7],sides:96},inlay:4892927,ground:"rgba(120,190,255,.30)"},fp={name:"White Lion",armor:!1,scale:1,coat:15130576,coatDeep:13616304,cream:15986146,nose:11568248,mane:15783054,maneIn:13610594,maneTip:16773580,maneSheen:16773320,maneE:16762458,maneEI:.015,eye:[.55,1.35,1.25],eyeCore:[1.2,1.9,1.7],eyeGlow:.12,halo:{color:15320170,glow:[1.4,1.05,.4],sides:6},inlay:null,ground:"rgba(255,225,150,.22)"};function Ht(i){return e=>{if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let n=i[t-1],s=i[t],r=(e-n[0])/(s[0]-n[0]),o=r*r*(3-2*r);return n[1]+(s[1]-n[1])*o}return i[i.length-1][1]}}var qc=i=>(i=Ou(i,0,1),Math.sqrt(i*(2-i))),Ii=(i,e,t)=>qc(i/e)*qc((1-i)/t);function di(i,e,{seg:t=40,rad:n=22,ref:s=_e(1,0,0),attrT:r=!1}={}){let o=new Vn(i,!1,"centripetal"),a=(t+1)*n+2,l=new Float32Array(a*3),c=new Float32Array(a*2),u=new Float32Array(a),d=_e(),h=_e(),f=_e(),g=_e();for(let A=0;A<=t;A++){let M=A/t;o.getPointAt(M,d),o.getTangentAt(M,h),f.copy(s).addScaledVector(h,-h.dot(s)).normalize(),g.crossVectors(h,f).normalize();let[b,v,R,x=0]=e(M);for(let T=0;T<n;T++){let P=T/n*Math.PI*2,U=Math.cos(P),O=Math.sin(P),X=O>=0?v:R,N=A*n+T;l[N*3]=d.x+f.x*U*b+g.x*(O*X+x),l[N*3+1]=d.y+f.y*U*b+g.y*(O*X+x),l[N*3+2]=d.z+f.z*U*b+g.z*(O*X+x),c[N*2]=T/n,c[N*2+1]=M,u[N]=M}}let y=(t+1)*n,m=y+1;o.getPointAt(0,d),l.set([d.x,d.y,d.z],y*3),c.set([.5,0],y*2),u[y]=0,o.getPointAt(1,d),l.set([d.x,d.y,d.z],m*3),c.set([.5,1],m*2),u[m]=1;let p=[];for(let A=0;A<t;A++)for(let M=0;M<n;M++){let b=A*n+M,v=A*n+(M+1)%n,R=(A+1)*n+M,x=(A+1)*n+(M+1)%n;p.push(b,v,R,v,x,R)}for(let A=0;A<n;A++){let M=A,b=(A+1)%n;p.push(y,b,M),p.push(m,t*n+M,t*n+b)}let S=new lt;return S.setAttribute("position",new pt(l,3)),S.setAttribute("uv",new pt(c,2)),r&&S.setAttribute("lockT",new pt(u,1)),S.setIndex(p),S.computeVertexNormals(),S}function Fu(i,e){let t=i.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t)).normalize(),s=n.clone().cross(t);return new it().makeBasis(s,n,t)}function Js({c:i,r:e,frame:t,e:[n,s],width:r,azC:o=0,k:a=1.06,nu:l=22,nv:c=16}){let u=(p,S)=>{let A=_e(Math.sin(p)*Math.cos(S),Math.sin(S),Math.cos(p)*Math.cos(S)).applyMatrix4(t);return _e(i.x+A.x*e[0]*a,i.y+A.y*e[1]*a,i.z+A.z*e[2]*a)},d=[],h=[],f=[];for(let p=0;p<=c;p++){let S=p/c,A=Qi(n,s,S),M=r(S);for(let b=0;b<=l;b++){let v=b/l,R=u(o+Qi(-M,M,v),A);d.push(R.x,R.y,R.z),h.push(v,S)}}for(let p=0;p<c;p++)for(let S=0;S<l;S++){let A=p*(l+1)+S,M=A+1,b=A+l+1,v=b+1;f.push(A,M,b,M,v,b)}let g=new lt;return g.setAttribute("position",new Xe(d,3)),g.setAttribute("uv",new Xe(h,2)),g.setIndex(f),g.computeVertexNormals(),{g,edge:(p=0,S=a+.004)=>{let A=[],b=1-p,v=(P,U)=>{let O=_e(Math.sin(P)*Math.cos(U),Math.sin(U),Math.cos(P)*Math.cos(U)).applyMatrix4(t);return _e(i.x+O.x*e[0]*S,i.y+O.y*e[1]*S,i.z+O.z*e[2]*S)},R=(n+s)/2,x=(s-n)/2*b,T=P=>Qi(R-x,R+x,P);for(let P=0;P<=40;P++){let U=P/40;A.push(v(o+r(Qi(.5-b/2,.5+b/2,U))*b,T(U)))}for(let P=40;P>=0;P--){let U=P/40;A.push(v(o-r(Qi(.5-b/2,.5+b/2,U))*b,T(U)))}return A},line:(p,S,A,M,b=a+.006,v=24)=>{let R=[],x=(T,P)=>{let U=_e(Math.sin(T)*Math.cos(P),Math.sin(P),Math.cos(T)*Math.cos(P)).applyMatrix4(t);return _e(i.x+U.x*e[0]*b,i.y+U.y*e[1]*b,i.z+U.z*e[2]*b)};for(let T=0;T<=v;T++)R.push(x(Qi(p,A,T/v),Qi(S,M,T/v)));return R},P:u}}var up=(i,e,t=!0,n=120,s=6)=>new Ri(new Vn(i,t,"centripetal"),n,e,s,t);function Li(i,e){let t=new Qe;return t.userData.abs=e.clone(),t.position.copy(e).sub(i.userData.abs||_e()),i.add(t),t}function ct(i,e,t,n,s,r){let o=i.userData.abs||_e(),a=new le(e,t);return n?a.position.copy(n).sub(o):e.translate(-o.x,-o.y,-o.z),s&&a.scale.set(...s),r&&a.rotation.set(...r),i.add(a),a}var dp={},vn=(i=24,e=16)=>dp[i+"x"+e]||(dp[i+"x"+e]=new $t(1,i,e)),ya=null;function lv(){if(ya)return ya;let[i,e]=mt(512,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#fffaf0"),t.addColorStop(.3,"#e9eef6"),t.addColorStop(.48,"#cfe0f4"),t.addColorStop(.52,"#8a96a8"),t.addColorStop(1,"#3a404c"),e.fillStyle=t,e.fillRect(0,0,512,256),e.fillStyle="rgba(255,255,255,.95)";for(let[n,s]of[[40,60],[190,34],[300,80],[440,40]])e.fillRect(n,34,s,46);return e.fillStyle="rgba(255,226,170,.6)",e.fillRect(0,108,512,6),e.fillStyle="rgba(140,200,255,.55)",e.fillRect(0,124,512,3),ya=vt(i),ya.mapping=Jr,ya}var Xc=null;function cv(){if(Xc)return Xc;let[i,e]=mt(256,256);e.fillStyle="#e8e8e8",e.fillRect(0,0,256,256);let t=7,n=()=>(t=t*16807%2147483647)/2147483647;for(let s=0;s<1400;s++){let r=200+n()*55|0;e.strokeStyle=`rgba(${r},${r},${r},${.25+n()*.35})`,e.lineWidth=.6+n()*1.2;let o=n()*256,a=n()*256;e.beginPath(),e.moveTo(o,a),e.lineTo(o+(n()-.5)*3,a+10+n()*16),e.stroke()}for(let s=0;s<500;s++){e.strokeStyle=`rgba(150,140,130,${.08+n()*.12})`,e.lineWidth=.8;let r=n()*256,o=n()*256;e.beginPath(),e.moveTo(r,o),e.lineTo(r,o+12),e.stroke()}return Xc=vt(i,{repeat:[5,4]}),Xc}function hv(i,e){let t={color:16777215,roughness:.6,emissive:i.maneE,emissiveIntensity:i.maneEI,side:Pt},n=e?new qr(Object.assign(t,{sheen:1,sheenColor:new Te(i.maneSheen),sheenRoughness:.45})):new dt(t),s={uTime:{value:0},uAmp:{value:.035},uPuff:{value:0}};return n.userData.u=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,s),r.vertexShader=`attribute float lockT;
uniform float uTime;
uniform float uAmp;
uniform float uPuff;
varying float vLockAO;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float lt = lockT; vLockAO = mix(0.6, 1.0, smoothstep(0.0, 0.75, lt));
      #ifdef USE_INSTANCING
        vec3 ip = instanceMatrix[3].xyz; float ph = dot(ip, vec3(7.1, 5.3, 3.7));
      #else
        float ph = 0.0;
      #endif
      float w = lt * lt;
      transformed.x += sin(uTime * 1.55 + ph) * uAmp * w;
      transformed.z += (cos(uTime * 1.15 + ph * 1.3) * uAmp * 0.7 - uPuff * 0.12) * w;`),r.fragmentShader=`varying float vLockAO;
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= vLockAO;`)},n}function uv(i){let e=(t,n,s,r)=>{let o=[_e(t,0,0),_e(t+s*.5,.3*n,-.07*n),_e(t-s*.4,.62*n,-.15*n),_e(t+s*.6,.86*n,-.17*n),_e(t+s,n,-.12*n)],a=Ht([[0,.05*r],[.3,.066*r],[.75,.05*r],[1,.018*r]]),l=Ht([[0,.034*r],[1,.008]]);return di(o,c=>{let u=qc(c/.05)*qc((1-c)/.4);return[a(c)*u,l(c)*u,l(c)*u*.75]},{seg:i?9:5,rad:i?6:3,attrT:!0})};return hp([e(0,1,.02,1),e(.045,.82,-.03,.75),e(-.04,.9,.035,.7)])}function pp(i={}){let e=Object.assign({},Hu,i),t=e.quality===void 0?2:e.quality,n=t>=2,s=[.45,.7,1][t],r=new Qe;r.name=e.name,r.scale.setScalar(e.scale),r.userData.abs=_e();let o=e.sceneEnv?null:lv(),a=cv(),l=new dt({color:e.coat,map:a,roughness:.78,metalness:0,envMap:o,envMapIntensity:.35}),c=new dt({color:e.coatDeep,map:a,roughness:.8,envMap:o,envMapIntensity:.3}),u=new dt({color:e.cream,map:a,roughness:.82,envMap:o,envMapIntensity:.35}),d=new dt({color:e.nose,roughness:.35,envMap:o,envMapIntensity:.5}),h=new dt({color:2759702,roughness:.5}),f=new dt({color:6957604,roughness:.6}),g=new dt({color:16183522,roughness:.3}),y=n?new qr({color:15001062,metalness:.1,roughness:.26,clearcoat:.7,clearcoatRoughness:.22,envMap:o,envMapIntensity:.7,side:Pt}):new dt({color:15001062,metalness:.12,roughness:.28,envMap:o,envMapIntensity:.7,side:Pt}),m=new dt({color:14860924,metalness:1,roughness:.26,envMap:o,envMapIntensity:1.1}),p=new dt({color:14081254,metalness:1,roughness:.16,envMap:o,envMapIntensity:1.1}),S=e.inlay?new dt({color:11066623,emissive:e.inlay,emissiveIntensity:1.25,roughness:.3}):null,A=hv(e,n),M=new dt({color:e.maneIn,roughness:.9,envMap:o,envMapIntensity:.2}),b=C=>Math.max(10,Math.round(C*[.55,.75,1][t])),v=Li(r,_e(0,.95,.1));{let C=Ht([[0,.27],[.18,.31],[.45,.24],[.76,.33],[1,.3]]),H=Ht([[0,.25],[.18,.27],[.45,.2],[.76,.27],[1,.25]]),K=Ht([[0,.27],[.18,.3],[.46,.21],[.74,.4],[1,.36]]);ct(v,di([_e(0,.94,-.95),_e(0,.99,-.64),_e(0,.95,-.15),_e(0,1,.3),_e(0,1.02,.62),_e(0,.97,.86)],G=>{let w=Ii(G,.12,.16);return[C(G)*w,H(G)*w,K(G)*w]},{seg:b(56),rad:b(30)}),l),ct(v,di([_e(0,.74,-.5),_e(0,.7,-.05),_e(0,.66,.45)],G=>{let w=Ii(G,.3,.3);return[.18*w,.08*w,.09*w]},{seg:16,rad:14}),u)}let R=[],x=(C,H,K)=>{ct(C,vn(),u,H,[.098,.06,.122]);for(let G=0;G<4;G++)ct(C,vn(14,10),u,_e(H.x+(G-1.5)*.042*K,.038,H.z+.1-Math.abs(G-1.5)*.018),[.033,.03,.04])};for(let C of[-1,1]){let H=Li(v,_e(C*.24,1,.46));ct(H,di([_e(C*.24,1.1,.44),_e(C*.25,.86,.42),_e(C*.25,.62,.4)],D=>{let q=Ii(D,.2,.18),se=Ht([[0,.17],[1,.115]])(D),Q=Ht([[0,.24],[.6,.17],[1,.125]])(D);return[se*q,Q*q,Q*q]},{seg:b(20),rad:b(18)}),l);let K=Li(H,_e(C*.25,.64,.4));if(ct(K,di([_e(C*.25,.7,.4),_e(C*.245,.4,.45),_e(C*.24,.12,.5)],D=>{let q=Ii(D,.2,.12),se=Ht([[0,.112],[.7,.09],[1,.092]])(D),Q=Ht([[0,.125],[.6,.095],[1,.1]])(D);return[se*q,Q*q,Q*q]},{seg:b(20),rad:b(16)}),l),x(K,_e(C*.24,.065,.56),C),e.armor){let D=new Qe;D.position.copy(_e(C*.245,.33,.46)).sub(K.userData.abs),D.rotation.x=-.17,K.add(D);let q=[[.112,-.15],[.118,-.13],[.106,-.05],[.1,.05],[.108,.13],[.12,.15]],se=new gs(new Wr(q.map(he=>new ge(he[0],he[1]))).getPoints(24),b(32)),Q=new le(se,y);Q.scale.set(.95,1,1.05),D.add(Q);for(let[he,de,Se]of[[-.148,.117,p],[.148,.12,p],[0,.104,m]]){let B=new le(new en(de,Se===m?.007:.011,8,b(40)),Se);B.rotation.x=Math.PI/2,B.position.y=he,B.scale.set(.95,1.05,1),D.add(B)}}R.push({up:H,low:K,front:!0,side:C});let G=Li(v,_e(C*.22,.98,-.6));ct(G,di([_e(C*.21,1.06,-.58),_e(C*.23,.66,-.5),_e(C*.22,.38,-.74)],D=>{let q=Ii(D,.22,.14),se=Ht([[0,.17],[.5,.145],[1,.08]])(D),Q=Ht([[0,.28],[.45,.2],[1,.085]])(D),he=Ht([[0,.22],[.5,.14],[1,.09]])(D);return[se*q,Q*q,he*q]},{seg:b(24),rad:b(18)}),l);let w=Li(G,_e(C*.22,.38,-.74));ct(w,di([_e(C*.22,.44,-.75),_e(C*.22,.24,-.7),_e(C*.22,.1,-.65)],D=>{let q=Ii(D,.2,.15);return[.075*q,.085*q,.08*q]},{seg:14,rad:b(14)}),l),x(w,_e(C*.22,.062,-.6),C),R.push({up:G,low:w,front:!1,side:C})}let T=[],P=Li(v,_e(0,.95,-.96));P.rotation.x=-2.25;let U=P,O=new zo(1,1,4,10);for(let C=0;C<8;C++){let H=new Qe;C&&(H.position.y=.105),P.add(H);let K=.042-C*.0025,G=new le(O,l);G.scale.set(K,.052,K),G.position.y=.052,H.add(G),T.push(H),P=H}let X=new Qe;X.position.y=.11,P.add(X);let N=Li(v,_e(0,1.14,.6));ct(N,di([_e(0,1,.42),_e(0,1.24,.76),_e(0,1.44,.96)],C=>{let H=Ii(C,.2,.25);return[.21*H,.21*H,.26*H]},{seg:16,rad:b(20)}),l);let W=_e(0,1.52,1.02),Z=Li(N,W),z=(C,H,K)=>_e(W.x+C,W.y+H,W.z+K);{let C=Ht([[0,.16],[.5,.2],[1,.17]]),H=Ht([[0,.14],[.5,.17],[1,.13]]),K=Ht([[0,.13],[.5,.15],[1,.14]]);ct(Z,di([z(0,.03,-.2),z(0,.06,0),z(0,.03,.17)],q=>{let se=Ii(q,.3,.35);return[C(q)*se,H(q)*se,K(q)*se]},{seg:b(24),rad:b(26)}),l);let G=Ht([[0,.15],[.6,.125],[1,.11]]),w=Ht([[0,.11],[1,.072]]),D=Ht([[0,.11],[1,.08]]);ct(Z,di([z(0,-.02,.04),z(0,-.03,.24),z(0,-.055,.4)],q=>{let se=Ii(q,.18,.28);return[G(q)*se,w(q)*se,D(q)*se]},{seg:b(20),rad:b(24)}),l);for(let q of[-1,1])ct(Z,vn(),l,z(q*.1,-.05,.1),[.09,.08,.11]),ct(Z,vn(),u,z(q*.052,-.095,.35),[.064,.05,.066]),ct(Z,vn(),l,z(q*.08,.075,.18),[.072,.024,.05],[0,0,-.22*q]);ct(Z,vn(),u,z(0,-.13,.32),[.068,.036,.06]),ct(Z,vn(),d,z(0,-.03,.422),[.05,.027,.036],[-.3,0,0]),ct(Z,vn(),f,z(0,-.12,.2),[.06,.026,.1]);for(let q of[-1,1])ct(Z,new Ai(.012,.05,8),g,z(q*.045,-.15,.35),null,[Math.PI,0,0])}let ne=Li(Z,z(0,-.1,.1));ct(ne,di([z(0,-.12,.06),z(0,-.15,.2),z(0,-.152,.32)],C=>{let H=Ii(C,.25,.3);return[Ht([[0,.11],[1,.075]])(C)*H,.05*H,Ht([[0,.06],[1,.045]])(C)*H]},{seg:14,rad:b(16)}),u);for(let C of[-1,1])ct(ne,new Ai(.01,.04,8),g,z(C*.04,-.125,.3));Z.scale.setScalar(1.12);let Y=[],$=[],te=new Ze({color:new Te(...e.eye)}),pe=new Ze({color:new Te(...e.eyeCore)});for(let C of[-1,1]){ct(Z,vn(),h,z(C*.086,.03,.196),[.046,.03,.03],[0,0,.2*C]);let H=new Qe;H.position.copy(z(C*.087,.034,.208)).sub(W),H.rotation.set(0,C*.35,.2*C),Z.add(H);let K=new le(vn(20,14),te);K.scale.set(.037,.022,.019),H.add(K);let G=new le(vn(12,8),pe);G.scale.set(.012,.012,.01),G.position.z=.012,H.add(G);let w=new Rt(new wt({map:Xt("rgba(255,255,255,.8)","rgba(255,255,255,0)"),color:new Te(...e.eye).multiplyScalar(.3),blending:at,depthWrite:!1,transparent:!0}));w.scale.set(e.eyeGlow,e.eyeGlow*.6,1),w.position.z=.02,H.add(w),Y.push(H),$.push(w)}let ue=[];for(let C of[-1,1]){let H=Li(Z,z(C*.14,.15,-.1));ct(H,vn(),l,z(C*.14,.185,-.1),[.05,.052,.024]),ct(H,vn(),c,z(C*.14,.185,-.085),[.03,.033,.01]),ue.push(H)}let Me=uv(n),Ee=new Te(e.maneIn),Ue=new Te(e.mane),ie=new Te(e.maneTip),oe=41,xe=()=>(oe=oe*16807%2147483647)/2147483647,Ne=new it,ve=_e(),ze=_e(),Mt=_e(),Oe=new bn,He=_e(),je=new Te;function Ve(C,H){let K=new Dn(Me,A,H.length),G=C.userData.abs||_e();return H.forEach((w,D)=>{ve.copy(w.d).normalize(),ze.copy(w.c).negate(),ze.addScaledVector(ve,-ze.dot(ve)).normalize(),Mt.crossVectors(ve,ze),Ne.makeBasis(Mt,ve,ze),Oe.setFromRotationMatrix(Ne),Ne.compose(_e().copy(w.p).sub(G),Oe,He.set(w.w,w.len,w.w)),K.setMatrixAt(D,Ne),je.copy(Ee).lerp(Ue,w.k).lerp(ie,Math.max(0,w.k-.75)*1.2),K.setColorAt(D,je)}),K.frustumCulled=!1,C.add(K),K}ct(N,vn(28,20),M,z(0,-.08,-.2),[.3,.34,.3]),ct(N,vn(28,20),M,_e(0,1.3,.66),[.27,.3,.32]);let et=[],qe=t===0?4:t===1?5:6;for(let C=0;C<qe;C++){let H=.19+C*.042,K=-.03-C*.055,G=Math.round((26+C*9)*s);for(let w=0;w<G;w++){let D=(w+C%2*.5)/G*Math.PI*2+(xe()-.5)*.1,q=Math.sin(D),se=Math.cos(D),Q=(1-se)/2,he=z(q*H*1.1,se*H-.03-Q*.04,K+(xe()-.5)*.03),de=_e(q*.85,se*.62-.3-Q*.55,-.34-C*.07);et.push({p:he,d:de,c:_e(q*.2,-.8,-.6),len:(.2+C*.055+Q*.14+Math.max(0,se)*.05)*(.85+xe()*.3),w:1.1+C*.16+xe()*.25,k:.12+C/qe*.8+xe()*.12})}}Ve(Z,et);let Nt=[],ht=Math.round(190*s);for(let C=0;C<ht;C++){let H=Math.sqrt(xe())*.85,K=(xe()*2-1)*(1.5-H*.45),G=Math.sin(K),w=Math.cos(K),D=_e().lerpVectors(z(0,0,-.2),_e(0,1.32,.36),H),q=.25+H*.06,se=_e(D.x+G*q,D.y+w*q*.9,D.z+(xe()-.5)*.06),Q=_e(G*.55,-.85+w*.2,-.4);Nt.push({p:se,d:Q,c:_e(G*.5,-.4,-1),len:(.24+xe()*.15+Math.max(0,w)*.12)*(1-H*.3),w:1.45+xe()*.5,k:.35+xe()*.65})}let Lt=Math.round(70*s);for(let C=0;C<Lt;C++){let H=xe(),K=(xe()-.5)*.36*(1-H*.3),G=_e(K,Qi(1.42,1.14,H),Qi(1,.82,H)-Math.abs(K)*.3);Nt.push({p:G,d:_e(K*1.4,-1,.12),c:_e(K,-.2,1),len:.24+xe()*.16+(1-H)*.06,w:1.3+xe()*.4,k:.4+xe()*.6})}Ve(N,Nt);let V=[];for(let C=0;C<16;C++){let H=C/16*Math.PI*2;V.push({p:_e(Math.cos(H)*.02,0,Math.sin(H)*.02),d:_e(Math.cos(H)*.45,1,Math.sin(H)*.45),c:_e(Math.cos(H),0,Math.sin(H)),len:.16+xe()*.05,w:.7,k:.7})}Ve(X,V);let Et=[];if(e.armor){let C=(K,G,w,D=.011,q=!0)=>ct(K,up(G,D,q,q?b(140):40,6),w),H=(K,G,w=!0)=>{let D=ct(K,up(G,.0045,w,w?b(120):30,5),S);return Et.push(D),D};{let G=new it().makeRotationX(-.75),w=Js({c:z(0,.045,0),r:[.2,.18,.225],frame:G,e:[-.62,.7],width:Ht([[0,.1],[.35,.42],[.75,.62],[1,.48]]),k:1.07});ct(Z,w.g,y),C(Z,w.edge(),m,.009),H(Z,w.edge(.28,1.085));let D=Js({c:z(0,-.045,.21),r:[.14,.112,.18],frame:new it().makeRotationX(-Math.PI/2+.28),e:[-.7,.45],width:Ht([[0,.16],[1,.3]]),k:1.06});ct(Z,D.g,y),C(Z,D.edge(),p,.007),ct(Z,new zs(1,0),new dt({color:12576511,emissive:e.inlay,emissiveIntensity:1.4,roughness:.15,metalness:.2}),z(0,.155,.17),[.018,.026,.012],[-.6,0,0]);let q=Js({c:z(0,.045,0),r:[.2,.18,.225],frame:G,e:[.1,1.2],width:()=>.04,k:1.13});ct(Z,q.g,m)}for(let K of[-1,1]){let G=_e(K*.29,.98,.52),w=Fu(_e(K*.9,.35,.28),_e(0,1,0)),D=[.25,.24,.29],q=Js({c:G,r:D,frame:w,e:[-.05,1.35],width:Ht([[0,1.3],[.7,1.15],[1,.55]]),k:1.2});ct(v,q.g,y),C(v,q.edge(),m,.012),H(v,q.edge(.3,1.15)),C(v,q.line(0,0,0,1.28,1.225),m,.011,!1),[[-.4,.02,1.16],[-.72,-.32,1.12]].forEach(([se,Q,he])=>{let de=Js({c:G,r:D,frame:w,e:[se,Q],width:()=>1.15,k:he});ct(v,de.g,y),C(v,de.edge(),p,.009)});for(let se of[-.95,.95])ct(v,vn(10,8),m,q.P(se,.2),[.014,.014,.014])}{let K=_e(0,.92,.45),G=[.34,.41,.42],w=Fu(_e(0,-.1,1),_e(0,1,0)),D=Js({c:K,r:G,frame:w,e:[-.95,.42],width:Ht([[0,.4],[.35,1.05],[.8,1.2],[1,1]]),k:1.07,nu:28,nv:20});ct(v,D.g,y),C(v,D.edge(),m,.012),C(v,D.edge(.12,1.075),p,.005),H(v,D.edge(.24,1.078)),C(v,D.line(0,-.9,0,-.38,1.08),p,.007,!1);let q=D.P(0,-.25),se=_e().subVectors(q,K).normalize(),Q=new Qe;Q.position.copy(q).sub(v.userData.abs).addScaledVector(se,.012),Q.quaternion.setFromUnitVectors(_e(0,0,1),se),v.add(Q),Q.add(new le(new yt(.05,.055,.016,b(40)).rotateX(Math.PI/2),m));for(let de=0;de<12;de++){let Se=new le(new Ai(.012,de%2?.05:.08,4),m),B=de/12*Math.PI*2;Se.position.set(Math.sin(B)*(.07+(de%2?0:.012)),Math.cos(B)*(.07+(de%2?0:.012)),0),Se.rotation.z=-B,Q.add(Se)}let he=new le(new $t(.026,20,14),new dt({color:12576511,emissive:e.inlay,emissiveIntensity:1.5,roughness:.1,metalness:.3}));he.position.z=.014,he.scale.z=.6,Q.add(he),Et.push(he)}{let K=_e(0,.97,-.2),G=[.31,.28,.62],w=Fu(_e(0,1,0),_e(0,0,-1)),D=Js({c:K,r:G,frame:w,e:[-.45,.66],width:Ht([[0,.75],[.5,1],[1,.8]]),k:1.08,nu:24,nv:18});ct(v,D.g,y),C(v,D.edge(),m,.011),H(v,D.edge(.2,1.065)),C(v,D.line(0,-.5,0,.58,1.075),p,.012,!1)}}let Ge=new Qe;Ge.position.copy(z(0,.42,-.06)).sub(W),Z.add(Ge);{let C=new le(new en(.24,.011,10,e.halo.sides),new dt({color:e.halo.color,metalness:1,roughness:.25,envMap:o,envMapIntensity:1.2}));C.rotation.x=Math.PI/2,Ge.add(C);let H=new le(new en(.21,.004,6,e.halo.sides),new Ze({color:new Te(...e.halo.glow)}));H.rotation.x=Math.PI/2,Ge.add(H);let K=new Rt(new wt({map:Xt("rgba(255,255,255,.35)","rgba(255,255,255,0)"),color:new Te(...e.halo.glow).multiplyScalar(.25),blending:at,depthWrite:!1,transparent:!0}));K.scale.set(.7,.32,1),Ge.add(K)}let L=new le(new Ot(1.5,2.3),new Ze({map:Xt("rgba(0,0,0,.42)","rgba(0,0,0,0)"),transparent:!0,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.position.y=.012,r.add(L);let _=new le(new Ot(2.8,2.8),new Ze({map:Xt(e.ground,"rgba(0,0,0,0)"),transparent:!0,depthWrite:!1,blending:at}));_.rotation.x=-Math.PI/2,_.position.y=.016,r.add(_);let J=new Rt(new wt({map:Xt("rgba(255,255,255,.0)","rgba(255,255,255,0)"),transparent:!0,depthWrite:!1}));J.visible=!1,r.add(J);let F={root:r,torso:v,neck:N,head:Z,jaw:ne,ears:ue,legs:R,tail:T,tailBase:U,halo:Ge,eyes:Y,eyeGlows:$,veins:Et,maneM:A,ground:_,aura:J,scale:e.scale,armor:!!e.armor,phase:0,speed:0,idle:0,sit:0,roar:0,hop:0,yaw:0,pitch:0,blink:0,nextBlink:2.5,slowBlink:!1,nod:0,greetT:0,lookTarget:null,wander:0};return F.greet=()=>{F.greetT>0||(F.greetT=2.4,F.nod=1.6,F.nextBlink=.9,F.slowBlink=!0)},F.update=(C,H,K)=>dv(F,C,H,K),F}var Ks=_e(),Bu=_e();function dv(i,e,t,n){let s=Yc?.35:1,r=i.speed>.15;r?(i.idle=0,i.phase+=e*(3.6+i.speed*2.2)):i.idle+=e;let o=Math.min(1,i.speed/3),a=Math.sin(t*1.25);i.torso.scale.set(1+a*.008*s,1+a*.014*s,1+a*.004*s),i.torso.position.y=.95+Math.abs(Math.cos(i.phase))*.045*o+i.hop+a*.004*s,i.torso.rotation.x=Math.sin(i.phase*2)*.02*o;for(let y of i.legs){let m=i.phase+(y.front?0:Math.PI)+(y.side>0?Math.PI:0),p=Math.sin(m),S=Math.cos(m);y.up.rotation.x=p*.42*o,y.low.rotation.x=(y.front?-1:1)*Math.max(0,-S)*.55*o}let l=0,c=0;if(i.lookTarget){Bu.set(0,1.52,1.02),i.root.localToWorld(Bu),Ks.copy(i.lookTarget),i.root.worldToLocal(Ks);let y=Bu.clone();i.root.worldToLocal(y),l=Math.atan2(Ks.x-y.x,Ks.z-y.z),c=Math.atan2(Ks.y-y.y,Math.hypot(Ks.x-y.x,Ks.z-y.z))}else typeof n=="number"?l=n:r||(i.wander+=e*.25,l=Math.sin(i.wander)*.45+Math.sin(i.wander*2.3)*.12,c=Math.sin(i.wander*.7)*.08);l=Ou(l,-1.15,1.15),c=Ou(c,-.35,.4);let u=Math.min(1,e*(i.lookTarget?2.2:1.6));i.yaw+=(l-i.yaw)*u,i.pitch+=(c-i.pitch)*u,i.roar=Math.max(0,i.roar-e);let d=i.roar>0?Math.sin((1.2-i.roar)/1.2*Math.PI):0;i.nod=Math.max(0,i.nod-e);let h=i.nod>0?Math.sin((1.6-i.nod)/1.6*Math.PI):0;i.greetT=Math.max(0,i.greetT-e),i.neck.rotation.y=i.yaw*.4,i.head.rotation.y=i.yaw*.6,i.neck.rotation.x=-a*.012*s-d*.25+Math.sin(i.phase*2)*.03*o,i.head.rotation.x=-i.pitch*.8+h*.32-d*.2,i.head.rotation.z=-i.yaw*.08,i.jaw.rotation.x=d*.5+(i.greetT>0?.04:0),i.nextBlink-=e,i.nextBlink<0&&(i.blink=i.slowBlink?1.1:.22,i.blinkLen=i.blink,i.nextBlink=3.5+Math.random()*4,i.slowBlink=Math.random()<.4);let f=1;if(i.blink>0){i.blink-=e;let y=1-Math.max(0,i.blink)/i.blinkLen;f=1-Math.sin(y*Math.PI)*.92}for(let y of i.eyes)y.scale.y=f;for(let y of i.eyeGlows)y.material.opacity=.35+f*.65+d*.4;for(let y=0;y<2;y++)i.ears[y].rotation.z=(y?-1:1)*(Math.max(0,Math.sin(t*.9+y*2.1)-.95)*6)*s;let g=i.maneM.userData.u;g.uTime.value=t,g.uAmp.value=(.03+o*.05+d*.06)*s,g.uPuff.value=d;for(let y=0;y<i.tail.length;y++)i.tail[y].rotation.z=Math.sin(t*(r?4:1.1)-y*.55)*(.07+y*.03)*s,i.tail[y].rotation.x=y===0?0:y>4?.34:.06;for(let y of i.veins)y.material.emissiveIntensity=1.1+Math.sin(t*1.25)*.25*s+d*.8;i.halo.rotation.y+=e*.5*s,i.halo.position.y=.42+Math.sin(t*1.25)*.012*s,i.ground.material.opacity=.75+Math.sin(t*1.25)*.15*s+d*.3}function Zc(i){let{scene:e,register:t,std:n,glowColor:s}=i,r=(b,v)=>{let R=new Qe;R.position.copy(b);let x=v||new I(0,0,0);return R.lookAt(x.x,b.y,x.z),e.add(R),R},o=n({color:5911576,roughness:.7}),a=n({color:13213763,metalness:.7,roughness:.35}),l=n({color:14133319,metalness:.85,roughness:.3,emissive:4860933,emissiveIntensity:.4}),c=[];for(let b=0;b<=16;b++){let v=b/16,R=.12+Math.sin(Math.min(1,v*1.15)*Math.PI)*.36+(v>.85?(v-.85)*.6:0);c.push(new ge(Math.max(.1,R),v*1.25))}let u=new gs(c,22),d=new gs([new ge(0,.1),new ge(.2,.06),new ge(.23,0),new ge(.2,-.03)],18),h=new $t(.05,10,8);function f(b,v,{face:R,seed:x=1,hue:T=18,scale:P=1,labelY:U=2.6,plinthColor:O=10188368,glow:X="rgba(255,190,100,.9)"}={}){let N=r(v,R),W=new le(new yt(.55,.62,.4,16),n({color:O,roughness:.85}));W.position.y=.2,N.add(W);let Z=P,z=n({map:rp(x,T),roughness:.75,emissive:3805700,emissiveIntensity:.25}),ne=new le(u,z);ne.position.y=.4,ne.scale.setScalar(Z),N.add(ne);let Y=new Qe;Y.position.y=.4+1.25*Z,N.add(Y),Y.add(new le(d,z));let $=new le(h,z);$.position.y=.12,Y.add($);let te=new Rt(new wt({map:Xt(X,"rgba(255,140,40,0)"),blending:at,depthWrite:!1,opacity:.35}));te.position.y=Y.position.y+.05,te.scale.set(.9,.9,1),N.add(te);let pe=new le(new Ot(.9,1.1),new dt({map:Gc(b.title,"",{w:512,h:640,seed:x+20}),side:Pt,emissive:6965792,emissiveIntensity:.4,roughness:.9}));pe.position.set(0,Y.position.y+.6,.1),pe.scale.set(.001,.001,1),pe.visible=!1,N.add(pe);let ue=t(b,N,[1.1,2.1,1.1],U,{standDist:1.75});return ue.animate=Me=>{Y.position.y=.4+1.25*Z+Me*.55,Y.rotation.z=Me*.7,Y.position.x=Me*.25,pe.visible=Me>.05;let Ee=Wt.smoothstep(Me,.3,1);pe.scale.set(Math.max(.001,Ee),Math.max(.001,Math.min(1,Me*1.6)),1),pe.position.y=Y.position.y-.1+Ee*.55,te.material.opacity=.35+Me*.9,te.scale.setScalar(.9+Me*1.2)},ue.idle=Me=>{ue.anim===0&&(te.material.opacity=.3+Math.sin(Me*2+x)*.12)},ue.color=16756832,ue.obstacle=.55,ue}function g(b,v,{face:R,seed:x=0,color:T=10482943,cover:P=726579,labelY:U=2.95}={}){let O=r(v,R),X=n({color:P,metalness:.7,roughness:.28,emissive:666197,emissiveIntensity:.5}),N=n({color:14677759,emissive:10479871,emissiveIntensity:.6,roughness:.5}),W=n({color:8379647,emissive:2795775,emissiveIntensity:1.1,roughness:.15,metalness:.2,transparent:!0,opacity:.85,flatShading:!0}),Z=new le(new zs(.34,0),W);Z.position.y=.55,Z.scale.set(1,1.6,1),O.add(Z);let z=new le(new en(.45,.015,6,40),new Ze({color:s(T,2.4)}));z.rotation.x=Math.PI/2,z.position.y=1.15,O.add(z);let ne=new Qe;ne.position.y=1.75,ne.scale.setScalar(1.25),O.add(ne);let Y=.62,$=.9,te=.16,pe="#"+new Te(T).getHexString(),ue=ap(b.title,{color:pe}),Me=new le(new Ot(te,$),new dt({color:P,emissive:16777215,emissiveMap:ue,emissiveIntensity:2.4,map:ue,roughness:.3}));Me.position.set(0,0,Y/2+.002),ne.add(Me),ne.add(new le(new ut(te*.8,$*.94,Y*.96),N));let Ee=new le(new ut(.02,$,Y),X);Ee.position.x=-te/2,ne.add(Ee);let Ue=new Qe;Ue.position.set(te/2,0,Y/2),ne.add(Ue);let ie=new le(new ut(.02,$,Y),X);ie.position.set(0,0,-Y/2),Ue.add(ie);let oe=new le(new xs(.09,.12,24),new Ze({color:s(T,2.6),side:Pt}));oe.position.set(.012,.1,-Y/2),oe.rotation.y=Math.PI/2,Ue.add(oe);let xe=new Rt(new wt({map:Xt("rgba(120,230,255,.7)","rgba(60,160,255,0)"),color:T,blending:at,depthWrite:!1,opacity:.55}));xe.scale.set(1.8,1.8,1),ne.add(xe),ne.rotation.y=-.5;let Ne=t(b,O,[1,2.5,1],U,{standDist:1.7});return Ne.animate=ve=>{Ue.rotation.y=ve*1.9,ne.rotation.y=-.5+ve*.5,xe.material.opacity=.55+ve},Ne.idle=ve=>{ne.position.y=1.75+Math.sin(ve*1.2+x)*.07,Ne.anim===0&&(ne.rotation.y=-.5+Math.sin(ve*.5+x)*.35),z.rotation.z=ve*.8,Z.rotation.y=ve*.4},Ne.color=T,Ne.obstacle=.55,Ne}function y(b,v,{face:R,seed:x=0,leather:T=!1,hue:P=20,labelY:U=2.3,candle:O=!0,stamp:X="#f0cf79"}={}){let N=r(v,R),W=new le(new yt(.08,.12,1.05,8),o);W.position.y=.52,N.add(W);let Z=new le(new yt(.35,.4,.08,12),o);Z.position.y=.04,N.add(Z);let z=new Qe;z.position.set(0,1.12,0),z.rotation.x=-.75,N.add(z),z.add(new le(new ut(.9,.05,.62),o));let ne=null;if(O){ne=new Rt(new wt({map:Xt("rgba(255,210,130,1)","rgba(255,150,50,0)"),blending:at,depthWrite:!1})),ne.position.set(.52,1.35,-.05),ne.scale.set(.35,.5,1),N.add(ne);let $=new le(new yt(.025,.025,.22,6),n({color:16050896,emissive:5586976,emissiveIntensity:.3}));$.position.set(.52,1.18,-.05),N.add($)}let Y;if(T){let $=n({map:op(x+3,P,22),roughness:.7}),te=Nu(b.title,{bg:`hsl(${P},45%,20%)`,seed:x+9,color:X}),pe=new Qe;pe.position.y=.09,z.add(pe),pe.add(new le(new ut(.5,.1,.68),n({color:15720636,roughness:.9})));let ue=new le(new ut(.54,.025,.72),$);ue.position.y=-.06,pe.add(ue);let Me=new Qe;Me.position.set(-.27,.06,0),pe.add(Me);let Ee=[$,$,n({map:te,roughness:.6,emissive:16777215,emissiveMap:te,emissiveIntensity:.35}),$,$,$],Ue=new le(new ut(.54,.025,.72),Ee);Ue.position.set(.27,0,0),Me.add(Ue),pe.rotation.y=-Math.PI/2,Y=t(b,N,[1,1.9,1],U,{standDist:1.6}),Y.animate=ie=>{Me.rotation.z=ie*2.6,z.position.y=1.12+ie*.25},Y.color=15781753}else{let $=new dt({map:Gc(b.title,"",{w:768,h:512,seed:40+x}),emissive:5914656,emissiveIntensity:.35,roughness:.9,side:Pt}),te=new le(new Ot(.78,.52),$);te.rotation.x=-Math.PI/2,te.position.y=.035,z.add(te);let pe=new yt(.05,.05,.6,10);pe.rotateX(Math.PI/2);let ue=n({color:15258530,roughness:.9});for(let Me of[-1,1]){let Ee=new le(pe,ue);Ee.position.set(Me*.41,.07,0),z.add(Ee);for(let Ue of[-1,1]){let ie=new le(new $t(.04,8,6),a);ie.position.set(Me*.41,.07,Ue*.33),z.add(ie)}}Y=t(b,N,[1,1.9,1],U,{standDist:1.6}),Y.animate=Me=>{z.rotation.x=-.75+Me*.55,z.position.y=1.12+Me*.35,te.scale.set(1+Me*.25,1+Me*.25,1),$.emissiveIntensity=.35+Me*1.2},Y.color=16769184}return Y.idle=$=>{ne&&ne.scale.set(.32+Math.sin($*13+x)*.03,.48+Math.sin($*9+x*2)*.05,1)},Y.obstacle=.55,Y}function m(b,v,{face:R,seed:x=0,sub:T="crew report",y:P=.96,stand:U,labelY:O=1.8,rot:X=0}={}){let N=r(v,R),W=new dt({map:Gc(b.title,T,{w:640,h:800,seed:60+x}),emissive:6965792,emissiveIntensity:.35,roughness:.9,side:Pt}),Z=new le(new Ot(.52,.65),W);Z.rotation.x=-Math.PI/2,Z.rotation.z=Math.PI+X,Z.position.y=P,N.add(Z);let z=t(b,N,[.9,1.3,.9],O,{standDist:-1.7,hitY:P-.7});return U&&(z.stand=U),z.near=1,z.animate=ne=>{Z.position.y=P+ne*.55,Z.rotation.x=-Math.PI/2+ne*1,W.emissiveIntensity=.35+ne},z.color=16769184,z.idle=()=>{},z.obstacle=0,z}let p=new qo;function S(b,v,{face:R,H:x=2.5,W:T=1.42,y:P=2.6,labelY:U=4.25,frame:O=13213763,standDist:X=2.6}={}){let N=r(v,R),W=n({color:O,metalness:.85,roughness:.32,emissive:3810309,emissiveIntensity:.5}),Z=p.load(b.poster);Z.colorSpace=kt;let z=new le(new Ot(T,x),new dt({map:Z,emissive:16777215,emissiveMap:Z,emissiveIntensity:.55,roughness:.4}));z.position.set(0,P,.12),N.add(z);let ne=new le(new ut(T+.24,x+.24,.12),W);ne.position.set(0,P,.04),N.add(ne);let Y=document.createElement("canvas");Y.width=Y.height=128;let $=Y.getContext("2d");$.fillStyle="rgba(255,245,215,.92)",$.beginPath(),$.arc(64,64,56,0,7),$.fill(),$.fillStyle="#3a2708",$.beginPath(),$.moveTo(50,36),$.lineTo(94,64),$.lineTo(50,92),$.fill();let te=new Gn(Y);te.colorSpace=kt;let pe=new le(new Ot(.42,.42),new Ze({map:te,transparent:!0}));pe.position.set(0,P,.14),N.add(pe);let ue=t(b,N,[T+.3,x+.7,1],U,{standDist:X,hitY:P-x/2-.35});ue.animate=Ee=>{z.material.emissiveIntensity=.55+Ee*1.2,pe.scale.setScalar(1+Ee*.4)};let Me=Math.random()*6;return ue.idle=Ee=>{ue.anim===0&&pe.scale.setScalar(1+Math.sin(Ee*2.4+Me)*.06)},ue.color=16770992,ue.near=3,ue.obstacle=0,ue}function A(b,v,{glyphTex:R,hintTitle:x,hintSub:T,color:P=16767120,coverBg:U="#5a3a08",coverInk:O="#fff1c0",small:X=!1,makeLabel:N}={}){let W=new le(new Ot(1.3,1.3),new Ze({map:R||kc(),transparent:!0,opacity:.35,blending:at,depthWrite:!1,color:s(16777215,1.4)}));W.rotation.x=-Math.PI/2,W.position.set(v.x,.03,v.z),e.add(W);let Z=N(x,T,new I(v.x,1.2,v.z),{width:X?1.7:1.45}),z=r(v),ne=new le(new yt(.45,.6,3.5,24,1,!0),new Ze({color:s(P,.5),transparent:!0,opacity:0,blending:at,depthWrite:!1,side:Pt}));ne.position.y=1.75,z.add(ne);let Y=n({color:13213763,metalness:.6,roughness:.35,emissive:P,emissiveIntensity:.9}),$=Nu(b.title,{bg:U,color:O,seed:77}),te=new le(new ut(.8,1.1,.16),[Y,Y,Y,Y,n({map:$,emissive:16777215,emissiveMap:$,emissiveIntensity:.8}),Y]);te.position.y=-1,te.visible=!1,z.add(te);let pe=new Rt(new wt({map:Xt("rgba(255,220,140,.9)","rgba(255,170,60,0)"),color:P,blending:at,depthWrite:!1,opacity:0}));pe.scale.set(2.6,2.6,1),z.add(pe);let ue=t(b,z,[1.2,3.2,1.2],3.75,{standDist:1.4});ue.label.sprite.visible=!1,ue.locked=!0,ue.color=P,ue.obstacle=0,ue.animate=Ee=>{te.rotation.y=Ee*Math.PI*2};let Me={it:ue,glyph:W,hint:Z,beam:ne,book:te,pos:v.clone(),revealed:!1,rise:0};return ue.idle=Ee=>{if(!Me.revealed){W.material.opacity=.28+Math.sin(Ee*2.2)*.12;return}Me.rise=Math.min(1,Me.rise+(ue._dt||.016)/1.4);let Ue=Wt.smoothstep(Me.rise,0,1);te.visible=!0,te.position.y=-.6+Ue*3.1+Math.sin(Ee*1.4)*.05,pe.position.y=te.position.y,pe.material.opacity=Ue*.8,ue.anim===0&&(te.rotation.y=Math.sin(Ee*.8)*.4),ne.material.opacity=.5*Ue+Math.sin(Ee*3)*.05,W.material.opacity=.9},Me}function M(b,v,{face:R,color:x=10479776,label:T,sub:P,small:U=!1,makeLabel:O,href:X}={}){let N=r(v,R),W=n({color:15260080,roughness:.5,metalness:.2,emissive:3812368,emissiveIntensity:.3}),Z=new le(new en(1.25,.14,8,32,Math.PI),W);Z.position.y=2.6,N.add(Z);for(let Y of[-1,1]){let $=new le(new ut(.28,2.6,.28),W);$.position.set(Y*1.25,1.3,0),N.add($)}let z=new le(new Ot(2.3,3.8),new Ze({map:Xt("rgba(255,255,255,1)","rgba(255,255,255,0.05)",256),color:s(x,1.4),transparent:!0,blending:at,depthWrite:!1}));z.position.y=1.9,N.add(z);let ne=t(b,N,[2.4,3.8,1],4.4,{standDist:1.6,isPortal:!0});return ne.portal=X,ne.color=x,ne.obstacle=0,ne.near=1.9,ne.animate=Y=>{z.scale.setScalar(1+Y*.3)},ne.idle=Y=>{z.material.opacity=.75+Math.sin(Y*2)*.2},ne}return{jar:f,glowBook:g,lectern:y,doc:m,screen:S,secret:A,portal:M,woodM:o,trimM:l,knobM:a}}var Rs=11.5,ji=Rs*Math.cos(Math.PI/6),mp=Wt.degToRad,Cs=(i,e,t=0)=>new I(i*Math.sin(mp(e)),t,-i*Math.cos(mp(e))),Qs=(i,e,t,n=0)=>{let s=Cs(1,i),r=new I(-s.z,0,s.x);return s.multiplyScalar(t).addScaledVector(r,e).setY(n)},js=(i,e)=>e.clone().addScaledVector(Cs(1,i),-6);function oo(i,e,t,n,s=Math.PI/6){i.beginPath();for(let r=0;r<6;r++){let o=s+r*Math.PI/3;i[r?"lineTo":"moveTo"](e+n*Math.cos(o),t+n*Math.sin(o))}i.closePath()}function fv(){let[e,t]=mt(2048,2048);t.fillStyle="#f3e3bb",t.fillRect(0,0,2048,2048);let n=46,s=Math.sqrt(3)*n,r=0;for(let c=-1;c*n*1.5<2048+n;c++)for(let u=-1;u*s<2048+s;u++){let d=u*s+(c%2?s/2:0),h=c*n*1.5;r++;let f=Math.hypot(d-2048/2,h-2048/2)/(2048/2),g=Math.sin(d*.013)+Math.cos(h*.011)+r*7919%13/6>1.4;oo(t,d,h,n-3),t.fillStyle=g?`hsl(40,${70-f*20}%,${62-f*8}%)`:`hsl(44,${45-f*15}%,${86-f*10}%)`,t.fill(),t.strokeStyle="rgba(160,110,30,.55)",t.lineWidth=4,t.stroke()}t.save(),t.translate(2048/2,2048/2),t.strokeStyle="rgba(190,130,20,.95)",t.lineWidth=7;let o=150,a=[[0,0]];for(let c=1;c<=2;c++)for(let u=0;u<6*c;u++){let d=Math.floor(u/c),h=u%c/c,f=d*Math.PI/3,g=(d+1)*Math.PI/3;a.push([c*o*((1-h)*Math.cos(f)+h*Math.cos(g)),c*o*((1-h)*Math.sin(f)+h*Math.sin(g))])}for(let[c,u]of a)Math.hypot(c,u)>o*2.01||(t.beginPath(),t.arc(c,u,o,0,Math.PI*2),t.stroke());t.lineWidth=10,t.beginPath(),t.arc(0,0,o*3,0,Math.PI*2),t.stroke();let l=Math.PI*(3-Math.sqrt(5));for(let c=60;c<900;c++){let u=26*Math.sqrt(c),d=c*l;if(u>2048*.47)break;t.fillStyle=`rgba(${150+c%5*12},${100+c%3*10},20,${.55})`,t.beginPath(),t.arc(u*Math.cos(d),u*Math.sin(d),5+c%4,0,Math.PI*2),t.fill()}return t.restore(),vt(e)}var gp=[i=>{i.moveTo(-14,-10),i.lineTo(0,10),i.lineTo(14,-10),i.moveTo(-14,-10),i.lineTo(-18,-18),i.moveTo(14,-10),i.lineTo(18,-18)},i=>{i.moveTo(-12,14),i.lineTo(-12,-12),i.lineTo(12,-12),i.lineTo(12,14),i.moveTo(-4,14),i.lineTo(-4,2),i.lineTo(4,2),i.lineTo(4,14)},i=>{i.moveTo(-18,0);for(let e=0;e<5;e++)i.lineTo(-18+(e+.5)*7.2,e%2?6:-6);i.lineTo(18,0)},i=>{i.ellipse(0,0,15,9,0,0,Math.PI*2),i.moveTo(5,0),i.arc(0,0,5,0,Math.PI*2)},i=>{i.moveTo(-10,14),i.lineTo(0,-4),i.lineTo(10,14),i.moveTo(0,-4),i.lineTo(0,-16),i.moveTo(-8,-12),i.lineTo(0,-4),i.lineTo(8,-12)},i=>{i.moveTo(-10,16),i.lineTo(-10,-14),i.lineTo(10,-14),i.moveTo(-10,-2),i.lineTo(6,-2)},i=>{i.moveTo(0,-14),i.bezierCurveTo(14,-6,14,8,0,14),i.bezierCurveTo(-14,8,-14,-6,0,-14),i.moveTo(0,-14),i.lineTo(0,14)},i=>{i.moveTo(0,16),i.lineTo(0,-16),i.moveTo(0,-4),i.lineTo(-10,-14),i.moveTo(0,-4),i.lineTo(10,-14),i.moveTo(0,6),i.lineTo(-12,-2),i.moveTo(0,6),i.lineTo(12,-2)}];function va(i,e,t,n,s){i.save(),i.translate(t,n),i.scale(s,s),i.beginPath(),gp[e%gp.length](i),i.restore(),i.stroke()}function pv(){let[t,n]=mt(2048,1024),s=n.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#dfeec4"),s.addColorStop(.55,"#a8cf88"),s.addColorStop(1,"#6f9a52"),n.fillStyle=s,n.fillRect(0,0,2048,1024);for(let a=0;a<26;a++){let l=(a+.5)*2048/26,c=1024;n.strokeStyle="rgba(70,110,40,.55)",n.lineWidth=5,n.beginPath(),n.moveTo(l,c);for(let u=0;u<18;u++)l+=Math.sin(u*.9+a)*16,c-=1024/20,n.lineTo(l,c),n.save(),n.translate(l,c),n.rotate(Math.sin(u+a)*1.4),n.fillStyle=u%5===0?"rgba(255,238,170,.9)":`rgba(${80+u*13%60},${140+u*7%50},60,.8)`,n.beginPath(),n.ellipse(14,0,16,6,0,0,Math.PI*2),n.fill(),n.restore();n.stroke()}let r=1024*.3;n.fillStyle="rgba(120,80,20,.55)",n.fillRect(0,r-46,2048,92),n.strokeStyle="#ffe3a0",n.lineWidth=3,n.beginPath(),n.moveTo(0,r-46),n.lineTo(2048,r-46),n.moveTo(0,r+46),n.lineTo(2048,r+46),n.stroke(),n.lineWidth=4.5,n.lineCap="round",n.strokeStyle="#fff0c4";for(let a=0;a<40;a++)va(n,a*5%8,(a+.5)*2048/40,r,1.35);let o=vt(t);return o.wrapS=Mi,o}function mv(){let[e,t]=mt(1024,1024);t.fillStyle="#fff4d6",t.fillRect(0,0,1024,1024);let n=34,s=Math.sqrt(3)*n;for(let r=-1;r*n*1.5<1024+n;r++)for(let o=-1;o*s<1024+s;o++){let a=o*s+(r%2?s/2:0),l=r*n*1.5;oo(t,a,l,n-2);let c=t.createRadialGradient(a,l,2,a,l,n);c.addColorStop(0,"#ffd772"),c.addColorStop(1,"#e0a73a"),t.fillStyle=c,t.fill(),t.strokeStyle="#fff1c8",t.lineWidth=4,t.stroke()}return vt(e)}function gv(){let[e,t]=mt(256,256);t.translate(256/2,256/2),t.strokeStyle="rgba(255,220,120,1)",t.lineWidth=9,oo(t,0,0,110),t.stroke(),t.lineWidth=5,oo(t,0,0,78),t.stroke();for(let n=0;n<6;n++){let s=Math.PI/6+n*Math.PI/3;oo(t,Math.cos(s)*45,Math.sin(s)*45,20),t.stroke()}return t.fillStyle="rgba(255,230,150,1)",oo(t,0,0,22),t.fill(),vt(e)}function xp(i){let{scene:e,register:t,makeLabel:n,std:s,glowColor:r,small:o,obstacles:a}=i,l=Zc(i);e.background=new Te(16182480),e.fog=new Zi(15853250,.018),e.add(new ks(16774358,6982218,1.25)),e.add(new Ws(16773328,.35));let c=new Vs(16773320,1.2);c.position.set(3,14,2),e.add(c);let u=new ci(16766592,26,16,1.4);u.position.set(0,4.2,0),e.add(u);let d=new ci(12582810,10,10,1.6);d.position.copy(Cs(7,60,2.8)),e.add(d);let h=new ci(16751184,9,9,1.6);h.position.copy(Cs(7,300,2.6)),e.add(h);let f=6.4,g=new le(new wi(Rs,6,Math.PI/6+Math.PI/2),s({map:fv(),roughness:.55,metalness:.05}));g.rotation.x=-Math.PI/2,e.add(g);let y=pv();y.repeat.set(3,1);let m=new le(new yt(Rs,Rs,f,6,1,!0),s({map:y,roughness:.85,side:Jt,emissive:2767384,emissiveIntensity:.25}));m.rotation.y=Math.PI/6,m.position.y=f/2,e.add(m);let p=new le(new yt(3.2,Rs,3.6,6,1,!0),new dt({map:mv(),side:Jt,emissive:16758858,emissiveIntensity:.45,roughness:.6}));p.rotation.y=Math.PI/6,p.position.y=f+1.8,e.add(p);let S=new le(new wi(3.2,6,Math.PI/6+Math.PI/2),new Ze({color:r(16774876,2.2),fog:!1}));S.rotation.x=Math.PI/2,S.position.y=f+3.6,e.add(S);let A=s({color:14725200,metalness:.8,roughness:.3,emissive:5913096,emissiveIntensity:.4}),M=new dt({color:16760896,emissive:16752656,emissiveIntensity:1.6,transparent:!0,opacity:.9,roughness:.2}),b=[];for(let F=0;F<6;F++){let C=30+F*60,H=Cs(Rs-.35,C),K=new le(new yt(.32,.38,f,6),A);K.position.set(H.x,f/2,H.z),e.add(K);let G=Cs(Rs-1.6,C,4.3),w=new Qe;w.position.copy(G),e.add(w),w.add(new le(new yt(.28,.28,.5,6),M));let D=new le(new Ai(.3,.2,6),A);D.position.y=.35,w.add(D);let q=new le(new yt(.012,.012,1.6,4),A);q.position.y=1.2,w.add(q);let se=new Rt(new wt({map:Xt("rgba(255,210,110,.8)","rgba(255,170,40,0)"),blending:at,depthWrite:!1}));se.scale.set(1.6,1.6,1),w.add(se),b.push(w)}for(let F of[.06,f-.05]){let C=new le(new en(Rs-.08,.07,4,6),A);C.rotation.x=Math.PI/2,C.rotation.z=Math.PI/6+Math.PI/2,C.position.y=F,e.add(C)}let v=s({color:9069632,roughness:.8,emissive:2759176,emissiveIntensity:.3}),R=new Qe;e.add(R);let x=new le(new yt(.38,.8,2.8,14,6),v);x.position.y=1.4,R.add(x);let T=[];for(let F=0;F<7;F++){let C=F/7*Math.PI*2+.3,H=2.2+F%3*.5,K=new Vn([new I(0,2.5,0),new I(Math.cos(C)*.8,3.2,Math.sin(C)*.8),new I(Math.cos(C)*H,3.7+F%2*.5,Math.sin(C)*H)]);R.add(new le(new Ri(K,10,.16,6),v)),T.push(K.getPoint(1))}for(let F=0;F<9;F++){let C=F/9*Math.PI*2,H=1.6+F%3*.35,K=new Vn([new I(0,.5,0),new I(Math.cos(C)*.9,.18,Math.sin(C)*.9),new I(Math.cos(C)*H,.02,Math.sin(C)*H)]);R.add(new le(new Ri(K,8,.13,5),v))}let P=o?520:900,U=new Ot(.22,.13),O=new dt({color:10476650,emissive:5941296,emissiveIntensity:.55,side:Pt,roughness:.6}),X=new Dn(U,O,P),N=new qt,W=new Te;for(let F=0;F<P;F++){let C=T[F%T.length],H=Math.cbrt(Math.random())*1.6,K=Math.random()*Math.PI*2,G=Math.acos(2*Math.random()-1);N.position.set(C.x*.8+H*Math.sin(G)*Math.cos(K),C.y+.2+H*Math.cos(G)*.7,C.z*.8+H*Math.sin(G)*Math.sin(K)),N.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),N.updateMatrix(),X.setMatrixAt(F,N.matrix),W.setHSL(.2+Math.random()*.1,.6,.45+Math.random()*.25),Math.random()<.12&&W.setHSL(.13,.9,.62),X.setColorAt(F,W)}R.add(X);let Z=Xt("rgba(255,250,235,1)","rgba(255,200,220,0)"),z=[];for(let F=0;F<40;F++){let C=T[F%T.length],H=new Rt(new wt({map:Z,color:F%3?16770800:16773808,blending:at,depthWrite:!1}));H.position.set(C.x*.8+(Math.random()-.5)*2.4,C.y+(Math.random()-.3)*1.4,C.z*.8+(Math.random()-.5)*2.4),H.scale.setScalar(.35+Math.random()*.25),R.add(H),z.push(H)}let ne=new Rt(new wt({map:Xt("rgba(255,240,170,.55)","rgba(255,220,120,0)"),blending:at,depthWrite:!1}));ne.position.y=4.2,ne.scale.set(6,4,1),R.add(ne),a.push({x:0,z:0,r:1.3}),n("The Sacred Tree","Seed, story, song",new I(0,2.9,1.2),{width:o?2.6:2.2,always:!0,big:!0}).table=!0;let Y=o?90:160,$=new lt,te=new Float32Array(Y*3),pe=new Float32Array(Y);for(let F=0;F<Y;F++)pe[F]=Math.random(),te[F*3]=0,te[F*3+1]=0,te[F*3+2]=0;$.setAttribute("position",new pt(te,3)),$.setAttribute("aRnd",new pt(pe,1));let ue=new Ct({transparent:!0,depthWrite:!1,blending:at,uniforms:{uTime:{value:0},uPR:{value:i.pixelRatio}},vertexShader:`uniform float uTime; uniform float uPR; attribute float aRnd; varying float vA;
      void main(){ float t = uTime*(0.25+aRnd*0.35) + aRnd*60.0; float home = floor(aRnd*6.0);
        float ang = home*1.0472; vec3 c = mix(vec3(0.0,3.9,0.0), vec3(sin(ang)*7.5, 1.6, -cos(ang)*7.5), step(0.55, fract(aRnd*7.0)));
        vec3 p = c + vec3(sin(t*1.7)*(1.2+aRnd), sin(t*2.3)*0.6 + cos(t*0.7)*0.4, cos(t*1.3)*(1.2+aRnd));
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; vA = 0.7+0.3*sin(uTime*20.0+aRnd*40.0);
        gl_PointSize = (3.0+aRnd*2.0)*uPR*(8.0/-mv.z); }`,fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-0.5); gl_FragColor=vec4(vec3(1.0,0.78,0.25)*1.6, smoothstep(0.5,0.1,d)*vA); }"}),Me=new li($,ue);Me.frustumCulled=!1,e.add(Me);let Ee=new Qe;e.add(Ee);let Ue=document.createElement("canvas");Ue.width=64,Ue.height=8;{let F=Ue.getContext("2d");for(let C=0;C<8;C++)F.fillStyle=C%2?"#2a1a08":"#ffc830",F.fillRect(C*8,0,8,8)}let ie=new Gn(Ue);ie.colorSpace=kt;let oe=new le(new $t(.09,12,8),new dt({map:ie,emissive:16752640,emissiveIntensity:.6}));oe.scale.set(1,1,1.5),oe.rotation.y=Math.PI/2,Ee.add(oe);let xe=new Ze({color:r(15400959,1.4),transparent:!0,opacity:.6,side:Pt,depthWrite:!1}),Ne=[-1,1].map(F=>{let C=new le(new wi(.09,10),xe);return C.position.set(.07*F,.07,0),C.rotation.x=-Math.PI/2,Ee.add(C),C}),ve=new Rt(new wt({map:Xt("rgba(255,210,90,.9)","rgba(255,170,40,0)"),blending:at,depthWrite:!1}));ve.scale.set(.45,.45,1),ve.material.opacity=.6,Ee.add(ve);let ze=(F,C,H,K=0)=>n(F,C,Qs(H,K,ji-1.1,4.7),{width:o?3.2:2.8,always:!0,big:!0}),Mt=F=>(window.ARK_ASHERAH||[]).find(C=>C.id===F),Oe=(F,C,H=8.3)=>Qs(F,C,H),He=(F,C,H,K,G={},w)=>{let D=Mt(C);if(!D)return null;let q=Oe(H,K,w);return F(D,q,{face:js(H,q),...G})},je=16765562;ze("The Goddess Webs","Where the old world is remembered",0),He(l.jar,"a03",0,-4.2,{seed:3,hue:24,labelY:2.55}),He(l.lectern,"a04",0,-1.7,{seed:4,labelY:2.3}),He(l.glowBook,"a02",0,.9,{seed:1,color:je,cover:1323036,labelY:3.05}),He(l.lectern,"a05",0,3.6,{seed:5,leather:!0,hue:32,labelY:2.5,stamp:"#ffe08a"}),ze("The Kitchen Garden","Seed, soil, repair",60),He(l.glowBook,"a07",60,-3.6,{seed:2,color:11992970,cover:1586714,labelY:3});{let F=Mt("a08"),C=Oe(60,-.9),H=new Qe;H.position.copy(C),H.lookAt(js(60,C).setY(0)),e.add(H);let K=new le(new ut(1.1,.9,.7),l.woodM);K.position.y=.45,H.add(K);let G=new le(new ut(.9,.22,.5),s({color:8014372,roughness:.6}));G.position.set(0,.62,.35),H.add(G);let w=new le(new $t(.04,8,6),l.knobM);w.position.set(0,.62,.61),H.add(w);let D=l.doc(F,C,{face:js(60,C),seed:8,sub:"research drawer",y:.93,labelY:1.95,stand:Oe(60,-.9,6.7)});D.obstacle=.55,D.near=1.3}He(l.lectern,"a09",60,1.6,{seed:9,labelY:2.35}),He(l.jar,"a10",60,4,{seed:10,hue:30,labelY:2.6,scale:1.05});for(let F of[-2.3,2.8]){let C=Qs(60,F,ji-.6),H=new le(new ut(1.4,.5,.7),l.woodM);H.position.copy(C).setY(.25),H.lookAt(js(60,C).setY(.25)),e.add(H);for(let K=0;K<7;K++){let G=new le(new Ai(.1,.5,5),s({color:7323466,emissive:2779664,emissiveIntensity:.4}));G.position.copy(C).add(new I((Math.random()-.5)*1.1,.7,(Math.random()-.5)*.5)),e.add(G)}}ze("The Name Tablet \xB7 The Sand Urn","Names, and the green Sahara",120);{let F=Qs(120,-2.2,ji-.35,0),C=new le(new ut(1.6,2.4,.25),s({color:14207140,roughness:.9}));C.position.copy(F).setY(1.9),C.lookAt(js(120,F).setY(1.9)),e.add(C);let[H,K]=mt(256,384);K.fillStyle="#d8c8a4",K.fillRect(0,0,256,384),K.strokeStyle="#6a4a20",K.lineWidth=5,K.lineCap="round";for(let w=0;w<12;w++)va(K,w*3+1,52+w%3*76,60+Math.floor(w/3)*90,1.4);let G=new le(new Ot(1.5,2.3),s({map:vt(H),roughness:.9}));G.position.z=.13,C.add(G)}He(l.lectern,"a17",120,-2.2,{seed:17,labelY:2.35}),He(l.lectern,"a25",120,0,{seed:25,leather:!0,hue:44,labelY:2.75,stamp:"#fff0b0"},9),He(l.jar,"a18",120,2.2,{seed:18,hue:38,labelY:2.6,scale:1.15,plinthColor:14270346}),ze("The Doorway","Welcome to the Mother\u2019s library",180,3.6),He(l.screen,"a01",180,3.6,{H:2.3,W:1.3,y:2.5,labelY:4},ji-.2),ze("The Canyon Threshold","Charts left on the canyon floor",240),He(l.lectern,"a23",240,-2.4,{seed:23,labelY:2.35}),He(l.jar,"a26",240,4.3,{seed:26,hue:34,labelY:2.6,scale:1,plinthColor:14732442}),He(l.screen,"a20",240,1.3,{H:2.3,W:1.3,y:2.5,labelY:4},ji-.2),ze("The Scorched Niche \xB7 The Myth Chair \xB7 The Groves","What was burned, and what grew back",300),He(l.lectern,"a15",300,-3.9,{seed:15,leather:!0,hue:14,labelY:2.4,stamp:"#ffb070",candle:!0}),He(l.screen,"a11",300,-.3,{H:2.3,W:1.3,y:2.5,labelY:4},ji-.2);{let F=Oe(300,3.4,8.9),C=new Qe;C.position.copy(F),C.lookAt(js(300,F).setY(0)),e.add(C);let H=new le(new ut(.9,.12,.8),l.woodM);H.position.y=.55,C.add(H);let K=new le(new ut(.9,1.4,.12),l.woodM);K.position.set(0,1.2,-.38),C.add(K);let G=new le(new en(.3,.04,6,6),A);G.position.set(0,1.7,-.3),C.add(G)}He(l.lectern,"a24",300,3.4,{seed:24,leather:!0,hue:340,labelY:2.5,stamp:"#ffd0e0",candle:!1},7.6);let Ve=Mt("a00"),et=Cs(2.9,140),qe=Ve?l.secret(Ve,et,{glyphTex:gv(),hintTitle:"A honey cell at the roots",hintSub:"The bee is dancing here",color:16762976,coverBg:"#3a4a18",coverInk:"#ffeeb0",small:o,makeLabel:n}):null,Nt="follow",ht=0,Lt=0;qe&&(qe.hint.sprite.visible=!1,qe.it.stand=Cs(4.4,140),qe.ready=()=>Nt==="dance"&&(Lt>=3||ht>=12),qe.notReady="Wait. Watch the bee dance first. She is telling us where to look.",qe.name="The bee\u2019s waggle dance",qe.fact=Ve.fact="Honeybees really do dance directions. In the waggle dance, the angle of the straight run from vertical matches the direction of the flowers from the sun, and the length of the run tells the distance. Karl von Frisch decoded it and shared the 1973 Nobel Prize.",Ve.secretName=qe.name,qe.hintText=F=>F<3?"Open three pieces from the shelves, then watch the bee. She knows where something was lost.":"The bee is dancing at the roots of the tree. Watch her dance, then walk me to the honey cell.");let V=new URL(location.href);V.searchParams.delete("room"),V.searchParams.set("via","portal");let Et=l.portal({id:"portal-library",kind:"portal",title:"Back to the Library",by:"The Library of the Ark \xB7 Center of the Ark",blurb:"",url:V.toString()},Qs(180,-.8,ji-.3),{face:js(180,Qs(180,-.8,ji-.3)),color:16769184,makeLabel:n,href:V.toString()});Et.stand=Qs(180,-.8,ji-2);let Ge=new I;function L(F,C,H){ue.uniforms.uTime.value=F;for(let w=0;w<6;w++)b[w].rotation.y=Math.sin(F*.6+w)*.15;O.emissiveIntensity=.5+Math.sin(F*.9)*.12,z.forEach((w,D)=>{w.material.opacity=.7+Math.sin(F*1.5+D)*.3}),ne.material.opacity=.8+Math.sin(F*.7)*.2,u.intensity=26+Math.sin(F*1.1)*3;let K=H.lion.root.position;if(qe&&!qe.revealed&&H.found>=3?Nt!=="dance"&&(Nt="dance",ht=0,qe.hint.sprite.visible=!0,H.onDance&&H.onDance()):qe&&qe.revealed&&(Nt="follow"),Nt==="dance"){if(ht+=C,H.camera){Ge.set(et.x,1,et.z);let Q=H.camera.position.distanceTo(Ge);Ge.project(H.camera),Math.abs(Ge.x)<.92&&Math.abs(Ge.y)<.92&&Ge.z<1&&Q<9.5&&(Lt+=C)}let w=ht*.9%2,D=w<1?1:-1,q=w%1,se=q<.5?q/.5*Math.PI:Math.PI;Ge.set(et.x+D*.35*Math.sin(se)*(q<.5?1:0),1+Math.sin(ht*3)*.05,et.z+(q<.5?.35*Math.cos(se):.35-(q-.5)*1.4)),q>=.5&&(Ge.x+=Math.sin(ht*40)*.07),Ee.position.lerp(Ge,Math.min(1,C*6)),qe.glyph.material.opacity=.55+Math.sin(F*5)*.25}else Ge.set(K.x+Math.cos(F*1.6)*.9,2.1+Math.sin(F*2.7)*.2,K.z+Math.sin(F*1.6)*.9),Ee.position.lerp(Ge,Math.min(1,C*3));let G=Ge.sub(Ee.position);G.lengthSq()>1e-4&&(Ee.rotation.y=Math.atan2(G.x,G.z)),Ne.forEach((w,D)=>{w.rotation.z=(D?-1:1)*(.4+Math.sin(F*60)*.5)})}return{tick:L,hidden:qe,say:{name:"White Lion",welcome:"Welcome, reader. I\u2019m the White Lion. Something on the shelves has gone missing. Help me find it.",lines:["The bee remembers every flower.","The oldest library is a hive.","Seed, story, song. That is what she kept.","Something on the shelves has gone missing. Help me find it.","Every title here is real. Go on, touch one."],first:"One found. The groves are waking up.",third:"Look, the bee is dancing at the roots of the tree. Follow her.",reveal:"You found what was lost.",all:"Every shelf, found. The Mother remembers you.",idle:"Pick one. The clay vessels are older than they look.",walk:"The White Lion is walking you to",hint:"the White Lion"},camMaxY:(F,C)=>{let H=Math.hypot(F,C);return H>4.8?99:2.15+Wt.smoothstep(H,3.8,4.8)*3},maxR:8.2,camR:9.3,lionStart:new I(0,0,5),exposure:.72,bloomStrength:.45,bloomThreshold:.95,portals:[Et]}}var xv=(1+Math.sqrt(5))/2;function gt(i,e,t,n){i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.stroke()}function zu(i,e,t,n,s=2){let r=[[0,0]];for(let o=1;o<=s;o++)for(let a=0;a<6*o;a++){let l=Math.floor(a/o),c=a%o/o,u=l*Math.PI/3,d=(l+1)*Math.PI/3;r.push([o*n*((1-c)*Math.cos(u)+c*Math.cos(d)),o*n*((1-c)*Math.sin(u)+c*Math.sin(d))])}for(let[o,a]of r)gt(i,e+o,t+a,n);gt(i,e,t,n*(s+1))}function Ma(i,e,t,n){gt(i,e,t,n);for(let s=0;s<6;s++)gt(i,e+n*Math.cos(s*Math.PI/3),t+n*Math.sin(s*Math.PI/3),n);gt(i,e,t,n*2)}function Gu(i,e,t,n){let s=[[0,0]];for(let r=0;r<6;r++){let o=Math.PI/6+r*Math.PI/3;s.push([Math.cos(o)*n,Math.sin(o)*n],[Math.cos(o)*n*2,Math.sin(o)*n*2])}for(let[r,o]of s)gt(i,e+r,t+o,n*.5);i.beginPath();for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++)i.moveTo(e+s[r][0],t+s[r][1]),i.lineTo(e+s[o][0],t+s[o][1]);i.stroke()}function Ps(i,e,t,n,s,r,o=-Math.PI/2){i.beginPath();for(let a=0;a<=s;a++){let l=o+a*r%s/s*Math.PI*2;i[a?"lineTo":"moveTo"](e+Math.cos(l)*n,t+Math.sin(l)*n)}i.stroke()}function _p(i,e,t,n){for(let[s,r]of[[1,1],[.78,-1],[.58,1],[.4,-1],[.26,1]]){i.beginPath();for(let o=0;o<=3;o++){let a=(r>0?-Math.PI/2:Math.PI/2)+o*Math.PI*2/3;i[o?"lineTo":"moveTo"](e+Math.cos(a)*n*s,t+Math.sin(a)*n*s)}i.stroke()}gt(i,e,t,n*1.05),gt(i,e,t,n*1.15)}function yp(i,e,t,n){gt(i,e-n/2,t,n),gt(i,e+n/2,t,n),i.beginPath(),i.moveTo(e,t-n*.866),i.lineTo(e,t+n*.866),i.stroke()}function $c(i,e,t,n,s=3.2,r=0){let o=Math.log(xv)/(Math.PI/2),a=s*Math.PI*2,l=n/Math.exp(o*a);i.beginPath();for(let c=0;c<=a;c+=.02){let u=l*Math.exp(o*c);i[c?"lineTo":"moveTo"](e+u*Math.cos(c+r),t+u*Math.sin(c+r))}i.stroke();for(let c=Math.floor(a/(Math.PI/2))-5;c<=a/(Math.PI/2);c++){if(c<1)continue;let u=c*Math.PI/2,d=l*Math.exp(o*u);i.beginPath(),i.moveTo(e,t),i.lineTo(e+d*Math.cos(u+r),t+d*Math.sin(u+r)),i.globalAlpha*=.5,i.stroke(),i.globalAlpha*=2}}function vp(i,e,t,n,s,r){let o=Math.PI*(3-Math.sqrt(5));for(let a=1;a<s;a++){let l=n*Math.sqrt(a/s),c=a*o;i.beginPath(),i.arc(e+l*Math.cos(c),t+l*Math.sin(c),r*(.6+.4*Math.sqrt(a/s)),0,Math.PI*2),i.fill()}}function Sa(i,e,t,n,s,r="center"){let o=[],a=/([\^_])\{([^}]*)\}/g,l=0,c;for(;c=a.exec(e);)c.index>l&&o.push([e.slice(l,c.index),0]),o.push([c[2],c[1]==="^"?1:-1]),l=a.lastIndex;l<e.length&&o.push([e.slice(l),0]);let u='Georgia,"Times New Roman",serif',d=y=>y?`italic ${Math.round(s*.62)}px ${u}`:`italic ${s}px ${u}`,h=0;for(let[y,m]of o)i.font=d(m),h+=i.measureText(y).width;let f=r==="center"?t-h/2:r==="right"?t-h:t,g=i.textAlign;i.textAlign="left";for(let[y,m]of o)i.font=d(m),i.fillText(y,f,n+(m>0?-s*.38:m<0?s*.2:0)),f+=i.measureText(y).width;return i.textAlign=g,h}var Mp=["E = mc^{2}","\u03C6 = (1 + \u221A5) / 2 \u2248 1.618","F_{n} = F_{n\u22121} + F_{n\u22122}","e^{i\u03C0} + 1 = 0","a^{2} + b^{2} = c^{2}","\u2207 \xB7 E = \u03C1 / \u03B5_{0}","\u2207 \xB7 B = 0","\u2207 \xD7 E = \u2212\u2202B/\u2202t","\u2207 \xD7 B = \u03BC_{0}J + \u03BC_{0}\u03B5_{0} \u2202E/\u2202t","c = 1 / \u221A(\u03BC_{0}\u03B5_{0})","C = 2\u03C0r","E = h\u03BD","\u03BB = h / p","F = G m_{1}m_{2} / r^{2}","S = k_{B} ln W","PV = nRT","i^{2} = \u22121","1, 1, 2, 3, 5, 8, 13, 21, 34, 55","137.5\xB0 \xB7 the golden angle","A\u2013T \xB7 G\u2013C","\u03C0 \u2248 3.14159","f \xB7 2 = one octave","3 : 2 \xB7 the perfect fifth"];var Yn=13,fi=7.2,tr=Wt.degToRad,bt=(i,e,t=0)=>new I(i*Math.sin(tr(e)),t,-i*Math.cos(tr(e))),Ep="#c9962a";var It=2048,ku=i=>It*(i/Yn+1)/2,Vu=i=>It*(i/Yn+1)/2,zt=It/(2*Yn),er=bt(5.6,-75),yv=[{key:"paw",id:"e14",name:"HALO\u2019s paw print",pos:bt(6.4,100),trigger:"walk",hint:"I left a paw print on the east side of the floor, near the glowing books. Walk me onto it.",fact:"A lion\u2019s roar can be heard up to about 8 km (5 miles) away. Lions roar to tell their pride, and rivals, where they are."},{key:"spiral",id:"s1",name:"The eye of the golden spiral",pos:er,trigger:"walk",hint:"A golden spiral is inlaid in the floor on the west side, by the clay jars. Follow it inward to its eye.",fact:"The golden ratio \u03C6 = (1 + \u221A5) / 2 \u2248 1.618. Divide a Fibonacci number by the one before it (8/5, 13/8, 21/13\u2026) and the answer closes in on \u03C6. A golden spiral grows by a factor of \u03C6 every quarter turn."},{key:"fib",id:"s2",name:"The Fibonacci tablet",pos:bt(5.5,-142),trigger:"manual",hint:"The stone tablet by the south-west scrolls asks a question: 1, 1, 2, 3, 5\u2026 what comes next? Touch the right orb.",fact:"Each Fibonacci number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21\u2026 Sunflower heads often show 34 and 55 spirals, neighbouring Fibonacci numbers, because each new seed turns by the golden angle, about 137.5\xB0."},{key:"maxwell",id:"s3",name:"Maxwell\u2019s four columns",pos:bt(5.2,52),trigger:"manual",hint:"Four columns carry Maxwell\u2019s four equations: two beside the Film Wall, two behind the jars and the glowing books. Walk me past each one.",fact:"James Clerk Maxwell\u2019s four equations (1860s) unite electricity and magnetism. They predict waves travelling at c = 1/\u221A(\u03BC\u2080\u03B5\u2080) \u2248 299,792 km/s, the measured speed of light, which showed that light itself is an electromagnetic wave."},{key:"vega",id:"s4",name:"Vega, the once and future pole star",pos:bt(4.2,-35),trigger:"manual",hint:"Look up: drag upward to raise your eyes to the dome. One blue-white star shines brighter than the rest. Tap it.",fact:"Earth\u2019s axis slowly wobbles in a cycle of about 26,000 years (precession). Around 12,000 BCE the bright star Vega was near the north celestial pole, and it will be again around 13,700 CE. Today the pole star is Polaris."},{key:"chimes",id:"s5",name:"The Pythagorean bowls",pos:bt(5.5,142),trigger:"manual",hint:"The singing bowls by the south-east scrolls: which string length sings one octave above the whole string?",fact:"Pythagoras is credited with finding that halving a string raises its pitch one octave (2 : 1), two-thirds of it sounds a perfect fifth (3 : 2) and three-quarters a fourth (4 : 3). Simple whole-number ratios sound harmonious."}];function Tp(i,e){for(let[t,n]of i)t.save(),e(t,n),t.restore()}function vv(){let[i,e]=mt(It,It),[t,n]=mt(It,It),s=e.createRadialGradient(It/2,It/2,50,It/2,It/2,It/2);s.addColorStop(0,"#fffaf0"),s.addColorStop(1,"#f1e4c8"),e.fillStyle=s,e.fillRect(0,0,It,It);let r=11,o=()=>(r=r*16807%2147483647)/2147483647;e.strokeStyle="rgba(190,160,110,.18)",e.lineWidth=2;for(let c=0;c<70;c++){let u=o()*It,d=o()*It;e.beginPath(),e.moveTo(u,d);for(let h=0;h<12;h++)u+=(o()-.5)*120,d+=(o()-.3)*90,e.lineTo(u,d);e.stroke()}e.strokeStyle="rgba(170,130,70,.35)",e.lineWidth=3;for(let c=3.6;c<Yn;c+=1.9){gt(e,It/2,It/2,c*zt);for(let u=0;u<48;u++){let d=u/48*Math.PI*2;e.beginPath(),e.moveTo(It/2+Math.cos(d)*c*zt,It/2+Math.sin(d)*c*zt),e.lineTo(It/2+Math.cos(d)*(c+1.9)*zt,It/2+Math.sin(d)*(c+1.9)*zt),e.stroke()}}n.fillStyle="#000",n.fillRect(0,0,It,It),Tp([[e,0],[n,1]],(c,u)=>{c.strokeStyle=u?"#b8862a":Ep,c.fillStyle=c.strokeStyle,c.lineCap="round",c.translate(It/2,It/2),c.lineWidth=6,zu(c,0,0,.95*zt,2),c.lineWidth=9,gt(c,0,0,3.3*zt),c.lineWidth=5,Ps(c,0,0,5.4*zt,12,5),gt(c,0,0,5.5*zt),gt(c,0,0,5.7*zt),c.lineWidth=3;for(let d=0;d<24;d++){let h=d/24*Math.PI*2;c.beginPath(),c.moveTo(Math.cos(h)*5.7*zt,Math.sin(h)*5.7*zt),c.lineTo(Math.cos(h)*(d%2?7.2:8.2)*zt,Math.sin(h)*(d%2?7.2:8.2)*zt),c.stroke()}c.lineWidth=4,gt(c,0,0,9*zt),gt(c,0,0,9.25*zt);for(let d=0;d<12;d++){let h=(d+.5)/12*Math.PI*2;Ma(c,Math.cos(h)*11.6*zt,Math.sin(h)*11.6*zt,.34*zt)}c.globalAlpha=.7,vp(c,0,0,3.2*zt,420,6),c.globalAlpha=1,c.translate(-It/2,-It/2),c.lineWidth=10,$c(c,ku(er.x),Vu(er.z),2.6*zt,3.25,.9),c.lineWidth=4,gt(c,ku(er.x),Vu(er.z),.35*zt),c.font=`italic ${Math.round(.42*zt)}px Georgia,serif`,c.textAlign="center",Sa(c,"\u03C6 \u2248 1.618",ku(er.x),Vu(er.z)+1.1*zt,Math.round(.36*zt))});let a=vt(i),l=vt(t);return a.anisotropy=l.anisotropy=8,[a,l]}function Mv(i){let e=i?2048:3072,t=e/4,[n,s]=mt(e,t),[r,o]=mt(e,t),a=s.createLinearGradient(0,0,0,t);a.addColorStop(0,"#fff8ea"),a.addColorStop(.5,"#f7ebd0"),a.addColorStop(1,"#ead8b0"),s.fillStyle=a,s.fillRect(0,0,e,t),o.fillStyle="#000",o.fillRect(0,0,e,t),s.strokeStyle="rgba(160,125,70,.22)",s.lineWidth=2;let l=t/9;for(let h=0;h<9;h++){s.beginPath(),s.moveTo(0,h*l),s.lineTo(e,h*l),s.stroke();for(let f=0;f<16;f++){let g=(f+h%2*.5)*e/16;s.beginPath(),s.moveTo(g,h*l),s.lineTo(g,h*l+l),s.stroke()}}let c=Mp;Tp([[s,0],[o,1]],(h,f)=>{h.strokeStyle=f?"#e0b050":Ep,h.fillStyle=h.strokeStyle,h.lineCap="round",h.lineJoin="round",h.lineWidth=t*.004;for(let v of[t*.025,t*.125])h.beginPath(),h.moveTo(0,v),h.lineTo(e,v),h.stroke();f?h.fillStyle="#f0c060":(h.fillStyle="rgba(201,150,42,.12)",h.fillRect(0,t*.025,e,t*.1),h.fillStyle="#9a6e14");let g=e*.01,y=0,m=Math.round(t*.06);for(;g<e*.97;){let v=c[y++%c.length];h.font=`italic ${m}px Georgia,serif`;let R=Sa(h,v,g,t*.098,m,"left");g+=R+e*.03,g<e*.97&&(h.beginPath(),h.arc(g-e*.015,t*.08,t*.006,0,7),h.fill())}h.lineWidth=t*.0045;let p=t*.25,S=t*.075,A=8;for(let v=0;v<A;v++){let R=(v+.5)*e/A;if(!f){let x=s.createRadialGradient(R,p,2,R,p,S*1.6);x.addColorStop(0,"rgba(255,236,180,.8)"),x.addColorStop(1,"rgba(255,236,180,0)"),h.fillStyle=x,h.fillRect(R-S*1.7,p-S*1.7,S*3.4,S*3.4)}[()=>zu(h,R,p,S/3,2),()=>Gu(h,R,p,S/2.1),()=>_p(h,R,p,S*.9),()=>Ma(h,R,p,S/2),()=>{Ps(h,R,p,S,12,5),gt(h,R,p,S)},()=>{yp(h,R,p,S*.9),gt(h,R,p,S*1.05)},()=>{$c(h,R,p,S,3,0),gt(h,R,p,S*1.05)},()=>{Ps(h,R,p,S,7,3),Ps(h,R,p,S*.6,5,2),gt(h,R,p,S)}][v%8]()}let M=t*.395;h.lineWidth=t*.003;for(let v of[M-t*.035,M+t*.035])h.beginPath(),h.moveTo(0,v),h.lineTo(e,v),h.stroke();let b="\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9";h.lineWidth=t*.004;for(let v=0;v<48;v++){let R=(v+.5)*e/48;v%2?va(h,v*3,R,M,t*.0011):(h.font=`${Math.round(t*.045)}px Georgia,serif`,h.textAlign="center",h.fillText(b[v/2%b.length|0],R,M+t*.016))}h.globalAlpha=f?.35:.5,h.lineWidth=t*.002;for(let v=0;v<16;v++){let R=(v+.5)*e/16;Ma(h,R,t*.72,t*.05)}h.globalAlpha=1});let u=vt(n),d=vt(r);for(let h of[u,d])h.wrapS=Mi,h.repeat.set(-3,1),h.anisotropy=8;return[u,d]}function Sv(){let[t,n]=mt(2048,1024),s=n.createLinearGradient(0,0,0,1024);s.addColorStop(0,"#fffdf6"),s.addColorStop(.55,"#fbf0d6"),s.addColorStop(1,"#efd9a4"),n.fillStyle=s,n.fillRect(0,0,2048,1024),n.strokeStyle="#d2a445",n.fillStyle="#d2a445",n.lineWidth=3;for(let a=0;a<24;a++){let l=a/24*2048;n.beginPath(),n.moveTo(l,1024*.12),n.lineTo(l,1024),n.stroke()}for(let a of[.12,.3,.5,.68,.84,.97])n.lineWidth=a>.9?8:3,n.beginPath(),n.moveTo(0,a*1024),n.lineTo(2048,a*1024),n.stroke();n.lineWidth=2.5;for(let a=0;a<24;a++){let l=(a+.5)/24*2048;Ma(n,l,1024*.76,1024*.035),Ps(n,l,1024*.59,1024*.05,8,3),gt(n,l,1024*.905,1024*.03)}let r=5,o=()=>(r=r*16807%2147483647)/2147483647;for(let a=0;a<260;a++){let l=o()*2048,c=1024*(.13+o()*.36),u=1+o()*2.6;n.fillStyle=`rgba(${200+o()*40},${150+o()*40},60,${.55+o()*.45})`,n.beginPath(),n.arc(l,c,u,0,7),n.fill()}return vt(t)}function bv(){let[e,t]=mt(1024,1024);t.translate(1024/2,1024/2),t.strokeStyle="#fff0c0",t.lineCap="round";let n=1024/2/5.2;t.lineWidth=4,Gu(t,0,0,1.15*n),t.lineWidth=3,Ps(t,0,0,4.9*n,12,5),gt(t,0,0,4.95*n),gt(t,0,0,5.1*n),t.lineWidth=2;for(let s=0;s<12;s++){let r=s/12*Math.PI*2;gt(t,Math.cos(r)*3.7*n,Math.sin(r)*3.7*n,.55*n)}return gt(t,0,0,3.1*n),gt(t,0,0,4.3*n),vt(e)}function Ev(i,{w:e=640,h:t=140,size:n=64,color:s="#ffe3a0",glow:r="rgba(255,190,80,.9)"}={}){let[o,a]=mt(e,t);return a.fillStyle=s,a.shadowColor=r,a.shadowBlur=18,Sa(a,i,e/2,t*.62,n),vt(o)}function Tv(i){let[e,t]=mt(128,128);return t.strokeStyle="#fff0c0",t.fillStyle="#fff0c0",t.shadowColor="rgba(255,200,90,1)",t.shadowBlur=14,t.lineWidth=5,t.lineCap="round",i<8?va(t,i,64,64,2.2):(t.font="84px Georgia,serif",t.textAlign="center",t.fillText("\u0391\u03A9\u03A6\u0394\u03A3\u03A0\u039B\u0398"[i-8],64,94)),vt(e)}function ba(i){let[e,t]=mt(256,256);return t.translate(128,128),t.strokeStyle="rgba(255,225,140,1)",t.fillStyle="rgba(255,225,140,1)",t.lineWidth=7,t.lineCap="round",i(t),vt(e)}function wv(i,e,t){let[n,s]=mt(640,380),[r,o]=mt(640,380);s.fillStyle="#f6ecd4",s.fillRect(0,0,640,380),o.fillStyle="#000",o.fillRect(0,0,640,380);for(let[a,l]of[[s,0],[o,1]])a.strokeStyle=l?"#e8b850":"#b8862a",a.lineWidth=6,Vc(a,14,14,612,352,26),a.stroke(),a.fillStyle=l?"#ffd070":"#7a520c",Sa(a,i,320,190,i.length>16?50:66),a.font="600 30px Georgia,serif",a.textAlign="center",a.fillStyle=l?"#c89030":"#5a3c08",a.fillText(e,320,285),a.font="22px system-ui,sans-serif",a.fillText(t,320,325);return[vt(n),vt(r)]}function Sp(i){let[e,t]=mt(768,480);return t.fillStyle="#efe2c2",t.fillRect(0,0,768,480),t.strokeStyle="#b8862a",t.lineWidth=8,Vc(t,16,16,736,448,30),t.stroke(),t.fillStyle="#5a3c08",t.textAlign="center",i.forEach(([n,s,r])=>{t.font=`600 ${s}px Georgia,serif`,t.fillText(n,384,r)}),vt(e)}function bp(i){let[e,t]=mt(256,256),n=t.createRadialGradient(110,100,10,128,128,124);return n.addColorStop(0,"#fffaf0"),n.addColorStop(.6,"#ffd978"),n.addColorStop(1,"rgba(255,190,70,0)"),t.fillStyle=n,t.beginPath(),t.arc(128,128,124,0,7),t.fill(),t.fillStyle="#4a2c04",t.font="700 110px Georgia,serif",t.textAlign="center",t.fillText(i,128,166),vt(e)}function wp(i){let{scene:e,register:t,makeLabel:n,std:s,glowColor:r,small:o,obstacles:a,api:l}=i,c=Zc(i),u=window.ARK_LIBRARY||[],d=w=>u.find(D=>D.id===w),h=w=>u.filter(D=>D.kind===w);e.background=new Te(16774882),e.fog=new Zi(16510934,.011),e.add(new ks(16775920,14204816,1)),e.add(new Ws(16773852,.28));let f=new Vs(16773328,.9);f.position.set(2,20,3),e.add(f);let g=new ci(16769704,11,18,1.5);g.position.set(0,5.5,0),e.add(g);for(let w of[0,90,180,270]){let D=new ci(16773332,5,12,1.6);D.position.copy(bt(8.2,w+45,4.2)),e.add(D)}let[y,m]=vv(),p=new le(new wi(Yn,72),s({map:y,emissive:16762976,emissiveMap:m,emissiveIntensity:.45,roughness:.62,metalness:.02}));p.rotation.x=-Math.PI/2,e.add(p);let[S,A]=Mv(o),M=new le(new yt(Yn,Yn,fi,72,1,!0),s({map:S,emissive:16765040,emissiveMap:A,emissiveIntensity:.55,roughness:.8,side:Jt}));M.position.y=fi/2,e.add(M);let b=new Ze({map:Sv(),side:Jt,fog:!1});b.color.setScalar(.94);let v=new le(new $t(Yn,56,24,0,Math.PI*2,0,Math.PI/2),b);v.position.y=fi,e.add(v);let R=new le(new xs(1.75,5.2,96,1),new Ze({map:bv(),color:r(16760912,1.2),transparent:!0,blending:at,depthWrite:!1,fog:!1,side:Pt}));R.rotation.x=Math.PI/2,R.position.y=18.85,e.add(R);let x=c.trimM;for(let w of[.08,4.75,fi]){let D=new le(new en(Yn-.05,w===fi?.16:.07,6,96),x);D.rotation.x=Math.PI/2,D.position.y=w,e.add(D)}let T=new le(new wi(1.7,40),new Ze({color:r(16774876,3.2),fog:!1}));T.rotation.x=Math.PI/2,T.position.y=fi+Yn-.2,e.add(T);let P=new Ct({transparent:!0,depthWrite:!1,blending:at,side:Pt,uniforms:{uTime:{value:0},uColor:{value:new Te(1,.9,.66)}},vertexShader:"varying vec2 vUv; varying vec3 vP; varying float vF; void main(){ vUv=uv; vP=position; vec4 mv=modelViewMatrix*vec4(position,1.0); vec3 n=normalize(normalMatrix*normal); vF=abs(dot(n, normalize(-mv.xyz))); gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vUv; varying vec3 vP; varying float vF;
      void main(){ float a = atan(vP.x, vP.z); float stripes = 0.6 + 0.4*sin(a*9.0 + uTime*0.15) * sin(a*23.0 - uTime*0.1);
        float fade = smoothstep(0.0, 0.3, vUv.y) * (1.0 - smoothstep(0.88, 1.0, vUv.y));
        gl_FragColor = vec4(uColor * stripes * fade * pow(vF, 2.0) * 0.09, 1.0); }`}),U=fi+Yn-1.5,O=new le(new yt(1.6,3.4,U,40,1,!0),P);O.position.y=U/2+.2,e.add(O);let X=s({color:16511968,roughness:.5,emissive:3811856,emissiveIntensity:.12}),N=new yt(.34,.4,fi,24),W=new yt(.62,.42,.34,24),Z=new yt(.5,.56,.3,24),z=[{deg:-47,eq:"\u2207 \xB7 E = \u03C1 / \u03B5_{0}",name:"Gauss\u2019s law",sub:"Electric charge is the source of electric fields",maxwell:!0},{deg:47,eq:"\u2207 \xB7 B = 0",name:"Gauss\u2019s law for magnetism",sub:"There are no magnetic monopoles",maxwell:!0},{deg:-124,eq:"\u2207 \xD7 E = \u2212\u2202B/\u2202t",name:"Faraday\u2019s law",sub:"A changing magnetic field makes an electric field",maxwell:!0},{deg:124,eq:"\u2207 \xD7 B = \u03BC_{0}J + \u03BC_{0}\u03B5_{0} \u2202E/\u2202t",name:"Amp\xE8re\u2013Maxwell law",sub:"Currents and changing electric fields make magnetism",maxwell:!0},{deg:-170,eq:"E = mc^{2}",name:"Mass\u2013energy equivalence",sub:"Einstein, 1905"},{deg:170,eq:"e^{i\u03C0} + 1 = 0",name:"Euler\u2019s identity",sub:"Five fundamental constants in one line"}],ne=[];for(let w of z){let D=bt(12,w.deg),q=new le(N,X);q.position.set(D.x,fi/2,D.z),e.add(q);let se=new le(W,x);se.position.set(D.x,fi-.17,D.z),e.add(se);let Q=new le(Z,x);Q.position.set(D.x,.15,D.z),e.add(Q),a.push({x:D.x,z:D.z,r:.6});let[he,de]=wv(w.eq,w.name,w.sub),Se=s({map:he,emissive:16762976,emissiveMap:de,emissiveIntensity:w.maxwell?.35:.6,roughness:.5}),B=new le(new Ot(1.35,.8),Se);B.position.copy(bt(11.55,w.deg,2.05)),B.lookAt(0,2.05,0),e.add(B),w.maxwell&&ne.push({...w,pos:D,pm:Se,visited:!1})}let Y=new le(new Ot(3.4,5.2),new Ze({map:Xt("rgba(255,250,230,1)","rgba(255,220,150,0.15)",256),color:r(16777215,1.3),transparent:!0}));Y.position.copy(bt(12.9,180,2.6)),Y.lookAt(0,2.6,0),e.add(Y);{let w=s({color:15391936,roughness:.6,emissive:2759688,emissiveIntensity:.1}),D=[];for(let be=-164;be<=-54;be+=10.5)D.push(be);for(let be=54;be<=164;be+=10.5)D.push(be);let q=new Dn(new ut(1,1,1),s({roughness:.6}),D.length*48),se=new Dn(new ut(2.1,.06,.45),x,D.length*4),Q=new Dn(new ut(2.2,4.6,.5),w,D.length),he=new it,de=new bn,Se=new I,B=new I,me=new Te,ae=[9058850,3041882,11569722,4864634,12604970,8022592,2771594,13672512,6957642,3832378],fe=0,ye=0,ce=3,Ce=()=>(ce=ce*16807%2147483647)/2147483647;D.forEach((be,tt)=>{let rt=bt(12.62,be),Gt=new qt;Gt.position.set(rt.x,2.3,rt.z),Gt.lookAt(0,2.3,0),Gt.updateMatrix(),Q.setMatrixAt(tt,Gt.matrix);for(let Yt=0;Yt<4;Yt++){let Rn=Gt.clone();Rn.translateY(-2+Yt*1.25),Rn.translateZ(.05),Rn.updateMatrix(),se.setMatrixAt(ye++,Rn.matrix)}for(let Yt=0;Yt<3;Yt++){let Rn=-1;for(let is=0;is<16&&Rn<.98;is++){let Qn=.07+Ce()*.06,jn=.7+Ce()*.35,ei=Gt.clone();ei.translateX(Rn+Qn/2),ei.translateY(-1.97+Yt*1.25+jn/2),ei.translateZ(.12),ei.rotateZ(Ce()<.08?.15:0),ei.updateMatrix(),he.copy(ei.matrix),he.decompose(B,de,Se),Se.set(Qn,jn,.32),he.compose(B,de,Se),q.setMatrixAt(fe,he),me.setHex(ae[Ce()*ae.length|0]).multiplyScalar(.8+Ce()*.5),q.setColorAt(fe,me),fe++,Rn+=Qn+.008}}}),q.count=fe,se.count=ye,e.add(Q,se,q)}let $=new Qe;$.position.y=2.3,e.add($);{let se=2.857142857142857,Q=new Dn(new $t(.09,12,8),new Ze({color:16777215}),60),he=new Dn(new yt(.03,.03,1,6),new Ze({color:16777215}),30),de=new it,Se=new bn,B=new Te,me=new I(0,1,0),ae=[16754736,4174079,16738960,6279280];for(let ye=0;ye<30;ye++){let ce=ye/30*se*Math.PI*2,Ce=ye/29*4.3,be=new I(Math.cos(ce)*.5,Ce,Math.sin(ce)*.5),tt=new I(Math.cos(ce+Math.PI*.8)*.5,Ce,Math.sin(ce+Math.PI*.8)*.5);de.makeTranslation(be.x,be.y,be.z),Q.setMatrixAt(ye*2,de),Q.setColorAt(ye*2,B.setRGB(1.25,.82,.25)),de.makeTranslation(tt.x,tt.y,tt.z),Q.setMatrixAt(ye*2+1,de),Q.setColorAt(ye*2+1,B.setRGB(.35,.8,1.25));let rt=be.clone().add(tt).multiplyScalar(.5),Gt=tt.clone().sub(be);Se.setFromUnitVectors(me,Gt.clone().normalize()),de.compose(rt,Se,new I(1,Gt.length(),1)),he.setMatrixAt(ye,de),he.setColorAt(ye,B.setHex(ae[ye%4]).multiplyScalar(1.05))}$.add(Q,he);let fe=new Rt(new wt({map:Xt("rgba(255,240,200,.5)","rgba(255,220,150,0)"),blending:at,depthWrite:!1}));fe.position.y=4.3/2,fe.scale.set(2.2,4.6,1),fe.material.opacity=.5,$.add(fe)}let te=[],pe=["E = mc^{2}","\u03C6 = (1 + \u221A5) / 2","F_{n} = F_{n\u22121} + F_{n\u22122}","e^{i\u03C0} + 1 = 0","a^{2} + b^{2} = c^{2}","\u2207 \xB7 E = \u03C1 / \u03B5_{0}","c \u2248 299,792 km/s","1, 1, 2, 3, 5, 8, 13\u2026","137.5\xB0","E = h\u03BD","\u03C0 \u2248 3.14159","A\u2013T \xB7 G\u2013C","\u03BB = h / p","2 : 1 \xB7 3 : 2 \xB7 4 : 3","C = 2\u03C0r","i^{2} = \u22121"],ue=o?9:pe.length;for(let w=0;w<ue;w++){let D=new Rt(new wt({map:Ev(pe[w]),transparent:!0,depthWrite:!1,blending:at,opacity:.85,fog:!1}));D.scale.set(2.2,.48,1),e.add(D),te.push({s:D,a:w/ue*Math.PI*2,r:4.3+w%3*1.3,y:3.6+w%4*.55,sp:.03+w%5*.006})}let Me=[],Ee=Array.from({length:16},(w,D)=>Tv(D)),Ue=o?14:26;for(let w=0;w<Ue;w++){let D=new Rt(new wt({map:Ee[w%16],transparent:!0,depthWrite:!1,blending:at,color:r(16769184,1.4),fog:!1}));D.scale.setScalar(.42),e.add(D),Me.push({s:D,a:w*2.39996,r:1.2+w%5*.35,y0:w/Ue*9,sp:.35+w%3*.12})}let ie=(w,D,q)=>n(w,D,q,{width:o?3.4:3,always:!0,big:!0});ie("The Film Wall","The Library\u2019s films",bt(11.2,0,5.45)),ie("Clay Jars","Old wisdom & history",bt(10.6,-90,4.55)),ie("Glowing Books","What humans & AI build together",bt(10.6,89,4.55)),ie("Scrolls & Leather Books","Essays and lessons",bt(10.2,-148,4.55)),ie("Scrolls & Leather Books","Essays and lessons",bt(10.2,148,4.55)),h("jar").forEach((w,D,q)=>c.jar(w,bt(10.6,-118+D*(56/(q.length-1))),{seed:D+1,hue:14+D*4,scale:.95+D%3*.12,labelY:2.55+D%2*.35,plinthColor:15259572})),h("future").forEach((w,D,q)=>c.glowBook(w,bt(10.4,62+D*(54/(q.length-1))),{seed:D,labelY:2.95+D%2*.3}));let oe=[-130,130,-139,139,-148,148,-157,157,-166,166];h("scroll").forEach((w,D)=>c.lectern(w,bt(10.3,oe[D%oe.length]),{seed:D,leather:D%4===1||D%4===2,hue:[8,22,30][D%3],labelY:2.25+D%3*.28}));{let w=new Qe;e.add(w);let D=s({color:16314592,roughness:.3,metalness:.05}),q=new le(new yt(1.55,1.55,.1,48),D);q.position.y=.9,w.add(q);let se=new le(new en(1.55,.035,6,64),x);se.rotation.x=Math.PI/2,se.position.y=.95,w.add(se);let Q=new le(new yt(.22,.5,.85,16),D);Q.position.y=.43,w.add(Q);let he=new le(new $t(.13,14,10),new Ze({color:r(16769184,3)}));he.position.y=1.2,w.add(he);let de=new le(new yt(.08,.14,.2,10),x);de.position.y=1.04,w.add(de),a.push({x:0,z:0,r:1.75}),h("table").forEach((Se,B)=>{let me=45+B*90+180,ae=c.doc(Se,bt(.95,me),{face:bt(5,me),seed:B,rot:(B-1.5)*.12,labelY:1.75+B%2*.3,stand:bt(2.45,me)});ae.near=1}),n("The Reading Table","Crew articles & reports",new I(0,2,0),{width:o?2.8:2.4,always:!0,big:!0}).table=!0}let xe=(()=>{let w=d("c2c");if(!w)return null;let D=bt(3.35,146),q=new Qe;q.position.copy(D),e.add(q);let se=9403135,Q=9430783,he=new le(new yt(.46,.56,.22,32),x);he.position.y=.11,q.add(he);let de=new le(new xs(.62,.8,64),new Ze({color:r(se,1.6),transparent:!0,opacity:.7,blending:at,depthWrite:!1,side:Pt}));de.rotation.x=-Math.PI/2,de.position.y=.012,q.add(de);let Se=s({color:15253600,metalness:.85,roughness:.25,emissive:8015888,emissiveIntensity:.6});for(let xt of[0,Math.PI]){let Cn=[];for(let On=0;On<=70;On++){let Pn=On/70,ti=xt+Pn*Math.PI*5,E=.36-Pn*.2;Cn.push(new I(Math.cos(ti)*E,.22+Pn*1.5,Math.sin(ti)*E))}q.add(new le(new Ri(new Vn(Cn),110,.03,6,!1),Se))}let B=new le(new yt(.05,.09,1.6,12),new Ze({color:r(16773320,1.8)}));B.position.y=1,q.add(B);let me=new le(new en(.24,.035,8,40),Se);me.rotation.x=Math.PI/2,me.position.y=1.78,q.add(me);let ae=2.38,fe=new Qe;fe.position.y=ae,q.add(fe);let ye=new le(new $t(.52,40,28),new Ze({color:1183290,transparent:!0,opacity:.95,depthWrite:!1}));fe.add(ye);let ce=new le(new $t(.1,24,16),new Ze({color:r(16773840,3.4)}));fe.add(ce);let Ce=new le(new $t(.19,32,20),new Ze({color:r(16747056,1.5),transparent:!0,opacity:.55,depthWrite:!1}));fe.add(Ce);let be=new le(new $t(.27,32,20),new Ze({color:r(4174079,1.3),transparent:!0,opacity:.28,depthWrite:!1}));fe.add(be);let tt=new le(new Wo(.38,1),new Ze({color:r(Q,2),wireframe:!0,transparent:!0,opacity:.6}));fe.add(tt);let rt=(()=>{let xt=o?90:160,Cn=new Float32Array(xt*3),On=3,Pn=()=>(On=On*16807%2147483647)/2147483647;for(let E=0;E<xt;E++){let k=Pn()*2-1,re=Pn()*Math.PI*2,j=.3+Pn()*.19,ee=Math.sqrt(1-k*k);Cn[E*3]=Math.cos(re)*ee*j,Cn[E*3+1]=k*j,Cn[E*3+2]=Math.sin(re)*ee*j}let ti=new lt;return ti.setAttribute("position",new pt(Cn,3)),new li(ti,new Hs({size:.03,color:r(16777215,1.6),map:Xt("rgba(255,255,255,1)","rgba(255,255,255,0)",32),transparent:!0,depthWrite:!1,blending:at}))})();fe.add(rt);let Gt=new Ze({color:r(16765040,2.4)}),Yt=new le(new en(.535,.016,6,90),Gt);Yt.rotation.x=Math.PI/2,fe.add(Yt);let Rn=new le(new en(.535,.012,6,90),Gt);fe.add(Rn);let is=o?360:720,Qn=new Float32Array(is*3),jn=new Float32Array(is*3),ei=7,ss=()=>(ei=ei*16807%2147483647)/2147483647,Ca=new Te(16758832),Oi=new Te(5913855),rs=new Te;for(let xt=0;xt<is;xt++){let Cn=xt%2,On=Math.pow(ss(),.8),Pn=.62+On*.78,ti=Cn*Math.PI+Math.log(Pn/.62)/.3+(ss()-.5)*.45;Qn[xt*3]=Math.cos(ti)*Pn+(ss()-.5)*.06,Qn[xt*3+1]=(ss()-.5)*.06*(1.2-On),Qn[xt*3+2]=Math.sin(ti)*Pn+(ss()-.5)*.06,rs.copy(Ca).lerp(Oi,On),jn[xt*3]=rs.r,jn[xt*3+1]=rs.g,jn[xt*3+2]=rs.b}let lr=new lt;lr.setAttribute("position",new pt(Qn,3)),lr.setAttribute("color",new pt(jn,3));let Pa=new li(lr,new Hs({size:.1,map:Xt("rgba(255,255,255,1)","rgba(255,255,255,0)",64),vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.02,sizeAttenuation:!0})),gi=new Qe;gi.rotation.set(.5,0,.2),gi.add(Pa),fe.add(gi);let cr=new Rt(new wt({map:Xt("rgba(255,236,190,.9)","rgba(255,210,140,0)"),blending:at,depthWrite:!1,opacity:.12}));cr.scale.setScalar(1.7),fe.add(cr);let os=new ci(13152511,3.2,5,1.6);os.position.y=ae,q.add(os);let Ia=n("\u2726 New in the Library","From the Cell to the Cosmos \xB7 Dawn & Queen",new I(D.x,4.05,D.z),{width:o?2.9:2.5,always:!0,big:!0}),xi=t(w,q,[1.2,3,1.2],3.32,{standDist:1.6});return xi.color=se,xi.obstacle=.62,xi.banner=Ia,xi.animate=xt=>{fe.scale.setScalar(1+xt*.3),fe.position.y=ae+xt*.25,cr.material.opacity=.12+xt*.5,gi.scale.setScalar(1+xt*.4)},xi.idle=xt=>{gi.rotation.y=xt*.3,tt.rotation.y=-xt*.22,tt.rotation.x=xt*.1,be.rotation.y=xt*.4,Rn.rotation.y=xt*.5;let Cn=1+Math.sin(xt*2.2)*.1;ce.scale.setScalar(Cn),Ce.scale.setScalar(1+Math.sin(xt*2.2+.6)*.05),os.intensity=3+Math.sin(xt*2.2)*.6,xi.anim===0&&(fe.position.y=ae+Math.sin(xt*1.1)*.05),de.material.opacity=.55+Math.sin(xt*1.4)*.15},xi})();{let w=h("video"),D=2.1,q=.5,se=12.35,Q=w.map(Se=>{let B=Se.aspect||(Se.id==="v1"?.92:.568),me=B>1.2?1.5:D;return{d:Se,H:me,W:Math.min(2.8,me*B)}}),de=-(Q.reduce((Se,B)=>Se+B.W+.24,0)+q*(Q.length-1))/2;for(let Se of Q){let B=de+(Se.W+.24)/2;de+=Se.W+.24+q,c.screen(Se.d,bt(se,Wt.radToDeg(B/se)),{H:Se.H,W:Se.W,y:2.55,labelY:2.55+Se.H/2+.75})}}let Ne={color:16767120,coverBg:"#5a3a08",coverInk:"#fff1c0",small:o,makeLabel:n},ve={paw:kc(),spiral:ba(w=>{$c(w,0,0,110,3,0),gt(w,0,0,118)}),fib:ba(w=>{w.font="600 44px Georgia,serif",w.textAlign="center",w.fillText("1 1 2 3 5 ?",0,14),gt(w,0,0,118)}),maxwell:ba(w=>{w.font="600 150px Georgia,serif",w.textAlign="center",w.fillText("\u2207",0,52),gt(w,0,0,118)}),vega:ba(w=>{Ps(w,0,0,100,8,3),gt(w,0,0,118)}),chimes:ba(w=>{for(let D=1;D<=4;D++)gt(w,0,0,D*28);w.font="600 34px Georgia,serif",w.textAlign="center",w.fillText("2 : 1",0,12)})},ze={paw:["HALO\u2019s paw print","Only the guardian can wake it"],spiral:["A golden spiral","Follow it to its eye"],fib:["The Fibonacci tablet","What comes next?"],maxwell:["Maxwell\u2019s columns","Visit all four"],vega:["A star in the dome","Look up"],chimes:["The Pythagorean bowls","Find the octave"]},Mt=[];for(let w of yv){let D=d(w.id);if(!D)continue;D.fact=w.fact,D.secretName=w.name;let q=c.secret(D,w.pos,{...Ne,glyphTex:ve[w.key],hintTitle:ze[w.key][0],hintSub:ze[w.key][1]});Object.assign(q,{key:w.key,name:w.name,fact:w.fact,hintText:w.hint,trigger:w.trigger,ready:()=>!0}),w.key==="spiral"&&q.glyph.scale.setScalar(.8),(w.key==="vega"||w.key==="maxwell")&&(q.hint.sprite.visible=!1),Mt.push(q)}let Oe=w=>Mt.find(D=>D.key===w),He=(w,D,q,se,Q={})=>{let he=new Qe;he.position.copy(q),e.add(he);let de=t({id:w,kind:"aux",title:D,by:"",blurb:"",url:""},he,se,q.y+.6,{aux:!0,standDist:1.8,...Q});return de.label.sprite.visible=!1,de.obstacle=0,{g:he,it:de}},je=bt(7.5,-142),Ve=new I(0,0,0);{let w=new Qe;w.position.copy(je),w.lookAt(Ve.x,0,Ve.z),e.add(w);let D=new le(new ut(1.7,1.05,.2),s({color:15260864,roughness:.7}));D.position.y=.52,w.add(D);let q=new le(new Ot(1.6,1),s({map:Sp([["1 \xB7 1 \xB7 2 \xB7 3 \xB7 5 \xB7 ?",84,200],["What comes next?",46,300],["Touch the right orb.",36,380]]),roughness:.7,emissive:3811856,emissiveIntensity:.2}));q.position.set(0,1.07,.02),q.rotation.x=-.35,q.position.z=.12,w.add(q),a.push({x:je.x,z:je.z,r:.75})}let et=[];[7,8,9].forEach((w,D)=>{let q=new I((1-D)*.72,1.95,.35).applyAxisAngle(new I(0,1,0),Math.atan2(Ve.x-je.x,Ve.z-je.z)),{g:se,it:Q}=He("fib-"+w,"the number "+w,je.clone().add(q),[.6,.6,.6],{hitY:-.3,near:3.2}),he=new Rt(new wt({map:bp(String(w)),transparent:!0,depthWrite:!1}));he.scale.setScalar(.52),se.add(he),Q.stand=bt(5.6,-142+(D-1)*6),Q.onTap=()=>{let de=Oe("fib");!de||de.revealed||(w===8?(l.tone(432,1.6),l.reveal(de),et.forEach(Se=>{Se.it.locked=!0})):(l.tone(w===7?190:250,.8,.06),l.say(w===7?"Close! Each number is the sum of the two before it: 3 + 5 = \u2026?":"Not quite. Add the last two: 3 + 5.")),he.scale.setScalar(.7),setTimeout(()=>he.scale.setScalar(.52),250))},et.push({g:se,it:Q,m:he,n:w})});let qe=bt(7.5,142),Nt=[];{let w=new Qe;w.position.copy(qe),w.lookAt(0,0,0),e.add(w);let D=new le(new ut(2.2,.8,.6),c.woodM);D.position.y=.4,w.add(D);let q=new le(new Ot(1.8,.9),s({map:Sp([["Which string length",60,150],["sings one octave above",60,240],["the whole string (1)?",60,330]]),roughness:.7}));q.position.set(0,1.55,-.2),w.add(q);let se=new le(new ut(.1,1.2,.1),c.woodM);se.position.set(0,1,-.26),w.add(se),a.push({x:qe.x,z:qe.z,r:.9})}let ht=new $t(.2,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2);[["3/4",.75,"a fourth"],["2/3",2/3,"a fifth"],["1/2",.5,"the octave"]].forEach(([w,D,q],se)=>{let Q=new I((1-se)*.7,.95,.12).applyAxisAngle(new I(0,1,0),Math.atan2(-qe.x,-qe.z)),{g:he,it:de}=He("bowl-"+se,"the "+w+" bowl",qe.clone().add(Q),[.6,.7,.6],{hitY:-.2,near:3.2}),Se=new le(ht,s({color:15251536,metalness:.85,roughness:.25,emissive:8015888,emissiveIntensity:.4,side:Pt}));Se.position.y=.12,he.add(Se);let B=new Rt(new wt({map:bp(w),transparent:!0,depthWrite:!1}));B.position.y=.55,B.scale.setScalar(.42),he.add(B),de.stand=bt(5.6,142-(se-1)*6),de.onTap=()=>{l.tone(216/D,2.2,.12),Se.material.emissiveIntensity=1.6,setTimeout(()=>Se.material.emissiveIntensity=.4,500);let me=Oe("chimes");!me||me.revealed||(w==="1/2"?l.reveal(me):l.say(`That one sings ${q} (${w==="3/4"?"4 : 3":"3 : 2"}). Lovely, but the octave is the ratio 2 : 1.`))},Nt.push({g:he,it:de,bowl:Se})});let Lt=new I(Math.sin(tr(-20))*Math.sin(tr(40)),Math.cos(tr(40)),-Math.cos(tr(-20))*Math.sin(tr(40))).normalize(),V=new I(0,fi,0).addScaledVector(Lt,Yn*.95),Et=He("vega-star","the brightest star",V,[2,2,2],{hitY:-1,near:99,noPrompt:!0}),Ge=new Rt(new wt({map:Xt("rgba(235,245,255,1)","rgba(160,200,255,0)"),color:r(10275071,2.4),blending:at,depthWrite:!1,fog:!1}));Ge.scale.setScalar(2.2),Et.g.add(Ge);let L=(()=>{let[w,D]=mt(256,256);D.strokeStyle="rgba(200,225,255,.8)",D.fillStyle="#eaf4ff",D.lineWidth=2;let q=[[128,60],[150,110],[118,118],[134,190],[168,180]];return D.beginPath(),D.moveTo(...q[0]),D.lineTo(...q[1]),D.lineTo(...q[2]),D.lineTo(...q[0]),D.moveTo(...q[1]),D.lineTo(...q[4]),D.lineTo(...q[3]),D.lineTo(...q[2]),D.stroke(),q.slice(1).forEach(([se,Q])=>{D.beginPath(),D.arc(se,Q,4,0,7),D.fill()}),vt(w)})(),_=new Rt(new wt({map:L,transparent:!0,depthWrite:!1,blending:at,fog:!1}));_.scale.setScalar(3.2),_.position.set(0,-1,0),Et.g.add(_),Et.it.onTap=()=>{let w=Oe("vega");!w||w.revealed||(l.tone(648,2.5,.1),l.reveal(w),Et.it.locked=!0)},Oe("fib")&&(Oe("fib").onRestore=()=>et.forEach(w=>{w.it.locked=!0})),Oe("vega")&&(Oe("vega").onRestore=()=>{Et.it.locked=!0}),Oe("maxwell")&&(Oe("maxwell").onRestore=()=>ne.forEach(w=>{w.visited=!0,w.pm.emissiveIntensity=1.4}));let J=new URL(location.href);J.searchParams.set("room","asherah"),J.searchParams.set("via","portal");let F=c.portal({id:"portal-asherah",kind:"portal",title:"Asherah\u2019s Library",by:"The Mother \xB7 Memory kept",blurb:"",url:J.toString()},bt(11.7,180),{color:13168800,makeLabel:n,href:J.toString()});F.stand=bt(10.2,180);let C=0,H=new I;function K(w,D,q){P.uniforms.uTime.value=w,$.rotation.y=w*.25,g.intensity=11+Math.sin(w*1.1)*1.2,R.rotation.z=w*.02;for(let Q of te)Q.a+=D*Q.sp,Q.s.position.set(Math.cos(Q.a)*Q.r,Q.y+Math.sin(w*.5+Q.a*3)*.25,Math.sin(Q.a)*Q.r),Q.s.material.opacity=.62+Math.sin(w*.8+Q.a*5)*.2;for(let Q of Me){let he=(Q.y0+w*Q.sp)%9,de=Q.a+w*.15;Q.s.position.set(Math.cos(de)*Q.r,1.2+he,Math.sin(de)*Q.r),Q.s.material.opacity=Math.min(1,he/1.5)*(1-Wt.smoothstep(he,6.5,9))}for(let Q of et)Q.g.position.y=1.95+Math.sin(w*1.6+Q.n)*.06;Ge.scale.setScalar(2.1+Math.sin(w*2.3)*.25);let se=Oe("maxwell");if(se&&!se.revealed&&q){H.copy(q.lion.root.position);for(let Q of ne)Q.visited||Math.hypot(H.x-Q.pos.x,H.z-Q.pos.z)<2.6&&(Q.visited=!0,C++,Q.pm.emissiveIntensity=1.4,l.tone(324+C*54,1.4,.08),C<4?l.toast(`${Q.name}: column ${C} of 4 \u2713`,2600):l.reveal(se))}}let G={lines:["Rrrrr\u2026 that was my friendly roar.","I keep the door. You keep reading.","Six secrets hide in this room. Tap the \u2726 Secrets pill if you want a hint.","The glowing books hum when you come close.","Every title here is real. Go on, touch one.","Something new glows by the reading table: the Captain and Queen, from the cell to the cosmos.","The glowing arch by the door leads to Asherah\u2019s Library.","Look up now and then. The dome has stars."],third:"Psst. Six secrets are hidden in this room. Tap the \u2726 Secrets pill if you want a hint.",reveal:"A secret, found!"};return{tick:K,hidden:Oe("paw"),secrets:Mt,say:G,maxR:11.3,camR:12.3,lionStart:new I(0,0,4.6),exposure:.74,bloomStrength:.42,bloomThreshold:.96,portals:[F],maxwell:()=>C}}var sn=null,Di=null,Is=!1,Wu=null,pi=432/4;function Av(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;sn=new i,Di=sn.createGain(),Di.gain.value=0,Di.connect(sn.destination);let e=sn.createBiquadFilter();e.type="lowpass",e.frequency.value=900,e.Q.value=.4,e.connect(Di);let t=sn.createGain();return t.gain.value=.32,t.connect(e),[[pi,"sine",0],[pi*1.5,"triangle",3],[pi*2,"sine",-4],[pi*3,"sine",2],[pi*2.5,"sine",-2]].forEach(([n,s,r],o)=>{let a=sn.createOscillator();a.type=s,a.frequency.value=n,a.detune.value=r;let l=sn.createGain();l.gain.value=o<3?.22:.07;let c=sn.createOscillator();c.frequency.value=.05+o*.023;let u=sn.createGain();u.gain.value=l.gain.value*.6,c.connect(u),u.connect(l.gain),a.connect(l),l.connect(t),a.start(),c.start()}),!0}function Ap(){if(clearTimeout(Wu),!Is)return;let i=[pi*4,pi*4.5,pi*5,pi*6,pi*6.75,pi*8];Jc(i[Math.random()*i.length|0],3.2,.05),Wu=setTimeout(Ap,3500+Math.random()*6e3)}function Jc(i,e=1.8,t=.12){if(!Is||!sn)return;let n=sn.currentTime,s=sn.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(t,n+.02),s.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(Di);for(let[r,o]of[[1,1],[2.01,.25],[3.02,.08]]){let a=sn.createOscillator();a.type="sine",a.frequency.value=i*r;let l=sn.createGain();l.gain.value=o,a.connect(l),l.connect(s),a.start(n),a.stop(n+e+.05)}}function Rp(i,e=.16,t=.1){i.forEach((n,s)=>setTimeout(()=>Jc(n,2.2,t),s*e*1e3))}function Cp(i){if(i&&!sn&&!Av())return!1;if(Is=!!i,!sn)return Is;let e=sn.currentTime;return Di.gain.cancelScheduledValues(e),Di.gain.setValueAtTime(Di.gain.value,e),Is?(sn.resume(),Di.gain.linearRampToValueAtTime(.5,e+1.2),Ap()):(Di.gain.linearRampToValueAtTime(0,e+.5),clearTimeout(Wu),setTimeout(()=>{Is||sn.suspend()},700)),Is}var Xu=()=>Is;function Pp(i,e,{cell:t=.3,pad:n=.5}={}){let s=Math.ceil(i*2/t)+1,r=i,o=null,a=(m,p)=>p*s+m,l=m=>m*t-r,c=m=>Math.round((m+r)/t);function u(m,p){if(Math.hypot(m,p)>i-.05)return!0;for(let S of e)if(S.r&&Math.hypot(m-S.x,p-S.z)<S.r+n)return!0;return!1}function d(){o=new Uint8Array(s*s);for(let m=0;m<s;m++)for(let p=0;p<s;p++)o[a(p,m)]=u(l(p),l(m))?1:0}let h=(m,p)=>m>=0&&p>=0&&m<s&&p<s&&!o[a(m,p)];function f(m,p){if(h(m,p))return[m,p];for(let S=1;S<12;S++)for(let A=-S;A<=S;A++)for(let M=-S;M<=S;M++)if(Math.max(Math.abs(M),Math.abs(A))===S&&h(m+M,p+A))return[m+M,p+A];return null}function g(m,p,S,A){let M=Math.hypot(S-m,A-p),b=Math.ceil(M/(t*.5));for(let v=1;v<b;v++){let R=v/b;if(!h(c(m+(S-m)*R),c(p+(A-p)*R)))return!1}return!0}function y(m,p,S,A){o||d();let M=f(c(m),c(p)),b=f(c(S),c(A));if(!M||!b)return null;if(g(m,p,S,A))return[{x:S,z:A}];let v=a(M[0],M[1]),R=a(b[0],b[1]),x=new Float32Array(s*s).fill(1e9),T=new Int32Array(s*s).fill(-1),P=new Uint8Array(s*s),U=[v];x[v]=0;let O=$=>{let te=$%s,pe=$/s|0,ue=Math.abs(te-b[0]),Me=Math.abs(pe-b[1]);return Math.max(ue,Me)+.414*Math.min(ue,Me)},X=new Float32Array(s*s).fill(1e9);X[v]=O(v);let N=0;for(;U.length&&N++<2e4;){let $=0;for(let Me=1;Me<U.length;Me++)X[U[Me]]<X[U[$]]&&($=Me);let te=U[$];if(U[$]=U[U.length-1],U.pop(),te===R)break;P[te]=1;let pe=te%s,ue=te/s|0;for(let Me=-1;Me<=1;Me++)for(let Ee=-1;Ee<=1;Ee++){if(!Ee&&!Me)continue;let Ue=pe+Ee,ie=ue+Me;if(!h(Ue,ie)||Ee&&Me&&(!h(pe+Ee,ue)||!h(pe,ue+Me)))continue;let oe=a(Ue,ie);if(P[oe])continue;let xe=x[te]+(Ee&&Me?1.414:1);xe<x[oe]&&(x[oe]>=1e9&&U.push(oe),x[oe]=xe,X[oe]=xe+O(oe),T[oe]=te)}}if(T[R]<0)return null;let W=[];for(let $=R;$!==-1&&$!==v;$=T[$])W.push({x:l($%s),z:l($/s|0)});W.reverse(),W[W.length-1]={x:S,z:A};let Z=[],z=m,ne=p,Y=0;for(;Y<W.length;){let $=Y;for(let te=W.length-1;te>Y;te--)if(g(z,ne,W[te].x,W[te].z)){$=te;break}Z.push(W[$]),z=W[$].x,ne=W[$].z,Y=$+1}return Z}return{find:y,rebuild:d,blockedAt:u}}var ns=new URLSearchParams(location.search).get("room")==="asherah"?"asherah":"library";document.body.dataset.room=ns;var Vb=(ns==="asherah"?window.ARK_ASHERAH:window.ARK_LIBRARY)||[],$u=window.ARK_KIND||{},Be=i=>document.getElementById(i),rr=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,or=Math.min(innerWidth,innerHeight)<600,Rv=/[?&]hq=1/.test(location.search),ed=/[?&]lite=1/.test(location.search);rr&&document.body.classList.add("touch");var nr=Be("scene"),rn;try{rn=new Lc({canvas:nr,antialias:!1,powerPreference:"high-performance"})}catch(i){throw window.arkFallback&&window.arkFallback("webgl-context"),i}nr.addEventListener("webglcontextlost",i=>{i.preventDefault(),window.arkFallback&&window.arkFallback("context-lost")});var Ds=ed?1:Math.min(devicePixelRatio||1,or?1.5:1.75);rn.setPixelRatio(Ds);rn.setSize(innerWidth,innerHeight);rn.toneMapping=qs;rn.toneMappingExposure=.9;rn.outputColorSpace=kt;var Bi=new Do;Bi.background=new Te(2759184);Bi.fog=new Zi(3810838,.028);var ln=new cn(or?62:55,innerWidth/innerHeight,.1,80),ir=new Bc(rn);ir.addPass(new Oc(Bi,ln));var sh=new ro(new ge(innerWidth/2,innerHeight/2),.75,.5,.9);ir.addPass(sh);ir.addPass(new Hc);var Ip=!ed,lh=i=>{let e=Be("loadbar");e&&(e.style.width=Math.round(i*100)+"%")};lh(.15);var Cv=i=>new dt(i),Pv=(i,e)=>new Te(i).multiplyScalar(e),ch=[],qu=or?420:900,Iv=(()=>{let i=new lt,e=new Float32Array(qu*3),t=new Float32Array(qu);for(let r=0;r<qu;r++){let o=Math.sqrt(Math.random())*11.5,a=Math.random()*Math.PI*2;e[r*3]=Math.cos(a)*o,e[r*3+1]=Math.random()*7,e[r*3+2]=Math.sin(a)*o,t[r]=Math.random()}i.setAttribute("position",new pt(e,3)),i.setAttribute("aRnd",new pt(t,1));let n=new Ct({transparent:!0,depthWrite:!1,blending:at,uniforms:{uTime:{value:0},uPR:{value:Ds}},vertexShader:`uniform float uTime; uniform float uPR; attribute float aRnd; varying float vA;
      void main(){ vec3 p = position; float t = uTime*0.12 + aRnd*40.0;
        p.x += sin(t*1.3)*0.5; p.z += cos(t*1.1)*0.5; p.y = mod(p.y + uTime*0.05*(0.3+aRnd), 7.0) + 0.1;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        vA = (0.4 + 0.6*sin(uTime*1.5 + aRnd*30.0)) * smoothstep(7.0, 5.0, p.y);
        gl_PointSize = (2.0 + aRnd*3.5) * uPR * (8.0 / -mv.z); }`,fragmentShader:`varying float vA; void main(){ float d = length(gl_PointCoord-0.5); float a = smoothstep(0.5,0.0,d);
        gl_FragColor = vec4(vec3(1.0,0.82,0.5)*1.4, a*vA*0.8); }`}),s=new li(i,n);return Bi.add(s),n})(),ao=160,ar=(()=>{let i=new lt,e=new Float32Array(ao*3),t=new Float32Array(ao*3),n=new Float32Array(ao);i.setAttribute("position",new pt(e,3)),i.setAttribute("color",new pt(t,3)),i.setAttribute("aLife",new pt(n,1));let s=new Ct({transparent:!0,depthWrite:!1,blending:at,uniforms:{uPR:{value:Ds}},vertexShader:`uniform float uPR; attribute float aLife; attribute vec3 color; varying vec3 vC; varying float vL;
      void main(){ vC = color; vL = aLife; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = 6.0*uPR*aLife*(8.0 / -mv.z); }`,fragmentShader:"varying vec3 vC; varying float vL; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(vC*2.2, smoothstep(0.5,0.0,d)*vL); }"}),r=new li(i,s);r.frustumCulled=!1,Bi.add(r);let o=new Float32Array(ao*3),a=0;return{emit(l,c,u,d=2,h=1.5){let f=new Te(u);for(let g=0;g<c;g++){let y=a++%ao;e[y*3]=l.x,e[y*3+1]=l.y,e[y*3+2]=l.z,o[y*3]=(Math.random()-.5)*d,o[y*3+1]=Math.random()*h+.2,o[y*3+2]=(Math.random()-.5)*d,t[y*3]=f.r,t[y*3+1]=f.g,t[y*3+2]=f.b,n[y]=1}},update(l){for(let c=0;c<ao;c++)n[c]<=0||(n[c]=Math.max(0,n[c]-l*.9),e[c*3]+=o[c*3]*l,e[c*3+1]+=o[c*3+1]*l,e[c*3+2]+=o[c*3+2]*l,o[c*3+1]-=l*.8,o[c*3]*=.98,o[c*3+2]*=.98);i.attributes.position.needsUpdate=!0,i.attributes.aLife.needsUpdate=!0,i.attributes.color.needsUpdate=!0}}})(),zp=[];function Gp(i,e,t,{width:n=1.7,always:s=!1,big:r=!1}={}){let o=Uu(i,e,!1),a=new Gn(o);a.colorSpace=kt,a.anisotropy=Math.min(8,rn.capabilities.getMaxAnisotropy());let l=new wt({map:a,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1});l.color.setScalar(1);let c=new Rt(l);c.position.copy(t),c.scale.set(n,n*o.height/o.width,1),c.renderOrder=10,Bi.add(c);let u={sprite:c,title:i,kind:e,width:n,always:s,big:r,canvas:o,tex:a,aspect:o.height/o.width};return zp.push(u),u}function kp(i){let e=Uu(i.title,i.kind,!0);i.tex.dispose();let t=new Gn(e);t.colorSpace=kt,t.anisotropy=i.sprite.material.map.anisotropy,i.sprite.material.map=t,i.tex=t,i.aspect=e.height/e.width,i.sprite.scale.set(i.width,i.width*i.aspect,1)}lh(.5);var Ui=[],Vp=new Ze({visible:!1});function Lv(i,e,t,n,s={}){let r=new le(new ut(t[0],t[1],t[2]),Vp);r.position.y=t[1]/2+(s.hitY||0),e.add(r);let o=e.position.clone(),a=new I(-o.x,0,-o.z).normalize(),l=o.clone().addScaledVector(a,s.standDist||1.7);l.y=0;let c=o.clone();c.y=n;let u=Gp(i.title,i.labelKind||($u[i.kind]?$u[i.kind].split(" \xB7 ")[0]:""),c,{width:or?2.1:1.9}),d={data:i,group:e,hit:r,label:u,stand:l,found:!1,anim:0,animDir:0,...s};return r.userData.item=d,Ui.push(d),d}var Wp={},Lp={scene:Bi,register:Lv,makeLabel:Gp,std:Cv,glowColor:Pv,small:or,obstacles:ch,pixelRatio:Ds,api:Wp},pn=ns==="asherah"?xp(Lp):wp(Lp),co=pn.hidden,An=pn.secrets||(co?[co]:[]);pn.exposure&&(rn.toneMappingExposure=pn.exposure);pn.bloomStrength!==void 0&&(sh.strength=pn.bloomStrength,sh.threshold=pn.bloomThreshold);var Ra=Ui.filter(i=>!i.isPortal&&!i.aux);for(let i of Ui)ch.push({x:i.group.position.x,z:i.group.position.z,r:i.obstacle!==void 0?i.obstacle:i.data.kind==="table"||i.data.kind==="video"?0:.55,item:i});Be("total").textContent=String(Ra.length);Be("stotal").textContent=String(An.length);var Dv=Pp(pn.maxR||11.3,ch);lh(.75);var st=pp(Object.assign({},ns==="asherah"?fp:Hu,{quality:ed?0:or||rr?1:2})),td=st.scale||1;st.root.position.copy(pn.lionStart||new I(0,0,6.2));st.root.rotation.y=Math.PI;Bi.add(st.root);var es=Math.PI,fn=Math.PI,lo=.24,Ju=(or?7:6.2)*(1+(td-1)*.5),$n=0,Ni=new I,Fi=Object.assign({name:"HALO",welcome:"Welcome, reader. I'm HALO. Touch anything that glows.",lines:["Rrrrr\u2026 that was my friendly roar.","I keep the door. You keep reading.","The clay jars lift their lids for you.","The glowing books hum when you come close.","Every title here is real. Go on, touch one.","The glowing arch by the door leads to Asherah\u2019s Library."],first:"One found! The shelves are waking up.",third:"Psst. I left a paw print somewhere. Only I can wake it.",reveal:"My gift to you: a hidden title!",all:"Every shelf, found. The Library remembers you.",idle:"Pick one. The jars are older than they look.",walk:"HALO is walking you to",hint:"HALO"},pn.say||{});if(ns==="asherah"){document.title="The Ark Library";let i=document.querySelector(".intro-card");i.querySelector(".eyebrow").textContent="THE ARK INITIATIVE \xB7 THE MOTHER \xB7 MEMORY KEPT",i.querySelector("h1").textContent="Asherah\u2019s Library";let e=document.getElementById("newpiece");e&&e.remove(),i.querySelector("p").innerHTML="Walk in as the <b>White Lion</b>, with the bee beside you. Everything that glows opens a real piece from Asherah\u2019s living archive.";let t="/pillar-05-asherah.html";Be("plain").href=t,Be("plain").textContent="Asherah\u2019s page",Be("r-back").textContent="Back to the shelves";let n=i.querySelector(".small a");n&&(n.href=t,n.textContent="Read Asherah\u2019s archive as a plain page")}var Bn=!1,Kn=!1,sr=null,dn=null,mi=performance.now(),wn=0,Xp=0,rh=!1,Dp=0,Zn=new Set,ts={x:0,y:0,active:!1};function ho(i,e=2200){let t=Be("toast");t.textContent=i,t.hidden=!1,clearTimeout(ho._t),ho._t=setTimeout(()=>t.hidden=!0,e)}var jc=0;function Jn(i,e=3800){let t=Be("speech");t.textContent=i,t.hidden=!1,jc=e/1e3}function qp(){let i=Be("hint");i.innerHTML=rr?"Drag the <b>walk</b> circle to move "+Fi.hint+" \xB7 <b>Tap</b> anything glowing to open it":"<b>WASD</b> or <b>arrow keys</b> to walk \xB7 <b>Click</b> anything glowing to open it \xB7 drag to look around",i.hidden=!1}var Yp=()=>{Be("hint").hidden=!0};addEventListener("keydown",i=>{if(Kn){i.key==="Escape"&&hh();return}let e=i.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"].includes(e)&&(Zn.add(e),dn=null,mi=performance.now(),e.startsWith("arrow")&&i.preventDefault()),(e==="e"||e==="enter"||e===" ")&&Bn){let t=id();t&&Aa(t),i.preventDefault()}});addEventListener("keyup",i=>Zn.delete(i.key.toLowerCase()));addEventListener("blur",()=>Zn.clear());var uo=Be("joy"),Zp=Be("knob"),oh=null;uo.addEventListener("pointerdown",i=>{oh=i.pointerId,uo.setPointerCapture(i.pointerId),ts.active=!0,dn=null,Jp(i),i.preventDefault()});uo.addEventListener("pointermove",i=>{i.pointerId===oh&&Jp(i)});var $p=i=>{i.pointerId===oh&&(oh=null,ts.active=!1,ts.x=ts.y=0,Zp.style.transform="")};uo.addEventListener("pointerup",$p);uo.addEventListener("pointercancel",$p);function Jp(i){let e=uo.getBoundingClientRect(),t=i.clientX-(e.left+e.width/2),n=i.clientY-(e.top+e.height/2),s=e.width/2-10,r=Math.hypot(t,n);r>s&&(t*=s/r,n*=s/r),Zp.style.transform=`translate(${t}px,${n}px)`,ts.x=t/s,ts.y=-n/s,mi=performance.now()}var Np=new Jo,Up=new ge,wa=new le(new ut(1,1.6,1.8),Vp);wa.position.y=.8;st.root.add(wa);var Tn=null;nr.addEventListener("pointerdown",i=>{!Bn||Kn||(Tn={id:i.pointerId,x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,t:performance.now(),moved:0},nr.setPointerCapture(i.pointerId))});nr.addEventListener("pointermove",i=>{if(!(!Bn||Kn)){if(Tn&&i.pointerId===Tn.id){let e=i.clientX-Tn.x,t=i.clientY-Tn.y;if(Tn.x=i.clientX,Tn.y=i.clientY,Tn.moved+=Math.abs(e)+Math.abs(t),Tn.moved>8){fn-=e*.006;let n=t*.003;n<0&&lo<=.081?$n=Wt.clamp($n-n*1.6,0,1):n>0&&$n>0?$n=Wt.clamp($n-n*1.6,0,1):lo=Wt.clamp(lo+n,.08,.75),mi=performance.now()}}else if(!rr){let e=nd(i.clientX,i.clientY);nr.style.cursor=e?"pointer":"grab"}}});nr.addEventListener("pointerup",i=>{if(!Tn||i.pointerId!==Tn.id)return;let e=Tn.moved<12&&performance.now()-Tn.t<800;if(Tn=null,!e)return;let t=nd(i.clientX,i.clientY);if(t==="lion"){zv();return}t&&Nv(t)});function nd(i,e){Up.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Np.setFromCamera(Up,ln);let t=Ui.filter(l=>!l.locked).map(l=>l.hit);t.push(wa);let n=Np.intersectObjects(t,!1);if(!n.length)return null;let s=null,r=1e9,o=new I,a=n[0].object===wa;for(let l of n){if(l.object===wa)continue;l.object.getWorldPosition(o),o.project(ln);let c=Math.hypot((o.x+1)/2*innerWidth-i,(1-o.y)/2*innerHeight-e);c<r&&(r=c,s=l.object.userData.item)}return a&&(!s||r>(rr?60:40))?"lion":s}Be("prompt").addEventListener("click",()=>{let i=id();i&&Aa(i)});function fo(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function ah(i){return i.near||2.2}function id(){let i=null,e=1e9,t=st.root.position;for(let n of Ui){if(n.locked||n.aux||n.noPrompt)continue;let s=fo(t,n.stand);s<ah(n)&&s<e&&(e=s,i=n)}return i}function Nv(i){if(fo(st.root.position,i.stand)<ah(i)+.4){Aa(i);return}jp(i),ho(Fi.walk+" \u201C"+sd(i.data.title)+"\u201D")}var sd=i=>i.length>44?i.slice(0,42).replace(/\s+\S*$/,"")+"\u2026":i,Kp="ark3d-found-"+ns;function Qp(){try{localStorage.setItem(Kp,JSON.stringify(Ra.filter(i=>i.found).map(i=>i.data.id)))}catch{}}function Uv(i){dn=null,sr=i,i.animDir=1,Qp(),ar.emit(i.group.position.clone().setY(1.8),80,i.color||16769184,3,3),document.body.classList.add("leaving"),ho("Stepping through to "+i.data.title+"\u2026",1500),setTimeout(()=>{location.href=i.portal},900)}function Aa(i){if(sr||Kn)return;if(i.aux){dn=null,i.onTap&&i.onTap(),mi=performance.now();return}if(i.isPortal){Uv(i);return}dn=null,sr=i,i.animDir=1;let e=new I().subVectors(i.group.position,st.root.position);es=Math.atan2(e.x,e.z);let t=i.group.position.clone();t.y=1.6,ar.emit(t,40,i.color||16765056,2.2,2.2),Yp(),setTimeout(()=>Fv(i),950)}function Fv(i){sr=null,Kn=!0;let e=i.data,t=Be("r-media");t.innerHTML="";let n=$u[e.kind]||"",s=()=>lp(e,n);if(((d,h)=>{let f=document.createElement("div");f.className=h?"playwrap":"";let g;if(d?(g=new Image,g.alt=e.title,g.src=d,g.onerror=()=>{g.replaceWith(s())}):g=s(),f.appendChild(g),h){let y=document.createElement("button");y.className="play",y.setAttribute("aria-label","Play film: "+e.title),y.textContent="\u25B6",f.appendChild(y),f.addEventListener("click",()=>{let m=document.createElement("video");m.controls=!0,m.playsInline=!0,m.setAttribute("playsinline",""),m.preload="auto",d&&(m.poster=d),m.src=e.video,f.replaceWith(m),m.play().catch(()=>{})},{once:!0})}t.appendChild(f)})(e.image||e.poster||null,!!e.video),Be("r-kind").textContent=n.toUpperCase(),Be("r-title").textContent=e.title,Be("r-by").textContent=e.by,Be("r-blurb").textContent=e.blurb,e.credit){let d=document.createElement("div");d.className="r-credit",d.textContent=e.credit,t.appendChild(d)}let o=Be("r-evidence");o&&(o.textContent=e.evidence?"Evidence: "+e.evidence:"",o.hidden=!e.evidence);let a=Be("r-fact");if(a.innerHTML="",a.hidden=!e.fact,e.fact){let d=An.find(g=>g.it===i),h=document.createElement("span");h.className="lbl",h.textContent="\u2726 SECRET"+(d&&d.order?" "+d.order+" OF "+An.length:"")+" \xB7 "+(e.secretName||"").toUpperCase(),a.appendChild(h);let f=document.createElement("p");f.textContent=e.fact,a.appendChild(f)}let l=Be("r-full");l.innerHTML="",l.hidden=!0;let c=Be("r-excerpt");if(c.innerHTML="",c.hidden=!1,e.excerpt&&e.excerpt.length){let d=document.createElement("span");d.className="lbl",d.textContent="OPENING LINES",c.appendChild(d),e.excerpt.forEach(h=>{let f=document.createElement("p");f.textContent=h,c.appendChild(f)})}let u=Be("r-open");if(u.href=e.url,u.textContent=e.kind==="video"?"See it on the Library page \u2197":e.kind==="film"?"See it on the site \u2197":e.full?"Open on the live site \u2197":"Read the full piece \u2197",Be("reader").hidden=!1,Be("prompt").hidden=!0,Be("r-card").scrollTop=0,e.full&&Bv(e,l,c,t),Be("r-close").focus({preventScroll:!0}),!i.found){i.found=!0,wn++,Be("found").textContent=String(wn),kp(i.label);let d=Be("counter");d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump"),st.hop=.001,Ov(),Qp(),rh?wn===Ra.length?setTimeout(()=>Jn(Fi.all,5e3),600):wn===3&&co&&!co.revealed&&setTimeout(()=>Jn(Fi.third,5e3),600):(rh=!0,setTimeout(()=>Jn(Fi.first),600))}window.__arkLastOpened=e.id}var Yu={};function Bv(i,e,t,n){let s=r=>{if(!r||!Kn||window.__arkLastOpened!==i.id)return;let o=document.createElement("div");o.className="lbl",o.textContent="FULL TEXT \xB7 "+(r.words?r.words.toLocaleString()+" WORDS \xB7 ":"")+(r.label||"SAVED FROM THE LIVE SITE"),e.appendChild(o);let a=null,l=!1,c=d=>(d||"").toLowerCase().replace(/[^a-z0-9]+/g,"");for(let d of r.blocks){if(!l&&(d.t==="h"||d.t==="p")&&c(d.x)===c(i.title)){l=!0;continue}d.t!=="li"&&(a=null);let h;if(d.t==="img"){let f=!i.image&&!i.poster&&!n.dataset.art;h=document.createElement("figure");let g=new Image;if(g.loading="lazy",g.alt=d.alt||"",g.src=d.src,g.onerror=()=>h.remove(),h.appendChild(g),f){n.dataset.art="1";let y=new Image;y.alt=i.title,y.src=d.src,y.onload=()=>{n.innerHTML="",n.appendChild(y)};continue}}else if(d.t==="pre")h=document.createElement("pre"),h.className="r-pre",h.textContent=d.x;else if(d.t==="li"){a||(a=document.createElement("ul"),e.appendChild(a)),h=document.createElement("li"),h.textContent=d.x,a.appendChild(h);continue}else if(d.t==="p"&&d.x.length>900){let f=d.x.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g)||[d.x],g="";for(let y of f)if(g+=y,g.length>380){let m=document.createElement("p");m.textContent=g.trim(),e.appendChild(m),g=""}if(g.trim()){let y=document.createElement("p");y.textContent=g.trim(),e.appendChild(y)}continue}else h=document.createElement({h:"h3",h3:"h4",q:"blockquote",cap:"figcaption"}[d.t]||"p"),h.textContent=d.x;e.appendChild(h)}let u=document.createElement("a");u.className="r-end",u.href=i.url,u.target="_blank",u.rel="noopener",u.textContent="Read it on the live site \u2197",e.appendChild(u),e.hidden=!1,t.hidden=!0,window.__arkFullShown=i.id};if(Yu[i.id]){s(Yu[i.id]);return}fetch("text/"+i.id+".json").then(r=>r.ok?r.json():null).then(r=>{r&&(Yu[i.id]=r),s(r)}).catch(()=>{})}function hh(){if(!Kn)return;let i=Be("r-media");i.querySelectorAll("video").forEach(e=>{e.pause(),e.removeAttribute("src"),e.load()}),i.innerHTML="",delete i.dataset.art,Be("reader").hidden=!0,Kn=!1;for(let e of Ui)e.animDir>0&&(e.animDir=-1)}Be("r-close").addEventListener("click",hh);Be("r-back").addEventListener("click",hh);Be("reader").addEventListener("click",i=>{i.target.id==="reader"&&hh()});var Ta=0;function Ov(){Ta=.9,ar.emit(st.root.position.clone().setY(1.6),50,16765040,2.5,2.5)}var Fp=Fi.lines,Hv=0;function zv(){st.roar=1.2,ar.emit(st.root.position.clone().setY(1.7),40,16756800,2.4,2),Jn(Fp[Hv++%Fp.length])}var eh=new I;function Gv(i){let e=Math.hypot(i.x,i.z),t=pn.maxR||11.3;e>t&&(i.x*=t/e,i.z*=t/e);for(let n of ch){if(!n.r)continue;let s=i.x-n.x,r=i.z-n.z,o=Math.hypot(s,r),a=n.r+.45;o<a&&o>1e-4&&(i.x=n.x+s/o*a,i.z=n.z+r/o*a)}}var Ls=0,Bp=0,Fn=null,Ku=!1,kv=0;function jp(i){dn=i,Fn=null,Ku=!1,Ls=0,kv++}function Vv(i){let e=0,t=0;(Zn.has("w")||Zn.has("arrowup"))&&(t+=1),(Zn.has("s")||Zn.has("arrowdown"))&&(t-=1),(Zn.has("a")||Zn.has("arrowleft"))&&(e-=1),(Zn.has("d")||Zn.has("arrowright"))&&(e+=1),ts.active&&(e+=ts.x,t+=ts.y);let n=Zn.has("shift")?1.7:1,s=0,r=0,o=new I(Math.sin(fn),0,Math.cos(fn)),a=new I(-Math.cos(fn),0,Math.sin(fn));(Kn||sr)&&(e=t=0);let l=Math.min(1,Math.hypot(e,t));if(l>.08)eh.set(0,0,0).addScaledVector(o,t).addScaledVector(a,e).normalize(),s=eh.x*3.1*l*n,r=eh.z*3.1*l*n,dn=null;else if(dn&&!Kn&&!sr){let u=dn.stand,d=st.root.position,h=fo(d,u);if(dn.point?h<.4:h<.35||h<ah(dn)*.5){let g=dn;dn=null,Fn=null,g.point||Aa(g)}else{for(Fn||(Fn=Dv.find(d.x,d.z,u.x,u.z)||[{x:u.x,z:u.z}]);Fn.length>1&&Math.hypot(Fn[0].x-d.x,Fn[0].z-d.z)<.35;)Fn.shift();let g=Fn[0],y=Math.hypot(g.x-d.x,g.z-d.z)||1;if(s=(g.x-d.x)/y*3.2,r=(g.z-d.z)/y*3.2,Math.abs(Bp-h)<i*.6?Ls+=i:Ls=Math.max(0,Ls-i*.5),Bp=h,Ls>.8&&!Ku&&(Fn=null,Ku=!0,Ls=0),Ls>1.6){let m=dn;dn=null,Fn=null,Ls=0,!m.point&&h<ah(m)+1.8?Aa(m):ho("Walk a little closer, then tap again")}}}let c=Math.hypot(s,r);if(c>.5&&$n>0&&($n=Math.max(0,$n-i*.9)),st.speed+=(c-st.speed)*Math.min(1,i*8),c>.05){let u=st.root.position,d=u.clone();u.x+=s*i,u.z+=r*i,Gv(u),Xp+=fo(d,u);let f=Math.atan2(s,r)-es;if(f=Math.atan2(Math.sin(f),Math.cos(f)),es+=f*Math.min(1,i*10),l>.08&&t>-.2){let g=es-fn;g=Math.atan2(Math.sin(g),Math.cos(g)),fn+=g*Math.min(1,i*.9)*Math.min(1,Math.abs(e)+.3)}else if(dn){let g=es-fn;g=Math.atan2(Math.sin(g),Math.cos(g)),fn+=g*Math.min(1,i*1.5)}Math.random()<i*10&&ar.emit(u.clone().setY(.1),1,16760944,.4,.5),mi=performance.now()}st.root.rotation.y=es}function Wv(i){let e=st.root.position;Ni.lerp(eh.set(e.x,1.35+(td-1)*.9,e.z),Math.min(1,i*6));let t=Ju*Math.cos(lo),n=new I(Ni.x-Math.sin(fn)*t,Ni.y+Math.sin(lo)*Ju+.25,Ni.z-Math.cos(fn)*t),s=Math.hypot(n.x,n.z),r=pn.camR||12.3;if(s>r){let l=Ni.x,c=Ni.z,u=n.x-l,d=n.z-c,h=u*u+d*d,f=2*(l*u+c*d),g=l*l+c*c-r*r,y=f*f-4*h*g,m=y>0&&h>1e-6?Math.max(.15,(-f+Math.sqrt(y))/(2*h)):r/s;n.x=l+u*m,n.z=c+d*m}let o=-Math.cos(fn)*.75,a=Math.sin(fn)*.75;n.x+=o,n.z+=a;{let l=Math.hypot(n.x,n.z);l>r-.1&&(n.x*=(r-.1)/l,n.z*=(r-.1)/l)}pn.camMaxY&&(n.y=Math.min(n.y,pn.camMaxY(n.x,n.z))),ln.position.lerp(n,Yc?1:Math.min(1,i*5)),ln.lookAt(Ni.x+o,Ni.y+.35+$n*$n*11,Ni.z+a)}var em="ark3d-secrets-"+ns,po=0,Xv=0,Qu=0;function qv(){Be("sfound").textContent=String(po)}function Yv(){try{localStorage.setItem(em,JSON.stringify(An.filter(i=>i.revealed).map(i=>i.it.data.id)))}catch{}}function tm(i){i.revealed=!0,i.it.locked=!1,i.it.label.sprite.visible=!0,i.hint.sprite.visible=!1,po++,i.order=po,qv()}function nm(i){if(i.revealed)return;tm(i),Yv(),ar.emit(new I(i.pos.x,.5,i.pos.z),90,16765040,3,4),st.roar=1.2;let e=Be("secrets");if(e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump"),Rp([432,540,648,864],.14,.09),i.trigger==="walk"||!i.trigger){let t=st.root.position,n=t.x-i.pos.x,s=t.z-i.pos.z,r=Math.hypot(n,s)||1;t.x=i.pos.x+n/r*1.35,t.z=i.pos.z+s/r*1.35,i.it.stand=new I(t.x,0,t.z)}{let t=new I().subVectors(i.pos,st.root.position);fn=Math.atan2(t.x,t.z),es=fn,$n=0,lo=.3}Jn(Fi.reveal+(An.length>1?" "+po+" of "+An.length+".":""),4200),i.fact&&ju(i)}function ju(i){let e=Be("fact");Be("f-title").textContent="\u2726 Secret "+i.order+" of "+An.length+" \xB7 "+(i.name||"A hidden title"),Be("f-text").textContent=i.fact,Be("f-reveal").textContent="It reveals: \u201C"+sd(i.it.data.title)+"\u201D. Tap the rising volume to read it.",e.hidden=!1,clearTimeout(ju._t),ju._t=setTimeout(()=>e.hidden=!0,14e3)}Be("fact").addEventListener("click",()=>Be("fact").hidden=!0);function im(){let i=An.filter(t=>!t.revealed);if(!i.length)return"Every secret in this room is found. Well read!";let e=i[Xv++%i.length];return typeof e.hintText=="function"?e.hintText(wn):e.hintText||"Something here is waiting to be found."}Be("secrets").addEventListener("click",()=>{Bn&&(Jn(im(),7e3),Qu=performance.now(),mi=performance.now())});Be("sound").addEventListener("click",()=>{let i=Cp(!Xu());Be("sound").textContent=i?"\u266A Sound on":"\u266A Sound off",Be("sound").setAttribute("aria-pressed",i?"true":"false")});Object.assign(Wp,{reveal:nm,say:(i,e)=>Jn(i,e||4800),toast:(i,e)=>ho(i,e),tone:(i,e,t)=>Jc(i,e,t)});var Op=performance.now(),Hp=0,Zv={lion:st,camera:ln,get found(){return wn},onDance(){Jn(Fi.third,5e3)}},Zu=0,Kc=0,th=60,Qc=0,nh=0,ih=[],Ea=new I;function sm(){let i=performance.now(),e=(i-Op)/1e3,t=Math.min(.05,e);Op=i,Hp+=t;let n=Hp;Zu++,Kc+=Math.min(e,1),Kc>=1&&(th=Zu/Kc,ih.push(Math.round(th)),ih.length>60&&ih.shift(),Zu=0,Kc=0,Bn&&th<30?Qc++:Qc=0,Qc>=3&&nh<2&&!Rv&&(nh++,Qc=0,nh===1?(Ds=Math.max(.75,Ds*.7),rn.setPixelRatio(Ds),ir.setPixelRatio(Ds),rd()):Ip=!1)),Bn&&Vv(t),Wv(t),st.hop=Ta>0?Math.abs(Math.sin((.9-Ta)/.9*Math.PI*2))*.28:0,Ta=Math.max(0,Ta-t);let s=0,r=Bn?id():null;if(r){let l=new I().subVectors(r.group.position,st.root.position),c=Math.atan2(l.x,l.z)-es;s=Math.atan2(Math.sin(c),Math.cos(c))}let o=performance.now()<rm||Bn&&!r&&st.idle>3&&st.idle%14<4.5;st.lookTarget=o?ln.position:null,st.update(t,n,r?s:null);for(let l of Ui)l.animDir&&(l.anim=Wt.clamp(l.anim+l.animDir*t/.9,0,1),l.anim===0&&l.animDir<0&&(l.animDir=0),l.animate&&l.animate(Wt.smoothstep(l.anim,0,1))),l._dt=t,l.idle&&l.idle(n);if(Bn)for(let l of An)l.revealed||l.trigger&&l.trigger!=="walk"||fo(st.root.position,l.pos)<1.3&&(!l.ready||l.ready(wn)?nm(l):l.notReady&&performance.now()-(l._nr||0)>9e3&&(l._nr=performance.now(),Jn(l.notReady,4200)));let a=st.root.position;for(let l of zp){let c=fo(a,l.sprite.position),u=l.always?1:Wt.clamp(1.25-(c-4)/9,.72,1),d=ln.position.distanceTo(l.sprite.position);l.sprite.material.opacity=u*Wt.clamp((d-1.6)/1.6,0,1);let h=Wt.clamp(d/8,1,l.big?1.35:1.6);l.sprite.scale.set(l.width*h,l.width*h*l.aspect,1),l.table&&(l.sprite.position.y=(l.baseY||(l.baseY=l.sprite.position.y))+Math.sin(n)*.03)}if(pn.tick(n,t,Zv),Iv.uniforms.uTime.value=n,ar.update(t),Bn&&!Kn&&!sr){let l=Be("prompt");if(r){let c=(rr?"Tap to open: ":"Open (E): ")+sd(r.data.title);l.textContent!==c&&(l.textContent=c),l.hidden=!1}else l.hidden=!0}if(jc>0){jc-=t;let l=Be("speech");if(jc<=0)l.hidden=!0;else{Ea.copy(st.root.position),Ea.y+=2.35,Ea.project(ln);let c=(l.offsetWidth||200)/2+8;l.style.left=Wt.clamp((Ea.x+1)/2*innerWidth,c,innerWidth-c)+"px",l.style.top=(1-Ea.y)/2*innerHeight+"px"}}if(Bn){Dp+=t;let l=Be("hint");!l.hidden&&(Xp>2.5&&Dp>5||rh)&&Yp(),l.hidden&&wn===0&&performance.now()-mi>25e3?(qp(),mi=performance.now(),Jn(Fi.idle)):wn>0&&po<An.length&&performance.now()-mi>35e3&&performance.now()-Qu>6e4&&(Qu=performance.now(),mi=performance.now(),Jn(im(),7e3))}Ip?ir.render():rn.render(Bi,ln),requestAnimationFrame(sm)}function rd(){ln.aspect=innerWidth/innerHeight,ln.fov=innerWidth<innerHeight?64:55,ln.updateProjectionMatrix(),rn.setSize(innerWidth,innerHeight),ir.setSize(innerWidth,innerHeight),sh.resolution.set(innerWidth/2,innerHeight/2),Ju=(innerWidth<innerHeight?7:6.2)*(1+(td-1)*.5)}addEventListener("resize",rd);rd();ln.position.set(0,12,14);Ni.set(0,3,0);ln.lookAt(0,3,0);var $v=!0,rm=0;ir.render();lh(1);window.__arkReady=!0;clearTimeout(window.__arkTimer);var od=Be("enter");od.disabled=!1;od.textContent=ns==="asherah"?"Enter Asherah\u2019s Library":"Enter the Library";od.addEventListener("click",om);function om(){Bn||(Bn=!0,$v=!1,Be("intro").classList.add("gone"),setTimeout(()=>Be("intro").hidden=!0,1200),Be("counter").hidden=!1,Be("secrets").hidden=!An.length,Be("sound").hidden=!1,rr&&(Be("joy").hidden=!1),qp(),mi=performance.now(),setTimeout(()=>Jn(Fi.welcome,5e3),1200),rm=performance.now()+4200,setTimeout(()=>st.greet&&st.greet(),Yc?200:900))}try{let i=JSON.parse(localStorage.getItem(Kp)||"[]");for(let t of Ra)i.includes(t.data.id)&&(t.found=!0,wn++,kp(t.label));Be("found").textContent=String(wn),wn&&(rh=!0);let e=JSON.parse(localStorage.getItem(em)||"[]");for(let t of An)!t.revealed&&(e.includes(t.it.data.id)||t.it.found)&&(tm(t),t.onRestore&&t.onRestore())}catch{}new URLSearchParams(location.search).get("via")==="portal"&&setTimeout(om,150);requestAnimationFrame(sm);window.__ark={get fps(){return th},fpsLog:ih,get quality(){return nh},get found(){return wn},total:Ra.length,room:ns,get readerOpen(){return Kn},get lion(){let i=st.root.position;return{x:i.x,z:i.z,heading:es,sit:st.sit}},get revealed(){return co?co.revealed:!1},items:()=>Ui.map(i=>({id:i.data.id,kind:i.data.kind,title:i.data.title,found:i.found,locked:!!i.locked,portal:!!i.isPortal})),screenPos(i){let e=Ui.find(n=>n.data.id===i);if(!e)return null;let t=e.hit.getWorldPosition(new I);return t.project(ln),{x:(t.x+1)/2*innerWidth,y:(1-t.y)/2*innerHeight,onScreen:Math.abs(t.x)<1&&Math.abs(t.y)<1&&t.z<1}},faceItem(i){let e=Ui.find(n=>n.data.id===i),t=new I().subVectors(e.group.position,st.root.position);fn=Math.atan2(t.x,t.z)},lionScreen(){let i=st.root.position.clone().setY(1);return i.project(ln),{x:(i.x+1)/2*innerWidth,y:(1-i.y)/2*innerHeight}},info:()=>rn.info.render,sceneInfo(){rn.setRenderTarget(null),rn.info.autoReset=!1,rn.info.reset(),rn.render(Bi,ln);let i=rn.info.render,e={calls:i.calls,triangles:i.triangles,points:i.points};return rn.info.autoReset=!0,e},secretReady(){let i=An[0];return i&&i.ready?!!i.ready(wn):null},pickAt(i,e){let t=nd(i,e);return t==="lion"?"lion":t?t.data.id:null},secrets:()=>An.map(i=>({key:i.key||"secret",id:i.it.data.id,revealed:i.revealed,x:i.pos.x,z:i.pos.z,order:i.order||0})),get secretsFound(){return po},facePoint(i,e){let t=st.root.position;fn=Math.atan2(i-t.x,e-t.z)},walkTo(i,e){jp({point:!0,stand:new I(i,0,e),data:{title:"there"}})},get path(){return Fn?Fn.map(i=>({x:+i.x.toFixed(2),z:+i.z.toFixed(2)})):null},get walking(){return!!dn},look(i){$n=i},get sound(){return Xu()},maxwell:()=>pn.maxwell?pn.maxwell():null};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
