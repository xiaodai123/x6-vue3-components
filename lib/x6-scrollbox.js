'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var OverlayScrollbars = require('overlayscrollbars');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var OverlayScrollbars__default = /*#__PURE__*/_interopDefaultLegacy(OverlayScrollbars);

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

var script$1 = {
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "components/overlayscrollbars-vue3/OverlayScrollbarsComponent.vue";

var script = vue.defineComponent({
    name: 'Scrollbox',
    components: {
        OverlayScrollbars: script$1
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OverlayScrollbars = vue.resolveComponent("OverlayScrollbars");

  return (vue.openBlock(), vue.createBlock(_component_OverlayScrollbars, { options: _ctx.overlayScrollbarsOptions }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8 /* PROPS */, ["options"]))
}

script.render = render;
script.__file = "components/x6-scrollbox/Scrollbox.vue";

var X6Scrollbox = withInstall(script);

exports.X6Scrollbox = X6Scrollbox;
exports["default"] = X6Scrollbox;
//# sourceMappingURL=x6-scrollbox.js.map
