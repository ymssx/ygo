"use strict";var precacheConfig=[["/ygo/index.html","f256aeb8a1ae0c10d1c94007973d7b7e"],["/ygo/static/css/app.63fb10635f75cf3f8118b3a7b08b3ff8.css","873c89291af45f8756674eee020ea577"],["/ygo/static/favicon.ico","0e31c77ef540a5df23f7552abc741dc6"],["/ygo/static/flash.jpg","6247b35d27ab8efea4d9d14706bd5f6b"],["/ygo/static/js/app.7845d7aa9f26adfea0fb.js","30da2bbd97f517027a1ff208d30e70c3"],["/ygo/static/js/manifest.73e2ce237caa7516491d.js","99d8ac71fd9da17160b1c450fb500e6b"],["/ygo/static/js/vendor.2e5b149033bdb0ae60c8.js","eccd4c76e6a8ef628d15afb381b93476"],["/ygo/static/logo.png","7997e68393cfaefec0940ed252411f96"],["/ygo/static/manifest.json","1e72d8e6c2353b4210ce6b68f461db03"],["/ygo/static/mold/arrow/arrow1_0.png","36c04708178cfa9ab04fde75493577a2"],["/ygo/static/mold/arrow/arrow1_1.png","97af5e84107a2d2edd19dd462b89bfc2"],["/ygo/static/mold/arrow/arrow2_0.png","cbf661dbcbb5a7704026a58041959297"],["/ygo/static/mold/arrow/arrow2_1.png","7bf65635095bfe2a2b27b63669925f82"],["/ygo/static/mold/attribute/dark.png","f3087f7e0f1babdd177ab210697e92a1"],["/ygo/static/mold/attribute/divine.png","7c1a95a413e4bbba60b951f054d546b0"],["/ygo/static/mold/attribute/earth.png","11b703397e75cb204472944646f752c3"],["/ygo/static/mold/attribute/fire.png","96058494a6489ea85f25bfafbab7eeee"],["/ygo/static/mold/attribute/light.png","3e79163a9f6d4ddf643ab61339b1e505"],["/ygo/static/mold/attribute/spell.png","34803d50a13822226a8bd4bd713f184e"],["/ygo/static/mold/attribute/trap.png","d82b38bf4a14c56f3c51843c5574e0ef"],["/ygo/static/mold/attribute/water.png","c53454cbb4bd065948f3346d28c84f4f"],["/ygo/static/mold/attribute/wind.png","d2548a68002ea7d6dea2b01cdfbd4d39"],["/ygo/static/mold/flash.jpg","6247b35d27ab8efea4d9d14706bd5f6b"],["/ygo/static/mold/flash2.jpg","6204a01cc1810bd520df3b322857d0c0"],["/ygo/static/mold/font/en.ttf","84c17eb1d86a497e938dd58b65ee5387"],["/ygo/static/mold/font/en_name.ttf","a2fa4b9dd640c95a1fe644b92f1e7d2d"],["/ygo/static/mold/font/link.ttf","0fe88b56e579e67a675ae7ce637bfe0c"],["/ygo/static/mold/font/number.ttf","35913bb2c6e777539e5e7c7223334ad3"],["/ygo/static/mold/font/password.ttf","a148e9574266c153aab201f0bc6525ea"],["/ygo/static/mold/font/race.ttf","1316821eee46b6dd45c3a89929be8c1a"],["/ygo/static/mold/font/title.ttf","e5b82c3c86696e75ea96972789f7a317"],["/ygo/static/mold/frame/l1.jpg","031cf86a72983772ce325207a161c2ef"],["/ygo/static/mold/frame/l2.jpg","6c06b68745ad48502a3165bc2c56a992"],["/ygo/static/mold/frame/monster_cl.jpg","2960c28c89efed5d2d61b0fc406e633c"],["/ygo/static/mold/frame/monster_cl_lb.jpg","c73f8919d006c0518514e2fc916432dd"],["/ygo/static/mold/frame/monster_dt.jpg","abb21f324f96d06b238e17ed75714c13"],["/ygo/static/mold/frame/monster_lj.jpg","ee4cea85e4553515c78a439f08665527"],["/ygo/static/mold/frame/monster_rh.jpg","8b884927c4a9147c323550c5da8d0ef4"],["/ygo/static/mold/frame/monster_rh_lb.jpg","d271f0ecbaaa5480e2017f54a89b76dc"],["/ygo/static/mold/frame/monster_tc.jpg","012c06010042354b1f3f4e781174b507"],["/ygo/static/mold/frame/monster_tc_lb.jpg","f2f360d5d7656bf626ababfcfb8a364c"],["/ygo/static/mold/frame/monster_tk.jpg","cce2f26c30f22c9688153a8476774db8"],["/ygo/static/mold/frame/monster_tt.jpg","73d447c34d9c654403d09999c026cc48"],["/ygo/static/mold/frame/monster_tt_lb.jpg","d511b94a77cb1cddc5773e6f1e85e177"],["/ygo/static/mold/frame/monster_xg.jpg","2801270375b296c0e05c5cd4b86f58ad"],["/ygo/static/mold/frame/monster_xg_lb.jpg","4cf05388fe79689a51e3952e9185a2b0"],["/ygo/static/mold/frame/monster_ys.jpg","59f2a042bb429befd1cdd28921369c80"],["/ygo/static/mold/frame/monster_ys_lb.jpg","3868242fa059e590fdc86d03f9f04b05"],["/ygo/static/mold/frame/spell.jpg","5d8465ec4de9e41e4bed6c976b435e2e"],["/ygo/static/mold/frame/trap.jpg","f54c32c9372618e699bf94ebc9dbb4ea"],["/ygo/static/mold/holo/holo.jpg","7a573e07c750cdd66ff0ae938a489375"],["/ygo/static/mold/holo/holo.png","548ed532451433a42d2fd2d7bbd1b56a"],["/ygo/static/mold/icon/cd.png","440e9d893efb89b361db15eaf0482df2"],["/ygo/static/mold/icon/fj.png","d6951efeab7544d342ec856d7ee6a648"],["/ygo/static/mold/icon/sg.png","aa90d7908e54bc57c07fff8594397cd3"],["/ygo/static/mold/icon/ys.png","85bce4c278c39872a318811abcb5799a"],["/ygo/static/mold/icon/yx.png","0c79b8d9d072c11299bee174e7c4cf3e"],["/ygo/static/mold/icon/zb.png","030cc2a8420b82aa74fa31feaead951d"],["/ygo/static/mold/pic.jpg","52e28a28b5a1617848b08de2eefd34a2"],["/ygo/static/mold/star/level.png","0fea6643b32adbe39a8884c49c6832fc"],["/ygo/static/mold/star/rank.png","64c9d1f602a24edee1a3261e55ff4257"]],cacheName="sw-precache-v3-ygodiy-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),o=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("https://cose.xyz/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});