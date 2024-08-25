
/*** var is a function scope so every time it does not create a new copy ***/

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}


/** let is a block scope so every time it creates a new copy */

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }


// Using closures 

// for (var i = 1; i <= 5; i++) {
//     function close(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
//     close(i)
// }