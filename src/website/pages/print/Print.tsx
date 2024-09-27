import { SudokuComponent } from "../../components/sudoku/SudokuComponent";
import { Generator } from "../../../game/Generator";
import { Util } from "../../../game/Util";

export const Print = () =>
    <>
        <div className="row col-12">
            {
                Util.range(0, 2).map(_ => (
                    <>
                        <div className="mt-6" />
                        {
                            Util.range(0, 6).map(_ =>
                                <div className="col-6">
                                    <SudokuComponent dark={true} size={300} sudoku={Generator.generate()} />
                                </div>
                            )
                        }
                    </>
                ))
            }
        </div>
    </>