if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f2077539.css",revision:"cd1aa59af4439eb61c8bfaa7151da76f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/74.5ead83dc.js",revision:"3385a0a01c899685ef3898f7b72329c1"},{url:"assets/js/75.596984a5.js",revision:"6d0852ab9218f56f7467ac00b9f828ba"},{url:"assets/js/app.85307504.js",revision:"c70086d75051414a90bac3af17315b94"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--1c49e0d0.28446616.js",revision:"fc1fadb65a356d59fc1bb6fb6d573060"},{url:"assets/js/page--445ac6ca.2565281a.js",revision:"f53c680f9179ab7b9dd060e71ac78c08"},{url:"assets/js/page--5af52de4.19b5edcf.js",revision:"2da9540cf306f229638463c87fe0ae68"},{url:"assets/js/page-AdvancedFront-EndFrameworks--6ac9cf82.4bb47c89.js",revision:"c93f0d0f4f3951363d07a21a2923666f"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--ba252efc.4f608788.js",revision:"0929ea954c2a4cebe09161644a915058"},{url:"assets/js/page-CFundamentals--69fbebfc.71d1ae80.js",revision:"d67f85ec81b04f3011e8f27538301dfa"},{url:"assets/js/page-Day1--1568543e.e7156203.js",revision:"9c55373546b5adb5dddea1fca3e0eaa0"},{url:"assets/js/page-Day1--190f6974.05713caa.js",revision:"5de6fed293476f0c978ba15e8f8d654a"},{url:"assets/js/page-Day1--1a04448c.4e96bfcc.js",revision:"e80781877dac4f42e912b1969dcf419c"},{url:"assets/js/page-Day1--339199c6.a3ff03f4.js",revision:"cae01ef232b8e7fdf19217d84ac0d5c1"},{url:"assets/js/page-Day1--3bf44d84.87a821b9.js",revision:"7c776813a43eda13769a7fa6e37f25ee"},{url:"assets/js/page-Day1--4774937c.c42bd04a.js",revision:"b3abc4eeaec6087da0d081bc5094f23a"},{url:"assets/js/page-Day1--5103c782.575207a9.js",revision:"828ce14ba63b10da4fde5eb09feec52c"},{url:"assets/js/page-Day1--5de4567c.8299179b.js",revision:"82a88dc6649e846eefbf74279ad209bc"},{url:"assets/js/page-Day1--628046ca.32b4810a.js",revision:"3eff8c6854566c38bdc0fd65924017be"},{url:"assets/js/page-Day1--66275c00.4ed9abce.js",revision:"554c067672c140ba422d1d9c3c20117d"},{url:"assets/js/page-Day1--69ee1f70.2faabe57.js",revision:"695fecb630acd076903633be0d483232"},{url:"assets/js/page-Day1--aa076df0.ef89c7fe.js",revision:"eef290b52d6ad0a0460f782eb2f4fe56"},{url:"assets/js/page-Day1--c7cb7978.8e6cc4a4.js",revision:"ff1f8d5cc091d57f647806d628164307"},{url:"assets/js/page-Day1--d2b6823c.0ad334b7.js",revision:"282caebacc73d48544e9059869b0c96d"},{url:"assets/js/page-Day1--f71f607c.326b2a08.js",revision:"1bfee64fb2a7d3c7917040160a75111e"},{url:"assets/js/page-Day2--1384f286.68da9406.js",revision:"5c928b3038bf88c91b08f0d5cedfcce3"},{url:"assets/js/page-Day2--260e0d80.c1fde1dd.js",revision:"e90fe7f6d479072214867b29ef425e6c"},{url:"assets/js/page-Day2--28358962.48308a63.js",revision:"65c231f31def1f6b5ffbe5f371fa5027"},{url:"assets/js/page-Day2--3574fb7e.9d242979.js",revision:"40aca1dcda3dbc914e901cd4f78088ba"},{url:"assets/js/page-Day2--37920a3c.11d2c518.js",revision:"48038575aeb6eeefa106168662f703bd"},{url:"assets/js/page-Day2--58f50c22.c825ed1d.js",revision:"482d9afcb0a0b4342dddbcf37b22fae6"},{url:"assets/js/page-Day2--5c00f4c4.d5a0e25a.js",revision:"9601489cf9ca6dcc63fbfb03d20bc67c"},{url:"assets/js/page-Day2--7df0fdbc.ca9042e9.js",revision:"e5dfb28b486746b67eb3d822863762bf"},{url:"assets/js/page-Day2--b70611fc.e98aef53.js",revision:"07f99bf9cafb95516a25b90179fe20d2"},{url:"assets/js/page-Day2--c2d3f8fc.8d8b4fde.js",revision:"b6160b2f49821e9f26a42696291029c6"},{url:"assets/js/page-Day2--fae623ec.ee966c87.js",revision:"ae6dc2d61101b8a6c3db683f260942e9"},{url:"assets/js/page-Day3--06864e7a.60500380.js",revision:"cd61520a647bf1519104c3a0aa6f0e59"},{url:"assets/js/page-Day3--0d05a080.f48c6b20.js",revision:"0aada9046b1c2213d710bbf0897c48c0"},{url:"assets/js/page-Day3--27af80fc.30cbf53d.js",revision:"55889a54c5835058dfce40b82a277918"},{url:"assets/js/page-Day3--29d4d0f0.86501092.js",revision:"011bb167afc6a4e5115e1fcc47e74bdb"},{url:"assets/js/page-Day3--330cb18c.e70f8097.js",revision:"d3c83c7efeb44234989c8b15aa44ad5b"},{url:"assets/js/page-Day3--5581a2be.2caeec5a.js",revision:"1ea4d8e86f242ac96afb6666b1864f12"},{url:"assets/js/page-Day3--60e650c2.844f7a73.js",revision:"54e4ca413126835800e1df2f3e01241d"},{url:"assets/js/page-Day3--61d86d90.051002fa.js",revision:"c0d64740f5b6083259b7f10aa6df22dd"},{url:"assets/js/page-Day3--76ecc37c.cde8085b.js",revision:"27a58b3c0a84d42b469f0f7f6a456ccc"},{url:"assets/js/page-Day3--7c0d9c04.b0992e2e.js",revision:"6efcca4199b71af640755441119f47b8"},{url:"assets/js/page-Day3--b2f16fbc.66ea2ffc.js",revision:"9804b67dca4d592b5683a08456dca28d"},{url:"assets/js/page-Day3--c404b608.615adc9d.js",revision:"f45175a1ab3b158df4febc9d89425075"},{url:"assets/js/page-Day4--17ccf7bc.1c6eb581.js",revision:"feefab7173f66e8d8fbed8dff1724820"},{url:"assets/js/page-Day4--2d1247c0.4c67dd3a.js",revision:"274a58e31d87abca6aeda3e9acacaf6a"},{url:"assets/js/page-Day4--36d374fc.a1f9f668.js",revision:"df2c4c973b8bf415251ccfc390df6552"},{url:"assets/js/page-Day4--4f0250b8.6d6116ec.js",revision:"de6ab47c32f0cee3b11ba13a8fbe1381"},{url:"assets/js/page-Day4--539e4106.31eaf380.js",revision:"766408d7db9ba3870fb86ca34a9964d4"},{url:"assets/js/page-Day4--68d79562.730a8422.js",revision:"e93714f8a2e583fdd2be1e006b483987"},{url:"assets/js/page-Day4--758e49fe.94f6aba1.js",revision:"c14fa3032fdc67550fcc6d1cb2cc0fe6"},{url:"assets/js/page-Day4--83eb6788.c711a243.js",revision:"d77c3900ee1a18e17e0865575966321a"},{url:"assets/js/page-Day4--a30ee67c.e079e570.js",revision:"d3d7525a550b6614650700e4dd52b99d"},{url:"assets/js/page-Day4--d1035a14.151a3002.js",revision:"f864b784d25a68963d6f7b9a373b2fab"},{url:"assets/js/page-Day5--07ea6e7c.3fd11e25.js",revision:"c73455f1620d9372ac419f78e2e46107"},{url:"assets/js/page-Day5--87b22af8.70817010.js",revision:"c65eb29bd357a0f1e6720ac331989dfd"},{url:"assets/js/page-DeployingApplications--c67e2d7c.6e2ba879.js",revision:"0433fe58bd0e21a4c2a38f1de2e5a13d"},{url:"assets/js/page-FindMoreAboutmehere--0c869fa7.c17cfb44.js",revision:"4c7d025304057f1e17869702fd7ee087"},{url:"assets/js/page-FoundationsofWebDevelopment--3eff3502.ba620214.js",revision:"eff5d0df4752afc7505c8e00199c1ff2"},{url:"assets/js/page-IntrotoJavaScript--70f64ec2.6345cff9.js",revision:"7f5fb2378fa26d650dd166a2756cb763"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--06db9c02.c444efe0.js",revision:"3811fd68f7bfa8b901605c7a5001f11d"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--5636fb7c.56404837.js",revision:"76b1ad3883d2e7072f3df36d7315c93f"},{url:"assets/js/page-UnderstandingPersistentRelationalData--38d2b5c2.5dafa80b.js",revision:"b85a8f7e2957f9102524c12c377c17e5"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--628ff9fc.42ecfdd8.js",revision:"bfb0e19cb6a75f745d4e4a033d1c6cb9"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.75ace44f.js",revision:"9ca81ff55edc8e5abff396e5409573dd"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.d72c82ca.js",revision:"6a8a3e006cf191fa6528f3db467f8a7e"},{url:"404.html",revision:"c735481d12df85f681d88eef877630f0"},{url:"article/index.html",revision:"b7b10d69514f30458892521f6f48a2b2"},{url:"category/index.html",revision:"c6a859aa59d45a16d1ae4497256e4969"},{url:"encrypt/index.html",revision:"60533466c16b117f1859da5eb7d7059d"},{url:"index.html",revision:"f9dfef090463a4c687f0cabd320fe13f"},{url:"reflections/index.html",revision:"ebc83095e775b0cb061c56566d4b56b5"},{url:"reflections/wk1/01-Day/index.html",revision:"1780ba305a92565e50458ab050e893c5"},{url:"reflections/wk1/02-Day2/index.html",revision:"ee424dc5a205925e2e8b096929215ac1"},{url:"reflections/wk1/03-day/index.html",revision:"793c85176cd70f301c5c1386b0cb2611"},{url:"reflections/wk1/04-Day/index.html",revision:"47eeb6184fb8956791f5b31f44f6432b"},{url:"reflections/wk1/quiz1/index.html",revision:"5cf3bc5d49f6aa5beb1060ce0b15338c"},{url:"reflections/wk10/01-Day/index.html",revision:"4234b358271986cebec2ca327af81016"},{url:"reflections/wk10/02-Day/index.html",revision:"aa1cbdfee4b7526f23597f70eb00f53d"},{url:"reflections/wk10/03-Day/index.html",revision:"2b0bd095642b5befd2cfcdfdd0c62568"},{url:"reflections/wk10/04-Day/index.html",revision:"02b0a1968ebd2ff24b247ffbaa5bce8b"},{url:"reflections/wk10/quiz10/index.html",revision:"0ac8719f6fab6564d509e2b79c83aff1"},{url:"reflections/wk11/01-Day/index.html",revision:"a19af86dd5899c44da715ee7e664e3d8"},{url:"reflections/wk11/02-Day/index.html",revision:"12c396d83742837d4ea74c399f3aab56"},{url:"reflections/wk11/03-Day/index.html",revision:"1a0377e82a94d3d3c4a2aa141392fa4e"},{url:"reflections/wk11/04-Day/index.html",revision:"57175ee450ecadeb8e12c839858e61a9"},{url:"reflections/wk11/placeholder/index.html",revision:"ac4015916e83939ceec614c1449d9db3"},{url:"reflections/wk12/01-Day/index.html",revision:"e2eb3348a7efeffda9aa32f1a880b4a2"},{url:"reflections/wk12/02-Day/index.html",revision:"7ec29320494c2fdf52413fa706d8220f"},{url:"reflections/wk12/03-Day/index.html",revision:"d1a8b5516cc7fe99dd7118427c286b3c"},{url:"reflections/wk12/04-Day/index.html",revision:"96fb256a48f7046120810693384adbb7"},{url:"reflections/wk12/05-Day/index.html",revision:"49c922eeadc83e4424aa6742eca21dfc"},{url:"reflections/wk12/placeholder/index.html",revision:"feecd7550d6ee11a62453b980708d499"},{url:"reflections/wk2/01-Day/index.html",revision:"9d61ef184d9a92de0cfbae98eb934295"},{url:"reflections/wk2/02-Day/index.html",revision:"3f298e8bcbc98962d429f87e3400cc69"},{url:"reflections/wk2/03-Day/index.html",revision:"485dc6067f98f17c5045cd98ecbad41e"},{url:"reflections/wk2/04-Day/index.html",revision:"8d543a84556ccec49387efb072ccb829"},{url:"reflections/wk2/quiz2/index.html",revision:"da30f3b6df9b0ba8a9ff4e549b3ce1a7"},{url:"reflections/wk3/01-Day/index.html",revision:"e684225b69ad20af2aef4e04a205285f"},{url:"reflections/wk3/02-Day/index.html",revision:"52242d79565a4fb5f8fcd6293166b665"},{url:"reflections/wk3/03-Day/index.html",revision:"453ef85bd3c75bac9ff353cc597e2243"},{url:"reflections/wk3/04-Day/index.html",revision:"39e44f4745afb23c8f1ef732ec0d017b"},{url:"reflections/wk3/quiz3/index.html",revision:"e10a364c69664f30dc7de54f0195d9c1"},{url:"reflections/wk4/01-Day/index.html",revision:"1571d5963099fad043f509ada14384db"},{url:"reflections/wk4/02-Day/index.html",revision:"fd40a240f9e70dd9cdbfced97a124dce"},{url:"reflections/wk4/03-Day/index.html",revision:"184869b6fcc7500f32f6ae17c9055ed7"},{url:"reflections/wk4/04-Day/index.html",revision:"93382ad930f248fb4b3b8270991f4433"},{url:"reflections/wk4/quiz4/index.html",revision:"c1d4140e1c46cd9ef988a494ba964ebb"},{url:"reflections/wk5/01-Day/index.html",revision:"ac83288a552b8e4d0663db4e0a761ad2"},{url:"reflections/wk5/02-Day/index.html",revision:"9afa8aab4433da01e88899817c840872"},{url:"reflections/wk5/03-Day/index.html",revision:"500c43b088246b237f38678ddbde27c7"},{url:"reflections/wk5/04-Day/index.html",revision:"11d384de034e5c620c4724ef19786e56"},{url:"reflections/wk5/quiz5/index.html",revision:"c2b2a5f23dd1e7697646caa3f39ffd7a"},{url:"reflections/wk6/01-Day/index.html",revision:"d5ed340c4e856f4f5d3ee70b87acbdc0"},{url:"reflections/wk6/02-Day/index.html",revision:"22342808f3ce57447e4b7f4fd948480a"},{url:"reflections/wk6/03-Day/index.html",revision:"5ee22d203e7c52162286faefc3ad13cf"},{url:"reflections/wk6/04-Day/index.html",revision:"76341f60d274b81c9f0cb78eee4abdac"},{url:"reflections/wk6/quiz6/index.html",revision:"cf0b2b7e7bdc157a17bda3b4f1c254a1"},{url:"reflections/wk7/01-Day/index.html",revision:"dcf4e3547e365195130c946cad6af899"},{url:"reflections/wk7/02-Day/index.html",revision:"164f62ce38b46ac47993598729786b76"},{url:"reflections/wk7/03-Day/index.html",revision:"710328d7e2b4e49ec59901302213bbde"},{url:"reflections/wk7/04-Day/index.html",revision:"7e9d8c8e73824be9100bbfe6b3483d45"},{url:"reflections/wk7/quiz7/index.html",revision:"252bd1fe7a7b5f1fd7d6384847c78860"},{url:"reflections/wk8/01-Day/index.html",revision:"71c4ff83d4cd26c8556714d6c6caf24b"},{url:"reflections/wk8/02-Day/index.html",revision:"281977ac0cf753f0ee4ad55095592651"},{url:"reflections/wk8/03-Day/index.html",revision:"6de7cfb6a0893d20798044f91bdea2ff"},{url:"reflections/wk8/04-Day/index.html",revision:"c00da11b77628e485f3b6d6e901307f1"},{url:"reflections/wk8/quiz8/index.html",revision:"6f12932710a096c8bb356b255642e5ad"},{url:"reflections/wk9/01-Day/index.html",revision:"67ae610609668ea8f984ce889b679ea5"},{url:"reflections/wk9/02-Day/index.html",revision:"ca21171aeea509b6216491482b353060"},{url:"reflections/wk9/03-Day/index.html",revision:"14aa00f03f3839055e81c287678884b9"},{url:"reflections/wk9/04-Day/index.html",revision:"724d207c806b59202ceb9ca07118f62b"},{url:"reflections/wk9/05-Day/index.html",revision:"9f313f2dd3dd687619cf3a5b6b7477e6"},{url:"reflections/wk9/quiz9/index.html",revision:"faeca6ac93bcee4d32e84f081fee6f6e"},{url:"slide/index.html",revision:"96bf41c33253fbed1adb4bd01ffd48e9"},{url:"tag/index.html",revision:"fa6db1483cba2f7100f6f58e207ee00c"},{url:"timeline/index.html",revision:"c8ac3afe0294b714a7899da637100189"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
