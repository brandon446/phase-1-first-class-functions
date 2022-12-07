 function receivesAFunction(callback){

    return callback();
}
    receivesAFunction( function(){
        return 5+5;
    });
    let x= function returnsANamedFunction() {

       return returnsANamedFunction;
    };
    function returnsANamedFunction (){
        return function namedFunction(){};
      }

      const returnsAnAnonymousFunction = function(){
        return "returns an anonymous function" , function(){}
      }
   