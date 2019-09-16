/*!
 * vue-browser-sync v0.9.0
 * https://github.com/peter-moon/vuex-browser-sync
 * @license MIT
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a=a||self,b(a.VuexUaSync={}))})(this,function(a){'use strict';function b(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function c(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function d(a){for(var d,e=1;e<arguments.length;e++)d=null==arguments[e]?{}:arguments[e],e%2?c(d,!0).forEach(function(c){b(a,c,d[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(d)):c(d).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(d,b))});return a}var e="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,f=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){/*!
   * UAParser.js v0.7.20
   * Lightweight JavaScript-based User-Agent string parser
   * https://github.com/faisalman/ua-parser-js
   *
   * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
   * Licensed under MIT License
   */(function(c,d){//////////////
// Constants
/////////////
var// deprecated
e={extend:function(a,b){var c={};for(var d in a)c[d]=b[d]&&0==b[d].length%2?b[d].concat(a[d]):a[d];return c},has:function(a,b){return!("string"!=typeof a)&&-1!==b.toLowerCase().indexOf(a.toLowerCase())},lowerize:function(a){return a.toLowerCase()},major:function(a){return typeof a==="string"?a.replace(/[^\d\.]/g,"").split(".")[0]:d},trim:function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(a,b){// loop through all regexes maps
for(var c,e,f,g,h,l,m=0;m<b.length&&!h;){var n=b[m],// even sequence (0,2,4,..)
o=b[m+1];// odd sequence (1,3,5,..)
// try matching uastring with regexes
for(c=e=0;c<n.length&&!h;)if(h=n[c++].exec(a),!!h)for(f=0;f<o.length;f++)l=h[++e],g=o[f],"object"===typeof g&&0<g.length?2==g.length?"function"==typeof g[1]?this[g[0]]=g[1].call(this,l):this[g[0]]=g[1]:3==g.length?"function"!==typeof g[1]||g[1].exec&&g[1].test?this[g[0]]=l?l.replace(g[1],g[2]):d:this[g[0]]=l?g[1].call(this,l,g[2]):d:4==g.length&&(this[g[0]]=l?g[3].call(this,l.replace(g[1],g[2])):d):this[g]=l?l:d;m+=2}},str:function(a,b){for(var c in b)// check if array
if(typeof b[c]==="object"&&0<b[c].length){for(var f=0;f<b[c].length;f++)if(e.has(b[c][f],a))return"?"===c?d:c;}else if(e.has(b[c],a))return"?"===c?d:c;return a}},g={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[// Presto based
/(opera\smini)\/([\w\.-]+)/i,// Opera Mini
/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,// Opera Mobi/Tablet
/(opera).+version\/([\w\.]+)/i,// Opera > 9.80
/(opera)[\/\s]+([\w\.]+)/i// Opera < 9.80
],["name","version"],[/(opios)[\/\s]+([\w\.]+)/i// Opera mini on iphone >= 8.0
],[["name","Opera Mini"],"version"],[/\s(opr)\/([\w\.]+)/i// Opera Webkit
],[["name","Opera"],"version"],[// Mixed
/(kindle)\/([\w\.]+)/i,// Kindle
/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,// Lunascape/Maxthon/Netfront/Jasmine/Blazer
// Trident based
/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,// Avant/IEMobile/SlimBrowser/Baidu
/(?:ms|\()(ie)\s([\w\.]+)/i,// Internet Explorer
// Webkit/KHTML based
/(rekonq)\/([\w\.]*)/i,// Rekonq
/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i// Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
],["name","version"],[/(konqueror)\/([\w\.]+)/i// Konqueror
],[["name","Konqueror"],"version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i// IE11
],[["name","IE"],"version"],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i// Microsoft Edge
],[["name","Edge"],"version"],[/(yabrowser)\/([\w\.]+)/i// Yandex
],[["name","Yandex"],"version"],[/(puffin)\/([\w\.]+)/i// Puffin
],[["name","Puffin"],"version"],[/(focus)\/([\w\.]+)/i// Firefox Focus
],[["name","Firefox Focus"],"version"],[/(opt)\/([\w\.]+)/i// Opera Touch
],[["name","Opera Touch"],"version"],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i// UCBrowser
],[["name","UCBrowser"],"version"],[/(comodo_dragon)\/([\w\.]+)/i// Comodo Dragon
],[["name",/_/g," "],"version"],[/(windowswechat qbcore)\/([\w\.]+)/i// WeChat Desktop for Windows Built-in Browser
],[["name","WeChat(Win) Desktop"],"version"],[/(micromessenger)\/([\w\.]+)/i// WeChat
],[["name","WeChat"],"version"],[/(brave)\/([\w\.]+)/i// Brave browser
],[["name","Brave"],"version"],[/(qqbrowserlite)\/([\w\.]+)/i// QQBrowserLite
],["name","version"],[/(QQ)\/([\d\.]+)/i// QQ, aka ShouQ
],["name","version"],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i// QQBrowser
],["name","version"],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i// Baidu Browser
],["name","version"],[/(2345Explorer)[\/\s]?([\w\.]+)/i// 2345 Browser
],["name","version"],[/(MetaSr)[\/\s]?([\w\.]+)/i// SouGouBrowser
],["name"],[/(LBBROWSER)/i// LieBao Browser
],["name"],[/xiaomi\/miuibrowser\/([\w\.]+)/i// MIUI Browser
],["version",["name","MIUI Browser"]],[/;fbav\/([\w\.]+);/i// Facebook App for iOS & Android
],["version",["name","Facebook"]],[/safari\s(line)\/([\w\.]+)/i,// Line App for iOS
/android.+(line)\/([\w\.]+)\/iab/i// Line App for Android
],["name","version"],[/headlesschrome(?:\/([\w\.]+)|\s)/i// Chrome Headless
],["version",["name","Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i// Chrome WebView
],[["name",/(.+)/,"$1 WebView"],"version"],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[["name",/(.+(?:g|us))(.+)/,"$1 $2"],"version"],[// Oculus / Samsung Browser
/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i// Android Browser
],["version",["name","Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i// Sailfish Browser
],[["name","Sailfish Browser"],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i// Chrome/OmniWeb/Arora/Tizen/Nokia
],["name","version"],[/(dolfin)\/([\w\.]+)/i// Dolphin
],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i// Chrome for Android/iOS
],[["name","Chrome"],"version"],[/(coast)\/([\w\.]+)/i// Opera Coast
],[["name","Opera Coast"],"version"],[/fxios\/([\w\.-]+)/i// Firefox for iOS
],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i// Mobile Safari
],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i// Safari & Safari Mobile
],["version","name"],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i// Google Search Appliance on iOS
],[["name","GSA"],"version"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i// Safari < 3.0
],["name",["version",f.str,g.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[// Gecko based
/(navigator|netscape)\/([\w\.-]+)/i// Netscape
],[["name","Netscape"],"version"],[/(swiftfox)/i,// Swiftfox
/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,// IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,// Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,// Mozilla
// Other
/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,// Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
/(links)\s\(([\w\.]+)/i,// Links
/(gobrowser)\/?([\w\.]*)/i,// GoBrowser
/(ice\s?browser)\/v?([\w\._]+)/i,// ICE Browser
/(mosaic)[\/\s]([\w\.]+)/i// Mosaic
],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i// AMD64
],[["architecture","amd64"]],[/(ia32(?=;))/i// IA32 (quicktime)
],[["architecture",e.lowerize]],[/((?:i[346]|x)86)[;\)]/i// IA32
],[["architecture","ia32"]],[// PocketPC mistakenly identified as PowerPC
/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i// PowerPC
],[["architecture",/ower/,"",e.lowerize]],[/(sun4\w)[;\)]/i// SPARC
],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i// IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
],[["architecture",e.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i// iPad/PlayBook
],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i// Apple TV
],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,// Archos
/(hp).+(touchpad)/i,// HP TouchPad
/(hp).+(tablet)/i,// HP Tablet
/(kindle)\/([\w\.]+)/i,// Kindle
/\s(nook)[\w\s]+build\/(\w+)/i,// Nook
/(dell)\s(strea[kpr\s\d]*[\dko])/i// Dell Streak
],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/.+silk\//i// Kindle Fire HD
],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i// Fire Phone
],[["model",f.str,g.device.amazon.model],["vendor","Amazon"],["type","mobile"]],[/android.+aft([bms])\sbuild/i// Fire TV
],["model",["vendor","Amazon"],["type","smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i// iPod/iPhone
],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i// iPod/iPhone
],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,// BlackBerry
/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,// BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
/(hp)\s([\w\s]+\w)/i,// HP iPAQ
/(asus)-?(\w+)/i// Asus
],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i// BlackBerry 10
],["model",["vendor","BlackBerry"],["type","mobile"]],[// Asus Tablets
/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,// Sony
/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],["model",["vendor","Sony"],["type","mobile"]],[/\s(ouya)\s/i,// Ouya
/(nintendo)\s([wids3u]+)/i// Nintendo
],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i// Nvidia
],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i// Playstation
],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i// Sprint Phones
],[["vendor",f.str,g.device.sprint.vendor],["model",f.str,g.device.sprint.model],["type","mobile"]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,// HTC
/(zte)-(\w*)/i,// ZTE
/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i// Alcatel/GeeksPhone/Nexian/Panasonic/Sony
],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i// HTC Nexus 9
],["model",["vendor","HTC"],["type","tablet"]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i// Huawei
],["model",["vendor","Huawei"],["type","mobile"]],[/(microsoft);\s(lumia[\s\w]+)/i// Microsoft Lumia
],["vendor","model",["type","mobile"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i// Microsoft Xbox
],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i// Microsoft Kin
],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[// Motorola
/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i// HbbTV devices
],[["vendor",e.trim],["model",e.trim],["type","smarttv"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i// Sharp
],["model",["vendor","Sharp"],["type","smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[// Samsung
/smart-tv.+(samsung)/i],["vendor",["type","smarttv"],"model"],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/sie-(\w*)/i// Siemens
],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,// Nokia
/(nokia)[\s_-]?([\w-]*)/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i// Acer
],["model",["vendor","Acer"],["type","tablet"]],[/android.+([vl]k\-?\d{3})\s+build/i// LG Tablet
],["model",["vendor","LG"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i// LG Tablet
],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i// LG SmartTV
],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,// LG
/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],["model",["vendor","LG"],["type","mobile"]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i// Lenovo tablets
],["vendor","model",["type","tablet"]],[/android.+(ideatab[a-z0-9\-\s]+)/i// Lenovo
],["model",["vendor","Lenovo"],["type","tablet"]],[/(lenovo)[_\s-]?([\w-]+)/i],["vendor","model",["type","mobile"]],[/linux;.+((jolla));/i// Jolla
],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i// Pebble
],["vendor","model",["type","wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i// OPPO
],["vendor","model",["type","mobile"]],[/crkey/i// Google Chromecast
],[["model","Chromecast"],["vendor","Google"]],[/android.+;\s(glass)\s\d/i// Google Glass
],["model",["vendor","Google"],["type","wearable"]],[/android.+;\s(pixel c)[\s)]/i// Google Pixel C
],["model",["vendor","Google"],["type","tablet"]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i// Google Pixel
],["model",["vendor","Google"],["type","mobile"]],[/android.+;\s(\w+)\s+build\/hm\1/i,// Xiaomi Hongmi 'numeric' models
/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,// Xiaomi Hongmi
/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,// Xiaomi Mi
/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i// Redmi Phones
],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i// Mi Pad tablets
],[["model",/_/g," "],["vendor","Xiaomi"],["type","tablet"]],[/android.+;\s(m[1-5]\snote)\sbuild/i// Meizu
],["model",["vendor","Meizu"],["type","mobile"]],[/(mz)-([\w-]{2,})/i],[["vendor","Meizu"],"model",["type","mobile"]],[/android.+a000(1)\s+build/i,// OnePlus
/android.+oneplus\s(a\d{4})\s+build/i],["model",["vendor","OnePlus"],["type","mobile"]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i// RCA Tablets
],["model",["vendor","RCA"],["type","tablet"]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i// Dell Venue Tablets
],["model",["vendor","Dell"],["type","tablet"]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i// Verizon Tablet
],["model",["vendor","Verizon"],["type","tablet"]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i// Barnes & Noble Tablet
],[["vendor","Barnes & Noble"],"model",["type","tablet"]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i// Barnes & Noble Tablet
],["model",["vendor","NuVision"],["type","tablet"]],[/android.+;\s(k88)\sbuild/i// ZTE K Series Tablet
],["model",["vendor","ZTE"],["type","tablet"]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i// Swiss GEN Mobile
],["model",["vendor","Swiss"],["type","mobile"]],[/android.+[;\/]\s*(zur\d{3})\s+build/i// Swiss ZUR Tablet
],["model",["vendor","Swiss"],["type","tablet"]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i// Zeki Tablets
],["model",["vendor","Zeki"],["type","tablet"]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i// Dragon Touch Tablet
],[["vendor","Dragon Touch"],"model",["type","tablet"]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i// Insignia Tablets
],["model",["vendor","Insignia"],["type","tablet"]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i// NextBook Tablets
],["model",["vendor","NextBook"],["type","tablet"]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[["vendor","Voice"],"model",["type","mobile"]],[// Voice Xtreme Phones
/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i// LvTel Phones
],[["vendor","LvTel"],"model",["type","mobile"]],[/android.+;\s(PH-1)\s/i],["model",["vendor","Essential"],["type","mobile"]],[// Essential PH-1
/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i// Envizen Tablets
],["model",["vendor","Envizen"],["type","tablet"]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i// Le Pan Tablets
],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i// MachSpeed Tablets
],["model",["vendor","MachSpeed"],["type","tablet"]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i// Trinity Tablets
],["vendor","model",["type","tablet"]],[/android.+[;\/]\s*TU_(1491)\s+build/i// Rotor Tablets
],["model",["vendor","Rotor"],["type","tablet"]],[/android.+(KS(.+))\s+build/i// Amazon Kindle Tablets
],["model",["vendor","Amazon"],["type","tablet"]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i// Gigaset Tablets
],["vendor","model",["type","tablet"]],[/\s(tablet|tab)[;\/]/i,// Unidentifiable Tablet
/\s(mobile)(?:[;\/]|\ssafari)/i// Unidentifiable Mobile
],[["type",e.lowerize],"vendor","model"],[/[\s\/\(](smart-?tv)[;\)]/i// SmartTV
],[["type","smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i// Generic Android Device
],["model",["vendor","Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i// EdgeHTML
],["version",["name","EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i// Blink
],[["name","Blink"]],[/(presto)\/([\w\.]+)/i,// Presto
/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,// WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,// KHTML/Tasman/Links
/(icab)[\/\s]([23]\.[\d\.]+)/i// iCab
],["name","version"],[/rv\:([\w\.]{1,9}).+(gecko)/i// Gecko
],["version","name"]],os:[[// Windows based
/microsoft\s(windows)\s(vista|xp)/i// Windows (iTunes)
],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,// Windows RT
/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,// Windows Phone
/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",f.str,g.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",f.str,g.os.windows.version]],[// Mobile/Embedded OS
/\((bb)(10);/i// BlackBerry 10
],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]*)/i,// Blackberry
/(tizen)[\/\s]([\w\.]+)/i,// Tizen
/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i// Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i// Symbian
],[["name","Symbian"],"version"],[/\((series40);/i// Series 40
],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i// Firefox OS
],[["name","Firefox OS"],"version"],[// Console
/(nintendo|playstation)\s([wids34portablevu]+)/i,// Nintendo/Playstation
// GNU/Linux based
/(mint)[\/\s\(]?(\w*)/i,// Mint
/(mageia|vectorlinux)[;\s]/i,// Mageia/VectorLinux
/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,// Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
// Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
/(hurd|linux)\s?([\w\.]*)/i,// Hurd/Linux
/(gnu)\s?([\w\.]*)/i// GNU
],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i// Chromium OS
],[["name","Chromium OS"],"version"],[// Solaris
/(sunos)\s?([\w\.\d]*)/i// Solaris
],[["name","Solaris"],"version"],[// BSD based
/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i// FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
],["name","version"],[/(haiku)\s(\w+)/i// Haiku
],["name","version"],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i// iOS
],[["version",/_/g,"."],["name","iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i// Mac OS
],[["name","Mac OS"],["version",/_/g,"."]],[// Other
/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,// Solaris
/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,// AIX
/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,// Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
/(unix)\s?([\w\.]*)/i// UNIX
],["name","version"]]},i=function(a,b){if("object"==typeof a&&(b=a,a=d),!(this instanceof i))return new i(a,b).getResult();var g=a||(c&&c.navigator&&c.navigator.userAgent?c.navigator.userAgent:""),j=b?e.extend(h,b):h;return this.getBrowser=function(){var a={name:d,version:d};// deprecated
return f.rgx.call(a,g,j.browser),a.major=e.major(a.version),a},this.getCPU=function(){var a={architecture:d};return f.rgx.call(a,g,j.cpu),a},this.getDevice=function(){var a={vendor:d,model:d,type:d};return f.rgx.call(a,g,j.device),a},this.getEngine=function(){var a={name:d,version:d};return f.rgx.call(a,g,j.engine),a},this.getOS=function(){var a={name:d,version:d};return f.rgx.call(a,g,j.os),a},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function(a){return g=a,this},this};///////////
// Helper
//////////
i.VERSION="0.7.20",i.BROWSER={NAME:"name",MAJOR:"major",// deprecated
VERSION:"version"},i.CPU={ARCHITECTURE:"architecture"},i.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"},i.ENGINE={NAME:"name",VERSION:"version"},i.OS={NAME:"name",VERSION:"version"},a.exports&&(b=a.exports=i),b.UAParser=i;// jQuery/Zepto specific (optional)
// Note:
//   In AMD env the global scope should be kept clean, but jQuery is an exception.
//   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
//   and we should catch that.
var j=c&&(c.jQuery||c.Zepto);if(typeof j!="undefined"&&!j.ua){var k=new i;j.ua=k.getResult(),j.ua.get=function(){return k.getUA()},j.ua.set=function(a){k.setUA(a);var b=k.getResult();for(var c in b)j.ua[c]=b[c]}}})("object"==typeof window?window:e)}),g=f.UAParser,h={},i=-1,j=-1;h.width=function(){return i},h.height=function(){return j},h.max=function(){return Math.max(i,j)},h.min=function(){return Math.min(i,j)},h.setDimensions=function(){"undefined"!=typeof document&&(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight)},h.onWindowResize=function(){h.setDimensions()},"undefined"!=typeof window&&(window.addEventListener("resize",h.onWindowResize,!1),window.addEventListener("orientationchange",h.onWindowResize,!1),h.setDimensions());// Exports
var k=h,l=function(a){return f(a)},m=function(){if("undefined"==typeof window||"undefined"==typeof document)return{viewport:{err:!0,message:"NEEDS window.document"}};var a=k.width(),b=k.height(),c=k.max(),d=k.min();return{viewport:{err:null,message:null,width:a,height:b,max:c,min:d}}};a.UA_SET="UA_SET",a.browserSync=function(a){var b=a.moduleName,c=void 0===b?"browser":b,e=a.ua,f=void 0===e?window.navigator.userAgent:e;return function(a){a.registerModule(c,{namespcaed:!0,state:Object.freeze(d({},l(f),{},m()))})}},Object.defineProperty(a,"__esModule",{value:!0})});
