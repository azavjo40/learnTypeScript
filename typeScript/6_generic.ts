// generic type 
const arrayOfNumers: Array<number> =[1,2,3,4,5,6,7,8,9,9]
const arrayOfString: Array<string> =['hello', 'bay']


// работать с много типов массив T означаеть много тип даний 
function reverse<T>(array: T[]): T[] {
return array.reverse()
}
reverse(arrayOfNumers)
reverse(arrayOfString) //))))



