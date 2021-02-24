//интерфейси  как тип создаем 
interface Rect {
    //readonly только для чтения
readonly id: string
//? знак вопрос означаеть не обязательно
color?: string
size: {
    width: number
    height: number
}
}

const rect1: Rect = {
    id: "1234",
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: "123443",
    size: {
        width: 220,
        height: 310
    },
}
rect2.color = "edsgsg"
// as указьваеть как 
const rect3 = {} as Rect
//старий запис 
const rect4 = <Rect> {} 

//======  extends значить унаследовать
interface RectWidthArea extends Rect {
getArea: ()=> number
}

const rect5: RectWidthArea = {
    id: "123",
    size: {
        width: 220,
        height: 310
    },
  getArea(): number{
      return this.size.width * this.size.height
  }  
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

// ===== много interfece валидний тоесть для строковий строка для нумер нумер
interface Style {
[key: string]: string
}
const css: Style = {
    border: '1px solid black',
    marginTop: '2px'
}


