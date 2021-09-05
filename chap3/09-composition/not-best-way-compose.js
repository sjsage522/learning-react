const createClockTime = date => ({date})

const appendAMPM = ({date}) =>
    ({
        date,
        ampm: (date.getHours() >= 12) ? "PM" : "AM"
    })

const civilianHours = clockTime => {
    // console.log(clockTime);
    const hours = clockTime.date.getHours()
    return {
        ...clockTime,
        hours: (hours > 12) ?
            hours - 12 :
            hours
    }
}

const removeDate = clockTime => {
    // console.log(clockTime);
    let newTime = {...clockTime}
    delete newTime.date
    return newTime
}

// Not the best way to compose all of these into one function

const oneFunction = date =>
    removeDate(
        civilianHours(
            appendAMPM(
                createClockTime(date)
            )
        )
    )

console.log(oneFunction(new Date()));