var requirejs,require,define;(function(e){function t(e,t){return y.call(e,t)}function n(e,t){var n,r,i,o,a,s,u,c,l,f,p=t&&t.split("/"),d=g.map,h=d&&d["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),c=0;e.length>c;c+=1)if(f=e[c],"."===f)e.splice(c,1),c-=1;else if(".."===f){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||h)&&d){for(n=e.split("/"),c=n.length;c>0;c-=1){if(r=n.slice(0,c).join("/"),p)for(l=p.length;l>0;l-=1)if(i=d[p.slice(0,l).join("/")],i&&(i=i[r])){o=i,a=c;break}if(o)break;!s&&h&&h[r]&&(s=h[r],u=c)}!o&&s&&(o=s,a=u),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function r(t,n){return function(){return l.apply(e,m.call(arguments,0).concat([t,n]))}}function i(e){return function(t){return n(t,e)}}function o(e){return function(t){d[e]=t}}function a(n){if(t(h,n)){var r=h[n];delete h[n],v[n]=!0,c.apply(e,r)}if(!t(d,n)&&!t(v,n))throw Error("No "+n);return d[n]}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function u(e){return function(){return g&&g.config&&g.config[e]||{}}}var c,l,f,p,d={},h={},g={},v={},y=Object.prototype.hasOwnProperty,m=[].slice;f=function(e,t){var r,o=s(e),u=o[0];return e=o[1],u&&(u=n(u,t),r=a(u)),u?e=r&&r.normalize?r.normalize(e,i(t)):n(e,t):(e=n(e,t),o=s(e),u=o[0],e=o[1],u&&(r=a(u))),{f:u?u+"!"+e:e,n:e,pr:u,p:r}},p={require:function(e){return r(e)},exports:function(e){var t=d[e];return t!==void 0?t:d[e]={}},module:function(e){return{id:e,uri:"",exports:d[e],config:u(e)}}},c=function(n,i,s,u){var c,l,g,y,m,$,b=[];if(u=u||n,"function"==typeof s){for(i=!i.length&&s.length?["require","exports","module"]:i,m=0;i.length>m;m+=1)if(y=f(i[m],u),l=y.f,"require"===l)b[m]=p.require(n);else if("exports"===l)b[m]=p.exports(n),$=!0;else if("module"===l)c=b[m]=p.module(n);else if(t(d,l)||t(h,l)||t(v,l))b[m]=a(l);else{if(!y.p)throw Error(n+" missing "+l);y.p.load(y.n,r(u,!0),o(l),{}),b[m]=d[l]}g=s.apply(d[n],b),n&&(c&&c.exports!==e&&c.exports!==d[n]?d[n]=c.exports:g===e&&$||(d[n]=g))}else n&&(d[n]=s)},requirejs=require=l=function(t,n,r,i,o){return"string"==typeof t?p[t]?p[t](n):a(f(t,n).f):(t.splice||(g=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},"function"==typeof r&&(r=i,i=o),i?c(e,t,n,r):setTimeout(function(){c(e,t,n,r)},4),l)},l.config=function(e){return g=e,g.deps&&l(g.deps,g.callback),l},define=function(e,n,r){n.splice||(r=n,n=[]),t(d,e)||t(h,e)||(h[e]=[e,n,r])},define.amd={jQuery:!0}})(),define("requirejs",function(e){return function(){var t;return t||e.requirejs}}(this)),define("buffer",["require","exports","module"],function(e,t){t.Buffer=Buffer=Uint8Array,Buffer.prototype.copy=function(e){e.set(this)},Buffer.prototype.slice=function(e,t){return this.subarray(e,t)},Buffer.prototype.fill=function(){}});var CryptoJS=CryptoJS||function(e,t){var n={},r=n.lib={},i=r.Base=function(){function e(){}return{extend:function(t){e.prototype=this;var n=new e;return t&&n.mixIn(t),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=i.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||s).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes;if(this.clamp(),r%4)for(var o=0;i>o;o++){var a=255&n[o>>>2]>>>24-8*(o%4);t[r+o>>>2]|=a<<24-8*((r+o)%4)}else if(n.length>65535)for(var o=0;i>o;o+=4)t[r+o>>>2]=n[o>>>2];else t.push.apply(t,n);return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-8*(n%4),t.length=e.ceil(n/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;t>r;r+=4)n.push(0|4294967296*e.random());return new o.init(n,t)}}),a=n.enc={},s=a.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;n>i;i++){var o=255&t[i>>>2]>>>24-8*(i%4);r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;t>r;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new o.init(n,t/2)}},u=a.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;n>i;i++){var o=255&t[i>>>2]>>>24-8*(i%4);r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;t>r;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new o.init(n,t)}},c=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},l=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,a=this.blockSize,s=4*a,u=i/s;u=t?e.ceil(u):e.max((0|u)-this._minBufferSize,0);var c=u*a,l=e.min(4*c,i);if(c){for(var f=0;c>f;f+=a)this._doProcessBlock(r,f);var p=r.splice(0,c);n.sigBytes-=l}return new o.init(p,l)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=l.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}});var f=n.algo={};return n}(Math);define("cryptojs",["requirejs"],function(e){return function(){var t;return t||e.CryptoJS}}(this)),function(){function e(e){return 4278255360&e<<8|16711935&e>>>8}var t=CryptoJS,n=t.lib,r=n.WordArray,i=t.enc;i.Utf16=i.Utf16BE={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;n>i;i+=2){var o=65535&t[i>>>2]>>>16-8*(i%4);r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],i=0;t>i;i++)n[i>>>1]|=e.charCodeAt(i)<<16-16*(i%2);return r.create(n,2*t)}},i.Utf16LE={stringify:function(t){for(var n=t.words,r=t.sigBytes,i=[],o=0;r>o;o+=2){var a=e(65535&n[o>>>2]>>>16-8*(o%4));i.push(String.fromCharCode(a))}return i.join("")},parse:function(t){for(var n=t.length,i=[],o=0;n>o;o++)i[o>>>1]|=e(t.charCodeAt(o)<<16-16*(o%2));return r.create(i,2*n)}}}(),define("cryptojs/enc-utf16",["cryptojs"],function(e){return function(){var t;return t||e.CryptoJS.enc.Utf16}}(this)),CryptoJS.enc.u8array={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=new Uint8Array(n),i=0;n>i;i++){var o=255&t[i>>>2]>>>24-8*(i%4);r[i]=o}return r},parse:function(e){for(var t=e.length,n=[],r=0;t>r;r++)n[r>>>2]|=(255&e[r])<<24-8*(r%4);return CryptoJS.lib.WordArray.create(n,t)}},define("cryptojs/enc-u8arr",function(){}),function(){var e=CryptoJS,t=e.lib,n=t.WordArray,r=e.enc;r.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var i=[],o=0;n>o;o+=3)for(var a=255&t[o>>>2]>>>24-8*(o%4),s=255&t[o+1>>>2]>>>24-8*((o+1)%4),u=255&t[o+2>>>2]>>>24-8*((o+2)%4),c=a<<16|s<<8|u,l=0;4>l&&n>o+.75*l;l++)i.push(r.charAt(63&c>>>6*(3-l)));var f=r.charAt(64);if(f)for(;i.length%4;)i.push(f);return i.join("")},parse:function(e){var t=e.length,r=this._map,i=r.charAt(64);if(i){var o=e.indexOf(i);-1!=o&&(t=o)}for(var a=[],s=0,u=0;t>u;u++)if(u%4){var c=r.indexOf(e.charAt(u-1))<<2*(u%4),l=r.indexOf(e.charAt(u))>>>6-2*(u%4);a[s>>>2]|=(c|l)<<24-8*(s%4),s++}return n.create(a,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),define("cryptojs/enc-base64",function(){}),function(e){function t(e,t,n,r,i,o,a){var s=e+(t&n|~t&r)+i+a;return(s<<o|s>>>32-o)+t}function n(e,t,n,r,i,o,a){var s=e+(t&r|n&~r)+i+a;return(s<<o|s>>>32-o)+t}function r(e,t,n,r,i,o,a){var s=e+(t^n^r)+i+a;return(s<<o|s>>>32-o)+t}function i(e,t,n,r,i,o,a){var s=e+(n^(t|~r))+i+a;return(s<<o|s>>>32-o)+t}var o=CryptoJS,a=o.lib,s=a.WordArray,u=a.Hasher,c=o.algo,l=[];(function(){for(var t=0;64>t;t++)l[t]=0|4294967296*e.abs(e.sin(t+1))})();var f=c.MD5=u.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,o){for(var a=0;16>a;a++){var s=o+a,u=e[s];e[s]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var c=this._hash.words,f=e[o+0],p=e[o+1],d=e[o+2],h=e[o+3],g=e[o+4],v=e[o+5],y=e[o+6],m=e[o+7],$=e[o+8],b=e[o+9],w=e[o+10],x=e[o+11],C=e[o+12],S=e[o+13],k=e[o+14],A=e[o+15],E=c[0],j=c[1],_=c[2],T=c[3];E=t(E,j,_,T,f,7,l[0]),T=t(T,E,j,_,p,12,l[1]),_=t(_,T,E,j,d,17,l[2]),j=t(j,_,T,E,h,22,l[3]),E=t(E,j,_,T,g,7,l[4]),T=t(T,E,j,_,v,12,l[5]),_=t(_,T,E,j,y,17,l[6]),j=t(j,_,T,E,m,22,l[7]),E=t(E,j,_,T,$,7,l[8]),T=t(T,E,j,_,b,12,l[9]),_=t(_,T,E,j,w,17,l[10]),j=t(j,_,T,E,x,22,l[11]),E=t(E,j,_,T,C,7,l[12]),T=t(T,E,j,_,S,12,l[13]),_=t(_,T,E,j,k,17,l[14]),j=t(j,_,T,E,A,22,l[15]),E=n(E,j,_,T,p,5,l[16]),T=n(T,E,j,_,y,9,l[17]),_=n(_,T,E,j,x,14,l[18]),j=n(j,_,T,E,f,20,l[19]),E=n(E,j,_,T,v,5,l[20]),T=n(T,E,j,_,w,9,l[21]),_=n(_,T,E,j,A,14,l[22]),j=n(j,_,T,E,g,20,l[23]),E=n(E,j,_,T,b,5,l[24]),T=n(T,E,j,_,k,9,l[25]),_=n(_,T,E,j,h,14,l[26]),j=n(j,_,T,E,$,20,l[27]),E=n(E,j,_,T,S,5,l[28]),T=n(T,E,j,_,d,9,l[29]),_=n(_,T,E,j,m,14,l[30]),j=n(j,_,T,E,C,20,l[31]),E=r(E,j,_,T,v,4,l[32]),T=r(T,E,j,_,$,11,l[33]),_=r(_,T,E,j,x,16,l[34]),j=r(j,_,T,E,k,23,l[35]),E=r(E,j,_,T,p,4,l[36]),T=r(T,E,j,_,g,11,l[37]),_=r(_,T,E,j,m,16,l[38]),j=r(j,_,T,E,w,23,l[39]),E=r(E,j,_,T,S,4,l[40]),T=r(T,E,j,_,f,11,l[41]),_=r(_,T,E,j,h,16,l[42]),j=r(j,_,T,E,y,23,l[43]),E=r(E,j,_,T,b,4,l[44]),T=r(T,E,j,_,C,11,l[45]),_=r(_,T,E,j,A,16,l[46]),j=r(j,_,T,E,d,23,l[47]),E=i(E,j,_,T,f,6,l[48]),T=i(T,E,j,_,m,10,l[49]),_=i(_,T,E,j,k,15,l[50]),j=i(j,_,T,E,v,21,l[51]),E=i(E,j,_,T,C,6,l[52]),T=i(T,E,j,_,h,10,l[53]),_=i(_,T,E,j,w,15,l[54]),j=i(j,_,T,E,p,21,l[55]),E=i(E,j,_,T,$,6,l[56]),T=i(T,E,j,_,A,10,l[57]),_=i(_,T,E,j,y,15,l[58]),j=i(j,_,T,E,S,21,l[59]),E=i(E,j,_,T,g,6,l[60]),T=i(T,E,j,_,x,10,l[61]),_=i(_,T,E,j,d,15,l[62]),j=i(j,_,T,E,b,21,l[63]),c[0]=0|c[0]+E,c[1]=0|c[1]+j,c[2]=0|c[2]+_,c[3]=0|c[3]+T},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var o=e.floor(r/4294967296),a=r;n[(i+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[(i+64>>>9<<4)+14]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,u=s.words,c=0;4>c;c++){var l=u[c];u[c]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return s},clone:function(){var e=u.clone.call(this);return e._hash=this._hash.clone(),e}});o.MD5=u._createHelper(f),o.HmacMD5=u._createHmacHelper(f)}(Math),define("cryptojs/md5",function(){}),function(){var e=CryptoJS,t=e.lib,n=t.Base,r=t.WordArray,i=e.algo,o=i.MD5,a=i.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:o,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,i=n.hasher.create(),o=r.create(),a=o.words,s=n.keySize,u=n.iterations;s>a.length;){c&&i.update(c);var c=i.update(e).finalize(t);i.reset();for(var l=1;u>l;l++)c=i.finalize(c),i.reset();o.concat(c)}return o.sigBytes=4*s,o}});e.EvpKDF=function(e,t,n){return a.create(n).compute(e,t)}}(),define("cryptojs/evpkdf",function(){}),CryptoJS.lib.Cipher||function(e){var t=CryptoJS,n=t.lib,r=n.Base,i=n.WordArray,o=n.BufferedBlockAlgorithm,a=t.enc;a.Utf8;var s=a.Base64,u=t.algo,c=u.EvpKDF,l=n.Cipher=o.extend({cfg:r.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?x:$}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()});n.StreamCipher=l.extend({_doFinalize:function(){var e=this._process(true);return e},blockSize:1});var f=t.mode={},p=n.BlockCipherMode=r.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),d=f.CBC=function(){function t(t,n,r){var i=this._iv;if(i){var o=i;this._iv=e}else var o=this._prevBlock;for(var a=0;r>a;a++)t[n+a]^=o[a]}var n=p.extend();return n.Encryptor=n.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize;t.call(this,e,n,i),r.encryptBlock(e,n),this._prevBlock=e.slice(n,n+i)}}),n.Decryptor=n.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize,o=e.slice(n,n+i);r.decryptBlock(e,n),t.call(this,e,n,i),this._prevBlock=o}}),n}(),h=t.pad={},g=h.Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,o=r<<24|r<<16|r<<8|r,a=[],s=0;r>s;s+=4)a.push(o);var u=i.create(a,r);e.concat(u)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};n.BlockCipher=l.extend({cfg:l.cfg.extend({mode:d,padding:g}),reset:function(){l.reset.call(this);var e=this.cfg,t=e.iv,n=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else{var r=n.createDecryptor;this._minBufferSize=1}this._mode=r.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(true)}else{var t=this._process(true);e.unpad(t)}return t},blockSize:4});var v=n.CipherParams=r.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),y=t.format={},m=y.OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt;if(n)var r=i.create([1398893684,1701076831]).concat(n).concat(t);else var r=t;return r.toString(s)},parse:function(e){var t=s.parse(e),n=t.words;if(1398893684==n[0]&&1701076831==n[1]){var r=i.create(n.slice(2,4));n.splice(0,4),t.sigBytes-=16}return v.create({ciphertext:t,salt:r})}},$=n.SerializableCipher=r.extend({cfg:r.extend({format:m}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r),o=i.finalize(t),a=i.cfg;return v.create({ciphertext:o,key:n,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=e.createDecryptor(n,r).finalize(t.ciphertext);return i},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),b=t.kdf={},w=b.OpenSSL={execute:function(e,t,n,r){r||(r=i.random(8));var o=c.create({keySize:t+n}).compute(e,r),a=i.create(o.words.slice(t),4*n);return o.sigBytes=4*t,v.create({key:o,iv:a,salt:r})}},x=n.PasswordBasedCipher=$.extend({cfg:$.cfg.extend({kdf:w}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=r.kdf.execute(n,e.keySize,e.ivSize);r.iv=i.iv;var o=$.encrypt.call(this,e,t,i.key,r);return o.mixIn(i),o},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format);var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt);r.iv=i.iv;var o=$.decrypt.call(this,e,t,i.key,r);return o}})}(),define("cryptojs/cipher-core",function(){}),function(){var e=CryptoJS,t=e.lib,n=t.BlockCipher,r=e.algo,i=[],o=[],a=[],s=[],u=[],c=[],l=[],f=[],p=[],d=[];(function(){for(var e=[],t=0;256>t;t++)e[t]=128>t?t<<1:283^t<<1;for(var n=0,r=0,t=0;256>t;t++){var h=r^r<<1^r<<2^r<<3^r<<4;h=99^(h>>>8^255&h),i[n]=h,o[h]=n;var g=e[n],v=e[g],y=e[v],m=257*e[h]^16843008*h;a[n]=m<<24|m>>>8,s[n]=m<<16|m>>>16,u[n]=m<<8|m>>>24,c[n]=m;var m=16843009*y^65537*v^257*g^16843008*n;l[h]=m<<24|m>>>8,f[h]=m<<16|m>>>16,p[h]=m<<8|m>>>24,d[h]=m,n?(n=g^e[e[e[y^g]]],r^=e[e[r]]):n=r=1}})();var h=[0,1,2,4,8,16,32,64,128,27,54],g=r.AES=n.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,r=this._nRounds=n+6,o=4*(r+1),a=this._keySchedule=[],s=0;o>s;s++)if(n>s)a[s]=t[s];else{var u=a[s-1];s%n?n>6&&4==s%n&&(u=i[u>>>24]<<24|i[255&u>>>16]<<16|i[255&u>>>8]<<8|i[255&u]):(u=u<<8|u>>>24,u=i[u>>>24]<<24|i[255&u>>>16]<<16|i[255&u>>>8]<<8|i[255&u],u^=h[0|s/n]<<24),a[s]=a[s-n]^u}for(var c=this._invKeySchedule=[],g=0;o>g;g++){var s=o-g;if(g%4)var u=a[s];else var u=a[s-4];c[g]=4>g||4>=s?u:l[i[u>>>24]]^f[i[255&u>>>16]]^p[i[255&u>>>8]]^d[i[255&u]]}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,u,c,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,f,p,d,o);var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,a,s){for(var u=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],f=e[t+2]^n[2],p=e[t+3]^n[3],d=4,h=1;u>h;h++){var g=r[c>>>24]^i[255&l>>>16]^o[255&f>>>8]^a[255&p]^n[d++],v=r[l>>>24]^i[255&f>>>16]^o[255&p>>>8]^a[255&c]^n[d++],y=r[f>>>24]^i[255&p>>>16]^o[255&c>>>8]^a[255&l]^n[d++],m=r[p>>>24]^i[255&c>>>16]^o[255&l>>>8]^a[255&f]^n[d++];c=g,l=v,f=y,p=m}var g=(s[c>>>24]<<24|s[255&l>>>16]<<16|s[255&f>>>8]<<8|s[255&p])^n[d++],v=(s[l>>>24]<<24|s[255&f>>>16]<<16|s[255&p>>>8]<<8|s[255&c])^n[d++],y=(s[f>>>24]<<24|s[255&p>>>16]<<16|s[255&c>>>8]<<8|s[255&l])^n[d++],m=(s[p>>>24]<<24|s[255&c>>>16]<<16|s[255&l>>>8]<<8|s[255&f])^n[d++];e[t]=g,e[t+1]=v,e[t+2]=y,e[t+3]=m},keySize:8});e.AES=n._createHelper(g)}(),define("cryptojs/aes",["cryptojs","cryptojs/enc-base64","cryptojs/md5","cryptojs/evpkdf","cryptojs/cipher-core"],function(e){return function(){var t;return t||e.CryptoJS.algo.AES}}(this)),CryptoJS.pad.NoPadding={pad:function(){},unpad:function(){}},define("cryptojs/pad-nopadding",["cryptojs/aes"],function(){}),function(){if("function"==typeof ArrayBuffer){var e=CryptoJS,t=e.lib,n=t.WordArray,r=n.init,i=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],i=0;t>i;i++)n[i>>>2]|=e[i]<<24-8*(i%4);r.call(this,n,t)}else r.apply(this,arguments)};i.prototype=n}}(),define("cryptojs/lib-typedarrays",["cryptojs"],function(){}),function(e){var t=CryptoJS,n=t.lib,r=n.WordArray,i=n.Hasher,o=t.algo,a=[],s=[];(function(){function t(t){for(var n=e.sqrt(t),r=2;n>=r;r++)if(!(t%r))return!1;return!0}function n(e){return 0|4294967296*(e-(0|e))}for(var r=2,i=0;64>i;)t(r)&&(8>i&&(a[i]=n(e.pow(r,.5))),s[i]=n(e.pow(r,1/3)),i++),r++})();var u=[],c=o.SHA256=i.extend({_doReset:function(){this._hash=new r.init(a.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],c=n[4],l=n[5],f=n[6],p=n[7],d=0;64>d;d++){if(16>d)u[d]=0|e[t+d];else{var h=u[d-15],g=(h<<25|h>>>7)^(h<<14|h>>>18)^h>>>3,v=u[d-2],y=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;u[d]=g+u[d-7]+y+u[d-16]}var m=c&l^~c&f,$=r&i^r&o^i&o,b=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),x=p+w+m+s[d]+u[d],C=b+$;p=f,f=l,l=c,c=0|a+x,a=o,o=i,i=r,r=0|x+C}n[0]=0|n[0]+r,n[1]=0|n[1]+i,n[2]=0|n[2]+o,n[3]=0|n[3]+a,n[4]=0|n[4]+c,n[5]=0|n[5]+l,n[6]=0|n[6]+f,n[7]=0|n[7]+p},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[(i+64>>>9<<4)+14]=e.floor(r/4294967296),n[(i+64>>>9<<4)+15]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=i._createHelper(c),t.HmacSHA256=i._createHmacHelper(c)}(Math),define("cryptojs/sha256",["cryptojs"],function(e){return function(){var t;return t||e.CryptoJS.algo.SHA256}}(this)),function(){var e=CryptoJS,t=e.lib,n=t.Base,r=e.enc,i=r.Utf8,o=e.algo;o.HMAC=n.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=i.parse(t));var n=e.blockSize,r=4*n;t.sigBytes>r&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),a=this._iKey=t.clone(),s=o.words,u=a.words,c=0;n>c;c++)s[c]^=1549556828,u[c]^=909522486;o.sigBytes=a.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);t.reset();var r=t.finalize(this._oKey.clone().concat(n));return r}})}(),define("cryptojs/hmac",function(e){return function(){var t;return t||e.CryptoJS.algo.HMAC}}(this)),define("crypto",["require","exports","module","cryptojs","cryptojs/enc-utf16","cryptojs/enc-u8arr","cryptojs/pad-nopadding","cryptojs/lib-typedarrays","cryptojs/sha256","cryptojs/hmac","cryptojs/aes"],function(e,t){function n(e,t){return this instanceof n?(this._ctx=s.algo.SHA256.create(),void 0):new n(e,t)}function r(e,t,n){return this instanceof r?(t=s.lib.WordArray.create(t),this._ctx=s.algo.HMAC.create(s.algo.SHA256,t),void 0):new r(e,t,n)}function i(e,t,n,r){return this instanceof i?(t=s.lib.WordArray.create(t),n=s.lib.WordArray.create(n),this._ctx=s.algo.AES.createEncryptor(t,{iv:n,mode:s.mode.CBC,padding:s.pad.NoPadding}),void 0):new i(e,t,n,r)}function o(e,t,n,r){return this instanceof o?(t=s.lib.WordArray.create(t),n=s.lib.WordArray.create(n),this._ctx=s.algo.AES.createDecryptor(t,{iv:n,mode:s.mode.CBC,padding:s.pad.NoPadding}),void 0):new o(e,t,n,r)}function a(e,t){var n;if(self.crypto&&self.crypto.getRandomValues)n=new Uint8Array(e),self.crypto.getRandomValues(n);else{for(n=[];e>0;e--)n.push(Math.floor(256*Math.random()));n=new Uint8Array(n)}return t?(t(null,n),void 0):n}var s=e("cryptojs");e("cryptojs/enc-utf16"),e("cryptojs/enc-u8arr"),e("cryptojs/pad-nopadding"),e("cryptojs/lib-typedarrays"),e("cryptojs/sha256"),e("cryptojs/hmac"),e("cryptojs/aes"),t.createHash=t.Hash=n,n.prototype.update=function(e){return e=s.lib.WordArray.create(e),this._ctx.update(e),this},n.prototype.digest=function(){var e=this._ctx.finalize();return s.enc.u8array.stringify(e)},t.createHmac=t.Hmac=r,r.prototype.update=n.prototype.update,r.prototype.digest=n.prototype.digest,t.createCipheriv=t.Cipheriv=i,i.prototype.update=function(e){e=s.lib.WordArray.create(e);var t=this._ctx.process(e);return s.enc.u8array.stringify(t)},i.prototype.final=function(){var e=this._ctx.finalize();return s.enc.u8array.stringify(e)},i.prototype.setAutoPadding=function(){return this},t.createDecipheriv=t.Decipheriv=o,o.prototype.update=i.prototype.update,o.prototype.final=i.prototype.final,o.prototype.finaltol=i.prototype.final,o.prototype.setAutoPadding=i.prototype.setAutoPadding,t.randomBytes=a}),define("weldra-crypt/polyfill/blob",["require","exports","module"],function(){Blob=function(){var e=Blob;return Blob.prototype.webkitSlice?Blob.prototype.slice=Blob.prototype.webkitSlice:Blob.prototype.mozSlice&&(Blob.prototype.slice=Blob.prototype.mozSlice),function(t,n){try{return Blob=e,new Blob(t||[],n||{})}catch(r){Blob=function(e,t){var n,r=new(WebKitBlobBuilder||MozBlobBuilder);for(n in e)r.append(e[n]);return r.getBlob(t&&t.type?t.type:void 0)}}}}()}),define("fs",["require","exports","module","weldra-crypt/polyfill/blob"],function(e,t){function n(e,t,n,r){n&&!r&&(r=n,n=null);var i={flags:t,path:e,position:0};if("r"==t){i.file=e,i.reader=new FileReader;for(var o in i.reader)postMessage(o)}else"w"==t&&(i.file=new Blob);r(null,i)}function r(e,t){t()}function i(e,t,n,r,i,o){null===i&&(i=e.position,e.position+=r);var a=e.file.slice(i,i+r);e.reader.onload=function(e){t.set(new Uint8Array(e.target.result)),o(null,a.size,t)},e.reader.readAsArrayBuffer(a)}function o(e,t,n,r,i,o){e.file=new Blob([e.file,t.slice(n,n+r)]);var a=r;o(null,a,t)}t.open=n,t.close=r,t.read=i,t.write=o,e("weldra-crypt/polyfill/blob"),self.FileReader===void 0&&self.FileReaderSync!==void 0&&(self.FileReader=function(){this.frs=new self.FileReaderSync},self.FileReader.prototype.readAsArrayBuffer=function(e){var t={target:{result:this.frs.readAsArrayBuffer(e)}},n=this;setTimeout(function(){n.onload(t)},1)})}),define("encrypt",["require","buffer","crypto","cryptojs","cryptojs/lib-typedarrays","fs"],function(e){function t(e){var t=e.data;"start"==t.cmd&&(y="busy",r(t.file,t.pass)),"status"==t.cmd&&self.postMessage({status:y})}function n(){for(var e=[],t=0;arguments.length>t;t++)e[t]=arguments[t],e[t]instanceof Uint8Array&&(e[t]=u.enc.Hex.stringify(u.lib.WordArray.create(e[t])));self.postMessage(e)}function r(e,t){var n=e.name+".aes";c.open(e,"r",function(e,r){e&&self.postMessage({error:"Could not open input file"}),c.open(n,"w",function(e,i){e&&self.postMessage({error:"Could not open output file"}),o(r,t,i,function(e){e?self.postMessage({error:""+e}):self.postMessage({download:i.file,downloadName:n}),c.close(r,function(){c.close(i,function(){self.close()})})})})})}function i(e,t){postMessage({progressStatus:"Generating first key"});var n,r=new a(x);r.fill(0),e.copy(r);for(var i=0;8192>i;i++)p=s.createHash($),p.update(r),p.update(t),n=p.digest(),n.copy(r);return r}function o(e,t,r,o){function p(){_>=2?(E=new a([0,0]),c.write(r,E,0,E.length,null,function(){y()})):y()}function y(){c.write(r,d,0,d.length,null,function(){postMessage({progress:m=2}),$()})}function $(){l=s.createCipheriv(w,h,d),E=new a(C+x),E.set(g),E.set(v,C),E.set(l.update(E)),E.set(l.final(),32),n("IV2 + AES2 ciphertext: ",E),c.write(r,E,0,E.length,null,function(){postMessage({progress:m=5}),S(E)})}function S(e){f=s.createHmac(b,h),f.update(e),e=f.digest(),n("HMAC1: ",e),c.write(r,e,0,e.length,null,function(){postMessage({progress:m=10}),k()})}function k(){l=s.createCipheriv(w,v,g),f=s.createHmac(b,v),E=new a(C);var t=0,i=0,o=Math.round(j/C),u=0,p=90/o;(function d(){c.read(e,E,0,C,t,function(e,s){t+=s,u++,s>0?(E=l.update(E),f.update(E),c.write(r,E,0,E.length,null,function(){i=s,postMessage({progress:Math.round(m+=p),progressStatus:"Encrypted block "+u+"/"+o}),d()})):(i&=15,n("Last block size mod 16: "+i),E=new a([i]),c.write(r,E,0,E.length,null,function(){A()}))})})()}function A(){E=f.digest(),n("HMAC2: ",E),c.write(r,E,0,E.length,null,function(){postMessage({progress:m=100,progressStatus:"Encryption successful"}),o()})}var E,j=e.file.size,_=2;t=u.enc.u8array.stringify(u.enc.Utf16LE.parse(t)),d=s.randomBytes(C),h=i(d,t),g=s.randomBytes(C),v=s.randomBytes(x),n("IV1: ",d),n("AES1: ",h),n("IV2: ",g),n("AES2: ",v),E=new a(["A".charCodeAt(0),"E".charCodeAt(0),"S".charCodeAt(0),_,0]),c.write(r,E,0,E.length,null,function(){postMessage({progress:m=1}),p()})}var a=e("buffer").Buffer,s=e("crypto"),u=e("cryptojs"),c=(e("cryptojs/lib-typedarrays"),e("fs"));self.addEventListener("message",t),self.postMessage({status:"ready"});var l,f,p,d,h,g,v,y="ready",m=0,$="SHA256",b="SHA256",w="AES256",x=32,C=16}),require(["encrypt"]);