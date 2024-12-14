# 🧠 MeMemory Game

El clásico juego "Memory" usando memes y realizado con React.

El proyecto se ha realizado aplicando buenas prácticas en diferentes niveles:

- **📂 Arquitectura de carpetas:** Se ha aplicado una estructura de carpetas acorde a la dimensión del proyecto, agrupando cada subcarpeta o archivo según la finalidad del mismo. Cada carpeta es un modulo que contiene un archivo barrel que simplifica el proceso de importar desde otros módulos.
- **💾 Gestión de estado:** Para la gestión del estado del juego se ha optado por usar el context API junto con el hook useReducer, lo cuál nos brinda la potencia que nos daría una librería como Redux, pero ahorrandonos el peso de esa lib en el bundle.
- **✅ Código optimizado:** Se ha optado por utilizar un mapa clave-valor para gestionar las tarjetas del juego en lugar de utilizar el clásico array. Esto nos permite modificar el estado de las tarjetas mejorando el performance al evitar recorrer el array en busca de las mismas.
- **🎨 Estilos:** Para los estilos se ha seguido la norma "mobile first", de forma que estos están pensados de base para que todo se vea bien en dispositivos móviles y luego se les aplican las reglas correspondientes para pantallas más grandes.
- **🔍 Lintado y formato:** Se ha optado por utilizar ESLint con la configuración recomendada para React, pero añadiendo también algunas normas como el usar inmutabilidad a la hora de definir las propiedades de nuestros tipos e interfaces. Para mantener un formato adecuado se ha utilizado prettier.
- **🧪 Testing:** Los tests se lanzan en un navegador Chromium gracias a Playwright utilizando el runner vitest. Esto nos permite testear de una manera más cercana a como lo hace un usuario real.

Algunas features adicionales que he agregado al proyecto son:

- **Sistema de puntuación** con estrellas en base a la cantidad de intentos realizados
- **Animaciones CSS** que enriquecen la experiencia de juego
- Configuración para **despliegue automatizado con Docker**

### ⬇️ Instalar dependencias

```console
yarn install
```

### 🧑🏻‍💻 Ejecutar proyecto en modo desarrollo

```console
yarn start
```

Vite levantará el server de desarrollo en: http://localhost:3000/

### 🔍 Ejecutar linter de código

```console
yarn lint
```

### 🧪 Lanzar tests

Modo headless, sin entorno gráfico:

```console
yarn test
```

Modo browser, con entorno gráfico y hot reload para desarrollo:

```console
yarn test:ui
```

Comprobar coberturas:

```console
yarn test:coverage
```

### 🖥️ Previsualizar el build

```console
yarn preview
```

Vite levantará el server para la previsualización en: http://localhost:8080/

### 🚀 Build para producción

```console
yarn build
```

### 📦 Desplegar con Docker

Para desplecar una versión dockerizada solo necesitas tener instalado Docker en tu máquina, acceder mediante terminal a la raíz del proyecto y ejecutar el siguiente comando:

```console
yarn build:docker
```

Una vez haya terminado de levantar el contenedor podrás usar la aplicación en: http://localhost:8080/
