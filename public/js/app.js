(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _Shared_AppLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/AppLogo */ "./resources/js/Shared/AppLogo.vue");
/* harmony import */ var _Shared_NavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/NavLink */ "./resources/js/Shared/NavLink.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NavLink: _Shared_NavLink__WEBPACK_IMPORTED_MODULE_7__.default,
    Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Disclosure,
    DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.DisclosureButton,
    DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.DisclosurePanel,
    MenuIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__.MenuIcon,
    XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__.XIcon,
    Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Menu,
    MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuButton,
    MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItems,
    MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItem,
    ChevronDownIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon,
    LogoutIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__.LogoutIcon,
    UserCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_5__.UserCircleIcon,
    AppLogo: _Shared_AppLogo__WEBPACK_IMPORTED_MODULE_6__.default
  },
  setup: function setup() {
    var showingNavigationDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var navOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Dashboard',

      get href() {
        return route('dashboard');
      },

      get current() {
        return route().current('dashboard');
      }

    }, {
      name: 'Policies',

      get href() {
        return route('policies');
      },

      get current() {
        return route().current('policies');
      }

    }, {
      name: 'Contacts',

      get href() {
        return route('contacts');
      },

      get current() {
        return route().current('contacts');
      }

    }]);
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_3__.useToast)();

    function logout() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post(route('logout'));
    }

    var flash = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.flash.message;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(flash, function (val) {
      if (val) {
        toast(val);
      }
    });
    return {
      showingNavigationDropdown: showingNavigationDropdown,
      logout: logout,
      navOpen: navOpen,
      navigation: navigation,
      toast: toast
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes: function classes() {
      return this.active ? 'bg-light-blue-vivid-600 border-light-blue-vivid-500 border-r-4 text-cool-grey-100' : '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "md:flex md:flex-col bg-cool-grey-50 md:h-screen"
};
var _hoisted_2 = {
  "class": "md:flex md:flex-shrink-0 bg-white"
};
var _hoisted_3 = {
  "class": "\n                        bg-cool-grey-800\n                        flex\n                        items-center\n                        justify-between\n                        md:flex-shrink-0 md:justify-center md:w-56\n                        px-6\n                        py-4\n                        text-white\n                    "
};
var _hoisted_4 = {
  "class": "flex md:justify-center justify-between"
};
var _hoisted_5 = {
  "class": "md:hidden"
};
var _hoisted_6 = {
  "class": "\n                                    text-light-blue-vivid-300\n                                    space-y-5\n                                    md:hidden\n                                    text-right\n                                "
};
var _hoisted_7 = {
  "class": "\n                        bg-white\n                        flex\n                        justify-between\n                        md:px-12 md:py-5\n                        px-6\n                        py-4\n                        w-full\n                        max-w-screen-2xl\n                    "
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, "Jamar", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "\n                                        block\n                                        px-4\n                                        py-2\n                                        text-xs text-cool-grey-400\n                                    "
}, " Manage Account ")], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "py-1"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" API Tokens ");

var _hoisted_13 = {
  "class": "py-1"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Log Out ");

var _hoisted_15 = {
  "class": "md:flex md:flex-grow md:overflow-hidden"
};
var _hoisted_16 = {
  "class": "\n                        bg-cool-grey-900\n                        overflow-y-auto\n                        hidden\n                        md:flex md:flex-shrink-0 md:justify-center md:w-56\n                    "
};
var _hoisted_17 = {
  "class": "mt-12 space-y-3 w-full text-cool-grey-300"
};
var _hoisted_18 = {
  "scroll-region": "",
  "class": "md:overflow-y-auto w-full shadow-inner"
};
var _hoisted_19 = {
  "class": "max-w-screen-2xl md:p-10 p-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AppLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AppLogo");

  var _component_MenuIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuIcon");

  var _component_XIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XIcon");

  var _component_DisclosureButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosureButton");

  var _component_NavLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavLink");

  var _component_DisclosurePanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DisclosurePanel");

  var _component_Disclosure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Disclosure");

  var _component_ChevronDownIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChevronDownIcon");

  var _component_MenuButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuButton");

  var _component_UserCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UserCircleIcon");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_MenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItem");

  var _component_LogoutIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LogoutIcon");

  var _component_MenuItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MenuItems");

  var _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Disclosure, {
    as: "nav",
    "class": "w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var open = _ref.open;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AppLogo, {
        "class": "h-8 fill-current text-white"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosureButton, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [!open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuIcon, {
            key: 0,
            "class": "block h-6 w-6",
            "aria-hidden": "true"
          })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_XIcon, {
            key: 1,
            "class": "block h-6 w-6",
            "aria-hidden": "true"
          }))];
        }),
        _: 2
        /* DYNAMIC */

      }, 1024
      /* DYNAMIC_SLOTS */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DisclosurePanel, {
        "class": "flex justify-end w-full"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navigation, function (nav) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavLink, {
              key: nav.name,
              href: nav.href,
              active: nav.current
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(nav.name), 1
                /* TEXT */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1032
            /* PROPS, DYNAMIC_SLOTS */
            , ["href", "active"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu, {
    as: "div",
    "class": "relative"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuButton, {
        "class": "inline-flex items-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.user.name) + " ", 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChevronDownIcon, {
            "class": "h-5 w-5 ml-2"
          })];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItems, {
        as: "div",
        "class": "\n                                absolute\n                                right-0\n                                w-56\n                                mt-2\n                                origin-top-right\n                                bg-white\n                                divide-y divide-cool-grey-100\n                                rounded-md\n                                shadow-lg\n                                ring-1 ring-black ring-opacity-5\n                                focus:outline-none\n                                z-10\n                            "
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
              var active = _ref2.active;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                href: _ctx.route('profile.show'),
                "class": [active ? 'bg-cool-grey-100 text-cool-grey-900' : 'text-cool-grey-700', 'block px-4 py-2 text-sm']
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UserCircleIcon, {
                    "class": "w-5 h-5 inline mr-2"
                  }), _hoisted_11];
                }),
                _: 2
                /* DYNAMIC */

              }, 1032
              /* PROPS, DYNAMIC_SLOTS */
              , ["href", "class"])];
            }),
            _: 1
            /* STABLE */

          }), _ctx.$page.props.jetstream.hasApiFeatures ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MenuItem, {
            key: 0
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
              var active = _ref3.active;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                href: _ctx.route('api-tokens.index'),
                "class": [active ? 'bg-cool-grey-100 text-cool-grey-900' : 'text-cool-grey-700', 'block px-4 py-2 text-sm']
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_12];
                }),
                _: 2
                /* DYNAMIC */

              }, 1032
              /* PROPS, DYNAMIC_SLOTS */
              , ["href", "class"])];
            }),
            _: 1
            /* STABLE */

          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MenuItem, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
              var active = _ref4.active;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
                "class": [active ? 'bg-cool-grey-100 text-cool-grey-900' : 'text-cool-grey-700', 'block px-4 py-2 text-sm']
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                type: "submit flex",
                onClick: _cache[1] || (_cache[1] = function () {
                  return $setup.logout && $setup.logout.apply($setup, arguments);
                })
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LogoutIcon, {
                "class": "h-5 w-5 mr-2 inline"
              }), _hoisted_14])], 2
              /* CLASS */
              )];
            }),
            _: 1
            /* STABLE */

          })])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.navigation, function (nav) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavLink, {
      key: nav.name,
      href: nav.href,
      active: nav.current
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(nav.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href", "active"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1425.8 353.74"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("linearGradient", {
  id: "a",
  x1: "-467.57",
  x2: "-469.87",
  y1: "-68.97",
  y2: "488.43",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("stop", {
  offset: "0",
  "stop-color": "#2294fe"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("stop", {
  offset: "1",
  "stop-color": "#014f96"
})])], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M495.5 179.52v19.1a77.16 77.16 0 00-17.44-7.11 64.33 64.33 0 00-17.54-2.45c-13.24 0-23.53 4.22-30.86 12.66-7.33 8.36-11 20.13-11 35.3 0 15.18 3.67 26.98 11 35.42 7.33 8.36 17.61 12.54 30.86 12.54 5.92 0 11.77-.77 17.54-2.33a81.25 81.25 0 0017.43-7.21v18.87a83.7 83.7 0 01-17.76 6 90.48 90.48 0 01-19.43 2c-18.72 0-33.6-5.9-44.63-17.66s-16.54-27.64-16.54-47.63c0-20.28 5.55-36.23 16.66-47.85 11.17-11.62 26.45-17.43 45.85-17.43 6.29 0 12.43.67 18.42 2 6 1.26 11.8 3.19 17.43 5.78M578.98 189.07c-10.95 0-19.6 4.29-25.97 12.87-6.37 8.52-9.55 20.2-9.55 35.09 0 14.87 3.14 26.6 9.44 35.19 6.36 8.51 15.06 12.77 26.08 12.77 10.88 0 19.5-4.3 25.87-12.88 6.37-8.59 9.55-20.28 9.55-35.08 0-14.73-3.18-26.39-9.55-34.97-6.36-8.66-14.99-13-25.87-13m0-17.31c17.77 0 31.72 5.77 41.86 17.32s15.2 27.53 15.2 47.96c0 20.35-5.06 36.34-15.2 47.96-10.14 11.54-24.1 17.32-41.86 17.32-17.83 0-31.82-5.78-41.96-17.32-10.07-11.62-15.1-27.61-15.1-47.96 0-20.43 5.03-36.42 15.1-47.96 10.14-11.55 24.13-17.32 41.96-17.32M766.6 198.6c5.11-9.17 11.22-15.94 18.32-20.31 7.1-4.37 15.47-6.55 25.1-6.55 12.94 0 22.94 4.55 29.97 13.66 7.03 9.02 10.54 21.9 10.54 38.63v75.05H830V224.7c0-11.92-2.11-20.76-6.33-26.54-4.22-5.77-10.66-8.66-19.32-8.66-10.58 0-18.95 3.52-25.09 10.55-6.14 7.03-9.21 16.62-9.21 28.75v70.28H749.5V224.7c0-12-2.11-20.84-6.33-26.54-4.22-5.77-10.73-8.66-19.54-8.66-10.43 0-18.72 3.56-24.87 10.66-6.14 7.03-9.21 16.58-9.21 28.64v70.28h-20.54V174.74h20.54v19.32c4.66-7.63 10.25-13.25 16.76-16.88 6.52-3.63 14.25-5.44 23.2-5.44 9.04 0 16.7 2.3 22.99 6.88 6.36 4.6 11.06 11.25 14.1 19.99M910.7 280.43v65.94h-20.53V174.74h20.53v18.87c4.3-7.4 9.7-12.87 16.21-16.43 6.59-3.62 14.44-5.44 23.54-5.44 15.1 0 27.35 6 36.75 17.99 9.47 11.99 14.2 27.75 14.2 47.3 0 19.53-4.73 35.3-14.2 47.29-9.4 11.99-21.65 17.98-36.75 17.98-9.1 0-16.95-1.77-23.54-5.33-6.51-3.62-11.91-9.14-16.2-16.54m69.5-43.4c0-15.03-3.12-26.8-9.33-35.31-6.15-8.59-14.62-12.88-25.43-12.88-10.8 0-19.31 4.3-25.53 12.88-6.14 8.51-9.22 20.28-9.22 35.3 0 15.03 3.08 26.83 9.22 35.42 6.22 8.5 14.73 12.76 25.53 12.76s19.28-4.25 25.43-12.76c6.21-8.59 9.32-20.4 9.32-35.42M1091.77 236.58c-16.5 0-27.94 1.88-34.3 5.66-6.37 3.77-9.55 10.21-9.55 19.32 0 7.25 2.37 13.02 7.1 17.31 4.82 4.22 11.33 6.33 19.55 6.33 11.32 0 20.39-4 27.2-11.99 6.88-8.06 10.32-18.76 10.32-32.08v-4.55h-20.32m40.75-8.44v70.94h-20.43V280.2c-4.66 7.55-10.47 13.13-17.43 16.76-6.96 3.55-15.47 5.33-25.53 5.33-12.73 0-22.87-3.55-30.42-10.66-7.48-7.18-11.21-16.76-11.21-28.75 0-14 4.66-24.54 13.98-31.64 9.4-7.1 23.4-10.66 41.97-10.66h28.64v-2c0-9.4-3.1-16.65-9.32-21.76-6.15-5.18-14.8-7.77-25.98-7.77-7.1 0-14.03.85-20.76 2.55a82.3 82.3 0 00-19.43 7.66V180.4a132.87 132.87 0 0121.76-6.44 99.6 99.6 0 0120.54-2.22c17.98 0 31.42 4.66 40.3 13.99 8.88 9.33 13.32 23.46 13.32 42.4M1278.5 224.04v75.04h-20.42V224.7c0-11.77-2.3-20.57-6.89-26.42-4.58-5.85-11.47-8.77-20.65-8.77-11.02 0-19.72 3.52-26.08 10.55-6.37 7.03-9.55 16.61-9.55 28.75v70.27h-20.54V174.74h20.54v19.32c4.88-7.47 10.62-13.06 17.2-16.76 6.67-3.7 14.33-5.55 22.99-5.55 14.28 0 25.09 4.44 32.41 13.32 7.33 8.8 11 21.8 11 38.97M1371.2 310.63c-5.77 14.8-11.4 24.46-16.87 28.97-5.48 4.52-12.8 6.77-21.98 6.77h-16.32v-17.1h11.99c5.62 0 9.99-1.32 13.1-3.99s6.55-8.95 10.32-18.87l3.67-9.33-50.3-122.34h21.65l38.86 97.25 38.86-97.25h21.64l-54.62 135.9"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M438.04 102.2c0-6.67-1.39-11.84-4.16-15.51-2.73-3.67-6.59-5.51-11.56-5.51-4.94 0-8.8 1.84-11.56 5.5-2.74 3.68-4.1 8.85-4.1 15.53 0 6.64 1.36 11.8 4.1 15.47 2.77 3.67 6.62 5.5 11.56 5.5 4.97 0 8.83-1.83 11.56-5.5 2.77-3.68 4.16-8.83 4.16-15.47m9.21 21.72c0 9.55-2.12 16.64-6.36 21.28-4.24 4.67-10.73 7-19.47 7-3.24 0-6.3-.24-9.16-.74a44.69 44.69 0 01-8.36-2.2v-8.97a36.4 36.4 0 008 3.26c2.64.7 5.33 1.05 8.07 1.05 6.04 0 10.56-1.59 13.56-4.76 3-3.13 4.51-7.89 4.51-14.27v-4.55a19.03 19.03 0 01-7.3 7.4c-2.98 1.64-6.53 2.46-10.67 2.46-6.88 0-12.42-2.62-16.62-7.86-4.2-5.24-6.31-12.18-6.31-20.82 0-8.68 2.1-15.64 6.3-20.88 4.21-5.24 9.75-7.86 16.63-7.86 4.14 0 7.7.82 10.66 2.45 2.97 1.64 5.4 4.1 7.31 7.41v-8.5h9.21v49.1M514.18 100.56v4.5h-42.35c.4 6.34 2.3 11.18 5.7 14.52 3.44 3.3 8.22 4.96 14.32 4.96 3.54 0 6.96-.44 10.27-1.3a45.63 45.63 0 009.9-3.91v8.71c-3.3 1.4-6.68 2.47-10.15 3.2-3.48.74-7 1.1-10.57 1.1-8.94 0-16.03-2.6-21.27-7.8-5.21-5.21-7.81-12.25-7.81-21.13 0-9.18 2.47-16.45 7.4-21.83 4.98-5.4 11.67-8.1 20.08-8.1 7.54 0 13.5 2.43 17.87 7.3 4.4 4.84 6.61 11.43 6.61 19.78m-9.21-2.7c-.07-5.05-1.49-9.07-4.26-12.07-2.73-3-6.37-4.5-10.91-4.5-5.14 0-9.26 1.44-12.36 4.35-3.08 2.9-4.84 6.99-5.31 12.26l32.84-.05M575.71 97.05v33.84h-9.21V97.35c0-5.3-1.04-9.28-3.1-11.92-2.07-2.63-5.18-3.95-9.32-3.95-4.97 0-8.9 1.58-11.76 4.75-2.87 3.17-4.3 7.5-4.3 12.97v31.69h-9.27V74.82h9.26v8.71c2.2-3.37 4.8-5.89 7.76-7.56 3-1.67 6.46-2.5 10.37-2.5 6.44 0 11.31 2 14.61 6 3.3 3.98 4.96 9.83 4.96 17.58M642.14 100.56v4.5h-42.35c.4 6.34 2.3 11.18 5.7 14.52 3.44 3.3 8.22 4.96 14.32 4.96 3.54 0 6.96-.44 10.27-1.3a45.63 45.63 0 009.9-3.91v8.71c-3.3 1.4-6.68 2.47-10.15 3.2-3.48.74-7 1.1-10.57 1.1-8.94 0-16.03-2.6-21.27-7.8-5.21-5.21-7.81-12.25-7.81-21.13 0-9.18 2.47-16.45 7.4-21.83 4.98-5.4 11.67-8.1 20.08-8.1 7.54 0 13.5 2.43 17.87 7.3 4.4 4.84 6.61 11.43 6.61 19.78m-9.21-2.7c-.07-5.05-1.49-9.07-4.26-12.07-2.73-3-6.37-4.5-10.9-4.5-5.15 0-9.27 1.44-12.37 4.35-3.07 2.9-4.84 6.99-5.31 12.26l32.84-.05M689.55 83.43a11.62 11.62 0 00-3.4-1.3c-1.2-.3-2.54-.45-4-.45-5.22 0-9.22 1.7-12.02 5.1-2.77 3.38-4.16 8.23-4.16 14.57v29.54h-9.26V74.82h9.26v8.71a18.72 18.72 0 017.56-7.56c3.1-1.66 6.88-2.5 11.31-2.5.64 0 1.34.05 2.1.15.77.07 1.63.18 2.56.35l.05 9.46M699.31 74.82h9.21v56.07h-9.21V74.82m0-21.82h9.21v11.66h-9.21V53M768.1 76.97v8.61a34.8 34.8 0 00-7.86-3.2c-2.6-.73-5.24-1.1-7.9-1.1-5.98 0-10.62 1.9-13.93 5.7-3.3 3.78-4.95 9.08-4.95 15.93 0 6.84 1.65 12.16 4.95 15.97 3.3 3.77 7.95 5.65 13.92 5.65 2.67 0 5.3-.35 7.91-1.05a36.64 36.64 0 007.86-3.25v8.5a37.74 37.74 0 01-8.01 2.71c-2.74.6-5.66.9-8.76.9-8.44 0-15.15-2.65-20.13-7.96-4.97-5.3-7.45-12.46-7.45-21.47 0-9.15 2.5-16.34 7.5-21.58 5.04-5.24 11.94-7.86 20.68-7.86 2.84 0 5.6.3 8.31.9 2.7.57 5.32 1.44 7.86 2.6M816.66 53h9.21v77.9h-9.21V53M866.82 81.28c-4.94 0-8.84 1.94-11.71 5.8-2.87 3.85-4.3 9.12-4.3 15.83 0 6.7 1.4 12 4.25 15.87 2.87 3.84 6.79 5.75 11.76 5.75 4.9 0 8.8-1.93 11.66-5.8 2.88-3.87 4.31-9.15 4.31-15.82 0-6.64-1.43-11.9-4.3-15.77a13.72 13.72 0 00-11.67-5.86m0-7.8c8.01 0 14.3 2.6 18.87 7.8 4.58 5.2 6.86 12.42 6.86 21.63 0 9.18-2.28 16.39-6.86 21.63-4.57 5.2-10.86 7.8-18.87 7.8-8.04 0-14.35-2.6-18.92-7.8-4.54-5.24-6.81-12.45-6.81-21.63 0-9.21 2.27-16.42 6.8-21.63 4.58-5.2 10.89-7.8 18.93-7.8M944.67 102.2c0-6.67-1.39-11.84-4.16-15.51-2.73-3.67-6.59-5.51-11.56-5.51-4.94 0-8.8 1.84-11.56 5.5-2.74 3.68-4.1 8.85-4.1 15.53 0 6.64 1.36 11.8 4.1 15.47 2.77 3.67 6.62 5.5 11.56 5.5 4.97 0 8.83-1.83 11.56-5.5 2.77-3.68 4.16-8.83 4.16-15.47m9.21 21.72c0 9.55-2.12 16.64-6.36 21.28-4.24 4.67-10.73 7-19.47 7-3.24 0-6.3-.24-9.16-.74a44.69 44.69 0 01-8.36-2.2v-8.97a36.4 36.4 0 008 3.26c2.64.7 5.33 1.05 8.07 1.05 6.04 0 10.56-1.59 13.56-4.76 3-3.13 4.51-7.89 4.51-14.27v-4.55a19.03 19.03 0 01-7.3 7.4c-2.98 1.64-6.53 2.46-10.67 2.46-6.88 0-12.42-2.62-16.62-7.86-4.2-5.24-6.31-12.18-6.31-20.82 0-8.68 2.1-15.64 6.3-20.88 4.21-5.24 9.75-7.86 16.63-7.86 4.14 0 7.7.82 10.66 2.45 2.97 1.64 5.4 4.1 7.31 7.41v-8.5h9.21v49.1M994.59 81.28c-4.94 0-8.84 1.94-11.71 5.8-2.87 3.85-4.3 9.12-4.3 15.83 0 6.7 1.4 12 4.25 15.87 2.87 3.84 6.79 5.75 11.76 5.75 4.9 0 8.8-1.93 11.66-5.8 2.88-3.87 4.31-9.15 4.31-15.82 0-6.64-1.43-11.9-4.3-15.77a13.72 13.72 0 00-11.67-5.86m0-7.8c8.01 0 14.3 2.6 18.87 7.8 4.58 5.2 6.86 12.42 6.86 21.63 0 9.18-2.28 16.39-6.86 21.63-4.57 5.2-10.86 7.8-18.87 7.8-8.04 0-14.35-2.6-18.92-7.8-4.54-5.24-6.81-12.45-6.81-21.63 0-9.21 2.27-16.42 6.8-21.63 4.58-5.2 10.89-7.8 18.93-7.8"
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "url(#a)",
  d: "M-184.26 202.82c0 157.74-127.87 285.61-285.61 285.61s-285.61-127.87-285.61-285.61S-627.61-82.79-469.87-82.79s285.61 127.87 285.61 285.61z",
  transform: "rotate(-45 4.82 -413.54) scale(.61927)"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "#eee",
  d: "M302.82 150.5c42.06 42.06 42.06 110.24 0 152.3s-110.24 42.06-152.3 0-42.05-110.24 0-152.3 110.25-42.05 152.3 0z"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: $props.href,
    "class": [$options.classes, "\n                flex\n                px-6\n                py-3\n                hover:bg-light-blue-vivid-600\n                hover:border-light-blue-vivid-500\n                hover:text-cool-grey-100\n                hover:border-r-4\n            "]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["href", "class"])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");
/* harmony import */ var vue_toastification_dist_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-toastification/dist/index.css */ "./node_modules/vue-toastification/dist/index.css");
/* harmony import */ var _Layouts_NewLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Layouts/NewLayout */ "./resources/js/Layouts/NewLayout.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Import modules...







__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  title: function title(_title) {
    return _title ? "".concat(_title, " - Jamar") : 'Jamar';
  },
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var _page$Layout;

      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              (_page$Layout = page.Layout) !== null && _page$Layout !== void 0 ? _page$Layout : page.Layout = _Layouts_NewLayout__WEBPACK_IMPORTED_MODULE_6__.default;
              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(App, props);
      }
    }).use(plugin).use(vue_toastification__WEBPACK_IMPORTED_MODULE_4__.default).component('InertiaHead', _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head).component('InertiaLink', _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__.InertiaProgress.init({
  color: '#4B5563'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Layouts/NewLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/NewLayout.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewLayout_vue_vue_type_template_id_30a9cc16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewLayout.vue?vue&type=template&id=30a9cc16 */ "./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16");
/* harmony import */ var _NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js");



_NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NewLayout_vue_vue_type_template_id_30a9cc16__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Layouts/NewLayout.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/AppLogo.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/AppLogo.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLogo_vue_vue_type_template_id_4294d8c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=template&id=4294d8c0 */ "./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0");

const script = {}
script.render = _AppLogo_vue_vue_type_template_id_4294d8c0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

script.__file = "resources/js/Shared/AppLogo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);

/***/ }),

/***/ "./resources/js/Shared/NavLink.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/NavLink.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=6c59dede */ "./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js */ "./resources/js/Shared/NavLink.vue?vue&type=script&lang=js");



_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/NavLink.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/NavLink.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/NavLink.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewLayout_vue_vue_type_template_id_30a9cc16__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewLayout_vue_vue_type_template_id_30a9cc16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewLayout.vue?vue&type=template&id=30a9cc16 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/NewLayout.vue?vue&type=template&id=30a9cc16");


/***/ }),

/***/ "./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_4294d8c0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppLogo_vue_vue_type_template_id_4294d8c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppLogo.vue?vue&type=template&id=4294d8c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/AppLogo.vue?vue&type=template&id=4294d8c0");


/***/ }),

/***/ "./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_6c59dede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=template&id=6c59dede */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NavLink.vue?vue&type=template&id=6c59dede");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./API/ApiTokenManager": [
		"./resources/js/Pages/API/ApiTokenManager.vue",
		"resources_js_Pages_API_ApiTokenManager_vue"
	],
	"./API/ApiTokenManager.vue": [
		"./resources/js/Pages/API/ApiTokenManager.vue",
		"resources_js_Pages_API_ApiTokenManager_vue"
	],
	"./API/Index": [
		"./resources/js/Pages/API/Index.vue",
		"resources_js_Pages_API_Index_vue"
	],
	"./API/Index.vue": [
		"./resources/js/Pages/API/Index.vue",
		"resources_js_Pages_API_Index_vue"
	],
	"./Auth/ConfirmPassword": [
		"./resources/js/Pages/Auth/ConfirmPassword.vue",
		"resources_js_Pages_Auth_ConfirmPassword_vue"
	],
	"./Auth/ConfirmPassword.vue": [
		"./resources/js/Pages/Auth/ConfirmPassword.vue",
		"resources_js_Pages_Auth_ConfirmPassword_vue"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/ForgotPassword.vue": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/ResetPassword.vue": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/TwoFactorChallenge": [
		"./resources/js/Pages/Auth/TwoFactorChallenge.vue",
		"resources_js_Pages_Auth_TwoFactorChallenge_vue"
	],
	"./Auth/TwoFactorChallenge.vue": [
		"./resources/js/Pages/Auth/TwoFactorChallenge.vue",
		"resources_js_Pages_Auth_TwoFactorChallenge_vue"
	],
	"./Auth/VerifyEmail": [
		"./resources/js/Pages/Auth/VerifyEmail.vue",
		"resources_js_Pages_Auth_VerifyEmail_vue"
	],
	"./Auth/VerifyEmail.vue": [
		"./resources/js/Pages/Auth/VerifyEmail.vue",
		"resources_js_Pages_Auth_VerifyEmail_vue"
	],
	"./Contacts/Create": [
		"./resources/js/Pages/Contacts/Create.vue",
		"resources_js_Pages_Contacts_Create_vue"
	],
	"./Contacts/Create.vue": [
		"./resources/js/Pages/Contacts/Create.vue",
		"resources_js_Pages_Contacts_Create_vue"
	],
	"./Contacts/Edit": [
		"./resources/js/Pages/Contacts/Edit.vue",
		"resources_js_Pages_Contacts_Edit_vue"
	],
	"./Contacts/Edit.vue": [
		"./resources/js/Pages/Contacts/Edit.vue",
		"resources_js_Pages_Contacts_Edit_vue"
	],
	"./Contacts/Index": [
		"./resources/js/Pages/Contacts/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Contacts_Index_vue"
	],
	"./Contacts/Index.vue": [
		"./resources/js/Pages/Contacts/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Contacts_Index_vue"
	],
	"./Dashboard": [
		"./resources/js/Pages/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_vue"
	],
	"./Dashboard.vue": [
		"./resources/js/Pages/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_vue"
	],
	"./Policies/Create": [
		"./resources/js/Pages/Policies/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Create_vue"
	],
	"./Policies/Create.vue": [
		"./resources/js/Pages/Policies/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Create_vue"
	],
	"./Policies/Edit": [
		"./resources/js/Pages/Policies/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Edit_vue"
	],
	"./Policies/Edit.vue": [
		"./resources/js/Pages/Policies/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Edit_vue"
	],
	"./Policies/Index": [
		"./resources/js/Pages/Policies/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Index_vue"
	],
	"./Policies/Index.vue": [
		"./resources/js/Pages/Policies/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Policies_Index_vue"
	],
	"./PrivacyPolicy": [
		"./resources/js/Pages/PrivacyPolicy.vue",
		"resources_js_Pages_PrivacyPolicy_vue"
	],
	"./PrivacyPolicy.vue": [
		"./resources/js/Pages/PrivacyPolicy.vue",
		"resources_js_Pages_PrivacyPolicy_vue"
	],
	"./Profile/DeleteUserForm": [
		"./resources/js/Pages/Profile/DeleteUserForm.vue",
		"resources_js_Pages_Profile_DeleteUserForm_vue"
	],
	"./Profile/DeleteUserForm.vue": [
		"./resources/js/Pages/Profile/DeleteUserForm.vue",
		"resources_js_Pages_Profile_DeleteUserForm_vue"
	],
	"./Profile/LogoutOtherBrowserSessionsForm": [
		"./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue",
		"resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_vue"
	],
	"./Profile/LogoutOtherBrowserSessionsForm.vue": [
		"./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.vue",
		"resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_vue"
	],
	"./Profile/Show": [
		"./resources/js/Pages/Profile/Show.vue",
		"resources_js_Pages_Profile_Show_vue"
	],
	"./Profile/Show.vue": [
		"./resources/js/Pages/Profile/Show.vue",
		"resources_js_Pages_Profile_Show_vue"
	],
	"./Profile/TwoFactorAuthenticationForm": [
		"./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue",
		"resources_js_Pages_Profile_TwoFactorAuthenticationForm_vue"
	],
	"./Profile/TwoFactorAuthenticationForm.vue": [
		"./resources/js/Pages/Profile/TwoFactorAuthenticationForm.vue",
		"resources_js_Pages_Profile_TwoFactorAuthenticationForm_vue"
	],
	"./Profile/UpdatePasswordForm": [
		"./resources/js/Pages/Profile/UpdatePasswordForm.vue",
		"resources_js_Pages_Profile_UpdatePasswordForm_vue"
	],
	"./Profile/UpdatePasswordForm.vue": [
		"./resources/js/Pages/Profile/UpdatePasswordForm.vue",
		"resources_js_Pages_Profile_UpdatePasswordForm_vue"
	],
	"./Profile/UpdateProfileInformationForm": [
		"./resources/js/Pages/Profile/UpdateProfileInformationForm.vue",
		"resources_js_Pages_Profile_UpdateProfileInformationForm_vue"
	],
	"./Profile/UpdateProfileInformationForm.vue": [
		"./resources/js/Pages/Profile/UpdateProfileInformationForm.vue",
		"resources_js_Pages_Profile_UpdateProfileInformationForm_vue"
	],
	"./Teams/Create": [
		"./resources/js/Pages/Teams/Create.vue",
		"resources_js_Pages_Teams_Create_vue"
	],
	"./Teams/Create.vue": [
		"./resources/js/Pages/Teams/Create.vue",
		"resources_js_Pages_Teams_Create_vue"
	],
	"./Teams/Partials/CreateTeamForm": [
		"./resources/js/Pages/Teams/Partials/CreateTeamForm.vue",
		"resources_js_Pages_Teams_Partials_CreateTeamForm_vue"
	],
	"./Teams/Partials/CreateTeamForm.vue": [
		"./resources/js/Pages/Teams/Partials/CreateTeamForm.vue",
		"resources_js_Pages_Teams_Partials_CreateTeamForm_vue"
	],
	"./Teams/Partials/DeleteTeamForm": [
		"./resources/js/Pages/Teams/Partials/DeleteTeamForm.vue",
		"resources_js_Pages_Teams_Partials_DeleteTeamForm_vue"
	],
	"./Teams/Partials/DeleteTeamForm.vue": [
		"./resources/js/Pages/Teams/Partials/DeleteTeamForm.vue",
		"resources_js_Pages_Teams_Partials_DeleteTeamForm_vue"
	],
	"./Teams/Partials/TeamMemberManager": [
		"./resources/js/Pages/Teams/Partials/TeamMemberManager.vue",
		"resources_js_Pages_Teams_Partials_TeamMemberManager_vue"
	],
	"./Teams/Partials/TeamMemberManager.vue": [
		"./resources/js/Pages/Teams/Partials/TeamMemberManager.vue",
		"resources_js_Pages_Teams_Partials_TeamMemberManager_vue"
	],
	"./Teams/Partials/UpdateTeamNameForm": [
		"./resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue",
		"resources_js_Pages_Teams_Partials_UpdateTeamNameForm_vue"
	],
	"./Teams/Partials/UpdateTeamNameForm.vue": [
		"./resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue",
		"resources_js_Pages_Teams_Partials_UpdateTeamNameForm_vue"
	],
	"./Teams/Show": [
		"./resources/js/Pages/Teams/Show.vue",
		"resources_js_Pages_Teams_Show_vue"
	],
	"./Teams/Show.vue": [
		"./resources/js/Pages/Teams/Show.vue",
		"resources_js_Pages_Teams_Show_vue"
	],
	"./TermsOfService": [
		"./resources/js/Pages/TermsOfService.vue",
		"resources_js_Pages_TermsOfService_vue"
	],
	"./TermsOfService.vue": [
		"./resources/js/Pages/TermsOfService.vue",
		"resources_js_Pages_TermsOfService_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map