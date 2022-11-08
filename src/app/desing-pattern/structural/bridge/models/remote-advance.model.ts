import { RemoteControl } from "./remote.model";

export class RemoteControlAdvance extends RemoteControl {
    mute(): void {
        this.device.setVolume(0);
    }
}