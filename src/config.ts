/*
  Constantes do site. Valores de contato são PLACEHOLDER — troque pelos reais
  antes de publicar (marcados com TODO). Centralizados aqui para não repetir
  número/e-mail solto pelos componentes.
*/

// TODO: número real da Otto (formato E.164, só dígitos). Placeholder abaixo.
export const WHATSAPP_NUMBER = '5500000000000';
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e quero falar sobre minha marca.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// TODO: URL real do formulário de qualificação (Typeform ou similar).
export const DIAGNOSTIC_URL = '#diagnostico';

// TODO: handle/e-mail reais.
export const INSTAGRAM_URL = 'https://instagram.com/';
export const EMAIL = 'contato@ottobranding.com';

// Badge de status do header — só exiba se for verdade (cria escassez real).
export const STATUS_BADGE = 'Agenda aberta';

export const NAV_LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Método', href: '#metodo' },
  { label: 'Cases', href: '#cases' },
  { label: 'Sobre', href: '#sobre' },
];
