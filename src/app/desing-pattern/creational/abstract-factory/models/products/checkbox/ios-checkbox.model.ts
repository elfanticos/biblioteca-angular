import { ICheckBox } from "../checkbox.model";

export class IosCheckBox implements ICheckBox {
    paint(): void {
        console.log('pintando checkbox ios');
    }

}