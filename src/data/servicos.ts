/*
  Páginas de serviço. Um termo, uma página: `branding`, `estratégia de marca` e
  `identidade visual` se sobrepõem, então cada um tem dono aqui e `/branding`
  não existe — a home ocupa "estúdio de branding".

  Motion, web design e gestão de redes ficam de fora de propósito: são serviços
  satélite, e página fina só dilui o que já está construído.

  Sobre as FAQs: a primeira frase da resposta é a resposta inteira, sozinha,
  sem ressalva. É o formato que buscador e LLM conseguem extrair — e extração
  é o que vira citação. Contexto com número, critério ou prazo vem depois.
*/

import type { Faq } from './schema';
import type { FACTS } from '../config';

export interface Servico {
  slug: string;
  /** nome curto, para navegação e cards */
  nome: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  /** 3 linhas, tensão de negócio */
  intro: string;
  /** sintomas na voz do cliente — nunca escopo */
  sintomas: string[];
  entregas: string[];
  faqs: Faq[];
  /** slugs de cases que provam este serviço */
  cases: string[];
  /** chave em FACTS que libera a seção "Quanto custa" quando preenchida */
  precoKey: keyof typeof FACTS;
}

export const servicos: Servico[] = [
  {
    slug: 'identidade-visual',
    nome: 'Identidade visual',
    seoTitle: 'Identidade visual profissional | Otto Branding',
    metaDescription:
      'Identidade visual para negócios que precisam sustentar preço. Estratégia antes de estética. Cases em beleza, turismo e serviços. Atendimento nacional.',
    h1: 'Identidade visual não é logo. É o motivo de alguém pagar mais.',
    intro:
      'A maior parte dos negócios não perde venda por falta de qualidade. Perde porque a marca não comunica o valor que o trabalho já tem, e aí o cliente decide pelo único critério que sobrou: preço. Identidade visual bem feita muda o critério da decisão.',
    sintomas: [
      'O cliente pede desconto antes de perguntar o prazo.',
      'Sua marca parece igual à do concorrente que cobra metade.',
      'Você cresceu e a marca ficou no tamanho de quando você começou.',
      'Cada peça sai de um jeito, porque não existe sistema, existe improviso.',
    ],
    entregas: [
      'Diagnóstico e posicionamento',
      'Símbolo, assinatura e variações',
      'Paleta cromática',
      'Sistema tipográfico',
      'Grafismos e sistema de ícones',
      'Aplicações e peças-piloto',
      'Manual de marca',
      'Arquivos abertos e prontos para uso',
    ],
    faqs: [
      {
        q: 'Qual a diferença entre logo e identidade visual?',
        a: [
          'Logo é um dos elementos da identidade visual, não a identidade inteira.',
          'A identidade visual é o sistema completo: símbolo e assinatura, paleta, tipografia, grafismos, regras de aplicação e os arquivos que garantem que tudo saia igual em qualquer peça.',
          'Quem compra só logo recebe um arquivo e continua improvisando a cada post. Quem compra identidade visual recebe o sistema que mantém a marca reconhecível em todos os pontos de contato, do certificado à fachada.',
        ],
      },
      {
        q: 'Vale a pena contratar um estúdio de branding ou um freelancer?',
        a: [
          'Estúdio faz sentido quando o problema é de posicionamento; freelancer, quando o problema é de execução.',
          'Se a estratégia já está definida e falta produzir a peça, um bom freelancer resolve e custa menos.',
          'Se o negócio ainda não sabe que espaço quer ocupar, se a marca precisa sustentar preço acima da média do setor, ou se o projeto envolve estratégia, verbal e visual num sistema só, o trabalho é de estúdio.',
          'Marca bonita construída sobre posicionamento errado não resolve problema comercial: por isso todo projeto da Otto começa por diagnóstico.',
        ],
      },
      {
        q: 'Como escolher um estúdio de branding?',
        a: [
          'Olhe o processo antes do portfólio.',
          'Portfólio mostra o que o estúdio sabe desenhar; processo mostra se ele sabe decidir. Pergunte como o posicionamento é definido, o que acontece antes de qualquer decisão visual e o que é entregue além dos arquivos.',
          'Peça também um case explicado do começo: qual era o problema de negócio, que caminho foi recusado e por quê. Estúdio que só sabe falar de estética resolve estética.',
        ],
      },
      {
        q: 'Minha marca precisa de identidade nova ou só de um ajuste no logo?',
        a: [
          'É ajuste quando o posicionamento continua certo e só a execução envelheceu; é identidade nova quando o negócio mudou de patamar, de público ou de preço.',
          'Um teste rápido: se a marca ainda atrai o cliente que você quer e o problema é só inconsistência de aplicação, um sistema em cima do que existe resolve.',
          'Se a marca atrai quem pechincha e afasta quem paga, o problema é de posicionamento, e mexer no logo não muda isso. Nesse caso o caminho é rebranding.',
        ],
      },
    ],
    cases: ['tatiana-brito-academy', 'astros-barbearia'],
    precoKey: 'precoIdentidadeVisual',
  },
  {
    slug: 'rebranding',
    nome: 'Rebranding',
    seoTitle: 'Rebranding e reposicionamento de marca | Otto Branding',
    metaDescription:
      'Rebranding para negócios que evoluíram e cuja marca ficou para trás. Diagnóstico, reposicionamento e reconstrução da identidade. Atendimento nacional.',
    h1: 'Quando o negócio muda de patamar e a marca não acompanha.',
    intro:
      'Todo negócio que dá certo cresce mais rápido do que a própria marca. O serviço melhora, o público muda, o preço sobe — e a identidade continua contando a história de quem você era no primeiro ano. Rebranding é o acerto dessa defasagem, começando pelo posicionamento e não pelo logo.',
    sintomas: [
      'O negócio de hoje não é o mesmo que abriu essa marca lá atrás.',
      'Você evita mandar o material antigo para um cliente novo.',
      'A marca atrai quem pechincha e afasta quem pagaria.',
      'Mudou o público, mudou o serviço, mudou o preço. Só a marca não mudou.',
    ],
    entregas: [
      'Diagnóstico da marca atual',
      'Reposicionamento e definição de categoria',
      'Arquétipos e plataforma de marca',
      'Identidade verbal e tom de voz',
      'Nova identidade visual completa',
      'Plano de transição e aplicações',
      'Manual de marca',
      'Peças para anunciar a mudança',
    ],
    faqs: [
      {
        q: 'Preciso de rebranding ou de uma marca nova?',
        a: [
          'Rebranding quando o negócio é o mesmo e a percepção ficou para trás; marca nova quando o que você vende hoje é outra coisa.',
          'O critério é a continuidade: se os clientes atuais ainda são os que você quer e a reputação construída tem valor, o caminho é reposicionar e reconstruir sobre ela.',
          'Se o negócio mudou de categoria, de público e de proposta ao mesmo tempo, carregar o nome antigo custa mais do que recomeçar.',
        ],
      },
      {
        q: 'Rebranding faz o negócio perder os clientes que já tem?',
        a: [
          'Não, quando a mudança é conduzida com plano de transição e comunicada antes de acontecer.',
          'O que faz perder cliente é a marca sumir de um dia para o outro sem explicação, ou a nova identidade não ter nenhuma ponte com a anterior.',
          'Por isso o projeto entrega também o plano de transição e as peças que anunciam a mudança: o cliente antigo precisa reconhecer que é a mesma casa, e o cliente novo precisa entender que mudou de patamar.',
        ],
      },
      {
        q: 'Quando é a hora certa de fazer um rebranding?',
        a: [
          'A hora é quando a marca passa a atrapalhar a venda que o trabalho já merecia.',
          'Os três gatilhos mais comuns são: aumento de preço que o mercado ainda não aceita, entrada em um público de maior poder aquisitivo, e fusão ou mudança de sócio que altera o que a empresa faz.',
          'Antecipar é mais barato que corrigir: rebranding feito no meio de uma crise de vendas precisa entregar resultado no prazo em que o caixa aguenta.',
        ],
      },
      {
        q: 'Rebranding é só trocar o logo?',
        a: [
          'Não. Trocar o logo é redesign; rebranding muda o que a marca defende antes de mudar como ela parece.',
          'Um rebranding mexe em posicionamento, categoria, público-alvo, tom de voz e só então em identidade visual.',
          'Se o projeto começa pelo desenho, é redesign com outro nome — e redesign não resolve marca que está sendo comparada por preço.',
        ],
      },
    ],
    cases: ['barreto-tour', 'tatiana-brito-academy'],
    precoKey: 'precoRebranding',
  },
  {
    slug: 'estrategia-de-marca',
    nome: 'Estratégia de marca',
    seoTitle: 'Estratégia e posicionamento de marca | Otto Branding',
    metaDescription:
      'Estratégia de marca: mercado, público, diferenciação e o território que a marca vai defender. A base de toda decisão visual. Otto Branding.',
    h1: 'Antes de decidir como a marca parece, decida o que ela defende.',
    intro:
      'Marca forte não é a mais criativa. É a que ocupa um espaço que nenhum concorrente consegue defender. Estratégia de marca é o trabalho de encontrar esse espaço, provar que ele é seu e transformá-lo em critério para toda decisão que vem depois — do preço à peça de anúncio.',
    sintomas: [
      'Você sabe explicar o que faz, mas não por que escolher você.',
      'Cada campanha conta uma história diferente da anterior.',
      'A equipe descreve o negócio de um jeito novo a cada conversa.',
      'Toda decisão de marca vira discussão de gosto, porque não existe critério.',
    ],
    entregas: [
      'Imersão e diagnóstico',
      'Análise de mercado e benchmarking',
      'Público e território de atuação',
      'Posicionamento e definição de categoria',
      'Arquétipos',
      'Propósito e manifesto',
      'Identidade verbal e tom de voz',
      'Plataforma de marca documentada',
    ],
    faqs: [
      {
        q: 'O que é estratégia de marca, na prática?',
        a: [
          'Estratégia de marca é o conjunto de decisões que define que espaço a marca ocupa e o que ela recusa ser.',
          'Na prática, é um documento com posicionamento, categoria, público, diferenciação, arquétipos e tom de voz — a plataforma de marca.',
          'O valor dela não está no documento, e sim no que ele resolve depois: a partir dele, escolher uma cor, um nome de produto ou um assunto de post deixa de ser questão de gosto e passa a ter critério.',
        ],
      },
      {
        q: 'Dá para fazer identidade visual sem estratégia antes?',
        a: [
          'Dá, e é exatamente por isso que tanta marca bonita continua sendo comparada por preço.',
          'Sem estratégia, o design responde à pergunta errada: fica bonito para o dono em vez de significar algo para o cliente.',
          'Na Otto a estratégia vem antes em todo projeto, mesmo quando o cliente chega pedindo só identidade visual. É a etapa que define o que a identidade precisa comunicar para o preço parar de ser o critério.',
        ],
      },
      {
        q: 'Qual a diferença entre estratégia de marca e marketing?',
        a: [
          'Estratégia de marca define o que dizer e por quê; marketing define onde, quando e para quantos dizer.',
          'A estratégia é a camada que muda pouco e sustenta o resto: posicionamento, categoria, promessa.',
          'O marketing opera em cima dela, com campanha, canal e verba. Marketing rodando sobre marca sem posicionamento gasta mais para convencer, porque precisa reexplicar o valor a cada anúncio.',
        ],
      },
      {
        q: 'Estratégia de marca serve para negócio pequeno?',
        a: [
          'Serve, e costuma pesar mais em negócio pequeno do que em empresa grande.',
          'Empresa grande compensa posicionamento fraco com verba de mídia. Negócio pequeno não tem esse amortecedor: se a marca não explica sozinha por que custa o que custa, cada venda vira negociação.',
          'A diferença é o escopo, não a existência: um negócio de um sócio precisa de um posicionamento claro, não de um calhamaço de 80 páginas.',
        ],
      },
    ],
    cases: ['astros-barbearia', 'barreto-tour'],
    precoKey: 'precoEstrategia',
  },
];

export function getServico(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
