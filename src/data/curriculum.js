// Version: 1.1 - Added Week 2 Content
export const curriculumData = [
    {
        id: 1,
        title: "Semana 1: O Despertar do Olhar",
        description: "Introdução à percepção visual e a importância da luz.",
        locked: false,
        thumbnail: "/assets/DanielRodrigues/Semana1.jpg",
        content: {
            video: "/assets/1_O_Despertar_da_Luz.mp4",
            audioPlaylist: [
                {
                    title: "A Revolução das Mirrorless",
                    src: "/assets/1_A_revolução_das_Mirrorless_e_sensores_CMOS.m4a"
                },
                {
                    title: "Domine Exposição e Iluminação",
                    src: "/assets/1_Domine_exposição,_zonas_e_iluminação.m4a"
                },
                {
                    title: "Gestalt e o Momento Decisivo",
                    src: "/assets/1_Gestalt_e_o_Momento_Decisivo_na_Fotografia.m4a"
                },
                {
                    title: "IA na Fotografia: Ferramenta ou Muleta?",
                    src: "/assets/1_IA_na_Fotografia_é_Ferramenta_ou_Muleta.m4a"
                },
                {
                    title: "Técnica ou Visão no Futuro?",
                    src: "/assets/1_Técnica_ou_Visão_no_Futuro_da_Fotografia (1).m4a"
                }
            ],
            pdf: "/assets/Alfabetização_do_Olhar_Curso_de_Fotografia_60.pdf",
            tips: [
                "Observe a luz da manhã na sua janela.",
                "Tente fotografar o mesmo objeto em três horários diferentes.",
                "Não use zoom, use seus pés para se aproximar."
            ],
            glossary: [
                {
                    category: "Tipos de Câmeras e Sensores",
                    items: [
                        { term: "DSLR (Digital Single-Lens Reflex)", definition: "Câmeras que utilizam um sistema de espelho interno para refletir a luz da lente para um visor óptico, permitindo que você veja exatamente o que a lente vê. São conhecidas pela robustez e longa duração da bateria." },
                        { term: "Mirrorless (Sem Espelho)", definition: "Câmeras modernas que eliminam o espelho, projetando a imagem diretamente do sensor para uma tela digital ou visor eletrônico. São mais leves, compactas e mostram uma prévia em tempo real de como a foto ficará antes de você clicar." },
                        { term: "Sensor CMOS", definition: "É o \"coração\" da maioria das câmeras e celulares atuais. Ele converte a luz em sinais elétricos com baixo consumo de energia, permitindo fotos rápidas e de alta qualidade." },
                        { term: "Sensor CCD", definition: "Tecnologia anterior ao CMOS, muito valorizada no passado pela pureza das cores, mas que consumia muita bateria e era mais lenta no processamento." }
                    ]
                },
                {
                    category: "Noções de Luz e o Triângulo de Exposição",
                    items: [
                        { term: "Exposição", definition: "É o equilíbrio total de luz que atinge o sensor da sua câmera. Uma foto bem exposta não é nem muito clara (estourada), nem muito escura (subexposta)." },
                        { term: "Abertura (Diafragma)", definition: "Controla a quantidade de luz que entra pela lente. Além da luz, ela define se o fundo da sua foto ficará muito ou pouco desfocado (profundidade de campo)." },
                        { term: "Velocidade do Obturador", definition: "Refere-se ao tempo que a câmera leva para tirar a foto. Velocidades rápidas \"congelam\" movimentos (como um neto correndo), enquanto velocidades lentas podem causar borrões artísticos." },
                        { term: "ISO", definition: "Mede a sensibilidade do sensor à luz. Em ambientes escuros, aumentamos o ISO, mas cuidado: valores muito altos podem gerar \"ruído\" ou granulação na imagem." }
                    ]
                },
                {
                    category: "Noções de Foco e Nitidez",
                    items: [
                        { term: "Foco (Focus)", definition: "É o ponto de maior nitidez na imagem, para onde você quer atrair a atenção do espectador." },
                        { term: "Auto-foco (AF) por IA", definition: "Tecnologia presente em câmeras Mirrorless e celulares que utiliza inteligência artificial para reconhecer e acompanhar automaticamente olhos e rostos, garantindo que o assunto principal esteja sempre nítido." },
                        { term: "MTF (Função de Transferência de Modulação)", definition: "Um termo técnico que usamos para medir a capacidade de uma lente de manter o contraste e a nitidez em detalhes finos. Quanto maior o valor MTF, mais \"afiada\" e clara será a imagem gerada pela lente." }
                    ]
                },
                {
                    category: "A Psicologia da Percepção (Gestalt)",
                    items: [
                        { term: "Figura-Fundo", definition: "Um princípio básico da visão humana onde o cérebro separa o objeto principal (figura) do cenário (fundo). Na fotografia, usamos luz e foco para ajudar o espectador a identificar essa diferença imediatamente." }
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        title: "Semana 2: Composição e Enquadramento",
        description: "Domine a arte de organizar elementos na imagem e o 'Momento Decisivo'.",
        locked: false,
        thumbnail: "/assets/DanielRodrigues/Semana2.jpg",
        content: {
            video: "/assets/2_Composição__O_Código_do_Olhar.mp4",
            audioPlaylist: [
                {
                    title: "O Resgate do Olhar na Fotografia 60+",
                    src: "/assets/2_O_resgate_do_olhar_na_fotografia_60+.m4a"
                },
                {
                    title: "Engenharia Visual ou Poesia do Instante",
                    src: "/assets/2_Engenharia_Visual_ou_Poesia_do_Instante.m4a"
                },
                {
                    title: "A Gestalt no Olhar dos Grandes Mestres",
                    src: "/assets/2_A_Gestalt_no_olhar_dos_grandes_mestres.m4a"
                },
                {
                    title: "Fotos Impactantes com Gestalt e Instante Decisivo",
                    src: "/assets/2_Fotos_Impactantes_com_Gestalt_e_Instante_Decisivo.m4a"
                }
            ],
            pdf: "/assets/2 - Design_and_the_Decisive_Moment_60.pdf",
            tips: [
                "Aplique a Regra dos Terços para criar equilíbrio.",
                "Procure por linhas guias que conduzam o olhar.",
                "Aguarde o 'Momento Decisivo' antes de clicar."
            ],
            glossary: [
                {
                    category: "Composição e Gestalt",
                    items: [
                        { term: "Regra dos Terços", definition: "Uma técnica que envolve dividir a imagem em nove partes iguais por duas linhas horizontais e duas verticais, posicionando os elementos mais importantes nas interseções." },
                        { term: "Momento Decisivo", definition: "Conceito popularizado por Henri Cartier-Bresson que se refere ao instante exato em que todos os elementos de uma cena se harmonizam visualmente e emocionalmente." },
                        { term: "Linhas Guia", definition: "Caminhos visuais dentro de uma fotografia, como estradas ou cercas, que direcionam o olhar do espectador para o assunto principal ou através da cena." },
                        { term: "Equilíbrio Simétrico", definition: "Ocorre quando ambos os lados de uma imagem têm peso visual igual, transmitindo uma sensação de ordem e calma." }
                    ]
                },
                {
                    category: "Técnicas de Enquadramento",
                    items: [
                        { term: "Ponto de Ouro", definition: "As quatro interseções criadas pela Regra dos Terços, onde o olho humano naturalmente foca primeiro em uma imagem." },
                        { term: "Enquadramento Natural", definition: "O uso de elementos da cena (como janelas, galhos ou arcos) para cercar o assunto principal, criando profundidade e foco." },
                        { term: "Perspectiva Forçada", definition: "Técnica que utiliza a ilusão de ótica para fazer um objeto parecer mais longe, mais perto, maior ou menor do que realmente é." }
                    ]
                }
            ]
        }
    },
    {
        id: 3,
        title: "Semana 3: Luz e Sombra",
        description: "Entendendo contraste e volume.",
        locked: false,
        thumbnail: "/assets/Fotos/Motocross/_MG_9616.jpg",
        content: {
            video: "/assets/3_Perspectiva_&_Geometria_Urbana.mp4",
            audioPlaylist: [
                {
                    title: "A Arquitetura Invisível da Fotografia",
                    src: "/assets/3_A_arquitetura_invisível_da_fotografia.m4a"
                },
                {
                    title: "A Foto Acontece na Mente, Não na Tela",
                    src: "/assets/3_A_foto_acontece_na_mente,_não_na_tela.m4a"
                },
                {
                    title: "Do Sistema de Zonas ao Momento Decisivo",
                    src: "/assets/3_Do_Sistema_de_Zonas_ao_Momento_Decisivo.m4a"
                },
                {
                    title: "Psicologia da Gestalt e o Instante Decisivo",
                    src: "/assets/3_Psicologia_da_Gestalt_e_o_Instante_Decisivo.m4a"
                }
            ],
            pdf: "/assets/3_Pintando_Com_A_Luz_60.pdf",
            tips: [
                "Observe as sombras nos diferentes horários do dia.",
                "Tente fotografar contra a luz (silhueta) para destacar formas.",
                "Use a luz lateral para realçar texturas e profundidade."
            ],
            glossary: [
                {
                    category: "O Olhar Urbano (Glossário da Semana 3)",
                    items: [
                        { term: "Ângulo Picado (Bird’s-eye view)", definition: "Tirar a foto de um ponto elevado, olhando para baixo. Tende a fazer o assunto parecer menor ou mais vulnerável." },
                        { term: "Ângulo Contrapicado (Worm’s-eye view)", definition: "Tirar a foto de um ponto baixo, olhando para cima. Dá uma sensação de poder, força ou superioridade ao que está sendo fotografado." },
                        { term: "Momento Decisivo", definition: "Conceito de Cartier-Bresson que define o instante exato em que a forma e o significado de um evento se alinham perfeitamente em uma composição." },
                        { term: "Linhas Guia (Leading Lines)", definition: "Elementos lineares na cena (como estradas, cercas ou sombras) que conduzem o olhar do espectador para dentro da imagem ou em direção ao assunto principal." },
                        { term: "Perspectiva Linear", definition: "Um tipo de ilusão de profundidade onde linhas paralelas parecem convergir à medida que se afastam do observador, como visto na Ilusão de Ponzo." },
                        { term: "Ritmo Urbano", definition: "A captura do movimento repetitivo ou cadenciado da vida na cidade, como o fluxo de pedestres, carros ou a alternância de luzes e sombras nas fachadas." },
                        { term: "Ponto de Vista (Point of View)", definition: "A posição física do fotógrafo em relação ao assunto, que determina o que será revelado ou escondido na imagem final." }
                    ]
                }
            ]
        }
    },
    {
        id: 4,
        title: "Semana 4: Cores e Emoções",
        description: "Psicologia das cores na fotografia.",
        locked: true,
        thumbnail: "/assets/Fotos/Eventos/IMG_4979.jpg",
        content: {}
    },
    {
        id: 5,
        title: "Semana 5: O Momento Decisivo",
        description: "Capturando a essência da ação.",
        locked: true,
        thumbnail: "/assets/Fotos/Motocross/_MG_9626.jpg",
        content: {}
    },
    {
        id: 6,
        title: "Semana 6: Retrato e Identidade",
        description: "Fotografando pessoas e expressões.",
        locked: true,
        thumbnail: "/assets/Fotos/Eventos/_MG_2580.jpg",
        content: {}
    },
    {
        id: 7,
        title: "Semana 7: Paisagem e Natureza",
        description: "A grandiosidade do mundo ao nosso redor.",
        locked: true,
        thumbnail: "/assets/Fotos/Motocross/_MG_9597.jpg",
        content: {}
    },
    {
        id: 8,
        title: "Semana 8: Projeto Final",
        description: "Consolidando seu portfólio.",
        locked: true,
        thumbnail: "/assets/Fotos/Motocross/IMG_4192.jpg",
        content: {}
    }
];
