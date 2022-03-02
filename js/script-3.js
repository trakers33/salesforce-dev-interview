


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


