'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var tippy_vue = require('tippy.vue');
var tippy = require('tippy.js');
var hotkeys = require('hotkeys-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);
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

var script$5 = vue.defineComponent({
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
                onClick.value(name);
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

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menuClassName }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "components/x6-menu/Menu.vue";

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
var script$4 = vue.defineComponent({
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
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

script$4.render = render$4;
script$4.__file = "components/x6-tooltip/Tooltip.vue";

var script$3 = vue.defineComponent({
    name: 'Dropdown',
    components: {
        Tooltip: script$4
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
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

script$3.render = render$3;
script$3.__file = "components/x6-dropdown/Dropdown.vue";

var script$2 = vue.defineComponent({
    name: 'SubMenu',
    components: {
        Dropdown: script$3
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

const _hoisted_1$1 = { key: 0 };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
                  ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$1, vue.toDisplayString(_ctx.text), 1 /* TEXT */))
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

script$2.render = render$2;
script$2.__file = "components/x6-menu/SubMenu.vue";

var script$1 = vue.defineComponent({
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
                hotkeys__default["default"](hotkey.toLowerCase(), () => {
                    this.onHotkey();
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
        onHotkey() {
            this.triggerHandler();
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
                    this.onClick();
                }
            }
        }
    }
});

const _hoisted_1 = { key: 0 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "components/x6-menu/MenuItem.vue";

var script = vue.defineComponent({
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", { class: _ctx.menuDividerClassName }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "components/x6-menu/Divider.vue";

var X6Menu = withInstall(script$5, {
  SubMenu: script$2,
  MenuItem: script$1,
  Divider: script
});
var X6SubMenu = withNoopInstall(script$2);
var X6MenuItem = withNoopInstall(script$1);
var X6Divider = withNoopInstall(script);

exports.X6Divider = X6Divider;
exports.X6Menu = X6Menu;
exports.X6MenuItem = X6MenuItem;
exports.X6SubMenu = X6SubMenu;
exports["default"] = X6Menu;
//# sourceMappingURL=x6-menu.js.map
