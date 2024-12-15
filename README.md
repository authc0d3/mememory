# 🧠 MeMemory Game

El clásico juego "Memory" usando memes y realizado con React.

El proyecto se ha realizado aplicando buenas prácticas en diferentes niveles:

- **📂 Arquitectura de carpetas:** Se ha aplicado una estructura de carpetas acorde a la dimensión del proyecto, agrupando cada subcarpeta o archivo según la finalidad del mismo. Cada carpeta es un modulo que contiene un archivo barrel que simplifica el proceso de importar desde otros módulos.
- **💾 Gestión de estado:** Para la gestión del estado del juego se ha optado por usar React Context API junto con el hook useReducer, lo cuál nos facilita gestionar el estado y todas las etapas del juego, favoreciendo el mantenimineto y facilitando testear la lógica de negocio al tenerla separada de los componentes visuales, pero ahorrandonos el peso de libs como Redux en el bundle de una app tan sencilla.
- **✅ Código optimizado:** Se ha optado por utilizar un mapa clave-valor para gestionar las tarjetas del juego en lugar de utilizar el clásico array. Esto nos permite modificar el estado de las tarjetas mejorando el performance al evitar recorrer el array en busca de las mismas.
- **🎨 Estilos:** Para los estilos se ha utilizado el pre-procesador SASS utilizando style modules y siguiendo el enfoque "mobile first", de forma que se prorice una experiencia óptima en dispositivos móviles.
- **🔍 Lintado y formateo:** Se ha optado por utilizar ESLint con la configuración recomendada para React, pero añadiendo también algunas normas de programación funcional, como el uso de inmutabilidad a la hora de definir las propiedades de nuestros tipos e interfaces. En cuanto al formateo, se hace uso de prettier con una configuración básica.
- **🧪 Testing:** Los tests se lanzan en un navegador Chromium gracias a Playwright utilizando el runner Vitest. Esto nos permite testear la aplicación de una manera más cercana a como un usuario real la usaría.

Algunas features adicionales que he agregado al proyecto son:

- **Sistema de puntuación** con estrellas en base a la cantidad de intentos realizados
- **Animaciones y sonidos** que enriquecen la experiencia de juego
- **Soporte multi-idioma** basado en la configuración del navegador del usuario
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

Se puede consultar el análisis de coberturas en formato HTML mediante el archivo coverage/index.html que se generará en la raíz del proyecto.

### 🚀 Build para producción

```console
yarn build
```

### 🖥️ Previsualizar el build

```console
yarn preview
```

Vite levantará el server para la previsualización en: http://localhost:8080/

### 📦 Desplegar con Docker

Para desplecar una versión dockerizada solo necesitas tener instalado Docker en tu máquina, acceder mediante terminal a la raíz del proyecto y ejecutar el siguiente comando:

```console
yarn build:docker
```

Una vez haya terminado de levantar el contenedor podrás usar la aplicación en: http://localhost:8080/
