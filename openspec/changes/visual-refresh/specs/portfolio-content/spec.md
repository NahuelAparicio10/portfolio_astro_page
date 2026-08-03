# portfolio-content

## ADDED Requirements

### Requirement: Las skills reflejan el perfil real

La sección de skills SHALL describir la experiencia real en desarrollo de
videojuegos, sin contenido heredado de la plantilla.

#### Scenario: sin restos de la plantilla

- **WHEN** se inspecciona la sección de skills
- **THEN** no menciona React, Next.js, Postgres, Redis, AWS ni Terraform
      salvo que correspondan a experiencia real

#### Scenario: el stack principal está presente

- **WHEN** un visitante lee la sección de skills
- **THEN** encuentra Unity, C#, sistemas de gameplay y herramientas de editor

#### Scenario: la IA es una categoría propia

- **WHEN** se revisan las categorías de skills
- **THEN** existe una categoría dedicada a desarrollo asistido por IA
- **AND** no está diluida dentro de una categoría genérica de herramientas

### Requirement: Experiencia laboral actualizada

La línea temporal SHALL reflejar los puestos actuales con sus fechas reales.

#### Scenario: los dos puestos de Titutitech

- **WHEN** un visitante consulta la experiencia
- **THEN** ve las prácticas (nov 2025 – may 2026) y el puesto de Game Programmer
      (may 2026 – actualidad) como etapas diferenciadas

#### Scenario: paridad entre idiomas

- **WHEN** se compara la experiencia en inglés y en español
- **THEN** ambos idiomas muestran el mismo número de puestos

#### Scenario: sin descripciones de relleno

- **WHEN** se lee la descripción de cualquier puesto
- **THEN** describe responsabilidades concretas
- **AND** no contiene textos genéricos como "Currently working."

### Requirement: Confidencialidad del trabajo actual

Las descripciones del puesto actual SHALL comunicar el trabajo realizado sin
revelar información sujeta a NDA.

#### Scenario: sin identificar el producto

- **WHEN** se lee la descripción del puesto actual
- **THEN** no nombra el juego, ni personajes, ni mecánicas concretas, ni fechas
      de lanzamiento

#### Scenario: el valor sí se comunica

- **WHEN** se lee esa misma descripción
- **THEN** transmite la naturaleza del trabajo: plataforma móvil, sistemas de
      gameplay, herramientas internas y automatización

#### Scenario: aprobación previa

- **WHEN** se redacta cualquier texto sobre el empleo actual
- **THEN** Nahuel lo revisa antes de publicarse

### Requirement: Posicionamiento coherente en todo el sitio

El rol profesional SHALL presentarse de forma coherente en todas las páginas y en
ambos idiomas.

#### Scenario: el titular refleja el rol actual

- **WHEN** un visitante llega a la home
- **THEN** el titular comunica el rol de game programmer con foco en gameplay,
      herramientas e IA

#### Scenario: coherencia entre páginas

- **WHEN** se comparan home, about y metadatos
- **THEN** describen el mismo rol sin contradecirse

#### Scenario: coherencia entre idiomas

- **WHEN** se comparan las versiones inglesa y española
- **THEN** transmiten el mismo posicionamiento
