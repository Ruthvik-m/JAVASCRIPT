const coding =["js","rb","py","java","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums  = myNums.filter((num) => {//should do the imlicit return like () => condiitons
//     return  num > 4 // for explicit we must use the return keyword
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) => {
    if(num > 4){
     
        newNums.push(num)
    }
})

 console.log(newNums);


// filter
const books =[
    {
        title : 'Book One',genre : 'fiction',publish : 1981,edition :2004

    },
    {
         title : 'Book Two',genre : 'Non - fiction',publish : 1992,edition :2008
    },
    {
         title : 'Book three',genre : 'History',publish : 1999,edition :2007
    },
    {
         title : 'Book four',genre : 'Non - fiction',publish : 1989,edition :2010
    },
    {
         title : 'Book five',genre : 'Science',publish : 2009,edition :2014
    },
    {
         title : 'Book six',genre : 'fiction',publish : 1987,edition :2010
    },
    {
         title : 'Book seven',genre : 'History',publish : 1986,edition :1996
    },
    {
         title : 'Book eight',genre : 'science',publish : 2011,edition :2016
    },
    {
         title : 'Book nine',genre : 'non-fiction',publish : 1981,edition :1989
    }
]

const userBooks = books.filter((bk) => bk.genre === 'History')

const usB = books.filter((bk) => {
    return  bk.publish >= 1995 && bk.genre === "History"} )
console.log(userBooks);
console.log(usB);


