'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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

var script = vue.defineComponent({
    name: 'ColorPicker',
    props: {
        /* 绑定的色值 */
        color: {
            type: String,
            default: '#000000'
        },
        /* 是否禁用 */
        disabled: {
            type: Boolean,
            default: false
        },
        /* 是否使用透明度 */
        showAlpha: {
            type: Boolean,
            default: true
        },
        /* 颜色类型，可选值：hex，rgb */
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
            canvasId: 'canvas-' + Date.now(), // 画布 id，防止多组件时冲突
            curId: 'cur-' + Date.now(), // 当前选中小块 id，防止多组件时冲突
            barId: 'bar-' + Date.now(), // 左侧色条选中小块 id，防止多组件时冲突
            alphaId: 'alpha-' + Date.now(), // 透明度选中小块 id，防止多组件时冲突
            canvas: null, // 画布
            ctx: null, // 画布实例
            curColor: '', // 当前选中颜色
            activeColor: '', // bar选中颜色
            alpha: 1, // 透明度
            width: 286, // canvas宽度
            height: 200, // canvas高度
            showPanel: false, // 是否显示颜色面板
            startColor: '',
            prefixCls: 'x6',
            baseCls: ''
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
        handler() {
            this.showPanel = false;
        },
        /* 初始化 */
        init() {
            this.canvas = document.getElementById(this.canvasId);
            this.ctx = this.canvas.getContext('2d');
            this.makeColorBar();
            this.makeColorBox('#ff0000');
        },
        /* 绘制左侧面板颜色选择条 */
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
        /* 绘制颜色选择区域 */
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
        /* canvas点击 */
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
        /* canvas鼠标按下，绑定鼠标拖动函数 */
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
        /* 透明度控制条点击 */
        onAlphaClick(e){
            let x = e.offsetX || e.layerX;
            let bar = document.getElementById(this.alphaId);
            let parentNode = bar.parentNode;
            this.alpha = parseFloat(x/parentNode.clientWidth).toFixed(2);
            this.resetCurColor();
        },
        /* 透明度控制 */
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
        /* 透明度变化重新计算当前颜色值 */
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
        /* 设置当前颜色值 */
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
        /* 确认按钮点击 */
        confirm() {
            this.sendChange();
            this.showPanel = false;
        },
        getPredefineColor(predefineColor) {
            this.curColor = predefineColor;
            this.sendChange();
            this.showPanel = false;
        },
        /* 触发change回调 */
        sendChange() {
            this.$emit('change', this.curColor);
        },
        /* 获取rgb */
        getRgbaAtPoint(pos, area) {
            let imgData = this.ctx.getImageData(0, 0, this.width, this.height);
            if (area == 'bar') {
                imgData = this.ctx.getImageData(0, 0, 20, this.height);
            }
            let data = imgData.data;
            let dataIndex = (pos.y * imgData.width + pos.x) * 4;
            /* 开始消除误差 */
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
            /* 消除误差结束 */
            return [
                data[dataIndex],
                data[dataIndex + 1],
                data[dataIndex + 2],
                this.alpha
            ]
        },
        /* rgb/rgba色值转16进制 */
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
        /* 16进制色值转rgb */
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: `${_ctx.baseCls}`
  }, [
    vue.createCommentVNode(" 颜色显示方块 "),
    vue.createVNode("div", {
      class: `${_ctx.baseCls}-block`,
      style: { backgroundColor: _ctx.curColor },
      onClick: _cache[1] || (_cache[1] = vue.withModifiers($event => (!_ctx.disabled&&(_ctx.showPanel=!_ctx.showPanel)), ["stop"]))
    }, null, 6 /* CLASS, STYLE */),
    vue.createCommentVNode(" 颜色面板 "),
    vue.withDirectives(vue.createVNode("div", {
      class: `${_ctx.baseCls}-panel`,
      onClick: _cache[11] || (_cache[11] = vue.withModifiers(() => {}, ["stop"]))
    }, [
      vue.createCommentVNode(" 画布 "),
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
        vue.createCommentVNode(" 当前选中小块 "),
        vue.createVNode("em", {
          class: `${_ctx.baseCls}-cur`,
          id: _ctx.curId,
          onMousedown: _cache[4] || (_cache[4] = function(e){_ctx.onCanvasMousedown(e,'cur');})
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["id"]),
        vue.createCommentVNode(" 左侧色条选中小块 "),
        vue.createVNode("em", {
          class: `${_ctx.baseCls}-bar`,
          id: _ctx.barId,
          onMousedown: _cache[5] || (_cache[5] = function(e){_ctx.onCanvasMousedown(e,'bar');})
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["id"]),
        vue.createCommentVNode(" 透明度控制条 "),
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
      vue.createCommentVNode(" 底部按钮栏 "),
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
          }, "重置", 2 /* CLASS */),
          vue.createVNode("div", {
            class: `${_ctx.baseCls}-btn-confirm`,
            onClick: _cache[10] || (_cache[10] = (...args) => (_ctx.confirm(...args)))
          }, "确定", 2 /* CLASS */)
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

script.render = render;
script.__file = "components/x6-color-picker/ColorPicker.vue";

var X6ColorPicker = withInstall(script);

exports.X6ColorPicker = X6ColorPicker;
exports["default"] = X6ColorPicker;
//# sourceMappingURL=x6-color-picker.js.map
