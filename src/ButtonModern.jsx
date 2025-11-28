import React from 'react'
import './buttonModern.css'

const variantClass = (variant) => {
  const allowed = ['primary', 'outline', 'ghost', 'gradient']
  return allowed.includes(variant) ? variant : 'primary'
}

export function ButtonModern({ children, variant = 'primary', icon, fullWidth = false, href, onClick, target }) {
  const className = `agch-btn agch-btn--${variantClass(variant)}${fullWidth ? ' agch-btn--full' : ''}`
  const content = (
    <>
      {icon ? <span className="agch-btn__icon">{icon}</span> : null}
      <span className="agch-btn__label">{children}</span>
    </>
  )

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} target={target} rel={target === '_blank' ? 'noreferrer noopener' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}

export default ButtonModern
