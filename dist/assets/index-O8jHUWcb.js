(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Eo="183",Hp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,Kl=1,Yu=2,Wp=3,Xp=0,$s=1,mc=2,ys=3,qi=0,kt=1,ni=2,Ei=0,Or=1,$l=2,Ql=3,ec=4,Zu=5,jp=6,sr=100,Ju=101,Ku=102,$u=103,Qu=104,ed=200,td=201,id=202,rd=203,Nn=204,Un=205,sd=206,ad=207,nd=208,od=209,ld=210,cd=211,hd=212,ud=213,dd=214,Dn=0,Fn=1,On=2,Vr=3,Bn=4,zn=5,Vn=6,kn=7,Ta=0,pd=1,fd=2,_i=0,gc=1,_c=2,vc=3,yc=4,xc=5,Mc=6,Sc=7,tc="attached",md="detached",Co=300,Ii=301,cr=302,Qs=303,ea=304,Is=306,ca=1e3,Zt=1001,ha=1002,Mt=1003,bc=1004,qp=1004,xs=1005,Yp=1005,pt=1006,ta=1007,Zp=1007,Ti=1008,Jp=1008,qt=1009,wc=1010,Tc=1011,bs=1012,Ro=1013,li=1014,zt=1015,Pi=1016,Io=1017,Po=1018,ws=1020,Ac=35902,Ec=35899,Cc=1021,Rc=1022,Vt=1023,Li=1026,ar=1027,Lo=1028,Aa=1029,kr=1030,No=1031,Kp=1032,Uo=1033,ia=33776,ra=33777,sa=33778,aa=33779,Hn=35840,Gn=35841,Wn=35842,Xn=35843,jn=36196,qn=37492,Yn=37496,Zn=37488,Jn=37489,Kn=37490,$n=37491,Qn=37808,eo=37809,to=37810,io=37811,ro=37812,so=37813,ao=37814,no=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,po=37821,fo=36492,mo=36494,go=36495,_o=36283,vo=36284,yo=36285,xo=36286,gd=2200,_d=2201,vd=2202,ua=2300,Mo=2301,In=2302,ic=2303,Ur=2400,Dr=2401,da=2402,Do=2500,Ic=2501,$p=0,Qp=1,ef=2,yd=3200,tf=3201,rf=3202,sf=3203,dr=0,xd=1,Gi="",jt="srgb",Hr="srgb-linear",pa="linear",st="srgb",af="",nf="rg",of="ga",lf=0,Lr=7680,cf=7681,hf=7682,uf=7683,df=34055,pf=34056,ff=5386,mf=512,gf=513,_f=514,vf=515,yf=516,xf=517,Mf=518,rc=519,Md=512,Sd=513,bd=514,Fo=515,wd=516,Td=517,Oo=518,Ad=519,fa=35044,Sf=35048,bf=35040,wf=35045,Tf=35049,Af=35041,Ef=35046,Cf=35050,Rf=35042,If="100",sc="300 es",ei=2e3,Gr=2001,Pf={COMPUTE:"compute",RENDER:"render"},Lf={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Nf={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Uf={TEXTURE_COMPARE:"depthTextureCompare"};function Df(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}const Ff={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ms(a,e){return new Ff[a](e)}function Ed(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function ma(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Cd(){const a=ma("canvas");return a.style.display="block",a}const vh={};let hr=null;function Of(a){hr=a}function Bf(){return hr}function ga(...a){const e="THREE."+a.shift();hr?hr("log",e,...a):console.log(e,...a)}function Rd(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function pe(...a){a=Rd(a);const e="THREE."+a.shift();if(hr)hr("warn",e,...a);else{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Pe(...a){a=Rd(a);const e="THREE."+a.shift();if(hr)hr("error",e,...a);else{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function _a(...a){const e=a.join(" ");e in vh||(vh[e]=!0,pe(...a))}function zf(a,e,t){return new Promise(function(i,r){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:r();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vf={[Dn]:Fn,[On]:Vn,[Bn]:kn,[Vr]:zn,[Fn]:Dn,[Vn]:On,[kn]:Bn,[zn]:Vr};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,n=r.length;s<n;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const Br=Math.PI/180,Ts=180/Math.PI;function ti(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[a&255]+Pt[a>>8&255]+Pt[a>>16&255]+Pt[a>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function ke(a,e,t){return Math.max(e,Math.min(t,a))}function Pc(a,e){return(a%e+e)%e}function kf(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function Hf(a,e,t){return a!==e?(t-a)/(e-a):0}function na(a,e,t){return(1-t)*a+t*e}function Gf(a,e,t,i){return na(a,e,1-Math.exp(-t*i))}function Wf(a,e=1){return e-Math.abs(Pc(a,e*2)-e)}function Xf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function jf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function qf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Yf(a,e){return a+Math.random()*(e-a)}function Zf(a){return a*(.5-Math.random())}function Jf(a){a!==void 0&&(yh=a);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kf(a){return a*Br}function $f(a){return a*Ts}function Qf(a){return(a&a-1)===0&&a!==0}function em(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function tm(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function im(a,e,t,i,r){const s=Math.cos,n=Math.sin,o=s(t/2),l=n(t/2),c=s((e+i)/2),h=n((e+i)/2),p=s((e-i)/2),u=n((e-i)/2),d=s((i-e)/2),f=n((i-e)/2);switch(r){case"XYX":a.set(o*h,l*p,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*p,o*c);break;case"ZXZ":a.set(l*p,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*f,l*d,o*c);break;case"YXY":a.set(l*d,o*h,l*f,o*c);break;case"ZYZ":a.set(l*f,l*d,o*h,o*c);break;default:pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ye(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const rm={DEG2RAD:Br,RAD2DEG:Ts,generateUUID:ti,clamp:ke,euclideanModulo:Pc,mapLinear:kf,inverseLerp:Hf,lerp:na,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:jf,randInt:qf,randFloat:Yf,randFloatSpread:Zf,seededRandom:Jf,degToRad:Kf,radToDeg:$f,isPowerOfTwo:Qf,ceilPowerOfTwo:em,floorPowerOfTwo:tm,setQuaternionFromProperEuler:im,normalize:Ye,denormalize:Bt};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*i-n*r+e.x,this.y=s*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,n,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],u=s[n+0],d=s[n+1],f=s[n+2],_=s[n+3];if(p!==_||l!==u||c!==d||h!==f){let g=l*u+c*d+h*f+p*_;g<0&&(u=-u,d=-d,f=-f,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+u*o,c=c*m+d*o,h=h*m+f*o,p=p*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+f*o,p=p*m+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,n){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[n],u=s[n+1],d=s[n+2],f=s[n+3];return e[t]=o*f+h*p+l*d-c*u,e[t+1]=l*f+h*u+c*p-o*d,e[t+2]=c*f+h*d+o*u-l*p,e[t+3]=h*f-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,n=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),u=l(i/2),d=l(r/2),f=l(s/2);switch(n){case"XYZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"YXZ":this._x=u*h*p+c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"ZXY":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p-u*d*f;break;case"ZYX":this._x=u*h*p-c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p+u*d*f;break;case"YZX":this._x=u*h*p+c*d*f,this._y=c*d*p+u*h*f,this._z=c*h*f-u*d*p,this._w=c*h*p-u*d*f;break;case"XZY":this._x=u*h*p-c*d*f,this._y=c*d*p-u*h*f,this._z=c*h*f+u*d*p,this._w=c*h*p+u*d*f;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],n=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(n-r)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(s+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(n-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,n=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+n*o+r*c-s*l,this._y=r*h+n*l+s*o-i*c,this._z=s*h+n*c+i*l-r*o,this._w=n*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,n=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,n=-n,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+n*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,n=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*n,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*n,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,o=e.z,l=e.w,c=2*(n*r-o*i),h=2*(o*t-s*r),p=2*(s*i-n*t);return this.x=t+l*c+n*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,n=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*n-i*l,this.z=i*o-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new C,xh=new Ht;class qe{constructor(e,t,i,r,s,n,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,o,l,c)}set(e,t,i,r,s,n,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=n,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],f=i[8],_=r[0],g=r[3],m=r[6],v=r[1],M=r[4],x=r[7],A=r[2],T=r[5],R=r[8];return s[0]=n*_+o*v+l*A,s[3]=n*g+o*M+l*T,s[6]=n*m+o*x+l*R,s[1]=c*_+h*v+p*A,s[4]=c*g+h*M+p*T,s[7]=c*m+h*x+p*R,s[2]=u*_+d*v+f*A,s[5]=u*g+d*M+f*T,s[8]=u*m+d*x+f*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*n*h-t*o*c-i*s*h+i*o*l+r*s*c-r*n*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*n-o*c,u=o*l-h*s,d=c*s-n*l,f=t*p+i*u+r*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=p*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*n)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(n*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,n,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*n+c*o)+n+e,-r*c,r*l,-r*(-c*n+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cl=new qe,Mh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){const a={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,s,n){return this.enabled===!1||s===n||!s||!n||(this.spaces[s].transfer===st&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===st&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,n){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Hr]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),a}const tt=sm();function ji(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let $r;class Id{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=ma("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let n=0;n<s.length;n++)s[n]=ji(s[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let am=0;class nr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let n=0,o=r.length;n<o;n++)r[n].isDataTexture?s.push(hl(r[n].image)):s.push(hl(r[n]))}else s=hl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function hl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Id.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let nm=0;const ul=new C;class vt extends Ni{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=Zt,r=Zt,s=pt,n=Ti,o=Vt,l=qt,c=vt.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ti(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=n,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Co;vt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*s,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*s,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*s,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const n=e.elements,o=n[0],l=n[4],c=n[8],h=n[1],p=n[5],u=n[9],d=n[2],f=n[6],_=n[10];if(Math.abs(l-h)<.01&&Math.abs(c-d)<.01&&Math.abs(u-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+d)<.1&&Math.abs(u+f)<.1&&Math.abs(o+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,v=(p+1)/2,M=(_+1)/2,x=(l+h)/4,A=(c+d)/4,T=(u+f)/4;return m>v&&m>M?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=x/i,s=A/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=x/r,s=T/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=T/s),this.set(i,r,s,t),this}let g=Math.sqrt((f-u)*(f-u)+(c-d)*(c-d)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(f-u)/g,this.y=(c-d)/g,this.z=(h-l)/g,this.w=Math.acos((o+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new vt(r),n=i.count;for(let o=0;o<n;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Lc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bo extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class om extends ii{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Bo(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class zo extends vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends ii{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new zo(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class Ge{constructor(e,t,i,r,s,n,o,l,c,h,p,u,d,f,_,g){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,o,l,c,h,p,u,d,f,_,g)}set(e,t,i,r,s,n,o,l,c,h,p,u,d,f,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=n,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=u,m[3]=d,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),n=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,n=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=n*h,d=n*p,f=o*h,_=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+d*c,t[10]=n*l}else if(e.order==="YXZ"){const u=l*h,d=l*p,f=c*h,_=c*p;t[0]=u+_*o,t[4]=f*o-d,t[8]=n*c,t[1]=n*p,t[5]=n*h,t[9]=-o,t[2]=d*o-f,t[6]=_+u*o,t[10]=n*l}else if(e.order==="ZXY"){const u=l*h,d=l*p,f=c*h,_=c*p;t[0]=u-_*o,t[4]=-n*p,t[8]=f+d*o,t[1]=d+f*o,t[5]=n*h,t[9]=_-u*o,t[2]=-n*c,t[6]=o,t[10]=n*l}else if(e.order==="ZYX"){const u=n*h,d=n*p,f=o*h,_=o*p;t[0]=l*h,t[4]=f*c-d,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=n*l}else if(e.order==="YZX"){const u=n*l,d=n*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-u*p,t[8]=f*p+d,t[1]=p,t[5]=n*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+f,t[10]=u-_*p}else if(e.order==="XZY"){const u=n*l,d=n*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+_,t[5]=n*h,t[9]=d*p-f,t[2]=f*p-d,t[6]=o*h,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,hm)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Ji.crossVectors(i,$t),Ji.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Ji.crossVectors(i,$t)),Ji.normalize(),Oa.crossVectors($t,Ji),r[0]=Ji.x,r[4]=Oa.x,r[8]=$t.x,r[1]=Ji.y,r[5]=Oa.y,r[9]=$t.y,r[2]=Ji.z,r[6]=Oa.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],f=i[2],_=i[6],g=i[10],m=i[14],v=i[3],M=i[7],x=i[11],A=i[15],T=r[0],R=r[4],y=r[8],b=r[12],U=r[1],I=r[5],D=r[9],O=r[13],z=r[2],k=r[6],V=r[10],H=r[14],te=r[3],Q=r[7],ce=r[11],Me=r[15];return s[0]=n*T+o*U+l*z+c*te,s[4]=n*R+o*I+l*k+c*Q,s[8]=n*y+o*D+l*V+c*ce,s[12]=n*b+o*O+l*H+c*Me,s[1]=h*T+p*U+u*z+d*te,s[5]=h*R+p*I+u*k+d*Q,s[9]=h*y+p*D+u*V+d*ce,s[13]=h*b+p*O+u*H+d*Me,s[2]=f*T+_*U+g*z+m*te,s[6]=f*R+_*I+g*k+m*Q,s[10]=f*y+_*D+g*V+m*ce,s[14]=f*b+_*O+g*H+m*Me,s[3]=v*T+M*U+x*z+A*te,s[7]=v*R+M*I+x*k+A*Q,s[11]=v*y+M*D+x*V+A*ce,s[15]=v*b+M*O+x*H+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],n=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],f=e[3],_=e[7],g=e[11],m=e[15],v=l*d-c*u,M=o*d-c*p,x=o*u-l*p,A=n*d-c*h,T=n*u-l*h,R=n*p-o*h;return t*(_*v-g*M+m*x)-i*(f*v-g*A+m*T)+r*(f*M-_*A+m*R)-s*(f*x-_*T+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],f=e[12],_=e[13],g=e[14],m=e[15],v=t*o-i*n,M=t*l-r*n,x=t*c-s*n,A=i*l-r*o,T=i*c-s*o,R=r*c-s*l,y=h*_-p*f,b=h*g-u*f,U=h*m-d*f,I=p*g-u*_,D=p*m-d*_,O=u*m-d*g,z=v*O-M*D+x*I+A*U-T*b+R*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=(o*O-l*D+c*I)*k,e[1]=(r*D-i*O-s*I)*k,e[2]=(_*R-g*T+m*A)*k,e[3]=(u*T-p*R-d*A)*k,e[4]=(l*U-n*O-c*b)*k,e[5]=(t*O-r*U+s*b)*k,e[6]=(g*x-f*R-m*M)*k,e[7]=(h*R-u*x+d*M)*k,e[8]=(n*D-o*U+c*y)*k,e[9]=(i*U-t*D-s*y)*k,e[10]=(f*T-_*x+m*v)*k,e[11]=(p*x-h*T-d*v)*k,e[12]=(o*b-n*I-l*y)*k,e[13]=(t*I-i*b+r*y)*k,e[14]=(_*M-f*A-g*v)*k,e[15]=(h*A-p*M+u*v)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,n=e.x,o=e.y,l=e.z,c=s*n,h=s*o;return this.set(c*n+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*n,0,c*l-r*o,h*l+r*n,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,n){return this.set(1,i,s,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,n=t._y,o=t._z,l=t._w,c=s+s,h=n+n,p=o+o,u=s*c,d=s*h,f=s*p,_=n*h,g=n*p,m=o*p,v=l*c,M=l*h,x=l*p,A=i.x,T=i.y,R=i.z;return r[0]=(1-(_+m))*A,r[1]=(d+x)*A,r[2]=(f-M)*A,r[3]=0,r[4]=(d-x)*T,r[5]=(1-(u+m))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(f+M)*R,r[9]=(g-v)*R,r[10]=(1-(u+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let n=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(n=-n),di.copy(this);const c=1/n,h=1/o,p=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=p,di.elements[9]*=p,di.elements[10]*=p,t.setFromRotationMatrix(di),i.x=n,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,n,o=ei,l=!1){const c=this.elements,h=2*s/(t-e),p=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(l)f=s/(n-s),_=n*s/(n-s);else if(o===ei)f=-(n+s)/(n-s),_=-2*n*s/(n-s);else if(o===Gr)f=-n/(n-s),_=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,n,o=ei,l=!1){const c=this.elements,h=2/(t-e),p=2/(i-r),u=-(t+e)/(t-e),d=-(i+r)/(i-r);let f,_;if(l)f=1/(n-s),_=n/(n-s);else if(o===ei)f=-2/(n-s),_=-(n+s)/(n-s);else if(o===Gr)f=-1/(n-s),_=-s/(n-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new C,di=new Ge,cm=new C(0,0,0),hm=new C(1,1,1),Ji=new C,Oa=new C,$t=new C,bh=new Ge,wh=new Ht;class si{constructor(e=0,t=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],n=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let um=0;const Th=new C,es=new Ht,Oi=new Ge,Ba=new C,Fs=new C,dm=new C,pm=new Ht,Ah=new C(1,0,0),Eh=new C(0,1,0),Ch=new C(0,0,1),Rh={type:"added"},fm={type:"removed"},ts={type:"childadded",child:null},dl={type:"childremoved",child:null};class rt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new C,t=new si,i=new Ht,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new qe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Fs,Ba,this.up):Oi.lookAt(Ba,Fs,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Oi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),ts.child=e,this.dispatchEvent(ts),ts.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=n(e.geometries),l=n(e.materials),c=n(e.textures),h=n(e.images),p=n(e.shapes),u=n(e.skeletons),d=n(e.animations),f=n(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=r,i;function n(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rt.DEFAULT_UP=new C(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xi extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class Pn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,n=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,f=.005;c.inputState.pinching&&u>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},za={h:0,s:0,l:0};function pl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Pc(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,n=2*i-s;this.r=pl(n,s,e+1/3),this.g=pl(n,s,e),this.b=pl(n,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=r[1],o=r[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return tt.workingToColorSpace(Lt.copy(this),e),Math.round(ke(Lt.r*255,0,255))*65536+Math.round(ke(Lt.g*255,0,255))*256+Math.round(ke(Lt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,n=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+n)/2;if(o===n)l=0,c=0;else{const p=n-o;switch(c=h<=.5?p/(n+o):p/(2-n-o),n){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=jt){tt.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(za);const i=na(Ki.h,za.h,t),r=na(Ki.s,za.s,t),s=na(Ki.l,za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ye;ye.NAMES=Pd;class ko{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new ko(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ea{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=i}clone(){return new Ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Nc=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,e){return super.copy(a,e),a.background!==null&&(this.background=a.background.clone()),a.environment!==null&&(this.environment=a.environment.clone()),a.fog!==null&&(this.fog=a.fog.clone()),this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null&&(this.overrideMaterial=a.overrideMaterial.clone()),this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){const e=super.toJSON(a);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};const pi=new C,Bi=new C,fl=new C,zi=new C,is=new C,rs=new C,Ih=new C,ml=new C,gl=new C,_l=new C,vl=new ut,yl=new ut,xl=new ut;class Yt{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pi.subVectors(e,t),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pi.subVectors(r,t),Bi.subVectors(i,t),fl.subVectors(e,t);const n=pi.dot(pi),o=pi.dot(Bi),l=pi.dot(fl),c=Bi.dot(Bi),h=Bi.dot(fl),p=n*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,f=(n*h-o*l)*u;return s.set(1-d-f,f,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,n,o,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(n,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,n){return vl.setScalar(0),yl.setScalar(0),xl.setScalar(0),vl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,r),n.setScalar(0),n.addScaledVector(vl,s.x),n.addScaledVector(yl,s.y),n.addScaledVector(xl,s.z),n}static isFrontFacing(e,t,i,r){return pi.subVectors(i,t),Bi.subVectors(e,t),pi.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),pi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let n,o;is.subVectors(r,i),rs.subVectors(s,i),ml.subVectors(e,i);const l=is.dot(ml),c=rs.dot(ml);if(l<=0&&c<=0)return t.copy(i);gl.subVectors(e,r);const h=is.dot(gl),p=rs.dot(gl);if(h>=0&&p<=h)return t.copy(r);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return n=l/(l-h),t.copy(i).addScaledVector(is,n);_l.subVectors(e,s);const d=is.dot(_l),f=rs.dot(_l);if(f>=0&&d<=f)return t.copy(s);const _=d*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(rs,o);const g=h*f-d*p;if(g<=0&&p-h>=0&&d-f>=0)return Ih.subVectors(s,r),o=(p-h)/(p-h+(d-f)),t.copy(r).addScaledVector(Ih,o);const m=1/(g+_+u);return n=_*m,o=u*m,t.copy(i).addScaledVector(is,n).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ut{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=s.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,fi):fi.fromBufferAttribute(s,n),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,n=r.length;s<n;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ka.subVectors(this.max,Os),ss.subVectors(e.a,Os),as.subVectors(e.b,Os),ns.subVectors(e.c,Os),$i.subVectors(as,ss),Qi.subVectors(ns,as),vr.subVectors(ss,ns);let t=[0,-$i.z,$i.y,0,-Qi.z,Qi.y,0,-vr.z,vr.y,$i.z,0,-$i.x,Qi.z,0,-Qi.x,vr.z,0,-vr.x,-$i.y,$i.x,0,-Qi.y,Qi.x,0,-vr.y,vr.x,0];return!Ml(t,ss,as,ns,ka)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,ss,as,ns,ka))?!1:(Ha.crossVectors($i,Qi),t=[Ha.x,Ha.y,Ha.z],Ml(t,ss,as,ns,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new C,new C,new C,new C,new C,new C,new C,new C],fi=new C,Va=new Ut,ss=new C,as=new C,ns=new C,$i=new C,Qi=new C,vr=new C,Os=new C,ka=new C,Ha=new C,yr=new C;function Ml(a,e,t,i,r){for(let s=0,n=a.length-3;s<=n;s+=3){yr.fromArray(a,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=t.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Wi=gm();function gm(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:n,offsetTable:o}}function Xt(a){Math.abs(a)>65504&&pe("DataUtils.toHalfFloat(): Value out of range."),a=ke(a,-65504,65504),Wi.floatView[0]=a;const e=Wi.uint32View[0],t=e>>23&511;return Wi.baseTable[t]+((e&8388607)>>Wi.shiftTable[t])}function Zs(a){const e=a>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[e]+(a&1023)]+Wi.exponentTable[e],Wi.floatView[0]}class _m{static toHalfFloat(e){return Xt(e)}static fromHalfFloat(e){return Zs(e)}}const bt=new C,Ga=new J;let vm=0;class nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fa,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}}class ym extends nt{constructor(e,t,i){super(new Int8Array(e),t,i)}}class xm extends nt{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Mm extends nt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class Sm extends nt{constructor(e,t,i){super(new Int16Array(e),t,i)}}class Uc extends nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bm extends nt{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Dc extends nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wm extends nt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Zs(this.array[e*this.itemSize]);return this.normalized&&(t=Bt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=Xt(t),this}getY(e){let t=Zs(this.array[e*this.itemSize+1]);return this.normalized&&(t=Bt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=Xt(t),this}getZ(e){let t=Zs(this.array[e*this.itemSize+2]);return this.normalized&&(t=Bt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=Xt(t),this}getW(e){let t=Zs(this.array[e*this.itemSize+3]);return this.normalized&&(t=Bt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=Xt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this.array[e+2]=Xt(r),this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this.array[e+2]=Xt(r),this.array[e+3]=Xt(s),this}}class Se extends nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Tm=new Ut,Bs=new C,Sl=new C;class It{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,n=e.length;s<n;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Sl)),this.expandByPoint(Bs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Am=0;const ai=new Ge,bl=new rt,os=new C,Qt=new Ut,zs=new Ut,Et=new C;class je extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Dc:Uc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const n=e[r];i.push(n.x,n.y,n.z||0)}this.setAttribute("position",new Se(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const o=t[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Qt.min,zs.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,zs.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(zs.min),Qt.expandByPoint(zs.max))}Qt.getCenter(i);let r=0;for(let s=0,n=e.count;s<n;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,n=t.length;s<n;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Et.add(os)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*i.count),4));const n=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new C,l[y]=new C;const c=new C,h=new C,p=new C,u=new J,d=new J,f=new J,_=new C,g=new C;function m(y,b,U){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,U),u.fromBufferAttribute(s,y),d.fromBufferAttribute(s,b),f.fromBufferAttribute(s,U),h.sub(c),p.sub(c),d.sub(u),f.sub(u);const I=1/(d.x*f.y-f.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(p,-d.y).multiplyScalar(I),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(I),o[y].add(_),o[b].add(_),o[U].add(_),l[y].add(g),l[b].add(g),l[U].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,b=v.length;y<b;++y){const U=v[y],I=U.start,D=U.count;for(let O=I,z=I+D;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new C,x=new C,A=new C,T=new C;function R(y){A.fromBufferAttribute(r,y),T.copy(A);const b=o[y];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(T,b);const U=x.dot(l[y])<0?-1:1;n.setXYZW(y,M.x,M.y,M.z,U)}for(let y=0,b=v.length;y<b;++y){const U=v[y],I=U.start,D=U.count;for(let O=I,z=I+D;O<z;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const r=new C,s=new C,n=new C,o=new C,l=new C,c=new C,h=new C,p=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){const f=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),n.fromBufferAttribute(t,g),h.subVectors(n,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),n.fromBufferAttribute(t,u+2),h.subVectors(n,s),p.subVectors(r,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[f++]=c[d++]}return new nt(u,h,p)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,l=n.length;o<l;o++){const c=n[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,h=n.length;c<h;c++){const p=n[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fa,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new C;class Wr{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Bt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Em=0;class Dt extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Or,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nn,this.blendDst=Un,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nn&&(i.blendSrc=this.blendSrc),this.blendDst!==Un&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const n=[];for(const o in s){const l=s[o];delete l.metadata,n.push(l)}return n}if(t){const s=r(e.textures),n=r(e.images);s.length>0&&(i.textures=s),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fc extends Dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const Vs=new C,cs=new C,hs=new C,us=new J,ks=new J,Ld=new Ge,Wa=new C,Hs=new C,Xa=new C,Ph=new J,wl=new J,Lh=new J;class Nd extends rt{constructor(e=new Fc){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ho(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Wr(i,3,0,!1)),ls.setAttribute("uv",new Wr(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new J(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const n=this.center;ja(Wa.set(-.5,-.5,0),hs,n,cs,r,s),ja(Hs.set(.5,-.5,0),hs,n,cs,r,s),ja(Xa.set(.5,.5,0),hs,n,cs,r,s),Ph.set(0,0),wl.set(1,0),Lh.set(1,1);let o=e.ray.intersectTriangle(Wa,Hs,Xa,!1,Vs);if(o===null&&(ja(Hs.set(-.5,.5,0),hs,n,cs,r,s),wl.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,Hs,!1,Vs),o===null))return;const l=e.ray.origin.distanceTo(Vs);l<e.near||l>e.far||t.push({distance:l,point:Vs.clone(),uv:Yt.getInterpolation(Vs,Wa,Hs,Xa,Ph,wl,Lh,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ja(a,e,t,i,r,s){us.subVectors(a,t).addScalar(.5).multiply(i),r!==void 0?(ks.x=s*us.x-r*us.y,ks.y=r*us.x+s*us.y):ks.copy(us),a.copy(e),a.x+=ks.x,a.y+=ks.y,a.applyMatrix4(Ld)}const qa=new C,Nh=new C;class Ud extends rt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const r=t.splice(i,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){qa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(qa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){qa.setFromMatrixPosition(e.matrixWorld),Nh.setFromMatrixPosition(this.matrixWorld);const i=qa.distanceTo(Nh)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let n=t[r].distance;if(t[r].object.visible&&(n-=n*t[r].hysteresis),i>=n)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const n=i[r];t.object.levels.push({object:n.object.uuid,distance:n.distance,hysteresis:n.hysteresis})}return t}}const ki=new C,Tl=new C,Ya=new C,er=new C,Al=new C,Za=new C,El=new C;class Ps{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tl.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Tl);const s=e.distanceTo(t)*.5,n=-this.direction.dot(Ya),o=er.dot(this.direction),l=-er.dot(Ya),c=er.lengthSq(),h=Math.abs(1-n*n);let p,u,d,f;if(h>0)if(p=n*l-o,u=n*o-l,f=s*h,p>=0)if(u>=-f)if(u<=f){const _=1/h;p*=_,u*=_,d=p*(p+n*u+2*o)+u*(n*p+u+2*l)+c}else u=s,p=Math.max(0,-(n*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(n*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-f?(p=Math.max(0,-(-n*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=f?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(n*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=n>0?-s:s,p=Math.max(0,-(n*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Tl).addScaledVector(Ya,u),d}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const n=Math.sqrt(s-r),o=i-n,l=i+n;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,n,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,n=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,n=(e.min.y-u.y)*h),i>n||s>r||((s>i||isNaN(i))&&(i=s),(n<r||isNaN(r))&&(r=n),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,i,r,s){Al.subVectors(t,e),Za.subVectors(i,e),El.crossVectors(Al,Za);let n=this.direction.dot(El),o;if(n>0){if(r)return null;o=1}else if(n<0)o=-1,n=-n;else return null;er.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(er,Za));if(l<0)return null;const c=o*this.direction.dot(Al.cross(er));if(c<0||l+c>n)return null;const h=-o*er.dot(El);return h<0?null:this.at(h/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends Dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uh=new Ge,xr=new Ps,Ja=new It,Dh=new C,Ka=new C,$a=new C,Qa=new C,Cl=new C,en=new C,Fh=new C,tn=new C;class Ke extends rt{constructor(e=new je,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){en.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Cl.fromBufferAttribute(p,e),n?en.addScaledVector(Cl,h):en.addScaledVector(Cl.sub(t),h))}t.add(en)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ja.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ja,Dh)===null||xr.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Uh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,n=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(n))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=n[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,A=M;x<A;x+=3){const T=o.getX(x),R=o.getX(x+1),y=o.getX(x+2);r=rn(this,m,e,i,c,h,p,T,R,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const v=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);r=rn(this,n,e,i,c,h,p,v,M,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=n[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,A=M;x<A;x+=3){const T=x,R=x+1,y=x+2;r=rn(this,m,e,i,c,h,p,T,R,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=f,m=_;g<m;g+=3){const v=g,M=g+1,x=g+2;r=rn(this,n,e,i,c,h,p,v,M,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Cm(a,e,t,i,r,s,n,o){let l;if(e.side===kt?l=i.intersectTriangle(n,s,r,!0,o):l=i.intersectTriangle(r,s,n,e.side===qi,o),l===null)return null;tn.copy(o),tn.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(tn);return c<t.near||c>t.far?null:{distance:c,point:tn.clone(),object:a}}function rn(a,e,t,i,r,s,n,o,l,c){a.getVertexPosition(o,Ka),a.getVertexPosition(l,$a),a.getVertexPosition(c,Qa);const h=Cm(a,e,t,i,Ka,$a,Qa,Fh);if(h){const p=new C;Yt.getBarycoord(Fh,Ka,$a,Qa,p),r&&(h.uv=Yt.getInterpolatedAttribute(r,o,l,c,p,new J)),s&&(h.uv1=Yt.getInterpolatedAttribute(s,o,l,c,p,new J)),n&&(h.normal=Yt.getInterpolatedAttribute(n,o,l,c,p,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Yt.getNormal(Ka,$a,Qa,u.normal),h.face=u,h.barycoord=p}return h}const Oh=new C,Bh=new ut,zh=new ut,Rm=new C,Vh=new Ge,sn=new C,Rl=new It,kh=new Ge,Il=new Ps;class Dd extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sn),this.boundingBox.expandByPoint(sn)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new It),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sn),this.boundingSphere.expandByPoint(sn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(r),e.ray.intersectsSphere(Rl)!==!1&&(kh.copy(r).invert(),Il.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===md?this.bindMatrixInverse.copy(this.bindMatrix).invert():pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Bh.fromBufferAttribute(r.attributes.skinIndex,e),zh.fromBufferAttribute(r.attributes.skinWeight,e),Oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const n=zh.getComponent(s);if(n!==0){const o=Bh.getComponent(s);Vh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Rm.copy(Oh).applyMatrix4(Vh),n)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Oc extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vi extends vt{constructor(e=null,t=1,i=1,r,s,n,o,l,c=Mt,h=Mt,p,u){super(null,n,o,l,c,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new Ge,Im=new Ge;class Go{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,n=e.length;s<n;s++){const o=e[s]?e[s].matrixWorld:Im;Hh.multiplyMatrices(o,t[s]),Hh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Go(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new vi(t,e,e,Vt,zt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let n=t[s];n===void 0&&(pe("Skeleton: No bone found with UUID:",s),n=new Oc),this.bones.push(n),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const n=t[r];e.bones.push(n.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class As extends nt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ge,Gh=new Ge,an=[],Wh=new Ut,Pm=new Ge,Gs=new Ke,Ws=new It;class Fd extends Ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Wh.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new It),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Ws.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,n=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[n+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(i),e.ray.intersectsSphere(Ws)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),Gh.multiplyMatrices(i,ds),Gs.matrixWorld=Gh,Gs.raycast(e,an);for(let n=0,o=an.length;n<o;n++){const l=an[n];l.instanceId=s,l.object=this,t.push(l)}an.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(r*this.count),r,this.count,Lo,zt));const s=this.morphTexture.source.data.data;let n=0;for(let c=0;c<i.length;c++)n+=i[c];const o=this.geometry.morphTargetsRelative?1:1-n,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pl=new C,Lm=new C,Nm=new qe;class rr{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pl.subVectors(i,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nm.getNormalMatrix(e),r=this.coplanarPoint(Pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new It,Um=new J(.5,.5),nn=new C;class Ls{constructor(e=new rr,t=new rr,i=new rr,r=new rr,s=new rr,n=new rr){this.planes=[e,t,i,r,s,n]}set(e,t,i,r,s,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){const r=this.planes,s=e.elements,n=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],f=s[8],_=s[9],g=s[10],m=s[11],v=s[12],M=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-n,d-h,m-f,A-v).normalize(),r[1].setComponents(c+n,d+h,m+f,A+v).normalize(),r[2].setComponents(c+o,d+p,m+_,A+M).normalize(),r[3].setComponents(c-o,d-p,m-_,A-M).normalize(),i)r[4].setComponents(l,u,g,x).normalize(),r[5].setComponents(c-l,d-u,m-g,A-x).normalize();else if(r[4].setComponents(c-l,d-u,m-g,A-x).normalize(),t===ei)r[5].setComponents(c+l,d+u,m+g,A+x).normalize();else if(t===Gr)r[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const t=Um.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(nn.x=r.normal.x>0?e.max.x:e.min.x,nn.y=r.normal.y>0?e.max.y:e.min.y,nn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Mi=new Ge,Si=new Ls;class Wo{constructor(){this.coordinateSystem=ei}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(Mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Si.setFromProjectionMatrix(Mi,r.coordinateSystem,r.reversedDepth),Si.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(Mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Si.setFromProjectionMatrix(Mi,r.coordinateSystem,r.reversedDepth),Si.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(Mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Si.setFromProjectionMatrix(Mi,r.coordinateSystem,r.reversedDepth),Si.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(Mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Si.setFromProjectionMatrix(Mi,r.coordinateSystem,r.reversedDepth),Si.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){const r=t.cameras[i];if(Mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Si.setFromProjectionMatrix(Mi,r.coordinateSystem,r.reversedDepth),Si.containsPoint(e))return!0}return!1}clone(){return new Wo}}function Ll(a,e){return a-e}function Dm(a,e){return a.z-e.z}function Fm(a,e){return e.z-a.z}class Om{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){const s=this.pool,n=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];n.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}}const Wt=new Ge,Bm=new ye(1,1,1),Xh=new Ls,zm=new Wo,on=new Ut,Sr=new It,Xs=new C,jh=new C,Vm=new C,Nl=new Om,Nt=new Ke,ln=[];function km(a,e,t=0){const i=e.itemSize;if(a.isInterleavedBufferAttribute||a.array.constructor!==e.array.constructor){const r=a.count;for(let s=0;s<r;s++)for(let n=0;n<i;n++)e.setComponent(s+t,n,a.getComponent(s,n))}else e.array.set(a.array,t*i);e.needsUpdate=!0}function br(a,e){if(a.constructor!==e.constructor){const t=Math.min(a.length,e.length);for(let i=0;i<t;i++)e[i]=a[i]}else{const t=Math.min(a.length,e.length);e.set(new a.constructor(a.buffer,0,t))}}class Od extends Ke{constructor(e,t,i=t*2,r){super(new je,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new vi(t,e,e,Vt,zt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new vi(t,e,e,Aa,li);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new vi(t,e,e,Vt,zt);i.colorSpace=tt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const n=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=n,h=new o.constructor(i*l),p=new nt(h,l,c);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new nt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=e.getAttribute(i),s=t.getAttribute(i);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingBoxAt(s,on).applyMatrix4(Wt),e.union(on)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new It);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingSphereAt(s,Sr).applyMatrix4(Wt),e.union(Sr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ll),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const r=this._matricesTexture;Wt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const s=this._colorsTexture;return s&&(Bm.toArray(s.image.data,i*4),s.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const n=e.getIndex();if(n!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=i===-1?n.count:i),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ll),o=this._availableGeometryIds.shift(),s[o]=r):(o=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(o,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,r=i.getIndex()!==null,s=i.getIndex(),n=t.getIndex(),o=this._geometryInfo[e];if(r&&n.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const p=t.getAttribute(h),u=i.getAttribute(h);km(p,u,l);const d=p.itemSize;for(let f=p.count,_=c;f<_;f++){const g=l+f;for(let m=0;m<d;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(r){const h=o.indexStart,p=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<n.count;u++)s.setX(h+u,l+n.getX(u));for(let u=n.count,d=p;u<d;u++)s.setX(h+u,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=r?o.indexStart:o.vertexStart,o.count=r?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let r=0,s=i.length;r<s;r++)i[r].active&&i[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,r=i.map((n,o)=>o).sort((n,o)=>i[n].vertexStart-i[o].vertexStart),s=this.geometry;for(let n=0,o=i.length;n<o;n++){const l=r[n],c=i[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:p,reservedIndexCount:u}=c,d=s.index,f=d.array,_=e-p;for(let g=h;g<h+u;g++)f[g]=f[g]+_;d.array.copyWithin(t,h,h+u),d.addUpdateRange(t,u),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:p}=c,u=s.attributes;for(const d in u){const f=u[d],{array:_,itemSize:g}=f;_.copyWithin(e*g,h*g,(h+p)*g),f.addUpdateRange(e*g,p*g),f.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const s=new Ut,n=i.index,o=i.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let h=l;n&&(h=n.getX(h)),s.expandByPoint(Xs.fromBufferAttribute(o,h))}r.boundingBox=s}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const s=new It;this.getBoundingBoxAt(e,on),on.getCenter(s.center);const n=i.index,o=i.attributes.position;let l=0;for(let c=r.start,h=r.start+r.count;c<h;c++){let p=c;n&&(p=n.getX(p)),Xs.fromBufferAttribute(o,p),l=Math.max(l,s.center.distanceToSquared(Xs))}s.radius=Math.sqrt(l),r.boundingSphere=s}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Ll);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),s=new Int32Array(e);br(this._multiDrawCounts,r),br(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=e;const n=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;n.dispose(),this._initIndirectTexture(),br(n.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),br(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),br(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(n=>n.active);if(Math.max(...i.map(n=>n.vertexStart+n.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(n=>n.indexStart+n.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new je,this._initializeGeometry(r));const s=this.geometry;r.index&&br(r.index.array,s.index.array);for(const n in r.attributes)br(r.attributes[n].array,s.attributes[n].array)}raycast(e,t){const i=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,n=this.geometry;Nt.material=this.material,Nt.geometry.index=n.index,Nt.geometry.attributes=n.attributes,Nt.geometry.boundingBox===null&&(Nt.geometry.boundingBox=new Ut),Nt.geometry.boundingSphere===null&&(Nt.geometry.boundingSphere=new It);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=r[c];Nt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Nt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Nt.geometry.boundingBox),this.getBoundingSphereAt(c,Nt.geometry.boundingSphere),Nt.raycast(e,ln);for(let p=0,u=ln.length;p<u;p++){const d=ln[p];d.object=this,d.batchId=o,t.push(d)}ln.length=0}Nt.material=null,Nt.geometry.index=null,Nt.geometry.attributes={},Nt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const n=r.getIndex();let o=n===null?1:n.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,o=r.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,p=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,_=f.image.data,g=i.isArrayCamera?zm:Xh;d&&!i.isArrayCamera&&(Wt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Xh.setFromProjectionMatrix(Wt,i.coordinateSystem,i.reversedDepth));let m=0;if(this.sortObjects){Wt.copy(this.matrixWorld).invert(),Xs.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Wt),jh.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Wt);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){const T=c[x].geometryIndex;this.getMatrixAt(x,Wt),this.getBoundingSphereAt(T,Sr).applyMatrix4(Wt);let R=!1;if(d&&(R=!g.intersectsSphere(Sr,i)),!R){const y=u[T],b=Vm.subVectors(Sr.center,Xs).dot(jh);Nl.push(y.start,y.count,b,x)}}const v=Nl.list,M=this.customSort;M===null?v.sort(s.transparent?Fm:Dm):M.call(this,v,i);for(let x=0,A=v.length;x<A;x++){const T=v[x];h[m]=T.start*o*l,p[m]=T.count*l,_[m]=T.index,m++}Nl.reset()}else for(let v=0,M=c.length;v<M;v++)if(c[v].visible&&c[v].active){const x=c[v].geometryIndex;let A=!1;if(d&&(this.getMatrixAt(v,Wt),this.getBoundingSphereAt(x,Sr).applyMatrix4(Wt),A=!g.intersectsSphere(Sr,i)),!A){const T=u[x];h[m]=T.start*o*l,p[m]=T.count*l,_[m]=v,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,s,n){this.onBeforeRender(e,null,r,s,n)}}class Gt extends Dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new C,bo=new C,qh=new Ge,js=new Ps,cn=new It,Ul=new C,Yh=new C;class ur extends rt{constructor(e=new je,t=new Gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)So.fromBufferAttribute(t,r-1),bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=So.distanceTo(bo);e.setAttribute("lineDistance",new Se(i,1))}else pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(r),cn.radius+=s,e.ray.intersectsSphere(cn)===!1)return;qh.copy(r).invert(),js.copy(e.ray).applyMatrix4(qh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let f=u,_=d-1;f<_;f+=c){const g=h.getX(f),m=h.getX(f+1),v=hn(this,e,js,l,g,m,f);v&&t.push(v)}if(this.isLineLoop){const f=h.getX(d-1),_=h.getX(u),g=hn(this,e,js,l,f,_,d-1);g&&t.push(g)}}else{const u=Math.max(0,n.start),d=Math.min(p.count,n.start+n.count);for(let f=u,_=d-1;f<_;f+=c){const g=hn(this,e,js,l,f,f+1,f);g&&t.push(g)}if(this.isLineLoop){const f=hn(this,e,js,l,d-1,u,d-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}}function hn(a,e,t,i,r,s,n){const o=a.geometry.attributes.position;if(So.fromBufferAttribute(o,r),bo.fromBufferAttribute(o,s),t.distanceSqToSegment(So,bo,Ul,Yh)>i)return;Ul.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Ul);if(!(l<e.near||l>e.far))return{distance:l,point:Yh.clone().applyMatrix4(a.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:a}}const Zh=new C,Jh=new C;class Ui extends ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Zh.fromBufferAttribute(t,r),Jh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new Se(i,1))}else pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bd extends ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bc extends Dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new Ge,ac=new Ps,un=new It,dn=new C;class zd extends rt{constructor(e=new je,t=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(r),un.radius+=s,e.ray.intersectsSphere(un)===!1)return;Kh.copy(r).invert(),ac.copy(e.ray).applyMatrix4(Kh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let d=p,f=u;d<f;d++){const _=c.getX(d);dn.fromBufferAttribute(h,_),$h(dn,_,l,r,e,t,this)}}else{const p=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let d=p,f=u;d<f;d++)dn.fromBufferAttribute(h,d),$h(dn,d,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}}function $h(a,e,t,i,r,s,n){const o=ac.distanceSqToPoint(a);if(o<t){const l=new C;ac.closestPointToPoint(a,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:n})}}class Vd extends vt{constructor(e,t,i,r,s=pt,n=pt,o,l,c){super(e,t,i,r,s,n,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function p(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Hm extends Vd{constructor(e,t,i,r,s,n,o,l){super({},e,t,i,r,s,n,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Gm extends vt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Mt,this.minFilter=Mt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Xo extends vt{constructor(e,t,i,r,s,n,o,l,c,h,p,u){super(null,n,o,l,c,h,r,s,p,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Wm extends Xo{constructor(e,t,i,r,s,n){super(e,t,i,s,n),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Zt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends Xo{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ca extends vt{constructor(e=[],t=Ii,i,r,s,n,o,l,c,h){super(e,t,i,r,s,n,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jm extends vt{constructor(e,t,i,r,s,n,o,l,c){super(e,t,i,r,s,n,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends vt{constructor(e,t,i=li,r,s,n,o=Mt,l=Mt,c,h=Li,p=1){if(h!==Li&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,s,n,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kd extends Es{constructor(e,t=li,i=Ii,r,s,n=Mt,o=Mt,l,c=Li){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,n,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zc extends vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends je{constructor(e=1,t=1,i=1,r=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:n};const o=this;r=Math.floor(r),s=Math.floor(s),n=Math.floor(n);const l=[],c=[],h=[],p=[];let u=0,d=0;f("z","y","x",-1,-1,i,t,e,n,s,0),f("z","y","x",1,-1,i,t,-e,n,s,1),f("x","z","y",1,1,e,i,t,r,n,2),f("x","z","y",1,-1,e,i,-t,r,n,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(p,2));function f(_,g,m,v,M,x,A,T,R,y,b){const U=x/R,I=A/y,D=x/2,O=A/2,z=T/2,k=R+1,V=y+1;let H=0,te=0;const Q=new C;for(let ce=0;ce<V;ce++){const Me=ce*I-O;for(let be=0;be<k;be++){const Xe=be*U-D;Q[_]=Xe*v,Q[g]=Me*M,Q[m]=z,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[m]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),p.push(be/R),p.push(1-ce/y),H+=1}}for(let ce=0;ce<y;ce++)for(let Me=0;Me<R;Me++){const be=u+Me+k*ce,Xe=u+Me+k*(ce+1),ot=u+(Me+1)+k*(ce+1),lt=u+(Me+1)+k*ce;l.push(be,Xe,lt),l.push(Xe,ot,lt),te+=6}o.addGroup(d,te,b),d+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jo extends je{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const n=[],o=[],l=[],c=[],h=t/2,p=Math.PI/2*e,u=t,d=2*p+u,f=i*2+s,_=r+1,g=new C,m=new C;for(let v=0;v<=f;v++){let M=0,x=0,A=0,T=0;if(v<=i){const b=v/i,U=b*Math.PI/2;x=-h-e*Math.cos(U),A=e*Math.sin(U),T=-e*Math.cos(U),M=b*p}else if(v<=i+s){const b=(v-i)/s;x=-h+b*t,A=e,T=0,M=p+b*u}else{const b=(v-i-s)/i,U=b*Math.PI/2;x=h+e*Math.sin(U),A=e*Math.cos(U),T=e*Math.sin(U),M=p+u+b*p}const R=Math.max(0,Math.min(1,M/d));let y=0;v===0?y=.5/r:v===f&&(y=-.5/r);for(let b=0;b<=r;b++){const U=b/r,I=U*Math.PI*2,D=Math.sin(I),O=Math.cos(I);m.x=-A*O,m.y=x,m.z=A*D,o.push(m.x,m.y,m.z),g.set(-A*O,T,A*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(U+y,R)}if(v>0){const b=(v-1)*_;for(let U=0;U<r;U++){const I=b+U,D=b+U+1,O=v*_+U,z=v*_+U+1;n.push(I,D,O),n.push(D,z,O)}}}this.setIndex(n),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ra extends je{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],n=[],o=[],l=[],c=new C,h=new J;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){const d=i+p/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),n.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(n[u]/e+1)/2,h.y=(n[u+1]/e+1)/2,l.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Se(n,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ci extends je{constructor(e=1,t=1,i=1,r=32,s=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:n,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],u=[],d=[];let f=0;const _=[],g=i/2;let m=0;v(),n===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(d,2));function v(){const x=new C,A=new C;let T=0;const R=(t-e)/i;for(let y=0;y<=s;y++){const b=[],U=y/s,I=U*(t-e)+e;for(let D=0;D<=r;D++){const O=D/r,z=O*l+o,k=Math.sin(z),V=Math.cos(z);A.x=I*k,A.y=-U*i+g,A.z=I*V,p.push(A.x,A.y,A.z),x.set(k,R,V).normalize(),u.push(x.x,x.y,x.z),d.push(O,1-U),b.push(f++)}_.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const U=_[b][y],I=_[b+1][y],D=_[b+1][y+1],O=_[b][y+1];(e>0||b!==0)&&(h.push(U,I,O),T+=3),(t>0||b!==s-1)&&(h.push(I,D,O),T+=3)}c.addGroup(m,T,0),m+=T}function M(x){const A=f,T=new J,R=new C;let y=0;const b=x===!0?e:t,U=x===!0?1:-1;for(let D=1;D<=r;D++)p.push(0,g*U,0),u.push(0,U,0),d.push(.5,.5),f++;const I=f;for(let D=0;D<=r;D++){const O=D/r*l+o,z=Math.cos(O),k=Math.sin(O);R.x=b*k,R.y=g*U,R.z=b*z,p.push(R.x,R.y,R.z),u.push(0,U,0),T.x=z*.5+.5,T.y=k*.5*U+.5,d.push(T.x,T.y),f++}for(let D=0;D<r;D++){const O=A+D,z=I+D;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ci{constructor(e=1,t=1,i=32,r=1,s=!1,n=0,o=Math.PI*2){super(0,e,t,i,r,s,n,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:n,thetaLength:o}}static fromJSON(e){return new lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends je{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],n=[];o(r),c(i),h(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(n,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new C,x=new C,A=new C;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],x),d(t[T+2],A),l(M,x,A,v)}function l(v,M,x,A){const T=A+1,R=[];for(let y=0;y<=T;y++){R[y]=[];const b=v.clone().lerp(x,y/T),U=M.clone().lerp(x,y/T),I=T-y;for(let D=0;D<=I;D++)D===0&&y===T?R[y][D]=b:R[y][D]=b.clone().lerp(U,D/I)}for(let y=0;y<T;y++)for(let b=0;b<2*(T-y)-1;b++){const U=Math.floor(b/2);b%2===0?(u(R[y][U+1]),u(R[y+1][U]),u(R[y][U])):(u(R[y][U+1]),u(R[y+1][U+1]),u(R[y+1][U]))}}function c(v){const M=new C;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(v),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function h(){const v=new C;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const x=g(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;n.push(x,1-A)}f(),p()}function p(){for(let v=0;v<n.length;v+=6){const M=n[v+0],x=n[v+2],A=n[v+4],T=Math.max(M,x,A),R=Math.min(M,x,A);T>.9&&R<.1&&(M<.2&&(n[v+0]+=1),x<.2&&(n[v+2]+=1),A<.2&&(n[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function f(){const v=new C,M=new C,x=new C,A=new C,T=new J,R=new J,y=new J;for(let b=0,U=0;b<s.length;b+=9,U+=6){v.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),T.set(n[U+0],n[U+1]),R.set(n[U+2],n[U+3]),y.set(n[U+4],n[U+5]),A.copy(v).add(M).add(x).divideScalar(3);const I=g(A);_(T,U+0,v,I),_(R,U+2,M,I),_(y,U+4,x,I)}}function _(v,M,x,A){A<0&&v.x===1&&(n[M]=v.x-1),x.x===0&&x.z===0&&(n[M]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.vertices,e.indices,e.radius,e.detail)}}class Ia extends pr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,n,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ia(e.radius,e.detail)}}const pn=new C,fn=new C,Dl=new C,mn=new Yt;class Hd extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Br*t),s=e.getIndex(),n=e.getAttribute("position"),o=s?s.count:n.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),p={},u=[];for(let d=0;d<o;d+=3){s?(l[0]=s.getX(d),l[1]=s.getX(d+1),l[2]=s.getX(d+2)):(l[0]=d,l[1]=d+1,l[2]=d+2);const{a:f,b:_,c:g}=mn;if(f.fromBufferAttribute(n,l[0]),_.fromBufferAttribute(n,l[1]),g.fromBufferAttribute(n,l[2]),mn.getNormal(Dl),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const v=(m+1)%3,M=h[m],x=h[v],A=mn[c[m]],T=mn[c[v]],R=`${M}_${x}`,y=`${x}_${M}`;y in p&&p[y]?(Dl.dot(p[y].normal)<=r&&(u.push(A.x,A.y,A.z),u.push(T.x,T.y,T.z)),p[y]=null):R in p||(p[R]={index0:l[m],index1:l[v],normal:Dl.clone()})}}for(const d in p)if(p[d]){const{index0:f,index1:_}=p[d];pn.fromBufferAttribute(n,f),fn.fromBufferAttribute(n,_),u.push(pn.x,pn.y,pn.z),u.push(fn.x,fn.y,fn.z)}this.setAttribute("position",new Se(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let n;t?n=t:n=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-n,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===n)return r/(s-1);const h=i[r],p=i[r+1]-h,u=(n-h)/p;return(r+u)/(s-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),n=this.getPoint(r),o=t||(s.isVector2?new J:new C);return o.copy(n).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,r=[],s=[],n=[],o=new C,l=new Ge;for(let d=0;d<=e;d++){const f=d/e;r[d]=this.getTangentAt(f,new C)}s[0]=new C,n[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),n[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),n[d]=n[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(ke(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,f))}n[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(ke(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],d*f)),n[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qo extends yi{constructor(e=0,t=0,i=1,r=1,s=0,n=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=n,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const n=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(n?s=0:s=r),this.aClockwise===!0&&!n&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gd extends qo{constructor(e,t,i,r,s,n){super(e,t,i,i,r,s,n),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let a=0,e=0,t=0,i=0;function r(s,n,o,l){a=s,e=o,t=-3*s+3*n-2*o-l,i=2*s-2*n+o+l}return{initCatmullRom:function(s,n,o,l,c){r(n,o,c*(o-s),c*(l-n))},initNonuniformCatmullRom:function(s,n,o,l,c,h,p){let u=(n-s)/c-(o-s)/(c+h)+(o-n)/h,d=(o-n)/h-(l-n)/(h+p)+(l-o)/p;u*=h,d*=h,r(n,o,u,d)},calc:function(s){const n=s*s,o=n*s;return a+e*s+t*n+i*o}}}const gn=new C,Fl=new Vc,Ol=new Vc,Bl=new Vc;class Wd extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,n=(s-(this.closed?0:1))*e;let o=Math.floor(n),l=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(gn.subVectors(r[0],r[1]).add(r[0]),c=gn);const p=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(gn.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=gn),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(p),d),_=Math.pow(p.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),Fl.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,f,_,g),Ol.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,f,_,g),Bl.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Ol.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Bl.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(Fl.calc(l),Ol.calc(l),Bl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(a,e,t,i,r){const s=(i-e)*.5,n=(r-t)*.5,o=a*a,l=a*o;return(2*t-2*i+s+n)*l+(-3*t+3*i-2*s-n)*o+s*a+t}function qm(a,e){const t=1-a;return t*t*e}function Ym(a,e){return 2*(1-a)*a*e}function Zm(a,e){return a*a*e}function oa(a,e,t,i){return qm(a,e)+Ym(a,t)+Zm(a,i)}function Jm(a,e){const t=1-a;return t*t*t*e}function Km(a,e){const t=1-a;return 3*t*t*a*e}function $m(a,e){return 3*(1-a)*a*a*e}function Qm(a,e){return a*a*a*e}function la(a,e,t,i,r){return Jm(a,e)+Km(a,t)+$m(a,i)+Qm(a,r)}class kc extends yi{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(la(e,r.x,s.x,n.x,o.x),la(e,r.y,s.y,n.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xd extends yi{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,n=this.v2,o=this.v3;return i.set(la(e,r.x,s.x,n.x,o.x),la(e,r.y,s.y,n.y,o.y),la(e,r.z,s.z,n.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hc extends yi{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends yi{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,s=this.v1,n=this.v2;return i.set(oa(e,r.x,s.x,n.x),oa(e,r.y,s.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wc extends yi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,n=this.v2;return i.set(oa(e,r.x,s.x,n.x),oa(e,r.y,s.y,n.y),oa(e,r.z,s.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xc extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,s=(r.length-1)*e,n=Math.floor(s),o=s-n,l=r[n===0?n:n-1],c=r[n],h=r[n>r.length-2?r.length-1:n+1],p=r[n>r.length-3?r.length-1:n+2];return i.set(Qh(o,l.x,c.x,h.x,p.x),Qh(o,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}var wo=Object.freeze({__proto__:null,ArcCurve:Gd,CatmullRomCurve3:Wd,CubicBezierCurve:kc,CubicBezierCurve3:Xd,EllipseCurve:qo,LineCurve:Hc,LineCurve3:jd,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Wc,SplineCurve:Xc});class qd extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const n=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-n/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const n=s[r],o=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,l=n.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new wo[r.type]().fromJSON(r))}return this}}class To extends qd{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hc(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Gc(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,n){const o=new kc(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(s,n));return this.curves.push(o),this.currentPoint.set(s,n),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Xc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,n){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,n),this}absarc(e,t,i,r,s,n){return this.absellipse(e,t,i,i,r,s,n),this}ellipse(e,t,i,r,s,n,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,n,o,l),this}absellipse(e,t,i,r,s,n,o,l){const c=new qo(e,t,i,r,s,n,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zr extends To{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new To().fromJSON(r))}return this}}function eg(a,e,t=2){const i=e&&e.length,r=i?e[0]*t:a.length;let s=Yd(a,0,r,t,!0);const n=[];if(!s||s.next===s.prev)return n;let o,l,c;if(i&&(s=ag(a,e,s,t)),a.length>80*t){o=a[0],l=a[1];let h=o,p=l;for(let u=t;u<r;u+=t){const d=a[u],f=a[u+1];d<o&&(o=d),f<l&&(l=f),d>h&&(h=d),f>p&&(p=f)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return va(s,n,t,o,l,c,0),n}function Yd(a,e,t,i,r){let s;if(r===gg(a,e,t,i)>0)for(let n=e;n<t;n+=i)s=eu(n/i|0,a[n],a[n+1],s);else for(let n=t-i;n>=e;n-=i)s=eu(n/i|0,a[n],a[n+1],s);return s&&Cs(s,s.next)&&(xa(s),s=s.next),s}function Xr(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&(Cs(t,t.next)||mt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function va(a,e,t,i,r,s,n){if(!a)return;!n&&s&&hg(a,i,r,s);let o=a;for(;a.prev!==a.next;){const l=a.prev,c=a.next;if(s?ig(a,i,r,s):tg(a)){e.push(l.i,a.i,c.i),xa(a),a=c.next,o=c.next;continue}if(a=c,a===o){n?n===1?(a=rg(Xr(a),e),va(a,e,t,i,r,s,2)):n===2&&sg(a,e,t,i,r,s):va(Xr(a),e,t,i,r,s,1);break}}}function tg(a){const e=a.prev,t=a,i=a.next;if(mt(e,t,i)>=0)return!1;const r=e.x,s=t.x,n=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,n),p=Math.min(o,l,c),u=Math.max(r,s,n),d=Math.max(o,l,c);let f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=p&&f.y<=d&&Js(r,o,s,l,n,c,f.x,f.y)&&mt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function ig(a,e,t,i){const r=a.prev,s=a,n=a.next;if(mt(r,s,n)>=0)return!1;const o=r.x,l=s.x,c=n.x,h=r.y,p=s.y,u=n.y,d=Math.min(o,l,c),f=Math.min(h,p,u),_=Math.max(o,l,c),g=Math.max(h,p,u),m=nc(d,f,e,t,i),v=nc(_,g,e,t,i);let M=a.prevZ,x=a.nextZ;for(;M&&M.z>=m&&x&&x.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=f&&M.y<=g&&M!==r&&M!==n&&Js(o,h,l,p,c,u,M.x,M.y)&&mt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=f&&x.y<=g&&x!==r&&x!==n&&Js(o,h,l,p,c,u,x.x,x.y)&&mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=f&&M.y<=g&&M!==r&&M!==n&&Js(o,h,l,p,c,u,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=f&&x.y<=g&&x!==r&&x!==n&&Js(o,h,l,p,c,u,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rg(a,e){let t=a;do{const i=t.prev,r=t.next.next;!Cs(i,r)&&Jd(i,t,t.next,r)&&ya(i,r)&&ya(r,i)&&(e.push(i.i,t.i,r.i),xa(t),xa(t.next),t=a=r),t=t.next}while(t!==a);return Xr(t)}function sg(a,e,t,i,r,s){let n=a;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&pg(n,o)){let l=Kd(n,o);n=Xr(n,n.next),l=Xr(l,l.next),va(n,e,t,i,r,s,0),va(l,e,t,i,r,s,0);return}o=o.next}n=n.next}while(n!==a)}function ag(a,e,t,i){const r=[];for(let s=0,n=e.length;s<n;s++){const o=e[s]*i,l=s<n-1?e[s+1]*i:a.length,c=Yd(a,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(dg(c))}r.sort(ng);for(let s=0;s<r.length;s++)t=og(r[s],t);return t}function ng(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){const i=(a.next.y-a.y)/(a.next.x-a.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function og(a,e){const t=lg(a,e);if(!t)return e;const i=Kd(t,a);return Xr(i,i.next),Xr(t,t.next)}function lg(a,e){let t=e;const i=a.x,r=a.y;let s=-1/0,n;if(Cs(a,t))return t;do{if(Cs(a,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>s&&(s=p,n=t.x<t.next.x?t:t.next,p===i))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0;t=n;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Zd(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const p=Math.abs(r-t.y)/(i-t.x);ya(t,a)&&(p<h||p===h&&(t.x>n.x||t.x===n.x&&cg(n,t)))&&(n=t,h=p)}t=t.next}while(t!==o);return n}function cg(a,e){return mt(a.prev,a,e.prev)<0&&mt(e.next,a,a.next)<0}function hg(a,e,t,i){let r=a;do r.z===0&&(r.z=nc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,ug(r)}function ug(a){let e,t=1;do{let i=a,r;a=null;let s=null;for(e=0;i;){e++;let n=i,o=0;for(let c=0;c<t&&(o++,n=n.nextZ,!!n);c++);let l=t;for(;o>0||l>0&&n;)o!==0&&(l===0||!n||i.z<=n.z)?(r=i,i=i.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:a=r,r.prevZ=s,s=r;i=n}s.nextZ=null,t*=2}while(e>1);return a}function nc(a,e,t,i,r){return a=(a-t)*r|0,e=(e-i)*r|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function dg(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Zd(a,e,t,i,r,s,n,o){return(r-n)*(e-o)>=(a-n)*(s-o)&&(a-n)*(i-o)>=(t-n)*(e-o)&&(t-n)*(s-o)>=(r-n)*(i-o)}function Js(a,e,t,i,r,s,n,o){return!(a===n&&e===o)&&Zd(a,e,t,i,r,s,n,o)}function pg(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!fg(a,e)&&(ya(a,e)&&ya(e,a)&&mg(a,e)&&(mt(a.prev,a,e.prev)||mt(a,e.prev,e))||Cs(a,e)&&mt(a.prev,a,a.next)>0&&mt(e.prev,e,e.next)>0)}function mt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Cs(a,e){return a.x===e.x&&a.y===e.y}function Jd(a,e,t,i){const r=vn(mt(a,e,t)),s=vn(mt(a,e,i)),n=vn(mt(t,i,a)),o=vn(mt(t,i,e));return!!(r!==s&&n!==o||r===0&&_n(a,t,e)||s===0&&_n(a,i,e)||n===0&&_n(t,a,i)||o===0&&_n(t,e,i))}function _n(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function vn(a){return a>0?1:a<0?-1:0}function fg(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Jd(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function ya(a,e){return mt(a.prev,a,a.next)<0?mt(a,e,a.next)>=0&&mt(a,a.prev,e)>=0:mt(a,e,a.prev)<0||mt(a,a.next,e)<0}function mg(a,e){let t=a,i=!1;const r=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function Kd(a,e){const t=oc(a.i,a.x,a.y),i=oc(e.i,e.x,e.y),r=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function eu(a,e,t,i){const r=oc(a,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xa(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function oc(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gg(a,e,t,i){let r=0;for(let s=e,n=t-i;s<t;s+=i)r+=(a[n]-a[s])*(a[s+1]+a[n+1]),n=s;return r}class _g{static triangulate(e,t,i=2){return eg(e,t,i)}}class gi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return gi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];tu(e),iu(i,e);let n=e.length;t.forEach(tu);for(let l=0;l<t.length;l++)r.push(n),n+=t[l].length,iu(i,t[l]);const o=_g.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function tu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function iu(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Yo extends je{constructor(e=new zr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];n(c)}this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals();function n(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:vg;let M,x=!1,A,T,R,y;if(m){M=m.getSpacedPoints(h),x=!0,u=!1;const K=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,K),T=new C,R=new C,y=new C}u||(g=0,d=0,f=0,_=0);const b=o.extractPoints(c);let U=b.shape;const I=b.holes;if(!gi.isClockWise(U)){U=U.reverse();for(let K=0,$=I.length;K<$;K++){const ae=I[K];gi.isClockWise(ae)&&(I[K]=ae.reverse())}}function D(K){const $=10000000000000001e-36;let ae=K[0];for(let me=1;me<=K.length;me++){const _e=me%K.length,P=K[_e],Le=P.x-ae.x,Ue=P.y-ae.y,Ve=Le*Le+Ue*Ue,ue=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(ae.x),Math.abs(ae.y)),E=$*ue*ue;if(Ve<=E){K.splice(_e,1),me--;continue}ae=P}}D(U),I.forEach(D);const O=I.length,z=U;for(let K=0;K<O;K++){const $=I[K];U=U.concat($)}function k(K,$,ae){return $||Pe("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector($,ae)}const V=U.length;function H(K,$,ae){let me,_e,P;const Le=K.x-$.x,Ue=K.y-$.y,Ve=ae.x-K.x,ue=ae.y-K.y,E=Le*Le+Ue*Ue,S=Le*ue-Ue*Ve;if(Math.abs(S)>Number.EPSILON){const L=Math.sqrt(E),j=Math.sqrt(Ve*Ve+ue*ue),Z=$.x-Ue/L,q=$.y+Le/L,Ce=ae.x-ue/j,he=ae.y+Ve/j,Ne=((Ce-Z)*ue-(he-q)*Ve)/(Le*ue-Ue*Ve);me=Z+Le*Ne-K.x,_e=q+Ue*Ne-K.y;const Ie=me*me+_e*_e;if(Ie<=2)return new J(me,_e);P=Math.sqrt(Ie/2)}else{let L=!1;Le>Number.EPSILON?Ve>Number.EPSILON&&(L=!0):Le<-Number.EPSILON?Ve<-Number.EPSILON&&(L=!0):Math.sign(Ue)===Math.sign(ue)&&(L=!0),L?(me=-Ue,_e=Le,P=Math.sqrt(E)):(me=Le,_e=Ue,P=Math.sqrt(E/2))}return new J(me/P,_e/P)}const te=[];for(let K=0,$=z.length,ae=$-1,me=K+1;K<$;K++,ae++,me++)ae===$&&(ae=0),me===$&&(me=0),te[K]=H(z[K],z[ae],z[me]);const Q=[];let ce,Me=te.concat();for(let K=0,$=O;K<$;K++){const ae=I[K];ce=[];for(let me=0,_e=ae.length,P=_e-1,Le=me+1;me<_e;me++,P++,Le++)P===_e&&(P=0),Le===_e&&(Le=0),ce[me]=H(ae[me],ae[P],ae[Le]);Q.push(ce),Me=Me.concat(ce)}let be;if(g===0)be=gi.triangulateShape(z,I);else{const K=[],$=[];for(let ae=0;ae<g;ae++){const me=ae/g,_e=d*Math.cos(me*Math.PI/2),P=f*Math.sin(me*Math.PI/2)+_;for(let Le=0,Ue=z.length;Le<Ue;Le++){const Ve=k(z[Le],te[Le],P);se(Ve.x,Ve.y,-_e),me===0&&K.push(Ve)}for(let Le=0,Ue=O;Le<Ue;Le++){const Ve=I[Le];ce=Q[Le];const ue=[];for(let E=0,S=Ve.length;E<S;E++){const L=k(Ve[E],ce[E],P);se(L.x,L.y,-_e),me===0&&ue.push(L)}me===0&&$.push(ue)}}be=gi.triangulateShape(K,$)}const Xe=be.length,ot=f+_;for(let K=0;K<V;K++){const $=u?k(U[K],Me[K],ot):U[K];x?(R.copy(A.normals[0]).multiplyScalar($.x),T.copy(A.binormals[0]).multiplyScalar($.y),y.copy(M[0]).add(R).add(T),se(y.x,y.y,y.z)):se($.x,$.y,0)}for(let K=1;K<=h;K++)for(let $=0;$<V;$++){const ae=u?k(U[$],Me[$],ot):U[$];x?(R.copy(A.normals[K]).multiplyScalar(ae.x),T.copy(A.binormals[K]).multiplyScalar(ae.y),y.copy(M[K]).add(R).add(T),se(y.x,y.y,y.z)):se(ae.x,ae.y,p/h*K)}for(let K=g-1;K>=0;K--){const $=K/g,ae=d*Math.cos($*Math.PI/2),me=f*Math.sin($*Math.PI/2)+_;for(let _e=0,P=z.length;_e<P;_e++){const Le=k(z[_e],te[_e],me);se(Le.x,Le.y,p+ae)}for(let _e=0,P=I.length;_e<P;_e++){const Le=I[_e];ce=Q[_e];for(let Ue=0,Ve=Le.length;Ue<Ve;Ue++){const ue=k(Le[Ue],ce[Ue],me);x?se(ue.x,ue.y+M[h-1].y,M[h-1].x+ae):se(ue.x,ue.y,p+ae)}}}lt(),Y();function lt(){const K=r.length/3;if(u){let $=0,ae=V*$;for(let me=0;me<Xe;me++){const _e=be[me];We(_e[2]+ae,_e[1]+ae,_e[0]+ae)}$=h+g*2,ae=V*$;for(let me=0;me<Xe;me++){const _e=be[me];We(_e[0]+ae,_e[1]+ae,_e[2]+ae)}}else{for(let $=0;$<Xe;$++){const ae=be[$];We(ae[2],ae[1],ae[0])}for(let $=0;$<Xe;$++){const ae=be[$];We(ae[0]+V*h,ae[1]+V*h,ae[2]+V*h)}}i.addGroup(K,r.length/3-K,0)}function Y(){const K=r.length/3;let $=0;re(z,$),$+=z.length;for(let ae=0,me=I.length;ae<me;ae++){const _e=I[ae];re(_e,$),$+=_e.length}i.addGroup(K,r.length/3-K,1)}function re(K,$){let ae=K.length;for(;--ae>=0;){const me=ae;let _e=ae-1;_e<0&&(_e=K.length-1);for(let P=0,Le=h+g*2;P<Le;P++){const Ue=V*P,Ve=V*(P+1),ue=$+me+Ue,E=$+_e+Ue,S=$+_e+Ve,L=$+me+Ve;Be(ue,E,S,L)}}}function se(K,$,ae){l.push(K),l.push($),l.push(ae)}function We(K,$,ae){ve(K),ve($),ve(ae);const me=r.length/3,_e=v.generateTopUV(i,r,me-3,me-2,me-1);$e(_e[0]),$e(_e[1]),$e(_e[2])}function Be(K,$,ae,me){ve(K),ve($),ve(me),ve($),ve(ae),ve(me);const _e=r.length/3,P=v.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);$e(P[0]),$e(P[1]),$e(P[3]),$e(P[1]),$e(P[2]),$e(P[3])}function ve(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function $e(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return yg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,n=e.shapes.length;s<n;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wo[r.type]().fromJSON(r)),new Yo(i,e.options)}}const vg={generateTopUV:function(a,e,t,i,r){const s=e[t*3],n=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new J(s,n),new J(o,l),new J(c,h)]},generateSideWallUV:function(a,e,t,i,r,s){const n=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],p=e[i*3+2],u=e[r*3],d=e[r*3+1],f=e[r*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(n-c)?[new J(n,1-l),new J(c,1-p),new J(u,1-f),new J(_,1-m)]:[new J(o,1-l),new J(h,1-p),new J(d,1-f),new J(g,1-m)]}};function yg(a,e,t){if(t.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const s=a[i];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zo extends pr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zo(e.radius,e.detail)}}class Jo extends je{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ke(r,0,Math.PI*2);const s=[],n=[],o=[],l=[],c=[],h=1/t,p=new C,u=new J,d=new C,f=new C,_=new C;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,f.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(f)}for(let v=0;v<=t;v++){const M=i+v*h*r,x=Math.sin(M),A=Math.cos(M);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*x,p.y=e[T].y,p.z=e[T].x*A,n.push(p.x,p.y,p.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);const R=l[3*T+0]*x,y=l[3*T+1],b=l[3*T+0]*A;c.push(R,y,b)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const x=M+v*e.length,A=x,T=x+e.length,R=x+e.length+1,y=x+1;s.push(A,T,y),s.push(R,y,T)}this.setIndex(s),this.setAttribute("position",new Se(n,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.points,e.segments,e.phiStart,e.phiLength)}}class Pa extends pr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pa(e.radius,e.detail)}}class qr extends je{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,n=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,u=t/l,d=[],f=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*u-n;for(let M=0;M<c;M++){const x=M*p-s;f.push(x,-v,0),_.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const M=v+c*m,x=v+c*(m+1),A=v+1+c*(m+1),T=v+1+c*m;d.push(M,x,T),d.push(x,A,T)}this.setIndex(d),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class La extends je{constructor(e=.5,t=1,i=32,r=1,s=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:n},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let p=e;const u=(t-e)/r,d=new C,f=new J;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const m=s+g/i*n;d.x=p*Math.cos(m),d.y=p*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}p+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let m=0;m<i;m++){const v=m+g,M=v,x=v+i+1,A=v+i+2,T=v+1;o.push(M,x,T),o.push(x,A,T)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ko extends je{constructor(e=new zr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],n=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(n,2));function c(h){const p=r.length/3,u=h.extractPoints(t);let d=u.shape;const f=u.holes;gi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=f.length;g<m;g++){const v=f[g];gi.isClockWise(v)===!0&&(f[g]=v.reverse())}const _=gi.triangulateShape(d,f);for(let g=0,m=f.length;g<m;g++){const v=f[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){const v=d[g];r.push(v.x,v.y,0),s.push(0,0,1),n.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],M=v[0]+p,x=v[1]+p,A=v[2]+p;i.push(M,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xg(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const n=t[e.shapes[r]];i.push(n)}return new Ko(i,e.curveSegments)}}function xg(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,i=a.length;t<i;t++){const r=a[t];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e}class Ri extends je{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:n,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(n+o,Math.PI);let c=0;const h=[],p=new C,u=new C,d=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){const v=[],M=m/i;let x=0;m===0&&n===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const T=A/t;p.x=-e*Math.cos(r+T*s)*Math.sin(n+M*o),p.y=e*Math.cos(n+M*o),p.z=e*Math.sin(r+T*s)*Math.sin(n+M*o),f.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),g.push(T+x,1-M),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const M=h[m][v+1],x=h[m][v],A=h[m+1][v],T=h[m+1][v+1];(m!==0||n>0)&&d.push(M,x,T),(m!==i-1||l<Math.PI)&&d.push(x,A,T)}this.setIndex(d),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $o extends pr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $o(e.radius,e.detail)}}class Qo extends je{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,n=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:n,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],p=[],u=new C,d=new C,f=new C;for(let _=0;_<=i;_++){const g=n+_/i*o;for(let m=0;m<=r;m++){const v=m/r*s;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),h.push(f.x,f.y,f.z),p.push(m/r),p.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=r;g++){const m=(r+1)*_+g-1,v=(r+1)*(_-1)+g-1,M=(r+1)*(_-1)+g,x=(r+1)*_+g;l.push(m,v,x),l.push(v,M,x)}this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class el extends je{constructor(e=1,t=.4,i=64,r=8,s=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:n},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],p=new C,u=new C,d=new C,f=new C,_=new C,g=new C,m=new C;for(let M=0;M<=i;++M){const x=M/i*s*Math.PI*2;v(x,s,n,e,d),v(x+.01,s,n,e,f),g.subVectors(f,d),m.addVectors(f,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let A=0;A<=r;++A){const T=A/r*Math.PI*2,R=-t*Math.cos(T),y=t*Math.sin(T);p.x=d.x+(R*m.x+y*_.x),p.y=d.y+(R*m.y+y*_.y),p.z=d.z+(R*m.z+y*_.z),l.push(p.x,p.y,p.z),u.subVectors(p,d).normalize(),c.push(u.x,u.y,u.z),h.push(M/i),h.push(A/r)}}for(let M=1;M<=i;M++)for(let x=1;x<=r;x++){const A=(r+1)*(M-1)+(x-1),T=(r+1)*M+(x-1),R=(r+1)*M+x,y=(r+1)*(M-1)+x;o.push(A,T,y),o.push(T,R,y)}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2));function v(M,x,A,T,R){const y=Math.cos(M),b=Math.sin(M),U=A/x*M,I=Math.cos(U);R.x=T*(2+I)*.5*y,R.y=T*(2+I)*b*.5,R.z=T*Math.sin(U)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class tl extends je{constructor(e=new Wc(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const n=e.computeFrenetFrames(t,s);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;const o=new C,l=new C,c=new J;let h=new C;const p=[],u=[],d=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(d,2));function _(){for(let M=0;M<t;M++)g(M);g(s===!1?t:0),v(),m()}function g(M){h=e.getPointAt(M/t,h);const x=n.normals[M],A=n.binormals[M];for(let T=0;T<=r;T++){const R=T/r*Math.PI*2,y=Math.sin(R),b=-Math.cos(R);l.x=b*x.x+y*A.x,l.y=b*x.y+y*A.y,l.z=b*x.z+y*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=t;M++)for(let x=1;x<=r;x++){const A=(r+1)*(M-1)+(x-1),T=(r+1)*M+(x-1),R=(r+1)*M+x,y=(r+1)*(M-1)+x;f.push(A,T,y),f.push(T,R,y)}}function v(){for(let M=0;M<=t;M++)for(let x=0;x<=r;x++)c.x=M/t,c.y=x/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tl(new wo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $d extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new C,s=new C;if(e.index!==null){const n=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const p=l[c],u=p.start,d=p.count;for(let f=u,_=u+d;f<_;f+=3)for(let g=0;g<3;g++){const m=o.getX(f+g),v=o.getX(f+(g+1)%3);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),ru(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const n=e.attributes.position;for(let o=0,l=n.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,p=3*o+(c+1)%3;r.fromBufferAttribute(n,h),s.fromBufferAttribute(n,p),ru(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ru(a,e,t){const i=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var su=Object.freeze({__proto__:null,BoxGeometry:jr,CapsuleGeometry:jo,CircleGeometry:Ra,ConeGeometry:lr,CylinderGeometry:Ci,DodecahedronGeometry:Ia,EdgesGeometry:Hd,ExtrudeGeometry:Yo,IcosahedronGeometry:Zo,LatheGeometry:Jo,OctahedronGeometry:Pa,PlaneGeometry:qr,PolyhedronGeometry:pr,RingGeometry:La,ShapeGeometry:Ko,SphereGeometry:Ri,TetrahedronGeometry:$o,TorusGeometry:Qo,TorusKnotGeometry:el,TubeGeometry:tl,WireframeGeometry:$d});class Qd extends Dt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Rs(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(a){const e={};for(let t=0;t<a.length;t++){const i=Rs(a[t]);for(const r in i)e[r]=i[r]}return e}function Mg(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ep(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const tp={clone:Rs,merge:Ot};var Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jc extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qc extends Dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ip extends qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rp extends Dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sp extends Dt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ap extends Dt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class oi extends Dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yc extends Dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zc extends Dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class np extends Dt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class op extends Gt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Fr(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function lp(a){function e(r,s){return a[r]-a[s]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function lc(a,e,t){const i=a.length,r=new a.constructor(i);for(let s=0,n=0;n!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[n++]=a[o+l]}return r}function Jc(a,e,t,i){let r=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[r++];if(s===void 0)return;let n=s[i];if(n!==void 0)if(Array.isArray(n))do n=s[i],n!==void 0&&(e.push(s.time),t.push(...n)),s=a[r++];while(s!==void 0);else if(n.toArray!==void 0)do n=s[i],n!==void 0&&(e.push(s.time),n.toArray(t,t.length)),s=a[r++];while(s!==void 0);else do n=s[i],n!==void 0&&(e.push(s.time),t.push(n)),s=a[r++];while(s!==void 0)}function wg(a,e,t,i,r=30){const s=a.clone();s.name=e;const n=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),p=[],u=[];for(let d=0;d<c.times.length;++d){const f=c.times[d]*r;if(!(f<t||f>=i)){p.push(c.times[d]);for(let _=0;_<h;++_)u.push(c.values[d*h+_])}}p.length!==0&&(c.times=Fr(p,c.times.constructor),c.values=Fr(u,c.values.constructor),n.push(c))}s.tracks=n;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function Tg(a,e=0,t=a,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let n=0;n<r;++n){const o=t.tracks[n],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const p=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=p/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const f=o.times.length-1;let _;if(s<=o.times[0]){const m=h,v=p-h;_=o.values.slice(m,v)}else if(s>=o.times[f]){const m=f*p+h,v=m+p-h;_=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,M=p-h;m.evaluate(s),_=m.resultBuffer.slice(v,M)}l==="quaternion"&&new Ht().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const v=m*d+u;if(l==="quaternion")Ht.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{const M=d-u*2;for(let x=0;x<M;++x)c.values[v+x]-=_[x]}}}return a.blendMode=Ic,a}class Ag{static convertArray(e,t){return Fr(e,t)}static isTypedArray(e){return Ed(e)}static getKeyframeOrder(e){return lp(e)}static sortedArray(e,t,i){return lc(e,t,i)}static flattenJSON(e,t,i,r){Jc(e,t,i,r)}static subclip(e,t,i,r,s=30){return wg(e,t,i,r,s)}static makeClipAdditive(e,t=0,i=e,r=30){return Tg(e,t,i,r)}}class Ns{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}n=i,i=0;break i}break e}for(;i<n;){const o=i+n>>>1;e<t[o]?n=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let n=0;n!==r;++n)t[n]=i[s+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cp extends Ns{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ur,endingEnd:Ur}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,n=e+1,o=r[s],l=r[n];if(o===void 0)switch(this.getSettings_().endingStart){case Dr:s=e,o=2*t-i;break;case da:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dr:n=e,l=2*i-t;break;case da:n=1,l=i+r[1]-r[0];break;default:n=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=n*h}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(i-t)/(r-t),_=f*f,g=_*f,m=-u*g+2*u*_-u*f,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*f+1,M=(-1-d)*g+(1.5+d)*_+.5*f,x=d*g-d*_;for(let A=0;A!==o;++A)s[A]=m*n[h+A]+v*n[c+A]+M*n[l+A]+x*n[p+A];return s}}class Kc extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),p=1-h;for(let u=0;u!==o;++u)s[u]=n[c+u]*p+n[l+u]*h;return s}}class hp extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class up extends Ns{interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,p=h.inTangents,u=h.outTangents;if(!p||!u){const _=(i-t)/(r-t),g=1-_;for(let m=0;m!==o;++m)s[m]=n[c+m]*g+n[l+m]*_;return s}const d=o*2,f=e-1;for(let _=0;_!==o;++_){const g=n[c+_],m=n[l+_],v=f*d+_*2,M=u[v],x=u[v+1],A=e*d+_*2,T=p[A],R=p[A+1];let y=(i-t)/(r-t),b,U,I,D,O;for(let z=0;z<8;z++){b=y*y,U=b*y,I=1-y,D=I*I,O=D*I;const k=O*t+3*D*y*M+3*I*b*T+U*r-i;if(Math.abs(k)<1e-10)break;const V=3*D*(M-t)+6*I*y*(T-M)+3*b*(r-T);if(Math.abs(V)<1e-10)break;y=y-k/V,y=Math.max(0,Math.min(1,y))}s[_]=O*g+3*D*y*x+3*I*b*R+U*m}return s}}class hi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new up(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case In:t=this.InterpolantFactoryMethodSmooth;break;case ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return In;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,n=r-1;for(;s!==r&&i[s]<e;)++s;for(;n!==-1&&i[n]>t;)--n;if(++n,s!==0||n!==r){s>=n&&(n=Math.max(n,1),s=n-1);const o=this.getValueSize();this.times=i.slice(s,n),this.values=this.values.slice(s*o,n*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(n!==null&&n>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,n),e=!1;break}n=l}if(r!==void 0&&Ed(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===In,s=e.length-1;let n=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const p=o*i,u=p-i,d=p+i;for(let f=0;f!==i;++f){const _=t[p+f];if(_!==t[u+f]||_!==t[d+f]){l=!0;break}}}if(l){if(o!==n){e[n]=e[o];const p=o*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[p+d]}++n}}if(s>0){e[n]=e[s];for(let o=s*i,l=n*i,c=0;c!==i;++c)t[l+c]=t[o+c];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Mo;class Yr extends hi{constructor(e,t,i){super(e,t,i)}}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=ua;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class $c extends hi{constructor(e,t,i,r){super(e,t,i,r)}}$c.prototype.ValueTypeName="color";class Ma extends hi{constructor(e,t,i,r){super(e,t,i,r)}}Ma.prototype.ValueTypeName="number";class dp extends Ns{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ht.slerpFlat(s,0,n,c-o,n,c,l);return s}}class Na extends hi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}}Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends hi{constructor(e,t,i){super(e,t,i)}}Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=ua;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends hi{constructor(e,t,i,r){super(e,t,i,r)}}Sa.prototype.ValueTypeName="vector";class ba{constructor(e="",t=-1,i=[],r=Do){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,o=i.length;n!==o;++n)t.push(Cg(i[n]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,n=i.length;s!==n;++s)t.push(hi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,n=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=lp(l);l=lc(l,1,h),c=lc(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),n.push(new Ma(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const p=h[1];let u=r[p];u||(r[p]=u=[]),u.push(c)}}const n=[];for(const o in r)n.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return n}static parseAnimation(e,t){if(pe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,p,u,d,f){if(u.length!==0){const _=[],g=[];Jc(u,_,g,d),_.length!==0&&f.push(new h(p,_,g))}},r=[],s=e.name||"default",n=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const p=c[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const u={};let d;for(d=0;d<p.length;d++)if(p[d].morphTargets)for(let f=0;f<p[d].morphTargets.length;f++)u[p[d].morphTargets[f]]=-1;for(const f in u){const _=[],g=[];for(let m=0;m!==p[d].morphTargets.length;++m){const v=p[d];_.push(v.time),g.push(v.morphTarget===f?1:0)}r.push(new Ma(".morphTargetInfluence["+f+"]",_,g))}l=u.length*n}else{const u=".bones["+t[h].name+"]";i(Sa,u+".position",p,"pos",r),i(Na,u+".quaternion",p,"rot",r),i(Sa,u+".scale",p,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Eg(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return $c;case"quaternion":return Na;case"bool":case"boolean":return Yr;case"string":return Zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Cg(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eg(a.type);if(a.times===void 0){const t=[],i=[];Jc(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ai={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(au(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!au(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function au(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Qc{constructor(e,t,i){const r=this;let s=!1,n=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,n,o),s=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,o),n===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){const d=c[p],f=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pp=new Qc;class Jt{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jt.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class Rg extends Error{constructor(e,t){super(e),this.response=t}}class Yi extends Jt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ai.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:r});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:r});const n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(n).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Hi[e],p=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,f=d!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){p.read().then(({done:M,value:x})=>{if(M)m.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:d});for(let T=0,R=h.length;T<R;T++){const y=h[T];y.onProgress&&y.onProgress(A)}m.enqueue(x),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Rg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(p);return c.arrayBuffer().then(d=>u.decode(d))}}}).then(c=>{Ai.add(`file:${e}`,c);const h=Hi[e];delete Hi[e];for(let p=0,u=h.length;p<u;p++){const d=h[p];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let p=0,u=h.length;p<u;p++){const d=h[p];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ig extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Yi(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),s.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=ba.parse(e[i]);t.push(r)}return t}}class Pg extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=[],o=new Xo,l=new Yi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(p){l.load(e[p],function(u){const d=s.parse(u,!0);n[p]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=pt),o.image=n,o.format=d.format,o.needsUpdate=!0,t&&t(o))},i,r)}if(Array.isArray(e))for(let p=0,u=e.length;p<u;++p)h(p);else l.load(e,function(p){const u=s.parse(p,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let f=0;f<d;f++){n[f]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)n[f].mipmaps.push(u.mipmaps[f*u.mipmapCount+_]),n[f].format=u.format,n[f].width=u.width,n[f].height=u.height}o.image=n}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=pt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,r);return o}}const ps=new WeakMap;class wa extends Jt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=Ai.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0);else{let p=ps.get(n);p===void 0&&(p=[],ps.set(n,p)),p.push({onLoad:t,onError:r})}return n}const o=ma("img");function l(){h(),t&&t(this);const p=ps.get(this)||[];for(let u=0;u<p.length;u++){const d=p[u];d.onLoad&&d.onLoad(this)}ps.delete(this),s.manager.itemEnd(e)}function c(p){h(),r&&r(p),Ai.remove(`image:${e}`);const u=ps.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onError&&f.onError(p)}ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Lg extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=new Ca;s.colorSpace=jt;const n=new wa(this.manager);n.setCrossOrigin(this.crossOrigin),n.setPath(this.path);let o=0;function l(c){n.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Ng extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new vi,o=new Yi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(r!==void 0)r(h);else{h(h);return}}c.image!==void 0?n.image=c.image:c.data!==void 0&&(n.image.width=c.width,n.image.height=c.height,n.image.data=c.data),n.wrapS=c.wrapS!==void 0?c.wrapS:Zt,n.wrapT=c.wrapT!==void 0?c.wrapT:Zt,n.magFilter=c.magFilter!==void 0?c.magFilter:pt,n.minFilter=c.minFilter!==void 0?c.minFilter:pt,n.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(n.colorSpace=c.colorSpace),c.flipY!==void 0&&(n.flipY=c.flipY),c.format!==void 0&&(n.format=c.format),c.type!==void 0&&(n.type=c.type),c.mipmaps!==void 0&&(n.mipmaps=c.mipmaps,n.minFilter=Ti),c.mipmapCount===1&&(n.minFilter=pt),c.generateMipmaps!==void 0&&(n.generateMipmaps=c.generateMipmaps),n.needsUpdate=!0,t&&t(n,c)},i,r),n}}class Ug extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=new vt,n=new wa(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fr extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fp extends fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const zl=new Ge,nu=new C,ou=new C;class eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Gr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yn=new C,xn=new Ht,bi=new C;class il extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yn,xn,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yn,xn,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yn,xn,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yn,xn,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new C,lu=new J,cu=new J;class Ct extends il{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,i,r,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;s+=n.offsetX*r/l,t-=n.offsetY*i/c,r*=n.width/l,i*=n.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Dg extends eh{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ts*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mp extends fr{constructor(e,t,i=0,r=Math.PI/3,s=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=n,this.map=null,this.shadow=new Dg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Fg extends eh{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}}class gp extends fr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ua extends il{constructor(e=-1,t=1,i=1,r=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,n=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,n=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,n,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Og extends eh{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Og}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class th extends fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _p extends fr{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ih{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.282095),t.addScaledVector(n[1],.488603*r),t.addScaledVector(n[2],.488603*s),t.addScaledVector(n[3],.488603*i),t.addScaledVector(n[4],1.092548*(i*r)),t.addScaledVector(n[5],1.092548*(r*s)),t.addScaledVector(n[6],.315392*(3*s*s-1)),t.addScaledVector(n[7],1.092548*(i*s)),t.addScaledVector(n[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,n=this.coefficients;return t.copy(n[0]).multiplyScalar(.886227),t.addScaledVector(n[1],2*.511664*r),t.addScaledVector(n[2],2*.511664*s),t.addScaledVector(n[3],2*.511664*i),t.addScaledVector(n[4],2*.429043*i*r),t.addScaledVector(n[5],2*.429043*r*s),t.addScaledVector(n[6],.743125*s*s-.247708),t.addScaledVector(n[7],2*.429043*i*s),t.addScaledVector(n[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class vp extends fr{constructor(e=new ih,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class rl extends Jt{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,n=new Yi(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&pe("MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(r.allowOverride=e.allowOverride),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const n=e.uniforms[s];switch(r.uniforms[s]={},n.type){case"t":r.uniforms[s].value=i(n.value);break;case"c":r.uniforms[s].value=new ye().setHex(n.value);break;case"v2":r.uniforms[s].value=new J().fromArray(n.value);break;case"v3":r.uniforms[s].value=new C().fromArray(n.value);break;case"v4":r.uniforms[s].value=new ut().fromArray(n.value);break;case"m3":r.uniforms[s].value=new qe().fromArray(n.value);break;case"m4":r.uniforms[s].value=new Ge().fromArray(n.value);break;default:r.uniforms[s].value=n.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return rl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Qd,SpriteMaterial:Fc,RawShaderMaterial:jc,ShaderMaterial:ci,PointsMaterial:Bc,MeshPhysicalMaterial:ip,MeshStandardMaterial:qc,MeshPhongMaterial:rp,MeshToonMaterial:sp,MeshNormalMaterial:ap,MeshLambertMaterial:oi,MeshDepthMaterial:Yc,MeshDistanceMaterial:Zc,MeshBasicMaterial:ri,MeshMatcapMaterial:np,LineDashedMaterial:op,LineBasicMaterial:Gt,Material:Dt};return new t[e]}}class cc{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yp extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class xp extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Yi(s.manager);n.setPath(s.path),n.setRequestHeader(s.requestHeader),n.setWithCredentials(s.withCredentials),n.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(u,d){if(t[d]!==void 0)return t[d];const f=u.interleavedBuffers[d],_=s(u,f.buffer),g=Ms(f.type,_),m=new Ho(g,f.stride);return m.uuid=f.uuid,t[d]=m,m}function s(u,d){if(i[d]!==void 0)return i[d];const f=u.arrayBuffers[d],_=new Uint32Array(f).buffer;return i[d]=_,_}const n=e.isInstancedBufferGeometry?new yp:new je,o=e.data.index;if(o!==void 0){const u=Ms(o.type,o.array);n.setIndex(new nt(u,1))}const l=e.data.attributes;for(const u in l){const d=l[u];let f;if(d.isInterleavedBufferAttribute){const _=r(e.data,d.data);f=new Wr(_,d.itemSize,d.offset,d.normalized)}else{const _=Ms(d.type,d.array),g=d.isInstancedBufferAttribute?As:nt;f=new g(_,d.itemSize,d.normalized)}d.name!==void 0&&(f.name=d.name),d.usage!==void 0&&f.setUsage(d.usage),n.setAttribute(u,f)}const c=e.data.morphAttributes;if(c)for(const u in c){const d=c[u],f=[];for(let _=0,g=d.length;_<g;_++){const m=d[_];let v;if(m.isInterleavedBufferAttribute){const M=r(e.data,m.data);v=new Wr(M,m.itemSize,m.offset,m.normalized)}else{const M=Ms(m.type,m.array);v=new nt(M,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),f.push(v)}n.morphAttributes[u]=f}e.data.morphTargetsRelative&&(n.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,d=h.length;u!==d;++u){const f=h[u];n.addGroup(f.start,f.count,f.materialIndex)}const p=e.data.boundingSphere;return p!==void 0&&(n.boundingSphere=new It().fromJSON(p)),e.name&&(n.name=e.name),e.userData&&(n.userData=e.userData),n}}class Bg extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=this.path===""?cc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const o=new Yi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(p){r!==void 0&&r(p),p("ObjectLoader: Can't parse "+e+".",p.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}s.parse(c,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?cc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new Yi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const n=await s.loadAsync(e,t);let o;try{o=JSON.parse(n)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),n=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,n),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let p=!1;for(const u in n)if(n[u].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),n=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,n),l=this.parseObject(e.object,r,o,n,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new zr().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,n=e.length;s<n;s++){const o=new Go().fromJSON(e[s],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new xp;for(let s=0,n=e.length;s<n;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in su?o=su[l.type].fromJSON(l,t):pe(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new rl;s.setTextures(t);for(let n=0,o=e.length;n<o;n++){const l=e[n];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=ba.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function n(l){return i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return n(h)}else return l.data?{data:Ms(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Qc(t);s=new wa(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const p=e[c],u=p.url;if(Array.isArray(u)){const d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new vi(m.data,m.width,m.height)))}r[p.uuid]=new nr(d)}else{const d=o(p.url);r[p.uuid]=new nr(d)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function s(n){if(typeof n=="string"){const o=n,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return n.data?{data:Ms(n.type,n.data),width:n.width,height:n.height}:null}if(e!==void 0&&e.length>0){r=new wa(this.manager),r.setCrossOrigin(this.crossOrigin);for(let n=0,o=e.length;n<o;n++){const l=e[n],c=l.url;if(Array.isArray(c)){const h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p],f=await s(d);f!==null&&(f instanceof HTMLImageElement?h.push(f):h.push(new vi(f.data,f.width,f.height)))}i[l.uuid]=new nr(h)}else{const h=await s(l.url);i[l.uuid]=new nr(h)}}}return i}parseTextures(e,t){function i(s,n){return typeof s=="number"?s:(pe("ObjectLoader.parseTexture: Constant should be in numeric form.",s),n[s])}const r={};if(e!==void 0)for(let s=0,n=e.length;s<n;s++){const o=e[s];o.image===void 0&&pe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&pe("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Ca,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new vi:h=new vt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,zg)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],hu),h.wrapT=i(o.wrap[1],hu)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,uu)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,uu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),r[o.uuid]=h}return r}parseObject(e,t,i,r,s){let n;function o(u){return t[u]===void 0&&pe("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let f=0,_=u.length;f<_;f++){const g=u[f];i[g]===void 0&&pe("ObjectLoader: Undefined material",g),d.push(i[g])}return d}return i[u]===void 0&&pe("ObjectLoader: Undefined material",u),i[u]}}function c(u){return r[u]===void 0&&pe("ObjectLoader: Undefined texture",u),r[u]}let h,p;switch(e.type){case"Scene":n=new Nc,e.background!==void 0&&(Number.isInteger(e.background)?n.background=new ye(e.background):n.background=c(e.background)),e.environment!==void 0&&(n.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?n.fog=new Ea(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(n.fog=new ko(e.fog.color,e.fog.density)),e.fog.name!==""&&(n.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(n.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(n.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&n.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(n.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&n.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":n=new Ct(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(n.focus=e.focus),e.zoom!==void 0&&(n.zoom=e.zoom),e.filmGauge!==void 0&&(n.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(n.filmOffset=e.filmOffset),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"OrthographicCamera":n=new Ua(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(n.zoom=e.zoom),e.view!==void 0&&(n.view=Object.assign({},e.view));break;case"AmbientLight":n=new th(e.color,e.intensity);break;case"DirectionalLight":n=new Ao(e.color,e.intensity),n.target=e.target||"";break;case"PointLight":n=new gp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":n=new _p(e.color,e.intensity,e.width,e.height);break;case"SpotLight":n=new mp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),n.target=e.target||"";break;case"HemisphereLight":n=new fp(e.color,e.groundColor,e.intensity);break;case"LightProbe":const u=new ih().fromArray(e.sh);n=new vp(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),p=l(e.material),n=new Dd(h,p),e.bindMode!==void 0&&(n.bindMode=e.bindMode),e.bindMatrix!==void 0&&n.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(n.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),p=l(e.material),n=new Ke(h,p);break;case"InstancedMesh":h=o(e.geometry),p=l(e.material);const d=e.count,f=e.instanceMatrix,_=e.instanceColor;n=new Fd(h,p,d),n.instanceMatrix=new As(new Float32Array(f.array),16),_!==void 0&&(n.instanceColor=new As(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),p=l(e.material),n=new Od(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),n.geometry=h,n.perObjectFrustumCulled=e.perObjectFrustumCulled,n.sortObjects=e.sortObjects,n._drawRanges=e.drawRanges,n._reservedRanges=e.reservedRanges,n._geometryInfo=e.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new Ut().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new It().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),n._instanceInfo=e.instanceInfo,n._availableInstanceIds=e._availableInstanceIds,n._availableGeometryIds=e._availableGeometryIds,n._nextIndexStart=e.nextIndexStart,n._nextVertexStart=e.nextVertexStart,n._geometryCount=e.geometryCount,n._maxInstanceCount=e.maxInstanceCount,n._maxVertexCount=e.maxVertexCount,n._maxIndexCount=e.maxIndexCount,n._geometryInitialized=e.geometryInitialized,n._matricesTexture=c(e.matricesTexture.uuid),n._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(n._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(n.boundingSphere=new It().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(n.boundingBox=new Ut().fromJSON(e.boundingBox));break;case"LOD":n=new Ud;break;case"Line":n=new ur(o(e.geometry),l(e.material));break;case"LineLoop":n=new Bd(o(e.geometry),l(e.material));break;case"LineSegments":n=new Ui(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":n=new zd(o(e.geometry),l(e.material));break;case"Sprite":n=new Nd(l(e.material));break;case"Group":n=new Xi;break;case"Bone":n=new Oc;break;default:n=new rt}if(n.uuid=e.uuid,e.name!==void 0&&(n.name=e.name),e.matrix!==void 0?(n.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(n.matrixAutoUpdate=e.matrixAutoUpdate),n.matrixAutoUpdate&&n.matrix.decompose(n.position,n.quaternion,n.scale)):(e.position!==void 0&&n.position.fromArray(e.position),e.rotation!==void 0&&n.rotation.fromArray(e.rotation),e.quaternion!==void 0&&n.quaternion.fromArray(e.quaternion),e.scale!==void 0&&n.scale.fromArray(e.scale)),e.up!==void 0&&n.up.fromArray(e.up),e.pivot!==void 0&&(n.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(n.castShadow=e.castShadow),e.receiveShadow!==void 0&&(n.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(n.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(n.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(n.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(n.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&n.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(n.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(n.visible=e.visible),e.frustumCulled!==void 0&&(n.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(n.renderOrder=e.renderOrder),e.static!==void 0&&(n.static=e.static),e.userData!==void 0&&(n.userData=e.userData),e.layers!==void 0&&(n.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)n.add(this.parseObject(u[d],t,i,r,s))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const f=u[d];n.animations.push(s[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(n.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const f=u[d],_=n.getObjectByProperty("uuid",f.object);_!==void 0&&n.addLevel(_,f.distance,f.hysteresis)}}return n}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?pe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,r=e.getObjectByProperty("uuid",i);r!==void 0?t.target=r:t.target=new rt}})}}const zg={UVMapping:Co,CubeReflectionMapping:Ii,CubeRefractionMapping:cr,EquirectangularReflectionMapping:Qs,EquirectangularRefractionMapping:ea,CubeUVReflectionMapping:Is},hu={RepeatWrapping:ca,ClampToEdgeWrapping:Zt,MirroredRepeatWrapping:ha},uu={NearestFilter:Mt,NearestMipmapNearestFilter:bc,NearestMipmapLinearFilter:xs,LinearFilter:pt,LinearMipmapNearestFilter:ta,LinearMipmapLinearFilter:Ti},Vl=new WeakMap;class Vg extends Jt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=Ai.get(`image-bitmap:${e}`);if(n!==void 0){if(s.manager.itemStart(e),n.then){n.then(c=>{if(Vl.has(n)===!0)r&&r(Vl.get(n)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Vl.set(l,c),Ai.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Mn;class rh{static getContext(){return Mn===void 0&&(Mn=new(window.AudioContext||window.webkitAudioContext)),Mn}static setContext(e){Mn=e}}class kg extends Jt{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new Yi(this.manager);n.setResponseType("arraybuffer"),n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(l){try{const c=l.slice(0);rh.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):Pe(l),s.manager.itemError(e)}}}const du=new Ge,pu=new Ge,wr=new Ge;class Hg{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ct,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ct,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,wr.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,s=t.near*Math.tan(Br*t.fov*.5)/t.zoom;let n,o;pu.elements[12]=-i,du.elements[12]=i,n=-s*t.aspect+r,o=s*t.aspect+r,wr.elements[0]=2*t.near/(o-n),wr.elements[8]=(o+n)/(o-n),this.cameraL.projectionMatrix.copy(wr),n=-s*t.aspect-r,o=s*t.aspect-r,wr.elements[0]=2*t.near/(o-n),wr.elements[8]=(o+n)/(o-n),this.cameraR.projectionMatrix.copy(wr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(pu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(du)}}const fs=-90,ms=1;class Mp extends rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(fs,ms,e,t);r.layers=this.layers,this.add(r);const s=new Ct(fs,ms,e,t);s.layers=this.layers,this.add(s);const n=new Ct(fs,ms,e,t);n.layers=this.layers,this.add(n);const o=new Ct(fs,ms,e,t);o.layers=this.layers,this.add(o);const l=new Ct(fs,ms,e,t);l.layers=this.layers,this.add(l);const c=new Ct(fs,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,n,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,n,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Sp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Gg(){this._document.hidden===!1&&this.reset()}const Tr=new C,kl=new Ht,Wg=new C,Ar=new C,Er=new C;class Xg extends rt{constructor(){super(),this.type="AudioListener",this.context=rh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new bp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Tr,kl,Wg),Ar.set(0,0,-1).applyQuaternion(kl),Er.set(0,1,0).applyQuaternion(kl),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Tr.x,i),t.positionY.linearRampToValueAtTime(Tr.y,i),t.positionZ.linearRampToValueAtTime(Tr.z,i),t.forwardX.linearRampToValueAtTime(Ar.x,i),t.forwardY.linearRampToValueAtTime(Ar.y,i),t.forwardZ.linearRampToValueAtTime(Ar.z,i),t.upX.linearRampToValueAtTime(Er.x,i),t.upY.linearRampToValueAtTime(Er.y,i),t.upZ.linearRampToValueAtTime(Er.z,i)}else t.setPosition(Tr.x,Tr.y,Tr.z),t.setOrientation(Ar.x,Ar.y,Ar.z,Er.x,Er.y,Er.z)}}class wp extends rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){pe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(pe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){pe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(pe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Cr=new C,fu=new Ht,jg=new C,Rr=new C;class qg extends wp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cr,fu,jg),Rr.set(0,0,1).applyQuaternion(fu);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cr.x,i),t.positionY.linearRampToValueAtTime(Cr.y,i),t.positionZ.linearRampToValueAtTime(Cr.z,i),t.orientationX.linearRampToValueAtTime(Rr.x,i),t.orientationY.linearRampToValueAtTime(Rr.y,i),t.orientationZ.linearRampToValueAtTime(Rr.z,i)}else t.setPosition(Cr.x,Cr.y,Cr.z),t.setOrientation(Rr.x,Rr.y,Rr.z)}}class Yg{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Tp{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,n;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,n=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,n=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,n=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=n,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let n=this.cumulativeWeight;if(n===0){for(let o=0;o!==r;++o)i[s+o]=i[o];n=t}else{n+=t;const o=t/n;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=n}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,n=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}n>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,n=r;s!==n;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let n=0;n!==s;++n)e[t+n]=e[i+n]}_slerp(e,t,i,r){Ht.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const n=this._workIndex*s;Ht.multiplyQuaternionsFlat(e,n,e,t,e,i),Ht.slerpFlat(e,t,e,t,e,n,r)}_lerp(e,t,i,r,s){const n=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*n+e[i+o]*r}}_lerpAdditive(e,t,i,r,s){for(let n=0;n!==s;++n){const o=t+n;e[o]=e[o]+e[i+n]*r}}}const sh="\\[\\]\\.:\\/",Zg=new RegExp("["+sh+"]","g"),ah="[^"+sh+"]",Jg="[^"+sh.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",ah),$g=/(WCOD+)?/.source.replace("WCOD",Jg),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),t_=new RegExp("^"+Kg+$g+Qg+e_+"$"),i_=["material","materials","bones","map"];class r_{constructor(e,t,i){const r=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(e){const t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);i_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let n=0;n<s.length;n++){const o=s[n];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const n=e[r];if(n===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=r_;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class s_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ti(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,n=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,p=arguments.length;h!==p;++h){const u=arguments[h],d=u.uuid;let f=t[d];if(f===void 0){f=l++,t[d]=f,e.push(u);for(let _=0,g=n;_!==g;++_)s[_].push(new it(u,i[_],r[_]))}else if(f<c){o=e[f];const _=--c,g=e[_];t[g.uuid]=f,e[f]=g,t[d]=_,e[_]=u;for(let m=0,v=n;m!==v;++m){const M=s[m],x=M[_];let A=M[f];M[f]=x,A===void 0&&(A=new it(u,i[m],r[m])),M[_]=A}}else e[f]!==o&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_;for(let n=0,o=arguments.length;n!==o;++n){const l=arguments[n],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const p=s++,u=e[p];t[u.uuid]=h,e[h]=u,t[c]=p,e[p]=l;for(let d=0,f=r;d!==f;++d){const _=i[d],g=_[p],m=_[h];_[h]=g,_[p]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_,n=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,p=t[h];if(p!==void 0)if(delete t[h],p<s){const u=--s,d=e[u],f=--n,_=e[f];t[d.uuid]=p,e[p]=d,t[_.uuid]=u,e[u]=_,e.pop();for(let g=0,m=r;g!==m;++g){const v=i[g],M=v[u],x=v[f];v[p]=M,v[u]=x,v.pop()}}else{const u=--n,d=e[u];u>0&&(t[d.uuid]=p),e[p]=d,e.pop();for(let f=0,_=r;f!==_;++f){const g=i[f];g[p]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const s=this._bindings;if(r!==void 0)return s[r];const n=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,p=new Array(c);r=s.length,i[e]=r,n.push(e),o.push(t),s.push(p);for(let u=h,d=l.length;u!==d;++u){const f=l[u];p[u]=new it(f,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,s=this._parsedPaths,n=this._bindings,o=n.length-1,l=n[o],c=e[o];t[c]=i,n[i]=l,n.pop(),s[i]=s[o],s.pop(),r[i]=r[o],r.pop()}}}class Ap{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,n=s.length,o=new Array(n),l={endingStart:Ur,endingEnd:Ur};for(let c=0;c!==n;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(n),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_d,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const r=this._clip.duration,s=e._clip.duration,n=s/r,o=r/s;e.warp(1,n,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,n=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/n,c[1]=t/n,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const n=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ic:for(let h=0,p=l.length;h!==p;++h)l[h].evaluate(n),c[h].accumulateAdditive(o);break;case Do:default:for(let h=0,p=l.length;h!==p;++h)l[h].evaluate(n),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const n=i===vd;if(e===0)return s===-1?r:n&&(s&1)===1?t-r:r;if(i===gd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,n)):this._setEndings(this.repetitions===0,!0,n)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,n)}else this._setEndings(!1,!1,n);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(n&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Dr,r.endingEnd=Dr):(e?r.endingStart=this.zeroSlopeAtStart?Dr:Ur:r.endingStart=da,t?r.endingEnd=this.zeroSlopeAtEnd?Dr:Ur:r.endingEnd=da)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let n=this._weightInterpolant;n===null&&(n=r._lendControlInterpolant(),this._weightInterpolant=n);const o=n.parameterPositions,l=n.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const a_=new Float32Array(1);class n_ extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,n=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let p=0;p!==s;++p){const u=r[p],d=u.name;let f=h[d];if(f!==void 0)++f.referenceCount,n[p]=f;else{if(f=n[p],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,d));continue}const _=t&&t._propertyBindings[p].binding.parsedPath;f=new Tp(it.create(i,d,_),u.ValueTypeName,u.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,d),n[p]=f}o[p].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let n=s[t];if(n===void 0)n={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=n;else{const o=n.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),n.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,n=this._actionsByClip,o=n[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const p=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete p[u],l.length===0&&delete n[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let n=r[t];n===void 0&&(n={},r[t]=n),n[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,n=this._bindingsByRootAndName,o=n[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete n[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Kc(new Float32Array(2),new Float32Array(2),1,a_),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let n=typeof e=="string"?ba.findByName(r,e):e;const o=n!==null?n.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(n!==null?i=n.blendMode:i=Do),l!==void 0){const p=l.actionByRoot[s];if(p!==void 0&&p.blendMode===i)return p;c=l.knownActions[0],n===null&&(n=c._clip)}if(n===null)return null;const h=new Ap(this,n,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?ba.findByName(i,e):e,n=s?s.uuid:e,o=this._actionsByClip[n];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),n=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,n);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(n);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const n=s.knownActions;for(let o=0,l=n.length;o!==l;++o){const c=n[o];this._deactivateAction(c);const h=c._cacheIndex,p=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,p._cacheIndex=h,t[h]=p,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const n in i){const o=i[n].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const n in s){const o=s[n];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class o_ extends Lc{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=i,this.texture=new zo(null,e,t,i),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class nh{constructor(e){this.value=e}clone(){return new nh(this.value.clone===void 0?this.value:this.value.clone())}}let l_=0;class c_ extends Ni{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:l_++}),this.name="",this.usage=fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++){const s=Array.isArray(t[i])?t[i]:[t[i]];for(let n=0;n<s.length;n++)this.uniforms.push(s[n].clone())}return this}clone(){return new this.constructor().copy(this)}}class h_ extends Ho{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class u_{constructor(e,t,i,r,s,n=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.normalized=n,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const mu=new Ge;class d_{constructor(e,t,i=0,r=1/0){this.ray=new Ps(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,i=[]){return hc(e,this,i,t),i.sort(gu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hc(e[r],this,i,t);return i.sort(gu),i}}function gu(a,e){return a.distance-e.distance}function hc(a,e,t,i){let r=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=a.children;for(let n=0,o=s.length;n<o;n++)hc(s[n],e,t,!0)}}class p_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class f_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class m_{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class oh{constructor(e,t,i,r){oh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}const _u=new J;class g_{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_u.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_u).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vu=new C,Sn=new C,gs=new C,_s=new C,Hl=new C,__=new C,v_=new C;class y_{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vu.subVectors(e,this.start),Sn.subVectors(this.end,this.start);const i=Sn.dot(Sn);let r=Sn.dot(vu)/i;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=__,i=v_){const r=10000000000000001e-32;let s,n;const o=this.start,l=e.start,c=this.end,h=e.end;gs.subVectors(c,o),_s.subVectors(h,l),Hl.subVectors(o,l);const p=gs.dot(gs),u=_s.dot(_s),d=_s.dot(Hl);if(p<=r&&u<=r)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(p<=r)s=0,n=d/u,n=ke(n,0,1);else{const f=gs.dot(Hl);if(u<=r)n=0,s=ke(-f/p,0,1);else{const _=gs.dot(_s),g=p*u-_*_;g!==0?s=ke((_*d-f*u)/g,0,1):s=0,n=(_*s+d)/u,n<0?(n=0,s=ke(-f/p,0,1)):n>1&&(n=1,s=ke((_-f)/p,0,1))}}return t.copy(o).addScaledVector(gs,s),i.copy(l).addScaledVector(_s,n),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const yu=new C;class x_ extends rt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new je,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let n=0,o=1,l=32;n<l;n++,o++){const c=n/l*Math.PI*2,h=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Se(r,3));const s=new Gt({fog:!1,toneMapped:!1});this.cone=new Ui(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),yu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(yu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ir=new C,bn=new Ge,Gl=new Ge;class M_ extends Ui{constructor(e){const t=Ep(e),i=new je,r=[],s=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}i.setAttribute("position",new Se(r,3)),i.setAttribute("color",new Se(s,3));const n=new Gt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,n),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new ye(255),l=new ye(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");Gl.copy(this.root.matrixWorld).invert();for(let s=0,n=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(bn.multiplyMatrices(Gl,o.matrixWorld),ir.setFromMatrixPosition(bn),r.setXYZ(n,ir.x,ir.y,ir.z),bn.multiplyMatrices(Gl,o.parent.matrixWorld),ir.setFromMatrixPosition(bn),r.setXYZ(n+1,ir.x,ir.y,ir.z),n+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ep(a){const e=[];a.isBone===!0&&e.push(a);for(let t=0;t<a.children.length;t++)e.push(...Ep(a.children[t]));return e}class S_ extends Ke{constructor(e,t,i){const r=new Ri(t,4,2),s=new ri({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const b_=new C,xu=new ye,Mu=new ye;class w_ extends rt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new Pa(t);r.rotateY(Math.PI*.5),this.material=new ri({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),n=new Float32Array(s.count*3);r.setAttribute("color",new nt(n,3)),this.add(new Ke(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");xu.copy(this.light.color),Mu.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const s=i<r/2?xu:Mu;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(b_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class T_ extends Ui{constructor(e=10,t=10,i=4473924,r=8947848){i=new ye(i),r=new ye(r);const s=t/2,n=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,f=-o;u<=t;u++,f+=n){l.push(-o,0,f,o,0,f),l.push(f,0,-o,f,0,o);const _=u===s?i:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new je;h.setAttribute("position",new Se(l,3)),h.setAttribute("color",new Se(c,3));const p=new Gt({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class A_ extends Ui{constructor(e=10,t=16,i=8,r=64,s=4473924,n=8947848){s=new ye(s),n=new ye(n);const o=[],l=[];if(t>1)for(let p=0;p<t;p++){const u=p/t*(Math.PI*2),d=Math.sin(u)*e,f=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,f);const _=p&1?s:n;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let p=0;p<i;p++){const u=p&1?s:n,d=e-e/i*p;for(let f=0;f<r;f++){let _=f/r*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;o.push(g,0,m),l.push(u.r,u.g,u.b),_=(f+1)/r*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new je;c.setAttribute("position",new Se(o,3)),c.setAttribute("color",new Se(l,3));const h=new Gt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Su=new C,wn=new C,bu=new C;class E_ extends rt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new je;r.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Gt({fog:!1,toneMapped:!1});this.lightPlane=new ur(r,s),this.add(this.lightPlane),r=new je,r.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new ur(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Su.setFromMatrixPosition(this.light.matrixWorld),wn.setFromMatrixPosition(this.light.target.matrixWorld),bu.subVectors(wn,Su),this.lightPlane.lookAt(wn),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wn),this.targetLine.scale.z=bu.length()}}const Tn=new C,_t=new il;class C_ extends Ui{constructor(e){const t=new je,i=new Gt({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],n={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(f,_){l(f),l(_)}function l(f){r.push(0,0,0),s.push(0,0,0),n[f]===void 0&&(n[f]=[]),n[f].push(r.length/3-1)}t.setAttribute("position",new Se(r,3)),t.setAttribute("color",new Se(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=n,this.update();const c=new ye(16755200),h=new ye(16711680),p=new ye(43775),u=new ye(16777215),d=new ye(3355443);this.setColors(c,h,p,u,d)}setColors(e,t,i,r,s){const n=this.geometry.getAttribute("color");return n.setXYZ(0,e.r,e.g,e.b),n.setXYZ(1,e.r,e.g,e.b),n.setXYZ(2,e.r,e.g,e.b),n.setXYZ(3,e.r,e.g,e.b),n.setXYZ(4,e.r,e.g,e.b),n.setXYZ(5,e.r,e.g,e.b),n.setXYZ(6,e.r,e.g,e.b),n.setXYZ(7,e.r,e.g,e.b),n.setXYZ(8,e.r,e.g,e.b),n.setXYZ(9,e.r,e.g,e.b),n.setXYZ(10,e.r,e.g,e.b),n.setXYZ(11,e.r,e.g,e.b),n.setXYZ(12,e.r,e.g,e.b),n.setXYZ(13,e.r,e.g,e.b),n.setXYZ(14,e.r,e.g,e.b),n.setXYZ(15,e.r,e.g,e.b),n.setXYZ(16,e.r,e.g,e.b),n.setXYZ(17,e.r,e.g,e.b),n.setXYZ(18,e.r,e.g,e.b),n.setXYZ(19,e.r,e.g,e.b),n.setXYZ(20,e.r,e.g,e.b),n.setXYZ(21,e.r,e.g,e.b),n.setXYZ(22,e.r,e.g,e.b),n.setXYZ(23,e.r,e.g,e.b),n.setXYZ(24,t.r,t.g,t.b),n.setXYZ(25,t.r,t.g,t.b),n.setXYZ(26,t.r,t.g,t.b),n.setXYZ(27,t.r,t.g,t.b),n.setXYZ(28,t.r,t.g,t.b),n.setXYZ(29,t.r,t.g,t.b),n.setXYZ(30,t.r,t.g,t.b),n.setXYZ(31,t.r,t.g,t.b),n.setXYZ(32,i.r,i.g,i.b),n.setXYZ(33,i.r,i.g,i.b),n.setXYZ(34,i.r,i.g,i.b),n.setXYZ(35,i.r,i.g,i.b),n.setXYZ(36,i.r,i.g,i.b),n.setXYZ(37,i.r,i.g,i.b),n.setXYZ(38,r.r,r.g,r.b),n.setXYZ(39,r.r,r.g,r.b),n.setXYZ(40,s.r,s.g,s.b),n.setXYZ(41,s.r,s.g,s.b),n.setXYZ(42,s.r,s.g,s.b),n.setXYZ(43,s.r,s.g,s.b),n.setXYZ(44,s.r,s.g,s.b),n.setXYZ(45,s.r,s.g,s.b),n.setXYZ(46,s.r,s.g,s.b),n.setXYZ(47,s.r,s.g,s.b),n.setXYZ(48,s.r,s.g,s.b),n.setXYZ(49,s.r,s.g,s.b),n.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;let s,n;if(_t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,n=0;else if(this.camera.coordinateSystem===ei)s=-1,n=1;else if(this.camera.coordinateSystem===Gr)s=0,n=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);xt("c",t,e,_t,0,0,s),xt("t",t,e,_t,0,0,n),xt("n1",t,e,_t,-i,-r,s),xt("n2",t,e,_t,i,-r,s),xt("n3",t,e,_t,-i,r,s),xt("n4",t,e,_t,i,r,s),xt("f1",t,e,_t,-i,-r,n),xt("f2",t,e,_t,i,-r,n),xt("f3",t,e,_t,-i,r,n),xt("f4",t,e,_t,i,r,n),xt("u1",t,e,_t,i*.7,r*1.1,s),xt("u2",t,e,_t,-i*.7,r*1.1,s),xt("u3",t,e,_t,0,r*2,s),xt("cf1",t,e,_t,-i,0,n),xt("cf2",t,e,_t,i,0,n),xt("cf3",t,e,_t,0,-r,n),xt("cf4",t,e,_t,0,r,n),xt("cn1",t,e,_t,-i,0,s),xt("cn2",t,e,_t,i,0,s),xt("cn3",t,e,_t,0,-r,s),xt("cn4",t,e,_t,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function xt(a,e,t,i,r,s,n){Tn.set(r,s,n).unproject(i);const o=e[a];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Tn.x,Tn.y,Tn.z)}}const An=new Ut;class R_ extends Ui{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new je;s.setIndex(new nt(i,1)),s.setAttribute("position",new nt(r,3)),super(s,new Gt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&An.setFromObject(this.object),An.isEmpty())return;const e=An.min,t=An.max,i=this.geometry.attributes.position,r=i.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class I_ extends Ui{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new je;s.setIndex(new nt(i,1)),s.setAttribute("position",new Se(r,3)),super(s,new Gt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class P_ extends ur{constructor(e,t=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],n=new je;n.setAttribute("position",new Se(s,3)),n.computeBoundingSphere(),super(n,new Gt({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new je;l.setAttribute("position",new Se(o,3)),l.computeBoundingSphere(),this.add(new Ke(l,new ri({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const wu=new C;let En,Wl;class L_ extends rt{constructor(e=new C(0,0,1),t=new C(0,0,0),i=1,r=16776960,s=i*.2,n=s*.2){super(),this.type="ArrowHelper",En===void 0&&(En=new je,En.setAttribute("position",new Se([0,0,0,0,1,0],3)),Wl=new lr(.5,1,5,1),Wl.translate(0,-.5,0)),this.position.copy(t),this.line=new ur(En,new Gt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ke(Wl,new ri({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,n)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{wu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(wu,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class N_ extends Ui{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new je;r.setAttribute("position",new Se(t,3)),r.setAttribute("color",new Se(i,3));const s=new Gt({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class U_{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new To,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,n){return this.currentPath.bezierCurveTo(e,t,i,r,s,n),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const v=[];for(let M=0,x=m.length;M<x;M++){const A=m[M],T=new zr;T.curves=A.curves,v.push(T)}return v}function i(m,v){const M=v.length;let x=!1;for(let A=M-1,T=0;T<M;A=T++){let R=v[A],y=v[T],b=y.x-R.x,U=y.y-R.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(R=v[T],b=-b,y=v[A],U=-U),m.y<R.y||m.y>y.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const I=U*(m.x-R.x)-b*(m.y-R.y);if(I===0)return!0;if(I<0)continue;x=!x}}else{if(m.y!==R.y)continue;if(y.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=y.x)return!0}}return x}const r=gi.isClockWise,s=this.subPaths;if(s.length===0)return[];let n,o,l;const c=[];if(s.length===1)return o=s[0],l=new zr,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;const p=[],u=[];let d=[],f=0,_;u[f]=void 0,d[f]=[];for(let m=0,v=s.length;m<v;m++)o=s[m],_=o.getPoints(),n=r(_),n=e?!n:n,n?(!h&&u[f]&&f++,u[f]={s:new zr,p:_},u[f].s.curves=o.curves,h&&f++,d[f]=[]):d[f].push({h:o,p:_[0]});if(!u[0])return t(s);if(u.length>1){let m=!1,v=0;for(let M=0,x=u.length;M<x;M++)p[M]=[];for(let M=0,x=u.length;M<x;M++){const A=d[M];for(let T=0;T<A.length;T++){const R=A[T];let y=!0;for(let b=0;b<u.length;b++)i(R.p,u[b].p)&&(M!==b&&v++,y?(y=!1,p[b].push(R)):m=!0);y&&p[M].push(R)}}v>0&&m===!1&&(d=p)}let g;for(let m=0,v=u.length;m<v;m++){l=u[m].s,c.push(l),g=d[m];for(let M=0,x=g.length;M<x;M++)l.holes.push(g[M].h)}return c}}class D_ extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function F_(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2):(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0),a}function O_(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0):(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2),a}function B_(a){return a.repeat.x=1,a.repeat.y=1,a.offset.x=0,a.offset.y=0,a}function uc(a,e,t,i){const r=z_(i);switch(t){case Cc:return a*e;case Lo:return a*e/r.components*r.byteLength;case Aa:return a*e/r.components*r.byteLength;case kr:return a*e*2/r.components*r.byteLength;case No:return a*e*2/r.components*r.byteLength;case Rc:return a*e*3/r.components*r.byteLength;case Vt:return a*e*4/r.components*r.byteLength;case Uo:return a*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sa:case aa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gn:case Xn:return Math.max(a,16)*Math.max(e,8)/4;case Hn:case Wn:return Math.max(a,8)*Math.max(e,8)/2;case jn:case qn:case Zn:case Jn:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Yn:case Kn:case $n:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qn:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ro:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case fo:case mo:case go:return Math.ceil(a/4)*Math.ceil(e/4)*16;case _o:case vo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case yo:case xo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z_(a){switch(a){case qt:case wc:return{byteLength:1,components:1};case bs:case Tc:case Pi:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case li:case Ro:case zt:return{byteLength:4,components:1};case Ac:case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}class V_{static contain(e,t){return F_(e,t)}static cover(e,t){return O_(e,t)}static fill(e){return B_(e)}static getByteLength(e,t,i,r){return uc(e,t,i,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Cp(){let a=null,e=!1,t=null,i=null;function r(s,n){t(s,n),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function k_(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(a.bindBuffer(c,o),p.length===0)a.bufferSubData(c,0,h);else{p.sort((d,f)=>d.start-f.start);let u=0;for(let d=1;d<p.length;d++){const f=p[u],_=p[d];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,p[u]=_)}p.length=u+1;for(let d=0,f=p.length;d<f;d++){const _=p[d];a.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:n}}var H_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
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
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tv=`#ifdef USE_IRIDESCENCE
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
#endif`,iv=`#ifdef USE_BUMPMAP
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uv=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pv=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
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
#endif`,Vv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,kv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
void main () {
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#define LAMBERT
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
}`,sy=`#define LAMBERT
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
}`,ay=`#define MATCAP
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
}`,ny=`#define MATCAP
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
}`,oy=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,uy=`#define STANDARD
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
}`,dy=`#define STANDARD
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
}`,py=`#define TOON
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
}`,fy=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,yy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:H_,alphahash_pars_fragment:G_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:j_,alphatest_pars_fragment:q_,aomap_fragment:Y_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:K_,begin_vertex:$_,beginnormal_vertex:Q_,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:iv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:sv,clipping_planes_pars_vertex:av,clipping_planes_vertex:nv,color_fragment:ov,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:hv,common:uv,cube_uv_reflection_fragment:dv,defaultnormal_vertex:pv,displacementmap_pars_vertex:fv,displacementmap_vertex:mv,emissivemap_fragment:gv,emissivemap_pars_fragment:_v,colorspace_fragment:vv,colorspace_pars_fragment:yv,envmap_fragment:xv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:Sv,envmap_pars_vertex:bv,envmap_physical_pars_fragment:Uv,envmap_vertex:wv,fog_vertex:Tv,fog_pars_vertex:Av,fog_fragment:Ev,fog_pars_fragment:Cv,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Nv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Ov,lights_phong_pars_fragment:Bv,lights_physical_fragment:zv,lights_physical_pars_fragment:Vv,lights_fragment_begin:kv,lights_fragment_maps:Hv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:qv,map_fragment:Yv,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Qv,morphinstance_vertex:e0,morphcolor_vertex:t0,morphnormal_vertex:i0,morphtarget_pars_vertex:r0,morphtarget_vertex:s0,normal_fragment_begin:a0,normal_fragment_maps:n0,normal_pars_fragment:o0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:f0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:v0,dithering_fragment:y0,dithering_pars_fragment:x0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:E0,skinning_pars_vertex:C0,skinning_vertex:R0,skinnormal_vertex:I0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:D0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:V0,background_vert:k0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:j0,depth_vert:q0,depth_frag:Y0,distance_vert:Z0,distance_frag:J0,equirect_vert:K0,equirect_frag:$0,linedashed_vert:Q0,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:iy,meshlambert_vert:ry,meshlambert_frag:sy,meshmatcap_vert:ay,meshmatcap_frag:ny,meshnormal_vert:oy,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:hy,meshphysical_vert:uy,meshphysical_frag:dy,meshtoon_vert:py,meshtoon_frag:fy,points_vert:my,points_frag:gy,shadow_vert:_y,shadow_frag:vy,sprite_vert:yy,sprite_frag:xy},fe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},mi={basic:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ot([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ot([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ot([fe.points,fe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ot([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ot([fe.common,fe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ot([fe.sprite,fe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Ot([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Ot([fe.lights,fe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mi.physical={uniforms:Ot([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Cn={r:0,b:0,g:0},Ir=new si,My=new Ge;function Sy(a,e,t,i,r,s){const n=new ye(0);let o=r===!0?0:1,l,c,h=null,p=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=e.get(M,x)}return M}function f(v){let M=!1;const x=d(v);x===null?g(n,o):x&&x.isColor&&(g(x,1),M=!0);const A=a.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(v,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Is)?(c===void 0&&(c=new Ke(new jr(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Rs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ir.copy(M.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(Ir)),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==st,(h!==x||p!==x.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,u=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ke(new qr(2,2),new ci({name:"BackgroundMaterial",uniforms:Rs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,u=a.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(Cn,ep(a)),t.buffers.color.setClear(Cn.r,Cn.g,Cn.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return n},setClearColor:function(v,M=1){n.set(v),o=M,g(n,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(n,o)},render:f,addToRenderList:_,dispose:m}}function by(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,n=!1;function o(I,D,O,z,k){let V=!1;const H=p(I,z,O,D);s!==H&&(s=H,c(s.object)),V=d(I,z,O,k),V&&f(I,z,O,k),k!==null&&e.update(k,a.ELEMENT_ARRAY_BUFFER),(V||n)&&(n=!1,x(I,D,O,z),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return a.createVertexArray()}function c(I){return a.bindVertexArray(I)}function h(I){return a.deleteVertexArray(I)}function p(I,D,O,z){const k=z.wireframe===!0;let V=i[D.id];V===void 0&&(V={},i[D.id]=V);const H=I.isInstancedMesh===!0?I.id:0;let te=V[H];te===void 0&&(te={},V[H]=te);let Q=te[O.id];Q===void 0&&(Q={},te[O.id]=Q);let ce=Q[k];return ce===void 0&&(ce=u(l()),Q[k]=ce),ce}function u(I){const D=[],O=[],z=[];for(let k=0;k<t;k++)D[k]=0,O[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:I,attributes:{},index:null}}function d(I,D,O,z){const k=s.attributes,V=D.attributes;let H=0;const te=O.getAttributes();for(const Q in te)if(te[Q].location>=0){const ce=k[Q];let Me=V[Q];if(Me===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),ce===void 0||ce.attribute!==Me||Me&&ce.data!==Me.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function f(I,D,O,z){const k={},V=D.attributes;let H=0;const te=O.getAttributes();for(const Q in te)if(te[Q].location>=0){let ce=V[Q];ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));const Me={};Me.attribute=ce,ce&&ce.data&&(Me.data=ce.data),k[Q]=Me,H++}s.attributes=k,s.attributesNum=H,s.index=z}function _(){const I=s.newAttributes;for(let D=0,O=I.length;D<O;D++)I[D]=0}function g(I){m(I,0)}function m(I,D){const O=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;O[I]=1,z[I]===0&&(a.enableVertexAttribArray(I),z[I]=1),k[I]!==D&&(a.vertexAttribDivisor(I,D),k[I]=D)}function v(){const I=s.newAttributes,D=s.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==I[O]&&(a.disableVertexAttribArray(O),D[O]=0)}function M(I,D,O,z,k,V,H){H===!0?a.vertexAttribIPointer(I,D,O,k,V):a.vertexAttribPointer(I,D,O,z,k,V)}function x(I,D,O,z){_();const k=z.attributes,V=O.getAttributes(),H=D.defaultAttributeValues;for(const te in V){const Q=V[te];if(Q.location>=0){let ce=k[te];if(ce===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),ce!==void 0){const Me=ce.normalized,be=ce.itemSize,Xe=e.get(ce);if(Xe===void 0)continue;const ot=Xe.buffer,lt=Xe.type,Y=Xe.bytesPerElement,re=lt===a.INT||lt===a.UNSIGNED_INT||ce.gpuType===Ro;if(ce.isInterleavedBufferAttribute){const se=ce.data,We=se.stride,Be=ce.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)m(Q.location+ve,se.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<Q.locationSize;ve++)g(Q.location+ve);a.bindBuffer(a.ARRAY_BUFFER,ot);for(let ve=0;ve<Q.locationSize;ve++)M(Q.location+ve,be/Q.locationSize,lt,Me,We*Y,(Be+be/Q.locationSize*ve)*Y,re)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)m(Q.location+se,ce.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<Q.locationSize;se++)g(Q.location+se);a.bindBuffer(a.ARRAY_BUFFER,ot);for(let se=0;se<Q.locationSize;se++)M(Q.location+se,be/Q.locationSize,lt,Me,be*Y,be/Q.locationSize*se*Y,re)}}else if(H!==void 0){const Me=H[te];if(Me!==void 0)switch(Me.length){case 2:a.vertexAttrib2fv(Q.location,Me);break;case 3:a.vertexAttrib3fv(Q.location,Me);break;case 4:a.vertexAttrib4fv(Q.location,Me);break;default:a.vertexAttrib1fv(Q.location,Me)}}}}v()}function A(){b();for(const I in i){const D=i[I];for(const O in D){const z=D[O];for(const k in z){const V=z[k];for(const H in V)h(V[H].object),delete V[H];delete z[k]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const D=i[I.id];for(const O in D){const z=D[O];for(const k in z){const V=z[k];for(const H in V)h(V[H].object),delete V[H];delete z[k]}}delete i[I.id]}function R(I){for(const D in i){const O=i[D];for(const z in O){const k=O[z];if(k[I.id]===void 0)continue;const V=k[I.id];for(const H in V)h(V[H].object),delete V[H];delete k[I.id]}}}function y(I){for(const D in i){const O=i[D],z=I.isInstancedMesh===!0?I.id:0,k=O[z];if(k!==void 0){for(const V in k){const H=k[V];for(const te in H)h(H[te].object),delete H[te];delete k[V]}delete O[z],Object.keys(O).length===0&&delete i[D]}}}function b(){U(),n=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function wy(a,e,t){let i;function r(c){i=c}function s(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function n(c,h,p){p!==0&&(a.drawArraysInstanced(i,c,h,p),t.update(h,i,p))}function o(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let u=0;for(let d=0;d<p;d++)u+=h[d];t.update(u,i,1)}function l(c,h,p,u){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<c.length;f++)n(c[f],h[f],u[f]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,p);let f=0;for(let _=0;_<p;_++)f+=h[_]*u[_];t.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=n,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ty(a,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(R){return!(R!==Vt&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&i.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zt&&!y)}function l(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=a.getParameter(a.MAX_SAMPLES),T=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:A,samples:T}}function Ay(a){const e=this;let t=null,i=0,r=!1,s=!1;const n=new rr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||r;return r=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){const f=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=a.get(p);if(!r||f===null||f.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,M=v*4;let x=m.clippingState||null;l.value=x,x=h(f,u,M,d);for(let A=0;A!==M;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,d,f){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=d+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=d;M!==_;++M,x+=4)n.copy(p[M]).applyMatrix4(v,o),n.normal.toArray(g,x),g[x+3]=n.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const or=4,Tu=[.125,.215,.35,.446,.526,.582],Nr=20,Ey=256,qs=new Ua,Au=new ye;let Xl=null,jl=0,ql=0,Yl=!1;const Cy=new C;class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:n=256,position:o=Cy}=s;Xl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,jl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:Pi,format:Vt,colorSpace:Hr,depthBuffer:!1},r=Eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ry(s)),this._blurMaterial=Py(s,e,t),this._ggxMaterial=Iy(s,e,t)}return r}_compileMaterial(e){const t=new Ke(new je,e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,i,r,s){const n=new Ct(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,p=c.toneMapping;c.getClearColor(Au),c.toneMapping=_i,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new jr,new ri({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,d=u.material;let f=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(Au),f=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(n.up.set(0,o[g],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x+l[g],s.y,s.z)):m===1?(n.up.set(0,0,o[g]),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y+l[g],s.z)):(n.up.set(0,o[g],0),n.position.set(s.x,s.y,s.z),n.lookAt(s.x,s.y,s.z+l[g]));const v=this._cubeSize;vs(r,m*v,g>2?v:0,v,v),c.setRenderTarget(r),f&&c.render(u,n),c.render(e,n)}c.toneMapping=p,c.autoClear=h,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,n=this._ggxMaterial,o=this._lodMeshes[i];o.material=n;const l=n.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:f}=this,_=this._sizeLods[i],g=3*_*(i>f-or?i-f+or:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=f-t,vs(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,qs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=f-i,vs(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,qs)}_blur(e,t,i,r,s){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",s),this._halfBlur(n,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,n,o){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,f=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nr-1),_=s/f,g=isFinite(s)?1+Math.floor(h*_):Nr;g>Nr&&pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const m=[];let v=0;for(let R=0;R<Nr;++R){const y=R/_,b=Math.exp(-y*y/2);m.push(b),R===0?v+=b:R<g&&(v+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=n==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=f,u.mipInt.value=M-i;const x=this._sizeLods[r],A=3*x*(r>M-or?r-M+or:0),T=4*(this._cubeSize-x);vs(t,A,T,3*x,2*x),l.setRenderTarget(t),l.render(p,qs)}}function Ry(a){const e=[],t=[],i=[];let r=a;const s=a-or+1+Tu.length;for(let n=0;n<s;n++){const o=Math.pow(2,r);e.push(o);let l=1/o;n>a-or?l=Tu[n-a+or-1]:n===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,f=6,_=3,g=2,m=1,v=new Float32Array(_*f*d),M=new Float32Array(g*f*d),x=new Float32Array(m*f*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,y=T>2?0:-1,b=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];v.set(b,_*f*T),M.set(u,g*f*T);const U=[T,T,T,T,T,T];x.set(U,m*f*T)}const A=new je;A.setAttribute("position",new nt(v,_)),A.setAttribute("uv",new nt(M,g)),A.setAttribute("faceIndex",new nt(x,m)),i.push(new Ke(A,null)),r>or&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Eu(a,e,t){const i=new ii(a,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function Iy(a,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Py(a,e,t){const i=new Float32Array(Nr),r=new C(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Cu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ru(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lh extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jr(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Ei});s.uniforms.tEquirect.value=t;const n=new Ke(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=pt),new Mp(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(s)}}function Ly(a){let e=new WeakMap,t=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?n(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Qs||d===ea)if(e.has(u)){const f=e.get(u).texture;return o(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const _=new lh(f.height);return _.fromEquirectangularTexture(a,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===Qs||d===ea,_=d===Ii||d===cr;if(f||_){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new dc(a)),g=f?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return f&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new dc(a)),g=f?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Qs?u.mapping=Ii:d===ea&&(u.mapping=cr),u}function l(u){let d=0;const f=6;for(let _=0;_<f;_++)u[_]!==void 0&&d++;return d===f}function c(u){const d=u.target;d.removeEventListener("dispose",c);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Ny(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=a.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_a("WebGLRenderer: "+i+" extension not supported."),r}}}function Uy(a,e,t,i){const r={},s=new WeakMap;function n(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);u.removeEventListener("dispose",n),delete r[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",n),r[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)e.update(u[d],a.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,f=p.attributes.position;let _=0;if(f===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const A=v[M+0],T=v[M+1],R=v[M+2];u.push(A,T,T,R,R,A)}}else{const v=f.array;_=f.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const A=M+0,T=M+1,R=M+2;u.push(A,T,T,R,R,A)}}const g=new(f.count>=65535?Dc:Uc)(u,1);g.version=_;const m=s.get(p);m&&e.remove(m),s.set(p,g)}function h(p){const u=s.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Dy(a,e,t){let i;function r(u){i=u}let s,n;function o(u){s=u.type,n=u.bytesPerElement}function l(u,d){a.drawElements(i,d,s,u*n),t.update(d,i,1)}function c(u,d,f){f!==0&&(a.drawElementsInstanced(i,d,s,u*n,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,i,1)}function p(u,d,f,_){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/n,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,u,0,_,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v]*_[v];t.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Fy(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,n,o){switch(t.calls++,n){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",n);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Oy(a,e,t){const i=new WeakMap,r=new ut;function s(n,o,l){const c=n.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let d=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",d)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let A=o.attributes.position.count*x,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*T*4*p),y=new Bo(R,A,T,p);y.type=zt,y.needsUpdate=!0;const b=x*4;for(let U=0;U<p;U++){const I=m[U],D=v[U],O=M[U],z=A*T*4*U;for(let k=0;k<I.count;k++){const V=k*b;f===!0&&(r.fromBufferAttribute(I,k),R[z+V+0]=r.x,R[z+V+1]=r.y,R[z+V+2]=r.z,R[z+V+3]=0),_===!0&&(r.fromBufferAttribute(D,k),R[z+V+4]=r.x,R[z+V+5]=r.y,R[z+V+6]=r.z,R[z+V+7]=0),g===!0&&(r.fromBufferAttribute(O,k),R[z+V+8]=r.x,R[z+V+9]=r.y,R[z+V+10]=r.z,R[z+V+11]=O.itemSize===4?r.w:1)}}u={count:p,texture:y,size:new J(A,T)},i.set(o,u),o.addEventListener("dispose",d)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",n.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const f=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(a,"morphTargetBaseInfluence",f),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:s}}function By(a,e,t,i,r){let s=new WeakMap;function n(c){const h=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:n,dispose:o}}const zy={[gc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function Vy(a,e,t,i,r){const s=new ii(e,t,{type:a,depthBuffer:i,stencilBuffer:r}),n=new ii(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),o=new je;o.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Se([0,2,0,0,2,0],2));const l=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ke(o,l),h=new Ua(-1,1,1,-1,0,1);let p=null,u=null,d=!1,f,_=null,g=[],m=!1;this.setSize=function(v,M){s.setSize(v,M),n.setSize(v,M);for(let x=0;x<g.length;x++){const A=g[x];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const M=s.width,x=s.height;for(let A=0;A<g.length;A++){const T=g[A];T.setSize&&T.setSize(M,x)}},this.begin=function(v,M){if(d||v.toneMapping===_i&&g.length===0)return!1;if(_=M,M!==null){const x=M.width,A=M.height;(s.width!==x||s.height!==A)&&this.setSize(x,A)}return m===!1&&v.setRenderTarget(s),f=v.toneMapping,v.toneMapping=_i,!0},this.hasRenderPass=function(){return m},this.end=function(v,M){v.toneMapping=f,d=!0;let x=s,A=n;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(v,A,x,M),R.needsSwap!==!1)){const y=x;x=A,A=y}}if(p!==v.outputColorSpace||u!==v.toneMapping){p=v.outputColorSpace,u=v.toneMapping,l.defines={},tt.getTransfer(p)===st&&(l.defines.SRGB_TRANSFER="");const T=zy[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),n.dispose(),o.dispose(),l.dispose()}}const Rp=new vt,pc=new Es(1,1),Ip=new Bo,Pp=new zo,Lp=new Ca,Iu=[],Pu=[],Lu=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function Us(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let s=Iu[r];if(s===void 0&&(s=new Float32Array(r),Iu[r]=s),e!==0){i.toArray(s,0);for(let n=1,o=0;n!==e;++n)o+=t,a[n].toArray(s,o)}return s}function Tt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function At(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function al(a,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function ky(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Hy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2fv(this.addr,e),At(t,e)}}function Gy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;a.uniform3fv(this.addr,e),At(t,e)}}function Wy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4fv(this.addr,e),At(t,e)}}function Xy(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Uu.set(i),a.uniformMatrix2fv(this.addr,!1,Uu),At(t,i)}}function jy(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Nu.set(i),a.uniformMatrix3fv(this.addr,!1,Nu),At(t,i)}}function qy(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Lu.set(i),a.uniformMatrix4fv(this.addr,!1,Lu),At(t,i)}}function Yy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Zy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2iv(this.addr,e),At(t,e)}}function Jy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;a.uniform3iv(this.addr,e),At(t,e)}}function Ky(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4iv(this.addr,e),At(t,e)}}function $y(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Qy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2uiv(this.addr,e),At(t,e)}}function ex(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;a.uniform3uiv(this.addr,e),At(t,e)}}function tx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4uiv(this.addr,e),At(t,e)}}function ix(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r);let s;this.type===a.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?Oo:Fo,s=pc):s=Rp,t.setTexture2D(e||s,r)}function rx(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pp,r)}function sx(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lp,r)}function ax(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ip,r)}function nx(a){switch(a){case 5126:return ky;case 35664:return Hy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return jy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Ky;case 5125:return $y;case 36294:return Qy;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ax}}function ox(a,e){a.uniform1fv(this.addr,e)}function lx(a,e){const t=Us(e,this.size,2);a.uniform2fv(this.addr,t)}function cx(a,e){const t=Us(e,this.size,3);a.uniform3fv(this.addr,t)}function hx(a,e){const t=Us(e,this.size,4);a.uniform4fv(this.addr,t)}function ux(a,e){const t=Us(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function dx(a,e){const t=Us(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function px(a,e){const t=Us(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function fx(a,e){a.uniform1iv(this.addr,e)}function mx(a,e){a.uniform2iv(this.addr,e)}function gx(a,e){a.uniform3iv(this.addr,e)}function _x(a,e){a.uniform4iv(this.addr,e)}function vx(a,e){a.uniform1uiv(this.addr,e)}function yx(a,e){a.uniform2uiv(this.addr,e)}function xx(a,e){a.uniform3uiv(this.addr,e)}function Mx(a,e){a.uniform4uiv(this.addr,e)}function Sx(a,e,t){const i=this.cache,r=e.length,s=al(t,r);Tt(i,s)||(a.uniform1iv(this.addr,s),At(i,s));let n;this.type===a.SAMPLER_2D_SHADOW?n=pc:n=Rp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||n,s[o])}function bx(a,e,t){const i=this.cache,r=e.length,s=al(t,r);Tt(i,s)||(a.uniform1iv(this.addr,s),At(i,s));for(let n=0;n!==r;++n)t.setTexture3D(e[n]||Pp,s[n])}function wx(a,e,t){const i=this.cache,r=e.length,s=al(t,r);Tt(i,s)||(a.uniform1iv(this.addr,s),At(i,s));for(let n=0;n!==r;++n)t.setTextureCube(e[n]||Lp,s[n])}function Tx(a,e,t){const i=this.cache,r=e.length,s=al(t,r);Tt(i,s)||(a.uniform1iv(this.addr,s),At(i,s));for(let n=0;n!==r;++n)t.setTexture2DArray(e[n]||Ip,s[n])}function Ax(a){switch(a){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return px;case 5124:case 35670:return fx;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return yx;case 36295:return xx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}class Ex{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}}class Cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}}class Rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,n=r.length;s!==n;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Du(a,e){a.seq.push(e),a.map[e.id]=e}function Ix(a,e,t){const i=a.name,r=i.length;for(Zl.lastIndex=0;;){const s=Zl.exec(i),n=Zl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&n+2===r){Du(t,c===void 0?new Ex(o,a,e):new Cx(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Rx(o),Du(t,h)),t=h}}}class Ln{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const o=e.getActiveUniform(t,n),l=e.getUniformLocation(t,o.name);Ix(o,l,this)}const r=[],s=[];for(const n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):s.push(n);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,n=t.length;s!==n;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const n=e[r];n.id in t&&i.push(n)}return i}}function Fu(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Px=37297;let Lx=0;function Nx(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let n=r;n<s;n++){const o=n+1;i.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return i.join(`
`)}const Ou=new qe;function Ux(a){tt._getMatrix(Ou,tt.workingColorSpace,a);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(a)){case pa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Bu(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const n=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Nx(a.getShaderSource(e),n)}else return r}function Dx(a,e){const t=Ux(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fx={[gc]:"Linear",[_c]:"Reinhard",[vc]:"Cineon",[yc]:"ACESFilmic",[Mc]:"AgX",[Sc]:"Neutral",[xc]:"Custom"};function Ox(a,e){const t=Fx[e];return t===void 0?(pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rn=new C;function Bx(){tt.getLuminanceCoefficients(Rn);const a=Rn.x.toFixed(4),e=Rn.y.toFixed(4),t=Rn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Vx(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kx(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=a.getActiveAttrib(e,r),n=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[n]={type:s.type,location:a.getAttribLocation(e,n),locationSize:o}}return t}function Ks(a){return a!==""}function zu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(a){return a.replace(Hx,Wx)}const Gx=new Map;function Wx(a,e){let t=Ze[e];if(t===void 0){const i=Gx.get(e);if(i!==void 0)t=Ze[i],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(a){return a.replace(Xx,jx)}function jx(a,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qx={[$s]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Yx(a){return qx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zx={[Ii]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function Jx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Zx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kx={[cr]:"ENVMAP_MODE_REFRACTION"};function $x(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Kx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qx={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function eM(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[a.combine]||"ENVMAP_BLENDING_NONE"}function tM(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iM(a,e,t,i){const r=a.getContext(),s=t.defines;let n=t.vertexShader,o=t.fragmentShader;const l=Yx(t),c=Jx(t),h=$x(t),p=eM(t),u=tM(t),d=zx(t),f=Vx(s),_=r.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ks).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ks).join(`
`),m.length>0&&(m+=`
`)):(g=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ze.tonemapping_pars_fragment:"",t.toneMapping!==_i?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),n=fc(n),n=zu(n,t),n=Vu(n,t),o=fc(o),o=zu(o,t),o=Vu(o,t),n=ku(n),o=ku(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+n,x=v+m+o,A=Fu(r,r.VERTEX_SHADER,M),T=Fu(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(a.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(T)||"",k=D.trim(),V=O.trim(),H=z.trim();let te=!0,Q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,_,A,T);else{const ce=Bu(r,A,"vertex"),Me=Bu(r,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ce+`
`+Me)}else k!==""?pe("WebGLProgram: Program Info Log:",k):(V===""||H==="")&&(Q=!1);Q&&(I.diagnostics={runnable:te,programLog:k,vertexShader:{log:V,prefix:g},fragmentShader:{log:H,prefix:m}})}r.deleteShader(A),r.deleteShader(T),y=new Ln(r,_),b=kx(r,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,Px)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(s)===!1&&(n.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aM(e),t.set(e,i)),i}}class aM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function nM(a,e,t,i,r,s){const n=new Vo,o=new sM,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,U,I,D){const O=I.fog,z=D.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||k,V),te=H&&H.mapping===Is?H.image.height:null,Q=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&pe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ce!==void 0?ce.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let Xe,ot,lt,Y;if(Q){const at=mi[Q];Xe=at.vertexShader,ot=at.fragmentShader}else Xe=y.vertexShader,ot=y.fragmentShader,o.update(y),lt=o.getVertexShaderID(y),Y=o.getFragmentShaderID(y);const re=a.getRenderTarget(),se=a.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,Be=D.isBatchedMesh===!0,ve=!!y.map,$e=!!y.matcap,K=!!H,$=!!y.aoMap,ae=!!y.lightMap,me=!!y.bumpMap,_e=!!y.normalMap,P=!!y.displacementMap,Le=!!y.emissiveMap,Ue=!!y.metalnessMap,Ve=!!y.roughnessMap,ue=y.anisotropy>0,E=y.clearcoat>0,S=y.dispersion>0,L=y.iridescence>0,j=y.sheen>0,Z=y.transmission>0,q=ue&&!!y.anisotropyMap,Ce=E&&!!y.clearcoatMap,he=E&&!!y.clearcoatNormalMap,Ne=E&&!!y.clearcoatRoughnessMap,Ie=L&&!!y.iridescenceMap,ee=L&&!!y.iridescenceThicknessMap,oe=j&&!!y.sheenColorMap,De=j&&!!y.sheenRoughnessMap,Re=!!y.specularMap,xe=!!y.specularColorMap,Qe=!!y.specularIntensityMap,N=Z&&!!y.transmissionMap,de=Z&&!!y.thicknessMap,ne=!!y.gradientMap,Ae=!!y.alphaMap,ie=y.alphaTest>0,X=!!y.alphaHash,Ee=!!y.extensions;let ze=_i;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=a.toneMapping);const wt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:ot,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Be,batchingColor:Be&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Hr,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:$e,envMap:K,envMapMode:K&&H.mapping,envMapCubeUVHeight:te,aoMap:$,lightMap:ae,bumpMap:me,normalMap:_e,displacementMap:P,emissiveMap:Le,normalMapObjectSpace:_e&&y.normalMapType===xd,normalMapTangentSpace:_e&&y.normalMapType===dr,metalnessMap:Ue,roughnessMap:Ve,anisotropy:ue,anisotropyMap:q,clearcoat:E,clearcoatMap:Ce,clearcoatNormalMap:he,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:L,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:oe,sheenRoughnessMap:De,specularMap:Re,specularColorMap:xe,specularIntensityMap:Qe,transmission:Z,transmissionMap:N,thicknessMap:de,gradientMap:ne,opaque:y.transparent===!1&&y.blending===Or&&y.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ie,alphaHash:X,combine:y.combine,mapUv:ve&&f(y.map.channel),aoMapUv:$&&f(y.aoMap.channel),lightMapUv:ae&&f(y.lightMap.channel),bumpMapUv:me&&f(y.bumpMap.channel),normalMapUv:_e&&f(y.normalMap.channel),displacementMapUv:P&&f(y.displacementMap.channel),emissiveMapUv:Le&&f(y.emissiveMap.channel),metalnessMapUv:Ue&&f(y.metalnessMap.channel),roughnessMapUv:Ve&&f(y.roughnessMap.channel),anisotropyMapUv:q&&f(y.anisotropyMap.channel),clearcoatMapUv:Ce&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&f(y.sheenRoughnessMap.channel),specularMapUv:Re&&f(y.specularMap.channel),specularColorMapUv:xe&&f(y.specularColorMap.channel),specularIntensityMapUv:Qe&&f(y.specularIntensityMap.channel),transmissionMapUv:N&&f(y.transmissionMap.channel),thicknessMapUv:de&&f(y.thicknessMap.channel),alphaMapUv:Ae&&f(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_e||ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(ve||Ae),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&_e===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:se,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:ze,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:Le&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ni,flipSided:y.side===kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)b.push(U),b.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(a.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){n.disableAll(),b.instancing&&n.enable(0),b.instancingColor&&n.enable(1),b.instancingMorph&&n.enable(2),b.matcap&&n.enable(3),b.envMap&&n.enable(4),b.normalMapObjectSpace&&n.enable(5),b.normalMapTangentSpace&&n.enable(6),b.clearcoat&&n.enable(7),b.iridescence&&n.enable(8),b.alphaTest&&n.enable(9),b.vertexColors&&n.enable(10),b.vertexAlphas&&n.enable(11),b.vertexUv1s&&n.enable(12),b.vertexUv2s&&n.enable(13),b.vertexUv3s&&n.enable(14),b.vertexTangents&&n.enable(15),b.anisotropy&&n.enable(16),b.alphaHash&&n.enable(17),b.batching&&n.enable(18),b.dispersion&&n.enable(19),b.batchingColor&&n.enable(20),b.gradientMap&&n.enable(21),y.push(n.mask),n.disableAll(),b.fog&&n.enable(0),b.useFog&&n.enable(1),b.flatShading&&n.enable(2),b.logarithmicDepthBuffer&&n.enable(3),b.reversedDepthBuffer&&n.enable(4),b.skinning&&n.enable(5),b.morphTargets&&n.enable(6),b.morphNormals&&n.enable(7),b.morphColors&&n.enable(8),b.premultipliedAlpha&&n.enable(9),b.shadowMapEnabled&&n.enable(10),b.doubleSided&&n.enable(11),b.flipSided&&n.enable(12),b.useDepthPacking&&n.enable(13),b.dithering&&n.enable(14),b.transmission&&n.enable(15),b.sheen&&n.enable(16),b.opaque&&n.enable(17),b.pointsUvs&&n.enable(18),b.decodeVideoTexture&&n.enable(19),b.decodeVideoTextureEmissive&&n.enable(20),b.alphaToCoverage&&n.enable(21),y.push(n.mask)}function M(y){const b=d[y.type];let U;if(b){const I=mi[b];U=tp.clone(I.uniforms)}else U=y.uniforms;return U}function x(y,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new iM(a,b,y,r),c.push(U),h.set(b,U)),U}function A(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function oM(){let a=new WeakMap;function e(n){return a.has(n)}function t(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function i(n){a.delete(n)}function r(n,o,l){a.get(n)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lM(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Gu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Wu(){const a=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function n(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,f,_,g,m){let v=a[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:f,materialVariant:n(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},a[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=f,v.materialVariant=n(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function l(u,d,f,_,g,m){const v=o(u,d,f,_,g,m);f.transmission>0?i.push(v):f.transparent===!0?r.push(v):t.push(v)}function c(u,d,f,_,g,m){const v=o(u,d,f,_,g,m);f.transmission>0?i.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||lM),i.length>1&&i.sort(d||Gu),r.length>1&&r.sort(d||Gu)}function p(){for(let u=e,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function cM(){let a=new WeakMap;function e(i,r){const s=a.get(i);let n;return s===void 0?(n=new Wu,a.set(i,[n])):r>=s.length?(n=new Wu,s.push(n)):n=s[r],n}function t(){a=new WeakMap}return{get:e,dispose:t}}function hM(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function uM(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let dM=0;function pM(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fM(a){const e=new hM,t=uM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const r=new C,s=new Ge,n=new Ge;function o(c){let h=0,p=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,f=0,_=0,g=0,m=0,v=0,M=0,x=0,A=0,T=0,R=0;c.sort(pM);for(let b=0,U=c.length;b<U;b++){const I=c[b],D=I.color,O=I.intensity,z=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===kr?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*O,p+=D.g*O,u+=D.b*O;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],O);R++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=I.shadow.matrix,v++}i.directional[d]=V,d++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=z,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const H=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,H.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=H.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=k,x++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const H=I.shadow,te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,i.pointShadow[f]=te,i.pointShadowMap[f]=k,i.pointShadowMatrix[f]=I.shadow.matrix,M++}i.point[f]=V,f++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(O),V.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[m]=V,m++}}g>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==d||y.pointLength!==f||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==v||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==A||y.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=f,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,y.directionalLength=d,y.pointLength=f,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=v,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=A,y.numLightProbes=R,i.version=dM++)}function l(c,h){let p=0,u=0,d=0,f=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const M=c[m];if(M.isDirectionalLight){const x=i.directional[p];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(M.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),n.identity(),s.copy(M.matrixWorld),s.premultiply(g),n.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(n),x.halfHeight.applyMatrix4(n),f++}else if(M.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Xu(a){const e=new fM(a),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function n(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:n}}function mM(a){let e=new WeakMap;function t(r,s=0){const n=e.get(r);let o;return n===void 0?(o=new Xu(a),e.set(r,[o])):s>=n.length?(o=new Xu(a),n.push(o)):o=n[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`,vM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],yM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],ju=new Ge,Ys=new C,Jl=new C;function xM(a,e,t){let i=new Ls;const r=new J,s=new J,n=new ut,o=new Yc,l=new Zc,c={},h=t.maxTextureSize,p={[qi]:kt,[kt]:qi,[ni]:ni},u=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:gM,fragmentShader:_M}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const f=new je;f.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let m=this.type;this.render=function(T,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===mc&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$s);const b=a.getRenderTarget(),U=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),D=a.state;D.setBlending(Ei),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=m!==this.type;O&&R.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=T.length;z<k;z++){const V=T[z],H=V.shadow;if(H===void 0){pe("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();r.multiply(te),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,H.mapSize.y=s.y));const Q=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ys){if(V.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ii(r.x,r.y,{format:kr,type:Pi,minFilter:pt,magFilter:pt,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Es(r.x,r.y,zt),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Li,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt}else V.isPointLight?(H.map=new lh(r.x),H.map.depthTexture=new kd(r.x,li)):(H.map=new ii(r.x,r.y),H.map.depthTexture=new Es(r.x,r.y,li)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Li,this.type===$s?(H.map.depthTexture.compareFunction=Q?Oo:Fo,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt);H.camera.updateProjectionMatrix()}const ce=H.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<ce;Me++){if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,Me),a.clear();else{Me===0&&(a.setRenderTarget(H.map),a.clear());const be=H.getViewport(Me);n.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),D.viewport(n)}if(V.isPointLight){const be=H.camera,Xe=H.matrix,ot=V.distance||be.far;ot!==be.far&&(be.far=ot,be.updateProjectionMatrix()),Ys.setFromMatrixPosition(V.matrixWorld),be.position.copy(Ys),Jl.copy(be.position),Jl.add(vM[Me]),be.up.copy(yM[Me]),be.lookAt(Jl),be.updateMatrixWorld(),Xe.makeTranslation(-Ys.x,-Ys.y,-Ys.z),ju.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ju,be.coordinateSystem,be.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),x(R,y,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===ys&&v(H,y),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,a.setRenderTarget(b,U,I)};function v(T,R){const y=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(r.x,r.y,{format:kr,type:Pi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(R,null,y,u,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(R,null,y,d,_,null)}function M(T,R,y,b){let U=null;const I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)U=I;else if(U=y.isPointLight===!0?l:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=U.uuid,O=R.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let k=z[O];k===void 0&&(k=U.clone(),z[O]=k,R.addEventListener("dispose",A)),U=k}if(U.visible=R.visible,U.wireframe=R.wireframe,b===ys?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:p[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const D=a.properties.get(U);D.light=y}return U}function x(T,R,y,b,U){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ys)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const D=e.update(T),O=T.material;if(Array.isArray(O)){const z=D.groups;for(let k=0,V=z.length;k<V;k++){const H=z[k],te=O[H.materialIndex];if(te&&te.visible){const Q=M(T,te,b,U);T.onBeforeShadow(a,T,R,y,D,Q,H),a.renderBufferDirect(y,null,D,Q,T,H),T.onAfterShadow(a,T,R,y,D,Q,H)}}}else if(O.visible){const z=M(T,O,b,U);T.onBeforeShadow(a,T,R,y,D,z,null),a.renderBufferDirect(y,null,D,z,T,null),T.onAfterShadow(a,T,R,y,D,z,null)}}const I=T.children;for(let D=0,O=I.length;D<O;D++)x(I[D],R,y,b,U)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function MM(a,e){function t(){let N=!1;const de=new ut;let ne=null;const Ae=new ut(0,0,0,0);return{setMask:function(ie){ne!==ie&&!N&&(a.colorMask(ie,ie,ie,ie),ne=ie)},setLocked:function(ie){N=ie},setClear:function(ie,X,Ee,ze,wt){wt===!0&&(ie*=ze,X*=ze,Ee*=ze),de.set(ie,X,Ee,ze),Ae.equals(de)===!1&&(a.clearColor(ie,X,Ee,ze),Ae.copy(de))},reset:function(){N=!1,ne=null,Ae.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,ne=null,Ae=null,ie=null;return{setReversed:function(X){if(de!==X){const Ee=e.get("EXT_clip_control");X?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),de=X;const ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(X){X?re(a.DEPTH_TEST):se(a.DEPTH_TEST)},setMask:function(X){ne!==X&&!N&&(a.depthMask(X),ne=X)},setFunc:function(X){if(de&&(X=Vf[X]),Ae!==X){switch(X){case Dn:a.depthFunc(a.NEVER);break;case Fn:a.depthFunc(a.ALWAYS);break;case On:a.depthFunc(a.LESS);break;case Vr:a.depthFunc(a.LEQUAL);break;case Bn:a.depthFunc(a.EQUAL);break;case zn:a.depthFunc(a.GEQUAL);break;case Vn:a.depthFunc(a.GREATER);break;case kn:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ae=X}},setLocked:function(X){N=X},setClear:function(X){ie!==X&&(ie=X,de&&(X=1-X),a.clearDepth(X))},reset:function(){N=!1,ne=null,Ae=null,ie=null,de=!1}}}function r(){let N=!1,de=null,ne=null,Ae=null,ie=null,X=null,Ee=null,ze=null,wt=null;return{setTest:function(at){N||(at?re(a.STENCIL_TEST):se(a.STENCIL_TEST))},setMask:function(at){de!==at&&!N&&(a.stencilMask(at),de=at)},setFunc:function(at,Di,Fi){(ne!==at||Ae!==Di||ie!==Fi)&&(a.stencilFunc(at,Di,Fi),ne=at,Ae=Di,ie=Fi)},setOp:function(at,Di,Fi){(X!==at||Ee!==Di||ze!==Fi)&&(a.stencilOp(at,Di,Fi),X=at,Ee=Di,ze=Fi)},setLocked:function(at){N=at},setClear:function(at){wt!==at&&(a.clearStencil(at),wt=at)},reset:function(){N=!1,de=null,ne=null,Ae=null,ie=null,X=null,Ee=null,ze=null,wt=null}}}const s=new t,n=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,v=null,M=null,x=null,A=null,T=null,R=new ye(0,0,0),y=0,b=!1,U=null,I=null,D=null,O=null,z=null;const k=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const te=a.getParameter(a.VERSION);te.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=H>=1):te.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=H>=2);let Q=null,ce={};const Me=a.getParameter(a.SCISSOR_BOX),be=a.getParameter(a.VIEWPORT),Xe=new ut().fromArray(Me),ot=new ut().fromArray(be);function lt(N,de,ne,Ae){const ie=new Uint8Array(4),X=a.createTexture();a.bindTexture(N,X),a.texParameteri(N,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(N,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ee=0;Ee<ne;Ee++)N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY?a.texImage3D(de,0,a.RGBA,1,1,Ae,0,a.RGBA,a.UNSIGNED_BYTE,ie):a.texImage2D(de+Ee,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ie);return X}const Y={};Y[a.TEXTURE_2D]=lt(a.TEXTURE_2D,a.TEXTURE_2D,1),Y[a.TEXTURE_CUBE_MAP]=lt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[a.TEXTURE_2D_ARRAY]=lt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Y[a.TEXTURE_3D]=lt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),n.setClear(1),o.setClear(0),re(a.DEPTH_TEST),n.setFunc(Vr),me(!1),_e(Kl),re(a.CULL_FACE),$(Ei);function re(N){h[N]!==!0&&(a.enable(N),h[N]=!0)}function se(N){h[N]!==!1&&(a.disable(N),h[N]=!1)}function We(N,de){return p[N]!==de?(a.bindFramebuffer(N,de),p[N]=de,N===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=de),N===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=de),!0):!1}function Be(N,de){let ne=d,Ae=!1;if(N){ne=u.get(de),ne===void 0&&(ne=[],u.set(de,ne));const ie=N.textures;if(ne.length!==ie.length||ne[0]!==a.COLOR_ATTACHMENT0){for(let X=0,Ee=ie.length;X<Ee;X++)ne[X]=a.COLOR_ATTACHMENT0+X;ne.length=ie.length,Ae=!0}}else ne[0]!==a.BACK&&(ne[0]=a.BACK,Ae=!0);Ae&&a.drawBuffers(ne)}function ve(N){return f!==N?(a.useProgram(N),f=N,!0):!1}const $e={[sr]:a.FUNC_ADD,[Ju]:a.FUNC_SUBTRACT,[Ku]:a.FUNC_REVERSE_SUBTRACT};$e[$u]=a.MIN,$e[Qu]=a.MAX;const K={[ed]:a.ZERO,[td]:a.ONE,[id]:a.SRC_COLOR,[Nn]:a.SRC_ALPHA,[ld]:a.SRC_ALPHA_SATURATE,[nd]:a.DST_COLOR,[sd]:a.DST_ALPHA,[rd]:a.ONE_MINUS_SRC_COLOR,[Un]:a.ONE_MINUS_SRC_ALPHA,[od]:a.ONE_MINUS_DST_COLOR,[ad]:a.ONE_MINUS_DST_ALPHA,[cd]:a.CONSTANT_COLOR,[hd]:a.ONE_MINUS_CONSTANT_COLOR,[ud]:a.CONSTANT_ALPHA,[dd]:a.ONE_MINUS_CONSTANT_ALPHA};function $(N,de,ne,Ae,ie,X,Ee,ze,wt,at){if(N===Ei){_===!0&&(se(a.BLEND),_=!1);return}if(_===!1&&(re(a.BLEND),_=!0),N!==Zu){if(N!==g||at!==b){if((m!==sr||x!==sr)&&(a.blendEquation(a.FUNC_ADD),m=sr,x=sr),at)switch(N){case Or:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case $l:a.blendFunc(a.ONE,a.ONE);break;case Ql:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ec:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Pe("WebGLState: Invalid blending: ",N);break}else switch(N){case Or:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case $l:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Ql:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",N);break}v=null,M=null,A=null,T=null,R.set(0,0,0),y=0,g=N,b=at}return}ie=ie||de,X=X||ne,Ee=Ee||Ae,(de!==m||ie!==x)&&(a.blendEquationSeparate($e[de],$e[ie]),m=de,x=ie),(ne!==v||Ae!==M||X!==A||Ee!==T)&&(a.blendFuncSeparate(K[ne],K[Ae],K[X],K[Ee]),v=ne,M=Ae,A=X,T=Ee),(ze.equals(R)===!1||wt!==y)&&(a.blendColor(ze.r,ze.g,ze.b,wt),R.copy(ze),y=wt),g=N,b=!1}function ae(N,de){N.side===ni?se(a.CULL_FACE):re(a.CULL_FACE);let ne=N.side===kt;de&&(ne=!ne),me(ne),N.blending===Or&&N.transparent===!1?$(Ei):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),n.setFunc(N.depthFunc),n.setTest(N.depthTest),n.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ae=N.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):se(a.SAMPLE_ALPHA_TO_COVERAGE)}function me(N){U!==N&&(N?a.frontFace(a.CW):a.frontFace(a.CCW),U=N)}function _e(N){N!==qu?(re(a.CULL_FACE),N!==I&&(N===Kl?a.cullFace(a.BACK):N===Yu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):se(a.CULL_FACE),I=N}function P(N){N!==D&&(V&&a.lineWidth(N),D=N)}function Le(N,de,ne){N?(re(a.POLYGON_OFFSET_FILL),(O!==de||z!==ne)&&(O=de,z=ne,n.getReversed()&&(de=-de),a.polygonOffset(de,ne))):se(a.POLYGON_OFFSET_FILL)}function Ue(N){N?re(a.SCISSOR_TEST):se(a.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=a.TEXTURE0+k-1),Q!==N&&(a.activeTexture(N),Q=N)}function ue(N,de,ne){ne===void 0&&(Q===null?ne=a.TEXTURE0+k-1:ne=Q);let Ae=ce[ne];Ae===void 0&&(Ae={type:void 0,texture:void 0},ce[ne]=Ae),(Ae.type!==N||Ae.texture!==de)&&(Q!==ne&&(a.activeTexture(ne),Q=ne),a.bindTexture(N,de||Y[N]),Ae.type=N,Ae.texture=de)}function E(){const N=ce[Q];N!==void 0&&N.type!==void 0&&(a.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{a.compressedTexImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function L(){try{a.compressedTexImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function j(){try{a.texSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Z(){try{a.texSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Ce(){try{a.compressedTexSubImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function he(){try{a.texStorage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Ne(){try{a.texStorage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function Ie(){try{a.texImage2D(...arguments)}catch(N){Pe("WebGLState:",N)}}function ee(){try{a.texImage3D(...arguments)}catch(N){Pe("WebGLState:",N)}}function oe(N){Xe.equals(N)===!1&&(a.scissor(N.x,N.y,N.z,N.w),Xe.copy(N))}function De(N){ot.equals(N)===!1&&(a.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function Re(N,de){let ne=c.get(de);ne===void 0&&(ne=new WeakMap,c.set(de,ne));let Ae=ne.get(N);Ae===void 0&&(Ae=a.getUniformBlockIndex(de,N.name),ne.set(N,Ae))}function xe(N,de){const ne=c.get(de).get(N);l.get(de)!==ne&&(a.uniformBlockBinding(de,ne,N.__bindingPointIndex),l.set(de,ne))}function Qe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),n.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},Q=null,ce={},p={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,v=null,M=null,x=null,A=null,T=null,R=new ye(0,0,0),y=0,b=!1,U=null,I=null,D=null,O=null,z=null,Xe.set(0,0,a.canvas.width,a.canvas.height),ot.set(0,0,a.canvas.width,a.canvas.height),s.reset(),n.reset(),o.reset()}return{buffers:{color:s,depth:n,stencil:o},enable:re,disable:se,bindFramebuffer:We,drawBuffers:Be,useProgram:ve,setBlending:$,setMaterial:ae,setFlipSided:me,setCullFace:_e,setLineWidth:P,setPolygonOffset:Le,setScissorTest:Ue,activeTexture:Ve,bindTexture:ue,unbindTexture:E,compressedTexImage2D:S,compressedTexImage3D:L,texImage2D:Ie,texImage3D:ee,updateUBOMapping:Re,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Ne,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:oe,viewport:De,reset:Qe}}function SM(a,e,t,i,r,s,n){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap;let p;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,S){return d?new OffscreenCanvas(E,S):ma("canvas")}function _(E,S,L){let j=1;const Z=ue(E);if((Z.width>L||Z.height>L)&&(j=L/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(j*Z.width),Ce=Math.floor(j*Z.height);p===void 0&&(p=f(q,Ce));const he=S?f(q,Ce):p;return he.width=q,he.height=Ce,he.getContext("2d").drawImage(E,0,0,q,Ce),pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Ce+")."),he}else return"data"in E&&pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){a.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?a.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(E,S,L,j,Z=!1){if(E!==null){if(a[E]!==void 0)return a[E];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=S;if(S===a.RED&&(L===a.FLOAT&&(q=a.R32F),L===a.HALF_FLOAT&&(q=a.R16F),L===a.UNSIGNED_BYTE&&(q=a.R8)),S===a.RED_INTEGER&&(L===a.UNSIGNED_BYTE&&(q=a.R8UI),L===a.UNSIGNED_SHORT&&(q=a.R16UI),L===a.UNSIGNED_INT&&(q=a.R32UI),L===a.BYTE&&(q=a.R8I),L===a.SHORT&&(q=a.R16I),L===a.INT&&(q=a.R32I)),S===a.RG&&(L===a.FLOAT&&(q=a.RG32F),L===a.HALF_FLOAT&&(q=a.RG16F),L===a.UNSIGNED_BYTE&&(q=a.RG8)),S===a.RG_INTEGER&&(L===a.UNSIGNED_BYTE&&(q=a.RG8UI),L===a.UNSIGNED_SHORT&&(q=a.RG16UI),L===a.UNSIGNED_INT&&(q=a.RG32UI),L===a.BYTE&&(q=a.RG8I),L===a.SHORT&&(q=a.RG16I),L===a.INT&&(q=a.RG32I)),S===a.RGB_INTEGER&&(L===a.UNSIGNED_BYTE&&(q=a.RGB8UI),L===a.UNSIGNED_SHORT&&(q=a.RGB16UI),L===a.UNSIGNED_INT&&(q=a.RGB32UI),L===a.BYTE&&(q=a.RGB8I),L===a.SHORT&&(q=a.RGB16I),L===a.INT&&(q=a.RGB32I)),S===a.RGBA_INTEGER&&(L===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),L===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),L===a.UNSIGNED_INT&&(q=a.RGBA32UI),L===a.BYTE&&(q=a.RGBA8I),L===a.SHORT&&(q=a.RGBA16I),L===a.INT&&(q=a.RGBA32I)),S===a.RGB&&(L===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),L===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),S===a.RGBA){const Ce=Z?pa:tt.getTransfer(j);L===a.FLOAT&&(q=a.RGBA32F),L===a.HALF_FLOAT&&(q=a.RGBA16F),L===a.UNSIGNED_BYTE&&(q=Ce===st?a.SRGB8_ALPHA8:a.RGBA8),L===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),L===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(E,S){let L;return E?S===null||S===li||S===ws?L=a.DEPTH24_STENCIL8:S===zt?L=a.DEPTH32F_STENCIL8:S===bs&&(L=a.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===li||S===ws?L=a.DEPTH_COMPONENT24:S===zt?L=a.DEPTH_COMPONENT32F:S===bs&&(L=a.DEPTH_COMPONENT16),L}function A(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==pt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){const S=E.target;S.removeEventListener("dispose",T),y(S),S.isVideoTexture&&h.delete(S)}function R(E){const S=E.target;S.removeEventListener("dispose",R),U(S)}function y(E){const S=i.get(E);if(S.__webglInit===void 0)return;const L=E.source,j=u.get(L);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(j).length===0&&u.delete(L)}i.remove(E)}function b(E){const S=i.get(E);a.deleteTexture(S.__webglTexture);const L=E.source,j=u.get(L);delete j[S.__cacheKey],n.memory.textures--}function U(E){const S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)a.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else a.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)a.deleteFramebuffer(S.__webglFramebuffer[j]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const L=E.textures;for(let j=0,Z=L.length;j<Z;j++){const q=i.get(L[j]);q.__webglTexture&&(a.deleteTexture(q.__webglTexture),n.memory.textures--),i.remove(L[j])}i.remove(E)}let I=0;function D(){I=0}function O(){const E=I;return E>=r.maxTextures&&pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function z(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function k(E,S){const L=i.get(E);if(E.isVideoTexture&&Ue(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){const j=E.image;if(j===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(L,E,S);return}}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,L.__webglTexture,a.TEXTURE0+S)}function V(E,S){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Y(L,E,S);return}else E.isExternalTexture&&(L.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,L.__webglTexture,a.TEXTURE0+S)}function H(E,S){const L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Y(L,E,S);return}t.bindTexture(a.TEXTURE_3D,L.__webglTexture,a.TEXTURE0+S)}function te(E,S){const L=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){re(L,E,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+S)}const Q={[ca]:a.REPEAT,[Zt]:a.CLAMP_TO_EDGE,[ha]:a.MIRRORED_REPEAT},ce={[Mt]:a.NEAREST,[bc]:a.NEAREST_MIPMAP_NEAREST,[xs]:a.NEAREST_MIPMAP_LINEAR,[pt]:a.LINEAR,[ta]:a.LINEAR_MIPMAP_NEAREST,[Ti]:a.LINEAR_MIPMAP_LINEAR},Me={[Md]:a.NEVER,[Ad]:a.ALWAYS,[Sd]:a.LESS,[Fo]:a.LEQUAL,[bd]:a.EQUAL,[Oo]:a.GEQUAL,[wd]:a.GREATER,[Td]:a.NOTEQUAL};function be(E,S){if(S.type===zt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pt||S.magFilter===ta||S.magFilter===xs||S.magFilter===Ti||S.minFilter===pt||S.minFilter===ta||S.minFilter===xs||S.minFilter===Ti)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(E,a.TEXTURE_WRAP_S,Q[S.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,Q[S.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,Q[S.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,ce[S.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mt||S.minFilter!==xs&&S.minFilter!==Ti||S.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");a.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(E,S){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let Z=u.get(j);Z===void 0&&(Z={},u.set(j,Z));const q=z(S);if(q!==E.__cacheKey){Z[q]===void 0&&(Z[q]={texture:a.createTexture(),usedTimes:0},n.memory.textures++,L=!0),Z[q].usedTimes++;const Ce=Z[E.__cacheKey];Ce!==void 0&&(Z[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(S)),E.__cacheKey=q,E.__webglTexture=Z[q].texture}return L}function ot(E,S,L){return Math.floor(Math.floor(E/L)/S)}function lt(E,S,L,j){const Z=E.updateRanges;if(Z.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,L,j,S.data);else{Z.sort((Ie,ee)=>Ie.start-ee.start);let q=0;for(let Ie=1;Ie<Z.length;Ie++){const ee=Z[q],oe=Z[Ie],De=ee.start+ee.count,Re=ot(oe.start,S.width,4),xe=ot(ee.start,S.width,4);oe.start<=De+1&&Re===xe&&ot(oe.start+oe.count-1,S.width,4)===Re?ee.count=Math.max(ee.count,oe.start+oe.count-ee.start):(++q,Z[q]=oe)}Z.length=q+1;const Ce=a.getParameter(a.UNPACK_ROW_LENGTH),he=a.getParameter(a.UNPACK_SKIP_PIXELS),Ne=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let Ie=0,ee=Z.length;Ie<ee;Ie++){const oe=Z[Ie],De=Math.floor(oe.start/4),Re=Math.ceil(oe.count/4),xe=De%S.width,Qe=Math.floor(De/S.width),N=Re;a.pixelStorei(a.UNPACK_SKIP_PIXELS,xe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(a.TEXTURE_2D,0,xe,Qe,N,1,L,j,S.data)}E.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ce),a.pixelStorei(a.UNPACK_SKIP_PIXELS,he),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ne)}}function Y(E,S,L){let j=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=a.TEXTURE_3D);const Z=Xe(E,S),q=S.source;t.bindTexture(j,E.__webglTexture,a.TEXTURE0+L);const Ce=i.get(q);if(q.version!==Ce.__version||Z===!0){t.activeTexture(a.TEXTURE0+L);const he=tt.getPrimaries(tt.workingColorSpace),Ne=S.colorSpace===Gi?null:tt.getPrimaries(S.colorSpace),Ie=S.colorSpace===Gi||he===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ee=_(S.image,!1,r.maxTextureSize);ee=Ve(S,ee);const oe=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Re=M(S.internalFormat,oe,De,S.colorSpace,S.isVideoTexture);be(j,S);let xe;const Qe=S.mipmaps,N=S.isVideoTexture!==!0,de=Ce.__version===void 0||Z===!0,ne=q.dataReady,Ae=A(S,ee);if(S.isDepthTexture)Re=x(S.format===ar,S.type),de&&(N?t.texStorage2D(a.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(a.TEXTURE_2D,0,Re,ee.width,ee.height,0,oe,De,null));else if(S.isDataTexture)if(Qe.length>0){N&&de&&t.texStorage2D(a.TEXTURE_2D,Ae,Re,Qe[0].width,Qe[0].height);for(let ie=0,X=Qe.length;ie<X;ie++)xe=Qe[ie],N?ne&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,xe.width,xe.height,oe,De,xe.data):t.texImage2D(a.TEXTURE_2D,ie,Re,xe.width,xe.height,0,oe,De,xe.data);S.generateMipmaps=!1}else N?(de&&t.texStorage2D(a.TEXTURE_2D,Ae,Re,ee.width,ee.height),ne&&lt(S,ee,oe,De)):t.texImage2D(a.TEXTURE_2D,0,Re,ee.width,ee.height,0,oe,De,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Re,Qe[0].width,Qe[0].height,ee.depth);for(let ie=0,X=Qe.length;ie<X;ie++)if(xe=Qe[ie],S.format!==Vt)if(oe!==null)if(N){if(ne)if(S.layerUpdates.size>0){const Ee=uc(xe.width,xe.height,S.format,S.type);for(const ze of S.layerUpdates){const wt=xe.data.subarray(ze*Ee/xe.data.BYTES_PER_ELEMENT,(ze+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,ze,xe.width,xe.height,1,oe,wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,oe,xe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,Re,xe.width,xe.height,ee.depth,0,xe.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ne&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,ee.depth,oe,De,xe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ie,Re,xe.width,xe.height,ee.depth,0,oe,De,xe.data)}else{N&&de&&t.texStorage2D(a.TEXTURE_2D,Ae,Re,Qe[0].width,Qe[0].height);for(let ie=0,X=Qe.length;ie<X;ie++)xe=Qe[ie],S.format!==Vt?oe!==null?N?ne&&t.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,xe.width,xe.height,oe,xe.data):t.compressedTexImage2D(a.TEXTURE_2D,ie,Re,xe.width,xe.height,0,xe.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ne&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,xe.width,xe.height,oe,De,xe.data):t.texImage2D(a.TEXTURE_2D,ie,Re,xe.width,xe.height,0,oe,De,xe.data)}else if(S.isDataArrayTexture)if(N){if(de&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,Re,ee.width,ee.height,ee.depth),ne)if(S.layerUpdates.size>0){const ie=uc(ee.width,ee.height,S.format,S.type);for(const X of S.layerUpdates){const Ee=ee.data.subarray(X*ie/ee.data.BYTES_PER_ELEMENT,(X+1)*ie/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,X,ee.width,ee.height,1,oe,De,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,De,ee.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,oe,De,ee.data);else if(S.isData3DTexture)N?(de&&t.texStorage3D(a.TEXTURE_3D,Ae,Re,ee.width,ee.height,ee.depth),ne&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,De,ee.data)):t.texImage3D(a.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,oe,De,ee.data);else if(S.isFramebufferTexture){if(de)if(N)t.texStorage2D(a.TEXTURE_2D,Ae,Re,ee.width,ee.height);else{let ie=ee.width,X=ee.height;for(let Ee=0;Ee<Ae;Ee++)t.texImage2D(a.TEXTURE_2D,Ee,Re,ie,X,0,oe,De,null),ie>>=1,X>>=1}}else if(Qe.length>0){if(N&&de){const ie=ue(Qe[0]);t.texStorage2D(a.TEXTURE_2D,Ae,Re,ie.width,ie.height)}for(let ie=0,X=Qe.length;ie<X;ie++)xe=Qe[ie],N?ne&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,oe,De,xe):t.texImage2D(a.TEXTURE_2D,ie,Re,oe,De,xe);S.generateMipmaps=!1}else if(N){if(de){const ie=ue(ee);t.texStorage2D(a.TEXTURE_2D,Ae,Re,ie.width,ie.height)}ne&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,oe,De,ee)}else t.texImage2D(a.TEXTURE_2D,0,Re,oe,De,ee);g(S)&&m(j),Ce.__version=q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function re(E,S,L){if(S.image.length!==6)return;const j=Xe(E,S),Z=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+L);const q=i.get(Z);if(Z.version!==q.__version||j===!0){t.activeTexture(a.TEXTURE0+L);const Ce=tt.getPrimaries(tt.workingColorSpace),he=S.colorSpace===Gi?null:tt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Gi||Ce===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let X=0;X<6;X++)!Ie&&!ee?oe[X]=_(S.image[X],!0,r.maxCubemapSize):oe[X]=ee?S.image[X].image:S.image[X],oe[X]=Ve(S,oe[X]);const De=oe[0],Re=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Qe=M(S.internalFormat,Re,xe,S.colorSpace),N=S.isVideoTexture!==!0,de=q.__version===void 0||j===!0,ne=Z.dataReady;let Ae=A(S,De);be(a.TEXTURE_CUBE_MAP,S);let ie;if(Ie){N&&de&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,Qe,De.width,De.height);for(let X=0;X<6;X++){ie=oe[X].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const ze=ie[Ee];S.format!==Vt?Re!==null?N?ne&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee,Qe,ze.width,ze.height,0,ze.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee,0,0,ze.width,ze.height,Re,xe,ze.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee,Qe,ze.width,ze.height,0,Re,xe,ze.data)}}}else{if(ie=S.mipmaps,N&&de){ie.length>0&&Ae++;const X=ue(oe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,Qe,X.width,X.height)}for(let X=0;X<6;X++)if(ee){N?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,oe[X].width,oe[X].height,Re,xe,oe[X].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Qe,oe[X].width,oe[X].height,0,Re,xe,oe[X].data);for(let Ee=0;Ee<ie.length;Ee++){const ze=ie[Ee].image[X].image;N?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee+1,0,0,ze.width,ze.height,Re,xe,ze.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee+1,Qe,ze.width,ze.height,0,Re,xe,ze.data)}}else{N?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,xe,oe[X]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Qe,Re,xe,oe[X]);for(let Ee=0;Ee<ie.length;Ee++){const ze=ie[Ee];N?ne&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee+1,0,0,Re,xe,ze.image[X]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee+1,Qe,Re,xe,ze.image[X])}}}g(S)&&m(a.TEXTURE_CUBE_MAP),q.__version=Z.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function se(E,S,L,j,Z,q){const Ce=s.convert(L.format,L.colorSpace),he=s.convert(L.type),Ne=M(L.internalFormat,Ce,he,L.colorSpace),Ie=i.get(S),ee=i.get(L);if(ee.__renderTarget=S,!Ie.__hasExternalTextures){const oe=Math.max(1,S.width>>q),De=Math.max(1,S.height>>q);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,Ne,oe,De,S.depth,0,Ce,he,null):t.texImage2D(Z,q,Ne,oe,De,0,Ce,he,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),Le(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,Z,ee.__webglTexture,0,P(S)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,Z,ee.__webglTexture,q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function We(E,S,L){if(a.bindRenderbuffer(a.RENDERBUFFER,E),S.depthBuffer){const j=S.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=x(S.stencilBuffer,Z),Ce=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Le(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,P(S),q,S.width,S.height):L?a.renderbufferStorageMultisample(a.RENDERBUFFER,P(S),q,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,q,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ce,a.RENDERBUFFER,E)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],Ce=s.convert(q.format,q.colorSpace),he=s.convert(q.type),Ne=M(q.internalFormat,Ce,he,q.colorSpace);Le(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,P(S),Ne,S.width,S.height):L?a.renderbufferStorageMultisample(a.RENDERBUFFER,P(S),Ne,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Ne,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Be(E,S,L){const j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),be(a.TEXTURE_CUBE_MAP,S.depthTexture);const Ie=s.convert(S.depthTexture.format),ee=s.convert(S.depthTexture.type);let oe;S.depthTexture.format===Li?oe=a.DEPTH_COMPONENT24:S.depthTexture.format===ar&&(oe=a.DEPTH24_STENCIL8);for(let De=0;De<6;De++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,oe,S.width,S.height,0,Ie,ee,null)}}else k(S.depthTexture,0);const q=Z.__webglTexture,Ce=P(S),he=j?a.TEXTURE_CUBE_MAP_POSITIVE_X+L:a.TEXTURE_2D,Ne=S.depthTexture.format===ar?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===Li)Le(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ne,he,q,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,Ne,he,q,0);else if(S.depthTexture.format===ar)Le(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ne,he,q,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,Ne,he,q,0);else throw new Error("Unknown depthTexture format")}function ve(E){const S=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=j}if(E.depthTexture&&!S.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)Be(S.__webglFramebuffer[j],E,j);else{const j=E.texture.mipmaps;j&&j.length>0?Be(S.__webglFramebuffer[0],E,0):Be(S.__webglFramebuffer,E,0)}else if(L){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=a.createRenderbuffer(),We(S.__webglDepthbuffer[j],E,!1);else{const Z=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,q)}}else{const j=E.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),We(S.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,q),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,q)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function $e(E,S,L){const j=i.get(E);S!==void 0&&se(j.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),L!==void 0&&ve(E)}function K(E){const S=E.texture,L=i.get(E),j=i.get(S);E.addEventListener("dispose",R);const Z=E.textures,q=E.isWebGLCubeRenderTarget===!0,Ce=Z.length>1;if(Ce||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=S.version,n.memory.textures++),q){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)L.__webglFramebuffer[he][Ne]=a.createFramebuffer()}else L.__webglFramebuffer[he]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)L.__webglFramebuffer[he]=a.createFramebuffer()}else L.__webglFramebuffer=a.createFramebuffer();if(Ce)for(let he=0,Ne=Z.length;he<Ne;he++){const Ie=i.get(Z[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=a.createTexture(),n.memory.textures++)}if(E.samples>0&&Le(E)===!1){L.__webglMultisampledFramebuffer=a.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<Z.length;he++){const Ne=Z[he];L.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Ie=s.convert(Ne.format,Ne.colorSpace),ee=s.convert(Ne.type),oe=M(Ne.internalFormat,Ie,ee,Ne.colorSpace,E.isXRRenderTarget===!0),De=P(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,De,oe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,L.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=a.createRenderbuffer(),We(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(q){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),be(a.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)se(L.__webglFramebuffer[he][Ne],E,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne);else se(L.__webglFramebuffer[he],E,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,Ne=Z.length;he<Ne;he++){const Ie=Z[he],ee=i.get(Ie);let oe=a.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),be(oe,Ie),se(L.__webglFramebuffer,E,Ie,a.COLOR_ATTACHMENT0+he,oe,0),g(Ie)&&m(oe)}t.unbindTexture()}else{let he=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),be(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)se(L.__webglFramebuffer[Ne],E,S,a.COLOR_ATTACHMENT0,he,Ne);else se(L.__webglFramebuffer,E,S,a.COLOR_ATTACHMENT0,he,0);g(S)&&m(he),t.unbindTexture()}E.depthBuffer&&ve(E)}function $(E){const S=E.textures;for(let L=0,j=S.length;L<j;L++){const Z=S[L];if(g(Z)){const q=v(E),Ce=i.get(Z).__webglTexture;t.bindTexture(q,Ce),m(q),t.unbindTexture()}}}const ae=[],me=[];function _e(E){if(E.samples>0){if(Le(E)===!1){const S=E.textures,L=E.width,j=E.height;let Z=a.COLOR_BUFFER_BIT;const q=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=i.get(E),he=S.length>1;if(he)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ne=E.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const ee=i.get(S[Ie]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ee,0)}a.blitFramebuffer(0,0,L,j,0,0,L,j,Z,a.NEAREST),l===!0&&(ae.length=0,me.length=0,ae.push(a.COLOR_ATTACHMENT0+Ie),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ae.push(q),me.push(q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,me)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ie]);const ee=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ie,a.TEXTURE_2D,ee,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const S=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Le(E){const S=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(E){const S=n.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ve(E,S){const L=E.colorSpace,j=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==Hr&&L!==Gi&&(tt.getTransfer(L)===st?(j!==Vt||Z!==qt)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",L)),S}function ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=$e,this.setupRenderTarget=K,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Np(a,e){function t(i,r=Gi){let s;const n=tt.getTransfer(r);if(i===qt)return a.UNSIGNED_BYTE;if(i===Io)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Ac)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Ec)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===wc)return a.BYTE;if(i===Tc)return a.SHORT;if(i===bs)return a.UNSIGNED_SHORT;if(i===Ro)return a.INT;if(i===li)return a.UNSIGNED_INT;if(i===zt)return a.FLOAT;if(i===Pi)return a.HALF_FLOAT;if(i===Cc)return a.ALPHA;if(i===Rc)return a.RGB;if(i===Vt)return a.RGBA;if(i===Li)return a.DEPTH_COMPONENT;if(i===ar)return a.DEPTH_STENCIL;if(i===Lo)return a.RED;if(i===Aa)return a.RED_INTEGER;if(i===kr)return a.RG;if(i===No)return a.RG_INTEGER;if(i===Uo)return a.RGBA_INTEGER;if(i===ia||i===ra||i===sa||i===aa)if(n===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hn||i===Gn||i===Wn||i===Xn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jn||i===qn||i===Yn||i===Zn||i===Jn||i===Kn||i===$n)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jn||i===qn)return n===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zn)return s.COMPRESSED_R11_EAC;if(i===Jn)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kn)return s.COMPRESSED_RG11_EAC;if(i===$n)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qn||i===eo||i===to||i===io||i===ro||i===so||i===ao||i===no||i===oo||i===lo||i===co||i===ho||i===uo||i===po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qn)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ro)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uo)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return n===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===mo||i===go)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fo)return n===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===vo||i===yo||i===xo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
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

}`;class TM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ci({vertexShader:bM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends Ni{constructor(e,t){super();const i=this;let r=null,s=1,n=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,f=null;const _=typeof XRWebGLBinding<"u",g=new TM,m={},v=t.getContextAttributes();let M=null,x=null;const A=[],T=[],R=new J;let y=null;const b=new Ct;b.viewport=new ut;const U=new Ct;U.viewport=new ut;const I=[b,U],D=new Sp;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=A[Y];return re===void 0&&(re=new Pn,A[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=A[Y];return re===void 0&&(re=new Pn,A[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=A[Y];return re===void 0&&(re=new Pn,A[Y]=re),re.getHandSpace()};function k(Y){const re=T.indexOf(Y.inputSource);if(re===-1)return;const se=A[re];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||n),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<A.length;Y++){const re=T[Y];re!==null&&(T[Y]=null,A[Y].disconnect(re))}O=null,z=null,g.reset();for(const Y in m)delete m[Y];e.setRenderTarget(M),d=null,u=null,p=null,r=null,x=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,se=null,We=null;v.depth&&(We=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?ar:Li,se=v.stencil?ws:li);const Be={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ii(u.textureWidth,u.textureHeight,{format:Vt,type:qt,depthTexture:new Es(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ii(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,n=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(Y){for(let re=0;re<Y.removed.length;re++){const se=Y.removed[re],We=T.indexOf(se);We>=0&&(T[We]=null,A[We].disconnect(se))}for(let re=0;re<Y.added.length;re++){const se=Y.added[re];let We=T.indexOf(se);if(We===-1){for(let ve=0;ve<A.length;ve++)if(ve>=T.length){T.push(se),We=ve;break}else if(T[ve]===null){T[ve]=se,We=ve;break}if(We===-1)break}const Be=A[We];Be&&Be.connect(se)}}const te=new C,Q=new C;function ce(Y,re,se){te.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(se.matrixWorld);const We=te.distanceTo(Q),Be=re.projectionMatrix.elements,ve=se.projectionMatrix.elements,$e=Be[14]/(Be[10]-1),K=Be[14]/(Be[10]+1),$=(Be[9]+1)/Be[5],ae=(Be[9]-1)/Be[5],me=(Be[8]-1)/Be[0],_e=(ve[8]+1)/ve[0],P=$e*me,Le=$e*_e,Ue=We/(-me+_e),Ve=Ue*-me;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ve),Y.translateZ(Ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Be[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ue=$e+Ue,E=K+Ue,S=P-Ve,L=Le+(We-Ve),j=$*K/E*ue,Z=ae*K/E*ue;Y.projectionMatrix.makePerspective(S,L,j,Z,ue,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let re=Y.near,se=Y.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(se=g.depthFar)),D.near=U.near=b.near=re,D.far=U.far=b.far=se,(O!==D.near||z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,z=D.far),D.layers.mask=Y.layers.mask|6,b.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;const We=Y.parent,Be=D.cameras;Me(D,We);for(let ve=0;ve<Be.length;ve++)Me(Be[ve],We);Be.length===2?ce(D,b,U):D.projectionMatrix.copy(b.projectionMatrix),be(Y,D,We)};function be(Y,re,se){se===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return m[Y]};let Xe=null;function ot(Y,re){if(h=re.getViewerPose(c||n),f=re,h!==null){const se=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let We=!1;se.length!==D.cameras.length&&(D.cameras.length=0,We=!0);for(let ve=0;ve<se.length;ve++){const $e=se[ve];let K=null;if(d!==null)K=d.getViewport($e);else{const ae=p.getViewSubImage(u,$e);K=ae.viewport,ve===0&&(e.setRenderTargetTextures(x,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(x))}let $=I[ve];$===void 0&&($=new Ct,$.layers.enable(ve),$.viewport=new ut,I[ve]=$),$.matrix.fromArray($e.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray($e.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),ve===0&&(D.matrix.copy($.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),We===!0&&D.cameras.push($)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){p=i.getBinding();const ve=p.getDepthInformation(se[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,r.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let ve=0;ve<se.length;ve++){const $e=se[ve].camera;if($e){let K=m[$e];K||(K=new zc,m[$e]=K);const $=p.getCameraImage($e);K.sourceTexture=$}}}}for(let se=0;se<A.length;se++){const We=T[se],Be=A[se];We!==null&&Be!==void 0&&Be.update(We,re,c||n)}Xe&&Xe(Y,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null}const lt=new Cp;lt.setAnimationLoop(ot),this.setAnimationLoop=function(Y){Xe=Y},this.dispose=function(){}}}const Pr=new si,EM=new Ge;function CM(a,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ep(a)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,M,x){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),p(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),f(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(n(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,Pr.copy(x),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Pr)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function n(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RM(a,e,t,i){let r={},s={},n=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function c(v,M){let x=r[v.id];x===void 0&&(f(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",g));const A=M.program;i.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(u(v),s[v.id]=T)}function h(v){const M=p();v.__bindingPointIndex=M;const x=a.createBuffer(),A=v.__size,T=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,A,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,x),x}function p(){for(let v=0;v<o;v++)if(n.indexOf(v)===-1)return n.push(v),v;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=r[v.id],x=v.uniforms,A=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let T=0,R=x.length;T<R;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,U=y.length;b<U;b++){const I=y[b];if(d(I,T,b,A)===!0){const D=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let k=0;k<O.length;k++){const V=O[k],H=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,D+z,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,z),z+=H.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,D,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(v,M,x,A){const T=v.value,R=M+"_"+x;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const y=A[R];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return A[R]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function f(v){const M=v.uniforms;let x=0;const A=16;for(let R=0,y=M.length;R<y;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let U=0,I=b.length;U<I;U++){const D=b[U],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,k=O.length;z<k;z++){const V=O[z],H=_(V),te=x%A,Q=te%H.boundary,ce=te+Q;x+=Q,ce!==0&&A-ce<H.storage&&(x+=A-ce),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=H.storage}}}const T=x%A;return T>0&&(x+=A-T),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const x=n.indexOf(M.__bindingPointIndex);n.splice(x,1),a.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const v in r)a.deleteBuffer(r[v]);n=[],r={},s={}}return{bind:l,update:c,dispose:m}}const IM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function PM(){return wi===null&&(wi=new vi(IM,16,16,kr,Pi),wi.name="DFG_LUT",wi.minFilter=pt,wi.magFilter=pt,wi.wrapS=Zt,wi.wrapT=Zt,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class Up{constructor(e={}){const{canvas:t=Cd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:n=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qt}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;const _=d,g=new Set([Uo,No,Aa]),m=new Set([qt,li,bs,ws,Io,Po]),v=new Uint32Array(4),M=new Int32Array(4);let x=null,A=null;const T=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1;this._outputColorSpace=jt;let I=0,D=0,O=null,z=-1,k=null;const V=new ut,H=new ut;let te=null;const Q=new ye(0);let ce=0,Me=t.width,be=t.height,Xe=1,ot=null,lt=null;const Y=new ut(0,0,Me,be),re=new ut(0,0,Me,be);let se=!1;const We=new Ls;let Be=!1,ve=!1;const $e=new Ge,K=new C,$=new ut,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function _e(){return O===null?Xe:1}let P=i;function Le(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",wt,!1),P===null){const F="webgl2";if(P=Le(F,w),P===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Pe("WebGLRenderer: "+w.message),w}let Ue,Ve,ue,E,S,L,j,Z,q,Ce,he,Ne,Ie,ee,oe,De,Re,xe,Qe,N,de,ne,Ae;function ie(){Ue=new Ny(P),Ue.init(),de=new Np(P,Ue),Ve=new Ty(P,Ue,e,de),ue=new MM(P,Ue),Ve.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),E=new Fy(P),S=new oM,L=new SM(P,Ue,ue,S,Ve,de,E),j=new Ly(b),Z=new k_(P),ne=new by(P,Z),q=new Uy(P,Z,E,ne),Ce=new By(P,q,Z,ne,E),xe=new Oy(P,Ve,L),oe=new Ay(S),he=new nM(b,j,Ue,Ve,ne,oe),Ne=new CM(b,S),Ie=new cM,ee=new mM(Ue),Re=new Sy(b,j,ue,Ce,f,l),De=new xM(b,Ce,Ve),Ae=new RM(P,E,Ve,ue),Qe=new wy(P,Ue,E),N=new Dy(P,Ue,E),E.programs=he.programs,b.capabilities=Ve,b.extensions=Ue,b.properties=S,b.renderLists=Ie,b.shadowMap=De,b.state=ue,b.info=E}ie(),_!==qt&&(y=new Vy(_,t.width,t.height,r,s));const X=new AM(b,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(w){w!==void 0&&(Xe=w,this.setSize(Me,be,!1))},this.getSize=function(w){return w.set(Me,be)},this.setSize=function(w,F,W=!0){if(X.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,be=F,t.width=Math.floor(w*Xe),t.height=Math.floor(F*Xe),W===!0&&(t.style.width=w+"px",t.style.height=F+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Me*Xe,be*Xe).floor()},this.setDrawingBufferSize=function(w,F,W){Me=w,be=F,Xe=W,t.width=Math.floor(w*W),t.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(_===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,F,W,G){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,F,W,G),ue.viewport(V.copy(Y).multiplyScalar(Xe).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,F,W,G){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,F,W,G),ue.scissor(H.copy(re).multiplyScalar(Xe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){ue.setScissorTest(se=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let G=0;if(w){let B=!1;if(O!==null){const le=O.texture.format;B=g.has(le)}if(B){const le=O.texture.type,ge=m.has(le),Te=Re.getClearColor(),we=Re.getClearAlpha(),He=Te.r,Je=Te.g,et=Te.b;ge?(v[0]=He,v[1]=Je,v[2]=et,v[3]=we,P.clearBufferuiv(P.COLOR,0,v)):(M[0]=He,M[1]=Je,M[2]=et,M[3]=we,P.clearBufferiv(P.COLOR,0,M))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Re.dispose(),Ie.dispose(),ee.dispose(),S.dispose(),j.dispose(),Ce.dispose(),ne.dispose(),Ae.dispose(),he.dispose(),X.dispose(),X.removeEventListener("sessionstart",hh),X.removeEventListener("sessionend",uh),mr.stop()};function Ee(w){w.preventDefault(),ga("WebGLRenderer: Context Lost."),U=!0}function ze(){ga("WebGLRenderer: Context Restored."),U=!1;const w=E.autoReset,F=De.enabled,W=De.autoUpdate,G=De.needsUpdate,B=De.type;ie(),E.autoReset=w,De.enabled=F,De.autoUpdate=W,De.needsUpdate=G,De.type=B}function wt(w){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const F=w.target;F.removeEventListener("dispose",at),Di(F)}function Di(w){Fi(w),S.remove(w)}function Fi(w){const F=S.get(w).programs;F!==void 0&&(F.forEach(function(W){he.releaseProgram(W)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,G,B,le){F===null&&(F=ae);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Te=Fp(w,F,W,G,B);ue.setMaterial(G,ge);let we=W.index,He=1;if(G.wireframe===!0){if(we=q.getWireframeAttribute(W),we===void 0)return;He=2}const Je=W.drawRange,et=W.attributes.position;let Oe=Je.start*He,dt=(Je.start+Je.count)*He;le!==null&&(Oe=Math.max(Oe,le.start*He),dt=Math.min(dt,(le.start+le.count)*He)),we!==null?(Oe=Math.max(Oe,0),dt=Math.min(dt,we.count)):et!=null&&(Oe=Math.max(Oe,0),dt=Math.min(dt,et.count));const yt=dt-Oe;if(yt<0||yt===1/0)return;ne.setup(B,G,Te,W,we);let ft,ct=Qe;if(we!==null&&(ft=Z.get(we),ct=N,ct.setIndex(ft)),B.isMesh)G.wireframe===!0?(ue.setLineWidth(G.wireframeLinewidth*_e()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(B.isLine){let gt=G.linewidth;gt===void 0&&(gt=1),ue.setLineWidth(gt*_e()),B.isLineSegments?ct.setMode(P.LINES):B.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else B.isPoints?ct.setMode(P.POINTS):B.isSprite&&ct.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const gt=B._multiDrawStarts,Fe=B._multiDrawCounts,Kt=B._multiDrawCount,gr=we?Z.get(we).bytesPerElement:1,ui=S.get(G).currentProgram.getUniforms();for(let xi=0;xi<Kt;xi++)ui.setValue(P,"_gl_DrawID",xi),ct.render(gt[xi]/gr,Fe[xi])}else if(B.isInstancedMesh)ct.renderInstances(Oe,yt,B.count);else if(W.isInstancedBufferGeometry){const gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fe=Math.min(W.instanceCount,gt);ct.renderInstances(Oe,yt,Fe)}else ct.render(Oe,yt)};function ch(w,F,W){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=kt,w.needsUpdate=!0,Fa(w,F,W),w.side=qi,w.needsUpdate=!0,Fa(w,F,W),w.side=ni):Fa(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),A=ee.get(W),A.init(F),R.push(A),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const G=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Te=le[ge];ch(Te,W,B),G.add(Te)}else ch(le,W,B),G.add(le)}),A=R.pop(),G},this.compileAsync=function(w,F,W=null){const G=this.compile(w,F,W);return new Promise(B=>{function le(){if(G.forEach(function(ge){S.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){B(w);return}setTimeout(le,10)}Ue.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let nl=null;function Dp(w){nl&&nl(w)}function hh(){mr.stop()}function uh(){mr.start()}const mr=new Cp;mr.setAnimationLoop(Dp),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(w){nl=w,X.setAnimationLoop(w),w===null?mr.stop():mr.start()},X.addEventListener("sessionstart",hh),X.addEventListener("sessionend",uh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,G=y!==null&&(O===null||W)&&y.begin(b,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,F,O),A=ee.get(w,R.length),A.init(F),R.push(A),$e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix($e,ei,F.reversedDepth),ve=this.localClippingEnabled,Be=oe.init(this.clippingPlanes,ve),x=Ie.get(w,T.length),x.init(),T.push(x),X.enabled===!0&&X.isPresenting===!0){const le=b.xr.getDepthSensingMesh();le!==null&&ol(le,F,-1/0,b.sortObjects)}ol(w,F,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ot,lt),me=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,me&&Re.addToRenderList(x,w),this.info.render.frame++,Be===!0&&oe.beginShadows();const B=A.state.shadowsArray;if(De.render(B,w,F),Be===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&y.hasRenderPass())===!1){const le=x.opaque,ge=x.transmissive;if(A.setupLights(),F.isArrayCamera){const Te=F.cameras;if(ge.length>0)for(let we=0,He=Te.length;we<He;we++){const Je=Te[we];ph(le,ge,w,Je)}me&&Re.render(w);for(let we=0,He=Te.length;we<He;we++){const Je=Te[we];dh(x,w,Je,Je.viewport)}}else ge.length>0&&ph(le,ge,w,F),me&&Re.render(w),dh(x,w,F)}O!==null&&D===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),G&&y.end(b),w.isScene===!0&&w.onAfterRender(b,w,F),ne.resetDefaultState(),z=-1,k=null,R.pop(),R.length>0?(A=R[R.length-1],Be===!0&&oe.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function ol(w,F,W,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){G&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);const le=Ce.update(w),ge=w.material;ge.visible&&x.push(w,le,ge,W,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){const le=Ce.update(w),ge=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),$.copy(le.boundingSphere.center)),$.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(ge)){const Te=le.groups;for(let we=0,He=Te.length;we<He;we++){const Je=Te[we],et=ge[Je.materialIndex];et&&et.visible&&x.push(w,le,et,W,$.z,Je)}}else ge.visible&&x.push(w,le,ge,W,$.z,null)}}const B=w.children;for(let le=0,ge=B.length;le<ge;le++)ol(B[le],F,W,G)}function dh(w,F,W,G){const{opaque:B,transmissive:le,transparent:ge}=w;A.setupLightsView(W),Be===!0&&oe.setGlobalState(b.clippingPlanes,W),G&&ue.viewport(V.copy(G)),B.length>0&&Da(B,F,W),le.length>0&&Da(le,F,W),ge.length>0&&Da(ge,F,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ph(w,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const et=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new ii(1,1,{generateMipmaps:!0,type:et?Pi:qt,minFilter:Ti,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const B=A.state.transmissionRenderTarget[G.id],le=G.viewport||V;B.setSize(le.z*b.transmissionResolutionScale,le.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Te=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(B),b.getClearColor(Q),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),me&&Re.render(W);const He=b.toneMapping;b.toneMapping=_i;const Je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),Be===!0&&oe.setGlobalState(b.clippingPlanes,G),Da(w,W,G),L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Oe=0,dt=F.length;Oe<dt;Oe++){const yt=F[Oe],{object:ft,geometry:ct,material:gt,group:Fe}=yt;if(gt.side===ni&&ft.layers.test(G.layers)){const Kt=gt.side;gt.side=kt,gt.needsUpdate=!0,fh(ft,W,G,ct,gt,Fe),gt.side=Kt,gt.needsUpdate=!0,et=!0}}et===!0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B))}b.setRenderTarget(ge,Te,we),b.setClearColor(Q,ce),Je!==void 0&&(G.viewport=Je),b.toneMapping=He}function Da(w,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,le=w.length;B<le;B++){const ge=w[B],{object:Te,geometry:we,group:He}=ge;let Je=ge.material;Je.allowOverride===!0&&G!==null&&(Je=G),Te.layers.test(W.layers)&&fh(Te,F,W,we,Je,He)}}function fh(w,F,W,G,B,le){w.onBeforeRender(b,F,W,G,B,le),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(b,F,W,G,w,le),B.transparent===!0&&B.side===ni&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,b.renderBufferDirect(W,F,G,B,w,le),B.side=qi,B.needsUpdate=!0,b.renderBufferDirect(W,F,G,B,w,le),B.side=ni):b.renderBufferDirect(W,F,G,B,w,le),w.onAfterRender(b,F,W,G,B,le)}function Fa(w,F,W){F.isScene!==!0&&(F=ae);const G=S.get(w),B=A.state.lights,le=A.state.shadowsArray,ge=B.state.version,Te=he.getParameters(w,B.state,le,F,W),we=he.getProgramCacheKey(Te);let He=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=j.get(w.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",at),He=new Map,G.programs=He);let et=He.get(we);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===ge)return gh(w,Te),et}else Te.uniforms=he.getUniforms(w),w.onBeforeCompile(Te,b),et=he.acquireProgram(Te,we),He.set(we,et),G.uniforms=Te.uniforms;const Oe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=oe.uniform),gh(w,Te),G.needsLights=Bp(w),G.lightsStateVersion=ge,G.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=et,G.uniformsList=null,et}function mh(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ln.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function gh(w,F){const W=S.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Fp(w,F,W,G,B){F.isScene!==!0&&(F=ae),L.resetTextureUnits();const le=F.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Te=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Hr,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,He=j.get(G.envMap||ge,we),Je=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color;let ft=_i;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ft=b.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=ct!==void 0?ct.length:0,Fe=S.get(G),Kt=A.state.lights;if(Be===!0&&(ve===!0||w!==k)){const St=w===k&&G.id===z;oe.setState(G,w,St)}let gr=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Kt.state.version||Fe.outputColorSpace!==Te||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==He||G.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==et||Fe.morphTargets!==Oe||Fe.morphNormals!==dt||Fe.morphColors!==yt||Fe.toneMapping!==ft||Fe.morphTargetsCount!==gt)&&(gr=!0):(gr=!0,Fe.__version=G.version);let ui=Fe.currentProgram;gr===!0&&(ui=Fa(G,F,B));let xi=!1,_r=!1,Jr=!1;const ht=ui.getUniforms(),Rt=Fe.uniforms;if(ue.useProgram(ui.program)&&(xi=!0,_r=!0,Jr=!0),G.id!==z&&(z=G.id,_r=!0),xi||k!==w){ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",w.projectionMatrix),ht.setValue(P,"viewMatrix",w.matrixWorldInverse);const St=ht.map.cameraPosition;St!==void 0&&St.setValue(P,K.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,_r=!0,Jr=!0)}if(Fe.needsLights&&(Kt.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",Kt.state.directionalShadowMap,L),Kt.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",Kt.state.spotShadowMap,L),Kt.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",Kt.state.pointShadowMap,L)),B.isSkinnedMesh){ht.setOptional(P,B,"bindMatrix"),ht.setOptional(P,B,"bindMatrixInverse");const St=B.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ht.setValue(P,"boneTexture",St.boneTexture,L))}B.isBatchedMesh&&(ht.setOptional(P,B,"batchingTexture"),ht.setValue(P,"batchingTexture",B._matricesTexture,L),ht.setOptional(P,B,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",B._indirectTexture,L),ht.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",B._colorsTexture,L));const Zi=W.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&xe.update(B,W,ui),(_r||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,ht.setValue(P,"receiveShadow",B.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Rt.envMapIntensity.value=F.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=PM()),_r&&(ht.setValue(P,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&Op(Rt,Jr),le&&G.fog===!0&&Ne.refreshFogUniforms(Rt,le),Ne.refreshMaterialUniforms(Rt,G,Xe,be,A.state.transmissionRenderTarget[w.id]),Ln.upload(P,mh(Fe),Rt,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ln.upload(P,mh(Fe),Rt,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(P,"center",B.center),ht.setValue(P,"modelViewMatrix",B.modelViewMatrix),ht.setValue(P,"normalMatrix",B.normalMatrix),ht.setValue(P,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const St=G.uniformsGroups;for(let Ds=0,Kr=St.length;Ds<Kr;Ds++){const _h=St[Ds];Ae.update(_h,ui),Ae.bind(_h,ui)}}return ui}function Op(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Bp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,F,W){const G=S.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=F,S.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const W=S.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const zp=P.createFramebuffer();this.setRenderTarget=function(w,F=0,W=0){O=w,I=F,D=W;let G=null,B=!1,le=!1;if(w){const ge=S.get(w);if(ge.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(P.FRAMEBUFFER,ge.__webglFramebuffer),V.copy(w.viewport),H.copy(w.scissor),te=w.scissorTest,ue.viewport(V),ue.scissor(H),ue.setScissorTest(te),z=-1;return}else if(ge.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(ge.__hasExternalTextures)L.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&S.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const we=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(we[F])?G=we[F][W]:G=we[F],B=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?G=S.get(w).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[W]:G=we,V.copy(w.viewport),H.copy(w.scissor),te=w.scissorTest}else V.copy(Y).multiplyScalar(Xe).floor(),H.copy(re).multiplyScalar(Xe).floor(),te=se;if(W!==0&&(G=zp),ue.bindFramebuffer(P.FRAMEBUFFER,G)&&ue.drawBuffers(w,G),ue.viewport(V),ue.scissor(H),ue.setScissorTest(te),B){const ge=S.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,W)}else if(le){const ge=F;for(let Te=0;Te<w.textures.length;Te++){const we=S.get(w.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,we.__webglTexture,W,ge)}}else if(w!==null&&W!==0){const ge=S.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(w,F,W,G,B,le,ge,Te=0){if(!(w&&w.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){ue.bindFramebuffer(P.FRAMEBUFFER,we);try{const He=w.textures[Te],Je=He.format,et=He.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),!Ve.textureFormatReadable(Je)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(et)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&W>=0&&W<=w.height-B&&P.readPixels(F,W,G,B,de.convert(Je),de.convert(et),le)}finally{const He=O!==null?S.get(O).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,G,B,le,ge,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(F>=0&&F<=w.width-G&&W>=0&&W<=w.height-B){ue.bindFramebuffer(P.FRAMEBUFFER,we);const He=w.textures[Te],Je=He.format,et=He.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),!Ve.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(F,W,G,B,de.convert(Je),de.convert(et),0);const dt=O!==null?S.get(O).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,dt);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await zf(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Oe),P.deleteSync(yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){const G=Math.pow(2,-W),B=Math.floor(w.image.width*G),le=Math.floor(w.image.height*G),ge=F!==null?F.x:0,Te=F!==null?F.y:0;L.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ge,Te,B,le),ue.unbindTexture()};const Vp=P.createFramebuffer(),kp=P.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,G=null,B=0,le=0){let ge,Te,we,He,Je,et,Oe,dt,yt;const ft=w.isCompressedTexture?w.mipmaps[le]:w.image;if(W!==null)ge=W.max.x-W.min.x,Te=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,He=W.min.x,Je=W.min.y,et=W.isBox3?W.min.z:0;else{const Rt=Math.pow(2,-B);ge=Math.floor(ft.width*Rt),Te=Math.floor(ft.height*Rt),w.isDataArrayTexture?we=ft.depth:w.isData3DTexture?we=Math.floor(ft.depth*Rt):we=1,He=0,Je=0,et=0}G!==null?(Oe=G.x,dt=G.y,yt=G.z):(Oe=0,dt=0,yt=0);const ct=de.convert(F.format),gt=de.convert(F.type);let Fe;F.isData3DTexture?(L.setTexture3D(F,0),Fe=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(L.setTexture2DArray(F,0),Fe=P.TEXTURE_2D_ARRAY):(L.setTexture2D(F,0),Fe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),gr=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ui=P.getParameter(P.UNPACK_SKIP_PIXELS),xi=P.getParameter(P.UNPACK_SKIP_ROWS),_r=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,He),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,et);const Jr=w.isDataArrayTexture||w.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Rt=S.get(w),Zi=S.get(F),St=S.get(Rt.__renderTarget),Ds=S.get(Zi.__renderTarget);ue.bindFramebuffer(P.READ_FRAMEBUFFER,St.__webglFramebuffer),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Kr=0;Kr<we;Kr++)Jr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(w).__webglTexture,B,et+Kr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(F).__webglTexture,le,yt+Kr)),P.blitFramebuffer(He,Je,ge,Te,Oe,dt,ge,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||S.has(w)){const Rt=S.get(w),Zi=S.get(F);ue.bindFramebuffer(P.READ_FRAMEBUFFER,Vp),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,kp);for(let St=0;St<we;St++)Jr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,B,et+St):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,B),ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zi.__webglTexture,le,yt+St):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zi.__webglTexture,le),B!==0?P.blitFramebuffer(He,Je,ge,Te,Oe,dt,ge,Te,P.COLOR_BUFFER_BIT,P.NEAREST):ht?P.copyTexSubImage3D(Fe,le,Oe,dt,yt+St,He,Je,ge,Te):P.copyTexSubImage2D(Fe,le,Oe,dt,He,Je,ge,Te);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ht?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Fe,le,Oe,dt,yt,ge,Te,we,ct,gt,ft.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Fe,le,Oe,dt,yt,ge,Te,we,ct,ft.data):P.texSubImage3D(Fe,le,Oe,dt,yt,ge,Te,we,ct,gt,ft):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Oe,dt,ge,Te,ct,gt,ft.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Oe,dt,ft.width,ft.height,ct,ft.data):P.texSubImage2D(P.TEXTURE_2D,le,Oe,dt,ge,Te,ct,gt,ft);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gr),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,xi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_r),le===0&&F.generateMipmaps&&P.generateMipmap(Fe),ue.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){I=0,D=0,O=null,ue.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const LM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:yc,AddEquation:sr,AddOperation:fd,AdditiveAnimationBlendMode:Ic,AdditiveBlending:$l,AgXToneMapping:Mc,AlphaFormat:Cc,AlwaysCompare:Ad,AlwaysDepth:Fn,AlwaysStencilFunc:rc,AmbientLight:th,AnimationAction:Ap,AnimationClip:ba,AnimationLoader:Ig,AnimationMixer:n_,AnimationObjectGroup:s_,AnimationUtils:Ag,ArcCurve:Gd,ArrayCamera:Sp,ArrowHelper:L_,AttachedBindMode:tc,Audio:wp,AudioAnalyser:Yg,AudioContext:rh,AudioListener:Xg,AudioLoader:kg,AxesHelper:N_,BackSide:kt,BasicDepthPacking:yd,BasicShadowMap:Xp,BatchedMesh:Od,BezierInterpolant:up,Bone:Oc,BooleanKeyframeTrack:Yr,Box2:g_,Box3:Ut,Box3Helper:I_,BoxGeometry:jr,BoxHelper:R_,BufferAttribute:nt,BufferGeometry:je,BufferGeometryLoader:xp,ByteType:wc,Cache:Ai,Camera:il,CameraHelper:C_,CanvasTexture:jm,CapsuleGeometry:jo,CatmullRomCurve3:Wd,CineonToneMapping:vc,CircleGeometry:Ra,ClampToEdgeWrapping:Zt,Clock:p_,Color:ye,ColorKeyframeTrack:$c,ColorManagement:tt,Compatibility:Uf,CompressedArrayTexture:Wm,CompressedCubeTexture:Xm,CompressedTexture:Xo,CompressedTextureLoader:Pg,ConeGeometry:lr,ConstantAlphaFactor:ud,ConstantColorFactor:cd,Controls:D_,CubeCamera:Mp,CubeDepthTexture:kd,CubeReflectionMapping:Ii,CubeRefractionMapping:cr,CubeTexture:Ca,CubeTextureLoader:Lg,CubeUVReflectionMapping:Is,CubicBezierCurve:kc,CubicBezierCurve3:Xd,CubicInterpolant:cp,CullFaceBack:Kl,CullFaceFront:Yu,CullFaceFrontBack:Wp,CullFaceNone:qu,Curve:yi,CurvePath:qd,CustomBlending:Zu,CustomToneMapping:xc,CylinderGeometry:Ci,Cylindrical:m_,Data3DTexture:zo,DataArrayTexture:Bo,DataTexture:vi,DataTextureLoader:Ng,DataUtils:_m,DecrementStencilOp:uf,DecrementWrapStencilOp:pf,DefaultLoadingManager:pp,DepthFormat:Li,DepthStencilFormat:ar,DepthTexture:Es,DetachedBindMode:md,DirectionalLight:Ao,DirectionalLightHelper:E_,DiscreteInterpolant:hp,DodecahedronGeometry:Ia,DoubleSide:ni,DstAlphaFactor:sd,DstColorFactor:nd,DynamicCopyUsage:Cf,DynamicDrawUsage:Sf,DynamicReadUsage:Tf,EdgesGeometry:Hd,EllipseCurve:qo,EqualCompare:bd,EqualDepth:Bn,EqualStencilFunc:_f,EquirectangularReflectionMapping:Qs,EquirectangularRefractionMapping:ea,Euler:si,EventDispatcher:Ni,ExternalTexture:zc,ExtrudeGeometry:Yo,FileLoader:Yi,Float16BufferAttribute:wm,Float32BufferAttribute:Se,FloatType:zt,Fog:Ea,FogExp2:ko,FramebufferTexture:Gm,FrontSide:qi,Frustum:Ls,FrustumArray:Wo,GLBufferAttribute:u_,GLSL1:If,GLSL3:sc,GreaterCompare:wd,GreaterDepth:Vn,GreaterEqualCompare:Oo,GreaterEqualDepth:zn,GreaterEqualStencilFunc:Mf,GreaterStencilFunc:yf,GridHelper:T_,Group:Xi,HalfFloatType:Pi,HemisphereLight:fp,HemisphereLightHelper:w_,IcosahedronGeometry:Zo,ImageBitmapLoader:Vg,ImageLoader:wa,ImageUtils:Id,IncrementStencilOp:hf,IncrementWrapStencilOp:df,InstancedBufferAttribute:As,InstancedBufferGeometry:yp,InstancedInterleavedBuffer:h_,InstancedMesh:Fd,Int16BufferAttribute:Sm,Int32BufferAttribute:bm,Int8BufferAttribute:ym,IntType:Ro,InterleavedBuffer:Ho,InterleavedBufferAttribute:Wr,Interpolant:Ns,InterpolateBezier:ic,InterpolateDiscrete:ua,InterpolateLinear:Mo,InterpolateSmooth:In,InterpolationSamplingMode:Nf,InterpolationSamplingType:Lf,InvertStencilOp:ff,KeepStencilOp:Lr,KeyframeTrack:hi,LOD:Ud,LatheGeometry:Jo,Layers:Vo,LessCompare:Sd,LessDepth:On,LessEqualCompare:Fo,LessEqualDepth:Vr,LessEqualStencilFunc:vf,LessStencilFunc:gf,Light:fr,LightProbe:vp,Line:ur,Line3:y_,LineBasicMaterial:Gt,LineCurve:Hc,LineCurve3:jd,LineDashedMaterial:op,LineLoop:Bd,LineSegments:Ui,LinearFilter:pt,LinearInterpolant:Kc,LinearMipMapLinearFilter:Jp,LinearMipMapNearestFilter:Zp,LinearMipmapLinearFilter:Ti,LinearMipmapNearestFilter:ta,LinearSRGBColorSpace:Hr,LinearToneMapping:gc,LinearTransfer:pa,Loader:Jt,LoaderUtils:cc,LoadingManager:Qc,LoopOnce:gd,LoopPingPong:vd,LoopRepeat:_d,MOUSE:Hp,Material:Dt,MaterialBlending:jp,MaterialLoader:rl,MathUtils:rm,Matrix2:oh,Matrix3:qe,Matrix4:Ge,MaxEquation:Qu,Mesh:Ke,MeshBasicMaterial:ri,MeshDepthMaterial:Yc,MeshDistanceMaterial:Zc,MeshLambertMaterial:oi,MeshMatcapMaterial:np,MeshNormalMaterial:ap,MeshPhongMaterial:rp,MeshPhysicalMaterial:ip,MeshStandardMaterial:qc,MeshToonMaterial:sp,MinEquation:$u,MirroredRepeatWrapping:ha,MixOperation:pd,MultiplyBlending:ec,MultiplyOperation:Ta,NearestFilter:Mt,NearestMipMapLinearFilter:Yp,NearestMipMapNearestFilter:qp,NearestMipmapLinearFilter:xs,NearestMipmapNearestFilter:bc,NeutralToneMapping:Sc,NeverCompare:Md,NeverDepth:Dn,NeverStencilFunc:mf,NoBlending:Ei,NoColorSpace:Gi,NoNormalPacking:af,NoToneMapping:_i,NormalAnimationBlendMode:Do,NormalBlending:Or,NormalGAPacking:of,NormalRGPacking:nf,NotEqualCompare:Td,NotEqualDepth:kn,NotEqualStencilFunc:xf,NumberKeyframeTrack:Ma,Object3D:rt,ObjectLoader:Bg,ObjectSpaceNormalMap:xd,OctahedronGeometry:Pa,OneFactor:td,OneMinusConstantAlphaFactor:dd,OneMinusConstantColorFactor:hd,OneMinusDstAlphaFactor:ad,OneMinusDstColorFactor:od,OneMinusSrcAlphaFactor:Un,OneMinusSrcColorFactor:rd,OrthographicCamera:Ua,PCFShadowMap:$s,PCFSoftShadowMap:mc,PMREMGenerator:dc,Path:To,PerspectiveCamera:Ct,Plane:rr,PlaneGeometry:qr,PlaneHelper:P_,PointLight:gp,PointLightHelper:S_,Points:zd,PointsMaterial:Bc,PolarGridHelper:A_,PolyhedronGeometry:pr,PositionalAudio:qg,PropertyBinding:it,PropertyMixer:Tp,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Wc,Quaternion:Ht,QuaternionKeyframeTrack:Na,QuaternionLinearInterpolant:dp,R11_EAC_Format:Zn,RED_GREEN_RGTC2_Format:yo,RED_RGTC1_Format:_o,REVISION:Eo,RG11_EAC_Format:Kn,RGBADepthPacking:tf,RGBAFormat:Vt,RGBAIntegerFormat:Uo,RGBA_ASTC_10x10_Format:ho,RGBA_ASTC_10x5_Format:oo,RGBA_ASTC_10x6_Format:lo,RGBA_ASTC_10x8_Format:co,RGBA_ASTC_12x10_Format:uo,RGBA_ASTC_12x12_Format:po,RGBA_ASTC_4x4_Format:Qn,RGBA_ASTC_5x4_Format:eo,RGBA_ASTC_5x5_Format:to,RGBA_ASTC_6x5_Format:io,RGBA_ASTC_6x6_Format:ro,RGBA_ASTC_8x5_Format:so,RGBA_ASTC_8x6_Format:ao,RGBA_ASTC_8x8_Format:no,RGBA_BPTC_Format:fo,RGBA_ETC2_EAC_Format:Yn,RGBA_PVRTC_2BPPV1_Format:Xn,RGBA_PVRTC_4BPPV1_Format:Wn,RGBA_S3TC_DXT1_Format:ra,RGBA_S3TC_DXT3_Format:sa,RGBA_S3TC_DXT5_Format:aa,RGBDepthPacking:rf,RGBFormat:Rc,RGBIntegerFormat:Kp,RGB_BPTC_SIGNED_Format:mo,RGB_BPTC_UNSIGNED_Format:go,RGB_ETC1_Format:jn,RGB_ETC2_Format:qn,RGB_PVRTC_2BPPV1_Format:Gn,RGB_PVRTC_4BPPV1_Format:Hn,RGB_S3TC_DXT1_Format:ia,RGDepthPacking:sf,RGFormat:kr,RGIntegerFormat:No,RawShaderMaterial:jc,Ray:Ps,Raycaster:d_,RectAreaLight:_p,RedFormat:Lo,RedIntegerFormat:Aa,ReinhardToneMapping:_c,RenderTarget:Lc,RenderTarget3D:o_,RepeatWrapping:ca,ReplaceStencilOp:cf,ReverseSubtractEquation:Ku,RingGeometry:La,SIGNED_R11_EAC_Format:Jn,SIGNED_RED_GREEN_RGTC2_Format:xo,SIGNED_RED_RGTC1_Format:vo,SIGNED_RG11_EAC_Format:$n,SRGBColorSpace:jt,SRGBTransfer:st,Scene:Nc,ShaderChunk:Ze,ShaderLib:mi,ShaderMaterial:ci,ShadowMaterial:Qd,Shape:zr,ShapeGeometry:Ko,ShapePath:U_,ShapeUtils:gi,ShortType:Tc,Skeleton:Go,SkeletonHelper:M_,SkinnedMesh:Dd,Source:nr,Sphere:It,SphereGeometry:Ri,Spherical:f_,SphericalHarmonics3:ih,SplineCurve:Xc,SpotLight:mp,SpotLightHelper:x_,Sprite:Nd,SpriteMaterial:Fc,SrcAlphaFactor:Nn,SrcAlphaSaturateFactor:ld,SrcColorFactor:id,StaticCopyUsage:Ef,StaticDrawUsage:fa,StaticReadUsage:wf,StereoCamera:Hg,StreamCopyUsage:Rf,StreamDrawUsage:bf,StreamReadUsage:Af,StringKeyframeTrack:Zr,SubtractEquation:Ju,SubtractiveBlending:Ql,TOUCH:Gp,TangentSpaceNormalMap:dr,TetrahedronGeometry:$o,Texture:vt,TextureLoader:Ug,TextureUtils:V_,Timer:bp,TimestampQuery:Pf,TorusGeometry:Qo,TorusKnotGeometry:el,Triangle:Yt,TriangleFanDrawMode:ef,TriangleStripDrawMode:Qp,TrianglesDrawMode:$p,TubeGeometry:tl,UVMapping:Co,Uint16BufferAttribute:Uc,Uint32BufferAttribute:Dc,Uint8BufferAttribute:xm,Uint8ClampedBufferAttribute:Mm,Uniform:nh,UniformsGroup:c_,UniformsLib:fe,UniformsUtils:tp,UnsignedByteType:qt,UnsignedInt101111Type:Ec,UnsignedInt248Type:ws,UnsignedInt5999Type:Ac,UnsignedIntType:li,UnsignedShort4444Type:Io,UnsignedShort5551Type:Po,UnsignedShortType:bs,VSMShadowMap:ys,Vector2:J,Vector3:C,Vector4:ut,VectorKeyframeTrack:Sa,VideoFrameTexture:Hm,VideoTexture:Vd,WebGL3DRenderTarget:lm,WebGLArrayRenderTarget:om,WebGLCoordinateSystem:ei,WebGLCubeRenderTarget:lh,WebGLRenderTarget:ii,WebGLRenderer:Up,WebGLUtils:Np,WebGPUCoordinateSystem:Gr,WebXRController:Pn,WireframeGeometry:$d,WrapAroundEnding:da,ZeroCurvatureEnding:Ur,ZeroFactor:ed,ZeroSlopeEnding:Dr,ZeroStencilOp:lf,createCanvasElement:Cd,error:Pe,getConsoleFunction:Bf,log:ga,setConsoleFunction:Of,warn:pe,warnOnce:_a},Symbol.toStringTag,{value:"Module"}));class NM{constructor(e){this.containerId=e,this.container=document.getElementById(e),this.scene=new Nc,this.scene.background=new ye(1718810),this.camera=new Ct(60,window.innerWidth/window.innerHeight,.1,500),this.camera.position.set(0,15,15),this.camera.lookAt(0,0,0),this.cameraOffset={x:0,y:15,z:15},this.lookAhead=5,this.lerpFactor=.08,this.renderer=new Up({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mc,this.container.appendChild(this.renderer.domElement),this.setupLighting(),this.createGround(),this.scene.fog=new Ea(1718810,50,150),window.addEventListener("resize",()=>this.onResize())}setupLighting(){const e=new th(4210752,.6);this.scene.add(e),this.sunLight=new Ao(16777130,1),this.sunLight.position.set(10,20,10),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=100,this.sunLight.shadow.camera.left=-50,this.sunLight.shadow.camera.right=50,this.sunLight.shadow.camera.top=50,this.sunLight.shadow.camera.bottom=-50,this.scene.add(this.sunLight);const t=new Ao(4474026,.3);t.position.set(-10,5,-10),this.scene.add(t)}createGround(){const e=new qr(100,100,50,50),t=e.attributes.position;for(let r=0;r<t.count;r++){const s=t.getX(r),n=t.getY(r);t.setZ(r,Math.sin(s*.1)*.1+Math.cos(n*.1)*.1)}e.computeVertexNormals();const i=new oi({color:2263074,flatShading:!0});this.ground=new Ke(e,i),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground)}updateCamera(e,t){const i=e.x+this.cameraOffset.x,r=e.z+this.cameraOffset.z;this.camera.position.x+=(i-this.camera.position.x)*this.lerpFactor,this.camera.position.y+=(this.cameraOffset.y-this.camera.position.y)*this.lerpFactor,this.camera.position.z+=(r-this.camera.position.z)*this.lerpFactor;const s=e.x+t.x*this.lookAhead,n=e.z+t.z*this.lookAhead;this.camera.lookAt(s,0,n),this.sunLight.position.set(this.camera.position.x+10,20,this.camera.position.z+10),this.sunLight.target.position.copy(e)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}}class UM{constructor(e){this.scene=e,this.scene3d=e,this.config={initialLength:5,maxLength:50,speed:5,segmentSpacing:.8,turnSpeed:10},this.segments=[],this.direction={x:0,z:-1},this.nextDirection={x:0,z:-1},this.isGrowing=!1,this.moveTimer=0,this.moveInterval=.2,this.headMesh=null,this.bodyMeshes=[],this.tailMesh=null,this.createMeshes(),this.reset()}createMeshes(){const e=new oi({color:16763904,flatShading:!0}),t=new oi({color:16763904,flatShading:!0}),i=new oi({color:14522624,flatShading:!0}),r=new Ci(.6,.7,.6,12);this.headMesh=new Ke(r,e),this.headMesh.castShadow=!0,this.scene.getScene().add(this.headMesh);const s=new Ri(.15,8,8),n=new Ri(.08,6,6),o=new ri({color:16777215}),l=new ri({color:0}),c=new Ke(s,o);c.position.set(-.25,.25,-.35),this.headMesh.add(c);const h=new Ke(n,l);h.position.set(-.25,.3,-.4),this.headMesh.add(h);const p=new Ke(s,o);p.position.set(.25,.25,-.35),this.headMesh.add(p);const u=new Ke(n,l);u.position.set(.25,.3,-.4),this.headMesh.add(u),this.tongue=this.createTongue(),this.headMesh.add(this.tongue);for(let f=0;f<this.config.maxLength;f++){const _=new Ci(.45,.5,.5,10),g=new Ke(_,t.clone());g.castShadow=!0,g.visible=!1,this.scene.getScene().add(g),this.bodyMeshes.push(g)}const d=new lr(.4,.6,8);this.tailMesh=new Ke(d,i),this.tailMesh.castShadow=!0,this.tailMesh.visible=!1,this.scene.getScene().add(this.tailMesh)}createTongue(){const e=new Xi;e.name="tongue";const t=new ri({color:16724787,side:ni}),i=.4,r=.3,s=new lr(.04,i,4),n=new Ke(s,t);n.rotation.x=Math.PI/2,n.rotation.z=r,n.position.z=-i/2,e.add(n);const o=new lr(.04,i,4),l=new Ke(o,t);l.rotation.x=Math.PI/2,l.rotation.z=-r,l.position.z=-i/2,e.add(l);const c=new Ci(.04,.06,.15,6),h=new Ke(c,t);return h.rotation.x=Math.PI/2,e.add(h),e.position.set(0,.2,-.5),e}reset(){this.segments=[];const e=0,t=0;for(let i=0;i<this.config.initialLength;i++)this.segments.push({x:e,z:t+i*this.config.segmentSpacing,mesh:null});this.direction={x:0,z:-1},this.nextDirection={x:0,z:-1},this.moveInterval=.2,this.updateMeshPositions(),this.hideMeshes()}hideMeshes(){this.headMesh.visible=!1,this.bodyMeshes.forEach(e=>e.visible=!1),this.tailMesh.visible=!1}setDirection(e){e==="UP"&&this.direction.z!==1?this.nextDirection={x:0,z:-1}:e==="DOWN"&&this.direction.z!==-1?this.nextDirection={x:0,z:1}:e==="LEFT"&&this.direction.x!==1?this.nextDirection={x:-1,z:0}:e==="RIGHT"&&this.direction.x!==-1&&(this.nextDirection={x:1,z:0})}update(e){return this.direction={...this.nextDirection},this.moveTimer+=e,this.moveTimer>=this.moveInterval&&(this.moveTimer=0,this.move()),this.updateMeshPositions(),!1}move(){const e=this.segments[0];e.x+=this.direction.x,e.z+=this.direction.z,this.isGrowing&&(this.segments.push({x:e.x,z:e.z,mesh:null}),this.isGrowing=!1);for(let t=this.segments.length-1;t>0;t--){const i=this.segments[t],r=this.segments[t-1];i.x=r.x,i.z=r.z}}updateMeshPositions(){const e=this.segments[0];this.headMesh.position.set(e.x,.4,e.z),this.headMesh.rotation.y=Math.atan2(this.direction.x,this.direction.z),this.headMesh.visible=!0;for(let t=0;t<this.segments.length-1;t++){const i=this.segments[t],r=this.bodyMeshes[t];if(r&&t<this.bodyMeshes.length)if(r.position.set(i.x,.35,i.z),r.visible=!0,t<this.segments.length-2){const s=this.segments[t+1],n=Math.atan2(s.x-i.x,s.z-i.z);r.rotation.y=n}else{const s=Math.atan2(e.x-i.x,e.z-i.z);r.rotation.y=s}}if(this.segments.length>=2){const t=this.segments[this.segments.length-1],i=this.segments[this.segments.length-2];this.tailMesh.position.set(t.x,.3,t.z),this.tailMesh.rotation.y=Math.atan2(i.x-t.x,i.z-t.z)+Math.PI/2,this.tailMesh.visible=!0}}updateVisuals(e){if(this.tongue){const t=Math.sin(e*.01)*.05;this.tongue.scale.z=1+t}if(this.headMesh){const t=Math.sin(e*.005)*.02;this.headMesh.position.y=.4+t}}grow(){this.isGrowing=!0}getHeadPosition(){return this.segments.length>0?{x:this.segments[0].x,z:this.segments[0].z}:{x:0,z:0}}getBodyPositions(){return this.segments.slice(1).map(e=>({x:e.x,z:e.z}))}getDirection(){return this.direction}checkSelfCollision(){if(this.segments.length<2)return!1;const e=this.segments[0],t=.6;for(let i=4;i<this.segments.length;i++){const r=this.segments[i],s=e.x-r.x,n=e.z-r.z;if(Math.sqrt(s*s+n*n)<t)return!0}return!1}increaseSpeed(){this.moveInterval=Math.max(.1,this.moveInterval-.02)}}class DM{constructor(e){this.scene=e,this.position={x:0,z:0},this.mesh=null,this.createMesh()}createMesh(){this.mesh=new Xi;const e=new Ri(.4,10,8),t=new oi({color:16724787,flatShading:!0}),i=new Ke(e,t);i.scale.set(1,.9,1),i.castShadow=!0,this.mesh.add(i);const r=new Ci(.03,.05,.2,6),s=new oi({color:8939059}),n=new Ke(r,s);n.position.set(0,.45,0),this.mesh.add(n);const o=new Ri(.12,6,4),l=new oi({color:4508740}),c=new Ke(o,l);c.scale.set(1.5,.5,1),c.position.set(.1,.5,.05),c.rotation.z=.5,this.mesh.add(c);const h=new Ri(.08,6,6),p=new ri({color:16777215,transparent:!0,opacity:.6}),u=new Ke(h,p);u.position.set(-.15,.15,-.25),this.mesh.add(u),this.mesh.position.set(0,.5,0),this.scene.getScene().add(this.mesh),this.mesh.visible=!1}spawn(e,t){let i=!1,r=0;for(;!i&&r<100;){this.position.x=Math.floor(Math.random()*40)-20,this.position.z=Math.floor(Math.random()*40)-20;const s=this.position.x-e.x,n=this.position.z-e.z;if(Math.sqrt(s*s+n*n)<5){r++;continue}let o=!1;for(const l of t){const c=this.position.x-l.x,h=this.position.z-l.z;if(Math.sqrt(c*c+h*h)<2){o=!0;break}}o||(i=!0),r++}this.mesh.position.set(this.position.x,.5,this.position.z),this.mesh.visible=!0}update(e){if(!this.mesh.visible)return;const t=Math.sin(e*.003)*.08;this.mesh.position.y=.5+t,this.mesh.rotation.y=e*.001}checkCollision(e){const t=e.x-this.position.x,i=e.z-this.position.z;return Math.sqrt(t*t+i*i)<.8}hide(){this.mesh.visible=!1}}class FM{constructor(e){this.scene=e,this.obstacles=[],this.maxObstacles=15,this.stumpMat=new oi({color:8939076,flatShading:!0}),this.stumpTopMat=new oi({color:14527061,flatShading:!0}),this.rockMat=new oi({color:11184810,flatShading:!0})}clear(){this.obstacles.forEach(e=>{this.scene.getScene().remove(e.mesh)}),this.obstacles=[]}spawn(e,t){if(this.obstacles.length>=this.maxObstacles)return;let i=!1,r=0,s,n;for(;!i&&r<100;){s=Math.floor(Math.random()*40)-20,n=Math.floor(Math.random()*40)-20;const c=s-e.x,h=n-e.z;if(Math.sqrt(c*c+h*h)<5){r++;continue}let p=!1;for(const u of t){const d=s-u.x,f=n-u.z;if(Math.sqrt(d*d+f*f)<2){p=!0;break}}if(!p)for(const u of this.obstacles){const d=s-u.position.x,f=n-u.position.z;if(Math.sqrt(d*d+f*f)<3){p=!0;break}}p||(i=!0),r++}if(!i)return;const o=Math.random()<.6?"stump":"rock",l=this.createObstacleMesh(o);l.position.set(s,0,n),l.rotation.y=Math.random()*Math.PI*2,this.scene.getScene().add(l),this.obstacles.push({type:o,position:{x:s,z:n},mesh:l})}createObstacleMesh(e){const t=new Xi;if(e==="stump"){const i=new Ci(.8,1,1.2,8),r=new Ke(i,this.stumpMat);r.position.y=.6,r.castShadow=!0,r.receiveShadow=!0,t.add(r);const s=new Ra(.8,8),n=new Ke(s,this.stumpTopMat);n.rotation.x=-Math.PI/2,n.position.y=1.21,n.receiveShadow=!0,t.add(n);const o=new La(.2,.3,8),l=new ri({color:13408580,side:ni}),c=new Ke(o,l);c.rotation.x=-Math.PI/2,c.position.y=1.22,t.add(c)}else{const i=new Ia(.6,0),r=new Ke(i,this.rockMat);r.position.y=.5,r.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t}checkCollision(e){for(const t of this.obstacles){const i=e.x-t.position.x,r=e.z-t.position.z;if(Math.sqrt(i*i+r*r)<.6+.8)return!0}return!1}getObstacles(){return this.obstacles}}class OM{constructor(e){this.snake=e,this.setupKeyboard(),this.setupTouch()}setupKeyboard(){document.addEventListener("keydown",e=>{switch(e.code){case"ArrowUp":case"KeyW":e.preventDefault(),this.snake.setDirection("UP");break;case"ArrowDown":case"KeyS":e.preventDefault(),this.snake.setDirection("DOWN");break;case"ArrowLeft":case"KeyA":e.preventDefault(),this.snake.setDirection("LEFT");break;case"ArrowRight":case"KeyD":e.preventDefault(),this.snake.setDirection("RIGHT");break;case"Space":case"Escape":e.preventDefault(),window.game&&(window.game.state==="PLAYING"?window.game.showPause():window.game.state==="PAUSED"&&window.game.resume());break}})}setupTouch(){let e=0,t=0;const i=30;document.addEventListener("touchstart",r=>{e=r.touches[0].clientX,t=r.touches[0].clientY},{passive:!0}),document.addEventListener("touchend",r=>{if(!window.game||window.game.state!=="PLAYING")return;const s=r.changedTouches[0].clientX,n=r.changedTouches[0].clientY,o=s-e,l=n-t;Math.abs(o)<i&&Math.abs(l)<i||(Math.abs(o)>Math.abs(l)?o>0?this.snake.setDirection("RIGHT"):this.snake.setDirection("LEFT"):l>0?this.snake.setDirection("DOWN"):this.snake.setDirection("UP"))},{passive:!0})}setDirection(e){this.snake.setDirection(e)}}class BM{constructor(){this.state="MENU",this.mode="classic",this.score=0,this.timeLeft=60,this.lastTime=0,this.worldSize=100,this.cellSize=1,this.scene3d=new NM("canvasContainer"),this.snake=new UM(this.scene3d),this.food=new DM(this.scene3d),this.obstacles=new FM(this.scene3d),this.input=new OM(this.snake),this.ui={menu:document.getElementById("menuOverlay"),gameOver:document.getElementById("gameOverOverlay"),pause:document.getElementById("pauseOverlay"),score:document.getElementById("scoreDisplay"),time:document.getElementById("timeDisplay"),mode:document.getElementById("modeDisplay"),finalScore:document.getElementById("finalScore"),newRecord:document.getElementById("newRecord")},this.showMenu(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}setMode(e){this.mode=e;const t={classic:"🎮 经典",time:"⏱️ 限时",obstacle:"🧱 障碍"};this.ui.mode.textContent=t[e]||e}startGame(){if(this.state="PLAYING",this.score=0,this.timeLeft=60,this.lastTime=performance.now(),this.snake.reset(),this.food.spawn(this.snake.getHeadPosition(),[]),this.obstacles.clear(),this.mode==="obstacle")for(let e=0;e<5;e++)this.obstacles.spawn(this.snake.getHeadPosition(),[]);this.ui.score.textContent=`分数: ${this.score}`,this.ui.menu.classList.add("hidden"),this.ui.gameOver.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.ui.time.textContent=this.mode==="time"?`⏱️ ${Math.ceil(this.timeLeft)}s`:""}showMenu(){this.state="MENU",this.ui.menu.classList.remove("hidden"),this.ui.gameOver.classList.add("hidden"),this.ui.pause.classList.add("hidden")}showGameOver(){this.state="GAME_OVER";const e=`snakeV3_${this.mode}`,t=parseInt(localStorage.getItem(e)||"0");this.score>t?(localStorage.setItem(e,this.score.toString()),this.ui.newRecord.classList.remove("hidden")):this.ui.newRecord.classList.add("hidden"),this.ui.finalScore.textContent=this.score,this.ui.gameOver.classList.remove("hidden")}showPause(){this.state==="PLAYING"&&(this.state="PAUSED",this.ui.pause.classList.remove("hidden"))}resume(){this.state==="PAUSED"&&(this.state="PLAYING",this.lastTime=performance.now(),this.ui.pause.classList.add("hidden"))}showHighScores(){const e=localStorage.getItem("snakeV3_classic")||"0",t=localStorage.getItem("snakeV3_time")||"0",i=localStorage.getItem("snakeV3_obstacle")||"0";alert(`🏆 最高分
🎮 经典: ${e}
⏱️ 限时: ${t}
🧱 障碍: ${i}`)}handleDirection(e){this.state==="PLAYING"&&this.input.setDirection(e)}addScore(e){this.score+=e,this.ui.score.textContent=`分数: ${this.score}`,this.mode==="obstacle"&&this.score%30===0&&this.obstacles.spawn(this.snake.getHeadPosition(),this.snake.getBodyPositions()),this.mode==="time"&&this.score%50===0&&this.snake.increaseSpeed()}animate(e){requestAnimationFrame(this.animate);const t=(e-this.lastTime)/1e3;if(this.lastTime=e,this.state==="PLAYING"){this.mode==="time"&&(this.timeLeft-=t,this.ui.time.textContent=`⏱️ ${Math.ceil(Math.max(0,this.timeLeft))}s`,this.timeLeft<=0&&this.showGameOver());const i=this.snake.update(t,this.worldSize),r=this.snake.checkSelfCollision(),s=this.mode==="obstacle"&&this.obstacles.checkCollision(this.snake.getHeadPosition());(i||r||s)&&this.showGameOver(),this.food.checkCollision(this.snake.getHeadPosition())&&(this.addScore(10),this.snake.grow(),this.food.spawn(this.snake.getHeadPosition(),this.snake.getBodyPositions())),this.scene3d.updateCamera(this.snake.getHeadPosition(),this.snake.getDirection())}this.snake.updateVisuals(e),this.food.update(e),this.scene3d.render()}}window.THREE=LM;const zM=new BM;window.game=zM;window.selectMode=function(a){window.game.setMode(a),document.querySelectorAll(".mode-btn").forEach(e=>{e.classList.toggle("active",e.dataset.mode===a)})};document.querySelectorAll(".ctrl-btn").forEach(a=>{a.addEventListener("touchstart",e=>{e.preventDefault();const t=a.dataset.dir;window.game&&window.game.handleDirection(t.toUpperCase())})});console.log("🐍 Snake Game V3 - True 3D loaded");
