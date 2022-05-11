const initialState =[0,0,0,
    0,0,0,
    0,0,0];

export default function changeValue (state=initialState, action){
    const newMap =[ ...state];
    switch(action.type){
        case "x": 
            newMap[action.payload]=1;
            return (newMap)
                
        case "o":
            newMap[action.payload]=2;
            return (newMap)
        default:
            return state

}
}