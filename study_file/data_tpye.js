// primitive data type : number, string, boolean, null, undefined, symbol (원초적인 data type)
// structured data type : object and array (복합적인 data type)

// number = integer, float, fractional, real number, unreal number

// dynamic typing : 아래와 같이 다른 data type으로 바뀌는 것 (js의 특징)
// 대신 이러한 방법이 장점인가?? 나는 아니라고 본다. 
// 코드가 복잡해질 수 있으며 이로인한 오류도 쉽게 발생한다고 본다.
let num=12
num=1.2
num='asd'

// String 
let str="Double quotes"
let str2='single quotes'
let phrase=`backtick can embed ${srt}`//이 방식은 파이썬의 f 포멧팅과 유사하며 {srt} 안에 있는 srt를 출력해준다. 

// boolean
let a=true
let b=false

// null
let age=null

// undefined
let x
console.log(x)// x는 아직 특정 value로 할당이 안되어 있기에 undefined가 발생
