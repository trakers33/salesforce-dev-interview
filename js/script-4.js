function myRegularFunction() {
  const myArrowFunction = function(){
    console.log(arguments);
  }
  myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b');