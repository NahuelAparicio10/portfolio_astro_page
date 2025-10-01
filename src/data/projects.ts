import visual_studio from '../assets/logos/ides/01-VisualStudio-logo.svg?raw';
import unity from '../assets/logos/engines/01-Unity-logo.svg?raw';


export const projects = [
		{
		title: "Souls-like Combat System (2025)",
		techStack: ["Unity", "C#", "Combat System", "AI FSM", "Scriptable Objects","Rider"],
		description: "A 3D Souls-like combat system in Unity, where I focused on building a clean, optimized, and modular player system with solid architecture. For example, you can set and customize player combos through Scriptable Objects. (Solo, 3 weeks)",
		ctaText: "Video →",
		ctaLink: "https://youtu.be/51P_9O86KOE",
		icon: unity,
		image:"/portfolio_astro_page/images/projects/combat_souls.png"
	},
	{
		title: "UDP Shooter Game (2025)",
		techStack: ["C++", "UDP", "ECS", "Sockets", "Visual Studio"],
		description: "A 2D online multiplayer shooter built in C++ with UDP sockets. Includes a client, authoritative game server, and service server for matchmaking, authentication, and ranking. (Team of 2, 2 weeks)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/UDP_Shooter_GameServer",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/shooter_udp.png"
	},
	{
		title: "TCP Parchis/Ludo Game (2025)",
		techStack: ["C++", "TCP", "ECS", "Visual Studio"],
		description: "Online multiplayer version of the classic board game Parchis, built in C++ with TCP sockets and an ECS architecture. Includes login, lobby creation, and full gameplay loop. (Team of 2, 2 weeks)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/llucferrando/AA2_TCP_Parchis",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/splash.png"
	},
	{
		title: "OpenGL - Mini Engine (2024)",
		techStack: ["C++", "C", "OpenGL", "Engine", "ECS", "3D Scene", "Lights"],
		description: "Mini engine built in C++ with OpenGL showcasing real-time lighting. Features day/night cycle, ambient light, dynamic flashlight, and procedural scene generation. (Solo, 2 weeks)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/OpenGL_MiniEngine",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/engine_spotlight.png"
	},
	{
		title: "Gerstner Waves (2024)",
		techStack: ["C#", "Custom Math", "Unity"],
		description: "Recreation of sea waves using a mesh array of points and custom math. Implemented Gerstner waves for realistic motion and developed buoyancy logic so floating objects respond naturally to the sea surface. (Solo, 1 day)",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/GerstnerWaves",
		icon: unity,
		image:"/portfolio_astro_page/images/projects/waves.png"
	},
	/*
	{
		title: "VS Console, Arkanoid (2021)",
		techStack: ["C++", "Visual Studio", "Windows"],
		description: "Arkanoid-style paddle game in C++ console with ranking system and save functionality. Features complete menu navigation, A/D controls, and persistent score tracking. University project showcasing game loops, file systems, and polished user experience.",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/VS_ConsoleARKANOID-2021",
		icon: visual_studio,
		image:"/portfolio_astro_page/images/projects/Arkanoid.png"
	},
	{
		title: "VS Console, Shooter (2021)",
		techStack: ["C++", "Visual Studio", "Windows"],
		description: "Shooting game developed in C++ for Visual Studio as a first-year university project. Players navigate a board eliminating static enemies with integrated ranking system. Built with core game loop architecture, movement mechanics, and shooting systems.",
		ctaText: "Git Hub →",
		ctaLink: "https://github.com/NahuelAparicio10/VS_ConsoleShooter-2021",
		icon: visual_studio,
		image: "/portfolio_astro_page/images/projects/ConsoleShooter.png"
	},*/
];