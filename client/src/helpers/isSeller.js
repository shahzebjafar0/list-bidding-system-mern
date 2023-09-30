export const checkIsSeller=(sellerId)=>{
    return sellerId== JSON.parse(localStorage.getItem('user'))?.id;
}
