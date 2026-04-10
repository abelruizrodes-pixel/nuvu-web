# NUVU - Project State & Documentation
*Última actualización: 8 de Abril de 2026*

Este documento guarda el estado actual del proyecto NUVU para poder retomarlo en cualquier momento sin perder contexto.

## 1. El Concepto y Origen
* **Inspiración:** Modelo de negocio de Matthew Gallagher ("Infraestructura mínima" y "Telehealth-in-a-box").
* **Estrategia:** Dropshipping White Label de suplementos fitness enfocado en márgenes altos y operativa completamente delegada (fabricación + fulfillment por terceros).
* **Nicho:** Fitness / Bio-Hacking premium. 
* **MVP:** 2 productos (Quemagrasas "Thermo Matrix" y Proteína "Premium Whey Isolate").

## 2. Identidad Visual de NUVU
* **Estética Escogida:** Opción 3 ("Lujo & Fashion"). Altísimo uso del espacio negativo (blanco), estética clínica-premium, semejante a la alta cosmética.
* **Colores Core:** Blanco Puro (`#FFFFFF`) y Negro Mate Profundo (`#111111`).
* **Detalle Distintivo:** Línea holográfica/plateada en los envases y en la barra de navegación web.

## 3. Arquitectura Técnica Actual (Completada)
Se ha desarrollado un Frontend a medida, ultraligero y estático (HTML5/CSS3/Vanilla JS), preparado para integrarse a futuro de forma Headless con Shopify o similar.
Directorio de trabajo: `/Users/ark/.gemini/antigravity/scratch/nuvu-web/`

### Archivos Clave:
1. `index.html`: La *Landing Page* principal. Incluye manifiesto ("Define tu nueva versión") y exposición del catálogo.
2. `styles.css`: El sistema de diseño (*Design System*). Define tipografías (Outfit), el esquema Glassmorphism y la estética de lujo (espacios masivos).
3. `product-thermo-matrix.html`: Ficha de producto detallada del quemagrasas (con acordeones de specs técnicas).
4. `product-premium-whey.html`: Ficha de producto detallada de la proteína con selector de sabor.
5. `product.css`: Estilos de maquetación split-view fijos (Sticky) para las fichas de los productos individuales.
6. `chatbot.js` y `chatbot.css`: El widget de IA, inyectado globalmente, programado para actuar como un conserje V.I.P ("NUVU Assistant").
7. `main.js`: Lógica base para navegación suavizada y pequeños efectos de UI en la web general.

## 4. Estado de los Agentes de IA Empleados
* **Imágenes de Producto:** Generadas de forma nativa por IA. Tienen estilo 3D fotorrealista. Integradas visualmente en los HTML usando las rutas locales del sistema de *artifacts* del asistente.
* **Chatbot (Simulación):** El código actual (`chatbot.js`) simula una IA latente y reacciona a keywords (precio, quemagrasas, musculo) con la identidad de "Atención V.I.P".

## 5. Próximos Pasos (Para cuando retomes el proyecto)
Cuando desees continuar, el proyecto estará listo para escalar en estas direcciones:
* **Integración de Backend / E-commerce:** Conectar los botones "Comprar Ahora" generados en el HTML con un Checkout real de Shopify Lite o Stripe Payment Links.
* **Conexión API del Chatbot:** Reemplazar el simulador de `chatbot.js` conectando directamente una clave de API de OpenAI/Anthropic (vía Edge Function) para que el bot responda de manera dinámica leyendo de una base de datos real.
* **Marketing Técnico (Pixel):** Inyección de la API de Conversiones de Meta (CAPI) para trackear las futuras visitas.

---
*Para retomar el proyecto, simplemente dile a tu Agente: "Abre el DOC_NUVU_STATE.md y continuemos con el desarrollo de la web en el punto en el que lo dejamos."*
