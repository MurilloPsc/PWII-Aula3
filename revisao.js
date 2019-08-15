var n1 = 10;
var n2 = 9;
//total = nota1 + nota2 + nota3
//total = total/3
var fMedia = function (n1, n2, n3) {
    if (n3 === void 0) { n3 = 8; }
    return (n1 + n2 + n3) / 3;
};
console.log("A m\u00E9dia \u00E9 : " + fMedia(n1, n2));
