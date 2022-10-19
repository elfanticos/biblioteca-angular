import { ICheckBox } from "../checkbox.model";

export class WinCheckBox implements ICheckBox {
    paint(): void {
        console.log('pintando checkbox windows');
    }

}