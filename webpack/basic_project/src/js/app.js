import '../css/common.css'
import '../css/style.less'
function getData() {
    let promise = new Promise((resolve, reject) => {
        let key = ~~(Math.random() * 10)
        let temp = ['es6', 'babel']
        if (key >= 5) {
            let obj = {
                msg: 'OK',
                data: [key, ...temp]
            }
            resolve(obj)
        } else {
            let obj = {
                msg: 'error',
                data: [key, ...temp]
            }
            reject(obj)
        }
    })
    return promise
}

let container = document.querySelector('#app')
getData().then((data) => {
    container.innerHTML = JSON.stringify(data)
}, (err) => {
    container.innerHTML = JSON.stringify(err)
})