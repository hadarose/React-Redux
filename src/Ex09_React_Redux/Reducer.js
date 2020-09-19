const appReducer = (state = {users: []}, action) =>
{
    switch (action.type)
    {  
        case "AddUser": 
            let currentUsers = state.users;
            currentUsers.push(action.payload)
            return {...state, users: currentUsers}
        
        case "UpdateUser":
            let currentUsers2 = state.users;
            let index = currentUsers2.findIndex(item => item.id === action.payload.id);
            if (index !== -1)
            {
                currentUsers2[index] = action.payload;
            }

            return {...state, users: currentUsers2}
            
        case "DeleteUser":
            let currentUsers3 = state.users;
            let index2 = currentUsers3.findIndex(item => item.id === action.payload);
            if (index2 !== -1)
            {
                currentUsers3.splice(index2,1);
            }

            return {...state, users: currentUsers3}

        default:
                return state;

    }

}

export default appReducer;