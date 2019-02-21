module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/About */ "./components/About.jsx");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Content */ "./components/Content.jsx");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./content.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/App.jsx";





var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    face: _content__WEBPACK_IMPORTED_MODULE_4__["about"].face,
    social: _content__WEBPACK_IMPORTED_MODULE_4__["about"].social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
    intros: _content__WEBPACK_IMPORTED_MODULE_4__["about"].intros,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skills: _content__WEBPACK_IMPORTED_MODULE_4__["skills"],
    projects: _content__WEBPACK_IMPORTED_MODULE_4__["projects"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/About.jsx":
/*!******************************!*\
  !*** ./components/About.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/About.jsx";



var About = function About(props) {
  var intros = props.intros.map(function (intro, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, intro);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, intros));
};

About.propTypes = {
  intros: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Content.jsx":
/*!********************************!*\
  !*** ./components/Content.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SkillsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkillsList */ "./components/SkillsList.jsx");
/* harmony import */ var _ProjectsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsList */ "./components/ProjectsList.jsx");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../props */ "./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/Content.jsx";





var Content = function Content(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SkillsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    skills: props.skills,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projects: props.projects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

Content.propTypes = {
  skills: _props__WEBPACK_IMPORTED_MODULE_3__["skillsProp"].isRequired,
  projects: _props__WEBPACK_IMPORTED_MODULE_3__["projectsProp"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../props */ "./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/Header.jsx";




var Header = function Header(props) {
  var socialLinks = props.social.map(function (social, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, social.name));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-4 logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.face,
    alt: "My face",
    className: "face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-pills nav-fill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, socialLinks)));
};

Header.propTypes = {
  face: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  social: _props__WEBPACK_IMPORTED_MODULE_2__["socialProp"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ProjectsList.jsx":
/*!*************************************!*\
  !*** ./components/ProjectsList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../props */ "./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/ProjectsList.jsx";



var ProjectsList = function ProjectsList(props) {
  var projects = props.projects.map(function (project, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row project",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, project.title), project.images.map(function (image, imageKey) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: imageKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: project.link,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image,
        alt: project.title,
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Role:"), " ", project.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, project.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Key tech:"), " ", project.keyTech)));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8 work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Past Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), projects)));
};

ProjectsList.propTypes = {
  projects: _props__WEBPACK_IMPORTED_MODULE_1__["projectsProp"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectsList);

/***/ }),

/***/ "./components/SkillsList.jsx":
/*!***********************************!*\
  !*** ./components/SkillsList.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../props */ "./props.js");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/components/SkillsList.jsx";



var SkillsList = function SkillsList(props) {
  var _props$skills = props.skills,
      technical = _props$skills.technical,
      supplementary = _props$skills.supplementary,
      commercial = _props$skills.commercial,
      academic = _props$skills.academic;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-4 tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Technical"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "technical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, technical.map(function (techSkill, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, techSkill);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Supplementary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "technical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, supplementary.map(function (supplementarySkill, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, supplementarySkill);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Commercial"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, commercial.map(function (commercialSkill, key) {
    var dateRange = commercialSkill.dateRange,
        description = commercialSkill.description,
        companyName = commercialSkill.companyName,
        companyLink = commercialSkill.companyLink;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, dateRange), ' ', description, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: companyLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, companyName));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Academic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "academic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, academic.map(function (academicItem, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, academicItem.date), " ", academicItem.description);
  })));
};

SkillsList.propTypes = {
  skills: _props__WEBPACK_IMPORTED_MODULE_1__["skillsProp"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SkillsList);

/***/ }),

/***/ "./content.js":
/*!********************!*\
  !*** ./content.js ***!
  \********************/
/*! exports provided: about, skills, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
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

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./App.jsx");
var _jsxFileName = "/Users/samgbrown/REPOS/sgb-new/src/pages/index.jsx";




var ServerRenderedSite = function ServerRenderedSite() {
  var analytics = typeof window !== 'undefined' ? function () {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-17754914-5');
  }() : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Sam Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Inconsolata",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Making & breaking stuff.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "Making & breaking stuff.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:site_name",
    content: "sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://sgb.io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "https://sgb.io/static/img/face.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/favicon-32x32.png",
    sizes: "32x32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/favicon-16x16.png",
    sizes: "16x16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
    integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/app.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-17754914-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, analytics)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "To read about me, please enable JavaScript. This portfolio site is rendered in your browser using ReactJS."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ServerRenderedSite);

/***/ }),

/***/ "./props.js":
/*!******************!*\
  !*** ./props.js ***!
  \******************/
/*! exports provided: skillsProp, projectsProp, socialProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillsProp", function() { return skillsProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsProp", function() { return projectsProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialProp", function() { return socialProp; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var skillsProp = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  technical: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  supplementary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  commercial: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    dateRange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    companyName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    companyLink: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  })).isRequired,
  academic: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  })).isRequired
});
var projectsProp = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  keyTech: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}));
var socialProp = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
}));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samgbrown/REPOS/sgb-new/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map