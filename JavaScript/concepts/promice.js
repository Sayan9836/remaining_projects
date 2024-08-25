// const cart=['shoe',"pants","kurta"];

// // solution 1
// createOder(cart,()=>{
//     proceedToPayment(orderId);
// });

// proceedToPayment(orderId); //want this to be execute after createOrder

// //solution 2
// const promise=createOder(cart);
// promise.then((orderId)=>{
//     proceedToPayment(orderId)
// })

// // const GET_API="https://www.linkedin.com/in/sayan-maity-8ba151220/";

// // const user=fetch(GET_API);

// // console.log(user);

// // callback Hell
// createOder(cart,(orderId)=>{
//     proceedToPayment(orderId,(paymentInfo)=>{
//      showOrderSummary(paymentInfo,()=>{
//         updateWallet();
//      })
//     })
// })

// // solution of the above problem
// // Promise chaining
// createOder(cart)
// .then((orderId)=> proceedToPayment(orderId))
// .then((paymentInfo)=> showOrderSummary(paymentInfo))
// .then((paymentInfo)=> updateWallet(paymentInfo))

// creating a custom promise;

// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     if (location == "Accenture") {
//       resolve("hello from Accenture");
//     } else {
//       reject("invalid location");
//     }
//   });
// }

// function proceed(responce) {
//   return new Promise((resolve, reject) => {
//     resolve(`Extra detail  ${responce}`);
//   });
// }

// makeRequest('Accenture').then((responce)=>{
//     console.log('Responce recieved');
//     return proceed(responce);
// }).then((proceed)=>{
//     console.log(proceed);
// }).catch((err)=>{
//     console.log(err);
// })

// async function doWork() {
//   try {
//     const responce = await makeRequest("Accenture");
//     console.log("Responce recieved");
//     const proceed2 = await proceed(responce);
//     console.log(proceed2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// doWork();

// //*********************************************************************************** */

// const promisify = () => {
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("promise1")
//       reject("promise1");
//     }, 3000);
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve("promise2")
//       reject("promise2");
//     }, 2000);
//   });

//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise3");
//       // reject('promise3')
//     }, 1000);
//   });

//   Promise.all([promise1, promise2, promise3])
//     .then((response) => {
//       console.log("hey i am in then block", response);
//       // response.map((result) => {
//       //     if(result.status === 'rejected') {
//       //         console.log("error");
//       //         restartProcess();
//       //         return;
//       //     }
//       // })
//     })
//     .catch((err) => {
//       console.log("error occured", err);
//     });
// };

// promisify();

//   Promise.allSettled([]).then(() => {})

//   Promise.race([]).then(() => {})

//   Promise.any([]).then(() => {})

// let cnt = 1;
// let visited = 0;
// const promiseFeching = () => {
//   const promise1 = fetch("https://fakestoreapi.com/products").then((response) =>
//     response.json(),
//   );
//   const promise2 = fetch("https://fakestoreapi.com/products/and")
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
//   const promise3 = fetch(
//     "https://fakestoreapi.com/products/category/jewelery",
//   ).then((response) => response.json());

//   Promise.any([promise1, promise2, promise3])
//     .then((res) => {
//       res?.map(async (result) => {
//         if (result.status === "rejected") {
//           console.log("error -> ", visited + cnt);

//           cnt++;
//           if (cnt > 5) {
//             await delay(4000);
//             cnt = 1;
//             visited = 5 + visited;
//           }

//           restartProcess();
//         }
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// const delay = (sec) => new Promise((resolve) => setTimeout(resolve, sec));

// promiseFeching();

let cnt = 0;
const restartProcess = () => {
  cnt++;
  console.log("restarting -> ", cnt);
  promiseFeching();
};

//*************************promisefetchingDataForYou*****************************//

const promiseFeching = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1");
    }, 1000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2");
    }, 1500);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise3");
    }, 2000);
  });

  Promise.all([promise1, promise2, promise3])
    .then((responce) => {
      responce?.map((res) => {
        console.log("success => ", res);
      });
    })
    .catch((err) => {
      restartProcess();
    });
};

promiseFeching();
