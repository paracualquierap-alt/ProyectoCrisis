# 📦 Simulador de Escasez de Productos

> **Proyecto Final - Programación Web I** > Una herramienta interactiva de simulación económica que analiza el impacto de la especulación y los rumores en el comportamiento del consumidor y el inventario disponible.

---

## 📋 Descripción

Este proyecto simula un fenómeno de economía conductual: cómo los **rumores de escasez** alteran la demanda del mercado de forma abrupta. 

La aplicación permite a los usuarios modelar escenarios ingresando el stock actual de un producto y estimar el impacto de las compras de pánico mediante un porcentaje de incremento. El sistema procesa los datos en tiempo real, ofreciendo un diagnóstico sobre si el mercado sufrirá un desabastecimiento o si el inventario logrará resistir la crisis.

---

## 🎯 Objetivos del Proyecto

* **Analizar el impacto conductual:** Evaluar cuantitativamente cómo los rumores modifican los hábitos de compra inmediatos.
* **Optimizar el cálculo de demanda:** Automatizar ecuaciones para proyectar el nuevo consumo inflado por la especulación.
* **Gestión de inventario crítico:** Determinar con precisión matemática el punto de quiebre del stock disponible.
* **Interactividad y accesibilidad:** Presentar datos complejos mediante una interfaz gráfica limpia, responsiva y fácil de interpretar.

---

## 🛠️ Tecnologías Utilizadas

Construido bajo el paradigma de desarrollo web nativo (Vanilla Web Development):

* **HTML5:** Estructuración semántica limpia que garantiza la legibilidad del documento y una base accesible.
* **CSS3:** Estilos avanzados con variables CSS, transiciones de estado fluidas y un diseño adaptativo (*Mobile First*).
* **JavaScript (ES6+) & DOM:** Motor lógico encargado del procesamiento de datos, manejo de eventos en tiempo real y renderizado dinámico de resultados sin recargar la página.

---

## ⚙️ Funcionalidades Principales

### 🖥️ Formulario de Entrada Inteligente
Permite registrar de manera segura las variables del escenario:
* Nombre del producto afectado.
* Demanda base o normal del mercado.
* Porcentaje estimado de aumento por rumores (compras de pánico).
* Stock físico disponible en almacén.

### 📊 Motor de Cálculos Automáticos
El script de JavaScript procesa las variables de forma instantánea para determinar:
* **Nueva Demanda:** $Demanda \times (1 + \frac{Porcentaje}{100})$
* **Diferencia de Stock:** Margen restante o déficit de unidades.
* **Estado del Inventario:** Diagnóstico categórico (Abastecido / Alerta / Desabastecido).

### 📈 Componentes Visuales Dinámicos
* **Barra de progreso reactiva:** Cambia su longitud y color en función del porcentaje de stock consumido.
* **Alertas cromáticas:** Tarjetas informativas que usan psicología del color (verde para estabilidad, rojo para desabastecimiento crítico).
* **Reloj en tiempo real:** Un componente síncrono que muestra la hora exacta del análisis mediante funciones de intervalo en JavaScript.

### 🧪 Casos de Estudio Integrados
Incluye botones con escenarios preprogramados para facilitar la evaluación rápida de la lógica del sistema:

| Escenario | Condición del Mercado | Resultado Esperado |
| :--- | :--- | :--- |
| **Caso Favorable** | Stock alto / Rumor bajo | Inventario Saludable (Suficiente) |
| **Caso Crítico** | Stock limitado / Rumor alto | Quiebre de Stock (Desabastecimiento) |

---
