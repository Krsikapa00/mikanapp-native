

const GetLastPunch = async(user) => { 
    let lastPunch = null;       
    if (user.admin){
        const adminUserArray = await getUserList(user)
        if (adminUserArray[0].id){
            lastPunch = await getAdminLastPunch(adminUserArray);
        }
    } else{
        lastPunch = await getLastPunch(user);
    }

    return lastPunch; 
}

export default GetLastPunch;