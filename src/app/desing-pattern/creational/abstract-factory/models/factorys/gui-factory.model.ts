import { IButton } from "../products/button.model";
import { ICheckBox } from "../products/checkbox.model";

export interface IGUIFactory {
    createButton():IButton;
    createCheckBox():ICheckBox;
}