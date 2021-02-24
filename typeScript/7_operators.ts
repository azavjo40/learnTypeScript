// operators
interface Person {
name: string
age: number
}

type Personkeys = keyof Person // тут будить name string | age number

let key: Personkeys = 'name'
key = "age" 

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// искулчать какие то полья
type UserNew = Exclude<keyof User, '_id' | 'createdAt'> 

// другая запис указьваем какие полья забрать
type UserMeto = Pick <User, 'name' | 'email'>
