(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=new(function(){function n(e){var t=this,r=e.selector,a=e.targetDate;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.selector=r,this.targetDate=a,this.timer=setInterval((function(){var e,n=t.targetDate.getTime()-Date.now();n<0&&(n=-n),document.querySelector('[data-value="days"]').textContent=(e=n,Math.floor(e/864e5)),document.querySelector('[data-value="hours"]').textContent=function(e){return Math.floor(e%864e5/36e5)}(n),document.querySelector('[data-value="mins"]').textContent=function(e){return Math.floor(e%36e5/6e4)}(n),document.querySelector('[data-value="secs"]').textContent=function(e){return Math.floor(e%6e4/1e3)}(n)}),900)}var r,a;return r=n,(a=[{key:"delete",value:function(){clearInterval(t)}}])&&e(r.prototype,a),n}())({selector:"#timer-1",targetDate:new Date("Jul 17, 2029")})})();