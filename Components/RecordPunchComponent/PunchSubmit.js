const CreatePunch = async (data, userID, inout) => {

    const locationInformation = await LocationCheck(data)
    // alert(locationInformation.locationCode)
 
    if (locationInformation.locationCode == data) {
        alert("yes")
        const punchResponse = await PunchSubmit(userID, inout, locationInformation.locationName, locationInformation.locationCode)
        if (punchResponse.id) {
            return punchResponse;
        } else {
            return punchResponse;
        }
        
    } else {
        return 'Locations do not match'
    }    
}

const PunchSubmit = async (userID, inout, locationname, locationcode ) => {
        const date = getDate();
        const actual_date = getActualDate();
        const time = getTime();
        const response = await fetch(`https://mikan-app-api.herokuapp.com/recordpunch${inout}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: userID,
                location: locationcode,
                locationname: locationname,
                date: date,
                actual_date: actual_date,
                time: time
            })
        })
        .then(resp => resp.json())
        .catch(err => {alert(err)});

        if (response.id) {
            if (response.id == userID) {
                return response;
            } else {
                return 'Error. Punch does not match userID'
            }
        } else {
            return response
        }
}

const LocationCheck = async (data) => {
        
        const response = await fetch('https://mikan-app-api.herokuapp.com/locationscheck', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'},
                body: JSON.stringify({
                    location: data
                })
        })
        .then(response => response.json())
        .catch(err => {
            alert("3")
            return err  
        });
        if (!response.id) {
            const resp = { locationCode: null}
            return resp
        } else {
            // alert("yes")
            const resp = { locationCode: response.code, locationName: response.name}
            return resp;
        }
    }

const getDate = () => {
    const today = new Date();
    const date = (`${today.getFullYear()}/${(today.getMonth()+1)}/${today.getDate()}`);
    return date;
}

const getActualDate = () => {
    const today = new Date();
    const date = (`${today.getFullYear()}/${(today.getMonth()+1)}/${today.getDate()+1}`);
    return date;
}

const getTime = () => {
    const today = new Date();
    const date = (`${today.getHours()}:${(today.getMinutes())}:${today.getSeconds()}`);
    return date;
}

export default CreatePunch;