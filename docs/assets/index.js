var Ih=Object.defineProperty;var Dh=(s,e,t)=>e in s?Ih(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var fi=(s,e,t)=>Dh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="170",Uh=0,Fl=1,Nh=2,nl=1,xu=2,kn=3,zn=0,Ht=1,St=2,Nn=0,es=1,as=2,Bl=3,Ol=4,Fh=5,Si=100,Bh=101,Oh=102,zh=103,Hh=104,Vh=200,Gh=201,Wh=202,Xh=203,lo=204,co=205,jh=206,qh=207,Yh=208,Kh=209,$h=210,Zh=211,Jh=212,Qh=213,ed=214,uo=0,ho=1,fo=2,rs=3,po=4,mo=5,go=6,_o=7,sr=0,td=1,nd=2,ri=0,vu=1,yu=2,Mu=3,il=4,id=5,bu=6,Su=7,zl="attached",sd="detached",Tu=300,os=301,ls=302,xo=303,vo=304,ar=306,Hn=1e3,Dn=1001,Ya=1002,Vt=1003,Eu=1004,zs=1005,Ot=1006,Ba=1007,dn=1008,Vn=1009,wu=1010,Au=1011,Ks=1012,sl=1013,Ei=1014,fn=1015,vn=1016,al=1017,rl=1018,cs=1020,Ru=35902,Cu=1021,Pu=1022,qt=1023,Lu=1024,ku=1025,ts=1026,us=1027,ol=1028,ll=1029,Iu=1030,cl=1031,ul=1033,Oa=33776,za=33777,Ha=33778,Va=33779,yo=35840,Mo=35841,bo=35842,So=35843,To=36196,Eo=37492,wo=37496,Ao=37808,Ro=37809,Co=37810,Po=37811,Lo=37812,ko=37813,Io=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Bo=37819,Oo=37820,zo=37821,Ga=36492,Ho=36494,Vo=36495,Du=36283,Go=36284,Wo=36285,Xo=36286,ad=2200,rd=2201,od=2202,$s=2300,Zs=2301,mr=2302,$i=2400,Zi=2401,Ka=2402,hl=2500,ld=2501,cd=0,Uu=1,jo=2,ud=3200,Nu=3201,rr=0,hd=1,ti="",rt="srgb",Dt="srgb-linear",or="linear",st="srgb",Ci=7680,Hl=519,dd=512,fd=513,pd=514,Fu=515,md=516,gd=517,_d=518,xd=519,qo=35044,Vl="300 es",Un=2e3,$a=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Ws=Math.PI/180,hs=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function dl(s,e){return(s%e+e)%e}function vd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yd(s,e,t){return s!==e?(t-s)/(e-s):0}function Xs(s,e,t){return(1-t)*s+t*e}function Md(s,e,t,n){return Xs(s,e,1-Math.exp(-t*n))}function bd(s,e=1){return e-Math.abs(dl(s,e*2)-e)}function Sd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ed(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wd(s,e){return s+Math.random()*(e-s)}function Ad(s){return s*(.5-Math.random())}function Rd(s){s!==void 0&&(Gl=s);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cd(s){return s*Ws}function Pd(s){return s*hs}function Ld(s){return(s&s-1)===0&&s!==0}function kd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dd(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),u=r((e+n)/2),h=a((e-n)/2),d=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ud={DEG2RAD:Ws,RAD2DEG:hs,generateUUID:pn,clamp:Ct,euclideanModulo:dl,mapLinear:vd,inverseLerp:yd,lerp:Xs,damp:Md,pingpong:bd,smoothstep:Sd,smootherstep:Td,randInt:Ed,randFloat:wd,randFloatSpread:Ad,seededRandom:Rd,degToRad:Cd,radToDeg:Pd,isPowerOfTwo:Ld,ceilPowerOfTwo:kd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Dd,normalize:at,denormalize:un};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,a,r,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],T=i[4],v=i[7],P=i[2],R=i[5],A=i[8];return a[0]=r*_+o*E+l*P,a[3]=r*m+o*T+l*R,a[6]=r*p+o*v+l*A,a[1]=c*_+u*E+h*P,a[4]=c*m+u*T+h*R,a[7]=c*p+u*v+h*A,a[2]=d*_+f*E+g*P,a[5]=d*m+f*T+g*R,a[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*a*u+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,d=o*l-u*a,f=c*a-r*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*r)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*a-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ge;function Bu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nd(){const s=Js("canvas");return s.style.display="block",s}const Wl={};function Hs(s){s in Wl||(Wl[s]=!0,console.warn(s))}function Fd(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Bd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Od(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Dt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?or:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Xl=[.64,.33,.3,.6,.15,.06],jl=[.2126,.7152,.0722],ql=[.3127,.329],Yl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Dt]:{primaries:Xl,whitePoint:ql,transfer:or,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:jl,workingColorSpaceConfig:{unpackColorSpace:rt},outputColorSpaceConfig:{drawingBufferColorSpace:rt}},[rt]:{primaries:Xl,whitePoint:ql,transfer:st,toXYZ:Yl,fromXYZ:Kl,luminanceCoefficients:jl,outputColorSpaceConfig:{drawingBufferColorSpace:rt}}});let Pi;class zd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Js("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Fn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hd=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(_r(i[r].image)):a.push(_r(i[r]))}else a=_r(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function _r(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class Et extends wi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Dn,i=Dn,a=Ot,r=dn,o=qt,l=Vn,c=Et.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=pn(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Tu;Et.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(f+1)/2,P=(p+1)/2,R=(u+d)/4,A=(h+_)/4,I=(g+m)/4;return T>v&&T>P?T<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(T),i=R/n,a=A/n):v>P?v<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(v),n=R/i,a=I/i):P<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(P),n=A/a,i=I/a),this.set(n,i,a,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zu extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wd extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const P=Math.sqrt(T),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const v=o*E;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(a/2),d=l(n/2),f=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(a-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(r-i)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-a*l,this._y=i*u+r*l+a*o-n*c,this._z=a*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),u=2*(o*t-a*i),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*u,this.y=n+l*u+o*c-a*h,this.z=i+l*h+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xr.copy(this).projectOnVector(e),this.sub(xr)}reflect(e){return this.sub(xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new w,$l=new ot;class yn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,rn):rn.fromBufferAttribute(a,r),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),ra.subVectors(this.max,ws),Li.subVectors(e.a,ws),ki.subVectors(e.b,ws),Ii.subVectors(e.c,ws),jn.subVectors(ki,Li),qn.subVectors(Ii,ki),pi.subVectors(Li,Ii);let t=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!vr(t,Li,ki,Ii,ra)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,Li,ki,Ii,ra))?!1:(oa.crossVectors(jn,qn),t=[oa.x,oa.y,oa.z],vr(t,Li,ki,Ii,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new w,new w,new w,new w,new w,new w,new w,new w],rn=new w,aa=new yn,Li=new w,ki=new w,Ii=new w,jn=new w,qn=new w,pi=new w,ws=new w,ra=new w,oa=new w,mi=new w;function vr(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){mi.fromArray(s,a);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xd=new yn,As=new w,yr=new w;class Mn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(yr)),this.expandByPoint(As.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new w,Mr=new w,la=new w,Yn=new w,br=new w,ca=new w,Sr=new w;class lr{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mr.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Mr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(la),o=Yn.dot(this.direction),l=-Yn.dot(la),c=Yn.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-o,d=r*o-l,g=a*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mr).addScaledVector(la,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,a){br.subVectors(t,e),ca.subVectors(n,e),Sr.crossVectors(br,ca);let r=this.direction.dot(Sr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(ca.crossVectors(Yn,ca));if(l<0)return null;const c=o*this.direction.dot(br.cross(Yn));if(c<0||l+c>r)return null;const u=-o*Yn.dot(Sr);return u<0?null:this.at(u/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,a,r,o,l,c,u,h,d,f,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,a,r,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),a=1/Di.setFromMatrixColumn(e,1).length(),r=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=r*u,f=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-r*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=_-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*u,f=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=r*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,qd)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Kn.crossVectors(n,Xt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Kn.crossVectors(n,Xt)),Kn.normalize(),ua.crossVectors(Xt,Kn),i[0]=Kn.x,i[4]=ua.x,i[8]=Xt.x,i[1]=Kn.y,i[5]=ua.y,i[9]=Xt.y,i[2]=Kn.z,i[6]=ua.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],P=n[15],R=i[0],A=i[4],I=i[8],S=i[12],M=i[1],k=i[5],G=i[9],L=i[13],U=i[2],V=i[6],N=i[10],J=i[14],z=i[3],H=i[7],te=i[11],se=i[15];return a[0]=r*R+o*M+l*U+c*z,a[4]=r*A+o*k+l*V+c*H,a[8]=r*I+o*G+l*N+c*te,a[12]=r*S+o*L+l*J+c*se,a[1]=u*R+h*M+d*U+f*z,a[5]=u*A+h*k+d*V+f*H,a[9]=u*I+h*G+d*N+f*te,a[13]=u*S+h*L+d*J+f*se,a[2]=g*R+_*M+m*U+p*z,a[6]=g*A+_*k+m*V+p*H,a[10]=g*I+_*G+m*N+p*te,a[14]=g*S+_*L+m*J+p*se,a[3]=E*R+T*M+v*U+P*z,a[7]=E*A+T*k+v*V+P*H,a[11]=E*I+T*G+v*N+P*te,a[15]=E*S+T*L+v*J+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+a*l*h-i*c*h-a*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+a*r*d-i*r*f+i*c*u-a*l*u)+m*(+t*c*h-t*o*f-a*r*h+n*r*f+a*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*r*h-n*r*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+r*m*f+u*l*p-r*d*p,v=u*_*c-g*h*c+g*o*f-r*_*f-u*o*p+r*h*p,P=g*h*l-u*_*l-g*o*d+r*_*d+u*o*m-r*h*m,R=t*E+n*T+i*v+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(_*d*a-h*m*a-_*i*f+n*m*f+h*i*p-n*d*p)*A,e[2]=(o*m*a-_*l*a+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*a-o*d*a-h*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=T*A,e[5]=(u*m*a-g*d*a+g*i*f-t*m*f-u*i*p+t*d*p)*A,e[6]=(g*l*a-r*m*a-g*i*c+t*m*c+r*i*p-t*l*p)*A,e[7]=(r*d*a-u*l*a+u*i*c-t*d*c-r*i*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*a-u*_*a-g*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(r*_*a-g*o*a+g*n*c-t*_*c-r*n*p+t*o*p)*A,e[11]=(u*o*a-r*h*a-u*n*c+t*h*c+r*n*f-t*o*f)*A,e[12]=P*A,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*o*i-r*_*i-g*n*l+t*_*l+r*n*m-t*o*m)*A,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,h=o+o,d=a*c,f=a*u,g=a*h,_=r*u,m=r*h,p=o*h,E=l*c,T=l*u,v=l*h,P=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-T)*P,i[3]=0,i[4]=(f-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(g+T)*A,i[9]=(m-E)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Di.set(i[0],i[1],i[2]).length();const r=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/a,u=1/r,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=Un){const l=this.elements,c=2*a/(t-e),u=2*a/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Un)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===$a)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=Un){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(r-a),d=(t+e)*c,f=(n+i)*u;let g,_;if(o===Un)g=(r+a)*h,_=-2*h;else if(o===$a)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new w,on=new Be,jd=new w(0,0,0),qd=new w(1,1,1),Kn=new w,ua=new w,Xt=new w,Zl=new Be,Jl=new ot;class vt{constructor(e=0,t=0,n=0,i=vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ct(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vt.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yd=0;const Ql=new w,Ui=new ot,Rn=new Be,ha=new w,Rs=new w,Kd=new w,$d=new ot,ec=new w(1,0,0),tc=new w(0,1,0),nc=new w(0,0,1),ic={type:"added"},Zd={type:"removed"},Ni={type:"childadded",child:null},Tr={type:"childremoved",child:null};class pt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new w,t=new vt,n=new ot,i=new w(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ge}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Rs,ha,this.up):Rn.lookAt(ha,Rs,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new w(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new w,Cn=new w,Er=new w,Pn=new w,Fi=new w,Bi=new w,sc=new w,wr=new w,Ar=new w,Rr=new w,Cr=new Ze,Pr=new Ze,Lr=new Ze;class en{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){ln.subVectors(i,t),Cn.subVectors(n,t),Er.subVectors(e,t);const r=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(Er),c=Cn.dot(Cn),u=Cn.dot(Er),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(r*u-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pn.x),l.addScaledVector(r,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(e,t),Pr.fromBufferAttribute(e,n),Lr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Cr,a.x),r.addScaledVector(Pr,a.y),r.addScaledVector(Lr,a.z),r}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Cn.subVectors(e,t),ln.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Fi.subVectors(i,n),Bi.subVectors(a,n),wr.subVectors(e,n);const l=Fi.dot(wr),c=Bi.dot(wr);if(l<=0&&c<=0)return t.copy(n);Ar.subVectors(e,i);const u=Fi.dot(Ar),h=Bi.dot(Ar);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(Fi,r);Rr.subVectors(e,a);const f=Fi.dot(Rr),g=Bi.dot(Rr);if(g>=0&&f<=g)return t.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Bi,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return sc.subVectors(a,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(sc,o);const p=1/(m+_+d);return r=_*p,o=d*p,t.copy(n).addScaledVector(Fi,r).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},da={h:0,s:0,l:0};function kr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=dl(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=kr(r,a,e+1/3),this.g=kr(r,a,e),this.b=kr(r,a,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=rt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return je.fromWorkingColorSpace(It.copy(this),e),Math.round(Ct(It.r*255,0,255))*65536+Math.round(Ct(It.g*255,0,255))*256+Math.round(Ct(It.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,a=It.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=rt){je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(da);const n=Xs($n.h,da.h,t),i=Xs($n.s,da.s,t),a=Xs($n.l,da.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new ve;ve.NAMES=Vu;let Jd=0;class Kt extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=pn(),this.name="",this.blending=es,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Kt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vt,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new w,fa=new Ee;class nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),a=at(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Gu extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qd=0;const Zt=new Be,Ir=new pt,Oi=new w,jt=new yn,Cs=new yn,Rt=new w;class gt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?Wu:Gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ge().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,i=t.count;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(jt.min,Cs.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,Cs.max),jt.expandByPoint(Rt)):(jt.expandByPoint(Cs.min),jt.expandByPoint(Cs.max))}jt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)Rt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),Rt.add(Oi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new w,l[I]=new w;const c=new w,u=new w,h=new w,d=new Ee,f=new Ee,g=new Ee,_=new w,m=new w;function p(I,S,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(a,I),f.fromBufferAttribute(a,S),g.fromBufferAttribute(a,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(k),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(k),o[I].add(_),o[S].add(_),o[M].add(_),l[I].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,S=E.length;I<S;++I){const M=E[I],k=M.start,G=M.count;for(let L=k,U=k+G;L<U;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const T=new w,v=new w,P=new w,R=new w;function A(I){P.fromBufferAttribute(i,I),R.copy(P);const S=o[I];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(R,S);const k=v.dot(l[I])<0?-1:1;r.setXYZW(I,T.x,T.y,T.z,k)}for(let I=0,S=E.length;I<S;++I){const M=E[I],k=M.start,G=M.count;for(let L=k,U=k+G;L<U;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,a=new w,r=new w,o=new w,l=new w,c=new w,u=new w,h=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),u.subVectors(r,a),h.subVectors(i,a),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,a),h.subVectors(i,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Be,gi=new lr,pa=new Mn,rc=new w,ma=new w,ga=new w,_a=new w,Dr=new w,xa=new w,oc=new w,va=new w;class lt extends pt{constructor(e=new gt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){xa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Dr.fromBufferAttribute(h,e),r?xa.addScaledVector(Dr,u):xa.addScaledVector(Dr.sub(t),u))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(a),gi.copy(e.ray).recast(e.near),!(pa.containsPoint(gi.origin)===!1&&(gi.intersectSphere(pa,rc)===null||gi.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(ac.copy(a).invert(),gi.copy(e.ray).applyMatrix4(ac),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=T;v<P;v+=3){const R=o.getX(v),A=o.getX(v+1),I=o.getX(v+2);i=ya(this,p,e,n,c,u,h,R,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=ya(this,r,e,n,c,u,h,E,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,P=T;v<P;v+=3){const R=v,A=v+1,I=v+2;i=ya(this,p,e,n,c,u,h,R,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,v=m+2;i=ya(this,r,e,n,c,u,h,E,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ef(s,e,t,n,i,a,r,o){let l;if(e.side===Ht?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===zn,o),l===null)return null;va.copy(o),va.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:s}}function ya(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,ma),s.getVertexPosition(l,ga),s.getVertexPosition(c,_a);const u=ef(s,e,t,n,ma,ga,_a,oc);if(u){const h=new w;en.getBarycoord(oc,ma,ga,_a,h),i&&(u.uv=en.getInterpolatedAttribute(i,o,l,c,h,new Ee)),a&&(u.uv1=en.getInterpolatedAttribute(a,o,l,c,h,new Ee)),r&&(u.normal=en.getInterpolatedAttribute(r,o,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new w,materialIndex:0};en.getNormal(ma,ga,_a,d.normal),u.face=d,u.barycoord=h}return u}class vs extends gt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(_,m,p,E,T,v,P,R,A,I,S){const M=v/A,k=P/I,G=v/2,L=P/2,U=R/2,V=A+1,N=I+1;let J=0,z=0;const H=new w;for(let te=0;te<N;te++){const se=te*k-L;for(let ye=0;ye<V;ye++){const Ue=ye*M-G;H[_]=Ue*E,H[m]=se*T,H[p]=U,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=R>0?1:-1,u.push(H.x,H.y,H.z),h.push(ye/A),h.push(1-te/I),J+=1}}for(let te=0;te<I;te++)for(let se=0;se<A;se++){const ye=d+se+V*te,Ue=d+se+V*(te+1),q=d+(se+1)+V*(te+1),ie=d+(se+1)+V*te;l.push(ye,Ue,ie),l.push(Ue,q,ie),z+=6}o.addGroup(f,z,S),f+=z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=ds(s[t]);for(const i in n)e[i]=n[i]}return e}function tf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const fs={clone:ds,merge:Nt};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends Kt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ju extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new w,lc=new Ee,cc=new Ee;class Bt extends ju{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Hi=1;class af extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(zi,Hi,e,t);i.layers=this.layers,this.add(i);const a=new Bt(zi,Hi,e,t);a.layers=this.layers,this.add(a);const r=new Bt(zi,Hi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(zi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new Bt(zi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(zi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qu extends Et{constructor(e,t,n,i,a,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,i,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vs(5,5,5),a=new Tt({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Nn});a.uniforms.tEquirect.value=t;const r=new lt(i,a),o=t.minFilter;return t.minFilter===dn&&(t.minFilter=Ot),new af(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}const Ur=new w,of=new w,lf=new Ge;class Mi{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ur.subVectors(n,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lf.getNormalMatrix(e),i=this.coplanarPoint(Ur).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Mn,Ma=new w;class fl{constructor(e=new Mi,t=new Mi,n=new Mi,i=new Mi,a=new Mi,r=new Mi){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],T=i[14],v=i[15];if(n[0].setComponents(l-a,d-c,m-f,v-p).normalize(),n[1].setComponents(l+a,d+c,m+f,v+p).normalize(),n[2].setComponents(l+r,d+u,m+g,v+E).normalize(),n[3].setComponents(l-r,d-u,m-g,v-E).normalize(),n[4].setComponents(l-o,d-h,m-_,v-T).normalize(),t===Un)n[5].setComponents(l+o,d+h,m+_,v+T).normalize();else if(t===$a)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ma.x=i.normal.x>0?e.max.x:e.min.x,Ma.y=i.normal.y>0?e.max.y:e.min.y,Ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function cf(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class Gn extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-r;for(let T=0;T<c;T++){const v=T*h-a;g.push(v,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,v=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;f.push(T,v,R),f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,If=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
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
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
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
}`,km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Um=`#define TOON
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
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Fm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:uf,alphahash_pars_fragment:hf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:xf,batching_vertex:vf,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:bf,iridescence_fragment:Sf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:Lf,color_vertex:kf,common:If,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Bf,emissivemap_pars_fragment:Of,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:jf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Kf,fog_pars_fragment:$f,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:up,lights_fragment_end:hp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:vp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:bp,morphcolor_vertex:Sp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ep,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Np,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:Op,project_vertex:zp,dithering_fragment:Hp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:jp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Kp,skinning_pars_vertex:$p,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:am,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:um,backgroundCube_vert:hm,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:xm,equirect_vert:vm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Sm,meshbasic_frag:Tm,meshlambert_vert:Em,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Lm,meshphong_frag:km,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Bm,shadow_vert:Om,shadow_frag:zm,sprite_vert:Hm,sprite_frag:Vm},ce={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xn={basic:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Nt([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Nt([ce.lights,ce.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:Nt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ba={r:0,b:0,g:0},xi=new vt,Gm=new Be;function Wm(s,e,t,n,i,a,r){const o=new ve(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function _(E){let T=!1;const v=g(E);v===null?p(o,l):v&&v.isColor&&(p(v,1),T=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,T){const v=g(T);v&&(v.isCubeTexture||v.mapping===ar)?(u===void 0&&(u=new lt(new vs(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:ds(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xi.copy(T.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(xi)),u.material.toneMapped=je.getTransfer(v.colorSpace)!==st,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new lt(new Gn(2,2),new Tt({name:"BackgroundMaterial",uniforms:ds(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=je.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,T){E.getRGB(ba,Xu(s)),n.buffers.color.setClear(ba.r,ba.g,ba.b,T,r)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m}}function Xm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(M,k,G,L,U){let V=!1;const N=h(L,G,k);a!==N&&(a=N,c(a.object)),V=f(M,L,G,U),V&&g(M,L,G,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(M,k,G,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,k,G){const L=G.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let V=U[k.id];V===void 0&&(V={},U[k.id]=V);let N=V[L];return N===void 0&&(N=d(l()),V[L]=N),N}function d(M){const k=[],G=[],L=[];for(let U=0;U<t;U++)k[U]=0,G[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,k,G,L){const U=a.attributes,V=k.attributes;let N=0;const J=G.getAttributes();for(const z in J)if(J[z].location>=0){const te=U[z];let se=V[z];if(se===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;N++}return a.attributesNum!==N||a.index!==L}function g(M,k,G,L){const U={},V=k.attributes;let N=0;const J=G.getAttributes();for(const z in J)if(J[z].location>=0){let te=V[z];te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),U[z]=se,N++}a.attributes=U,a.attributesNum=N,a.index=L}function _(){const M=a.newAttributes;for(let k=0,G=M.length;k<G;k++)M[k]=0}function m(M){p(M,0)}function p(M,k){const G=a.newAttributes,L=a.enabledAttributes,U=a.attributeDivisors;G[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),U[M]!==k&&(s.vertexAttribDivisor(M,k),U[M]=k)}function E(){const M=a.newAttributes,k=a.enabledAttributes;for(let G=0,L=k.length;G<L;G++)k[G]!==M[G]&&(s.disableVertexAttribArray(G),k[G]=0)}function T(M,k,G,L,U,V,N){N===!0?s.vertexAttribIPointer(M,k,G,U,V):s.vertexAttribPointer(M,k,G,L,U,V)}function v(M,k,G,L){_();const U=L.attributes,V=G.getAttributes(),N=k.defaultAttributeValues;for(const J in V){const z=V[J];if(z.location>=0){let H=U[J];if(H===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const te=H.normalized,se=H.itemSize,ye=e.get(H);if(ye===void 0)continue;const Ue=ye.buffer,q=ye.type,ie=ye.bytesPerElement,de=q===s.INT||q===s.UNSIGNED_INT||H.gpuType===sl;if(H.isInterleavedBufferAttribute){const le=H.data,Se=le.stride,ke=H.offset;if(le.isInstancedInterleavedBuffer){for(let j=0;j<z.locationSize;j++)p(z.location+j,le.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let j=0;j<z.locationSize;j++)T(z.location+j,se/z.locationSize,q,te,Se*ie,(ke+se/z.locationSize*j)*ie,de)}else{if(H.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)p(z.location+le,H.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<z.locationSize;le++)m(z.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let le=0;le<z.locationSize;le++)T(z.location+le,se/z.locationSize,q,te,se*ie,se/z.locationSize*le*ie,de)}}else if(N!==void 0){const te=N[J];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(z.location,te);break;case 3:s.vertexAttrib3fv(z.location,te);break;case 4:s.vertexAttrib4fv(z.location,te);break;default:s.vertexAttrib1fv(z.location,te)}}}}E()}function P(){I();for(const M in n){const k=n[M];for(const G in k){const L=k[G];for(const U in L)u(L[U].object),delete L[U];delete k[G]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const k=n[M.id];for(const G in k){const L=k[G];for(const U in L)u(L[U].object),delete L[U];delete k[G]}delete n[M.id]}function A(M){for(const k in n){const G=n[k];if(G[M.id]===void 0)continue;const L=G[M.id];for(const U in L)u(L[U].object),delete L[U];delete G[M.id]}}function I(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function jm(s,e,t){let n;function i(c){n=c}function a(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qm(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==qt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!I)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:P,maxSamples:R}}function Ym(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new Mi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||a&&!m)a?u(null):c();else{const E=a?0:n,T=E*4;let v=p.clippingState||null;l.value=v,v=u(g,d,T,f);for(let P=0;P!==T;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==_;++T,v+=4)r.copy(h[T]).applyMatrix4(E,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Km(s){let e=new WeakMap;function t(r,o){return o===xo?r.mapping=os:o===vo&&(r.mapping=ls),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===xo||o===vo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new rf(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ta extends ju{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,uc=[.125,.215,.35,.446,.526,.582],Ti=20,Nr=new ta,hc=new ve;let Fr=null,Br=0,Or=0,zr=!1;const bi=(1+Math.sqrt(5))/2,Vi=1/bi,dc=[new w(-bi,Vi,0),new w(bi,Vi,0),new w(-Vi,0,bi),new w(Vi,0,bi),new w(0,bi,-Vi),new w(0,bi,Vi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Br,Or),this._renderer.xr.enabled=zr,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:vn,format:qt,colorSpace:Dt,depthBuffer:!1},i=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(a)),this._blurMaterial=Zm(a,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hc),u.toneMapping=ri,u.autoClear=!1;const f=new tn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new lt(new vs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(hc),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const T=this._cubeSize;Sa(i,E*T,p>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===os||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=dc[(i-a-1)%dc.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let E=0;for(let A=0;A<Ti;++A){const I=A/_,S=Math.exp(-I*I/2);p.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const v=this._sizeLods[i],P=3*v*(i>T-Ji?i-T+Ji:0),R=4*(this._cubeSize-v);Sa(t,P,R,3*v,2*v),l.setRenderTarget(t),l.render(h,Nr)}}function $m(s){const e=[],t=[],n=[];let i=s;const a=s-Ji+1+uc.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-Ji?l=uc[r-s+Ji-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),T=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,I=R>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(S,_*g*R),T.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const P=new gt;P.setAttribute("position",new nt(E,_)),P.setAttribute("uv",new nt(T,m)),P.setAttribute("faceIndex",new nt(v,p)),e.push(P),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pc(s,e,t){const n=new Yt(s,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Zm(s,e,t){const n=new Float32Array(Ti),i=new w(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function mc(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function gc(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function Jm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===vo,u=l===os||l===ls;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new fc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new fc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Qm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eg(s,e,t,n){const i={},a=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let T=0,v=E.length;T<v;T+=3){const P=E[T+0],R=E[T+1],A=E[T+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){const P=T+0,R=T+1,A=T+2;d.push(P,R,R,A,A,P)}}else return;const m=new(Bu(d)?Wu:Gu)(d,1);m.version=_;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tg(s,e,t){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(n,f,a,d*r),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,a,d*r,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ng(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ig(s,e,t){const n=new WeakMap,i=new Ze;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let v=o.attributes.position.count*T,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*P*4*h),A=new zu(R,v,P,h);A.type=fn,A.needsUpdate=!0;const I=T*4;for(let M=0;M<h;M++){const k=m[M],G=p[M],L=E[M],U=v*P*4*M;for(let V=0;V<k.count;V++){const N=V*I;f===!0&&(i.fromBufferAttribute(k,V),R[U+N+0]=i.x,R[U+N+1]=i.y,R[U+N+2]=i.z,R[U+N+3]=0),g===!0&&(i.fromBufferAttribute(G,V),R[U+N+4]=i.x,R[U+N+5]=i.y,R[U+N+6]=i.z,R[U+N+7]=0),_===!0&&(i.fromBufferAttribute(L,V),R[U+N+8]=i.x,R[U+N+9]=i.y,R[U+N+10]=i.z,R[U+N+11]=L.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Ee(v,P)},n.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function sg(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Ku extends Et{constructor(e,t,n,i,a,r,o,l,c,u=ts){if(u!==ts&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=Ei),n===void 0&&u===us&&(n=cs),super(null,i,a,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $u=new Et,_c=new Ku(1,1),Zu=new zu,Ju=new Wd,Qu=new qu,xc=[],vc=[],yc=new Float32Array(16),Mc=new Float32Array(9),bc=new Float32Array(4);function ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=xc[i];if(a===void 0&&(a=new Float32Array(i),xc[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cr(s,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ag(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function cg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;bc.set(n),s.uniformMatrix2fv(this.addr,!1,bc),At(t,n)}}function ug(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Mc.set(n),s.uniformMatrix3fv(this.addr,!1,Mc),At(t,n)}}function hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;yc.set(n),s.uniformMatrix4fv(this.addr,!1,yc),At(t,n)}}function dg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(_c.compareFunction=Fu,a=_c):a=$u,t.setTexture2D(e||a,i)}function Mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qu,i)}function Sg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function Tg(s){switch(s){case 5126:return ag;case 35664:return rg;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Eg(s,e){s.uniform1fv(this.addr,e)}function wg(s,e){const t=ys(e,this.size,2);s.uniform2fv(this.addr,t)}function Ag(s,e){const t=ys(e,this.size,3);s.uniform3fv(this.addr,t)}function Rg(s,e){const t=ys(e,this.size,4);s.uniform4fv(this.addr,t)}function Cg(s,e){const t=ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Pg(s,e){const t=ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lg(s,e){const t=ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kg(s,e){s.uniform1iv(this.addr,e)}function Ig(s,e){s.uniform2iv(this.addr,e)}function Dg(s,e){s.uniform3iv(this.addr,e)}function Ug(s,e){s.uniform4iv(this.addr,e)}function Ng(s,e){s.uniform1uiv(this.addr,e)}function Fg(s,e){s.uniform2uiv(this.addr,e)}function Bg(s,e){s.uniform3uiv(this.addr,e)}function Og(s,e){s.uniform4uiv(this.addr,e)}function zg(s,e,t){const n=this.cache,i=e.length,a=cr(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||$u,a[r])}function Hg(s,e,t){const n=this.cache,i=e.length,a=cr(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ju,a[r])}function Vg(s,e,t){const n=this.cache,i=e.length,a=cr(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Qu,a[r])}function Gg(s,e,t){const n=this.cache,i=e.length,a=cr(t,i);wt(n,a)||(s.uniform1iv(this.addr,a),At(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Zu,a[r])}function Wg(s){switch(s){case 5126:return Eg;case 35664:return wg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return kg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Bg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Sc(s,e){s.seq.push(e),s.map[e.id]=e}function Yg(s,e,t){const n=s.name,i=n.length;for(Hr.lastIndex=0;;){const a=Hr.exec(n),r=Hr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Sc(t,c===void 0?new Xg(o,s,e):new jg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new qg(o),Sc(t,h)),t=h}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Yg(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Tc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Kg=37297;let $g=0;function Zg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Ec=new Ge;function Jg(s){je._getMatrix(Ec,je.workingColorSpace,s);const e=`mat3( ${Ec.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case or:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Zg(s.getShaderSource(e),r)}else return i}function Qg(s,e){const t=Jg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e0(s,e){let t;switch(e){case vu:t="Linear";break;case yu:t="Reinhard";break;case Mu:t="Cineon";break;case il:t="ACESFilmic";break;case bu:t="AgX";break;case Su:t="Neutral";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ta=new w;function t0(){je.getLuminanceCoefficients(Ta);const s=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function i0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Vs(s){return s!==""}function Ac(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(a0,o0)}const r0=new Map;function o0(s,e){let t=Ve[e];if(t===void 0){const n=r0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(s){return s.replace(l0,c0)}function c0(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Pc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function u0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function h0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function f0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sr:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function p0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m0(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=u0(t),c=h0(t),u=d0(t),h=f0(t),d=p0(t),f=n0(t),g=i0(a),_=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ri?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),r=Yo(r),r=Ac(r,t),r=Rc(r,t),o=Yo(o),o=Ac(o,t),o=Rc(o,t),r=Cc(r),o=Cc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+r,v=E+p+o,P=Tc(i,i.VERTEX_SHADER,T),R=Tc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(k){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(P).trim(),U=i.getShaderInfoLog(R).trim();let V=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,R);else{const J=wc(i,P,"vertex"),z=wc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+J+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||U==="")&&(N=!1);N&&(k.diagnostics={runnable:V,programLog:G,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(P),i.deleteShader(R),I=new Wa(i,_),S=s0(i,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x0(e),t.set(e,n)),n}}class x0{constructor(e){this.id=g0++,this.code=e,this.usedTimes=0}}function v0(s,e,t,n,i,a,r){const o=new Hu,l=new _0,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,k,G,L){const U=G.fog,V=L.geometry,N=S.isMeshStandardMaterial?G.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),z=J&&J.mapping===ar?J.image.height:null,H=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=te!==void 0?te.length:0;let ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let Ue,q,ie,de;if(H){const it=xn[H];Ue=it.vertexShader,q=it.fragmentShader}else Ue=S.vertexShader,q=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const le=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,j=L.isBatchedMesh===!0,Q=!!S.map,ee=!!S.matcap,re=!!J,C=!!S.aoMap,Fe=!!S.lightMap,Ce=!!S.bumpMap,Ie=!!S.normalMap,be=!!S.displacementMap,Xe=!!S.emissiveMap,ge=!!S.metalnessMap,y=!!S.roughnessMap,x=S.anisotropy>0,F=S.clearcoat>0,K=S.dispersion>0,Z=S.iridescence>0,Y=S.sheen>0,Me=S.transmission>0,ue=x&&!!S.anisotropyMap,_e=F&&!!S.clearcoatMap,Ne=F&&!!S.clearcoatNormalMap,ae=F&&!!S.clearcoatRoughnessMap,xe=Z&&!!S.iridescenceMap,Le=Z&&!!S.iridescenceThicknessMap,De=Y&&!!S.sheenColorMap,Te=Y&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,We=!!S.specularColorMap,ut=!!S.specularIntensityMap,D=Me&&!!S.transmissionMap,he=Me&&!!S.thicknessMap,$=!!S.gradientMap,ne=!!S.alphaMap,me=S.alphaTest>0,fe=!!S.alphaHash,ze=!!S.extensions;let _t=ri;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(_t=s.toneMapping);const Lt={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:Ue,fragmentShader:q,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:j,batchingColor:j&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Dt,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:ee,envMap:re,envMapMode:re&&J.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:Fe,bumpMap:Ce,normalMap:Ie,displacementMap:d&&be,emissiveMap:Xe,normalMapObjectSpace:Ie&&S.normalMapType===hd,normalMapTangentSpace:Ie&&S.normalMapType===rr,metalnessMap:ge,roughnessMap:y,anisotropy:x,anisotropyMap:ue,clearcoat:F,clearcoatMap:_e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ae,dispersion:K,iridescence:Z,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:Y,sheenColorMap:De,sheenRoughnessMap:Te,specularMap:Ke,specularColorMap:We,specularIntensityMap:ut,transmission:Me,transmissionMap:D,thicknessMap:he,gradientMap:$,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:fe,combine:S.combine,mapUv:Q&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:Fe&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:Ie&&_(S.normalMap.channel),displacementMapUv:be&&_(S.displacementMap.channel),emissiveMapUv:Xe&&_(S.emissiveMap.channel),metalnessMapUv:ge&&_(S.metalnessMap.channel),roughnessMapUv:y&&_(S.roughnessMap.channel),anisotropyMapUv:ue&&_(S.anisotropyMap.channel),clearcoatMapUv:_e&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(S.sheenRoughnessMap.channel),specularMapUv:Ke&&_(S.specularMap.channel),specularColorMapUv:We&&_(S.specularColorMap.channel),specularIntensityMapUv:ut&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:he&&_(S.thicknessMap.channel),alphaMapUv:ne&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ie||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Q||ne),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:Xe&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===St,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||j)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(E(M,S),T(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let k;if(M){const G=xn[M];k=fs.clone(G.uniforms)}else k=S.uniforms;return k}function P(S,M){let k;for(let G=0,L=u.length;G<L;G++){const U=u[G];if(U.cacheKey===M){k=U,++k.usedTimes;break}}return k===void 0&&(k=new m0(s,M,S,a),u.push(k)),k}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:I}}function y0(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function M0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kc(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||M0),n.length>1&&n.sort(d||Lc),i.length>1&&i.sort(d||Lc)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:u,sort:c}}function b0(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new kc,s.set(n,[r])):i>=a.length?(r=new kc,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function S0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ve};break;case"SpotLight":t={position:new w,direction:new w,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function T0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let E0=0;function w0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A0(s){const e=new S0,t=T0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const i=new w,a=new Be,r=new Be;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,T=0,v=0,P=0,R=0,A=0;c.sort(w0);for(let S=0,M=c.length;S<M;S++){const k=c[S],G=k.color,L=k.intensity,U=k.distance,V=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=G.r*L,h+=G.g*L,d+=G.b*L;else if(k.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(k.sh.coefficients[N],L);A++}else if(k.isDirectionalLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,z=t.get(k);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=k.shadow.matrix,E++}n.directional[f]=N,f++}else if(k.isSpotLight){const N=e.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(G).multiplyScalar(L),N.distance=U,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,n.spot[_]=N;const J=k.shadow;if(k.map&&(n.spotLightMap[P]=k.map,P++,J.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,k.castShadow){const z=t.get(k);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=V,v++}_++}else if(k.isRectAreaLight){const N=e.get(k);N.color.copy(G).multiplyScalar(L),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=N,m++}else if(k.isPointLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),N.distance=k.distance,N.decay=k.decay,k.castShadow){const J=k.shadow,z=t.get(k);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=k.shadow.matrix,T++}n.point[g]=N,g++}else if(k.isHemisphereLight){const N=e.get(k);N.skyColor.copy(k.color).multiplyScalar(L),N.groundColor.copy(k.groundColor).multiplyScalar(L),n.hemi[p]=N,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=A,n.version=E0++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(T.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(T.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(T.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ic(s){const e=new A0(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function R0(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new Ic(s),e.set(i,[o])):a>=r.length?(o=new Ic(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class eh extends Kt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C0 extends Kt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(s,e,t){let n=new fl;const i=new Ee,a=new Ee,r=new Ze,o=new eh({depthPacking:Nu}),l=new C0,c={},u=t.maxTextureSize,h={[zn]:Ht,[Ht]:zn,[St]:St},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:P0,fragmentShader:L0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new gt;g.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let p=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Nn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=p!==kn&&this.type===kn,U=p===kn&&this.type!==kn;for(let V=0,N=R.length;V<N;V++){const J=R[V],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const H=z.getFrameExtents();if(i.multiply(H),a.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/H.x),i.x=a.x*H.x,z.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/H.y),i.y=a.y*H.y,z.mapSize.y=a.y)),z.map===null||L===!0||U===!0){const se=this.type!==kn?{minFilter:Vt,magFilter:Vt}:{};z.map!==null&&z.map.dispose(),z.map=new Yt(i.x,i.y,se),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const te=z.getViewportCount();for(let se=0;se<te;se++){const ye=z.getViewport(se);r.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),G.viewport(r),z.updateMatrices(J,se),n=z.getFrustum(),v(A,I,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===kn&&E(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,k)};function E(R,A){const I=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yt(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,I,f,_,null)}function T(R,A,I,S){let M=null;const k=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)M=k;else if(M=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,L=A.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let V=U[L];V===void 0&&(V=M.clone(),U[L]=V,A.addEventListener("dispose",P)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,S===kn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=I}return M}function v(R,A,I,S,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const L=e.update(R),U=R.material;if(Array.isArray(U)){const V=L.groups;for(let N=0,J=V.length;N<J;N++){const z=V[N],H=U[z.materialIndex];if(H&&H.visible){const te=T(R,H,S,M);R.onBeforeShadow(s,R,A,I,L,te,z),s.renderBufferDirect(I,null,L,te,R,z),R.onAfterShadow(s,R,A,I,L,te,z)}}}else if(U.visible){const V=T(R,U,S,M);R.onBeforeShadow(s,R,A,I,L,V,null),s.renderBufferDirect(I,null,L,V,R,null),R.onAfterShadow(s,R,A,I,L,V,null)}}const G=R.children;for(let L=0,U=G.length;L<U;L++)v(G[L],A,I,S,M)}function P(R){R.target.removeEventListener("dispose",P);for(const I in c){const S=c[I],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const I0={[uo]:ho,[fo]:go,[po]:_o,[rs]:mo,[ho]:uo,[go]:fo,[_o]:po,[mo]:rs};function D0(s,e){function t(){let D=!1;const he=new Ze;let $=null;const ne=new Ze(0,0,0,0);return{setMask:function(me){$!==me&&!D&&(s.colorMask(me,me,me,me),$=me)},setLocked:function(me){D=me},setClear:function(me,fe,ze,_t,Lt){Lt===!0&&(me*=_t,fe*=_t,ze*=_t),he.set(me,fe,ze,_t),ne.equals(he)===!1&&(s.clearColor(me,fe,ze,_t),ne.copy(he))},reset:function(){D=!1,$=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,$=null,ne=null,me=null;return{setReversed:function(fe){if(he!==fe){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const _t=me;me=null,this.setClear(_t)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?le(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(fe){$!==fe&&!D&&(s.depthMask(fe),$=fe)},setFunc:function(fe){if(he&&(fe=I0[fe]),ne!==fe){switch(fe){case uo:s.depthFunc(s.NEVER);break;case ho:s.depthFunc(s.ALWAYS);break;case fo:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case po:s.depthFunc(s.EQUAL);break;case mo:s.depthFunc(s.GEQUAL);break;case go:s.depthFunc(s.GREATER);break;case _o:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=fe}},setLocked:function(fe){D=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){D=!1,$=null,ne=null,me=null,he=!1}}}function i(){let D=!1,he=null,$=null,ne=null,me=null,fe=null,ze=null,_t=null,Lt=null;return{setTest:function(it){D||(it?le(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(it){he!==it&&!D&&(s.stencilMask(it),he=it)},setFunc:function(it,sn,Tn){($!==it||ne!==sn||me!==Tn)&&(s.stencilFunc(it,sn,Tn),$=it,ne=sn,me=Tn)},setOp:function(it,sn,Tn){(fe!==it||ze!==sn||_t!==Tn)&&(s.stencilOp(it,sn,Tn),fe=it,ze=sn,_t=Tn)},setLocked:function(it){D=it},setClear:function(it){Lt!==it&&(s.clearStencil(it),Lt=it)},reset:function(){D=!1,he=null,$=null,ne=null,me=null,fe=null,ze=null,_t=null,Lt=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,P=null,R=null,A=new ve(0,0,0),I=0,S=!1,M=null,k=null,G=null,L=null,U=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,J=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=J>=2);let H=null,te={};const se=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ue=new Ze().fromArray(se),q=new Ze().fromArray(ye);function ie(D,he,$,ne){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(D,fe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<$;ze++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(he+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const de={};de[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),le(s.DEPTH_TEST),r.setFunc(rs),Ce(!1),Ie(Fl),le(s.CULL_FACE),C(Nn);function le(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function ke(D,he){return h[D]!==he?(s.bindFramebuffer(D,he),h[D]=he,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function j(D,he){let $=f,ne=!1;if(D){$=d.get(he),$===void 0&&($=[],d.set(he,$));const me=D.textures;if($.length!==me.length||$[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ze=me.length;fe<ze;fe++)$[fe]=s.COLOR_ATTACHMENT0+fe;$.length=me.length,ne=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ne=!0);ne&&s.drawBuffers($)}function Q(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const ee={[Si]:s.FUNC_ADD,[Bh]:s.FUNC_SUBTRACT,[Oh]:s.FUNC_REVERSE_SUBTRACT};ee[zh]=s.MIN,ee[Hh]=s.MAX;const re={[Vh]:s.ZERO,[Gh]:s.ONE,[Wh]:s.SRC_COLOR,[lo]:s.SRC_ALPHA,[$h]:s.SRC_ALPHA_SATURATE,[Yh]:s.DST_COLOR,[jh]:s.DST_ALPHA,[Xh]:s.ONE_MINUS_SRC_COLOR,[co]:s.ONE_MINUS_SRC_ALPHA,[Kh]:s.ONE_MINUS_DST_COLOR,[qh]:s.ONE_MINUS_DST_ALPHA,[Zh]:s.CONSTANT_COLOR,[Jh]:s.ONE_MINUS_CONSTANT_COLOR,[Qh]:s.CONSTANT_ALPHA,[ed]:s.ONE_MINUS_CONSTANT_ALPHA};function C(D,he,$,ne,me,fe,ze,_t,Lt,it){if(D===Nn){_===!0&&(Se(s.BLEND),_=!1);return}if(_===!1&&(le(s.BLEND),_=!0),D!==Fh){if(D!==m||it!==S){if((p!==Si||v!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,v=Si),it)switch(D){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,T=null,P=null,R=null,A.set(0,0,0),I=0,m=D,S=it}return}me=me||he,fe=fe||$,ze=ze||ne,(he!==p||me!==v)&&(s.blendEquationSeparate(ee[he],ee[me]),p=he,v=me),($!==E||ne!==T||fe!==P||ze!==R)&&(s.blendFuncSeparate(re[$],re[ne],re[fe],re[ze]),E=$,T=ne,P=fe,R=ze),(_t.equals(A)===!1||Lt!==I)&&(s.blendColor(_t.r,_t.g,_t.b,Lt),A.copy(_t),I=Lt),m=D,S=!1}function Fe(D,he){D.side===St?Se(s.CULL_FACE):le(s.CULL_FACE);let $=D.side===Ht;he&&($=!$),Ce($),D.blending===es&&D.transparent===!1?C(Nn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const ne=D.stencilWrite;o.setTest(ne),ne&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Ie(D){D!==Uh?(le(s.CULL_FACE),D!==k&&(D===Fl?s.cullFace(s.BACK):D===Nh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),k=D}function be(D){D!==G&&(N&&s.lineWidth(D),G=D)}function Xe(D,he,$){D?(le(s.POLYGON_OFFSET_FILL),(L!==he||U!==$)&&(s.polygonOffset(he,$),L=he,U=$)):Se(s.POLYGON_OFFSET_FILL)}function ge(D){D?le(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function y(D){D===void 0&&(D=s.TEXTURE0+V-1),H!==D&&(s.activeTexture(D),H=D)}function x(D,he,$){$===void 0&&(H===null?$=s.TEXTURE0+V-1:$=H);let ne=te[$];ne===void 0&&(ne={type:void 0,texture:void 0},te[$]=ne),(ne.type!==D||ne.texture!==he)&&(H!==$&&(s.activeTexture($),H=$),s.bindTexture(D,he||de[D]),ne.type=D,ne.texture=he)}function F(){const D=te[H];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ue.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function Te(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ke(D,he){let $=c.get(he);$===void 0&&($=new WeakMap,c.set(he,$));let ne=$.get(D);ne===void 0&&(ne=s.getUniformBlockIndex(he,D.name),$.set(D,ne))}function We(D,he){const ne=c.get(he).get(D);l.get(he)!==ne&&(s.uniformBlockBinding(he,ne,D.__bindingPointIndex),l.set(he,ne))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},H=null,te={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,P=null,R=null,A=new ve(0,0,0),I=0,S=!1,M=null,k=null,G=null,L=null,U=null,Ue.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:le,disable:Se,bindFramebuffer:ke,drawBuffers:j,useProgram:Q,setBlending:C,setMaterial:Fe,setFlipSided:Ce,setCullFace:Ie,setLineWidth:be,setPolygonOffset:Xe,setScissorTest:ge,activeTexture:y,bindTexture:x,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:xe,texImage3D:Le,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:Ne,texStorage3D:ae,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:De,viewport:Te,reset:ut}}function Dc(s,e,t,n){const i=U0(n);switch(t){case Cu:return s*e;case Lu:return s*e;case ku:return s*e*2;case ol:return s*e/i.components*i.byteLength;case ll:return s*e/i.components*i.byteLength;case Iu:return s*e*2/i.components*i.byteLength;case cl:return s*e*2/i.components*i.byteLength;case Pu:return s*e*3/i.components*i.byteLength;case qt:return s*e*4/i.components*i.byteLength;case ul:return s*e*4/i.components*i.byteLength;case Oa:case za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(s,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(s,8)*Math.max(e,8)/2;case To:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Du:case Go:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U0(s){switch(s){case Vn:case wu:return{byteLength:1,components:1};case Ks:case Au:case vn:return{byteLength:2,components:1};case al:case rl:return{byteLength:2,components:4};case Ei:case sl:case fn:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N0(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return f?new OffscreenCanvas(y,x):Js("canvas")}function _(y,x,F){let K=1;const Z=ge(y);if((Z.width>F||Z.height>F)&&(K=F/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(K*Z.width),Me=Math.floor(K*Z.height);h===void 0&&(h=g(Y,Me));const ue=x?g(Y,Me):h;return ue.width=Y,ue.height=Me,ue.getContext("2d").drawImage(y,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Me+")."),ue}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){s.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?s.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(y,x,F,K,Z=!1){if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=x;if(x===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),x===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),x===s.RGBA){const Me=Z?or:je.getTransfer(K);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=Me===st?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(y,x){let F;return y?x===null||x===Ei||x===cs?F=s.DEPTH24_STENCIL8:x===fn?F=s.DEPTH32F_STENCIL8:x===Ks&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ei||x===cs?F=s.DEPTH_COMPONENT24:x===fn?F=s.DEPTH_COMPONENT32F:x===Ks&&(F=s.DEPTH_COMPONENT16),F}function P(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function R(y){const x=y.target;x.removeEventListener("dispose",R),I(x),x.isVideoTexture&&u.delete(x)}function A(y){const x=y.target;x.removeEventListener("dispose",A),M(x)}function I(y){const x=n.get(y);if(x.__webglInit===void 0)return;const F=y.source,K=d.get(F);if(K){const Z=K[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(y),Object.keys(K).length===0&&d.delete(F)}n.remove(y)}function S(y){const x=n.get(y);s.deleteTexture(x.__webglTexture);const F=y.source,K=d.get(F);delete K[x.__cacheKey],r.memory.textures--}function M(y){const x=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Z=0;Z<x.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=y.textures;for(let K=0,Z=F.length;K<Z;K++){const Y=n.get(F[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(F[K])}n.remove(y)}let k=0;function G(){k=0}function L(){const y=k;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),k+=1,y}function U(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function V(y,x){const F=n.get(y);if(y.isVideoTexture&&be(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,y,x);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function N(y,x){const F=n.get(y);if(y.version>0&&F.__version!==y.version){q(F,y,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function J(y,x){const F=n.get(y);if(y.version>0&&F.__version!==y.version){q(F,y,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function z(y,x){const F=n.get(y);if(y.version>0&&F.__version!==y.version){ie(F,y,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const H={[Hn]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},te={[Vt]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Ba]:s.LINEAR_MIPMAP_NEAREST,[dn]:s.LINEAR_MIPMAP_LINEAR},se={[dd]:s.NEVER,[xd]:s.ALWAYS,[fd]:s.LESS,[Fu]:s.LEQUAL,[pd]:s.EQUAL,[_d]:s.GEQUAL,[md]:s.GREATER,[gd]:s.NOTEQUAL};function ye(y,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ot||x.magFilter===Ba||x.magFilter===zs||x.magFilter===dn||x.minFilter===Ot||x.minFilter===Ba||x.minFilter===zs||x.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,H[x.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,H[x.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,H[x.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,te[x.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==zs&&x.minFilter!==dn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(y,x){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=U(x);if(Y!==y.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,F=!0),Z[Y].usedTimes++;const Me=Z[y.__cacheKey];Me!==void 0&&(Z[y.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),y.__cacheKey=Y,y.__webglTexture=Z[Y].texture}return F}function q(y,x,F){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Ue(y,x),Y=x.source;t.bindTexture(K,y.__webglTexture,s.TEXTURE0+F);const Me=n.get(Y);if(Y.version!==Me.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const ue=je.getPrimaries(je.workingColorSpace),_e=x.colorSpace===ti?null:je.getPrimaries(x.colorSpace),Ne=x.colorSpace===ti||ue===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=_(x.image,!1,i.maxTextureSize);ae=Xe(x,ae);const xe=a.convert(x.format,x.colorSpace),Le=a.convert(x.type);let De=T(x.internalFormat,xe,Le,x.colorSpace,x.isVideoTexture);ye(K,x);let Te;const Ke=x.mipmaps,We=x.isVideoTexture!==!0,ut=Me.__version===void 0||Z===!0,D=Y.dataReady,he=P(x,ae);if(x.isDepthTexture)De=v(x.format===us,x.type),ut&&(We?t.texStorage2D(s.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,De,ae.width,ae.height,0,xe,Le,null));else if(x.isDataTexture)if(Ke.length>0){We&&ut&&t.texStorage2D(s.TEXTURE_2D,he,De,Ke[0].width,Ke[0].height);for(let $=0,ne=Ke.length;$<ne;$++)Te=Ke[$],We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,xe,Le,Te.data):t.texImage2D(s.TEXTURE_2D,$,De,Te.width,Te.height,0,xe,Le,Te.data);x.generateMipmaps=!1}else We?(ut&&t.texStorage2D(s.TEXTURE_2D,he,De,ae.width,ae.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,Le,ae.data)):t.texImage2D(s.TEXTURE_2D,0,De,ae.width,ae.height,0,xe,Le,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,De,Ke[0].width,Ke[0].height,ae.depth);for(let $=0,ne=Ke.length;$<ne;$++)if(Te=Ke[$],x.format!==qt)if(xe!==null)if(We){if(D)if(x.layerUpdates.size>0){const me=Dc(Te.width,Te.height,x.format,x.type);for(const fe of x.layerUpdates){const ze=Te.data.subarray(fe*me/Te.data.BYTES_PER_ELEMENT,(fe+1)*me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,fe,Te.width,Te.height,1,xe,ze)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,ae.depth,xe,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,De,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,ae.depth,xe,Le,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,De,Te.width,Te.height,ae.depth,0,xe,Le,Te.data)}else{We&&ut&&t.texStorage2D(s.TEXTURE_2D,he,De,Ke[0].width,Ke[0].height);for(let $=0,ne=Ke.length;$<ne;$++)Te=Ke[$],x.format!==qt?xe!==null?We?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,$,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,xe,Le,Te.data):t.texImage2D(s.TEXTURE_2D,$,De,Te.width,Te.height,0,xe,Le,Te.data)}else if(x.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,De,ae.width,ae.height,ae.depth),D)if(x.layerUpdates.size>0){const $=Dc(ae.width,ae.height,x.format,x.type);for(const ne of x.layerUpdates){const me=ae.data.subarray(ne*$/ae.data.BYTES_PER_ELEMENT,(ne+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,xe,Le,me)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,Le,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,xe,Le,ae.data);else if(x.isData3DTexture)We?(ut&&t.texStorage3D(s.TEXTURE_3D,he,De,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,Le,ae.data)):t.texImage3D(s.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,xe,Le,ae.data);else if(x.isFramebufferTexture){if(ut)if(We)t.texStorage2D(s.TEXTURE_2D,he,De,ae.width,ae.height);else{let $=ae.width,ne=ae.height;for(let me=0;me<he;me++)t.texImage2D(s.TEXTURE_2D,me,De,$,ne,0,xe,Le,null),$>>=1,ne>>=1}}else if(Ke.length>0){if(We&&ut){const $=ge(Ke[0]);t.texStorage2D(s.TEXTURE_2D,he,De,$.width,$.height)}for(let $=0,ne=Ke.length;$<ne;$++)Te=Ke[$],We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,xe,Le,Te):t.texImage2D(s.TEXTURE_2D,$,De,xe,Le,Te);x.generateMipmaps=!1}else if(We){if(ut){const $=ge(ae);t.texStorage2D(s.TEXTURE_2D,he,De,$.width,$.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Le,ae)}else t.texImage2D(s.TEXTURE_2D,0,De,xe,Le,ae);m(x)&&p(K),Me.__version=Y.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ie(y,x,F){if(x.image.length!==6)return;const K=Ue(y,x),Z=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+F);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(s.TEXTURE0+F);const Me=je.getPrimaries(je.workingColorSpace),ue=x.colorSpace===ti?null:je.getPrimaries(x.colorSpace),_e=x.colorSpace===ti||Me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!Ne&&!ae?xe[ne]=_(x.image[ne],!0,i.maxCubemapSize):xe[ne]=ae?x.image[ne].image:x.image[ne],xe[ne]=Xe(x,xe[ne]);const Le=xe[0],De=a.convert(x.format,x.colorSpace),Te=a.convert(x.type),Ke=T(x.internalFormat,De,Te,x.colorSpace),We=x.isVideoTexture!==!0,ut=Y.__version===void 0||K===!0,D=Z.dataReady;let he=P(x,Le);ye(s.TEXTURE_CUBE_MAP,x);let $;if(Ne){We&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ke,Le.width,Le.height);for(let ne=0;ne<6;ne++){$=xe[ne].mipmaps;for(let me=0;me<$.length;me++){const fe=$[me];x.format!==qt?De!==null?We?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,Ke,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,0,0,fe.width,fe.height,De,Te,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me,Ke,fe.width,fe.height,0,De,Te,fe.data)}}}else{if($=x.mipmaps,We&&ut){$.length>0&&he++;const ne=ge(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,De,Te,xe[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,xe[ne].width,xe[ne].height,0,De,Te,xe[ne].data);for(let me=0;me<$.length;me++){const ze=$[me].image[ne].image;We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,ze.width,ze.height,De,Te,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,Ke,ze.width,ze.height,0,De,Te,ze.data)}}else{We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,Te,xe[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,De,Te,xe[ne]);for(let me=0;me<$.length;me++){const fe=$[me];We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,0,0,De,Te,fe.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me+1,Ke,De,Te,fe.image[ne])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function de(y,x,F,K,Z,Y){const Me=a.convert(F.format,F.colorSpace),ue=a.convert(F.type),_e=T(F.internalFormat,Me,ue,F.colorSpace),Ne=n.get(x),ae=n.get(F);if(ae.__renderTarget=x,!Ne.__hasExternalTextures){const xe=Math.max(1,x.width>>Y),Le=Math.max(1,x.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,_e,xe,Le,x.depth,0,Me,ue,null):t.texImage2D(Z,Y,_e,xe,Le,0,Me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,y),Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,ae.__webglTexture,0,Ce(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,ae.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(y,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,y),x.depthBuffer){const K=x.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(x.stencilBuffer,Z),Me=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Ce(x);Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,Y,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,y)}else{const K=x.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],Me=a.convert(Y.format,Y.colorSpace),ue=a.convert(Y.type),_e=T(Y.internalFormat,Me,ue,Y.colorSpace),Ne=Ce(x);F&&Ie(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,_e,x.width,x.height):Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,_e,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,_e,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Z=K.__webglTexture,Y=Ce(x);if(x.depthTexture.format===ts)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===us)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ke(y){const x=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=K}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,y)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=s.createRenderbuffer(),le(x.__webglDepthbuffer[K],y,!1);else{const Z=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),le(x.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function j(y,x,F){const K=n.get(y);x!==void 0&&de(K.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&ke(y)}function Q(y){const x=y.texture,F=n.get(y),K=n.get(x);y.addEventListener("dispose",A);const Z=y.textures,Y=y.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,r.memory.textures++),Y){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let _e=0;_e<x.mipmaps.length;_e++)F.__webglFramebuffer[ue][_e]=s.createFramebuffer()}else F.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)F.__webglFramebuffer[ue]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ue=0,_e=Z.length;ue<_e;ue++){const Ne=n.get(Z[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),r.memory.textures++)}if(y.samples>0&&Ie(y)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const _e=Z[ue];F.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Ne=a.convert(_e.format,_e.colorSpace),ae=a.convert(_e.type),xe=T(_e.internalFormat,Ne,ae,_e.colorSpace,y.isXRRenderTarget===!0),Le=Ce(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,xe,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),le(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ye(s.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)de(F.__webglFramebuffer[ue][_e],y,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else de(F.__webglFramebuffer[ue],y,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,_e=Z.length;ue<_e;ue++){const Ne=Z[ue],ae=n.get(Ne);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),ye(s.TEXTURE_2D,Ne),de(F.__webglFramebuffer,y,Ne,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(Ne)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ue=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),ye(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)de(F.__webglFramebuffer[_e],y,x,s.COLOR_ATTACHMENT0,ue,_e);else de(F.__webglFramebuffer,y,x,s.COLOR_ATTACHMENT0,ue,0);m(x)&&p(ue),t.unbindTexture()}y.depthBuffer&&ke(y)}function ee(y){const x=y.textures;for(let F=0,K=x.length;F<K;F++){const Z=x[F];if(m(Z)){const Y=E(y),Me=n.get(Z).__webglTexture;t.bindTexture(Y,Me),p(Y),t.unbindTexture()}}}const re=[],C=[];function Fe(y){if(y.samples>0){if(Ie(y)===!1){const x=y.textures,F=y.width,K=y.height;let Z=s.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(y),ue=x.length>1;if(ue)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Ne=n.get(x[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,F,K,0,0,F,K,Z,s.NEAREST),l===!0&&(re.length=0,C.length=0,re.push(s.COLOR_ATTACHMENT0+_e),y.depthBuffer&&y.resolveDepthBuffer===!1&&(re.push(Y),C.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Ne=n.get(x[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ce(y){return Math.min(i.maxSamples,y.samples)}function Ie(y){const x=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(y){const x=r.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function Xe(y,x){const F=y.colorSpace,K=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Dt&&F!==ti&&(je.getTransfer(F)===st?(K!==qt||Z!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function ge(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=j,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ie}function F0(s,e){function t(n,i=ti){let a;const r=je.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return s.BYTE;if(n===Au)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===Ei)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===Cu)return s.ALPHA;if(n===Pu)return s.RGB;if(n===qt)return s.RGBA;if(n===Lu)return s.LUMINANCE;if(n===ku)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===ol)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===Iu)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===ul)return s.RGBA_INTEGER;if(n===Oa||n===za||n===Ha||n===Va)if(r===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Mo||n===bo||n===So)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===yo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Eo||n===wo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===To||n===Eo)return r===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===wo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===ko||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Bo||n===Oo||n===zo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ao)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return r===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Ho||n===Vo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ga)return r===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Go||n===Wo||n===Xo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class B0 extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,a=e.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tt({vertexShader:z0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G0 extends wi{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new V0,m=t.getContextAttributes();let p=null,E=null;const T=[],v=[],P=new Ee;let R=null;const A=new Bt;A.viewport=new Ze;const I=new Bt;I.viewport=new Ze;const S=[A,I],M=new B0;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=T[q];return ie===void 0&&(ie=new Vr,T[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=T[q];return ie===void 0&&(ie=new Vr,T[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=T[q];return ie===void 0&&(ie=new Vr,T[q]=ie),ie.getHandSpace()};function L(q){const ie=v.indexOf(q.inputSource);if(ie===-1)return;const de=T[ie];de!==void 0&&(de.update(q.inputSource,q.frame,c||r),de.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",V);for(let q=0;q<T.length;q++){const ie=v[q];ie!==null&&(v[q]=null,T[q].disconnect(ie))}k=null,G=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,E=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Yt(f.framebufferWidth,f.framebufferHeight,{format:qt,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,de=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?us:ts,de=m.stencil?cs:Ei);const Se={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Se),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Yt(d.textureWidth,d.textureHeight,{format:qt,type:Vn,depthTexture:new Ku(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let ie=0;ie<q.removed.length;ie++){const de=q.removed[ie],le=v.indexOf(de);le>=0&&(v[le]=null,T[le].disconnect(de))}for(let ie=0;ie<q.added.length;ie++){const de=q.added[ie];let le=v.indexOf(de);if(le===-1){for(let ke=0;ke<T.length;ke++)if(ke>=v.length){v.push(de),le=ke;break}else if(v[ke]===null){v[ke]=de,le=ke;break}if(le===-1)break}const Se=T[le];Se&&Se.connect(de)}}const N=new w,J=new w;function z(q,ie,de){N.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const le=N.distanceTo(J),Se=ie.projectionMatrix.elements,ke=de.projectionMatrix.elements,j=Se[14]/(Se[10]-1),Q=Se[14]/(Se[10]+1),ee=(Se[9]+1)/Se[5],re=(Se[9]-1)/Se[5],C=(Se[8]-1)/Se[0],Fe=(ke[8]+1)/ke[0],Ce=j*C,Ie=j*Fe,be=le/(-C+Fe),Xe=be*-C;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xe),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ge=j+be,y=Q+be,x=Ce-Xe,F=Ie+(le-Xe),K=ee*Q/y*ge,Z=re*Q/y*ge;q.projectionMatrix.makePerspective(x,F,K,Z,ge,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function H(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,de=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(de=_.depthFar)),M.near=I.near=A.near=ie,M.far=I.far=A.far=de,(k!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,G=M.far),A.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const le=q.parent,Se=M.cameras;H(M,le);for(let ke=0;ke<Se.length;ke++)H(Se[ke],le);Se.length===2?z(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),te(q,M,le)};function te(q,ie,de){de===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let se=null;function ye(q,ie){if(u=ie.getViewerPose(c||r),g=ie,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let le=!1;de.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let ke=0;ke<de.length;ke++){const j=de[ke];let Q=null;if(f!==null)Q=f.getViewport(j);else{const re=h.getViewSubImage(d,j);Q=re.viewport,ke===0&&(e.setRenderTargetTextures(E,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(E))}let ee=S[ke];ee===void 0&&(ee=new Bt,ee.layers.enable(ke),ee.viewport=new Ze,S[ke]=ee),ee.matrix.fromArray(j.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(j.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Q.x,Q.y,Q.width,Q.height),ke===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(ee)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const ke=h.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,i.renderState)}}for(let de=0;de<T.length;de++){const le=v[de],Se=T[de];le!==null&&Se!==void 0&&Se.update(le,ie,c||r)}se&&se(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ue=new Yu;Ue.setAnimationLoop(ye),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const vi=new vt,W0=new Be;function X0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(W0.makeRotationFromEuler(vi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j0(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const v=T.program;n.uniformBlockBinding(E,v)}function c(E,T){let v=i[E.id];v===void 0&&(g(E),v=u(E),i[E.id]=v,E.addEventListener("dispose",m));const P=T.program;n.updateUBOMapping(E,P);const R=e.render.frame;a[E.id]!==R&&(d(E),a[E.id]=R)}function u(E){const T=h();E.__bindingPointIndex=T;const v=s.createBuffer(),P=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,v),v}function h(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],v=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let R=0,A=v.length;R<A;R++){const I=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,M=I.length;S<M;S++){const k=I[S];if(f(k,R,S,P)===!0){const G=k.__offset,L=Array.isArray(k.value)?k.value:[k.value];let U=0;for(let V=0;V<L.length;V++){const N=L[V],J=_(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,G+U,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,T,v,P){const R=E.value,A=T+"_"+v;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const I=P[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(E){const T=E.uniforms;let v=0;const P=16;for(let A=0,I=T.length;A<I;A++){const S=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,k=S.length;M<k;M++){const G=S[M],L=Array.isArray(G.value)?G.value:[G.value];for(let U=0,V=L.length;U<V;U++){const N=L[U],J=_(N),z=v%P,H=z%J.boundary,te=z+H;v+=H,te!==0&&P-te<J.storage&&(v+=P-te),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}const R=v%P;return R>0&&(v+=P-R),E.__size=v,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const v=r.indexOf(T.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete a[T.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);r=[],i={},a={}}return{bind:l,update:c,dispose:p}}class q0{constructor(e={}){const{canvas:t=Nd(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this.toneMapping=ri,this.toneMappingExposure=1;const v=this;let P=!1,R=0,A=0,I=null,S=-1,M=null;const k=new Ze,G=new Ze;let L=null;const U=new ve(0);let V=0,N=t.width,J=t.height,z=1,H=null,te=null;const se=new Ze(0,0,N,J),ye=new Ze(0,0,N,J);let Ue=!1;const q=new fl;let ie=!1,de=!1;const le=new Be,Se=new Be,ke=new w,j=new Ze,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function re(){return I===null?z:1}let C=n;function Fe(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),C===null){const B="webgl2";if(C=Fe(B,b),C===null)throw Fe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ce,Ie,be,Xe,ge,y,x,F,K,Z,Y,Me,ue,_e,Ne,ae,xe,Le,De,Te,Ke,We,ut,D;function he(){Ce=new Qm(C),Ce.init(),We=new F0(C,Ce),Ie=new qm(C,Ce,e,We),be=new D0(C,Ce),Ie.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),Xe=new ng(C),ge=new y0,y=new N0(C,Ce,be,ge,Ie,We,Xe),x=new Km(v),F=new Jm(v),K=new cf(C),ut=new Xm(C,K),Z=new eg(C,K,Xe,ut),Y=new sg(C,Z,K,Xe),De=new ig(C,Ie,y),ae=new Ym(ge),Me=new v0(v,x,F,Ce,Ie,ut,ae),ue=new X0(v,ge),_e=new b0,Ne=new R0(Ce),Le=new Wm(v,x,F,be,Y,f,l),xe=new k0(v,Y,Ie),D=new j0(C,Xe,Ie,be),Te=new jm(C,Ce,Xe),Ke=new tg(C,Ce,Xe),Xe.programs=Me.programs,v.capabilities=Ie,v.extensions=Ce,v.properties=ge,v.renderLists=_e,v.shadowMap=xe,v.state=be,v.info=Xe}he();const $=new G0(v,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(N,J,!1))},this.getSize=function(b){return b.set(N,J)},this.setSize=function(b,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,J=B,t.width=Math.floor(b*z),t.height=Math.floor(B*z),W===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(N*z,J*z).floor()},this.setDrawingBufferSize=function(b,B,W){N=b,J=B,z=W,t.width=Math.floor(b*W),t.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,B,W,X){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,B,W,X),be.viewport(k.copy(se).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,B,W,X){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,B,W,X),be.scissor(G.copy(ye).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){be.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(b=!0,B=!0,W=!0){let X=0;if(b){let O=!1;if(I!==null){const oe=I.texture.format;O=oe===ul||oe===cl||oe===ll}if(O){const oe=I.texture.type,pe=oe===Vn||oe===Ei||oe===Ks||oe===cs||oe===al||oe===rl,we=Le.getClearColor(),Ae=Le.getClearAlpha(),Oe=we.r,He=we.g,Re=we.b;pe?(g[0]=Oe,g[1]=He,g[2]=Re,g[3]=Ae,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Oe,_[1]=He,_[2]=Re,_[3]=Ae,C.clearBufferiv(C.COLOR,0,_))}else X|=C.COLOR_BUFFER_BIT}B&&(X|=C.DEPTH_BUFFER_BIT),W&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),Ne.dispose(),ge.dispose(),x.dispose(),F.dispose(),Y.dispose(),ut.dispose(),D.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",Cl),$.removeEventListener("sessionend",Pl),di.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Xe.autoReset,B=xe.enabled,W=xe.autoUpdate,X=xe.needsUpdate,O=xe.type;he(),Xe.autoReset=b,xe.enabled=B,xe.autoUpdate=W,xe.needsUpdate=X,xe.type=O}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const B=b.target;B.removeEventListener("dispose",ze),_t(B)}function _t(b){Lt(b),ge.remove(b)}function Lt(b){const B=ge.get(b).programs;B!==void 0&&(B.forEach(function(W){Me.releaseProgram(W)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,X,O,oe){B===null&&(B=Q);const pe=O.isMesh&&O.matrixWorld.determinant()<0,we=Ph(b,B,W,X,O);be.setMaterial(X,pe);let Ae=W.index,Oe=1;if(X.wireframe===!0){if(Ae=Z.getWireframeAttribute(W),Ae===void 0)return;Oe=2}const He=W.drawRange,Re=W.attributes.position;let $e=He.start*Oe,ht=(He.start+He.count)*Oe;oe!==null&&($e=Math.max($e,oe.start*Oe),ht=Math.min(ht,(oe.start+oe.count)*Oe)),Ae!==null?($e=Math.max($e,0),ht=Math.min(ht,Ae.count)):Re!=null&&($e=Math.max($e,0),ht=Math.min(ht,Re.count));const dt=ht-$e;if(dt<0||dt===1/0)return;ut.setup(O,X,we,W,Ae);let Gt,Je=Te;if(Ae!==null&&(Gt=K.get(Ae),Je=Ke,Je.setIndex(Gt)),O.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*re()),Je.setMode(C.LINES)):Je.setMode(C.TRIANGLES);else if(O.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*re()),O.isLineSegments?Je.setMode(C.LINES):O.isLineLoop?Je.setMode(C.LINE_LOOP):Je.setMode(C.LINE_STRIP)}else O.isPoints?Je.setMode(C.POINTS):O.isSprite&&Je.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,En=O._multiDrawCounts,Qe=O._multiDrawCount,an=Ae?K.get(Ae).bytesPerElement:1,Ri=ge.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<Qe;Wt++)Ri.setValue(C,"_gl_DrawID",Wt),Je.render(Pe[Wt]/an,En[Wt])}else if(O.isInstancedMesh)Je.renderInstances($e,dt,O.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,En=Math.min(W.instanceCount,Pe);Je.renderInstances($e,dt,En)}else Je.render($e,dt)};function it(b,B,W){b.transparent===!0&&b.side===St&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,sa(b,B,W),b.side=zn,b.needsUpdate=!0,sa(b,B,W),b.side=St):sa(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),p=Ne.get(W),p.init(B),T.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==W&&b.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const we=oe[pe];it(we,W,O),X.add(we)}else it(oe,W,O),X.add(oe)}),T.pop(),p=null,X},this.compileAsync=function(b,B,W=null){const X=this.compile(b,B,W);return new Promise(O=>{function oe(){if(X.forEach(function(pe){ge.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){O(b);return}setTimeout(oe,10)}Ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let sn=null;function Tn(b){sn&&sn(b)}function Cl(){di.stop()}function Pl(){di.start()}const di=new Yu;di.setAnimationLoop(Tn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(b){sn=b,$.setAnimationLoop(b),b===null?di.stop():di.start()},$.addEventListener("sessionstart",Cl),$.addEventListener("sessionend",Pl),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,I),p=Ne.get(b,T.length),p.init(B),T.push(p),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(Se),de=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,de),m=_e.get(b,E.length),m.init(),E.push(m),$.enabled===!0&&$.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&pr(oe,B,-1/0,v.sortObjects)}pr(b,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(H,te),ee=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ee&&Le.addToRenderList(m,b),this.info.render.frame++,ie===!0&&ae.beginShadows();const W=p.state.shadowsArray;xe.render(W,b,B),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){const oe=B.cameras;if(O.length>0)for(let pe=0,we=oe.length;pe<we;pe++){const Ae=oe[pe];kl(X,O,b,Ae)}ee&&Le.render(b);for(let pe=0,we=oe.length;pe<we;pe++){const Ae=oe[pe];Ll(m,b,Ae,Ae.viewport)}}else O.length>0&&kl(X,O,b,B),ee&&Le.render(b),Ll(m,b,B);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(v,b,B),ut.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],ie===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function pr(b,B,W,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){X&&j.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const pe=Y.update(b),we=b.material;we.visible&&m.push(b,pe,we,W,j.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const pe=Y.update(b),we=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),j.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),j.copy(pe.boundingSphere.center)),j.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){const Ae=pe.groups;for(let Oe=0,He=Ae.length;Oe<He;Oe++){const Re=Ae[Oe],$e=we[Re.materialIndex];$e&&$e.visible&&m.push(b,pe,$e,W,j.z,Re)}}else we.visible&&m.push(b,pe,we,W,j.z,null)}}const oe=b.children;for(let pe=0,we=oe.length;pe<we;pe++)pr(oe[pe],B,W,X)}function Ll(b,B,W,X){const O=b.opaque,oe=b.transmissive,pe=b.transparent;p.setupLightsView(W),ie===!0&&ae.setGlobalState(v.clippingPlanes,W),X&&be.viewport(k.copy(X)),O.length>0&&ia(O,B,W),oe.length>0&&ia(oe,B,W),pe.length>0&&ia(pe,B,W),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function kl(b,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Yt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?vn:Vn,minFilter:dn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const oe=p.state.transmissionRenderTarget[X.id],pe=X.viewport||k;oe.setSize(pe.z,pe.w);const we=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(U),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Le.render(W);const Ae=v.toneMapping;v.toneMapping=ri;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ie===!0&&ae.setGlobalState(v.clippingPlanes,X),ia(b,W,X),y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Re=0,$e=B.length;Re<$e;Re++){const ht=B[Re],dt=ht.object,Gt=ht.geometry,Je=ht.material,Pe=ht.group;if(Je.side===St&&dt.layers.test(X.layers)){const En=Je.side;Je.side=Ht,Je.needsUpdate=!0,Il(dt,W,X,Gt,Je,Pe),Je.side=En,Je.needsUpdate=!0,He=!0}}He===!0&&(y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe))}v.setRenderTarget(we),v.setClearColor(U,V),Oe!==void 0&&(X.viewport=Oe),v.toneMapping=Ae}function ia(b,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let O=0,oe=b.length;O<oe;O++){const pe=b[O],we=pe.object,Ae=pe.geometry,Oe=X===null?pe.material:X,He=pe.group;we.layers.test(W.layers)&&Il(we,B,W,Ae,Oe,He)}}function Il(b,B,W,X,O,oe){b.onBeforeRender(v,B,W,X,O,oe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,B,W,X,b,oe),O.transparent===!0&&O.side===St&&O.forceSinglePass===!1?(O.side=Ht,O.needsUpdate=!0,v.renderBufferDirect(W,B,X,O,b,oe),O.side=zn,O.needsUpdate=!0,v.renderBufferDirect(W,B,X,O,b,oe),O.side=St):v.renderBufferDirect(W,B,X,O,b,oe),b.onAfterRender(v,B,W,X,O,oe)}function sa(b,B,W){B.isScene!==!0&&(B=Q);const X=ge.get(b),O=p.state.lights,oe=p.state.shadowsArray,pe=O.state.version,we=Me.getParameters(b,O.state,oe,B,W),Ae=Me.getProgramCacheKey(we);let Oe=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?F:x).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",ze),Oe=new Map,X.programs=Oe);let He=Oe.get(Ae);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===pe)return Ul(b,we),He}else we.uniforms=Me.getUniforms(b),b.onBeforeCompile(we,v),He=Me.acquireProgram(we,Ae),Oe.set(Ae,He),X.uniforms=we.uniforms;const Re=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ae.uniform),Ul(b,we),X.needsLights=kh(b),X.lightsStateVersion=pe,X.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function Dl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Wa.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ul(b,B){const W=ge.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Ph(b,B,W,X,O){B.isScene!==!0&&(B=Q),y.resetTextureUnits();const oe=B.fog,pe=X.isMeshStandardMaterial?B.environment:null,we=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Dt,Ae=(X.isMeshStandardMaterial?F:x).get(X.envMap||pe),Oe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let dt=ri;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=v.toneMapping);const Gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Je=Gt!==void 0?Gt.length:0,Pe=ge.get(X),En=p.state.lights;if(ie===!0&&(de===!0||b!==M)){const $t=b===M&&X.id===S;ae.setState(X,b,$t)}let Qe=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==En.state.version||Pe.outputColorSpace!==we||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Ae||X.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==He||Pe.morphTargets!==Re||Pe.morphNormals!==$e||Pe.morphColors!==ht||Pe.toneMapping!==dt||Pe.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Pe.__version=X.version);let an=Pe.currentProgram;Qe===!0&&(an=sa(X,B,O));let Ri=!1,Wt=!1,Ts=!1;const ft=an.getUniforms(),mn=Pe.uniforms;if(be.useProgram(an.program)&&(Ri=!0,Wt=!0,Ts=!0),X.id!==S&&(S=X.id,Wt=!0),Ri||M!==b){be.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),Bd(le),Od(le),ft.setValue(C,"projectionMatrix",le)):ft.setValue(C,"projectionMatrix",b.projectionMatrix),ft.setValue(C,"viewMatrix",b.matrixWorldInverse);const Wn=ft.map.cameraPosition;Wn!==void 0&&Wn.setValue(C,ke.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Wt=!0,Ts=!0)}if(O.isSkinnedMesh){ft.setOptional(C,O,"bindMatrix"),ft.setOptional(C,O,"bindMatrixInverse");const $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ft.setValue(C,"boneTexture",$t.boneTexture,y))}O.isBatchedMesh&&(ft.setOptional(C,O,"batchingTexture"),ft.setValue(C,"batchingTexture",O._matricesTexture,y),ft.setOptional(C,O,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",O._indirectTexture,y),ft.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",O._colorsTexture,y));const Es=W.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&De.update(O,W,an),(Wt||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,ft.setValue(C,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=Ae,mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(mn.envMapIntensity.value=B.environmentIntensity),Wt&&(ft.setValue(C,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Lh(mn,Ts),oe&&X.fog===!0&&ue.refreshFogUniforms(mn,oe),ue.refreshMaterialUniforms(mn,X,z,J,p.state.transmissionRenderTarget[b.id]),Wa.upload(C,Dl(Pe),mn,y)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wa.upload(C,Dl(Pe),mn,y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(C,"center",O.center),ft.setValue(C,"modelViewMatrix",O.modelViewMatrix),ft.setValue(C,"normalMatrix",O.normalMatrix),ft.setValue(C,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let Wn=0,Xn=$t.length;Wn<Xn;Wn++){const Nl=$t[Wn];D.update(Nl,an),D.bind(Nl,an)}}return an}function Lh(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function kh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,B,W){ge.get(b.texture).__webglTexture=B,ge.get(b.depthTexture).__webglTexture=W;const X=ge.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const W=ge.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){I=b,R=B,A=W;let X=!0,O=null,oe=!1,pe=!1;if(b){const Ae=ge.get(b);if(Ae.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(C.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(Ae.__hasExternalTextures)y.rebindTextures(b,ge.get(b.texture).__webglTexture,ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&ge.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);const He=ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[B])?O=He[B][W]:O=He[B],oe=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?O=ge.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[W]:O=He,k.copy(b.viewport),G.copy(b.scissor),L=b.scissorTest}else k.copy(se).multiplyScalar(z).floor(),G.copy(ye).multiplyScalar(z).floor(),L=Ue;if(be.bindFramebuffer(C.FRAMEBUFFER,O)&&X&&be.drawBuffers(b,O),be.viewport(k),be.scissor(G),be.setScissorTest(L),oe){const Ae=ge.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,W)}else if(pe){const Ae=ge.get(b.texture),Oe=B||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Oe)}S=-1},this.readRenderTargetPixels=function(b,B,W,X,O,oe,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){be.bindFramebuffer(C.FRAMEBUFFER,we);try{const Ae=b.texture,Oe=Ae.format,He=Ae.type;if(!Ie.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&W>=0&&W<=b.height-O&&C.readPixels(B,W,X,O,We.convert(Oe),We.convert(He),oe)}finally{const Ae=I!==null?ge.get(I).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,B,W,X,O,oe,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){const Ae=b.texture,Oe=Ae.format,He=Ae.type;if(!Ie.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-X&&W>=0&&W<=b.height-O){be.bindFramebuffer(C.FRAMEBUFFER,we);const Re=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(B,W,X,O,We.convert(Oe),We.convert(He),0);const $e=I!==null?ge.get(I).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,$e);const ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fd(C,ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Re),C.deleteSync(ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,W=0){b.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(b.image.width*X),oe=Math.floor(b.image.height*X),pe=B!==null?B.x:0,we=B!==null?B.y:0;y.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,pe,we,O,oe),be.unbindTexture()},this.copyTextureToTexture=function(b,B,W=null,X=null,O=0){b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],B=arguments[2],O=arguments[3]||0,W=null);let oe,pe,we,Ae,Oe,He,Re,$e,ht;const dt=b.isCompressedTexture?b.mipmaps[O]:b.image;W!==null?(oe=W.max.x-W.min.x,pe=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Oe=W.min.y,He=W.isBox3?W.min.z:0):(oe=dt.width,pe=dt.height,we=dt.depth||1,Ae=0,Oe=0,He=0),X!==null?(Re=X.x,$e=X.y,ht=X.z):(Re=0,$e=0,ht=0);const Gt=We.convert(B.format),Je=We.convert(B.type);let Pe;B.isData3DTexture?(y.setTexture3D(B,0),Pe=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(y.setTexture2DArray(B,0),Pe=C.TEXTURE_2D_ARRAY):(y.setTexture2D(B,0),Pe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const En=C.getParameter(C.UNPACK_ROW_LENGTH),Qe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),Ri=C.getParameter(C.UNPACK_SKIP_ROWS),Wt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He);const Ts=b.isDataArrayTexture||b.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const mn=ge.get(b),Es=ge.get(B),$t=ge.get(mn.__renderTarget),Wn=ge.get(Es.__renderTarget);be.bindFramebuffer(C.READ_FRAMEBUFFER,$t.__webglFramebuffer),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<we;Xn++)Ts&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(b).__webglTexture,O,He+Xn),b.isDepthTexture?(ft&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(B).__webglTexture,O,ht+Xn),C.blitFramebuffer(Ae,Oe,oe,pe,Re,$e,oe,pe,C.DEPTH_BUFFER_BIT,C.NEAREST)):ft?C.copyTexSubImage3D(Pe,O,Re,$e,ht+Xn,Ae,Oe,oe,pe):C.copyTexSubImage2D(Pe,O,Re,$e,ht+Xn,Ae,Oe,oe,pe);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Pe,O,Re,$e,ht,oe,pe,we,Gt,Je,dt.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(Pe,O,Re,$e,ht,oe,pe,we,Gt,dt.data):C.texSubImage3D(Pe,O,Re,$e,ht,oe,pe,we,Gt,Je,dt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Re,$e,oe,pe,Gt,Je,dt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Re,$e,dt.width,dt.height,Gt,dt.data):C.texSubImage2D(C.TEXTURE_2D,O,Re,$e,oe,pe,Gt,Je,dt);C.pixelStorei(C.UNPACK_ROW_LENGTH,En),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ri),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt),O===0&&B.generateMipmaps&&C.generateMipmap(Pe),be.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W=null,X=null,O=0){return b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],B=arguments[3],O=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,W,X,O)},this.initRenderTarget=function(b){ge.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){R=0,A=0,I=null,be.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class th extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vt,this.environmentIntensity=1,this.environmentRotation=new vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qo,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new w;class Qs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),a=at(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ih extends Kt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const Ps=new w,Wi=new w,Xi=new w,ji=new Ee,Ls=new Ee,sh=new Be,Ea=new w,ks=new w,wa=new w,Uc=new Ee,Gr=new Ee,Nc=new Ee;class Y0 extends pt{constructor(e=new ih){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nh(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Qs(n,3,0,!1)),Gi.setAttribute("uv",new Qs(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),sh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Aa(Ea.set(-.5,-.5,0),Xi,r,Wi,i,a),Aa(ks.set(.5,-.5,0),Xi,r,Wi,i,a),Aa(wa.set(.5,.5,0),Xi,r,Wi,i,a),Uc.set(0,0),Gr.set(1,0),Nc.set(1,1);let o=e.ray.intersectTriangle(Ea,ks,wa,!1,Ps);if(o===null&&(Aa(ks.set(-.5,.5,0),Xi,r,Wi,i,a),Gr.set(0,1),o=e.ray.intersectTriangle(Ea,wa,ks,!1,Ps),o===null))return;const l=e.ray.origin.distanceTo(Ps);l<e.near||l>e.far||t.push({distance:l,point:Ps.clone(),uv:en.getInterpolation(Ps,Ea,ks,wa,Uc,Gr,Nc,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Aa(s,e,t,n,i,a){ji.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ls.x=a*ji.x-i*ji.y,Ls.y=i*ji.x+a*ji.y):Ls.copy(ji),s.copy(e),s.x+=Ls.x,s.y+=Ls.y,s.applyMatrix4(sh)}const Fc=new w,Bc=new Ze,Oc=new Ze,K0=new w,zc=new Be,Ra=new w,Wr=new Mn,Hc=new Be,Xr=new lr;class $0 extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zl,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1&&(Hc.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Hc),!(this.boundingBox!==null&&Xr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bc.fromBufferAttribute(i.attributes.skinIndex,e),Oc.fromBufferAttribute(i.attributes.skinWeight,e),Fc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=Oc.getComponent(a);if(r!==0){const o=Bc.getComponent(a);zc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(K0.copy(Fc).applyMatrix4(zc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ah extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gl extends Et{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Vt,u=Vt,h,d){super(null,r,o,l,c,u,i,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new Be,Z0=new Be;class _l{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:Z0;Vc.multiplyMatrices(o,t[a]),Vc.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gl(t,e,e,qt,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new ah),this.bones.push(r),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ea extends nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new Be,Gc=new Be,Ca=[],Wc=new yn,J0=new Be,Is=new lt,Ds=new Mn;class xl extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,J0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Wc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Ds.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,qi),Gc.multiplyMatrices(n,qi),Is.matrixWorld=Gc,Is.raycast(e,Ca);for(let r=0,o=Ca.length;r<o;r++){const l=Ca[r];l.instanceId=a,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(i*this.count),i,this.count,ol,fn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rh extends Kt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new w,Ja=new w,Xc=new Be,Us=new lr,Pa=new Mn,jr=new w,jc=new w;class vl extends pt{constructor(e=new gt,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Za.fromBufferAttribute(t,i-1),Ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=a,e.ray.intersectsSphere(Pa)===!1)return;Xc.copy(i).invert(),Us.copy(e.ray).applyMatrix4(Xc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),T=La(this,e,Us,l,p,E);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=La(this,e,Us,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=La(this,e,Us,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=La(this,e,Us,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function La(s,e,t,n,i,a){const r=s.geometry.attributes.position;if(Za.fromBufferAttribute(r,i),Ja.fromBufferAttribute(r,a),t.distanceSqToSegment(Za,Ja,jr,jc)>n)return;jr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jr);if(!(l<e.near||l>e.far))return{distance:l,point:jc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const qc=new w,Yc=new w;class Q0 extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)qc.fromBufferAttribute(t,i),Yc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qc.distanceTo(Yc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e_ extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class oh extends Kt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kc=new Be,Ko=new lr,ka=new Mn,Ia=new w;class lh extends pt{constructor(e=new gt,t=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=a,e.ray.intersectsSphere(ka)===!1)return;Kc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(Kc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ia.fromBufferAttribute(h,m),$c(Ia,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,_=f;g<_;g++)Ia.fromBufferAttribute(h,g),$c(Ia,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function $c(s,e,t,n,i,a,r){const o=Ko.distanceSqToPoint(s);if(o<t){const l=new w;Ko.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class ch extends Et{constructor(e,t,n,i,a,r,o,l,c){super(e,t,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class t_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const u=n[i],d=n[i+1]-u,f=(r-u)/d;return(i+f)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=t||(r.isVector2?new Ee:new w);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],a=[],r=[],o=new w,l=new Be;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w)}a[0]=new w,r[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ct(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(i[f],a[f])}if(t===!0){let f=Math.acos(Ct(a[0].dot(a[e]),-1,1));f/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function yl(){let s=0,e=0,t=0,n=0;function i(a,r,o,l){s=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,h){let d=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,i(r,o,d,f)},calc:function(a){const r=a*a,o=r*a;return s+e*a+t*r+n*o}}}const Da=new w,qr=new yl,Yr=new yl,Kr=new yl;class n_ extends t_{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,a=i.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%a]:(Da.subVectors(i[0],i[1]).add(i[0]),c=Da);const h=i[o%a],d=i[(o+1)%a];if(this.closed||o+2<a?u=i[(o+2)%a]:(Da.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=Da),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Yr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Kr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Yr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Kr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(qr.calc(l),Yr.calc(l),Kr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qa extends gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new w,u=new Ee;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ui extends gt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function E(){const v=new w,P=new w;let R=0;const A=(t-e)/n;for(let I=0;I<=a;I++){const S=[],M=I/a,k=M*(t-e)+e;for(let G=0;G<=i;G++){const L=G/i,U=L*l+o,V=Math.sin(U),N=Math.cos(U);P.x=k*V,P.y=-M*n+m,P.z=k*N,h.push(P.x,P.y,P.z),v.set(V,A,N).normalize(),d.push(v.x,v.y,v.z),f.push(L,1-M),S.push(g++)}_.push(S)}for(let I=0;I<i;I++)for(let S=0;S<a;S++){const M=_[S][I],k=_[S+1][I],G=_[S+1][I+1],L=_[S][I+1];(e>0||S!==0)&&(u.push(M,k,L),R+=3),(t>0||S!==a-1)&&(u.push(k,G,L),R+=3)}c.addGroup(p,R,0),p+=R}function T(v){const P=g,R=new Ee,A=new w;let I=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const k=g;for(let G=0;G<=i;G++){const U=G/i*l+o,V=Math.cos(U),N=Math.sin(U);A.x=S*N,A.y=m*M,A.z=S*V,h.push(A.x,A.y,A.z),d.push(0,M,0),R.x=V*.5+.5,R.y=N*.5*M+.5,f.push(R.x,R.y),g++}for(let G=0;G<i;G++){const L=P+G,U=k+G;v===!0?u.push(U,U+1,L):u.push(U+1,U,L),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends gt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],T=p/n;let v=0;p===0&&r===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const R=P/t;h.x=-e*Math.cos(i+R*a)*Math.sin(r+T*o),h.y=e*Math.cos(r+T*o),h.z=e*Math.sin(i+R*a)*Math.sin(r+T*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-T),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const T=u[p][E+1],v=u[p][E],P=u[p+1][E],R=u[p+1][E+1];(p!==0||r>0)&&f.push(T,v,R),(p!==n-1||l<Math.PI)&&f.push(v,P,R)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class i_ extends Tt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class hr extends Kt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends hr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zc extends Kt{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vt,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Kt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vt,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ua(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function s_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function a_(s){function e(i,a){return s[i]-s[a]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Jc(s,e,t){const n=s.length,i=new s.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let l=0;l!==e;++l)i[r++]=s[o+l]}return i}function uh(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=s[i++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=s[i++];while(a!==void 0)}class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=a,a=t[--n-1],e>=a)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let r=0;r!==i;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class r_ extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,r=e+1,o=i[a],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Zi:a=e,o=2*t-n;break;case Ka:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:r=e,l=2*n-t;break;case Ka:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==o;++P)a[P]=p*r[u+P]+E*r[c+P]+T*r[l+P]+v*r[h+P];return a}}class hh extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)a[d]=r[c+d]*h+r[l+d]*u;return a}}class o_ extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new o_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new r_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case mr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,r=i-1;for(;a!==i&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==i){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&s_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mr,a=e.length-1;let r=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Zs;class Ms extends Sn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=$s;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class dh extends Sn{}dh.prototype.ValueTypeName="color";class ps extends Sn{}ps.prototype.ValueTypeName="number";class l_ extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ot.slerpFlat(a,0,r,c-o,r,c,l);return a}}class ms extends Sn{InterpolantFactoryMethodLinear(e){return new l_(this.times,this.values,this.getValueSize(),e)}}ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Sn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=$s;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Sn{}gs.prototype.ValueTypeName="vector";class $o{constructor(e="",t=-1,n=[],i=hl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(u_(n[r]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(Sn.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const u=a_(l);l=Jc(l,1,u),c=Jc(c,1,u),!i&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(a);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];uh(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let E=0;E!==d[g].morphTargets.length;++E){const T=d[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}i.push(new ps(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+t[h].name+"]";n(gs,f+".position",d,"pos",i),n(ms,f+".quaternion",d,"rot",i),n(gs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(a,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function c_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return dh;case"quaternion":return ms;case"bool":case"boolean":return Ms;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function u_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=c_(s.type);if(s.times===void 0){const t=[],n=[];uh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class h_{constructor(e,t,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&i.onStart!==void 0&&i.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const d_=new h_;class Ai{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class f_ extends Error{constructor(e,t){super(e),this.response=t}}class er extends Ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=si.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:i});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ln[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:T,value:v})=>{if(T)p.close();else{_+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=u.length;R<A;R++){const I=u[R];I.onProgress&&I.onProgress(P)}p.enqueue(v),E()}},T=>{p.error(T)})}}});return new Response(m)}else throw new f_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{si.add(e,c);const u=Ln[e];delete Ln[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ln[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ln[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class p_ extends Ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=si.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=Js("img");function l(){u(),si.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){u(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class dr extends Ai{constructor(e){super(e)}load(e,t,n,i){const a=new Et,r=new p_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class fr extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fh extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new Be,Qc=new w,eu=new w;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m_ extends Ml{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class g_ extends fr{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new m_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tu=new Be,Ns=new w,Zr=new w;class __ extends Ml{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Zr.copy(n.position),Zr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zr),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}class x_ extends fr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new __}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v_ extends Ml{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bl extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new v_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class y_ extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=si.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),a.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(e,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){i&&i(c),si.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});si.add(e,l),a.manager.itemStart(e)}}class ph{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nu(){return performance.now()}class M_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,a,r;switch(t){case"quaternion":i=this._slerp,a=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,a=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,a=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=a,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,a=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[a+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,a,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,a=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-a,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let a=n,r=i;a!==r;++a)t[a]=t[i+a%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,a){if(i>=.5)for(let r=0;r!==a;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){ot.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,a){const r=this._workIndex*a;ot.multiplyQuaternionsFlat(e,r,e,t,e,n),ot.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,a){const r=1-i;for(let o=0;o!==a;++o){const l=t+o;e[l]=e[l]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,a){for(let r=0;r!==a;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Sl="\\[\\]\\.:\\/",b_=new RegExp("["+Sl+"]","g"),Tl="[^"+Sl+"]",S_="[^"+Sl.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",Tl),E_=/(WCOD+)?/.source.replace("WCOD",S_),w_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),R_=new RegExp("^"+T_+E_+w_+A_+"$"),C_=["material","materials","bones","map"];class P_{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){const t=R_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);C_.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=P_;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class L_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const a=t.tracks,r=a.length,o=new Array(r),l={endingStart:$i,endingEnd:$i};for(let c=0;c!==r;++c){const u=a[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,a=e._clip.duration,r=a/i,o=i/a;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,a=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=a,l[1]=a+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const l=(e-a)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ld:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(o);break;case hl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,a=this._loopCount;const r=n===od;if(e===0)return a===-1?i:r&&(a&1)===1?t-i:i;if(n===ad){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,a+=Math.abs(o);const l=this.repetitions-a;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(a&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Zi,i.endingEnd=Zi):(e?i.endingStart=this.zeroSlopeAtStart?Zi:$i:i.endingStart=Ka,t?i.endingEnd=this.zeroSlopeAtEnd?Zi:$i:i.endingEnd=Ka)}_scheduleFading(e,t,n){const i=this._mixer,a=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=a,l[0]=t,o[1]=a+e,l[1]=n,this}}const k_=new Float32Array(1);class Jr extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,a=i.length,r=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==a;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,r[h]=g;else{if(g=r[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new M_(tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,a=this._actionsByClip[i];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,a=this._actionsByClip;let r=a[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,r=this._actionsByClip,o=r[a],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,a=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,a=n.path,r=this._bindingsByRootAndName,o=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[a],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hh(new Float32Array(2),new Float32Array(2),1,k_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,a=t[i];e.__cacheIndex=i,t[i]=e,a.__cacheIndex=n,t[n]=a}clipAction(e,t,n){const i=t||this._root,a=i.uuid;let r=typeof e=="string"?$o.findByName(i,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=hl),l!==void 0){const h=l.actionByRoot[a];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new L_(this,r,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,a),u}existingAction(e,t){const n=t||this._root,i=n.uuid,a=typeof e=="string"?$o.findByName(n,e):e,r=a?a.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,a=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,a,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,a=i[n];if(a!==void 0){const r=a.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,a=i[t];if(a!==void 0)for(const r in a){const o=a[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const mh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const I_=new ta(-1,1,1,-1,0,1);class D_ extends gt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const U_=new D_;class El{constructor(e){this._mesh=new lt(U_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,I_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N_ extends Ss{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new El(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class iu extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class F_ extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class B_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N_(mh),this.copyPass.material.blending=Nn,this.clock=new ph}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}iu!==void 0&&(r instanceof iu?n=!0:r instanceof F_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class O_ extends Ss{constructor(e,t,n=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const z_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _s extends Ss{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(a,r,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Yt(a,r,{type:vn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Yt(a,r,{type:vn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),r=Math.round(r/2)}const o=z_;this.highPassUniforms=fs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=mh;this.copyUniforms=fs.clone(u.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:as,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new tn,this.fsQuad=new El(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}_s.BlurDirectionX=new Ee(1,0);_s.BlurDirectionY=new Ee(0,1);const H_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class V_ extends Ss{constructor(){super();const e=H_;this.uniforms=fs.clone(e.uniforms),this.material=new i_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new El(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===il?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Su&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function wl(s){let e=s|0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Na(s,e,t){let n=Math.imul(s,374761393)^Math.imul(e,668265263)^Math.imul(t+1,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function G_(s,e,t=0,n=0){const i=Math.floor(s),a=Math.floor(e),r=s-i,o=e-a,l=r*r*r*(r*(r*6-15)+10),c=o*o*o*(o*(o*6-15)+10),u=n?_=>(_%n+n)%n:_=>_,h=Na(u(i),u(a),t),d=Na(u(i+1),u(a),t),f=Na(u(i),u(a+1),t),g=Na(u(i+1),u(a+1),t);return h+(d-h)*l+(f-h)*c+(h-d-f+g)*l*c}function oi(s,e,t=5,n=0,i=0){let a=.5,r=1,o=0,l=0;for(let c=0;c<t;c++)o+=a*G_(s*r,e*r,n+c*17,i?i*r:0),l+=a,a*=.5,r*=2;return o/l}const zt=(s,e,t)=>s+(e-s)*t,Bn=(s,e,t)=>Math.min(t,Math.max(e,s)),On=(s,e,t)=>{const n=Bn((t-s)/(e-s),0,1);return n*n*(3-2*n)};function W_(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t.getContext("2d",{willReadFrequently:!0}),t}function X_(s,e){const t=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,t,n).data,a=(l,c)=>{const u=((c+n)%n*t+(l+t)%t)*4;return(i[u]+i[u+1]+i[u+2])/765},r=new Uint8Array(t*n*4);for(let l=0;l<n;l++)for(let c=0;c<t;c++){const u=(a(c+1,l)-a(c-1,l))*e,h=(a(c,l+1)-a(c,l-1))*e,d=1/Math.hypot(u,h,1),f=((n-1-l)*t+c)*4;r[f]=(-u*d*.5+.5)*255,r[f+1]=(h*d*.5+.5)*255,r[f+2]=(d*.5+.5)*255,r[f+3]=255}const o=new gl(r,t,n,qt);return o.wrapS=o.wrapT=Hn,o.generateMipmaps=!0,o.minFilter=dn,o.magFilter=Ot,o.anisotropy=8,o.needsUpdate=!0,o}function j_(s,e){const t=s.getContext("2d"),n=s.width,i=s.height,a=t.createImageData(n,i),r=a.data;for(let o=0;o<i;o++)for(let l=0;l<n;l++){const c=e(l/n,o/i),u=(o*n+l)*4;r[u]=Bn(c[0],0,1)*255,r[u+1]=Bn(c[1],0,1)*255,r[u+2]=Bn(c[2],0,1)*255,r[u+3]=255}return t.putImageData(a,0,0),t}function q_(){const s=W_(256,256);return j_(s,(e,t)=>{const n=oi(e*6,t*6,4,55,6);return[n,n,n]}),s}function Y_(){const s=new dr,e=(t,n)=>{const i=s.load(t);return n&&(i.colorSpace=rt),i.wrapS=i.wrapT=Hn,i.anisotropy=16,i};return{dirt:e("models/dirt_color.jpg",!0),dirtN:e("models/dirt_normal.jpg",!1),grassGround:e("models/grass.jpg",!0),waterN:X_(q_(),5)}}const su=400,Qr=150,mt={x:38,z:-24,r:30},yt={x:-8,z:22,r:19},K_=[[38,-24],[84,6],[98,66],[44,108],[-38,98],[-98,44],[-104,-38],[-52,-96],[8,-78]],li=new n_(K_.map(([s,e])=>new w(s,0,e)),!0,"catmullrom",.5),$_=li.getSpacedPoints(400),hn=256,tr=520/hn,Gs=new Float32Array(hn*hn);for(let s=0;s<hn;s++)for(let e=0;e<hn;e++){const t=-260+e*tr,n=-260+s*tr;let i=1e9;for(const a of $_){const r=(a.x-t)**2+(a.z-n)**2;r<i&&(i=r)}Gs[s*hn+e]=Math.sqrt(i)}function gh(s,e){const t=Bn((s+260)/tr,0,hn-1.001),n=Bn((e+260)/tr,0,hn-1.001),i=t|0,a=n|0,r=t-i,o=n-a,l=a*hn+i;return zt(zt(Gs[l],Gs[l+1],r),zt(Gs[l+hn],Gs[l+hn+1],r),o)}const bt={ox:0,oz:0,conMul:1,conAdd:0,densAdd:0,ground:[.86,.96,.84]};function Z_(s){bt.ox=s.seed*913.7,bt.oz=s.seed*517.3,bt.conMul=s.conMul,bt.conAdd=s.conAdd,bt.densAdd=s.densAdd,bt.ground=s.ground}function xt(s,e){let t=(oi(s*.0075+11.3+bt.ox,e*.0075+4.7+bt.oz,5,1)-.33)*34;t+=(oi(s*.045+bt.ox,e*.045+bt.oz,3,7)-.5)*1.8;const n=Math.hypot(s-mt.x,e-mt.z),i=On(mt.r+26,mt.r-8,n);t=zt(t,2.4+(oi(s*.03,e*.03,2,9)-.5)*1.4,i);const a=Math.hypot(s-yt.x,e-yt.z),r=On(yt.r+15,yt.r*.25,a);t=zt(t,-1.9,r);const o=On(9,2.5,gh(s,e));return o>0&&(t=zt(t,Math.max(t,.55),o)),t}function qs(s,e){return On(mt.r+6,mt.r-6,Math.hypot(s-mt.x,e-mt.z))}function ii(s,e){const t=oi(s*.011+3.1+bt.ox,e*.011+8.2+bt.oz,3,21)+bt.densAdd;return Bn(On(.28,.62,t)*(1-qs(s,e)),0,1)}function _h(s,e){return Bn(On(.42,.58,oi(s*.006+40+bt.ox,e*.006-13+bt.oz,3,33))*bt.conMul+bt.conAdd,0,1)}function J_(s,e){const t=new Gn(su+200,su+200,e,e);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let u=0;u<n.count;u++)n.setY(u,xt(n.getX(u),n.getZ(u)));t.computeVertexNormals();const i=t.attributes.normal,a=new Float32Array(n.count*3),r=new Float32Array(n.count);for(let u=0;u<n.count;u++){const h=n.getX(u),d=n.getY(u),f=n.getZ(u),g=ii(h,f),_=qs(h,f),m=On(2.6,.6,gh(h,f))*(1-_),p=oi(h*.08,f*.08,3,5),E=On(.9,.05,d);let T=zt(1.25,.85,g)*zt(.85,1.15,oi(h*.3,f*.3,2,12));T*=zt(1,.55,Math.max(E,m*.5)),a[u*3]=T*bt.ground[0],a[u*3+1]=T*bt.ground[1],a[u*3+2]=T*bt.ground[2]*zt(1,.84,E),r[u]=Bn(Math.max(_*1.1,(1-g)*.75)+(p-.5)*.7-E*.6-m-On(.85,.65,i.getY(u)),0,1)}t.setAttribute("color",new nt(a,3)),t.setAttribute("aGrass",new nt(r,1));const o=t.attributes.uv;for(let u=0;u<o.count;u++)o.setXY(u,n.getX(u)/2.6,n.getZ(u)/2.6);const l=new ni({map:s.dirt,normalMap:s.dirtN,normalScale:new Ee(1.6,1.6),vertexColors:!0});l.onBeforeCompile=u=>{u.uniforms.uGrass={value:s.grassGround},u.vertexShader=`attribute float aGrass;
varying float vGrass;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vGrass = aGrass;`),u.fragmentShader=`uniform sampler2D uGrass;
varying float vGrass;
`+u.fragmentShader.replace("#include <map_fragment>",`
      vec3 d_ = mix(texture2D(map, vMapUv).rgb, texture2D(map, vMapUv * 0.23 + 0.37).rgb, 0.45);
      vec3 g_ = mix(texture2D(uGrass, vMapUv * 1.3).rgb, texture2D(uGrass, vMapUv * 0.19 + 0.11).rgb, 0.5);
      float n_ = texture2D(uGrass, vMapUv * 0.031).g + texture2D(map, vMapUv * 0.083).r;
      float m_ = smoothstep(0.3, 0.7, vGrass + (0.22 - dot(d_, vec3(0.333))) * 1.2 + (n_ - 0.55) * 1.3);
      diffuseColor.rgb *= mix(d_ * 1.6, g_ * 1.05, m_);`)};const c=new lt(t,l);return c.receiveShadow=!0,c}function xh(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new gt;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in a){const h=au(a[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<r[u].length;++_)f.push(r[u][_][d]);const g=au(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function au(s){let e,t,n,i=-1,a=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}const r=new e(a),o=new nt(r,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else r.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Q_(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),a=n?n.count:i.count;let r=0;const o=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let E=0,T=o.length;E<T;E++){const v=o[E],P=s.attributes[v];l[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const R=s.morphAttributes[v];R&&(c[v]||(c[v]=[]),R.forEach((A,I)=>{const S=new A.array.constructor(A.count*A.itemSize);c[v][I]=new A.constructor(S,A.itemSize,A.normalized)}))}const f=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=f*_;for(let E=0;E<a;E++){const T=n?n.getX(E):E;let v="";for(let P=0,R=o.length;P<R;P++){const A=o[P],I=s.getAttribute(A),S=I.itemSize;for(let M=0;M<S;M++)v+=`${~~(I[h[M]](T)*_+m)},`}if(v in t)u.push(t[v]);else{for(let P=0,R=o.length;P<R;P++){const A=o[P],I=s.getAttribute(A),S=s.morphAttributes[A],M=I.itemSize,k=l[A],G=c[A];for(let L=0;L<M;L++){const U=h[L],V=d[L];if(k[V](r,I[U](T)),S)for(let N=0,J=S.length;N<J;N++)G[N][V](r,S[N][U](T))}}t[v]=r,u.push(r),r++}}const p=s.clone();for(const E in s.attributes){const T=l[E];if(p.setAttribute(E,new T.constructor(T.array.slice(0,r*T.itemSize),T.itemSize,T.normalized)),E in c)for(let v=0;v<c[E].length;v++){const P=c[E][v];p.morphAttributes[E][v]=new P.constructor(P.array.slice(0,r*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(u),p}function ru(s,e){if(e===cd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jo||e===Uu){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class vh extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)})}load(e,t,n,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=js.extractUrlBase(e);r=js.resolveURL(c,this.path)}else r=js.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new er(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(u){t(u),a.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yh){try{r[qe.KHR_BINARY_GLTF]=new vx(e)}catch(h){i&&i(h);return}a=JSON.parse(r[qe.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kx(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const h=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:r[h]=new nx;break;case qe.KHR_DRACO_MESH_COMPRESSION:r[h]=new yx(a,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:r[h]=new Mx;break;case qe.KHR_MESH_QUANTIZATION:r[h]=new bx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function ex(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tx{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let c;const u=new ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new x_(u),c.distance=h;break;case"spot":c=new g_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class nx{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Dt),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,rt))}return Promise.all(i)}}class ix{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class sx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(o,o)}return Promise.all(a)}}class ax{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class rx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class ox{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,rt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class lx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class cx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(o[0],o[1],o[2],Dt),Promise.all(a)}}class ux{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(o[0],o[1],o[2],Dt),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,rt)),Promise.all(a)}}class dx{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class fx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class px{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class mx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _x{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class xx{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new Be,m=new w,p=new ot,E=new w(1,1,1),T=new xl(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&E.fromBufferAttribute(l.SCALE,v),T.setMatrixAt(v,_.compose(m,p,E));for(const v in l)if(v==="_COLOR_0"){const P=l[v];T.instanceColor=new ea(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);pt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const yh="glTF",Fs=12,ou={JSON:1313821514,BIN:5130562};class vx{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fs,a=new DataView(e,Fs);let r=0;for(;r<i;){const o=a.getUint32(r,!0);r+=4;const l=a.getUint32(r,!0);if(r+=4,l===ou.JSON){const c=new Uint8Array(e,Fs+r,o);this.content=n.decode(c)}else if(l===ou.BIN){const c=Fs+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=Zo[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=Zo[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],f=is[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},o,c,Dt,d)})})}}class Mx{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bx{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Mh extends na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,E=1-m,T=p-d+h;for(let v=0;v!==o;v++){const P=r[_+v+o],R=r[_+v+l]*u,A=r[g+v+o],I=r[g+v]*u;a[v]=E*P+T*R+m*A+p*I}return a}}const Sx=new ot;class Tx extends Mh{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return Sx.fromArray(a).normalize().toArray(a),a}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lu={9728:Vt,9729:Ot,9984:Eu,9985:Ba,9986:zs,9987:dn},cu={33071:Dn,33648:Ya,10497:Hn},eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ex={CUBICSPLINE:void 0,LINEAR:Zs,STEP:$s},to={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ax(s,e,t){let n=!1,i=!1,a=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);const r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(a){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),a&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Rx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cx(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+no(t.attributes):e=s.indices+":"+no(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+no(s.targets[n]);return e}function no(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Jo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Px(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Lx=new Be;class kx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ex,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||a&&r<98?this.textureLoader=new dr(this.options.manager):this.textureLoader=new y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new er(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return yi(a,o,i),In(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())a(u,o.children[c])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){n.load(js.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=eo[i.type],o=is[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new nt(c,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=eo[i.type],c=is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(E);T||(_=new c(o,p*f,i.count*f/u),T=new nh(_,f/u),t.cache.add(E,T)),m=new Qs(T,l,d%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new nt(_,l,g);if(i.sparse!==void 0){const p=eo.SCALAR,E=is[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,P=new E(r[1],T,i.sparse.count*p),R=new c(r[2],v,i.sparse.count*l);o!==null&&(m=new nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,I=P.length;A<I;A++){const S=P[A];if(m.setX(S,R[A*l]),l>=2&&m.setY(S,R[A*l+1]),l>=3&&m.setZ(S,R[A*l+2]),l>=4&&m.setW(S,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(a.samplers||{})[r.sampler]||{};return u.magFilter=lu[d.magFilter]||Ot,u.minFilter=lu[d.minFilter]||dn,u.wrapS=cu[d.wrapS]||Hn,u.wrapT=cu[d.wrapT]||Hn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Vt&&u.minFilter!==Ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,d(m)}),t.load(js.resolveURL(h,a.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),In(h,r),h.userData.mimeType=r.mimeType||Px(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new oh,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rh,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let r;const o={},l=a.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,a,t))}else{const h=a.pbrMetallicRoughness||{};if(o.color=new ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=St);const u=a.alphaMode||to.OPAQUE;if(u===to.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===to.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==tn&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ee(1,1),a.normalTexture.scale!==void 0)){const h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&r!==tn&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==tn){const h=a.emissiveFactor;o.emissive=new ve().setRGB(h[0],h[1],h[2],Dt)}return a.emissiveTexture!==void 0&&r!==tn&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,rt)),Promise.all(c).then(function(){const h=new r(o);return a.name&&(h.name=a.name),In(h,a),t.associations.set(h,{materials:e}),a.extensions&&yi(i,h,a),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return uu(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Cx(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=uu(new gt,c,t),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?wx(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=r[f];let p;const E=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=a.isSkinnedMesh===!0?new $0(_,E):new lt(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=ru(p.geometry,Uu):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=ru(p.geometry,jo));else if(m.mode===Jt.LINES)p=new Q0(_,E);else if(m.mode===Jt.LINE_STRIP)p=new vl(_,E);else if(m.mode===Jt.LINE_LOOP)p=new e_(_,E);else if(m.mode===Jt.POINTS)p=new lh(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Rx(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),In(p,a),m.extensions&&yi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return a.extensions&&yi(i,h[0],a),h[0];const d=new nn;a.extensions&&yi(i,d,a),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ud.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ta(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){o.push(h);const d=new Be;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _l(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,T=d.length;E<T;E++){const v=d[E],P=f[E],R=g[E],A=_[E],I=m[E];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,P,R,A,I);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new $o(a,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)r.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Lx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(c){return i._getNodeRef(i.cameraCache,a.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(a.isBone===!0?u=new ah:c.length>1?u=new nn:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(a.name&&(u.userData.name=a.name,u.name=r),In(u,a),a.extensions&&yi(n,u,a),a.matrix!==void 0){const h=new Be;h.fromArray(a.matrix),u.applyMatrix4(h)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new nn;n.name&&(a.name=i.createUniqueName(n.name)),In(a,n),n.extensions&&yi(t,a,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)a.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Kt||d instanceof Et)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(a),a})}_createAnimationTracks(e,t,n,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];Jn[a.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Jn[a.path]){case Jn.weights:c=ps;break;case Jn.rotation:c=ms;break;case Jn.position:case Jn.scale:c=gs;break;default:switch(n.itemSize){case 1:c=ps;break;case 2:case 3:default:c=gs;break}break}const u=i.interpolation!==void 0?Ex[i.interpolation]:Zs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Jn[a.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jo(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ms?Tx:Mh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ix(s,e,t){const n=e.attributes,i=new yn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){const u=Jo(is[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new w,l=new w;for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Jo(is[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const r=new Mn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function uu(s,e,t){const n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){s.setAttribute(o,l)})}for(const r in n){const o=Zo[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return je.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),In(s,e),Ix(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ax(s,e.targets,t):s})}const io=new WeakMap;class Dx extends Ai{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const a=new er(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,rt,n).catch(n)}decodeDracoFile(e,t,n,i,a=Dt,r=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:a};return this.decodeGeometry(e,o).then(t).catch(r)}decodeGeometry(e,t){const n=JSON.stringify(t);if(io.has(e)){const l=io.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(a,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[a]={resolve:c,reject:u},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&a&&this._releaseTask(i,a)}),io.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new gt;e.index&&t.setIndex(new nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],a=i.name,r=i.array,o=i.itemSize,l=new nt(r,o);a==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(r instanceof Float32Array)),t.setAttribute(a,l)}return t}_assignVertexColorSpace(e,t){if(t!==rt)return;const n=new ve;for(let i=0,a=e.count;i<a;i++)n.fromBufferAttribute(e,i),je.toWorkingColorSpace(n,rt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new er(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,a)=>{n.load(e,i,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const a=Ux.toString(),r=["/* draco decoder */",i,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(a){const r=a.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,a){return i._taskLoad>a._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Ux(){let s,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(r,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let E,T;if(c.useUniqueIDs)T=u[m],E=o.GetAttributeByUniqueId(d,T);else{if(T=o.GetAttributeId(d,r[u[m]]),T===-1)continue;E=o.GetAttribute(d,T)}const v=i(r,o,d,m,p,E);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===r.TRIANGULAR_MESH&&(_.index=n(r,o,d)),r.destroy(d),_}function n(r,o,l){const u=l.num_faces()*3,h=u*4,d=r._malloc(h);o.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(r.HEAPF32.buffer,d,u).slice();return r._free(d),{array:f,itemSize:1}}function i(r,o,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,_=g*u.BYTES_PER_ELEMENT,m=a(r,u),p=r._malloc(_);o.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const E=new u(r.HEAPF32.buffer,p,g).slice();return r._free(p),{name:c,array:E,itemSize:d}}function a(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class Nx{constructor(e){fi(this,"m_w",123456789);fi(this,"m_z",987654321);fi(this,"mask",4294967295);this.m_w=123456789+e&this.mask,this.m_z=987654321-e&this.mask}random(e=1,t=0){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,(e-t)*n+t}}class so{constructor(e=new w,t=new vt,n=0,i=0,a=0,r=0,o=0){this.origin=e.clone(),this.orientation=t.clone(),this.length=n,this.radius=i,this.level=a,this.sectionCount=r,this.segmentCount=o}}const Fx={Oak:"oak"},bh={Double:"double"},Bx={Oak:"oak"},Xa={Deciduous:"deciduous",Evergreen:"evergreen"};class Sh{constructor(){this.seed=0,this.type=Xa.Deciduous,this.bark={type:Fx.Oak,tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},this.branch={levels:3,angle:{1:70,2:60,3:60},children:{0:7,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:.01},gnarliness:{0:.15,1:.2,2:.3,3:.02},length:{0:20,1:20,2:10,3:1},radius:{0:1.5,1:.7,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.4,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},this.leaves={type:Bx.Oak,billboard:bh.Double,angle:10,count:1,start:0,size:2.5,sizeVariance:.7,tint:16777215,alphaTest:.5},this.trellis={enabled:!1,position:{x:0,y:0,z:-2},width:10,height:20,spacing:2,force:{strength:.02,maxDistance:3,falloff:1},cylinderRadius:.05,visible:!0,color:9127187}}copy(e,t=this){for(let n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)&&(typeof e[n]=="object"&&e[n]!==null?this.copy(e[n],t[n]):t[n]=e[n])}}const Ox=26867,zx="deciduous",Hx={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},Vx={levels:2,angle:{1:48,2:75,3:60},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:23.87,1:18,2:5.59,3:4.6},radius:{0:.81,1:.56,2:.76,3:.7},sections:{0:12,1:10,2:10,3:10},segments:{0:8,1:6,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},Gx={type:"ash",billboard:"double",angle:55,count:30,start:0,size:2.05,sizeVariance:.717,tint:16777215,alphaTest:.5},Wx={enabled:!1},Xx={seed:Ox,type:zx,bark:Hx,branch:Vx,leaves:Gx,trellis:Wx},jx=36330,qx="deciduous",Yx={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},Kx={levels:3,angle:{1:48,2:75,3:60},children:{0:7,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.06},gnarliness:{0:.03,1:.25,2:.2,3:.09},length:{0:43.47,1:27.14,2:9.51,3:4.6},radius:{0:2,1:.63,2:.76,3:.7},sections:{0:12,1:8,2:6,3:4},segments:{0:12,1:6,2:4,3:3},start:{1:.23,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.09,1:-.07,2:0,3:0}},$x={type:"ash",billboard:"double",angle:55,count:16,start:0,size:2.67,sizeVariance:.72,tint:16777215,alphaTest:.5},Zx={enabled:!1},Jx={seed:jx,type:qx,bark:Yx,branch:Kx,leaves:$x,trellis:Zx},Qx=29919,ev="deciduous",tv={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},nv={levels:3,angle:{1:39,2:39,3:51},children:{0:10,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.010869565217391311},gnarliness:{0:-.05,1:.2,2:.16,3:.049999999999999996},length:{0:45,1:29.42,2:15.3,3:4.6},radius:{0:3.03,1:.53,2:.79,3:1.11},sections:{0:12,1:8,2:6,3:4},segments:{0:8,1:6,2:4,3:3},start:{1:.32,2:.34,3:0},taper:{0:.7,1:.6199999999999999,2:.7599999999999999,3:0},twist:{0:.09,1:-.07,2:0,3:0}},iv={type:"ash",billboard:"double",angle:30,count:10,start:.01,size:4.62,sizeVariance:.72,tint:16777215,alphaTest:.5},sv={enabled:!1},av={seed:Qx,type:ev,bark:tv,branch:nv,leaves:iv,trellis:sv},rv=36330,ov="deciduous",lv={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},cv={levels:2,angle:{1:70,2:35,3:7},children:{0:4,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.010869565217391311},gnarliness:{0:.04,1:-.010000000000000007,2:.12,3:.02},length:{0:23.99,1:3.36,2:7.699999999999999,3:1},radius:{0:.36999999999999994,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.44999999999999996,2:.32999999999999996,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},uv={type:"aspen",billboard:"double",angle:30,count:13,start:.2,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},hv={enabled:!1},dv={seed:rv,type:ov,bark:lv,branch:cv,leaves:uv,trellis:hv},fv=18020,pv="deciduous",mv={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},gv={levels:2,angle:{1:75,2:32,3:7},children:{0:10,1:3,2:3},force:{direction:{x:0,y:1,z:0},strength:.0148},gnarliness:{0:.05,1:.12,2:.12,3:.02},length:{0:50,1:6.07,2:11.19,3:1},radius:{0:.72,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.59,2:.35,3:0},taper:{0:.37,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},_v={type:"aspen",billboard:"double",angle:30,count:11,start:.124,size:2.5,sizeVariance:.7,tint:16775778,alphaTest:.5},xv={enabled:!1},vv={seed:fv,type:pv,bark:mv,branch:gv,leaves:_v,trellis:xv},yv=30631,Mv="deciduous",bv={type:"birch",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},Sv={levels:2,angle:{1:47,2:63,3:7},children:{0:10,1:6,2:0},force:{direction:{x:0,y:1,z:0},strength:.021739130434782622},gnarliness:{0:.05,1:-.030000000000000006,2:.12,3:.02},length:{0:69.60000000000001,1:18.56,2:11.19,3:1},radius:{0:1.11,1:.5800000000000001,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.62,2:.049999999999999975,3:0},taper:{0:.7000000000000001,1:.13,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},Tv={type:"aspen",billboard:"double",angle:36,count:20,start:.15217391304347827,size:3.4782608695652173,sizeVariance:.7,tint:16580390,alphaTest:.5},Ev={enabled:!1},wv={seed:yv,type:Mv,bark:bv,branch:Sv,leaves:Tv,trellis:Ev},Av=45590,Rv="deciduous",Cv={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},Pv={levels:3,angle:{1:21.521739130434785,2:62.608695652173914,3:60},children:{0:7,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.11,1:.09,2:.05,3:.09},length:{0:.1,1:15.302173913043479,2:5.59,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:6,1:6,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.53,2:.33,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.07,2:0,3:0}},Lv={type:"ash",billboard:"double",angle:55,count:12,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},kv={enabled:!1},Iv={seed:Av,type:Rv,bark:Cv,branch:Pv,leaves:Lv,trellis:kv},Dv=45590,Uv="deciduous",Nv={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},Fv={levels:2,angle:{1:19.565217391304348,2:27.39130434782609,3:60},children:{0:10,1:3,2:2},force:{direction:{x:0,y:1,z:0},strength:-.02},gnarliness:{0:.021739130434782594,1:.10869565217391308,2:.05,3:.09},length:{0:.1,1:19.645652173913046,2:7.701086956521739,3:4.6},radius:{0:.5793478260869566,1:.9521739130434783,2:.76,3:.7},sections:{0:3,1:4,2:10,3:10},segments:{0:4,1:4,2:4,3:3},start:{1:.6413043478260869,2:.7065217391304348,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3586956521739131,1:-.043478260869565244,2:0,3:0}},Bv={type:"aspen",billboard:"double",angle:55,count:7,start:0,size:2.4456521739130435,sizeVariance:.717,tint:14745557,alphaTest:.5},Ov={enabled:!1},zv={seed:Dv,type:Uv,bark:Nv,branch:Fv,leaves:Bv,trellis:Ov},Hv=31343,Vv="evergreen",Gv={type:"oak",tint:13552830,flatShading:!1,textured:!0,textureScale:{x:.5,y:5}},Wv={levels:3,angle:{1:66.52173913043478,2:52.82608695652174,3:0},children:{0:13,1:4,2:4},force:{direction:{x:0,y:1,z:0},strength:-.007},gnarliness:{0:.05434782608695654,1:.06521739130434778,2:.05,3:.09},length:{0:10.958695652173914,1:21.81739130434783,2:13.130434782608695,3:5.529347826086957},radius:{0:.5793478260869566,1:.9521739130434783,2:.6858695652173914,3:.7391304347826086},sections:{0:4,1:3,2:3,3:10},segments:{0:3,1:3,2:3,3:3},start:{1:.14130434782608695,2:.29347826086956524,3:0},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:.3,1:-.03260869565217389,2:0,3:0}},Xv={type:"pine",billboard:"double",angle:54,count:3,start:.15217391304347827,size:3.0434782608695654,sizeVariance:.45652173913043476,tint:10339327,alphaTest:.5},jv={enabled:!1},qv={seed:Hv,type:Vv,bark:Gv,branch:Wv,leaves:Xv,trellis:jv},Yv=30895,Kv="deciduous",$v={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},Zv={levels:3,angle:{1:54,2:58,3:32},children:{0:4,1:2,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:.07,1:-.08,2:.11,3:.09},length:{0:28.08,1:4.55,2:9.78,3:7.16},radius:{0:1,1:1.02,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},Jv={type:"oak",billboard:"double",angle:42,count:14,start:.16,size:1.38,sizeVariance:.7,tint:14013901,alphaTest:.5},Qv={enabled:!1},ey={seed:Yv,type:Kv,bark:$v,branch:Zv,leaves:Jv,trellis:Qv},ty=35729,ny="deciduous",iy={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},sy={levels:3,angle:{1:54,2:58,3:32},children:{0:6,1:4,2:3},force:{direction:{x:0,y:1,z:0},strength:-.01},gnarliness:{0:0,1:-.1,2:-.15,3:.09},length:{0:37.24,1:11.08,2:12.39,3:7.16},radius:{0:1.41,1:.9,2:.69,3:1.19},sections:{0:8,1:6,2:3,3:1},segments:{0:7,1:5,2:3,3:3},start:{1:.49,2:.06,3:.12},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},ay={type:"oak",billboard:"double",angle:42,count:18,start:.16,size:2.5,sizeVariance:.7,tint:14013901,alphaTest:.5},ry={enabled:!1},oy={seed:ty,type:ny,bark:iy,branch:sy,leaves:ay,trellis:ry},ly=23399,cy="deciduous",uy={type:"oak",tint:16774097,flatShading:!1,textured:!0,textureScale:{x:1,y:10}},hy={levels:3,angle:{1:54,2:43,3:32},children:{0:9,1:5,2:3},force:{direction:{x:0,y:1,z:0},strength:-.025},gnarliness:{0:-.04,1:.16,2:-.06,3:.09},length:{0:47.7,1:29.39,2:17.62,3:7.16},radius:{0:3,1:.69,2:.69,3:1.19},sections:{0:16,1:9,2:8,3:3},segments:{0:12,1:5,2:3,3:3},start:{1:.35,2:.1,3:0},taper:{0:.73,1:.42,2:.69,3:.75},twist:{0:-.23,1:.42,2:0,3:0}},dy={type:"oak",billboard:"double",angle:36,count:10,start:.16,size:4.5,sizeVariance:.7,tint:14013901,alphaTest:.5},fy={enabled:!1},py={seed:ly,type:cy,bark:uy,branch:hy,leaves:dy,trellis:fy},my=11744,gy="evergreen",_y={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},xy={levels:1,angle:{1:117,2:60,3:60},children:{0:91,1:7,2:5},force:{direction:{x:0,y:1,z:0},strength:0},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:39.55,1:12.12,2:10,3:1},radius:{0:.55,1:.41,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.16,2:.3,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},vy={type:"pine",billboard:"double",angle:10,count:21,start:0,size:.965,sizeVariance:.7,tint:16777215,alphaTest:.3},yy={enabled:!1},My={seed:my,type:gy,bark:_y,branch:xy,leaves:vy,trellis:yy},by=13977,Sy="evergreen",Ty={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},Ey={levels:1,angle:{1:110,2:16,3:60},children:{0:82,1:3,2:5},force:{direction:{x:0,y:1,z:0},strength:-.003},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:50,1:23.87,2:14.08,3:1},radius:{0:1.05,1:.36,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.27,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},wy={type:"pine",billboard:"double",angle:39,count:30,start:.09,size:1.435,sizeVariance:.201,tint:16777215,alphaTest:.3},Ay={enabled:!1},Ry={seed:by,type:Sy,bark:Ty,branch:Ey,leaves:wy,trellis:Ay},Cy=44166,Py="evergreen",Ly={type:"pine",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:1}},ky={levels:1,angle:{1:129.1304347826087,2:16,3:60},children:{0:100,1:3,2:0},force:{direction:{x:0,y:1,z:0},strength:.009000000000000001},gnarliness:{0:.05,1:.08,2:0,3:0},length:{0:65.25217391304348,1:34.84782608695652,2:27.246739130434783,3:1},radius:{0:1.271739130434783,1:.366304347826087,2:.7,3:.7},sections:{0:12,1:10,2:8,3:6},segments:{0:8,1:6,2:4,3:3},start:{1:.29347826086956524,2:.14,3:.3},taper:{0:.7,1:.7,2:.7,3:.7},twist:{0:0,1:0,2:0,3:0}},Iy={type:"pine",billboard:"double",angle:17,count:18,start:.07608695652173914,size:2.608695652173913,sizeVariance:.201,tint:16777215,alphaTest:.3},Dy={enabled:!1},Uy={seed:Cy,type:Py,bark:Ly,branch:ky,leaves:Iy,trellis:Dy},Ny=41563,Fy="deciduous",By={type:"oak",tint:16777215,flatShading:!1,textured:!0,textureScale:{x:1,y:8}},Oy={levels:3,angle:{1:26,2:79,3:0},children:{0:7,1:5,2:1},force:{direction:{x:0,y:1,z:0},strength:.026},gnarliness:{0:0,1:.02,2:-.41,3:.09},length:{0:4.8,1:16.9,2:11.3,3:11.1},radius:{0:.27,1:.71,2:.84,3:.48},sections:{0:6,1:12,2:10,3:4},segments:{0:3,1:3,2:3,3:3},start:{1:.19,2:.1,3:.06},taper:{0:.6,1:.5,2:.5,3:.5},twist:{0:-.02,1:-.01,2:.09,3:0}},zy={type:"ash",billboard:"single",angle:30,count:13,start:0,size:1.7,sizeVariance:.5,tint:15204310,alphaTest:.5},Hy={enabled:!0,position:{x:0,y:0,z:1.3},width:20,height:32,spacing:4,force:{strength:.014,maxDistance:18.2,falloff:1.3},cylinderRadius:.08,visible:!0,color:5519173},Vy={seed:Ny,type:Fy,bark:By,branch:Oy,leaves:zy,trellis:Hy},Al={"Ash Small":Xx,"Ash Medium":Jx,"Ash Large":av,"Aspen Small":dv,"Aspen Medium":vv,"Aspen Large":wv,"Bush 1":Iv,"Bush 2":zv,"Bush 3":qv,"Oak Small":ey,"Oak Medium":oy,"Oak Large":py,"Pine Small":My,"Pine Medium":Ry,"Pine Large":Uy,Trellis:Vy};function Gy(s){const e=Al[s];return e?structuredClone(e):new Sh}const Wy=""+new URL("birch_color_1k.jpg",import.meta.url).href,Xy=""+new URL("birch_normal_1k.jpg",import.meta.url).href,jy=""+new URL("oak_color_1k.jpg",import.meta.url).href,qy=""+new URL("oak_normal_1k.jpg",import.meta.url).href,Yy=""+new URL("pine_color_1k.jpg",import.meta.url).href,Ky=""+new URL("pine_normal_1k.jpg",import.meta.url).href,$y=""+new URL("ash_color.png",import.meta.url).href,Zy=""+new URL("aspen_color.png",import.meta.url).href,Jy=""+new URL("oak_color.png",import.meta.url).href,Qy=""+new URL("pine_color.png",import.meta.url).href,eM=new dr,hu={birch:{color:Wy,normal:Xy},oak:{color:jy,normal:qy},pine:{color:Yy,normal:Ky}},du={ash:$y,aspen:Zy,oak:Jy,pine:Qy},ao=new Map;function Th(s,e,t){if(!ao.has(s)){const n=eM.load(s);e&&(n.colorSpace=rt),n.wrapS=n.wrapT=t?Hn:Dn,n.anisotropy=8,ao.set(s,n)}return ao.get(s)}function ai(s,e){const t=hu[s]&&hu[s][e];return t?Th(t,e==="color",!0):null}function ja(s){return Th(du[s]||du.oak,!0,!1)}class tM extends nn{constructor(e){super(),this.name="Trellis",this.options=e,this.material=null,this.hCylinderGeo=null,this.vCylinderGeo=null}generate(){const e=this.options;this.dispose(),this.material=new hr({color:e.color,roughness:.8}),this.hCylinderGeo=new ui(e.cylinderRadius,e.cylinderRadius,e.width,8),this.hCylinderGeo.rotateZ(Math.PI/2),this.vCylinderGeo=new ui(e.cylinderRadius,e.cylinderRadius,e.height,8);const t=Math.floor(e.height/e.spacing)+1;for(let i=0;i<t;i++){const a=i*e.spacing,r=new lt(this.hCylinderGeo,this.material);r.position.set(e.position.x,e.position.y+a,e.position.z),this.add(r)}const n=Math.floor(e.width/e.spacing)+1;for(let i=0;i<n;i++){const a=-e.width/2+i*e.spacing,r=new lt(this.vCylinderGeo,this.material);r.position.set(e.position.x+a,e.position.y+e.height/2,e.position.z),this.add(r)}}getNearestPoint(e){const t=this.options,n=t.position.x,i=t.position.y,a=t.position.z,r=n-t.width/2,o=n+t.width/2,l=i,c=i+t.height,u=Math.max(r,Math.min(o,e.x)),h=Math.max(l,Math.min(c,e.y)),d=Math.round((h-l)/t.spacing)*t.spacing+l,f=Math.max(l,Math.min(c,d)),g=Math.round((u-r)/t.spacing)*t.spacing+r,_=Math.max(r,Math.min(o,g)),m=new w(u,f,a),p=new w(_,h,a),E=e.distanceTo(m),T=e.distanceTo(p);return E<T?m:p}dispose(){this.children.forEach(e=>{e.geometry&&(e.geometry=null)}),this.clear(),this.hCylinderGeo&&(this.hCylinderGeo.dispose(),this.hCylinderGeo=null),this.vCylinderGeo&&(this.vCylinderGeo.dispose(),this.vCylinderGeo=null),this.material&&(this.material.dispose(),this.material=null)}}class nM extends nn{constructor(t=new Sh){super();fi(this,"rng");fi(this,"options");fi(this,"branchQueue",[]);this.name="Tree",this.branchesMesh=new lt,this.leavesMesh=new lt,this.trellisMesh=null,this.add(this.branchesMesh),this.add(this.leavesMesh),this.options=t}update(t){const n=this.leavesMesh.material.userData.shader;n&&(n.uniforms.uTime.value=t)}loadPreset(t){const n=Gy(t);this.loadFromJson(n)}loadFromJson(t){this.options.copy(t),this.generate()}generate(){for(this.branches={verts:[],normals:[],indices:[],uvs:[],windFactor:[]},this.leaves={verts:[],normals:[],indices:[],uvs:[]},this.rng=new Nx(this.options.seed),this.branchQueue.push(new so(new w,new vt,this.options.branch.length[0],this.options.branch.radius[0],0,this.options.branch.sections[0],this.options.branch.segments[0]));this.branchQueue.length>0;){const t=this.branchQueue.shift();this.generateBranch(t)}this.createBranchesGeometry(),this.createLeavesGeometry(),this.createTrellis()}generateBranch(t){const n=this.branches.verts.length/3;let i=t.orientation.clone(),a=t.origin.clone(),r=t.length/t.sectionCount/(this.options.type==="Deciduous"?this.options.branch.levels-1:1),o=[];for(let l=0;l<=t.sectionCount;l++){let c=t.radius;l===t.sectionCount&&t.level===this.options.branch.levels?c=.001:this.options.type===Xa.Deciduous?c*=1-this.options.branch.taper[t.level]*(l/t.sectionCount):this.options.type===Xa.Evergreen&&(c*=1-l/t.sectionCount);let u;for(let _=0;_<t.segmentCount;_++){let m=2*Math.PI*_/t.segmentCount;const p=new w(Math.cos(m),0,Math.sin(m)).multiplyScalar(c).applyEuler(i).add(a),E=new w(Math.cos(m),0,Math.sin(m)).applyEuler(i).normalize(),T=new Ee(_/t.segmentCount,l%2===0?0:1);this.branches.verts.push(...Object.values(p)),this.branches.normals.push(...Object.values(E)),this.branches.uvs.push(...Object.values(T)),_===0&&(u={vertex:p,normal:E,uv:T})}this.branches.verts.push(...Object.values(u.vertex)),this.branches.normals.push(...Object.values(u.normal)),this.branches.uvs.push(1,u.uv.y),o.push({origin:a.clone(),orientation:i.clone(),radius:c}),a.add(new w(0,r,0).applyEuler(i));const h=Math.max(1,1/Math.sqrt(c))*this.options.branch.gnarliness[t.level];i.x+=this.rng.random(h,-h),i.z+=this.rng.random(h,-h);const d=new ot().setFromEuler(i),f=new ot().setFromAxisAngle(new w(0,1,0),this.options.branch.twist[t.level]),g=new ot().setFromUnitVectors(new w(0,1,0),new w().copy(this.options.branch.force.direction));if(d.multiply(f),d.rotateTowards(g,this.options.branch.force.strength/c),this.options.trellis.enabled){const _=this.calculateTrellisForce(a,c);if(_){const m=new ot().setFromUnitVectors(new w(0,1,0),_.direction);d.rotateTowards(m,_.strength)}}i.setFromQuaternion(d)}if(this.generateBranchIndices(n,t),this.options.type==="deciduous"){const l=o[o.length-1];t.level<this.options.branch.levels?this.branchQueue.push(new so(l.origin,l.orientation,this.options.branch.length[t.level+1],l.radius,t.level+1,t.sectionCount,t.segmentCount)):this.generateLeaf(l.origin,l.orientation)}t.level===this.options.branch.levels?this.generateLeaves(o):t.level<this.options.branch.levels&&this.generateChildBranches(this.options.branch.children[t.level],t.level+1,o)}generateChildBranches(t,n,i){const a=this.rng.random();for(let r=0;r<t;r++){let o=this.rng.random(1,this.options.branch.start[n]);const l=Math.floor(o*(i.length-1));let c,u;c=i[l],l===i.length-1?u=c:u=i[l+1];const h=(o-l/(i.length-1))/(1/(i.length-1)),d=new w().lerpVectors(c.origin,u.origin,h),f=this.options.branch.radius[n]*((1-h)*c.radius+h*u.radius),g=new ot().setFromEuler(c.orientation),_=new ot().setFromEuler(u.orientation),m=new vt().setFromQuaternion(_.slerp(g,h)),p=2*Math.PI*(a+r/t),E=new ot().setFromAxisAngle(new w(1,0,0),this.options.branch.angle[n]/(180/Math.PI)),T=new ot().setFromAxisAngle(new w(0,1,0),p),v=new ot().setFromEuler(m),P=new vt().setFromQuaternion(v.multiply(T.multiply(E)));let R=this.options.branch.length[n]*(this.options.type===Xa.Evergreen?1-o:1);this.branchQueue.push(new so(d,P,R,f,n,this.options.branch.sections[n],this.options.branch.segments[n]))}}generateLeaves(t){const n=this.rng.random();for(let i=0;i<this.options.leaves.count;i++){let a=this.rng.random(1,this.options.leaves.start);const r=Math.floor(a*(t.length-1));let o,l;o=t[r],r===t.length-1?l=o:l=t[r+1];const c=(a-r/(t.length-1))/(1/(t.length-1)),u=new w().lerpVectors(o.origin,l.origin,c),h=new ot().setFromEuler(o.orientation),d=new ot().setFromEuler(l.orientation),f=new vt().setFromQuaternion(d.slerp(h,c)),g=2*Math.PI*(n+i/this.options.leaves.count),_=new ot().setFromAxisAngle(new w(1,0,0),this.options.leaves.angle/(180/Math.PI)),m=new ot().setFromAxisAngle(new w(0,1,0),g),p=new ot().setFromEuler(f),E=new vt().setFromQuaternion(p.multiply(m.multiply(_)));this.generateLeaf(u,E)}}generateLeaf(t,n){let i=this.leaves.verts.length/3,a=this.options.leaves.size*(1+this.rng.random(this.options.leaves.sizeVariance,-this.options.leaves.sizeVariance));const r=a,o=a,l=c=>{const u=[new w(-r/2,o,0),new w(-r/2,0,0),new w(r/2,0,0),new w(r/2,o,0)].map(d=>d.applyEuler(new vt(0,c,0)).applyEuler(n).add(t));this.leaves.verts.push(u[0].x,u[0].y,u[0].z,u[1].x,u[1].y,u[1].z,u[2].x,u[2].y,u[2].z,u[3].x,u[3].y,u[3].z);const h=new w(0,0,1).applyEuler(n);this.leaves.normals.push(h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z,h.x,h.y,h.z),this.leaves.uvs.push(0,1,0,0,1,0,1,1),this.leaves.indices.push(i,i+1,i+2,i,i+2,i+3),i+=4};l(0),this.options.leaves.billboard===bh.Double&&l(Math.PI/2)}generateBranchIndices(t,n){let i,a,r,o;const l=n.segmentCount+1;for(let c=0;c<n.sectionCount;c++)for(let u=0;u<n.segmentCount;u++)i=t+c*l+u,a=t+c*l+(u+1),r=i+l,o=a+l,this.branches.indices.push(i,r,a,a,r,o)}createBranchesGeometry(){const t=new gt;t.setAttribute("position",new nt(new Float32Array(this.branches.verts),3)),t.setAttribute("normal",new nt(new Float32Array(this.branches.normals),3)),t.setAttribute("uv",new nt(new Float32Array(this.branches.uvs),2)),t.setIndex(new nt(new Uint16Array(this.branches.indices),1)),t.computeBoundingSphere();const n=new Zc({name:"branches",flatShading:this.options.bark.flatShading,color:new ve(this.options.bark.tint)});this.options.bark.textured&&(n.aoMap=ai(this.options.bark.type,"ao",this.options.bark.textureScale),n.map=ai(this.options.bark.type,"color",this.options.bark.textureScale),n.normalMap=ai(this.options.bark.type,"normal",this.options.bark.textureScale),n.roughnessMap=ai(this.options.bark.type,"roughness",this.options.bark.textureScale)),this.branchesMesh.geometry.dispose(),this.branchesMesh.geometry=t,this.branchesMesh.material.dispose(),this.branchesMesh.material=n,this.branchesMesh.castShadow=!0,this.branchesMesh.receiveShadow=!0}createLeavesGeometry(){const t=new gt;t.setAttribute("position",new nt(new Float32Array(this.leaves.verts),3)),t.setAttribute("uv",new nt(new Float32Array(this.leaves.uvs),2)),t.setIndex(new nt(new Uint16Array(this.leaves.indices),1)),t.computeVertexNormals(),t.computeBoundingSphere();const n=new Zc({name:"leaves",map:ja(this.options.leaves.type),color:new ve(this.options.leaves.tint),side:St,alphaTest:this.options.leaves.alphaTest,dithering:!0});n.onBeforeCompile=i=>{i.uniforms.uTime={value:0},i.uniforms.uWindStrength={value:new w(.5,0,.5)},i.uniforms.uWindFrequency={value:.5},i.uniforms.uWindScale={value:70},i.vertexShader=`
        uniform float uTime;
        uniform vec3 uWindStrength;
        uniform float uWindFrequency;
        uniform float uWindScale;
        `+i.vertexShader,i.vertexShader=i.vertexShader.replace("void main() {",`
        // GLSL Simplex Noise 3D
        // Source: https://github.com/ashima/webgl-noise

        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        vec3 fade(vec3 t) {
            return t*t*t*(t*(t*6.0-15.0)+10.0);
        }

        // Classic Simplex Noise 3D
        float simplex3(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0);
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx);

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C 
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0 * C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute( 
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to the mapping's singularity.
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 g0 = vec3(a0.xy,h.x);
            vec3 g1 = vec3(a0.zw,h.y);
            vec3 g2 = vec3(a1.xy,h.z);
            vec3 g3 = vec3(a1.zw,h.w);

            // Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
            g0 *= norm.x;
            g1 *= norm.y;
            g2 *= norm.z;
            g3 *= norm.w;

            // Mix contributions from the four corners
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(g0,x0), dot(g1,x1), 
                                          dot(g2,x2), dot(g3,x3) ) );
        }
          
        void main() {`),i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4(transformed, 1.0);

        float windOffset = 2.0 * 3.14 * simplex3(mvPosition.xyz / uWindScale);
        vec3 windSway = uv.y * uWindStrength * (
          0.5 * sin(uTime * uWindFrequency + windOffset) +
          0.3 * sin(2.0 * uTime * uWindFrequency + 1.3 * windOffset) +
          0.2 * sin(5.0 * uTime * uWindFrequency + 1.5 * windOffset)
        );
        mvPosition.xyz += windSway;

        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `),n.userData.shader=i},this.leavesMesh.geometry.dispose(),this.leavesMesh.geometry=t,this.leavesMesh.material.dispose(),this.leavesMesh.material=n,this.leavesMesh.castShadow=!0,this.leavesMesh.receiveShadow=!0}createTrellis(){this.trellisMesh&&(this.remove(this.trellisMesh),this.trellisMesh.dispose(),this.trellisMesh=null),this.options.trellis.enabled&&this.options.trellis.visible&&(this.trellisMesh=new tM(this.options.trellis),this.trellisMesh.generate(),this.add(this.trellisMesh))}getNearestTrellisPoint(t){const n=this.options.trellis,i=n.position.x,a=n.position.y,r=n.position.z,o=i-n.width/2,l=i+n.width/2,c=a,u=a+n.height,h=Math.max(o,Math.min(l,t.x)),d=Math.max(c,Math.min(u,t.y)),f=Math.round((d-c)/n.spacing)*n.spacing+c,g=Math.max(c,Math.min(u,f)),_=Math.round((h-o)/n.spacing)*n.spacing+o,m=Math.max(o,Math.min(l,_)),p=new w(h,g,r),E=new w(m,d,r),T=t.distanceTo(p),v=t.distanceTo(E);return T<v?p:E}calculateTrellisForce(t,n){const i=this.options.trellis,a=this.getNearestTrellisPoint(t),r=t.distanceTo(a);if(r>i.force.maxDistance||r<.001)return null;const o=new w().subVectors(a,t).normalize(),l=1-Math.pow(r/i.force.maxDistance,i.force.falloff),c=i.force.strength*l/n;return{direction:o,strength:c}}get vertexCount(){return(this.branches.verts.length+this.leaves.verts.length)/3}get triangleCount(){return(this.branches.indices.length+this.leaves.indices.length)/3}}const Qt=new w(-.52,.6,-.61).normalize(),Ki=new ve().setRGB(.66,.76,.68,rt),ei=new ve().setRGB(1,.86,.66,rt),ro=`
#include <tonemapping_fragment>
#include <colorspace_fragment>
`,nr={zenith:new w(.2,.42,.76),horizon:new w(.62,.76,.9)};function iM(s){Qt.set(...s.sun).normalize(),Ki.setRGB(...s.fog,rt),ei.setRGB(...s.sunColor,rt),nr.zenith.set(...s.zenith),nr.horizon.set(...s.horizon)}function sM(s,e,t,n){const i={value:0};s.fog=new ml(Ki,n.fogDensity),s.background=Ki;const a=new fh(n.hemiSky,n.hemiGround,n.hemiPower),r=new bl(ei,n.sunPower);r.castShadow=!0,r.shadow.mapSize.set(t.shadow,t.shadow);const o=t.shadowRange,l=r.shadow.camera;l.left=-o,l.right=o,l.top=o,l.bottom=-o,l.near=1,l.far=260,r.shadow.bias=-4e-4,r.shadow.normalBias=.06,s.add(a,r,r.target);const c=new lt(new ur(900,32,16),new Tt({side:Ht,depthWrite:!1,fog:!1,uniforms:{uSun:{value:Qt},uFog:{value:Ki},uSunCol:{value:ei},uTime:i,uZen:{value:nr.zenith},uHor:{value:nr.horizon}},vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vD; uniform vec3 uSun, uFog, uSunCol, uZen, uHor; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float fb(vec2 p){ float a=0.5,s=0.0; for(int i=0;i<5;i++){ s+=a*n(p); p*=2.03; a*=0.5; } return s; }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        vec3 col = mix(uHor, uZen, pow(y, 0.55));
        vec2 cp = d.xz / (d.y + 0.25) * 1.3 + uTime * 0.006;
        float c = smoothstep(0.48, 0.78, fb(cp)) * smoothstep(0.02, 0.3, d.y);
        col = mix(col, vec3(1.0, 0.97, 0.92), c * 0.85);
        float s = max(dot(d, uSun), 0.0);
        col += uSunCol * (pow(s, 900.0) * 14.0 + pow(s, 14.0) * 0.45 + pow(s, 3.0) * 0.12);
        col = mix(uFog, col, smoothstep(0.0, 0.3, d.y));
        gl_FragColor = vec4(col, 1.0);${ro} }`}));c.renderOrder=-10,c.frustumCulled=!1,s.add(c);const u=wl(909),h=[],d=[],f=[],g=[],_=new w().crossVectors(Qt,new w(0,1,0)).normalize(),m=new w().crossVectors(Qt,_).normalize();let p=0,E=0;for(;p<t.shafts&&E++<5e3;){const G=(u()-.5)*320,L=(u()-.5)*320,U=ii(G,L),V=xt(G,L);if(U<.35||U>.9||V<.3)continue;const N=24+u()*16,J=1.6+u()*3.2,z=u();for(const H of[_,m]){const te=h.length/3;for(const[se,ye]of[[-1,0],[1,0],[1,1],[-1,1]])h.push(G+H.x*J*se+Qt.x*N*ye,V-.3+H.y*J*se+Qt.y*N*ye,L+H.z*J*se+Qt.z*N*ye),d.push(se*.5+.5,ye),f.push(z);g.push(te,te+1,te+2,te,te+2,te+3)}p++}const T=new gt;T.setAttribute("position",new ct(h,3)),T.setAttribute("uv",new ct(d,2)),T.setAttribute("aSeed",new ct(f,1)),T.setIndex(g);const v=new lt(T,new Tt({transparent:!0,depthWrite:!1,blending:as,side:St,uniforms:{uTime:i,uCol:{value:ei}},vertexShader:`attribute float aSeed; varying vec2 vUv; varying float vS; varying float vDist;
      void main(){ vUv = uv; vS = aSeed; vec4 mv = modelViewMatrix * vec4(position,1.0); vDist = length(mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec2 vUv; varying float vS; varying float vDist; uniform float uTime; uniform vec3 uCol;
      void main(){
        float a = pow(sin(vUv.x * 3.14159), 2.0) * smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
        a *= smoothstep(2.0, 16.0, vDist) * (1.0 - smoothstep(60.0, 115.0, vDist));
        a *= 0.65 + 0.35 * sin(uTime * 0.35 + vS * 40.0);
        gl_FragColor = vec4(uCol * a * 0.06, 1.0);${ro} }`}));v.frustumCulled=!1,v.renderOrder=5,s.add(v);const P=t.dust,R=new Float32Array(P*3),A=new Float32Array(P);for(let G=0;G<P;G++)R[G*3]=u()*40,R[G*3+1]=u()*16,R[G*3+2]=u()*40,A[G]=u();const I=new gt;I.setAttribute("position",new nt(R,3)),I.setAttribute("aSeed",new nt(A,1));const S=new lh(I,new Tt({transparent:!0,depthWrite:!1,blending:as,uniforms:{uTime:i,uCam:{value:new w},uCol:{value:ei},uScale:{value:1}},vertexShader:`attribute float aSeed; uniform float uTime, uScale; uniform vec3 uCam; varying float vA;
      void main(){
        vec3 p = position + vec3(uTime * 0.22, sin(uTime * 0.5 + aSeed * 30.0) * 0.4 - uTime * 0.03, uTime * 0.13);
        p.x += sin(uTime * 0.7 + aSeed * 50.0) * 0.5;
        vec3 box = vec3(40.0, 16.0, 40.0);
        p = mod(p - uCam + box * 0.5, box) - box * 0.5 + uCam;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dist = -mv.z;
        vA = smoothstep(0.4, 2.5, dist) * (1.0 - smoothstep(12.0, 20.0, dist)) * (0.35 + 0.65 * aSeed);
        gl_PointSize = uScale * (0.6 + aSeed * 1.2) * 11.0 / max(dist, 0.5);
        gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; uniform vec3 uCol;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(uCol * a * a * vA * 0.4, 1.0);${ro} }`}));S.frustumCulled=!1,S.renderOrder=6,s.add(S);const M=new lt(new Gn(700,700).rotateX(-Math.PI/2),new Tt({transparent:!0,fog:!0,uniforms:fs.merge([ce.fog,{uN:{value:null},uTime:{value:0},uSun:{value:Qt},uSunCol:{value:ei},uFog:{value:Ki}}]),vertexShader:`varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`varying vec3 vW; uniform sampler2D uN; uniform float uTime; uniform vec3 uSun, uSunCol, uFog;
      #include <fog_pars_fragment>
      void main(){
        vec2 u = vW.xz;
        vec3 n1 = texture2D(uN, u * 0.11 + vec2(uTime * 0.012, uTime * 0.008)).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(uN, u * 0.27 - vec2(uTime * 0.016, -uTime * 0.011)).xyz * 2.0 - 1.0;
        vec3 n = normalize(vec3((n1.x + n2.x) * 0.22, 1.0, (n1.y + n2.y) * 0.22));
        vec3 v = normalize(cameraPosition - vW);
        vec3 rf = reflect(-v, n);
        float fr = 0.03 + 0.97 * pow(1.0 - max(dot(v, n), 0.0), 5.0);
        vec3 skyc = mix(uFog, vec3(0.3, 0.5, 0.8), pow(max(rf.y, 0.0), 0.6));
        vec3 refl = mix(vec3(0.035, 0.07, 0.03), skyc, smoothstep(0.18, 0.62, rf.y + (n1.x + n2.y) * 0.08));
        refl += uSunCol * pow(max(dot(rf, uSun), 0.0), 420.0) * 6.0;
        vec3 deep = vec3(0.02, 0.045, 0.035);
        gl_FragColor = vec4(mix(deep, refl, fr), mix(0.72, 1.0, fr));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}));M.material.uniforms.uN.value=e.waterN,M.material.uniforms.uTime=i,M.material.uniforms.uSun.value=Qt,M.material.uniforms.uSunCol.value=ei,M.material.uniforms.uFog.value=Ki,M.position.y=0,M.renderOrder=2,s.add(M);const k=new w;return{time:i,sun:r,update(G,L,U){i.value=G,c.position.copy(L),S.material.uniforms.uCam.value.copy(L),S.material.uniforms.uScale.value=U;const V=o*2/t.shadow*4;k.set(Math.round(L.x/V)*V,11,Math.round(L.z/V)*V),r.target.position.copy(k),r.position.copy(k).addScaledVector(Qt,130)}}}const Eh={value:0},ss={value:new w(0,1,0)};new w(0,1,0);function fu(s,{sway:e,flutter:t,mode:n,fade:i=0}){return s.onBeforeCompile=a=>{a.uniforms.uTime=Eh;const r=n==="tree"?"pow(clamp(transformed.y / 20.0, 0.0, 1.0), 1.5) + uv.y * 0.12":"uv.y * uv.y";a.vertexShader=`uniform float uTime;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec4 wp_ = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
      #else
        vec4 wp_ = modelMatrix * vec4(transformed, 1.0);
      #endif
      float sw_ = sin(uTime * 1.1 + wp_.x * 0.13 + wp_.z * 0.11) + 0.5 * sin(uTime * 2.3 + wp_.x * 0.31 - wp_.z * 0.2);
      float fl_ = sin(uTime * 4.6 + wp_.x * 2.1 + wp_.y * 1.7 + wp_.z * 1.3);
      float hf_ = ${r};
      transformed.x += (sw_ * ${e.toFixed(3)} + fl_ * ${t.toFixed(3)}) * hf_;
      transformed.z += (sw_ * ${(e*.6).toFixed(3)} - fl_ * ${t.toFixed(3)}) * hf_;
      ${i?`transformed.y *= 1.0 - smoothstep(${(i*.7).toFixed(1)}, ${i.toFixed(1)}, distance(wp_.xyz, cameraPosition));`:""}`),a.uniforms.uSunView=ss,a.fragmentShader=`uniform vec3 uSunView;
`+a.fragmentShader.replace("#include <normal_fragment_begin>",Ve.normal_fragment_begin.replace("normal *= faceDirection;","")+`
      ${n==="tree"?"if (dot(normal, uSunView) < 0.0) normal = -normal; normal = normalize(mix(normal, uSunView, 0.3));":""}`)},s.customProgramCacheKey=()=>`wind-${n}-${e}-${t}-${i}`,s}function aM(s,e){return s.onBeforeCompile=t=>{t.vertexShader=`varying vec3 vWN_;
varying vec3 vWP_;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        mat4 mm_ = modelMatrix * instanceMatrix;
      #else
        mat4 mm_ = modelMatrix;
      #endif
      vWN_ = normalize(mat3(mm_) * objectNormal);
      vWP_ = (mm_ * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=`varying vec3 vWN_;
varying vec3 vWP_;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float mn_ = sin(vWP_.x * 3.1) * sin(vWP_.z * 2.7 + vWP_.y * 2.0) * 0.5 + 0.5;
      float mk_ = smoothstep(0.25, 0.75, vWN_.y + mn_ * 0.35 - 0.1) * ${e.toFixed(2)};
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075, 0.115, 0.04) * (0.7 + mn_ * 0.6), mk_);`)},s.customProgramCacheKey=()=>"moss"+e,s}function rM(s,e,t,n=0,i=0,a=9,r=8){const o=new ui(1,1,1,a,r,!0),l=o.attributes.position,c=o.attributes.uv;for(let u=0;u<l.count;u++){const h=l.getY(u)+.5,d=Math.atan2(l.getZ(u),l.getX(u));let f=zt(e,t,Math.pow(h,.85))*(1+.9*Math.exp(-h*s*1.3));f*=1+.16*Math.sin(d*3+1)*Math.exp(-h*s*.9),l.setXYZ(u,Math.cos(d)*f+n*h*h,h*s-.4,Math.sin(d)*f+i*h*h),c.setXY(u,c.getX(u)*2,h*s/2.6)}return o}class oM{constructor(){this.p=[],this.n=[],this.uv=[],this.idx=[]}add(e,t,n,i){const a=this.p.length/3;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])this.p.push(e.x+t.x*r+n.x*o,e.y+t.y*r+n.y*o,e.z+t.z*r+n.z*o),this.n.push(i.x,i.y,i.z),this.uv.push(r*.5+.5,o*.5+.5);this.idx.push(a,a+1,a+2,a,a+2,a+3)}build(){const e=new gt;return e.setAttribute("position",new ct(this.p,3)),e.setAttribute("normal",new ct(this.n,3)),e.setAttribute("uv",new ct(this.uv,2)),e.setIndex(this.idx),e}}function pu(s,e,t,n){const i=new nM,a=i.options;a.copy(structuredClone(Al[s])),a.seed=e;const r=a.branch.levels;if(t===0){for(const h of[1,2,3])a.branch.sections[h]=Math.max(3,Math.round(a.branch.sections[h]*.6)),a.branch.segments[h]=Math.min(a.branch.segments[h],4);a.leaves.count=Math.max(2,Math.round(a.leaves.count*.8)),a.leaves.size*=1.1}if(t===1){a.leaves.count=Math.max(2,Math.round(a.leaves.count*.6)),a.leaves.size*=1.25;for(const h of[0,1,2,3])a.branch.sections[h]=Math.max(2,Math.round(a.branch.sections[h]/2)),a.branch.segments[h]=Math.min(a.branch.segments[h],h===0?6:3)}if(t===2){for(const h of[0,1,2,3])a.branch.sections[h]=h===0?Math.max(3,Math.round(a.branch.sections[h]/4)):2,a.branch.segments[h]=h===0?4:3,h<r&&(a.branch.children[h]=Math.max(1,Math.round(a.branch.children[h]*(r===1?.4:h===0?.8:.6))));a.leaves.count=Math.max(1,Math.round(a.leaves.count*.3)),a.leaves.size*=2.3}i.generate();const o=i.branchesMesh.geometry,l=i.leavesMesh.geometry;o.computeBoundingBox(),l.computeBoundingBox();const c=Math.max(o.boundingBox.max.y,l.boundingBox.max.y),u=n/c;for(const h of[o,l])h.scale(u,u,u),h.translate(0,-.25,0),h.computeBoundingSphere(),h.computeBoundingBox();return{wood:o,leaves:l,radius:a.branch.radius[0]*u,tris:(o.index.count+l.index.count)/3}}function lM(){const s=new oM;for(let e=0;e<2;e++){const t=e*1.5708+.4;s.add(new w(0,.5,0),new w(Math.cos(t)*.5,0,Math.sin(t)*.5),new w(0,.5,0),new w(0,1,0))}return s.build()}function Ys(s,e){const t=new ve(e),n=new Float32Array(s.attributes.position.count*3);for(let i=0;i<n.length;i+=3)n[i]=t.r,n[i+1]=t.g,n[i+2]=t.b;return s.setAttribute("color",new nt(n,3)),s.deleteAttribute("uv"),s.index?s.toNonIndexed():s}function cM(s){const e=new ui(.006,.008,.3,4,1,!0);e.translate(0,.15,0);const t=new Qa(.055,7);t.rotateX(-Math.PI/2+.35),t.translate(0,.31,0);const n=new Qa(.018,6);return n.rotateX(-Math.PI/2+.35),n.translate(0,.316,.002),xh([Ys(e,"#4f7a2a"),Ys(t,s),Ys(n,"#e8b020")])}function uM(s){const e=new ui(.018,.026,.1,7,1,!0);e.translate(0,.05,0);const t=new ur(.07,10,5,0,6.283,0,1.5);return t.scale(1,.62,1),t.translate(0,.085,0),xh([Ys(e,"#e9e0cc"),Ys(t,s)])}function mu(s,e){let t=null;s.scene.updateMatrixWorld(!0),s.scene.traverse(r=>{r.isMesh&&!t&&(t=r)});const n=t.geometry.clone().applyMatrix4(t.matrixWorld);n.computeBoundingBox();const i=n.boundingBox,a=e/Math.max(i.max.x-i.min.x,i.max.z-i.min.z);return n.translate(-(i.min.x+i.max.x)/2,-i.min.y,-(i.min.z+i.max.z)/2),n.scale(a,a,a),n.attributes.normal||n.computeVertexNormals(),n.computeBoundingSphere(),{geo:n,mat:t.material}}function hM(s,e){const t=new yn;for(const f of e)f.geo.computeBoundingBox(),t.union(f.geo.boundingBox);const n=2*Math.max(-t.min.x,t.max.x,-t.min.z,t.max.z),i=t.min.y,a=t.max.y-i,r=new th,o=new ta(-n/2,n/2,t.max.y,i,.1,400);o.position.set(0,0,200);const l=new bl(ei,2.4);l.position.set(.5,.8,.6),r.add(new fh(12900064,5660735,1.25),l);for(const f of e){const g=new lt(f.geo,f.mat);g.frustumCulled=!1,r.add(g)}const c=new Yt(256,512,{generateMipmaps:!0,minFilter:dn,magFilter:Ot}),u=ss.value.clone(),h=new ve;s.getClearColor(h);const d=s.getClearAlpha();return ss.value.set(.5,.8,.6).normalize(),s.setRenderTarget(c),s.setClearColor(1451023,0),s.clear(),s.render(r,o),s.setRenderTarget(null),s.setClearColor(h,d),ss.value.copy(u),{tex:c.texture,w:n,h:a,y0:i}}const dM=new Gn(1,1).translate(0,.5,0);function fM(s){const e=new tn({map:s.tex,alphaTest:.5,side:St});return e.onBeforeCompile=t=>{t.uniforms.uDim={value:new w(s.w,s.h,s.y0)},t.vertexShader=`uniform vec3 uDim;
`+t.vertexShader.replace("#include <project_vertex>",`
      vec4 c_ = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      float sx_ = length(instanceMatrix[0].xyz), sy_ = length(instanceMatrix[1].xyz);
      vec3 tc_ = cameraPosition - c_.xyz; vec3 rt_ = normalize(vec3(tc_.z, 0.0, -tc_.x));
      vec3 wp_ = c_.xyz + rt_ * position.x * uDim.x * sx_ + vec3(0.0, (uDim.z + position.y * uDim.y) * sy_, 0.0);
      vec4 mvPosition = viewMatrix * vec4(wp_, 1.0);
      gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>"impostor",e}class gu{constructor(e){this.chunk=e,this.groups=new Map}add(e,t,n){const i=t.elements,a=Math.floor((i[12]+400)/this.chunk),r=Math.floor((i[14]+400)/this.chunk),o=e+"|"+a+"|"+r;let l=this.groups.get(o);l||(l={key:e,m:[],c:[]},this.groups.set(o,l));for(let c=0;c<16;c++)l.m.push(i[c]);n&&l.c.push(n.r,n.g,n.b)}build(e,t){const n=[];for(const i of this.groups.values())for(const a of e[i.key]){const r=i.m.length/16,o=new xl(a.geo,a.mat,r);o.instanceMatrix.array.set(i.m),o.instanceMatrix.needsUpdate=!0,i.c.length&&a.tint!==!1&&(o.instanceColor=new ea(new Float32Array(i.c),3)),o.castShadow=!!a.cast,o.receiveShadow=a.receive!==!1,a.depth&&(o.customDepthMaterial=a.depth),o.computeBoundingSphere(),a.tall&&(o.boundingSphere.radius+=36),o.matrixAutoUpdate=!1,o.userData.lod=a.lod,t.add(o),n.push(o)}return n}}const pM={oak:{presets:["Oak Large","Oak Medium","Ash Large"],h:[25,20,23],sway:.14,flutter:.035},spruce:{presets:["Pine Large","Pine Medium","Pine Large"],h:[31,24,27],sway:.1,flutter:.015},birch:{presets:["Aspen Large","Aspen Medium","Aspen Large"],h:[19,16,21],sway:.2,flutter:.05},bush:{presets:["Bush 1","Bush 2","Bush 3"],h:[2.3,1.8,2.7],sway:.03,flutter:.03},young:{presets:["Oak Small","Pine Small","Aspen Small"],h:[5.5,7,6],sway:.08,flutter:.04}},mM=s=>new Promise(e=>{const t=()=>s.image?e():setTimeout(t,30);t()});async function gM(s,e,t,n,i,a=[]){const r=wl(2026+n.seed),o=new nn;s.add(o);const l=[],c=new vh().setDRACOLoader(new Dx().setDecoderPath("models/")),[u,h]=await Promise.all([Promise.all(["rock1","rock2","rock3"].map(j=>c.loadAsync(`models/${j}.glb`))),c.loadAsync("models/grass.glb")]),d=["oak","pine","birch"],f=["oak","pine","aspen","ash"];await Promise.all([...d.flatMap(j=>[ai(j,"color"),ai(j,"normal")]),...f.map(ja)].map(mM));const g=new Map,_=(j,Q,ee)=>{const re=j+Q+"/"+ee;if(!g.has(re)){const C=ai(j,"color").clone(),Fe=ai(j,"normal").clone();for(const Ce of[C,Fe])Ce.repeat.set(Q,ee),Ce.needsUpdate=!0;g.set(re,aM(new ni({map:C,normalMap:Fe}),j==="birch"?.05:.22))}return g.get(re)},m=new Map,p=(j,Q,ee)=>{const re=j+Q;if(!m.has(re)){const C=ja(j),Fe=fu(new ni({map:C,alphaTest:.5,side:St}),{sway:Q,flutter:ee,mode:"tree"});j==="aspen"&&Fe.color.setRGB(...n.aspen),m.set(re,{mat:Fe,depth:new eh({depthPacking:Nu,map:C,alphaTest:.5,side:St})})}return m.get(re)},E=(j,Q)=>fu(new ni({map:j,alphaTest:Q,side:St}),{sway:.06,flutter:.03,mode:"cover",fade:t.coverDist}),T={small:new ni({vertexColors:!0,side:St})},v={},P={},R={};for(const[j,Q]of Object.entries(pM))Q.presets.forEach((ee,re)=>{const C=Al[ee],Fe=C.bark.textureScale,Ce=_(C.bark.type,Fe.x,1/Fe.y),Ie=p(C.leaves.type,Q.sway,Q.flutter),be=[],Xe=j==="bush"||j==="young",ge=Q.h[re]*(Xe?1:n.hMul),y=1e3+re*77+j.length+n.seed*13,x=pu(ee,y,2,ge),F=[{geo:x.wood,mat:Ce,cast:!0,tint:!1,lod:"lo"},{geo:x.leaves,mat:Ie.mat,depth:Ie.depth,cast:!0,lod:"lo"}];if(t.lodDist>0){const K=pu(ee,y,Xe?1:0,ge);be.push({geo:K.wood,mat:Ce,cast:!0,tint:!1,lod:"hi"},{geo:K.leaves,mat:Ie.mat,depth:Ie.depth,cast:!0,lod:"hi"}),R[j+re+"hi"]=K.tris}be.push(...F),j!=="bush"&&be.push({geo:dM,mat:fM(hM(i,F)),lod:"imp",receive:!1,tall:!0}),P[j+re]=x.radius,R[j+re+"lo"]=x.tris,v[j+re]=be});u.forEach((j,Q)=>{const ee=mu(j,2),re=ee.mat;v["rock"+Q]=[{geo:ee.geo,mat:new ni({map:re.map,normalMap:re.normalMap,color:new ve(2.6,2.6,2.5),side:St}),cast:!0}]});const A=mu(h,.75);A.geo.attributes.normal.array.fill(0).forEach((j,Q,ee)=>{Q%3===1&&(ee[Q]=1)}),A.mat.map.anisotropy=4,v.grass=[{geo:A.geo,mat:E(A.mat.map,.4)}],["ash","oak","pine"].forEach((j,Q)=>{v["sprig"+Q]=[{geo:lM(),mat:E(ja(j),.5)}]}),v.log=[{geo:rM(7,.34,.26,0,0,9,3),mat:_("oak",1,1),cast:!0,tint:!1}],["#f4f1e6","#f2d23c","#b48ae0","#ee8fb0"].forEach((j,Q)=>{v["flower"+Q]=[{geo:cM(j),mat:T.small,tint:!1}]}),["#b23a22","#9a6a3c"].forEach((j,Q)=>{v["shroom"+Q]=[{geo:uM(j),mat:T.small,tint:!1}]});const I=new Be,S=new ot,M=new vt,k=new w,G=new w,L=new ve,U=(j,Q,ee,re,C,{sink:Fe=0,lean:Ce=0,sy:Ie=1,c:be=null,rx:Xe=0,rz:ge=0}={})=>{M.set(Xe+(r()-.5)*Ce,r()*6.283,ge+(r()-.5)*Ce,"YXZ"),S.setFromEuler(M),G.set(ee,xt(ee,re)-Fe,re),k.set(C,C*Ie,C),j.add(Q,I.compose(G,S,k),be)},V=(j,Q,ee)=>a.some(re=>(re.x-j)**2+(re.z-Q)**2<ee*ee);for(const j of a)l.push({x:j.x,z:j.z,r:.25});const N=new gu(50),J=250,z=t.treeCell;for(let j=-J;j<J;j+=z)for(let Q=-J;Q<J;Q+=z){const ee=j+r()*z*.85,re=Q+r()*z*.85,C=xt(ee,re);if(C<.55)continue;const Fe=ii(ee,re);if(qs(ee,re)>.35&&r()>.004||r()>.2+.8*Fe||V(ee,re,3.6))continue;const Ie=_h(ee,re),be=r()*3|0,Xe=C<2||Fe<.45,ge=r()<n.young,y=ge?"young":r()<Ie*.9?"spruce":r()<Math.min(.9,n.birch*(Xe?3:1))?"birch":"oak",x=.8+r()*.5,F=.6+r()*.35;L.setRGB(F*(.92+r()*.16)*n.leaf[0],F*n.leaf[1],F*(.85+r()*.2)*n.leaf[2]),U(N,y+be,ee,re,x,{lean:.06,sy:.92+r()*.2,c:L,sink:ge?.2:1.3}),ge||l.push({x:ee,z:re,r:P[y+be]*x+.3})}for(let j=0;j<t.bushes*n.bushMul;j++){const Q=(r()-.5)*420,ee=(r()-.5)*420;if(V(Q,ee,2.6)||xt(Q,ee)<.5||qs(Q,ee)>.7||r()>.35+ii(Q,ee)*.5)continue;const re=.55+r()*.3;L.setRGB(re*n.leaf[0],re*n.leaf[1],re*.9*n.leaf[2]),U(N,"bush"+(r()*3|0),Q,ee,.6+r()*.7,{sink:.05,c:L})}for(let j=0;j<t.rocks;j++){const Q=(r()-.5)*400,ee=(r()-.5)*400,re=r()<.12;if(xt(Q,ee)<-.6||V(Q,ee,3))continue;const C=re?.9+r()*1.3:.15+r()*.45,Fe=.7+r()*.3;L.setRGB(Fe,Fe,Fe),U(N,"rock"+(r()*3|0),Q,ee,C,{sink:C*.35,lean:.5,sy:.7+r()*.5,c:L}),C>.8&&l.push({x:Q,z:ee,r:C*.85})}for(let j=0;j<t.logs;j++){const Q=(r()-.5)*360,ee=(r()-.5)*360;if(!(xt(Q,ee)<.4||ii(Q,ee)<.3)){U(N,"log",Q,ee,.8+r()*.5,{sink:-.22,rz:Math.PI/2,lean:.06});for(let re=0;re<9;re++){const C=Q+(r()-.5)*5,Fe=ee+(r()-.5)*5;U(N,"shroom"+(r()*2|0),C,Fe,.8+r()*1.6,{lean:.3})}}}const H=N.build(v,o),te=H.map(j=>({mesh:j,lod:j.userData.lod,c:j.boundingSphere.center.clone(),rad:j.boundingSphere.radius})),se=n.grassHue,ye=(j,Q)=>L.setRGB(j*(se[0]+Q*.13),j*se[1],j*se[2]),Ue=new gu(40),q=400*400;for(let j=0;j<q*t.grass*n.grassMul;j++){const Q=(r()-.5)*400,ee=(r()-.5)*400;if(xt(Q,ee)<.12)continue;const C=Math.max(qs(Q,ee),1-ii(Q,ee));r()>.1+C*.9||(ye(.75+r()*.5,r()),U(Ue,"grass",Q,ee,.7+r()*.7+C*.2,{sink:.03,sy:.7+r()*.6,c:L}))}for(let j=0;j<3e3*t.grass*40;j++){const Q=r()*6.283,ee=Math.sqrt(r())*(mt.r+6),re=mt.x+Math.cos(Q)*ee,C=mt.z+Math.sin(Q)*ee;ye(.85+r()*.5,r()),U(Ue,"grass",re,C,.8+r()*.7,{sink:.03,sy:.8+r()*.8,c:L}),r()<.05&&U(Ue,"flower"+(r()*4|0),re+r()-.5,C+r()-.5,.55+r()*.5,{lean:.3})}for(let j=0;j<q*t.ferns*n.underMul;j++){const Q=(r()-.5)*400,ee=(r()-.5)*400;if(xt(Q,ee)<.25||r()>ii(Q,ee)*.9+.08)continue;const C=.55+r()*.35;L.setRGB(C*n.leaf[0],C*n.leaf[1],C*.9*n.leaf[2]),U(Ue,"sprig"+(r()*3|0),Q,ee,.45+r()*.75,{sink:.02,lean:.2,c:L})}for(let j=0;j<1400;j++){const Q=r()*6.283,ee=yt.r*(.55+r()*.5),re=yt.x+Math.cos(Q)*ee,C=yt.z+Math.sin(Q)*ee,Fe=xt(re,C);Fe<-.25||Fe>.9||(ye(.9,.9),U(Ue,"grass",re,C,1.3+r()*.8,{sink:.05,sy:1.6+r()*1.2,c:L}))}const ie=Ue.build(v,o),de=ie.map(j=>({mesh:j,c:j.boundingSphere.center.clone(),rad:j.boundingSphere.radius})),le=new Map,Se=8;for(const j of l){const Q=Math.floor(j.x/Se)+","+Math.floor(j.z/Se);(le.get(Q)||le.set(Q,[]).get(Q)).push(j)}return{collide:j=>{const Q=Math.floor(j.x/Se),ee=Math.floor(j.z/Se);for(let re=-1;re<=1;re++)for(let C=-1;C<=1;C++){const Fe=le.get(Q+re+","+(ee+C));if(Fe)for(const Ce of Fe){const Ie=j.x-Ce.x,be=j.z-Ce.z,Xe=Math.hypot(Ie,be),ge=Ce.r+.35;Xe<ge&&Xe>1e-4&&(j.x=Ce.x+Ie/Xe*ge,j.z=Ce.z+be/Xe*ge)}}},colliders:l,treeCount:l.length,meshCount:H.length+ie.length,budget:R,update(j){for(const Q of de)Q.mesh.visible=Q.c.distanceTo(j)-Q.rad<t.coverDist;for(const Q of te){const ee=Q.c.distanceTo(j);if(ee-Q.rad>t.treeFar){Q.mesh.visible=!1;continue}const re=Math.max(0,ee-Q.rad*.6);Q.mesh.visible=Q.lod==="hi"?re<t.lodDist:Q.lod==="lo"?re>=t.lodDist&&re<t.impDist:Q.lod==="imp"?re>=t.impDist:!0}}}}function _M(s){const e=new Map,t=new Map,n=s.clone();return wh(s,n,function(i,a){e.set(a,i),t.set(i,a)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const a=i,r=e.get(i),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(l){return t.get(l)}),a.bind(a.skeleton,a.bindMatrix)}),n}function wh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)wh(s.children[n],e.children[n],t)}const xM=(s,e,t)=>{let n=((e-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return s+Math.max(-t,Math.min(t,n))},vM=s=>s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1)});function _u(s,e){const t=s.clone();t.deleteAttribute("normal"),e&&t.deleteAttribute("color"),t.morphAttributes.normal&&delete t.morphAttributes.normal;const n=Q_(t,.001);return n.computeVertexNormals(),n}async function yM(s,e,t){const n=new vh,i=wl(4242),a=t.live,r=[],o=(L,U)=>U?n.loadAsync(`models/${L}.glb`).catch(()=>null):null,[l,c,u,h]=await Promise.all([o("Fox",a.fox),o("Horse",a.horse),o("Stork",a.stork),o("Parrot",a.parrot)]),d=[],f=[];l&&l.scene.traverse(L=>{L.isSkinnedMesh&&(L.geometry=_u(L.geometry,!1),L.material.roughness=.9)});for(const L of[c,u,h])if(L){const U=L.scene.children[0];U.geometry=_u(U.geometry,L===c),U.material.flatShading=!1,U.material.vertexColors=L!==c,U.material.roughness=.85,U.material.needsUpdate=!0}if(l){const L=[[30,4],[-34,44],[70,-52],[-60,-30],[12,70],[58,40]].slice(0,e.foxes);for(const[U,V]of L){const N=_M(l.scene);N.scale.setScalar(.0068),vM(N),s.add(N);const J=new Jr(N),z={};for(const se of l.animations)z[se.name]=J.clipAction(se),z[se.name].play(),z[se.name].setEffectiveWeight(0);const H={obj:N,x:U,z:V,hx:U,hz:V,heading:i()*6.283,speed:0,state:"idle",timer:1+i()*4,tx:U,tz:V,w:{Survey:1,Walk:0,Run:0}};f.push(H),r.push({id:"redfox",range:28,cone:.985,pos:N.position,lift:.3});const te=(se,ye)=>xt(se,ye)>.25;d.push((se,ye)=>{const Ue=Math.hypot(ye.x-H.x,ye.z-H.z);Ue<9&&H.state!=="flee"&&(H.state="flee",H.timer=3.5+i()*2);let q=0,ie=H.heading;if(H.state==="idle"){if((H.timer-=se)<=0){for(let ee=0;ee<8;ee++){const re=i()*6.283,C=6+i()*22;if(H.tx=H.hx+Math.cos(re)*C,H.tz=H.hz+Math.sin(re)*C,te(H.tx,H.tz))break}H.state="walk"}}else H.state==="walk"?(ie=Math.atan2(H.tx-H.x,H.tz-H.z),q=1.15,Math.hypot(H.tx-H.x,H.tz-H.z)<.8&&(H.state="idle",H.timer=3+i()*7)):(ie=Math.atan2(H.x-ye.x,H.z-ye.z),q=6.2,(H.timer-=se)<=0&&Ue>16&&(H.state="idle",H.timer=2+i()*3,H.hx=H.x,H.hz=H.z));const de=H.x+Math.sin(ie)*2.5,le=H.z+Math.cos(ie)*2.5;q>0&&!te(de,le)&&(ie+=1.4,H.state==="walk"&&(H.state="idle",H.timer=.5)),H.heading=xM(H.heading,ie,se*(H.state==="flee"?5:2.2)),H.speed=zt(H.speed,q,1-Math.exp(-se*4));const Se=H.x+Math.sin(H.heading)*H.speed*se,ke=H.z+Math.cos(H.heading)*H.speed*se;te(Se,ke)&&(H.x=Se,H.z=ke),N.position.set(H.x,xt(H.x,H.z),H.z),N.rotation.y=H.heading;const j=H.speed>3?"Run":H.speed>.25?"Walk":"Survey",Q=1-Math.exp(-se*6);for(const ee in H.w)H.w[ee]=zt(H.w[ee],ee===j?1:0,Q),z[ee]&&z[ee].setEffectiveWeight(H.w[ee]);z.Walk&&(z.Walk.timeScale=Math.max(.5,H.speed/1.15)),J.update(se)})}}const g={pos:new w,speed:0};if(c){const L=c.scene.children[0],U=li.getLength(),V=new w,N=new w,J=[9067060,6044966,11041358,4008736,10119748,7227950,11569760];let z=.93,H=9;for(let te=0;te<e.horses;te++){const se=L.clone();se.material=L.material.clone(),se.material.color=new ve(J[te%J.length]),se.material.roughness=.75,se.scale.setScalar(.0088*(.92+i()*.16)),se.castShadow=!0,se.frustumCulled=!1,s.add(se),r.push({id:"konik",range:45,cone:.975,pos:se.position,lift:1});const ye=new Jr(se),Ue=ye.clipAction(c.animations[0]);Ue.play(),Ue.time=i();const q=1.15+i()*.2,ie=3.2*te+i()*1.5,de=(te%2?1:-1)*(.8+i()*1.6);d.push(le=>{const Se=((z-ie/U)%1+1)%1;li.getPointAt(Se,V),li.getTangentAt(Se,N);const ke=V.x-N.z*de,j=V.z+N.x*de;se.position.set(ke,xt(ke,j),j),se.rotation.y=Math.atan2(N.x,N.z),ye.update(le*q*(H/9)),te===0&&g.pos.copy(se.position)})}d.push(te=>{g.speed=H,z=(z+H*te/U)%1})}const _=(L,U,V,N,J,z,H)=>{if(!L)return;const te=L.scene.children[0].clone();H&&(te.material=te.material.clone(),te.material.vertexColors=!1,te.material.color.set(9277590)),r.push({id:J,range:z,cone:.985,pos:te.position,lift:0}),te.scale.setScalar(U),te.frustumCulled=!1,te.castShadow=!0,s.add(te);const se=new Jr(te),ye=se.clipAction(L.animations[0]);ye.play(),ye.time=i();let Ue=i()*100;const q=new w,ie=new w;d.push(de=>{Ue+=de,V(Ue,q),V(Ue+.1,ie),te.position.copy(q),te.rotation.set(0,Math.atan2(ie.x-q.x,ie.z-q.z),0),te.rotation.z=Math.atan2(ie.y-q.y,1)*.5,se.update(de*N)})};for(let L=0;L<e.birds;L++){const U=zt(mt.x,yt.x,i()),V=zt(mt.z,yt.z,i()),N=35+i()*45,J=34+i()*14,z=(i()<.5?-1:1)*(7.5/N),H=i()*6.283;_(u,.011,(te,se)=>se.set(U+Math.cos(te*z+H)*N,J+Math.sin(te*.2+H)*3,V+Math.sin(te*z+H)*N),.8,"whitestork",110)}for(let L=0;L<e.birds+2;L++){const U=i()*6.283,V=16+i()*16,N=10+i()*12,J=5+i()*5,z=.32+i()*.12,H=(i()-.5)*8;_(h,.0075,(te,se)=>se.set(mt.x+H+Math.sin(te*z+U)*V,J+Math.sin(te*.9+U)*1.6+2.4,mt.z+Math.sin(te*z*2+U*2)*N),1.6,a.parrot==="grey"?"greyparrot":"macaw",45,a.parrot==="grey")}const m=Math.max(1,Math.round(e.butterflies*(a.butterflies||1))),p=new gt;p.setAttribute("position",new ct([0,0,-.03,.07,0,-.06,.08,0,.03,0,0,.04,0,0,-.03,-.07,0,-.06,-.08,0,.03,0,0,.04],3)),p.setIndex([0,1,2,0,2,3,4,6,5,4,7,6]),p.setAttribute("aPhase",new ea(Float32Array.from({length:m},()=>i()*6.283),1));const E={value:0},T=new tn({side:St});T.onBeforeCompile=L=>{L.uniforms.uT=E,L.vertexShader=`uniform float uT; attribute float aPhase;
`+L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float fa_ = sin(uT * 22.0 + aPhase) * 1.1; float ax_ = abs(transformed.x);
      transformed.y += ax_ * sin(fa_); transformed.x = sign(transformed.x) * ax_ * cos(fa_);`)};const v=new xl(p,T,m);v.frustumCulled=!1;const P=[16031776,16643808,6990064,15781952,15231546],R=[],A=new Be,I=new ot,S=new vt,M=new w(1,1,1),k=new w;for(let L=0;L<m;L++){const U=i()*6.283,V=Math.sqrt(i())*mt.r;R.push({x:mt.x+Math.cos(U)*V,z:mt.z+Math.sin(U)*V,ph:i()*100,sp:.5+i()*.6,h:.5+i()*1.2}),v.setColorAt(L,new ve(P[i()*P.length|0]))}s.add(v);let G=0;return d.push(L=>{G+=L,E.value=G;for(let U=0;U<m;U++){const V=R[U],N=G*V.sp+V.ph,J=V.x+Math.sin(N*.7)*3+Math.sin(N*1.9)*.8,z=V.z+Math.cos(N*.53)*3+Math.cos(N*2.3)*.8,H=Math.atan2(Math.cos(N*.7)*2.1+Math.cos(N*1.9)*1.5,-Math.sin(N*.53)*1.6-Math.sin(N*2.3)*1.8);k.set(J,xt(J,z)+V.h+Math.sin(N*3.1)*.25,z),S.set(.3,H,0,"YXZ"),I.setFromEuler(S),v.setMatrixAt(U,A.compose(k,I,M))}v.instanceMatrix.needsUpdate=!0}),{foxes:f,herd:g,live:r,hasHerd:!!(c&&a.horse),update(L,U){for(const V of d)V(L,U)}}}const MM=1.68,Bs=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t*n));class bM{constructor(e,t,n){this.camera=e,this.dom=t,this.collide=n,this.x=0,this.z=0,this.y=0,this.vx=0,this.vz=0,this.vy=0,this.air=!1,this.yaw=0,this.pitch=0,this.yawS=0,this.pitchS=0,this.keys=new Set,this.enabled=!1,this.step=0,this.speed=0,this.onStep=null,this.touch={ids:[],lx:0,ly:0},addEventListener("keydown",a=>{this.keys.add(a.code),a.code==="Space"&&a.preventDefault()}),addEventListener("keyup",a=>this.keys.delete(a.code)),addEventListener("blur",()=>this.keys.clear()),document.addEventListener("mousemove",a=>{document.pointerLockElement===t&&this.look(a.movementX*.0021,a.movementY*.0021)}),t.addEventListener("touchstart",a=>{a.preventDefault();for(const r of a.changedTouches)this.touch.ids.push(r.identifier),this.touch.ids.length===1&&(this.touch.lx=r.clientX,this.touch.ly=r.clientY)},{passive:!1}),t.addEventListener("touchmove",a=>{a.preventDefault();for(const r of a.changedTouches)r.identifier===this.touch.ids[0]&&(this.look((r.clientX-this.touch.lx)*.005,(r.clientY-this.touch.ly)*.004),this.touch.lx=r.clientX,this.touch.ly=r.clientY)},{passive:!1});const i=a=>{for(const r of a.changedTouches)this.touch.ids=this.touch.ids.filter(o=>o!==r.identifier)};t.addEventListener("touchend",i),t.addEventListener("touchcancel",i)}look(e,t){this.yaw-=e,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-t))}place(e,t,n,i=0){this.x=e,this.z=t,this.y=Math.max(xt(e,t),-.9),this.vx=this.vz=this.vy=0,this.yaw=this.yawS=n,this.pitch=this.pitchS=i,this.apply(0)}update(e){const t=this.keys,n=this.touch.ids.length;let i=0,a=0;this.enabled&&(i=(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0)+(n>0?1:0),a=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0));const r=t.has("ShiftLeft")||t.has("ShiftRight")||n>1,o=xt(this.x,this.z);let l=r?7.6:3.3;o<-.25&&(l*=.5);const c=Math.hypot(i,a)||1,u=Math.sin(this.yawS),h=Math.cos(this.yawS),d=(-u*i+h*a)/c*l,f=(-h*i-u*a)/c*l,g=i||a?6:8;this.vx=Bs(this.vx,d,g,e),this.vz=Bs(this.vz,f,g,e),this.x+=this.vx*e,this.z+=this.vz*e,this.collide(this);const _=Math.hypot(this.x,this.z);_>Qr&&(this.x*=Qr/_,this.z*=Qr/_);const m=Math.max(xt(this.x,this.z),-.9);this.enabled&&t.has("Space")&&!this.air&&(this.vy=4.6,this.air=!0),this.air?(this.vy-=13*e,this.y+=this.vy*e,this.y<=m&&(this.y=m,this.air=!1,this.vy=0,this.onStep&&this.onStep(1.4,m<.05))):this.y=Bs(this.y,m,14,e),this.speed=Math.hypot(this.vx,this.vz);const p=Math.floor(this.step/Math.PI);this.step+=this.speed*e*(r?1.45:2.05),!this.air&&this.speed>.6&&Math.floor(this.step/Math.PI)!==p&&this.onStep&&this.onStep(Math.min(1,this.speed/5),m<.05),this.apply(e)}apply(e){this.yawS=e?Bs(this.yawS,this.yaw,22,e):this.yaw,this.pitchS=e?Bs(this.pitchS,this.pitch,22,e):this.pitch;const t=Math.min(1,this.speed/3.3)*(this.air?0:1),n=Math.sin(this.step*2)*.028*t,i=Math.cos(this.step)*.02*t,a=Math.cos(this.yawS),r=Math.sin(this.yawS);this.camera.position.set(this.x+a*i,this.y+MM+n,this.z-r*i),this.camera.rotation.set(this.pitchS,this.yawS,i*.25,"YXZ")}}class SM{constructor(e){this.ctx=null,this.muted=!1,this.insects=e.insects,this.birdBase=e.birdBase}start(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.master.gain.linearRampToValueAtTime(.9,t.currentTime+3);const n=t.sampleRate*4,i=t.createBuffer(1,n,t.sampleRate),a=i.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1;this.noiseBuf=i;const r=(o,l,c,u)=>{const h=t.createBufferSource();h.buffer=i,h.loop=!0;const d=t.createBiquadFilter();d.type=o,d.frequency.value=l,d.Q.value=c;const f=t.createGain();return f.gain.value=u,h.connect(d).connect(f).connect(this.master),h.start(0,Math.random()*3),{f:d,g:f}};if(this.wind=r("lowpass",320,.4,.16),this.leaves=r("bandpass",3800,.5,.035),this.water=r("bandpass",1300,.9,0),this.insects>0){const o=r("bandpass",5600,6,.011*this.insects),l=t.createOscillator(),c=t.createGain();l.frequency.value=43,c.gain.value=.009*this.insects,l.connect(c).connect(o.g.gain),l.start()}this.hooves=t.createGain(),this.hooves.gain.value=0,this.hooves.connect(this.master),this.t=0,this.nextBird=2,this.nextHoof=0}setMuted(e){this.muted=e,this.ctx&&this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.2)}chirp(e,t){const n=this.ctx,i=n.currentTime+.02,a=Math.random()*4|0,r=n.createStereoPanner?n.createStereoPanner():n.createGain();r.pan&&(r.pan.value=e),r.connect(this.master);const o=(c,u,h,d,f)=>{const g=n.createOscillator(),_=n.createGain();g.type="sine",g.frequency.setValueAtTime(u,c),g.frequency.exponentialRampToValueAtTime(h,c+d),_.gain.setValueAtTime(0,c),_.gain.linearRampToValueAtTime(f*t,c+d*.2),_.gain.exponentialRampToValueAtTime(1e-4,c+d),g.connect(_).connect(r),g.start(c),g.stop(c+d+.02)},l=this.birdBase*.85+Math.random()*this.birdBase;if(a===0){const c=3+(Math.random()*5|0);for(let u=0;u<c;u++)o(i+u*.13,l,l*(1.25+Math.random()*.3),.09,.05)}else if(a===1)for(let c=0;c<9;c++)o(i+c*.055,l*1.2,l*.9,.04,.04);else a===2?(o(i,780,760,.28,.07),o(i+.42,620,600,.36,.07)):(o(i,l,l*.7,.18,.05),o(i+.24,l*.8,l*1.3,.14,.05),o(i+.44,l*1.1,l*.85,.2,.05))}thud(e,t,n){const i=this.ctx,a=i.currentTime,r=i.createBufferSource();r.buffer=this.noiseBuf;const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=t;const l=i.createGain();l.gain.setValueAtTime(e,a),l.gain.exponentialRampToValueAtTime(1e-4,a+.16),r.connect(o).connect(l).connect(n||this.master),r.start(a,Math.random()*3,.2)}footstep(e,t){this.ctx&&!this.muted&&this.thud(.1*e+.04,t?2400:620+Math.random()*300)}update(e,t){if(!this.ctx)return;const n=this.ctx.currentTime;this.t+=e;const i=.5+.5*Math.sin(this.t*.23)*Math.sin(this.t*.071+1);this.wind.g.gain.setTargetAtTime(.09+i*.13,n,.5),this.wind.f.frequency.setTargetAtTime(240+i*260,n,.5),this.leaves.g.gain.setTargetAtTime(.012+i*.045,n,.4),this.water.g.gain.setTargetAtTime(t.waterNear*.06,n,.6),this.t>this.nextBird&&(this.nextBird=this.t+.6+Math.random()*3.2,this.chirp(Math.random()*2-1,.35+Math.random()*.65));const a=Math.max(0,1-t.herdDist/70);this.hooves.gain.setTargetAtTime(a*a,n,.2),a>0&&this.t>this.nextHoof&&(this.nextHoof=this.t+.07+Math.random()*.07,this.thud(.22,180+Math.random()*120,this.hooves))}}const ir={amazon:{nama:"Amazon",benua:"Amerika Selatan",hutan:"Hutan hujan Amazon, Brasil",blurb:"Hutan hujan terluas di dunia: kanopi rapat, udara lembap, dan sungai di mana-mana.",seed:3,conMul:0,conAdd:0,densAdd:.12,birch:.04,hMul:1.22,young:.2,bushMul:1.8,underMul:2.4,grassMul:.6,leaf:[.78,1,.7],aspen:[.3,.7,.22],ground:[.8,.86,.7],grassHue:[.16,.4,.07],fog:[.6,.74,.62],fogDensity:.0175,sun:[-.35,.86,-.36],sunColor:[1,.93,.78],sunPower:4,hemiSky:12574930,hemiGround:5531711,hemiPower:1.55,zenith:[.22,.46,.72],horizon:[.66,.8,.82],insects:.9,birdBase:2600,live:{parrot:"macaw",butterflies:1.6}},sumatra:{nama:"Sumatra",benua:"Asia",hutan:"Hutan hujan Leuser, Sumatra, Indonesia",blurb:"Satu-satunya tempat harimau, orangutan, gajah, dan badak hidup di hutan yang sama.",seed:7,conMul:0,conAdd:0,densAdd:.1,birch:.06,hMul:1.28,young:.2,bushMul:1.7,underMul:2.2,grassMul:.55,leaf:[.74,.98,.72],aspen:[.3,.7,.22],ground:[.78,.82,.68],grassHue:[.15,.38,.08],fog:[.64,.74,.68],fogDensity:.019,sun:[.42,.8,-.42],sunColor:[1,.9,.74],sunPower:3.8,hemiSky:12901588,hemiGround:5202496,hemiPower:1.55,zenith:[.26,.46,.7],horizon:[.7,.8,.8],insects:1,birdBase:2300,live:{butterflies:1.4}},kongo:{nama:"Kongo",benua:"Afrika",hutan:"Hutan hujan Cekungan Kongo, Afrika Tengah",blurb:"Hutan hujan terluas kedua di dunia, rumah gorila, okapi, dan gajah hutan.",seed:11,conMul:0,conAdd:0,densAdd:.08,birch:.03,hMul:1.25,young:.18,bushMul:1.6,underMul:2,grassMul:.7,leaf:[.82,.98,.66],aspen:[.3,.7,.22],ground:[.9,.8,.64],grassHue:[.2,.4,.07],fog:[.7,.76,.64],fogDensity:.0165,sun:[-.5,.74,.44],sunColor:[1,.88,.68],sunPower:4.1,hemiSky:13622472,hemiGround:6054976,hemiPower:1.5,zenith:[.3,.48,.7],horizon:[.76,.8,.74],insects:.8,birdBase:2e3,live:{parrot:"grey",butterflies:1.3}},amerikautara:{nama:"Amerika Utara",benua:"Amerika Utara",hutan:"Hutan konifer dan boreal, Kanada–Pasifik Barat Laut",blurb:"Hutan pinus dan cemara yang sejuk, wilayah beruang, serigala, dan berang-berang.",seed:19,conMul:.6,conAdd:.72,densAdd:.02,birch:.3,hMul:1.12,young:.16,bushMul:.8,underMul:.8,grassMul:.9,leaf:[.9,.98,.88],aspen:[.5,.74,.2],ground:[.84,.92,.84],grassHue:[.2,.36,.08],fog:[.68,.76,.8],fogDensity:.0125,sun:[.56,.5,-.66],sunColor:[1,.86,.7],sunPower:3.9,hemiSky:11980776,hemiGround:6713434,hemiPower:1.75,zenith:[.18,.4,.76],horizon:[.66,.78,.9],insects:0,birdBase:3e3,live:{fox:!0,butterflies:.5}},eropa:{nama:"Eropa",benua:"Eropa",hutan:"Hutan purba Białowieża, Polandia–Belarus",blurb:"Sisa hutan dataran rendah purba Eropa, tempat bison Eropa diselamatkan dari kepunahan.",seed:0,conMul:1,conAdd:0,densAdd:0,birch:.14,hMul:1,young:.14,bushMul:1,underMul:1,grassMul:1,leaf:[1,1,1],aspen:[.3,.7,.22],ground:[.86,.96,.84],grassHue:[.17,.36,.07],fog:[.66,.76,.68],fogDensity:.0135,sun:[-.52,.6,-.61],sunColor:[1,.86,.66],sunPower:4,hemiSky:12112614,hemiGround:6187592,hemiPower:1.5,zenith:[.2,.42,.76],horizon:[.62,.76,.9],insects:0,birdBase:2400,live:{horse:!0,stork:!0,butterflies:1}},australia:{nama:"Australia",benua:"Australia",hutan:"Hutan eukaliptus dan hutan basah Australia Timur",blurb:"Hutan terbuka berbatang pucat, tanah kemerahan, dan satwa berkantong yang tidak ada di benua lain.",seed:23,conMul:0,conAdd:0,densAdd:-.06,birch:.62,hMul:1.15,young:.1,bushMul:.9,underMul:.7,grassMul:1.2,leaf:[.92,.94,.8],aspen:[.42,.56,.3],ground:[1.12,.84,.62],grassHue:[.3,.36,.1],fog:[.8,.8,.72],fogDensity:.0105,sun:[.46,.72,.52],sunColor:[1,.9,.72],sunPower:4.4,hemiSky:13623536,hemiGround:8022602,hemiPower:1.6,zenith:[.2,.46,.84],horizon:[.78,.84,.88],insects:.45,birdBase:1700,live:{butterflies:.7}}},TM=["amazon","sumatra","kongo","amerikautara","eropa","australia"],Ye=s=>s,Qo={jaguar:Ye({region:"amazon",wiki:"Jaguar",nama:"Jaguar",latin:"Panthera onca",status:"Hampir Terancam (NT)",spot:"trail",ukuran:"Panjang tubuh 1,1–1,85 m; berat umumnya 56–96 kg, jantan besar bisa lebih dari 120 kg.",habitat:"Hutan hujan, lahan basah, dan tepi sungai dari Meksiko sampai Argentina utara. Hampir selalu dekat air.",makan:"Karnivora penyergap. Memangsa kapibara, pekari, kaiman, rusa, dan kura-kura. Gigitannya sangat kuat sehingga mampu menembus tengkorak mangsa dan tempurung kura-kura.",kawin:"Hidup menyendiri dan hanya bertemu untuk kawin. Bunting sekitar 93–105 hari, melahirkan 1–4 anak (biasanya 2). Anak ikut induk hingga sekitar 2 tahun.",perilaku:"Aktif terutama saat senja dan malam. Perenang ulung dan menjaga wilayah jelajah yang luas dengan cakaran dan urine.",fakta:"Kucing terbesar di benua Amerika dan terbesar ketiga di dunia setelah harimau dan singa."}),macaw:Ye({region:"amazon",wiki:"Scarlet macaw",nama:"Makau merah",latin:"Ara macao",status:"Risiko Rendah (LC)",spot:"meadow",live:"parrot",ukuran:"Panjang 81–96 cm (lebih dari separuhnya ekor); berat sekitar 1 kg.",habitat:"Kanopi hutan hujan dataran rendah dari Meksiko selatan sampai lembah Amazon.",makan:"Biji, kacang-kacangan keras, buah, dan nektar. Sering berkumpul di tebing sungai untuk memakan tanah liat, yang diduga menambah mineral dan menetralkan racun dari biji.",kawin:"Berpasangan seumur hidup. Bersarang di lubang pohon tinggi, bertelur 1–4 butir (biasanya 2–3), dierami sekitar 24–28 hari. Anak meninggalkan sarang pada umur kira-kira 14 minggu.",perilaku:"Sangat sosial dan berisik; terbang berpasangan atau dalam kelompok kecil. Dapat hidup 40–50 tahun di alam.",fakta:"Paruhnya cukup kuat untuk memecah kacang Brasil, dan lidahnya yang kering bertulang membantu mengupas isi biji."}),sloth:Ye({region:"amazon",wiki:"Brown-throated sloth",nama:"Kungkang tiga jari",latin:"Bradypus variegatus",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 42–80 cm; berat 2,25–6,3 kg.",habitat:"Tajuk hutan di Amerika Tengah dan Selatan. Hampir seluruh hidupnya dihabiskan menggantung di pohon.",makan:"Pemakan daun, terutama daun pohon Cecropia. Lambungnya beruang banyak dan pencernaannya sangat lambat: satu kali makan bisa dicerna berminggu-minggu.",kawin:"Bunting sekitar 6 bulan dan melahirkan 1 anak. Anak menempel di perut induk selama kurang lebih 6 bulan sambil belajar memilih daun.",perilaku:"Turun ke tanah kira-kira seminggu sekali untuk buang kotoran. Bergerak sangat lambat untuk menghemat energi, tetapi pandai berenang.",fakta:"Bulunya ditumbuhi alga hijau yang membantu menyamarkannya di antara dedaunan."}),anaconda:Ye({region:"amazon",wiki:"Green anaconda",nama:"Anakonda hijau",latin:"Eunectes murinus",status:"Risiko Rendah (LC)",spot:"water",ukuran:"Umumnya 3–5 m; betina jauh lebih besar daripada jantan. Ular terberat di dunia, bisa melebihi 70 kg.",habitat:"Rawa, sungai berarus lambat, dan hutan yang tergenang musiman di Amerika Selatan tropis.",makan:"Pemangsa penyergap yang tidak berbisa. Melilit mangsa seperti kapibara, kaiman, burung air, dan ikan, lalu menelannya utuh. Setelah makan besar dapat berpuasa berminggu-minggu.",kawin:'Beberapa jantan melilit satu betina membentuk "bola kawin" yang bisa bertahan berminggu-minggu. Betina melahirkan 20–40 anak hidup setelah sekitar 6–7 bulan.',perilaku:"Lebih banyak berada di air. Mata dan lubang hidungnya terletak di atas kepala sehingga ia bisa mengintai sambil hampir seluruhnya terendam.",fakta:"Di darat geraknya lamban, tetapi di air ia cepat dan lincah."}),capybara:Ye({region:"amazon",wiki:"Capybara",nama:"Kapibara",latin:"Hydrochoerus hydrochaeris",status:"Risiko Rendah (LC)",spot:"water",ukuran:"Panjang 1,06–1,34 m; berat 35–66 kg. Hewan pengerat terbesar di dunia.",habitat:"Tepi sungai, rawa, danau, dan padang rumput yang tergenang di Amerika Selatan.",makan:"Herbivora pemakan rumput dan tumbuhan air. Memakan kembali kotorannya sendiri di pagi hari agar serat yang sulit dicerna dapat diolah dua kali.",kawin:"Hidup berkelompok 10–20 ekor. Kawin di dalam air, bunting sekitar 150 hari, melahirkan rata-rata 4 anak. Anak sudah bisa memakan rumput dalam seminggu.",perilaku:"Semi-akuatik: kakinya berselaput dan ia mampu menyelam hingga sekitar 5 menit untuk menghindari pemangsa.",fakta:"Mata, telinga, dan hidungnya berada di bagian atas kepala, sehingga ia dapat berendam hampir seluruhnya sambil tetap waspada."}),toucan:Ye({region:"amazon",wiki:"Toco toucan",nama:"Tukan toko",latin:"Ramphastos toco",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 55–65 cm, dengan paruh sekitar 20 cm; berat 500–860 g.",habitat:"Tepi hutan, hutan galeri, dan sabana berpohon di Amerika Selatan. Lebih menyukai hutan terbuka daripada rimba yang rapat.",makan:"Terutama buah. Juga memakan serangga, telur, dan anak burung lain. Paruh panjangnya menjangkau buah di ujung ranting tipis.",kawin:"Bersarang di lubang pohon. Bertelur 2–4 butir yang dierami bergantian oleh kedua induk selama sekitar 17–18 hari.",perilaku:"Hidup berpasangan atau dalam kelompok kecil, berpindah dengan lompatan dan terbang pendek antarpohon.",fakta:"Paruhnya ringan dan berongga, dan berfungsi seperti radiator: aliran darah ke paruh diatur untuk membuang panas tubuh."}),harimau:Ye({region:"sumatra",wiki:"Sumatran tiger",nama:"Harimau sumatra",latin:"Panthera tigris sondaica",status:"Terancam Kritis (CR)",spot:"trail",ukuran:"Jantan panjang total 2,2–2,55 m dengan berat 100–140 kg; betina 75–110 kg.",habitat:"Hutan hujan dataran rendah sampai pegunungan dan rawa gambut di Pulau Sumatra.",makan:"Karnivora penyergap. Memangsa rusa sambar, babi hutan, kijang, dan tapir, biasanya dengan menerkam dari jarak dekat.",kawin:"Bunting sekitar 3,5 bulan, melahirkan 2–3 anak. Anak ikut induk sekitar 2 tahun untuk belajar berburu.",perilaku:"Hidup menyendiri, menandai wilayah, dan pandai berenang. Lorengnya lebih rapat dibanding harimau lain.",fakta:"Satu-satunya harimau yang tersisa di Indonesia setelah harimau bali dan harimau jawa punah. Populasinya diperkirakan kurang dari 600 ekor."}),orangutan:Ye({region:"sumatra",wiki:"Sumatran orangutan",nama:"Orangutan sumatra",latin:"Pongo abelii",status:"Terancam Kritis (CR)",spot:"trail",ukuran:"Jantan dewasa tinggi sekitar 1,4 m dengan berat 70–90 kg; betina sekitar 45 kg.",habitat:"Hutan hujan di bagian utara Sumatra (Aceh dan Sumatra Utara), terutama kawasan Leuser.",makan:"Terutama buah seperti ara dan durian, ditambah daun muda, kulit kayu, dan serangga. Memakai ranting sebagai alat untuk mengambil serangga dan biji.",kawin:"Bunting sekitar 8,5 bulan dan melahirkan 1 anak. Jarak antarkelahiran 8–9 tahun, salah satu yang terpanjang di antara mamalia darat. Anak bergantung pada induk bertahun-tahun.",perilaku:"Hampir seluruh hidupnya di atas pohon. Membuat sarang tidur baru dari ranting setiap malam. Jantan berbantalan pipi mengeluarkan seruan panjang yang terdengar jauh.",fakta:"Karena berkembang biak sangat lambat, populasinya sulit pulih setelah hutan hilang atau individu diburu."}),gajah:Ye({region:"sumatra",wiki:"Sumatran elephant",nama:"Gajah sumatra",latin:"Elephas maximus sumatranus",status:"Terancam Kritis (CR)",spot:"meadow",ukuran:"Tinggi bahu 2–3,2 m; berat 2–4 ton.",habitat:"Hutan dataran rendah Sumatra. Hilangnya hutan dataran rendah menjadi ancaman utamanya.",makan:"Herbivora yang dapat memakan sekitar 150 kg tumbuhan per hari: rumput, daun, kulit kayu, dan buah.",kawin:"Bunting sekitar 22 bulan, masa kebuntingan terpanjang di antara mamalia darat, dan melahirkan 1 anak.",perilaku:"Hidup dalam kelompok keluarga yang dipimpin betina tertua. Jantan dewasa cenderung menyendiri.",fakta:"Biji yang ditelannya tersebar jauh lewat kotoran, sehingga gajah berperan sebagai penanam hutan."}),badak:Ye({region:"sumatra",wiki:"Sumatran rhinoceros",nama:"Badak sumatra",latin:"Dicerorhinus sumatrensis",status:"Terancam Kritis (CR)",spot:"water",ukuran:"Tinggi bahu 1–1,5 m; berat 500–800 kg. Badak terkecil di dunia.",habitat:"Hutan hujan lebat dan perbukitan di Sumatra dan sebagian kecil Kalimantan.",makan:"Daun muda, ranting, tunas, dan buah, sekitar 50 kg sehari. Sering mendatangi sumber garam mineral.",kawin:"Bunting sekitar 15–16 bulan dan melahirkan 1 anak. Jarak antarkelahiran 3–4 tahun.",perilaku:"Menyendiri dan gemar berkubang di lumpur untuk mendinginkan tubuh dan melindungi kulit. Berkomunikasi dengan siulan dan lenguhan.",fakta:"Satu-satunya badak Asia bercula dua dan tubuhnya berambut. Diperkirakan tersisa kurang dari 50 ekor."}),tapir:Ye({region:"sumatra",wiki:"Malayan tapir",nama:"Tapir asia (tenuk)",latin:"Tapirus indicus",status:"Terancam (EN)",spot:"water",ukuran:"Panjang 1,8–2,5 m; berat umumnya 250–320 kg.",habitat:"Hutan hujan dataran rendah di Sumatra, Semenanjung Malaya, dan Thailand selatan, dekat sumber air.",makan:"Daun, tunas, dan buah. Moncongnya memanjang seperti belalai pendek untuk meraih dan memetik daun.",kawin:"Bunting sekitar 13 bulan dan melahirkan 1 anak. Anak lahir bergaris dan berbintik putih, pola yang memudar pada umur 4–7 bulan.",perilaku:"Aktif malam hari, pemalu, dan perenang yang baik; sering masuk ke air untuk menghindari bahaya.",fakta:"Warna hitam-putihnya memecah bentuk tubuh di kegelapan, sehingga pemangsa sulit mengenalinya."}),rangkong:Ye({region:"sumatra",wiki:"Rhinoceros hornbill",nama:"Rangkong badak",latin:"Buceros rhinoceros",status:"Rentan (VU)",spot:"trail",ukuran:"Panjang 80–90 cm; berat 2–3 kg.",habitat:"Hutan hujan primer di Sumatra, Kalimantan, Jawa, dan Semenanjung Malaya. Membutuhkan pohon besar berlubang.",makan:"Terutama buah ara, ditambah serangga, kadal, dan hewan kecil lain.",kawin:"Berpasangan tetap. Betina mengurung diri di lubang pohon yang ditutup lumpur hingga tersisa celah sempit; jantan menyuapinya selama sekitar tiga bulan. Bertelur 1–2 butir.",perilaku:"Kepakan sayapnya terdengar keras dari jauh. Terbang jauh setiap hari mencari pohon yang sedang berbuah.",fakta:"Tanduk di atas paruhnya (balung) berongga dan berfungsi memperkuat suara."}),gorila:Ye({region:"kongo",wiki:"Western lowland gorilla",nama:"Gorila dataran rendah barat",latin:"Gorilla gorilla gorilla",status:"Terancam Kritis (CR)",spot:"trail",ukuran:"Jantan dewasa tinggi sekitar 1,6–1,7 m dengan berat 140–180 kg; betina kira-kira separuhnya.",habitat:"Hutan hujan dataran rendah dan hutan rawa di Afrika Tengah bagian barat.",makan:"Buah, daun, batang, dan empulur tumbuhan, serta rayap dan semut.",kawin:"Kelompok dipimpin seekor jantan punggung perak. Bunting sekitar 8,5 bulan, melahirkan 1 anak, dengan jarak kelahiran 4–6 tahun.",perilaku:"Membuat sarang tidur baru setiap malam. Jantan memukul dada untuk memperingatkan lawan.",fakta:"Subspesies gorila yang paling banyak jumlahnya, tetapi tetap terancam oleh perburuan, penyakit, dan hilangnya hutan."}),gajahhutan:Ye({region:"kongo",wiki:"African forest elephant",nama:"Gajah hutan afrika",latin:"Loxodonta cyclotis",status:"Terancam Kritis (CR)",spot:"meadow",ukuran:"Tinggi bahu sekitar 2–3 m; lebih kecil daripada gajah sabana.",habitat:"Hutan hujan lebat di Afrika Tengah dan Barat.",makan:"Buah, daun, dan kulit kayu. Berkumpul di bukaan hutan berlumpur kaya mineral yang disebut bai.",kawin:"Bunting sekitar 22 bulan dan melahirkan 1 anak. Betina baru beranak pertama pada umur sekitar 23 tahun dengan jarak kelahiran 5–6 tahun, sehingga populasinya sangat lambat pulih.",perilaku:"Hidup dalam kelompok keluarga kecil dan membuat jalur tetap di dalam hutan yang juga dipakai satwa lain.",fakta:"Gadingnya lebih lurus dan mengarah ke bawah, dan telinganya lebih membulat. Banyak pohon besar bergantung padanya untuk menyebarkan biji."}),okapi:Ye({region:"kongo",wiki:"Okapi",nama:"Okapi",latin:"Okapia johnstoni",status:"Terancam (EN)",spot:"trail",ukuran:"Tinggi bahu sekitar 1,5 m; berat 200–350 kg.",habitat:"Hanya ada di hutan hujan lebat di timur laut Republik Demokratik Kongo.",makan:"Daun, tunas, buah, dan jamur. Lidahnya yang panjang dan lentur dipakai merenggut daun, bahkan membersihkan mata dan telinganya sendiri.",kawin:"Bunting sekitar 14–15 bulan dan melahirkan 1 anak. Anak bersembunyi di satu tempat selama minggu-minggu pertama dan jarang buang kotoran agar tidak tercium pemangsa.",perilaku:"Menyendiri dan sangat pemalu. Belang di kaki belakangnya membantu anak mengikuti induk di hutan yang remang.",fakta:"Meski belangnya mirip zebra, okapi adalah satu-satunya kerabat jerapah yang masih hidup."}),bonobo:Ye({region:"kongo",wiki:"Bonobo",nama:"Bonobo",latin:"Pan paniscus",status:"Terancam (EN)",spot:"trail",ukuran:"Panjang kepala dan badan 70–83 cm; jantan sekitar 39–45 kg, betina sedikit lebih ringan.",habitat:"Hutan hujan di selatan Sungai Kongo, Republik Demokratik Kongo. Tidak ditemukan di tempat lain.",makan:"Terutama buah, ditambah daun, tunas, dan sesekali hewan kecil.",kawin:"Bunting sekitar 8 bulan dan melahirkan 1 anak, dengan jarak kelahiran 4–5 tahun.",perilaku:"Kelompoknya dipimpin betina. Ketegangan lebih sering diredakan dengan kontak sosial daripada dengan perkelahian.",fakta:"Bersama simpanse, bonobo adalah kerabat terdekat manusia yang masih hidup."}),mandrill:Ye({region:"kongo",wiki:"Mandrill",nama:"Mandril",latin:"Mandrillus sphinx",status:"Rentan (VU)",spot:"meadow",ukuran:"Jantan 19–37 kg; betina sekitar 12 kg. Monyet terbesar di dunia.",habitat:"Hutan hujan Afrika Tengah bagian barat: Kamerun selatan, Gabon, Guinea Khatulistiwa, dan Kongo.",makan:"Omnivora: buah, biji, akar, serangga, dan hewan kecil. Menyimpan makanan di kantong pipi.",kawin:"Bunting sekitar 6 bulan dan melahirkan 1 anak. Jantan yang paling dominan memiliki warna wajah paling terang dan paling sering kawin.",perilaku:"Hidup dalam kelompok sangat besar yang bisa berjumlah ratusan ekor, mencari makan di lantai hutan pada siang hari.",fakta:"Warna biru dan merah pada wajah jantan termasuk yang paling mencolok di antara semua mamalia."}),greyparrot:Ye({region:"kongo",wiki:"Grey parrot",nama:"Nuri kelabu afrika",latin:"Psittacus erithacus",status:"Terancam (EN)",spot:"water",live:"parrot",ukuran:"Panjang sekitar 33 cm; berat kira-kira 400 g.",habitat:"Hutan hujan dataran rendah Afrika Tengah dan Barat, sering di tepi hutan dan dekat sungai.",makan:"Buah kelapa sawit, biji, kacang, dan buah lain.",kawin:"Berpasangan tetap. Bersarang di lubang pohon tinggi, bertelur 3–5 butir yang dierami sekitar 30 hari. Anak meninggalkan sarang pada umur kira-kira 12 minggu.",perilaku:"Bertengger bersama dalam kelompok besar pada malam hari dan berpencar mencari makan pada siang hari.",fakta:"Salah satu burung paling cerdas dan peniru suara terbaik. Penangkapan untuk perdagangan burung peliharaan membuat populasinya merosot tajam."}),blackbear:Ye({region:"amerikautara",wiki:"American black bear",nama:"Beruang hitam amerika",latin:"Ursus americanus",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 1,2–2 m; jantan 57–250 kg.",habitat:"Hutan di Kanada, Amerika Serikat, dan Meksiko utara.",makan:"Omnivora. Sebagian besar makanannya tumbuhan: beri, kacang, akar, dan tunas, ditambah serangga, ikan, dan bangkai.",kawin:"Kawin pada awal musim panas, tetapi embrio baru berkembang pada musim gugur. Dua atau tiga anak lahir sekitar Januari–Februari di dalam sarang musim dingin, masing-masing hanya seberat 300–450 g.",perilaku:"Pemanjat pohon yang cekatan. Melewati musim dingin dengan tidur panjang tanpa makan dan minum.",fakta:"Meski namanya beruang hitam, warna bulunya bisa cokelat, kayu manis, bahkan putih."}),wolf:Ye({region:"amerikautara",wiki:"Wolf",nama:"Serigala abu-abu",latin:"Canis lupus",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang tubuh 1–1,6 m ditambah ekor; berat umumnya 25–60 kg.",habitat:"Hutan, tundra, pegunungan, dan padang rumput di belahan bumi utara.",makan:"Karnivora yang berburu berkelompok: rusa, rusa besar, bison muda, dan berang-berang. Seekor serigala dapat menempuh puluhan kilometer sehari.",kawin:"Biasanya hanya pasangan utama dalam kawanan yang berbiak. Bunting sekitar 63 hari, melahirkan 4–6 anak di liang pada musim semi. Seluruh kawanan ikut mengasuh.",perilaku:"Kawanan pada dasarnya adalah sebuah keluarga. Lolongan dipakai untuk memanggil anggota dan menandai wilayah.",fakta:"Nenek moyang semua anjing peliharaan. Kehadirannya mengubah perilaku rusa sehingga berpengaruh pada tumbuhan dan sungai."}),moose:Ye({region:"amerikautara",wiki:"Moose",nama:"Rusa besar (moose)",latin:"Alces alces",status:"Risiko Rendah (LC)",spot:"water",ukuran:"Tinggi bahu 1,4–2,1 m; jantan 380–700 kg. Anggota keluarga rusa terbesar.",habitat:"Hutan boreal dan hutan campuran dekat danau, rawa, dan sungai di Amerika Utara dan Eurasia utara.",makan:"Daun dan ranting dedalu serta birch, dan tumbuhan air. Mampu menyelam beberapa meter untuk merenggut tumbuhan di dasar danau.",kawin:"Musim kawin September–Oktober; jantan beradu tanduk memperebutkan betina. Bunting sekitar 8 bulan, melahirkan 1–2 anak pada Mei–Juni.",perilaku:"Menyendiri. Jantan menumbuhkan tanduk lebar setiap tahun dan menanggalkannya pada musim dingin.",fakta:"Bentang tanduk jantan bisa mencapai 1,8 m."}),eagle:Ye({region:"amerikautara",wiki:"Bald eagle",nama:"Elang botak",latin:"Haliaeetus leucocephalus",status:"Risiko Rendah (LC)",spot:"water",ukuran:"Rentang sayap 1,8–2,3 m; berat 3–6,3 kg. Betina lebih besar daripada jantan.",habitat:"Dekat danau, sungai besar, dan pesisir berhutan di Amerika Utara.",makan:"Terutama ikan, juga burung air dan bangkai. Sering merebut tangkapan burung lain.",kawin:"Berpasangan tetap dan memakai sarang yang sama bertahun-tahun; sarangnya bisa selebar lebih dari 2 m. Bertelur 1–3 butir yang dierami sekitar 35 hari.",perilaku:"Melayang memanfaatkan arus udara panas dan menyambar ikan dari permukaan air dengan cakarnya.",fakta:"Kepala dan ekor putihnya baru muncul pada umur 4–5 tahun. Populasinya pulih setelah pestisida DDT dilarang."}),beaver:Ye({region:"amerikautara",wiki:"North American beaver",nama:"Berang-berang amerika",latin:"Castor canadensis",status:"Risiko Rendah (LC)",spot:"water",ukuran:"Panjang tubuh 74–90 cm ditambah ekor pipih 20–35 cm; berat 11–32 kg.",habitat:"Sungai kecil, danau, dan rawa berhutan di Amerika Utara.",makan:"Lapisan dalam kulit kayu, ranting, dan daun, terutama aspen dan dedalu, serta tumbuhan air. Menyimpan ranting di bawah air untuk musim dingin.",kawin:"Berpasangan tetap. Kawin pada musim dingin, bunting sekitar 105 hari, melahirkan 2–4 anak. Anak tinggal bersama keluarga sekitar dua tahun.",perilaku:"Menebang pohon dengan gigi dan membangun bendungan serta rumah dari ranting dan lumpur. Menepukkan ekor ke air sebagai tanda bahaya.",fakta:"Gigi serinya terus tumbuh dan berwarna jingga karena mengandung besi. Kolam buatannya menjadi habitat banyak satwa lain."}),redfox:Ye({region:"amerikautara",wiki:"Red fox",nama:"Rubah merah",latin:"Vulpes vulpes",status:"Risiko Rendah (LC)",spot:"meadow",live:"fox",ukuran:"Panjang tubuh 45–90 cm ditambah ekor 30–55 cm; berat umumnya 5–7 kg.",habitat:"Hutan, padang rumput, pegunungan, bahkan kota, di hampir seluruh belahan bumi utara.",makan:"Omnivora: tikus, kelinci, burung, serangga, dan buah. Menerkam tikus dengan lompatan tinggi yang khas.",kawin:"Kawin pada musim dingin. Bunting sekitar 52 hari, melahirkan 4–6 anak di dalam liang. Kedua induk membawa makanan untuk anak.",perilaku:"Aktif saat senja dan malam. Pendengarannya sangat tajam sehingga mampu mendengar tikus di bawah salju.",fakta:"Karnivora darat dengan sebaran alami terluas di dunia. Di hutan ini rubahnya hidup: dekati perlahan, ia akan lari bila Anda terlalu dekat."}),bison:Ye({region:"eropa",wiki:"European bison",nama:"Bison eropa",latin:"Bison bonasus",status:"Hampir Terancam (NT)",spot:"meadow",ukuran:"Tinggi bahu 1,6–1,95 m; jantan 400–920 kg. Mamalia darat terberat di Eropa.",habitat:"Hutan campuran dan padang rumput di sela hutan. Populasi liar terbesar ada di Hutan Białowieża.",makan:"Rumput, daun, tunas, dan kulit kayu.",kawin:"Musim kawin Agustus–Oktober. Bunting sekitar 9 bulan dan melahirkan 1 anak.",perilaku:"Betina dan anak hidup berkelompok; jantan dewasa sering menyendiri di luar musim kawin.",fakta:"Pernah punah di alam liar pada 1920-an. Seluruh bison eropa sekarang berasal dari 12 ekor di penangkaran, dan pelepasliaran dimulai di Białowieża pada 1952."}),reddeer:Ye({region:"eropa",wiki:"Red deer",nama:"Rusa merah",latin:"Cervus elaphus",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Tinggi bahu sekitar 1,2 m; jantan 160–240 kg.",habitat:"Hutan, tepi hutan, dan padang terbuka di Eropa, Asia barat, dan Afrika utara.",makan:"Rumput, daun, tunas, dan kulit kayu.",kawin:"Musim kawin September–Oktober: jantan melenguh keras dan beradu tanduk untuk menguasai sekelompok betina. Bunting sekitar 8 bulan; satu anak bertotol lahir pada Mei–Juni.",perilaku:"Di luar musim kawin, jantan dan betina hidup dalam kelompok terpisah.",fakta:"Jantan menanggalkan tanduknya setiap tahun dan menumbuhkan yang baru, sering lebih besar."}),boar:Ye({region:"eropa",wiki:"Wild boar",nama:"Babi hutan",latin:"Sus scrofa",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 0,9–2 m; berat umumnya 50–100 kg, jantan besar bisa jauh lebih berat.",habitat:"Hutan dan semak di Eropa, Asia, dan Afrika utara.",makan:"Omnivora: akar, umbi, biji pohon ek, cacing, serangga, dan bangkai. Mengaduk tanah dengan moncongnya.",kawin:"Bunting sekitar 115 hari dan melahirkan 4–6 anak yang bergaris-garis. Betina dan anak hidup dalam kelompok.",perilaku:"Aktif saat senja dan malam, dan gemar berkubang di lumpur.",fakta:"Nenek moyang babi ternak. Tanah yang diaduknya membantu biji pohon berkecambah."}),lynx:Ye({region:"eropa",wiki:"Eurasian lynx",nama:"Lynx eurasia",latin:"Lynx lynx",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 80–130 cm; jantan 18–30 kg.",habitat:"Hutan luas di Eropa dan Asia utara.",makan:"Karnivora penyergap. Memangsa kijang, kelinci, dan burung.",kawin:"Kawin Februari–April. Bunting sekitar 10 minggu dan melahirkan 2–3 anak.",perilaku:"Menyendiri, aktif saat senja, dan jarang terlihat. Telapak kakinya lebar sehingga mudah berjalan di salju.",fakta:"Jambul hitam di ujung telinga dan ekornya yang pendek menjadi ciri khas. Kucing liar terbesar di Eropa."}),whitestork:Ye({region:"eropa",wiki:"White stork",nama:"Bangau putih",latin:"Ciconia ciconia",status:"Risiko Rendah (LC)",spot:"water",live:"stork",ukuran:"Tinggi 100–115 cm; rentang sayap 155–215 cm; berat 2,3–4,5 kg.",habitat:"Padang basah, sawah, dan tepi hutan di Eropa; bersarang di pohon, atap, dan tiang.",makan:"Katak, serangga, tikus, cacing, dan ikan, yang dicari sambil berjalan pelan di padang basah.",kawin:"Memakai sarang besar yang sama bertahun-tahun. Bertelur 3–5 butir yang dierami bergantian selama 33–34 hari.",perilaku:"Bermigrasi ke Afrika setiap musim gugur dengan melayang di arus udara panas, sehingga memilih jalur darat lewat Gibraltar atau Bosporus.",fakta:"Hampir tidak bersuara; ia berkomunikasi dengan mengetukkan paruh. Di hutan ini bangaunya melayang di atas tajuk: lihat ke atas."}),konik:Ye({region:"eropa",wiki:"Konik",nama:"Kuda konik",latin:"Equus ferus caballus",status:"Ras domestik (tidak dinilai IUCN)",spot:"trail",live:"horse",ukuran:"Tinggi 130–140 cm; berat 350–400 kg.",habitat:"Ras kuda kecil dari Polandia. Dilepas setengah liar di cagar alam Eropa untuk merumput.",makan:"Rumput, alang-alang, dan ranting. Dengan merumput ia menjaga padang tetap terbuka bagi tumbuhan dan burung.",kawin:"Bunting sekitar 11 bulan dan melahirkan 1 anak. Hidup dalam kelompok kecil yang dipimpin seekor jantan.",perilaku:"Tahan cuaca dingin dan mampu hidup di alam tanpa kandang sepanjang tahun.",fakta:"Dahulu dianggap keturunan langsung kuda liar tarpan; penelitian genetik menunjukkan ia ras domestik. Di hutan ini kawanannya berlari di jalur: dengarkan derapnya."}),koala:Ye({region:"australia",wiki:"Koala",nama:"Koala",latin:"Phascolarctos cinereus",status:"Rentan (VU)",spot:"trail",ukuran:"Panjang 60–85 cm; berat 4–15 kg.",habitat:"Hutan eukaliptus di Australia timur dan tenggara.",makan:"Hampir hanya daun eukaliptus, yang beracun bagi kebanyakan hewan dan rendah gizi.",kawin:"Hewan berkantong. Bunting hanya sekitar 35 hari; anak yang sangat kecil merangkak ke kantong dan tinggal di sana sekitar 6 bulan, lalu digendong di punggung.",perilaku:"Tidur sekitar 20 jam sehari untuk menghemat energi. Jarang turun dari pohon dan jarang minum.",fakta:"Sebelum makan daun, anak koala memakan kotoran khusus dari induknya untuk memperoleh mikroba pencerna eukaliptus."}),cassowary:Ye({region:"australia",wiki:"Southern cassowary",nama:"Kasuari gelambir ganda",latin:"Casuarius casuarius",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Tinggi 1,5–1,8 m; betina lebih besar dan bisa melebihi 58 kg.",habitat:"Hutan hujan tropis di Queensland utara, Papua, dan pulau-pulau sekitarnya.",makan:"Terutama buah yang jatuh ke lantai hutan, ditelan utuh.",kawin:"Betina bertelur 3–5 butir berwarna hijau lalu pergi. Jantan mengerami sekitar 50 hari dan mengasuh anak selama kira-kira 9 bulan.",perilaku:"Tidak bisa terbang, menyendiri, dan pemalu. Bila terdesak ia menendang dengan cakar dalam yang panjangnya sekitar 12 cm.",fakta:"Banyak pohon hutan hujan bergantung pada kasuari untuk menyebarkan biji berukuran besar. Burung ini juga hidup di Papua, Indonesia."}),platypus:Ye({region:"australia",wiki:"Platypus",nama:"Platipus",latin:"Ornithorhynchus anatinus",status:"Hampir Terancam (NT)",spot:"water",ukuran:"Panjang 40–60 cm; berat 0,7–2,4 kg.",habitat:"Sungai dan danau air tawar di Australia timur dan Tasmania.",makan:"Larva serangga, udang air tawar, dan cacing. Berburu dengan mata tertutup: paruhnya mendeteksi medan listrik lemah dari otot mangsa.",kawin:"Mamalia yang bertelur. Betina bertelur 1–3 butir di liang dan mengeraminya sekitar 10 hari. Anak menjilat susu yang merembes dari kulit induk.",perilaku:"Aktif saat senja dan malam. Menyimpan makanan di kantong pipi lalu mengunyahnya di permukaan.",fakta:"Jantan memiliki taji berbisa di kaki belakang, hal yang sangat langka pada mamalia."}),kangaroo:Ye({region:"australia",wiki:"Eastern grey kangaroo",nama:"Kanguru abu-abu timur",latin:"Macropus giganteus",status:"Risiko Rendah (LC)",spot:"meadow",ukuran:"Jantan besar bisa melebihi 60 kg dan berdiri hampir 2 m; betina jauh lebih kecil.",habitat:"Hutan terbuka, semak, dan padang rumput di Australia timur dan Tasmania.",makan:"Rumput, dimakan terutama pada senja, malam, dan pagi hari.",kawin:"Bunting sekitar 36 hari. Anak tinggal di kantong sekitar 11 bulan. Betina dapat menunda perkembangan embrio berikutnya sampai kantong kosong.",perilaku:"Hidup berkelompok. Melompat dengan dua kaki belakang yang hemat energi; ekornya menjadi penyeimbang.",fakta:"Satu lompatan bisa mencapai sekitar 9 m, dan kecepatannya dapat melebihi 60 km/jam."}),kookaburra:Ye({region:"australia",wiki:"Laughing kookaburra",nama:"Kukabura tertawa",latin:"Dacelo novaeguineae",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Panjang 39–42 cm; berat sekitar 300–480 g. Raja-udang terberat di dunia.",habitat:"Hutan eukaliptus dan hutan terbuka di Australia timur.",makan:"Serangga, cacing, kadal, ular kecil, dan tikus. Mangsa dipukulkan ke dahan sebelum ditelan.",kawin:"Berpasangan tetap. Bersarang di lubang pohon, bertelur 2–4 butir yang dierami 24–26 hari. Anak dari tahun sebelumnya ikut membantu mengasuh.",perilaku:"Bertengger diam mengamati tanah, lalu menukik. Keluarga berseru bersama saat fajar dan senja untuk menandai wilayah.",fakta:'Seruannya terdengar seperti tawa manusia dan sering dipakai sebagai suara "hutan" di film.'}),lyrebird:Ye({region:"australia",wiki:"Superb lyrebird",nama:"Burung kecapi",latin:"Menura novaehollandiae",status:"Risiko Rendah (LC)",spot:"trail",ukuran:"Jantan 80–100 cm termasuk ekor; berat sekitar 1 kg.",habitat:"Hutan basah di Australia tenggara.",makan:"Serangga, cacing, dan laba-laba, yang dicari dengan mengais serasah daun menggunakan kaki yang kuat.",kawin:"Pada musim dingin jantan menari di gundukan tanah sambil membentangkan ekor berbentuk kecapi dan bernyanyi. Betina membangun sarang dan mengerami satu telur sendirian selama sekitar 50 hari.",perilaku:"Lebih suka berlari daripada terbang. Dengan mengais, seekor burung membalik tanah dalam jumlah besar setiap tahun.",fakta:"Salah satu peniru suara terbaik di dunia: ia menirukan burung lain dan bahkan bunyi buatan manusia."})},Rl=s=>Object.entries(Qo).filter(([,e])=>e.region===s).map(([e,t])=>({id:e,...t})),EM=[["ukuran","Ukuran"],["habitat","Habitat"],["makan","Makanan dan cara makan"],["kawin","Perkembangbiakan"],["perilaku","Perilaku"],["fakta","Fakta menarik"]],oo=new Map;function Ah(s){if(!oo.has(s.id)){const e="https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(s.wiki.replace(/ /g,"_"));oo.set(s.id,fetch(e).then(t=>t.ok?t.json():null).then(t=>t?{thumb:t.thumbnail&&t.thumbnail.source,photo:t.originalimage&&t.originalimage.source||t.thumbnail&&t.thumbnail.source,page:t.content_urls&&t.content_urls.desktop&&t.content_urls.desktop.page}:{}).catch(()=>({})))}return oo.get(s.id)}function wM(s){const e=[.14,.27,.4,.55,.7,.86],t=[];let n=0,i=0,a=0;for(const r of s){let o,l,c,u;if(r.spot==="water"){const h=.7+i++*2.1;let d=yt.r*.6;for(;d<yt.r+22&&xt(yt.x+Math.cos(h)*d,yt.z+Math.sin(h)*d)<.5;)d+=.5;d+=1.2,o=yt.x+Math.cos(h)*d,l=yt.z+Math.sin(h)*d,c=Math.cos(h),u=Math.sin(h)}else if(r.spot==="meadow"){const h=.9+a++*2.3,d=mt.r*.7;o=mt.x+Math.cos(h)*d,l=mt.z+Math.sin(h)*d,c=-Math.cos(h),u=-Math.sin(h)}else{const h=e[n%e.length],d=li.getPointAt(h),f=li.getTangentAt(h),g=n++%2?4.4:-4.4;o=d.x-f.z*g,l=d.z+f.x*g,c=d.x-o,u=d.z-l;const _=Math.hypot(c,u);c/=_,u/=_}t.push({sp:r,x:o,z:l,y:xt(o,l),yaw:Math.atan2(c,u)})}return t}function AM(s){const e=document.createElement("canvas");e.width=512,e.height=112;const t=e.getContext("2d");t.fillStyle="#f3ecd8",t.fillRect(0,0,512,112),t.fillStyle="#23301c",t.font="600 40px Georgia, serif",t.textBaseline="middle";let n=s.nama;for(;t.measureText(n).width>480&&n.length>4;)n=n.slice(0,-2)+"…";t.fillText(n,18,40),t.fillStyle="#5c6a4c",t.font="italic 26px Georgia, serif",t.fillText(s.latin,18,84);const i=new ch(e);return i.colorSpace=rt,i.anisotropy=8,i}function RM(){const s=document.createElement("canvas");s.width=s.height=64;const e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,240,190,1)"),t.addColorStop(.3,"rgba(255,220,140,0.5)"),t.addColorStop(1,"rgba(255,210,120,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ch(s)}function CM(s,e,t){const n=new ni({color:5915440}),i=new ni({color:4075298}),a=new ui(.055,.07,1.5,8).translate(0,.75,0),r=new vs(1.24,.98,.06),o=new Gn(1.12,.63),l=new Gn(1.12,.245),c=RM(),u=new dr;u.setCrossOrigin("anonymous");const h=[];for(const d of e){const f=new nn;f.position.set(d.x,d.y-.05,d.z),f.rotation.y=d.yaw;const g=new lt(a,n);g.castShadow=!0,f.add(g);const _=new nn;_.position.y=1.62,_.rotation.x=-.2,f.add(_);const m=new lt(r,i);m.castShadow=!0,_.add(m);const p=new tn({color:7305826}),E=new lt(o,p);E.position.set(0,.135,.032),_.add(E);const T=new lt(l,new tn({map:AM(d.sp),color:14211288}));T.position.set(0,-.335,.032),_.add(T);const v=new Y0(new ih({map:c,blending:as,depthWrite:!1,transparent:!0}));v.position.y=2.75,v.scale.setScalar(.85),f.add(v),s.add(f),Ah(d.sp).then(R=>{R.thumb&&u.load(R.thumb,A=>{A.colorSpace=rt,A.anisotropy=8;const I=A.image.width/A.image.height,S=1.12/.63;I>S?(A.repeat.x=S/I,A.offset.x=(1-A.repeat.x)/2):(A.repeat.y=I/S,A.offset.y=(1-A.repeat.y)*.62),p.map=A,p.color.set(13684944),p.needsUpdate=!0},void 0,()=>{})});const P={id:d.sp.id,range:7.5,cone:.72,pos:new w(d.x,d.y+1.6,d.z),x:d.x,z:d.z,spr:v};v.visible=!t.has(P.id),h.push(P)}return{items:h,update(d){for(const f of h)f.spr.visible&&(f.spr.position.y=2.75+Math.sin(d*1.6+f.x)*.12,f.spr.material.opacity=.7+.3*Math.sin(d*2.3+f.z))}}}const el={low:{treeCell:7.6,grass:.22,ferns:.05,bushes:700,rocks:300,logs:40,shadow:1024,shadowRange:36,coverDist:48,pr:1,post:!1,lodDist:0,impDist:46,treeFar:130,segs:220,shafts:26,dust:500,foxes:3,horses:4,birds:2,butterflies:30},medium:{treeCell:6.4,grass:.5,ferns:.1,bushes:1300,rocks:450,logs:60,shadow:2048,shadowRange:42,coverDist:62,pr:1.25,post:!0,lodDist:26,impDist:60,treeFar:150,segs:320,shafts:46,dust:1200,foxes:5,horses:5,birds:3,butterflies:60},high:{treeCell:5.6,grass:.9,ferns:.16,bushes:2e3,rocks:600,logs:80,shadow:2048,shadowRange:52,coverDist:80,pr:1.5,post:!0,lodDist:40,impDist:84,treeFar:170,segs:420,shafts:70,dust:2200,foxes:6,horses:7,birds:4,butterflies:90}},Pt=new URLSearchParams(location.search),hi={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,e){try{localStorage.setItem(s,e)}catch{}}},Fa=matchMedia("(pointer: coarse)").matches,xs=el[Pt.get("q")]?Pt.get("q"):el[hi.get("forest.detail")]?hi.get("forest.detail"):"low",_n={...el[xs]};for(const s of Object.keys(_n))Pt.has(s)&&(_n[s]=typeof _n[s]=="boolean"?Pt.get(s)!=="0":+Pt.get(s));const PM=Pt.has("msaa")?+Pt.get("msaa"):xs==="high"?4:2,LM=Pt.get("bloom")!=="0",kM=Pt.get("soft")!=="0",ci=ir[Pt.get("r")]?Pt.get("r"):ir[hi.get("forest.region")]?hi.get("forest.region"):"sumatra",cn=ir[ci],Yi=Rl(ci),Qn=new Set((()=>{try{return JSON.parse(hi.get("forest.found")||"[]")}catch{return[]}})()),qa=s=>Rl(s).filter(e=>Qn.has(e.id)).length,Ft=s=>document.getElementById(s),et=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!=null&&(n.textContent=t),n},gn=Ft("view"),Qi=Ft("enter"),IM=Ft("bar").firstElementChild,Rh=(s,e)=>{const t=new URLSearchParams;t.set("r",e),Pt.get("q")&&t.set("q",s),location.search=t.toString()};for(const s of Ft("quality").children)s.setAttribute("aria-pressed",s.dataset.q===xs),s.onclick=()=>{s.dataset.q!==xs&&(hi.set("forest.detail",s.dataset.q),Pt.delete("q"),Rh(s.dataset.q,ci))};const Ch=()=>{const s=Ft("regions");s.textContent="";for(const e of TM){const t=ir[e],n=et("button");n.setAttribute("aria-pressed",e===ci),n.append(et("span","k",t.benua),et("span","n",t.nama),et("span","f",t.blurb),et("span","p",`${qa(e)} / ${Rl(e).length} satwa dikenali`)),n.onclick=()=>{e!==ci&&(hi.set("forest.region",e),Rh(xs,e))},s.append(n)}};Ch();Ft("hudRegion").textContent=cn.nama;const DM=()=>new Promise(s=>setTimeout(s,0)),Os=async(s,e)=>{IM.style.width=s*100+"%",e&&(Qi.textContent=e),await DM()};async function UM(){Z_(cn),iM(cn);const s=new q0({canvas:gn,antialias:!_n.post,powerPreference:"high-performance"});s.shadowMap.enabled=!0,s.shadowMap.type=kM?xu:nl,s.toneMapping=il,s.toneMappingExposure=1.05,s.info.autoReset=!1;const e=Math.min(devicePixelRatio||1,_n.pr);let t=1;const n=new th,i=new Bt(62,innerWidth/innerHeight,.12,1e3);let a=null;if(_n.post){const y=new Yt(innerWidth,innerHeight,{type:vn,samples:PM});a=new B_(s,y),a.addPass(new O_(n,i)),LM&&a.addPass(new _s(new Ee(innerWidth,innerHeight),.2,.7,.92)),a.addPass(new V_)}const r=()=>{i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix(),s.setPixelRatio(e*t),s.setSize(innerWidth,innerHeight,!1),a&&(a.setPixelRatio(e*t),a.setSize(innerWidth,innerHeight))};addEventListener("resize",r),r(),await Os(.05,"Menyiapkan tanah…");const o=Y_();await Os(.2,"Membentuk medan…"),n.add(J_(o,_n.segs));const l=sM(n,o,_n,cn);await Os(.35,"Menumbuhkan hutan…");const c=wM(Yi),u=await gM(n,o,_n,cn,s,c);await Os(.75,"Membangunkan satwa…");const h=await yM(n,_n,cn),d=CM(n,c,Qn),f=new SM(cn),g=new bM(i,gn,u.collide);g.onStep=(y,x)=>f.footstep(y,x);const _=(y,x,F,K)=>Math.atan2(-(F-y),-(K-x)),m=(y,x)=>{let F=[0,0],K=-1e9;for(let Z=-x;Z<=x;Z+=6)for(let Y=-x;Y<=x;Y+=6){if(Math.hypot(Z,Y)>x||xt(Z,Y)<1)continue;const Me=y(Z,Y);Me>K&&(K=Me,F=[Z,Y])}return F},p=m((y,x)=>ii(y,x)+_h(y,x)-Math.hypot(y,x)/400,120),E=m((y,x)=>xt(y,x),130),T=li.getPointAt(.31),v=li.getTangentAt(.31),P=c.find(y=>y.sp.spot==="trail")||c[0],R=[{name:"Padang rumput",x:26,z:4,yaw:_(26,4,mt.x,mt.z)},{name:"Tepi air",x:yt.x+23,z:yt.z+13,yaw:_(yt.x+23,yt.z+13,yt.x,yt.z)},{name:"Rimba tua",x:p[0],z:p[1],yaw:_(p[0],p[1],0,0)+2.2},{name:"Jalur satwa",x:T.x,z:T.z,yaw:_(0,0,v.x,v.z)},{name:"Punggung bukit",x:E[0],z:E[1],yaw:_(E[0],E[1],0,0)},{name:"Papan pengamatan",x:P.x+Math.sin(P.yaw)*4,z:P.z+Math.cos(P.yaw)*4,yaw:_(P.x+Math.sin(P.yaw)*4,P.z+Math.cos(P.yaw)*4,P.x,P.z)}];let A=0;const I=y=>{Ft("place").textContent=y,Ft("place").style.opacity=1,A=3.5},S=y=>{const x=R[y];x&&(g.place(x.x,x.z,x.yaw,-.03),I(x.name))};S(Math.max(0,Math.min(5,(parseInt(Pt.get("vp"))||1)-1)));const M=Ft("sheet"),k=Ft("prompt"),G=[...d.items,...h.live],L=new w,U=new w;let V=!1,N=!1,J=!1,z=null;const H=()=>{Ft("hudCount").textContent=`${qa(ci)} / ${Yi.length}`};H();const te=()=>{i.getWorldDirection(L);let y=null,x=-1;for(const F of G){U.copy(F.pos),F.lift&&(U.y+=F.lift),U.sub(i.position);const K=U.length();if(K>F.range||K<.01)continue;const Z=U.dot(L)/K;if(Z<F.cone)continue;const Y=Z-K*.002;Y>x&&(x=Y,y=F)}return y},se=y=>y.includes("(CR)")?"chip cr":y.includes("(EN)")?"chip en":y.includes("(VU)")?"chip vu":"chip",ye=y=>{if(M.classList.remove("open"),M.textContent="",N=!1,g.enabled=V,y&&V&&!Fa&&gn.requestPointerLock)try{const x=gn.requestPointerLock();x&&x.catch&&x.catch(()=>{})}catch{}},Ue=y=>{N=!0,g.enabled=!1,g.keys.clear(),document.pointerLockElement&&document.exitPointerLock(),M.textContent="",M.append(y),M.classList.add("open");const x=y.querySelector(".close");x&&x.focus({preventScroll:!0});const F=y.querySelector(".body");F&&(F.scrollTop=0)},q=y=>{const x={id:y,...Qo[y]};if(!Qn.has(y)){Qn.add(y),hi.set("forest.found",JSON.stringify([...Qn])),H(),Ch();for(const Ne of d.items)Ne.id===y&&(Ne.spr.visible=!1)}const F=et("div","card"),K=et("div","pic"),Z=et("div","body"),Y=et("div","none","Memuat foto dari Wikipedia…");K.append(Y),Z.append(et("h2","",x.nama),et("div","latin",x.latin),et("span",se(x.status),"Status konservasi: "+x.status));for(const[Ne,ae]of EM)Z.append(et("h3","",ae),et("p","",x[Ne]));const Me=et("div","foot"),ue=et("span","",`${qa(ci)} dari ${Yi.length} satwa ${cn.nama} dikenali`),_e=et("button","close","Tutup (E)");_e.onclick=()=>ye(!0),Me.append(ue,_e),Z.append(Me),F.append(K,Z),Ah(x).then(Ne=>{if(!Ne.thumb){Y.textContent="Foto tidak dapat dimuat. Periksa koneksi internet ke Wikipedia.";return}const ae=new Image;ae.alt=x.nama,ae.src=Ne.thumb,ae.onload=()=>{if(Y.remove(),K.prepend(ae),Ne.photo&&Ne.photo!==Ne.thumb){const De=new Image;De.onload=()=>{ae.src=Ne.photo},De.src=Ne.photo}};const xe=et("small"),Le=et("a","","Wikipedia: "+x.wiki);Le.href=Ne.page||"https://en.wikipedia.org/wiki/"+encodeURIComponent(x.wiki),Le.target="_blank",Le.rel="noopener",xe.append("Foto dan lisensinya: ",Le),K.append(xe)}),Ue(F)},ie=()=>{const y=et("div","card list");y.append(et("h2","","Buku lapangan"),et("p","sub",`${cn.hutan} · ${qa(ci)} dari ${Yi.length} dikenali`));const x=et("ul"),F={trail:"di sepanjang jalur",water:"di tepi air",meadow:"di padang rumput"};for(const Z of Yi){const Y=et("li",Qn.has(Z.id)?"":"unknown");if(Qn.has(Z.id)){const Me=et("button","",Z.nama);Me.onclick=()=>q(Z.id),Y.append(Me,et("i","",Z.latin))}else Y.append(et("b","","Belum ditemukan"));Y.append(et("span","",(Z.live?"satwa hidup, juga papan ":"papan ")+F[Z.spot])),x.append(Y)}const K=et("button","close","Tutup (J)");K.onclick=()=>ye(!0),y.append(x,K),Ue(y)},de=()=>{N?ye(!0):z&&q(z.id)};k.onclick=de,M.addEventListener("click",y=>{y.target===M&&ye(!0)});const le=()=>{if(!Fa&&gn.requestPointerLock)try{const y=gn.requestPointerLock();y&&y.catch&&y.catch(()=>{})}catch{}},Se=()=>{V=!0,g.enabled=!0,document.body.classList.remove("menu"),document.body.classList.add("play"),f.start(),le(),I(cn.hutan)},ke=()=>{V=!1,g.enabled=!1,document.body.classList.add("menu"),document.body.classList.remove("play"),Qi.textContent="Lanjut menjelajah"};Qi.onclick=Se,gn.addEventListener("click",()=>{V&&!N&&!Fa&&document.pointerLockElement!==gn&&le()}),document.addEventListener("mousedown",()=>{V&&!N&&z&&document.pointerLockElement===gn&&q(z.id)}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&V&&!N&&!Pt.get("auto")&&ke()}),addEventListener("keydown",y=>{if(N){(y.code==="KeyE"||y.code==="KeyJ"||y.code==="Escape"||y.code==="Enter")&&(y.preventDefault(),ye(y.code!=="Escape"));return}if(y.code==="Escape"&&V&&!document.pointerLockElement&&ke(),!V){y.code==="Enter"&&Se();return}y.code==="KeyE"&&de(),y.code==="KeyJ"&&ie(),y.code==="KeyM"&&f.setMuted(!f.muted),y.code==="KeyH"&&(J=!J,Ft("stats").style.display=J?"block":"none"),/^Digit[1-6]$/.test(y.code)&&S(+y.code.slice(5)-1)}),document.addEventListener("visibilitychange",()=>{f.ctx&&(document.hidden?f.ctx.suspend():f.ctx.resume())});const j=new ph;let Q=0,ee=0,re=0,C=60,Fe=0,Ce=0,Ie=null;const be=()=>{let y=0;for(let x=0;x<6.28;x+=.785)xt(g.x+Math.cos(x)*7,g.z+Math.sin(x)*7)<0&&y++;return y/8};let Xe=0;const ge=()=>{if((!V||N)&&++Xe%4){requestAnimationFrame(ge);return}const y=Math.min(j.getDelta(),.05);if(Q+=y,V||(g.yaw+=y*.035),g.update(y),Eh.value=Q,ss.value.copy(Qt).transformDirection(i.matrixWorldInverse),u.update(i.position),h.update(y,g),d.update(Q),l.update(Q,i.position,e*t*innerHeight/900),f.update(y,{waterNear:be(),herdDist:h.hasHerd?h.herd.pos.distanceTo(i.position):1e9}),s.info.reset(),a?a.render(y):s.render(n,i),A>0&&(A-=y)<=0&&(Ft("place").style.opacity=0),z=V&&!N?te():null,z!==Ie)if(Ie=z,z){k.textContent="";const x=et("kbd","",Fa?"Ketuk":"E");k.append(x,(Qn.has(z.id)?"Amati lagi: ":"Amati: ")+Qo[z.id].nama),k.style.display="block"}else k.style.display="none";ee+=y,re++,ee>=1&&(C=re/ee,ee=0,re=0,!V||N?Fe=Ce=0:C<44?(Fe++,Ce=0):C>57?(Ce++,Fe=0):Fe=Ce=0,Fe>=2&&t>.5&&!Pt.get("auto")&&(t=Math.max(.5,t-.1),Fe=0,r()),Ce>=6&&t<1&&(t=Math.min(1,t+.05),Ce=0,r()),J&&(Ft("stats").textContent=`${C.toFixed(0)} fps · ${xs}
${s.info.render.calls} draw · ${(s.info.render.triangles/1e6).toFixed(2)} jt segitiga
resolusi ${t*100|0}%`)),requestAnimationFrame(ge)};await Os(1),Qi.disabled=!1,Qi.textContent="Masuk ke hutan "+cn.nama,window.__forest={player:g,goTo:S,renderer:s,places:R,fauna:h,flora:u,boards:d,spots:c,enter:Se,openCard:q,openBook:ie,species:Yi,snap(){return u.update(i.position),ss.value.copy(Qt).transformDirection(i.matrixWorldInverse),s.info.reset(),a?a.render(.016):s.render(n,i),{img:gn.toDataURL("image/jpeg",.92),calls:s.info.render.calls,tris:s.info.render.triangles,fps:C}}},Pt.get("auto")&&Se(),ge()}UM().catch(s=>{console.error(s),Qi.textContent="Tidak dapat dimulai";const e=Ft("fail");e.style.display="block",e.textContent="Hutan tidak dapat dimulai. Dibutuhkan WebGL 2: coba Chrome, Edge, Firefox, atau Safari terbaru dengan akselerasi hardware aktif. ("+s.message+")"});
