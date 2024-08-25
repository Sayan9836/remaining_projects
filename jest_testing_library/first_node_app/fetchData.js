

const fetchData = (value) => {
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            if (value === 'web') {
                resolve(value);
            }else{
                reject(value)
            }
        }, 1000);
    })
}


module.exports = fetchData;