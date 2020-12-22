// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\u9996\u5148\u6765\u4E2A\u80CC\u666F*/\nbody {\n  background: #db4d56;\n  background-image: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #db4d56 0%,\n    #6d0110 100%\n  );\n}\n.container {\n  max-width: 800px;\n  margin: auto;\n  height: 500px;\n}\n/*\u518D\u753B\u4E00\u4E2A\u9ED1\u8272\u7684\u5706*/\n.head {\n  position: relative;\n  top: 40%;\n  transform: translateY(-50%);\n  background-color: black;\n  height: 200px;\n  width: 190px;\n  margin: auto;\n  border-radius: 50%;\n}\n.head .ears {\n  position: absolute;\n  height: 120px;\n  width: 110px;\n  border-radius: 50%;\n  background: #000;\n  top: -70px;\n}\n/*\u5DE6\u8033\u6735*/\n.head .ears.left {\n  left: -55px;\n  transform: rotate(45deg);\n}\n/*\u53F3\u8033\u6735*/\n.head .ears.right {\n  right: -55px;\n  transform: rotate(-45deg);\n}\n.ears .highlight {\n  position: absolute;\n  height: 85%;\n  width: 80%;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.left .highlight {\n  top: 10px;\n  left: 13px;\n  box-shadow: -10px 0px 10px -5px rgba(255, 255, 255, 0.4);\n}\n.right .highlight {\n  top: 10px;\n  right: 13px;\n  box-shadow: 0px -10px 10px -5px rgba(255, 255, 255, 0.4);\n}\n/*\u4E0B\u90E8\u5206\u7684\u8138\u6027*/\n.head .mouth-border {\n  position: absolute;\n  width: 200px;\n  left: 50%;\n  margin-left: -100px;\n  bottom: -10px;\n  height: 150px;\n  background: #000;\n  border-radius: 50%;\n  z-index: 2;\n}\n/*\u73B0\u5728\u6765\u753B\u8138\u5566*/\n.mouth-border .eye-patch {\n  position: absolute;\n  top: -40px;\n  background-color: #f2e1cf;\n  height: 140px;\n  width: 90px;\n  border-radius: 50%;\n}\n.mouth-border .eye-patch.left {\n  left: 20px;\n  transform: rotate(5deg);\n  box-shadow: inset 5px 10px 15px -5px rgba(255, 255, 255, 0.5);\n}\n.mouth-border .eye-patch.right {\n  right: 20px;\n  transform: rotate(-5deg);\n  box-shadow: inset 0px 10px 15px -5px rgba(255, 255, 255, 0.5);\n}\n/*\u8FD9\u4E0D\u96BE\u770B\u51FA\u6765\u662F\u773C\u775B\u5427*/\n.mouth-border .eye {\n  position: absolute;\n  top: -10px;\n  background-color: white;\n  border: 2px solid #444444;\n  border-top: 4px solid #444444;\n  height: 70px;\n  width: 22px;\n  border-radius: 50%;\n  z-index: 26;\n}\n.mouth-border .eye.left {\n  right: 70px;\n  transform: rotate(2deg);\n}\n.mouth-border .eye.right {\n  left: 70px;\n  transform: rotate(-2deg);\n}\n/*\u4E24\u4E2A\u5C0F\u773C\u7403*/\n.mouth-border .eye .eyeball {\n  position: absolute;\n  bottom: 6px;\n  height: 25px;\n  width: 14px;\n  border-radius: 50%;\n  background: linear-gradient(to bottom, #000000 0%, #444444 100%);\n}\n.mouth-border .eye.right .eyeball {\n  right: 1px;\n}\n.mouth-border .eye .eyeball .highlight {\n  position: relative;\n  top: 7px;\n  left: 4px;\n  height: 2px;\n  width: 0;\n  border-radius: 50%;\n  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.75);\n}\n\n.mouth-border .nose-ridge {\n  position: absolute;\n  width: 70px;\n  left: 50%;\n  margin-left: -37px;\n  top: 53px;\n  height: 30px;\n  border: 2px solid black;\n  background-color: #f2e1cf;\n  border-radius: 50%;\n  z-index: 27;\n  box-shadow: inset 0 2px 5px 1px rgba(255, 255, 255, 0.5),\n    0px -4px 5px -2px rgba(0, 0, 0, 0.3);\n}\n/*\u8FD9\u662F\u8138\u7684\u4E0B\u90E8\u5206*/\n.mouth-border .mouth-patch {\n  position: absolute;\n  bottom: 10px;\n  height: 75px;\n  width: 135px;\n  border-radius: 50%;\n  z-index: 28;\n  background: linear-gradient(to bottom, #f2e1cf 0%, #f2e1cf 60%, #c1b4a5 100%);\n}\n.mouth-border .mouth-patch.left {\n  left: 2px;\n  transform: rotate(25deg);\n}\n.mouth-border .mouth-patch.right {\n  right: 2px;\n  transform: rotate(-25deg);\n}\n.mouth-border .chin-white {\n  position: absolute;\n  bottom: -10px;\n  width: 80px;\n  left: 50%;\n  margin-left: -40px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: #c1b4a5;\n}\n/*\u8FD9\u662F\u5C0F\u9F3B\u5B50*/\n.head .nose {\n  position: absolute;\n  top: 120px;\n  width: 65px;\n  left: 50%;\n  margin-left: -32.5px;\n  height: 35px;\n  border-radius: 50%;\n  background: black;\n  z-index: 32;\n  overflow: hidden;\n  box-shadow: 8px 8px 5px 1px rgba(0, 0, 0, 0.2);\n}\n.head .nose::before {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  height: 0px;\n  width: 10px;\n  background-color: white;\n  border-radius: 50%;\n  overflow: hidden;\n  transform: rotate(-15deg);\n}\n/*\u600E\u4E48\u80FD\u5C11\u4E86\u5FAE\u7B11*/\n.head .lips {\n  position: absolute;\n  top: 93px;\n  width: 150px;\n  left: 50%;\n  margin-left: -75px;\n  height: 90px;\n  border-radius: 50%;\n  border-bottom: 5px solid black;\n  z-index: 25;\n}\n.head .corners {\n  position: absolute;\n  top: 138px;\n  height: 15px;\n  width: 20px;\n  border-radius: 50%;\n  border-top: 2px solid black;\n  z-index: 30;\n  box-shadow: inset 0px 5px 8px -5px rgba(0, 0, 0, 0.75),\n    0px -9px 10px 0px rgba(255, 255, 255, 0.5);\n}\n.head .corners.left {\n  left: 15px;\n  transform: rotate(-45deg);\n}\n.head .corners.right {\n  right: 15px;\n  transform: rotate(45deg);\n}\n/*\u518D\u6765\u4E2A\u5927\u5634\u5DF4\u5DEE\u4E0D\u591A\u8981\u753B\u5B8C\u54AF*/\n.head .mouth {\n  position: absolute;\n  top: 155px;\n  width: 55px;\n  left: 50%;\n  margin-left: -27.5px;\n  height: 58px;\n  background: black;\n  border-radius: 50%;\n  z-index: 30;\n}\n.head .mouth::before,\n.head .mouth::after {\n  position: absolute;\n  top: 23px;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.head .mouth::before {\n  left: -20px;\n  border-width: 0 28px 15px 0;\n  border-color: transparent black transparent transparent;\n  transform: rotate(20deg);\n}\n.head .mouth::after {\n  right: -20px;\n  border-width: 15px 28px 0 0;\n  border-color: black transparent transparent transparent;\n  transform: rotate(-20deg);\n}\n.mouth .hole {\n  position: absolute;\n  bottom: 0;\n  border: 3px solid black;\n  height: 50px;\n  width: 49px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n/*\u8FD8\u6709\u820C\u5934\u522B\u5FD8\u4E86*/\n.hole .tongue {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  bottom: -10px;\n  background: linear-gradient(\n    to bottom,\n    #6d0019 0%,\n    #6d0019 20%,\n    #c66c76 50%,\n    #c66c76 99%\n  );\n}\n.hole .tongue.left {\n  left: 5px;\n}\n.hole .tongue.right {\n  right: 5px;\n  border-top: 5px solid black;\n}\n/*\u6321\u4F4F\u5927\u5927\u7684\u5634\u5DF4*/\n.mouth-hider {\n  position: relative;\n  top: 144px;\n  width: 100px;\n  left: 50%;\n  margin-left: -50px;\n  height: 35px;\n  border-radius: 50%;\n  z-index: 31;\n  background-color: #f2e1cf;\n  box-shadow: inset 0px -5px 5px -5px rgba(0, 0, 0, 0.75);\n}\n/*\u518D\u5B8C\u5584\u4E00\u4E0B*/\n.head .chin-border {\n  position: absolute;\n  bottom: -24px;\n  width: 90px;\n  left: 50%;\n  margin-left: -45px;\n  background: black;\n  height: 90px;\n  border-radius: 50%;\n}\n/*\u7EC8\u4E8E\u753B\u5B8C\u5566~~*/\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  n: 0,
  string2: '',
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play2',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    if (player.n < _css.default.length) {
      if (_css.default[player.n] === ' ') {
        player.string2 += '&nbsp';
      } else if (_css.default[player.n] === '\n') {
        player.string2 += '<br>';
      } else {
        player.string2 += _css.default[player.n];
        player.ui.demo.innerHTML = player.string2;
        player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
      }

      player.n += 1;
    } else {
      player.pause();
      return;
    }
  },
  play2: function play2() {
    if (!player.id) {
      player.play();
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
    player.id = 0;
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/zzLw/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50305" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/zzLw/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map