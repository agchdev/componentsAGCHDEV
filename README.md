# agchdev

Librería de componentes React creada con Vite (modo biblioteca) que expone el componente `NavModern`.

## Instalación de dependencias de desarrollo

```bash
npm install
```

Si el registro público estuviera bloqueado en tu entorno, configura el registro de npm antes:

```bash
npm config set registry https://registry.npmjs.org
npm install
```

## Scripts disponibles

- `npm run build`: genera la salida de biblioteca en `dist/` en formatos ESM y CommonJS.

## Uso

Instala el paquete publicado:

```bash
npm i agchdev
```

Ejemplo de uso dentro de cualquier proyecto React 18:

```jsx
import { NavModern } from 'agchdev'

const rutas = [
  { path: '/', label: 'Inicio' },
  { path: '/blog', label: 'Blog' },
  { path: '/contacto', label: 'Contacto' }
]

function App() {
  return <NavModern rutas={rutas} activePath="/" />
}
```

Para navegación SPA puedes pasar `onNavigate`:

```jsx
<NavModern rutas={rutas} activePath={location.pathname} onNavigate={(ruta) => navigate(ruta.path)} />
```
