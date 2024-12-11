import { Routes } from './centralized/routes.data';

interface FooterData {
  logoSection: {
    description: string;
    contact: {
      phone: string;
      email: string;
    };
  };
  columns: {
  title: string;
  links: { text: string; url: string; }[];
  }[];
}

export const footerData: FooterData = {
  logoSection: {
    description: "PUCMM es la primera universidad privada dominicana, sin fines de lucro, fundada en 1962 por el Episcopado Dominicano. Ofrece programas de grado y postgrado.",
    contact: {
      phone: "(809) 580-1962",
      email: "info@pucmm.edu.do"
    }
  },
  columns: [
    {
      title: "Grupos Estudiantiles",
      links: [
        { text: "Grupos Estudiantiles", url: Routes.GRUPOS_ESTUDIANTILES },
        { text: "Asociaciones, Clubes y Comités", url: Routes.GRUPOS_ESTUDIANTILES_ASOC },
        { text: "Arte Y Cultura", url: Routes.ARTE_CULTURA },
        { text: "Deportes", url: Routes.DEPORTES },
        { text: "Calendario De Actividades", url: Routes.GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES },
      ]
    },
    {
      title: "Identidad Católica",
      links: [
        { text: "Identidad Católica", url: Routes.IDENTIDAD_CATOLICA },
        { text: "Evangelio del Día", url: Routes.IDENTIDAD_CATOLICA_EVANGELIO_DIA },
        { text: "Labor Pastoral", url: Routes.IDENTIDAD_CATOLICA_LABOR_PASTORAL },
        { text: "Santísima Trinidad", url: Routes.IDENTIDAD_CATOLICA_SANTISIMA_TRINIDAD },
        { text: "Ntra. Sra. de la Anunciación", url: Routes.IDENTIDAD_CATOLICA_NTRA_SRA_ANUNCIACION },
      ]
    },
    {
      title: "Servicios",
      links: [
        { text: "Seguridad", url: Routes.SERVICIOS_SEGURIDAD },
        { text: "Inclusión", url: Routes.SERVICIOS_INCLUSION },
        { text: "Finanzas", url: Routes.SERVICIOS_FINANZAS },
        { text: "Compromiso Universitario", url: Routes.SERVICIOS_COMPROMISO_UNIVERSITARIO },
        { text: "Beneficios Estudiantiles", url: Routes.SERVICIOS_BENEFICIOS_ESTUDIANTILES },
        { text: "Movilidad Estudiantil", url: Routes.SERVICIOS_MOVILIDAD_ESTUDIANTIL },
      ]
    }
  ]
};