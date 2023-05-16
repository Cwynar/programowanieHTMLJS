// Tablica z danymi dla symboli
const symbols = [
    { znak: "A", x: 2 },
    { znak: "B", x: 2 },
    { znak: "C", x: 3 }
  ];
  
  // Pobranie referencji do elementów HTML
  const coinsInput = document.getElementById("coins");
  const multiplierInput = document.getElementById("multiplier");
  const startButton = document.getElementById("start");
  const resultDiv = document.getElementById("result");
  
  // Dodanie nasłuchiwania na kliknięcie przycisku START
  startButton.addEventListener("click", startGame);
  
  // Funkcja obsługująca rozpoczęcie gry
  function startGame() {
    const coins = parseInt(coinsInput.value);
    const multiplier = parseInt(multiplierInput.value);
    
    if (isNaN(coins) || isNaN(multiplier)) {
      alert("Podaj poprawne wartości monet i mnożnika.");
      return;
    }
  
    let totalCoins = coins;
    let currentMultiplier = multiplier;
    let results = "";
  
    while (totalCoins > 0) {
      const randomSymbol = getRandomSymbol();
      const payout = currentMultiplier * coins;
  
      results += `Symbol: ${randomSymbol.znak}, Wygrana: ${payout} monet\n`;
  
      totalCoins -= payout;
      currentMultiplier = multiplier;
    }
  
    resultDiv.textContent = results;
  }
  
  // Funkcja losująca symbol
  function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  }
  