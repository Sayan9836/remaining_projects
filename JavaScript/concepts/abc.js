// const set=new Set()

// set.add(1)
// set.add(undefined);
// set.add(undefined);
// console.log(set.size);

// const arr=new arr(2);
// arr[3]=4;
// console.log(arr.size);

// var lengthOfLongestSubstring = function(s){
//     let start = 0;
//     let end = 0;
//     const set = new Set();
//     let max=0;
//     while(end < s.length){

//         if(!set.has(s[end])){
//             set.add(s[end]);
//             max= Math.max(max,set.size);
//             end++;
//         }else{
//             set.delete(s[start]);
//             start++;
//         }
//     }
//     return max;
// }

// const ans = lengthOfLongestSubstring("abcdcdkhdudcb");
// console.log(ans);

// var isPalindrome = function(s){
//     let i=0;
//     let j=s.length-1;

//     while(i<j){
//         if(s.charAt(i) !== s.charAt(j)){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;

// }

// const result = isPalindrome("abcdcba");
// console.log(result);

// const map=[];
// function getCharString(str){
//     str.split("").forEach((element)=>{
//         if(element.charCodeAt(0)>=65 && element.charCodeAt(0) <= 90 || element.charCodeAt(0)>=97 && element.charCodeAt(0) <= 122 )
//         map[element] = map[element]?map[element] + 1 :1;

//     });
//     let max=0;
//     let ans=str[0];
//     for(let k in map){
//         if(map[k] > max){
//             max =map[k];
//             ans=k;
//         }
//     }
//     console.log(map);
//     return ans;
// }

// const result = getCharString("Hello  $@%!World");

// console.log(result);

// function insersionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i];
//         let j = i - 1
//         while (j >= 0 && arr[j] > curr) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = curr;
//     }
//     return arr;
// }
// const arr = [8, 7, 6, 5, 4, 3, 2, 1];
// const result = insersionSort(arr)
// console.log(result);

// function selectionSort(arr1) {

//     for (let i = 0; i < arr1.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr1.length; j++) {
//             if (arr1[j] < arr1[min]) {
//                 min = j;
//             }
//         }
//         if(min!==i){
//             temp= arr1[i];
//             arr1[i] = arr1[min];
//             arr1[min] = temp;
//         }
//     }
//     return arr1;
// }

// let arr1 = [9, 8, 7, 6, 5, 4];
// const result1 = selectionSort(arr1);
// console.log(result1);

// function fibo(arr){
//   if(n === 0 || n < 0){
//     return 0
//   }
//   if(n===1){
//     return 1;
//   }

//   return fibo(n-1)+fibo(n-2);
//   let result = [];
// let n = arr.length;
//   for(let i=0;i<n;i++){
//     result.push(arr[i]);
//   }
//   result.pop();
//   return result;
// }

// const value = fibo(arr);
// console.log(value);

// let newArray =[1,6,79,4];

// const output=newArray.map((ele,idx)=>{
//   return ele*2;
// })

// const output = newArray.reduce((max,present)=>{
//    if(present > max){
//      max = present;
//    }
//    return max;
// },Number.MIN_VALUE)

// console.log(output);

// const filter = newArray.filter((ele,idx) => {
//   return ele%2 == 0;
// })

// console.log(newArray);
// console.log(filter)
// console.log(output);

//  function isValid(str) {
//   const map ={'(':')','[':']','{':'}'};
//   let stack=[];
//    for(let ch of str){
//     if(map[ch]){
//       stack.push(map[ch]);
//     }else{
//       if(stack.length > 0 && stack[stack.length-1] === ch){
//         stack.pop();
//       }else{
//         return false;
//       }
//     }
//    }
//    return stack.length === 0;
//  }

//  const boolean = isValid("()()(]");

//  console.log(boolean);

// function isAnagram(s,t) {
//   const S=s.split("").sort().join("");
// const T=t.split("").sort().join("");

// return S === T;
// }

// var isAnagram = function(s, t) {
//   if(s.length !== t.length){
//       return false;
//   }

// const map1 = {};
// const map2 = {};
// for(let i=0;i<s.length;i++){
//     element1 = s[i];
//     element2 = t[i];
//     map1[element1] = (map1[element1] || 0) + 1;
//     map2[element2] = (map2[element2] || 0) + 1;
//  }

//  console.log(map1,map2);

//  for(let i in map1){
//      if(map1[i] !== map2[i]){
//          return false;
//      }
//  }
//  return true;
// };

// console.log(isAnagram("ansvdg","ahsgdb"));

// var plusOne = function(digits) {
//   let carry = 1;
//   for(let i=digits.length-1;i>=0;i--){
//       let value = digits[i] + carry;
//       digits[i] = value%10;
//       carry=~~(value/10);
//   }
//   if(carry === 1){
//       return [1,...digits];
//   }
//   return digits;
// };

// const arr = [1, 2, 3, 7, 5];

// function subarraySum(arr, S) {
//   let start = 0;
//   let end = 0;
//   let max = 0;
//   let sum = 0;
//   let flag = true;
//   let list = [];
//   while (end < arr.length) {
//     sum += arr[end];
//     flag = false;
//     if (sum == S) {
//       if (end - start + 1 > max) {
//         max = end - start + 1;
//         list.push(start + 1);
//         list.push(end + 1);
//         return list;
//       }

//     }

//     while (sum > S) {
//       sum -= arr[start];
//       start++;
//       if (sum == S) {
//         if (end - start + 1 > max) {
//           max = end - start + 1;
//           list.push(start + 1);
//           list.push(end + 1);
//         }
//         return list;
//       }
//     }
//     end++;
//   }
//   return list;
// }

// const result = subarraySum(arr, 12);

// console.log(result);

// class Node {
//    constructor(value) {
//     this.value = value;
//     this.next = null;
//    }
// }

// class LinkedList {
//   constructor(){
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if(this.isEmpty()){
//       this.head = node;
//     }else{
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);
//     if(this.isEmpty()){
//       this.head = node;
//     }else{
//       this.head.next = node;
//     }
//     this.size++;
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log('list is Empty');
//     }else{
//       let curr = this.head;
//       let listValues = '';
//       while(curr){
//         listValues +=`${curr.value} `;
//         curr=curr.next;
//       }
//       console.log(listValues);
//     }

//   }
// }

// const list = new LinkedList();
// console.log('List is empty?', list.isEmpty());
// console.log('List size', list.getSize());

// list.prepend(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.print();
// list.append(90);
// list.append(40);
// list.print();
// console.log(list.getSize());

// const arr1 = [4,9,5];
// const arr2= [9,4,9,8,4];
// function intersection(arr1,arr2){
//   arr1.sort((a,b) => a-b);
//   arr2.sort((a,b) => a-b);

//   let i=0;
//   let j=0;
//   const result =[];
//   while (i<arr1.length && j<arr2.length) {
//     if(arr1[i] == arr2[j]){
//       result.push(arr1[i]);
//       i++;
//       j++;
//     }else if(arr1[i] < arr2[j]){
//       i++;
//     }else{
//       j++;
//     }
//   }
//   return result;
// }

// console.log(intersection(arr1,arr2));

// function frequency(arr){
//     const map = new Map();

//     for(let ele of arr){
//         map.set(ele,(map.get(ele) || 0)+1);
//     }
//     if(map.has(2)){
//         console.log(map.get(3));
//     }
//     for(let [key,value] of map.entries()){
//         console.log(key,value);
//     }
//     return map;
// }

// const arr = [1,2,4,1,3,4,1,2,8,4,9,5,8];
// frequency(arr);

//  function plusOne(arr){
//     let n = arr.length;
//     let carry = 1;
//     for(let i=n-1;i>=0;i--){
//         let currValue = arr[i] + carry;
//         arr[i] = currValue%10;
//         carry = Math.floor(currValue/10);
//     }
//     if(carry == 1){
//         arr=[1,...arr];
//     }

//     return arr;
// }
// let  arr= [9,8,9];
// const result =  plusOne(arr);
// console.log(result);

// const infinity =  () => {
//     for(let i=0;i>-1;i++){
//         console.log(Math.random());
//     }
// }

// infinity();

//  function frequency(arr) {
//     const map = new Map();

//     for(let ele of arr){
//         map.set(ele,(map.get(ele) || 0) + 1)
//     }

`//     for(let [key,value] of map.entries()) {
`; //         console.log(key +":"+ value);
//     }
//  }

//  const result = frequency([1,2,3,4,5,1,2,4,6,2,1,4,3,5,6]);

// function rearrange(arr){
//     let n = arr.length;
//     let i=0;
//     let j=n-1;
//     while(i<j){
//         if((arr[i]&1) == 0){
//             // swap(arr,arr[i],arr[j]);
//             [arr[i],arr[j]] = [arr[j],arr[i]];
//             j--;
//         }else{
//             i++;
//         }
//     }

//     return arr;
// }

// console.log(rearrange([1,11,3,4,5,6,7,8,9]));

// const removeDuplicate = (arr) => [...new Set(arr)];

// console.log(removeDuplicate([1,2,2,2,4,5,7,7]));

// const arr = [1,2,0.5,4,56,7];
// const max = arr.reduce((acc,curr)=>{
//     if(curr < acc){
//         acc = curr;
//     }
//     return acc;
// },Number.MAX_VALUE)

// console.log(max);

// class customSet {

//     constructor(){
//       this.items = {};
//     }

//     addElement(element) {
//         if (!this.findElement(element)) {
//             this.items[element] = element;
//             return true;
//           }
//           return false;
//     }

//     findElement(element) {
//         return Object.prototype.hasOwnProperty.call(this.items, element);
//     }

//     deleteElement(element) {
//         if(this.findElement()) {
//          delete this.items[element]
//          return true;
//         }

//         return false;
//     }

//     displayElemets() {
//         console.log(this.items);
//     }
// }

// const set = new customSet();

// set.addElement(10);
// set.addElement(20);

// set.displayElemets();]

// let prices = {
//   banana: 1,
//   orange: 2,
//   mango: 9,
// };

// for(let [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }

//  let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key,value]) => [key,value*2])
//  )

//  console.log(doublePrices)

//  function sumSalaries(prices) {

//    return  Object.entries(prices).reduce((acc,curr) => {
//         return acc + curr[1];
//     },0)
//  }

//  console.log(sumSalaries(prices));

//  console.log(Object.keys(prices).length)

// let prices = {
//   banana: 1,
//   orange: 2,
//   mango: 9,
// };

// const sumOfPrices = (prices) => {
//   return Object.entries(prices).reduce((acc, curr) => {
//     return acc + curr[1];
//   }, 0);
// };

// console.log(sumOfPrices(prices));

// let sum = 0;
// for (let [key, value] of Object.entries(prices)) {
//   sum += value;
// }

// console.log(sum);

// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(([key, val]) => [key, val * 2]),
// );

// console.log(doublePrices);

// const calcuFrequency = (arr) => {
//   const map = {};

//   for (let ele of arr) {
//     map[ele] = (map[ele] || 0) + 1;
//   }

//   for (let [key, value] of Object.entries(map)) {
//     console.log({ [key]: value });
//   }
// };

// console.log(calcuFrequency([1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 7, 2, 7, 5]));
