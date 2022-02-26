'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var hotkeys = require('hotkeys-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hotkeys__default = /*#__PURE__*/_interopDefaultLegacy(hotkeys);

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

const _hoisted_1 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
              ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, vue.toDisplayString(_ctx.text), 1 /* TEXT */))
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

script.render = render;
script.__file = "components/x6-menu/MenuItem.vue";

var X6MenuItem = withInstall(script);

exports.X6MenuItem = X6MenuItem;
exports["default"] = X6MenuItem;
//# sourceMappingURL=x6-menu-item.js.map
