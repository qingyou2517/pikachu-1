// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"HdJB":[function(require,module,exports) {
var string = '/*\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u9752\u6E38\uFF0C\u8BA9\u6211\u6765\u4E3A\u5927\u5BB6\u753B\u4E00\u53EA\u76AE\u5361\u4E18\u5427*/\n*{\n    margin: 0;padding: 0;box-sizing: border-box;\n}\n*::before{\n    box-sizing: border-box;     \n}\n*::after{\n    box-sizing: border-box;\n}\n.skin{\n    position: relative;\n    background: #ffe600;\n    height: 100vh;\n}\n\n.nose{\n    border: 10px solid #000;\n    border-color: black transparent transparent transparent;\n    position: absolute;\n    left: 50%;\n    top: 144px;\n    margin-left: -10px;\n}\n.yuan{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    /* border: 1px solid #000; */\n    top: -16px;\n    left: -10px;\n    border-radius: 6px 6px 0 0;\n    background: black;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    /* \u8F6C\u52A8\u5706\u5FC3\uFF1A\u539F\u4E2D\u5FC3\u4E3A\u6807\u7B7E\u5DE6\u4E0A\u89D2\uFF0C\u6539\u4E3A\u6C34\u5E73\u5411\u53F350%\uFF0C\u5782\u76F4\u5411\u4E0B100% */\n    /* \u540C\u6837\u53EF\u4EE5\u5199\u6210 transform-origin: center bottom; */\n    transform-origin: 50% 100%;\n    animation: wave 300ms infinite linear;\n}\n\n.eye{\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n.eye.left{\n    transform: translateX(-100px);\n\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.eye::before{\n    /* \u5148\u7ED9content,\u4E0D\u7136\u770B\u4E0D\u89C1\uFF1B\u56E0\u4E3A\u9ED8\u8BA4span\u5185\u8054\u5143\u7D20\uFF0C\u8FD8\u8981\u8F6C\u6210\u5757\u7EA7 */\n    content: \'\';\n    display: block;\n    border: 3px solid black;\n    width: 31px;\n    height: 31px;\n    border-radius: 50%;\n    background: white;\n    transform: translateX(9px) translateY(-1px);\n}\n\n.mouth{\n    width: 200px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    top: -20px;\n    z-index: 1;\n}\n.mouth .up .lip.left{\n    border: 3px solid #000;\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 0 30px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-15deg) translateX(-53px);\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n}\n.mouth .up .lip.right{\n    border: 3px solid #000;\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 30px 0;\n    border-top: none;\n    border-left: none;\n    transform: rotate(15deg) translateX(53px);\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;  \n    background: #ffe600;\n}\n\n.mouth .down{\n    position: absolute;\n    width: 100%;\n    height: 150px;\n    overflow: hidden;\n    top: 5px;\n}\n.mouth .down .yuan1{\n    border: 3px solid #000;\n    width: 150px;\n    height: 1000px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    position: absolute;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -180px;\n    left: 50%;\n    margin-left: -100px;\n    background: #ff485f;\n    border-radius: 100px;\n}\n\n.face {\n    border: 3px solid #000;\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    margin-left: -40px;\n    top: 200px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-170px);\n    border-radius: 50%;\n    background: #ff0000;\n}\n.face.right{\n    transform: translateX(170px);\n    border-radius: 50%;\n    background: #ff0000;\n}\n.face>img{\n    position: absolute;\n}\n.face.left>img{\n    transform: rotateY(180deg);\n    right: 0;\n}\n';
var demoText = document.querySelectorAll('#demoText')[0];
var demoStyle = document.querySelectorAll('#demoStyle')[0];

var n = 1;
// 字符串不包括下标n
demoText.innerText = string.substring(0, n);
demoStyle.innerHTML = string.substring(0, n);

var run = function run() {
    n++;
    if (n <= string.length) {
        // console.log(n+':'+string.substring(0,n));
        demoText.innerText = string.substring(0, n);
        demoStyle.innerHTML = string.substring(0, n);
        demoText.scrollTop = demoText.scrollHeight;
    } else {
        window.clearInterval(id);
        return;
    }
};

// const play=()=>{
//     // 注意不是run()作为参数，因为run是函数，而run()是调用函数/函数返回值
//     // 见setInterval mdn:返回一个id，计时标志作为进度，window.clearInterval(id)可以清除计时进度
//     let time
//     return setInterval(run,time)
// }
var time = 100;
var id = setInterval(run, time);

var pause = function pause() {
    window.clearInterval(id);
};
var slow = function slow() {
    pause();
    var time = 300;
    id = setInterval(run, time);
};
var normal = function normal() {
    pause();
    var time = 100;
    id = setInterval(run, time);
};
var fast = function fast() {
    pause();
    var time = 0;
    id = setInterval(run, time);
};

btnPause.onclick = pause;
btnPlay.onclick = function () {
    // 继续计时
    id = setInterval(run, time);
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.0a7be28e.map