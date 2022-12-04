


const initialstate=0;

function changeNumber (state=initialstate,action){
    switch(action.type){
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }

}

export default changeNumber;

