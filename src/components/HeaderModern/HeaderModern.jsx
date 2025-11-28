import React, { useState } from 'react'
import './headerModern.css'
import { ButtonModern } from './ButtonModern'

export function HeaderModern({ brand = 'AgchDev', links = [], actions = [], variant = 'solid' }) {
  const [open, setOpen] = useState(false)
  const headerClass = `agch-header agch-header--${variant}`

  return (
    <header className={headerClass}>
      <div className="agch-header__bar">
        <div className="agch-header__brand">{brand}</div>
        <nav className={`agch-header__nav${open ? ' is-open' : ''}`}>
          <ul className="agch-header__list">
            {links.map((link) => (
              <li key={link.path ?? link.label} className="agch-header__item">
                <a className="agch-header__link" href={link.path} onClick={link.onClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {actions.length ? (
            <div className="agch-header__actions">
              {actions.map((action) => (
                <ButtonModern key={action.label} variant={action.variant} href={action.href} onClick={action.onClick}>
                  {action.label}
                </ButtonModern>
              ))}
            </div>
          ) : null}
        </nav>
        <button className="agch-header__toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          <span className="agch-header__burger" />
        </button>
      </div>
    </header>
  )
}

export default HeaderModern
