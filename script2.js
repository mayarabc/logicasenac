function soma() {
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let resultado = n1 + n2;

    document.getElementById("resultado").textContent = resultado;

    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

document.getElementById("btnsoma").addEventListener("click", soma);