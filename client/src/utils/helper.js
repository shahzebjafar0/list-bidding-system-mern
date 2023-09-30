
export const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    console.log("token", token)
    return token
}

