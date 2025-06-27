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
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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