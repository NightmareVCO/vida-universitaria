import { Routes } from './centralized/routes.data';
import { StudentsGroupsImages } from './centralized/images.data';

export interface StudentGroup {
  title: string;
  description: string;
  campus: string;
  logo: string;
  faculty: string;
  career: string;
  website?: string;
  path?: string;
  socialMedia?: {
    name: string;
    link: string;
  }[];
}

export enum SocialMediaEnum {
  INSTAGRAM = 0,
  FACEBOOK = 1,
  TWITTER = 2,
  LINKEDIN = 3
}

export const studentsGroupsData: StudentGroup[] = [
 {
    title: "Comité de Estudiantes de Ingeniería en Ciencias de la Computación",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación",
    campus: "CSTI - Campus Santiago",
    logo: StudentsGroupsImages.CICC,
    faculty: "Facultad de Ingeniería y Telecomunicaciones",
    career: "Ingeniería en Ciencias de la Computación",
    path: Routes.GRUPOS_ESTUDIANTILES_CICC,
    website: "https://cicc.pucmm.edu.do/",
    socialMedia: [
      {
        name: "Instagram",
        link: "https://www.instagram/ciccpucmm"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/ciccpucmm"
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/ciccpucmm"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ciccpucmm/"
      }
    ]
 },
 //CEIIS: Comité de Estudiantes de Ingeniería Industrial y Sistemas
  {
      title: "Comité de Estudiantes de Ingeniería Industrial y Sistemas",
      description: "El Comité de Estudiantes de Ingeniería Industrial y Sistemas (CEIIS), tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería Industrial y de Sistemas.",
      campus: "CSTI - Campus Santiago",
      logo: StudentsGroupsImages.CEIIS,
      faculty: "Facultad de Ingeniería y Telecomunicaciones",
      career: "Ingeniería Industrial y de Sistemas",
      path: Routes.GRUPOS_ESTUDIANTILES_CEIIS,
      website: "https://ceiis.pucmm.edu.do/",
      socialMedia: [
        {
          name: "Instagram",
          link: "https://www.instagram/ceiispucmm"
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/ceiispucmm"
        },
        {
          name: "Twitter",
          link: "https://www.twitter.com/ceiispucmm"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ceiispucmm/"
        }
      ]
  },
  //CEIT: Comité de Estudiantes de Ingeniería en Telemática
  {
    title: "Comité de Estudiantes de Ingeniería en Telemática",
    description: "El Comité de Estudiantes de Ingeniería en Telemática (CEIT), tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Telemática.",
    campus: "CSTI - Campus Santiago",
    logo: StudentsGroupsImages.CEIT,
    faculty: "Facultad de Ingeniería y Telecomunicaciones",
    career: "Ingeniería en Telemática",
    path: Routes.GRUPOS_ESTUDIANTILES_CEIT,
    website: "https://ceit.pucmm.edu.do/",
    socialMedia: [
      {
        name: "Instagram",
        link: "https://www.instagram/ceitpucmm"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/ceitpucmm"
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/ceitpucmm"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ceitpucmm/"
      }
    ]
  },
]

export default studentsGroupsData;