---
title: How I Built This Blog with Nuxt
description: A short post on how I created my personal blog using Nuxt 3, Tailwind CSS, and Nuxt Content.
date: 2025-06-24
author: Osvaldo Valentín
slug: how-i-built-my-blog
category: development
---

# How I Built This Blog with Nuxt

After months of wanting to share thoughts, learnings, and personal projects, I finally built my own blog from scratch. As a front-end developer, I wanted something clean, fast, and easy to maintain. The answer was obvious: **Nuxt 3**.

## Why Nuxt?

I chose Nuxt because I love working with Vue, and Nuxt takes that experience even further. It gave me:

- **Hybrid rendering** options (SSR, SSG, ISR)
- **File-based routing** with zero config
- Smooth integration with **Tailwind CSS** and **nuxt-content** for writing posts in Markdown
- Full support for **i18n**, since I plan to write in both English and Spanish

## Tech Stack

- **Nuxt 3**  
- **Tailwind CSS**  
- **Nuxt Content** for Markdown posts  
- **Nuxt UI** for base components  
- **pnpm** as package manager  
- Hosted on **Vercel**

## Content Structure

I'm using `nuxt-content` version 3.6.0. All my posts are Markdown files organized by language, e.g. `blog/vue-vs-react.en.md` and `blog/vue-vs-react.es.md`. This makes it super simple to manage multilingual content.

## What’s next?

This is just the beginning. I’ll be writing about front-end development, my experience as a freelance developer, and tech experiments.

Thanks for reading — and if you're curious about the code, you can check it out on my [GitHub](https://github.com/ValentinOsvaldo).
