import {  SET_SAVEKEY } from '../generatePage/generateType';

const arr =[];

export function saveToList (arr){
    console.log('userDetailsObject', arr)
    return{
        type: SET_SAVEKEY,
        usersList : arr
    }
}


export const saveUserDetails = (userObject) => async dispatch =>{
    try {
        console.log("Generator Action" ,userObject);
        arr.push(userObject)
        dispatch(saveToList(arr));
    } catch (error) {
        
    }
}

export const deleteUserData = (userList, id) => async dispatch =>{
    try {
        console.log(userList, id);
        const filteredData = userList.filter(item => item.id !== id);
        arr.length = 0;
        arr.push.apply(arr, filteredData)
        dispatch(saveToList(filteredData))
    } catch (error) {
        
    }
}

export const updateUserData = (text,id ) => async dispatch =>{
    try {
        console.log( text,id);
        const objIndex = arr.findIndex((obj => obj.id == id));
        arr[objIndex].userName = text;
        console.log( "Updated array", arr);
        debugger
        dispatch(saveToList(arr))
    } catch (error) {
        
    }
}