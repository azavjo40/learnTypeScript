///guards спомогателний с типом
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
function setAlertType(type) {
    //....
}
setAlertType('succcess');
setAlertType('warning');
//  setAlertType('defuald')
