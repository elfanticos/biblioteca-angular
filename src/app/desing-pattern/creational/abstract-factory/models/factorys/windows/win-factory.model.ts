import { IButton } from "../../products/button.model";
import { WinButton } from "../../products/button/win-button.model";
import { ICheckBox } from "../../products/checkbox.model";
import { WinCheckBox } from "../../products/checkbox/win-checkbox.model";
import { IGUIFactory } from "../gui-factory.model";

export class WinFactory implements IGUIFactory {
    createButton(): IButton {
        return new WinButton();
    }
    createCheckBox(): ICheckBox {
        return new WinCheckBox();
    }

}