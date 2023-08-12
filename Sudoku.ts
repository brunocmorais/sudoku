import { Matrix } from "./Matrix";
import { Box } from "./Box";
import { BoxSize, PuzzleSize } from "./Constant";

export class Sudoku extends Matrix {

    public constructor() {
        super(PuzzleSize);
    }

    public isValid(row : number, col : number, value : number) {

        return this.isValidRow(row, value) && 
            this.isValidColumn(col, value) &&
            this.getBox(row, col).isValid(value);
    }

    public clone() {
        const sudoku = new Sudoku();

        for (let row = 0; row < PuzzleSize; row++)
            sudoku.setRow(row, this.getRow(row).slice());

        return sudoku;
    }

    public print() {

        let result = "";

        for (let row = 0; row < PuzzleSize; row++) {
            for (let col = 0; col < PuzzleSize; col++) {
                const value = this.get(row, col);

                result += (value === 0 ? " " : value) + " ";

                if ((col + 1) % BoxSize === 0 && (col + 1) != PuzzleSize)
                    result += "| ";
            }

            result += "\n";

            if ((row + 1) % BoxSize === 0 && (row + 1) != PuzzleSize)
                result += ("-").repeat(((BoxSize * 2) * BoxSize) + BoxSize) + "\n";
        }
    
        return result;
    }

    public getNextEmptyCell() {
    
        for (let i = 0; i < PuzzleSize; i++) {
            const pos = this.getRow(i).indexOf(0);

            if (pos >= 0)
                return [i, pos];
        }
    
        return [ -1, -1 ];
    }
    
    private isValidRow = (row : number, value : number) => 
        this.getRow(row).indexOf(value) < 0;
    
    private isValidColumn = (col : number, value : number) => 
        this.getCol(col).indexOf(value) < 0;
    
    private getBox(row : number, col : number) {
    
        const box = new Box();
        const boxNumber = (Math.floor(row / BoxSize) * BoxSize) + (Math.floor(col / BoxSize));
        const boxRowNumber = (Math.floor(boxNumber / BoxSize)) * BoxSize;
        const boxColNumber = (boxNumber % BoxSize) * BoxSize;
    
        for (let row = 0; row < BoxSize; row++)
            for (let col = 0; col < BoxSize; col++)
                box.set(row, col, this.get(boxRowNumber + row, boxColNumber + col));
    
        return box;
    }
}
