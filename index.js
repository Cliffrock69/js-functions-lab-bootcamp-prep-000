// write your code below!
function happyHolidays () {
  return"Happy holidays!"
}

function happyHolidaysTo (name){
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("Cliff")

function happyHolidayTo (holiday, name){
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo("Christmas","Cliff")

function holidayCountdown (days, holiday){
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown (10, "Christmas")
