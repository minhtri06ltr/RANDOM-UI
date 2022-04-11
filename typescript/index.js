//generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var lastNumber = last([1, 2, 3]);
console.log(lastNumber);
var lastT = function (arr) { return arr[arr.length - 1]; };
var lastString = lastT(['minhtri', 'hcmue']);
console.log(lastString);
var makeT = function (x) { return [x]; };
var makeXY = function (x, y) { return [x, y]; };
//generic extend
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " + ").concat(obj.lastName) })); };
var a1 = makeFullName({ firstName: 'ly', lastName: 'minhtri', age: 22, gender: false });
console.log(a1);
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var a2 = addNewEmployee({ name: 'minhtri', job: 'dev', age: 22 });
console.log(a2);
var rone = {
    uid: 1,
    name: 'tri',
    data: 'hello'
};
