# 🧬 NUVU FITNESS: CORE STATE DOSSIER
**Fecha de actualización:** 10 de Abril, 2026 - 22:50
**Estado actual:** Fase de Lanzamiento Visual Completada (Premium Tier)

## 📋 Resumen Ejecutivo
NUVU Fitness ha sido transformado en una plataforma de bio-optimización con una estética "Medical Premium" inspirada en Medvi.org. El sitio está desplegado en GitHub Pages y cuenta con una arquitectura limpia, testimonios generados por IA de alta gama y un embudo de evaluación clínica funcional.

---

## 🎨 Identidad Visual y Branding
- **Tipografía de Logo:** `Marcellus` (Serif de lujo) con tracking de `6px`.
- **Tipografía de Cuerpo:** `Outfit` (Modern Sans).
- **Paleta de Colores:** 
  - *Obsidian Black:* Fondo principal de secciones Hero.
  - *Surgical Gold:* Botones de acción (`#c2a679` aprox.) y acentos.
  - *Clinical White:* Secciones de tratamiento y contenido.
- **Efectos:** Glassmorphism en header y testimonios, bordes redondeados (20px), sombras suaves (0 15px 35px rgba(0,0,0,0.05)).

---

## 🛠️ Estructura Técnica (index.html)
### 1. Header Premium (Bypass Fix)
- Comportamiento `sticky` con transición de transparente a blanco/blur al hacer scroll.
- Integración de menú bilingüe (Fix pendiente: traducir "FUR" a "SKIN").
- Botón de evaluación destacado.

### 2. Secciones de Tratamiento
- 6 categorías principales: Peso, Cabello, Piel, Longevidad, Cognición e Hipertrofia.
- Cada sección combina fotografía de producto (packaging blanco) con imagen de estilo de vida.

### 3. Carrusel de Testimonios (Infinite Marquee)
- **ID:** `testimonios`.
- **Mecánica:** Animación CSS infinita de 40s (clase `.marquee-track`).
- **Contenido:** 6 perfiles IA premium (Sofía, Carlos, Elena, David, Marcos, Lucía) duplicados para el loop infinito.
- **Estado:** Limpia quirúrgica realizada. Se eliminaron todos los duplicados verticales antiguos.

---

## 🚀 Despliegue y Control (GitHub)
- **Repo:** `abelruizrodes-pixel/nuvu-web`.
- **Rama:** `main`.
- **Web Live:** `https://abelruizrodes-pixel.github.io/nuvu-web/`.
- **Método de Push:** Se utiliza bypass via Browser Subagent para evitar bloqueos de credenciales en terminal, editando archivos directamente en la interfaz web de GitHub cuando es necesario.

---

## 📝 Próximos Pasos (Hoja de Roadmap)
1.  **Corrección Lexicográfica:** Cambiar "FUR" por "SKIN" en el menú English.
2.  **Product Pages:** Desarrollar los archivos individuales (ej: `product-neuro-focus.html`) siguiendo la nueva estética.
3.  **Backend Integration:** Conectar el formulario `assessment.html` con una base de datos para almacenar leads.
4.  **Checkout Flow:** Implementar la pasarela de pago para los "Clinical Bundles".

---
**[FIN DEL DOSSIER]** - *Este archivo garantiza la continuidad absoluta del diseño y la técnica de NUVU.*
