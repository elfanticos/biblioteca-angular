import { IButton } from "../button.model";

export class WinButton implements IButton {
    paint(): void {
        console.log('pintando boton windows');
    }
    
}