class MyArray {
    constructor() {
      this.values = [1, 2, 3, 4, 5]; // zainicjuj tablicę wartościami
      this.albumNumber = 12345; // ustaw swój numer albumu
    }
  
    sum() {
      return this.values.reduce((acc, val) => acc + val, 0);
    }
  
    evenNumbers() {
      return this.values.filter((val) => val % 2 === 0);
    }
  
    multiplyByThree() {
      return this.values.map((val) => val * 3);
    }
  
    addAlbumNumber() {
      this.values.push(this.albumNumber);
      return this.values.indexOf(this.albumNumber);
    }
  
    average() {
      return this.sum() / this.values.length;
    }
  
    max() {
      return Math.max(...this.values);
    }
  
    countOccurrences(value) {
      return this.values.reduce((acc, val) => (val === value ? acc + 1 : acc), 0);
    }
  }
  
  const myArray = new MyArray();
  
  console.log("Suma wartości: ", myArray.sum());
  console.log("Liczby parzyste: ", myArray.evenNumbers());
  console.log("Wartości pomnożone razy 3: ", myArray.multiplyByThree());
  console.log(
    "Indeks dodanej wartości: ",
    myArray.addAlbumNumber()
  );
  console.log("Średnia arytmetyczna: ", myArray.average());
  console.log("Największa wartość: ", myArray.max());
  console.log(
    "Liczba wystąpień wartości 3: ",
    myArray.countOccurrences(3)
  );
  