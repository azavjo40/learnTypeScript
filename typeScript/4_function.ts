// function 
function add(a: number, b:number): number{
return a + b
}

function add1(a: string): string{
    return a.trim()
    }

// function с разним параметр 
interface MyPosition {
    x: number | undefined
    y: number| undefined
}
// унаследовать
interface MyPositionDefault extends MyPosition {
default: string
}
function position(): MyPosition
function position(a:number): MyPositionDefault 
function position(a:number, b:number): MyPosition

function position(a?: number, b?:number){
if(!a && b){
    return { x: undefined, y: undefined}
}
if(a && !b){
return {x: a, y: undefined, default: a.toString()}
}
return{x:a, y: b}
}

console.log('Enpty:', position())
console.log('One :', position(42))
console.log('2:', position(10,15))



