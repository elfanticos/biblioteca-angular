import { IButton } from "../button.model";

export class IosButton implements IButton {
    paint(): void {
        console.log('pintando boton ios');
    }
    
}