/* eslint-disable max-len */

export const about = {
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
        'The hyper-connected world we live in today means we have a unique opportunity to deliver real world value to thousands or even millions of people by deploying code onto devices and networks. I think it\'s a special time to be involved with the web and I\'m grateful to be a part of it.',
        'I\'m passionate about what I do and having fun doing it with amazing people inspires me.',
        'I have worked accross the stack with various technologies and have a particular interest in all things JavaScript.',
    ],
}

export const skills = {
    technical: [
        'JavaScript (ES6 & beyond)',
        'React, Flux/Redux and related modules in the ecosystem',
        'BDD/TDD via Jest, Enzyme and alternative modules',
        'Hybrid Mobile (mainly Cordova, some React Native)',
        'CSS (usually BEM & preprocessor with autoprefixer etc)',
        'Tooling - various (primarily Webpack these days)',
        'NodeJS ecosystem & tooling (npm etc)',
        'Comfortable with TypeScript or Flow',
        'Personal interest in programming languages including Golang & Python',
        'Personal interest in functional programming (& other programming styles)',
        'Legacy skills: angular 1.x, php & more',
    ],
    supplementary: [
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
            dateRange: '10/17 - 07/18',
            description: 'React/Redux JavaScript Developer (contract) at',
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

export const projects = [
    {
        title: 'The App Business X The Racing Post (November 2017 - July 2018)',
        link: 'https://www.racingpost.com/',
        images: [
            '/static/img/projects/rp.jpg',
        ],
        role: 'React/Redux JavaScript Developer (contract)',
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

/* eslint-enable max-len */
