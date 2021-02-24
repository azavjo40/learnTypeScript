///guards спомогателний с типом
function strip(x: string | number){
if(typeof x === 'number'){
    return x.toFixed(2)
}
return x.trim()
}

// ===============
type AlertType = 'succcess' | 'danger' | 'warning'

function setAlertType(type: AlertType){
    //....
}
 setAlertType('succcess')
 setAlertType('warning')
//  setAlertType('defuald')

