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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Modules/Admin/Resources/js/products/setting.js":
/*!************************************************************!*\
  !*** ./app/Modules/Admin/Resources/js/products/setting.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

new Vue({
  el: '#product_setting',
  data: {
    isLoading: false,
    submitUrl: null,
    settings: [],
    addSetting: {},
    editKey: null,
    errors: [],
    addErrors: []
  },
  created: function created() {
    this.submitUrl = $('#submitUrl').val();
    this.settings = JSON.parse($('#settings').val());
    this.addSettingDefault();
  },
  methods: {
    addSettingDefault: function addSettingDefault() {
      this.addSetting = {
        id: null,
        label: null,
        key: null,
        value: null,
        type: null,
        "default": null,
        icon: null
      };
    },
    editAttr: function editAttr(setting, key) {
      this.addSetting = setting;
      this.editKey = key;
      $('#addSettingModal').modal('show');
    },
    deleteAttr: function deleteAttr(key) {
      this.settings.splice(key, 1);
    },
    showModalAdd: function showModalAdd() {
      this.addSettingDefault();
      this.editKey = null;
      $('#addSettingModal').modal('show');
    },
    addParam: function addParam() {
      this.addErrors = [];

      if (!this.addSetting.label) {
        this.addErrors['label'] = 'Vui lòng nhập tên thuộc tính';
      }

      if (!this.addSetting.key) {
        this.addErrors['key'] = 'Vui lòng nhập mã thuộc tính';
      }

      if (!this.addSetting.type) {
        this.addErrors['type'] = 'Vui lòng chọn loại thuộc tính';
      }

      if (this.addSetting.type == 'select' && !this.addSetting["default"]) {
        this.addErrors['default'] = 'Vui lòng nhập dữ liệu mặc định';
      }

      if (Object.keys(this.addErrors).length == 0) {
        if (this.editKey !== null) {
          this.settings[this.editKey] = this.addSetting;
        } else {
          this.settings.push(this.addSetting);
        }

        $('#addSettingModal').modal('hide');
      }
    },
    handleSubmit: function handleSubmit() {
      var scop = this;
      scop.errors = [];
      $.each(scop.settings, function (index, setting) {
        if (!setting.value) {
          scop.errors[index] = 'Vui lòng nhập giá trị';
        }
      });

      if (Object.keys(scop.errors).length == 0) {
        $('.form-loading .loading').css('display', 'flex');
        axios({
          method: 'POST',
          url: scop.submitUrl,
          data: {
            settings: scop.settings
          }
        }).then(function (response) {
          var data = response.data;

          if (data.status === 200) {
            Swal.fire({
              icon: 'success',
              title: '',
              text: data.message
            }).then(function (result) {});
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: data.message,
              footer: ''
            });
          }

          $('.form-loading .loading').css('display', 'none');
        })["catch"](function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
            footer: ''
          });
          $('.form-loading .loading').css('display', 'none');
        });
      }
    }
  }
});

/***/ }),

/***/ 11:
/*!******************************************************************!*\
  !*** multi ./app/Modules/Admin/Resources/js/products/setting.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Laginza\mua_ho\app\Modules\Admin\Resources\js\products\setting.js */"./app/Modules/Admin/Resources/js/products/setting.js");


/***/ })

/******/ });