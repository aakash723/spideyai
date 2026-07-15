(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="185",vh=0,Gc=1,yh=2,Gs=1,Sh=2,Us=3,$n=0,Vt=1,Rn=2,jn=0,is=1,zc=2,Hc=3,Vc=4,Mh=5,Ti=100,Eh=101,Th=102,wh=103,Ah=104,Rh=200,Ch=201,Ph=202,Lh=203,so=204,ro=205,Dh=206,Ih=207,Nh=208,Fh=209,Uh=210,kh=211,Oh=212,Bh=213,Gh=214,ao=0,oo=1,co=2,cs=3,lo=4,ho=5,uo=6,fo=7,ud=0,zh=1,Hh=2,Ln=0,fd=1,pd=2,md=3,ac=4,gd=5,bd=6,_d=7,Wc="attached",Vh="detached",xd=300,Li=301,ls=302,ga=303,ba=304,ia=306,ds=1e3,Cn=1001,Wr=1002,Tt=1003,vd=1004,ks=1005,wt=1006,Ur=1007,Wn=1008,$t=1009,yd=1010,Sd=1011,Xs=1012,oc=1013,Nn=1014,rn=1015,Yn=1016,cc=1017,lc=1018,js=1020,Md=35902,Ed=35899,Td=1021,wd=1022,an=1023,Jn=1026,Ai=1027,dc=1028,hc=1029,Di=1030,uc=1031,fc=1033,kr=33776,Or=33777,Br=33778,Gr=33779,po=35840,mo=35841,go=35842,bo=35843,_o=36196,xo=37492,vo=37496,yo=37488,So=37489,qr=37490,Mo=37491,Eo=37808,To=37809,wo=37810,Ao=37811,Ro=37812,Co=37813,Po=37814,Lo=37815,Do=37816,Io=37817,No=37818,Fo=37819,Uo=37820,ko=37821,Oo=36492,Bo=36494,Go=36495,zo=36283,Ho=36284,Xr=36285,Vo=36286,pc=2200,Wh=2201,qh=2202,Ks=2300,$s=2301,_a=2302,qc=2303,es=2400,ts=2401,jr=2402,mc=2500,Xh=2501,jh=0,Ad=1,Wo=2,Kh=3200,qo=0,$h=1,li="",St="srgb",Wt="srgb-linear",Kr="linear",et="srgb",Ui=7680,Xc=519,Yh=512,Jh=513,Zh=514,gc=515,Qh=516,eu=517,bc=518,tu=519,Xo=35044,jc="300 es",Pn=2e3,Ys=2001;function nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function iu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function su(){const s=Js("canvas");return s.style.display="block",s}const Kc={};function $r(...s){const e="THREE."+s.shift();console.log(e,...s)}function Rd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ee(...s){s=Rd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ie(...s){s=Rd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ss(...s){const e=s.join(" ");e in Kc||(Kc[e]=!0,Ee(...s))}function ru(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const au={[ao]:oo,[co]:uo,[lo]:fo,[cs]:ho,[oo]:ao,[uo]:co,[fo]:lo,[ho]:cs};class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const zs=Math.PI/180,hs=180/Math.PI;function bn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function _c(s,e){return(s%e+e)%e}function ou(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cu(s,e,t){return s!==e?(t-s)/(e-s):0}function Hs(s,e,t){return(1-t)*s+t*e}function lu(s,e,t,n){return Hs(s,e,1-Math.exp(-t*n))}function du(s,e=1){return e-Math.abs(_c(s,e*2)-e)}function hu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pu(s,e){return s+Math.random()*(e-s)}function mu(s){return s*(.5-Math.random())}function gu(s){s!==void 0&&($c=s);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bu(s){return s*zs}function _u(s){return s*hs}function xu(s){return(s&s-1)===0&&s!==0}function vu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Su(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*d,c*h,c*u,o*l);break;case"YZY":s.set(c*u,o*d,c*h,o*l);break;case"ZXZ":s.set(c*h,c*u,o*d,o*l);break;case"XZX":s.set(o*d,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*d,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*d,o*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Mu={DEG2RAD:zs,RAD2DEG:hs,generateUUID:bn,clamp:qe,euclideanModulo:_c,mapLinear:ou,inverseLerp:cu,lerp:Hs,damp:lu,pingpong:du,smoothstep:hu,smootherstep:uu,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:bu,radToDeg:_u,isPowerOfTwo:xu,ceilPowerOfTwo:vu,floorPowerOfTwo:yu,setQuaternionFromProperEuler:Su,normalize:tt,denormalize:pn};class Xe{static{Xe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||c!==u||l!==f||d!==g){let m=c*u+l*f+d*g+h*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+x*o}else{c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+x*o;const S=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=S,l*=S,d*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-r*c,this._y=i*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{static{k.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=i+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new k,Yc=new on;class Ue{static{Ue.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],S=i[1],E=i[4],v=i[7],T=i[2],M=i[5],R=i[8];return r[0]=a*x+o*S+c*T,r[3]=a*m+o*E+c*M,r[6]=a*p+o*v+c*R,r[1]=l*x+d*S+h*T,r[4]=l*m+d*E+h*M,r[7]=l*p+d*v+h*R,r[2]=u*x+f*S+g*T,r[5]=u*m+f*E+g*M,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*l-d*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(d*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(va.makeScale(e,t)),this}rotate(e){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(va.makeRotation(-e)),this}translate(e,t){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Ue,Jc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eu(){const s={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wt]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:Jc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Jc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}const Ve=Eu();function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ki;class Tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ki===void 0&&(ki=Js("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ya(i[a].image)):r.push(ya(i[a]))}else r=ya(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let Au=0;const Sa=new k;class Lt extends bi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Cn,i=Cn,r=wt,a=Wn,o=an,c=$t,l=Lt.DEFAULT_ANISOTROPY,d=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=bn(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=xd;Lt.DEFAULT_ANISOTROPY=1;class it{static{it.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(f+1)/2,T=(p+1)/2,M=(d+u)/4,R=(h+x)/4,_=(g+m)/4;return E>v&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=M/n,r=R/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=_/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=_/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(u-d)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Lt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{static{Ge.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,d,h,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,d,h,u,f,g,x,m)}set(e,t,n,i,r,a,o,c,l,d,h,u,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,x=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,x=l*h;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,x=l*h;t[0]=u-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,x=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+x,t[1]=c*h,t[5]=x*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=x-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+x,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Lu)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(n,jt),ni.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(n,jt)),ni.normalize(),sr.crossVectors(jt,ni),i[0]=ni.x,i[4]=sr.x,i[8]=jt.x,i[1]=ni.y,i[5]=sr.y,i[9]=jt.y,i[2]=ni.z,i[6]=sr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],E=n[7],v=n[11],T=n[15],M=i[0],R=i[4],_=i[8],A=i[12],D=i[1],P=i[5],O=i[9],j=i[13],Z=i[2],z=i[6],K=i[10],q=i[14],ne=i[3],re=i[7],W=i[11],te=i[15];return r[0]=a*M+o*D+c*Z+l*ne,r[4]=a*R+o*P+c*z+l*re,r[8]=a*_+o*O+c*K+l*W,r[12]=a*A+o*j+c*q+l*te,r[1]=d*M+h*D+u*Z+f*ne,r[5]=d*R+h*P+u*z+f*re,r[9]=d*_+h*O+u*K+f*W,r[13]=d*A+h*j+u*q+f*te,r[2]=g*M+x*D+m*Z+p*ne,r[6]=g*R+x*P+m*z+p*re,r[10]=g*_+x*O+m*K+p*W,r[14]=g*A+x*j+m*q+p*te,r[3]=S*M+E*D+v*Z+T*ne,r[7]=S*R+E*P+v*z+T*re,r[11]=S*_+E*O+v*K+T*W,r[15]=S*A+E*j+v*q+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=c*f-l*u,E=o*f-l*h,v=o*u-c*h,T=a*f-l*d,M=a*u-c*d,R=a*h-o*d;return t*(x*S-m*E+p*v)-n*(g*S-m*T+p*M)+i*(g*E-x*T+p*R)-r*(g*v-x*M+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+i*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=t*o-n*a,E=t*c-i*a,v=t*l-r*a,T=n*c-i*o,M=n*l-r*o,R=i*l-r*c,_=d*x-h*g,A=d*m-u*g,D=d*p-f*g,P=h*m-u*x,O=h*p-f*x,j=u*p-f*m,Z=S*j-E*O+v*P+T*D-M*A+R*_;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Z;return e[0]=(o*j-c*O+l*P)*z,e[1]=(i*O-n*j-r*P)*z,e[2]=(x*R-m*M+p*T)*z,e[3]=(u*M-h*R-f*T)*z,e[4]=(c*D-a*j-l*A)*z,e[5]=(t*j-i*D+r*A)*z,e[6]=(m*v-g*R-p*E)*z,e[7]=(d*R-u*v+f*E)*z,e[8]=(a*O-o*D+l*_)*z,e[9]=(n*D-t*O-r*_)*z,e[10]=(g*M-x*v+p*S)*z,e[11]=(h*v-d*M-f*S)*z,e[12]=(o*A-a*P-c*_)*z,e[13]=(t*P-n*A+i*_)*z,e[14]=(x*E-g*T-m*S)*z,e[15]=(d*T-h*E+u*S)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,x=a*d,m=a*h,p=o*h,S=c*l,E=c*d,v=c*h,T=n.x,M=n.y,R=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+v)*T,i[2]=(g-E)*T,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(u+p))*M,i[6]=(m+S)*M,i[7]=0,i[8]=(g+E)*R,i[9]=(m-S)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),c=Oi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ln.copy(this);const l=1/a,d=1/o,h=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Pn,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ys)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Pn,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Pn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ys)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new k,ln=new Ge,Pu=new k(0,0,0),Lu=new k(1,1,1),ni=new k,sr=new k,jt=new k,Qc=new Ge,el=new on;class mi{constructor(e=0,t=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const tl=new k,Bi=new on,On=new Ge,rr=new k,Ms=new k,Iu=new k,Nu=new on,nl=new k(1,0,0),il=new k(0,1,0),sl=new k(0,0,1),rl={type:"added"},Fu={type:"removed"},Gi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class dt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new k,t=new mi,n=new on,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ue}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(il,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(il,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ms,rr,this.up):On.lookAt(rr,Ms,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(On),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new k(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ri extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uu={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=_c(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ta(a,r,e+1/3),this.g=Ta(a,r,e),this.b=Ta(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ve.workingToColorSpace(Ot.copy(this),e),Math.round(qe(Ot.r*255,0,255))*65536+Math.round(qe(Ot.g*255,0,255))*256+Math.round(qe(Ot.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=St){Ve.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ar);const n=Hs(ii.h,ar.h,t),i=Hs(ii.s,ar.s,t),r=Hs(ii.l,ar.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ne;Ne.NAMES=Ld;class ku extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new k,Bn=new k,wa=new k,Gn=new k,zi=new k,Hi=new k,al=new k,Aa=new k,Ra=new k,Ca=new k,Pa=new it,La=new it,Da=new it;class mn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){dn.subVectors(i,t),Bn.subVectors(n,t),wa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Bn),c=dn.dot(wa),l=Bn.dot(Bn),d=Bn.dot(wa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Bn.subVectors(e,t),dn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;zi.subVectors(i,n),Hi.subVectors(r,n),Aa.subVectors(e,n);const c=zi.dot(Aa),l=Hi.dot(Aa);if(c<=0&&l<=0)return t.copy(n);Ra.subVectors(e,i);const d=zi.dot(Ra),h=Hi.dot(Ra);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(zi,a);Ca.subVectors(e,r);const f=zi.dot(Ca),g=Hi.dot(Ca);if(g>=0&&f<=g)return t.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Hi,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return al.subVectors(r,i),o=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(al,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),cr.subVectors(this.max,Es),Vi.subVectors(e.a,Es),Wi.subVectors(e.b,Es),qi.subVectors(e.c,Es),si.subVectors(Wi,Vi),ri.subVectors(qi,Wi),xi.subVectors(Vi,qi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-xi.z,xi.y,si.z,0,-si.x,ri.z,0,-ri.x,xi.z,0,-xi.x,-si.y,si.x,0,-ri.y,ri.x,0,-xi.y,xi.x,0];return!Ia(t,Vi,Wi,qi,cr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Vi,Wi,qi,cr))?!1:(lr.crossVectors(si,ri),t=[lr.x,lr.y,lr.z],Ia(t,Vi,Wi,qi,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new k,new k,new k,new k,new k,new k,new k,new k],hn=new k,or=new Zn,Vi=new k,Wi=new k,qi=new k,si=new k,ri=new k,xi=new k,Es=new k,cr=new k,lr=new k,vi=new k;function Ia(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){vi.fromArray(s,r);const o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),d=n.dot(vi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const yt=new k,dr=new Xe;let Ou=0;class Ft extends bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ou++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Id extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bu=new Zn,Ts=new k,Na=new k;class Un{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Na)),this.expandByPoint(Ts.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gu=0;const en=new Ge,Fa=new dt,Xi=new k,Kt=new Zn,ws=new Zn,Pt=new k;class Zt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?Id:Dd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,ws.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,ws.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(ws.min),Kt.expandByPoint(ws.max))}Kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Pt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),Pt.add(Xi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new k,c[_]=new k;const l=new k,d=new k,h=new k,u=new Xe,f=new Xe,g=new Xe,x=new k,m=new k;function p(_,A,D){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,D),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,D),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),o[_].add(x),o[A].add(x),o[D].add(x),c[_].add(m),c[A].add(m),c[D].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){const D=S[_],P=D.start,O=D.count;for(let j=P,Z=P+O;j<Z;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const E=new k,v=new k,T=new k,M=new k;function R(_){T.fromBufferAttribute(i,_),M.copy(T);const A=o[_];E.copy(A),E.sub(T.multiplyScalar(T.dot(A))).normalize(),v.crossVectors(M,A);const P=v.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,P)}for(let _=0,A=S.length;_<A;++_){const D=S[_],P=D.start,O=D.count;for(let j=P,Z=P+O;j<Z;j+=3)R(e.getX(j+0)),R(e.getX(j+1)),R(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new k,r=new k,a=new k,o=new k,c=new k,l=new k,d=new k,h=new k;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Ft(u,d,h)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xo,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new k;class sa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zu=0;class In extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=is,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new k,Ua=new k,hr=new k,ai=new k,ka=new k,ur=new k,Oa=new k;class ra{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ua.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=ai.dot(this.direction),c=-ai.dot(hr),l=ai.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ua).addScaledVector(hr,u),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){ka.subVectors(t,e),ur.subVectors(n,e),Oa.crossVectors(ka,ur);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const c=o*this.direction.dot(ur.crossVectors(ai,ur));if(c<0)return null;const l=o*this.direction.dot(ka.cross(ai));if(l<0||c+l>a)return null;const d=-o*ai.dot(Oa);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ci extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ol=new Ge,yi=new ra,fr=new Un,cl=new k,pr=new k,mr=new k,gr=new k,Ba=new k,br=new k,ll=new k,_r=new k;class Jt extends dt{constructor(e=new Zt,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Ba.fromBufferAttribute(h,e),a?br.addScaledVector(Ba,d):br.addScaledVector(Ba.sub(t),d))}t.add(br)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(fr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(fr,cl)===null||yi.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ol.copy(r).invert(),yi.copy(e.ray).applyMatrix4(ol),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,T=E;v<T;v+=3){const M=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);i=xr(this,p,e,n,l,d,h,M,R,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=xr(this,a,e,n,l,d,h,S,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,T=E;v<T;v+=3){const M=v,R=v+1,_=v+2;i=xr(this,p,e,n,l,d,h,M,R,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,E=m+1,v=m+2;i=xr(this,a,e,n,l,d,h,S,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hu(s,e,t,n,i,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===$n,o),c===null)return null;_r.copy(o),_r.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:s}}function xr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,pr),s.getVertexPosition(c,mr),s.getVertexPosition(l,gr);const d=Hu(s,e,t,n,pr,mr,gr,ll);if(d){const h=new k;mn.getBarycoord(ll,pr,mr,gr,h),i&&(d.uv=mn.getInterpolatedAttribute(i,o,c,l,h,new Xe)),r&&(d.uv1=mn.getInterpolatedAttribute(r,o,c,l,h,new Xe)),a&&(d.normal=mn.getInterpolatedAttribute(a,o,c,l,h,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new k,materialIndex:0};mn.getNormal(pr,mr,gr,u.normal),d.face=u,d.barycoord=h}return d}const As=new it,dl=new it,hl=new it,Vu=new it,ul=new Ge,vr=new k,Ga=new Un,fl=new Ge,za=new ra;class Wu extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1&&(fl.copy(i).invert(),za.copy(e.ray).applyMatrix4(fl),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;dl.fromBufferAttribute(i.attributes.skinIndex,e),hl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(As.copy(t),t.set(0,0,0,0)):(As.set(...t,1),t.set(0,0,0)),As.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=hl.getComponent(r);if(a!==0){const o=dl.getComponent(r);ul.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vu.copy(As).applyMatrix4(ul),a)}}return t.isVector4&&(t.w=As.w),t.applyMatrix4(this.bindMatrixInverse)}}class Fd extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vc extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Tt,d=Tt,h,u){super(null,a,o,c,l,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new Ge,qu=new Ge;class yc{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:qu;pl.multiplyMatrices(o,t[r]),pl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vc(t,e,e,an,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ee("Skeleton: No bone found with UUID:",r),a=new Fd),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class jo extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Ge,ml=new Ge,yr=[],gl=new Zn,Xu=new Ge,Rs=new Jt,Cs=new Un;class ju extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),gl.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(gl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Cs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),ml.multiplyMatrices(n,ji),Rs.matrixWorld=ml,Rs.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){const c=yr[a];c.instanceId=r,c.object=this,t.push(c)}yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new vc(new Float32Array(i*this.count),i,this.count,dc,rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ha=new k,Ku=new k,$u=new Ue;class Ei{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$u.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Un,Yu=new Xe(.5,.5),Sr=new k;class Sc{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],E=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-a,f-d,p-g,T-S).normalize(),i[1].setComponents(l+a,f+d,p+g,T+S).normalize(),i[2].setComponents(l+o,f+h,p+x,T+E).normalize(),i[3].setComponents(l-o,f-h,p-x,T-E).normalize(),n)i[4].setComponents(c,u,m,v).normalize(),i[5].setComponents(l-c,f-u,p-m,T-v).normalize();else if(i[4].setComponents(l-c,f-u,p-m,T-v).normalize(),t===Pn)i[5].setComponents(l+c,f+u,p+m,T+v).normalize();else if(t===Ys)i[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=Yu.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ud extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new k,Jr=new k,bl=new Ge,Ps=new ra,Mr=new Un,Va=new k,_l=new k;class Mc extends dt{constructor(e=new Zt,t=new Ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yr.fromBufferAttribute(t,i-1),Jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yr.distanceTo(Jr);e.setAttribute("lineDistance",new _n(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;bl.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=d.getX(x),S=d.getX(x+1),E=Er(this,e,Ps,c,p,S,x);E&&t.push(E)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(f),p=Er(this,e,Ps,c,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){const p=Er(this,e,Ps,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Er(this,e,Ps,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Yr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),t.distanceSqToSegment(Yr,Jr,Va,_l)>n)return;Va.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Va);if(!(l<e.near||l>e.far))return{distance:l,point:_l.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const xl=new k,vl=new k;class Ju extends Mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)xl.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xl.distanceTo(vl);e.setAttribute("lineDistance",new _n(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zu extends Mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kd extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yl=new Ge,Ko=new ra,Tr=new Un,wr=new k;class Qu extends dt{constructor(e=new Zt,t=new kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;yl.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,x=f;g<x;g++){const m=l.getX(g);wr.fromBufferAttribute(h,m),Sl(wr,m,c,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,x=f;g<x;g++)wr.fromBufferAttribute(h,g),Sl(wr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sl(s,e,t,n,i,r,a){const o=Ko.distanceSqToPoint(s);if(o<t){const c=new k;Ko.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Od extends Lt{constructor(e=[],t=Li,n,i,r,a,o,c,l,d){super(e,t,n,i,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class us extends Lt{constructor(e,t,n=Nn,i,r,a,o=Tt,c=Tt,l,d=Jn,h=1){if(d!==Jn&&d!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ef extends us{constructor(e,t=Nn,n=Li,i,r,a=Tt,o=Tt,c,l=Jn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,i,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bd extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tr extends Zt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(h,2));function g(x,m,p,S,E,v,T,M,R,_,A){const D=v/R,P=T/_,O=v/2,j=T/2,Z=M/2,z=R+1,K=_+1;let q=0,ne=0;const re=new k;for(let W=0;W<K;W++){const te=W*P-j;for(let ae=0;ae<z;ae++){const Le=ae*D-O;re[x]=Le*S,re[m]=te*E,re[p]=Z,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=M>0?1:-1,d.push(re.x,re.y,re.z),h.push(ae/R),h.push(1-W/_),q+=1}}for(let W=0;W<_;W++)for(let te=0;te<R;te++){const ae=u+te+z*W,Le=u+te+z*(W+1),je=u+(te+1)+z*(W+1),Fe=u+(te+1)+z*W;c.push(ae,Le,Fe),c.push(Le,je,Fe),ne+=6}o.addGroup(f,ne,A),f+=ne,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class aa extends Zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const S=p*u-a;for(let E=0;E<l;E++){const v=E*h-r;g.push(v,-S,0),x.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const E=S+l*p,v=S+l*(p+1),T=S+1+l*(p+1),M=S+1+l*p;f.push(E,v,M),f.push(v,T,M)}this.setIndex(f),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}function fs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Ml(i))i.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ml(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=fs(s[t]);for(const i in n)e[i]=n[i]}return e}function Ml(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const nf={clone:fs,merge:Gt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new it().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class af extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ec extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends Ec{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cf extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ar(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function df(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class hf extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:r=e,o=2*t-n;break;case jr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ts:a=e,c=2*n-t;break;case jr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,S=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[d+T]+S*a[l+T]+E*a[c+T]+v*a[h+T];return r}}class zd extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class uf extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ff extends _s{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,h=this.outTangents;if(!d||!h){const g=(n-t)/(i-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const x=a[l+g],m=a[c+g],p=f*u+g*2,S=h[p],E=h[p+1],v=e*u+g*2,T=d[v],M=d[v+1];let R=(n-t)/(i-t),_,A,D,P,O;for(let j=0;j<8;j++){_=R*R,A=_*R,D=1-R,P=D*D,O=P*D;const z=O*t+3*P*R*S+3*D*_*T+A*i-n;if(Math.abs(z)<1e-10)break;const K=3*P*(S-t)+6*D*R*(T-S)+3*_*(i-T);if(Math.abs(K)<1e-10)break;R=R-z/K,R=Math.max(0,Math.min(1,R))}r[g]=O*x+3*P*R*E+3*D*_*M+A*m}return r}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ff(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break;case qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ie("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&iu(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[u+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=$s;class xs extends vn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ks;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hd extends vn{constructor(e,t,n,i){super(e,t,n,i)}}Hd.prototype.ValueTypeName="color";class Zs extends vn{constructor(e,t,n,i){super(e,t,n,i)}}Zs.prototype.ValueTypeName="number";class pf extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)on.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Qs extends vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new pf(this.times,this.values,this.getValueSize(),e)}}Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends vn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ks;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends vn{constructor(e,t,n,i){super(e,t,n,i)}}Zr.prototype.ValueTypeName="vector";class $o{constructor(e="",t=-1,n=[],i=mc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=lf(c);c=El(c,1,d),l=El(l,1,d),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Zs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zs;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Hd;case"quaternion":return Qs;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mf(s.type);if(s.times===void 0){const t=[],n=[];df(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Tl(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Tl(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Tl(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class bf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _f=new bf;class Ii{constructor(e){this.manager=e!==void 0?e:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class xf extends Error{constructor(e,t){super(e),this.response=t}}class Qr extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Vn[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:E,value:v})=>{if(E)p.close();else{x+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let M=0,R=d.length;M<R;M++){const _=d[M];_.onProgress&&_.onProgress(T)}p.enqueue(v),S()}},E=>{p.error(E)})}}});return new Response(m)}else throw new xf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{qn.add(`file:${e}`,l);const d=Vn[e];delete Vn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=Vn[e];if(d===void 0)throw this.manager.itemError(e),l;delete Vn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ki=new WeakMap;class vf extends Ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ki.get(a);h===void 0&&(h=[],Ki.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Js("img");function c(){d(),t&&t(this);const h=Ki.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Ki.delete(this),r.manager.itemEnd(e)}function l(h){d(),i&&i(h),qn.remove(`image:${e}`);const u=Ki.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}Ki.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class yf extends Ii{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,a=new vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class oa extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Sf extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wa=new Ge,wl=new k,Al=new k;class Tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ys||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rr=new k,Cr=new on,En=new k;class Vd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Cr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rr,Cr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new k,Rl=new Xe,Cl=new Xe;class zt extends Vd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Rl,Cl),t.subVectors(Cl,Rl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mf extends Tc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ef extends oa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Tf extends Tc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}}class wf extends oa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ca extends Vd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Af extends Tc{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ys extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Af}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pi{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const qa=new WeakMap;class Rf extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{qa.has(a)===!0?(i&&i(qa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){qn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),qa.set(c,l),qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});qn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $i=-90,Yi=1;class Cf extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt($i,Yi,e,t);i.layers=this.layers,this.add(i);const r=new zt($i,Yi,e,t);r.layers=this.layers,this.add(r);const a=new zt($i,Yi,e,t);a.layers=this.layers,this.add(a);const o=new zt($i,Yi,e,t);o.layers=this.layers,this.add(o);const c=new zt($i,Yi,e,t);c.layers=this.layers,this.add(c);const l=new zt($i,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pf extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){on.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;on.multiplyQuaternionsFlat(e,a,e,t,e,n),on.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const wc="\\[\\]\\.:\\/",Df=new RegExp("["+wc+"]","g"),Ac="[^"+wc+"]",If="[^"+wc.replace("\\.","")+"]",Nf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Ff=/(WCOD+)?/.source.replace("WCOD",If),Uf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Of=new RegExp("^"+Nf+Ff+Uf+kf+"$"),Bf=["material","materials","bones","map"];class Gf{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){const t=Of.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Gf;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:es,endingEnd:es};for(let l=0;l!==a;++l){const d=r[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Wh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Xh:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case mc:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===qh;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===pc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ts,i.endingEnd=ts):(e?i.endingStart=this.zeroSlopeAtStart?ts:es:i.endingStart=jr,t?i.endingEnd=this.zeroSlopeAtEnd?ts:es:i.endingEnd=jr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Hf=new Float32Array(1);class Vf extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==r;++h){const u=i[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new Lf(Ze.create(n,f,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new zd(new Float32Array(2),new Float32Array(2),1,Hf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?$o.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=mc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new zf(this,a,t,n);return this._bindAction(d,l),this._addInactiveAction(d,o,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?$o.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Wd{static{Wd.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}function Pl(s,e,t,n){const i=Wf(n);switch(t){case Td:return s*e;case dc:return s*e/i.components*i.byteLength;case hc:return s*e/i.components*i.byteLength;case Di:return s*e*2/i.components*i.byteLength;case uc:return s*e*2/i.components*i.byteLength;case wd:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case fc:return s*e*4/i.components*i.byteLength;case kr:case Or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Br:case Gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mo:case bo:return Math.max(s,16)*Math.max(e,8)/4;case po:case go:return Math.max(s,8)*Math.max(e,8)/2;case _o:case xo:case yo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vo:case qr:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Co:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Bo:case Go:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zo:case Ho:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xr:case Vo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(s){switch(s){case $t:case yd:return{byteLength:1,components:1};case Xs:case Sd:case Yn:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case Nn:case oc:case rn:return{byteLength:4,components:1};case Md:case Ed:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qf(s){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];s.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`uniform sampler2D dfgLUT;
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
}`,qp=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Lm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,xg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Xf,alphahash_pars_fragment:jf,alphamap_fragment:Kf,alphamap_pars_fragment:$f,alphatest_fragment:Yf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:lp,clipping_planes_vertex:dp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:bp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:yp,colorspace_fragment:Sp,colorspace_pars_fragment:Mp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:wp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Np,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Up,lights_pars_begin:kp,lights_toon_fragment:Bp,lights_toon_pars_fragment:Gp,lights_phong_fragment:zp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:qp,lights_fragment_maps:Xp,lights_fragment_end:jp,lightprobes_pars_fragment:Kp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Zp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:cm,morphtarget_vertex:lm,normal_fragment_begin:dm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:xm,opaque_fragment:vm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:Mm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Nm,skinnormal_vertex:Fm,specularmap_fragment:Um,specularmap_pars_fragment:km,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:Gm,transmission_pars_fragment:zm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:qm,background_vert:Xm,background_frag:jm,backgroundCube_vert:Km,backgroundCube_frag:$m,cube_vert:Ym,cube_frag:Jm,depth_vert:Zm,depth_frag:Qm,distance_vert:eg,distance_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:cg,meshlambert_frag:lg,meshmatcap_vert:dg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:bg,meshtoon_vert:_g,meshtoon_frag:xg,points_vert:vg,points_frag:yg,shadow_vert:Sg,shadow_frag:Mg,sprite_vert:Eg,sprite_frag:Tg},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},An={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};An.physical={uniforms:Gt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Pr={r:0,b:0,g:0},wg=new Ge,Xd=new Ue;Xd.set(-1,0,0,0,1,0,0,0,1);function Ag(s,e,t,n,i,r){const a=new Ne(0);let o=i===!0?0:1,c,l,d=null,h=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const v=S.backgroundBlurriness>0;E=e.get(E,v)}return E}function g(S){let E=!1;const v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,E){const v=f(E);v&&(v.isCubeTexture||v.mapping===ia)?(l===void 0&&(l=new Jt(new tr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:fs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xd),l.material.toneMapped=Ve.getTransfer(v.colorSpace)!==et,(d!==v||h!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new aa(2,2),new Fn({name:"BackgroundMaterial",uniforms:fs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,E){S.getRGB(Pr,Gd(s)),t.buffers.color.setClear(Pr.r,Pr.g,Pr.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Rg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,O,j,Z,z){let K=!1;const q=h(P,Z,j,O);r!==q&&(r=q,l(r.object)),K=f(P,Z,j,z),K&&g(P,Z,j,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(P,O,j,Z),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function d(P){return s.deleteVertexArray(P)}function h(P,O,j,Z){const z=Z.wireframe===!0;let K=n[O.id];K===void 0&&(K={},n[O.id]=K);const q=P.isInstancedMesh===!0?P.id:0;let ne=K[q];ne===void 0&&(ne={},K[q]=ne);let re=ne[j.id];re===void 0&&(re={},ne[j.id]=re);let W=re[z];return W===void 0&&(W=u(c()),re[z]=W),W}function u(P){const O=[],j=[],Z=[];for(let z=0;z<t;z++)O[z]=0,j[z]=0,Z[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:Z,object:P,attributes:{},index:null}}function f(P,O,j,Z){const z=r.attributes,K=O.attributes;let q=0;const ne=j.getAttributes();for(const re in ne)if(ne[re].location>=0){const te=z[re];let ae=K[re];if(ae===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;q++}return r.attributesNum!==q||r.index!==Z}function g(P,O,j,Z){const z={},K=O.attributes;let q=0;const ne=j.getAttributes();for(const re in ne)if(ne[re].location>=0){let te=K[re];te===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),z[re]=ae,q++}r.attributes=z,r.attributesNum=q,r.index=Z}function x(){const P=r.newAttributes;for(let O=0,j=P.length;O<j;O++)P[O]=0}function m(P){p(P,0)}function p(P,O){const j=r.newAttributes,Z=r.enabledAttributes,z=r.attributeDivisors;j[P]=1,Z[P]===0&&(s.enableVertexAttribArray(P),Z[P]=1),z[P]!==O&&(s.vertexAttribDivisor(P,O),z[P]=O)}function S(){const P=r.newAttributes,O=r.enabledAttributes;for(let j=0,Z=O.length;j<Z;j++)O[j]!==P[j]&&(s.disableVertexAttribArray(j),O[j]=0)}function E(P,O,j,Z,z,K,q){q===!0?s.vertexAttribIPointer(P,O,j,z,K):s.vertexAttribPointer(P,O,j,Z,z,K)}function v(P,O,j,Z){x();const z=Z.attributes,K=j.getAttributes(),q=O.defaultAttributeValues;for(const ne in K){const re=K[ne];if(re.location>=0){let W=z[ne];if(W===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const te=W.normalized,ae=W.itemSize,Le=e.get(W);if(Le===void 0)continue;const je=Le.buffer,Fe=Le.type,J=Le.bytesPerElement,ce=Fe===s.INT||Fe===s.UNSIGNED_INT||W.gpuType===oc;if(W.isInterleavedBufferAttribute){const se=W.data,De=se.stride,ke=W.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<re.locationSize;Ce++)p(re.location+Ce,se.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<re.locationSize;Ce++)m(re.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Ce=0;Ce<re.locationSize;Ce++)E(re.location+Ce,ae/re.locationSize,Fe,te,De*J,(ke+ae/re.locationSize*Ce)*J,ce)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<re.locationSize;se++)p(re.location+se,W.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<re.locationSize;se++)m(re.location+se);s.bindBuffer(s.ARRAY_BUFFER,je);for(let se=0;se<re.locationSize;se++)E(re.location+se,ae/re.locationSize,Fe,te,ae*J,ae/re.locationSize*se*J,ce)}}else if(q!==void 0){const te=q[ne];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(re.location,te);break;case 3:s.vertexAttrib3fv(re.location,te);break;case 4:s.vertexAttrib4fv(re.location,te);break;default:s.vertexAttrib1fv(re.location,te)}}}}S()}function T(){A();for(const P in n){const O=n[P];for(const j in O){const Z=O[j];for(const z in Z){const K=Z[z];for(const q in K)d(K[q].object),delete K[q];delete Z[z]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const j in O){const Z=O[j];for(const z in Z){const K=Z[z];for(const q in K)d(K[q].object),delete K[q];delete Z[z]}}delete n[P.id]}function R(P){for(const O in n){const j=n[O];for(const Z in j){const z=j[Z];if(z[P.id]===void 0)continue;const K=z[P.id];for(const q in K)d(K[q].object),delete K[q];delete z[P.id]}}}function _(P){for(const O in n){const j=n[O],Z=P.isInstancedMesh===!0?P.id:0,z=j[Z];if(z!==void 0){for(const K in z){const q=z[K];for(const ne in q)d(q[ne].object),delete q[ne];delete z[K]}delete j[Z],Object.keys(j).length===0&&delete n[O]}}}function A(){D(),a=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Cg(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(s.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==an&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$t&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!_)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ee("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:M}}function Lg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ei,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):l();else{const S=r?0:n,E=S*4;let v=p.clippingState||null;c.value=v,v=d(g,u,E,f);for(let T=0;T!==E;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==x;++E,v+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const hi=4,Ll=[.125,.215,.35,.446,.526,.582],wi=20,Dg=256,Ls=new ca,Dl=new Ne;let Xa=null,ja=0,Ka=0,$a=!1;const Ig=new k;class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Ig}=r;Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,ja,Ka),this._renderer.xr.enabled=$a,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Yn,format:an,colorSpace:Wt,depthBuffer:!1},i=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Ug(r,e,t),this._ggxMaterial=Fg(r,e,t)}return i}_compileMaterial(e){const t=new Jt(new Zt,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,i,r){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dl),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new tr,new Ci({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Dl),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[E]));const T=this._cubeSize;Ji(i,v*T,E>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=0+l*1.25,f=h*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-hi?n-g+hi:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ji(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,Ls),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ji(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Ls)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[i];h.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),x=r/g,m=isFinite(r)?1+Math.floor(d*x):wi;m>wi&&Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let S=0;for(let R=0;R<wi;++R){const _=R/x,A=Math.exp(-_*_/2);p.push(A),R===0?S+=A:R<m&&(S+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const v=this._sizeLods[i],T=3*v*(i>E-hi?i-E+hi:0),M=4*(this._cubeSize-v);Ji(t,T,M,3*v,2*v),c.setRenderTarget(t),c.render(h,Ls)}}function Ng(s){const e=[],t=[],n=[];let i=s;const r=s-hi+1+Ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-hi?c=Ll[a-s+hi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),E=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let M=0;M<f;M++){const R=M%3*2/3-1,_=M>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];S.set(A,x*g*M),E.set(u,m*g*M);const D=[M,M,M,M,M,M];v.set(D,p*g*M)}const T=new Zt;T.setAttribute("position",new Ft(S,x)),T.setAttribute("uv",new Ft(E,m)),T.setAttribute("faceIndex",new Ft(v,p)),n.push(new Jt(T,null)),i>hi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Nl(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fg(s,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ug(s,e,t){const n=new Float32Array(wi),i=new k(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Fl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ul(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}class jd extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Od(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new tr(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:jn});r.uniforms.tEquirect.value=t;const a=new Jt(i,r),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=wt),new Cf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function kg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ga||f===ba)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new jd(g.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===ga||f===ba,x=f===Li||f===ls;if(g||x){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Il(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new Il(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===ga?u.mapping=Li:f===ba&&(u.mapping=ls),u}function c(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Og(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function Bg(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let E=0,v=S.length;E<v;E+=3){const T=S[E+0],M=S[E+1],R=S[E+2];u.push(T,M,M,R,R,T)}}else{const S=g.array;x=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const T=E+0,M=E+1,R=E+2;u.push(T,M,M,R,R,T)}}const m=new(g.count>=65535?Id:Dd)(u,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Gg(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){s.drawElements(n,u,r,h*a),t.update(u,n,1)}function l(h,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function zg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hg(s,e,t){const n=new WeakMap,i=new it;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let v=o.attributes.position.count*E,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const M=new Float32Array(v*T*4*h),R=new Cd(M,v,T,h);R.type=rn,R.needsUpdate=!0;const _=E*4;for(let D=0;D<h;D++){const P=m[D],O=p[D],j=S[D],Z=v*T*4*D;for(let z=0;z<P.count;z++){const K=z*_;f===!0&&(i.fromBufferAttribute(P,z),M[Z+K+0]=i.x,M[Z+K+1]=i.y,M[Z+K+2]=i.z,M[Z+K+3]=0),g===!0&&(i.fromBufferAttribute(O,z),M[Z+K+4]=i.x,M[Z+K+5]=i.y,M[Z+K+6]=i.z,M[Z+K+7]=0),x===!0&&(i.fromBufferAttribute(j,z),M[Z+K+8]=i.x,M[Z+K+9]=i.y,M[Z+K+10]=i.z,M[Z+K+11]=j.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new Xe(v,T)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Vg(s,e,t,n,i){let r=new WeakMap;function a(l){const d=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Wg={[fd]:"LINEAR_TONE_MAPPING",[pd]:"REINHARD_TONE_MAPPING",[md]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[_d]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function qg(s,e,t,n,i,r){const a=new Dn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new us(e,t):void 0}),o=new Dn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),c=new Zt;c.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _n([0,2,0,0,2,0],2));const l=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(c,l),h=new ca(-1,1,1,-1,0,1);let u=null,f=null,g=!1,x,m=null,p=[],S=!1;this.setSize=function(E,v){a.setSize(E,v),o.setSize(E,v);for(let T=0;T<p.length;T++){const M=p[T];M.setSize&&M.setSize(E,v)}},this.setEffects=function(E){p=E,S=p.length>0&&p[0].isRenderPass===!0;const v=a.width,T=a.height;for(let M=0;M<p.length;M++){const R=p[M];R.setSize&&R.setSize(v,T)}},this.begin=function(E,v){if(g||E.toneMapping===Ln&&p.length===0)return!1;if(m=v,v!==null){const T=v.width,M=v.height;(a.width!==T||a.height!==M)&&this.setSize(T,M)}return S===!1&&E.setRenderTarget(a),x=E.toneMapping,E.toneMapping=Ln,!0},this.hasRenderPass=function(){return S},this.end=function(E,v){E.toneMapping=x,g=!0;let T=a,M=o;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(E,M,T,v),_.needsSwap!==!1)){const A=T;T=M,M=A}}if(u!==E.outputColorSpace||f!==E.toneMapping){u=E.outputColorSpace,f=E.toneMapping,l.defines={},Ve.getTransfer(u)===et&&(l.defines.SRGB_TRANSFER="");const R=Wg[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(m),E.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Kd=new Lt,Yo=new us(1,1),$d=new Cd,Yd=new Cu,Jd=new Od,kl=[],Ol=[],Bl=new Float32Array(16),Gl=new Float32Array(9),zl=new Float32Array(4);function Ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kl[i];if(r===void 0&&(r=new Float32Array(i),kl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function da(s,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function Yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;zl.set(n),s.uniformMatrix2fv(this.addr,!1,zl),Rt(t,n)}}function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Gl.set(n),s.uniformMatrix3fv(this.addr,!1,Gl),Rt(t,n)}}function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Bl.set(n),s.uniformMatrix4fv(this.addr,!1,Bl),Rt(t,n)}}function Qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function ib(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function ob(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yo.compareFunction=t.isReversedDepthBuffer()?bc:gc,r=Yo):r=Kd,t.setTexture2D(e||r,i)}function cb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yd,i)}function lb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jd,i)}function db(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$d,i)}function hb(s){switch(s){case 5126:return Xg;case 35664:return jg;case 35665:return Kg;case 35666:return $g;case 35674:return Yg;case 35675:return Jg;case 35676:return Zg;case 5124:case 35670:return Qg;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return db}}function ub(s,e){s.uniform1fv(this.addr,e)}function fb(s,e){const t=Ss(e,this.size,2);s.uniform2fv(this.addr,t)}function pb(s,e){const t=Ss(e,this.size,3);s.uniform3fv(this.addr,t)}function mb(s,e){const t=Ss(e,this.size,4);s.uniform4fv(this.addr,t)}function gb(s,e){const t=Ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bb(s,e){const t=Ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _b(s,e){const t=Ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xb(s,e){s.uniform1iv(this.addr,e)}function vb(s,e){s.uniform2iv(this.addr,e)}function yb(s,e){s.uniform3iv(this.addr,e)}function Sb(s,e){s.uniform4iv(this.addr,e)}function Mb(s,e){s.uniform1uiv(this.addr,e)}function Eb(s,e){s.uniform2uiv(this.addr,e)}function Tb(s,e){s.uniform3uiv(this.addr,e)}function wb(s,e){s.uniform4uiv(this.addr,e)}function Ab(s,e,t){const n=this.cache,i=e.length,r=da(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Yo:a=Kd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Rb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yd,r[a])}function Cb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jd,r[a])}function Pb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||$d,r[a])}function Lb(s){switch(s){case 5126:return ub;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return bb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return vb;case 35668:case 35672:return yb;case 35669:case 35673:return Sb;case 5125:return Mb;case 36294:return Eb;case 36295:return Tb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}class Db{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hb(t.type)}}class Ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lb(t.type)}}class Nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Hl(s,e){s.seq.push(e),s.map[e.id]=e}function Fb(s,e,t){const n=s.name,i=n.length;for(Ya.lastIndex=0;;){const r=Ya.exec(n),a=Ya.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Hl(t,l===void 0?new Db(o,s,e):new Ib(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Nb(o),Hl(t,h)),t=h}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fb(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Vl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ub=37297;let kb=0;function Ob(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wl=new Ue;function Bb(s){Ve._getMatrix(Wl,Ve.workingColorSpace,s);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case Kr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ql(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ob(s.getShaderSource(e),o)}else return r}function Gb(s,e){const t=Bb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zb={[fd]:"Linear",[pd]:"Reinhard",[md]:"Cineon",[ac]:"ACESFilmic",[bd]:"AgX",[_d]:"Neutral",[gd]:"Custom"};function Hb(s,e){const t=zb[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new k;function Vb(){Ve.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function qb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Os(s){return s!==""}function Xl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(s){return s.replace(jb,$b)}const Kb=new Map;function $b(s,e){let t=ze[e];if(t===void 0){const n=Kb.get(e);if(n!==void 0)t=ze[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jo(t)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(s){return s.replace(Yb,Jb)}function Jb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $l(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zb={[Gs]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Qb(s){return Zb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e_={[Li]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function t_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":e_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const n_={[ls]:"ENVMAP_MODE_REFRACTION"};function i_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s_={[ud]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function r_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":s_[s.combine]||"ENVMAP_BLENDING_NONE"}function a_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Qb(t),l=t_(t),d=i_(t),h=r_(t),u=a_(t),f=Wb(t),g=qb(r),x=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[$l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Gb("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=Jo(a),a=Xl(a,t),a=jl(a,t),o=Jo(o),o=Xl(o,t),o=jl(o,t),a=Kl(a),o=Kl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,v=S+p+o,T=Vl(i,i.VERTEX_SHADER,E),M=Vl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,M),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",j=i.getShaderInfoLog(T)||"",Z=i.getShaderInfoLog(M)||"",z=O.trim(),K=j.trim(),q=Z.trim();let ne=!0,re=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,M);else{const W=ql(i,T,"vertex"),te=ql(i,M,"fragment");Ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+W+`
`+te)}else z!==""?Ee("WebGLProgram: Program Info Log:",z):(K===""||q==="")&&(re=!1);re&&(P.diagnostics={runnable:ne,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(T),i.deleteShader(M),_=new zr(i,x),A=Xb(i,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(x,Ub)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}}function h_(s){return s===Di||s===qr||s===Xr}function u_(s,e,t,n,i,r){const a=new Pd,o=new l_,c=new Set,l=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,A,D,P,O,j){const Z=P.fog,z=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||K,q),re=ne&&ne.mapping===ia?ne.image.height:null,W=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ee("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=te!==void 0?te.length:0;let Le=0;z.morphAttributes.position!==void 0&&(Le=1),z.morphAttributes.normal!==void 0&&(Le=2),z.morphAttributes.color!==void 0&&(Le=3);let je,Fe,J,ce;if(W){const ye=An[W];je=ye.vertexShader,Fe=ye.fragmentShader}else{je=_.vertexShader,Fe=_.fragmentShader;const ye=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,ye,ut),J=ye.id,ce=ut.id}const se=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,mt=!!_.map,Ke=!!_.matcap,st=!!ne,Je=!!_.aoMap,$e=!!_.lightMap,xt=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,Ct=!!_.displacementMap,Dt=!!_.emissiveMap,ht=!!_.metalnessMap,vt=!!_.roughnessMap,N=_.anisotropy>0,Ht=_.clearcoat>0,Qe=_.dispersion>0,w=_.iridescence>0,b=_.sheen>0,U=_.transmission>0,H=N&&!!_.anisotropyMap,X=Ht&&!!_.clearcoatMap,oe=Ht&&!!_.clearcoatNormalMap,de=Ht&&!!_.clearcoatRoughnessMap,Y=w&&!!_.iridescenceMap,ee=w&&!!_.iridescenceThicknessMap,he=b&&!!_.sheenColorMap,Te=b&&!!_.sheenRoughnessMap,pe=!!_.specularMap,ue=!!_.specularColorMap,Re=!!_.specularIntensityMap,Pe=U&&!!_.transmissionMap,Oe=U&&!!_.thicknessMap,I=!!_.gradientMap,le=!!_.alphaMap,Q=_.alphaTest>0,fe=!!_.alphaHash,_e=!!_.extensions;let ie=Ln;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Me={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:je,fragmentShader:Fe,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:Ke,envMap:st,envMapMode:st&&ne.mapping,envMapCubeUVHeight:re,aoMap:Je,lightMap:$e,bumpMap:xt,normalMap:Mt,displacementMap:Ct,emissiveMap:Dt,normalMapObjectSpace:Mt&&_.normalMapType===$h,normalMapTangentSpace:Mt&&_.normalMapType===qo,packedNormalMap:Mt&&_.normalMapType===qo&&h_(_.normalMap.format),metalnessMap:ht,roughnessMap:vt,anisotropy:N,anisotropyMap:H,clearcoat:Ht,clearcoatMap:X,clearcoatNormalMap:oe,clearcoatRoughnessMap:de,dispersion:Qe,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:ee,sheen:b,sheenColorMap:he,sheenRoughnessMap:Te,specularMap:pe,specularColorMap:ue,specularIntensityMap:Re,transmission:U,transmissionMap:Pe,thicknessMap:Oe,gradientMap:I,opaque:_.transparent===!1&&_.blending===is&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:fe,combine:_.combine,mapUv:mt&&g(_.map.channel),aoMapUv:Je&&g(_.aoMap.channel),lightMapUv:$e&&g(_.lightMap.channel),bumpMapUv:xt&&g(_.bumpMap.channel),normalMapUv:Mt&&g(_.normalMap.channel),displacementMapUv:Ct&&g(_.displacementMap.channel),emissiveMapUv:Dt&&g(_.emissiveMap.channel),metalnessMapUv:ht&&g(_.metalnessMap.channel),roughnessMapUv:vt&&g(_.roughnessMap.channel),anisotropyMapUv:H&&g(_.anisotropyMap.channel),clearcoatMapUv:X&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(_.sheenRoughnessMap.channel),specularMapUv:pe&&g(_.specularMap.channel),specularColorMapUv:ue&&g(_.specularColorMap.channel),specularIntensityMapUv:Re&&g(_.specularIntensityMap.channel),transmissionMapUv:Pe&&g(_.transmissionMap.channel),thicknessMapUv:Oe&&g(_.thicknessMap.channel),alphaMapUv:le&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||N),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(mt||le),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&Ve.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)A.push(D),A.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(A,_),S(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const A=f[_.type];let D;if(A){const P=An[A];D=nf.clone(P.uniforms)}else D=_.uniforms;return D}function v(_,A){let D=d.get(A);return D!==void 0?++D.usedTimes:(D=new o_(s,A,_,i),l.push(D),d.set(A,D)),D}function T(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:T,releaseShaderCache:M,programs:l,dispose:R}}function f_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function p_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Yl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let S=s[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function c(u,f,g,x,m,p){const S=o(u,f,g,x,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function l(u,f,g,x,m,p){const S=o(u,f,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function d(u,f,g){t.length>1&&t.sort(u||p_),n.length>1&&n.sort(f||Yl),i.length>1&&i.sort(f||Yl),g&&(t.reverse(),n.reverse(),i.reverse())}function h(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:h,sort:d}}function m_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Jl,s.set(n,[a])):i>=r.length?(a=new Jl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function g_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ne};break;case"SpotLight":t={position:new k,direction:new k,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function b_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let __=0;function x_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v_(s){const e=new g_,t=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const i=new k,r=new Ge,a=new Ge;function o(l){let d=0,h=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,E=0,v=0,T=0,M=0,R=0;l.sort(x_);for(let A=0,D=l.length;A<D;A++){const P=l[A],O=P.color,j=P.intensity,Z=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Di?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=O.r*j,h+=O.g*j,u+=O.b*j;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],j);R++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,ne=t.get(P);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=K,f++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(O).multiplyScalar(j),K.distance=Z,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[x]=K;const q=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,q.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[x]=q.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=z,v++}x++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(O).multiplyScalar(j),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const q=P.shadow,ne=t.get(P);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,ne.shadowCameraNear=q.camera.near,ne.shadowCameraFar=q.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(j),K.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[p]=K,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==E||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=E,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=R,n.version=__++)}function c(l,d){let h=0,u=0,f=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const E=l[p];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Zl(s){const e=new v_(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function y_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Zl(s),e.set(i,[o])):r>=a.length?(o=new Zl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`,E_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],T_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Ql=new Ge,Ds=new k,Ja=new k;function w_(s,e,t){let n=new Sc;const i=new Xe,r=new Xe,a=new it,o=new of,c=new cf,l={},d=t.maxTextureSize,h={[$n]:Vt,[Vt]:$n,[Rn]:Rn},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:S_,fragmentShader:M_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(M,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Sh&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gs);const A=s.getRenderTarget(),D=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(jn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const j=p!==this.type;j&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(z=>z.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,z=M.length;Z<z;Z++){const K=M[Z],q=K.shadow;if(q===void 0){Ee("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ne=q.getFrameExtents();i.multiply(ne),r.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ne.x),i.x=r.x*ne.x,q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ne.y),i.y=r.y*ne.y,q.mapSize.y=r.y));const re=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=re,q.map===null||j===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Us){if(K.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Dn(i.x,i.y,{format:Di,type:Yn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new us(i.x,i.y,rn),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=Jn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tt,q.map.depthTexture.magFilter=Tt}else K.isPointLight?(q.map=new jd(i.x),q.map.depthTexture=new ef(i.x,Nn)):(q.map=new Dn(i.x,i.y),q.map.depthTexture=new us(i.x,i.y,Nn)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=Jn,this.type===Gs?(q.map.depthTexture.compareFunction=re?bc:gc,q.map.depthTexture.minFilter=wt,q.map.depthTexture.magFilter=wt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tt,q.map.depthTexture.magFilter=Tt);q.camera.updateProjectionMatrix()}const W=q.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<W;te++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,te),s.clear();else{te===0&&(s.setRenderTarget(q.map),s.clear());const ae=q.getViewport(te);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),O.viewport(a)}if(K.isPointLight){const ae=q.camera,Le=q.matrix,je=K.distance||ae.far;je!==ae.far&&(ae.far=je,ae.updateProjectionMatrix()),Ds.setFromMatrixPosition(K.matrixWorld),ae.position.copy(Ds),Ja.copy(ae.position),Ja.add(E_[te]),ae.up.copy(T_[te]),ae.lookAt(Ja),ae.updateMatrixWorld(),Le.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Ql.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Ql,ae.coordinateSystem,ae.reversedDepth)}else q.updateMatrices(K);n=q.getFrustum(),v(R,_,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Us&&S(q,_),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(A,D,P)};function S(M,R){const _=e.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Dn(i.x,i.y,{format:Di,type:Yn})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(R,null,_,f,x,null)}function E(M,R,_,A){let D=null;const P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)D=P;else if(D=_.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=D.uuid,j=R.uuid;let Z=l[O];Z===void 0&&(Z={},l[O]=Z);let z=Z[j];z===void 0&&(z=D.clone(),Z[j]=z,R.addEventListener("dispose",T)),D=z}if(D.visible=R.visible,D.wireframe=R.wireframe,A===Us?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:h[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=s.properties.get(D);O.light=_}return D}function v(M,R,_,A,D){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Us)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const j=e.update(M),Z=M.material;if(Array.isArray(Z)){const z=j.groups;for(let K=0,q=z.length;K<q;K++){const ne=z[K],re=Z[ne.materialIndex];if(re&&re.visible){const W=E(M,re,A,D);M.onBeforeShadow(s,M,R,_,j,W,ne),s.renderBufferDirect(_,null,j,W,M,ne),M.onAfterShadow(s,M,R,_,j,W,ne)}}}else if(Z.visible){const z=E(M,Z,A,D);M.onBeforeShadow(s,M,R,_,j,z,null),s.renderBufferDirect(_,null,j,z,M,null),M.onAfterShadow(s,M,R,_,j,z,null)}}const O=M.children;for(let j=0,Z=O.length;j<Z;j++)v(O[j],R,_,A,D)}function T(M){M.target.removeEventListener("dispose",T);for(const _ in l){const A=l[_],D=M.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function A_(s,e){function t(){let I=!1;const le=new it;let Q=null;const fe=new it(0,0,0,0);return{setMask:function(_e){Q!==_e&&!I&&(s.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){I=_e},setClear:function(_e,ie,Me,ye,ut){ut===!0&&(_e*=ye,ie*=ye,Me*=ye),le.set(_e,ie,Me,ye),fe.equals(le)===!1&&(s.clearColor(_e,ie,Me,ye),fe.copy(le))},reset:function(){I=!1,Q=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,Q=null,fe=null,_e=null;return{setReversed:function(ie){if(le!==ie){const Me=e.get("EXT_clip_control");ie?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return le},setTest:function(ie){ie?se(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!I&&(s.depthMask(ie),Q=ie)},setFunc:function(ie){if(le&&(ie=au[ie]),fe!==ie){switch(ie){case ao:s.depthFunc(s.NEVER);break;case oo:s.depthFunc(s.ALWAYS);break;case co:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case lo:s.depthFunc(s.EQUAL);break;case ho:s.depthFunc(s.GEQUAL);break;case uo:s.depthFunc(s.GREATER);break;case fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=ie}},setLocked:function(ie){I=ie},setClear:function(ie){_e!==ie&&(_e=ie,le&&(ie=1-ie),s.clearDepth(ie))},reset:function(){I=!1,Q=null,fe=null,_e=null,le=!1}}}function i(){let I=!1,le=null,Q=null,fe=null,_e=null,ie=null,Me=null,ye=null,ut=null;return{setTest:function(ot){I||(ot?se(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(ot){le!==ot&&!I&&(s.stencilMask(ot),le=ot)},setFunc:function(ot,yn,Sn){(Q!==ot||fe!==yn||_e!==Sn)&&(s.stencilFunc(ot,yn,Sn),Q=ot,fe=yn,_e=Sn)},setOp:function(ot,yn,Sn){(ie!==ot||Me!==yn||ye!==Sn)&&(s.stencilOp(ot,yn,Sn),ie=ot,Me=yn,ye=Sn)},setLocked:function(ot){I=ot},setClear:function(ot){ut!==ot&&(s.clearStencil(ot),ut=ot)},reset:function(){I=!1,le=null,Q=null,fe=null,_e=null,ie=null,Me=null,ye=null,ut=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,E=null,v=null,T=null,M=null,R=null,_=new Ne(0,0,0),A=0,D=!1,P=null,O=null,j=null,Z=null,z=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=ne>=1):re.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=ne>=2);let W=null,te={};const ae=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),je=new it().fromArray(ae),Fe=new it().fromArray(Le);function J(I,le,Q,fe){const _e=new Uint8Array(4),ie=s.createTexture();s.bindTexture(I,ie),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<Q;Me++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(le+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ie}const ce={};ce[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(cs),xt(!1),Mt(Gc),se(s.CULL_FACE),Je(jn);function se(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function De(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function ke(I,le){return u[I]!==le?(s.bindFramebuffer(I,le),u[I]=le,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ce(I,le){let Q=g,fe=!1;if(I){Q=f.get(le),Q===void 0&&(Q=[],f.set(le,Q));const _e=I.textures;if(Q.length!==_e.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Me=_e.length;ie<Me;ie++)Q[ie]=s.COLOR_ATTACHMENT0+ie;Q.length=_e.length,fe=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,fe=!0);fe&&s.drawBuffers(Q)}function mt(I){return x!==I?(s.useProgram(I),x=I,!0):!1}const Ke={[Ti]:s.FUNC_ADD,[Eh]:s.FUNC_SUBTRACT,[Th]:s.FUNC_REVERSE_SUBTRACT};Ke[wh]=s.MIN,Ke[Ah]=s.MAX;const st={[Rh]:s.ZERO,[Ch]:s.ONE,[Ph]:s.SRC_COLOR,[so]:s.SRC_ALPHA,[Uh]:s.SRC_ALPHA_SATURATE,[Nh]:s.DST_COLOR,[Dh]:s.DST_ALPHA,[Lh]:s.ONE_MINUS_SRC_COLOR,[ro]:s.ONE_MINUS_SRC_ALPHA,[Fh]:s.ONE_MINUS_DST_COLOR,[Ih]:s.ONE_MINUS_DST_ALPHA,[kh]:s.CONSTANT_COLOR,[Oh]:s.ONE_MINUS_CONSTANT_COLOR,[Bh]:s.CONSTANT_ALPHA,[Gh]:s.ONE_MINUS_CONSTANT_ALPHA};function Je(I,le,Q,fe,_e,ie,Me,ye,ut,ot){if(I===jn){m===!0&&(De(s.BLEND),m=!1);return}if(m===!1&&(se(s.BLEND),m=!0),I!==Mh){if(I!==p||ot!==D){if((S!==Ti||T!==Ti)&&(s.blendEquation(s.FUNC_ADD),S=Ti,T=Ti),ot)switch(I){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zc:s.blendFunc(s.ONE,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ie("WebGLState: Invalid blending: ",I);break}else switch(I){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hc:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",I);break}E=null,v=null,M=null,R=null,_.set(0,0,0),A=0,p=I,D=ot}return}_e=_e||le,ie=ie||Q,Me=Me||fe,(le!==S||_e!==T)&&(s.blendEquationSeparate(Ke[le],Ke[_e]),S=le,T=_e),(Q!==E||fe!==v||ie!==M||Me!==R)&&(s.blendFuncSeparate(st[Q],st[fe],st[ie],st[Me]),E=Q,v=fe,M=ie,R=Me),(ye.equals(_)===!1||ut!==A)&&(s.blendColor(ye.r,ye.g,ye.b,ut),_.copy(ye),A=ut),p=I,D=!1}function $e(I,le){I.side===Rn?De(s.CULL_FACE):se(s.CULL_FACE);let Q=I.side===Vt;le&&(Q=!Q),xt(Q),I.blending===is&&I.transparent===!1?Je(jn):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function Mt(I){I!==vh?(se(s.CULL_FACE),I!==O&&(I===Gc?s.cullFace(s.BACK):I===yh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),O=I}function Ct(I){I!==j&&(q&&s.lineWidth(I),j=I)}function Dt(I,le,Q){I?(se(s.POLYGON_OFFSET_FILL),(Z!==le||z!==Q)&&(Z=le,z=Q,a.getReversed()&&(le=-le),s.polygonOffset(le,Q))):De(s.POLYGON_OFFSET_FILL)}function ht(I){I?se(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function vt(I){I===void 0&&(I=s.TEXTURE0+K-1),W!==I&&(s.activeTexture(I),W=I)}function N(I,le,Q){Q===void 0&&(W===null?Q=s.TEXTURE0+K-1:Q=W);let fe=te[Q];fe===void 0&&(fe={type:void 0,texture:void 0},te[Q]=fe),(fe.type!==I||fe.texture!==le)&&(W!==Q&&(s.activeTexture(Q),W=Q),s.bindTexture(I,le||ce[I]),fe.type=I,fe.texture=le)}function Ht(){const I=te[W];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Qe(){try{s.compressedTexImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function b(){try{s.texSubImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function U(){try{s.texSubImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function oe(){try{s.texStorage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function de(){try{s.texStorage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function Y(){try{s.texImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function ee(){try{s.texImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function he(I){return h[I]!==void 0?h[I]:s.getParameter(I)}function Te(I,le){h[I]!==le&&(s.pixelStorei(I,le),h[I]=le)}function pe(I){je.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),je.copy(I))}function ue(I){Fe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Re(I,le){let Q=l.get(le);Q===void 0&&(Q=new WeakMap,l.set(le,Q));let fe=Q.get(I);fe===void 0&&(fe=s.getUniformBlockIndex(le,I.name),Q.set(I,fe))}function Pe(I,le){const fe=l.get(le).get(I);c.get(le)!==fe&&(s.uniformBlockBinding(le,fe,I.__bindingPointIndex),c.set(le,fe))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),d={},h={},W=null,te={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,E=null,v=null,T=null,M=null,R=null,_=new Ne(0,0,0),A=0,D=!1,P=null,O=null,j=null,Z=null,z=null,je.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:De,bindFramebuffer:ke,drawBuffers:Ce,useProgram:mt,setBlending:Je,setMaterial:$e,setFlipSided:xt,setCullFace:Mt,setLineWidth:Ct,setPolygonOffset:Dt,setScissorTest:ht,activeTexture:vt,bindTexture:N,unbindTexture:Ht,compressedTexImage2D:Qe,compressedTexImage3D:w,texImage2D:Y,texImage3D:ee,pixelStorei:Te,getParameter:he,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:de,texSubImage2D:b,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:pe,viewport:ue,reset:Oe}}function R_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,b){return g?new OffscreenCanvas(w,b):Js("canvas")}function m(w,b,U){let H=1;const X=Qe(w);if((X.width>U||X.height>U)&&(H=U/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(H*X.width),de=Math.floor(H*X.height);u===void 0&&(u=x(oe,de));const Y=b?x(oe,de):u;return Y.width=oe,Y.height=de,Y.getContext("2d").drawImage(w,0,0,oe,de),Ee("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+oe+"x"+de+")."),Y}else return"data"in w&&Ee("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function p(w){return w.generateMipmaps}function S(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(w,b,U,H,X,oe=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de;H&&(de=e.get("EXT_texture_norm16"),de||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=b;if(b===s.RED&&(U===s.FLOAT&&(Y=s.R32F),U===s.HALF_FLOAT&&(Y=s.R16F),U===s.UNSIGNED_BYTE&&(Y=s.R8),U===s.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),U===s.SHORT&&de&&(Y=de.R16_SNORM_EXT)),b===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.R8UI),U===s.UNSIGNED_SHORT&&(Y=s.R16UI),U===s.UNSIGNED_INT&&(Y=s.R32UI),U===s.BYTE&&(Y=s.R8I),U===s.SHORT&&(Y=s.R16I),U===s.INT&&(Y=s.R32I)),b===s.RG&&(U===s.FLOAT&&(Y=s.RG32F),U===s.HALF_FLOAT&&(Y=s.RG16F),U===s.UNSIGNED_BYTE&&(Y=s.RG8),U===s.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),U===s.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RG8UI),U===s.UNSIGNED_SHORT&&(Y=s.RG16UI),U===s.UNSIGNED_INT&&(Y=s.RG32UI),U===s.BYTE&&(Y=s.RG8I),U===s.SHORT&&(Y=s.RG16I),U===s.INT&&(Y=s.RG32I)),b===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),U===s.UNSIGNED_INT&&(Y=s.RGB32UI),U===s.BYTE&&(Y=s.RGB8I),U===s.SHORT&&(Y=s.RGB16I),U===s.INT&&(Y=s.RGB32I)),b===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),U===s.UNSIGNED_INT&&(Y=s.RGBA32UI),U===s.BYTE&&(Y=s.RGBA8I),U===s.SHORT&&(Y=s.RGBA16I),U===s.INT&&(Y=s.RGBA32I)),b===s.RGB&&(U===s.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),U===s.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),U===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),b===s.RGBA){const ee=oe?Kr:Ve.getTransfer(X);U===s.FLOAT&&(Y=s.RGBA32F),U===s.HALF_FLOAT&&(Y=s.RGBA16F),U===s.UNSIGNED_BYTE&&(Y=ee===et?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),U===s.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),U===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(w,b){let U;return w?b===null||b===Nn||b===js?U=s.DEPTH24_STENCIL8:b===rn?U=s.DEPTH32F_STENCIL8:b===Xs&&(U=s.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Nn||b===js?U=s.DEPTH_COMPONENT24:b===rn?U=s.DEPTH_COMPONENT32F:b===Xs&&(U=s.DEPTH_COMPONENT16),U}function M(w,b){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==wt?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function R(w){const b=w.target;b.removeEventListener("dispose",R),A(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&h.delete(b)}function _(w){const b=w.target;b.removeEventListener("dispose",_),P(b)}function A(w){const b=n.get(w);if(b.__webglInit===void 0)return;const U=w.source,H=f.get(U);if(H){const X=H[b.__cacheKey];X.usedTimes--,X.usedTimes===0&&D(w),Object.keys(H).length===0&&f.delete(U)}n.remove(w)}function D(w){const b=n.get(w);s.deleteTexture(b.__webglTexture);const U=w.source,H=f.get(U);delete H[b.__cacheKey],a.memory.textures--}function P(w){const b=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(b.__webglFramebuffer[H]))for(let X=0;X<b.__webglFramebuffer[H].length;X++)s.deleteFramebuffer(b.__webglFramebuffer[H][X]);else s.deleteFramebuffer(b.__webglFramebuffer[H]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[H])}else{if(Array.isArray(b.__webglFramebuffer))for(let H=0;H<b.__webglFramebuffer.length;H++)s.deleteFramebuffer(b.__webglFramebuffer[H]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let H=0;H<b.__webglColorRenderbuffer.length;H++)b.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[H]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const U=w.textures;for(let H=0,X=U.length;H<X;H++){const oe=n.get(U[H]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(U[H])}n.remove(w)}let O=0;function j(){O=0}function Z(){return O}function z(w){O=w}function K(){const w=O;return w>=i.maxTextures&&Ee("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),O+=1,w}function q(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ne(w,b){const U=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const H=w.image;if(H===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{De(U,w,b);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+b)}function re(w,b){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){De(U,w,b);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+b)}function W(w,b){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){De(U,w,b);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+b)}function te(w,b){const U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){ke(U,w,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+b)}const ae={[ds]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},Le={[Tt]:s.NEAREST,[vd]:s.NEAREST_MIPMAP_NEAREST,[ks]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[Ur]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},je={[Yh]:s.NEVER,[tu]:s.ALWAYS,[Jh]:s.LESS,[gc]:s.LEQUAL,[Zh]:s.EQUAL,[bc]:s.GEQUAL,[Qh]:s.GREATER,[eu]:s.NOTEQUAL};function Fe(w,b){if(b.type===rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===wt||b.magFilter===Ur||b.magFilter===ks||b.magFilter===Wn||b.minFilter===wt||b.minFilter===Ur||b.minFilter===ks||b.minFilter===Wn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ae[b.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ae[b.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ae[b.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Le[b.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Le[b.minFilter]),b.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,je[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tt||b.minFilter!==ks&&b.minFilter!==Wn||b.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function J(w,b){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",R));const H=b.source;let X=f.get(H);X===void 0&&(X={},f.set(H,X));const oe=q(b);if(oe!==w.__cacheKey){X[oe]===void 0&&(X[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[oe].usedTimes++;const de=X[w.__cacheKey];de!==void 0&&(X[w.__cacheKey].usedTimes--,de.usedTimes===0&&D(b)),w.__cacheKey=oe,w.__webglTexture=X[oe].texture}return U}function ce(w,b,U){return Math.floor(Math.floor(w/U)/b)}function se(w,b,U,H){const oe=w.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,U,H,b.data);else{oe.sort((Te,pe)=>Te.start-pe.start);let de=0;for(let Te=1;Te<oe.length;Te++){const pe=oe[de],ue=oe[Te],Re=pe.start+pe.count,Pe=ce(ue.start,b.width,4),Oe=ce(pe.start,b.width,4);ue.start<=Re+1&&Pe===Oe&&ce(ue.start+ue.count-1,b.width,4)===Pe?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++de,oe[de]=ue)}oe.length=de+1;const Y=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Te=0,pe=oe.length;Te<pe;Te++){const ue=oe[Te],Re=Math.floor(ue.start/4),Pe=Math.ceil(ue.count/4),Oe=Re%b.width,I=Math.floor(Re/b.width),le=Pe,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Oe,I,le,Q,U,H,b.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function De(w,b,U){let H=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(H=s.TEXTURE_3D);const X=J(w,b),oe=b.source;t.bindTexture(H,w.__webglTexture,s.TEXTURE0+U);const de=n.get(oe);if(oe.version!==de.__version||X===!0){if(t.activeTexture(s.TEXTURE0+U),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Q=Ve.getPrimaries(Ve.workingColorSpace),fe=b.colorSpace===li?null:Ve.getPrimaries(b.colorSpace),_e=b.colorSpace===li||Q===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ee=m(b.image,!1,i.maxTextureSize);ee=Ht(b,ee);const he=r.convert(b.format,b.colorSpace),Te=r.convert(b.type);let pe=v(b.internalFormat,he,Te,b.normalized,b.colorSpace,b.isVideoTexture);Fe(H,b);let ue;const Re=b.mipmaps,Pe=b.isVideoTexture!==!0,Oe=de.__version===void 0||X===!0,I=oe.dataReady,le=M(b,ee);if(b.isDepthTexture)pe=T(b.format===Ai,b.type),Oe&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Te,null));else if(b.isDataTexture)if(Re.length>0){Pe&&Oe&&t.texStorage2D(s.TEXTURE_2D,le,pe,Re[0].width,Re[0].height);for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,Te,ue.data):t.texImage2D(s.TEXTURE_2D,Q,pe,ue.width,ue.height,0,he,Te,ue.data);b.generateMipmaps=!1}else Pe?(Oe&&t.texStorage2D(s.TEXTURE_2D,le,pe,ee.width,ee.height),I&&se(b,ee,he,Te)):t.texImage2D(s.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,Te,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,pe,Re[0].width,Re[0].height,ee.depth);for(let Q=0,fe=Re.length;Q<fe;Q++)if(ue=Re[Q],b.format!==an)if(he!==null)if(Pe){if(I)if(b.layerUpdates.size>0){const _e=Pl(ue.width,ue.height,b.format,b.type);for(const ie of b.layerUpdates){const Me=ue.data.subarray(ie*_e/ue.data.BYTES_PER_ELEMENT,(ie+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ie,ue.width,ue.height,1,he,Me)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,ee.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,pe,ue.width,ue.height,ee.depth,0,ue.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,ee.depth,he,Te,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,pe,ue.width,ue.height,ee.depth,0,he,Te,ue.data)}else{Pe&&Oe&&t.texStorage2D(s.TEXTURE_2D,le,pe,Re[0].width,Re[0].height);for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],b.format!==an?he!==null?Pe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,pe,ue.width,ue.height,0,ue.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,Te,ue.data):t.texImage2D(s.TEXTURE_2D,Q,pe,ue.width,ue.height,0,he,Te,ue.data)}else if(b.isDataArrayTexture)if(Pe){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,pe,ee.width,ee.height,ee.depth),I)if(b.layerUpdates.size>0){const Q=Pl(ee.width,ee.height,b.format,b.type);for(const fe of b.layerUpdates){const _e=ee.data.subarray(fe*Q/ee.data.BYTES_PER_ELEMENT,(fe+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,he,Te,_e)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Te,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,he,Te,ee.data);else if(b.isData3DTexture)Pe?(Oe&&t.texStorage3D(s.TEXTURE_3D,le,pe,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Te,ee.data)):t.texImage3D(s.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,he,Te,ee.data);else if(b.isFramebufferTexture){if(Oe)if(Pe)t.texStorage2D(s.TEXTURE_2D,le,pe,ee.width,ee.height);else{let Q=ee.width,fe=ee.height;for(let _e=0;_e<le;_e++)t.texImage2D(s.TEXTURE_2D,_e,pe,Q,fe,0,he,Te,null),Q>>=1,fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),h.add(b),Q.onpaint=fe=>{const _e=fe.changedElements;for(const ie of h)_e.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{const _e=s.RGBA,ie=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ie,Me,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Oe){const Q=Qe(Re[0]);t.texStorage2D(s.TEXTURE_2D,le,pe,Q.width,Q.height)}for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],Pe?I&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he,Te,ue):t.texImage2D(s.TEXTURE_2D,Q,pe,he,Te,ue);b.generateMipmaps=!1}else if(Pe){if(Oe){const Q=Qe(ee);t.texStorage2D(s.TEXTURE_2D,le,pe,Q.width,Q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Te,ee)}else t.texImage2D(s.TEXTURE_2D,0,pe,he,Te,ee);p(b)&&S(H),de.__version=oe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ke(w,b,U){if(b.image.length!==6)return;const H=J(w,b),X=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+U);const oe=n.get(X);if(X.version!==oe.__version||H===!0){t.activeTexture(s.TEXTURE0+U);const de=Ve.getPrimaries(Ve.workingColorSpace),Y=b.colorSpace===li?null:Ve.getPrimaries(b.colorSpace),ee=b.colorSpace===li||de===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!he&&!Te?pe[ie]=m(b.image[ie],!0,i.maxCubemapSize):pe[ie]=Te?b.image[ie].image:b.image[ie],pe[ie]=Ht(b,pe[ie]);const ue=pe[0],Re=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Oe=v(b.internalFormat,Re,Pe,b.normalized,b.colorSpace),I=b.isVideoTexture!==!0,le=oe.__version===void 0||H===!0,Q=X.dataReady;let fe=M(b,ue);Fe(s.TEXTURE_CUBE_MAP,b);let _e;if(he){I&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Oe,ue.width,ue.height);for(let ie=0;ie<6;ie++){_e=pe[ie].mipmaps;for(let Me=0;Me<_e.length;Me++){const ye=_e[Me];b.format!==an?Re!==null?I?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Oe,ye.width,ye.height,0,ye.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,ye.width,ye.height,Re,Pe,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Oe,ye.width,ye.height,0,Re,Pe,ye.data)}}}else{if(_e=b.mipmaps,I&&le){_e.length>0&&fe++;const ie=Qe(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){I?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Re,Pe,pe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,pe[ie].width,pe[ie].height,0,Re,Pe,pe[ie].data);for(let Me=0;Me<_e.length;Me++){const ut=_e[Me].image[ie].image;I?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,ut.width,ut.height,Re,Pe,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Oe,ut.width,ut.height,0,Re,Pe,ut.data)}}else{I?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Pe,pe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Re,Pe,pe[ie]);for(let Me=0;Me<_e.length;Me++){const ye=_e[Me];I?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Re,Pe,ye.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Oe,Re,Pe,ye.image[ie])}}}p(b)&&S(s.TEXTURE_CUBE_MAP),oe.__version=X.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ce(w,b,U,H,X,oe){const de=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),ee=v(U.internalFormat,de,Y,U.normalized,U.colorSpace),he=n.get(b),Te=n.get(U);if(Te.__renderTarget=b,!he.__hasExternalTextures){const pe=Math.max(1,b.width>>oe),ue=Math.max(1,b.height>>oe);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,oe,ee,pe,ue,b.depth,0,de,Y,null):t.texImage2D(X,oe,ee,pe,ue,0,de,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),vt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,X,Te.__webglTexture,0,ht(b)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,X,Te.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(w,b,U){if(s.bindRenderbuffer(s.RENDERBUFFER,w),b.depthBuffer){const H=b.depthTexture,X=H&&H.isDepthTexture?H.type:null,oe=T(b.stencilBuffer,X),de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(b),oe,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(b),oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,w)}else{const H=b.textures;for(let X=0;X<H.length;X++){const oe=H[X],de=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),ee=v(oe.internalFormat,de,Y,oe.normalized,oe.colorSpace);vt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(b),ee,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(b),ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(w,b,U){const H=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(b.depthTexture);if(X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,b.depthTexture);const he=r.convert(b.depthTexture.format),Te=r.convert(b.depthTexture.type);let pe;b.depthTexture.format===Jn?pe=s.DEPTH_COMPONENT24:b.depthTexture.format===Ai&&(pe=s.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,b.width,b.height,0,he,Te,null)}}else ne(b.depthTexture,0);const oe=X.__webglTexture,de=ht(b),Y=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,ee=b.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Jn)vt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Y,oe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Y,oe,0);else if(b.depthTexture.format===Ai)vt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Y,oe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Y,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(w){const b=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),H){const X=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),b.__depthDisposeCallback=X}b.__boundDepthTexture=H}if(w.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Ke(b.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?Ke(b.__webglFramebuffer[0],w,0):Ke(b.__webglFramebuffer,w,0)}else if(U){b.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[H]),b.__webglDepthbuffer[H]===void 0)b.__webglDepthbuffer[H]=s.createRenderbuffer(),mt(b.__webglDepthbuffer[H],w,!1);else{const X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,oe)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),mt(b.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(w,b,U){const H=n.get(w);b!==void 0&&Ce(H.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&st(w)}function $e(w){const b=w.texture,U=n.get(w),H=n.get(b);w.addEventListener("dispose",_);const X=w.textures,oe=w.isWebGLCubeRenderTarget===!0,de=X.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=b.version,a.memory.textures++),oe){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let ee=0;ee<b.mipmaps.length;ee++)U.__webglFramebuffer[Y][ee]=s.createFramebuffer()}else U.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<b.mipmaps.length;Y++)U.__webglFramebuffer[Y]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(de)for(let Y=0,ee=X.length;Y<ee;Y++){const he=n.get(X[Y]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){const ee=X[Y];U.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);const he=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),pe=v(ee.internalFormat,he,Te,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),ue=ht(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,pe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,b);for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Ce(U.__webglFramebuffer[Y][ee],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else Ce(U.__webglFramebuffer[Y],w,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(b)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let Y=0,ee=X.length;Y<ee;Y++){const he=X[Y],Te=n.get(he);let pe=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Te.__webglTexture),Fe(pe,he),Ce(U.__webglFramebuffer,w,he,s.COLOR_ATTACHMENT0+Y,pe,0),p(he)&&S(pe)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,H.__webglTexture),Fe(Y,b),b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Ce(U.__webglFramebuffer[ee],w,b,s.COLOR_ATTACHMENT0,Y,ee);else Ce(U.__webglFramebuffer,w,b,s.COLOR_ATTACHMENT0,Y,0);p(b)&&S(Y),t.unbindTexture()}w.depthBuffer&&st(w)}function xt(w){const b=w.textures;for(let U=0,H=b.length;U<H;U++){const X=b[U];if(p(X)){const oe=E(w),de=n.get(X).__webglTexture;t.bindTexture(oe,de),S(oe),t.unbindTexture()}}}const Mt=[],Ct=[];function Dt(w){if(w.samples>0){if(vt(w)===!1){const b=w.textures,U=w.width,H=w.height;let X=s.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(w),Y=b.length>1;if(Y)for(let he=0;he<b.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ee=w.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<b.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Te=n.get(b[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,U,H,0,0,U,H,X,s.NEAREST),c===!0&&(Mt.length=0,Ct.length=0,Mt.push(s.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Mt.push(oe),Ct.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<b.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const Te=n.get(b[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const b=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ht(w){return Math.min(i.maxSamples,w.samples)}function vt(w){const b=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(w){const b=a.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function Ht(w,b){const U=w.colorSpace,H=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Wt&&U!==li&&(Ve.getTransfer(U)===et?(H!==an||X!==$t)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",U)),b}function Qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.getTextureUnits=Z,this.setTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=Je,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function C_(s,e){function t(n,i=li){let r;const a=Ve.getTransfer(i);if(n===$t)return s.UNSIGNED_BYTE;if(n===cc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ed)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===yd)return s.BYTE;if(n===Sd)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===oc)return s.INT;if(n===Nn)return s.UNSIGNED_INT;if(n===rn)return s.FLOAT;if(n===Yn)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===wd)return s.RGB;if(n===an)return s.RGBA;if(n===Jn)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===hc)return s.RED_INTEGER;if(n===Di)return s.RG;if(n===uc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===kr||n===Or||n===Br||n===Gr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===xo||n===vo||n===yo||n===So||n===qr||n===Mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===xo)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return r.COMPRESSED_RG11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===No||n===Fo||n===Uo||n===ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Ho||n===Xr||n===Vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fn({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends bi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new D_,p={},S=t.getContextAttributes();let E=null,v=null;const T=[],M=[],R=new Xe;let _=null;const A=new zt;A.viewport=new it;const D=new zt;D.viewport=new it;const P=[A,D],O=new Pf;let j=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=T[J];return ce===void 0&&(ce=new Ea,T[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=T[J];return ce===void 0&&(ce=new Ea,T[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=T[J];return ce===void 0&&(ce=new Ea,T[J]=ce),ce.getHandSpace()};function z(J){const ce=M.indexOf(J.inputSource);if(ce===-1)return;const se=T[ce];se!==void 0&&(se.update(J.inputSource,J.frame,l||a),se.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",q);for(let J=0;J<T.length;J++){const ce=M[J];ce!==null&&(M[J]=null,T[J].disconnect(ce))}j=null,Z=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(E),f=null,u=null,h=null,i=null,v=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",K),i.addEventListener("inputsourceschange",q),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,De=null,ke=null;S.depth&&(ke=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?Ai:Jn,De=S.stencil?js:Nn);const Ce={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ce),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Dn(u.textureWidth,u.textureHeight,{format:an,type:$t,depthTexture:new us(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Dn(f.framebufferWidth,f.framebufferHeight,{format:an,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let ce=0;ce<J.removed.length;ce++){const se=J.removed[ce],De=M.indexOf(se);De>=0&&(M[De]=null,T[De].disconnect(se))}for(let ce=0;ce<J.added.length;ce++){const se=J.added[ce];let De=M.indexOf(se);if(De===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=M.length){M.push(se),De=Ce;break}else if(M[Ce]===null){M[Ce]=se,De=Ce;break}if(De===-1)break}const ke=T[De];ke&&ke.connect(se)}}const ne=new k,re=new k;function W(J,ce,se){ne.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(se.matrixWorld);const De=ne.distanceTo(re),ke=ce.projectionMatrix.elements,Ce=se.projectionMatrix.elements,mt=ke[14]/(ke[10]-1),Ke=ke[14]/(ke[10]+1),st=(ke[9]+1)/ke[5],Je=(ke[9]-1)/ke[5],$e=(ke[8]-1)/ke[0],xt=(Ce[8]+1)/Ce[0],Mt=mt*$e,Ct=mt*xt,Dt=De/(-$e+xt),ht=Dt*-$e;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ht),J.translateZ(Dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const vt=mt+Dt,N=Ke+Dt,Ht=Mt-ht,Qe=Ct+(De-ht),w=st*Ke/N*vt,b=Je*Ke/N*vt;J.projectionMatrix.makePerspective(Ht,Qe,w,b,vt,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ce=J.near,se=J.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(se=m.depthFar)),O.near=D.near=A.near=ce,O.far=D.far=A.far=se,(j!==O.near||Z!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,Z=O.far),O.layers.mask=J.layers.mask|6,A.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const De=J.parent,ke=O.cameras;te(O,De);for(let Ce=0;Ce<ke.length;Ce++)te(ke[Ce],De);ke.length===2?W(O,A,D):O.projectionMatrix.copy(A.projectionMatrix),ae(J,O,De)};function ae(J,ce,se){se===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(J){return p[J]};let Le=null;function je(J,ce){if(d=ce.getViewerPose(l||a),g=ce,d!==null){const se=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;se.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let Ke=0;Ke<se.length;Ke++){const st=se[Ke];let Je=null;if(f!==null)Je=f.getViewport(st);else{const xt=h.getViewSubImage(u,st);Je=xt.viewport,Ke===0&&(e.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(v))}let $e=P[Ke];$e===void 0&&($e=new zt,$e.layers.enable(Ke),$e.viewport=new it,P[Ke]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Je.x,Je.y,Je.width,Je.height),Ke===0&&(O.matrix.copy($e.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push($e)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Ke=h.getDepthInformation(se[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ke=0;Ke<se.length;Ke++){const st=se[Ke].camera;if(st){let Je=p[st];Je||(Je=new Bd,p[st]=Je);const $e=h.getCameraImage(st);Je.sourceTexture=$e}}}}for(let se=0;se<T.length;se++){const De=M[se],ke=T[se];De!==null&&ke!==void 0&&ke.update(De,ce,l||a)}Le&&Le(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Fe=new qd;Fe.setAnimationLoop(je),this.setAnimationLoop=function(J){Le=J},this.dispose=function(){}}}const N_=new Ge,Zd=new Ue;Zd.set(-1,0,0,0,1,0,0,0,1);function F_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const M=T.program;n.uniformBlockBinding(v,M)}function l(v,T){let M=i[v.id];M===void 0&&(m(v),M=d(v),i[v.id]=M,v.addEventListener("dispose",S));const R=T.program;n.updateUBOMapping(v,R);const _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function d(v){const T=h();v.__bindingPointIndex=T;const M=s.createBuffer(),R=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,M),M}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=i[v.id],M=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let _=0,A=M.length;_<A;_++){const D=M[_];if(Array.isArray(D))for(let P=0,O=D.length;P<O;P++)f(D[P],_,P,R);else f(D,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,T,M,R){if(x(v,T,M,R)===!0){const _=v.__offset,A=v.value;if(Array.isArray(A)){let D=0;for(let P=0;P<A.length;P++){const O=A[P],j=p(O);g(O,v.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,M){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,M)}function x(v,T,M,R){const _=v.value,A=T+"_"+M;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const D=R[A];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function m(v){const T=v.uniforms;let M=0;const R=16;for(let A=0,D=T.length;A<D;A++){const P=Array.isArray(T[A])?T[A]:[T[A]];for(let O=0,j=P.length;O<j;O++){const Z=P[O],z=Array.isArray(Z.value)?Z.value:[Z.value];for(let K=0,q=z.length;K<q;K++){const ne=z[K],re=p(ne),W=M%R,te=W%re.boundary,ae=W+te;M+=te,ae!==0&&R-ae<re.storage&&(M+=R-ae),Z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=re.storage}}}const _=M%R;return _>0&&(M+=R-_),v.__size=M,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){const T=v.target;T.removeEventListener("dispose",S);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:E}}const k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function O_(){return Tn===null&&(Tn=new vc(k_,16,16,Di,Yn),Tn.name="DFG_LUT",Tn.minFilter=wt,Tn.magFilter=wt,Tn.wrapS=Cn,Tn.wrapT=Cn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class B_{constructor(e={}){const{canvas:t=su(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$t}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([fc,uc,hc]),p=new Set([$t,Nn,Xs,js,cc,lc]),S=new Uint32Array(4),E=new Int32Array(4),v=new k;let T=null,M=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,O=null,j=null,Z=null,z=null;this._outputColorSpace=St;let K=0,q=0,ne=null,re=-1,W=null;const te=new it,ae=new it;let Le=null;const je=new Ne(0);let Fe=0,J=t.width,ce=t.height,se=1,De=null,ke=null;const Ce=new it(0,0,J,ce),mt=new it(0,0,J,ce);let Ke=!1;const st=new Sc;let Je=!1,$e=!1;const xt=new Ge,Mt=new k,Ct=new it,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function vt(){return ne===null?se:1}let N=n;function Ht(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",yn,!1),N===null){const F="webgl2";if(N=Ht(F,y),N===null)throw Ht(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Ie("WebGLRenderer: "+y.message),y}let Qe,w,b,U,H,X,oe,de,Y,ee,he,Te,pe,ue,Re,Pe,Oe,I,le,Q,fe,_e,ie;function Me(){Qe=new Og(N),Qe.init(),fe=new C_(N,Qe),w=new Pg(N,Qe,e,fe),b=new A_(N,Qe),w.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),j=N.createFramebuffer(),Z=N.createFramebuffer(),z=N.createFramebuffer(),U=new zg(N),H=new f_,X=new R_(N,Qe,b,H,w,fe,U),oe=new kg(D),de=new qf(N),_e=new Rg(N,de),Y=new Bg(N,de,U,_e),ee=new Vg(N,Y,de,_e,U),I=new Hg(N,w,X),Re=new Lg(H),he=new u_(D,oe,Qe,w,_e,Re),Te=new F_(D,H),pe=new m_,ue=new y_(Qe),Oe=new Ag(D,oe,b,ee,g,c),Pe=new w_(D,ee,w),ie=new U_(N,U,w,b),le=new Cg(N,Qe,U),Q=new Gg(N,Qe,U),U.programs=he.programs,D.capabilities=w,D.extensions=Qe,D.properties=H,D.renderLists=pe,D.shadowMap=Pe,D.state=b,D.info=U}Me(),x!==$t&&(A=new qg(x,t.width,t.height,o,i,r));const ye=new I_(D,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(J,ce,!1))},this.getSize=function(y){return y.set(J,ce)},this.setSize=function(y,F,V=!0){if(ye.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,ce=F,t.width=Math.floor(y*se),t.height=Math.floor(F*se),V===!0&&(t.style.width=y+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(J*se,ce*se).floor()},this.setDrawingBufferSize=function(y,F,V){J=y,ce=F,se=V,t.width=Math.floor(y*V),t.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(x===$t){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,F,V,B){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,F,V,B),b.viewport(te.copy(Ce).multiplyScalar(se).round())},this.getScissor=function(y){return y.copy(mt)},this.setScissor=function(y,F,V,B){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,F,V,B),b.scissor(ae.copy(mt).multiplyScalar(se).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){b.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,V=!0){let B=0;if(y){let G=!1;if(ne!==null){const be=ne.texture.format;G=m.has(be)}if(G){const be=ne.texture.type,ve=p.has(be),ge=Oe.getClearColor(),Se=Oe.getClearAlpha(),we=ge.r,Be=ge.g,He=ge.b;ve?(S[0]=we,S[1]=Be,S[2]=He,S[3]=Se,N.clearBufferuiv(N.COLOR,0,S)):(E[0]=we,E[1]=Be,E[2]=He,E[3]=Se,N.clearBufferiv(N.COLOR,0,E))}else B|=N.COLOR_BUFFER_BIT}F&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),Oe.dispose(),pe.dispose(),ue.dispose(),H.dispose(),oe.dispose(),ee.dispose(),_e.dispose(),ie.dispose(),he.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Dc),ye.removeEventListener("sessionend",Ic),_i.stop()};function ut(y){y.preventDefault(),$r("WebGLRenderer: Context Lost."),P=!0}function ot(){$r("WebGLRenderer: Context Restored."),P=!1;const y=U.autoReset,F=Pe.enabled,V=Pe.autoUpdate,B=Pe.needsUpdate,G=Pe.type;Me(),U.autoReset=y,Pe.enabled=F,Pe.autoUpdate=V,Pe.needsUpdate=B,Pe.type=G}function yn(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Sn(y){const F=y.target;F.removeEventListener("dispose",Sn),fh(F)}function fh(y){ph(y),H.remove(y)}function ph(y){const F=H.get(y).programs;F!==void 0&&(F.forEach(function(V){he.releaseProgram(V)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,B,G,be){F===null&&(F=Dt);const ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=bh(y,F,V,B,G);b.setMaterial(B,ve);let Se=V.index,we=1;if(B.wireframe===!0){if(Se=Y.getWireframeAttribute(V),Se===void 0)return;we=2}const Be=V.drawRange,He=V.attributes.position;let Ae=Be.start*we,nt=(Be.start+Be.count)*we;be!==null&&(Ae=Math.max(Ae,be.start*we),nt=Math.min(nt,(be.start+be.count)*we)),Se!==null?(Ae=Math.max(Ae,0),nt=Math.min(nt,Se.count)):He!=null&&(Ae=Math.max(Ae,0),nt=Math.min(nt,He.count));const gt=nt-Ae;if(gt<0||gt===1/0)return;_e.setup(G,B,ge,V,Se);let ft,rt=le;if(Se!==null&&(ft=de.get(Se),rt=Q,rt.setIndex(ft)),G.isMesh)B.wireframe===!0?(b.setLineWidth(B.wireframeLinewidth*vt()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(G.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),b.setLineWidth(Ut*vt()),G.isLineSegments?rt.setMode(N.LINES):G.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else G.isPoints?rt.setMode(N.POINTS):G.isSprite&&rt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,xe=G._multiDrawCounts,Xt=G._multiDrawCount,Ye=Se?de.get(Se).bytesPerElement:1,Qt=H.get(B).currentProgram.getUniforms();for(let Mn=0;Mn<Xt;Mn++)Qt.setValue(N,"_gl_DrawID",Mn),rt.render(Ut[Mn]/Ye,xe[Mn])}else if(G.isInstancedMesh)rt.renderInstances(Ae,gt,G.count);else if(V.isInstancedBufferGeometry){const Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,Ut);rt.renderInstances(Ae,gt,xe)}else rt.render(Ae,gt)};function Lc(y,F,V){y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,ir(y,F,V),y.side=$n,y.needsUpdate=!0,ir(y,F,V),y.side=Rn):ir(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),M=ue.get(V),M.init(F),_.push(M),V.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const B=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const be=G.material;if(be)if(Array.isArray(be))for(let ve=0;ve<be.length;ve++){const ge=be[ve];Lc(ge,V,G),B.add(ge)}else Lc(be,V,G),B.add(be)}),M=_.pop(),B},this.compileAsync=function(y,F,V=null){const B=this.compile(y,F,V);return new Promise(G=>{function be(){if(B.forEach(function(ve){H.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){G(y);return}setTimeout(be,10)}Qe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let pa=null;function mh(y){pa&&pa(y)}function Dc(){_i.stop()}function Ic(){_i.start()}const _i=new qd;_i.setAnimationLoop(mh),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(y){pa=y,ye.setAnimationLoop(y),y===null?_i.stop():_i.start()},ye.addEventListener("sessionstart",Dc),ye.addEventListener("sessionend",Ic),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(y,F);const V=ye.enabled===!0&&ye.isPresenting===!0,B=A!==null&&(ne===null||V)&&A.begin(D,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,F,ne),M=ue.get(y,_.length),M.init(F),M.state.textureUnits=X.getTextureUnits(),_.push(M),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(xt,Pn,F.reversedDepth),$e=this.localClippingEnabled,Je=Re.init(this.clippingPlanes,$e),T=pe.get(y,R.length),T.init(),R.push(T),ye.enabled===!0&&ye.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&ma(ve,F,-1/0,D.sortObjects)}ma(y,F,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(De,ke,F.reversedDepth),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&Oe.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Re.beginShadows();const G=M.state.shadowsArray;if(Pe.render(G,y,F),Je===!0&&Re.endShadows(),(B&&A.hasRenderPass())===!1){const ve=T.opaque,ge=T.transmissive;if(M.setupLights(),F.isArrayCamera){const Se=F.cameras;if(ge.length>0)for(let we=0,Be=Se.length;we<Be;we++){const He=Se[we];Fc(ve,ge,y,He)}ht&&Oe.render(y);for(let we=0,Be=Se.length;we<Be;we++){const He=Se[we];Nc(T,y,He,He.viewport)}}else ge.length>0&&Fc(ve,ge,y,F),ht&&Oe.render(y),Nc(T,y,F)}ne!==null&&q===0&&(X.updateMultisampleRenderTarget(ne),X.updateRenderTargetMipmap(ne)),B&&A.end(D),y.isScene===!0&&y.onAfterRender(D,y,F),_e.resetDefaultState(),re=-1,W=null,_.pop(),_.length>0?(M=_[_.length-1],X.setTextureUnits(M.state.textureUnits),Je===!0&&Re.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,O!==null&&O.renderEnd()};function ma(y,F,V,B){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||st.intersectsSprite(y)){B&&Ct.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const ve=ee.update(y),ge=y.material;ge.visible&&T.push(y,ve,ge,V,Ct.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||st.intersectsObject(y))){const ve=ee.update(y),ge=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ct.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ct.copy(ve.boundingSphere.center)),Ct.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(ge)){const Se=ve.groups;for(let we=0,Be=Se.length;we<Be;we++){const He=Se[we],Ae=ge[He.materialIndex];Ae&&Ae.visible&&T.push(y,ve,Ae,V,Ct.z,He)}}else ge.visible&&T.push(y,ve,ge,V,Ct.z,null)}}const be=y.children;for(let ve=0,ge=be.length;ve<ge;ve++)ma(be[ve],F,V,B)}function Nc(y,F,V,B){const{opaque:G,transmissive:be,transparent:ve}=y;M.setupLightsView(V),Je===!0&&Re.setGlobalState(D.clippingPlanes,V),B&&b.viewport(te.copy(B)),G.length>0&&nr(G,F,V),be.length>0&&nr(be,F,V),ve.length>0&&nr(ve,F,V),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Fc(y,F,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){const Ae=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new Dn(1,1,{generateMipmaps:!0,type:Ae?Yn:$t,minFilter:Wn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const be=M.state.transmissionRenderTarget[B.id],ve=B.viewport||te;be.setSize(ve.z*D.transmissionResolutionScale,ve.w*D.transmissionResolutionScale);const ge=D.getRenderTarget(),Se=D.getActiveCubeFace(),we=D.getActiveMipmapLevel();D.setRenderTarget(be),D.getClearColor(je),Fe=D.getClearAlpha(),Fe<1&&D.setClearColor(16777215,.5),D.clear(),ht&&Oe.render(V);const Be=D.toneMapping;D.toneMapping=Ln;const He=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),Je===!0&&Re.setGlobalState(D.clippingPlanes,B),nr(y,V,B),X.updateMultisampleRenderTarget(be),X.updateRenderTargetMipmap(be),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let nt=0,gt=F.length;nt<gt;nt++){const ft=F[nt],{object:rt,geometry:Ut,material:xe,group:Xt}=ft;if(xe.side===Rn&&rt.layers.test(B.layers)){const Ye=xe.side;xe.side=Vt,xe.needsUpdate=!0,Uc(rt,V,B,Ut,xe,Xt),xe.side=Ye,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(X.updateMultisampleRenderTarget(be),X.updateRenderTargetMipmap(be))}D.setRenderTarget(ge,Se,we),D.setClearColor(je,Fe),He!==void 0&&(B.viewport=He),D.toneMapping=Be}function nr(y,F,V){const B=F.isScene===!0?F.overrideMaterial:null;for(let G=0,be=y.length;G<be;G++){const ve=y[G],{object:ge,geometry:Se,group:we}=ve;let Be=ve.material;Be.allowOverride===!0&&B!==null&&(Be=B),ge.layers.test(V.layers)&&Uc(ge,F,V,Se,Be,we)}}function Uc(y,F,V,B,G,be){y.onBeforeRender(D,F,V,B,G,be),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(D,F,V,B,y,be),G.transparent===!0&&G.side===Rn&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,D.renderBufferDirect(V,F,B,G,y,be),G.side=$n,G.needsUpdate=!0,D.renderBufferDirect(V,F,B,G,y,be),G.side=Rn):D.renderBufferDirect(V,F,B,G,y,be),y.onAfterRender(D,F,V,B,G,be)}function ir(y,F,V){F.isScene!==!0&&(F=Dt);const B=H.get(y),G=M.state.lights,be=M.state.shadowsArray,ve=G.state.version,ge=he.getParameters(y,G.state,be,F,V,M.state.lightProbeGridArray),Se=he.getProgramCacheKey(ge);let we=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;const Be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=oe.get(y.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",Sn),we=new Map,B.programs=we);let He=we.get(Se);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===ve)return Oc(y,ge),He}else ge.uniforms=he.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,V,ge),y.onBeforeCompile(ge,D),He=he.acquireProgram(ge,Se),we.set(Se,He),B.uniforms=ge.uniforms;const Ae=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Re.uniform),Oc(y,ge),B.needsLights=xh(y),B.lightsStateVersion=ve,B.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=He,B.uniformsList=null,He}function kc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=zr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Oc(y,F){const V=H.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function gh(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let V=0,B=y.length;V<B;V++){const G=y[V];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function bh(y,F,V,B,G){F.isScene!==!0&&(F=Dt),X.resetTextureUnits();const be=F.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,ge=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ve.workingColorSpace,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=oe.get(B.envMap||ve,Se),Be=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let ft=Ln;B.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ft=D.toneMapping);const rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ut=rt!==void 0?rt.length:0,xe=H.get(B),Xt=M.state.lights;if(Je===!0&&($e===!0||y!==W)){const ct=y===W&&B.id===re;Re.setState(B,y,ct)}let Ye=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Xt.state.version||xe.outputColorSpace!==ge||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==we||B.fog===!0&&xe.fog!==be||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Re.numPlanes||xe.numIntersection!==Re.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==He||xe.morphTargets!==Ae||xe.morphNormals!==nt||xe.morphColors!==gt||xe.toneMapping!==ft||xe.morphTargetsCount!==Ut||!!xe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,xe.__version=B.version);let Qt=xe.currentProgram;Ye===!0&&(Qt=ir(B,F,G),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Qt,xe));let Mn=!1,Qn=!1,Ni=!1;const at=Qt.getUniforms(),bt=xe.uniforms;if(b.useProgram(Qt.program)&&(Mn=!0,Qn=!0,Ni=!0),B.id!==re&&(re=B.id,Qn=!0),xe.needsLights){const ct=gh(M.state.lightProbeGridArray,G);xe.lightProbeGrid!==ct&&(xe.lightProbeGrid=ct,Qn=!0)}if(Mn||W!==y){b.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",y.projectionMatrix),at.setValue(N,"viewMatrix",y.matrixWorldInverse);const ti=at.map.cameraPosition;ti!==void 0&&ti.setValue(N,Mt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),W!==y&&(W=y,Qn=!0,Ni=!0)}if(xe.needsLights&&(Xt.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",Xt.state.directionalShadowMap,X),Xt.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",Xt.state.spotShadowMap,X),Xt.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",Xt.state.pointShadowMap,X)),G.isSkinnedMesh){at.setOptional(N,G,"bindMatrix"),at.setOptional(N,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(N,"boneTexture",ct.boneTexture,X))}G.isBatchedMesh&&(at.setOptional(N,G,"batchingTexture"),at.setValue(N,"batchingTexture",G._matricesTexture,X),at.setOptional(N,G,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",G._indirectTexture,X),at.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",G._colorsTexture,X));const ei=V.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&I.update(G,V,Qt),(Qn||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,at.setValue(N,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(bt.envMapIntensity.value=F.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=O_()),Qn){if(at.setValue(N,"toneMappingExposure",D.toneMappingExposure),xe.needsLights&&_h(bt,Ni),be&&B.fog===!0&&Te.refreshFogUniforms(bt,be),Te.refreshMaterialUniforms(bt,B,se,ce,M.state.transmissionRenderTarget[y.id]),xe.needsLights&&xe.lightProbeGrid){const ct=xe.lightProbeGrid;bt.probesSH.value=ct.texture,bt.probesMin.value.copy(ct.boundingBox.min),bt.probesMax.value.copy(ct.boundingBox.max),bt.probesResolution.value.copy(ct.resolution)}zr.upload(N,kc(xe),bt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zr.upload(N,kc(xe),bt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(N,"center",G.center),at.setValue(N,"modelViewMatrix",G.modelViewMatrix),at.setValue(N,"normalMatrix",G.normalMatrix),at.setValue(N,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const ct=B.uniformsGroups;for(let ti=0,Fi=ct.length;ti<Fi;ti++){const Bc=ct[ti];ie.update(Bc,Qt),ie.bind(Bc,Qt)}}return Qt}function _h(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function xh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,F,V){const B=H.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=F,H.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const V=H.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){ne=y,K=F,q=V;let B=null,G=!1,be=!1;if(y){const ge=H.get(y);if(ge.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(y.viewport),ae.copy(y.scissor),Le=y.scissorTest,b.viewport(te),b.scissor(ae),b.setScissorTest(Le),re=-1;return}else if(ge.__webglFramebuffer===void 0)X.setupRenderTarget(y);else if(ge.__hasExternalTextures)X.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Be=y.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(be=!0);const we=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[F])?B=we[F][V]:B=we[F],G=!0):y.samples>0&&X.useMultisampledRTT(y)===!1?B=H.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[V]:B=we,te.copy(y.viewport),ae.copy(y.scissor),Le=y.scissorTest}else te.copy(Ce).multiplyScalar(se).floor(),ae.copy(mt).multiplyScalar(se).floor(),Le=Ke;if(V!==0&&(B=j),b.bindFramebuffer(N.FRAMEBUFFER,B)&&b.drawBuffers(y,B),b.viewport(te),b.scissor(ae),b.setScissorTest(Le),G){const ge=H.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,V)}else if(be){const ge=F;for(let Se=0;Se<y.textures.length;Se++){const we=H.get(y.textures[Se]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Se,we.__webglTexture,V,ge)}}else if(y!==null&&V!==0){const ge=H.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,V)}re=-1},this.readRenderTargetPixels=function(y,F,V,B,G,be,ve,ge=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){b.bindFramebuffer(N.FRAMEBUFFER,Se);try{const we=y.textures[ge],Be=we.format,He=we.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Be)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(He)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-B&&V>=0&&V<=y.height-G&&N.readPixels(F,V,B,G,fe.convert(Be),fe.convert(He),be)}finally{const we=ne!==null?H.get(ne).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,B,G,be,ve,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(F>=0&&F<=y.width-B&&V>=0&&V<=y.height-G){b.bindFramebuffer(N.FRAMEBUFFER,Se);const we=y.textures[ge],Be=we.format,He=we.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,be.byteLength,N.STREAM_READ),N.readPixels(F,V,B,G,fe.convert(Be),fe.convert(He),0);const nt=ne!==null?H.get(ne).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,nt);const gt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ru(N,gt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,be),N.deleteBuffer(Ae),N.deleteSync(gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,V=0){const B=Math.pow(2,-V),G=Math.floor(y.image.width*B),be=Math.floor(y.image.height*B),ve=F!==null?F.x:0,ge=F!==null?F.y:0;X.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ve,ge,G,be),b.unbindTexture()},this.copyTextureToTexture=function(y,F,V=null,B=null,G=0,be=0){let ve,ge,Se,we,Be,He,Ae,nt,gt;const ft=y.isCompressedTexture?y.mipmaps[be]:y.image;if(V!==null)ve=V.max.x-V.min.x,ge=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Be=V.min.y,He=V.isBox3?V.min.z:0;else{const bt=Math.pow(2,-G);ve=Math.floor(ft.width*bt),ge=Math.floor(ft.height*bt),y.isDataArrayTexture?Se=ft.depth:y.isData3DTexture?Se=Math.floor(ft.depth*bt):Se=1,we=0,Be=0,He=0}B!==null?(Ae=B.x,nt=B.y,gt=B.z):(Ae=0,nt=0,gt=0);const rt=fe.convert(F.format),Ut=fe.convert(F.type);let xe;F.isData3DTexture?(X.setTexture3D(F,0),xe=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(X.setTexture2DArray(F,0),xe=N.TEXTURE_2D_ARRAY):(X.setTexture2D(F,0),xe=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Xt=b.getParameter(N.UNPACK_ROW_LENGTH),Ye=b.getParameter(N.UNPACK_IMAGE_HEIGHT),Qt=b.getParameter(N.UNPACK_SKIP_PIXELS),Mn=b.getParameter(N.UNPACK_SKIP_ROWS),Qn=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,we),b.pixelStorei(N.UNPACK_SKIP_ROWS,Be),b.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const Ni=y.isDataArrayTexture||y.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const bt=H.get(y),ei=H.get(F),ct=H.get(bt.__renderTarget),ti=H.get(ei.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,ct.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Fi=0;Fi<Se;Fi++)Ni&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(y).__webglTexture,G,He+Fi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(F).__webglTexture,be,gt+Fi)),N.blitFramebuffer(we,Be,ve,ge,Ae,nt,ve,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||H.has(y)){const bt=H.get(y),ei=H.get(F);b.bindFramebuffer(N.READ_FRAMEBUFFER,Z),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let ct=0;ct<Se;ct++)Ni?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,G,He+ct):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,G),at?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ei.__webglTexture,be,gt+ct):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ei.__webglTexture,be),G!==0?N.blitFramebuffer(we,Be,ve,ge,Ae,nt,ve,ge,N.COLOR_BUFFER_BIT,N.NEAREST):at?N.copyTexSubImage3D(xe,be,Ae,nt,gt+ct,we,Be,ve,ge):N.copyTexSubImage2D(xe,be,Ae,nt,we,Be,ve,ge);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(xe,be,Ae,nt,gt,ve,ge,Se,rt,Ut,ft.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,be,Ae,nt,gt,ve,ge,Se,rt,ft.data):N.texSubImage3D(xe,be,Ae,nt,gt,ve,ge,Se,rt,Ut,ft):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,be,Ae,nt,ve,ge,rt,Ut,ft.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,be,Ae,nt,ft.width,ft.height,rt,ft.data):N.texSubImage2D(N.TEXTURE_2D,be,Ae,nt,ve,ge,rt,Ut,ft);b.pixelStorei(N.UNPACK_ROW_LENGTH,Xt),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Qt),b.pixelStorei(N.UNPACK_SKIP_ROWS,Mn),b.pixelStorei(N.UNPACK_SKIP_IMAGES,Qn),be===0&&F.generateMipmaps&&N.generateMipmap(xe),b.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&X.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?X.setTextureCube(y,0):y.isData3DTexture?X.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?X.setTexture2DArray(y,0):X.setTexture2D(y,0),b.unbindTexture()},this.resetState=function(){K=0,q=0,ne=null,b.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}function ed(s,e){if(e===jh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wo||e===Ad){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function G_(s){const e=new Map,t=new Map,n=s.clone();return Qd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Qd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Qd(s.children[n],e.children[n],t)}class z_ extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new X_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new td(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new td(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new r0(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=pi.extractUrlBase(e);a=pi.resolveURL(l,this.path)}else a=pi.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===eh){try{a[We.KHR_BINARY_GLTF]=new a0(e)}catch(h){i&&i(h);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new x0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new W_;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new o0(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new c0;break;case We.KHR_MESH_QUANTIZATION:a[h]=new l0;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function H_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function _t(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class V_{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new Ne(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Wt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ys(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wf(d),l.distance=h;break;case"spot":l=new Ef(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class W_{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Ci}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class X_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(r,r)}return Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class $_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Wt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Y_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class J_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],Wt),Promise.all(i)}}class Z_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],Wt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(i)}}class e0{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class t0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return _t(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class n0{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class i0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class s0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class td{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class r0{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const x=new Ge,m=new k,p=new on,S=new k(1,1,1),E=new ju(g.geometry,g.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),E.setMatrixAt(v,x.compose(m,p,S));for(const v in c)if(v==="_COLOR_0"){const T=c[v];E.instanceColor=new jo(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);dt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const eh="glTF",Is=12,nd={JSON:1313821514,BIN:5130562};class a0{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==eh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,r=new DataView(e,Is);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===nd.JSON){const l=new Uint8Array(e,Is+a,o);this.content=n.decode(l)}else if(c===nd.BIN){const l=Is+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class o0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=Zo[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=Zo[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=as[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},o,l,Wt,u)})})}}class c0{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class l0{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class th extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,h=(n-t)/d,u=h*h,f=u*h,g=e*l,x=g-l,m=-2*f+3*u,p=f-u,S=1-m,E=p-u+h;for(let v=0;v!==o;v++){const T=a[x+v+o],M=a[x+v+c]*d,R=a[g+v+o],_=a[g+v]*d;r[v]=S*T+E*M+m*R+p*_}return r}}const d0=new on;class h0 extends th{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return d0.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},id={9728:Tt,9729:wt,9984:vd,9985:Ur,9986:ks,9987:Wn},sd={33071:Cn,33648:Wr,10497:ds},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u0={CUBICSPLINE:void 0,LINEAR:$s,STEP:Ks},Qa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function f0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ec({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function Mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function p0(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function m0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g0(s){let e;const t=s.extensions&&s.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eo(t.attributes):e=s.indices+":"+eo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+eo(s.targets[n]);return e}function eo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _0=new Ge;class x0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new yf(this.options.manager):this.textureLoader=new Rf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Mi(r,o,i),wn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(pi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Za[i.type],o=as[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ft(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Za[i.type],l=as[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==h){const p=Math.floor(u/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let E=t.cache.get(S);E||(x=new l(o,p*f,i.count*f/d),E=new Nd(x,f/d),t.cache.add(S,E)),m=new sa(E,c,u%f/d,g)}else o===null?x=new l(i.count*c):x=new l(o,u,i.count*c),m=new Ft(x,c,g);if(i.sparse!==void 0){const p=Za.SCALAR,S=as[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new S(a[1],E,i.sparse.count*p),M=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=T.length;R<_;R++){const A=T[R];if(m.setX(A,M[R*c]),c>=2&&m.setY(A,M[R*c+1]),c>=3&&m.setZ(A,M[R*c+2]),c>=4&&m.setW(A,M[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=id[u.magFilter]||wt,d.minFilter=id[u.minFilter]||Wn,d.wrapS=sd[u.wrapS]||ds,d.wrapT=sd[u.wrapT]||ds,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Tt&&d.minFilter!==wt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Lt(x);m.needsUpdate=!0,u(m)}),t.load(pi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),wn(h,a),h.userData.mimeType=a.mimeType||b0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new kd,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ud,In.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ec}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){const h=i[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Wt),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,St)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rn);const d=r.alphaMode||Qa.OPAQUE;if(d===Qa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Qa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ci&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ci&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ci){const h=r.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],Wt)}return r.emissiveTexture!==void 0&&a!==Ci&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),wn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Mi(i,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return rd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=g0(l),h=i[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=rd(new Zt,l,t),i[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?f0(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const x=d[f],m=a[f];let p;const S=l[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wu(x,S):new Jt(x,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=ed(p.geometry,Ad):m.mode===tn.TRIANGLE_FAN&&(p.geometry=ed(p.geometry,Wo));else if(m.mode===tn.LINES)p=new Ju(x,S);else if(m.mode===tn.LINE_STRIP)p=new Mc(x,S);else if(m.mode===tn.LINE_LOOP)p=new Zu(x,S);else if(m.mode===tn.POINTS)p=new Qu(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&m0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),wn(p,r),m.extensions&&Mi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Mi(i,h[0],r),h[0];const u=new Ri;r.extensions&&Mi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Mu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Ge;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),d.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let E=0,v=u.length;E<v;E++){const T=u[E],M=f[E],R=g[E],_=x[E],A=m[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const D=n._createAnimationTracks(T,M,R,_,A);if(D)for(let P=0;P<D.length;P++)p.push(D[P])}const S=new $o(r,void 0,p);return wn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,_0)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){const f=d.userData.pivot,g=h[0];d.pivot=new k().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Fd:l.length>1?d=new Ri:l.length===1?d=l[0]:d=new dt,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),wn(d,r),r.extensions&&Mi(n,d,r),r.matrix!==void 0){const h=new Ge;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(d);i.associations.set(d,{...h})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ri;n.name&&(r.name=i.createUniqueName(n.name)),wn(r,n),n.extensions&&Mi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++){const u=c[d];u.parent!==null?r.add(G_(u)):r.add(u)}const l=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof In||u instanceof Lt)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ci[r.path]===ci.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let d;switch(ci[r.path]){case ci.weights:d=Zs;break;case ci.rotation:d=Qs;break;case ci.translation:case ci.scale:d=Zr;break;default:switch(n.itemSize){case 1:d=Zs;break;case 2:case 3:default:d=Zr;break}break}const h=i.interpolation!==void 0?u0[i.interpolation]:$s,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const x=new d(c[f]+"."+ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qs?h0:th;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function v0(s,e,t){const n=e.attributes,i=new Zn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),o.normalized){const d=Qo(as[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,c=new k;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const x=Qo(as[u.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function rd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Zo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ve.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),wn(s,e),v0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?p0(s,e.targets,t):s})}var y0=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var S=new Uint8Array(p.length),E=0;E<p.length;++E){var v=p.charCodeAt(E);S[E]=v>96?v-97:v>64?v-39:v+4}for(var T=0,E=0;E<p.length;++E)S[T++]=S[E]<60?n[S[E]]:(S[E]-60)*64+S[++E];return S.buffer.slice(0,T)}function c(p,S,E,v,T,M,R){var _=p.exports.sbrk,A=v+3&-4,D=_(A*T),P=_(M.length),O=new Uint8Array(p.exports.memory.buffer);O.set(M,P);var j=S(D,v,T,P,M.length);if(j==0&&R&&R(D,A,T),E.set(O.subarray(D,D+v*T)),_(D-_(0)),j!=0)throw new Error("Malformed buffer data: "+j)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function f(p){var S={object:new Worker(p),pending:0,requests:{}};return S.object.onmessage=function(E){var v=E.data;S.pending-=v.count,S.requests[v.id][v.action](v.value),delete S.requests[v.id]},S}function g(p){for(var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),E=new Blob([S],{type:"text/javascript"}),v=URL.createObjectURL(E),T=h.length;T<p;++T)h[T]=f(v);for(var T=p;T<h.length;++T)h[T].object.postMessage({});h.length=p,URL.revokeObjectURL(v)}function x(p,S,E,v,T){for(var M=h[0],R=1;R<h.length;++R)h[R].pending<M.pending&&(M=h[R]);return new Promise(function(_,A){var D=new Uint8Array(E),P=++u;M.pending+=p,M.requests[P]={resolve:_,reject:A},M.object.postMessage({id:P,count:p,size:S,source:D,mode:v,filter:T},[D.buffer])})}function m(p){var S=p.data;self.ready.then(function(E){if(!S.id)return self.close();try{var v=new Uint8Array(S.count*S.size);c(E,E.exports[S.mode],v,S.count,S.size,S.source,E.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:v},[v.buffer])}catch(T){self.postMessage({id:S.id,count:S.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,S,E,v,T){c(r,r.exports.meshopt_decodeVertexBuffer,p,S,E,v,r.exports[l[T]])},decodeIndexBuffer:function(p,S,E,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,S,E,v)},decodeIndexSequence:function(p,S,E,v){c(r,r.exports.meshopt_decodeIndexSequence,p,S,E,v)},decodeGltfBuffer:function(p,S,E,v,T,M){c(r,r.exports[d[T]],p,S,E,v,r.exports[l[M]])},decodeGltfBufferAsync:function(p,S,E,v,T){return h.length>0?x(p,S,E,d[v],l[T]):a.then(function(){var M=new Uint8Array(p*S);return c(r,r.exports[d[v]],M,p,S,E,r.exports[l[T]]),M})}}})();const to=new WeakMap,S0=new URL("/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),M0=new URL("/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),E0=new URL("/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class T0 extends Ii{constructor(e){super(e),this.decoderPaths={js:M0,wasm:S0,dep_js:E0},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=pi.resolveURL("draco_wasm_wrapper.js",e),t.wasm=pi.resolveURL("draco_decoder.wasm",e),t.dep_js=pi.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Qr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St,n).catch(n)}decodeDracoFile(e,t,n,i,r=Wt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(to.has(e)){const c=to.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(i=c,new Promise((l,d)=>{i._callbacks[r]={resolve:l,reject:d},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),to.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Zt;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:a,stride:o,vertexColorSpace:c}=e.attributes[n];let l;if(a===o)l=new Ft(r,a);else{const d=new Nd(r,o);l=new sa(d,a,0)}i==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(i,l)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;const n=new Ne;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ve.colorSpaceToWorking(n,St),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Qr(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=w0.toString(),o=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function w0(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(d){s.onModuleLoaded=function(h){d({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=o.buffer,l=o.taskConfig;e.then(d=>{const h=d.draco,u=new h.Decoder;try{const f=t(h,u,new Int8Array(c),l),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(u)}});break}};function t(a,o,c,l){const d=l.attributeIDs,h=l.attributeTypes;let u,f;const g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)u=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,u);else if(g===a.POINT_CLOUD)u=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in d){const p=self[h[m]];let S,E;if(l.useUniqueIDs)E=d[m],S=o.GetAttributeByUniqueId(u,E);else{if(E=o.GetAttributeId(u,a[d[m]]),E===-1)continue;S=o.GetAttribute(u,E)}const v=i(a,o,u,m,p,S);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),x.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(x.index=n(a,o,u)),a.destroy(u),x}function n(a,o,c){const d=c.num_faces()*3,h=d*4,u=a._malloc(h);o.GetTrianglesUInt32Array(c,h,u);const f=new Uint32Array(a.HEAPF32.buffer,u,d).slice();return a._free(u),{array:f,itemSize:1}}function i(a,o,c,l,d,h){const u=c.num_points(),f=h.num_components(),g=r(a,d),x=f*d.BYTES_PER_ELEMENT,m=Math.ceil(x/4)*4,p=m/d.BYTES_PER_ELEMENT,S=u*x,E=u*m,v=a._malloc(S);o.GetAttributeDataArrayForAllPoints(c,h,g,S,v);const T=new d(a.HEAPF32.buffer,v,S/d.BYTES_PER_ELEMENT);let M;if(x===m)M=T.slice();else{M=new d(E/d.BYTES_PER_ELEMENT);let R=0;for(let _=0,A=T.length;_<A;_++){for(let D=0;D<f;D++)M[R+D]=T[_*f+D];R+=p}}return a._free(v),{name:l,count:u,itemSize:f,array:M,stride:p}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class qt{constructor(e){this.name=e,this._handlers={}}on(e,t){return(this._handlers[e]=this._handlers[e]||[]).push(t),this}emit(e,t){const n=this._handlers[e];return n&&n.forEach(i=>i(t,this)),this}off(e,t){const n=this._handlers[e];return n&&(this._handlers[e]=n.filter(i=>i!==t)),this}}const A0="default";let un=A0,fn={},Dr={};function Vs(s){return`spidey_ai_${s}`}function R0(){try{localStorage.setItem(Vs(un),JSON.stringify(fn))}catch(s){console.warn("DataStore persist failed:",s)}}function no(s){try{const e=localStorage.getItem(Vs(s));fn=e?JSON.parse(e):{}}catch{fn={}}}class C0 extends qt{constructor(){super("DataStore"),no(un)}get(e){const t=e.split(".");let n=fn;for(const i of t){if(n==null||typeof n!="object")return;n=n[i]}return n}set(e,t){const n=e.split(".");let i=fn;for(let r=0;r<n.length-1;r++)(!i[n[r]]||typeof i[n[r]]!="object")&&(i[n[r]]={}),i=i[n[r]];return i[n[n.length-1]]=t,R0(),this._notify(e,t),this}push(e,t){const n=this.get(e)||[];return n.push(t),this.set(e,n),this}subscribe(e,t){return Dr[e]||(Dr[e]=[]),Dr[e].push(t),this}_notify(e,t){for(const[n,i]of Object.entries(Dr))(e.startsWith(n)||n==="*")&&i.forEach(r=>r(e,t,fn));this.emit("changed",{path:e,value:t,store:fn})}resetUser(e){const t=e||un;try{localStorage.removeItem(Vs(t))}catch{}return t===un&&(fn={},this._notify("*",fn)),this}getUser(){return un}switchUser(e){return un=e,no(e),this._notify("*",fn),this}getAllUsers(){const e=["default"];try{for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&n.startsWith("spidey_ai_")&&e.push(n.replace("spidey_ai_",""))}}catch{}return[...new Set(e)]}exportUserData(e){try{const t=localStorage.getItem(Vs(e||un));return t?JSON.parse(t):{}}catch{return{}}}importUserData(e,t){try{localStorage.setItem(Vs(e||un),JSON.stringify(t)),(e||un)===un&&(no(un),this._notify("*",fn))}catch(n){console.warn("DataStore import failed:",n)}return this}}const C=new C0;class P0 extends qt{constructor(){super("MemoryEngine"),this._ensureStore()}_ensureStore(){C.get("memory.facts")||C.set("memory.facts",[])}remember(e,t,n=1,i="conversation",r="general"){const a=C.get("memory.facts"),o=a.find(l=>l.key===e),c={key:e,value:typeof t=="object"?JSON.parse(JSON.stringify(t)):t,confidence:Math.min(n,1),source:i,category:r,updated:Date.now()};return o?(Object.assign(o,c),o.confidence=Math.min(o.confidence+.05,1)):(c.created=Date.now(),a.push(c)),C.set("memory.facts",a),this.emit("remembered",c),c}recall(e,t=10){const n=C.get("memory.facts")||[];let i=e?n.filter(r=>r.category===e):n;return i.sort((r,a)=>a.confidence-r.confidence),i.slice(0,t)}recallByKey(e){return(C.get("memory.facts")||[]).find(t=>t.key===e)||null}recallByPattern(e){const t=new RegExp(e,"i");return(C.get("memory.facts")||[]).filter(n=>t.test(n.key)||t.test(JSON.stringify(n.value)))}forget(e){const t=C.get("memory.facts")||[];C.set("memory.facts",t.filter(n=>n.key!==e)),this.emit("forgotten",{key:e})}getRecent(e=5){return(C.get("memory.facts")||[]).sort((n,i)=>i.updated-n.updated).slice(0,e)}getAllCategories(){const e=C.get("memory.facts")||[];return[...new Set(e.map(t=>t.category))]}}const Nt=new P0,L0=[/\b(\d{1,2}):(\d{2})\s*(am|pm)?\b/gi,/\b(\d{1,2})\s*(am|pm)\b/gi,/\b(noon|midnight)\b/gi],D0=[/\b(today|tomorrow|yesterday)\b/gi,/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi,/\b(next\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/gi,/\b(this\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/gi,/\b(\d{1,2})(st|nd|rd|th)?\s+(january|february|march|april|may|june|july|august|september|october|november|december)\b/gi,/\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})(st|nd|rd|th)?\b/gi],I0=[/\b(neural\s*network[s]?|deep\s*learning|machine\s*learning|artificial\s*intelligence|ai)\b/gi,/\b(calculus|algebra|geometry|trigonometry|statistics|probability)\b/gi,/\b(python|javascript|java|c\+\+|rust|go|typescript|swift|kotlin)\b/gi,/\b(physics|chemistry|biology|astronomy|science)\b/gi,/\b(history|geography|economics|psychology|philosophy)\b/gi,/\b(data\s*structure[s]?|algorithm[s]?|operating\s*system[s]?|computer\s*network[s]?|dbms|sql)\b/gi,/\b(web\s*dev|app\s*dev|software\s*engineer|programming|coding)\b/gi,/\b(english|literature|writing|grammar)\b/gi,/\b(spiderman|spider-man|spider\s*man)\b/gi,/\b(trailer|video|movie|clip|short)\b/gi],N0=[/\b(study|read|learn|practice|review|research)\b/gi,/\b(exam|test|quiz|assignment|project|homework|presentation)\b/gi,/\b(gym|workout|exercise|run|jog|walk|skate|swim|cycle|yoga|stretch)\b/gi,/\b(eat|lunch|dinner|breakfast|cook|food|coffee)\b/gi,/\b(meet|hang|party|movie|game|play|chill|relax)\b/gi,/\b(work|meeting|class|lecture|seminar|workshop)\b/gi,/\b(sleep|rest|nap|break)\b/gi,/\b(code|debug|build|develop|design|create)\b/gi,/\b(watch|view|stream|listen|play)\b/gi],F0=[/\b(library|cafe|coffee\s*shop|restaurant|gym|park|school|college|university|office|home|lab)\b/gi,/\b(at\s+the\s+\w+)\b/gi,/\b(in\s+\w+)\b/gi,/\b(youtube)\b/gi],U0=[/\b(professor|teacher|instructor|mentor|friend|mom|dad|brother|sister|boss|colleague)\b/gi];function Zi(s,e){const t=[];for(const n of s){let i;for(;(i=n.exec(e))!==null;)t.push(i[0].toLowerCase())}return[...new Set(t)]}function k0(s){let e=0,t=0;if(s.includes("noon"))return{hour:12,minute:0};if(s.includes("midnight"))return{hour:0,minute:0};const n=s.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);return n&&(e=parseInt(n[1]),t=n[2]?parseInt(n[2]):0,n[3]&&n[3].toLowerCase()==="pm"&&e<12&&(e+=12),n[3]&&n[3].toLowerCase()==="am"&&e===12&&(e=0)),{hour:e,minute:t}}function O0(s){const e=s.toLowerCase();if(e==="today")return{type:"relative",value:0};if(e==="tomorrow")return{type:"relative",value:1};if(e==="yesterday")return{type:"relative",value:-1};const t=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];for(let n=0;n<7;n++)if(e.includes(t[n])){const i=new Date().getDay();let r=n-i;return e.includes("next")&&(r+=7),r<=0&&!e.includes("next")&&!e.includes("this")&&(r+=7),{type:"relative",value:r}}return{type:"absolute",raw:s}}class B0 extends qt{constructor(){super("InfoExtraction")}extract(e){const t={times:Zi(L0,e).map(k0),dates:Zi(D0,e).map(O0),subjects:Zi(I0,e),activities:Zi(N0,e),locations:Zi(F0,e).map(n=>n.replace(/^(at the|at|in)\s+/i,"")),people:Zi(U0,e),raw:e};return this.emit("extracted",t),t}}const G0=new B0,z0={exam:[/\b(exam|test|quiz|midterm|final|assessment)\b/i,/\b(i have\s+\w+\s+(exam|test))\b/i,/\b(studying for|preparing for)\s+\w+\s+(exam|test)\b/i],study:[/\b(i\s+(need to|should|will|want to|gonna|am going to)\s+study)\b/i,/\b(study|learn|read about|research)\b/i,/\b(i have\s+\w+\s+(class|lecture|seminar|workshop))\b/i,/\b(homework|assignment|project|due)\b/i,/\bteach me\b/i],schedule:[/\b(schedule|plan|remind|reminder|set|organize)\b/i,/\b(i have\s+\w+\s+(at|on|tomorrow))\b/i,/\b(at\s+\d|at\s+\w+:\w+)\b/i],weather:[/\b(weather|rain|sunny|cloudy|temperature|cold|hot|forecast)\b/i],gym:[/\b(gym|workout|exercise|fitness)\b/i,/\b(i\s+(need to|should|will|gonna)\s+(work out|gym|exercise))\b/i],food:[/\b(hungry|eat|lunch|dinner|breakfast|food|coffee|pizza|hunger|cook)\b/i],casual:[/\b(hello|hi|hey|sup|howdy|yo|whatsup|wassup)\b/i,/\b(how are you|how's it going|what's up)\b/i,/\b(nice|great|awesome|cool|amazing|fantastic)\b/i,/\b(joke|funny|lol|lmao|haha)\b/i,/\b(thanks|thank you|thx)\b/i],goal:[/\b(i\s+(want to|wanna|aim to|plan to|hope to)\s+\w+)\b/i,/\b(my\s+goal|my\s+target|my aim|my objective)\b/i],location:[/\b(where\s+(is|are|am|can|do))\b/i,/\b(going to|heading to|at the|near)\b/i,/\b(direction|route|map|location)\b/i],media:[/\b(watch|view|stream|listen to)\s+.+\s+(on|in)\s+(youtube)\b/i,/\b(youtube)\s+.+(trailer|video|clip)\b/i,/\b(play)\s+.+\s+(video|movie|trailer)\b/i,/\b(trailer)\b/i],help:[/\b(help|how do|what is|what are|what's|explain|tell me about)\b/i,/\b(can you|would you|could you)\b/i,/\bteach me\b/i,/\bwhat does\b/i,/\bhow does\b/i,/\bdefine\b/i]};class H0 extends qt{constructor(){super("IntentClassifier")}classify(e){const t={};for(const[a,o]of Object.entries(z0)){let c=0;for(const l of o)if(l.test(e)){c+=.3;const d=e.match(l)[0].length;c+=d/e.length*.4}c>0&&(t[a]=Math.min(c+.2,1))}const n=Object.entries(t).sort((a,o)=>o[1]-a[1]),i=n[0],r={primary:i?i[0]:"casual",confidence:i?i[1]:.3,all:Object.fromEntries(n),raw:e};return this.emit("classified",r),r}}const V0=new H0,Ir={"neural networks":{category:"AI/ML",description:"Computing systems inspired by biological neural networks.",resources:[{type:"youtube",title:"3Blue1Brown Neural Networks",url:"https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"},{type:"article",title:"CS231n Stanford",url:"https://cs231n.github.io/"},{type:"course",title:"Deep Learning Specialization",url:"https://www.coursera.org/specializations/deep-learning"}]},python:{category:"Programming",description:"A high-level general-purpose programming language.",resources:[{type:"youtube",title:"Python for Beginners",url:"https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"},{type:"article",title:"Real Python Tutorials",url:"https://realpython.com/"},{type:"course",title:"Python Crash Course",url:"https://ehmatthes.github.io/pcc/"}]},javascript:{category:"Programming",description:"Language of the web — runs everywhere.",resources:[{type:"youtube",title:"JavaScript Mastery",url:"https://youtube.com/c/JavaScriptMastery"},{type:"article",title:"MDN Web Docs",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}]},"machine learning":{category:"AI/ML",description:"Field of study giving computers the ability to learn without explicit programming.",resources:[{type:"youtube",title:"StatQuest Machine Learning",url:"https://youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1"},{type:"course",title:"Andrew Ng ML Course",url:"https://www.coursera.org/learn/machine-learning"}]},calculus:{category:"Mathematics",description:"The mathematical study of continuous change.",resources:[{type:"youtube",title:"Professor Leonard Calculus",url:"https://youtube.com/playlist?list=PLF797E961509B4EB5"},{type:"article",title:"Khan Academy Calculus",url:"https://www.khanacademy.org/math/calculus-1"}]},"data structures":{category:"Computer Science",description:"Ways of organizing and storing data efficiently.",resources:[{type:"youtube",title:"MIT 6.006 Algorithms",url:"https://youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY"},{type:"article",title:"GeeksforGeeks DSA",url:"https://www.geeksforgeeks.org/data-structures/"}]},physics:{category:"Science",description:"The study of matter, energy, and their interactions.",resources:[{type:"youtube",title:"Physics with Professor Matt Anderson",url:"https://youtube.com/c/PhysicswithProfessorMattAnderson"},{type:"article",title:"The Physics Classroom",url:"https://www.physicsclassroom.com/"}]}};class W0 extends qt{constructor(){super("KnowledgeEngine")}lookup(e){const t=e.toLowerCase().trim();for(const[n,i]of Object.entries(Ir))if(t.includes(n)||n.includes(t))return{topic:n,...i};return null}search(e){const t=e.toLowerCase();return Object.entries(Ir).filter(([n,i])=>n.includes(t)||i.category.toLowerCase().includes(t)||i.description.toLowerCase().includes(t)).map(([n,i])=>({topic:n,...i}))}getCategories(){return[...new Set(Object.values(Ir).map(e=>e.category))]}getAllTopics(){return Object.keys(Ir)}}const ec=new W0;class q0 extends qt{constructor(){super("ResourceEngine")}recommend(e,t=3){const n=ec.lookup(e);return!n||!n.resources?[]:n.resources.slice(0,t)}recommendBySubjects(e,t=3){const n=[];for(const i of e){const r=ec.lookup(i);r&&r.resources&&n.push(...r.resources)}return n.slice(0,t)}}const X0=new q0,j0=[{id:"recur_drink_water",title:"Drink Water",category:"productivity",xp:30,frequency:"daily"},{id:"recur_read_10min",title:"Read 10 mins",category:"learning",xp:50,frequency:"daily"},{id:"recur_workout",title:"Workout",category:"fitness",xp:80,frequency:"weekdays"},{id:"recur_study_review",title:"Study Review",category:"learning",xp:100,frequency:"weekly"},{id:"recur_doodle",title:"Doodle or Sketch",category:"creativity",xp:40,frequency:"daily"}],K0=13,Nr=[{title:"Study Session",category:"learning",xp:150,duration:60},{title:"Read a Chapter",category:"learning",xp:100,duration:45},{title:"Code Practice",category:"productivity",xp:200,duration:90},{title:"Write Journal",category:"creativity",xp:80,duration:30},{title:"Online Course",category:"learning",xp:180,duration:60},{title:"Meditate",category:"productivity",xp:60,duration:15},{title:"Stretch Routine",category:"fitness",xp:50,duration:20},{title:"Clean Workspace",category:"productivity",xp:40,duration:20},{title:"Organize Files",category:"productivity",xp:60,duration:30},{title:"Practice Guitar",category:"creativity",xp:70,duration:30},{title:"Sketch or Doodle",category:"creativity",xp:60,duration:25},{title:"Learn an Instrument",category:"creativity",xp:90,duration:40}],ad=[{title:"Gym Workout",category:"fitness",xp:200,duration:60},{title:"Morning Run",category:"fitness",xp:150,duration:30},{title:"Skate Session",category:"fun",xp:120,duration:45},{title:"Walk in Park",category:"fun",xp:80,duration:30},{title:"Coffee Meeting",category:"fun",xp:60,duration:45},{title:"Errands",category:"productivity",xp:50,duration:60},{title:"Photography Walk",category:"creativity",xp:70,duration:45},{title:"Basketball",category:"fitness",xp:180,duration:60},{title:"Street Photography",category:"creativity",xp:75,duration:40}];class $0 extends qt{constructor(){super("MissionEngine")}async createFromIntent(e,t,n){const i=n&&n.current?.weathercode>=51,r=t.subjects,a=t.times,o=t.dates;let c=null;if(e.primary==="exam"||e.primary==="study"?c=this._createStudyMission(r,a,o):e.primary==="gym"?c=this._createGymMission(i):e.primary==="schedule"?c=this._createScheduleMission(t,i):e.primary==="media"?c=this._createMediaMission(r,a,o):c=this._createAutoMission(i),c){if(c.comic=`/comics/comic_${Math.floor(Math.random()*K0)+1}.jpg`,c.id=`mission_${Date.now()}`,c.created=Date.now(),c.status="pending",c.progress=0,r.length>0){const d=X0.recommendBySubjects(r);d.length>0&&(c.resources=d)}const l=C.get("missions.pending")||[];l.push(c),C.set("missions.pending",l),C.get("missions.current")||C.set("missions.current",c),Nt.remember(`mission:${c.id}`,c,1,"system","mission"),this.emit("mission-created",c)}return c}activateMission(e){const t=C.get("missions.pending")||[],n=t.findIndex(i=>i.id===e);return n===-1?!1:(C.set("missions.current",t[n]),this.emit("mission-activated",t[n]),!0)}completeMission(e,t){const n=C.get("missions.current");if(n&&n.id===e){const i=n.xp||100;if(!t?.skipXp){const a=C.get("user.xp")||0;C.set("user.xp",a+i);const o=C.get("user.level")||1,c=Math.floor((a+i)/1e3)+1;c>o&&C.set("user.level",c)}this._checkAchievements();const r=C.get("missions.completed")||[];return r.push({...n,completedAt:Date.now()}),C.set("missions.completed",r),C.set("missions.current",null),C.set("missions.pending",(C.get("missions.pending")||[]).filter(a=>a.id!==e)),Nt.remember(`completed:${e}`,n,1,"system","achievement"),this.emit("mission-completed",{mission:n,xp:i}),{mission:n,xp:i}}return null}completePipelineStep(e,t){let n=C.get("missions.current"),i=C.get("missions.pending")||[];const a=(n?[n,...i]:[...i]).find(m=>m.id===e);if(!a||!a.pipeline)return null;const o=a.pipeline.find(m=>m.id===t);if(!o||o.done)return null;o.done=!0;const c=a.pipeline.length,l=a.pipeline.filter(m=>m.done).length,d=Math.floor((a.xp||100)/c),h=(a.xp||100)-d*c,u=l===c?d+h:d,f=C.get("user.xp")||0;C.set("user.xp",f+u);const g=C.get("user.level")||1,x=Math.floor((f+u)/1e3)+1;if(x>g&&C.set("user.level",x),n&&n.id===e?C.set("missions.current",{...a}):C.set("missions.pending",i.map(m=>m.id===e?{...m,pipeline:a.pipeline}:m)),this.emit("pipeline-step",{missionId:e,stepId:t,title:o.title,xp:u,done:l,total:c}),l===c){if(n=C.get("missions.current"),n&&n.id===e)this.completeMission(e,{skipXp:!0});else{i=C.get("missions.pending")||[];const m=i.find(p=>p.id===e);m&&(C.set("missions.current",{...m,pipeline:a.pipeline}),C.set("missions.pending",i.filter(p=>p.id!==e)),this.completeMission(e,{skipXp:!0}))}return{completed:!0,stepXp:u,doneSteps:l,totalSteps:c}}return{completed:!1,stepXp:u,doneSteps:l,totalSteps:c}}getPipelineProgress(e){if(!e||!e.pipeline||e.pipeline.length===0)return{done:0,total:0,pct:0};const t=e.pipeline.filter(n=>n.done).length;return{done:t,total:e.pipeline.length,pct:Math.round(t/e.pipeline.length*100)}}updateProgress(e,t){const n=C.get("missions.current");n&&n.id===e&&(n.progress=Math.min(t,100),C.set("missions.current",n),this.emit("mission-progress",{id:e,progress:t}))}_initRecurring(){const e=C.get("recurringQuests");(!e||e.length===0)&&C.set("recurringQuests",j0.map(t=>({...t,lastCompleted:null})))}getRecurringDue(){this._initRecurring();const e=C.get("recurringQuests")||[],t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=t.getDay(),r=i>=1&&i<=5;return e.filter(a=>{if(!a.lastCompleted)return!0;const o=new Date(a.lastCompleted),c=(n-o)/864e5;return a.frequency==="daily"?c>=1:a.frequency==="weekdays"?r&&c>=1:a.frequency==="weekly"?c>=7:!1})}completeRecurringQuest(e){const t=C.get("recurringQuests")||[],n=t.find(a=>a.id===e);if(!n)return!1;const i=new Date;n.lastCompleted=i.toISOString(),C.set("recurringQuests",[...t]);const r=C.get("user.xp")||0;return C.set("user.xp",r+n.xp),this.emit("recurring-completed",n),!0}generateSideQuests(e){const i=(e&&e.current?.weathercode>=51?Nr:[...Nr,...ad]).sort(()=>Math.random()-.5),r=Math.min(4,i.length),a=[];for(let c=0;c<r;c++)a.push({id:`quest_${Date.now()}_${c}`,title:i[c].title,category:i[c].category,xp:i[c].xp,duration:i[c].duration,completed:!1});const o=this.getRecurringDue();for(const c of o)a.find(l=>l.id===c.id)||a.push({id:c.id,title:c.title,category:c.category,xp:c.xp,recurring:!0,frequency:c.frequency,completed:!1});return C.set("sideQuests",a),this.emit("quests-generated",a),a}completeQuest(e){const t=C.get("sideQuests")||[],n=t.find(i=>i.id===e);if(n&&!n.completed){if(n.completed=!0,C.set("sideQuests",t),n.recurring)this.completeRecurringQuest(n.id);else{const i=C.get("user.xp")||0;C.set("user.xp",i+(n.xp||30))}this.emit("quest-completed",n)}}_createStudyMission(e,t,n){const i=e.length>0?e[0]:"your subject",r=t.length>0?`${String(t[0].hour).padStart(2,"0")}:${String(t[0].minute).padStart(2,"0")}`:"",a=n.length>0&&n[0].type==="relative"?n[0].value===0?"today":n[0].value===1?"tomorrow":`in ${n[0].value} days`:"",o=ec.lookup(i);return{title:`Study ${i.charAt(0).toUpperCase()+i.slice(1)}`,category:"learning",eta:r?`${a} ${r}`.trim():a||"Today",reward:o?200:150,xp:o?200:150,description:o?o.description:`Study session for ${i}`,resources:o?o.resources:[],type:"learning"}}_createGymMission(e){return e?{title:"Indoor Workout",category:"fitness",eta:"Today",reward:120,xp:120,description:"Rain detected — indoor workout instead of gym.",type:"fitness"}:{title:"Gym Session",category:"fitness",eta:"Today",reward:150,xp:150,description:"Head to the gym for a solid workout.",type:"fitness"}}_createScheduleMission(e,t){const n=e.subjects,i=e.locations;return{title:n.length>0?`${n[0].charAt(0).toUpperCase()+n[0].slice(1)} Session`:"Scheduled Task",category:"productivity",eta:"Today",reward:100,xp:100,description:i.length>0?`At ${i[0]}`:"On your schedule.",type:"schedule"}}_createMediaMission(e,t,n){const i=e.length>0?e.slice(0,3).join(" "):"Video",r=t.length>0?`${String(t[0].hour).padStart(2,"0")}:${String(t[0].minute).padStart(2,"0")}`:"",a=encodeURIComponent(i);return{title:`Watch ${i.charAt(0).toUpperCase()+i.slice(1)}`,category:"fun",eta:r||"Today",reward:50,xp:50,description:`Reminder to watch ${i} on YouTube.`,type:"fun",resources:[{type:"youtube",title:`Search: ${i}`,url:`https://m.youtube.com/results?search_query=${a}`}]}}_createAutoMission(e){const t=e?Nr:[...Nr,...ad],n=t[Math.floor(Math.random()*t.length)];return{title:n.title,category:n.category,eta:"Today",reward:n.xp,xp:n.xp,description:`Estimated ${n.duration} minutes.`,type:n.category}}_checkAchievements(){const t=(C.get("missions.completed")||[]).length,n=C.get("user.achievements")||[];t>=1&&!n.includes("first_mission")&&(n.push("first_mission"),this.emit("achievement",{id:"first_mission",title:"First Step",text:"Completed your first mission!"})),t>=5&&!n.includes("five_missions")&&(n.push("five_missions"),this.emit("achievement",{id:"five_missions",title:"Getting Started",text:"Completed 5 missions!"})),t>=10&&!n.includes("ten_missions")&&(n.push("ten_missions"),this.emit("achievement",{id:"ten_missions",title:"Dedicated Hero",text:"Completed 10 missions!"}));const i=C.get("habits.detected")||[];for(const r of i)r.confidence>=90&&!n.includes(`streak_${r.key}`)&&(n.push(`streak_${r.key}`),this.emit("achievement",{id:`streak_${r.key}`,title:"Streak Master",text:`Strong ${r.key} habit!`}));C.set("user.achievements",n)}}const Et=new $0;class Y0 extends qt{constructor(){super("HabitEngine"),this._interval=null}start(e=12e4){this.analyze(),this._interval=setInterval(()=>this.analyze(),e)}stop(){this._interval&&(clearInterval(this._interval),this._interval=null)}analyze(){const e=Nt.recall("habit",50),t={};for(const i of e){const a=i.key.replace(/:\d+$/,"").replace(/:time$/,"");t[a]||(t[a]={count:0,totalConfidence:0,lastSeen:0,category:i.category}),t[a].count++,t[a].totalConfidence+=i.confidence,t[a].lastSeen=Math.max(t[a].lastSeen,i.updated)}const n=[];for(const[i,r]of Object.entries(t)){const a=r.totalConfidence/r.count,o=(Date.now()-r.lastSeen)/(1e3*60*60*24),c=Math.max(0,1-o/14),l=Math.min(1,a*.6+c*.4);n.push({key:i,confidence:Math.round(l*100),occurrences:r.count,category:r.category})}return n.sort((i,r)=>r.confidence-i.confidence),C.set("habits.detected",n),this.emit("analyzed",n),n}getStreaks(e,t=14){const n=Nt.recall(e,50);if(n.length===0)return{current:0,longest:0};const i=n.map(d=>{const h=new Date(d.updated);return`${h.getFullYear()}-${h.getMonth()}-${h.getDate()}`}),r=[...new Set(i)].sort().reverse();let a=0;const o=new Date;`${o.getFullYear()}${o.getMonth()}${o.getDate()}`;for(let d=0;d<r.length;d++){const h=new Date(o);h.setDate(h.getDate()-d);const u=`${h.getFullYear()}-${h.getMonth()}-${h.getDate()}`;if(r[d]===u)a++;else break}let c=0,l=1;for(let d=1;d<r.length;d++){const h=new Date(r[d-1]),u=new Date(r[d]);(h-u)/(1e3*60*60*24)===1?l++:(c=Math.max(c,l),l=1)}return c=Math.max(c,l),{current:a,longest:c}}}const nh=new Y0;class J0 extends qt{constructor(){super("PredictionEngine")}predict(){const e=C.get("habits.detected")||[],t=Nt.recall("schedule",20),n=[],i=new Date,r=i.getHours(),a=i.getDay();for(const o of e)o.confidence>40&&n.push({activity:o.key,probability:o.confidence,timeframe:this._estimateTimeframe(o.key,r,a),source:"habit"});for(const o of t){const c=typeof o.value=="object"?o.value:{description:o.value};n.push({activity:c.description||o.key,probability:Math.round(o.confidence*100),timeframe:c.time?`${c.time}`:"today",source:"schedule"})}return n.sort((o,c)=>c.probability-o.probability),C.set("predictions",n),this.emit("predicted",n),n}_estimateTimeframe(e,t,n){return e.includes("study")||e.includes("code")?t<12?"this morning":t<17?"this afternoon":"this evening":e.includes("gym")||e.includes("workout")?t<12?"this afternoon":"this evening":"today"}getNextPrediction(){const e=C.get("predictions")||[];return e.length>0?e[0]:null}}const Rc=new J0;class Z0 extends qt{constructor(){super("ToolEngine"),this.weatherCache=null,this.weatherCacheTime=0,this.currentLocation=null}async getWeather(e,t){const n=Date.now();if(this.weatherCache&&n-this.weatherCacheTime<6e5)return this.weatherCache;try{const i=`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&current=temperature_2m,weathercode,precipitation,rain,windspeed_10m&hourly=temperature_2m,precipitation_probability,weathercode&timezone=auto`,a=await(await fetch(i)).json();return this.weatherCache=a,this.weatherCacheTime=n,C.set("weather.current",a),this.emit("weather-updated",a),a}catch(i){return console.warn("Weather fetch failed:",i),null}}isRaining(e){if(!e)return!1;const t=e.current?.weathercode;return t==null?!1:t>=51&&t<=67||t>=80&&t<=99}getWeatherDescription(e){return{0:"Clear",1:"Clear",2:"Partly cloudy",3:"Cloudy",45:"Foggy",48:"Foggy",51:"Light rain",53:"Moderate rain",55:"Heavy rain",56:"Freezing rain",57:"Freezing rain",61:"Light rain",63:"Moderate rain",65:"Heavy rain",66:"Freezing rain",67:"Freezing rain",71:"Light snow",73:"Moderate snow",75:"Heavy snow",80:"Light showers",81:"Moderate showers",82:"Heavy showers",95:"Thunderstorm",96:"Thunderstorm",99:"Thunderstorm"}[e]||"Unknown"}getTemp(e){return e?.current?.temperature_2m??null}setLocation(e,t){this.currentLocation={lat:e,lon:t},C.set("location",{lat:e,lon:t})}updateMapDestination(e,t,n){C.set("map.destination",{lat:e,lon:t,label:n}),this.emit("map-updated",{destLat:e,destLon:t,label:n})}}const di=new Z0;class Q0 extends qt{constructor(){super("DecisionEngine"),C.set("suggestions.current",null),C.set("suggestions.dismissed",[])}decide(e,t,n,i){const r=[],a=t.primary;(a==="exam"||a==="study")&&r.push({action:"create_mission",reason:"study_topic_detected",priority:2}),a==="media"&&(r.push({action:"play_media",reason:"media_requested",priority:1}),n.times.length>0&&r.push({action:"create_mission",reason:"schedule_with_media",priority:2})),a==="schedule"&&r.push({action:"offer_mission",reason:"schedule_detected",priority:2}),i&&this._shouldWeatherAlert(i)&&r.push({action:"weather_alert",reason:"rain_or_storm",priority:1}),(a==="gym"||a==="food")&&r.push({action:"generate_quests",reason:"activity_detected",priority:3}),a==="casual"&&r.push({action:"casual_chat",reason:"casual_conversation",priority:5}),r.push({action:"update_hud",reason:"state_changed",priority:4}),r.sort((c,l)=>c.priority-l.priority);const o={response:e,actions:r.map(c=>c.action),shouldSpeak:!e.includes("?")||r.length<=3,priority:r[0]?.priority||5};return C.set("decisions.last",o),this.emit("decided",o),o}_shouldWeatherAlert(e){if(!e?.current?.weathercode)return!1;const t=e.current.weathercode;return t>=51&&t<=67||t>=80&&t<=99}generateInsights(e,t,n){const i=[],a=new Date().getHours();if(e){const o=e.current?.temperature_2m,c=e.current?.weathercode;c!=null&&c>=51?(i.push("Rain detected — indoor tasks recommended."),i.push("Don't forget your umbrella!")):c!=null&&c>=71?i.push("Snow outside — stay warm!"):o!=null&&(o>30?i.push("Hot day — stay hydrated."):o<10?i.push("Cold outside — layer up."):i.push(`Nice weather at ${o}°C.`))}if(t&&t.length>0){const o=t[0];o.probability>70&&i.push(`You'll probably ${o.activity} ${o.timeframe}.`)}return a>=6&&a<12&&i.push("Good morning! Prime focus hours ahead."),a>=12&&a<14&&i.push("Lunch time — refuel!"),a>=14&&a<17&&i.push("Afternoon slump? Try a quick walk."),a>=17&&a<21&&i.push("Evening — great time to review your day."),(a>=21||a<6)&&i.push("Wind down time. Consider relaxing."),C.set("insights",i),this.emit("insights-generated",i),i}async generateProactiveMessage(){const e=C.get("proactive.lastMessage")||0,t=C.get("proactive.lastUserMessage")||0,n=Date.now();if(n-t<15e3||n-e<25e3||C.get("missions.current"))return null;try{const r=await fetch("/suggest/speak",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:"default"})});if(r.ok){const a=await r.json();if(a.message)return C.set("proactive.lastMessage",n),a.message}}catch{}const i=["Time for a quick mission — what interests you right now?","I think it's a great moment to pick up where you left off.","Your profile says you love learning — want a new challenge?"];return C.set("proactive.lastMessage",n),i[Math.floor(Math.random()*i.length)]}async suggestMission(){const e=C.get("suggestions.dismissed")||[],t=C.get("suggestions.list")||[];if(C.get("missions.current"))return null;try{const n=await fetch("/suggest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:"default"})});if(n.ok){const r=(await n.json()).suggestions||[];if(r.length>0){const a=e.filter(h=>Date.now()-h.time<864e5),o=new Set(a.map(h=>h.id)),c=new Set(t.map(h=>h.title)),l=r.filter(h=>!o.has(h.id)&&!c.has(h.title));for(const h of l)h.id||(h.id=`suggest_${Date.now()}_${Math.random().toString(36).slice(2,8)}`),h.reason="Based on your interests",h.time=Date.now(),t.push(h);const d=t.slice(-20);return C.set("suggestions.list",d),d.length>0?d[d.length-1]:null}}}catch{}return null}dismissSuggestion(e){const t=C.get("suggestions.dismissed")||[];let n=C.get("suggestions.list")||[];const i=n.findIndex(r=>r.id===e);i!==-1&&(t.push({id:e,condition:n[i].condition||"custom",time:Date.now()}),n=n.filter(r=>r.id!==e),C.set("suggestions.dismissed",t),C.set("suggestions.list",n))}acceptSuggestion(e){const t=C.get("suggestions.list")||[],n=t.find(l=>l.id===e);if(!n)return null;C.set("suggestions.lastAccepted",Date.now());const i=t.filter(l=>l.id!==e);C.set("suggestions.list",i);const r=n.subtopics||[],a=r.length>0?r.map((l,d)=>({id:`step_${d}`,title:l,done:!1})):[{id:"step_0",title:`Plan and prepare for: ${n.title}`,done:!1},{id:"step_1",title:`Work through ${n.title}`,done:!1},{id:"step_2",title:"Review and summarize what you learned",done:!1}],o={id:`mission_${Date.now()}`,title:n.title,notes:n.notes,category:n.category||"productivity",xp:n.xp||100,pipeline:a,status:"pending",progress:0,created:Date.now(),type:"suggested",comic:`/comics/comic_${Math.floor(Math.random()*13)+1}.jpg`},c=C.get("missions.pending")||[];return c.push(o),C.set("missions.pending",c),C.get("missions.current")||C.set("missions.current",o),Et.emit("mission-created",o),o}shouldAskFollowUp(e,t){return t<3?!0:e.primary==="casual"&&t>5?!1:Math.random()<.3}}const ui=new Q0,ex={1:"Newcomer",2:"Sidekick",3:"Hero in Training",4:"Neighborhood Watch",5:"Friendly Hero",6:"City Protector",7:"Wall Crawler",8:"Web Slinger",9:"Amazing Spider",10:"Superior Spider",15:"Ultimate Spider",20:"Spider-Verse"};function tx(s){let e="Friendly Neighborhood Hero";for(const[t,n]of Object.entries(ex))s>=parseInt(t)&&(e=n);return e}function nx(s){return s*1e3}const ix={street:{url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",label:"Street",attr:"&copy; OpenStreetMap"},dark:{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",label:"Dark",attr:"&copy; OpenStreetMap &copy; CARTO"},satellite:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",label:"Satellite",attr:"&copy; Esri"}};class sx extends qt{constructor(){super("HUDController"),this._map=null,this._layers=null,this._tileLayer=null,this._geoCache={},this._subscribed=!1,this._timerInterval=null}init(){this._subscribed||(C.subscribe("*",()=>this.refresh()),Et.on("mission-created",()=>this.refresh()),Et.on("mission-completed",e=>this._onMissionComplete(e)),Et.on("achievement",e=>this._showAchievement(e)),Et.on("quests-generated",()=>this._renderQuests()),this.refresh(),this._subscribed=!0,this._startTimerTick(),ui.suggestMission().then(()=>this._renderSuggestions()),this._obtainLocation(),this._geofenceInterval=setInterval(()=>this._checkGeofence(),1e4),setInterval(async()=>{Rc.predict(),this._updateInsights(),await ui.suggestMission(),this._renderSuggestions()},1e4))}_obtainLocation(){const e=(n,i)=>{di.setLocation(n,i),C.set("user.currentCoords",{lat:n,lon:i}),this._map&&(this._map.setView([n,i],14),this._updateMapMarkers())};let t=!1;if(navigator.geolocation){const n=r=>{t||(t=!0,e(r.coords.latitude,r.coords.longitude))},i={enableHighAccuracy:!0,timeout:5e3,maximumAge:6e4};navigator.geolocation.getCurrentPosition(n,()=>{},i)}setTimeout(async()=>{if(!t)try{const i=await(await fetch("/api/my-location")).json();i.lat&&(e(i.lat,i.lon),t=!0)}catch{}},3e3)}refresh(){this._renderLevel(),this._renderMission(),this._renderMap(),this._renderQuests(),this._renderProgress(),this._renderStreaks(),this._renderStats(),this._renderSuggestions(),this._updateInsights()}_renderLevel(){const e=C.get("user.xp")||0,t=C.get("user.level")||1,n=nx(t),i=Math.min(e/n*100,100),r=document.querySelector(".level-num"),a=document.querySelector(".level-title"),o=document.getElementById("xpCurrent"),c=document.getElementById("xpMax"),l=document.getElementById("xpBarFill");r&&(r.textContent=`LEVEL ${t}`),a&&(a.textContent=tx(t)),o&&(o.textContent=Math.round(e)),c&&(c.textContent=n),l&&(l.style.width=i+"%")}_renderMission(){const e=C.get("missions.current"),t=C.get("missions.pending")||[],n=e?[e,...t]:[...t],i=document.getElementById("activeMissionCard");if(!i)return;const r=i.querySelector(".card-header");if(i.innerHTML="",r&&i.appendChild(r),n.length===0){i.innerHTML+=`
        <div class="mission-name">No active mission</div>
        <div class="mission-details">
          <div class="mission-detail"><span class="detail-label">STATUS</span><span class="detail-val">Standing by</span></div>
        </div>
        <div class="mission-progress">
          <div class="mission-progress-track">
            <div class="mission-progress-fill" id="missionProgressFill" style="width:0%"></div>
          </div>
          <span class="mission-progress-label">IDLE</span>
        </div>
      `;return}n.slice(0,10).forEach((a,o)=>{const c=o===0&&!!e,l=a.type==="challenge",d=a.timer?.active,h=a.timer&&!a.timer.active&&a.timer.remaining>0&&a.timer.remaining<a.timer.duration,u=a.timer?.remaining||0,f=u>0?this._formatTime(u):"",g=C.get("map.selectedMissionId")===a.id,x=document.createElement("div");x.className="mission-subcard"+(g?" mission-selected":""),x.dataset.missionId=a.id;const m=Et.getPipelineProgress(a),p=m.total>0?`${m.done}/${m.total} steps`:"",S=C.get(`pipeline.expanded.${a.id}`)||!1;x.innerHTML=`
        <div class="mission-subcard-header">
          <span class="mission-subcard-title">${a.title}</span>
          <span class="mission-subcard-badge ${l?"badge-challenge":"badge-mission"}">${l?"CHALLENGE":"MISSION"}</span>
          ${p?`<span class="pipeline-progress-label">${p}</span>`:""}
        </div>
        ${a.notes?`<div class="mission-notes">${a.notes}</div>`:""}
        ${f?`<div class="mission-timer" data-mission-id="${a.id}">⏱ ${f}</div>`:""}
        <div class="mission-details">
          <div class="mission-detail"><span class="detail-label">STATUS</span><span class="detail-val">${c?d?"ACTIVE":h?"PAUSED":"READY":"QUEUED"}</span></div>
          <div class="mission-detail"><span class="detail-label">REWARD</span><span class="detail-val reward">+${a.xp||100} XP</span></div>
        </div>
        ${c?`
        <div class="mission-progress">
          <div class="mission-progress-track">
            <div class="mission-progress-fill" style="width:${a.progress||0}%"></div>
          </div>
          <span class="mission-progress-label">${d?"RUNNING":h?"PAUSED":"READY"}</span>
        </div>`:""}
        ${a.comic?`<img class="mission-subcard-comic" src="${a.comic}" alt="" loading="lazy">`:""}
        <div class="pipeline-steps ${S?"pipeline-open":""}" data-mission-id="${a.id}">
          ${(a.pipeline||[]).map(_=>`
            <label class="pipeline-step ${_.done?"step-done":""}">
              ${c?`<input type="checkbox" class="pipeline-checkbox" data-step-id="${_.id}" ${_.done?"checked disabled":""}>`:`<span class="pipeline-step-bullet">${_.done?"✓":"○"}</span>`}
              <span class="step-title">${_.title}</span>
              <span class="step-check">${_.done?"✓":""}</span>
            </label>
          `).join("")}
        </div>
        <div class="mission-details" style="margin-top:4px;">
          <div class="mission-detail"><span class="detail-label">LOCATION</span><span class="detail-val">${a.location||"None"}</span></div>
        </div>
        <div class="mission-subcard-actions">
          ${c?d?'<button class="mission-pause-sm">⏸ Pause</button>':'<button class="mission-start-sm">▶ Start</button>':""}
          ${c?'<button class="mission-confirm-sm">✓ Complete</button>':""}
          <button class="mission-remove-sm">✕ Remove</button>
        </div>
      `,i.appendChild(x),x.querySelector(".mission-subcard-header").addEventListener("click",_=>{_.stopPropagation();const A=!C.get(`pipeline.expanded.${a.id}`);C.set(`pipeline.expanded.${a.id}`,A),this._renderMission()}),x.addEventListener("click",_=>{_.target.closest("button")||_.target.closest(".mission-subcard-header")||_.target.closest(".pipeline-step")||this._selectMission(a.id)}),x.querySelectorAll(".pipeline-checkbox").forEach(_=>{_.addEventListener("change",A=>{A.stopPropagation();const D=_.dataset.stepId,P=Et.completePipelineStep(a.id,D);P&&!P.completed&&(C.set(`pipeline.expanded.${a.id}`,!0),this._showAchievement({title:"Step Complete",text:`+${P.stepXp} XP · ${P.doneSteps}/${P.totalSteps}`,sub:a.pipeline.find(O=>O.id===D)?.title||""})),this.refresh()})});const v=x.querySelector(".mission-remove-sm");v&&v.addEventListener("click",_=>{_.stopPropagation(),this._removeMission(a.id)});const T=x.querySelector(".mission-confirm-sm");T&&T.addEventListener("click",_=>{_.stopPropagation(),this._completeCurrentMission(a)});const M=x.querySelector(".mission-start-sm");M&&M.addEventListener("click",_=>{_.stopPropagation(),this._startMissionTimer(a)});const R=x.querySelector(".mission-pause-sm");R&&R.addEventListener("click",_=>{_.stopPropagation(),this._pauseMissionTimer(a)})})}_startTimerTick(){this._timerInterval||(this._timerInterval=setInterval(()=>{const e=C.get("missions.current");if(!e?.timer?.active)return;const t=Date.now()-(e.timer._lastTick||Date.now());e.timer._lastTick=Date.now(),e.timer.remaining=Math.max(0,e.timer.remaining-t),e.progress=Math.min(100,(e.timer.duration-e.timer.remaining)/e.timer.duration*100),e.timer.remaining<=0&&(e.timer.active=!1,e.status="failed",this._showAchievement({title:"TIME UP!",text:"Challenge failed",sub:e.title})),C.set("missions.current",{...e})},250))}_startMissionTimer(e){e.timer&&(e.timer.active=!0,e.timer._lastTick=Date.now(),e.status="active",C.set("missions.current",{...e}))}_pauseMissionTimer(e){e.timer&&(e.timer.active=!1,e.status="paused",C.set("missions.current",{...e}))}_formatTime(e){const t=Math.ceil(e/1e3),n=Math.floor(t/3600),i=Math.floor(t%3600/60),r=t%60;return n>0?`${n}h ${i}m ${r}s`:i>0?`${i}m ${r}s`:`${r}s`}_renderMap(){this._map||this._initLeafletMap(),this._updateMapMarkers();const e=document.getElementById("mapStatus"),t=C.get("map.selectedMissionId"),n=C.get("missions.current"),i=C.get("missions.pending")||[],r=n?[n,...i]:[...i],a=t?r.find(o=>o.id===t):null;e&&(a?e.textContent=`📍 ${a.title} @ ${a.location||"Unknown"}`:n?.location?e.textContent=`📍 ${n.title} @ ${n.location}`:n?e.textContent=`🎯 ${n.title}`:e.textContent="Standing by")}_initLeafletMap(){const e=document.getElementById("leafletMap");if(!e||this._map)return;this._map=L.map(e,{zoomControl:!0,attributionControl:!1,center:[20,0],zoom:2});const t=C.get("map.tileLayer")||"street";this._switchTileLayer(t),setTimeout(()=>{this._map&&this._map.invalidateSize()},150),this._layers={user:L.layerGroup().addTo(this._map),missions:L.layerGroup().addTo(this._map),quests:L.layerGroup().addTo(this._map),destinations:L.layerGroup().addTo(this._map),route:L.layerGroup().addTo(this._map)},this._geoCache={};const n=C.get("user.currentCoords");n?.lat&&this._map.setView([n.lat,n.lon],14),document.querySelectorAll(".map-toggle").forEach(i=>{i.addEventListener("click",()=>{this._switchTileLayer(i.dataset.layer)})})}_switchTileLayer(e){this._tileLayer&&this._map.removeLayer(this._tileLayer);const t=ix[e];t&&(this._tileLayer=L.tileLayer(t.url,{maxZoom:19,attribution:t.attr}).addTo(this._map),C.set("map.tileLayer",e),document.querySelectorAll(".map-toggle").forEach(n=>{n.classList.toggle("active",n.dataset.layer===e)}))}_updateMapMarkers(){if(!this._map||!this._layers)return;this._layers.user.clearLayers(),this._layers.missions.clearLayers(),this._layers.quests.clearLayers(),this._layers.destinations.clearLayers(),this._layers.route.clearLayers();const e=C.get("map.selectedMissionId"),t=C.get("user.currentCoords");t?.lat&&t?.lon&&(this._layers.user.addLayer(L.marker([t.lat,t.lon],{icon:L.icon({iconUrl:"/spidey-marker.png",iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]}),zIndexOffset:1e3})),this._layers.user.addLayer(L.circleMarker([t.lat,t.lon],{radius:8,color:"#ff3b30",fillColor:"#ff3b30",fillOpacity:1,weight:2,opacity:.8,zIndexOffset:1001})));const n=C.get("missions.current"),i=C.get("missions.pending")||[];(n?[n,...i]:[...i]).forEach(o=>{if(!o.location)return;const c=(l,d)=>{if(!this._isValidCoord(l,d))return;const h=e===o.id,u=L.marker([l,d],{icon:L.icon({iconUrl:"/mission-marker.png",iconSize:h?[40,40]:[32,32],iconAnchor:h?[20,20]:[16,16],popupAnchor:[0,-20]})});u.bindPopup(`
          <div class="popup-mission-title">${h?"▶ ":""}${o.title}</div>
          <div class="popup-mission-desc">${o.notes||""}</div>
          <div class="popup-mission-xp">+${o.xp||100} XP${o.type==="challenge"?" · CHALLENGE":""}</div>
        `),u.on("click",()=>this._selectMission(o.id)),this._layers.missions.addLayer(u),h&&t?.lat&&t?.lon&&(this._drawRoute(l,d),this._map.setView([t.lat,t.lon],14))};o.locationCoords?.lat&&o.locationCoords?.lon&&this._isValidCoord(o.locationCoords.lat,o.locationCoords.lon)?c(o.locationCoords.lat,o.locationCoords.lon):this._geocodeAndPlace(o.location,c)}),(C.get("sideQuests")||[]).filter(o=>!o.completed&&o.location).forEach(o=>{const c=(l,d)=>{const h=L.marker([l,d],{icon:L.icon({iconUrl:"/sidequest-marker.png",iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]})});h.bindPopup(`<div class="popup-mission-title" style="color:#5ce1ff;">Side Quest</div><div class="popup-mission-desc">${o.title}</div><div class="popup-mission-xp">+${o.xp||50} XP</div>`),this._layers.quests.addLayer(h)};o.locationCoords?.lat&&o.locationCoords?.lon?c(o.locationCoords.lat,o.locationCoords.lon):this._geocodeAndPlace(o.location,c)})}async _routeToSearch(e,t){this._geocodeAndPlace(t,(n,i)=>{const r=C.get("map.destination");r&&(r.lat=n,r.lon=i,C.set("map.destination",r))})}async _drawRoute(e,t){this._layers.route.clearLayers();const n=C.get("user.currentCoords");if(!n?.lat||!n?.lon)return;const i=[n.lat,n.lon],r=[e,t];try{const a=`https://router.project-osrm.org/route/v1/driving/${i[1]},${i[0]};${r[1]},${r[0]}?geometries=geojson&overview=full`,c=await(await fetch(a)).json();if(c.code==="Ok"&&c.routes?.[0]?.geometry?.coordinates){const l=c.routes[0].geometry.coordinates.map(d=>[d[1],d[0]]);this._layers.route.addLayer(L.polyline(l,{color:"#ff6b00",weight:3,opacity:.7})),this._map.fitBounds(L.latLngBounds(i,r),{padding:[40,40]});return}}catch{}this._layers.route.addLayer(L.polyline([i,r],{color:"#ff6b00",weight:3,opacity:.7,dashArray:"8, 8"})),this._map.fitBounds(L.latLngBounds(i,r),{padding:[40,40]})}_isValidCoord(e,t){if(e===0&&t===0||e<-90||e>90||t<-180||t>180)return!1;const n=C.get("user.currentCoords");return!(n?.lat&&n?.lon&&Math.sqrt((e-n.lat)**2+(t-n.lon)**2)>90)}async _routeToMission(e){const t=document.getElementById("mapStatus");t&&(t.textContent=`🔍 ${e.title} @ ${e.location}...`);const n=C.get("user.currentCoords");n?.lat&&n?.lon?this._geocodeAndPlace(e.location,(i,r)=>{C.set("map.destination",{name:e.location,time:Date.now(),lat:i,lon:r}),this._drawRoute(i,r)}):navigator.geolocation?this._geocodeAndPlace(e.location,(i,r)=>{C.set("map.destination",{name:e.location,time:Date.now(),lat:i,lon:r}),navigator.geolocation.getCurrentPosition(a=>{const{latitude:o,longitude:c}=a.coords;C.set("user.currentCoords",{lat:o,lon:c}),this._drawRoute(i,r)},()=>{this._map?.setView([i,r],14)})}):this._geocodeAndPlace(e.location,(i,r)=>{C.set("map.destination",{name:e.location,time:Date.now(),lat:i,lon:r}),this._map?.setView([i,r],14)})}async _geocode(e,t){const n=this._geoCache[e];if(n){t(n.lat,n.lon);return}const i=C.get("user.currentCoords");let r=`/geocode?q=${encodeURIComponent(e)}`;i?.lat&&(r+=`&lat=${i.lat}&lon=${i.lon}`);try{const o=new AbortController,c=setTimeout(()=>o.abort(),3e3),l=await fetch(r,{signal:o.signal});clearTimeout(c);const d=await l.json();if(d?.lat&&d?.lon){const h=parseFloat(d.lat),u=parseFloat(d.lon);this._geoCache[e]={lat:h,lon:u},t(h,u);return}}catch{}const a=this._map?this._map.getCenter():{lat:20,lng:78};this._geoCache[e]={lat:a.lat,lon:a.lng},t(a.lat,a.lng)}_geocodeAndPlace(e,t){const n=this._geoCache[e];if(n){t(n.lat,n.lon);return}this._geocode(e,t)}_checkGeofence(){const e=C.get("missions.current"),t=C.get("map.selectedMissionId"),n=C.get("user.currentCoords");if(!e||!t||!n?.lat||!n?.lon)return;const i=C.get("missions.pending")||[],a=[e,...i].find(f=>f.id===t);if(!a?.locationCoords?.lat||!a?.locationCoords?.lon)return;const o=6371e3,c=f=>f*Math.PI/180,l=c(a.locationCoords.lat-n.lat),d=c(a.locationCoords.lon-n.lon),h=Math.sin(l/2)**2+Math.cos(c(n.lat))*Math.cos(c(a.locationCoords.lat))*Math.sin(d/2)**2;if(o*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))<100){Et.completeMission(a.id),C.get("map.selectedMissionId")===a.id&&C.set("map.selectedMissionId",null);const f=C.get("missions.pending")||[];if(f.length>0){const g=f.shift();C.set("missions.current",g),C.set("missions.pending",f)}else C.set("missions.current",null);this._showAchievement({title:"LOCATION REACHED!",text:`+${a.xp||100} XP`,sub:a.title})}}_renderQuests(){const e=C.get("sideQuests")||[],t=document.getElementById("questList");if(t){if(e.length===0||e.every(n=>n.completed)){t.innerHTML='<div style="font-size:11px;color:rgba(255,255,255,0.4);">No quests — chat with Spidey to generate some!</div>';return}t.innerHTML=e.map(n=>`
      <label class="quest-item ${n.completed?"completed":""}" data-quest-id="${n.id}">
        <input type="checkbox" ${n.completed?"checked":""}>
        <span class="quest-text">${n.title}${n.recurring?` <span class="quest-badge-recur">${n.frequency==="daily"?"DAILY":n.frequency==="weekdays"?"WEEKDAY":"WEEKLY"}</span>`:""}</span>
        <span class="quest-xp">+${n.xp}XP</span>
      </label>
    `).join(""),t.querySelectorAll(".quest-item input").forEach(n=>{n.addEventListener("change",function(){const i=this.closest(".quest-item").dataset.questId;this.checked&&Et.completeQuest(i)})})}}_renderProgress(){const e=C.get("missions.completed")||[],t={productivity:0,creativity:0,fitness:0,learning:0,fun:0},n={productivity:3,creativity:3,fitness:3,learning:3,fun:3};for(const o of e){const c=o.category||"productivity";t[c]!==void 0&&t[c]++}const i=Object.keys(t),r=document.querySelectorAll(".cat-fill"),a=document.querySelectorAll(".cat-pct");i.forEach((o,c)=>{const l=Math.round(t[o]/n[o]*100);r[c]&&(r[c].style.width=Math.min(l,100)+"%"),a[c]&&(a[c].textContent=Math.min(l,100)+"%")})}_renderStreaks(){const e=["productivity","creativity","fitness","learning","fun"],t={productivity:"⚡",creativity:"🎨",fitness:"💪",learning:"📚",fun:"🎮"},n=document.querySelector(".streaks-list");if(!n)return;const i=[];for(const a of e){const o=nh.getStreaks(a);o.current>0&&i.push({category:a,days:o.current,emoji:t[a]||"📌"})}if(i.length===0){n.innerHTML='<div style="font-size:11px;color:rgba(255,255,255,0.4);">No streaks yet. Start a routine!</div>';return}const r=i.sort((a,o)=>o.days-a.days).slice(0,3);n.innerHTML=r.map(a=>`
      <div class="streak-item">
        <span class="streak-emoji">${a.emoji}</span>
        <span class="streak-name">${a.category.charAt(0).toUpperCase()+a.category.slice(1)}</span>
        <span class="streak-count">${a.days} Days</span>
      </div>
    `).join("")}_renderStats(){const e=document.getElementById("statsContent");if(!e)return;const t=C.get("missions.completed")||[],n=C.get("missions.failed")||[],i=C.get("user.level")||1,r=C.get("stats.period")||"today",a=C.get("stats.internal")||0;function o(W){return`${W.getFullYear()}-${String(W.getMonth()+1).padStart(2,"0")}-${String(W.getDate()).padStart(2,"0")}`}function c(W,te,ae){return W>=te&&W<=ae}const p=new Date,S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let h,u,f,g,x,m;if(r==="today"){const W=o(p);h=t.filter(te=>te.completedAt&&o(new Date(te.completedAt))===W),u="Today",x=new Date(p.getFullYear(),p.getMonth(),p.getDate(),0,0,0,0),m=new Date(p.getFullYear(),p.getMonth(),p.getDate(),23,59,59,999)}else if(r==="week"){const Le=p.getDay()===0?-6:1-p.getDay();x=new Date(p.getFullYear(),p.getMonth(),p.getDate()+Le-a*7),m=new Date(x);m.setDate(x.getDate()+6),m.setHours(23,59,59,999),u=o(x)+" &ndash; "+o(m),f="< Last Week",g="Next Week >",h=t.filter(te=>te.completedAt&&c(new Date(te.completedAt),x,m))}else{x=new Date(p.getFullYear(),p.getMonth()-a,1),m=new Date(x.getFullYear(),x.getMonth()+1,0,23,59,59,999),u=S[x.getMonth()]+" "+x.getFullYear(),f="< "+S[(x.getMonth()-1+12)%12],g=S[(x.getMonth()+1)%12]+" >",h=t.filter(te=>te.completedAt&&c(new Date(te.completedAt),x,m))}const E=h.reduce((W,te)=>W+(Number(te.xp)||0),0),v=h.length,T=n.filter(W=>W.completedAt&&c(new Date(W.completedAt),x,m)).length,M=v+T>0?Math.round(v/(v+T)*100):0,R=[];if(r==="today"){for(let W=0;W<24;W++){const te=h.filter(ae=>ae.completedAt?new Date(ae.completedAt).getHours()===W:!1).reduce((ae,Le)=>ae+(Number(Le.xp)||0),0);R.push({label:W+"h",xp:te})}}else if(r==="week"){const W=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];for(let te=0;te<7;te++){const ae=new Date(x);ae.setDate(ae.getDate()+te);const Le=o(ae),je=h.filter(Fe=>Fe.completedAt&&o(new Date(Fe.completedAt))===Le).reduce((Fe,J)=>Fe+(Number(J.xp)||0),0);R.push({label:W[te],xp:je})}}else{const W=m.getDate();for(let te=1;te<=W;te++){const ae=new Date(x.getFullYear(),x.getMonth(),te),Le=o(ae),je=h.filter(Fe=>Fe.completedAt&&o(new Date(Fe.completedAt))===Le).reduce((Fe,J)=>Fe+(Number(J.xp)||0),0);R.push({label:te===1||te%5===0?String(te):"",xp:je,hasLabel:te===1||te%5===0})}}const _=Math.max(...R.map(W=>W.xp),1),A=R.map((W,te)=>`
      <div class="stats-bar-col${r==="month"?" month-col":""}">
        <div class="stats-bar-wrapper">
          <div class="stats-bar-tooltip">${W.xp} XP</div>
          <div class="stats-bar" style="height:${(W.xp/_)*100}%"></div>
        </div>
        <span class="stats-bar-label${W.hasLabel?" visible-label":""}">${W.label}</span>
      </div>
    `).join(""),D=2*Math.PI*28,P=D-M/100*D,O=C.get("stats.selectedDay"),j=O?t.filter(W=>W.completedAt&&o(new Date(W.completedAt))===O):[],Z=[];for(let W=27;W>=0;W--){const te=new Date(p);te.setDate(te.getDate()-W);const ae=o(te),Le=t.some(J=>J.completedAt&&o(new Date(J.completedAt))===ae),je=C.get("habits.detected")||[],Fe=te.getDay();Z.push({key:ae,active:Le||je.some(J=>J.days?.includes(Fe))?1:0})}const z=Z.map((W,te)=>`
      <span class="heatmap-cell ${W.active?"heatmap-active":""} ${O===W.key?"heatmap-current":""}" data-date="${W.key}" style="grid-column:${te%7+1};grid-row:${Math.floor(te/7)+1}"></span>
    `).join(""),K=Math.max(...(C.get("habits.detected")||[]).map(W=>W.days||0),0),q=t.length+(C.get("missions.pending")||[]).length+(C.get("missions.current")?1:0),ne=`
    <div class="stats-period-bar">
      <button class="stats-period-btn ${r==="today"?"active":""}" data-period="today">Today</button>
      <button class="stats-period-btn ${r==="week"?"active":""}" data-period="week">Week</button>
      <button class="stats-period-btn ${r==="month"?"active":""}" data-period="month">Month</button>
    </div>
  `,re=r!=="today"?`
    <div class="stats-nav-bar">
      ${f?`<span class="stats-nav-btn" data-dir="-1">${f}</span>`:"<span></span>"}
      <span class="stats-nav-label">${u}</span>
      ${g?`<span class="stats-nav-btn" data-dir="1">${g}</span>`:"<span></span>"}
    </div>
  `:"";e.innerHTML=`
    ${ne}
    ${re}
    <div class="stats-row">
      <div class="stats-chart">
        <div class="stats-chart-title">XP (${r==="today"?"24h":r==="week"?"7d":u})</div>
        <div class="stats-bar-chart ${r}-view">${A}</div>
      </div>
      <div class="stats-ring">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5"/>
          <circle cx="36" cy="36" r="28" fill="none" stroke="#5ce1ff" stroke-width="5"
            stroke-dasharray="${D}" stroke-dashoffset="${P}"
            stroke-linecap="round" transform="rotate(-90,36,36)"/>
          <text x="36" y="36" text-anchor="middle" dominant-baseline="central"
            fill="#fff" font-family="Orbitron" font-size="14" font-weight="700">${M}%</text>
        </svg>
        <div class="stats-ring-label">Complete</div>
      </div>
    </div>
    <div class="stats-row">
      <div class="stats-period-info">
        <div class="stats-period-stat"><span class="stats-period-num">${E}</span> XP</div>
        <div class="stats-period-stat"><span class="stats-period-num">${v}</span> Done</div>
        <div class="stats-period-stat"><span class="stats-period-num">${K}d</span> Streak</div>
      </div>
    </div>
    <div class="stats-row">
      <div class="stats-heatmap">
        <div class="stats-chart-title">Activity (28d)</div>
        <div class="heatmap-grid">${z}</div>
      </div>
      <div class="stats-summary">
        <div class="stats-summary-line">${q} missions � Level ${i}</div>
      </div>
    </div>
    ${O?`
    <div class="stats-day-detail">
      <div class="stats-day-header">
        <span>${O}</span>
        <span class="stats-day-close" data-close-day>?</span>
      </div>
      ${j.length===0?'<div class="stats-day-empty">No missions</div>':j.map(W=>`
        <div class="stats-day-mission">
          <span class="stats-day-title">${W.title}</span>
          <span class="stats-day-xp">+${W.xp||100} XP</span>
        </div>
      `).join("")}
    </div>
    `:""}
  `,e.querySelectorAll(".stats-period-btn").forEach(W=>{W.addEventListener("click",()=>{C.set("stats.period",W.dataset.period),C.set("stats.internal",0),C.set("stats.selectedDay",null),this._renderStats()})}),e.querySelectorAll(".stats-nav-btn").forEach(W=>{W.addEventListener("click",()=>{const te=C.get("stats.internal")||0;C.set("stats.internal",te+parseInt(W.dataset.dir)),C.set("stats.selectedDay",null),this._renderStats()})}),e.querySelectorAll(".heatmap-cell").forEach(W=>{W.addEventListener("click",()=>{const te=W.dataset.date;C.set("stats.selectedDay",te===C.get("stats.selectedDay")?null:te),this._renderStats()})}),e.querySelector("[data-close-day]")?.addEventListener("click",()=>{C.set("stats.selectedDay",null),this._renderStats()})}_renderSuggestions(){const e=document.getElementById("suggestContent");if(!e)return;const t=C.get("suggestions.list")||[];if(t.length===0){e.innerHTML='<span class="suggest-idle">Waiting for opportunity...</span>';return}e.innerHTML=t.map(n=>`
      <div class="suggest-item" data-id="${n.id}">
        <div class="suggest-title">${n.title}</div>
        <div class="suggest-notes">${n.notes}</div>
        <div class="suggest-footer">
          <span class="suggest-xp">+${n.xp} XP</span>
          <span class="suggest-reason">${n.reason||""}</span>
        </div>
        <div class="suggest-actions">
          <button class="suggest-accept" data-suggest-id="${n.id}">✓ Accept</button>
          <button class="suggest-dismiss" data-suggest-id="${n.id}">✕ Dismiss</button>
        </div>
      </div>
    `).join(""),e.querySelectorAll(".suggest-accept").forEach(n=>{n.addEventListener("click",()=>{ui.acceptSuggestion(n.dataset.suggestId),this._renderSuggestions(),this.refresh()})}),e.querySelectorAll(".suggest-dismiss").forEach(n=>{n.addEventListener("click",()=>{ui.dismissSuggestion(n.dataset.suggestId),this._renderSuggestions()})})}_updateInsights(){const e=C.get("insights")||[],t=document.getElementById("insightContent");if(!t||e.length===0)return;let n=0;const i=()=>{n=(n+1)%e.length,t.style.opacity="0",setTimeout(()=>{t.textContent=e[n],t.style.opacity="1"},500)};this._insightInterval||(t.textContent=e[0],this._insightInterval=setInterval(i,8e3))}_selectMission(e){const n=C.get("map.selectedMissionId")===e?null:e;C.set("map.selectedMissionId",n),this._renderMap(),this._renderMission()}async _completeCurrentMission(e){const t=C.get("missions.current");if(!t||t.id!==e.id)return;if(t.timer){if(t.timer.active=!1,t.timer.remaining<=0){this._showAchievement({title:"TIME UP!",text:"Challenge expired",sub:t.title});return}const i=Math.floor(t.timer.remaining/1e3)*2;t.xp=(t.xp||250)+i}await Et.completeMission(t.id),C.get("map.selectedMissionId")===t.id&&C.set("map.selectedMissionId",null);const n=C.get("missions.pending")||[];if(n.length>0){const i=n.shift();C.set("missions.current",i),C.set("missions.pending",n)}this.refresh()}_removeMission(e){let t=C.get("missions.current"),n=C.get("missions.pending")||[];t&&t.id===e?(t=n.length>0?n.shift():null,C.set("missions.current",t),C.set("missions.pending",n)):(n=n.filter(i=>i.id!==e),C.set("missions.pending",n)),C.get("map.selectedMissionId")===e&&C.set("map.selectedMissionId",null),this.refresh()}_onMissionComplete(e){this._showAchievement({title:"MISSION COMPLETE",text:`+${e.xp} XP`,sub:"Mission completed successfully!"}),this.refresh()}_showAchievement(e){const t=document.getElementById("achievementToast");t&&(t.querySelector(".toast-header").textContent=e.title||"ACHIEVEMENT",t.querySelector(".toast-xp").textContent=e.text||"",t.querySelector(".toast-achievement").textContent=e.sub||e.achievement||"",t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),5e3))}}const sn=new sx;class rx extends qt{constructor(){super("ToolExecutor"),this.handlers={navigate_to:this._handleNavigate.bind(this),create_mission:this._handleCreateMission.bind(this),play_media:this._handlePlayMedia.bind(this),check_weather:this._handleCheckWeather.bind(this),set_reminder:this._handleSetReminder.bind(this),add_knowledge:this._handleAddKnowledge.bind(this),set_location:this._handleSetLocation.bind(this)}}async execute(e){if(!e||e.length===0)return[];const t=[];for(const n of e)try{const i=this.handlers[n.name];if(i){const r=await i(n.args);t.push({name:n.name,success:!0,result:r})}else console.warn("No handler for tool:",n.name),t.push({name:n.name,success:!1,error:"No handler"})}catch(i){console.warn("Tool error:",n.name,i),t.push({name:n.name,success:!1,error:i.message})}return t}_handleNavigate(e){const t=e.location||e.destination;if(!t)return{note:"No location provided"};const n=C.get("user.locations")||{},i=C.get("user.currentCoords"),r=t.toLowerCase().trim();if(/^(my )?current location/i.test(r)){const c={name:"Your Current Location",time:Date.now(),lat:null,lon:null};return C.set("map.destination",c),Nt.remember(`destination:${Date.now()}`,c,.9,"system","schedule"),this._navigateToCurrentLocation(),{location:"Current Location",set:!0,needsGeolocation:!0}}const o=(n[r]||n[t])?.name||t;return this._routeToDest(t,n,i),Nt.remember(`destination:${Date.now()}`,{name:o,time:Date.now()},.9,"system","schedule"),{location:o,set:!0}}_routeToDest(e,t,n){const r=(t[e.toLowerCase().trim()]||t[e])?.name||e;C.set("map.destination",{name:r,time:Date.now(),lat:null,lon:null}),this._geocodeAndRoute(r)}async _geocodeAndRoute(e){const n=(C.get("user.locations")||{})[e.toLowerCase().trim()];if(n?.lat&&n?.lon){C.set("map.destination",{name:e,time:Date.now(),lat:n.lat,lon:n.lon});return}try{const i=C.get("user.currentCoords");let r=`/geocode?q=${encodeURIComponent(e)}`;i?.lat&&(r+=`&lat=${i.lat}&lon=${i.lon}`);const a=new AbortController;setTimeout(()=>a.abort(),3e3);const c=await(await fetch(r,{signal:a.signal})).json();if(c?.lat&&c?.lon){C.set("map.destination",{name:e,time:Date.now(),lat:parseFloat(c.lat),lon:parseFloat(c.lon)});return}}catch{}C.set("map.destination",{name:e,time:Date.now(),lat:null,lon:null})}_navigateToCurrentLocation(e){navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{const{latitude:n,longitude:i}=t.coords;C.set("user.currentCoords",{lat:n,lon:i}),e&&e()},()=>{},{enableHighAccuracy:!0,timeout:5e3})}async _handleCreateMission(e){const t=e.title||"New Mission",n=e.notes||"",i=e.type==="challenge"?"challenge":"mission",r=(e.location||"").trim(),a=r.replace(/^(?:in|for|at|by)\s+/i,"").trim();/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later|ago)?$/i.test(a)&&(e.location="");const o=C.get("user.locations")||{},c=r.toLowerCase().trim(),l=r?o[c]:null,d=l?l.name:r;let h=null;if(i==="challenge"){const M=Date.now();if(e.deadline){const R=this._parseDeadline(e.deadline);R>M&&(h={deadline:R,duration:R-M,remaining:R-M,active:!1,unit:"deadline"})}else if(e.duration){const R=this._parseDuration(e.duration);R>0&&(h={deadline:M+R,duration:R,remaining:R,active:!1,unit:"duration"})}h||(e.xp=e.xp||100)}const u=h?e.xp||250:e.xp||100,f=`mission_${Date.now()}`,g=["/comics/download (85).jpg","/comics/download (86).jpg","/comics/download (87).jpg","/comics/download (88).jpg","/comics/download (89).jpg","/comics/download (90).jpg","/comics/download (91).jpg","/comics/download (92).jpg","/comics/download (93).jpg","/comics/COMIC #2.jpg","/comics/download (94).jpg","/comics/download (95).jpg","/comics/Spidey's Last Ride by @WhyNotStuff.jpg"],x=t.toLowerCase();let m="productivity";/study|learn|read|course|class|lecture|exam|neural|math|science|history|lesson/i.test(x)?m="learning":/gym|workout|run|jog|exercise|sport|basketball|fitness|stretch|yoga/i.test(x)?m="fitness":/draw|sketch|paint|write|music|guitar|piano|photo|creative|art|doodle|journal|poem/i.test(x)?m="creativity":/game|play|movie|watch|netflix|fun|party|hang|coffee|walk|park|social/i.test(x)?m="fun":/code|program|project|work|clean|organize|errand|meditate|productivity|task|chore/i.test(x)&&(m="productivity");const p=e.steps||[],S=p.length>0?p.map((M,R)=>({id:`step_${R}`,title:M,done:!1})):this._generateSteps(t,x,n).map((M,R)=>({id:`step_${R}`,title:M,done:!1})),E={id:f,title:t,notes:n,pipeline:S,type:i,timer:h,xp:u,status:"pending",progress:0,created:Date.now(),category:m,comic:g[Math.floor(Math.random()*g.length)],location:d||"",locationKey:r||""},v=C.get("missions.current"),T=C.get("missions.pending")||[];return v&&T.unshift(v),C.set("missions.pending",T),C.set("missions.current",E),E.location&&this._geocodeMission(E),Nt.remember(`mission:${E.id}`,E,1,"system","mission"),Et.emit("mission-created",E),sn.refresh(),{id:E.id,title:t,type:i,xp:u}}_parseDeadline(e){const t=new Date,n=e.toLowerCase(),i=n.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/);if(i){let a=parseInt(i[1]);const o=parseInt(i[2]||"0");return i[3]==="pm"&&a<12&&(a+=12),i[3]==="am"&&a===12&&(a=0),t.setHours(a,o,0,0),t.getTime()<Date.now()&&t.setDate(t.getDate()+1),t.getTime()}const r={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};for(const[a,o]of Object.entries(r))if(n.includes(a)){const c=(o-t.getDay()+7)%7||7;return t.setDate(t.getDate()+c),t.setHours(23,59,59,0),t.getTime()}return n.includes("tomorrow")?(t.setDate(t.getDate()+1),t.setHours(23,59,59,0),t.getTime()):0}_parseDuration(e){const t=e.toLowerCase(),n=t.match(/(\d+)\s*hours?/),i=t.match(/(\d+)\s*minutes?/);let r=0;return n&&(r+=parseInt(n[1])*36e5),i&&(r+=parseInt(i[1])*6e4),r||0}async _geocodeMission(e){try{const t=C.get("user.currentCoords");let n=`/geocode?q=${encodeURIComponent(e.location)}`;t?.lat&&(n+=`&lat=${t.lat}&lon=${t.lon}`);const i=new AbortController;setTimeout(()=>i.abort(),3e3);const a=await(await fetch(n,{signal:i.signal})).json();a?.lat&&a?.lon&&(e.locationCoords={lat:parseFloat(a.lat),lon:parseFloat(a.lon)},C.set("missions.current",{...C.get("missions.current")}))}catch{}}_handlePlayMedia(e){const t=e.query||e.search||"",n=e.platform||"youtube";return n==="youtube"&&t?(setTimeout(()=>{window.open(`https://m.youtube.com/results?search_query=${encodeURIComponent(t)}`,"_blank")},1500),{opened:!0,query:t,platform:n}):{opened:!1,note:"No query provided"}}async _handleCheckWeather(){try{const t=await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,weathercode&timezone=auto")).json();if(t?.current)return C.set("weather.current",t),sn.refresh(),{temp:t.current.temperature_2m,code:t.current.weathercode}}catch{}return{error:"Could not fetch weather"}}_handleSetReminder(e){const t=e.text||"",n=e.time||"";if(!t)return{note:"No reminder text"};const i={text:t,time:n,created:Date.now()},r=C.get("reminders")||[];return r.push(i),C.set("reminders",r),Nt.remember(`reminder:${Date.now()}`,i,.8,"system","schedule"),sn.refresh(),{text:t,time:n}}_handleAddKnowledge(e){const t=e.topic||"general",n=e.content||"";if(!n)return{note:"No content"};const i=C.get("rag.knowledge")||{};return i[t]||(i[t]=[]),i[t].push({content:n,added:Date.now()}),C.set("rag.knowledge",i),Nt.remember(`knowledge:${t}:${Date.now()}`,{topic:t,content:n},.9,"system","knowledge"),sn.refresh(),{topic:t,stored:!0}}_handleSetLocation(e){const t=e.name?.toLowerCase().trim(),n=e.address||e.location;if(!t||!n)return{note:"Name and address required"};const i=C.get("user.locations")||{};return i[t]={name:n,lat:null,lon:null},C.set("user.locations",i),Nt.remember(`location:${t}`,{name:t,address:n},.9,"system","schedule"),sn.refresh(),{name:t,address:n,saved:!0}}_generateSteps(e,t,n){const i=(n||"").toLowerCase();if(/study|learn|read|course|class|lecture|exam|neural|math|science|history|lesson/i.test(t))return[`Gather study materials for ${e}`,"Read and take notes on key concepts","Solve practice problems or write a summary","Review and revise weak areas","Test yourself or explain to someone else"];if(/gym|workout|run|jog|exercise|sport|basketball|fitness|stretch|yoga/i.test(t))return["Warm up with light cardio and stretching",`Main workout: ${e}`,"Cool down with static stretches","Log your reps and progress","Hydrate and refuel"];if(/draw|sketch|paint|write|music|guitar|piano|photo|creative|art|doodle|journal|poem/i.test(t))return["Set up your workspace and tools","Brainstorm and plan the creative piece","Create the first draft / rough version","Refine and add details","Review and share your work"];if(/code|program|project|build|develop|app|website|feature|bug|fix/i.test(t))return["Plan the architecture and requirements","Set up the project structure","Implement core functionality","Test and debug edge cases","Commit, document, and deploy"];if(/clean|organize|declutter|tidy|arrange/i.test(t))return["Sort items into keep / donate / trash piles","Clean surfaces and storage areas","Organize and label everything","Dispose of trash and recyclables","Maintain the new system"];if(/cook|bake|recipe|kitchen|dinner|lunch|breakfast|meal|food/i.test(t))return["Read the recipe and gather ingredients","Prep: wash, chop, measure everything","Cook each component step by step","Plate and garnish","Enjoy and clean up"];if(/write|essay|report|blog|article|paper|document|draft/i.test(t))return["Research and outline key points","Write the first draft","Revise for clarity and flow","Proofread for grammar and typos","Format and submit / publish"];if(/date|hang|meet|party|movie|dinner|coffee|friend|social|go out/i.test(t))return["Get ready and dress appropriately","Travel to the meeting spot","Enjoy the activity together","Take photos or capture memories","Follow up and plan the next one"];if(/chapter|unit|module|section|part|week|day \d/i.test(t+" "+i)){const r=(i.match(/(\d+)/)||[])[1],a=Math.min(parseInt(r)||5,10);return Array.from({length:a},(o,c)=>c===a-1?`Review and master ${e}`:`Complete ${e} — part ${c+1}`)}return[`Plan and prepare for: ${e}`,`Start working on ${e}`,"Take a break and review progress","Continue and complete the work","Review results and wrap up"]}}const od=new rx,ih={};function ax(s){const e=s.match(/(?:(?:I\s+)?(?:need|want|have|would|like|gotta|got to)\s+to\s+)?(?:go|head|drive|navigate|route|come|walk|move|travel)\s+(?:to|over\s+to|back\s+to)?\s*(\w+(?:\s+\w+)?)/i);if(!e)return null;const t=e[1].toLowerCase().replace(/^(there|here|that)\b.*/,"").trim();return!t||Object.keys(ih).includes(t)?null:["home","college","university","gym","work","office","school","hostel","dorm"].includes(t)?t:null}const ox=[{tools:[{name:"create_mission",extract:s=>{const e=s.match(/(?:go to|attend|visit|meet)\s+(.+?)(?:\s+(?:at|by|on|tomorrow|today|next|this))/i)?.[1]||s.match(/(?:to|for)\s+(.+?)(?:\s+(?:at|by|on|tomorrow|today|next|this))/i)?.[1]||s.replace(/.*?(?:add|put|schedule|set)\s+(?:it|this|that)?\s*(?:to|in|on|up)?\s*(?:my\s+)?(?:schedule|calendar)\s+(?:for|at)?\s*/i,"").replace(/\s+(?:at|by|on|tomorrow|today)\s+.*/i,"").trim()||"New event",t=s.match(/(?:at|by|for|on)\s+(.+?)(?:\s+(?:tomorrow|today|next|this|add|put|schedule))/i)?.[1]||s.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]||"";let i=s.match(/(?:at|in|near|visited?)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|please)|$)/i)?.[1]?.trim()||"";return/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later)?$/i.test(i)&&(i=""),{title:e,description:e,eta:t,location:i}}}],match:s=>/(?:add|put|schedule)\s+(?:it|this|that|to|in)?\s*(?:to|in|on)\s+(?:my\s+)?(?:schedule|calendar)/i.test(s)||/\b(?:go\s+(?:to|visit|see)\s+\w+.*(?:at|by|on)\s+\d|add\s+it\s+to\s+(?:my\s+)?schedule)/i.test(s)},{tools:[{name:"navigate_to",extract:s=>({location:s.match(/(?:navigate|go|take|drive|head|set|route|map)\s+(?:to|me\s+to|us\s+to)?\s*(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|add|put|schedule)|$)/i)?.[1]?.trim()||s.replace(/.*?(?:navigate|go|take|drive|head|set|route|map)\s+(?:to|me\s+to|us\s+to)?\s*/i,"").replace(/\s+(?:at|by|for|tomorrow|today)\s+.*/i,"").trim()||"the destination"})}],match:s=>/(?:add|put|schedule)\s+(?:it|this|that)?\s*(?:to|in|on)\s+(?:my\s+)?(?:schedule|calendar)/i.test(s)?!1:/(?:navigate|go to|take me to|drive to|head to|set destination|route to|map to|directions? to|show me (?:the\s+)?way)\s+/i.test(s)},{tools:[{name:"create_mission",extract:s=>{const e=s.match(/(?:mission|task|remind me|add)\s+(?:a|an|to\s+)?(.+?)(?:\s+(?:at|by|for|tomorrow|today|next))/i)?.[1]||s.replace(/.*?(?:create|add|new|set up|make)\s+(?:(?:a|an|new)\s+)?(?:mission|task|todo|to-do)\s+(?:to|for|of|about|called)?\s*/i,"").replace(/\s+(?:at|by|for|tomorrow|today)\s+.*/i,"").trim()||"New task",t=s.match(/(?:at|by|for)\s+(.+?)(?:\s+(?:tomorrow|today|next|this))/i)?.[1]||s.match(/(?:tomorrow|today|next|this)\s+(.+?)$/i)?.[0]||s.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]||"";let i=s.match(/(?:at|in|near|visited?)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this|please)|$)/i)?.[1]?.trim()||"";/^(?:an?\s+)?(?:hour|minute|second|day|week|month|year)s?\s*(?:from\s+now|later)?$/i.test(i)&&(i="");const r=s.match(/(?:attend|go to|study|workout|meet|call|buy|visit|complete)\s+(.+?)(?:\s+(?:at|by|for|tomorrow|today|next|this))/i)||s.match(/(?:attend|go to|study|workout|meet|call|buy|visit|complete)\s+(.+)$/i);return{title:e,description:r?.[1]||"",eta:t,location:i}}}],match:s=>/(?:create|add|new|set up|make)\s+(?:(?:a|an|new)\s+)?(?:mission|task|todo|to-do)/i.test(s)},{tools:[{name:"play_media",extract:s=>({query:s.match(/(?:play|watch|find|search|show|get)\s+(?:me\s+)?(?:a|an|the|some\s+)?(.+?)(?:\s+(?:on|in|from|please|now|for))?$/i)?.[1]||s.match(/(?:playlist|video|song|music|trailer)\s+(?:of|for|about|called)?\s*(.+?)$/i)?.[1]||s.replace(/.*?(?:play|watch|find|search|show|get)\s+(?:me\s+)?/i,"").replace(/\s+(?:on|in)\s+\w+$/i,"").trim()||s,platform:(s.match(/youtube/i),"youtube")})}],match:s=>/(?:play|watch|find|search|show|get)\s+(?:me\s+)?(?:a|an|the|some\s+)?(?:video|song|music|playlist|trailer|movie|show|youtube)/i.test(s)||/youtube/i.test(s)},{tools:[{name:"check_weather",extract:()=>({})}],match:s=>/(?:weather|rain|temperature|forecast|sunny|cloudy|how.*cold|how.*hot)/i.test(s)},{tools:[{name:"set_reminder",extract:s=>{const e=(s.match(/(?:remind|reminder)\s+(?:me\s+)?(?:to|about|that\s+)?(.+?)(?:\s+(?:at|by|in|for|tomorrow|today|next))/i)?.[1]||s.replace(/.*?(?:remind|reminder)\s+(?:me\s+)?(?:to|about|that\s+)?/i,"").replace(/\s+(?:at|by|in|for)\s+.*/i,"").trim()).trim(),t=s.match(/(?:at|by|in)\s+(.+?)(?:\s+(?:tomorrow|today|next|this))?$/i)?.[1]||s.match(/\d{1,2}(?::\d{2})?\s*(?:am|pm)/i)?.[0]||"";return{text:e,time:t}}}],match:s=>/(?:remind|reminder)\s+(?:me\s+)?/i.test(s)},{tools:[{name:"set_location",extract:s=>{const e=s.match(/(?:my\s+)?(\w+)\s+(?:is|are|=)\s+(.+?)(?:\s+(?:at|by|for|in|near|please)|$)/i);if(e)return{name:e[1].toLowerCase(),address:e[2].trim()};const t=s.match(/(?:set|save|add)\s+(?:my\s+)?(\w+)\s+(?:to|as|at)\s+(.+?)(?:\s+(?:please|now)|$)/i);return t?{name:t[1].toLowerCase(),address:t[2].trim()}:{name:"location",address:s}}}],match:s=>/(?:my\s+\w+\s+is\s+|set\s+(?:my\s+)?\w+\s+(?:to|as|at)\s+|save\s+(?:my\s+)?\w+\s+(?:as|at)\s+)/i.test(s)},{tools:[{name:"add_knowledge",extract:s=>{const e=s.match(/(?:about|for|on)\s+(.+?)(?:\s+(?:that|is|are|:))/i)?.[1]||s.match(/(?:set|make)\s+(.+?)\s+(?:as|to\s+be|the)\s+(?:my\s+)?(.+?)(?:\s+(?:of|for|at))?$/i)?.[1]||s.match(/(.+?)\s+(?:is|are)\s+(?:my|the|a|an)\s+(.+?)$/i)?.[1]||s.match(/remember\s+(?:that\s+)?(.+?)(?:\s+(?:is|are|about))/i)?.[1]||"general",t=s.match(/(?:set|make)\s+(?:.+?\s+as\s+)(?:my\s+)?(.+?)$/i)?.[1]||s.match(/(?:is|are)\s+(?:my|the|a|an)\s+(.+?)$/i)?.[1]||s.replace(/.*?(?:remember|note|save|store|set|make)\s+(?:that\s+)?(?:about|for|on)?\s*.+?\s+(?:is|are|that|:)?\s*/i,"").replace(/\.\s*$/,"").trim();return{topic:e,content:t}}}],match:s=>/^(?:where|what|how|why|when|who)\b/i.test(s)?!1:/(?:remember|note|save|store)\s+(?:that\s+)?/i.test(s)||/\b(set|make)\s+.+\s+(?:as|to\s+be)\s+/i.test(s)||/\b\w+\s+is\s+(?:my|the)\s+\w+/i.test(s)},{tools:[{name:"set_location",extract:s=>({name:"location",address:s.match(/(?:its|it's|it\s+is|it\s+at|is\s+at)\s+(.+?)(?:\s+(?:please|now|thanks|track|mission)|$)/i)?.[1]||s.match(/(?:track|find|located?)\s+(?:it\s+|the\s+(?:mission|place|restaurant|store|shop)\s+)?(?:its|it's|it\s+is|at|in|near)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]||s.match(/(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]||""||s})},{name:"navigate_to",extract:s=>({location:s.match(/(?:its|it's|it\s+is|it\s+at|is\s+at)\s+(.+?)(?:\s+(?:please|now|thanks|track|mission)|$)/i)?.[1]||s.match(/(?:track|find|located?)\s+(?:it\s+|the\s+(?:mission|place|restaurant|store|shop)\s+)?(?:its|it's|it\s+is|at|in|near)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]||s.match(/(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(.+?)(?:\s+(?:please|now|thanks)|$)/i)?.[1]||""||"the location"})}],match:s=>/(?:track|find|locate)\s+(?:it|the\s+mission)\s+(?:its|it's|at|in|near)/i.test(s)||/(?:help\s+(?:me|us)\s+)?(?:track|find|locate)\s+(?:.+?)(?:its|it's|at|in|near)\s+/i.test(s)||/\b(?:its|it's)\s+(?:a\s+)?[A-Z][a-z]+\s+[A-Z]?[a-z]+/i.test(s)||/(?:help\s+(?:me|us)\s+)?track\s+(?:(?:a|the|that)\s+)?[A-Z][a-zA-Z]+\s+[a-zA-Z]+/i.test(s)}],cx={navigate_to:s=>`Alright, setting course to ${s.destination||s.address||s.location||"that spot"}! I'll pull it up on the map now.`,create_mission:s=>`Mission created! "${s.title}" — ${s.notes||"let's do this!"} I believe in you.`,play_media:s=>`Oh nice, ${s.query||"that"}! Let me fire up YouTube for you.`,check_weather:()=>"Let me check what the weather's looking like out there!",set_reminder:s=>`Got it! I'll ping you about "${s.text}"${s.time?" at "+s.time:""}. Don't worry, I won't forget.`,set_location:s=>`Saved "${s.name}" as "${s.address}". I've got that locked in!`,add_knowledge:s=>`Noted! ${s.topic?"I'll remember that about "+s.topic+".":"I'll keep that in mind."}`},cd=["Hey! Uh, hey! Sorry, I was just—what's up? Need some help?","Hey there! I was just swinging by. What can I do for you?","Oh hey! Didn't see you there. What's going on?","Hey! I was just working on some web fluid formulas. What do you need?","Hey! What's crackin'? Ready for today?"],ld=["Got it! What's next on the list?","Cool cool, I'm listening — tell me more!","Alright! Just let me know what you need.","Sure thing! What else is on your mind?","Okay, I've got that noted. What else we got?"];function lx(s,e){if(e.length>0){const n=e.find(r=>r.name==="set_location")?.args,i=e.find(r=>r.name==="navigate_to");return n&&i?`Got it! Saved "${n.address}" as a location and set it on the map.`:cx[e[0].name]?.(e[0].args)||`On it! ${e[0].name.replace(/_/g," ")} activated.`}if(/^(?:hey|hi|hello|sup|yo|whatsup|wassup|howdy)/i.test(s.trim()))return cd[Math.floor(Math.random()*cd.length)];if(/thanks|thank|thx/i.test(s))return"Anytime, seriously. That's what friends are for!";if(/joke|funny|lol|lmao|haha/i.test(s)){const n=["Why did Spider-Man cross the road? To get to the... web-swinging party! ...Yeah, I'm workshopping that one.","Knock knock. Who's there? ...I dunno, I always get interrupted before I finish. Kinda like my dinner with Aunt May.","What's a spider's favorite song? 'The Itsy Bitsy Spider' — classic. Actually no, that song's about me. True story."];return n[Math.floor(Math.random()*n.length)]}if(/how are you|how's it going/i.test(s))return"Oh, you know — swinging through the city, trying to keep the rent paid, web fluid budget's getting out of hand. The usual! What's up with you?";if(/\b(?:your name|who are you)\b/i.test(s))return"I'm Peter. Peter Parker. Friendly neighborhood Spider-Man. Well, uh, I guess just the Spider-Man part is public. The Peter thing's more of a... you know. Secret. But hey — between us? Yeah. That's me.";if(/^(?:tell\s+me\s+more|continue|go\s+on|elaborate|further|expand|more\s+detail|deeper|dive\s+deeper)\b/i.test(s.trim()))return"Yeah, okay so—okay so here's where it gets really interesting. The deeper you go, the more everything starts connecting. It's like... you pull one thread and suddenly the whole web lights up. Want me to keep going or pivot?";const t=s.match(/(?:teach|tell)\s+(?:me|us)\s+(?:about\s+)?(.+)/i)||s.match(/explain\s+(?:me\s+|us\s+|what\s+|how\s+)?(.+)/i)||s.match(/(?:i\s+)?(?:want\s+to\s+)?(?:learn|study|know)\s+(?:about\s+)?(.+)/i)||s.match(/(?:what\s+(?:is|are|does)|define|meaning\s+of|how\s+(?:does|to|do))\s+(.+)/i)||s.match(/(?:help|question)\s+(?:me\s+)?(?:with\s+|about\s+)?(.+)/i);if(t){const n=t[1].replace(/\.$/,"").trim(),i=[`Oh man, ${n}! Okay, okay, I gotchu. So here's the thing about ${n} — it's actually way cooler than people give it credit for. At its core, it's all about how things work when you really zoom in. Where do you want me to start?`,`${n}! Dude, that's one of my favorite things to geek out about. So picture this — the whole idea behind ${n} is actually pretty elegant once you see the pattern. Want the quick version or the deep dive?`,`Okay so ${n}, right? I've done some reading on this. The key insight is that it builds on a few simple ideas that stack on each other. Let me break it down — think of it like...`];return i[Math.floor(Math.random()*i.length)]}return/^(?:um|uh|well|so|hmm)\b/i.test(s)?"Take your time! What's on your mind?":/\b(?:ok|okay|alright|sure|got it|makes sense|i see|understood)\b/i.test(s)?"Awesome! Let me know if you want to go deeper.":/\b(?:i?m?\s*(?:good|fine|okay|doing well|great|awesome|amazing|wonderful))\b/i.test(s)?"Glad to hear it! What's next?":/i\s+(?:dont|don't|do\s+not)\s+(?:see|find|notice|view|spot|show)/i.test(s)?"Hmm, let me check what's in your store. You can ask me 'what missions do I have' or 'show my reminders' and I'll tell you what's saved.":/where\s+(?:is|are|did|has)|not\s+(?:showing|working|appearing|visible|there)|nothing\s+(?:happened|showed|appears)|what\s+happened/i.test(s)?"Let me check on that! Everything is stored locally in your browser. Try asking 'what missions do I have' or 'show my reminders' to see what's active.":/\b(?:what|show|list|display|view)\s+(?:are\s+|me\s+)?(?:my\s+|the\s+)?(?:missions?|tasks?|reminders?|goals?|knowledge|schedule|events?)/i.test(s)?"Good question! The HUD dashboard on the right side shows your active missions, maps, and progress. Your data is stored locally in your browser. If something isn't showing up, try refreshing the page.":/\b(?:error|bug|broken|glitch|fail|wrong|problem|issue)\b/i.test(s)?"Sorry about that! If something isn't working right, try refreshing the page. Your data is saved in your browser's local storage, so it should be safe.":/\bbox\b|\btrain\b|\bexercise\b|\bwork\s*out\b|\bgym\b|\byoga\b|\bmeditation\b|\brunning\b/i.test(s)?"Staying active is key! I can help track workouts, set fitness goals, or suggest routines. What kind of exercise are you into?":/\bcook\b|\brecipe\b|\bfood\b|\bdinner\b|\blunch\b|\bbreakfast\b|\bmeal\b|\beingredient|\bcooking\b/i.test(s)?"Mmm, food talk! I know a bunch of recipes and cooking tips. What are you in the mood for?":/\bmovie\b|\bfilm\b|\bseries\b|\bnetflix\b|\bwatching\b|\brecommend\s+(?:a\s+)?(?:movie|film|show)\b/i.test(s)?"I've got some good recommendations! What genre are you into — action, sci-fi, comedy, or something else?":/\bgame\b|\bgaming\b|\bvideo\s*game\b|\brespawn\b|\blevel\b|\bquest\b/i.test(s)?"Nice, a gamer! What games are you playing right now? I can suggest similar titles or gaming tips.":ld[Math.floor(Math.random()*ld.length)]}function dx(s){const e=[];for(const t of ox)if(t.match(s)){for(const n of t.tools){const i=n.extract(s);e.push({name:n.name,args:i})}break}return e}function hx(s,e={}){e.savedLocations&&Object.assign(ih,e.savedLocations);const t=ax(s);if(t)return{response:`Where is your ${t} located? Tell me like "My ${t} is [address]".`,tools:[]};const n=dx(s);return{response:lx(s,n),tools:n}}class ux extends qt{constructor(){super("ConversationEngine"),this.conversationCount=0,this.history=[]}_isSimpleGreeting(e){const t=e.replace(/^(?:hey|hi|hello|sup|yo|wassup|howdy)\s*(?:spidey|spider|ai)?\s*/i,"").trim();return t?!(/^(?:what|how|why|when|where|who|can|could|will|would|do|did|does|tell|teach|explain|show|play|navigate|create|remind|remember|make|set|add)/i.test(t)||/\b(?:teach|learn|explain|help|question|define|meaning|what is|how does|how to|tell me)\b/i.test(t)):!0}async process(e,t){this.conversationCount++;const n=e.raw||"";if(this.conversationCount===1&&this._isSimpleGreeting(n)){const i=new Date().getHours(),r=i<12?"morning":i<18?"afternoon":"evening",a=[`Hey! Good ${r}! Uh, sorry I'm a little out of breath — was just swinging around the city. What's on your mind?`,`Oh hey! Good ${r}! I was just grabbing a hot dog from that cart on 42nd. What's up?`,`Hey! Good ${r}! Hope your day's going better than my web fluid budget. What can I help with?`],o=a[Math.floor(Math.random()*a.length)];return this.history.push({user:n,ai:o}),this.emit("response",o),o}try{const i=await fetch("/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:n,history:this.history}),signal:AbortSignal.timeout(15e3)});if(!i.ok)throw new Error(`status ${i.status}`);const r=await i.json();let a=r.response||"";const o=r.tools||[];if(!a&&o.length>0){const c={navigate_to:l=>`Heading to ${l.location||"your destination"}!`,create_mission:l=>`Created ${l.type==="challenge"?"challenge":"mission"}: ${l.title||"New Task"}!`,check_weather:()=>"Let me check the weather for you!",set_reminder:l=>`Reminder set: ${l.text||""}`,play_media:l=>`Opening ${l.query||"that"}...`,set_location:l=>`Saved ${l.name} as ${l.address}!`};a=o.map(l=>c[l.name]?.(l.args)||"").filter(Boolean).join(" ")}return a||(a="Got it!"),await od.execute(o),this._remember(n,a),a}catch{const i=C.get("user.locations")||{},r=hx(n,{history:this.history,savedLocations:i});return await od.execute(r.tools),this._remember(n,r.response),r.response}}_remember(e,t){this.history.push({user:e,ai:t}),this.history.length>20&&(this.history=this.history.slice(-20)),Nt.remember(`chat:${Date.now()}`,{text:e,response:t},.9,"conversation","chat"),this.emit("response",t)}}const fx=new ux;window.__store=C;const ps="/sk_1036001.glb",er=document.getElementById("renderCanvas"),sh=document.getElementById("speakBtn"),Xn=document.getElementById("textInput"),px=document.getElementById("status"),Qi=document.getElementById("subtitle");function gn(s){px.textContent=s}function Bs(s,e){if(Qi.textContent=s,Qi.classList.toggle("visible",e),e){const t=s.length;t>200?Qi.style.fontSize="10px":t>120?Qi.style.fontSize="11px":t>60?Qi.style.fontSize="13px":Qi.style.fontSize="15px"}}const xn=new ku,ea=new zt(30,er.clientWidth/er.clientHeight,.05,100);ea.position.set(1,1.9,2.6);ea.lookAt(0,1.25,0);const gi=new B_({canvas:er,antialias:!0,alpha:!0});gi.setSize(er.clientWidth,er.clientHeight);gi.setPixelRatio(Math.min(devicePixelRatio,2));gi.toneMapping=ac;gi.toneMappingExposure=1.2;gi.shadowMap.enabled=!0;gi.shadowMap.type=Gs;const mx=new Sf(8900331,4473924,2);xn.add(mx);const ha=new ys(16772829,6);ha.position.set(3,5,4);ha.castShadow=!0;ha.shadow.mapSize.set(1024,1024);xn.add(ha);const rh=new ys(4491519,2.5);rh.position.set(-3,2,2);xn.add(rh);const ah=new ys(16777215,3);ah.position.set(1,2,-4);xn.add(ah);const oh=new ys(16777215,2);oh.position.set(0,6,0);xn.add(oh);const ch=new ys(16737860,1.5);ch.position.set(-2,1,3);xn.add(ch);const ua=new z_;ua.setMeshoptDecoder(y0);const lh=new T0;lh.setDecoderPath("/draco/");ua.setDRACOLoader(lh);const dh={spidey_anim:{file:"/spidey_anim.glb",label:"Spidey (Original)",loopOnce:!0},spidey_idle:{file:"/anim_spidey_idle.glb",label:"Spidey Idle",loopOnce:!1},spidey_idle_2standing:{file:"/anim_spidey_idle_2standing.glb",label:"Idle→Standing",loopOnce:!0},spidey_stand1:{file:"/anim_spidey_standing1.glb",label:"Spidey Standing 1",loopOnce:!1},spidey_2idle:{file:"/anim_spidey_standing_2idle.glb",label:"Standing→Idle",loopOnce:!0},half_personality:{file:"/anim_Half_Personality.glb",label:"Half Personality",loopOnce:!0}};let ms={},cn=null;Object.keys(dh).length;function gx(){for(const[s,e]of Object.entries(dh))ua.load(e.file,t=>{const n=t.scene;n.visible=!1,xn.add(n);const i=new Vf(n),r=t.animations[0],a=i.clipAction(r);e.loopOnce&&(a.setLoop(pc),a.clampWhenFinished=!0),ms[s]={mixer:i,armature:n,clip:r,action:a},console.log(`Anim "${s}" loaded:`,r.name,r.duration.toFixed(2)+"s")})}gx();const Cc=[{level:5,id:"comic_card",name:"Comic Card",image:"/achievements/achive1.jpg",character:null,label:"Base Suit"},{level:10,id:"iron_spider",name:"Iron Spider",image:"/achievements/achieve2.webp",character:"/sk_1036508.glb",label:"Iron Spider"},{level:20,id:"variant",name:"Variant Suit",image:"/achievements/achieve_3.jpg",character:"/sk_1036100.glb",label:"Variant"},{level:50,id:"variant_hair",name:"Variant Hair Suit",image:"/achievements/achiev_4.jpg",character:"/sk_1036501.glb",label:"Variant Hair"}];function fa(){return new Set(C.get("user.achievements")||[])}function hh(){return new Set(C.get("user.unlockedChars")||[])}function bx(s){const e=fa();return e.has(s)?!1:(e.add(s),C.set("user.achievements",[...e]),!0)}function _x(s){const e=hh();return e.has(s)?!1:(e.add(s),C.set("user.unlockedChars",[...e]),!0)}let nn=null,os=[],Hr=null,lt={},Pi=!1,ns=0,tc=0,io=0,pt={};const xx=new Set(["jaw","mouth","tongue_01","tongue_02","tongue_03"]);function Ns(s,e){const t=[];for(const n of os){const i=n.morphTargetDictionary[s];i!==void 0&&(n.morphTargetInfluences[i]=Math.min(e,1),t.push(i))}return t}const vx=.5;let nc=0;function yx(){pt={};for(const[s,e]of Object.entries(lt))pt[s]={x:e.rotation.x,y:e.rotation.y,z:e.rotation.z}}function Sx(){nn&&(cn==="spidey_idle"||cn==="spidey_anim"?nc=vx:nc=0)}const It={START:0,IDLE:1,TO_STANDING:2,STANDING1:3,TO_IDLE:4,HALF_PERSONALITY:5};let Yt=It.START,gs=0;function fi(s){const e=ms[s];if(e){if(cn){const t=ms[cn];t&&t.action.stop()}e.action.reset().play(),cn=s,Sx()}}function Mx(){switch(Yt){case It.START:Yt=It.IDLE,fi("spidey_idle"),gs=0;break;case It.TO_STANDING:Yt=It.STANDING1,fi("spidey_stand1");break;case It.TO_IDLE:Yt=It.IDLE,fi("spidey_idle"),gs=0;break;case It.HALF_PERSONALITY:Yt=It.STANDING1,fi("spidey_stand1");break}}function Ex(){Yt===It.IDLE?(gs=0,Yt=It.TO_STANDING,fi("spidey_idle_2standing")):Yt===It.STANDING1&&(gs=0,Math.random()<.25?(Yt=It.HALF_PERSONALITY,fi("half_personality")):(Yt=It.TO_IDLE,fi("spidey_2idle")))}let Ws=null;function Tx(){Ws&&(Ws.pause(),Ws=null),window.speechSynthesis&&window.speechSynthesis.cancel(),Pi=!1,lt.jaw&&pt.jaw&&(lt.jaw.rotation.z=pt.jaw.z),lt.mouth&&pt.mouth&&(lt.mouth.rotation.z=pt.mouth.z),Bs("",!1)}async function ta(s){if(Tx(),!!s){Bs(s,!0),gn("Speaking...");try{const e=await fetch("/speak",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s})});if(!e.ok)throw new Error(`TTS returned ${e.status}`);const t=await e.json(),n=new Audio("data:audio/mp3;base64,"+t.audio);Ws=n,ns=performance.now(),Pi=!0,tc=ns+Math.max(1e3,t.audio.length*.75/16),n.onended=()=>{Pi=!1,lt.jaw&&pt.jaw&&(lt.jaw.rotation.z=pt.jaw.z),lt.mouth&&pt.mouth&&(lt.mouth.rotation.z=pt.mouth.z),gn("Done"),setTimeout(()=>Bs("",!1),2e3),Ws=null},n.play()}catch{if(window.speechSynthesis){const t=new SpeechSynthesisUtterance(s);t.rate=1;const n=Math.max(1500,s.length*90)+1e3;t.onstart=()=>{Pi=!0,ns=performance.now(),tc=ns+n,gn("Speaking...")},t.onend=()=>{Pi=!1,lt.jaw&&pt.jaw&&(lt.jaw.rotation.z=pt.jaw.z),lt.mouth&&pt.mouth&&(lt.mouth.rotation.z=pt.mouth.z),gn("Done"),setTimeout(()=>Bs("",!1),2e3)},window.speechSynthesis.speak(t)}else gn("Voice unavailable"),setTimeout(()=>Bs("",!1),s.length*60+1e3)}}}function bs(s,e){const t=document.querySelector(".spidey-msg-body");if(!t)return;const n=document.createElement("div");n.className=`msg-bubble ${e==="user"?"msg-user":"msg-spidey"}`,n.textContent=s;const i=document.createElement("div");i.className="msg-time";const r=new Date;i.textContent=String(r.getHours()).padStart(2,"0")+":"+String(r.getMinutes()).padStart(2,"0"),n.appendChild(i),t.appendChild(n),t.scrollTop=t.scrollHeight}let qs=null;async function wx(s){C.set("proactive.lastUserMessage",Date.now()),$(".spidey-msg").removeClass("hidden"),bs(s,"user");const e=G0.extract(s),t=V0.classify(s);Nt.remember(`chat:${Date.now()}`,{text:s,intent:t.primary},.9,"conversation","chat");for(const c of e.subjects)Nt.remember(`subject:${c}`,{name:c,mentioned:Date.now()},.8,"conversation","knowledge");for(const c of e.locations)Nt.remember(`location:${c}`,{name:c,mentioned:Date.now()},.7,"conversation","schedule");for(const c of e.activities)Nt.remember(`activity:${c}`,{name:c,mentioned:Date.now()},.7,"conversation","habit");(e.times.length>0||e.dates.length>0)&&Nt.remember(`schedule:${Date.now()}`,{times:e.times,dates:e.dates,subjects:e.subjects,activities:e.activities,locations:e.locations,raw:s},.85,"conversation","schedule");let n=null;di.currentLocation&&(n=await di.getWeather(di.currentLocation.lat,di.currentLocation.lon));let i=await fx.process(t,e);const r=ui.decide(i,t,e,n);for(const c of r.actions){if(c==="create_mission"){const l=await Et.createFromIntent(t,e,n);l&&l.resources&&l.resources.length>0&&(i+=" I found resources to help.")}if(c==="offer_mission"&&await Et.createFromIntent(t,e,n)&&(i=i.replace("Should I create a mission for this?","I've set that up as a mission!")),c==="play_media"){const l=e.subjects,d=l.length>0?encodeURIComponent(l.join(" ")):"";d&&setTimeout(()=>{window.open(`https://m.youtube.com/results?search_query=${d}`,"_blank")},2e3)}if(c==="weather_alert"){const l=n?.current?.weathercode,d=C.get("weather.lastAlertCode");l&&l!==d&&(i=`⚠️ ${di.getWeatherDescription(l)} detected. ${i}`,C.set("weather.lastAlertCode",l))}c==="generate_quests"&&Et.generateSideQuests(n)}const a=Rc.predict(),o=C.get("habits.detected")||[];ui.generateInsights(n,a,o),sn.refresh(),setTimeout(()=>{bs(i,"spidey"),ta(i)},500+Math.random()*800)}$(document).on("click",".spidey-msg-back",function(){$(".spidey-msg").addClass("hidden")});let Vr=ps,Fr=!1;function Pc(s){if(!(!s||Fr)){if(Fr=!0,gn("Loading suit..."),nn&&(xn.remove(nn),nn=null),os=[],Hr=null,lt={},cn){const e=ms[cn];e&&e.action.stop(),cn=null}ua.load(s,e=>{nn=e.scene,nn.position.set(0,0,0),xn.add(nn),nn.traverse(i=>{if(i.isMesh&&i.morphTargetDictionary&&os.push(i),i.isSkinnedMesh&&i.skeleton){Hr=i.skeleton;for(const r of Hr.bones)lt[r.name]=r}});const t=new Set(["MI_1036508_Rim_HeroDetails","MI_Punches_2_005"]);nn.traverse(i=>{if(i.isMesh&&i.material){const r=i.material.name||i.material.type;t.has(r)&&(i.visible=!1)}});const n=[...new Set(os.flatMap(i=>Object.keys(i.morphTargetDictionary||{})))];console.log("Bones:",Object.keys(lt)),console.log("Morphs:",n),yx(),Vr=s,fi("spidey_anim"),Yt=It.START,Fr=!1,gn("Ready"),na()},void 0,e=>{console.error("Load error:",e),gn("Load error"),Fr=!1,s!==ps&&setTimeout(()=>Pc(ps),1e3)})}}Pc(ps);const Fs=parseInt(new URLSearchParams(location.search).get("setlevel"));if(Fs){const s=Fs===1?0:(Fs-1)*1e3;C.set("user.xp",s),C.set("user.level",Fs),console.log(`Level set to ${Fs} (${s} XP) for testing`)}sh.addEventListener("click",()=>{const s=Xn.value.trim();s&&(Xn.value="",Xn.style.height="auto",wx(s))});Xn.addEventListener("keydown",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),sh.click())});Xn.addEventListener("input",()=>{Xn.style.height="auto",Xn.style.height=Math.min(Xn.scrollHeight,90)+"px"});function Ax(s){if(!cn||!lt)return;const e=ms[cn];if(!e)return;e.mixer.update(s);const t={};e.armature.traverse(n=>{n.isBone&&(t[n.name]=n)});for(const[n,i]of Object.entries(lt)){if(xx.has(n))continue;const r=t[n];r&&i.quaternion.copy(r.quaternion)}}function uh(){if(requestAnimationFrame(uh),!Hr&&os.length===0){gi.render(xn,ea);return}const s=performance.now(),e=1/60,t=new Set;if(io-=e*1e3,io<=0&&(io=3e3+Math.random()*2e3,Ns("h_expressions.LeyeClose_h",1).forEach(n=>t.add(n)),Ns("h_expressions.ReyeClose_h",1).forEach(n=>t.add(n))),Pi&&ns>0){const n=s-ns;s>tc&&(Pi=!1,lt.jaw&&pt.jaw&&(lt.jaw.rotation.z=pt.jaw.z),lt.mouth&&pt.mouth&&(lt.mouth.rotation.z=pt.mouth.z));const i=.3+.4*Math.sin(n*.008)+.15*Math.sin(n*.025);Ns("h_expressions.MouthOpen_h",i).forEach(r=>t.add(r)),Ns("h_expressions.AE_AA_h",i*.5).forEach(r=>t.add(r)),Ns("h_expressions.TD_I_h",i*.3).forEach(r=>t.add(r)),lt.jaw&&pt.jaw&&(lt.jaw.rotation.z=pt.jaw.z-i*.35),lt.mouth&&pt.mouth&&(lt.mouth.rotation.z=pt.mouth.z-i*.35)}if(cn){Ax(e);const n=ms[cn];n&&n.action.loop===pc&&n.mixer.time>=n.clip.duration-.05&&Mx(),(Yt===It.IDLE||Yt===It.STANDING1)&&(gs+=e,gs>=7&&Ex())}for(const n of os){const i=n.morphTargetInfluences;for(let r=0;r<i.length;r++)t.has(r)||(i[r]>.005?i[r]*=.9:i[r]=0)}nn&&(nn.position.y+=(nc-nn.position.y)*.08),gi.render(xn,ea)}function Rx(s){if(!s)return;document.getElementById("celebrationCard").src=s.image,document.getElementById("celebrationName").textContent=s.name;const e=s.character?`New Suit Unlocked: ${s.label}`:"Wall of Glory updated!";document.getElementById("celebrationSub").textContent=e,document.getElementById("celebrationOverlay").classList.remove("hidden")}function ic(){const s=C.get("user.level")||1,e=fa(),t=Cc.filter(n=>s>=n.level&&!e.has(n.id));if(t.length===0){sc(),na();return}for(const n of t)bx(n.id),n.character&&_x(n.character);Rx(t[t.length-1]),na(),sc()}document.addEventListener("click",s=>{if(!s.target.closest("#missionConfirmBtn"))return;const t=C.get("missions.current");if(t){const n=Et.completeMission(t.id);n&&(bs(`✅ Mission "${n.mission.title}" complete! +${n.xp} XP`,"spidey"),ta(`Mission complete! You earned ${n.xp} experience points. Great work!`),ic())}});document.getElementById("exportUserBtn")?.addEventListener("click",()=>{const s=C.exportUserData(),e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`spidey_ai_data_${C.getUser()}_${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(t)});document.getElementById("importUserBtn")?.addEventListener("click",()=>{document.getElementById("importFileInput")?.click()});document.getElementById("importFileInput")?.addEventListener("change",s=>{const e=s.target.files[0];if(!e)return;const t=new FileReader;t.onload=n=>{try{const i=JSON.parse(n.target.result),r=prompt("Enter a name for this user data:",C.getUser());r&&(C.importUserData(r,i),document.getElementById("userLabel").textContent=`User: ${r}`,Et.generateSideQuests(null),sn.refresh(),bs(`📥 Loaded data for "${r}"`,"spidey"))}catch{alert("Invalid data file")}},t.readAsText(e),s.target.value=""});async function dd(){try{if(document.activeElement===Xn)return;const s=C.get("suggestions.current");if(s){const t=`Spidey suggests: ${s.title}. ${s.notes} Want to accept this mission?`;gn("💬 suggestion..."),$(".spidey-msg").removeClass("hidden"),bs(t,"spidey"),ta(t),C.set("proactive.lastMessage",Date.now());return}const e=await ui.generateProactiveMessage();if(!e){gn("⏸ waiting...");return}gn("💬 "+e.slice(0,40)+"..."),$(".spidey-msg").removeClass("hidden"),bs(e,"spidey"),ta(e)}catch(s){console.error("proactive err:",s)}}function hd(){qs||(dd(),qs=setInterval(dd,6e4))}function Cx(){qs&&(clearInterval(qs),qs=null)}(async function(){setTimeout(()=>{const i=document.querySelector("#proactiveToggle input");i&&i.addEventListener("change",()=>{i.checked?hd():Cx()})},1e3),new URLSearchParams(location.search).has("reset")&&C.resetUser(),nh.start(18e4),sn.init();let e=null;const t=async(i,r)=>{di.setLocation(i,r),C.set("user.currentCoords",{lat:i,lon:r}),e=await di.getWeather(i,r),Et.generateSideQuests(e),Rc.predict();const a=C.get("predictions")||[],o=C.get("habits.detected")||[];ui.generateInsights(e,a,o),sn.refresh()};let n=!1;navigator.geolocation&&navigator.geolocation.getCurrentPosition(async i=>{n||(n=!0,await t(i.coords.latitude,i.coords.longitude))},()=>{},{enableHighAccuracy:!0,timeout:8e3,maximumAge:6e4}),setTimeout(async()=>{if(!n)try{const r=await(await fetch("/api/my-location")).json();r.lat?(n=!0,await t(r.lat,r.lon)):(Et.generateSideQuests(null),sn.refresh())}catch{Et.generateSideQuests(null),sn.refresh()}},3e3),sn.refresh(),hd(),na(),sc(),ic(),setInterval(()=>ic(),5e3)})();function na(){const s=document.getElementById("suitGrid");if(!s)return;const e=fa();hh(),s.innerHTML="",s.innerHTML+=`<button class="suit-btn ${Vr===ps?"active":""}" data-char="${ps}"><img src="/achievements/achive1.jpg" alt="Default"><div class="suit-level-badge">BASE</div></button>`;for(const t of Cc){if(!t.character)continue;const n=e.has(t.id),i=Vr===t.character;s.innerHTML+=`<button class="suit-btn${i?" active":""}${n?"":" locked"}" data-char="${t.character}"${n?"":" disabled"}><img src="${t.image}" alt="${t.label}">${n?"":'<div class="suit-lock">🔒</div>'}<div class="suit-level-badge">LVL ${t.level}</div></button>`}s.querySelectorAll(".suit-btn:not(.locked)").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.char;n&&n!==Vr&&(Pc(n),s.querySelectorAll(".suit-btn").forEach(i=>i.classList.remove("active")),t.classList.add("active"))})})}function sc(){const s=document.getElementById("gloryGrid");if(!s)return;const e=fa();s.innerHTML="";for(const t of Cc){const n=e.has(t.id);s.innerHTML+=`<div class="glory-slot ${n?"earned":"locked"}">${n?`<img src="${t.image}" alt="${t.name}">`:'<div class="glory-lock">🔒</div>'}<div class="glory-level">LVL ${t.level}</div></div>`}}document.getElementById("celebrationContinueBtn")?.addEventListener("click",()=>{document.getElementById("celebrationOverlay").classList.add("hidden")});document.getElementById("celebrationScreenshotBtn")?.addEventListener("click",async()=>{const s=document.getElementById("celebrationOverlay");try{const t=(await html2canvas(s,{backgroundColor:null,scale:2,useCORS:!0,allowTaint:!1,logging:!1})).toDataURL("image/png"),n="spidey_photos";let i=[];try{i=JSON.parse(localStorage.getItem(n)||"[]")}catch{}i.unshift({id:Date.now(),data:t,originalData:t,caption:"Achievement Unlocked",date:new Date().toISOString(),favorite:!1}),localStorage.setItem(n,JSON.stringify(i)),document.querySelectorAll("#iphone iframe").forEach(r=>{try{r.contentWindow.postMessage({type:"addPhoto",data:t,caption:"Achievement Unlocked"},"*")}catch{}})}catch(e){console.error("Screenshot failed:",e)}});uh();
