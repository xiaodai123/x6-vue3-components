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
var script = vue.defineComponent({
    name: 'Tooltip',
    components: {
        Tippy: tippy_vue.createTippyComponent(tTheme, ...tippy_vue.defaultTippyProps, hideOnClick, tAppendTo, tAnimateFill)
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tippy = vue.resolveComponent("Tippy");

  return (vue.openBlock(), vue.createBlock(_component_Tippy, { target: "_parent" }, {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }))
}

script.render = render;
script.__file = "components/x6-tooltip/Tooltip.vue";

var X6Tooltip = withInstall(script);

exports.X6Tooltip = X6Tooltip;
exports["default"] = X6Tooltip;
//# sourceMappingURL=x6-tooltip.js.map
