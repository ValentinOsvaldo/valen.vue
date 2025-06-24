---
title: Cómo construí este blog usando Nuxt
description: Una publicación sobre cómo creé este blog desde cero usando Nuxt 3, Tailwind CSS y Nuxt Content.
date: 2025-06-24
author: Osvaldo Valentín
slug: how-i-built-my-blog
category: desarrollo
---

Después de varios meses queriendo compartir ideas, aprendizajes y proyectos personales, por fin decidí construir mi propio blog desde cero. Como desarrollador front-end, quería algo que no solo se viera bien, sino que también fuera rápido, escalable y fácil de mantener. La elección fue clara: **Nuxt 3**.

## ¿Por qué Nuxt?

Elegí Nuxt porque me encanta trabajar con Vue, y Nuxt lleva esa experiencia al siguiente nivel. Además, Nuxt me ofrece:

- **Rendering híbrido** (SSR, SSG o ISR) según lo necesite
- **Routing automático**, sin necesidad de configuración
- Integración fluida con **Tailwind CSS** y **nuxt-content**, para escribir posts en Markdown fácilmente
- Compatibilidad total con **i18n**, ya que planeo escribir tanto en español como en inglés

## Stack tecnológico

- **Nuxt 3**  
- **Tailwind CSS**  
- **Nuxt Content** para manejar los posts en Markdown  
- **Nuxt UI** para los componentes base  
- **pnpm** como gestor de paquetes  
- Desplegado en **Vercel**

## Estructura del contenido

Estoy usando `nuxt-content` versión 3.6.0. Cada entrada está escrita en formato Markdown y organizada por idioma, por ejemplo: `blog/vue-vs-react.en.md` y `blog/vue-vs-react.es.md`. Esto facilita mantener versiones en distintos idiomas sin complicar el código.

## ¿Qué sigue?

Este es solo el comienzo. Planeo escribir sobre desarrollo front-end, mis experiencias como freelance y experimentos con nuevas tecnologías.

Gracias por leer, y si tienes curiosidad por el código fuente, puedes verlo en mi [GitHub](https://github.com/ValentinOsvaldo).
