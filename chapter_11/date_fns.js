const now = new Date();

//console.log(dateFns.isToday(now));

//formatting options

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));


//comparing dates

const before = new Date('March 23 2018 12:34:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix:true}));