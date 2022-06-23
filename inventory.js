class Inventory{
    constructor(){
        // 인벤토리 창의 중심 X좌표
        this.posX = 740;
        // 인벤토리 창의 중심 Y좌표
        this.posY = height/2;
        // Evidence type의 인벤토리 배열
        this.inventoryArr = [];
        // 첫 슬롯의 중심 Y 좌표 
        this.firstSlotY = 97;
        // 실제 아이템을 둘 좌표
        this.firstItemSlotY = 110;
        // 슬롯 한 변 길이 (크기: 50 * 50)
        this.slotLength = 108;
        // 슬롯 세로 길이
        this.slotHeight = 86;
        // 슬롯 간격 (10 + slotHeight/2)
        this.gap = 96;
    }

    show(){
        // 인벤토리 전체 기본 창 출력
        image(inventoryImg, this.posX, this.posY);

        // inventoryArr 돌면서 포함되어 있는 Evidence의 이미지 출력
        for(let i=0; i<this.inventoryArr.length; i++){
            if(this.inventoryArr[i].used == false){
                if(this.inventoryArr[i].name == "USB"){
                    image(inventory.inventoryArr[i].imgArray[0], inventory.posX, inventory.firstSlotY + inventory.gap * i + 10, 
                        inventory.inventoryArr[i].imgArray[0].width * 1.1, inventory.inventoryArr[i].imgArray[0].height * 1.1);                
                }
                else{
                    image(this.inventoryArr[i].imgArray[0], this.posX, this.firstItemSlotY + this.gap*i, this.slotLength, this.slotHeight);
                }
            }
        }
    }

    setPosX(posX){
        this.posX = posX;
    }
}

class InventoryItem extends Evidence {
    // 매개변수: 전달받은 Evidence 객체(ex.letter, thumb...), 현재 inventory 내 x좌표, 현재 inventory 내 index
    constructor(evidence, inventory) {     
      super(evidence.name, evidence.imgArray, evidence.dataX, evidence.dataY);
      this.posX = inventory.posX;
      this.posY = inventory.firstItemSlotY + inventory.gap * this.index;
      this.index = inventory.inventoryArr.length;
      this.used = false;
      this.obtained = true;
    }
}