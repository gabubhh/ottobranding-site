/*
  Constantes do site. Valores de contato são PLACEHOLDER — troque pelos reais
  antes de publicar (marcados com TODO). Centralizados aqui para não repetir
  número/e-mail solto pelos componentes.
*/

export const WHATSAPP_NUMBER = '5581995299264';
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Otto Branding.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Formulário de diagnóstico/qualificação.
export const DIAGNOSTIC_URL = 'https://form.respondi.app/Bv58wGh2';

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
