'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var clamp = require('clamp');
var addEventListener = require('add-dom-event-listener');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clamp__default = /*#__PURE__*/_interopDefaultLegacy(clamp);
var addEventListener__default = /*#__PURE__*/_interopDefaultLegacy(addEventListener);

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

var script$2 = vue.defineComponent({
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

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", { style: _ctx.styleData }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script$2.render = render$2;
script$2.__file = "components/x6-split-box/Box.vue";

var animationFrameTime = 0;
var nativeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
var cancelAnimationFrame = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);
var requestAnimationFrame = nativeRequestAnimationFrame ? nativeRequestAnimationFrame.bind(window) : function (callback) {
  var currTime = Date.now();
  var timeDelay = Math.max(0, 16 - (currTime - animationFrameTime));
  animationFrameTime = currTime + timeDelay;
  return window.setTimeout(function () {
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

var script$1 = vue.defineComponent({
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    role: "button",
    style: _ctx.styleProperties,
    ref: "resizer"
  }, null, 4 /* STYLE */))
}

script$1.render = render$1;
script$1.__file = "components/x6-split-box/Resizer.vue";

var script = vue.defineComponent({
    name: 'SplitBox',
    components: {
        Box: script$2,
        Resizer: script$1
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
                // ~~常用来取整
                delta = ~~(delta / step) * step;
            }

            delta = isPrimaryFirst ? -delta : delta;

            let primaryBox = isPrimaryFirst ? this.box1Elem.$el : this.box2Elem.$el;
            let secondBox = isPrimaryFirst ? this.box2Elem.$el : this.box1Elem.$el;
            let box1Order = parseInt(window.getComputedStyle(primaryBox).order, 10);
            let box2Order = parseInt(window.getComputedStyle(secondBox).order, 10);
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

script.render = render;
script.__file = "components/x6-split-box/SplitBox.vue";

var X6SplitBox = withInstall(script);

exports.X6SplitBox = X6SplitBox;
exports["default"] = X6SplitBox;
//# sourceMappingURL=x6-split-box.js.map
