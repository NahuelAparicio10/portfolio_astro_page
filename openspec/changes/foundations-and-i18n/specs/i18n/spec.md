# i18n

## ADDED Requirements

### Requirement: Componentes de UI únicos por sección

Cada sección, layout y componente de UI SHALL existir una sola vez, recibiendo el
idioma como parámetro en lugar de duplicarse por idioma.

#### Scenario: no hay componentes duplicados por idioma

- **WHEN** se inspecciona `src/components/` y `src/layouts/`
- **THEN** no existen directorios `es/` con copias de componentes
- **AND** no existen archivos con prefijo `es_` ni `ES_`

#### Scenario: paridad visual entre idiomas

- **WHEN** se comparan la misma página en `/` y en `/es/`
- **THEN** la estructura y el diseño son idénticos
- **AND** solo difieren los textos

### Requirement: Textos centralizados en diccionarios

Todo texto de interfaz SHALL residir en diccionarios por idioma, no incrustado en
los componentes.

#### Scenario: añadir un texto nuevo

- **WHEN** se añade una etiqueta de interfaz
- **THEN** se define una vez por idioma en el diccionario
- **AND** no requiere editar ningún componente duplicado

#### Scenario: traducción ausente

- **WHEN** una clave no existe en el diccionario del idioma activo
- **THEN** se recurre al idioma por defecto en lugar de renderizar vacío

### Requirement: Datos con campos traducibles

Los datos de portfolio SHALL vivir en un único archivo por dominio, con los
campos traducibles marcados por idioma.

#### Scenario: fuente única de datos

- **WHEN** se inspecciona `src/data/`
- **THEN** no existe un subdirectorio `es/`

#### Scenario: los dos idiomas no se desincronizan

- **WHEN** se añade una entrada de experiencia laboral
- **THEN** aparece en ambos idiomas
- **AND** no es posible que un idioma tenga entradas que el otro no tiene

### Requirement: La URL es la única fuente de verdad del idioma

El idioma mostrado SHALL derivarse de la URL, sin redirecciones en cliente
basadas en preferencias almacenadas.

#### Scenario: un enlace compartido respeta su idioma

- **WHEN** un visitante que antes eligió español abre una URL en inglés
- **THEN** se muestra la página en inglés
- **AND** no se produce ninguna redirección automática

#### Scenario: cambiar de idioma navega

- **WHEN** el visitante pulsa el selector de idioma
- **THEN** navega a la URL equivalente en el otro idioma
- **AND** el botón atrás vuelve a la página anterior

#### Scenario: sin parpadeo al cargar

- **WHEN** se carga cualquier página
- **THEN** no se produce ninguna redirección posterior al primer render

### Requirement: Atributo lang correcto

Cada página SHALL declarar en `<html lang>` el idioma real de su contenido.

#### Scenario: páginas en español

- **WHEN** se carga cualquier página bajo `/es/`
- **THEN** el documento declara `lang="es"`

#### Scenario: páginas en inglés

- **WHEN** se carga cualquier página fuera de `/es/`
- **THEN** el documento declara `lang="en"`

### Requirement: Navegación coherente con el idioma

Todos los enlaces internos SHALL apuntar a la versión de destino en el idioma
activo.

#### Scenario: CTAs de la home española

- **WHEN** se pulsa cualquier CTA de la home en español
- **THEN** el destino es la página equivalente en español
