import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Unity Developer Intership",
    company: "Fundación Obicex",
    region: "Barcelona, Spain.",
    description:
      "4-month internship developing a cross-platform Unity application (web & mobile) with cryptographic login system. Implemented gameplay features, UI components, and integrated backend authentication APIs.",
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

