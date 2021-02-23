// function 
function add(a, b) {
    return a + b;
}
function add1(a) {
    return a.trim();
}
function position(a, b) {
    if (!a && b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Enpty:', position());
console.log('One :', position(42));
console.log('2:', position(10, 15));
