import jobIconRaw from '../../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Prácticas como Desarrollador Unity",
    company: "Fundación Obicex",
    region: "Barcelona, España.",
    description:
      "Prácticas de 4 meses desarrollando una aplicación multiplataforma en Unity (web y móvil) con sistema de inicio de sesión encriptado. Implementación de mecánicas de la aplicación, componentes de interfaz y conexión con APIs de autenticación backend.",
    technologies: [
      "Unity",
      "C#",
      "Firebase/Auth",
      "Git",
      "3D",
      "UI"
    ],
  }
];

export type WorkItem = (typeof work)[number];

