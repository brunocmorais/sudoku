import { Sudoku } from "./Sudoku";
import { BoxSize, PuzzleSize } from "./Constant";
import { Util } from "./Util";

export class Solver {

    public static solve(sudoku : Sudoku) {

        const [row, col] = sudoku.getNextEmptyCell();
        
        if (col == -1 && row == -1) 
            return sudoku;

        const numbers = Util.shuffle(Util.range(1, PuzzleSize));
    
        for (const value of numbers) {
    
            if (sudoku.isValid(row, col, value)) {
                sudoku.set(row, col, value);
    
                if (this.solve(sudoku))
                    return sudoku;
    
                sudoku.set(row, col, 0);
            }
        }
    
        return false;
    }
}
