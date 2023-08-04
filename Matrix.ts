export abstract class Matrix {

    private readonly matrix: number[][];

    public constructor(size : number) {

        this.matrix = new Array<number[]>(size);

        let row = new Array<number>(size);

        for (let i = 0; i < size; i++)
            row[i] = 0;

        for (let i = 0; i < size; i++)
            this.matrix[i] = [...row];
    }

    public get = (row: number, col: number) => this.matrix[row][col]; 

    public set = (row: number, col: number, val: number) => this.matrix[row][col] = val;

    public getRow = (row: number) => this.matrix[row];

    public getCol = (col: number) => this.matrix.map(x => x[col]);

    public setRow = (row: number, value: number[]) => this.matrix[row] = value;
}
