

// const fetch = require('node-fetch');

// const fetchData = async (userId) => {
//     try {
//         const response = await fetch(`https://api.example.com/users/${userId}`) 
//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         throw error; 
//     }

// }



// function processData(userData){

//     return `Hey I have processed your Data here it is -- ${userData.name}`
// }




// async function getUserInfo(userId){

//     try {
//         const result = await fetchData(userId);
//         const processResult = processData(result);
//         return processResult;
//     } catch (error) {
//         return `Error Processing User Data`
//     }

// }


// module.exports = getUserInfo;