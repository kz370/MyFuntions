// arrange contacts
// insert an array of contact and it will arrange them by letter
arrangedContacts = (array) => {
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
