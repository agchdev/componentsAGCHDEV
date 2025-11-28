import React from 'react'
import './navModern.css'

export function NavModern({ rutas = [], activePath, onNavigate }) {
  return (
    <nav className="agch-nav">
      <ul className="agch-nav-list">
        {rutas.map((ruta) => {
          const isActive = activePath === ruta.path

          const handleClick = (event) => {
            if (onNavigate) {
              event.preventDefault()
              onNavigate(ruta)
            }
          }

          return (
            <li
              key={ruta.path ?? ruta.label}
              className={`agch-nav-item${isActive ? ' agch-nav-item--active' : ''}`}
            >
              <a href={ruta.path} className="agch-nav-link" onClick={handleClick}>
                {ruta.icon ? <span className="agch-nav-icon">{ruta.icon}</span> : null}
                <span className="agch-nav-label">{ruta.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavModern
