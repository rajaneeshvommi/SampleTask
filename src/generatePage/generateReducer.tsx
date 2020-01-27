import {  SET_SAVEKEY } from '../generatePage/generateType';
import { SaveKey } from '../generatePage/genereateState';

export default (state = SaveKey, action) => {
    console.log("SaveKey",SaveKey)
    console.log("Action type",action.type);
    console.log("Action data", action.usersList  )
    switch (action.type) {
        case SET_SAVEKEY:
            return { 
                    ...state,
                    usersList:[...action.usersList]
                };
        default:
            return state;
    }
}