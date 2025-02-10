let nota = [7.0, 8.0, 6.0];

console.log("NOTAS DO ALUNO 🧑‍🎓\n");

let sum = 0;

for (let i = 0; i < nota.length; i++) {
  console.log(`NOTA ${i + 1}: ${nota[i]}`);
  sum += nota[i];
}

let med = sum / nota.length;

console.log("\nMÉDIA: " + med);

if (med >= 7.0) {
  console.log("✅ APROVADO!");
} else {
  console.log("❌ REPROVADO!");
}
