"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  data: function data() {
    return {
      loading: false,
      data: {
        status: 'active',
        unit: '',
        supplier_id: ''
      },
      previewImage: null,
      suppliers: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;
      this.$validate().then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
          var form, formData, url;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!res) {
                  _context.next = 8;
                  break;
                }
                form = document.getElementById('productForm');
                formData = new FormData(form);
                url = _this.$route.params.id ? "/product/" + _this.data.id : "/product";
                _this.loading = true;
                if (_this.$route.params.id) {
                  formData.append("_method", "put");
                }
                _context.next = 8;
                return axios.post(url, formData).then(function (res) {
                  if (res) {
                    _this.$toast.success(res.data.message);
                    _this.$router.push({
                      name: 'product.index'
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  return _this.loading = false;
                });
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    handleFileUpload: function handleFileUpload(event) {
      var _this2 = this;
      var file = event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          _this2.previewImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    getSuppliers: function getSuppliers() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/get-suppliers').then(function (res) {
                _this3.suppliers = res.data;
              })["catch"](function (error) {
                console.log(error);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;
    this.getSuppliers();
    var id = this.$route.params.id;
    if (id) {
      axios.get('/product/' + id).then(function (res) {
        _this4.data = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Name is required");
    },
    "data.sku": function dataSku() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("SKU is required");
    },
    "data.price": function dataPrice() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Price is required");
    },
    "data.unit": function dataUnit() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Unit is required");
    },
    "data.supplier_id": function dataSupplier_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Supplier is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "white_card card_height_100 mb_30"
  }, [_c("div", {
    staticClass: "white_card_header"
  }, [_c("div", {
    staticClass: "box_header m-0"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "add_button ms-2"
  }, [_c("router-link", {
    staticClass: "btn_1",
    attrs: {
      to: {
        name: "product.index"
      }
    }
  }, [_vm._v("Back ")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "white_card_body"
  }, [_c("div", {
    staticClass: "QA_section"
  }, [_c("form", {
    staticClass: "row align-items-center",
    attrs: {
      id: "productForm",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.name,
      expression: "data.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter Name"
    },
    domProps: {
      value: _vm.data.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.name")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "sku"
    }
  }, [_vm._v("SKU")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.sku,
      expression: "data.sku"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "sku",
      name: "sku",
      placeholder: "Enter SKU"
    },
    domProps: {
      value: _vm.data.sku
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "sku", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.sku")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Image")]), _vm._v(" "), _c("input", {
    staticClass: "d-none",
    attrs: {
      type: "file",
      id: "image",
      accept: "image/*",
      name: "image"
    },
    on: {
      change: _vm.handleFileUpload
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-4"
  }, [_c("label", {
    attrs: {
      "for": "image"
    }
  }, [_c("img", {
    staticStyle: {
      "border-radius": "10px"
    },
    attrs: {
      src: _vm.previewImage ? _vm.previewImage : _vm.data.image,
      height: "30",
      width: "30",
      alt: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "btn btn-light btn-sm px-5"
  }, [_vm._v("Choose File")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "price"
    }
  }, [_vm._v("Product Price")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.price,
      expression: "data.price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "price",
      name: "price",
      placeholder: "Enter Price"
    },
    domProps: {
      value: _vm.data.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "price", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.price")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "unit"
    }
  }, [_vm._v("Product Unit")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.unit,
      expression: "data.unit"
    }],
    staticClass: "form-select",
    attrs: {
      name: "unit",
      id: "unit"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.data, "unit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select One")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "pc"
    }
  }, [_vm._v("PC")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "box"
    }
  }, [_vm._v("Box")])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.unit")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "supplier"
    }
  }, [_vm._v("Supplier")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.supplier_id,
      expression: "data.supplier_id"
    }],
    staticClass: "form-select",
    attrs: {
      name: "supplier_id",
      id: "supplier"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.data, "supplier_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select One")]), _vm._v(" "), _vm._l(_vm.suppliers, function (supplier, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: supplier.id
      }
    }, [_vm._v(_vm._s(supplier.name))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.supplier_id")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 mb-3"
  }, [_c("label", {
    attrs: {
      "for": "description"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.description,
      expression: "data.description"
    }],
    staticClass: "form-control",
    attrs: {
      name: "description",
      id: "description"
    },
    domProps: {
      value: _vm.data.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4"
  }, [_c("label", {
    staticClass: "d-block w-100",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Status")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.status,
      expression: "data.status"
    }],
    staticClass: "form-check-input",
    attrs: {
      name: "status",
      type: "radio",
      id: "inactive",
      value: "inactive"
    },
    domProps: {
      checked: _vm._q(_vm.data.status, "inactive")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "status", "inactive");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "inactive"
    }
  }, [_vm._v("Inactive")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.status,
      expression: "data.status"
    }],
    staticClass: "form-check-input",
    attrs: {
      name: "status",
      type: "radio",
      id: "active",
      value: "active"
    },
    domProps: {
      checked: _vm._q(_vm.data.status, "active")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "status", "active");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "active"
    }
  }, [_vm._v("Active")])])]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                " + _vm._s(_vm.validation.firstError("data.status")) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "my-4"
  }, [_c("div", {
    staticClass: "col-lg-4"
  }, [!_vm.loading ? _c("button", {
    staticClass: "btn btn-success px-4",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")]) : _c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "button",
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                    Loading...\n                                ")])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-title"
  }, [_c("h2", {
    staticClass: "m-0"
  }, [_vm._v("Product  Create")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/product/Create.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/product/Create.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=83c7620a&scoped=true& */ "./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/product/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "83c7620a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/product/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/product/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/product/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_83c7620a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=83c7620a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/product/Create.vue?vue&type=template&id=83c7620a&scoped=true&");


/***/ })

}]);