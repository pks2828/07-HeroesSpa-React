# Proyecto de Aplicación de Héroes

Este proyecto es una aplicación de React que muestra información sobre diferentes héroes.

## Pasos seguidos hasta ahora

1. Creación del proyecto de React.

2. Instalación de las dependencias necesarias, incluyendo `react` y `react-dom`.

3. Creación del archivo `main.tsx` que sirve como punto de entrada de la aplicación.

4. Importación de los estilos globales desde `styles.css`.

5. Creación del componente `HeroesApp` que es el componente principal de la aplicación.

6. Uso de `ReactDOM.createRoot` para renderizar el componente `HeroesApp` en el elemento con id `root` del DOM.

7. Creación de la estructura de directorios para `heroes` y `auth`. La estructura de directorios es la siguiente:

8. En el directorio ``, se creó `` para manejar las acciones de autenticación y `` para proporcionar el contexto de autenticación a los componentes.

9. En el directorio `heroes`, se creó    ``    `` para manejar las acciones de héroes.

10. Configuración del enrutamiento:
    - Instalación de `react-router-dom` para manejar el enrutamiento en la aplicación.
    - Creación de `AppRouter.tsx` en el directorio `router` para definir las rutas de la aplicación.
    - En `AppRouter.tsx`, se definen las rutas para los diferentes componentes de la aplicación.
    - Uso de `BrowserRouter` para envolver la aplicación y habilitar el enrutamiento.
    - Uso de `Switch` y `Route` para definir las rutas y los componentes que se deben renderizar para cada ruta.
    - Implementamos el componente  `<AppRouter>` en `HeroesApp.tsx` para vincularlo con el enrutador.

11. Implementamos el modulo  `UI` para crear el componente  `<Navbar.tsx>`.
12. Creamos archivo de Barril en components y tambien en el modulo `ui`
13. Implementamos el componente en el  `AppRouter` 
14. En el Navbar implementamos la logica para activar o desactivar la clase "active" al hacer click en cada elemento