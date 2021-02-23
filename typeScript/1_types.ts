// указиваем тип даний 
const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 43
const float: number = 3.4
const num: number = 4e10
const message: string = 'Hello Typescript'

/// массив
const nuberArray: number[] = [1,2,4,6,,8,0,6,7,8,9,6,5,44,]
const nuberArray1: Array<number> = [1,2,4,6,,8,0,6,7,8,9,6,5,44,]
const worlds: string[] = ['sff','sfjsf','sfsjgfks']

//Tuple
// const contact: [ number, string] = ['Azam','739699581']

//Any для много типов 
let variable: any = 42
variable = 'hello'

//====== function void значить ничего не возрашать
function sayMyName(name: string): void{
console.log(name)
}
sayMyName('Azam')

// новый тип Never  постояний работа функция
function throwError(message: string): never{
throw new Error(message);
}

function infinite(): never{
while(true){

}
}

// type создать свои type
type Login = string
const login: Login = 'pabek92'

type ID = string | number
const id: ID = 1234
const id1: ID = 'skfgkjsg'

type SomeType = string | null | undefined | true | false
