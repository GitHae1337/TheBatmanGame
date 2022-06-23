class Page {
    constructor(item, background, evidenceArr) {
      this.item = item;
      this.background = background;
      this.evidenceArr = evidenceArr;
    }
  
    show() {
      image(this.background, width/2, height/2, width, height);
    }

    getEvidenceArr(){
      return this.evidenceArr;
    } 

    getItem() {
      return this.item;
    }
  }