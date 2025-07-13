import React from 'react';
import {
  footer,
  footerSection,
  footerTitle,
  footerLink,
} from './footer.variants';
import { Link } from '../../commons/link';

export const Footer: React.FC = () => (
  <footer className={footer()} role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Institucional */}
      <section
        className={footerSection()}
        aria-labelledby="footer-institucional"
      >
        <h2 id="footer-institucional" className={footerTitle()}>
          Institucional
        </h2>
        <nav aria-label="Links institucionais">
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/about" className={footerLink()}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/contact" className={footerLink()}>
                Contato
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={footerLink()}>
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/terms" className={footerLink()}>
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      {/* Contato */}
      <section className={footerSection()} aria-labelledby="footer-contato">
        <h2 id="footer-contato" className={footerTitle()}>
          Contato
        </h2>
        <address className="not-italic">
          <div>Rua Fictícia, 123 - Centro</div>
          <div>Cidade Exemplo, BR</div>
          <div>CEP: 00000-000</div>
          <div>Tel: (11) 99999-9999</div>
          <div>Email: contato@ecommerce.com</div>
        </address>
      </section>
      {/* Redes sociais */}
      <section className={footerSection()} aria-labelledby="footer-social">
        <h2 id="footer-social" className={footerTitle()}>
          Redes Sociais
        </h2>
        <nav aria-label="Redes sociais">
          <ul className="flex gap-3">
            <li>
              <a href="#" aria-label="Instagram" className={footerLink()}>
                <span aria-hidden="true">📸</span> Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className={footerLink()}>
                <span aria-hidden="true">📘</span> Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className={footerLink()}>
                <span aria-hidden="true">🐦</span> Twitter
              </a>
            </li>
          </ul>
        </nav>
      </section>
      {/* Segurança */}
      <section className={footerSection()} aria-labelledby="footer-seguranca">
        <h2 id="footer-seguranca" className={footerTitle()}>
          Segurança
        </h2>
        <div className="flex items-center gap-2">
          <span aria-hidden="true">🔒</span>
          <span>Compra 100% segura</span>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden="true">💳</span>
          <span>Pagamentos protegidos</span>
        </div>
      </section>
    </div>
    <div className="text-center py-4 border-t border-gray-200 text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Ecommerce. Todos os direitos reservados.
    </div>
  </footer>
);
