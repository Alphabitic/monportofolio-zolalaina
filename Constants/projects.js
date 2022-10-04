// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.png';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Agence immobilière', //project name
        description: "Projet conçu en utilisant le framework Chakra UI, React/Next, RapidAPI pour l'appel API", //project description
        githubLink: '', //github repo link
        projectLink: 'https://next-immo-alphabitic.vercel.app/property/5457215', //deployed project link
        tech: ['React', 'RapidAPI', 'Chakra UI'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: "Generateur d'analyses",
        description: "En tant qu'administrateur système au sein du groupe Orange Business Service, cette application a été conçu pour faciliter le travail",
        githubLink: '/',
        projectLink: 'https://bewys-ac97c.web.app/',
        tech: ['Firebase', 'React', 'Boostrap'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Job app',
        description: "Application conçue avec la technologie MERN, elle intègre toutes les fonctionnalités principales CRUD",
        githubLink: '/',
        projectLink: '/',
        tech: ['Mongodb', 'React', 'Node', 'express'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
