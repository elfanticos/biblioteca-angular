import { Logistic } from "../../logistic.model";
import { ITransport } from "../../transport.model";
import { Truck } from "./products/truck.model";

export class RoadLogistic extends Logistic {
    createTransport(): ITransport {
        return new Truck();
    }

}