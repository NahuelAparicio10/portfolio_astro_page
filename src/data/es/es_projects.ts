import visual_studio from '../../assets/logos/ides/01-VisualStudio-logo.svg?raw';
import unity from '../../assets/logos/engines/01-Unity-logo.svg?raw';


export const projects = [
		{
		title: "Sistema de Combate Souls-like (2025)",
		techStack: ["Unity", "C#", "Combat System", "AI FSM", "Scriptable Objects","Rider"],
		description: "Sistema de combate 3D estilo Souls en Unity, centrado en una arquitectura limpia, optimizada y modular para el jugador. Por ejemplo, se pueden definir y personalizar combos mediante Scriptable Objects. (Individual, 3 semanas)",
		ctaText: "Video →",
		ctaLink: "https://youtu.be/51P_9O86KOE",
		icon: unity,
		image:"/portfolio_astro_page/images/projects/combat_souls.png"
	},
	{
		title: "Shooter UDP (2025)",
		techStack: ["C++", "UDP", "ECS", "Sockets", "Visual Studio"],
		description: "Shooter multijugador online 2D desarrollado en C++ con sockets UDP. Incluye cliente, servidor de juego autoritativo y servidor de servicios para matchmaking, autenticación y ranking. (Equipo de 2, 2 semanas)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/UDP_Shooter_GameServer",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/shooter_udp.png"
	},
	{
		title: "Parchís TCP (2025)",
		techStack: ["C++", "TCP", "ECS", "Visual Studio"],
		description: "Versión multijugador online del clásico Parchís, desarrollada en C++ con sockets TCP y arquitectura ECS. Incluye login, creación de salas y ciclo de juego completo. (Equipo de 2, 2 semanas)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/llucferrando/AA2_TCP_Parchis",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/splash.png"
	},
	{
		title: "OpenGL - Mini Motor (2024)",
		techStack: ["C++", "C", "OpenGL", "Engine", "ECS", "3D Scene", "Lights"],
		description: "Mini motor desarrollado en C++ con OpenGL mostrando iluminación en tiempo real. Incluye ciclo día/noche, luz ambiental, linterna dinámica y generación procedural de escenas. (Individual, 2 semanas)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/OpenGL_MiniEngine",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/engine_spotlight.png"
	},
	{
		title: "Gerstner Waves (2024)",
		techStack: ["C#", "Custom Math", "Unity"],
		description: "Recreación de olas marinas usando una malla de puntos y matemáticas personalizadas. Implementación de olas de Gerstner para un movimiento realista y lógica de flotación para que los objetos respondan naturalmente a la superficie. (Individual, 1 día)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/GerstnerWaves",
		icon: unity,
		image:"/portfolio_astro_page/images/projects/waves.png"
	},

];