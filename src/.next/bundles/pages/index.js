module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "../node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export App */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_About__ = __webpack_require__("./components/About.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Content__ = __webpack_require__("./components/Content.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content__ = __webpack_require__("./content.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/App.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
    face: __WEBPACK_IMPORTED_MODULE_4__content__["a" /* about */].face,
    social: __WEBPACK_IMPORTED_MODULE_4__content__["a" /* about */].social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_About__["a" /* default */], {
    intros: __WEBPACK_IMPORTED_MODULE_4__content__["a" /* about */].intros,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Content__["a" /* default */], {
    skills: __WEBPACK_IMPORTED_MODULE_4__content__["c" /* skills */],
    projects: __WEBPACK_IMPORTED_MODULE_4__content__["b" /* projects */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};
var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/samgbrown/REPOS/sgb-new/src/App.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/App.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/About.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/About.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var About = function About(props) {
  var intros = props.intros.map(function (intro, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, intro);
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, intros));
};

About.propTypes = {
  intros: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string).isRequired
};
var _default = About;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/Users/samgbrown/REPOS/sgb-new/src/components/About.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/components/About.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Content.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkillsList__ = __webpack_require__("./components/SkillsList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProjectsList__ = __webpack_require__("./components/ProjectsList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__props__ = __webpack_require__("./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/Content.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SkillsList__["a" /* default */], {
    skills: props.skills,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ProjectsList__["a" /* default */], {
    projects: props.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

Content.propTypes = {
  skills: __WEBPACK_IMPORTED_MODULE_3__props__["b" /* skillsProp */].isRequired,
  projects: __WEBPACK_IMPORTED_MODULE_3__props__["a" /* projectsProp */].isRequired
};
var _default = Content;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "/Users/samgbrown/REPOS/sgb-new/src/components/Content.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/components/Content.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__props__ = __webpack_require__("./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/Header.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Header = function Header(props) {
  var socialLinks = props.social.map(function (social, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, social.name));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12 col-sm-4 logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: props.face,
    alt: "My face",
    className: "face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12 col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "nav nav-pills nav-fill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, socialLinks)));
};

Header.propTypes = {
  face: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  social: __WEBPACK_IMPORTED_MODULE_2__props__["c" /* socialProp */].isRequired
};
var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/samgbrown/REPOS/sgb-new/src/components/Header.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/components/Header.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ProjectsList.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__props__ = __webpack_require__("./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/ProjectsList.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var ProjectsList = function ProjectsList(props) {
  var projects = props.projects.map(function (project, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "row project",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, project.title), project.images.map(function (image, imageKey) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: imageKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: project.link,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: image,
        alt: project.title,
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, "Role:"), " ", project.role), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, project.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, "Key tech:"), " ", project.keyTech)));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12 col-sm-8 work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Past Work"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), projects)));
};

ProjectsList.propTypes = {
  projects: __WEBPACK_IMPORTED_MODULE_1__props__["a" /* projectsProp */].isRequired
};
var _default = ProjectsList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProjectsList, "ProjectsList", "/Users/samgbrown/REPOS/sgb-new/src/components/ProjectsList.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/components/ProjectsList.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SkillsList.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__props__ = __webpack_require__("./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/SkillsList.jsx";

(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var SkillsList = function SkillsList(props) {
  var _props$skills = props.skills,
      technical = _props$skills.technical,
      supplementary = _props$skills.supplementary,
      commercial = _props$skills.commercial,
      academic = _props$skills.academic;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-12 col-sm-4 tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Experience"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Technical"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "technical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, technical.map(function (techSkill, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, techSkill);
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Supplementary"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "technical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, supplementary.map(function (supplementarySkill, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, supplementarySkill);
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Commercial"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, commercial.map(function (commercialSkill, key) {
    var dateRange = commercialSkill.dateRange,
        description = commercialSkill.description,
        companyName = commercialSkill.companyName,
        companyLink = commercialSkill.companyLink;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, dateRange), ' ', description, ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      href: companyLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, companyName));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Academic"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "academic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, academic.map(function (academicItem, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, academicItem.date), " ", academicItem.description);
  })));
};

SkillsList.propTypes = {
  skills: __WEBPACK_IMPORTED_MODULE_1__props__["b" /* skillsProp */].isRequired
};
var _default = SkillsList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SkillsList, "SkillsList", "/Users/samgbrown/REPOS/sgb-new/src/components/SkillsList.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/components/SkillsList.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return projects; });
(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/* eslint-disable max-len */
var about = {
  face: '/static/img/face.jpg',
  social: [{
    name: 'Github',
    url: 'https://github.com/sgb-io'
  }, {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samgbrown'
  }, {
    name: 'Mail',
    url: 'mailto:sam@sgb.io'
  }, {
    name: 'Twitter',
    url: 'https://twitter.com/sgb_io'
  }],
  intros: ['I\'m Sam, a software engineer based in London.', 'The hyper-connected world we live in today means we have a unique opportunity to deliver real world value to thousands or even millions of people by deploying code onto devices and networks. I think it\'s a special time to be involved with the web and I\'m grateful to be a part of it.', 'I\'m passionate about what I do and having fun doing it with amazing people inspires me.', 'I have worked accross the stack with various technologies and have a particular interest in all things JavaScript.']
};
var skills = {
  technical: ['JavaScript (ES6 & beyond)', 'React, Flux/Redux and related modules in the ecosystem', 'BDD/TDD via Jest, Enzyme and alternative modules', 'Hybrid Mobile (mainly Cordova, some React Native)', 'CSS (usually BEM & preprocessor with autoprefixer etc)', 'Tooling - various (primarily Webpack these days)', 'NodeJS ecosystem & tooling (npm etc)', 'Comfortable with TypeScript or Flow', 'Personal interest in programming languages including Golang & Python', 'Personal interest in functional programming (& other programming styles)', 'Legacy skills: angular 1.x, php & more'],
  supplementary: ['Solid experience working in a containerised world: docker etc', 'Solid experience with AWS/the cloud', 'Expert debugger in the browser', 'CI/CD tooling (Travis, Gitlab, etc), unit tests & high levels of coverage', 'Coverage/static analysis eg Instanbul, CodeClimate', 'Reasonable experience & knowledge of databases', 'Reasonable understanding of data structures & their importance', 'Reasonable understanding of web accessibility', 'Reasonable systems experience: message queues, emails, security', 'Experienced working in Agile teams, Scrum & Kanban styles', 'Caching (it\'s simple but hard!)', 'Naming things (even harder!)'],
  commercial: [{
    dateRange: '10/17 - 07/18',
    description: 'React/Redux JavaScript Developer (contract) at',
    companyName: 'The App Business (for The Racing Post)',
    companyLink: 'https://www.theappbusiness.com/'
  }, {
    dateRange: '04/17 - 10/17',
    description: 'Senior Front-End Developer (contract) at',
    companyName: 'Circus Street',
    companyLink: 'https://circusstreet.com/'
  }, {
    dateRange: '10/16 - 03/17',
    description: 'Senior Full-Stack Developer (contract) at',
    companyName: 'Mentally Friendly (for the British Museum)',
    companyLink: 'https://mentallyfriendly.com/'
  }, {
    dateRange: '07/16 - 09/16',
    description: 'Front-End Developer (contract) at',
    companyName: 'Code & Theory',
    companyLink: 'https://www.codeandtheory.com/'
  }, {
    dateRange: '2014 - 2016',
    description: 'Lead Developer at',
    companyName: 'HAIRCVT',
    companyLink: 'https://humanjpg.com/work/haircvt'
  }, {
    dateRange: '2014 - 2014',
    description: 'Full-stack Developer at',
    companyName: 'Ustwo',
    companyLink: 'https://www.ustwo.com/'
  }, {
    dateRange: '2011 - 2014',
    description: 'Web Developer, Lead Developer at',
    companyName: 'UNIT9 (for various clients)',
    companyLink: 'https://www.unit9.com/'
  }],
  academic: [{
    date: '2008-2012',
    description: 'BSc Web Application Development (University of Plymouth)'
  }]
};
var projects = [{
  title: 'The App Business X The Racing Post (November 2017 - July 2018)',
  link: 'https://www.racingpost.com/',
  images: ['/static/img/projects/rp.jpg'],
  role: 'React/Redux JavaScript Developer (contract)',
  description: 'I worked on an embedded agile team delivering substantial upgrades to racingpost.com. By the end of this project, racingpost.com went from only single bets, to a fully featured betslip supporting multiples and accumulators accross 6 bookmaker partners, with a brand new user experience. The stand-out feature of this project was the quality of the betslip component we delivered, including 99.96% test coverage.',
  keyTech: 'React, Redux, Jest'
}, {
  title: 'Circus Street (April 2017 - November 2017)',
  link: 'https://circusstreet.com/',
  images: ['/static/img/projects/circus-street.jpg'],
  role: 'Senior Front-End Developer',
  description: 'I helped the team at Circus Street advance their online learning product by working accross their offering including the marketing website, the learning web application, the hybrid app and several internal management tools. This ranged from several greenfield React/Redux projects with 80%+ test coverage to maintaining an older Angular 1.X project. During this role I learned a great deal about Redux and had the pleasure of implementing several apps using it.',
  keyTech: 'React, Redux, Jest, Angular'
}, {
  title: 'Mentally Friendly X British Museum (October 2016 - March 2017)',
  link: 'https://britishmuseum.org',
  images: ['/static/img/projects/british-museum.jpg'],
  role: 'Senior Full-Stack Developer',
  description: 'I was a significant contributor to the new (as-yet unreleased) British Museum website. Our team delivered a large project that enables the museum to deliver a vast range of dynamic content to over 500,000 global visitors per month. We implemented a fully component-ized responsive website with a containerized backend that involved multiple levels of caching and used microservices-like patterns. This project really exposed the challenges of a content-heavy organization.',
  keyTech: 'Node, Laravel, Vue'
}, {
  title: 'HAIRCVT (2014 - 2016)',
  link: 'https://humanjpg.com/work/haircvt',
  images: ['/static/img/projects/haircvt.jpg', '/static/img/projects/haircvt-2.jpg', '/static/img/projects/haircvt-3.jpg'],
  role: 'Lead Developer & Partner',
  description: 'I led a team of 2 from iterating prototypes, to MVP, to a product delivering record growth month-on-month. Our product was a Laravel/Symfony PHP monolith with a Angular 1.X front-end, with many more technologies and challenges hidden away - including message queues, cacheing mechanisms, a database migration, AWS deployment and a hybrid Ionic app.',
  keyTech: 'Angular, PHP, AWS'
}, {
  title: 'Google Nexus 5 (2013)',
  link: 'https://google.com/nexus/5',
  images: ['/static/img/projects/nexus.jpg'],
  role: 'Tech Lead',
  description: 'I led the technical side of Google\'s showcase site for the Nexus 5 phone that launched in 2013. A responsive, retina-compatible & parallax project with interactive \'moments\', this site was visited by millions during the annoucement week. A challenging but rewarding project including integration with some internal Google systems.',
  keyTech: 'Angular, GSAP/TweenMax'
}];
/* eslint-enable max-len */

;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(about, "about", "/Users/samgbrown/REPOS/sgb-new/src/content.js");
  reactHotLoader.register(skills, "skills", "/Users/samgbrown/REPOS/sgb-new/src/content.js");
  reactHotLoader.register(projects, "projects", "/Users/samgbrown/REPOS/sgb-new/src/content.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__("./App.jsx");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/pages/index.jsx";


(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var ServerRenderedSite = function ServerRenderedSite() {
  var analytics = typeof window !== 'undefined' ? function () {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-17754914-5');
  }() : '';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Sam Brown"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Inconsolata",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Making & breaking stuff.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: "Making & breaking stuff.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:site_name",
    content: "sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "https://sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: "https://sgb.io/img/face.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "favicon-32x32.png",
    sizes: "32x32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "favicon-16x16.png",
    sizes: "16x16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
    integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/app.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-17754914-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, analytics)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "To read about me, please enable JavaScript. This portfolio site is rendered in your browser using ReactJS."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

var _default = ServerRenderedSite;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ServerRenderedSite, "ServerRenderedSite", "/Users/samgbrown/REPOS/sgb-new/src/pages/index.jsx");
  reactHotLoader.register(_default, "default", "/Users/samgbrown/REPOS/sgb-new/src/pages/index.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./props.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return skillsProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectsProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return socialProp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
(function () {
  var enterModule = __webpack_require__("../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var skillsProp = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  technical: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string).isRequired,
  supplementary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string).isRequired,
  commercial: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    dateRange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
    description: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
    companyName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
    companyLink: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired
  })).isRequired,
  academic: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    date: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
    description: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired
  })).isRequired
});
var projectsProp = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  title: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  link: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  images: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string).isRequired,
  role: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  keyTech: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired
}));
var socialProp = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  url: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired
}));
;

(function () {
  var reactHotLoader = __webpack_require__("../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(skillsProp, "skillsProp", "/Users/samgbrown/REPOS/sgb-new/src/props.js");
  reactHotLoader.register(projectsProp, "projectsProp", "/Users/samgbrown/REPOS/sgb-new/src/props.js");
  reactHotLoader.register(socialProp, "socialProp", "/Users/samgbrown/REPOS/sgb-new/src/props.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map