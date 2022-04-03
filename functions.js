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
    date = new Date(+date)
    const [month, day] = date.toLocaleDateString().split('/')
    const year = date.getFullYear();
    const [hr, mn] = date.toLocaleTimeString().split(':')
    const hrs = hr>12?(hr%12>0?hr%12:12):(hr>0?(hr<10?`0${hr}`:hr):12)
    const dateString = `${day}-${month}-${year}`
    const timeString = `${hrs}:${mn} ${hr > 12 ? "pm" : "am"}`
    const fullDate = { date: dateString, time: timeString, fullDate: `${dateString} ${timeString}` }

    return fullDate
}
