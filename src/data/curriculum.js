export const curriculumData = [
    {
        id: 1,
        title: "Semana 1: O Despertar do Olhar",
        description: "Introdução à percepção visual e a importância da luz.",
        locked: false,
        thumbnail: "/assets/DanielRodrigues/Semana1.jpg",
        content: {
            video: "/assets/O_Despertar_da_Luz.mp4",
            audioPlaylist: [
                {
                    title: "A Revolução das Mirrorless",
                    src: "/assets/A_revolução_das_Mirrorless_e_sensores_CMOS.m4a"
                },
                {
                    title: "Domine Exposição e Iluminação",
                    src: "/assets/Domine_exposição,_zonas_e_iluminação.m4a"
                },
                {
                    title: "Gestalt e o Momento Decisivo",
                    src: "/assets/Gestalt_e_o_Momento_Decisivo_na_Fotografia.m4a"
                },
                {
                    title: "IA na Fotografia: Ferramenta ou Muleta?",
                    src: "/assets/IA_na_Fotografia_é_Ferramenta_ou_Muleta.m4a"
                },
                {
                    title: "Técnica ou Visão no Futuro?",
                    src: "/assets/Técnica_ou_Visão_no_Futuro_da_Fotografia (1).m4a"
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
        description: "Regra dos terços, linhas guia e simetria.",
        locked: true,
        content: {}
    },
    {
        id: 3,
        title: "Semana 3: Luz e Sombra",
        description: "Entendendo contraste e volume.",
        locked: true,
        content: {}
    },
    {
        id: 4,
        title: "Semana 4: Cores e Emoções",
        description: "Psicologia das cores na fotografia.",
        locked: true,
        content: {}
    },
    {
        id: 5,
        title: "Semana 5: O Momento Decisivo",
        description: "Capturando a essência da ação.",
        locked: true,
        content: {}
    },
    {
        id: 6,
        title: "Semana 6: Retrato e Identidade",
        description: "Fotografando pessoas e expressões.",
        locked: true,
        content: {}
    },
    {
        id: 7,
        title: "Semana 7: Paisagem e Natureza",
        description: "A grandiosidade do mundo ao nosso redor.",
        locked: true,
        content: {}
    },
    {
        id: 8,
        title: "Semana 8: Projeto Final",
        description: "Consolidando seu portfólio.",
        locked: true,
        content: {}
    }
];
