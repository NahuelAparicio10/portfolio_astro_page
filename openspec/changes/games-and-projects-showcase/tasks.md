# Tareas — Escaparate de Juegos y Proyectos

> Requiere `visual-refresh` completado.

## 0. Decisiones

- [x] Clips de previsualización: Nahuel los grabará más adelante. Se deja el
      campo preparado y la rejilla funciona sin ellos
- [x] Detalle: composición cinematográfica, portada primero y vídeo después
- [x] Metadatos: se extraen del texto a campos propios del *frontmatter*
- [x] 3D: interesa. WebGL crudo con *fragment shader*, sin librería
- [x] **Shader elegido**: combinación de malla en perspectiva y partículas
      reactivas, buscando un resultado visual y masivo. Se implementan como un
      único *fragment shader*, no dos capas: dos contextos WebGL duplicarían el
      coste sin ganar nada
- [ ] **Nahuel**: tras verlo en local, decidir si el *shader* sustituye al vídeo
- [ ] **Nahuel**: revisar los textos de género y rol de las catorce entradas

## 1. Esquema de datos

- [ ] Añadir a `content.config.ts`: `genre`, `engine`, `role`, `team`,
      `duration`, `videoPreview`, todos opcionales
- [ ] Migrar las 7 entradas de `content/blog`
- [ ] Migrar las 7 entradas de `content/es`
- [ ] Limpiar las descripciones: quitar los datos entre paréntesis
- [ ] Añadir los mismos campos a `data/projects.ts`
- [ ] Verificar que el build pasa con entradas a medio migrar (campos opcionales)

## 2. Corrección de imágenes

- [ ] `Projects.astro`: añadir `object-cover` (hoy las capturas se deforman)
- [ ] `PostCard.astro`: proporción fija en la portada
- [ ] Verificar que ninguna imagen aparece estirada en ninguna de las dos rejillas
- [ ] Verificar que las tarjetas de una misma fila miden igual

## 3. Rejilla

- [ ] Composición *bento*: la entrada destacada ocupa dos columnas
- [ ] Retirar la etiqueta «★ Featured», que la composición ya sustituye
- [ ] Ficha técnica visible en la tarjeta
- [ ] Zoom sobre la imagen al pasar el puntero
- [ ] Foco que sigue al cursor, con un único listener delegado en la rejilla
- [ ] Inclinación 3D sutil
- [ ] Verificar que el título y la ficha son visibles sin interactuar
- [ ] Verificar comportamiento en táctil
- [ ] Respetar `prefers-reduced-motion`
- [ ] Aplicar el mismo tratamiento a Proyectos

## 4. Previsualización en vídeo

- [ ] Soporte del campo `videoPreview` en la tarjeta
- [ ] Reproducir en silencio y en bucle al pasar el puntero
- [ ] No descargar nada mientras no se necesite
- [ ] Verificar que una entrada sin clip no genera peticiones

## 5. Transición entre rejilla y detalle

- [ ] `transition:name` único por entrada en portada y título
- [ ] Verificar la continuidad visual al navegar
- [ ] Verificar que un navegador sin soporte navega igualmente
- [ ] Verificar que con movimiento reducido no anima

## 6. Detalle

- [ ] Portada a sangre con degradado hacia el fondo
- [ ] Título y género sobre la portada, con contraste garantizado
- [ ] Fila de ficha técnica bajo el título
- [ ] Roles diferenciados de los datos de producción
- [ ] Fachada de vídeo: miniatura más botón, iframe solo al pulsar
- [ ] Generar las miniaturas y servirlas desde el propio sitio, no desde Google
- [ ] Fachada accesible por teclado
- [ ] Navegación anterior/siguiente con miniatura
- [ ] Verificar que la navegación entre fichas respeta el idioma

## 7. Fondo generativo del hero

- [ ] Comparador de direcciones de *shader* para que Nahuel elija
- [ ] Implementar el *quad* a pantalla completa en WebGL crudo
- [ ] Escribir el *fragment shader* de la dirección elegida
- [ ] Detener el bucle cuando el hero sale de pantalla
- [ ] Detener el bucle cuando la pestaña pasa a segundo plano
- [ ] Limitar la resolución del lienzo por `devicePixelRatio`
- [ ] Reserva a póster si no hay contexto WebGL
- [ ] Respetar `prefers-reduced-motion`
- [ ] Medir el peso: objetivo por debajo de 8 KB comprimidos
- [ ] Comparar con el vídeo en local y decidir cuál se queda

## 8. Limpieza

- [ ] `BlogHero.astro`: adoptarlo como cabecera de ambas secciones o borrarlo.
      Hoy no lo importa nadie
- [ ] Extraer la cabecera inline de `blog/index.astro`
- [ ] Textos nuevos a los diccionarios de i18n, nunca incrustados

## 9. Verificación

- [ ] `npm run build` sin errores ni warnings
- [ ] Recorrer las dos rejillas y las catorce fichas en ambos idiomas
- [ ] Comprobar que no hay peticiones a dominios de Google sin pulsar reproducir
- [ ] Lighthouse en móvil y escritorio
- [ ] Probar con `prefers-reduced-motion` activado
- [ ] Probar sin JavaScript
- [ ] Navegación completa por teclado
- [ ] Revisar consumo de batería con el fondo generativo en un móvil real
- [ ] Revisión final del conjunto: retirar lo que resulte excesivo
