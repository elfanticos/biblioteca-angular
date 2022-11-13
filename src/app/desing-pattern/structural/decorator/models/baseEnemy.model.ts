import { Enemy } from "./enemy.interface";

export class BaseEnemy implements Enemy {
    takeDamage(): number {
        return 10;
    }

}