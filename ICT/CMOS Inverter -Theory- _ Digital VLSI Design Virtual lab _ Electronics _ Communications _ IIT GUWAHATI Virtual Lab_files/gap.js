!function(){var a,b,c,d,e,f;f="undefined"!=typeof exports&&null!==exports?exports:this,a=function(){function a(a,b,c){var d,f,g;for(this.bounced=!1,this.cookied=c,f=0,g=b.length;g>f;f++)d=b[f],e.isCommandArray(b)&&this.subscribe(d);e.isCommandArray(a)&&this.push(a)}return a.prototype.history=[],a.prototype.subscribers=[],a.prototype.variables={},a.prototype.publish=function(a){var b,c,d,e,f;for(e=this.subscribers,f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push(b.listen(a,this));return f},a.prototype.push=function(a){var b,c,d,g;if(e.isCommandArray(a)&&e.isCommandArray(a[0])){for(g=[],c=0,d=a.length;d>c;c++)b=a[c],g.push(this.push(b));return g}if(e.isCommandArray(a)){if(0===a[0].indexOf("_gap"))return this.publish(a);if(f._gaq.push(a),null!=f._gapDebug&&f._gapDebug&&null!=f.console)return this.history.push(a),f.console.log("Pushed: "+a)}},a.prototype.subscribe=function(a){return this.subscribers.push(a)},a}(),d=function(){function a(){}return a.prototype.listen=function(a,b){var c;switch(a[0]){case"_gapTrackBounceViaTime":if(2===a.length&&"number"==typeof a[1]&&!b.cookied&&!b.bounced)return b.variables.bounceViaTimeTimeout=f.setTimeout(function(){return f._gap.bounced?void 0:(f._gap.bounced=!0,f._gap.push(["_trackEvent","gapBounceViaTime",a[1].toString()]))},1e3*a[1]);break;case"_gapTrackReads":if(3===a.length&&"number"==typeof a[1]&&"number"==typeof a[2])return b.variables.readsSeconds=0,b.variables.readsSecondsMax=a[1]*a[2],b.variables.readsInterval=f.setInterval(c=function(){return f._gap.variables.readsSeconds<f._gap.variables.readsSecondsMax?(f._gap.push(["_trackEvent","gapRead",(f._gap.variables.readsSeconds+=a[1]).toString()]),c):clearInterval(f._gap.variables.readsInterval)},1e3*a[1])}},a}(),b=function(){function a(){}return a.prototype.append=function(a){var b;return b=f.document.getElementsByTagName("body")[0].onmousedown,f.document.getElementsByTagName("body")[0].onmousedown=null==b?a:function(c){return b(c),a(c)}},a.prototype.listen=function(a){switch(a[0]){case"_gapTrackLinkClicks":return this.append(function(a){var b,c,d;return c=a.target||a.srcElement,null==c||"A"!==c.nodeName&&"BUTTON"!==c.nodeName?void 0:(d=c.innerText||c.textContent,b=c.href||"",f._gap.push(["_trackEvent","gapLinkClick",d.replace(/^\s+|\s+$/g,"")+" ("+b+")"]))})}},a}(),c=function(){function a(){}return a.prototype.append=function(a){var b;return b=window.onscroll,window.onscroll=null==b?a:function(c){return b(c),a(c)}},a.prototype.listen=function(a,b){switch(a[0]){case"_gapTrackBounceViaScroll":if(2===a.length&&"number"==typeof a[1]&&!b.cookied&&!b.bounced)return b.variables.bounceViaScrollPercentage=a[1],this.append(function(){return!b.bounced&&100*((e.windowScroll()+e.windowHeight())/e.documentHeight())>=f._gap.variables.bounceViaScrollPercentage?(f._gap.bounced=!0,f._gap.push(["_trackEvent","gapBounceViaScroll",f._gap.variables.bounceViaScrollPercentage])):void 0})}},a}(),e=function(){function a(){}return a.documentHeight=function(){return Math.max(f.document.body.scrollHeight||0,f.document.documentElement.scrollHeight||0,f.document.body.offsetHeight||0,f.document.documentElement.offsetHeight||0,f.document.body.clientHeight||0,f.document.documentElement.clientHeight||0)},a.isCommandArray=function(a){return null!=a&&"[object Array]"==={}.toString.call(a)&&a.length>0},a.hasCookie=function(a){return f.document.cookie.indexOf(a)>=0},a.windowHeight=function(){return f.window.innerHeight||f.document.documentElement.clientHeight||f.document.body.clientHeight||0},a.windowScroll=function(){return f.window.pageYOffset||f.document.body.scrollTop||f.document.documentElement.scrollTop||0},a}(),null==f._gap&&(f._gap=[]),null==f._gaq&&(f._gaq=[]),function(){var g,h,i;return h=e.hasCookie("__utmb"),g=f.document.createElement("script"),g.async=!0,g.type="text/javascript",g.src="https:"===f.location.protocol?"https://ssl":"http://www.google-analytics.com/ga.js",g.onload=g.onreadystatechange=function(){return f._gap=new a(f._gap,[new d,new b,new c],h)},i=f.document.getElementsByTagName("script")[0],i.parentNode.insertBefore(g,i)}()}.call(this);