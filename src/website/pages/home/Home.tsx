import { Component, type ChangeEvent } from "react";
import { Generator } from "../../../game/Generator";
import { Solver } from "../../../game/Solver";
import { SudokuComponent } from "../../components/sudoku/SudokuComponent"
import { Sudoku } from "../../../game/Sudoku";
import { PuzzleSize } from "../../../game/Constant";
import { Util } from "../../../game/Util";
import { Navbar } from "../../components/navbar/NavbarComponent";
import { renderToString } from "react-dom/server";
import { Print } from "../print/Print";

type State = {
    sudoku : Sudoku
}

export class Home extends Component<{}, State> {
    
    constructor(props : {}) {
        super(props);
        this.state = { sudoku : Generator.generate() };
    }

    solve = () => {
        Solver.solve(this.state.sudoku);
        this.setState({});
    }

    newGame = () => this.setState({ sudoku : Generator.generate() });

    clear = () => this.setState({ sudoku : new Sudoku() });

    onClick = (num : number) => {
        const activeCell = this.state.sudoku.activeCell - 1;
        const row = Math.floor(activeCell / PuzzleSize);
        const col = activeCell % PuzzleSize;

        if (this.state.sudoku.getFixed(row, col))
            return;

        const value = this.state.sudoku.get(row, col) === num ? 0 : num;
        this.state.sudoku.set(row, col, value);
        
        this.setState({});
    }

    render = () =>
        <>
            <Navbar />
            <div className="container" style={{marginTop: 60}}>
                <SudokuComponent sudoku={this.state.sudoku} size={Math.min(window.innerWidth * 0.75, 400)} dark={true} />
                <div className="row mt-3 justify-content-center">
                    <div className="d-flex col-6">
                        <div className="d-flex col justify-content-center">
                            <button className="btn btn-success" onClick={this.solve}>Solve</button>
                        </div>
                        <div className="d-flex col justify-content-center">
                            <button className="btn btn-success" onClick={this.newGame}>New</button>
                        </div>
                        <div className="d-flex col justify-content-center">
                            <button className="btn btn-success" onClick={this.clear}>Clear</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="d-flex col-sm-8 col-md-6 col-lg-6">
                        { Util.range(1, 9).map(i => (
                            <div className="d-flex col justify-content-center" key={i}>
                                <button className="btn btn-secondary" onClick={() => this.onClick(i)}>{i}</button>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
}