import {FETCH_WEATHER} from'../actions/index';

export default function(state=[],action){

    switch(action.type){
        case FETCH_WEATHER: 
        // return state.concat([action.payload.data]);
        return [action.payload.data,...state]; // add more info to the array by creating new array that contain the new info,, same as the line before
            
    }


    return state;
}