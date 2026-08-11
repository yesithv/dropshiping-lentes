# Proyecto Lentes de Contacto — Contexto de investigación

> Documento de trabajo interno. Recopila todos los resultados de investigación acumulados hasta la fecha para un e-commerce DTC de lentes de contacto orientado al mercado colombiano.
>
> **Última actualización:** agosto 2026
> **Estado del proyecto:** investigación / desarrollo de marca (etapa temprana)

---

## 1. Resumen ejecutivo

El proyecto busca lanzar un e-commerce directo al consumidor (DTC) de lentes de contacto para el mercado colombiano, apoyado en marca propia sobre fabricantes de valor (Interojo / Comfortvue). La tesis central combina dos palancas: (1) una estructura de precios local con márgenes amplios en la categoría, y (2) un modelo online sin la carga de costos de una red física omnicanal. El posicionamiento interno se ha trabajado bajo el concepto de "neurochipping de lentes de contacto".

Se han completado dos rondas de investigación y verificación de marca (naming + disponibilidad de dominios), el mapeo del panorama competitivo, y un benchmark inicial de pasarelas de pago. Aún no se ha seleccionado el nombre final ni se ha pasado a la fase de plan de negocio y go-to-market.

---

## 2. Oportunidad de mercado

**Ineficiencia estructural de precios (categoría de alto margen).**
El costo real de usar lentes de contacto para el consumidor es significativamente mayor que el precio de la caja: a la caja se suman soluciones, reemplazos y consumibles recurrentes. Este "costo mensual real" es un ángulo de mensaje potente para justificar recompra, suscripción y una propuesta de precio más transparente.

**Palanca de marca de valor.**
Apalancarse en fabricantes como **Interojo / Comfortvue** permite ofrecer calidad a un precio competitivo bajo marca propia, capturando margen frente a las marcas premium tradicionales (Acuvue/J&J, Alcon, Bausch & Lomb).

> **Nota de alcance:** el análisis comparativo de precios frente al mercado internacional se mantiene fuera de la presentación pública del proyecto. Ver §7 (pendientes) para el trabajo de precios que sí debe completarse a nivel local.

---

## 3. Panorama competitivo

El mercado colombiano está dominado por incumbentes omnicanal fuertes, con un único pure-player online relevante y bien financiado. La mayoría de los demás retailers corren sobre Shopify.

| Jugador | Rol | Notas |
|---|---|---|
| **GMO / EssilorLuxottica** | Incumbente omnicanal | Uno de los dos dominantes; respaldo del grupo óptico global más grande. |
| **Lafam / GrandVision** | Incumbente omnicanal | Cadena óptica con fuerte presencia física y respaldo internacional. |
| **LentesPlus** ([lentesplus.com/co](https://www.lentesplus.com/co/)) | Pure-player online líder | Bien financiado. Arquitectura headless (React SPA). |
| Otros retailers | Long tail | Mayoría sobre Shopify. |

**Lectura técnica del stack (inferencia indirecta):**
- Patrones de URL `/collections/` y `/products/` señalan **Shopify** de forma fiable.
- Dependencia de JavaScript sin renderizado en servidor (SSR) señala arquitectura **headless / SPA**.
- LentesPlus (SPA) dificulta extraer sus precios por *fetch* directo; su triangulación requiere agregadores de cupones y fuentes de terceros.

**Hueco competitivo identificado:** los incumbentes son omnicanal y de precio alto; el pure-player líder está bien posicionado pero no compite con precio agresivo bajo marca de valor. Ahí se ubica el espacio DTC del proyecto.

---

## 4. Productos de referencia

Capturas de catálogo usadas como referencia de categoría y comparación de formato de uso (quincenal / mensual). Los archivos están en `images/`.

| Producto | Marca / Fabricante | Uso por lente | Segmento |
|---|---|---|---|
| Acuvue Oasys con HydraClear Plus | Johnson & Johnson | Quincenal | Premium |
| AIR OPTIX Plus HydraGlyde | Alcon | Mensual | Premium |
| SofLens 59 | Bausch & Lomb | Mensual | Media |
| Comfortvue Plus (Aspheric, Sodium Hyaluronate) | Comfortvue / Interojo | — | Valor (marca propia potencial) |

Comfortvue es la referencia clave para la estrategia de marca propia: producto de valor con hialuronato de sodio y diseño asférico, competidor directo en prestaciones de las marcas premium a menor costo.

---

## 5. Modelo de negocio y costos

**Modelo:** directo al consumidor (DTC), online, con marca propia sobre fabricante de valor.

**Palancas de margen:**
- Compra a fabricante de valor (Interojo / Comfortvue) bajo marca propia.
- Venta online sin costos de red física omnicanal.
- Mensaje del "costo real mensual" para impulsar recompra y suscripción.

**Costos a vigilar (incluye costos ocultos):**
- Comisiones de pasarela de pago (ver benchmark abajo).
- Logística y última milla.
- Devoluciones y errores de fórmula óptica.
- Importación / aranceles según fabricante.
- Adquisición de cliente (CAC) frente al valor de vida del cliente (LTV).

**Pasarelas de pago evaluadas (benchmark inicial):**

| Pasarela | Enfoque | Estado |
|---|---|---|
| Wompi | Local (Bancolombia) | Benchmarkeada |
| ePayco | Local | Benchmarkeada |
| Bold | Local | Benchmarkeada |
| PayU | Regional LatAm | Benchmarkeada |
| Mercado Pago | Regional LatAm | Benchmarkeada |
| Stripe | Internacional | Benchmarkeada |

> Las tasas de comisión aproximadas por transacción se levantaron en la investigación pero deben **re-verificarse a la fecha actual** con cada proveedor antes de decidir. Ver §7.

---

## 6. Marca (naming)

Se completaron **dos rondas** de investigación y verificación de nombres, revisando disponibilidad de dominio en `.co` y `.com` vía resolución DNS y búsqueda de colisiones de marca (WHOIS/RDAP directo no estaba disponible en el entorno). **Aún no hay nombre final seleccionado.**

**Candidatos Tier 1 — `.co` y `.com` libres:**
vistari · oculae · neuravist · lenteclub · clublente · nitide · veoo · veda

**Candidatos Tier 2 — `.co` libre, `.com` tomado:**
klarvi · novavista · vizza · ocuvia · lentia · guino · lucido

**Descartados (con razón):**
- **neuvia** — saturación en el sector salud.
- **veralens** — colisión con marca existente.
- **claru** — conflicto con una app de salud.

**Notas de dirección creativa:** el primer lote se rechazó por poco novedoso. El segundo lote se construyó desde tres vetas: anatomía del ojo (fovea, irida), luz/claridad (lucido, nitide, halo) y español lúdico (guino, de "guiño").

---

## 7. Pendientes de investigación

- [ ] **Precios locales por SKU** — levantar precios actuales en Colombia (LentesPlus, GMO, Lafam) con capturas y links por producto y calcular el margen objetivo bajo marca propia.
- [ ] **Comisiones de pasarelas** — confirmar la tasa por transacción vigente de cada pasarela (Wompi, ePayco, Bold, PayU, Mercado Pago, Stripe), más costos fijos y de retiro.
- [ ] **Costo de producto (Comfortvue/Interojo)** — precio de compra por caja, mínimos de pedido, tiempos e Incoterms.
- [ ] **Logística y última milla** — tarifas de couriers en Colombia, cobertura y costo de devoluciones.
- [ ] **Aranceles e importación** — clasificación arancelaria de lentes de contacto y regulación sanitaria (INVIMA) aplicable.
- [ ] **Modelo financiero** — P&L unitario, CAC vs LTV, punto de equilibrio, escenarios de suscripción.
- [ ] **Selección de nombre final** — vetting profundo (marca registrada, fonética, feel) sobre el candidato elegido.
- [ ] **Go-to-market** — canales de adquisición, estrategia de contenido y plan de lanzamiento.

---

## 8. Metodología y aprendizajes

- Las queries en español que combinan la marca con términos comerciales ("precio Colombia caja", "modelo de negocio financiación inversión", marca + "ronda"/"inversión") rinden mejor que las queries genéricas en inglés para investigación del mercado colombiano.
- La detección de stack tecnológico de retailers requiere inferencia indirecta (patrones de URL, dependencia de JS).
- La arquitectura headless/SPA de LentesPlus hace inaccesibles sus precios por *fetch* directo; hay que triangular con agregadores de cupones y terceros.
- La verificación de dominios se apoyó en resolución DNS + búsqueda de colisiones de marca ante la falta de WHOIS/RDAP.

**Terminología clave en uso:** omnicanal · DTC · BNPL · headless/SPA · GMV · LTV · pasarela de pagos · base curve · fórmula óptica · Dk/t.

---

## Fuentes

- LentesPlus Colombia — https://www.lentesplus.com/co/
- Capturas de productos de referencia (catálogo) — carpeta `images/` de este repositorio.
