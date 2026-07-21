/*
  Constantes do site. Um lugar só para tudo que muda sem mexer em layout:
  contato, navegação e os números que ainda dependem do Gabriel.
*/

export const SITE_URL = 'https://ottobranding.com';

export const WHATSAPP_NUMBER = '5581995299264';
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Otto Branding.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Formulário de diagnóstico/qualificação.
export const DIAGNOSTIC_URL = 'https://form.respondi.app/Bv58wGh2';

export const INSTAGRAM_URL = 'https://instagram.com/otto.branding';
export const BEHANCE_URL = 'https://www.behance.net/gabrielaraujodesign';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/araujoogabriel/';
export const EMAIL = 'contato@ottobranding.com';

/*
  Perfis externos para `sameAs`. Separados por entidade de propósito: o
  Instagram é da Otto, o LinkedIn é do Gabriel, e o Behance é o portfólio que
  serve às duas. Misturar tudo num array só faz o buscador tratar estúdio e
  pessoa como a mesma coisa — que é o oposto do que o schema tenta afirmar.

  Só liste perfil que existe: URL quebrada em sameAs enfraquece a entidade.
*/
export const ORG_SAME_AS: string[] = [INSTAGRAM_URL, BEHANCE_URL];
export const PERSON_SAME_AS: string[] = [LINKEDIN_URL, BEHANCE_URL];

/*
  Fatos comerciais. Ficam `null` até o Gabriel definir — e o site se adapta:
  a seção "Quanto custa" e as FAQs de preço/prazo simplesmente não renderizam
  enquanto for null. Preferimos a página sem o bloco a uma faixa inventada.
*/
export const FACTS = {
  /** ex.: 'A partir de R$ 6.000' */
  precoIdentidadeVisual: null as string | null,
  /** ex.: 'A partir de R$ 9.000' */
  precoRebranding: null as string | null,
  /** ex.: 'A partir de R$ 4.500' */
  precoEstrategia: null as string | null,
  /** ex.: 'R$ 800' */
  precoDiagnostico: null as string | null,
  /** ex.: '6 a 10 semanas' */
  prazoBranding: null as string | null,
};

// Badge de status do header — só exiba se for verdade (cria escassez real).
export const STATUS_BADGE = 'Agenda aberta';

/*
  Navegação. `#âncora` só existe na home (Header/Footer prefixam com "/" fora
  dela). Caminhos absolutos funcionam de qualquer página.

  SEMPRE com barra final: o build é em formato de diretório, então `/cases`
  responde 307 para `/cases/`. Escrever já com a barra evita um redirect a
  cada clique e bate com a canônica e o sitemap.
*/
export const NAV_LINKS = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Método', href: '#metodo' },
  { label: 'Cases', href: '/cases/' },
  { label: 'Sobre', href: '/sobre/' },
];
