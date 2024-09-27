import { Component } from "react";
import styles from './styles.module.css';
import type { Sudoku } from "../../../game/Sudoku";

type Props = {
    value : number,
    index : number,
    size : number,
    fixed : boolean,
    sudoku : Sudoku
}

export class CellComponent extends Component<Props> {

    constructor(props : Props) {
        super(props);
    }

    onClick = () => {
        this.props.sudoku.activeCell = this.props.index;
        this.forceUpdate();
    }

    render() {

        const value = this.props.value === 0 ? " " : this.props.value;
        // const tag = this.props.fixed ? <b>{ value }</b> : <span>{ value }</span>;
        const active = `${this.props.sudoku.activeCell === this.props.index ? styles.active : ""}`;

        const css : React.CSSProperties = { 
            width: this.props.size, 
            height: this.props.size,
            lineHeight: this.props.size + "px",
            fontSize: this.props.size * 0.5
        };

        return (
            <div className={`${styles.cell} ${active} 
                ${this.props.fixed ? styles.fixed : styles.field}`} 
                style={css} onClick={this.onClick}>
                { value }
            </div>
        );
    }
}