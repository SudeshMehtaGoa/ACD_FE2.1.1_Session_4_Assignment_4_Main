/* Method Decorator example */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* command for compile and run
    tsc --target ES5 --experimentalDecorators functionDecorator.ts
    node functionDecorator.js
*/
function MethodDecoratorFunction(target, propertyKey, descriptor) {
    console.log("MethodDecorator target is : " + target);
    for (var p in target) {
        console.log(p);
    }
    console.log("MethodDecorator propertyKey is : " + propertyKey);
    console.log("MethodDecorator descriptor is : " + descriptor);
}
var MethodDecoratorExample = (function () {
    function MethodDecoratorExample() {
    }
    MethodDecoratorExample.prototype.dummyMethod = function (numValue1, numValue2) {
        return (numValue1 + numValue2);
    };
    return MethodDecoratorExample;
}());
__decorate([
    MethodDecoratorFunction
], MethodDecoratorExample.prototype, "dummyMethod", null);
