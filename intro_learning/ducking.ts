interface Point {
    x: number,
    y: number,
};

function logPoint(p:Point){
    console.log(`${p.x} ${p.y}`)
};

const point = {x:123494, y:1234};

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

class VirtualPoint {
    x: number;
    y: number;

    constructor (x:number, y:number){
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13,57);
logPoint(point)

