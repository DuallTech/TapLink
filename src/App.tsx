import type { CSSProperties } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { links, primaryCta, services, socials, type LinkItem } from './links'

const isExternal = (href: string) => href.startsWith('http')

function linkProps(href: string) {
  return isExternal(href) ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }
}

function LinkCard({ item, index, className = '' }: { item: LinkItem; index: number; className?: string }) {
  const Icon = item.icon
  return (
    <a {...linkProps(item.href)} className={`card ${className}`} aria-label={item.label} title={item.label} style={{ '--i': index } as CSSProperties}>
      <span className="card__icon" aria-hidden>
        <Icon />
      </span>
      <span className="card__text">
        <span className="card__label">{item.label}</span>
        <span className="card__desc">{item.description}</span>
      </span>
      <span className="card__dot" aria-hidden />
    </a>
  )
}

export default function App() {
  const Cta = primaryCta.icon
  return (
    <div className="page">
      <div className="bg" aria-hidden>
        <div className="bg__grid" />
      </div>

      <main className="container">
        <header className="profile">
          <div className="profile__logo">
            <img src="./logo.png" alt="Logo Duall Engenharia" width={128} height={128} />
          </div>
          <h1 className="profile__name">Duall Engenharia</h1>
          <p className="profile__bio">Especializada em projetos de instalações</p>
          <ul className="tags" aria-label="Áreas de atuação">
            {services.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        </header>

        <a {...linkProps(primaryCta.href)} className="cta" style={{ '--i': 0 } as CSSProperties}>
          <span className="cta__icon" aria-hidden>
            <Cta />
          </span>
          <span className="card__text">
            <span className="cta__label">{primaryCta.label}</span>
            <span className="cta__desc">{primaryCta.description}</span>
          </span>
          <FiArrowRight className="card__arrow" aria-hidden />
        </a>

        <nav className="links" aria-label="Links">
          {links.map((item, i) => (
            <LinkCard key={item.id} item={item} index={i + 1} />
          ))}
        </nav>

        <ul className="socials" aria-label="Redes sociais">
          {socials.map((s, i) => (
            <li key={s.id}>
              <LinkCard item={s} index={links.length + i + 1} className="social" />
            </li>
          ))}
        </ul>

        <footer className="footer">© {new Date().getFullYear()} Duall Engenharia</footer>
      </main>
    </div>
  )
}
