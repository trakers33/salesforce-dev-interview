

var object = {
    value: 0,
    increment : function(){
        this.value = this.value +1;
    },
    decrement : () =>{
        this.value = this.value -1;
    }
};


object.increment();
object.decrement();


/** 
 *    What is the value of object.value ? 
 * */

console.log(object.value);