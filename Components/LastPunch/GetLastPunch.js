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


const getAdminLastPunch = async (userarr) => {
    const promises = userarr.map(async data => {
        const response = await fetch(`https://mikan-app-api.herokuapp.com/latestpunch`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: data.id,
            })
        }).then(resp => resp.json())
        .catch(err => {return(err)})

        if (response.id){
        return {
            id: response.id,
            name: data.name,
            in_date: response.in_date,
            location: response.location,
            in_time: response.in_time,
            out_time: response.out_time,
            out_date: response.out_date,
            difference: response.difference
        } 
        }else {
           console.log('Something went wrong') 
           return {
            id: 'N/A',
            name: data.name,
            in_date: 'N/A',
            location: 'N/A',
            in_time: 'N/A',
            out_time: 'N/A',
            out_date: 'N/A',
            difference: 'N/A'
        } 
        }
        // alert(response.location)
    }) 
    const results = await Promise.all(promises);
    return results;
}

const getLastPunch = async (user) => {
    const response = await fetch(`https://mikan-app-api.herokuapp.com/latestpunch`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: user.id,
        })
    })
    .then(response => response.json())
    .catch(err => {return err});
    if (response.id){
        return response;
    }
}

const getUserList = async (adminuser) =>{
    const userArray = await fetch(`https://mikan-app-api.herokuapp.com/loadusers`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: adminuser.id,
            admin: adminuser.admin
        })
    })
    .then(response => response.json())
    .catch(err => {return err});

    return userArray;
}
