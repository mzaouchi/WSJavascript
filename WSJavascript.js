// console.log("Hello Bringa")


// JavaScript Data Types

// var ch = 'Monlka'
// console.log(ch) 
// console.log(typeof(ch))

// var nbr = 9
// console.log(typeof(nbr))

// var bool = true
// console.log(typeof(bool))

// var tab = [3,2,45,'Hachem',true,bool]
// console.log(tab[3])
// console.log(typeof(tab))

// var sahla = {name : 'Sofiene',age:26,isDrive : true}
// console.log(sahla)
// console.log(typeof(sahla))
// console.log(sahla.age)
// var hachem = Object.keys(sahla)
// console.log(hachem)
// console.log(Object.values(sahla))
// console.log(Object.entries(sahla))

// var z 
// console.log(typeof(z))

// var e = null
// console.log(typeof(e))

// JavaScript Operators

var a = 5
var b = 2

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// a++
// a = a + 1
// a--
// a = a-1
// console.log(a)

// EQUALITY OPERATORS

// var a = 5
// var b = 3
// var c = '5'

// console.log(a)
// console.log(a==b)
// console.log(a==c)
// console.log(a===b)
// console.log(a===c)

// console.log(a!=b)
// console.log(a!=c)
// console.log(a!==b)
// console.log(a!==c)

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// LOGICAL OPERATORS
// var c = 7
// var t = 9
// console.log(true&&false)

// console.log(t>c && c==t)
// console.log(t>c || c==t)

// JavaScript Conditionals

// function Sum(a,b){
//     return a+b
// }

// var x = 20
// var z = 10
// var d = Sum(3,9)
// console.log(Sum(x,z))
// console.log(d)

function testP(sahla){
    if(sahla>=0){
      return sahla + ' est positif'
    }else{
      return sahla + ' est negatif'
    }
}


var hachem = 7

console.log(testP(-690))

var x = 12

switch(x){
  case 7 : console.log('Sept')
  break
  case 5 : console.log('Cinq')
  break
  default : console.log('Ni cinq ni sept ')
}

// JavaScript Loops

var tab = [1,2,3,4,5,6]

// for(var i = 0;i<tab.length;i++){
//   console.log(tab[i])
// }

// for (var key in tab){
//   console.log(tab[key])
// }

// for(var mahmoud of tab){
//   console.log(mahmoud)
// }

While 

var tab = [1,2,3,4,5,6]

// var i = 0

// while(i<tab.length){
//   console.log(tab[i])
//   i++

// }

do while

// var tab = [1,2,3,4,5,6]

// var i = 9

// do{
//   console.log(tab[i])
//   i++
// }while(i<tab.length)



var sofiene = [2,4,8,5,9,3]
var hichem = [4,-64,8,-5,9,3]

function MinMaxSahla(tab){
  var minmolka = tab[0] //2
  var maxmolka = tab[0] //2

  for(var i = 0;i<tab.length;i++){
    if(tab[i]<minmolka){
      minmolka = tab[i]
    }

    if(tab[i]>maxmolka){
      maxmolka = tab[i]
    }
  } 
  return [minmolka,maxmolka]
}

console.log(MinMaxSahla(sofiene))
console.log(MinMaxSahla(hichem))









