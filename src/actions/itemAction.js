import axios from "axios";


export const getAllItems=()=>async dispatch=>{
    dispatch({type: 'GET_ITEMS_REQUEST'})

    try {
        const response =await axios.get('/api/items/getallitems')
        console.log(response);
        dispatch({type: 'GET_ITEMS_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_ITEMS_FAILED' , payload : error})
    }
}

export const addItem=(item)=>async dispatch=>{

    dispatch({type: 'ADD_ITEM_REQUEST'})

    try {
        const response = await axios.post('/api/items/add', item)
        console.log(response);
        dispatch({type: 'ADD_ITEM_SUCCESS'})

        
    } catch (error) {
        dispatch({type: 'ADD_ITEM_FAILED',payload: error})

    }

}


export const editItem=(item)=>async dispatch=>{

    dispatch({type: 'EDIT_ITEM_REQUEST'})

    try {
        const response = await axios.put(`/api/items/getallitems/${item}`, item)
        console.log(response);
        dispatch({type: 'EDIT_ITEM_SUCCESS'})

        
    } catch (error) {
        dispatch({type: 'EDIT_ITEM_FAILED',payload: error})

    }

}