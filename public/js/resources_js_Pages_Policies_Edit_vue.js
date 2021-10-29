(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Policies_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['message']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['value']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/lib/esm/index.js");
/* harmony import */ var _Layouts_NewLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Layouts/NewLayout */ "./resources/js/Layouts/NewLayout.vue");
/* harmony import */ var _Shared_Fields_PolicyFieldsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Fields/PolicyFieldsList */ "./resources/js/Shared/Fields/PolicyFieldsList.vue");
/* harmony import */ var _Shared_Contact_ContactList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Contact/ContactList */ "./resources/js/Shared/Contact/ContactList.vue");
/* harmony import */ var _Shared_Contact_SelectContact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/Contact/SelectContact */ "./resources/js/Shared/Contact/SelectContact.vue");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_DateRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Shared/DateRange */ "./resources/js/Shared/DateRange.vue");
/* harmony import */ var _Shared_HistoryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Shared/HistoryModal */ "./resources/js/Shared/HistoryModal.vue");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.vue");
/* harmony import */ var _Jetstream_Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Jetstream/Label */ "./resources/js/Jetstream/Label.vue");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _Shared_CurrencyTextBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Shared/CurrencyTextBox */ "./resources/js/Shared/CurrencyTextBox.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ExclamationIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.ExclamationIcon,
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_2__.TrashIcon,
    JetInput: _Jetstream_Input__WEBPACK_IMPORTED_MODULE_11__.default,
    JetLabel: _Jetstream_Label__WEBPACK_IMPORTED_MODULE_12__.default,
    JetInputError: _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_13__.default,
    PolicyFieldsList: _Shared_Fields_PolicyFieldsList__WEBPACK_IMPORTED_MODULE_5__.default,
    ContactList: _Shared_Contact_ContactList__WEBPACK_IMPORTED_MODULE_6__.default,
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_8__.default,
    SelectContact: _Shared_Contact_SelectContact__WEBPACK_IMPORTED_MODULE_7__.default,
    DateRange: _Shared_DateRange__WEBPACK_IMPORTED_MODULE_9__.default,
    DatePicker: v_calendar__WEBPACK_IMPORTED_MODULE_3__.DatePicker,
    HistoryModal: _Shared_HistoryModal__WEBPACK_IMPORTED_MODULE_10__.default,
    CurrencyTextBox: _Shared_CurrencyTextBox__WEBPACK_IMPORTED_MODULE_14__.default
  },
  layout: _Layouts_NewLayout__WEBPACK_IMPORTED_MODULE_4__.default,
  props: {
    errors: {
      type: Object,
      required: true
    },
    policy: {
      type: Object,
      required: true
    },
    fields: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    users: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var _props$policy$fields;

    var policyForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      number: props.policy.number,
      contacts: props.policy.contacts,
      created_at: props.policy.created_at,
      range: {
        start: props.policy.period_start,
        end: props.policy.period_end
      },
      fields: (_props$policy$fields = props.policy.fields) !== null && _props$policy$fields !== void 0 ? _props$policy$fields : [],
      agent_id: props.policy.agent_id,
      premium: props.policy.premium
    });
    var sending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var fieldFormShown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function updatePolicy() {
      policyForm.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          period_start: data.range.start,
          period_end: data.range.end
        });
      }).put(route('policies.update', props.policy.id));
    }

    var premium = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.policy.premium);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(premium, function () {
      return console.log(policyForm.premium.amount);
    });

    function destroy() {
      // TODO check if contact is associated with a policy
      if (window.confirm('Are you sure you want to delete this policy?')) {
        policyForm["delete"](route('policies.destroy', props.policy.id));
      }
    }

    function restore() {
      if (window.confirm('Are you sure you want to restore this policy?')) {
        policyForm.put(route('policies.restore', props.policy.id));
      }
    }

    function contactSelected(contact) {
      policyForm.contacts.push(contact);
    }

    function handleContactClick(contact) {
      window.open(contact.link, '_blank').focus();
    }

    return {
      policyForm: policyForm,
      sending: sending,
      fieldFormShown: fieldFormShown,
      updatePolicy: updatePolicy,
      destroy: destroy,
      restore: restore,
      contactSelected: contactSelected,
      handleContactClick: handleContactClick
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__.XIcon
  },
  props: {
    contacts: {
      type: Array,
      required: true
    },
    removable: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['contactClicked'],
  setup: function setup(props) {
    function removeContact(contact) {
      _.pull(props.contacts, contact);
    }

    return {
      removeContact: removeContact
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__.default
  },
  emits: ['selected'],
  setup: function setup() {
    var isOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var results = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var selectedContact = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var cancelSource = null;

    var search = _.debounce(function () {
      if (cancelSource) {
        cancelSource.cancel();
      }

      cancelSource = axios.CancelToken.source();

      if (searchTerm.value === '') {
        results.value = [];
        return;
      }

      axios.get(route('contacts'), {
        params: {
          search: searchTerm.value
        },
        cancelToken: cancelSource.token
      }).then(function (response) {
        loading.value = false;

        if (response) {
          results.value = response.data;
          cancelSource = null;
        }
      });
    }, 400);

    function refreshSearch() {
      loading.value = true;
      search();
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(searchTerm, function () {
      return refreshSearch();
    });
    return {
      isOpen: isOpen,
      searchTerm: searchTerm,
      results: results,
      loading: loading,
      refreshSearch: refreshSearch,
      selectedContact: selectedContact
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _easymoney_money__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @easymoney/money */ "./node_modules/@easymoney/money/dist/index.es.js");
/* harmony import */ var _easymoney_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @easymoney/formatter */ "./node_modules/@easymoney/formatter/dist/index.es.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util.js */ "./resources/js/util.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup: function setup(props, context) {
    var focused = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var currency = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.modelValue.currency);
    var rawValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.addDecimal)(props.modelValue.amount, props.modelValue.subunit));

    function stripDecimal(val) {
      return val.replaceAll('.', '');
    }

    function getMoney() {
      return (0,_easymoney_money__WEBPACK_IMPORTED_MODULE_2__.createMoney)({
        amount: stripDecimal(rawValue.value),
        currency: currency.value
      });
    }

    function handleFocus() {
      focused.value = true;
    }

    function handleBlur() {
      focused.value = false;
    }

    function hasEnoughCents(value) {
      return value.match(/(.\d{3,})$/gm);
    }

    function handlePaste(e) {
      e.preventDefault();
    }

    var formattedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
      get: function get() {
        if (focused.value === false) {
          if (errors.value.length > 0) {
            return rawValue.value;
          }

          return (0,_easymoney_formatter__WEBPACK_IMPORTED_MODULE_3__.createMoneyIntlFormatter)().format(getMoney());
        }

        return rawValue.value;
      },
      set: function set(value) {
        var regex = /^(\d*\.{0,1}\d*)$/gm;

        if (value.match(regex)) {
          errors.value = [];
        } else {
          errors.value.push('Value is invalid');
        }

        if (!hasEnoughCents(value) && errors.value.length === 0) {
          rawValue.value = value;

          var newVal = _objectSpread({}, props.modelValue);

          newVal.amount = stripDecimal(value);
          context.emit('update:modelValue', newVal);
        }
      }
    });
    return {
      formattedValue: formattedValue,
      handleFocus: handleFocus,
      handleBlur: handleBlur,
      errors: errors,
      handlePaste: handlePaste,
      rawValue: rawValue
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/lib/esm/index.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DatePicker: v_calendar__WEBPACK_IMPORTED_MODULE_0__.DatePicker,
    CalendarIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.CalendarIcon,
    ArrowRightIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.ArrowRightIcon
  },
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {
      masks: {
        input: 'MM-DD-YYYY'
      }
    };
  },
  computed: {
    value: {
      get: function get() {
        return this.modelValue;
      },
      set: function set(value) {
        this.$emit('update:modelValue', value);
      }
    },
    minDate: function minDate() {
      var now = new Date();

      if (new Date(this.modelValue.start) < now) {
        return this.modelValue.start;
      }

      return now;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.vue");
/* harmony import */ var _Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Jetstream/Label */ "./resources/js/Jetstream/Label.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    JetInput: _Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__.default,
    JetLabel: _Jetstream_Label__WEBPACK_IMPORTED_MODULE_2__.default
  },
  emits: ['added'],
  setup: function setup(props, context) {
    var field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: null,
      value: null
    });
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    function validate() {
      errors = [];

      if (field.name) {
        return true;
      }

      errors.value.push('Field name is required');
      return false;
    }

    function reset() {
      field.name = null;
      field.value = null;
    }

    function add() {
      if (!validate()) return;
      context.emit('added', _objectSpread({}, field));
      reset();
    }

    return {
      field: field,
      errors: errors,
      reset: reset,
      add: add
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/Input */ "./resources/js/Jetstream/Input.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    JetInput: _Jetstream_Input__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  emits: ['delete'],
  setup: function setup() {
    var fieldHover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var editing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function deleteField() {
      this.confirming = false;
    }

    return {
      fieldHover: fieldHover,
      editing: editing,
      deleteField: deleteField
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _Shared_Fields_NewPolicyField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Fields/NewPolicyField */ "./resources/js/Shared/Fields/NewPolicyField.vue");
/* harmony import */ var _Shared_Fields_PolicyField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Fields/PolicyField */ "./resources/js/Shared/Fields/PolicyField.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NewPolicyField: _Shared_Fields_NewPolicyField__WEBPACK_IMPORTED_MODULE_2__.default,
    PolicyField: _Shared_Fields_PolicyField__WEBPACK_IMPORTED_MODULE_3__.default,
    PlusSmIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.PlusSmIcon,
    TrashIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.TrashIcon
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    editable: {
      type: Boolean,
      "default": true
    }
  },
  emits: ['fieldAdded', 'fieldDeleted'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var newFieldClicked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var confirmingDeleteField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var anyFieldAdded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var fieldFormShown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var fieldsEmpty = props.fields.length < 1;
      return newFieldClicked.value || fieldsEmpty || anyFieldAdded;
    });

    function handleNewFieldClick() {
      newFieldClicked.value = true;
    }

    function handleFieldAdded(field) {
      emit('fieldAdded', field);
      anyFieldAdded.value = true;
    }

    function handleFieldDeleted(field) {
      emit('fieldDeleted', field);
    }

    return {
      newFieldClicked: newFieldClicked,
      fieldFormShown: fieldFormShown,
      confirmingDeleteField: confirmingDeleteField,
      anyFieldAdded: anyFieldAdded,
      handleNewFieldClick: handleNewFieldClick,
      handleFieldAdded: handleFieldAdded,
      handleFieldDeleted: handleFieldDeleted
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    history: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var _Jetstream_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Jetstream/Label */ "./resources/js/Jetstream/Label.vue");
/* harmony import */ var _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Jetstream/InputError */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _HistoryItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HistoryItem.vue */ "./resources/js/Shared/HistoryItem.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Dialog: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.Dialog,
    DialogOverlay: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DialogOverlay,
    DialogTitle: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DialogTitle,
    DialogDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.DialogDescription,
    JetLabel: _Jetstream_Label__WEBPACK_IMPORTED_MODULE_3__.default,
    JetInputError: _Jetstream_InputError__WEBPACK_IMPORTED_MODULE_4__.default,
    HistoryItem: _HistoryItem_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  props: {
    policy: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var isOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var histories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var cancelSource = null;
    var historyForm = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      message: '',
      policy_id: props.policy.id,
      event_type: 'note'
    });

    function loadHistory() {
      if (cancelSource) {
        cancelSource.cancel();
      }

      cancelSource = axios.CancelToken.source();
      loading.value = true;
      axios.get(route('histories.index'), {
        cancelToken: cancelSource.token,
        params: {
          'filter[policy_id]': props.policy.id
        }
      }).then(function (response) {
        if (response) {
          histories.value = response.data;
          loading.value = false;
          cancelSource = null;
        }
      });
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(loadHistory);

    function setIsOpen(state) {
      isOpen.value = state;
    }

    function handleAdd() {
      historyForm.post('/histories', {
        onSuccess: function onSuccess() {
          historyForm.reset();
          loadHistory();
        }
      });
    }

    function handleClose() {
      historyForm.reset();
      setIsOpen(false);
    }

    return {
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      historyForm: historyForm,
      histories: histories,
      handleAdd: handleAdd,
      handleClose: handleClose
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(props) {
    var _this = this;

    var delayedLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var delayId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.loading);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(loading, function (val) {
      // Only show the loading spinner icon if the request has taken longer than 100ms
      if (val === false) {
        // If no longer loading, disable spinner immediately
        _this.delayedLoading = false;
        clearTimeout(_this.delayId);
      } else {
        clearTimeout(_this.delayId);
        _this.delayId = setTimeout(function () {
          _this.delayedLoading = true;
        }, 100);
      }
    });
    return {
      delayedLoading: delayedLoading,
      delayId: delayId
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("input", {
    ref: "input",
    "class": "\n            border-cool-grey-300\n            focus:border-light-blue-vivid-300\n            focus:ring\n            focus:ring-light-blue-vivid-200\n            focus:ring-opacity-50\n            rounded-md\n            shadow-sm\n        ",
    value: $props.modelValue,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , ["value"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-sm text-red-vivid-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message), 1
  /* TEXT */
  )], 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.message]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "block font-medium text-sm text-cool-grey-700 md:mt-2"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("label", _hoisted_1, [$props.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.value), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "font-bold py-5"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Policies ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-light-blue-vivid-400 font-medium"
}, " /", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex max-w-3xl mb-2"
};
var _hoisted_5 = {
  "class": "bg-white rounded shadow overflow-hidden max-w-3xl"
};
var _hoisted_6 = {
  key: 0,
  "class": "bg-yellow-200 flex items-center justify-between p-5 pl-8"
};
var _hoisted_7 = {
  "class": "flex"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This policy is deleted ");

var _hoisted_9 = {
  key: 1,
  "class": "bg-red-vivid-200 flex items-center justify-between p-5 pl-8"
};
var _hoisted_10 = {
  "class": "flex items-center"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-lg"
}, " This policy does not have any policyholders ", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "p-8"
};
var _hoisted_13 = {
  "class": "mb-5"
};
var _hoisted_14 = {
  "class": "mb-5"
};
var _hoisted_15 = {
  "class": "mb-5"
};
var _hoisted_16 = {
  "class": "mb-5"
};
var _hoisted_17 = {
  "class": "mb-5"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-cool-grey-600 text-sm text-left"
}, " Period of Insurance ", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Policyholders ");

var _hoisted_20 = {
  "class": "px-8 py-4 bg-cool-grey-50 flex justify-between items-center"
};
var _hoisted_21 = {
  "class": "flex items-baseline"
};
var _hoisted_22 = {
  key: 0,
  "class": "mr-5 text-cool-grey-400 italic"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update policy ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-head");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_HistoryModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HistoryModal");

  var _component_trash_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trash-icon");

  var _component_exclamation_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("exclamation-icon");

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-picker");

  var _component_CurrencyTextBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CurrencyTextBox");

  var _component_date_range = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-range");

  var _component_policy_fields_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("policy-fields-list");

  var _component_contact_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("contact-list");

  var _component_select_contact = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("select-contact");

  var _component_loading_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loading-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_head, {
    title: "Edit Policy"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": "\n                    text-light-blue-vivid-400\n                    hover:text-light-blue-vivid-600\n                ",
    href: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.policyForm.number), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_HistoryModal, {
    policy: $props.policy
  }, null, 8
  /* PROPS */
  , ["policy"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [$props.policy.deleted_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_trash_icon, {
    "class": "h-5 mr-2 w-5"
  }), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "btn hover:underline",
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.restore && $setup.restore.apply($setup, arguments);
    })
  }, " Restore ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.policyForm.contacts.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_exclamation_icon, {
    "class": "h-5 mr-2 w-5"
  }), _hoisted_11])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "number",
    value: "Policy Number"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "number",
    modelValue: $setup.policyForm.number,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.policyForm.number = $event;
    }),
    type: "text",
    "class": "block w-full"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $setup.policyForm.errors.number
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Date Issued"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_picker, {
    modelValue: $setup.policyForm.created_at,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.policyForm.created_at = $event;
    }),
    mode: "dateTime"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var inputValue = _ref.inputValue;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        id: "created_at",
        value: inputValue,
        type: "text",
        "class": "block w-full text-cool-grey-400",
        readonly: ""
      }, null, 8
      /* PROPS */
      , ["value"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Assigned Agent"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    id: "agent",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.policyForm.agent_id = $event;
    }),
    "class": "border border-cool-grey-200 mr-5 rounded mt-1"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.users, function (agent) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: agent.id,
      value: agent.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(agent.name), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.policyForm.agent_id]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Premium"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CurrencyTextBox, {
    id: "premium",
    modelValue: $setup.policyForm.premium,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.policyForm.premium = $event;
    }),
    "class": "border border-cool-grey-200 mr-5 rounded mt-1"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_range, {
    modelValue: $setup.policyForm.range,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.policyForm.range = $event;
    })
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_policy_fields_list, {
    "class": "mb-5",
    fields: $setup.policyForm.fields,
    policy: $props.policy,
    onFieldAdded: _cache[7] || (_cache[7] = function (field) {
      return $setup.policyForm.fields.push(field);
    })
  }, null, 8
  /* PROPS */
  , ["fields", "policy"]), $setup.policyForm.contacts.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_contact_list, {
    key: 0,
    contacts: $setup.policyForm.contacts,
    "class": "mb-5",
    removable: "",
    onContactClicked: $setup.handleContactClick
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["contacts", "onContactClicked"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_select_contact, {
    onSelected: $setup.contactSelected
  }, null, 8
  /* PROPS */
  , ["onSelected"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [!$props.policy.deleted_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 0,
    "class": "text-red-vivid-600 hover:underline",
    tabindex: "-1",
    type: "button",
    onClick: _cache[8] || (_cache[8] = function () {
      return $setup.destroy && $setup.destroy.apply($setup, arguments);
    })
  }, " Delete policy ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [$setup.policyForm.isDirty ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_22, " Unsaved Changes ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loading_button, {
    "class": "btn btn-primary",
    type: "submit",
    loading: $setup.policyForm.processing,
    onClick: $setup.updatePolicy
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["loading", "onClick"])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "group cursor-pointer flex items-center justify-between"
};
var _hoisted_3 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  return $props.contacts.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.contacts, function (contact) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      key: contact.id,
      "class": "p-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      onClick: function onClick($event) {
        return _ctx.$emit('contactClicked', contact);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(contact.name)
    }, null, 8
    /* PROPS */
    , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(contact.address)
    }, null, 8
    /* PROPS */
    , ["textContent"])], 8
    /* PROPS */
    , ["onClick"]), $props.removable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: 0,
      title: "Remove policyholder",
      onClick: function onClick($event) {
        return $setup.removeContact(contact);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_XIcon, {
      "class": "h-5 w-5 ml-10 invisible group-hover:visible"
    })], 8
    /* PROPS */
    , ["onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noContacts")]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white p-2 rounded shadow"
};
var _hoisted_2 = {
  "class": "flex items-center"
};
var _hoisted_3 = {
  "class": "overflow-auto h-52 mt-2 pr-1"
};
var _hoisted_4 = {
  key: 0,
  "class": "space-y-2 mt-2"
};
var _hoisted_5 = {
  key: 1,
  "class": "italic text-cool-grey-400"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "None found", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.searchTerm = $event;
    }),
    type: "text",
    placeholder: "Search contacts...",
    "class": "border-cool-grey-200 rounded w-full"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]]), $setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    name: "spinner",
    "class": "\n                    -ml-8\n                    animate-spin\n                    fill-current\n                    h-6\n                    text-cool-grey-400\n                    w-6\n                "
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [$setup.results.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.results, function (contact) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      key: contact.id,
      "class": "hover:bg-light-blue-vivid-50 odd:bg-cool-grey-50"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
      "class": "cursor-pointer p-2 block",
      onClick: function onClick($event) {
        return _ctx.$emit('selected', contact);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(contact.name)
    }, null, 8
    /* PROPS */
    , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(contact.address)
    }, null, 8
    /* PROPS */
    , ["textContent"])], 8
    /* PROPS */
    , ["onClick"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : $setup.searchTerm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_5, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    ref: "textInput",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.formattedValue = $event;
    }),
    type: "text",
    inputmode: "decimal"
  }, _ctx.$attrs, {
    onFocus: _cache[2] || (_cache[2] = function () {
      return $setup.handleFocus && $setup.handleFocus.apply($setup, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function () {
      return $setup.handleBlur && $setup.handleBlur.apply($setup, arguments);
    }),
    onPaste: _cache[4] || (_cache[4] = function () {
      return $setup.handlePaste && $setup.handlePaste.apply($setup, arguments);
    })
  }), null, 16
  /* FULL_PROPS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.formattedValue]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors[0]), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col sm:flex-row justify-start items-center"
};
var _hoisted_2 = {
  "class": "relative flex-grow w-full"
};
var _hoisted_3 = {
  "class": "flex-shrink-0 m-2"
};
var _hoisted_4 = {
  "class": "relative flex-grow w-full"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CalendarIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CalendarIcon");

  var _component_ArrowRightIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArrowRightIcon");

  var _component_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-picker");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_date_picker, {
    modelValue: $options.value,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $options.value = $event;
    }),
    mode: "date",
    masks: $data.masks,
    "is-range": "",
    "is-required": "",
    "min-date": $options.minDate
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var inputValue = _ref.inputValue,
          inputEvents = _ref.inputEvents,
          isDragging = _ref.isDragging;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CalendarIcon, {
        "class": "\n                            text-cool-grey-600\n                            w-4\n                            h-full\n                            mx-2\n                            absolute\n                            pointer-events-none\n                        "
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        type: "text",
        "class": ["\n                            flex-grow\n                            pl-8\n                            pr-2\n                            py-1\n                            border border-cool-grey-300\n                            focus:border-light-blue-vivid-300\n                            focus:ring\n                            focus:ring-light-blue-vivid-200\n                            focus:ring-opacity-50\n                            rounded-md\n                            shadow-sm\n                            block\n                            w-full\n                            mt-1\n                        ", isDragging ? 'text-cool-grey-600' : 'text-cool-grey-900'],
        value: inputValue.start
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(inputEvents.start)), null, 16
      /* FULL_PROPS */
      , ["value"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArrowRightIcon, {
        "class": "w-4 h-4 stroke-current text-cool-grey-600"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CalendarIcon, {
        "class": "\n                            text-cool-grey-600\n                            w-4\n                            h-full\n                            mx-2\n                            absolute\n                            pointer-events-none\n                        "
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        type: "text",
        "class": ["\n                            flex-grow\n                            pl-8\n                            pr-2\n                            py-1\n                            border border-cool-grey-300\n                            focus:border-light-blue-vivid-300\n                            focus:ring\n                            focus:ring-light-blue-vivid-200\n                            focus:ring-opacity-50\n                            rounded-md\n                            shadow-sm\n                            block\n                            w-full\n                            mt-1\n                        ", isDragging ? 'text-cool-grey-600' : 'text-cool-grey-900'],
        value: inputValue.end
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(inputEvents.end)), null, 16
      /* FULL_PROPS */
      , ["value"])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "masks", "min-date"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-4 md:flex md:space-x-4 md:space-y-0 space-y-4"
};
var _hoisted_2 = {
  "class": "flex-auto"
};
var _hoisted_3 = {
  "class": "flex-auto"
};
var _hoisted_4 = {
  key: 0,
  "class": "text-red-vivid-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "number",
    value: "Field Name"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "name",
    modelValue: $setup.field.name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.field.name = $event;
    }),
    type: "text",
    "class": "w-full"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "number",
    value: "Field Value"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "value",
    modelValue: $setup.field.value,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.field.value = $event;
    }),
    type: "text",
    "class": "w-full"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "font-bold mt-4 hover:underline",
    type: "button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, " Add Field ")]), $setup.errors.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.errors, function (error, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      key: "error-".concat(index)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(error), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": "grid grid-cols-9 gap-5 mb-5",
    onMouseenter: _cache[1] || (_cache[1] = function ($event) {
      return $setup.fieldHover = true;
    }),
    onMouseleave: _cache[2] || (_cache[2] = function ($event) {
      return $setup.fieldHover = false;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "px-4 py-2 rounded col-span-4",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.name)
  }, null, 8
  /* PROPS */
  , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: 'input-' + $props.field.name,
    value: $props.field.value,
    type: "text",
    "class": "col-span-4 font-mono"
  }, null, 8
  /* PROPS */
  , ["id", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "delButton")], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "bg-yellow-100 p-3 text-sm rounded mb-5"
};
var _hoisted_2 = {
  key: 1,
  "class": "mr-5 mb-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Field ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_trash_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("trash-icon");

  var _component_policy_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("policy-field");

  var _component_new_policy_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("new-policy-field");

  var _component_plus_sm_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("plus-sm-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [$props.fields.length === 0 && $props.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, " No policy fields found ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.fields, function (field) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_policy_field, {
      key: field.id,
      field: field,
      "class": ""
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({
      _: 2
      /* DYNAMIC */

    }, [!field["protected"] ? {
      name: "delButton",
      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
          "class": "btn hover:bg-red-vivid-300 hover:text-white",
          onClick: function onClick($event) {
            return $setup.handleFieldDeleted(field);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_trash_icon, {
          "class": "w-5 h-5 mx-auto"
        })], 8
        /* PROPS */
        , ["onClick"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, true]])];
      })
    } : undefined]), 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["field"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])), $setup.fieldFormShown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_new_policy_field, {
    key: 2,
    onAdded: _cache[1] || (_cache[1] = function (field) {
      return $setup.handleFieldAdded(field);
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.editable && !$setup.fieldFormShown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 3,
    type: "button",
    "class": "btn btn-sm px-2 py-1 rounded flex items-center",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.handleNewFieldClick && $setup.handleNewFieldClick.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_plus_sm_icon, {
    "class": "h-5 w-5 mr-2"
  }), _hoisted_3])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "border-t"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "border-t italic font-bold px-2"
}, "Policy created", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "border-t"
};
var _hoisted_4 = {
  "class": "border-t"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "border-t italic font-bold px-2"
}, "Policy updated", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "border-t"
};
var _hoisted_7 = {
  "class": "border-t"
};
var _hoisted_8 = {
  "class": "border-t px-2"
};
var _hoisted_9 = {
  "class": "border-t"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.history.event_type === 'policy_created' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.created_at), 1
  /* TEXT */
  ), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.user_name), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  )) : $props.history.event_type === 'policy_updated' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.created_at), 1
  /* TEXT */
  ), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.user_name), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  )) : $props.history.event_type === 'note' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.created_at), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.message), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.history.user_name), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center justify-center min-h-screen"
};
var _hoisted_2 = {
  "class": "\n                    bg-white\n                    flex flex-col\n                    h-screen\n                    md:h-auto md:max-w-lg md:my-auto md:rounded md:shadow-2xl\n                    relative\n                    w-full\n                "
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" History of Facts ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Displays a history of facts");

var _hoisted_5 = {
  key: 0,
  "class": "\n                        flex-grow\n                        md:max-h-96 md:mx-7 md:my-5\n                        mx-2\n                        my-4\n                        overflow-y-scroll\n                    "
};
var _hoisted_6 = {
  "class": "font-mono w-full text-xs table-fixed"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "w-2/12"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "w-6/12"
}, "Message"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "w-2/12"
}, "Agent")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "md:mx-7 md:my-5 mx-2 my-4"
};
var _hoisted_9 = {
  "class": "\n                        bg-cool-grey-100\n                        md:mt-0\n                        mt-auto\n                        px-4\n                        py-3\n                        sm:flex sm:flex-row-reverse sm:px-6\n                    "
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DialogOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogOverlay");

  var _component_DialogTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogTitle");

  var _component_DialogDescription = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DialogDescription");

  var _component_history_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("history-item");

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "btn btn-secondary ml-auto",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.setIsOpen(true);
    })
  }, " History of facts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    as: "div",
    "class": "fixed z-10 inset-0 overflow-y-auto",
    open: $setup.isOpen,
    onClose: $setup.setIsOpen
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogOverlay, {
        "class": "fixed inset-0 bg-black opacity-30"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogTitle, {
        "class": "md:mx-7 md:my-5 mx-2 my-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DialogDescription, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      }), $setup.histories.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_6, [_hoisted_7, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.histories, function (history) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
          key: history.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_history_item, {
          history: history
        }, null, 8
        /* PROPS */
        , ["history"])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "message",
        value: "Message"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
        id: "address",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.historyForm.message = $event;
        }),
        name: "address",
        "class": "block w-full",
        rows: "2"
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.historyForm.message]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $setup.historyForm.errors.message
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        "class": "btn",
        onClick: _cache[3] || (_cache[3] = function () {
          return $setup.handleClose && $setup.handleClose.apply($setup, arguments);
        })
      }, "Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        "class": "btn btn-primary",
        onClick: _cache[4] || (_cache[4] = function () {
          return $setup.handleAdd && $setup.handleAdd.apply($setup, arguments);
        })
      }, " Add ")])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["open", "onClose"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  "fill-rule": "nonzero"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("polygon", {
  points: "12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 4,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 5,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 6,
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 7,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 8,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 9,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 10,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = {
  key: 11,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = {
  key: 12,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M10 0C4.47.005 0 4.48 0 10s4.48 10 10 10c4.37 0 8.08-2.81 9.44-6.72l-2.36-.818c-1.02 2.93-3.8 5.04-7.08 5.04-4.14 0-7.5-3.36-7.5-7.5 0-4.13 3.35-7.49 7.5-7.5 3.29-.008 6.07 2.11 7.08 5.05l2.36-.816c-1.35-3.92-5.06-6.74-9.44-6.73z"
}, null, -1
/* HOISTED */
);

var _hoisted_27 = {
  key: 13,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = {
  key: 14,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.name === 'apple' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [_hoisted_2])) : $props.name === 'book' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_3, [_hoisted_4])) : $props.name === 'cheveron-down' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [_hoisted_6])) : $props.name === 'cheveron-right' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_7, [_hoisted_8])) : $props.name === 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_9, [_hoisted_10])) : $props.name === 'location' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_11, [_hoisted_12])) : $props.name === 'office' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_13, [_hoisted_14])) : $props.name === 'printer' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_15, [_hoisted_16])) : $props.name === 'shopping-cart' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_17, [_hoisted_18])) : $props.name === 'store-front' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_19, [_hoisted_20])) : $props.name === 'trash' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_21, [_hoisted_22])) : $props.name === 'users' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_23, [_hoisted_24])) : $props.name === 'spinner' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_25, [_hoisted_26])) : $props.name === 'plus-circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_27, [_hoisted_28])) : $props.name === 'danger' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_29, [_hoisted_30])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    disabled: $props.loading,
    "class": "flex items-center disabled:opacity-50"
  }, [$setup.delayedLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
    key: 0,
    name: "spinner",
    "class": "h-5 w-5 mr-2 fill-current animate-spin"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , ["disabled"]);
}

/***/ }),

/***/ "./resources/js/util.js":
/*!******************************!*\
  !*** ./resources/js/util.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "isInPast": () => (/* binding */ isInPast),
/* harmony export */   "addDecimal": () => (/* binding */ addDecimal),
/* harmony export */   "highlight": () => (/* binding */ highlight)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


function formatDate(date, format) {
  if (format) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
  }

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MM-DD-YYYY');
}

function isInPast(date) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_0___default()());
}

function addDecimal(amount, subunit) {
  var output = amount;
  var _output = output,
      length = _output.length;

  if (subunit > length - 1) {
    var zeros = subunit - length + 1;
    output = '0'.repeat(zeros) + output;
    length = output.length;
  }

  var pos = length - subunit;
  output = "".concat(output.slice(0, pos), ".").concat(output.slice(pos));
  return output;
}

function highlight(text, searchTerm) {
  if (!searchTerm) {
    return text;
  }

  var escaped = new RegExp(searchTerm.replace(/[.*?^${}()[\]]/g, '\\$&'), 'i');
  return text.replace(escaped, '<mark class="bg-light-blue-vivid-600 text-white">$&</mark>');
}



/***/ }),

/***/ "./resources/js/Jetstream/Input.vue":
/*!******************************************!*\
  !*** ./resources/js/Jetstream/Input.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_vue_vue_type_template_id_49616346__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=49616346 */ "./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346");
/* harmony import */ var _Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Input.vue?vue&type=script&lang=js");



_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Input_vue_vue_type_template_id_49616346__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Jetstream/Input.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue":
/*!***********************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputError.vue?vue&type=template&id=045826dc */ "./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc");
/* harmony import */ var _InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputError.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js");



_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Jetstream/InputError.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Jetstream/Label.vue":
/*!******************************************!*\
  !*** ./resources/js/Jetstream/Label.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Label_vue_vue_type_template_id_812c3520__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.vue?vue&type=template&id=812c3520 */ "./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520");
/* harmony import */ var _Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/Label.vue?vue&type=script&lang=js");



_Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Label_vue_vue_type_template_id_812c3520__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Jetstream/Label.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Policies/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Policies/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_1e562830__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=1e562830 */ "./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js");



_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Edit_vue_vue_type_template_id_1e562830__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Policies/Edit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Contact/ContactList.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Shared/Contact/ContactList.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactList_vue_vue_type_template_id_5e5529ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactList.vue?vue&type=template&id=5e5529ba */ "./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba");
/* harmony import */ var _ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactList.vue?vue&type=script&lang=js */ "./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js");



_ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ContactList_vue_vue_type_template_id_5e5529ba__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Contact/ContactList.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Contact/SelectContact.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Shared/Contact/SelectContact.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectContact_vue_vue_type_template_id_3cc8ab89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectContact.vue?vue&type=template&id=3cc8ab89 */ "./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89");
/* harmony import */ var _SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectContact.vue?vue&type=script&lang=js */ "./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js");



_SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _SelectContact_vue_vue_type_template_id_3cc8ab89__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Contact/SelectContact.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/CurrencyTextBox.vue":
/*!*************************************************!*\
  !*** ./resources/js/Shared/CurrencyTextBox.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CurrencyTextBox_vue_vue_type_template_id_1bbb20e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrencyTextBox.vue?vue&type=template&id=1bbb20e1 */ "./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1");
/* harmony import */ var _CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyTextBox.vue?vue&type=script&lang=js */ "./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js");



_CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CurrencyTextBox_vue_vue_type_template_id_1bbb20e1__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/CurrencyTextBox.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/DateRange.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/DateRange.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DateRange_vue_vue_type_template_id_67e7bb03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRange.vue?vue&type=template&id=67e7bb03 */ "./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03");
/* harmony import */ var _DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRange.vue?vue&type=script&lang=js */ "./resources/js/Shared/DateRange.vue?vue&type=script&lang=js");



_DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DateRange_vue_vue_type_template_id_67e7bb03__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/DateRange.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Fields/NewPolicyField.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Shared/Fields/NewPolicyField.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewPolicyField_vue_vue_type_template_id_0d0a76b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPolicyField.vue?vue&type=template&id=0d0a76b2 */ "./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2");
/* harmony import */ var _NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPolicyField.vue?vue&type=script&lang=js */ "./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js");



_NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NewPolicyField_vue_vue_type_template_id_0d0a76b2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Fields/NewPolicyField.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyField.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyField.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PolicyField_vue_vue_type_template_id_08e14bce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolicyField.vue?vue&type=template&id=08e14bce */ "./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce");
/* harmony import */ var _PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PolicyField.vue?vue&type=script&lang=js */ "./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js");



_PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PolicyField_vue_vue_type_template_id_08e14bce__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Fields/PolicyField.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyFieldsList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyFieldsList.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PolicyFieldsList_vue_vue_type_template_id_45cede53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolicyFieldsList.vue?vue&type=template&id=45cede53 */ "./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53");
/* harmony import */ var _PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PolicyFieldsList.vue?vue&type=script&lang=js */ "./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js");



_PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PolicyFieldsList_vue_vue_type_template_id_45cede53__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Fields/PolicyFieldsList.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/HistoryItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/HistoryItem.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HistoryItem_vue_vue_type_template_id_6f93b8ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HistoryItem.vue?vue&type=template&id=6f93b8ca */ "./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca");
/* harmony import */ var _HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HistoryItem.vue?vue&type=script&lang=js */ "./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js");



_HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _HistoryItem_vue_vue_type_template_id_6f93b8ca__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/HistoryItem.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/HistoryModal.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/HistoryModal.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HistoryModal_vue_vue_type_template_id_4222c555__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HistoryModal.vue?vue&type=template&id=4222c555 */ "./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555");
/* harmony import */ var _HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HistoryModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js");



_HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _HistoryModal_vue_vue_type_template_id_4222c555__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/HistoryModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Icon.vue":
/*!**************************************!*\
  !*** ./resources/js/Shared/Icon.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=75bd2355 */ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js */ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js");



_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Icon.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/LoadingButton.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingButton_vue_vue_type_template_id_5f30d6e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=template&id=5f30d6e2 */ "./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2");
/* harmony import */ var _LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=script&lang=js */ "./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js");



_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LoadingButton_vue_vue_type_template_id_5f30d6e2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/LoadingButton.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Jetstream/Input.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Jetstream/Input.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputError.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Label.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Jetstream/Label.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Label_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Label.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectContact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectContact.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrencyTextBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrencyTextBox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/DateRange.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/DateRange.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateRange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DateRange.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewPolicyField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PolicyField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyFieldsList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PolicyFieldsList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HistoryItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HistoryModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346":
/*!************************************************************************!*\
  !*** ./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_49616346__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_49616346__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=template&id=49616346 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Input.vue?vue&type=template&id=49616346");


/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc":
/*!*****************************************************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputError.vue?vue&type=template&id=045826dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc");


/***/ }),

/***/ "./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520":
/*!************************************************************************!*\
  !*** ./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Label_vue_vue_type_template_id_812c3520__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Label_vue_vue_type_template_id_812c3520__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Label.vue?vue&type=template&id=812c3520 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/Label.vue?vue&type=template&id=812c3520");


/***/ }),

/***/ "./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_1e562830__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_1e562830__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=1e562830 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Policies/Edit.vue?vue&type=template&id=1e562830");


/***/ }),

/***/ "./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactList_vue_vue_type_template_id_5e5529ba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactList_vue_vue_type_template_id_5e5529ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactList.vue?vue&type=template&id=5e5529ba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/ContactList.vue?vue&type=template&id=5e5529ba");


/***/ }),

/***/ "./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectContact_vue_vue_type_template_id_3cc8ab89__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SelectContact_vue_vue_type_template_id_3cc8ab89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SelectContact.vue?vue&type=template&id=3cc8ab89 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Contact/SelectContact.vue?vue&type=template&id=3cc8ab89");


/***/ }),

/***/ "./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrencyTextBox_vue_vue_type_template_id_1bbb20e1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrencyTextBox_vue_vue_type_template_id_1bbb20e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrencyTextBox.vue?vue&type=template&id=1bbb20e1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/CurrencyTextBox.vue?vue&type=template&id=1bbb20e1");


/***/ }),

/***/ "./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateRange_vue_vue_type_template_id_67e7bb03__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DateRange_vue_vue_type_template_id_67e7bb03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DateRange.vue?vue&type=template&id=67e7bb03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DateRange.vue?vue&type=template&id=67e7bb03");


/***/ }),

/***/ "./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPolicyField_vue_vue_type_template_id_0d0a76b2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPolicyField_vue_vue_type_template_id_0d0a76b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewPolicyField.vue?vue&type=template&id=0d0a76b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/NewPolicyField.vue?vue&type=template&id=0d0a76b2");


/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyField_vue_vue_type_template_id_08e14bce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyField_vue_vue_type_template_id_08e14bce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PolicyField.vue?vue&type=template&id=08e14bce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyField.vue?vue&type=template&id=08e14bce");


/***/ }),

/***/ "./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyFieldsList_vue_vue_type_template_id_45cede53__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PolicyFieldsList_vue_vue_type_template_id_45cede53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PolicyFieldsList.vue?vue&type=template&id=45cede53 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Fields/PolicyFieldsList.vue?vue&type=template&id=45cede53");


/***/ }),

/***/ "./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryItem_vue_vue_type_template_id_6f93b8ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryItem_vue_vue_type_template_id_6f93b8ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HistoryItem.vue?vue&type=template&id=6f93b8ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryItem.vue?vue&type=template&id=6f93b8ca");


/***/ }),

/***/ "./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryModal_vue_vue_type_template_id_4222c555__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HistoryModal_vue_vue_type_template_id_4222c555__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HistoryModal.vue?vue&type=template&id=4222c555 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/HistoryModal.vue?vue&type=template&id=4222c555");


/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icon_vue_vue_type_template_id_75bd2355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icon.vue?vue&type=template&id=75bd2355 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355");


/***/ }),

/***/ "./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_template_id_5f30d6e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_template_id_5f30d6e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingButton.vue?vue&type=template&id=5f30d6e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/LoadingButton.vue?vue&type=template&id=5f30d6e2");


/***/ })

}]);
//# sourceMappingURL=resources_js_Pages_Policies_Edit_vue.js.map