export function Increment (num){
    return{
        type:"INCREMENT",
        payload:!num ? 1:num
    }
}


export function Decrement (num){
    return{
        type:"DECREMENT",
        payload:!num ? 1:num
    }
}