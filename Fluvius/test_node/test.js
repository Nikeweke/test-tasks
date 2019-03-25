
let date = new Date('20-06-25T07:03:58.883Z')


console.log(date instanceof Date)
console.log(!isNaN(Number(date)) )

if (date instanceof Date && !isNaN(Number(date)) ) {
    console.log({success:0, message: 'Fail to add evenet. Date is invalid'}) 
}

console.log(Number(date))