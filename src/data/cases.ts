/*
  Dados dos cases reais. Copy e imagens vêm da pasta IDV/Cases, curadas e
  otimizadas para /public/cases/<slug>/ (cover.{avif,webp} + NN.webp).
  A ordem do array define a ordem no carrossel da home.
*/

export interface CaseImage {
  /** número do arquivo em /public/cases/<slug>/NN.webp */
  n: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  cliente: string;
  setor: string;
  ano: number;
  /** a tensão — vira o subtítulo/lead do hero */
  tensao: string;
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
    tensao: 'A Tatiana já era referência técnica. A Academy não.',
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
      { n: '01', alt: 'Assinatura horizontal' },
      { n: '02', alt: 'Símbolo — monograma TB' },
      { n: '03', alt: 'Paleta cromática' },
      { n: '04', alt: 'Sistema tipográfico' },
      { n: '05', alt: 'Perfis e ícones sociais' },
      { n: '06', alt: 'Aplicação digital' },
    ],
  },
  {
    slug: 'astros-barbearia',
    cliente: 'Astros Barbearia',
    setor: 'Barbearia',
    ano: 2025,
    tensao: 'A Astros cuidava do homem. A marca vendia corte.',
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
      { n: '01', alt: 'Fachada da Astros Barbearia' },
      { n: '02', alt: 'Lata de pomada' },
      { n: '03', alt: 'Copo térmico' },
      { n: '04', alt: 'Caneca da marca' },
      { n: '05', alt: 'Cartão de visita' },
      { n: '06', alt: 'Paleta cromática' },
      { n: '07', alt: 'Ambiente da barbearia' },
    ],
  },
  {
    slug: 'barreto-tour',
    cliente: 'Barreto Tour',
    setor: 'Viagens e turismo',
    ano: 2025,
    tensao: 'Qualquer um compra passagem sozinho. A Barreto precisava dizer por que ainda existe.',
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
      { n: '01', alt: 'Assinatura da Barreto Tour' },
      { n: '02', alt: 'Símbolo bt com avião e rastro' },
      { n: '03', alt: 'Paleta cromática' },
      { n: '04', alt: 'Sistema tipográfico' },
      { n: '05', alt: 'Aplicação digital' },
      { n: '06', alt: 'Mídia em aeroporto' },
      { n: '07', alt: 'Cartaz de campanha' },
      { n: '08', alt: 'Copo de papel' },
      { n: '09', alt: 'Caneca da marca' },
      { n: '10', alt: 'Camiseta' },
      { n: '11', alt: 'Mochila de viagem' },
      { n: '12', alt: 'Mala de viagem' },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
