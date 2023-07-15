// function wait (millis) {
//     return new Promise (resolve => {
//         setTimeout (() => {
//             resolve = 'resolved';
//             } ,millis)
//     }) 
// }

async function sleep(millis) {
    await new Promise (resolve => setTimeout(resolve, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */