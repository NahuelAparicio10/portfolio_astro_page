export const studies = [
  {
    title: "Bachelor's degree in Interactive Digital Contents",
    institution: "Enti UB - University of Barcelona",
    description:
      "Comprehensive program in software engineering and game development. Hands-on experience with Unity, Unreal Engine, Phaser, SFML, and OpenGL, as well as low-level programming, computer networks, and game design, among many other things.",
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
    title: "Higher National Certificate in 3D Animations, Games and Interactive Environments",
    institution: "Fundación Obicex",
    description:
      "Specialized certification covering the complete game development pipeline - from 3D modeling and animation to AI programming and immersive VR/AR experiences. Built interactive environments using industry-standard tools and best practices.",
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

