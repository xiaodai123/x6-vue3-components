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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", null, [
    vue.createVNode("div", { className: _ctx.groupClassName }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 8 /* PROPS */, ["className"])
  ]))
}

script.render = render;
script.__file = "components/x6-toolbar/Group.vue";

var X6Group = withInstall(script);

exports.X6Group = X6Group;
exports["default"] = X6Group;
//# sourceMappingURL=x6-group.js.map
