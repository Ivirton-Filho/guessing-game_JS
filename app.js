window.alert("Boas vindas! ao jogo do número secreto!");
let numeroSecreto = 19;
let chute = prompt("Digite o número entre 1 e 30");
do{
    
    if (chute == numeroSecreto) {
        window.alert(`Você acertou! O número secreto é ${numeroSecreto}`);
    } else {
        window.alert("Você errou!");
    
        if (chute > numeroSecreto) {
            window.alert("O seu chute é MAIOR que o número secreto");
        } else {
            window.alert("O seu chute é MENOR que o número secreto ");
        }
    }
    let validarLoop = 0;
    let replay = prompt("Você deseja jogar novamente? (S/N) ");
        if(replay == N) {
             validarLoop = 1;
        } else{
            continue;
        }
} while (validarLoop !== 1);