const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como podemos evitar que a automoção cause desemprego em massa?",
        alternativas: [
            {
                texto: "Investir em cursos de requalificação para trabalhadores.",
                afirmacao: "Isso prepara as pessoas para novas funções que exigem habilidades diferentes, especialmente nas áreas de tecnologia e serviços humanos. "
            },
            {
                texto: "Reduzir a jornada de trabalho sem reduzir salários.",
                afirmacao: "Com menos horas de trabalho por pessoa, mais pessoas podem ser empregadas, distribuindo melhor as oportunidades de trabalho."
            }
        ]
    },
    {
        enunciado: "O que as empresas devem fazer para manter o equilíbrio entre eficiência e responsabilidade social?",
        alternativas: [
            {
                texto: "Criar planos de transição para os funcionários afetados pela automoção.",
                afirmacao: "Isso mostra compromisso com os trabalhadores e reduz o impacto negativo da substituição por robôs."
            },
            {
                texto: "Reservar parte dos lucros gerados pela automoção para programas sociais.",
                afirmacao: "Ao compartilhar os ganhos, a empresa contribui com a sociedade e fortalece sua imagem pública.."
            }
        ]
    },
    {
        enunciado: "Como os governos podem lidar com a desigualdade gerada pela automação?",
        alternativas: [
            {
                texto: "Implementar a renda básica universal (RBU).",
                afirmacao: "Garante uma renda mínima para todos, mesmo que não estejam empregados, evitando pobreza extrema."
            },
            {
                texto: "Criar impostos específicos sobre o uso de robôs em empresas.",
                afirmacao: "Esse imposto pode financiar programas sociais e educacionais, equilibrando os efeitos da automação."
            }
        ]
    },
    {
        enunciado: "Qual é a melhor forma de preparar as novas gerações para um futuro com robôs?",
        alternativas: [
            {
                texto: "Reformar o currículo escolar com foco em habilidades digitais e pensamento crítico.",
                afirmacao: "Assim, os jovens crescem preparados para funções que não serão facilmente substituídas por máquinas."
            },
            {
                texto: "Estimular o ensino de profissões criativas e sociais.",
                afirmacao: "Essas áreas, como artes, psicologia ou pedagogia, são mais difíceis de automatizar e sempre precisarão de humanos."
            }
        ]
    },
    {
        enunciado: "O que a sociedade pode fazer para lidar com as mudanças provocadas pelos robôs no mercado de trabalho? ",
        alternativas: [
            {
                texto: "Promover debates e políticas públicas sobre o futuro do trabalho.",
                afirmacao: "A conscientização da população ajuda a construir soluções mais justas e participativas."
            },
            {
                texto: "Incentivar o empreendedorismo digital e sustentável.",
                afirmacao: "Estimula a criação de novos negócios adaptados às novas tecnologias e necessidades do mundo moderno. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();