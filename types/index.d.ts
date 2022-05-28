export{};
declare global {
    interface Number {
        money: (num: number, decimals?: number) =>  string
    }
}