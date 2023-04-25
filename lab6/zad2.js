class Trojkat {
    constructor(wysokosc, podstawa, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa = podstawa;
      this.nazwa = nazwa;
    }
  
  
    obliczPole() {
      return 0.5 * this.podstawa * this.wysokosc;
    }
  
    porownaj(innyTrojkat) {
      if (this.obliczPole() > innyTrojkat.obliczPole()) {
        return this;
      } else {
        return innyTrojkat;
      }
    }
  }
  
  const Trojkat1 = new Trojkat(10, 20, "Trójkąt 1");
  const Trojkat2 = new Trojkat(18, 15, "Trójkąt 2");
  const Trojkat3 = new Trojkat(8, 12, "Trójkąt 3");
  

  const wyniki = document.querySelector("#wyniki");
  wyniki.innerHTML = "";
  
  
  const Trojkaty = [Trojkat1, Trojkat2, Trojkat3];
  Trojkaty.forEach((Trojkat) => {
    const pole = Trojkat.obliczPole();
    wyniki.innerHTML += `<p>Nazwa: ${Trojkat.nazwa}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch Trójkątów i wyświetlanie wyniku
  const wiekszyTrojkat = Trojkat1.porownaj(Trojkat2);
  wyniki.innerHTML += `<p>Większy Trójkąt to ${wiekszyTrojkat.nazwa} z polem ${wiekszyTrojkat.obliczPole()}</p>`;
  