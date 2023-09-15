export default class Difference{
    constructor(oldOfficer, newOfficer,items){
        try{
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        }catch(e){};
    }

    bindTriggers(block,blockElements,counter){
        block.querySelector('.plus').addEventListener('click',() => {
            if(counter !== blockElements.length - 2){
                blockElements[counter].style.display = "flex";
                counter++;
            }else{
                blockElements[counter].style.display = "flex";
                blockElements[blockElements.length - 1].remove();
            }
        });
    }

    hideItems(blockElements){
        blockElements.forEach((item,i,arr) => {
            if(i !== arr.length - 1){
                item.style.display = 'none';
            }
        });
    }

    init(){
        try{
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer,this.oldItems,this.oldCounter);
            this.bindTriggers(this.newOfficer,this.newItems,this.newCounter);
        }catch(e){};
    }
}