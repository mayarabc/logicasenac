//Codigo do Exercicio 05//

function dizOla(){
                        alert("A Noite Estrelada é uma pintura de Vincent van Gogh de 1889.");
                        alert("A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence");
                        window.location.href = 'https://pt.wikipedia.org/wiki/A_Noite_Estrelada'
                    }
                
function dizOla2(){
                        console.log("Os Girassóis é uma série de quadros de Vincent van Gogh pintada entre 1888 e 1889.");
                        alert("Vincent van Gogh fez em Arles no Sul da França 5 grandes telas de girassóis em um vaso com 3 tons de amarelo.");
                        window.location.href = 'https://pt.wikipedia.org/wiki/Doze_Girass%C3%B3is_numa_Jarra'
                    }
                    
function dizOla3(){
                            alert("Os Autorretratos de Vincent van Gogh são um conjunto de pinturas e desenhos que retratam o pintor holandês entre 1886 e 1889.");
                            alert("Uma série de obras que retratam a evolução física e emocional do artista, revelando sua intensidade.");
                            window.location.href = 'https://pt.wikipedia.org/wiki/Autorretratos_de_Vincent_van_Gogh'
                        }
                        //final exercicio 6

    //inicio exercicio 7
    function jogo() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log(numeroSecreto);
    let palpite = parseInt(prompt("Digite seu palpite entre 1 e 10"));
        if( numeroSecreto === palpite) {
            alert("Acertou!!");
        } else {
            alert("Errou!!");
            }
        }
    //final exercicio 7
    //final exercicio 8
    function tablito() {
        let numeroSecreto = Math.floor(Math.random() * 10) + 1;
        let tentativas = 0;
        let limiteTentativas = 10;

        do {
            numeroDigitado = parseInt(prompt("Adivinhe o número secreto entre 1 e 10:"));

            if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 10) {
                alert("Por favor, insira um número válido de 1 a 10");
                continue;
            }
                tentativas++;
                if (numeroDigitado < numeroSecreto) {
                    alert("O número secreto é maior! Tente novamente");
                } else if (numeroDigitado > numeroSecreto) {
                    alert ("O número secreto é menor! Tente novamente");
                } else {
                    alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
                    break;
            }
            
            if (tentativas === limiteTentativas){
                alert(`Você atingiu o limite de tentativas! O número secreto era ${numeroSecreto}.`);
                break;
            }
        } while (numeroDigitado !== numeroSecreto);
    }
    //final exercicio 8
    // Início exercício 9
function jogo1() {
    // Corrigindo "Match.random" para "Math.random"
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;

    let inputPalpite = document.getElementById("palpite");
    let verificar = document.getElementById("btn33");
    let mensagem = document.getElementById("texto");

    let palpite = parseInt(inputPalpite.value);

    // Verificando se o palpite é correto ou não
    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns! Acertou, Mizeravi!";

        // Gerando novo número secreto após a vitória
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        console.log("Novo número secreto gerado: " + numeroSecreto);
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "Tente um número maior!";
    } else {
        mensagem.textContent = "Tente um número menor!";
    }

    // Limpa o campo de entrada e foca nele
    inputPalpite.value = "";
    inputPalpite.focus();
}

// Corrigindo o evento de clique e associando à função jogo1
document.getElementById("btn33").addEventListener("click", jogo1);