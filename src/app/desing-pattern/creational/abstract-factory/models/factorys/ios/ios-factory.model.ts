import { IButton } from "../../products/button.model";
import { IosButton } from "../../products/button/ios-button.model";
import { ICheckBox } from "../../products/checkbox.model";
import { IosCheckBox } from "../../products/checkbox/ios-checkbox.model";
import { IGUIFactory } from "../gui-factory.model";

export class IosFactory implements IGUIFactory {
    createButton(): IButton {
        return new IosButton();
    }
    createCheckBox(): ICheckBox {
        return new IosCheckBox();
    }

}