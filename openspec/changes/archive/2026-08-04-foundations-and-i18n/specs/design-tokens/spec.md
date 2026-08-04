# design-tokens

## ADDED Requirements

### Requirement: Color de acento único y coherente

El sitio SHALL usar una sola familia de color de acento (azul) en ambos temas,
derivada de un único valor de origen.

#### Scenario: coherencia entre temas

- **WHEN** se comparan los tokens de acento en tema claro y oscuro
- **THEN** ambos pertenecen a la misma familia azul
- **AND** ninguno es naranja ni cian

#### Scenario: el triplete RGB coincide con el color

- **WHEN** se compone un color a partir de `--accent-rgb`
- **THEN** el resultado coincide con `--accent`

#### Scenario: transparencias válidas

- **WHEN** se declara una transparencia sobre el acento
- **THEN** produce un valor de color CSS válido
- **AND** el navegador lo aplica en lugar de descartar la regla

### Requirement: Tokens sin declaraciones duplicadas ni muertas

Los archivos de tokens SHALL estar libres de propiedades declaradas dos veces y
de reglas que el navegador descarta.

#### Scenario: sin duplicados

- **WHEN** se inspecciona cada archivo de tema
- **THEN** ninguna propiedad se declara más de una vez en el mismo selector

#### Scenario: sin reglas descartadas

- **WHEN** se cargan las hojas de estilo
- **THEN** no hay declaraciones de color inválidas

#### Scenario: comentarios veraces

- **WHEN** un comentario describe un color
- **THEN** corresponde al valor realmente declarado

### Requirement: Contraste accesible

Los pares de color de texto sobre fondo SHALL cumplir el contraste WCAG AA.

#### Scenario: acento sobre fondo oscuro

- **WHEN** se mide el contraste del acento sobre el fondo del tema oscuro
- **THEN** la ratio es de al menos 4.5:1

#### Scenario: texto de cuerpo

- **WHEN** se mide el contraste del texto principal y secundario sobre su fondo
- **THEN** la ratio es de al menos 4.5:1 en ambos temas
