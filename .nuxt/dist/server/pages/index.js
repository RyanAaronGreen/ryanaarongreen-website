exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3676017e", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph{font-size:1.2em;line-height:1.8em}@media (max-width: 600px){.paragraph{font-size:1em}}@-webkit-keyframes fade-up-and-in{0%{opacity:0;-webkit-transform:translate(0, 30px);transform:translate(0, 30px)}100%{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes fade-up-and-in{0%{opacity:0;-webkit-transform:translate(0, 30px);transform:translate(0, 30px)}100%{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0)}}.home{position:relative;width:100%;height:100%;background-color:#75ca75;overflow:hidden;background:linear-gradient(110deg, #1d8f4d, #1aff1a)}.home .inner{z-index:2}.home .connect{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width: 600px){.home .connect{display:block}}.home .connect span{display:inline-block;color:#fff;font-family:\"PT Serif\",serif;font-size:18px}@media (max-width: 600px){.home .connect span{display:block}}.home .connect__list{display:inline-block;padding:0 20px}@media (max-width: 600px){.home .connect__list{padding:0;margin:5px 0 20px}}.home .connect__item{display:inline-block;margin-right:10px}.home .connect__link{height:35px;width:35px;display:inline-block;border-radius:100%;background-color:#fff;background-position:center;background-repeat:no-repeat;color:transparent;position:relative;-webkit-transition:all 0.3s;transition:all 0.3s}.home .connect__link svg{-webkit-transition:all 0.3s;transition:all 0.3s;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.home .connect__link svg path{-webkit-transition:all 0.3s;transition:all 0.3s}.home .connect__link.twitter svg{height:20px}.home .connect__link.twitter svg path{fill:#000}.home .connect__link.linkedin svg{height:16px}.home .connect__link.linkedin svg path{fill:#000}.home .connect__link.dribbble svg{height:20px}.home .connect__link.dribbble svg path{fill:#000}.home .connect__link.github svg{height:20px}.home .connect__link.github svg path{fill:#000}.home .connect__link.email svg{height:20px}.home .connect__link.email svg path{fill:#000}.home .connect__link:hover svg path{fill:#fff}.home .connect__link:hover.twitter{background-color:#1da1f2}.home .connect__link:hover.linkedin{background-color:#0077B5}.home .connect__link:hover.dribbble{background-color:#ea4c89}.home .connect__link:hover.github{background-color:#24292e}.home .connect__link:hover.email{background-color:#2ecc71}.home .content{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-line-pack:start;align-content:flex-start;padding-bottom:5%;z-index:2;opacity:0;-webkit-animation:fade-up-and-in 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0.4s 1 normal forwards;animation:fade-up-and-in 2s cubic-bezier(0.17, 0.67, 0.26, 0.98) 0.4s 1 normal forwards}.home .content .h1{color:#fff;font-size:72px;line-height:72px}.home .content .h1 /deep/ span{color:#111}@media (max-width: 600px){.home .content .h1{font-size:30px;line-height:30px}}.home .content .divider{height:10px;width:400px;max-width:100%;background-color:#fff;display:block}@media (max-width: 600px){.home .content .divider{height:5px}}.home .content .p1{color:#fff;font-size:30px;font-family:\"PT Serif\",serif}@media (max-width: 600px){.home .content .p1{font-size:26px;line-height:30px}}.home .background-text{position:absolute;bottom:68%;left:-40px;white-space:nowrap;font-size:100px;font-weight:700;opacity:0.05;z-index:1}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=21a37868&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home d-flex"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<div class=\"text-wrapper\">","</div>",[_vm._ssrNode("<h1 class=\"h1\">"+(_vm._s(_vm.heading))+"</h1><span class=\"divider divider--dark\"></span><p class=\"p1\">Design with a purpose; develop as an art.</p>"),_vm._ssrNode("<div class=\"connect\">","</div>",[_vm._ssrNode("<span>Connect With Me:</span>"),_vm._ssrNode("<ul class=\"connect__list\">","</ul>",[_vm._ssrNode("<li class=\"connect__item\">","</li>",[_vm._ssrNode("<a title=\"Dribbble\" rel=\"external\" target=\"_blank\" href=\"https://dribbble.com/ryanaarongreen\" class=\"connect__link dribbble\">","</a>",[_c('DribbbleIcon')],1)]),_vm._ssrNode("<li class=\"connect__item\">","</li>",[_vm._ssrNode("<a title=\"Github\" rel=\"external\" target=\"_blank\" href=\"https://github.com/RyanAaronGreen\" class=\"connect__link github\">","</a>",[_c('GitHubIcon')],1)]),_vm._ssrNode("<li class=\"connect__item\">","</li>",[_vm._ssrNode("<a title=\"Twitter\" rel=\"external\" target=\"_blank\" href=\"https://twitter.com/ryanaarongreen\" class=\"connect__link twitter\">","</a>",[_c('TwitterIcon')],1)])])],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=21a37868&lang=pug&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/Twitter.vue?vue&type=template&id=961b7bb2&
var Twittervue_type_template_id_961b7bb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 612 612"}},[_vm._ssrNode("<path d=\"M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479a125.556 125.556 0 0 1-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z\" fill=\"#010002\"></path>")])}
var Twittervue_type_template_id_961b7bb2_staticRenderFns = []


// CONCATENATED MODULE: ./components/social-icons/Twitter.vue?vue&type=template&id=961b7bb2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/Twitter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Twittervue_type_script_lang_js_ = ({
  name: 'Twitter'
});
// CONCATENATED MODULE: ./components/social-icons/Twitter.vue?vue&type=script&lang=js&
 /* harmony default export */ var social_icons_Twittervue_type_script_lang_js_ = (Twittervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/social-icons/Twitter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  social_icons_Twittervue_type_script_lang_js_,
  Twittervue_type_template_id_961b7bb2_render,
  Twittervue_type_template_id_961b7bb2_staticRenderFns,
  false,
  null,
  null,
  "b3957730"
  
)

/* harmony default export */ var Twitter = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/Dribbble.vue?vue&type=template&id=5c710c98&
var Dribbblevue_type_template_id_5c710c98_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 100 100"}},[_vm._ssrNode("<path d=\"M50 0a50 50 0 1 0 50 50A50 50 0 0 0 50 0zm33 23.05a42.53 42.53 0 0 1 9.65 26.57c-1.41-.27-15.51-3.14-29.72-1.36-.32-.7-.6-1.46-.92-2.22-.87-2.06-1.84-4.17-2.82-6.18C75 33.46 82.1 24.24 83 23.05zM50 7.38a42.61 42.61 0 0 1 28.31 10.73c-.76 1.09-7.21 9.71-22.4 15.4A231 231 0 0 0 40 8.51a43.37 43.37 0 0 1 10-1.13zm-18.17 4a270.23 270.23 0 0 1 15.84 24.68 160 160 0 0 1-39.48 5.21 42.89 42.89 0 0 1 23.64-29.88zM7.27 50.05v-1.3a155.69 155.69 0 0 0 43.87-6.07c1.25 2.39 2.38 4.83 3.47 7.27l-1.68.48C30.91 57.54 19.2 77 18.22 78.58A42.6 42.6 0 0 1 7.27 50.05zM50 92.73a42.39 42.39 0 0 1-26.19-9c.76-1.57 9.43-18.27 33.51-26.68.11 0 .16 0 .27-.11a176.38 176.38 0 0 1 9.11 32.38A42 42 0 0 1 50 92.73zm23.81-7.32A184.25 184.25 0 0 0 65.51 55a62.26 62.26 0 0 1 26.57 1.84 42.3 42.3 0 0 1-18.27 28.57z\" fill=\"#444\" data-name=\"Layer 1\"></path>")])}
var Dribbblevue_type_template_id_5c710c98_staticRenderFns = []


// CONCATENATED MODULE: ./components/social-icons/Dribbble.vue?vue&type=template&id=5c710c98&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/Dribbble.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Dribbblevue_type_script_lang_js_ = ({
  name: 'Dribbble'
});
// CONCATENATED MODULE: ./components/social-icons/Dribbble.vue?vue&type=script&lang=js&
 /* harmony default export */ var social_icons_Dribbblevue_type_script_lang_js_ = (Dribbblevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/social-icons/Dribbble.vue





/* normalize component */

var Dribbble_component = Object(componentNormalizer["a" /* default */])(
  social_icons_Dribbblevue_type_script_lang_js_,
  Dribbblevue_type_template_id_5c710c98_render,
  Dribbblevue_type_template_id_5c710c98_staticRenderFns,
  false,
  null,
  null,
  "5c3311bb"
  
)

/* harmony default export */ var Dribbble = (Dribbble_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/GitHub.vue?vue&type=template&id=73086a86&
var GitHubvue_type_template_id_73086a86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32.58 31.77"}},[_vm._ssrNode("<path d=\"M16.29 0a16.29 16.29 0 0 0-5.15 31.75c.82.15 1.11-.36 1.11-.79v-2.77C7.7 29.18 6.74 26 6.74 26a4.36 4.36 0 0 0-1.81-2.39c-1.47-1 .12-1 .12-1a3.43 3.43 0 0 1 2.49 1.68 3.48 3.48 0 0 0 4.74 1.36 3.46 3.46 0 0 1 1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3 6.3 0 0 1 1.67-4.37 5.94 5.94 0 0 1 .16-4.31s1.37-.44 4.48 1.67a15.41 15.41 0 0 1 8.16 0c3.11-2.11 4.47-1.67 4.47-1.67a5.91 5.91 0 0 1 .2 4.28 6.3 6.3 0 0 1 1.67 4.37c0 6.26-3.81 7.63-7.44 8a3.85 3.85 0 0 1 1.11 3v4.47c0 .53.29.94 1.12.78A16.29 16.29 0 0 0 16.29 0z\" fill=\"#191717\" fill-rule=\"evenodd\" data-name=\"Layer 1\"></path>")])}
var GitHubvue_type_template_id_73086a86_staticRenderFns = []


// CONCATENATED MODULE: ./components/social-icons/GitHub.vue?vue&type=template&id=73086a86&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/social-icons/GitHub.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var GitHubvue_type_script_lang_js_ = ({
  name: 'GitHub'
});
// CONCATENATED MODULE: ./components/social-icons/GitHub.vue?vue&type=script&lang=js&
 /* harmony default export */ var social_icons_GitHubvue_type_script_lang_js_ = (GitHubvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/social-icons/GitHub.vue





/* normalize component */

var GitHub_component = Object(componentNormalizer["a" /* default */])(
  social_icons_GitHubvue_type_script_lang_js_,
  GitHubvue_type_template_id_73086a86_render,
  GitHubvue_type_template_id_73086a86_staticRenderFns,
  false,
  null,
  null,
  "1a215744"
  
)

/* harmony default export */ var GitHub = (GitHub_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
// @ is an alias to /src



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'home',

  data() {
    return {
      heading: 'Ryan Aaron Green,<br><span>Web Developer & Designer</span>'
    };
  },

  components: {
    DribbbleIcon: Dribbble,
    GitHubIcon: GitHub,
    TwitterIcon: Twitter
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "25b5e658"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map