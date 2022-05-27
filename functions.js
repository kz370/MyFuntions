// arrange contacts
// insert an array of contact and it will arrange them by letter
arrangedContacts = (array) => {
    array = array.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))
    return array.reduce((prev, current, index) => {
        let firstLetter, pattern = /[a-zA-Z]/
        if (index === 1) {
            char = prev.name[0]
            pattern.test(char) ? firstLetter = char.toUpperCase() : firstLetter = "0..9"
            return { [firstLetter]: [prev || []] }
        }
        char = current.name[0]
        pattern.test(char) ? firstLetter = char.toUpperCase() : firstLetter = "0..9"
        newArray = {
            ...prev,
            [firstLetter]: [...(prev[firstLetter] || []), current]
        }
        return newArray
    })
}

//convert timestamp to date format dd-mm-yyyy hourr:minutes am/pm
const timeStampToDate = (date) => {
    date = isNaN(new Date(date))?new Date(+date):new Date(date)
    const [month, day] = date.toLocaleDateString().split('/')
    const year = date.getFullYear();
    const [hr, mn] = date.toLocaleTimeString().split(':')
    const hrs = hr>12?(hr%12>0?hr%12:12):(hr>0?(hr<10?`0${hr}`:hr):12)
    const dateString = `${day}-${month}-${year}`
    const timeString = `${hrs}:${mn} ${hr > 12 ? "pm" : "am"}`
    const fullDate = { date: dateString, time: timeString, fullDate: `${dateString} ${timeString}` }

    return fullDate
}

//format currency
const formatMoney = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

//calculate qibla from lon,lat
function calculate(lat, lon) {
	if (isNaN(lat-0.0) || isNaN(lon-0.0)) {
		alert("Non-numeric entry/entries");
		return "???";
	}
	if ((lat-0.0)>(90.0-0.0) || (lat-0.0)<(-90.0-0.0)) {
		alert("Latitude must be between -90 and 90 degrees");
		return "???";
	}
	if ((lon-0.0)>(180.0-0.0) || (lon-0.0)<(-180.0-0.0)) {
		alert("Longitude must be between -180 and 180 degrees");
		return "???";
	}
	if (Math.abs(lat-21.4)<Math.abs(0.0-0.01) && Math.abs(lon-39.8)<Math.abs(0.0-0.01)) return "Any";	//Mecca
	phiK = 21.4*PI/180.0;
	lambdaK = 39.8*PI/180.0;
	phi = lat*PI/180.0;
	lambda = lon*PI/180.0;
	psi = 180.0/PI*Math.atan2(Math.sin(lambdaK-lambda),                Math.cos(phi)*Math.tan(phiK)-Math.sin(phi)*Math.cos(lambdaK-lambda));
	return Math.round(psi);
}
