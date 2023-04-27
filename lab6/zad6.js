// tworzymy obiekt reprezentujący prostokąt
let prostokat = {
  nazwa: "Prostokąt ABCD",
  szerokosc: 10,
  wysokosc: 5,
  pole: function() {
    return this.szerokosc * this.wysokosc;
  }
};

console.log("Początkowa nazwa prostokąta: " + prostokat.nazwa);

// zmieniamy nazwę prostokąta za pomocą funkcji zmienNazwe
zmienNazwe(prostokat, "Nowy prostokąt XYZ");

console.log("Nowa nazwa prostokąta: " + prostokat.nazwa);
console.log("Szerokość: " + prostokat.szerokosc);
console.log("Wysokość: " + prostokat.wysokosc);
console.log("Pole: " + prostokat.pole());
