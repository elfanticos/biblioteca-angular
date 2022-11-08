export interface IDevice {
    isEnabled():boolean;
    enable():void;
    disable():void;
    getVolume(): number;
    setVolume(value: number): void;
    getChannel(): number;
    setChannel(value: number): void;
}