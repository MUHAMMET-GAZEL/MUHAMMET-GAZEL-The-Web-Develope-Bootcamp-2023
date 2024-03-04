function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    //this here refers to the window object
}

// if we call Color function ex: Color(255,100,40); the result will be "undefined",
// and that is why we use the "new" operator
//so what "new" basically does,
// it creates a new blank object
// connects the "this" to that object
//then it returns the object

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b},${a})`;
};

const color1 = new Color(40, 50, 60);

