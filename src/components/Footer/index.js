import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img class="Logo" src="/static/media/Logo.c14bf05c.png" alt="ReactFlix logo" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
          Isac Santos da Silva
        {' '}
          durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
