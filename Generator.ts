import { NumbersToRemove, PuzzleSize } from "./Constant";
import { Solver } from "./Solver";
import { Sudoku } from "./Sudoku";
import { Util } from "./Util";

export class Generator {

    public static generate() {
        const sudoku = new Sudoku();
        
        Solver.solve(sudoku);
        Generator.removeNumbers(sudoku, NumbersToRemove);

        return sudoku;
    }

    private static removeNumbers(sudoku : Sudoku, quantity: number) {

        const range = Util.shuffle(Util.range(0, PuzzleSize * PuzzleSize));
        const numbers = Util.shuffle(Util.range(1, PuzzleSize));
        let index = 0;
        let count = 0;

        while (count < quantity) {
			
			index = (index + 2) % (PuzzleSize * PuzzleSize);

            const [row, col] = [Math.floor((range[index]) / PuzzleSize), (range[index]) % PuzzleSize];
            const answer = sudoku.get(row, col);
            
            if (answer === 0)
				continue;

            const possibilities = numbers.filter(x => x != answer && sudoku.isValid(row, col, x));
                
            let foundOtherSolution = false;

            for (const possibility of possibilities) {

                const clone = sudoku.clone();
                clone.set(row, col, possibility);
                
                Solver.solve(clone);
                
                if (clone.getNextEmptyCell()[0] === -1) {
                    foundOtherSolution = true;
                    break;   
                }
            }
            
            if (!foundOtherSolution) {
                sudoku.set(row, col, 0);
                count++;
            }
        }
    }
}