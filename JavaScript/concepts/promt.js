// const input = prompt("enter your name");

// const vowel = "AEIOUaeiou";
// let cnt = 0;
// for (let index = 0; index < input.length; index++) {
//   const element = input[index];
//   if (vowel.includes(element)) {
//     cnt++;
//   }
// }

// console.log(cnt);

// const input = prompt("Enter elements separated by commas (,):");
// const array = input.split(",");

// const vowel = "AEIOUaeiou";
// let cnt = 0;
// for (let index = 0; index < array.length; index++) {
//   const element = array[index].trim(); // Trim to remove any leading or trailing whitespace
//   if (vowel.includes(element)) {
//     cnt++;
//   }
// }

// console.log(cnt);

// Example of taking a 2D array as input from the user
// const input = prompt(
//   "Enter rows of elements separated by commas (,) and each row separated by a newline (\\n):",
// );

// // Split the input into rows
// const rows = input.trim().split("\n");

// // Initialize an empty 2D array
// const array2D = [];

// // Iterate over each row
// for (let i = 0; i < rows.length; i++) {
//   const rowElements = rows[i].split(","); // Split each row into elements
//   const numericElements = rowElements.map((element) =>
//     parseFloat(element.trim()),
//   ); // Convert elements to numbers
//   array2D.push(numericElements); // Push the row into the 2D array
// }

// console.log(array2D);

// const data = navigator.geolocation.getCurrentPosition((location) => {
//   const latitute = location.coords.latitude.toFixed(2);
//   const longitude = location.coords.longitude.toFixed(2);
//   const time = new Date(location.timestamp);
//   console.log(location);
//   console.log(latitute, longitude, time.toLocaleString());
// });
