/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82c8db88d261599c3c793426a0eddcd5"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.53ae2cf1.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.4750ddf8.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.eef587ad.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.e27b49d5.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.19114309.js",
    "revision": "6710f4d9901c1905a8980b6a0f263c9b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "301f9429220243689fed762affd1e832"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e7482339854e552d7f08f5be025c9ddb"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8f1b86d712c9847b74241a064f423d19"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dec74f2eb928f238be91658586540a78"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cf7770f303754f99cea683c3b7a543e4"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3b9b18ed9e9b071f438ee4af14ec645f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5411c814c620c20eaeedea814b467509"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "4de9141281eed04867ef40e29ff9e85b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fd68ce4d05e86cacb45ae92081b6a8b6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "310066e6b424e8f567a4fa0ff473b498"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7c1481245109d184941e7caee9fb6e89"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fbe67035eb1b11653c8ae6fac9e79869"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "076e703c75bee75413e437aee2afa05b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f473343f4da2e1532e470f8acc239c82"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "bb283c02f41fe29fe52578e2f85ad469"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4d8eda5ca63c03594fbe068ee2f2d2a5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "91b7c0b80f2c0ce27da98c3f5ed5229a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cdf8da567b237f0dab7bf04eac47f5f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "11d9a32d30bbe2f53c347f6ea51a55b7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4df7006731e4120864538a79784b685d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6c1062cb79a84b00f2cf23bcdeeffd5a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0e9d08166f1c172d277269ba2b94b8e4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "17afd724c729f29e43ebf71fcf8b3757"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cb96df35679d7f9b7cb1c82aec459479"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
