

const marvel_heros = [ "thor", "Ironman", "spiderman" ]
const dc_heros = ["superman", "sinchan", "batman"]

// marvel_heros.push(dc_heros)


// # concating

// console.log(marvel_heros);              // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'sinchan', 'batman' ] ]
// console.log(marvel_heros[3][1]);        // sinchan
                                         //                                ^
                                         //                                | same here
marvel_heros.concat(dc_heros)
// console.log(marvel_heros);              // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'sinchan', 'batman' ] ]


const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                          // [ 'thor', 'Ironman', 'spiderman', 'superman', 'sinchan', 'batman' ]



// 2nd type of concating and( ... )spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 [4, 5]]]
const real_another_array = another_array.flat(Infinity);            // all in one depth provide me

// console.log(real_another_array)


console.log(Array.isArray("gaurav"));                       // output --> false
console.log(Array.from("Gaurav"));                          // output --> [ 'G', 'a', 'u', 'r', 'a', 'v' ]
console.log(Array.from({name: "gaurav"}));                  // output --> []     it is interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log (Array.of(score1,score2,score3));               // output is [100, 200, 300]

