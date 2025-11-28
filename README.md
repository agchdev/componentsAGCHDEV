# agchdev

<<<<<<< HEAD
Librería de componentes React creada con Vite (modo biblioteca) que expone componentes modernos y responsivos como `NavModern`, `ButtonModern`, `HeaderModern` y `FooterModern`.
=======
Librería de componentes React creada con Vite (modo biblioteca) que expone el componente `NavModern`.
>>>>>>> main

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

<<<<<<< HEAD
### NavModern
=======
Ejemplo de uso dentro de cualquier proyecto React 18:
>>>>>>> main

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
<<<<<<< HEAD

### ButtonModern (varios estilos)

```jsx
import { ButtonModern } from 'agchdev'

<ButtonModern variant="primary">Primario</ButtonModern>
<ButtonModern variant="outline">Borde</ButtonModern>
<ButtonModern variant="ghost">Ghost</ButtonModern>
<ButtonModern variant="gradient" icon={<span>★</span>}>
  Destacado
</ButtonModern>
```

### HeaderModern (responsive con toggle)

```jsx
import { HeaderModern } from 'agchdev'

const links = [
  { path: '#', label: 'Inicio' },
  { path: '#servicios', label: 'Servicios' },
  { path: '#contacto', label: 'Contacto' }
]

const actions = [
  { label: 'Login', variant: 'ghost', href: '#' },
  { label: 'Crear cuenta', variant: 'primary', href: '#' }
]

<HeaderModern brand="AgchDev" links={links} actions={actions} variant="glass" />
```

### FooterModern (múltiples columnas)

```jsx
import { FooterModern } from 'agchdev'

const columns = [
  {
    title: 'Producto',
    links: [
      { label: 'Funciones', href: '#' },
      { label: 'Precios', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#' },
      { label: 'Blog', href: '#' }
    ]
  }
]

const social = [
  { label: 'Twitter', href: '#', icon: '𝕏' },
  { label: 'LinkedIn', href: '#', icon: 'in' }
]

<FooterModern brand="AgchDev" columns={columns} social={social} />
```
=======
>>>>>>> main
