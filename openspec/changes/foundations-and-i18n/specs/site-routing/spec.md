# site-routing

## ADDED Requirements

### Requirement: URLs sin prefijo de repositorio

El sitio SHALL servirse desde la raíz del dominio, sin el segmento
`/portfolio_astro_page` en ninguna URL.

#### Scenario: home en inglés

- **WHEN** un visitante abre `https://nahuelaparicio10.github.io/`
- **THEN** se muestra la home en inglés
- **AND** la URL no contiene `portfolio_astro_page`

#### Scenario: home en español

- **WHEN** un visitante abre `https://nahuelaparicio10.github.io/es/`
- **THEN** se muestra la home en español

#### Scenario: assets estáticos

- **WHEN** la página carga fuentes, imágenes, el vídeo de fondo o los PDF del CV
- **THEN** todas las peticiones responden 200
- **AND** ninguna ruta contiene `portfolio_astro_page`

### Requirement: Construcción centralizada de rutas

Todas las rutas internas SHALL construirse mediante un helper único, y no como
literales de cadena repartidos por los componentes.

#### Scenario: no quedan rutas hardcodeadas

- **WHEN** se busca `portfolio_astro_page` en `src/`
- **THEN** no hay ninguna coincidencia

#### Scenario: cambiar el base afecta a un solo punto

- **WHEN** se modifica el `base` en la configuración
- **THEN** todas las rutas internas se actualizan sin editar componentes

#### Scenario: rutas conscientes del idioma

- **WHEN** se pide la ruta de `/about` para el idioma `es`
- **THEN** el helper devuelve `/es/about`
- **AND** para el idioma `en` devuelve `/about`

### Requirement: Rutas en contextos sin acceso a TypeScript

Las rutas usadas en CSS y en scripts inline SHALL resolverse sin depender del
nombre del repositorio.

#### Scenario: fuentes en @font-face

- **WHEN** el navegador resuelve las declaraciones `@font-face` de `global.css`
- **THEN** las fuentes cargan correctamente
- **AND** las rutas no contienen el nombre del repositorio

#### Scenario: script inline del header

- **WHEN** se ejecuta el script del header
- **THEN** determina el idioma actual sin parsear un prefijo de repositorio
