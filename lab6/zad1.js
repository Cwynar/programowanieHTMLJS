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
  const wyniki = document.querySelector("#wyniki");
  wyniki.innerHTML = "";
  
  // obliczanie i wyświetlanie obwodu i pola dla każdego prostokąta
  const prostokaty = [prostokat1, prostokat2, prostokat3];
  prostokaty.forEach((prostokat) => {
    const obwod = prostokat.obliczObwod();
    const pole = prostokat.obliczPole();
    wyniki.innerHTML += `<p>Nazwa: ${prostokat.nazwa}, Obwód: ${obwod}, Pole: ${pole}</p>`;
  });
  
  // porównywanie dwóch prostokątów i wyświetlanie wyniku
  const wiekszyProstokat = prostokat1.porownaj(prostokat2);
  wyniki.innerHTML += `<p>Większy prostokąt to ${wiekszyProstokat.nazwa} z polem ${wiekszyProstokat.obliczPole()}</p>`;
  