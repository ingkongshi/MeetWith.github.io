(function(window){var svgSprite='<svg><symbol id="icon-gouwuchekong" viewBox="0 0 1028 1024"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z"  ></path></symbol><symbol id="icon-xuehua" viewBox="0 0 1024 1024"><path d="M862.991059 542.388706l-95.533177 54.211765-71.469176-40.658824V467.727059l71.469176-40.568471 95.533177 54.211765 101.135059-57.494588-95.533177-54.211765 94.027294-53.458824v-60.235294l-53.097411-30.117647-94.027295 53.428706V170.706824L714.390588 228.171294v108.42353l-71.469176 40.628705-77.70353-44.15247v-81.317647l95.533177-54.211765V82.703059l-95.533177 54.211765V30.177882l-53.097411-30.117647-53.067295 30.117647v106.736942l-95.533176-54.211765v114.838588l95.533176 54.211765v81.317647l-77.703529 44.15247-71.469176-40.628705v-108.42353L208.775529 170.706824v108.574117L114.778353 225.882353l-53.097412 30.117647v60.235294l94.027294 53.368471L60.235294 424.026353l101.104941 57.404235 95.533177-54.211764 71.469176 40.56847v88.214588l-71.469176 40.658824-95.533177-54.211765L60.235294 599.853176l95.533177 54.211765-94.027295 53.368471v60.235294l53.097412 30.117647 93.997177-53.368471v108.42353l101.104941-57.464471v-108.423529l71.469176-40.628706 77.70353 44.15247v81.317648l-95.533177 54.211764v114.868706l95.533177-54.211765v106.827295l53.067294 30.117647 53.097412-30.117647V886.663529l95.533176 54.211765v-114.868706l-95.533176-54.211764v-81.317648l77.703529-44.15247 71.469177 40.628706v108.423529l101.104941 57.464471v-108.42353l94.027294 53.368471 53.097412-30.117647v-60.235294l-94.027295-53.368471 95.533177-54.211765z m-277.323294 11.354353L512 595.486118l-73.547294-41.743059V470.136471L512 428.393412l73.547294 41.743059v83.606588z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)