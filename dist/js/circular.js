Circular=function(){},Circular.convert=function(a){"use strict";if(a){var b;b=document.getElementsByClassName(a),this.transform(b)}else;},Circular.transform=function(a){"use strict";if(a.length>0)for(var b=0;b<a.length;b++){var c="";a[b].getAttribute("checked")&&(c=this.findCssOn(a[b])),a[b].className=a[b].className+" circular-"+b,a[b].outerHTML='<div id="circular-container-'+b+'" class="circular-core '+this.findCssOff(a[b])+" "+c+'">'+a[b].outerHTML+"</div>",this.addListener(b)}},Circular.addListener=function(a){"use strict";var b,c;document.getElementById("circular-container-"+a).addEventListener("click",function(){b=document.getElementsByClassName("circular-"+a)[0].getAttribute("checked"),c=document.getElementsByClassName("circular-"+a)[0],b?(c.removeAttribute("checked"),document.getElementById("circular-container-"+a).className="circular-core "+Circular.findCssOff(c)):(c.setAttribute("checked","checked"),document.getElementById("circular-container-"+a).className="circular-core "+Circular.findCssOff(c)+" "+Circular.findCssOn(c))})},Circular.findCssOff=function(a){"use strict";if(a){var b=a.getAttribute("data-css-off");return b?b:"circular-container"}},Circular.findCssOn=function(a){"use strict";if(a){var b=a.getAttribute("data-css-on");return b?b:"circular-container-checked"}};
//# sourceMappingURL=circular.js.map