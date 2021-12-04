import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import { IProject, IService, ISkill, IStage } from './type';
import { AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaSchool } from 'react-icons/fa'

export const services:IService[] = [
  {
    title: "Développeur web",
    school: "Institut Paul Hankar",
    ville: "Bruxelles",
    about: "Réaliser, concevoir et développer des applications et site web dynamiques",
    date: "janvier 2017 - juin 2020",
    Icon: FaSchool 
  },
  {
    title: "Maintenance informatique",
    school: "EPFC",
    ville: "Bruxelles",
    about: "",
    date: "février - juin 2016",
    Icon: FaSchool 
  },
  {
    title: "Management des Unités Commerciales",
    school: "Pigier",
    ville: "Tizi Ouzou",
    about: "",
    date: "2008 - 2010",
    Icon: FaSchool 
  },
  {
    title: "Bachelier en commerce extérieur",
    school: "Sigma",
    ville: "Tizi Ouzou",
    about: "",
    date: "2005 - 2008",
    Icon: FaSchool 
  }
];

export const stages:IStage[] = [
  {
    title: "Développeur web front end",
    school: "SARL Palmerie",
    ville: "Paris",
    about: "Refonte d’un site internet, développement coté front html ‐ css ‐ javascript et coté back php ‐ MySQL",
    date: "novembre 2019 - mai 2020",
    Icon: FaServer 
  }
]

export const languages:ISkill[] = [
  {
    name: 'Html & CSS',
    level: '81%',
    Icon: BsCircleFill
  },
  {
    name: 'Bootstrap',
    level: '85%',
    Icon: BsCircleFill
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: BsCircleFill
  },
  {
    name: 'React js',
    level: '76%',
    Icon: BsCircleFill
  },
  {
    name: 'Redux',
    level: '55%',
    Icon: BsCircleFill
  },
  {
    name: 'Next js',
    level: '71%',
    Icon: BsCircleFill
  },
  {
    name: 'node js & express',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'PHP',
    level: '74%',
    Icon: BsCircleFill
  }
]

export const tools:ISkill[] = [
  {
    Icon: BsCircleFill,
    name:'Visual Studio Code',
    level: '75%'
  },
  {
    Icon: BsCircleFill,
    name:'Git',
    level: '61%'
  }
]

export const cms:ISkill[] = [
  {
    Icon: BsCircleFill,
    name:'Wordpress',
    level: '55%'
  }
]

export const database:ISkill[] = [
  {
    Icon: BsCircleFill,
    name:'MySQL',
    level: '76%'
  },
  {
    Icon: BsCircleFill,
    name:'MongoDB',
    level: '70%'
  }
]

export const projects:IProject[] = [
  {
    id: 1,
    name: "Portail emploi",
    description: "Plateforme de recrutement",
    image_path: "/images/emploi.png",
    deployed_url:"http://www.emploi.epizy.com",
    github_url: "https://github.com/Cherif436",
    category: ['php'],
    key_techs: ['php', 'mysql']
  },
  {
    id: 2,
    name: "Platefome developpeur web",
    description: "Recrutement de profil développeur",
    image_path: "/images/p1.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'mongo'],
    key_techs: ['react', 'node', 'mongo']
  },
  {
    id: 3,
    name: "Site web ecommerce",
    description: "Achat de vétement en ligne",
    image_path: "/images/ecommerce.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'node', 'express', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 4,
    name: "Blog",
    description: "publication périodique et régulière d'articles personnels",
    image_path: "/images/blog.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'react', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 5,
    name: "Plateforme",
    description: "Plateforme réseau social",
    image_path: "/images/socialN.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['react', 'express', 'mongo'],
    key_techs: ['react', 'node', 'mongo', 'express']
  },
  {
    id: 6,
    name: "Site ecommerce",
    description: "Achat de materiel informatique en ligne",
    image_path: "/images/econext.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'express', 'next', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  },
  {
    id: 7,
    name: "Site ecommerce en next js",
    description: "Achat de vétement en ligne",
    image_path: "/images/ecommnextjs.png",
    deployed_url:"",
    github_url: "https://github.com/Cherif436",
    category: ['node', 'express', 'next', 'mongo'],
    key_techs: ['next', 'node', 'mongo', 'express']
  }
]