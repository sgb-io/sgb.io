const about = {
    face: '/static/img/face.jpg',
    social: [
        {
            name: 'Github',
            url: 'https://github.com/sgb-io',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/samgbrown',
        },
        {
            name: 'Mail',
            url: 'mailto:sam@sgb.io',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/sgb_io',
        },
    ],
    intros: [
        'I\'m Sam, a software engineer based in London.',
        'I\'m a strong communicator and passionate about delivering quality in products. I have broad industry experience across a range of types of organisations - including finance, gaming & advertising. I\'m an expert on code quality and spend time interacting with the open source community across a range of projects.',
        'What sets me apart? My critical thinking and communication skills.',
        'I have worked accross the stack with various technologies and have a particular interest in all things JavaScript.',
    ],
}

const skills = {
    technical: [
        'JavaScript (ES6/7 & beyond)',
        'Flow, TypeScript',
        'React, Flux/Redux and related modules in the ecosystem',
        'Next/Gatsby & SSR for React',
        'Unit & integration testing via Jest, Enzyme & Cypress',
        'Hybrid Mobile (mainly Cordova, some React Native)',
        'CSS (usually BEM & preprocessor with autoprefixer etc)',
        'NodeJS ecosystem & tooling (deep understanding of npm)',
        'Personal interest in programming languages including Golang & Python',
        'Personal interest in functional programming (& other programming styles)',
    ],
    supplementary: [
        'Excellent communicator',
        'Solid experience working in a containerised world: docker etc',
        'Solid experience with AWS/the cloud',
        'Expert debugger in the browser',
        'CI/CD tooling (Travis, Gitlab, etc), unit tests & high levels of coverage',
        'Coverage/static analysis eg Instanbul, CodeClimate',
        'Reasonable experience & knowledge of databases',
        'Reasonable understanding of data structures & their importance',
        'Reasonable understanding of web accessibility',
        'Reasonable systems experience: message queues, emails, security',
        'Experienced working in Agile teams, Scrum & Kanban styles',
        'Caching (it\'s simple but hard!)',
        'Naming things (even harder!)',
    ],
    commercial: [
        {
            dateRange: '05/19 - Present',
            description: 'React JavaScript Developer (contract) at',
            companyName: 'Idean (for SMARTY/Three Mobile)',
            companyLink: 'https://smarty.co.uk',
        },
        {
            dateRange: '07/18 - 05/19',
            description: 'React JavaScript Developer (contract) at',
            companyName: 'Reason (for AlixPartners)',
            companyLink: 'https://www.alixpartners.com/',
        },
        {
            dateRange: '10/17 - 07/18',
            description: 'React JavaScript Developer (contract) at',
            companyName: 'The App Business (for The Racing Post)',
            companyLink: 'https://www.theappbusiness.com/',
        },
        {
            dateRange: '04/17 - 10/17',
            description: 'Senior Front-End Developer (contract) at',
            companyName: 'Circus Street',
            companyLink: 'https://circusstreet.com/',
        },
        {
            dateRange: '10/16 - 03/17',
            description: 'Senior Full-Stack Developer (contract) at',
            companyName: 'Mentally Friendly (for the British Museum)',
            companyLink: 'https://mentallyfriendly.com/',
        },
        {
            dateRange: '07/16 - 09/16',
            description: 'Front-End Developer (contract) at',
            companyName: 'Code & Theory',
            companyLink: 'https://www.codeandtheory.com/',
        },
        {
            dateRange: '2014 - 2016',
            description: 'Lead Developer at',
            companyName: 'HAIRCVT',
            companyLink: 'https://humanjpg.com/work/haircvt',
        },
        {
            dateRange: '2014 - 2014',
            description: 'Full-stack Developer at',
            companyName: 'Ustwo',
            companyLink: 'https://www.ustwo.com/',
        },
        {
            dateRange: '2011 - 2014',
            description: 'Web Developer, Lead Developer at',
            companyName: 'UNIT9 (for various clients)',
            companyLink: 'https://www.unit9.com/',
        },
    ],
    academic: [
        {
            date: '2008-2012',
            description: 'BSc Web Application Development (University of Plymouth)',
        },
    ],
}

const projects = [
    {
        title: 'Idean X SMARTY & Three (May 2019 - Present)',
        link: 'https://smarty.co.uk',
        images: [],
        role: 'React JavaScript Developer (contract)',
        description: 'Delivering new capabilities on SMARTYs marketing site and user webapp. New features and improved experiences for many thousands of users.',
        keyTech: 'React, Redux, Jest, Flow, Gatsby',
    },
    {
        title: 'Reason X AlixPartners (July 2018 - May 2019)',
        link: 'https://www.alixpartners.com/',
        images: [],
        role: 'React JavaScript Developer (contract)',
        description: 'Core member of a team delivering an internal greenfield financial analysis webapp from day 1. Primary member of a 6-strong frontend dev team iteratively delivering a high-value product. My primary highlight on this project has been introducing the team to Flow and using it extensively throughout our code, plus leading the charge in testing.',
        keyTech: 'React, Redux, Jest, Flow',
    },
    {
        title: 'The App Business X The Racing Post (November 2017 - July 2018)',
        link: 'https://www.racingpost.com/',
        images: [
            '/static/img/projects/rp.jpg',
        ],
        role: 'React JavaScript Developer (contract)',
        description: 'I worked on an embedded agile team delivering substantial upgrades to racingpost.com. By the end of this project, racingpost.com went from only single bets, to a fully featured betslip supporting multiples and accumulators accross 6 bookmaker partners, with a brand new user experience. The stand-out feature of this project was the quality of the betslip component we delivered, including 99.96% test coverage.',
        keyTech: 'React, Redux, Jest',
    },
    {
        title: 'Circus Street (April 2017 - November 2017)',
        link: 'https://circusstreet.com/',
        images: [
            '/static/img/projects/circus-street.jpg',
        ],
        role: 'Senior Front-End Developer',
        description: 'I helped the team at Circus Street advance their online learning product by working accross their offering including the marketing website, the learning web application, the hybrid app and several internal management tools. This ranged from several greenfield React/Redux projects with 80%+ test coverage to maintaining an older Angular 1.X project. During this role I learned a great deal about Redux and had the pleasure of implementing several apps using it.',
        keyTech: 'React, Redux, Jest, Angular',
    },
    {
        title: 'Mentally Friendly X British Museum (October 2016 - March 2017)',
        link: 'https://britishmuseum.org',
        images: [
            '/static/img/projects/british-museum.jpg',
        ],
        role: 'Senior Full-Stack Developer',
        description: 'I was a significant contributor to the new (as-yet unreleased) British Museum website. Our team delivered a large project that enables the museum to deliver a vast range of dynamic content to over 500,000 global visitors per month. We implemented a fully component-ized responsive website with a containerized backend that involved multiple levels of caching and used microservices-like patterns. This project really exposed the challenges of a content-heavy organization.',
        keyTech: 'Node, Laravel, Vue',
    },
    {
        title: 'HAIRCVT (2014 - 2016)',
        link: 'https://humanjpg.com/work/haircvt',
        images: [
            '/static/img/projects/haircvt.jpg',
            '/static/img/projects/haircvt-2.jpg',
            '/static/img/projects/haircvt-3.jpg',
        ],
        role: 'Lead Developer & Partner',
        description: 'I led a team of 2 from iterating prototypes, to MVP, to a product delivering record growth month-on-month. Our product was a Laravel/Symfony PHP monolith with a Angular 1.X front-end, with many more technologies and challenges hidden away - including message queues, cacheing mechanisms, a database migration, AWS deployment and a hybrid Ionic app.',
        keyTech: 'Angular, PHP, AWS',
    },
    {
        title: 'Google Nexus 5 (2013)',
        link: 'https://google.com/nexus/5',
        images: [
            '/static/img/projects/nexus.jpg',
        ],
        role: 'Tech Lead',
        description: 'I led the technical side of Google\'s showcase site for the Nexus 5 phone that launched in 2013. A responsive, retina-compatible & parallax project with interactive \'moments\', this site was visited by millions during the annoucement week. A challenging but rewarding project including integration with some internal Google systems.',
        keyTech: 'Angular, GSAP/TweenMax',
    },
]


// This style is required for our current cv script
module.exports = {
    about,
    skills,
    projects,
}
