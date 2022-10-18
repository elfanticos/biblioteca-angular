import { ITransport } from "./transport.model";

export abstract class Logistic {
    planDelivery(): void {
        const transport: ITransport = this.createTransport();
        transport.deliver();
    }

    abstract createTransport(): ITransport;
}