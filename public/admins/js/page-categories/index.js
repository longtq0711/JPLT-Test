/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Modules/Admin/Resources/js/components/Media.vue":
/*!*************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/components/Media.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media.vue?vue&type=template&id=3b025273&scoped=true& */ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true&");
/* harmony import */ var _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.vue?vue&type=script&lang=js& */ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& */ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b025273",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/Modules/Admin/Resources/js/components/Media.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_3b025273_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=template&id=3b025273&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3b025273_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/Modules/Admin/Resources/js/page-categories/index.js":
/*!*****************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/page-categories/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_Media_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @admin/components/Media.vue */ "./app/Modules/Admin/Resources/js/components/Media.vue");

new Vue({
  el: '#pageCate',
  components: {
    Media: _admin_components_Media_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: {
    pageCategories: [],
    addPageCategory: {
      id: null,
      title: null,
      slug: null,
      avatar: null
    },
    updatePageCategory: {},
    addErrors: [],
    updateErrors: [],
    statusAdd: false
  },
  computed: {},
  created: function created() {
    this.pageCategories = JSON.parse($('#pageCategories').val());
  },
  methods: {
    addChangeTitle: function addChangeTitle() {
      this.addPageCategory.slug = stringToSlug(this.addPageCategory.title);
    },
    updateChangeTitle: function updateChangeTitle() {
      this.updatePageCategory.slug = stringToSlug(this.updatePageCategory.title);
    },
    store: function store() {
      this.addErrors = [];

      if (!this.addPageCategory.title) {
        this.addErrors['title'] = 'Vui lòng nhập tên loại trang';
      }

      if (!this.addPageCategory.slug) {
        this.addErrors['slug'] = 'Vui lòng nhập slug';
      }

      var scop = this;

      if (Object.keys(this.addErrors).length == 0) {
        scop.statusAdd = true;
        axios({
          method: 'POST',
          url: '/admin/page-categories',
          data: scop.addPageCategory
        }).then(function (response) {
          var data = response.data;

          if (data.status === 200) {
            scop.pageCategories.push(response.data.pageCategories);
            scop.addPageCategory = {
              id: null,
              title: null,
              slug: null,
              avatar: null
            };
            $("#pageCategoryModal").modal('hide');
            Swal.fire({
              icon: 'success',
              title: '',
              text: data.message
            });
          } else if (data.status === 400) {
            scop.addErrors = [];

            if (data.datas.title) {
              scop.addErrors['title'] = data.datas.title[0];
            }

            if (data.datas.slug) {
              scop.addErrors['slug'] = data.datas.slug[0];
            }
          }

          scop.statusAdd = false;
        })["catch"](function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'error',
            footer: ''
          });
        });
      }
    },
    edit: function edit(pageCategory) {
      this.updatePageCategory = pageCategory;
    },
    update: function update() {
      this.updateErrors = [];

      if (this.updatePageCategory.title === null) {
        this.updateErrors['title'] = 'Vui lòng nhập tên loại trang';
      }

      if (this.updatePageCategory.slug === null) {
        this.updateErrors['slug'] = 'Vui lòng nhập slug';
      }

      var scop = this;

      if (Object.keys(this.updateErrors).length == 0) {
        $('.form-loading .loading').css('display', 'flex');
        axios({
          method: 'PUT',
          url: '/admin/page-categories/' + scop.updatePageCategory.id,
          data: scop.updatePageCategory
        }).then(function (response) {
          var data = response.data;

          if (data.status === 200) {
            $("#editModal").modal('hide');
            Swal.fire({
              icon: 'success',
              title: '',
              text: data.message
            }).then(function (result) {});
          } else if (data.status === 400) {
            scop.updateErrors = [];

            if (data.datas.title) {
              scop.updateErrors['title'] = data.datas.title[0];
            }

            if (data.datas.slug) {
              scop.updateErrors['slug'] = data.datas.slug[0];
            }
          }

          $('.form-loading .loading').css('display', 'none');
        })["catch"](function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'error',
            footer: ''
          });
          $('.form-loading .loading').css('display', 'none');
        });
      }
    },
    deleteC: function deleteC(pageCategory) {
      var scop = this;
      Swal.fire({
        title: 'Bạn chắc chắn muốn xóa loại trang?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        cancelButtonText: 'Hủy'
      }).then(function (result) {
        if (result.value) {
          $('.form-loading .loading').css('display', 'flex');
          axios({
            method: 'DELETE',
            url: '/admin/page-categories/' + pageCategory['id']
          }).then(function (response) {
            var data = response.data;

            if (data.status === 200) {
              Swal.fire({
                icon: 'success',
                title: '',
                text: data.message
              }).then(function (result) {});
              var index = scop.pageCategories.indexOf(pageCategory);
              scop.pageCategories.splice(index, 1);
            }

            $('.form-loading .loading').css('display', 'none');
          })["catch"](function (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'error',
              footer: ''
            });
            $('.form-loading .loading').css('display', 'none');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "media",
  data: function data() {
    return {
      tab: "list",
      search: {
        keyword: null,
        date: "all",
        page: 1
      },
      medias: [],
      randomIndex: Math.floor(Math.random() * 10000),
      mediaPageCheck: true,
      showLoadMore: true,
      loadingMedia: false,
      checkedFiles: [],
      months: [],
      attributeImgIndex: 0,
      loaded: false,
      contentEditor: null,
      contentEditorValue: this.editorValue,
      isUpload: false,
      addStyleDatas: ['<h2 class="article-content-h2">Heading 2</h2><p></p>', '<h3 class="article-content-h3">Heading 3</h3><p></p>', '<small class="article-content-small">Small</small><p></p>', '<div class="box-brief-info"><p>Box brief info</p></div><p></p>'],
      addStyleSelect: null
    };
  },
  props: {
    mediaType: {
      type: Number,
      "default": 1 // 2: image flow attribute; 3: list image; 4: editor; 5: avatar

    },
    attributeImgs: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    listImages: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    editorValue: {
      type: String,
      "default": null
    },
    avatar: {
      type: String // default: null

    }
  },
  created: function created() {
    var scop = this;
    axios.get(BASE_API_URL + "/medias/get-list-month", {}).then(function (response) {
      if (response.status === 200) {
        var data = response.data;
        scop.months = data.months;
      } else {
        console.log("Error getting month list");
      }
    })["catch"](function (error) {
      console.log("Error getting month list");
    });

    if (this.mediaType == 4) {
      scop.initEditor();
    }
  },
  methods: {
    openAddStyleModal: function openAddStyleModal() {
      $("#add_style_modal_" + this.randomIndex).modal("show");
    },
    insertStyle: function insertStyle() {
      this.contentEditor.insertContent(this.addStyleDatas[this.addStyleSelect]);
      this.contentEditorValue = this.contentEditor.getContent();
      this.$emit("change", this.contentEditorValue);
      $("#add_style_modal_" + this.randomIndex).modal("hide");
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var scop = this;
      $.each(files, function (key, file) {
        scop.uploadImage(file);
      });
    },
    uploadImage: function uploadImage(file) {
      var scop = this;
      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      var formData = new FormData();
      formData.append("file", file);
      scop.isUpload = true;
      axios.post(BASE_API_URL + "/medias/upload", formData, config).then(function (response) {
        var data = response.data;

        if (data.status == 200) {
          scop.medias.unshift(data.data);
          scop.tab = "list";

          if (scop.mediaType == 2 || scop.mediaType == 5) {
            scop.checkedFiles = [data.data];
          } else {// scop.checkedFiles.push(data.data);
          }
        } else {
          Swal.fire({
            title: "",
            text: data.message,
            type: "error"
          });
        }

        scop.isUpload = false;
      })["catch"](function (error) {
        scop.isUpload = false;
        console.log(error);
        Swal.fire({
          title: "",
          text: error,
          type: "error"
        });
      });
    },
    CheckImg: function CheckImg(media, event) {
      if (event.target.checked && (this.mediaType == 2 || this.mediaType == 5)) {
        this.checkedFiles = [media];
      }
    },
    loadMedia: function loadMedia() {
      var attribute_index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.search.page++;
      this.getMedias();
    },
    initMedia: function initMedia() {
      var attribute_index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      $("#media_" + this.randomIndex).modal("show");

      if (this.mediaType == 2) {
        this.attributeImgIndex = attribute_index;
      }

      if (!this.loaded) {
        this.getMedias(attribute_index = null);
        this.loaded = true;
      }
    },
    searchMedia: function searchMedia() {
      this.search.page = 1;
      this.medias = [];
      this.getMedias();
    },
    getMedias: function getMedias() {
      var scop = this;
      scop.loadingMedia = true;
      scop.showLoadMore = false;
      axios.get(BASE_API_URL + "/medias", {
        params: {
          key: scop.search.keyword,
          media_filter_date: scop.search.date,
          type: "vue",
          page: scop.search.page
        }
      }).then(function (response) {
        var data = response.data;

        if (data.status == 404) {
          scop.mediaPageCheck = false;
        } else if (data.status == 204) {
          scop.mediaPageCheck = false;
        } else if (data.status == 200) {
          scop.medias = scop.medias.concat(data.data);

          if (data.page_last) {
            scop.mediaPageCheck = false;
            scop.showLoadMore = false;
          } else {
            scop.showLoadMore = true;
          }
        }

        scop.loadingMedia = false;
      })["catch"](function (error) {
        scop.loadingMedia = false;
      });
    },
    insert: function insert() {
      var scop = this;

      if (scop.mediaType == 2) {
        scop.attributeImgs[scop.attributeImgIndex]["img"] = scop.checkedFiles[0]["url"];
      } else if (scop.mediaType == 3) {
        for (var i = 0; i < scop.checkedFiles.length; i++) {
          scop.listImages.push({
            id: null,
            url: scop.checkedFiles[i]["url"]
          });
        }
      } else if (scop.mediaType == 4) {
        for (var _i = 0; _i < scop.checkedFiles.length; _i++) {
          var data = '<img src="' + scop.checkedFiles[_i]["url"] + '">';
          scop.contentEditor.insertContent(data);
        }

        scop.contentEditorValue = scop.contentEditor.getContent();
        scop.$emit("change", scop.contentEditorValue);
      } else if (scop.mediaType == 5) {
        scop.avatarValue = scop.checkedFiles[0]["url"];
        scop.$emit("change", this.avatarValue);
      }

      $("#media_" + scop.randomIndex).modal("hide");
      scop.checkedFiles = [];
    },
    deleteFile: function deleteFile() {
      var scop = this;
      Swal.fire({
        title: "Bạn có chắc chắn muốn xóa?",
        text: "Bạn sẽ không thể khôi phục được dữ liệu sau khi xóa!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy"
      }).then(function (result) {
        if (result.value) {
          var array_id = [];

          for (var i = 0; i < scop.checkedFiles.length; i++) {
            array_id.push(scop.checkedFiles[i]["id"]);
            var index = scop.medias.indexOf(scop.checkedFiles[i]);
            scop.medias.splice(index, 1);
          }

          axios.post(BASE_API_URL + "/medias/delete", {
            array_id: array_id
          }).then(function (response) {
            // let data = response.data;
            // for (let i = 0; i < scop.checkedFiles.length; i++) {
            //   let index = scop.medias.indexOf(scop.checkedFiles[i]);
            //   scop.medias.splice(index, 1)
            // }
            scop.checkedFiles = [];
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    removeImg: function removeImg(attribute_index) {
      if (this.mediaType == 2) {
        this.attributeImgs[attribute_index]["img"] = null;
      } else if (this.mediaType == 3) {
        this.listImages.splice(attribute_index, 1);
      }
    },
    removeAvatar: function removeAvatar() {
      this.$emit("change", null);
    },
    initEditor: function initEditor() {
      var scop = this;
      tinymce.init({
        selector: "#editor_content_" + scop.randomIndex,
        content_css: ["/css/style-editor.css?v=1.0.4"],
        height: 500,
        plugins: ["advlist autolink lists link image charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars code fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "emoticons template paste textcolor colorpicker textpattern codesample toc", "paste"],
        toolbar: "cut copy wordcount" + "| undo redo" + "| bold italic underline strikethrough" + "| forecolor backcolor" + // "| fontsizeselect formatselect" +
        "| bullist numlist " + "| blockquote hr pagebreak" + "| alignleft aligncenter alignright alignjustify" + "| outdent indent" + "| ltr rtl" + "| link unlink image media" + "| table removeformat charmap" + "| code fullscreen preview print ",
        menubar: false,
        setup: function setup(editor) {
          scop.contentEditor = editor;
          editor.on("keyup", function (e) {
            scop.contentEditorValue = editor.getContent();
            scop.$emit("change", scop.contentEditorValue);
          });
        },
        image_dimensions: false,
        // không cho phép sửa width và height của hình ảnh
        media_dimensions: false,
        // không cho phép sửa width và height của media
        fontsize_formats: "8px 10px 12px 14px 16px 18px 24px 36px 38px 40px",
        relative_urls: false,
        remove_script_host: false,
        paste_auto_cleanup_on_paste: true,
        paste_remove_styles: true,
        // Xóa Style
        paste_remove_styles_if_webkit: true,
        // Xóa Style
        paste_strip_class_attributes: true,
        branding: false,
        convert_urls: false,
        // bỏ tự động thêm domain vào url
        paste_preprocess: function paste_preprocess(plugin, args) {
          // Xóa class và id trong element khi paste
          args.content = args.content.replace(/ id="(.*?)"/ig, "").replace(/ class="(.*?)"/ig, "");
        },
        media_url_resolver: function media_url_resolver(data, resolve) {
          // if (data.url.indexOf('YOUR_SPECIAL_VIDEO_URL') !== -1) {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          var match = data.ur.match(regExp);
          var videoId = match && match[2].length === 11 ? match[2] : null;
          var embedHtml = '<div class="youtube-iframe-url" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="//www.youtube.com/embed/' + videoId + '" style="position: absolute;top: 0;left: 0;width: 100%; height: 100%;" ></iframe></div>';
          resolve({
            html: embedHtml
          }); // } else {
          //   resolve({html: ''});
          // }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".media .nav-tabs a[data-v-3b025273]:hover {\n  cursor: pointer;\n}\n.media .check[data-v-3b025273] {\n  opacity: 0.5;\n  color: #996;\n}\n.media .upload-files[data-v-3b025273] {\n  text-align: center;\n  margin: 6% auto;\n}\n.media .upload-files input[data-v-3b025273] {\n  width: 300px;\n  margin: 0 auto;\n}\n.media .list-media[data-v-3b025273] {\n  overflow: auto;\n  height: calc(100vh - 320px);\n}\n.media .list-media ul[data-v-3b025273] {\n  padding: 0;\n  list-style-type: none;\n}\n.media .list-media ul li[data-v-3b025273] {\n  display: inline-block;\n}\n.media .list-media .media-file[data-v-3b025273] {\n  height: 130px;\n}\n.media .list-media img[data-v-3b025273] {\n  width: 100%;\n  height: 100%;\n  border-width: 0;\n}\n.media .list-media input[type=checkbox][data-v-3b025273] {\n  display: none;\n}\n.media .list-media label[data-v-3b025273] {\n  border: 1px solid #fff;\n  padding: 10px;\n  display: block;\n  position: relative;\n  margin: 10px;\n  cursor: pointer;\n}\n.media .list-media label[data-v-3b025273]:before {\n  background-color: white;\n  color: white;\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  border: 1px solid #286090;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 23px;\n  height: 23px;\n  text-align: center;\n  line-height: 28px;\n  transition-duration: 0.4s;\n  transform: scale(0);\n}\n.media .list-media label img[data-v-3b025273] {\n  height: 100px;\n  width: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.media .list-media ul li :checked + label[data-v-3b025273] {\n  border-color: #ddd;\n}\n.media .list-media ul li :checked + label[data-v-3b025273]:before {\n  background-image: url(/images/uploader-icons.png);\n  background-position: -17px 3px;\n  background-color: #286090;\n  transform: scale(1);\n}\n.media .list-media ul li :checked + label img[data-v-3b025273] {\n  transform: scale(0.9);\n  box-shadow: 0 0 5px #333;\n  z-index: 9999;\n}\n.media .loading-media[data-v-3b025273],\n.media .media-null[data-v-3b025273] {\n  text-align: center;\n}\n.media .loading-media img[data-v-3b025273] {\n  width: 35px;\n}\n.media .media_filter_date[data-v-3b025273] {\n  margin-bottom: 5px;\n}\n.media .modal-full[data-v-3b025273] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n.media .modal-full .modal-dialog-media[data-v-3b025273] {\n  position: fixed;\n  margin: 0;\n  width: 96%;\n  height: 96%;\n  padding: 0;\n  left: 2%;\n  top: 2%;\n}\n.media .modal-full .modal-content[data-v-3b025273] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.media .modal-full .modal-body[data-v-3b025273] {\n  position: absolute;\n  top: 50px;\n  overflow: auto;\n  width: 100%;\n}\n.media .modal-full .modal-footer[data-v-3b025273] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 60px;\n  background: #fff;\n}\n.media .list-images[data-v-3b025273] {\n  position: relative;\n  min-height: 110px;\n}\n.media .list-images .item-border[data-v-3b025273] {\n  border: 1px solid #dee2e6;\n  margin-right: 12px;\n}\n.media .list-images .item[data-v-3b025273] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  margin-bottom: 12px;\n}\n.media .list-images .item img[data-v-3b025273] {\n  height: 98px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.media .list-images .item[data-v-3b025273]:hover {\n  opacity: 0.8;\n}\n.media .list-images .item .remove-img[data-v-3b025273] {\n  position: absolute;\n  top: -8px;\n  right: -5px;\n  font-size: 16px;\n  color: #71b6f9;\n}\n.media .list-images .item .remove-img i[data-v-3b025273] {\n  background: #ffffff;\n  border-radius: 50%;\n}\n.media .list-images .item .remove-img[data-v-3b025273]:hover {\n  color: #e0810c;\n  cursor: pointer;\n}\n.media .list-images .item-add[data-v-3b025273] {\n  border: 1px dashed #71b6f9;\n  color: #71b6f9;\n  font-size: 20px;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 0;\n  position: absolute;\n  padding-top: 33px;\n  text-align: center;\n  margin-bottom: 12px;\n  display: inline-block;\n  width: 100px;\n  margin-bottom: 12px;\n}\n.media .list-images .item-add[data-v-3b025273]:hover {\n  background: #71b6f914;\n  cursor: pointer;\n}\n.media .img-by-attribute .img-attribute[data-v-3b025273] {\n  text-align: center;\n  width: 100px;\n  height: 110px;\n  margin-right: 12px;\n  position: relative;\n}\n.media .img-by-attribute .img-attribute .l-icon[data-v-3b025273] {\n  border: 1px dashed #71b6f9;\n  color: #71b6f9;\n  font-size: 20px;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media .img-by-attribute .img-attribute .l-icon[data-v-3b025273]:hover {\n  background: #71b6f914;\n  cursor: pointer;\n}\n.media .img-by-attribute .l-img[data-v-3b025273] {\n  border: 1px solid #e9e9e9;\n}\n.media .img-by-attribute .l-img img[data-v-3b025273] {\n  width: 100%;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.media .img-by-attribute .attribute-value[data-v-3b025273] {\n  color: #6c757d;\n  margin-top: 5px;\n  font-size: 13px;\n}\n.media .img-by-attribute .img-attribute .remove-img[data-v-3b025273] {\n  position: absolute;\n  top: -8px;\n  right: -5px;\n  font-size: 16px;\n  color: #71b6f9;\n}\n.media .img-by-attribute .img-attribute .remove-img i[data-v-3b025273] {\n  background: #ffffff;\n  border-radius: 50%;\n}\n.media .img-by-attribute .remove-img[data-v-3b025273]:hover {\n  color: #e0810c;\n  cursor: pointer;\n}\n.media .media-editor[data-v-3b025273] {\n  width: 100%;\n}\n.media .media-avatar[data-v-3b025273] {\n  width: 100%;\n}\n.media .media-avatar .img-preview img[data-v-3b025273] {\n  max-width: 200px !important;\n}\n.media .media-avatar .img-preview[data-v-3b025273]:hover {\n  cursor: pointer;\n  opacity: 0.7;\n}\n@media (min-width: 576px) {\n.media .modal-dialog-media[data-v-3b025273] {\n    max-width: 100%;\n}\n}\n@media (max-height: 500px) {\n.media .list-media[data-v-3b025273] {\n    height: calc(100vh - 265px);\n}\n}\n@media screen and (max-width: 370px) {\n.media .upload-media a[data-v-3b025273],\n.media .media-list a[data-v-3b025273],\n.media .upload-media-get a[data-v-3b025273],\n.media .media-list-get a[data-v-3b025273] {\n    font-size: 11px;\n    padding: 10px 3px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=style&index=0&id=3b025273&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/Modules/Admin/Resources/js/components/Media.vue?vue&type=template&id=3b025273&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "media" }, [
    _vm.mediaType == 1
      ? _c(
          "button",
          {
            staticClass: "btn btn-light",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.initMedia()
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-music",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v("Media\n  ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mediaType == 2
      ? _c(
          "div",
          { staticClass: "img-by-attribute" },
          _vm._l(_vm.attributeImgs, function(item, i) {
            return _c(
              "div",
              {
                key: item.value,
                staticClass: "d-inline-block m-b-12 img-attribute"
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !item.img,
                        expression: "!item.img"
                      }
                    ],
                    staticClass: "l-icon",
                    on: {
                      click: function($event) {
                        return _vm.initMedia(i)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fe-plus" })]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.img,
                        expression: "item.img"
                      }
                    ],
                    staticClass: "l-img"
                  },
                  [
                    _c("img", {
                      directives: [
                        {
                          name: "lazy",
                          rawName: "v-lazy",
                          value: item.img,
                          expression: "item.img"
                        }
                      ]
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "attribute-value" }, [
                  _vm._v(_vm._s(item.value))
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.img,
                        expression: "item.img"
                      }
                    ],
                    staticClass: "remove-img",
                    on: {
                      click: function($event) {
                        return _vm.removeImg(i)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fe-x-circle" }),
                    _vm._v(" "),
                    _c("span")
                  ]
                )
              ]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mediaType == 3
      ? _c(
          "div",
          { staticClass: "list-images" },
          [
            _vm._l(_vm.listImages, function(item, i) {
              return _c(
                "div",
                { key: item.i, staticClass: "item item-border" },
                [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: item.url,
                        expression: "item.url"
                      }
                    ]
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "remove-img",
                      on: {
                        click: function($event) {
                          return _vm.removeImg(i)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fe-x-circle" })]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "item item-add",
                on: {
                  click: function($event) {
                    return _vm.initMedia()
                  }
                }
              },
              [_c("i", { staticClass: "fe-plus" })]
            )
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mediaType == 4
      ? _c("div", { staticClass: "media-editor" }, [
          _c("div", { staticClass: "m-b-5" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-light",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.initMedia()
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "fa fa-music",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Media\n      ")
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.openAddStyleModal()
                  }
                }
              },
              [
                _c("i", {
                  staticClass: "fa fa-file",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Add style\n      ")
              ]
            )
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.contentEditorValue,
                expression: "contentEditorValue"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "editor_content_" + _vm.randomIndex, rows: "5" },
            domProps: { value: _vm.contentEditorValue },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.contentEditorValue = $event.target.value
              }
            }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.mediaType == 5
      ? _c("div", { staticClass: "media-avatar" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.avatar,
                  expression: "avatar"
                }
              ],
              staticClass: "text-center img-preview",
              on: {
                click: function($event) {
                  return _vm.initMedia()
                }
              }
            },
            [
              _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: _vm.avatar,
                    expression: "avatar"
                  }
                ],
                staticClass: "img-thumbnail"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.avatar,
                  expression: "!avatar"
                }
              ],
              staticClass: "text-center"
            },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      return _vm.initMedia()
                    }
                  }
                },
                [_vm._v("Chọn ảnh")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.avatar,
                  expression: "avatar"
                }
              ],
              staticClass: "remove-avatar text-center m-t-12"
            },
            [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      return _vm.removeAvatar()
                    }
                  }
                },
                [_vm._v("Xóa ảnh")]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal animated bounceIn modal-full",
        attrs: {
          id: "media_" + _vm.randomIndex,
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-media" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("ul", { staticClass: "nav nav-tabs" }, [
                _c(
                  "li",
                  {
                    staticClass: "nav-item upload-media",
                    on: {
                      click: function($event) {
                        _vm.tab = "upload"
                      }
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        class:
                          _vm.tab == "upload" ? "nav-link active" : "nav-link",
                        attrs: { "data-toggle": "tab" }
                      },
                      [_vm._v("Tải lên tập tin")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "nav-item media-list",
                    on: {
                      click: function($event) {
                        _vm.tab = "list"
                      }
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        class:
                          _vm.tab == "list" ? "nav-link active" : "nav-link",
                        attrs: { "data-toggle": "tab" }
                      },
                      [_vm._v("Thư viện")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content" }, [
                _c(
                  "div",
                  {
                    class: _vm.tab == "upload" ? "tab-pane active" : "tab-pane"
                  },
                  [
                    _c("div", { staticClass: "upload-files" }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isUpload,
                              expression: "!isUpload"
                            }
                          ]
                        },
                        [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "file", multiple: "" },
                            on: { change: _vm.onFileChange }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isUpload,
                              expression: "isUpload"
                            }
                          ]
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: "/images/loading-1.gif",
                              width: "100px"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.tab == "list" ? "tab-pane active" : "tab-pane" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.date,
                                  expression: "search.date"
                                }
                              ],
                              staticClass: "form-control media_filter_date",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.search,
                                    "date",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { value: "all", selected: "selected" }
                                },
                                [_vm._v("Tất cả")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.months, function(month) {
                                return _c(
                                  "option",
                                  {
                                    key: month.value,
                                    domProps: { value: month.value }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(month.title) +
                                        "\n                      "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.search.keyword,
                                expression: "search.keyword"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Từ khóa cần tìm"
                            },
                            domProps: { value: _vm.search.keyword },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.search,
                                  "keyword",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.searchMedia()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    Tìm kiếm\n                  "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "list-media",
                        attrs: { id: "list-media" }
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "data" },
                          _vm._l(_vm.medias, function(media) {
                            return _c("li", { key: media.id }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.checkedFiles,
                                    expression: "checkedFiles"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: _vm.randomIndex + "cb" + media.id
                                },
                                domProps: {
                                  value: media,
                                  checked: Array.isArray(_vm.checkedFiles)
                                    ? _vm._i(_vm.checkedFiles, media) > -1
                                    : _vm.checkedFiles
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.CheckImg(media, $event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.checkedFiles,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = media,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.checkedFiles = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.checkedFiles = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.checkedFiles = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  attrs: {
                                    for: _vm.randomIndex + "cb" + media.id
                                  }
                                },
                                [_c("img", { attrs: { src: media.thumbnail } })]
                              )
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.loadingMedia,
                                expression: "loadingMedia"
                              }
                            ],
                            staticClass: "loading-media"
                          },
                          [
                            _c("img", {
                              attrs: { src: "/images/loading-1.gif" }
                            }),
                            _vm._v(" Loading\n                ")
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showLoadMore,
                                  expression: "showLoadMore"
                                }
                              ],
                              staticClass: "btn btn-light",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.loadMedia()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    Tải thêm ...\n                  "
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: {
                    disabled: _vm.checkedFiles.length == 0,
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      return _vm.deleteFile()
                    }
                  }
                },
                [_vm._v("\n            Xóa\n          ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    disabled: _vm.checkedFiles.length == 0,
                    type: "button"
                  },
                  on: {
                    click: function($event) {
                      return _vm.insert()
                    }
                  }
                },
                [_vm._v("\n            Áp dụng\n          ")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal animated bounceIn add-style-modal",
        attrs: {
          id: "add_style_modal_" + _vm.randomIndex,
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              _vm._l(_vm.addStyleDatas, function(value, key) {
                return _c("div", {
                  key: "add_style_" + key,
                  staticClass: "item",
                  class: { active: _vm.addStyleSelect == key },
                  domProps: { innerHTML: _vm._s(value) },
                  on: {
                    click: function($event) {
                      _vm.addStyleSelect = key
                    }
                  }
                })
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-light",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("\n            Hủy\n          ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    disabled: _vm.addStyleSelect == null
                  },
                  on: { click: _vm.insertStyle }
                },
                [_vm._v("\n            Sử dụng\n          ")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header border-0" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Media")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n            ×\n          ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title", attrs: { id: "myModalLabel" } }, [
        _vm._v("Add Style")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n            ×\n          ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 20:
/*!***********************************************************************!*\
  !*** multi ./app/Modules/Admin/Resources/js/page-categories/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Laginza\mua_ho\app\Modules\Admin\Resources\js\page-categories\index.js */"./app/Modules/Admin/Resources/js/page-categories/index.js");


/***/ })

/******/ });