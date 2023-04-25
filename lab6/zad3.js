class Trapez {
    constructor(wysokosc, podstawaa, podstawab, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawaa = podstawaa;
      this.podstawab = podstawab;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return 0.5 * ((this.podstawaa + this.podstawab) * this.wysokosc);
    }
  
    porownaj(innyTrapez) {
      if (this.obliczPole() > innyTrapez.obliczPole()) {
        return this;
      } else {
        return innyTrapez;
      }
    }
  }
  
  const Trapez1 = new Trapez(10, 20, 10, "Trapez 1");
  const Trapez2 = new Trapez(5, 15, 11, "Trapez 2");
  const Trapez3 = new Trapez(15, 12, 3, "Trapez 3");
  
  const wyniki = document.querySelector("#wyniki");
  wyniki.innerHTML = "";
  
  const Trapezy = [Trapez1, Trapez2, Trapez3];
  Trapezy.forEach((Trapez) => {
    const pole = Trapez.obliczPole();
    wyniki.innerHTML += `<p>Nazwa: ${Trapez.nazwa}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch Trapezów i wyświetlanie wyniku
  const wiekszyTrapez = Trapez1.porownaj(Trapez2);
  wyniki.innerHTML += `<p>Większy Trapez to ${wiekszyTrapez.nazwa} z polem ${wiekszyTrapez.obliczPole()}</p>`;
