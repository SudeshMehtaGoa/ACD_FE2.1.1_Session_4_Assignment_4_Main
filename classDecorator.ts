/* Class Decorator example*/
function classDecoratorFunction(numParam1: number, strParam2: string) {
    return function (
        target: Function
    ) {
        console.log("ClassDecoratorParams - " + numParam1 + " and " + strParam2 + " are called on ", target);
        console.log(" ");
    }
}

@classDecoratorFunction(1, "Sudesh")
@classDecoratorFunction(2, "Rajesh")
class classDecoratorParamsExample {

}

