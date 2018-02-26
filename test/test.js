setTimeout(() => {
    console.log(1)
    setTimeout(() => {console.log(2)}, 300)
}, 20)
setTimeout(() => {console.log(5)}, 500)
setTimeout(() => {console.log(3)}, 300)
const timeoutScheduled = Date.now();
while (Date.now() - timeoutScheduled < 600) {}
console.log(4)
