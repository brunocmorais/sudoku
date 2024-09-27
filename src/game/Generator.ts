import { NumbersToRemove, PuzzleSize } from "./Constant";
import { Solver } from "./Solver";
import { Sudoku } from "./Sudoku";
import { Util } from "./Util";

export class Generator {

    public static generate() {
        const sudoku = new Sudoku();
        
        Solver.solve(sudoku);
        Generator.removeNumbers(sudoku, NumbersToRemove);

        for (let i = 0; i < PuzzleSize; i++)
            for (let j = 0; j < PuzzleSize; j++)
                sudoku.setFixed(i, j, (sudoku.get(i, j) > 0));

        return sudoku;
    }

    private static removeNumbers(sudoku : Sudoku, quantity: number) {

        const range = Util.shuffle(Util.range(0, PuzzleSize * PuzzleSize));
        let index = 0, count = 0;

        while (count < quantity) {

            const [row, col] = [Math.floor((range[index]) / PuzzleSize), (range[index]) % PuzzleSize];
            const answer = sudoku.get(row, col);

            sudoku.set(row, col, 0);
            
            if (this.checkIfStillSolvable(sudoku, row, col, answer)) {
                count++;
            } else {
                sudoku.set(row, col, answer);
            }
                
            index = (index + 2) % (PuzzleSize * PuzzleSize);
        }
    }

    private static checkIfStillSolvable(sudoku : Sudoku, row : number, col : number, answer : number) {

        const possibilities = Util.range(1, PuzzleSize).filter(n => n != answer && sudoku.isValid(row, col, n));
        
        for (const possibility of possibilities) {

            const clone = sudoku.clone();
            clone.set(row, col, possibility);
            
            if (Solver.solve(clone))
                return false;
        }

        return true;
    }
}