/* Method Decorator example */

/* command for compile and run
    tsc --target ES5 --experimentalDecorators functionDecorator.ts
    node functionDecorator.js

    Note : console log statments for target and descriptor is not printing as expected.
    Out put looks like
    MethodDecorator target is : [object Object]
    MethodDecorator descriptor is : [object Object]

    Discussed issue even with acadgild moderator, even he gets the same outpur like I get.
    Please mail me at keyamehta1210@gmail.com if you know the answer for this problem.

*/
function MethodDecoratorFunction(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log("MethodDecorator target is : " + target)
    for (let p in target) {
        console.log(p);
    }

    console.log("MethodDecorator propertyKey is : " + propertyKey)
    console.log("MethodDecorator descriptor is : " + descriptor)
}

class MethodDecoratorExample {
    @MethodDecoratorFunction
    public dummyMethod(numValue1: number, numValue2: number): number {
        return (numValue1 + numValue2);
    }
}

