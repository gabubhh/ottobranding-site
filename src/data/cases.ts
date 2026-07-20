/*
  Dados dos cases reais. Copy e imagens vêm da pasta IDV/Cases, curadas e
  otimizadas para /public/cases/<slug>/ (cover.webp + NN.webp).
  A ordem do array define a ordem na home e no índice /cases.

  Divisão de trabalho entre os campos de busca:
  - `seoTitle` carrega o termo do segmento (é o que aparece no resultado);
  - `h1` carrega marca + segmento (é o que o leitor vê primeiro);
  - `metaDescription` abre com o termo e fecha com a frase da Otto;
  - `tensao` é copy, não keyword. Não sacrificar uma pela outra.
*/

export interface CaseImage {
  /** número do arquivo em /public/cases/<slug>/NN.webp */
  n: string;
  /**
   * Alt descritivo: o que aparece + segmento + cliente. Cada imagem é uma
   * linha de contexto semântico — repetir o mesmo esqueleto 15 vezes joga
   * isso fora. Nunca "imagem de", nunca empilhar keyword.
   */
  alt: string;
  /** largura na grade: 'full' (linha inteira, padrão) ou 'half' (metade, pareia) */
  col?: 'full' | 'half';
}

export interface CaseStudy {
  slug: string;
  cliente: string;
  setor: string;
  ano: number;
  /** title tag — carrega o termo de busca do segmento */
  seoTitle: string;
  /** H1 da página — marca + segmento */
  h1: string;
  metaDescription: string;
  /** ISO date da publicação no site (schema Article) */
  datePublished: string;
  /** página de serviço correspondente, para link interno case → serviço */
  servico: string;
  /** a tensão — vira o subtítulo/lead do hero */
  tensao: string;
  /** a virada da estratégia — pull-quote grande entre o texto e a galeria */
  frase: string;
  /** entregas do projeto */
  entregas: string[];
  /** parágrafos da narrativa (o primeiro entra como lead) */
  texto: string[];
  /** galeria (NN.webp em ordem) */
  imagens: CaseImage[];
}

export const cases: CaseStudy[] = [
  {
    slug: 'tatiana-brito-academy',
    cliente: 'Tatiana Brito Academy',
    setor: 'Formação em beleza',
    ano: 2025,
    seoTitle: 'Identidade visual para escola de beleza: case Tatiana Brito Academy',
    h1: 'Tatiana Brito Academy: identidade visual para formação em beleza',
    metaDescription:
      'Identidade visual e posicionamento para uma escola de formação em beleza que precisava sair da comparação por preço e carga horária. Case Otto Branding.',
    datePublished: '2026-07-15',
    servico: '/identidade-visual',
    tensao: 'A Tatiana já era referência técnica. A Academy não.',
    frase: 'A Academy não vende técnica. Vende a saída do anonimato profissional.',
    entregas: [
      'Diagnóstico e posicionamento',
      'Arquétipos (Mago e Sábio)',
      'Manifesto e propósito',
      'Identidade verbal e tom de voz',
      'Territórios de campanha',
      'Símbolo e assinatura visual',
      'Paleta e sistema tipográfico',
      'Aplicações e diagramação',
    ],
    texto: [
      'A Tatiana já era referência técnica. A Academy não. No mercado de formação para cabeleireiro, todo mundo vende a mesma coisa: técnica, certificado e promessa de faturamento. Quando todo mundo vende a mesma coisa, a aluna compara pelo que dá pra comparar, preço e carga horária.',
      'Só que a Academy não vende técnica. Vende a saída do anonimato profissional. Reconstruímos a marca inteira sobre essa passagem, de técnica para artista reconhecida, da estratégia ao último ponto de contato.',
      'Isso exigiu recusar o repertório do nicho. Nada de rosa, dourado, script ou promessa de resultado rápido, que é exatamente o que coloca uma formação séria na mesma prateleira do curso de fim de semana.',
      'A cor não é a beleza que se anuncia, é a raiz que já está lá. Nada grita, e é justamente por isso que sustenta preço. No centro, um monograma que entrelaça T e B e, no segundo olhar, vira borboleta: a transformação está na marca sem nunca precisar ser explicada.',
      'É uma marca que se comporta como quem já chegou. Do certificado que a aluna pendura na parede ao story que ela posta no mesmo dia, a leitura é a mesma, e cada aplicação devolve pra Tatiana um pouco da autoridade que ela levou anos construindo.',
    ],
    imagens: [
      { n: '01', alt: 'Assinatura horizontal da Tatiana Brito Academy, escola de formação em beleza', col: 'full' },
      { n: '02', alt: 'Monograma TB que entrelaça as iniciais e forma uma borboleta, símbolo da Tatiana Brito Academy', col: 'half' },
      { n: '03', alt: 'Paleta cromática em tons de raiz, identidade visual da Tatiana Brito Academy', col: 'half' },
      { n: '04', alt: 'Sistema tipográfico da Tatiana Brito Academy, com hierarquia de títulos e texto', col: 'full' },
      { n: '05', alt: 'Diretrizes de tom de voz e identidade verbal da Academy', col: 'half' },
      { n: '06', alt: 'Manifesto da marca diagramado no manual da Tatiana Brito Academy', col: 'half' },
      { n: '07', alt: 'Racional de construção do monograma TB, da malha geométrica ao símbolo final', col: 'half' },
      { n: '08', alt: 'Diagnóstico com os desafios do projeto de reposicionamento da Academy', col: 'half' },
      { n: '09', alt: 'Uniforme da equipe com a assinatura da Tatiana Brito Academy', col: 'full' },
      { n: '10', alt: 'Garrafas da linha de produtos com a identidade visual da Academy', col: 'half' },
      { n: '11', alt: 'Caneca com o símbolo da Tatiana Brito Academy', col: 'half' },
      { n: '12', alt: 'Marca da Academy projetada em tela de cinema durante evento de formatura', col: 'full' },
      { n: '13', alt: 'Perfis de redes sociais e sistema de ícones da Tatiana Brito Academy', col: 'half' },
      { n: '14', alt: 'Aplicação digital da identidade em peças para redes sociais da Academy', col: 'half' },
      { n: '15', alt: 'Fachada da academia com a nova identidade visual aplicada', col: 'full' },
    ],
  },
  {
    slug: 'astros-barbearia',
    cliente: 'Astros Barbearia',
    setor: 'Barbearia',
    ano: 2025,
    seoTitle: 'Identidade visual para barbearia: case Astros Barbearia',
    h1: 'Astros Barbearia: identidade visual para uma barbearia que cuida do homem',
    metaDescription:
      'Identidade visual e posicionamento para barbearia. Como a Astros deixou de ser mais uma na esquina. Case Otto Branding, estúdio de branding.',
    datePublished: '2026-07-15',
    servico: '/identidade-visual',
    tensao: 'A Astros cuidava do homem. A marca vendia corte.',
    frase: 'A Astros não vende corte. Vende o homem que sai dali diferente de como entrou.',
    entregas: [
      'Benchmarking e análise de mercado',
      'Posicionamento e categoria',
      'Manifesto',
      'Arquétipos (Cuidador e Criador)',
      'Identidade verbal e tom de voz',
      'Símbolo, assinatura e variações',
      'Paleta e sistema tipográfico',
      'Aplicações e sinalização',
    ],
    texto: [
      'A Astros já tinha o que barbearia nenhuma na cidade tinha: barbeiro que cuida do homem em vez de atender o homem. Só que o mercado é saturado e todo mundo vende a mesma coisa, corte técnico. Quando a marca não mostra a diferença, o cliente escolhe pela esquina mais perto e pelo preço mais baixo.',
      'Só que a Astros não vende corte. Vende o homem que sai dali diferente de como entrou. Essa categoria não existia na cidade e não tinha dono.',
      'Recusamos o repertório da barbearia tradicional. Poste listrado, navalha, madeira escura, bigode, “since”. Aquilo é nostalgia comprada pronta, e nostalgia coloca a Astros na mesma prateleira de qualquer barbershop de esquina, que é onde a briga é por preço.',
      'Astro é o corpo que brilha e é também quem tem brilho. O símbolo carrega as duas leituras num A que é estrela e é lâmina. Quem senta na cadeira é o astro, não a barbearia.',
      'Do letreiro que segura a rua à capa preta que o cliente veste antes do corte, a marca aparece nos dois momentos que decidem: onde o homem escolhe entrar e onde ele se entrega.',
    ],
    imagens: [
      { n: '01', alt: 'Fachada da Astros Barbearia com o letreiro da nova marca', col: 'full' },
      { n: '02', alt: 'Lata de pomada com o símbolo da Astros Barbearia', col: 'half' },
      { n: '03', alt: 'Copo térmico com a assinatura da Astros', col: 'half' },
      { n: '04', alt: 'Caneca da Astros Barbearia', col: 'half' },
      { n: '05', alt: 'Cartão de visita da Astros Barbearia, frente e verso', col: 'half' },
      { n: '06', alt: 'Paleta cromática da identidade visual da Astros Barbearia', col: 'full' },
      { n: '07', alt: 'Capa de corte e ambiente interno da barbearia com a marca aplicada', col: 'full' },
    ],
  },
  {
    slug: 'barreto-tour',
    cliente: 'Barreto Tour',
    setor: 'Viagens e turismo',
    ano: 2025,
    seoTitle: 'Identidade visual para agência de turismo: case Barreto Tour',
    h1: 'Barreto Tour: identidade visual para agência de viagens',
    metaDescription:
      'Identidade visual e posicionamento para agência de turismo. Case Otto Branding, estúdio de branding e reposicionamento de marca.',
    datePublished: '2026-07-15',
    servico: '/rebranding',
    tensao: 'Qualquer um compra passagem sozinho. A Barreto precisava dizer por que ainda existe.',
    frase: 'A Barreto não vende passagem. Vende ter alguém do seu lado quando o voo atrasa.',
    entregas: [
      'Escopo e diagnóstico visual',
      'Símbolo e conceito',
      'Assinatura visual e variações',
      'Paleta e sistema tipográfico',
      'Pattern e sistema de ícones',
      'Peças de campanha',
      'Aplicações',
    ],
    texto: [
      'A Barreto vende viagem numa época em que qualquer pessoa compra passagem sozinha, do sofá, em três minutos. Agência que não dá um motivo pra existir vira balcão de comparação de preço, e nesse jogo ela perde pro aplicativo todas as vezes. O problema não era a marca estar feia. Era a marca não responder por que alguém sairia de casa pra falar com gente.',
      'Só que a Barreto não vende passagem. Vende ter nome e telefone de alguém quando o voo atrasa, o hotel cancela ou a mala some no meio do caminho. Num mercado que acabou de ver cliente ficar na mão comprando barato pela internet, isso deixou de ser conveniência e virou seguro.',
      'O símbolo mantém o avião, mas inverte quem manda na cena: o rastro vem primeiro e o avião vai atrás dele. A rota já está traçada antes de o cliente decolar, e é isso que a Barreto faz. O azul profundo segura, o laranja move. Uma não existe sem a outra.',
      'A marca aparece nos dois momentos em que a promessa é cobrada: na peça que faz o cliente considerar sair de casa, e no objeto que ele leva na viagem, quando a agência não está mais por perto e precisa continuar respondendo por ele.',
    ],
    imagens: [
      { n: '01', alt: 'Assinatura principal da Barreto Tour, agência de viagens e turismo', col: 'full' },
      { n: '02', alt: 'Símbolo da Barreto Tour: avião conduzido pelo rastro da rota já traçada', col: 'half' },
      { n: '03', alt: 'Paleta cromática em azul profundo e laranja, identidade visual da Barreto Tour', col: 'half' },
      { n: '04', alt: 'Sistema tipográfico da Barreto Tour', col: 'full' },
      { n: '05', alt: 'Aplicação da identidade em peças digitais da Barreto Tour', col: 'half' },
      { n: '06', alt: 'Mídia da Barreto Tour aplicada em painel de aeroporto', col: 'half' },
      { n: '07', alt: 'Cartaz de campanha da Barreto Tour', col: 'full' },
      { n: '08', alt: 'Copo de papel com a marca da Barreto Tour', col: 'half' },
      { n: '09', alt: 'Caneca da Barreto Tour', col: 'half' },
      { n: '10', alt: 'Camiseta da equipe da Barreto Tour', col: 'full' },
      { n: '11', alt: 'Mochila de viagem com a marca da Barreto Tour', col: 'half' },
      { n: '12', alt: 'Mala de viagem com a identidade visual da Barreto Tour', col: 'half' },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
