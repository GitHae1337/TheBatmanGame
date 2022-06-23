class Data {
  constructor(name, imgArray) {
    this.name = name;
    this.imgArray = imgArray;

  }
  
  getName() {
    return this.name;
  }
  
  getImgArr() {
    return this.imgArray;
  }
}

class Evidence extends Data{
  constructor(name, imgArray, dataX, dataY) {
    super(name, imgArray);
    this.dataX = dataX;
    this.dataY = dataY;
    this.obtained = false;
  }
}

class Installation extends Data{
  constructor(name, imgArray, dataX, dataY) {
    super(name, imgArray);
    this.dataX = dataX;
    this.dataY = dataY;
  }
}