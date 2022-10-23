import { Car } from "../products/Car";
import { IBuilder } from "./Builder.interface";

export class CardBuilder implements IBuilder {
    private _car: Car;
    constructor() {
        this._car = new Car();
    }

    reset(): IBuilder {
        this._car = new Car();
        return this;
    }

    setSeats(seats: number): IBuilder {
        this._car.seats = seats;
        return this;
    }
    setEngine(hasEngine: boolean): IBuilder {
        this._car.hasEngine = hasEngine;
        return this;
    }
    setTripComputer(hasTripComputer: boolean): IBuilder {
        this._car.hasTripComputer = hasTripComputer;
        return this;
    }
    setGps(hasGps: boolean): IBuilder {
        this._car.hasGps = hasGps;
        return this;
    }

    getProducts(): Car {
        return this._car;
    }

}