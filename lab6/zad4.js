class Prostokat {
    constructor(wysokosc, szerokosc, nazwa) {
      this.wysokosc = wysokosc;
      this.szerokosc = szerokosc;
      this.nazwa = nazwa;
    }
  
    obliczObwod() {
      return 2 * (this.wysokosc + this.szerokosc);
    }
  
    obliczPole() {
      return this.wysokosc * this.szerokosc;
    }
  
    porownaj(innyProstokat) {
      if (this.obliczPole() > innyProstokat.obliczPole()) {
        return this;
      } else {
        return innyProstokat;
      }
    }
  }
  
  // tworzenie obiektów klasy Prostokąt
  const prostokat1 = new Prostokat(10, 20, "Prostokąt 1");
  const prostokat2 = new Prostokat(5, 15, "Prostokąt 2");
  const prostokat3 = new Prostokat(8, 12, "Prostokąt 3");
  
  // wyświetlanie wyników w pliku HTML
  const wynikip = document.querySelector("#wyniki");
  wynikip.innerHTML = "";
  
  // obliczanie i wyświetlanie obwodu i pola dla każdego prostokąta
  const prostokaty = [prostokat1, prostokat2, prostokat3];
  prostokaty.forEach((prostokat) => {
    const obwod = prostokat.obliczObwod();
    const pole = prostokat.obliczPole();
    wynikip.innerHTML += `<p>Nazwa: ${prostokat.nazwa}, Obwód: ${obwod}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch prostokątów i wyświetlanie wyniku
  const wiekszyProstokat = prostokat1.porownaj(prostokat2);
  wynikip.innerHTML += `<p>Większy prostokąt to ${wiekszyProstokat.nazwa} z polem ${wiekszyProstokat.obliczPole()}</p>`;

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
  

  const wynikit = document.querySelector("#wyniki");
  wynikit.innerHTML = "";
  
  
  const Trojkaty = [Trojkat1, Trojkat2, Trojkat3];
  Trojkaty.forEach((Trojkat) => {
    const pole = Trojkat.obliczPole();
    wynikit.innerHTML += `<p>Nazwa: ${Trojkat.nazwa}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch Trójkątów i wyświetlanie wyniku
  const wiekszyTrojkat = Trojkat1.porownaj(Trojkat2);
  wynikit.innerHTML += `<p>Większy Trójkąt to ${wiekszyTrojkat.nazwa} z polem ${wiekszyTrojkat.obliczPole()}</p>`;
  
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
  const Trapez3 = new Trapez(15, 10, 5, "Trapez 3");
  
  const wynikiz = document.querySelector("#wyniki");
  wynikiz.innerHTML = "";
  
  const Trapezy = [Trapez1, Trapez2, Trapez3];
  Trapezy.forEach((Trapez) => {
    const pole = Trapez.obliczPole();
    wynikiz.innerHTML += `<p>Nazwa: ${Trapez.nazwa}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch Trapezów i wyświetlanie wyniku
  const wiekszyTrapez = Trapez1.porownaj(Trapez2);
  wynikiz.innerHTML += `<p>Większy Trapez to ${wiekszyTrapez.nazwa} z polem ${wiekszyTrapez.obliczPole()}</p>`;

  function porownajFigury(prostokaty, trojkaty, trapezy) {
    let poleNajwiekszejFigury = 0;
    let nazwaNajwiekszejFigury = "";

    prostokaty.forEach((prostokat) => {
      const pole = prostokat.obliczPole();
      if (pole > poleNajwiekszejFigury) {
        poleNajwiekszejFigury = pole;
        nazwaNajwiekszejFigury = prostokat.nazwa;
      }
    });

    trojkaty.forEach((trojkat) => {
      const pole = trojkat.obliczPole();
      if (pole > poleNajwiekszejFigury) {
        poleNajwiekszejFigury = pole;
        nazwaNajwiekszejFigury = trojkat.nazwa;
      }
    });

    trapezy.forEach((trapez) => {
      const pole = trapez.obliczPole();
      if (pole > poleNajwiekszejFigury) {
        poleNajwiekszejFigury = pole;
        nazwaNajwiekszejFigury = trapez.nazwa;
      }
    });

    const wynik = `Największe pole ma figura: ${nazwaNajwiekszejFigury} z polem równym ${poleNajwiekszejFigury}`;
    return wynik;
  }

  // przykładowe wywołanie funkcji dla figur utworzonych w kodzie HTML
  const prostokat = [prostokat1, prostokat2, prostokat3];
  const trojkaty = [Trojkat1, Trojkat2, Trojkat3];
  const trapezy = [Trapez1, Trapez2, Trapez3];
  const wynik = porownajFigury(prostokaty, trojkaty, trapezy);
  const wynikElement = document.getElementById("wynik");
  wynikElement.innerHTML = wynik;
