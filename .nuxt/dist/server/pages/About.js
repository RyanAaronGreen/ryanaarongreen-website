exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9ab56a78", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_6c68af7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph[data-v-6c68af7e]{font-size:1.2em;line-height:1.8em}@media (max-width: 600px){.paragraph[data-v-6c68af7e]{font-size:1em}}@-webkit-keyframes fade-up-and-in-data-v-6c68af7e{0%{opacity:0;-webkit-transform:translate(0, 30px);transform:translate(0, 30px)}100%{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes fade-up-and-in-data-v-6c68af7e{0%{opacity:0;-webkit-transform:translate(0, 30px);transform:translate(0, 30px)}100%{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}.about[data-v-6c68af7e]{position:relative;width:100%;height:100%;background-color:#fff;overflow:hidden}@media (max-width: 600px){.about[data-v-6c68af7e]{overflow:visible;padding-bottom:100px;height:auto}}.about .inner[data-v-6c68af7e]{z-index:2}.about .container[data-v-6c68af7e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width: 600px){.about .container[data-v-6c68af7e]{display:block}}.about .text-wrapper[data-v-6c68af7e]{display:block;width:700px;margin:0 auto;max-width:100%;opacity:0;-webkit-animation:fade-up-and-in-data-v-6c68af7e 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0s 1 normal forwards;animation:fade-up-and-in-data-v-6c68af7e 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0s 1 normal forwards}.about .content[data-v-6c68af7e]{width:100%;height:100%;z-index:2}.about .content .h1[data-v-6c68af7e]{color:#fff;font-size:72px;line-height:72px}.about .content .h1[data-v-6c68af7e] span{color:#111}.about .content .p2[data-v-6c68af7e]{font-size:18px;line-height:32px;font-family:\"PT Serif\",serif;width:600px;color:#111}.about .content .divider[data-v-6c68af7e]{height:10px;width:400px;max-width:100%;background-color:#fff;display:block}.about .content .p1[data-v-6c68af7e]{color:#fff;font-size:48px;font-family:\"PT Serif\",serif}.about .background-text[data-v-6c68af7e]{position:absolute;bottom:38%;left:-40px;white-space:nowrap;font-size:200px;font-weight:700;opacity:1;z-index:1}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=template&id=6c68af7e&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about d-flex"},[_vm._ssrNode("<div class=\"container\" data-v-6c68af7e><div class=\"text-wrapper\" data-v-6c68af7e><h2 data-v-6c68af7e>Good enough is not good enough...</h2><p class=\"paragraph\" data-v-6c68af7e>Growing up, my dad always told me that “Good enough is not good enough.” I’ve let that be the guideline to how I approach everything that I do and as a result, I always try to bring my best.</p><p class=\"paragraph\" data-v-6c68af7e>I am a designer turned web developer and I have a passion for creating well crafted things. I love figuring out the “best” way to go about doing something and you can find me always trying to learn something new.</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/About.vue?vue&type=template&id=6c68af7e&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
// @ is an alias to /src
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: 'About',

  data() {
    return {};
  },

  components: {}
});
// CONCATENATED MODULE: ./pages/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c68af7e",
  "7d702b73"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=About.js.map