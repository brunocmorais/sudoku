import { Matrix } from "./Matrix";
import { BoxSize } from "./Constant";

export class Box extends Matrix {

    public constructor() {
        super(BoxSize);
    }

    public isValid (value : number) {
        for (let i = 0; i < BoxSize; i++)
            for (let j = 0; j < BoxSize; j++)
                if (this.get(i, j) === value)
                    return false;
        
        return true;
    }
}