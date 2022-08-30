class CinnaMaker{
    constructor(cinnaNum, autoClicker, multiplier) {
        this._cinnaNum = cinnaNum;
        this._autoClicker = autoClicker
        this._multiplier = multiplier;
        this._clickValue = 1;
        this._autoClickerCost = 100;
        this._multiplerCost = 10;
    }

    get cinnaNum() {
        return this._cinnaNum;
    }

    makeCinnabuns() {
        this._cinnaNum+=this._clickValue;
    } 
    
    get autoClicker() {
        return this._autoClicker;
    }
   
    buyAutoClicker() {
        this._cinnaNum-=this._autoClickerCost;
        this._autoClicker++;
        this._autoClickerCost*=1.1;
    }
    
    buyMultipier() {
        this._cinnaNum-=this._multiplierCost;
        this._multiplier++;
        this._multiplerCost*=1.1;
        this._clickValue = Math.pow(1.2, this._multiplier);
    }
        
   

}

export default CinnaMaker;
