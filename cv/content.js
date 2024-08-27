"use strict";

const about = {
    face: "/static/img/face.jpg",
    social: [{
        name: "GitHub",
        url: "https://github.com/sgb-io"
    }, {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samgbrown"
    }, {
        name: "Mail",
        url: "mailto:sam@sgb.io"
    }, {
        name: "Twitter",
        url: "https://twitter.com/sgb_io"
    }],
    intros: ["I'm Sam, a software engineer based in the UK with a focus on UI and tooling.", "I'm passionate about delivering high quality software. I have broad industry experience across a range of types of organisations, most recently at global investment banks.", "During my career I have worked across the stack with various technologies and have a particular interest in all things web and JavaScript. I have a focus on UI development and tooling, often working with TypeScript, React, Node.js and GraphQL.", "One of my interests is static code analysis (I have published my own <a href='https://github.com/sgb-io/codehawk-cli' target='_blank'>open source static analysis tool on GitHub</a>). I also enjoy learning about personal finance and build <a href='https://savingtool.co.uk' target='_blank'>SavingTool.co.uk</a> in my spare time."]
};

const skills = {
    technical: ["TypeScript, JavaScript", "React", "GraphQL", "NodeJS, NPM, libraries", "CLI tools", "Developer Tooling", "Documentation", "Modern SDLC", "Working with monolithic and microservice architectures", "AWS & Cloud-driven approaches"],
    supplementary: ["Experienced with banking technology environments", "Personal interest in programming languages", "Data structure driven approach", "Caching (it's simple but hard!)", "Naming things (even harder!)"],
    commercial: [{
        dateRange: "05/22 - Present",
        description: "Software Engineer (VP, UI Engineering) at",
        companyName: "J.P. Morgan (CIB, Digital & Platform Services)",
        companyLink: "https://www.jpmorgan.com/solutions/cib/investment-banking"
    }, {
        dateRange: "05/21 - 05/22",
        description: "UI Team Lead (VP) at",
        companyName: "Citigroup (Cross-Asset Risk, ICG)",
        companyLink: "https://www.citigroup.com/citi/"
    }, {
        dateRange: "04/20 - 05/21",
        description: "Senior UI Developer (VP) at",
        companyName: "Citigroup (Cross-Asset Risk, ICG)",
        companyLink: "https://www.citigroup.com/citi/"
    }, {
        dateRange: "09/19 - 04/20",
        description: "React JavaScript Developer (contract) at",
        companyName: "Concentra Analytics (OrgVue)",
        companyLink: "https://concentra.co.uk"
    }, {
        dateRange: "05/19 - 09/19",
        description: "React JavaScript Developer (contract) at",
        companyName: "Idean (for SMARTY/Three Mobile)",
        companyLink: "https://smarty.co.uk"
    }, {
        dateRange: "07/18 - 05/19",
        description: "React JavaScript Developer (contract) at",
        companyName: "Reason (for AlixPartners)",
        companyLink: "https://www.alixpartners.com/"
    }, {
        dateRange: "10/17 - 07/18",
        description: "React JavaScript Developer (contract) at",
        companyName: "The App Business (for The Racing Post)",
        companyLink: "https://www.theappbusiness.com/"
    }, {
        dateRange: "04/17 - 10/17",
        description: "Senior Front-End Developer (contract) at",
        companyName: "Circus Street",
        companyLink: "https://circusstreet.com/"
    }, {
        dateRange: "10/16 - 03/17",
        description: "Senior Full-Stack Developer (contract) at",
        companyName: "Mentally Friendly (for the British Museum)",
        companyLink: "https://mentallyfriendly.com/"
    }, {
        dateRange: "07/16 - 09/16",
        description: "Front-End Developer (contract) at",
        companyName: "Code & Theory",
        companyLink: "https://www.codeandtheory.com/"
    }, {
        dateRange: "2014 - 2016",
        description: "Lead Developer at",
        companyName: "HAIRCVT",
        companyLink: "https://humanjpg.com/work/haircvt"
    }, {
        dateRange: "2014 - 2014",
        description: "Full-stack Developer at",
        companyName: "Ustwo",
        companyLink: "https://www.ustwo.com/"
    }, {
        dateRange: "2011 - 2014",
        description: "Web Developer, Lead Developer at",
        companyName: "UNIT9 (for various clients)",
        companyLink: "https://www.unit9.com/"
    }],
    academic: [{
        date: "2008-2012",
        description: "BSc Web Application Development (University of Plymouth)"
    }]
};

const projects = [{
    title: "J.P. Morgan - CIB, Digital & Platform Services (June 2022 - Present)",
    link: "https://www.jpmorgan.com/solutions/cib/investment-banking",
    images: ["/static/img/projects/jpm.png"],
    role: "Software Engineer (VP, UI Engineering)",
    description: "Building tooling and services to enable and enhance UI engineering across the CIB, with a focus on developer experience. Contributions to Modular (open source) and redevelopment of a key strategic CLI tool.",
    keyTech: "TypeScript, React, Node.js, GraphQL, Micro Frontends, Modular, Monorepos"
}, {
    title: "Citigroup - Cross-Asset Risk, ICG (April 2020 - May 2022)",
    link: "https://www.citigroup.com/citi/",
    images: ["/static/img/projects/citi.jpg"],
    role: "Senior UI Developer (VP), UI Team Lead (VP)",
    description: "Leading & managing a development team of 7 to drive UI development of a React/TypeScript/GraphQL UI platform for cross-asset risk systems (Markets Technology, ICG)",
    keyTech: "React, TypeScript, GraphQL, Micro Frontends"
}, {
    title: "Concentra Analytics - OrgVue (September 2019 - April 2020)",
    link: "https://concentra.co.uk",
    images: [],
    role: "React JavaScript Developer (contract)",
    description: "Worked in the core OrgVue team to deliver the 3.4 milestone. Major new features including new charts and data fetching reimplementation. I also gained experience working with the new React concurrent mode and statecharts for state management.",
    keyTech: "React, TypeScript, Concurrent Mode, Highcharts"
}, {
    title: "Idean X SMARTY & Three (May 2019 - September 2019)",
    link: "https://smarty.co.uk",
    images: [],
    role: "React JavaScript Developer (contract)",
    description: "Delivering new capabilities on SMARTYs marketing site and user webapp. New features and improved experiences for many thousands of users.",
    keyTech: "React, Redux, Jest, Flow, Gatsby"
}, {
    title: "Reason X AlixPartners (July 2018 - May 2019)",
    link: "https://www.alixpartners.com/",
    images: [],
    role: "React JavaScript Developer (contract)",
    description: "Core member of a team delivering an internal greenfield financial analysis webapp from day 1. Primary member of a 6-strong frontend dev team iteratively delivering a high-value product. My primary highlight on this project has been introducing the team to Flow and using it extensively throughout our code, plus leading the charge in testing.",
    keyTech: "React, Redux, Jest, Flow"
}, {
    title: "The App Business X The Racing Post (November 2017 - July 2018)",
    link: "https://www.racingpost.com/",
    images: [],
    role: "React JavaScript Developer (contract)",
    description: "I worked on an embedded agile team delivering substantial upgrades to racingpost.com. By the end of this project, racingpost.com went from only single bets, to a fully featured betslip supporting multiples and accumulators accross 6 bookmaker partners, with a brand new user experience. The stand-out feature of this project was the quality of the betslip component we delivered, including 99.96% test coverage.",
    keyTech: "React, Redux, Jest"
}, {
    title: "Circus Street (April 2017 - November 2017)",
    link: "https://circusstreet.com/",
    images: [],
    role: "Senior Front-End Developer",
    description: "I helped the team at Circus Street advance their online learning product by working accross their offering including the marketing website, the learning web application, the hybrid app and several internal management tools. This ranged from several greenfield React/Redux projects with 80%+ test coverage to maintaining an older Angular 1.X project. During this role I learned a great deal about Redux and had the pleasure of implementing several apps using it.",
    keyTech: "React, Redux, Jest, Angular"
}, {
    title: "Mentally Friendly X British Museum (October 2016 - March 2017)",
    link: "https://britishmuseum.org",
    images: ["/static/img/projects/british-museum.jpg"],
    role: "Senior Full-Stack Developer",
    description: "I was a significant contributor to the new (as-yet unreleased) British Museum website. Our team delivered a large project that enables the museum to deliver a vast range of dynamic content to over 500,000 global visitors per month. We implemented a fully component-ized responsive website with a containerized backend that involved multiple levels of caching and used microservices-like patterns. This project really exposed the challenges of a content-heavy organization.",
    keyTech: "Node, Laravel, Vue"
}, {
    title: "HAIRCVT (2014 - 2016)",
    link: "https://humanjpg.com/work/haircvt",
    images: ["/static/img/projects/haircvt.jpg", "/static/img/projects/haircvt-2.jpg", "/static/img/projects/haircvt-3.jpg"],
    role: "Lead Developer & Partner",
    description: "I led a team of 2 from iterating prototypes, to MVP, to a product delivering record growth month-on-month. Our product was a Laravel/Symfony PHP monolith with a Angular 1.X front-end, with many more technologies and challenges hidden away - including message queues, cacheing mechanisms, a database migration, AWS deployment and a hybrid Ionic app.",
    keyTech: "Angular, PHP, AWS"
}, {
    title: "Google Nexus 5 (2013)",
    link: "https://google.com/nexus/5",
    images: ["/static/img/projects/nexus.jpg"],
    role: "Tech Lead",
    description: "I led the technical side of Google's showcase site for the Nexus 5 phone that launched in 2013. A responsive, retina-compatible & parallax project with interactive 'moments', this site was visited by millions during the annoucement week. A challenging but rewarding project including integration with some internal Google systems.",
    keyTech: "Angular, GSAP/TweenMax"
}];

// This style is required for our current cv script
module.exports = {
    about,
    skills,
    projects
};
