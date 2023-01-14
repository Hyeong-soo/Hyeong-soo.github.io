'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d4fc025a5862311f866f9ba8b9fae2c1",
"index.html": "4c4617a13d2d264e23277f478dc7e7c0",
"/": "4c4617a13d2d264e23277f478dc7e7c0",
"main.dart.js": "99c52c52b82279cd0463f1f9a7d7c99d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5c473c8c3fc88f8d27cb61fdb7730b40",
"assets/AssetManifest.json": "e6cf7215adaf0bb9676314c59901b46f",
"assets/NOTICES": "58ce57cd76dd9f6f335793970a2da9ad",
"assets/FontManifest.json": "8c2613ea6866f56a661b4bd0f1a5937b",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b989b12dfaa72d713a6dac6ba2cf6a8d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/postech_cite.jpg": "df2ad636c6400d0a7fdb8a564795e2ae",
"assets/assets/postech_mse.jpg": "fcadec3bcce41253546edf3f864a38f8",
"assets/assets/Home_Page_Activity_Photo_8.png": "76ab21774664b843c1cdef5a34a771cc",
"assets/assets/postech_math.jpg": "72b4548bd33cb82beec8448964dbab2f",
"assets/assets/Home_Page_Activity_Photo_9.png": "f78c75c40aecc80314e2a734793b912a",
"assets/assets/Home_Page_PAMS_Activity.png": "11820f1e27e4214ac13929b29dcd0aec",
"assets/assets/heart%2520(2).png": "9f61111962cc66e53f0c907d4fcc17cb",
"assets/assets/metamask_connect.png": "dfa16abf6ff98c09ce1c15227faf3e63",
"assets/assets/wallet.png": "46190574ff3aecf0e60de0613c950477",
"assets/assets/Second_second.png": "41759a9de71facf08889a091d7883bdc",
"assets/assets/LogIn.png": "012acfb5259b7dcad9b01874ad9cb699",
"assets/assets/postech_mej.png": "3fcc50946b3a97dbca8d1976e2b6d202",
"assets/assets/postech_ce.jpg": "72bf1abfd9dc24b5f08a0ba43adeadbe",
"assets/assets/Home_Page_Arrow.png": "04774d0b8c31ac65c03f2c3042e2f610",
"assets/assets/letsgo.png": "8d395f39b695d5bb9f357b12a1b8a87f",
"assets/assets/postech_che.jpg": "40af4d5d434f939383ba62c4db602a67",
"assets/assets/act10.png": "398c52855d23fdd2aa3af1819c1cf4eb",
"assets/assets/phonix.png": "1a203bc8fa1567e75f5f7cb901682e98",
"assets/assets/extraact6.png": "1e4ddade34cc65b4fd462b0299a3fe86",
"assets/assets/NFT_Icon_Trans.png": "888058c8db8affec39fb31366782a469",
"assets/assets/act6.png": "25443c48830bb0d697c8ad8803f29a3c",
"assets/assets/postech_ime.jpg": "374f4125cf2d88dbf4935faec3647e98",
"assets/assets/act7.png": "8bb0866ad891a6c002aaaa3587197c28",
"assets/assets/extraact7.png": "2d6947b4c1e895a30f308b5cd1eb5ce9",
"assets/assets/extraact5.png": "e76236d82918da9bbac6e161a105dddc",
"assets/assets/act5.png": "2c745efb462d1c54efcf87e435b51e18",
"assets/assets/Resume_Icon_Trans.png": "e4aad34ab6917b71e04ab6b2edecc148",
"assets/assets/act4.png": "dc5db9467e239f88f2d9d34388ab0bc8",
"assets/assets/extraact4.png": "992422a9dcaa46f5ec214e68a463c0cc",
"assets/assets/act1.png": "e071f6d5286a60e7108eaaba6e67cf54",
"assets/assets/extraact1.png": "1604f35dd59a0a7f28dd359eee9171f4",
"assets/assets/Home_Page_Fire.png": "e7a83d625e7b36db910ddce262bb8e61",
"assets/assets/extraact3.png": "70c0e9c4e9637db950370127179cb694",
"assets/assets/act3.png": "8b8ff95c65ec350d3292b04ab7b1204c",
"assets/assets/postech_ee.jpg": "4ed30636bf44abb501c1b949d926a753",
"assets/assets/act2.png": "1830d0eaaf9a19f3368c85dbf57beaa5",
"assets/assets/First_first.png": "6cd8cd2840920f696647ef995a1c50cb",
"assets/assets/extraact2.png": "2ca1d51dee9d3f8aecb042fcc0e85301",
"assets/assets/NFT_Icon.png": "a38cd02d50c017f6cb079a933e55da4b",
"assets/assets/Favorite_NFT.png": "e3679aa733f1a6502036cfc53e5be060",
"assets/assets/NFT_3.png": "2f9104eee087e63523370d613ca3617b",
"assets/assets/Second_Imagepath_5.png": "73ba15c78784c505f8fc96f912f86254",
"assets/assets/Second_Imagepath_4.png": "6935560633df72e90cee5aafcef0bb2a",
"assets/assets/NFT_2.png": "c59c77215048a2ca76bdb2f784f7548b",
"assets/assets/ID.png": "18a2cbaf2871e616f786568760c714ca",
"assets/assets/PassWord.png": "3021b70dd8063a2b27be071709626355",
"assets/assets/NFT_1.png": "5984f0d5ff5fed89e846e52dc27fd2ec",
"assets/assets/Image_Icon.png": "4a82fc1eaebbc0399b490c30272fd5ea",
"assets/assets/LoGo.png": "329ab2234bcd87c5fc85244d033923c1",
"assets/assets/act9.png": "9be145ad34ec481efe09199f97003389",
"assets/assets/NFT_5.png": "af18350eb6ad65d7e0c61966b3955fe5",
"assets/assets/Second_Imagepath_3.png": "0c27dfebcf3656c7953c0d7f55c40f96",
"assets/assets/Second_Imagepath_2.png": "677df7da90d01bdc5be9f46bea5a3858",
"assets/assets/Request_First.png": "686b5d9b7b02003dc1b31c99ab77031d",
"assets/assets/Third_third.png": "b37c97d31d312c9542bccf7a70c3dd7e",
"assets/assets/NFT_4.png": "1c0df229540e1e6a2baebff4e344ace5",
"assets/assets/act8.png": "9f5540655fc0b1e0b0bcc37ff4146beb",
"assets/assets/extraact8.png": "74c64b045fe7e9e12d179faf7c5bcc06",
"assets/assets/Home_Page_Activity_Photo_10.png": "e071f6d5286a60e7108eaaba6e67cf54",
"assets/assets/Start_Up_Event.png": "82ff90974a38fb62e9d31911a5170c45",
"assets/assets/SpoqaHanSansNeo-Bold.otf": "8ea1d9004a8f295b800c3c9b89a9c07a",
"assets/assets/abi.json": "b90f04a8242bd59869b8cd1042b700b2",
"assets/assets/Second_Imagepath_1.png": "7a072df57dae4d3138c205a3a3d8b7de",
"assets/assets/postech_phys.jpg": "0f2623fdf0bc16d355adca5839bf7dbb",
"assets/assets/NFT_Reservation_Check.png": "c9f37b773574f0f8f746d530ce097121",
"assets/assets/Home_Page_Activity_Photo_1.png": "4e7c04324546a1aca0a91669da1d49f9",
"assets/assets/postech_life.jpg": "419bd7c6cb99622e016398e886a3d5ca",
"assets/assets/Group%252045.png": "61c981ee9c9e7b6cbbfd92f10caffd8d",
"assets/assets/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/assets/Resume_Icon.png": "304bd0d49ea12f61e942a38a892c9ab1",
"assets/assets/coins%25201.png": "cdec396f9bd38d57acbc42a37050ac85",
"assets/assets/Home_Page_Activity_Photo_2.jpg": "9aae21b02b2fba07093d2f0cf8552f7b",
"assets/assets/Home_Page_Activity_Photo_3.png": "d36307ebb9f2a3c65187bcf9a5b4b96f",
"assets/assets/heart%2520(1).png": "bed171f38bc538c188efa49f41318255",
"assets/assets/postech_cse.jpg": "67990f3e7e9d97b3e0ec8b7cb86c3b77",
"assets/assets/Home_Page_Activity_Photo_7.png": "242f72cccbf8f62c7b04ddcb4f5a1ac9",
"assets/assets/whoareyou.png": "8a0e04ecb83a07cf1f0ee0ca0e849fc1",
"assets/assets/Home_Page_Activity_Photo_6.png": "ab7496d27220a01699018f26f754723f",
"assets/assets/Home_Page_Activity_Photo_4.png": "74fce55c5c8a07982bc67ea6efbf9108",
"assets/assets/postech_me.png": "59cf9b4be77c47caeafe0477f1781947",
"assets/assets/metamask_logo.png": "2024653db90534e420444542f4539d30",
"assets/assets/Home_Page_Activity_Photo_5.jpg": "25443c48830bb0d697c8ad8803f29a3c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
