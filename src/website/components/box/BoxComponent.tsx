import { Component } from "react";
import { CellComponent } from "../cell/CellComponent";
import styles from './styles.module.css';
import type { Box } from "../../../game/Box";
import { BoxSize } from "../../../game/Constant";
import type { Sudoku } from "../../../game/Sudoku";

type Props = {
    box : Box,
    size : number,
    index : number,
    sudoku : Sudoku
}

export class BoxComponent extends Component<Props> {

    constructor(props : Props) {
        super(props);
    }

    render() {

        const rows = [];
        const size = this.props.size / BoxSize;
        const x = this.props.index % 3;
        const y = Math.floor(this.props.index / 3);
        const startIndex = ((y * 9 * 3) + 1) + ((x * 3) + 1) - 1;

        for (let i = 0; i < BoxSize; i++) {
            const row = [];

            for (let j = 0; j < BoxSize; j++) {
                row.push(<CellComponent 
                    sudoku={this.props.sudoku} 
                    index={startIndex + (i * 9) + j} 
                    value={this.props.box.get(i, j)} 
                    fixed={this.props.box.getFixed(i, j)} 
                    size={size} key={j} />);
            }

            rows.push(<div className={styles.row} key={i}>{ row }</div>);
        }

        return (
            <div className={styles.box}>
                { rows }
            </div>
        )
    }
}