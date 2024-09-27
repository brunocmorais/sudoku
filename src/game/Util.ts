export class Util {

    public static shuffle(array : number[]) {
        let length = array.length;

        for (let i = 0; i < length; i++) {
            const j = Math.floor(Math.random() * (length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    public static range = (startNumber : number, count : number) => 
        [...Array(count).keys()].map(n => n + startNumber);
}