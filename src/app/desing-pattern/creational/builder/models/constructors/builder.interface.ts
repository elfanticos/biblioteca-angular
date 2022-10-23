import { Car } from "../products/Car";

export interface IBuilder {
    reset(): IBuilder;
    setSeats(cant: number): IBuilder;
    setEngine(hasEngine: boolean): IBuilder;
    setTripComputer(hasTripComputer: boolean): IBuilder;
    setGps(hasGps: boolean): IBuilder;
    getProducts(): Car;
}