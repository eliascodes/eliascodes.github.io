!function(t){function n(i){if(r[i])return r[i].exports;var e=r[i]={exports:{},id:i,loaded:!1};return t[i].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";function i(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}var e=r(1),o=e.randomInt,a=e.roundToNearestN,u=e.coordTransform,c=e.polar2cartesian,s=e.range,h=r(3),f=r(2),l=10,d=1e3,p=15,m=[0,0],y=150,x=function(){var t=new f(document.querySelector("canvas"));return t.width=window.innerWidth,t.height=document.querySelector("main").getBoundingClientRect().top,t.adjustResolution(window),m=[t.width/2,t.height/2],t},v=function(t,n){var r,i,e,o=[n[0],.9*n[1]],a=[n[0],1*n[1]],u=[n[0],1.1*n[1]];t.ctx.font='1.5em "Consolas", "Monaco", "Lucida Console", sans-serif',t.ctx.textAlign="center",(r=t.ctx).fillText.apply(r,["Elias Malik"].concat(o)),t.ctx.font='0.8em "Consolas", "Monaco", "Lucida Console", sans-serif',(i=t.ctx).fillText.apply(i,["@eliascodes"].concat(a)),(e=t.ctx).fillText.apply(e,["Developer & Analyst"].concat(u))};document.addEventListener("DOMContentLoaded",function(){var t=x();v(t,m);var n=function(t,n){return Math.pow(t,2)+Math.pow(n,2)},r=function(t,r){return n.apply(void 0,i(u(m,[t,r])))},e=function(t,n){return r(t,n)>Math.pow(y,2)},f=function(n,r,i){var u=new h;return u.x=a(p,i[0]||o(t.width,0)),u.y=a(p,i[1]||o(t.height,0)),u.limit=n,u.scale=r,u.mod.x=t.width,u.mod.y=t.height,u.isValidStep=e,u},g=s(0,l).map(function(t){return 2*Math.PI/t}).map(function(t){return c(t,2*y)}).map(function(t){return u(t,m.map(function(t){return-t}))}).map(function(t){return f.apply(void 0,[d,p].concat(i(t)))}),w=function n(){g=g.filter(function(t){return!t.limitReached()}),g.forEach(function(n){return t.drawLine.apply(t,i(n.step()))}),g.length&&requestAnimationFrame(n)};requestAnimationFrame(w)})},function(t,n){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}var i=n.random=function(t,n){return n+(t-n)*Math.random()};n.randomInt=function(t,n){return Math.round(i(t,n))};n.randomUnit=function(t,n){var r=[i(t,n),i(t,n)],e=r.map(function(t){return 2^t}).reduce(function(t,n){return t+n},0);return r.map(function(t){return t/e})},n.roundToNearestN=function(t,n){return Math.round(n/t)*t},n.polar2cartesian=function(t,n){return[n*Math.cos(t),n*Math.sin(t)]},n.coordTransform=function(t,n){return t.map(function(t,r){return t-n[r]})},n.range=function(t,n){return[].concat(r(Array(n-t+1).keys())).map(function(n){return n+t})}},function(t,n){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),n}}(),e=function(){function t(n){r(this,t),this.cvs=n,this.ctx=n.getContext("2d"),this.width=0,this.height=0}return i(t,[{key:"adjustResolution",value:function(t){var n=t.devicePixelRatio||1,r=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,i=n/r;this.cvs.width=this.width*i,this.cvs.height=this.height*i,this.cvs.style.width=this.width+"px",this.cvs.style.height=this.heigh+"px",this.ctx.setTransform(i,0,0,i,0,0)}},{key:"drawLine",value:function(t,n){this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(n.x,n.y),this.ctx.stroke()}}]),t}();t.exports=e},function(t,n,r){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,n){var r=[],i=!0,e=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done)&&(r.push(a.value),!n||r.length!==n);i=!0);}catch(t){e=!0,o=t}finally{try{!i&&u.return&&u.return()}finally{if(e)throw o}}return r}return function(n,r){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),n}}(),a=r(1),u=a.randomInt,c=function(t,n,r){return Math.max(t,Math.min(n,r))},s=function(){function t(){i(this,t),this.x=0,this.y=0,this.mod={x:1,y:1},this.limit=100,this.steps=0,this.scale=1,this.isValidStep=function(){return!0}}return o(t,[{key:"limitReached",value:function(){return this.steps>=this.limit}},{key:"step",value:function(){var t=this;if(!this.limitReached()){var n=this.x,r=this.y,i=[u(1,-1),u(1,-1)].map(function(n){return n*t.scale}),o=e(i,2),a=o[0],s=o[1],h=c(0,this.mod.x,this.x+a),f=c(0,this.mod.y,this.y+s);return this.isValidStep(h,f)&&(this.x=c(0,this.mod.x,this.x+a),this.y=c(0,this.mod.y,this.y+s),this.steps++),[{x:n,y:r},{x:this.x,y:this.y}]}}}]),t}();t.exports=s}]);
//# sourceMappingURL=bundle.js.map