import { IGUIFactory } from "./factorys/gui-factory.model";
import { IButton } from "./products/button.model";
import { ICheckBox } from "./products/checkbox.model";


export class OSAplication {
    private button?: IButton;
    private checkbox?: ICheckBox;
    private factory: IGUIFactory
    constructor(factory: IGUIFactory) {
        this.factory = factory;
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckBox();
    }

    paint() {
        this.button?.paint();
        this.checkbox?.paint();
    }
}