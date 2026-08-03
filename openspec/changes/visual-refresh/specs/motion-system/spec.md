# motion-system

## ADDED Requirements

### Requirement: Aparición de secciones al hacer scroll

Las secciones SHALL animarse al entrar en el viewport, de forma consistente en
todo el sitio.

#### Scenario: entrada de una sección

- **WHEN** una sección entra en el viewport al hacer scroll
- **THEN** aparece con una transición de opacidad y desplazamiento

#### Scenario: stagger entre elementos

- **WHEN** una sección contiene una lista de tarjetas
- **THEN** los elementos aparecen escalonados y no todos a la vez

#### Scenario: una sola vez

- **WHEN** una sección ya ha aparecido y se vuelve a hacer scroll sobre ella
- **THEN** no se reanima

### Requirement: El contenido es visible sin JavaScript

El contenido SHALL ser legible aunque el JavaScript de animación no se ejecute.

#### Scenario: JavaScript deshabilitado

- **WHEN** se carga cualquier página sin JavaScript
- **THEN** todo el contenido es visible y legible

#### Scenario: el script tarda o falla

- **WHEN** el script de animación no llega a ejecutarse
- **THEN** no queda ninguna sección invisible

### Requirement: Respeto por prefers-reduced-motion

El sitio SHALL suprimir el movimiento no esencial cuando el sistema lo indique.

#### Scenario: movimiento reducido activo

- **WHEN** el visitante tiene `prefers-reduced-motion: reduce`
- **THEN** no se ejecutan animaciones de entrada, desplazamiento ni paralaje
- **AND** el contenido sigue siendo completamente accesible

#### Scenario: vídeo del hero con movimiento reducido

- **WHEN** el visitante tiene `prefers-reduced-motion: reduce`
- **THEN** el hero muestra la imagen estática en lugar del vídeo

### Requirement: Transiciones entre páginas

La navegación interna SHALL producir una transición en lugar de un salto brusco.

#### Scenario: navegar entre páginas

- **WHEN** un visitante pulsa un enlace interno
- **THEN** la transición es suave y sin destello de página en blanco

#### Scenario: el botón atrás

- **WHEN** el visitante usa el botón atrás del navegador
- **THEN** vuelve a la página anterior con la misma calidad de transición

### Requirement: Micro-interacciones

Los elementos interactivos SHALL responder visiblemente a la interacción.

#### Scenario: hover sobre una tarjeta

- **WHEN** el puntero pasa sobre una tarjeta de proyecto
- **THEN** responde con elevación y un realce de color de acento

#### Scenario: pulsación en táctil

- **WHEN** se pulsa un elemento interactivo en un dispositivo táctil
- **THEN** ofrece respuesta visual inmediata

#### Scenario: foco por teclado

- **WHEN** se navega con el tabulador
- **THEN** el elemento enfocado muestra un indicador claramente visible

### Requirement: Rendimiento de las animaciones

Las animaciones SHALL mantenerse fluidas sin degradar la carga.

#### Scenario: propiedades animadas

- **WHEN** se inspecciona cualquier animación
- **THEN** anima únicamente `transform` y `opacity`

#### Scenario: fluidez en móvil

- **WHEN** se hace scroll por el sitio en un móvil de gama media
- **THEN** el desplazamiento se mantiene fluido y sin tirones

#### Scenario: coste del sistema de movimiento

- **WHEN** se mide el JavaScript añadido por el sistema de animación
- **THEN** se mantiene por debajo de 5 KB comprimidos

### Requirement: Peso del hero

El hero SHALL conservar el vídeo de fondo en todos los dispositivos, incluido
móvil, con un peso asumible.

#### Scenario: tamaño del vídeo

- **WHEN** se carga la home
- **THEN** el vídeo de fondo pesa menos de 1 MB

#### Scenario: el vídeo también en móvil

- **WHEN** se carga la home en un móvil
- **THEN** el vídeo de fondo se reproduce igual que en escritorio

#### Scenario: sin pantalla negra

- **WHEN** el vídeo aún no ha cargado o el sistema impide la reproducción
      automática
- **THEN** se muestra una imagen de póster en su lugar

#### Scenario: calidad tras la compresión

- **WHEN** se compara el vídeo comprimido con el original bajo el overlay del hero
- **THEN** no se aprecian artefactos de compresión

### Requirement: Experiencia móvil

La interfaz SHALL estar diseñada para uso táctil, no solo adaptada.

#### Scenario: tamaño de los objetivos táctiles

- **WHEN** se mide cualquier elemento interactivo en móvil
- **THEN** su área táctil es de al menos 44×44 px

#### Scenario: sin desbordamiento horizontal

- **WHEN** se carga cualquier página en un viewport de 320 px
- **THEN** no se produce desplazamiento horizontal

#### Scenario: menú móvil

- **WHEN** se abre el menú en móvil
- **THEN** aparece con una transición animada
- **AND** se puede cerrar con el gesto o el control esperado
