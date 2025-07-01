let number,
  attempts,
  maxAttempts = 10,
  playerName;

function startGame() {
  playerName = document.getElementById("name").value.trim();
  if (!playerName) {
    alert("Masukkan nama terlebih dahulu!");
    return;
  }
  number = Math.floor(Math.random() * 99) + 1;
  attempts = 0;
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById(
    "greeting"
  ).textContent = `Halo ${playerName}, kamu punya ${maxAttempts} kesempatan.`;
  document.getElementById("message").textContent = "";
  document.getElementById("attemptsLeft").textContent = maxAttempts;
}

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
    ).textContent = `Tebakan kamu terlalu rendah, Turunkan ${playerName}`;
  } else if (guess > number) {
    document.getElementById(
      "message"
    ).textContent = `Tebakan kamu terlalu tinggi, Naikkan ${playerName}`;
  } else {
    document.getElementById(
      "message"
    ).textContent = `🎉 Selamat ${playerName}, kamu menebak dengan benar!`;
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
