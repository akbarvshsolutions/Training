export const loadUsers = (users) => {
    return{
        type : 'LOAD_USERS',
        payload : users
    }
}

export const setLoading = (val) => {
    return{
        type : 'SET_LOADING',
        payload : val
    }
}

export const setError = (err) => {
    return{
        type : 'SET_ERROR',
        payload : err
    }
}

export const addUser = (user) => {
    return{
        type : 'ADD_USER',
        payload : user,
    }
}

export const deleteUser = (id) => {
    return{
        type : 'DELETE_USER',
        payload : id
    }
}

export const editUser = (user) => {
    console.log("action ",user)
    return{
        type : 'EDIT_USER',
        payload : user,
    }
}

export const updateUser = (user) => {
    return{
        type : 'UPDATE_USER',
        payload : user
    }
}
