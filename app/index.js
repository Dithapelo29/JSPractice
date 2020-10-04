let p = new Promise((resolve,reject)=>{
    reject('Promise rejected data');
})

p.then(response => console.log(response))
.catch(err => console.log(err));