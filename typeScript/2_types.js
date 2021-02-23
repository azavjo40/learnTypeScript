var rect1 = {
    id: "1234",
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: "123443",
    size: {
        width: 220,
        height: 310
    }
};
rect2.color = "edsgsg";
// as указьваеть как 
var rect3 = {};
//старий запис 
var rect4 = {};
var rect5 = {
    id: "123",
    size: {
        width: 220,
        height: 310
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var css = {
    border: '1px solid black',
    marginTop: '2px'
};
