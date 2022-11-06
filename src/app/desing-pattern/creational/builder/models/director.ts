import { IBuilder } from "./constructors/Builder.interface";

export class Director {
    private _builder?: IBuilder;

    setBuilder(builder: IBuilder): void {
        this._builder = builder;
    }

    constructSportsCar(): void {
        this._builder
            ?.reset()
            .setSeats(8)
            .setEngine(true)
            .setGps(true)
            .setTripComputer(true);
    }
}