const initialState ={map:[0,0,0,0,0,0, 0,0,0],typeNode:"x"};

export default function changeValue (state=initialState, action){
    const newMap =[ ...state.map];
    switch(action.type){
        case "x": 
            newMap[action.payload]=1;
            var newState={map: newMap,typeNode: "o"}
            return (newState)
                
        case "o":
            newMap[action.payload]=2;
            var newState={map: newMap,typeNode: "x"}
            return (newState);
        case "reset":
            var newState= {...initialState}
            return (newState)
        default:
            return state

}
}