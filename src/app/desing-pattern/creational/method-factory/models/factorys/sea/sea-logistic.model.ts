import { Logistic } from "../../logistic.model";
import { ITransport } from "../../transport.model";
import { Ship } from "./products/ship.model";

export class SeaLogistic extends Logistic {
    createTransport(): ITransport {
        return new Ship();
    }

}