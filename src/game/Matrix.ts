export abstract class Matrix {

    private readonly matrix: number[][];
    private readonly fixed : boolean[][];

    public constructor(size : number) {

        this.matrix = new Array<number[]>(size);
        this.fixed = new Array<boolean[]>(size);

        let row = new Array<number>(size);
        let rowF = new Array<boolean>(size);

        for (let i = 0; i < size; i++) {
            row[i] = 0;
            rowF[i] = false;
        }

        for (let i = 0; i < size; i++) {
            this.matrix[i] = [...row];
            this.fixed[i] = [...rowF];
        } 
    }

    public get = (row: number, col: number) => this.matrix[row][col]; 

    public set = (row: number, col: number, val: number) => this.matrix[row][col] = val;

    public getRow = (row: number) => this.matrix[row];

    public getCol = (col: number) => this.matrix.map(x => x[col]);

    public setRow = (row: number, value: number[]) => this.matrix[row] = value;

    public getFixed = (row: number, col: number) => this.fixed[row][col]; 

    public setFixed = (row: number, col: number, value: boolean) => this.fixed[row][col] = value; 
}
