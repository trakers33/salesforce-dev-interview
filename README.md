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
    public static Boolean isUnique(){
        if(calculateTotal().size() == 1){
            return true;
        }else{
            return false;
        }
    }

    @AuraEnabled
    public static String getTotalOfAccountInString(){
        String result = '';
        this.myTotal = this.calculateTotal();
        if(this.myTotal > 0){
            if(this.myTotal > 1){
                if(this.myTotal > 2){
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

### Question n°2
How would you optimize this code ?
```java
public static class InterviewClass{

    public static String customAccountQuery = System.label.CustomAccountQuery;

    public static void sendEmailsToSupport(){
        String subject = 'Subject Test';
        String body = 'Body Test';
        List<Account> accounts = [SELECT Id,Name from Account];
        for(Account acc : accounts){
            for(Contact contact : [SELECT Email from Contact where AccountId =: acc AND Title like '%support%']){
                sendSingleEmail(subject,body,contact.Email);
            }
        }
    }

    public static void sendSingleEmail(subject,body,email){
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
            message.toAddresses = new String[] {email};
            message.subject = subject;
            message.plainTextBody = body;
        Messaging.SingleEmailMessage[] messages = new List<Messaging.SingleEmailMessage>{message};
        Messaging.sendEmail(messages);
    }

}
```
### Question n°3 :
What is the value of the variable "Result" ? 
```js
upsert new List<Account>();
Boolean result = Limits.getDMLStatements() == 0;
```

### Question n°4 :
What is the value of the variable "Result" ? 
```js
List<Account> a1 = [SELECT ID FROM Account];
List<Account> a2 = [SELECT ID FROM Account];
Boolean result = a1 == a2;
```

### Question n°5 :
What is the value of the variable "Result" ? 
```js
Account a = new Account(Name = 'Hello');
insert a;
List<Object> accounts = [SELECT (Select ID from Contacts) FROM Account WHERE ID > :a.Id];
Integer result = accounts.size();
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
    result = [];
    
    /* Custom method simulating an asynchronous action **/
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
