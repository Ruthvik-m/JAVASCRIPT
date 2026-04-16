const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros)
console.log(marvel_heros[3][1])//flash

const allHeros = marvel_heros.concat(dc_heros)//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ] =>limit 2
console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros]//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]=> no limit
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Ruthvik"))//false
console.log(Array.from("Ruthvik"))//["R","u","t".........,"k"]
console.log(Array.from({name : "ruthvik"}))//doent convert (intreesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]


