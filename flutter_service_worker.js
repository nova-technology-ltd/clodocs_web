'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e73611fef5b771d6cf214ad3970a6f89",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js": "de7a75931310c54ef19d50ca878e52c5",
"index.html": "139a9bfec66202b1ee7107ea97551a17",
"/": "139a9bfec66202b1ee7107ea97551a17",
"assets/fonts/MaterialIcons-Regular.otf": "b06b340a31cceafc5eb5d699cfe4086e",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconly/fonts/IconlyLight.ttf": "baf08d3e753c86f1bdacb3535d66e2aa",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "ae60c99d5cf25644beb25a87577bf6ca",
"assets/packages/iconly/fonts/IconlyBold.ttf": "6c73fc0a864250644f562a679591e0a4",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/NOTICES": "1b5790ea911a11c5798d5315bac95094",
"assets/images/Baptist%2520Health%2520Medical%2520Center%2520-%2520Conway.jpg": "058c4760e78ec052f885f2bc8266b68c",
"assets/images/human_body_two.png": "7fb9f6a715d755a6bc3030769511dda0",
"assets/images/background.jpg": "66e4e0be5d3f64774b2ad9b22f7abfa6",
"assets/images/completed_padge.png": "800bcb5fb1f2cdaef5f44055654f14cd",
"assets/images/clobot_rovot.png": "de540884c5489cb10893fca7bad46aed",
"assets/images/00b73efae1ec9a3e3b3e193e5c749059.jpg": "b6a8a552f155b9f4f9dea74a147fc8b3",
"assets/images/fff14914853bf6027113c42fc012ea15.jpg": "77e022aac9ad861be501ed9325c3c615",
"assets/images/Clodocs%2520logo.png": "1c483f9137f7bd473e52a533dc1f1b42",
"assets/images/ban_four_img.png": "7a877a4072b407dcfdffc022d7a7f58d",
"assets/images/robot_clobot.png": "ff847fb65b7df3659e1f3145ed2f3cad",
"assets/images/coming_soon_badge.png": "0cbf0901bfdbaf6dd8ad73ef616c92d3",
"assets/images/General%2520hospital%2520-%2520Alfatih%2520Architect.jpg": "7c6632856407ac24a04a91fa6655af60",
"assets/images/o_3.jpeg": "daed446af0326e9d8995b468a99ed1c7",
"assets/images/tooth.png": "cba266333537be6bc938a17266c80194",
"assets/images/At%2520Reliant%2520Medical%2520Group%25E2%2580%2599s%2520New%2520England%2520Scope%25E2%2580%25A6.jpg": "525819c0a95e14fb3895428cfe52b282",
"assets/images/o_4.jpeg": "4f3f3858c06e5dd97fd2018c0c93f6af",
"assets/images/icons8-hospital-64.png": "548baa60d312e78bf5deb2d855ab853e",
"assets/images/heart.png": "640eb3e0dc034bcd0ed5b6316b80990d",
"assets/images/human_body_one.png": "42494efea82f6d2731162fbe534ea832",
"assets/images/Clodocs%2520logo%2520text%2520outline%2520stroke%2520only.png": "db6e32d523f46dbab81459ce44ba4eb1",
"assets/images/eye.png": "3253abe82828719b7db3d0c784824b37",
"assets/images/b4fc5f68aa498df122cf8b762d05bebe.jpg": "d4d2c6383e8f94e2001ab78fddcc0408",
"assets/images/ban_five_img.png": "1a0abf46542f22e6a686aee2dd61dda3",
"assets/images/Clodocs%2520logo%2520black%2520transparent%25201.png": "469c5fc592b63cd94ce44ecb0e34ea8d",
"assets/images/youtube.png": "33f1434531a41b1664eb1759b80853ba",
"assets/images/Altro%2520Whiterock%2520_%2520Healthcare.jpg": "a69bb211afd0c04143ef1301aaed5ec6",
"assets/images/Providence%2520Regional%2520Medical%2520Center%2520Everett,%2520Marshall%2520and%2520Katherine%2520Cymbaluk%2520Medical%2520Tower%2520-%2520Work%2520-%2520ZGF.jpg": "e99f8765924895e270201b72eabfb5ad",
"assets/images/flask.png": "f7d7a5c370425aa395a5ceb56e14dffe",
"assets/images/5127964c250098214c33c485c611149f.jpg": "ebff54f9a63d48c2d9bc233250878b57",
"assets/images/f27388b0397edcdfc64d2d0c6c9f6c2f%2520(1).jpg": "21009ee009a266f3b83980f988f311d9",
"assets/images/Clodocs%2520logo%2520black%2520transparent%2520with%2520text.png": "45cc8ad7661ae9c169d75ea38189080a",
"assets/images/email_us.png": "ccbdc1b12086164b134c6dddf40ca216",
"assets/images/clodocs_ai.gif": "bbff06a4ddfcd07302e2c114249215e3",
"assets/images/ban_six_img.png": "cbcf4e9772ceca018f92982e6527fd29",
"assets/images/hospital.png": "fd716992e446588991ad29f676627abc",
"assets/images/female_doctor.png": "67cb2d7812212e0ba3a08e83cda4c229",
"assets/images/itemTwo.png": "5329933a51404b922ec4fb00a319662d",
"assets/images/male_doctor.png": "fd745669cbcae6e490b36626af48cce7",
"assets/images/whatsapp_us.png": "fb5f14c544786ebe1fb67bae2c2972ee",
"assets/images/photo%2520of%2520hospital%2520staff%2520carrying%2520patient%2520on%2520gurney%25E2%2580%25A6.jpg": "039d22a0e2879afa8f989dc9308f52c2",
"assets/images/f0820a1e-6d4b-4e33-a086-0d85df8f4ab1.jpg": "5dbae5b0be826325852edb7730f2a3d3",
"assets/images/clodocs_logo_transparent.png": "91bbf92a4743ba9def3914dc207afe3c",
"assets/images/icons8-laboratory-48.png": "60a9ab1a9f5400350d7074ee6d15ddcb",
"assets/images/human_body_three.png": "bd5d7898dc00d3f075ecbda97b8be24f",
"assets/images/LV%2520Sparkling%2520Studs%25E2%259C%25A8%2520%252018K%2520Gold%2520Plated%2520_%2520Tarnish%25E2%2580%25A6.jpg": "2cc9b9536be8fe0ff574bdf9ef97edfc",
"assets/images/icons8-pharmacy-shop-64.png": "5a4f6f2d7993beaafd610146314e618d",
"assets/images/o_7.jpeg": "e6fd45df68547ad59d0453b8a7956662",
"assets/images/o_2.jpeg": "1b32267619b89f8942ea75cb86aee6db",
"assets/images/bgTwo.jpg": "1bd2b8e769ce172bc756503b01e28322",
"assets/images/bgOne.jpg": "d2851ddbe6cdee15207a1d685a4f69e7",
"assets/images/ban_two_img.png": "bc0daf78896cae8eb2f60599709a474e",
"assets/images/pregnant.png": "de4adf69aee05639495e0d120356ce94",
"assets/images/lungs_img.png": "6e0888c09cdf5ce9ec5d265eb016bfd2",
"assets/images/itemOne.png": "fe6ab8c844db3a8ff24ea72a6bbb3314",
"assets/images/ban_three_img.png": "12fe3170eed786435fd9c3d23192ab14",
"assets/images/cancelled_badge.png": "dfde3660bb452e384792c8fbe00ed5b3",
"assets/images/Clodocs%2520logo%2520blue%2520transparent%25201.png": "da61044b838f6960cf590a670c9d46f9",
"assets/images/o_1.jpeg": "0ea5a74972f2b6e256b900d187a82d63",
"assets/images/Big%2520Patients%2520Room%25203D%2520model%25203D%2520model%2520(1).jpg": "e9ca0a2ea200ca36ff82dd685eded42e",
"assets/images/o_10.jpeg": "1a25954d0192874dbe7f81d7aa3410c7",
"assets/images/o_8.jpeg": "e2d3fa12cab6f8b71b588d1c50fe4ae3",
"assets/images/stethoscope.png": "de8a23bf5c16c7285775ed9fadf32e07",
"assets/images/o_4.png": "818872d3a294805add08c83a6baa69c8",
"assets/images/icons8-ambulance-48.png": "9266f6516e3fc82923e468c19b0e184b",
"assets/images/o_5.jpeg": "8f030d1a3dc5cd943c453cfb967ba181",
"assets/images/Prince%2520of%2520Wales%2520Hospital%2520_%2520Tempio%2520Ventilated%2520Fa%25C3%25A7ade.jpg": "f0f0443cb6e19876be2e10bdab61874a",
"assets/images/emergency-ambulance.png": "41d37284c548c4e02e4891f42ba51a08",
"assets/images/566_%2520Full%2520CGI%2520Hospital%2520_%2520Renders%2520-%2520Elarch%2520Studio.jpg": "b1319f57c59a376ec77f5617b2c9bbcc",
"assets/images/Clodocs%2520logo%2520blue%2520transparent%2520with%2520text.png": "9f8181151977bee10b416de50f35c2d9",
"assets/images/ban_one_img.png": "19d37c595e01a30b5bc883ffeedb7bc7",
"assets/images/brain.png": "f8206abe674305be378c1e3a59828b81",
"assets/images/x-rays.png": "a507b690212e4e04d19d6df7ff77e2e9",
"assets/images/itemThree.png": "c4ad5fc87e0827bfbad0c9ce95b4142d",
"assets/images/gThree.jpg": "bf672ec22fc15a02fa7663ac93f44953",
"assets/images/auth_bg.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/visit_our_website.png": "d567b686db8e4af98a07ddb6f3a29823",
"assets/images/clobot_robot.png": "0fd581f70f190c40ff0c76145eb9f679",
"assets/images/icons8-laboratory-94.png": "9831d5064102c7f8827c06227b513cae",
"assets/images/certificate_icon.png": "133bb0b54ffb8831a96bc6ec2f32105f",
"assets/images/99ebe1fc-3779-4e44-99c7-3a21eea7c7ad.jpg": "6cb0e5f92b2192dd73aa81abd71fc773",
"assets/images/pharmacy.png": "bb25d7ec46b16435e18dba5fc523b387",
"assets/images/baby.png": "63ee85b16a2b49513315b5c93e20d2f4",
"assets/images/5e15eac2-441a-433b-bdc9-5ecf5f6ee4d6.jpg": "03d55dfc75b6d176d0e411a2da624f02",
"assets/images/o_6.jpeg": "dabb94f9e57f9f62b0f0fc2b6daa94de",
"assets/images/univercity_attended.png": "ac1690c58b37878d90f1756f8c5c908d",
"assets/images/Big%2520Patients%2520Room%25203D%2520model%25203D%2520model.jpg": "e9ca0a2ea200ca36ff82dd685eded42e",
"assets/images/celeb_img.png": "ee7c0f5a2357d6fc094afd5cce7343a5",
"assets/images/New%2520Hospital%2520Tower%2520Rush%2520University%2520Medical%2520Center%2520_%2520Perkins+Will%2520-%2520Arch2O_com.jpg": "95fe2a465af56a25b25369effa13c0cf",
"assets/images/ban_seven_img.png": "d9869dabfe647599112770a9a6af31f9",
"assets/images/o_9.jpeg": "3a0019f539c1f8162ee0cd42ad604376",
"assets/images/Enfermaria.jpg": "25b7af67ad19ed854750c5fb7c6f8992",
"assets/images/turn-back.png": "e2f7be2d21b5b094c163fd48dd7d852d",
"assets/images/clodcos_ai_two.gif": "4ae478d0a7cf72abc00656ebc61cfd7a",
"assets/AssetManifest.bin.json": "6e1a903cbc2500bcd4225aa82a2b35df",
"assets/path/to/to.png": "1c483f9137f7bd473e52a533dc1f1b42",
"assets/AssetManifest.json": "8022b85a427d101b2aba6df0a3006774",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8840ad21d2c620e1a5bbb639800f2e6c",
"assets/FontManifest.json": "9ee548a5be803eea4cd8dc712d80fb39",
"version.json": "3b08ce80d67e972136d411c68414499a",
"favicon.png": "558deeaa4b66296bcc5aaede3cae5844",
"icons/Icon-512.png": "6af42bc1a3e12b6516332735edc6952e",
"icons/Icon-192.png": "d6810c7b1b6009de3b8b79c955b42348",
"icons/Icon-maskable-192.png": "d6810c7b1b6009de3b8b79c955b42348",
"icons/Icon-maskable-512.png": "6af42bc1a3e12b6516332735edc6952e",
"manifest.json": "6584829b3d4a087a0fdc25a06aa21bd2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
