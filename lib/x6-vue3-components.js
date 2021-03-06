(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('tippy.vue'), require('tippy.js'), require('hotkeys-js'), require('add-dom-event-listener'), require('overlayscrollbars'), require('clamp')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'tippy.vue', 'tippy.js', 'hotkeys-js', 'add-dom-event-listener', 'overlayscrollbars', 'clamp'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.X6Vue3Components = {}, global.Vue, global.TippyVue, global.tippy, global.hotkeys, global.addEventListener, global.OverlayScrollbars, global.clamp));
})(this, (function (exports, vue, tippy_vue, tippy, hotkeys, addEventListener, OverlayScrollbars, clamp) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);
  var hotkeys__default = /*#__PURE__*/_interopDefaultLegacy(hotkeys);
  var addEventListener__default = /*#__PURE__*/_interopDefaultLegacy(addEventListener);
  var OverlayScrollbars__default = /*#__PURE__*/_interopDefaultLegacy(OverlayScrollbars);
  var clamp__default = /*#__PURE__*/_interopDefaultLegacy(clamp);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   * IMPORTANT: all calls of this function must be prefixed with
   * \/\*#\_\_PURE\_\_\*\/
   * So that rollup can tree-shake them if necessary.
   */

  (process.env.NODE_ENV !== 'production')
      ? Object.freeze({})
      : {};
  (process.env.NODE_ENV !== 'production') ? Object.freeze([]) : [];
  const NOOP = () => { };

  var withInstall = function withInstall(main) {
    var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    main.install = function (app) {
      for (var _i = 0, _arr = [main].concat(_toConsumableArray(Object.values(extra))); _i < _arr.length; _i++) {
        var comp = _arr[_i];
        app.component(comp.name, comp);
      }
    };

    if (extra) {
      for (var _i2 = 0, _Object$entries = Object.entries(extra); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            comp = _Object$entries$_i[1];

        main[key] = comp;
      }
    }

    return main;
  };
  var withNoopInstall = function withNoopInstall(component) {
    component.install = NOOP;
    return component;
  };

  var script$h = vue.defineComponent({
      name: 'ColorPicker',
      props: {
          /* ??????????????? */
          color: {
              type: String,
              default: '#000000'
          },
          /* ???????????? */
          disabled: {
              type: Boolean,
              default: false
          },
          /* ????????????????????? */
          showAlpha: {
              type: Boolean,
              default: true
          },
          /* ???????????????????????????hex???rgb */
          colorFormat: {
              type: String,
              default: 'hex'
          },
          predefineColors: {
              type: Array,
              default() {
                  return []
              }
          }
      },
      emits: ['input', 'change', 'active-change'],
      data() {
          return {
              canvasId: 'canvas-' + Date.now(), // ?????? id???????????????????????????
              curId: 'cur-' + Date.now(), // ?????????????????? id???????????????????????????
              barId: 'bar-' + Date.now(), // ???????????????????????? id???????????????????????????
              alphaId: 'alpha-' + Date.now(), // ????????????????????? id???????????????????????????
              canvas: null, // ??????
              ctx: null, // ????????????
              curColor: '', // ??????????????????
              activeColor: '', // bar????????????
              alpha: 1, // ?????????
              width: 286, // canvas??????
              height: 200, // canvas??????
              showPanel: false, // ????????????????????????
              startColor: '',
              prefixCls: 'x6',
              baseCls: '',
              horizontal: 'left'
          }
      },
      computed: {
          alphaBarStyle(){
              return `background: linear-gradient(to right, rgba(255, 69, 0, 0) 0%, ${this.activeColor} 100%);`
          }
      },
      watch: {
          color(val) {
              this.curColor = val;
              this.resetCurColor();
          }
      },
      mounted() {
          this.baseCls = `${this.prefixCls}-color-picker`;
          this.startColor = this.color;
          document.body.addEventListener('click', this.handler);
          this.$nextTick(() => {
              this.curColor = this.color;
              this.activeColor = '#ff0000';
              this.resetCurColor();
              this.init();
          });
      },
      beforeUnmount() {
          document.body.removeEventListener('click', this.handler);
      },
      methods: {
          clickBlock() {
              !this.disabled&&(this.showPanel=!this.showPanel);
              if (this.showPanel) {
                  this.isInViewPort(this.$refs.colorPanelShow);
              }
          },
          isInViewPort(el) {
              var rect = el.getBoundingClientRect();
              let right = globalThis.screen.width - rect.left < 300;
              this.horizontal = right ? 'right' : 'left';
          },
          handler() {
              this.showPanel = false;
          },
          /* ????????? */
          init() {
              this.canvas = document.getElementById(this.canvasId);
              this.ctx = this.canvas.getContext('2d');
              this.makeColorBar();
              this.makeColorBox('#ff0000');
          },
          /* ????????????????????????????????? */
          makeColorBar() {
              let gradientBar = this.ctx.createLinearGradient(0, 0, 0, this.height);
              gradientBar.addColorStop(0, '#f00');
              gradientBar.addColorStop(1 / 6, '#f0f');
              gradientBar.addColorStop(2 / 6, '#00f');
              gradientBar.addColorStop(3 / 6, '#0ff');
              gradientBar.addColorStop(4 / 6, '#0f0');
              gradientBar.addColorStop(5 / 6, '#ff0');
              gradientBar.addColorStop(1, '#f00');

              this.ctx.fillStyle = gradientBar;
              this.ctx.fillRect(0, 0, 20, this.height);
          },
          /* ???????????????????????? */
          makeColorBox(color) {
              let gradientBase = this.ctx.createLinearGradient(30, 0, this.width, 0);
              gradientBase.addColorStop(1, color);
              gradientBase.addColorStop(0, 'rgba(255,255,255,1)');
              this.ctx.fillStyle = gradientBase;
              this.ctx.fillRect(30, 0, this.width, this.height);

              let gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
              gradient.addColorStop(0, 'rgba(0,0,0,0)');
              gradient.addColorStop(1, 'rgba(0,0,0,1)');
              this.ctx.fillStyle = gradient;
              this.ctx.fillRect(30, 0, this.width, this.height);
          },
          /* canvas?????? */
          onCanvasClick(e) {
              let ePos = {
                  x: e.offsetX || e.layerX,
                  y: e.offsetY || e.layerY
              };
              let rgbaStr = '#000';
              if (ePos.x >= 0 && ePos.x < 20) {
                  // in
                  rgbaStr = this.getRgbaAtPoint(ePos, 'bar');
                  let barBlock = document.getElementById(this.barId);
                  barBlock.style.top = ePos.y + 'px';
                  this.makeColorBox('rgb(' + rgbaStr.slice(0, 3).join() + ')');
                  this.$emit('active-change', this.rgb2hex('rgba(' + rgbaStr.slice(0, 3).join() + ',' + this.alpha +
                      ')'));
              } else if (ePos.x >= 30) {
                  rgbaStr = this.getRgbaAtPoint(ePos, 'box');
                  let cur = document.getElementById(this.curId);
                  cur.style.left = ePos.x + 'px';
                  cur.style.top = ePos.y + 'px';
              } else {
                  return
              }
              this.setCurColor(rgbaStr);
          },
          /* canvas??????????????????????????????????????? */
          onCanvasMousedown(ev, type) {
              let self = this;
              let ePos = {
                  x: ev.layerX || ev.offsetX,
                  y: ev.layerY || ev.offsetY
              };
              let offsetTop = parseInt(ev.target.offsetTop);
              let offsetLeft = parseInt(ev.target.offsetLeft);
              if (type === 'cur' || (ePos.x >= 30 && ePos.x < 30 + this.width && ePos.y >= 0 && ePos.y < this.height)) {
                  let cur = document.getElementById(this.curId);
                  document.onmouseup = function() {
                      document.onmouseup = document.onmousemove = null;
                  };
                  document.onmousemove = function(e) {
                      try {
                          let pos = {
                              x: e.clientX - ev.clientX + ev.offsetX + offsetLeft,
                              y: e.clientY - ev.clientY + ev.offsetY + offsetTop
                          };

                          pos.x = pos.x <= 30 ? 30 : pos.x && (pos.x > self.width - 1 ? self.width - 1 : pos.x);
                          pos.y = pos.y <= 0 ? 0 : pos.y && (pos.y > self.height - 1 ? self.height - 1 : pos.y);

                          let rgbaStr = self.getRgbaAtPoint(pos, 'box');
                          self.setCurColor(rgbaStr);
                          cur.style.left = pos.x + 'px';
                          cur.style.top = pos.y + 'px';
                      } catch (e) {
                          console.log(e);
                      }
                  };
              } else if (ePos.x <= 20 && ePos.y <= this.height) {
                  let bar = document.getElementById(this.barId);
                  document.onmouseup = function() {
                      document.onmouseup = document.onmousemove = null;
                  };
                  document.onmousemove = function(e) {
                      try {
                          let pos = {
                              x: 0,
                              y: e.clientY - ev.clientY + ev.offsetY + offsetTop
                          };

                          pos.y = pos.y <= 0 ? 0 : pos.y && (pos.y > self.height - 1 ? self.height - 1 : pos
                              .y);

                          let rgbaStr = self.getRgbaAtPoint(pos, 'box');
                          bar.style.top = pos.y + 'px';
                          self.activeColor = self.rgb2hex('rgb(' + rgbaStr.slice(0, 3).join() + ')');
                          self.makeColorBox('rgb(' + rgbaStr.slice(0, 3).join() + ')');
                          self.$emit('active-change', self.activeColor);
                      } catch (e) {
                          console.log(e);
                      }
                  };
              }
          },
          /* ???????????????????????? */
          onAlphaClick(e){
              let x = e.offsetX || e.layerX;
              let bar = document.getElementById(this.alphaId);
              let parentNode = bar.parentNode;
              this.alpha = parseFloat(x/parentNode.clientWidth).toFixed(2);
              this.resetCurColor();
          },
          /* ??????????????? */
          onAlphaMousedown(ev){
              let self = this;
              ({
                  x: ev.layerX || ev.offsetX,
                  y: ev.layerY || ev.offsetY
              });
              parseInt(ev.target.offsetTop);
              let offsetLeft = parseInt(ev.target.offsetLeft);
              let bar = document.getElementById(this.alphaId);
              let parentNode = bar.parentNode;
              document.onmouseup = function() {
                  document.onmouseup = document.onmousemove = null;
              };
              document.onmousemove = function(e) {
                  try {
                      let pos = {
                          x: e.clientX - ev.clientX + ev.offsetX + offsetLeft,
                          y: 0
                      };
              
                      pos.x = pos.x <= 0 ? 0 : pos.x && (pos.x > parentNode.clientWidth ? parentNode.clientWidth : pos
                          .x);
              
                      self.alpha = parseFloat(pos.x/parentNode.clientWidth).toFixed(2);
                      self.resetCurColor();
                  } catch (e) {
                      console.log(e);
                  }
              };
          },
          /* ?????????????????????????????????????????? */
          resetCurColor(){
              let curColor = this.curColor;
              let alpha = this.alpha;
              let reg = /^(rgb|RGB)/;
              if (!reg.test(curColor)){
                  curColor = this.hex2rgb(curColor.slice(0,7));
              }
              let colorArr = curColor.replace(/(?:rgba|rgb|RGBA|RGB|\(|\))*/g, "").split(',');
              colorArr[3] = alpha;
              this.setCurColor(colorArr);
          },
          /* ????????????????????? */
          setCurColor(rgbaStr) {
              let txt = 'a';
              if (rgbaStr.length === 4 && parseFloat(rgbaStr[3]) === 1 || !this.showAlpha) {
                  rgbaStr = rgbaStr.slice(0, 3);
                  txt = '';
              }
              if (this.colorFormat === 'hex') {
                  this.curColor = this.rgb2hex('rgb' + txt + '(' + rgbaStr.join() + ')');
              } else if (this.colorFormat === 'rgb') {
                  this.curColor = 'rgb' + txt + '(' + rgbaStr.join() + ')';
              }
              this.$emit('input', this.curColor);
              this.sendChange();
          },
          resetColor() {
              this.curColor = this.startColor;
              this.sendChange();
          },
          /* ?????????????????? */
          confirm() {
              this.sendChange();
              this.showPanel = false;
          },
          getPredefineColor(predefineColor) {
              this.curColor = predefineColor;
              this.sendChange();
              this.showPanel = false;
          },
          /* ??????change?????? */
          sendChange() {
              this.$emit('change', this.curColor);
          },
          /* ??????rgb */
          getRgbaAtPoint(pos, area) {
              let imgData = this.ctx.getImageData(0, 0, this.width, this.height);
              if (area == 'bar') {
                  imgData = this.ctx.getImageData(0, 0, 20, this.height);
              }
              let data = imgData.data;
              let dataIndex = (pos.y * imgData.width + pos.x) * 4;
              /* ?????????????????? */
              if (pos.x >= 30 && pos.y > this.height - 3) {
                  return [0, 0, 0, this.alpha]
              }
              if (pos.x >= 30 && pos.y <= 1) {
                  data[dataIndex] = 255;
              }
              if (pos.x >= 30 && pos.x <= 31) {
                  return [
                      data[dataIndex],
                      data[dataIndex],
                      data[dataIndex],
                      this.alpha
                  ]
              }
              if (pos.x >= this.width - 1) {
                  return [
                      data[dataIndex],
                      0,
                      0,
                      this.alpha
                  ]
              }
              /* ?????????????????? */
              return [
                  data[dataIndex],
                  data[dataIndex + 1],
                  data[dataIndex + 2],
                  this.alpha
              ]
          },
          /* rgb/rgba?????????16?????? */
          rgb2hex(rgb) {
              let reg = /^(rgb|RGB)/;
              let a;
              if (reg.test(rgb)) {
                  let colorArr = rgb.replace(/(?:rgba|rgb|RGBA|RGB|\(|\))*/g, "").split(',');
                  let alpha = (colorArr && colorArr[3] || "").trim();
                  let hex = "#" + ((1 << 24) + (parseInt(colorArr[0]) << 16) + (parseInt(colorArr[1]) << 8) + parseInt(
                      colorArr[2])).toString(16).slice(1);
                  if (alpha != '' && alpha != '1') {
                      a = ((alpha * 255) | 1 << 8).toString(16).slice(1);
                      hex = hex + a;
                  }
                  return hex
              } else {
                  return rgb
              }
          },
          /* 16???????????????rgb */
          hex2rgb(hex) {
              let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
              let color = hex.toLowerCase();
              if (reg.test(color)) {
                  if (color.length === 4) {
                      let colorNew = "#";
                      for (let i = 1; i < color.length; i += 1) {
                          colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
                      }
                      color = colorNew;
                  }
                  let colorChange = [];
                  for (let i = 1; i < color.length; i += 2) {
                      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
                  }
                  return "rgb(" + colorChange.join(",") + ")"
              } else {
                  return color
              }
          }
      }
  });

  function render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: `${_ctx.baseCls}`
    }, [
      vue.createCommentVNode(" ?????????????????? "),
      vue.createVNode("div", {
        class: `${_ctx.baseCls}-block`,
        ref: "colorPanelShow",
        style: { backgroundColor: _ctx.curColor },
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.clickBlock(...args)), ["stop"]))
      }, null, 6 /* CLASS, STYLE */),
      vue.createCommentVNode(" ???????????? "),
      vue.withDirectives(vue.createVNode("div", {
        class: `${_ctx.baseCls}-panel ${_ctx.baseCls}-panel-${_ctx.horizontal}`,
        onClick: _cache[11] || (_cache[11] = vue.withModifiers(() => {}, ["stop"]))
      }, [
        vue.createCommentVNode(" ?????? "),
        vue.createVNode("div", {
          class: `${_ctx.baseCls}-canvas`
        }, [
          vue.createVNode("canvas", {
            id: _ctx.canvasId,
            width: _ctx.width,
            height: _ctx.height,
            onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.onCanvasClick(...args))),
            onMousedown: _cache[3] || (_cache[3] = (...args) => (_ctx.onCanvasMousedown(...args)))
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["id", "width", "height"]),
          vue.createCommentVNode(" ?????????????????? "),
          vue.createVNode("em", {
            class: `${_ctx.baseCls}-cur`,
            id: _ctx.curId,
            onMousedown: _cache[4] || (_cache[4] = function(e){_ctx.onCanvasMousedown(e,'cur');})
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["id"]),
          vue.createCommentVNode(" ???????????????????????? "),
          vue.createVNode("em", {
            class: `${_ctx.baseCls}-bar`,
            id: _ctx.barId,
            onMousedown: _cache[5] || (_cache[5] = function(e){_ctx.onCanvasMousedown(e,'bar');})
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["id"]),
          vue.createCommentVNode(" ?????????????????? "),
          (_ctx.showAlpha)
            ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: `${_ctx.baseCls}-alpha-silder`
              }, [
                vue.createVNode("div", {
                  class: `${_ctx.baseCls}-alpha-silder-bar`,
                  style: _ctx.alphaBarStyle,
                  onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.onAlphaClick(...args))),
                  onMousedown: _cache[7] || (_cache[7] = (...args) => (_ctx.onAlphaMousedown(...args)))
                }, null, 38 /* CLASS, STYLE, HYDRATE_EVENTS */),
                vue.createVNode("em", {
                  class: `${_ctx.baseCls}-alpha`,
                  id: _ctx.alphaId,
                  style: {left:_ctx.alpha*100 + '%'},
                  onMousedown: _cache[8] || (_cache[8] = (...args) => (_ctx.onAlphaMousedown(...args)))
                }, null, 46 /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */, ["id"])
              ], 2 /* CLASS */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */),
        vue.createCommentVNode(" ??????????????? "),
        vue.createVNode("div", {
          class: `${_ctx.baseCls}-control`
        }, [
          vue.createVNode("input", {
            class: `${_ctx.baseCls}-input`,
            value: _ctx.curColor
          }, null, 10 /* CLASS, PROPS */, ["value"]),
          vue.createVNode("div", {
            class: `${_ctx.baseCls}-btns`
          }, [
            vue.createVNode("div", {
              class: `${_ctx.baseCls}-btn-clear`,
              onClick: _cache[9] || (_cache[9] = (...args) => (_ctx.resetColor(...args)))
            }, "??????", 2 /* CLASS */),
            vue.createVNode("div", {
              class: `${_ctx.baseCls}-btn-confirm`,
              onClick: _cache[10] || (_cache[10] = (...args) => (_ctx.confirm(...args)))
            }, "??????", 2 /* CLASS */)
          ], 2 /* CLASS */)
        ], 2 /* CLASS */),
        vue.createVNode("div", {
          class: `${_ctx.baseCls}-predefine`
        }, [
          vue.createVNode("div", {
            class: `${_ctx.baseCls}-predefine__colors`
          }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.predefineColors, (predefineColor, index) => {
              return (vue.openBlock(), vue.createBlock("div", {
                onClick: $event => (_ctx.getPredefineColor(predefineColor)),
                class: `${_ctx.baseCls}-predefine__color-selector`,
                key: index
              }, [
                vue.createVNode("div", {
                  style: { backgroundColor: predefineColor }
                }, null, 4 /* STYLE */)
              ], 10 /* CLASS, PROPS */, ["onClick"]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 2 /* CLASS */)
        ], 2 /* CLASS */)
      ], 2 /* CLASS */), [
        [vue.vShow, _ctx.showPanel]
      ])
    ], 2 /* CLASS */))
  }

  script$h.render = render$h;
  script$h.__file = "components/x6-color-picker/ColorPicker.vue";

  var X6ColorPicker = withInstall(script$h);

  const hideOnPopper = {
      name: 'hideOnPopper',
      defaultValue: true,
      fn(instance) {
          function x6DropdownHide(event) {
              let hide = true;
              let element = event.target;
              for(let i = 0; i < 5; i++) {
                  if (!element) break
                  element = element.parentElement;
                  if (!element) break
                  if (element.classList && element.classList.contains('x6-menu-submenu')) {
                      hide = false;
                      break;
                  }
              }
              hide && instance.hide();
          }
          return {
              onShow() {
                  let x6Dropdown = instance.popper.querySelector(".x6-dropdown");
                  x6Dropdown && x6Dropdown.addEventListener('click', x6DropdownHide);
              },
              onHide() {
                  let x6Dropdown = instance.popper.querySelector(".x6-dropdown");
                  x6Dropdown && x6Dropdown.removeEventListener('click', x6DropdownHide);
              }
          }
      }
  };
  const tTheme = {
      props: {
          tTheme: {
              type: String
          }
      },
      build(props, options) {
          if (props.tTheme.value !== undefined)
          options.theme = props.tTheme.value;
      }
  };
  const tAppendTo = {
      props: {
          tAppendTo: {
              type: [String, Function],
              default() {
                  return () => document.body
              }
          }
      },
      build(props, options) {
          if (props.tAppendTo.value !== undefined)
          options.appendTo = props.tAppendTo.value;
      }
  };
  const hideOnClick = {
      props: {
          hideOnClick: {
              type: [String, Boolean]
          }
      },
      build(props, options) {
          if (props.hideOnClick.value !== undefined)
          options.hideOnClick = props.hideOnClick.value;
      }
  };
  const tAnimateFill = {
      props: {
          tAnimateFill: {
              type: Boolean,
              default: false
          }
      },
      build(props, options) {
          if (props.tAnimateFill.value !== undefined)
          options.animateFill = props.tAnimateFill.value;
      }
  };
  tippy__default["default"].setDefaultProps({
      plugins: [tippy.animateFill, hideOnPopper],
  });
  var script$g = vue.defineComponent({
      name: 'Tooltip',
      components: {
          Tippy: tippy_vue.createTippyComponent(tTheme, ...tippy_vue.defaultTippyProps, hideOnClick, tAppendTo, tAnimateFill)
      },
      methods: {
          triggerFn(tip, triggerEvent) {
              if (tip.props.trigger == 'contextmenu') {
                  triggerEvent.preventDefault();
              }
          }
      }
  });

  function render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Tippy = vue.resolveComponent("Tippy");

    return (vue.openBlock(), vue.createBlock(_component_Tippy, {
      target: "_parent",
      onTrigger: _ctx.triggerFn
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8 /* PROPS */, ["onTrigger"]))
  }

  script$g.render = render$g;
  script$g.__file = "components/x6-tooltip/Tooltip.vue";

  var script$f = vue.defineComponent({
      name: 'Dropdown',
      components: {
          Tooltip: script$g
      },
      props: {
          className: {
              type: String,
              default: ''
          },
          trigger: {
              type: String,
              default: 'click', // contextmenu, mouseenter focus, click, focusin, mouseenter click, manual
              validator(value) {
                  return ['contextmenu', 'mouseenter focus', 'click', 'focusin', 'mouseenter click', 'manual'].includes(value)
              }
          },
          visible: {
              type: Boolean,
              default: false
          },
          transitionName: {
              type: String,
              default: 'shift-away', // shift-away, shift-toward, perspective, fade, scale
              validator(value) {
                  return ['shift-away', 'shift-toward', 'perspective', 'fade', 'scale'].includes(value)
              }
          },
          placement: {
              type: String,
              default: 'bottom', // top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end, auto, auto-start, auto-end
              validator(value) {
                  return ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'].includes(value)
              }
          },
          mouseEnterDelay: {
              type: Number,
              default: 0.15
          },
          mouseLeaveDelay: {
              type: Number,
              default: 0.1
          },
          tAppendTo: {
              type: [String, Function],
              default() {
                  return () => document.body
              }
          },
          tTheme: {
              type: String,
              default: 'light'
          },
          tAnimateFill: {
              type: Boolean,
              default: false
          }
      },
      setup(props) {
          let { tTheme, tAnimateFill, className, trigger, tAppendTo, visible, transitionName, placement, mouseEnterDelay, mouseLeaveDelay } = vue.toRefs(props);
          let prefixCls = vue.ref('x6');
          let baseCls = vue.ref(`${prefixCls.value}-dropdown`);
          let hideOnClick = vue.ref(false);
          if (trigger.value != 'manual') {
              hideOnClick.value = true;
          }
          let tooltipProps = vue.reactive({
              class: `${baseCls.value} ${className.value}`,
              trigger: trigger.value,
              visible: visible.value,
              animation: transitionName.value,
              placement: placement.value,
              delay: [mouseEnterDelay.value, mouseLeaveDelay.value],
              hideOnClick: hideOnClick.value,
              tTheme: tTheme.value,
              tAppendTo: tAppendTo.value,
              interactive: true,
              tAnimateFill: tAnimateFill.value
          });
          return {
              baseCls,
              tooltipProps
          }
      }
  });

  function render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Tooltip = vue.resolveComponent("Tooltip");

    return (vue.openBlock(), vue.createBlock("div", {
      class: `${_ctx.baseCls}-trigger`
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createVNode(_component_Tooltip, _ctx.tooltipProps, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "visible")
        ]),
        _: 3
      }, 16 /* FULL_PROPS */)
    ], 2 /* CLASS */))
  }

  script$f.render = render$f;
  script$f.__file = "components/x6-dropdown/Dropdown.vue";

  var script$e = vue.defineComponent({
      name: 'ContextMenu',
      components: {
          Dropdown: script$f
      },
      props: {
          className: {
              type: String,
              default: ''
          },
          visible: {
              type: Boolean,
              default: false
          },
          transitionName: {
              type: String,
              default: 'shift-away', // 'shift-away' 'shift-toward' 'perspective' 'fade' 'scale'
              validator(value) {
                  return ['shift-away', 'shift-toward', 'perspective', 'fade', 'scale'].includes(value)
              }
          },
          placement: {
              type: String,
              default: 'bottom', // 'top' 'bottom' 'left' 'right'
              validator(value) {
                  return ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'].includes(value)
              }
          },
          mouseEnterDelay: {
              type: Number,
              default: 0.15
          },
          mouseLeaveDelay: {
              type: Number,
              default: 0.1
          },
          tAppendTo: {
              type: [String, Function],
              default() {
                  return () => document.body
              }
          },
          tTheme: {
              type: String,
              default: 'light-border'
          },
          tAnimateFill: {
              type: Boolean,
              default: false
          }
      }
  });

  function render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Dropdown = vue.resolveComponent("Dropdown");

    return (vue.openBlock(), vue.createBlock(_component_Dropdown, vue.mergeProps(_ctx.$props, {
      placement: "bottom-start",
      trigger: "contextmenu"
    }), {
      visible: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "menu")
      ]),
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 16 /* FULL_PROPS */))
  }

  script$e.render = render$e;
  script$e.__file = "components/x6-context-menu/ContextMenu.vue";

  var X6ContextMenu = withInstall(script$e);

  var X6Dropdown = withInstall(script$f);

  var script$d = vue.defineComponent({
      name: 'Menu',
      props: {
          className: {
              type: String,
              default: ''
          },
          border: {
              type: Boolean,
              default: false
          },
          hasIcon: {
              type: Boolean,
              default: false
          },
          stopPropagation: {
              type: Boolean,
              default: false
          },
          onClick: {
              type: Function,
              default() {
                  return (name) => {}
              }
          },
          autoHotkey: {
              type: Boolean,
              default: false
          },
          registerHotkey: {
              type: Function,
              default() {
                  return (hotkey, handler = () => {}) => {}
              }
          },
          unregisterHotkey: {
              type: Function,
              default() {
                  return (hotkey, handler = () => {}) => {}
              }
          }
      },
      setup(props) {
          let { className, unregisterHotkey, registerHotkey, autoHotkey, onClick, hasIcon, border, stopPropagation } = vue.toRefs(props);
          let prefixCls = vue.ref('x6');
          let baseCls = vue.ref(`${prefixCls.value}-menu`);

          let menuClick = (name, event) => {
              if (stopPropagation.value && event != null) {
                  event.stopPropagation();
              }

              if (onClick.value) {
                  onClick.value(name, event);
              }
          };
          let registerHotkeyFn = (hotkey, handler = () => {}) => {
              if (registerHotkey.value) {
                  registerHotkey.value(hotkey, handler);
              }
          };
          let unregisterHotkeyFn = (hotkey, handler = () => {}) => {
              if (unregisterHotkey.value) {
                  unregisterHotkey.value(hotkey, handler);
              }
          };
          let menuContext = vue.reactive({
              baseCls: baseCls.value,
              click: menuClick,
              registerHotkey: registerHotkeyFn,
              unregisterHotkey: unregisterHotkeyFn,
              autoHotkey: autoHotkey.value
          });
          vue.provide('menuContext', menuContext);
          
          let menuClassName = vue.computed(() => {
              return `${baseCls.value} 
            ${hasIcon.value ? baseCls.value + '-has-icon' : ''} 
            ${border.value ? baseCls.value + '-border' : ''} 
            ${className.value}
             `
          });
          return {
              baseCls,
              menuClassName
          }
      }
  });

  function render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menuClassName }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */))
  }

  script$d.render = render$d;
  script$d.__file = "components/x6-menu/Menu.vue";

  var script$c = vue.defineComponent({
      name: 'SubMenu',
      components: {
          Dropdown: script$f
      },
      props: {
          className: {
              type: String,
              default: ''
          },
          icon: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: ''
          },
          text: {
              type: String,
              default: ''
          },
          active: {
              type: Boolean,
              default: false
          },
          hidden: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          arrow: {
              type: Boolean,
              default: false
          }
      },
      setup(props, context) {
          let slotIcon = vue.ref(!!context.slots.icon);
          let { className, active, hidden, disabled } = vue.toRefs(props);
          let menuContext = vue.inject('menuContext');
          let prefixCls = menuContext.baseCls;
          let baseCls = `${prefixCls}-item`;
          let subMenuClassName = vue.computed(() => {
              return `${baseCls} ${className.value} 
            ${prefixCls}-submenu 
            ${active.value ? baseCls + '-active' : ''} 
            ${hidden.value ? baseCls + '-hidden' : ''} 
            ${disabled.value ? baseCls + '-disabled' : ''}
             `
          });
          return {
              prefixCls,
              baseCls,
              subMenuClassName,
              slotIcon
          }
      }
  });

  const _hoisted_1$2 = { key: 0 };

  function render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Dropdown = vue.resolveComponent("Dropdown");

    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.subMenuClassName }, [
      vue.createVNode(_component_Dropdown, {
        placement: "right",
        tAnimateFill: _ctx.arrow,
        trigger: "mouseenter focus"
      }, {
        visible: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        default: vue.withCtx(() => [
          vue.createVNode("button", {
            type: "button",
            class: `${_ctx.baseCls}-button`
          }, [
            (_ctx.icon && !_ctx.slotIcon)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 0,
                  class: `${_ctx.baseCls}-icon ${_ctx.icon}`
                }, null, 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.slotIcon)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 1,
                  class: `${_ctx.baseCls}-icon`
                }, [
                  vue.renderSlot(_ctx.$slots, "icon")
                ], 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.text || _ctx.slotDefault)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 2,
                  class: `${_ctx.baseCls}-text`
                }, [
                  (_ctx.text)
                    ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$2, vue.toDisplayString(_ctx.text), 1 /* TEXT */))
                    : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
                ], 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            vue.createVNode("span", {
              class: `${_ctx.prefixCls}-submenu-arrow`
            }, null, 2 /* CLASS */)
          ], 2 /* CLASS */)
        ]),
        _: 1
      }, 8 /* PROPS */, ["tAnimateFill"]),
      vue.createCommentVNode(" <button type=\"button\" :class=\"`${baseCls}-button`\">\r\n            <span v-if=\"icon && !slotIcon\" :class=\"`${baseCls}-icon ${icon}`\"></span>\r\n            <span v-if=\"slotIcon\" :class=\"`${baseCls}-icon`\">\r\n                <slot name=\"icon\"></slot>\r\n            </span>\r\n            <span v-if=\"text || slotDefault\" :class=\"`${baseCls}-text`\">\r\n                <span v-if=\"text\">{{text}}</span>\r\n                <slot v-else></slot>\r\n            </span>\r\n            <span :class=\"`${prefixCls}-submenu-arrow`\" />\r\n        </button> "),
      vue.createCommentVNode(" <div :class=\"`${prefixCls}-submenu-menu`\">\r\n            <slot></slot>\r\n        </div> ")
    ], 2 /* CLASS */))
  }

  script$c.render = render$c;
  script$c.__file = "components/x6-menu/SubMenu.vue";

  var script$b = vue.defineComponent({
      name: 'MenuItem',
      props: {
          className: {
              type: String,
              default: ''
          },
          icon: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: ''
          },
          text: {
              type: String,
              default: ''
          },
          hotkey: {
              type: String,
              default: ''
          },
          active: {
              type: Boolean,
              default: false
          },
          hidden: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          onClick: {
              type: Function,
              default() {
                  return () => {}
              }
          }
      },
      setup(props, context) {
          let slotDefault = vue.ref(!!context.slots.default);
          let slotIcon = vue.ref(!!context.slots.icon);
          let { className, active, hidden, disabled } = vue.toRefs(props);
          let menuContext = vue.inject('menuContext');
          let menuContextClick = menuContext.click;
          let baseCls = menuContext.baseCls;
          baseCls = `${baseCls}-item`;
          let registerHotkey = menuContext.registerHotkey;
          let unregisterHotkey = menuContext.unregisterHotkey;
          let autoHotkey = menuContext.autoHotkey;
          let menuItemClassName = vue.computed(() => {
              return `${baseCls} ${className.value} 
            ${active.value ? baseCls + '-active' : ''} 
            ${hidden.value ? baseCls + '-hidden' : ''} 
            ${disabled.value ? baseCls + '-disabled' : ''}
             `
          });

          return {
              slotDefault,
              slotIcon,
              menuContextClick,
              baseCls,
              registerHotkey,
              unregisterHotkey,
              autoHotkey,
              menuItemClassName
          }
      },
      mounted() {
          let hotkey = this.hotkey;
          if (hotkey) {
              if (this.autoHotkey) {
                  hotkeys__default["default"](hotkey.toLowerCase(), (event) => {
                      event.preventDefault();
                      this.onHotkey(event);
                  });
              } else {
                  this.registerHotkey(hotkey, this.onHotkey);
              }
          }
      },
      beforeUnmount() {
          let hotkey = this.hotkey;
          if (hotkey) {
              if (this.autoHotkey) {
                  hotkeys__default["default"].unbind(hotkey.toLowerCase());
              } else {
                  this.unregisterHotkey(hotkey, this.onHotkey);
              }
          }
      },
      methods: {
          onHotkey(event) {
              this.triggerHandler(event);
          },
          menuItemClick(e) {
              this.triggerHandler(e);
          },
          triggerHandler(e) {
              if (!this.disabled && !this.hidden) {
                  if (this.name && this.menuContextClick) {
                      this.menuContextClick(this.name, e);
                  }

                  if (this.onClick) {
                      this.onClick(event);
                  }
              }
          }
      }
  });

  const _hoisted_1$1 = { key: 0 };

  function render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menuItemClassName }, [
      vue.createVNode("button", {
        type: "button",
        class: `${_ctx.baseCls}-button`,
        onClick: _cache[1] || (_cache[1] = $event => (_ctx.menuItemClick($event)))
      }, [
        (_ctx.icon && !_ctx.slotIcon)
          ? (vue.openBlock(), vue.createBlock("span", {
              key: 0,
              class: `${_ctx.baseCls}-icon ${_ctx.icon}`
            }, null, 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (_ctx.slotIcon)
          ? (vue.openBlock(), vue.createBlock("span", {
              key: 1,
              class: `${_ctx.baseCls}-icon`
            }, [
              vue.renderSlot(_ctx.$slots, "icon")
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (_ctx.text || _ctx.slotDefault)
          ? (vue.openBlock(), vue.createBlock("span", {
              key: 2,
              class: `${_ctx.baseCls}-text`
            }, [
              (_ctx.text)
                ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$1, vue.toDisplayString(_ctx.text), 1 /* TEXT */))
                : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (_ctx.hotkey)
          ? (vue.openBlock(), vue.createBlock("span", {
              key: 3,
              class: `${_ctx.baseCls}-hotkey`
            }, vue.toDisplayString(_ctx.hotkey), 3 /* TEXT, CLASS */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script$b.render = render$b;
  script$b.__file = "components/x6-menu/MenuItem.vue";

  var script$a = vue.defineComponent({
      name: 'Divider',
      setup() {
          let menuContext = vue.inject('menuContext');
          let baseCls = menuContext.baseCls;
          let menuDividerClassName = vue.computed(() => {
              return `${baseCls}-item 
            ${baseCls}-item-divider
             `
          });
          return {
              menuDividerClassName
          }
      }
  });

  function render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menuDividerClassName }, null, 2 /* CLASS */))
  }

  script$a.render = render$a;
  script$a.__file = "components/x6-menu/Divider.vue";

  var X6Menu = withInstall(script$d, {
    SubMenu: script$c,
    MenuItem: script$b,
    Divider: script$a
  });
  var X6SubMenu = withNoopInstall(script$c);
  var X6MenuItem = withNoopInstall(script$b);
  var X6Divider = withNoopInstall(script$a);

  var script$9 = vue.defineComponent({
      name: 'Menubar',
      props: {
          className: {
              type: String,
              default: ''
          }
      },
      setup(props, context) {
          let { className } = vue.toRefs(props);
          let prefixCls = vue.ref('x6');
          let baseCls = vue.ref(`${prefixCls.value}-menubar`);
          let menubarClass = vue.computed(() => {
              return `${baseCls.value} ${className.value}`
          });
          let active = vue.ref(false);
          let slotExtra = vue.ref(!!context.slots.extra);

          let removeDocClickEvent = vue.ref('');

          let onDocumentClick = () => {
              // active.value = false
              unbindDocEvent();
          };

          let unbindDocEvent = () => {
              if (removeDocClickEvent.value) {
                  removeDocClickEvent.value();
                  removeDocClickEvent.value = '';
              }
          };

          let activeMenubar = () => {
              active.value = true;
              if (!removeDocClickEvent.value) {
                  removeDocClickEvent.value = addEventListener__default["default"](
                      document.documentElement,
                      'click',
                      onDocumentClick,
                  ).remove;
              }
          };

          let menubarActived = vue.computed(() => {
              return active.value === true
          });
          let menubarContext = vue.reactive({
              baseCls: baseCls.value,
              activeMenubar
          });
          vue.provide('menubarContext', menubarContext);
          vue.provide('menubarActived', menubarActived);
          return {
              prefixCls,
              baseCls,
              menubarClass,
              active,
              slotExtra
          }
      }
  });

  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menubarClass }, [
      vue.createVNode("div", {
        class: `${_ctx.baseCls}-content`
      }, [
        vue.createVNode("div", {
          class: `${_ctx.baseCls}-content-inner`
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2 /* CLASS */),
        (_ctx.slotExtra)
          ? (vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: `${_ctx.baseCls}-content-extras`
            }, [
              vue.renderSlot(_ctx.$slots, "extra")
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script$9.render = render$9;
  script$9.__file = "components/x6-menubar/Menubar.vue";

  let cacheDeactiveMap = new WeakMap();
  var script$8 = vue.defineComponent({
      name: 'MenubarItem',
      props: {
          text: {
              type: String,
              default: ''
          },
          hidden: {
              type: Boolean,
              default: false
          }
      },
      setup(props, context) {
          let { hidden } = vue.toRefs(props);
          // let menubarActived = inject('menubarActived')
          let menubarActived = vue.ref(true);
          let menubarContext = vue.inject('menubarContext');
          let activeMenubar = menubarContext.activeMenubar;
          let prefixCls = menubarContext.baseCls;
          let active = vue.ref(false);
          let popupClassName = `${prefixCls}-item-dropdown`;
          let baseCls = `${prefixCls}-item`;
          let removeDocClickEvent = vue.ref('');
          let currentMenuActived = vue.computed(() => {
              return menubarActived.value && active.value
          });
          let menubarItemClass = vue.computed(() => {
              return `${baseCls} 
            ${hidden.value ? baseCls + '-hidden ' : ''}
            ${menubarActived.value ? baseCls + '-hover ' : ''}
            ${currentMenuActived.value ? baseCls + '-active' : ''}
            `
          });
          let menubarItemTextClass = vue.computed(() => {
              return `${baseCls}-text 
            ${currentMenuActived.value ? baseCls + '-text-active' : ''}
            `
          });
          return {
              activeMenubar,
              menubarActived,
              active,
              popupClassName,
              removeDocClickEvent,
              currentMenuActived,
              menubarItemClass,
              menubarItemTextClass
          }
      },
      mounted() {
          addEventListener__default["default"](this.$refs.menubarItem, 'mouseenter', this.onMouseEnter);
          addEventListener__default["default"](this.$refs.menubarItem, 'mouseleave', this.onMouseLeave);
          addEventListener__default["default"](this.$refs.menubarItemText, 'click', this.onClick);
      },
      methods: {
          onDocumentClick(event) {
              let targetClassList = event.target.classList;
              if (targetClassList.contains('x6-menubar-item') || targetClassList.contains('x6-menubar-item-text')) {
                  return
              }
              this.deactiveFn();
          },
          onClick(e) {
              this.activeMenubar();
              this.removeDeactive(e.currentTarget.parentElement);
              this.activeFn();
          },
          isPrevMenuHiddening(e) {
              let toElement = e.nativeEvent.toElement;
              if (toElement && toElement.className === this.popupClassName) {
                  return true
              }

              let currentTarget = e.currentTarget;
              let childNodes = [];
              if (currentTarget.parentElement) {
                  childNodes = currentTarget.parentElement.childNodes || [];
              }
              for (let i = 0, l = childNodes.length; i < l; i += 1) {
                  let child = childNodes[i];
                  if (child.nodeType == 3) continue
                  let popupElem = child.querySelector(`.${this.popupClassName}`);
                  if (popupElem && popupElem.contains(toElement)) {
                      return true
                  }
              }

              return false
          },
          onMouseEnter(e) {
              if (this.menubarActived && !this.active && !this.isPrevMenuHiddening(e)) {
                  let currentTarget = e.currentTarget;
                  let childNodes = [];
                  if (currentTarget.parentElement) {
                      childNodes = currentTarget.parentElement.childNodes || [];
                  }

                  childNodes.forEach((child) => {
                      if (child === currentTarget) {
                          this.removeDeactive(child);
                      } else {
                          this.callDeactive(child);
                      }
                  });

                  this.activeFn();
              }
          },
          onMouseLeave(e) {
              let relatedTarget = e.relatedTarget;
              let currentTarget = e.currentTarget;

              if (this.menubarActived && this.active) {
                  let childNodes = [];
                  if (currentTarget.parentElement) {
                      childNodes = currentTarget.parentElement.childNodes || [];
                  }
                  let shoudDeactive = false;
                  if (relatedTarget !== globalThis) {
                      for (let i = 0, l = childNodes.length; i < l; i += 1) {
                          const child = childNodes[i];
                          if (
                              child === relatedTarget ||
                              child.contains(relatedTarget)
                          ) {
                              shoudDeactive = true;
                              break
                          }
                      }
                  }

                  if (shoudDeactive) {
                      this.deactiveFn();
                  } else {
                      // ???????????????????????? hover ???????????????????????????
                      this.cacheDeactive(currentTarget);
                  }
              }
          },
          cacheDeactive(elem) {
              cacheDeactiveMap.set(elem, this.deactiveFn);
          },
          callDeactive(elem) {
              if (cacheDeactiveMap.has(elem)) {
                  cacheDeactiveMap.get(elem)();
                  cacheDeactiveMap.delete(elem);
              }
          },
          removeDeactive(elem) {
              cacheDeactiveMap.delete(elem);
          },
          activeFn() {
              this.active = true;
              if (!this.removeDocClickEvent) {
                  this.removeDocClickEvent = addEventListener__default["default"](
                      document.documentElement,
                      'click',
                      this.onDocumentClick,
                  ).remove;
              }
          },
          deactiveFn() {
              this.active = false;
              if (this.removeDocClickEvent) {
                  this.removeDocClickEvent();
                  this.removeDocClickEvent = '';
              }
          }
      }
  });

  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: _ctx.menubarItemClass,
      ref: "menubarItem"
    }, [
      vue.createVNode("div", {
        class: _ctx.menubarItemTextClass,
        ref: "menubarItemText"
      }, vue.toDisplayString(_ctx.text), 3 /* TEXT, CLASS */),
      vue.createVNode("div", { class: _ctx.popupClassName }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script$8.render = render$8;
  script$8.__file = "components/x6-menubar/MenubarItem.vue";

  var X6Menubar = withInstall(script$9, {
    MenubarItem: script$8
  });
  var X6MenubarItem = withNoopInstall(script$8);

  var script$7 = {
      name: 'overlay-scrollbars',
      props: {
          options: {
              type: Object,
              default() {
                  return {}
              }
          },
          extensions: {
              type: [String, Array, Object],
              default() {
                  return {}
              }
          }
      },
      setup(props) {
          let { options } = vue.toRefs(props);
          let osInstance = vue.ref(null);
          vue.watchEffect(options.value, (currOptions, oldOptions) => {
              let osInstanceCur = osInstance.value;
              if (osInstanceCur && OverlayScrollbars__default["default"].valid(osInstanceCur)) {
                  osInstanceCur.options(currOptions);
              }
          });
          return {
              osInstance
          }
      },
      mounted() {
          this.osInstance = OverlayScrollbars__default["default"](
              this.osTarget(),
              this.options || {},
              this.extensions
          );
      },
      beforeUnmount() {
          const osInstance = this.osInstance;
          if (OverlayScrollbars__default["default"].valid(osInstance)) {
              osInstance.destroy();
              this.osInstance = null;
          }
      },
      methods: {
          osTarget() {
              return this.$el
          }
      }
  };

  const _hoisted_1 = { class: "os-host" };
  const _hoisted_2 = /*#__PURE__*/vue.createVNode("div", { class: "os-resize-observer-host" }, null, -1 /* HOISTED */);
  const _hoisted_3 = { class: "os-padding" };
  const _hoisted_4 = { class: "os-viewport" };
  const _hoisted_5 = { class: "os-content" };
  const _hoisted_6 = /*#__PURE__*/vue.createStaticVNode("<div class=\"os-scrollbar os-scrollbar-horizontal \"><div class=\"os-scrollbar-track\"><div class=\"os-scrollbar-handle\"></div></div></div><div class=\"os-scrollbar os-scrollbar-vertical\"><div class=\"os-scrollbar-track\"><div class=\"os-scrollbar-handle\"></div></div></div><div class=\"os-scrollbar-corner\"></div>", 3);

  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      _hoisted_2,
      vue.createVNode("div", _hoisted_3, [
        vue.createVNode("div", _hoisted_4, [
          vue.createVNode("div", _hoisted_5, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ])
      ]),
      _hoisted_6
    ]))
  }

  script$7.render = render$7;
  script$7.__file = "components/overlayscrollbars-vue3/OverlayScrollbarsComponent.vue";

  var script$6 = vue.defineComponent({
      name: 'Scrollbox',
      components: {
          OverlayScrollbars: script$7
      },
      props: {
          className: {
              type: String,
              default: 'os-theme-dark'
          },
          resize: {
              type: String,
              default: 'none',
              validator(value) {
                  return ['none', 'both', 'horizontal', 'vertical'].includes(value)
              }
          },
          sizeAutoCapable: {
              type: Boolean,
              default: true
          },
          clipAlways: {
              type: Boolean,
              default: true
          },
          normalizeRTL: {
              type: Boolean,
              default: true
          },
          paddingAbsolute: {
              type: Boolean,
              default: false
          },
          overflowBehaviorX: {
              type: String,
              default: 'scroll',
              validator(value) {
                  return ['hidden', 'scroll', 'visible-hidden', 'visible-scroll'].includes(value)
              }
          },
          overflowBehaviorY: {
              type: String,
              default: 'scroll',
              validator(value) {
                  return ['hidden', 'scroll', 'visible-hidden', 'visible-scroll'].includes(value)
              }
          },
          scrollbarsVisibility: {
              type: String,
              default: 'auto',
              validator(value) {
                  return ['visible', 'hidden', 'auto'].includes(value)
              }
          },
          scrollbarsAutoHide: {
              type: String,
              default: 'never',
              validator(value) {
                  return ['never', 'scroll', 'leave', 'move'].includes(value)
              }
          },
          scrollbarsAutoHideDelay: {
              type: Number,
              default: 800
          },
          initializedCb: {
              type: Function,
              default() {
                  return () => {}
              }
          },
          destroyedCb: {
              type: Function,
              default() {
                  return () => {}
              }
          },
          scrollStartCb: {
              type: Function,
              default() {
                  return (eventArgs) => {}
              }
          },
          scrollCb: {
              type: Function,
              default() {
                  return (eventArgs) => {}
              }
          },
          scrollStopCb: {
              type: Function,
              default() {
                  return (eventArgs) => {}
              }
          }
      },
      setup(props) {
          let { className, resize, sizeAutoCapable, clipAlways
          , normalizeRTL, paddingAbsolute, overflowBehaviorX
          , overflowBehaviorY, scrollbarsVisibility, scrollbarsAutoHide
          , scrollbarsAutoHideDelay, initializedCb, destroyedCb
          , scrollStartCb, scrollCb, scrollStopCb } = vue.toRefs(props);
          let overlayScrollbarsOptions = vue.reactive({
              className: className.value,
              resize: resize.value,
              sizeAutoCapable: sizeAutoCapable.value,
              clipAlways: clipAlways.value,
              normalizeRTL: normalizeRTL.value,
              paddingAbsolute: paddingAbsolute.value,
              autoUpdate: null,
              autoUpdateInterval: 33, 
              updateOnLoad: ["img"],
              nativeScrollbarsOverlaid: {
                  showNativeScrollbars: false,
                  initialize: true 
              },
              overflowBehavior: {
                  x: overflowBehaviorX.value,
                  y: overflowBehaviorY.value
              },
              scrollbars: {
                  visibility: scrollbarsVisibility.value,
                  autoHide: scrollbarsAutoHide.value,
                  autoHideDelay: scrollbarsAutoHideDelay.value,
                  dragScrolling: true,
                  clickScrolling: false,
                  touchSupport: true,
                  snapHandle: false
              },
              textarea: {
                  dynWidth: false,
                  dynHeight: false,
                  inheritedAttrs: ["style", "class"]
              },
              callbacks: {
                  onInitialized: initializedCb.value,
                  onInitializationWithdrawn: null,
                  onDestroyed: destroyedCb.value,
                  onScrollStart: scrollStartCb.value,
                  onScroll: scrollCb.value,
                  onScrollStop: scrollStopCb.value,
                  onOverflowChanged: null,
                  onOverflowAmountChanged: null,
                  onDirectionChanged: null,
                  onContentSizeChanged: null,
                  onHostSizeChanged: null,
                  onUpdated: null
              }
          });
          return {
              overlayScrollbarsOptions
          }
      }

  });

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_OverlayScrollbars = vue.resolveComponent("OverlayScrollbars");

    return (vue.openBlock(), vue.createBlock(_component_OverlayScrollbars, { options: _ctx.overlayScrollbarsOptions }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8 /* PROPS */, ["options"]))
  }

  script$6.render = render$6;
  script$6.__file = "components/x6-scrollbox/Scrollbox.vue";

  var X6Scrollbox = withInstall(script$6);

  var script$5 = vue.defineComponent({
      name: 'Box',
      props: {
          styleProperties: {
              type: Object,
              default() {
                  return {}
              }
          },
          currentSize: {
              type: [String, Number]
          },
          oppositeSize: {
              type: [String, Number]
          },
          indexProperties: {
              type: Number,
              default: 1 // 1 | 2
          },
          vertical: {
              type: Boolean,
              default: false
          },
          isPrimary: {
              type: Boolean,
              default: false
          }
      },
      setup(props) {
          let { styleProperties, indexProperties, currentSize, oppositeSize, vertical } = vue.toRefs(props);
          let styleData = vue.reactive({
              ...styleProperties.value,
              overflow: 'hidden',
              position: 'absolute',
              zIndex: 1
          });
          if (vertical.value) {
              styleData.bottom = 0;
              styleData.top = 0;
          } else {
              styleData.left = 0;
              styleData.right = 0;
          }
          if (currentSize.value != null) {
              if (vertical.value) {
                  styleData.width = currentSize.value;
                  if (indexProperties.value === 1) {
                      styleData.left = 0;
                  } else {
                      styleData.right = 0;
                  }
              } else {
                  styleData.height = currentSize.value;
                  if (indexProperties.value === 1) {
                      styleData.top = 0;
                  } else {
                      styleData.bottom = 0;
                  }
              }
          } else if (vertical.value) {
              if (indexProperties.value === 1) {
                  styleData.left = 0;
                  styleData.right = oppositeSize.value;
              } else {
                  styleData.left = oppositeSize.value;
                  styleData.right = 0;
              }
          } else if (indexProperties.value === 1) {
              styleData.top = 0;
              styleData.bottom = oppositeSize.value;
          } else {
              styleData.top = oppositeSize.value;
              styleData.bottom = 0;
          }
          return {
              styleData
          }
      }
  });

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { style: _ctx.styleData }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 4 /* STYLE */))
  }

  script$5.render = render$5;
  script$5.__file = "components/x6-split-box/Box.vue";

  var animationFrameTime = 0;
  var nativeRequestAnimationFrame = globalThis.requestAnimationFrame || globalThis.webkitRequestAnimationFrame;
  var cancelAnimationFrame = (globalThis.cancelAnimationFrame || globalThis.webkitCancelAnimationFrame || globalThis.clearTimeout).bind(globalThis);
  var requestAnimationFrame = nativeRequestAnimationFrame ? nativeRequestAnimationFrame.bind(globalThis) : function (callback) {
    var currTime = Date.now();
    var timeDelay = Math.max(0, 16 - (currTime - animationFrameTime));
    animationFrameTime = currTime + timeDelay;
    return globalThis.setTimeout(function () {
      callback(Date.now());
    }, timeDelay);
  };

  var MouseMoveTracker = /*#__PURE__*/function () {
    function MouseMoveTracker(options) {
      var _this = this;

      _classCallCheck(this, MouseMoveTracker);

      _defineProperty(this, "elem", null);

      _defineProperty(this, "clientX", 0);

      _defineProperty(this, "clientY", 0);

      _defineProperty(this, "deltaX", 0);

      _defineProperty(this, "deltaY", 0);

      _defineProperty(this, "dragging", false);

      _defineProperty(this, "captured", false);

      _defineProperty(this, "animationFrameID", null);

      _defineProperty(this, "removeMouseMoveEvent", function () {});

      _defineProperty(this, "removeMouseUpEvent", function () {});

      _defineProperty(this, "onMouseMoveCallback", function (deltaX, deltaY, pos) {});

      _defineProperty(this, "onMouseMoveEndCallback", function () {
      });

      _defineProperty(this, "onMouseMove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        _this.deltaX += x - _this.clientX;
        _this.deltaY += y - _this.clientY;

        if (_this.animationFrameID == null) {
          _this.animationFrameID = requestAnimationFrame(_this.triggerOnMouseMoveCallback);
        }

        _this.clientX = x;
        _this.clientY = y;
        e.preventDefault();
      });

      _defineProperty(this, "onMouseUp", function () {
        if (_this.animationFrameID) {
          cancelAnimationFrame(_this.animationFrameID);

          _this.triggerOnMouseMoveCallback();
        }

        _this.triggerOnMouseMoveEndCallback(false);
      });

      _defineProperty(this, "triggerOnMouseMoveCallback", function () {
        _this.animationFrameID = null;

        _this.onMouseMoveCallback(_this.deltaX, _this.deltaY, {
          clientX: _this.clientX,
          clientY: _this.clientY
        });

        _this.deltaX = 0;
        _this.deltaY = 0;
      });

      _defineProperty(this, "triggerOnMouseMoveEndCallback", function () {
        var cancel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _this.onMouseMoveEndCallback(cancel);
      });

      this.elem = options.elem || document.documentElement;
      this.onMouseMoveCallback = options.onMouseMove;
      this.onMouseMoveEndCallback = options.onMouseMoveEnd;
      this.animationFrameID = null;
    }

    _createClass(MouseMoveTracker, [{
      key: "capture",
      value: function capture(e) {
        if (!this.captured) {
          this.removeMouseMoveEvent = addEventListener__default["default"](this.elem, 'mousemove', this.onMouseMove).remove;
          this.removeMouseUpEvent = addEventListener__default["default"](this.elem, 'mouseup', this.onMouseUp).remove;
        }

        this.captured = true;

        if (!this.dragging) {
          this.clientX = e.clientX;
          this.clientY = e.clientY;
          this.deltaX = 0;
          this.deltaY = 0;
          this.dragging = true;
        }

        e.preventDefault();
      }
    }, {
      key: "release",
      value: function release() {
        if (this.captured) {
          if (this.removeMouseMoveEvent != null) {
            this.removeMouseMoveEvent();
            this.removeMouseMoveEvent = null;
          }

          if (this.removeMouseUpEvent != null) {
            this.removeMouseUpEvent();
            this.removeMouseUpEvent = null;
          }
        }

        this.captured = false;

        if (this.dragging) {
          this.dragging = false;
          this.clientX = 0;
          this.clientY = 0;
          this.deltaX = 0;
          this.deltaY = 0;
        }
      }
    }, {
      key: "isDragging",
      value: function isDragging() {
        return this.dragging;
      }
    }]);

    return MouseMoveTracker;
  }();

  var script$4 = vue.defineComponent({
      name: 'Resizer',
      props: {
          styleProperties: {
              type: Object,
              default() {
                  return {}
              }
          },
          click: {
              type: Function,
              default() {
                  return (e) => {}
              }
          },
          doubleClick: {
              type: Function,
              default() {
                  return (e) => {}
              }
          },
          mouseDown: {
              type: Function,
              default() {
                  return (e) => {}
              }
          },
          mouseMove: {
              type: Function,
              default() {
                  return (deltaX, deltaY, pos) => {}
              }
          },
          mouseMoveEnd: {
              type: Function,
              default() {
                  return () => {}
              }
          }
      },
      setup() {
          let mouseMoveTracker = vue.ref('');
          return {
              mouseMoveTracker
          }
      },
      mounted() {
          this.mouseMoveTracker = new MouseMoveTracker({
              onMouseMove: this.onMouseMove,
              onMouseMoveEnd: this.onMouseMoveEnd,
          });
          addEventListener__default["default"](this.$refs.resizer, 'click', this.onClick);
          addEventListener__default["default"](this.$refs.resizer, 'mousedown', this.onMouseDown);
          addEventListener__default["default"](this.$refs.resizer, 'doubleclick', this.onDoubleClick);
      },
      beforeUnmount() {
          this.mouseMoveTracker.release();
      },
      methods: {
          onMouseDown(e) {
              this.mouseMoveTracker.capture(e);
              this.mouseDown(e);
          },
          onMouseMove(deltaX = 0, deltaY = 0, pos) {
              if (this.mouseMove != null) {
                  this.mouseMove(deltaX, deltaY, pos);
              }
          },
          onMouseMoveEnd() {
              this.mouseMoveTracker.release();
              if (this.mouseMoveEnd != null) {
                  this.mouseMoveEnd();
              }
          },
          onClick(e) {
              if (this.click) {
                  this.click(e);
              }
          },
          onDoubleClick(e) {
              if (this.doubleClick) {
                  this.doubleClick(e);
              }
          }
      }
  });

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      role: "button",
      style: _ctx.styleProperties,
      ref: "resizer"
    }, null, 4 /* STYLE */))
  }

  script$4.render = render$4;
  script$4.__file = "components/x6-split-box/Resizer.vue";

  var script$3 = vue.defineComponent({
      name: 'SplitBox',
      components: {
          Box: script$5,
          Resizer: script$4
      },
      props: {
          split: {
              type: String,
              default: 'vertical',
              validator(value) {
                  return ['vertical', 'horizontal'].includes(value)
              }
          },
          primary: {
              type: String,
              default: 'first',
              validator(value) {
                  return ['first', 'second'].includes(value)
              }
          },
          resizable: {
              type: Boolean,
              default: true
          },
          refresh: {
              type: Boolean,
              default: false
          },
          size: {
              type: [Number, String]
          },
          minSize: {
              type: Number
          },
          maxSize: {
              type: Number
          },
          defaultSize: {
              type: [Number, String],
              default: '25%'
          },
          step: {
              type: Number
          },
          styleProperties: {
              type: Object,
              default() {
                  return {}
              }
          },
          boxStyle: {
              type: Object,
              default() {
                  return {}
              }
          },
          primaryBoxStyle: {
              type: Object,
              default() {
                  return {}
              }
          },
          secondBoxStyle: {
              type: Object,
              default() {
                  return {}
              }
          },
          resizerStyle: {
              type: Object,
              default() {
                  return {}
              }
          },
          onResizeStart: {
              type: Function,
              default() {
                  return () => {}
              }
          },
          onResizeEnd: {
              type: Function,
              default() {
                  return (newSize = 0) => {}
              }
          },
          onResizing: {
              type: Function,
              default() {
                  return (newSize = 0) => {}
              }
          },
          onResizerClick: {
              type: Function,
              default() {
                  return () => {}
              }
          },
          onResizerDoubleClick: {
              type: Function,
              default() {
                  return () => {}
              }
          }
      },
      setup(props) {
          let { styleProperties, boxStyle, primaryBoxStyle, secondBoxStyle, resizerStyle, size, defaultSize, primary, split, resizable } = vue.toRefs(props);
          let prefixCls = vue.ref('x6');
          let baseCls = vue.ref(`${prefixCls.value}-split-box`);
          let getNextState = vue.computed(() => {
              let initialSize =
              size.value != null ? size.value : defaultSize.value != null ? defaultSize.value : '25%';
              if (typeof initialSize === 'number' && !isNaN(initialSize)) {
                  initialSize = initialSize + 'px';
              }
              return {
                  box1Size: primary.value === 'first' ? initialSize : undefined,
                  box2Size: primary.value === 'second' ? initialSize : undefined,
              }
          });

          let isVertical = vue.computed(() => {
              return split.value === 'vertical'
          });

          let isPrimaryFirst = vue.computed(() => {
              return primary.value === 'first'
          });

          let minSizeUp = vue.ref('');
          let maxSizeUp = vue.ref('');
          let curSize = vue.ref('');
          let rawSize = vue.ref('');
          let resizing = vue.ref(false);
          let box1Size = vue.ref(getNextState.value.box1Size);
          let box2Size = vue.ref(getNextState.value.box2Size);

          let container = vue.ref(null);
          let box1Elem = vue.ref(null);
          let box2Elem = vue.ref(null);
          let maskElem = vue.ref(null);
          let resizerElem = vue.ref(null);

          let splitBoxStyleData = vue.reactive({
              ...styleProperties.value,
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              height: '100%'
          });

          let splitBoxClassName = vue.computed(() => {
              return `${baseCls.value} 
            ${baseCls.value}-${split.value} 
            ${!resizable.value ? baseCls.value + '-disabled' : ''}
             `
          });

          const isBox1Primary = vue.ref(primary.value === 'first');
          let box1StyleData = vue.reactive({
              ...boxStyle.value,
              ...(isBox1Primary.value ? primaryBoxStyle.value : secondBoxStyle.value)
          });
          let box1ClassName = vue.computed(() => {
              return `${baseCls.value}-item 
            ${isBox1Primary.value ? baseCls.value + '-item-primary' : baseCls.value + '-item-second'}
             `
          });
          const isBox2Primary = vue.ref(primary.value === 'second');
          let box2StyleData = vue.reactive({
              ...boxStyle.value,
              ...(isBox2Primary.value ? primaryBoxStyle.value : secondBoxStyle.value)
          });
          let box2ClassName = vue.computed(() => {
              return `${baseCls.value}-item 
            ${isBox2Primary.value ? baseCls.value + '-item-primary' : baseCls.value + '-item-second'}
             `
          });
          let resizerStyleData = {
              ...resizerStyle.value,
              position: 'absolute',
              zIndex: 2
          };
          if (isVertical.value) {
              resizerStyleData.top = 0;
              resizerStyleData.bottom = 0;

              if (resizable.value === true) {
                  resizerStyleData.cursor = 'col-resize';
              }

              if (isPrimaryFirst.value) {
                  resizerStyleData.left = box1Size.value;
              } else {
                  resizerStyleData.right = box2Size.value;
              }
          } else {
              resizerStyleData.left = 0;
              resizerStyleData.right = 0;

              if (resizable.value === true) {
                  resizerStyleData.cursor = 'row-resize';
              }

              if (isPrimaryFirst.value) {
                  resizerStyleData.top = box1Size.value;
              } else {
                  resizerStyleData.bottom = box2Size.value;
              }
          }
          resizerStyleData = vue.reactive(resizerStyleData);

          return {
              prefixCls,
              baseCls,
              getNextState,
              isVertical,
              isPrimaryFirst,
              minSizeUp,
              maxSizeUp,
              curSize,
              rawSize,
              resizing,
              box1Size,
              box2Size,
              container,
              box1Elem,
              box2Elem,
              maskElem,
              resizerElem,
              splitBoxStyleData,
              splitBoxClassName,
              isBox1Primary,
              box1StyleData,
              box1ClassName,
              isBox2Primary,
              box2StyleData,
              box2ClassName,
              resizerStyleData
          }
      },
      methods: {
          getDelta(deltaX = 0, deltaY = 0) {
              let step = this.step;
              let isVertical = this.isVertical;
              let isPrimaryFirst = this.isPrimaryFirst;

              let delta = isVertical ? deltaX : deltaY;
              if (delta === 0) {
                  return 0
              }

              if (step && Math.abs(delta) >= step) {
                  // ~~???????????????
                  delta = ~~(delta / step) * step;
              }

              delta = isPrimaryFirst ? -delta : delta;

              let primaryBox = isPrimaryFirst ? this.box1Elem.$el : this.box2Elem.$el;
              let secondBox = isPrimaryFirst ? this.box2Elem.$el : this.box1Elem.$el;
              let box1Order = parseInt(globalThis.getComputedStyle(primaryBox).order, 10);
              let box2Order = parseInt(globalThis.getComputedStyle(secondBox).order, 10);
              if (box1Order > box2Order) {
                  delta = -delta;
              }

              return delta
          },
          getRange() {
              let maxSize = this.maxSize;
              let minSize = this.minSize;

              let containerRect = this.container.getBoundingClientRect();
              let containerSize = this.isVertical
              ? containerRect.width
              : containerRect.height;

              let newMinSize = minSize !== undefined ? minSize : 0;
              let newMaxSize = maxSize !== undefined ? maxSize : 0;

              while (newMinSize < 0) {
                  newMinSize = containerSize + newMinSize;
              }

              while (newMaxSize <= 0) {
                  newMaxSize = containerSize + newMaxSize;
              }

              return {
                  minSize: clamp__default["default"](newMinSize, 0, containerSize),
                  maxSize: clamp__default["default"](newMaxSize, 0, containerSize)
              }
          },
          getPrimarySize() {
              let primaryBox = this.isPrimaryFirst ? this.box1Elem.$el : this.box2Elem.$el;
              return this.isVertical
              ? primaryBox.getBoundingClientRect().width
              : primaryBox.getBoundingClientRect().height
          },
          setPrimarySize(size) {
              let isFirstPrimary = this.isPrimaryFirst;
              let primaryBox = isFirstPrimary ? this.box1Elem.$el : this.box2Elem.$el;
              let secondBox = isFirstPrimary ? this.box2Elem.$el : this.box1Elem.$el;
              let resizerElem = this.resizerElem.$el;

              const value = `${size}px`;
              if (this.isVertical) {
                  primaryBox.style.width = value;
                  if (isFirstPrimary) {
                      secondBox.style.left = value;
                      resizerElem.style.left = value;
                  } else {
                      secondBox.style.right = value;
                      resizerElem.style.right = value;
                  }
              } else {
                  primaryBox.style.height = value;
                  if (isFirstPrimary) {
                      secondBox.style.top = value;
                      resizerElem.style.top = value;
                  } else {
                      secondBox.style.bottom = value;
                      resizerElem.style.bottom = value;
                  }
              }
          },
          updateCursor(size, minSize, maxSize) {
              let cursor = '';
              if (this.isVertical) {
                  if (size === minSize) {
                      cursor = this.isPrimaryFirst ? 'e-resize' : 'w-resize';
                  } else if (size === maxSize) {
                      cursor = this.isPrimaryFirst ? 'w-resize' : 'e-resize';
                  } else {
                      cursor = 'col-resize';
                  }
              } else if (size === minSize) {
                  cursor = this.isPrimaryFirst ? 's-resize' : 'n-resize';
              } else if (size === maxSize) {
                  cursor = this.isPrimaryFirst ? 'n-resize' : 's-resize';
              } else {
                  cursor = 'row-resize';
              }

              this.maskElem.style.cursor = cursor;
          },
          createMask() {
              const mask = document.createElement('div');
              mask.style.position = 'absolute';
              mask.style.top = '0';
              mask.style.right = '0';
              mask.style.bottom = '0';
              mask.style.left = '0';
              mask.style.zIndex = '9999';
              document.body.appendChild(mask);
              this.maskElem = mask;
          },
          removeMask() {
              if (this.maskElem.parentNode) {
                  this.maskElem.parentNode.removeChild(this.maskElem);
              }
          },
          onMouseDown() {
              const { maxSize, minSize } = this.getRange();
              this.minSizeUp = minSize;
              this.maxSizeUp = maxSize;
              this.curSize = this.getPrimarySize();
              this.rawSize = this.curSize;
              this.resizing = true;

              this.createMask();
              this.updateCursor(this.curSize, minSize, maxSize);
          },
          onMouseMove(deltaX, deltaY) {
              if (this.resizable && this.resizing) {
                  const delta = this.getDelta(deltaX, deltaY);
                  if (delta === 0) {
                      return
                  }

                  if (this.rawSize < this.minSizeUp || this.rawSize > this.maxSizeUp) {
                      this.rawSize -= delta;
                      return
                  }

                  this.rawSize -= delta;
                  this.curSize = this.rawSize;
                  this.curSize = clamp__default["default"](this.curSize, this.minSizeUp, this.maxSizeUp);

                  this.setPrimarySize(this.curSize);
                  this.updateCursor(this.curSize, this.minSizeUp, this.maxSizeUp);
                  if (this.onResizing) {
                      this.onResizing(this.curSize);
                  }
              }
          },
          onMouseMoveEnd() {
              if (this.resizable && this.resizing) {
                  if (this.onResizeEnd) {
                      this.onResizeEnd(this.curSize);
                  }

                  if (this.refresh) {
                      const isPrimaryFirst = this.isPrimaryFirst;
                      this.box1Size = isPrimaryFirst ? this.curSize : undefined;
                      this.box2Size = isPrimaryFirst ? undefined : this.curSize;
                  }

                  this.resizing = false;
                  this.removeMask();
              }
          }

      }
  });

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Box = vue.resolveComponent("Box");
    const _component_Resizer = vue.resolveComponent("Resizer");

    return (vue.openBlock(), vue.createBlock("div", {
      style: _ctx.splitBoxStyleData,
      class: _ctx.splitBoxClassName,
      ref: "container"
    }, [
      vue.createVNode(_component_Box, {
        key: "box1",
        ref: "box1Elem",
        styleProperties: _ctx.box1StyleData,
        indexProperties: 1,
        class: _ctx.box1ClassName,
        currentSize: _ctx.box1Size,
        oppositeSize: _ctx.box2Size,
        vertical: _ctx.isVertical,
        isPrimary: _ctx.isBox1Primary
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "first")
        ]),
        _: 3
      }, 8 /* PROPS */, ["styleProperties", "class", "currentSize", "oppositeSize", "vertical", "isPrimary"]),
      vue.createVNode(_component_Resizer, {
        key: "resizer",
        styleProperties: _ctx.resizerStyleData,
        class: `${_ctx.baseCls}-resizer`,
        ref: "resizerElem",
        click: _ctx.onResizerClick,
        mouseDown: _ctx.onMouseDown,
        mouseMove: _ctx.onMouseMove,
        mouseMoveEnd: _ctx.onMouseMoveEnd,
        doubleClick: _ctx.onResizerDoubleClick
      }, null, 8 /* PROPS */, ["styleProperties", "class", "click", "mouseDown", "mouseMove", "mouseMoveEnd", "doubleClick"]),
      vue.createVNode(_component_Box, {
        key: "box2",
        ref: "box2Elem",
        styleProperties: _ctx.box2StyleData,
        indexProperties: 2,
        class: _ctx.box2ClassName,
        currentSize: _ctx.box2Size,
        oppositeSize: _ctx.box1Size,
        vertical: _ctx.isVertical,
        isPrimary: _ctx.isBox2Primary
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "second")
        ]),
        _: 3
      }, 8 /* PROPS */, ["styleProperties", "class", "currentSize", "oppositeSize", "vertical", "isPrimary"])
    ], 6 /* CLASS, STYLE */))
  }

  script$3.render = render$3;
  script$3.__file = "components/x6-split-box/SplitBox.vue";

  var X6SplitBox = withInstall(script$3);

  var script$2 = vue.defineComponent({
      name: 'Toolbar',
      props: {
          className: {
              type: String,
              default: ''
          },
          size: {
              type: String,
              default: 'big'
          },
          hoverEffect: {
              type: Boolean,
              default: false
          },
          align: {
              type: String,
              default: 'left'
          },
          onClick: {
              type: Function,
              default() {
                  return (name, value) => {}
              }
          }
      },
      setup(props, context) {
          let { className, size, hoverEffect, align, onClick } = vue.toRefs(props);
          let prefixCls = vue.ref('x6');
          let baseCls = vue.ref(`${prefixCls.value}-toolbar`);
          let toolbarContext = vue.reactive({
              baseCls: baseCls.value,
              click: onClick.value
          });
          vue.provide('toolbarContext', toolbarContext);
          let toolbarClassName = vue.computed(() => {
              return `${baseCls.value} ${className.value} 
            ${baseCls.value}-${size.value} 
            ${align.value === 'right' ? baseCls.value + '-align-right' : ''} 
            ${hoverEffect.value ? baseCls.value + '-hover-effect' : ''}
             `
          });
          let slotExtra = vue.ref(!!context.slots.extra);
          return {
              slotExtra,
              prefixCls,
              baseCls,
              toolbarClassName
          }
      }
  });

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.toolbarClassName }, [
      vue.createVNode("div", {
        class: `${_ctx.baseCls}-content`
      }, [
        vue.createVNode("div", {
          class: `${_ctx.baseCls}-content-inner`
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2 /* CLASS */),
        (_ctx.slotExtra)
          ? (vue.openBlock(), vue.createBlock("div", {
              key: 0,
              class: `${_ctx.baseCls}-content-extras`
            }, [
              vue.renderSlot(_ctx.$slots, "extra")
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script$2.render = render$2;
  script$2.__file = "components/x6-toolbar/Toolbar.vue";

  var script$1 = vue.defineComponent({
      name: 'Group',
      props: {
          className: {
              type: String,
              default: ''
          }
      },
      setup(props) {
          let { className } = vue.toRefs(props);
          let toolbarContext = vue.inject('toolbarContext');
          let groupClassName = vue.computed(() => {
              return `${toolbarContext.baseCls}-group ${className.value}`
          });
          return {
              groupClassName
          }
      }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", { class: _ctx.groupClassName }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */))
  }

  script$1.render = render$1;
  script$1.__file = "components/x6-toolbar/Group.vue";

  var script = vue.defineComponent({
      name: 'Item',
      components: {
          Dropdown: script$f,
          Tooltip: script$g
      },
      props: {
          className: {
              type: String,
              default: ''
          },
          icon: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: ''
          },
          text: {
              type: String,
              default: ''
          },
          hidden: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          active: {
              type: Boolean,
              default: false
          },
          tooltip: {
              type: String,
              default: ''
          },
          tooltipProps: {
              type: Object,
              default() {
                  return {}
              }
          },
          tooltipAsTitle: {
              type: Boolean,
              default: false
          },
          dropdownArrow: {
              type: Boolean,
              default: false
          },
          dropdownProps: {
              type: Object,
              default() {
                  return {}
              }
          },
          onClick: {
              type: Function,
              default() {
                  return (name, value) => {}
              }
          }
      },
      setup(props, context) {
          let slotDefault = vue.ref(!!context.slots.default);
          let slotIcon = vue.ref(!!context.slots.icon);
          let slotDropdown = vue.ref(!!context.slots.dropdown);
          let toolbarContext = vue.inject('toolbarContext');
          let toolbarContextClick = toolbarContext.click;
          let baseCls = toolbarContext.baseCls;
          baseCls = `${baseCls}-item`;
          let { hidden, active, disabled, className, tooltip, tooltipAsTitle } = vue.toRefs(props);
          
          let buttonProps = vue.computed(() => {
              let buttonProps = {
                  class: `${baseCls} 
                ${hidden.value ? `${baseCls}-hidden` : ''} 
                ${active.value ? `${baseCls}-active` : ''} 
                ${disabled.value ? `${baseCls}-disabled` : ''} 
                ${slotDropdown.value ? `${baseCls}-dropdown` : ''} 
                ${className.value}
                `
              };
              if (tooltip.value && tooltipAsTitle.value) {
                  buttonProps.title = tooltip.value;
              }
              return buttonProps
          });
          return {
              slotDefault,
              slotIcon,
              slotDropdown,
              toolbarContextClick,
              baseCls,
              buttonProps
          }
      },
      methods: {
          handleClick() {
              this.processClick();
          },
          handleDropdownItemClick(name) {
              this.processClick(name, false);
          },
          processClick(name = this.name, dropdown = this.slotDropdown) {
              if (!this.disabled && !dropdown) {
                  if (name) {
                      this.toolbarContextClick(name);
                  }

                  if (this.onClick) {
                      this.onClick(name);
                  }
              }
          }
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Tooltip = vue.resolveComponent("Tooltip");
    const _component_Dropdown = vue.resolveComponent("Dropdown");

    return (_ctx.slotDropdown)
      ? vue.createVNode(_component_Dropdown, vue.mergeProps({ key: 0 }, _ctx.buttonProps, { tAppendTo: "parent" }), {
          visible: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "dropdown", { onClick: _ctx.handleDropdownItemClick })
          ]),
          default: vue.withCtx(() => [
            vue.createVNode("button", {
              type: "button",
              class: `${_ctx.baseCls}-button`,
              onClick: _ctx.handleClick
            }, [
              (_ctx.icon && !_ctx.slotIcon)
                ? (vue.openBlock(), vue.createBlock("span", {
                    key: 0,
                    class: `${_ctx.baseCls}-icon ${_ctx.icon}`
                  }, null, 2 /* CLASS */))
                : vue.createCommentVNode("v-if", true),
              (_ctx.slotIcon)
                ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
                : vue.createCommentVNode("v-if", true),
              (_ctx.text && !_ctx.slotDefault)
                ? (vue.openBlock(), vue.createBlock("span", {
                    key: 2,
                    class: `${_ctx.baseCls}-text`
                  }, vue.toDisplayString(_ctx.text), 3 /* TEXT, CLASS */))
                : vue.createCommentVNode("v-if", true),
              (_ctx.slotDefault)
                ? (vue.openBlock(), vue.createBlock("span", {
                    key: 3,
                    class: `${_ctx.baseCls}-text`
                  }, [
                    vue.renderSlot(_ctx.$slots, "default")
                  ], 2 /* CLASS */))
                : vue.createCommentVNode("v-if", true),
              (_ctx.dropdownArrow)
                ? (vue.openBlock(), vue.createBlock("span", {
                    key: 4,
                    class: `${_ctx.baseCls}-dropdown-arrow`
                  }, null, 2 /* CLASS */))
                : vue.createCommentVNode("v-if", true)
            ], 10 /* CLASS, PROPS */, ["onClick"]),
            (_ctx.tooltip && !_ctx.tooltipAsTitle && !_ctx.disabled)
              ? vue.createVNode(_component_Tooltip, {
                  key: 0,
                  placement: "top"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(_ctx.tooltip), 1 /* TEXT */)
                  ]),
                  _: 1
                })
              : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
        }, 16 /* FULL_PROPS */)
      : (vue.openBlock(), vue.createBlock("div", vue.mergeProps({ key: 1 }, _ctx.buttonProps), [
          vue.createVNode("button", {
            type: "button",
            class: `${_ctx.baseCls}-button`,
            onClick: _ctx.handleClick
          }, [
            (_ctx.icon && !_ctx.slotIcon)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 0,
                  class: `${_ctx.baseCls}-icon ${_ctx.icon}`
                }, null, 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.slotIcon)
              ? vue.renderSlot(_ctx.$slots, "icon", { key: 1 })
              : vue.createCommentVNode("v-if", true),
            (_ctx.text && !_ctx.slotDefault)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 2,
                  class: `${_ctx.baseCls}-text`
                }, vue.toDisplayString(_ctx.text), 3 /* TEXT, CLASS */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.slotDefault)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 3,
                  class: `${_ctx.baseCls}-text`
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            (_ctx.dropdownArrow)
              ? (vue.openBlock(), vue.createBlock("span", {
                  key: 4,
                  class: `${_ctx.baseCls}-dropdown-arrow`
                }, null, 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true)
          ], 10 /* CLASS, PROPS */, ["onClick"]),
          (_ctx.tooltip && !_ctx.tooltipAsTitle && !_ctx.disabled)
            ? vue.createVNode(_component_Tooltip, {
                key: 0,
                placement: "bottom"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.tooltip), 1 /* TEXT */)
                ]),
                _: 1
              })
            : vue.createCommentVNode("v-if", true)
        ], 16 /* FULL_PROPS */))
  }

  script.render = render;
  script.__file = "components/x6-toolbar/Item.vue";

  var X6Toolbar = withInstall(script$2, {
    Group: script$1,
    Item: script
  });
  var X6Group = withNoopInstall(script$1);
  var X6Item = withNoopInstall(script);

  var X6Tooltip = withInstall(script$g);

  var components = [X6ColorPicker, X6ContextMenu, X6Dropdown, X6Menu, X6SubMenu, X6MenuItem, X6Divider, X6Menubar, X6MenubarItem, X6Scrollbox, X6SplitBox, X6Toolbar, X6Group, X6Item, X6Tooltip]; // const version = path.resolve('../package.json').version

  var install = function install(app) {
    components.forEach(function (component) {
      app.component("X6".concat(component.name), component);
    });
  };

  var _default = {
    // version,
    install: install
  };

  exports.X6ColorPicker = X6ColorPicker;
  exports.X6ContextMenu = X6ContextMenu;
  exports.X6Divider = X6Divider;
  exports.X6Dropdown = X6Dropdown;
  exports.X6Group = X6Group;
  exports.X6Item = X6Item;
  exports.X6Menu = X6Menu;
  exports.X6MenuItem = X6MenuItem;
  exports.X6Menubar = X6Menubar;
  exports.X6MenubarItem = X6MenubarItem;
  exports.X6Scrollbox = X6Scrollbox;
  exports.X6SplitBox = X6SplitBox;
  exports.X6SubMenu = X6SubMenu;
  exports.X6Toolbar = X6Toolbar;
  exports.X6Tooltip = X6Tooltip;
  exports["default"] = _default;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=x6-vue3-components.js.map
