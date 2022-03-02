# Salesforce Dev Interview

## Apex 
### Question n°1
How would you optimize this code ?
```java
public static class InterviewClass{

    public static String customAccountQuery = System.label.CustomAccountQuery;
    public Decimal myTotal = 0;

    private static Decimal calculateTotal(){
        
        List<Account> accounts = Database.query(customAccountQuery);
        this.myTotal = accounts.size();
        return this.myTotal;
    }

    @AuraEnabled
    public static String getTotalOfAccount(){
        String result = '';
        this.myTotal = this.calculateTotal();
        if(this.myTotal > 0){
            if(total > 1){
                if(total > 2){
                    result = 'Not Unique'
                }else{
                    result = 'Unique'
                }
            }else{
                result = 'Empty'
            }
        }else{
            result = 'negative'
        }

        return result;
    }

}
```

## Javascript 
### Question n°1 :
What is the difference between theses 2 type of quotes
```js
console.log('') vs console.log(``)
```

### Question n°2 : [Script 1](https://github.com/trakers33/salesforce-dev-interview/js/script-1.js)
What is the value of object.value ?
```js
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

console.log(object.value);
```

### Question n°3 : [Script 3](https://github.com/trakers33/salesforce-dev-interview/js/script-3.js)
How could you optimize this code ?
```js
const data = ['object1','object2','object3','object4'];
const dummyMethod = (key) => key;

export default class InterviewExample {
    result;
    
    loadExample = (key,callback) => {
        let res = dummyMethod(key);
        return callback(res);
    }
    
    loadData = () => {
        loadExample('object1',(res) =>{
            result.push(res);
            loadExample('object2',(res2) =>{
                result.push(res2);
                loadExample('object3',(res3) =>{
                    result.push(res3);
                    loadExample('object4',(res4) =>{
                        result.push(res4);
                    })
                })
            })
        })
    }
}
```