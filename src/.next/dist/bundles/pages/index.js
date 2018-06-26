module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./props.js

var skillsProp = external__prop_types__default.a.shape({
  technical: external__prop_types__default.a.arrayOf(external__prop_types__default.a.string).isRequired,
  supplementary: external__prop_types__default.a.arrayOf(external__prop_types__default.a.string).isRequired,
  commercial: external__prop_types__default.a.arrayOf(external__prop_types__default.a.shape({
    dateRange: external__prop_types__default.a.string.isRequired,
    description: external__prop_types__default.a.string.isRequired,
    companyName: external__prop_types__default.a.string.isRequired,
    companyLink: external__prop_types__default.a.string.isRequired
  })).isRequired,
  academic: external__prop_types__default.a.arrayOf(external__prop_types__default.a.shape({
    date: external__prop_types__default.a.string.isRequired,
    description: external__prop_types__default.a.string.isRequired
  })).isRequired
});
var projectsProp = external__prop_types__default.a.arrayOf(external__prop_types__default.a.shape({
  title: external__prop_types__default.a.string.isRequired,
  link: external__prop_types__default.a.string.isRequired,
  images: external__prop_types__default.a.arrayOf(external__prop_types__default.a.string).isRequired,
  role: external__prop_types__default.a.string.isRequired,
  description: external__prop_types__default.a.string.isRequired,
  keyTech: external__prop_types__default.a.string.isRequired
}));
var socialProp = external__prop_types__default.a.arrayOf(external__prop_types__default.a.shape({
  url: external__prop_types__default.a.string.isRequired,
  name: external__prop_types__default.a.string.isRequired
}));
// CONCATENATED MODULE: ./components/Header.jsx




var Header_Header = function Header(props) {
  var socialLinks = props.social.map(function (social, key) {
    return external__react__default.a.createElement("li", {
      key: key,
      className: "nav-item"
    }, external__react__default.a.createElement("a", {
      href: social.url,
      target: "_blank",
      className: "nav-link"
    }, social.name));
  });
  return external__react__default.a.createElement("div", {
    className: "row header"
  }, external__react__default.a.createElement("div", {
    className: "col-12 col-sm-4 logo"
  }, external__react__default.a.createElement("h1", null, external__react__default.a.createElement("img", {
    src: props.face,
    alt: "My face",
    className: "face"
  }))), external__react__default.a.createElement("div", {
    className: "col-12 col-sm-8"
  }, external__react__default.a.createElement("ul", {
    className: "nav nav-pills nav-fill"
  }, socialLinks)));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/About.jsx



var About_About = function About(props) {
  var intros = props.intros.map(function (intro, key) {
    return external__react__default.a.createElement("p", {
      key: key
    }, intro);
  });
  return external__react__default.a.createElement("div", {
    className: "row about"
  }, external__react__default.a.createElement("div", {
    className: "col-12"
  }, intros));
};

/* harmony default export */ var components_About = (About_About);
// CONCATENATED MODULE: ./components/SkillsList.jsx



var SkillsList_SkillsList = function SkillsList(props) {
  var _props$skills = props.skills,
      technical = _props$skills.technical,
      supplementary = _props$skills.supplementary,
      commercial = _props$skills.commercial,
      academic = _props$skills.academic;
  return external__react__default.a.createElement("div", {
    className: "col-12 col-sm-4 tech"
  }, external__react__default.a.createElement("h2", null, "Experience"), external__react__default.a.createElement("h4", null, "Technical"), external__react__default.a.createElement("ul", {
    className: "technical"
  }, technical.map(function (techSkill, key) {
    return external__react__default.a.createElement("li", {
      key: key
    }, techSkill);
  })), external__react__default.a.createElement("h4", null, "Supplementary"), external__react__default.a.createElement("ul", {
    className: "technical"
  }, supplementary.map(function (supplementarySkill, key) {
    return external__react__default.a.createElement("li", {
      key: key
    }, supplementarySkill);
  })), external__react__default.a.createElement("h4", null, "Commercial"), external__react__default.a.createElement("ul", {
    className: "experience"
  }, commercial.map(function (commercialSkill, key) {
    var dateRange = commercialSkill.dateRange,
        description = commercialSkill.description,
        companyName = commercialSkill.companyName,
        companyLink = commercialSkill.companyLink;
    return external__react__default.a.createElement("li", {
      key: key
    }, external__react__default.a.createElement("strong", null, dateRange), ' ', description, ' ', external__react__default.a.createElement("a", {
      href: companyLink
    }, companyName));
  })), external__react__default.a.createElement("h4", null, "Academic"), external__react__default.a.createElement("ul", {
    className: "academic"
  }, academic.map(function (academicItem, key) {
    return external__react__default.a.createElement("li", {
      key: key
    }, external__react__default.a.createElement("strong", null, academicItem.date), " ", academicItem.description);
  })));
};

/* harmony default export */ var components_SkillsList = (SkillsList_SkillsList);
// CONCATENATED MODULE: ./components/ProjectsList.jsx



var ProjectsList_ProjectsList = function ProjectsList(props) {
  var projects = props.projects.map(function (project, key) {
    return external__react__default.a.createElement("div", {
      className: "row project",
      key: key
    }, external__react__default.a.createElement("div", {
      className: "col-12"
    }, external__react__default.a.createElement("h2", null, project.title), project.images.map(function (image, imageKey) {
      return external__react__default.a.createElement("div", {
        key: imageKey
      }, external__react__default.a.createElement("a", {
        href: project.link,
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        src: image,
        alt: project.title,
        className: "img-fluid"
      })), external__react__default.a.createElement("br", null));
    }), external__react__default.a.createElement("br", null), external__react__default.a.createElement("p", null, external__react__default.a.createElement("strong", null, "Role:"), " ", project.role), external__react__default.a.createElement("p", null, project.description), external__react__default.a.createElement("p", null, external__react__default.a.createElement("strong", null, "Key tech:"), " ", project.keyTech)));
  });
  return external__react__default.a.createElement("div", {
    className: "col-12 col-sm-8 work"
  }, external__react__default.a.createElement("div", {
    className: "row"
  }, external__react__default.a.createElement("div", {
    className: "col-12"
  }, external__react__default.a.createElement("h2", null, "Past Work"), external__react__default.a.createElement("br", null), projects)));
};

/* harmony default export */ var components_ProjectsList = (ProjectsList_ProjectsList);
// CONCATENATED MODULE: ./components/Content.jsx





var Content_Content = function Content(props) {
  return external__react__default.a.createElement("div", {
    className: "row content"
  }, external__react__default.a.createElement(components_SkillsList, {
    skills: props.skills
  }), external__react__default.a.createElement(components_ProjectsList, {
    projects: props.projects
  }));
};

/* harmony default export */ var components_Content = (Content_Content);
// CONCATENATED MODULE: ./content.js
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
var content_projects = [{
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
// CONCATENATED MODULE: ./App.jsx





var App_App = function App() {
  return external__react__default.a.createElement("div", {
    className: "container"
  }, external__react__default.a.createElement(components_Header, {
    face: about.face,
    social: about.social
  }), external__react__default.a.createElement(components_About, {
    intros: about.intros
  }), external__react__default.a.createElement(components_Content, {
    skills: skills,
    projects: content_projects
  }));
};
/* harmony default export */ var App_0 = (App_App);
// CONCATENATED MODULE: ./pages/index.jsx




var pages_ServerRenderedSite = function ServerRenderedSite() {
  var analytics = typeof window !== 'undefined' ? function () {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-17754914-5');
  }() : '';
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "utf-8"
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
  }), external__react__default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), external__react__default.a.createElement("title", null, "Sam Brown"), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Inconsolata",
    rel: "stylesheet"
  }), external__react__default.a.createElement("meta", {
    name: "description",
    content: "Making & breaking stuff."
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: "sgb.io"
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: "Making & breaking stuff."
  }), external__react__default.a.createElement("meta", {
    property: "og:site_name",
    content: "sgb.io"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: "https://sgb.io"
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: "https://sgb.io/img/face.jpg"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "favicon-32x32.png",
    sizes: "32x32"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "favicon-16x16.png",
    sizes: "16x16"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
    integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
    crossOrigin: "anonymous"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/app.css"
  }), external__react__default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-17754914-5"
  }), external__react__default.a.createElement("script", null, analytics)), external__react__default.a.createElement("noscript", null, "To read about me, please enable JavaScript. This portfolio site is rendered in your browser using ReactJS."), external__react__default.a.createElement(App_0, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_ServerRenderedSite);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);