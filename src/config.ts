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
// TODO: e-mail real de contato (aparece no rodapé E no schema da organização).
export const EMAIL = 'contato@ottobranding.com';

/*
  Perfis externos que entram em `sameAs` no schema. Só liste o que existe:
  URL quebrada em sameAs enfraquece a entidade em vez de reforçar.
  TODO: criar LinkedIn da empresa e Behance e adicionar aqui (seção 7 da spec).
*/
export const SAME_AS: string[] = [INSTAGRAM_URL];

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
*/
export const NAV_LINKS = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Método', href: '#metodo' },
  { label: 'Cases', href: '/cases' },
  { label: 'Sobre', href: '/sobre' },
];
