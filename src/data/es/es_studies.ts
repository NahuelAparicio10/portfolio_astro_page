export const studies = [
  {
    title: "Grado en Contenidos Digitales Interactivos",
    institution: "Enti UB - Universidad de Barcelona",
    description:
      "Programa completo en ingeniería de software y desarrollo de videojuegos. Experiencia práctica con Unity, Unreal Engine, Phaser, SFML y OpenGL, además de programación de bajo nivel, redes informáticas y diseño de videojuegos, entre muchas otras áreas.",
    tags: [
      "Unity",
      "Unreal",
      "C#",
      "C++",
      "OpenGL",
      "SFML",
      "UDP | TCP",
      "QA",
      "Game Design",
      "3D Tools"
    ],
  },
  {
    title: "CFGS en Animaciones 3D, Juegos y Entornos Interactivos",
    institution: "Fundación Obicex",
    description:
      "Titulación especializada que cubre todo el pipeline de desarrollo de videojuegos: desde modelado y animación 3D hasta programación de IA y experiencias inmersivas en VR/AR. Creación de entornos interactivos utilizando herramientas estándar de la industria y buenas prácticas.",
    tags: [
      "CFGS",
      "HNC",
      "C#",
      "Unity",
      "SOLID",
      "Design Patterns",
      "Adobe Package",
      "3D Tools",
      "VR & AR",
      "Rigging"
    ],
  },
];

export type StudyItem = (typeof studies)[number];

