const number = Math.floor(Math.random() * 99) + 1;
let attempts = 0;
const maxAttempts = 10;

function makeGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess) || guess < 1 || guess > 99) {
    document.getElementById("message").textContent =
      "Masukkan angka valid antara 1 sampai 99!";
    return;
  }

  attempts++;
  if (guess < number) {
    document.getElementById(
      "message"
    ).textContent = `Tebakan kamu terlalu rendah, coba naikkan yaa!`;
  } else if (guess > number) {
    document.getElementById(
      "message"
    ).textContent = `Tebakan kamu terlalu tinggi, coba turunkan yaa!`;
  } else {
    document.getElementById(
      "message"
    ).textContent = `🎉 Selamat, kamu menebak dengan benar!`;
    document.getElementById("guess").disabled = true;
    return;
  }

  const remaining = maxAttempts - attempts;
  document.getElementById("attemptsLeft").textContent = remaining;

  if (remaining <= 0) {
    document.getElementById(
      "message"
    ).textContent = `😢 Kesempatan habis. Angkanya adalah ${number}.`;
    document.getElementById("guess").disabled = true;
  }
}

// Menangani tombol Enter
document.getElementById("guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    makeGuess();
  }
});
