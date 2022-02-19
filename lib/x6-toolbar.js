'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var tippy_vue = require('tippy.vue');
var tippy = require('tippy.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);

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

var script$4 = vue.defineComponent({
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
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

script$4.render = render$4;
script$4.__file = "components/x6-toolbar/Toolbar.vue";

var script$3 = vue.defineComponent({
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", { class: _ctx.groupClassName }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$3.render = render$3;
script$3.__file = "components/x6-toolbar/Group.vue";

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

const contextMenu = {
    name: 'contextMenu',
    defaultValue: true,
    fn(instance) {
        return {
            onCreate() {
                let trigger = instance.props.trigger;
                if (trigger == 'contextMenu') {
                    instance.reference.oncontextmenu = (e) => {
                        e.preventDefault();
                        instance.show();
                    };
                }
            },
            onDestroy() {
                let trigger = instance.props.trigger;
                if (trigger == 'contextMenu') {
                    instance.reference.oncontextmenu = null;
                }
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
    plugins: [tippy.animateFill, hideOnPopper, contextMenu],
});
var script$2 = vue.defineComponent({
    name: 'Tooltip',
    components: {
        Tippy: tippy_vue.createTippyComponent(tTheme, ...tippy_vue.defaultTippyProps, hideOnClick, tAppendTo, tAnimateFill)
    }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tippy = vue.resolveComponent("Tippy");

  return (vue.openBlock(), vue.createBlock(_component_Tippy, { target: "_parent" }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }))
}

script$2.render = render$2;
script$2.__file = "components/x6-tooltip/Tooltip.vue";

var script$1 = vue.defineComponent({
    name: 'Dropdown',
    components: {
        Tooltip: script$2
    },
    props: {
        className: {
            type: String,
            default: ''
        },
        trigger: {
            type: String,
            default: 'click' // contextMenu, mouseenter focus, click, focusin, mouseenter click, manual
        },
        visible: {
            type: Boolean,
            default: false
        },
        transitionName: {
            type: String,
            default: 'shift-away' // 'shift-away' 'shift-toward' 'perspective' 'fade' 'scale'
        },
        placement: {
            type: String,
            default: 'bottom' // 'top' 'bottom' 'left' 'right'
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "components/x6-dropdown/Dropdown.vue";

var script = vue.defineComponent({
    name: 'Item',
    components: {
        Dropdown: script$1,
        Tooltip: script$2
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
        let { icon, text, hidden, active, disabled, className, tooltip, tooltipAsTitle, dropdownArrow } = vue.toRefs(props);
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
        buttonProps = vue.reactive(buttonProps);
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

const _hoisted_1 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tooltip = vue.resolveComponent("Tooltip");
  const _component_Dropdown = vue.resolveComponent("Dropdown");

  return (_ctx.slotDropdown)
    ? vue.createVNode(_component_Dropdown, {
        key: 0,
        tAppendTo: "parent"
      }, {
        visible: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "dropdown", { onClick: _ctx.handleDropdownItemClick })
        ]),
        default: vue.withCtx(() => [
          vue.createVNode("button", vue.mergeProps({ type: "button" }, _ctx.buttonProps, { onClick: _ctx.handleClick }), [
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
          ], 16 /* FULL_PROPS */, ["onClick"]),
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
      })
    : (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode("button", vue.mergeProps({ type: "button" }, _ctx.buttonProps, { onClick: _ctx.handleClick }), [
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
        ], 16 /* FULL_PROPS */, ["onClick"]),
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
      ]))
}

script.render = render;
script.__file = "components/x6-toolbar/Item.vue";

var X6Toolbar = withInstall(script$4, {
  Group: script$3,
  Item: script
});
var X6Group = withNoopInstall(script$3);
var X6Item = withNoopInstall(script);

exports.X6Group = X6Group;
exports.X6Item = X6Item;
exports.X6Toolbar = X6Toolbar;
exports["default"] = X6Toolbar;
//# sourceMappingURL=x6-toolbar.js.map
