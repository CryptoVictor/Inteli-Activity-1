let nota = [1.0, 8.6, 6.0];

console.log("NOTAS DO ALUNO 🧑‍🎓\n");

let sum = 0;

// Notas do Aluno

for (let i = 0; i < nota.length; i++) {
  console.log(`NOTA ${i + 1}: ${nota[i]}`);
  sum += nota[i];
}

// Calculo da Média do Aluno

let med = sum / nota.length;

console.log("\n🎓 MÉDIA: " + med.toPrecision(2));

// Verificador de Aprovação do Aluno

if (med >= 7.0) {
  console.log("✅ APROVADO!");
} else {
  console.log("❌ REPROVADO!");
}

// Maior e Menor Nota do Aluno

console.log("\nMAIOR NOTA: " + AchaMaiorNota(nota));
console.log("MENOR NOTA: " + AchaMenorNota(nota));

// Funções

function AchaMaiorNota(nota) {
    let maior = -1;
    
    for (let i = 0; i < nota.length; i++) {
        if (nota[i] > maior) {
        maior = nota[i];
        }
    }
    
    return maior;
}

function AchaMenorNota(nota) {
    let menor = 11;
    
    for (let i = 0; i < nota.length; i++) {
        if (nota[i] < menor) {
        menor = nota[i];
        }
    }
    
    return menor;
}
