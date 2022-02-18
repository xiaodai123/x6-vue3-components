'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var addEventListener = require('add-dom-event-listener');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var addEventListener__default = /*#__PURE__*/_interopDefaultLegacy(addEventListener);

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

let cacheDeactiveMap = new WeakMap();
var script = vue.defineComponent({
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
                if (relatedTarget !== window) {
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
                    // 缓存一下，当再次 hover 到其他菜单时被调用
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "components/x6-menubar/MenubarItem.vue";

var X6MenubarItem = withInstall(script);

exports.X6MenubarItem = X6MenubarItem;
exports["default"] = X6MenubarItem;
//# sourceMappingURL=x6-menubar-item.js.map
