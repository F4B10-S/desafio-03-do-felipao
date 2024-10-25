class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;    // Nome do Herói
        this.idade = idade;  // Idade do Herói
        this.tipo = tipo;    // Tipo do Herói
    }
    atacar() {
        let tipoAtaque; // Variável que armazena o tipo de ataque baseado no tipo do Herói

        // Verificação para definir o tipo de ataque
        if (this.tipo === "guerreiro" || this.tipo === "Guerreiro") {
            tipoAtaque = "espada";
        } else if (this.tipo === "monge"  || this.tipo === "Monge") {
            tipoAtaque = "artes marciais";
        } else if (this.tipo === "ninja"  || this.tipo === "Ninja") {
            tipoAtaque = "shuriken";
        } else if (this.tipo === "arqueiro"  || this.tipo === "Arqueiro") {
            tipoAtaque = "arco e flecha";
        } else{
            tipoAtaque = "Ataque desconhecido";
        }

        return tipoAtaque; // Retorna o tipo de ataque
    }

}

// Cria um objeto (instância) baseado na class Heroi
let player = new Heroi("Trenke", 20, "Arqueiro");

// Chama a função iniciandoJogo para iniciar o jogo
iniciandoJogo(player)

// Função para inciciar o jogo
function iniciandoJogo(player) {
    // Variável para iniciar o jogo
    let start = true;

    // Laço de repetição para iniciar o jogo apenas se a variável "Start" for verdadeira
    while (start) {
        // Variavel para armazenar o retorno do método atacar (armazena o tipo de ataque)
        const ataque = player.atacar();

        // Imprime a mensagem na tela
        console.log(`O ${player.tipo} atacou usando ${ataque}`);

        // comando prompt permite o jogador escolher continuar ou sair (Prompt funciona apenas em navegador)
        const continuar = prompt("Deseja atacar novamente? (sim/não): ");

        // Se o jogador responder não o programa encerra
        if (continuar.toLowerCase() !== "sim") {
            start = false; 
        }
    }
}
