import { Component } from "react";
import { BoxComponent } from "../box/BoxComponent";
import { Sudoku } from "../../../game/Sudoku";
import styles from './styles.module.css';
import { BoxSize } from "../../../game/Constant";

type Props = {
    sudoku : Sudoku,
    size : number,
    dark : boolean
}

export class SudokuComponent extends Component<Props> {
    
    constructor(props : Props) {
        super(props);
    }

    onClick = () => {
        this.forceUpdate();
    }

    render() {

        const rows = [];
        const size = this.props.size / BoxSize;

        for (let i = 0; i < BoxSize; i++) {
            const row = [];

            for (let j = 0; j < BoxSize; j++) {
                row.push(<BoxComponent 
                    sudoku={this.props.sudoku} 
                    index={(i * BoxSize) + j} 
                    box={this.props.sudoku.getBox(i, j)} 
                    size={size} key={j} />);
            }            

            rows.push(<div className={styles.row} key={i}>{ row }</div>);
        }

        return (
            <div className={`${styles.sudoku} ${this.props.dark ? "dark" : ""}`} onClick={this.onClick}>
                { rows }
            </div>
        )
    }
}