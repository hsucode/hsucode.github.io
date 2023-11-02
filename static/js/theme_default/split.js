/*! Split.js - v1.6.4 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Split=t()}(this,(function(){"use strict";var e="undefined"!=typeof window?window:null,t=null===e,n=t?void 0:e.document,i=function(){return!1},r=t?"calc":["","-webkit-","-moz-","-o-"].filter((function(e){var t=n.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length})).shift()+"calc",s=function(e){return"string"==typeof e||e instanceof String},o=function(e){if(s(e)){var t=n.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},a=function(e,t,n){var i=e[t];return void 0!==i?i:n},u=function(e,t,n,i){if(t){if("end"===i)return 0;if("center"===i)return e/2}else if(n){if("start"===i)return 0;if("center"===i)return e/2}return e},l=function(e,t){var i=n.createElement("div");return i.className="gutter gutter-"+t,i},c=function(e,t,n){var i={};return s(t)?i[e]=t:i[e]=r+"("+t+"% - "+n+"px)",i},h=function(e,t){var n;return(n={})[e]=t+"px",n};return function(r,s){if(void 0===s&&(s={}),t)return{};var d,f,v,m,g,p,y=r;Array.from&&(y=Array.from(y));var z=o(y[0]).parentNode,S=getComputedStyle?getComputedStyle(z):null,b=S?S.flexDirection:null,E=a(s,"sizes")||y.map((function(){return 100/y.length})),_=a(s,"minSize",100),L=Array.isArray(_)?_:y.map((function(){return _})),w=a(s,"maxSize",1/0),x=Array.isArray(w)?w:y.map((function(){return w})),k=a(s,"expandToMin",!1),C=a(s,"gutterSize",10),M=a(s,"gutterAlign","center"),U=a(s,"snapOffset",30),A=a(s,"dragInterval",1),O=a(s,"direction","horizontal"),D=a(s,"cursor","horizontal"===O?"col-resize":"row-resize"),B=a(s,"gutter",l),T=a(s,"elementStyle",c),j=a(s,"gutterStyle",h);function F(e,t,n,i){var r=T(d,t,n,i);Object.keys(r).forEach((function(t){e.style[t]=r[t]}))}function R(){return p.map((function(e){return e.size}))}function N(e){return"touches"in e?e.touches[0][f]:e[f]}function q(e){var t=p[this.a],n=p[this.b],i=t.size+n.size;t.size=e/this.size*i,n.size=i-e/this.size*i,F(t.element,t.size,this._b,t.i),F(n.element,n.size,this._c,n.i)}function H(e){var t,n=p[this.a],r=p[this.b];this.dragging&&(t=N(e)-this.start+(this._b-this.dragOffset),A>1&&(t=Math.round(t/A)*A),t<=n.minSize+U+this._b?t=n.minSize+this._b:t>=this.size-(r.minSize+U+this._c)&&(t=this.size-(r.minSize+this._c)),t>=n.maxSize-U+this._b?t=n.maxSize+this._b:t<=this.size-(r.maxSize-U+this._c)&&(t=this.size-(r.maxSize+this._c)),q.call(this,t),a(s,"onDrag",i)(R()))}function I(){var e=p[this.a].element,t=p[this.b].element,n=e.getBoundingClientRect(),i=t.getBoundingClientRect();this.size=n[d]+i[d]+this._b+this._c,this.start=n[v],this.end=n[m]}function W(e){var t=function(e){if(!getComputedStyle)return null;var t=getComputedStyle(e);if(!t)return null;var n=e[g];return 0===n?null:n-="horizontal"===O?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)}(z);if(null===t)return e;if(L.reduce((function(e,t){return e+t}),0)>t)return e;var n=0,i=[],r=e.map((function(r,s){var o=t*r/100,a=u(C,0===s,s===e.length-1,M),l=L[s]+a;return o<l?(n+=l-o,i.push(0),l):(i.push(o-l),o)}));return 0===n?e:r.map((function(e,r){var s=e;if(n>0&&i[r]-n>0){var o=Math.min(n,i[r]-n);n-=o,s=e-o}return s/t*100}))}function X(){var t=p[this.a].element,r=p[this.b].element;this.dragging&&a(s,"onDragEnd",i)(R()),this.dragging=!1,e.removeEventListener("mouseup",this.stop),e.removeEventListener("touchend",this.stop),e.removeEventListener("touchcancel",this.stop),e.removeEventListener("mousemove",this.move),e.removeEventListener("touchmove",this.move),this.stop=null,this.move=null,t.removeEventListener("selectstart",i),t.removeEventListener("dragstart",i),r.removeEventListener("selectstart",i),r.removeEventListener("dragstart",i),t.style.userSelect="",t.style.webkitUserSelect="",t.style.MozUserSelect="",t.style.pointerEvents="",r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",this.gutter.style.cursor="",this.parent.style.cursor="",n.body.style.cursor=""}function Y(t){if(!("button"in t)||0===t.button){var r=p[this.a].element,o=p[this.b].element;this.dragging||a(s,"onDragStart",i)(R()),t.preventDefault(),this.dragging=!0,this.move=H.bind(this),this.stop=X.bind(this),e.addEventListener("mouseup",this.stop),e.addEventListener("touchend",this.stop),e.addEventListener("touchcancel",this.stop),e.addEventListener("mousemove",this.move),e.addEventListener("touchmove",this.move),r.addEventListener("selectstart",i),r.addEventListener("dragstart",i),o.addEventListener("selectstart",i),o.addEventListener("dragstart",i),r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",this.gutter.style.cursor=D,this.parent.style.cursor=D,n.body.style.cursor=D,I.call(this),this.dragOffset=N(t)-this.end}}"horizontal"===O?(d="width",f="clientX",v="left",m="right",g="clientWidth"):"vertical"===O&&(d="height",f="clientY",v="top",m="bottom",g="clientHeight"),E=W(E);var G=[];function J(e){var t=e.i===G.length,n=t?G[e.i-1]:G[e.i];I.call(n);var i=t?n.size-e.minSize-n._c:e.minSize+n._b;q.call(n,i)}return(p=y.map((function(e,t){var n,i={element:o(e),size:E[t],minSize:L[t],maxSize:x[t],i:t};if(t>0&&((n={a:t-1,b:t,dragging:!1,direction:O,parent:z})._b=u(C,t-1==0,!1,M),n._c=u(C,!1,t===y.length-1,M),"row-reverse"===b||"column-reverse"===b)){var r=n.a;n.a=n.b,n.b=r}if(t>0){var s=B(t,O,i.element);!function(e,t,n){var i=j(d,t,n);Object.keys(i).forEach((function(t){e.style[t]=i[t]}))}(s,C,t),n._a=Y.bind(n),s.addEventListener("mousedown",n._a),s.addEventListener("touchstart",n._a),z.insertBefore(s,i.element),n.gutter=s}return F(i.element,i.size,u(C,0===t,t===y.length-1,M),t),t>0&&G.push(n),i}))).forEach((function(e){var t=e.element.getBoundingClientRect()[d];t<e.minSize&&(k?J(e):e.minSize=t)})),{setSizes:function(e){var t=W(e);t.forEach((function(e,n){if(n>0){var i=G[n-1],r=p[i.a],s=p[i.b];r.size=t[n-1],s.size=e,F(r.element,r.size,i._b,r.i),F(s.element,s.size,i._c,s.i)}}))},getSizes:R,collapse:function(e){J(p[e])},destroy:function(e,t){G.forEach((function(n){if(!0!==t?n.parent.removeChild(n.gutter):(n.gutter.removeEventListener("mousedown",n._a),n.gutter.removeEventListener("touchstart",n._a)),!0!==e){var i=T(d,n.a.size,n._b);Object.keys(i).forEach((function(e){p[n.a].element.style[e]="",p[n.b].element.style[e]=""}))}}))},parent:z,pairs:G}}}));
//# sourceMappingURL=split.min.js.map
