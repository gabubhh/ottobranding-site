/*
  JSON-LD. Duas entidades fixas (organização e Gabriel) com @id estável, para
  que todo o resto do site aponte para elas por referência em vez de repetir
  os dados. Repetição divergente é o que dissolve uma entidade aos olhos de
  buscador e de LLM.

  Recife aparece aqui de propósito: schema é lido por quem já chegou e quer
  confirmar que a Otto é real, não por quem busca. Title, H1 e meta seguem
  sem cidade (spec, seção 9).
*/

import { SITE_URL, EMAIL, WHATSAPP_NUMBER, SAME_AS } from '../config';

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#gabriel`;

export const organizationSchema = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Otto Branding',
  url: SITE_URL,
  email: EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  description:
    'Estúdio de branding, posicionamento e identidade visual. Atendimento nacional, remoto. Sediado em Recife.',
  slogan: 'Criamos marcas de Otto Patamar.',
  image: `${SITE_URL}/og/default.jpg`,
  priceRange: '$$$',
  // Sem `address`: não há atendimento presencial. `areaServed` é o campo certo.
  areaServed: [
    { '@type': 'City', name: 'Recife' },
    { '@type': 'AdministrativeArea', name: 'Pernambuco' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  founder: { '@id': PERSON_ID },
  sameAs: SAME_AS,
  knowsAbout: [
    'Branding',
    'Identidade visual',
    'Rebranding',
    'Posicionamento de marca',
    'Estratégia de marca',
    'Arquitetura de marca',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços',
    itemListElement: [
      ['Identidade visual', '/identidade-visual'],
      ['Rebranding', '/rebranding'],
      ['Estratégia de marca', '/estrategia-de-marca'],
      ['Diagnóstico de marca', '/diagnostico'],
    ].map(([name, path]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: `${SITE_URL}${path}` },
    })),
  },
};

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Gabriel Araújo',
  jobTitle: 'Diretor de arte e estrategista de marca',
  image: `${SITE_URL}/sobre/gabriel.webp`,
  worksFor: { '@id': ORG_ID },
  knowsAbout: [
    'Branding',
    'Posicionamento de marca',
    'Identidade visual',
    'Direção de arte',
  ],
  sameAs: SAME_AS,
};

/** Início > … — o último item é a página atual. */
export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Início', path: '/' }, ...trail].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export interface Faq {
  q: string;
  /**
   * Primeira frase = a resposta inteira, autossuficiente. Depois, contexto com
   * número, faixa, prazo ou critério. Nunca abrir com "depende": frase que
   * começa com ressalva não é extraível, e é extração que vira citação.
   */
  a: string[];
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') },
    })),
  };
}
