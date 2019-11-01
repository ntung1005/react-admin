webpackHotUpdate("static\\development\\pages\\viewProducts.js",{

/***/ "./pages/viewProducts.js":
/*!*******************************!*\
  !*** ./pages/viewProducts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/table/style/css */ "./node_modules/antd/lib/table/style/css.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../firebase_config */ "./firebase_config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\TungNguyen\\Desktop\\admin\\pages\\viewProducts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var db = _firebase_config__WEBPACK_IMPORTED_MODULE_9__["default"].firestore();
var Column = antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a.Column,
    ColumnGroup = antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a.ColumnGroup; //

var ViewProducts =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewProducts, _React$Component);

  function ViewProducts(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewProducts);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ViewProducts).call(this, props));
    _this.state = {
      dataProducts: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewProducts, [{
    key: "deleteProduct",
    value: function deleteProduct(product) {
      console.log(product.id);
      db.collection("products").doc(product.id)["delete"]().then(function () {
        console.log("Document successfully deleted!");
      })["catch"](function (error) {
        console.error("Error removing document: ", error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = [{
        title: "Image",
        dataIndex: "image" // render: (text, record) => (
        //   <Link href={'/admin/products/[id]'} as={'/admin/products/' + record.id}>
        //     <a>
        //       <img src={text} alt={text} style={{ maxWidth: 200 }} />
        //     </a>
        //   </Link>
        // )

      }, {
        title: "Name",
        dataIndex: "name",
        key: "name" // render: (text, record) => (
        //   <Link to="/product/[id]" as={"/product/" + record.id}>
        //     <a href="/product/[id]" as={"/product/" + record.id}>
        //       {record.name}
        //     </a>
        //   </Link>
        // )

      }, {
        title: "Status",
        dataIndex: "status",
        key: "status"
      }, {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity"
      }, {
        title: "Price",
        dataIndex: "price",
        key: "price"
      }, {
        title: "Action",
        key: "action",
        render: function render(text, record) {
          return __jsx("a", {
            onClick: function onClick() {
              return _this2.deleteProduct(record);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, "Delete");
        }
      }];
      db.collection("products").get().then(function (querySnapshot) {
        var data = querySnapshot.docs.map(function (doc) {
          return doc.data();
        });

        _this2.setState({
          dataProducts: data
        });
      });
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        columns: columns,
        dataSource: this.state.dataProducts,
        key: "table_products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }));
    }
  }]);

  return ViewProducts;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ViewProducts);

/***/ })

})
//# sourceMappingURL=viewProducts.js.3a5012ced145d5001b9a.hot-update.js.map