import React from 'react'
import './footerModern.css'

export function FooterModern({ brand, columns = [], social = [], compact = false }) {
  return (
    <footer className={`agch-footer${compact ? ' agch-footer--compact' : ''}`}>
      <div className="agch-footer__inner">
        {brand ? <div className="agch-footer__brand">{brand}</div> : null}
        <div className="agch-footer__columns">
          {columns.map((column) => (
            <div key={column.title} className="agch-footer__column">
              <h3 className="agch-footer__title">{column.title}</h3>
              <ul className="agch-footer__list">
                {column.links.map((link) => (
                  <li key={link.label} className="agch-footer__item">
                    <a className="agch-footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {social.length ? (
          <div className="agch-footer__social">
            {social.map((item) => (
              <a key={item.label} className="agch-footer__social-link" href={item.href} target="_blank" rel="noreferrer noopener">
                {item.icon ? <span className="agch-footer__icon">{item.icon}</span> : null}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="agch-footer__bottom">© {new Date().getFullYear()} — Todos los derechos reservados.</div>
    </footer>
  )
}

export default FooterModern
