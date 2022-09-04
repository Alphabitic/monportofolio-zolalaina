//PLEASE FOLLOW THE FORMAT OF THIS FILE.
import { DiFirebase, DiReact, DiZend, DiRedhat, DiCodeigniter, DiJqueryLogo } from 'react-icons/di';
import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
export const userinfo = {
    logoText: "Herivony", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'alphabitic@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '00261 38 73 999 89', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+261' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/Alphabitic/React_Andry_Zola', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/%E2%9C%A8herivony-zolalaina-andrianantenaina-574856238/', icon: faLinkedinIn },
    ],
    greeting: {
        //this text goes on your landing page
        title: "ANDRIANANTENAINA Herivony Zolalaina",
        subtitle: "  Developpeur Frontend React certifié FreeCodeCamp",
        subtitle2: "  Administrateur systèmes, réseaux et virtualisation",

    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Administrateur systèmes et réseaux", // eg.frontend, backend, devops etc
            icones: <DiFirebase size="3rem" />,
            skills: ["Administration de serveur Citrix, AD et Exchange (environnement Windows / Linux) ", "Administration de machines Virtuelles via VSphere (VMWARE)  ", " Cloud Computing "] //eg. react, html, python etc.
        },
        {
            category: "Developpeur FrontEnd en React",
            icones: <DiReact size="3rem" />,
            skills: ["ReactJS/ Javascript Vanilla/ Langage C /Next.js /React Router /Redux ", "Material UI/ React Bootstrap / Chakra Ui", "Firebase / Axios / Vercel"]
        },
        {
            category: "Réseaux et Télécommunication",
            icones: <DiZend size="3rem" />,
            skills: ["Internet (Gestion accès, appel API, installation, reverse DNS) ", "Telephonie VOIP ( 3CX/ PABX/ SIP)", "OvertheBox OVH"]
        },

    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Juillet 16, 2022', //timespan
                title: 'Certificat :Front End Development Libraries', //eg. BTech in Compuster Engineering
                organization: "freeCodeCamp.org",
                description: 'https://www.freecodecamp.org/certification/fcc3b5de587-ab7e-4a19-b1cc-6ae5814d4793/front-end-development-libraries' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2015-2016', //timespan
                title: 'Master en Ingénierie Sécurité systèmes, Réseau et télécommunication', //eg. BTech in Compuster Engineering
                organization: "Ecole Supérieure de Management, de Commerce et d'Informatique de Fès, Maroc",
                description: '' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2012-2013',
                title: 'Licence en Génie Mécanique ',
                organization: 'Faculté des Sciences et Techniques de Beni Mellal Maroc.',
                description: 'Programmation et simulation Mécaniques en langage C'
            },
            {
                time: '2009-2012',
                title: "Diplôme d'Études Universitaires en Sciences et Techniques en Math- Info - Physique(D.E.U.S.T)",
                organization: 'Faculté des Sciences et Techniques de Beni Mellal Maroc.',
                description: ''
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'EasyTech', //company name eg.Microsoft
                companylogo: <DiRedhat size="3rem" />, //companylogo
                position: 'Administrateurs systèmes et virtualisation', //post you held eg.Senior SDE
                time: "Mai 2022 - Jusqu'a présent", //timespan
                description: "Administration de serveurs (Citrix, AD et Exchange, machines Virtuelles via VSphere (VMWARE))", //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Transacom',
                companylogo: <DiCodeigniter size="3rem" />,
                position: 'Gérant et technicien N°3',
                time: 'Décembre 2020 - Mai 2022',
                description: "Création intranet et procédures en (HTML/CSS/JavaScript), gestion RH, déploiment de solutions VOIP et Internet",
            },
            {
                company: 'Miav',
                companylogo: <DiJqueryLogo size="3rem" />,
                position: 'Support technique N° 3',
                time: 'Mai 2019- Décembre 2020',
                description: "Guider l'utilisateur à résoudre les dysfonctionnements, contrôle à distance et routage (VPN, Borne Wifi, DMZ, Caméras)."
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projets',
    workMainPage: 'Projets',
    capabilities: 'Technologies',
    about: 'A mon sujet',
    education: 'Etudes',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Me contacter',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'Détails',
    workCTA: 'Voir plus',
    capabCTA: "Plus d'informations",
    educationCTA: 'Détails',
    resumeCTA: 'Conclusion',
    submitBTN: 'Soumettre'
}