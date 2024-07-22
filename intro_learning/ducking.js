;
function logPoint(p) {
    console.log("".concat(p.x, " ").concat(p.y));
}
;
var point = { x: 123494, y: 1234 };
logPoint(point);
/*
Structural type system in TypeScript focuses on the shape
of the values have. This is sometime called "duck typing" or
"structural typing".
If two objects have the same shape, they are considered to be
of the same shape.
eg. the user variable is never declared to be User type. However,
TypeScript compares the shape of user to the shape of User in
the type-check. They have the same shape, so the code passes.
*/
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 57);
logPoint(point);


console.log('checking commits')
