import { ITransport } from "../../../transport.model";

export class Truck implements ITransport {
    deliver(): void {
        console.log('deliver by land in a box');
    }

}