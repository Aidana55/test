//1
const regExp = /^\d + $/
let containsOnlyDigits = (str) => {
    if (regExp){
        console.log('123456')

    }else{
        console.log('12q34')
    }

}
containsOnlyDigits()


//2

const interval = () => {
    console.log('прошла секунда')
}
setInterval(interval, 1000)


//3
let counts = 0
const count = () => {
    counts++
    console.log(counts)
    if (counts < 10){
        count()
    }

}
count()

//5
const xhr = new XMLHttpRequest()
xhr.open("GET", "json.json")
xhr.setRequestHeader()
xhr.send()
