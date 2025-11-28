# agchdev

Librería de componentes React creada con Vite (modo biblioteca) que expone componentes modernos y responsivos: `NavModern`,
`ButtonModern`, `HeaderModern` y `FooterModern`.

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

## Estructura de carpetas

```
src/
  components/
    NavModern/
      NavModern.jsx
      navModern.css
    ButtonModern/
      ButtonModern.jsx
      buttonModern.css
    HeaderModern/
      HeaderModern.jsx
      headerModern.css
    FooterModern/
      FooterModern.jsx
      footerModern.css
  index.jsx
vite.config.js
```

Cada componente mantiene sus estilos en el mismo directorio para facilitar el mantenimiento y evitar colisiones de clases gracias al prefijo `agch-`.

## Uso

Instala el paquete publicado:

```bash
npm i agchdev
```

Importa y utiliza cualquier componente:

### NavModern

```jsx
import { NavModern } from 'agchdev'

const rutas = [
  { path: '/', label: 'Inicio' },
  { path: '/blog', label: 'Blog' },
  { path: '/contacto', label: 'Contacto' }
]

export default function App() {
  return <NavModern rutas={rutas} activePath="/blog" />
}
```

### ButtonModern

```jsx
import { ButtonModern } from 'agchdev'

export default function App() {
  return (
    <div className="button-grid">
      <ButtonModern label="Primario" variant="solid" />
      <ButtonModern label="Secundario" variant="outline" />
      <ButtonModern label="Fantasma" variant="ghost" />
      <ButtonModern label="Con icono" variant="solid" icon={<span>★</span>} />
    </div>
  )
}
```

### HeaderModern y FooterModern

```jsx
import { HeaderModern, FooterModern } from 'agchdev'

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/contacto', label: 'Contacto' }
]

const footerLinks = {
  recursos: [
    { label: 'Blog', href: '/blog' },
    { label: 'Guías', href: '/guias' }
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Términos', href: '/terminos' }
  ]
}

export default function App() {
  return (
    <>
      <HeaderModern
        brand={{ label: 'agchdev', href: '/' }}
        navItems={navItems}
        actions={[{ label: 'Empezar', href: '/signup' }]}
      />

      <main style={{ padding: '2rem' }}>
        <p>Contenido de tu aplicación.</p>
      </main>

      <FooterModern columns={footerLinks} brand={{ label: 'agchdev' }} />
    </>
  )
}
```

## Cómo ver tus componentes localmente

1. Instala dependencias y construye la librería:
   ```bash
   npm install
   npm run build
   ```
2. Empaqueta la librería para consumirla en otro proyecto:
   ```bash
   npm pack
   # Generará un archivo como agchdev-0.0.1.tgz
   ```
3. Crea o usa un proyecto React (por ejemplo con Vite) y agrega el paquete generado:
   ```bash
   npm create vite@latest demo -- --template react
   cd demo
   npm install ../ruta/a/agchdev/agchdev-0.0.1.tgz
   npm install react react-dom
   npm run dev
   ```
4. Importa los componentes en ese proyecto (ejemplo en `src/App.jsx`):
   ```jsx
   import { NavModern, ButtonModern, HeaderModern, FooterModern } from 'agchdev'
   ```

Con este flujo puedes probar y ver tus componentes en un entorno real sin necesidad de publicarlos todavía en npm.