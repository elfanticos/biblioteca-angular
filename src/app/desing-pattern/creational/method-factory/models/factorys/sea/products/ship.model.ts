import { ITransport } from "../../../transport.model";

export class Ship implements ITransport {
    deliver(): void {
        console.log('deliver by sea in a container');
    }

}