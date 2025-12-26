//** TASK-ZJ **//

function reduceNestedArray(arr: any[]): number {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += reduceNestedArray(item);
    } else if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));

//================================================================//

//** TASK-ZI **//

// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, 3000);
//   });
// }

// delayHelloWorld("3 soniya kutib turing Sherxon aka:)").then((res) => {
//   console.log(res);
// });

//================================================================//

//** TASK-ZH **//

// function findDisappearedNumbers(arr: number[]): number[] {
//   const max = Math.max(...arr);
//   const set = new Set(arr);
//   const result: number[] = [];

//   for (let i = 1; i <= max; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7, 9]));

//================================================================//

//** TASK-ZG **//
// function toSnakeCase(str: string): string {
//   return str.toLowerCase().trim().replace(/\s+/g, "_");
// }

// console.log(toSnakeCase("my name is michael"));

//================================================================//

//** TASK-ZF **//

// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => {
//       if (word.length <= 2) return word;
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(capitalizeWords("my name is michael"));

//================================================================//

//** TASK-ZE **//

// function removeDuplicate(s: string): string {
//   const seen = new Set<string>();
//   let result = "";

//   for (const ch of s) {
//     if (!seen.has(ch)) {
//       seen.add(ch);
//       result += ch;
//     }
//   }

//   return result;
// }
// console.log(removeDuplicate("stringg"));

//================================================================//

//** TASK-ZD **//

// function changeNumberInArray(
//   targetIndex: number,
//   arr: number[],
//   newValue: number
// ): number[] {
//   if (targetIndex < 0 || targetIndex >= arr.length) {
//     throw new Error("Index arraydan tashqarida!");
//   }

//   const newArray = [...arr];
//   newArray[targetIndex] = newValue;

//   return newArray;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

//================================================================//

//** TASK-ZC **//

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// // test
// console.log(celsiusToFahrenheit(0));

//================================================================//

//** TASK-ZA **//

// interface Person {
//   age: number;
// }

// function sortByAge(arr: Person[]): Person[] {
//   return arr.sort((a, b) => a.age - b.age);
// }
// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

//================================================================//

//** TASK-Z **//

// function sumEvens(arr: number[]): number {
//   return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
// }

// console.log(sumEvens([11, 14, 17, 6]));

//================================================================//

//** TASK-Y **//

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value) => arr2.includes(value));
// }

// console.log(findIntersection([5, 7, 9], [9, 7, 3]));

//================================================================//

//** TASK-W **//

// function countOccurrences(obj: any, targetKey: string): number {
//   let count = 0;

//   function recursiveCheck(current: any) {
//     if (typeof current !== "object" || current === null) return;

//     for (const key in current) {
//       if (key === targetKey) count++;

//       recursiveCheck(current[key]);
//     }
//   }

//   recursiveCheck(obj);
//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "model"
//   )
// );

//================================================================//

//** TASK-W **//

// function chunkArray<T>(arr: T[], size: number): T[][] {
//   const result: T[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

//================================================================//

//** TASK-V **//

// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (const char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log(countChars("michael"));

//================================================================//

//** TASK-U **//

// function sumOdds(n: number): number {
//   return Math.floor(n / 2);
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

//================================================================//

//** TASK-T **//

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

//================================================================//

//** TASK-S **//

// function missingNumber(nums: number[]): number {
//   for (let i = 0; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// // Test
// console.log(missingNumber([3, 0, 1]));

//================================================================//

//** TASK-R **//

// function calculate(str: string): number {
//   const parts = str.split("+");
//   let sum = 0;

//   for (let i = 0; i < parts.length; i++) {
//     sum += Number(parts[i]);
//   }

//   return sum;
// }

// console.log(calculate("15+15"));

//================================================================//

//** TASK-P **//

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ Michael: 23, MIT: 31 }));

//================================================================//

//** TASK-O **//

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([5, "77", { son: 1005 }, false, 15]));

//================================================================//

//** TASK-N **//

// function palindromCheck(str: string): boolean {
//   const cleaned = str.toLowerCase().replace(/\s+/g, "");
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// }

// console.log(palindromCheck("mom"));
// console.log(palindromCheck("world"));

//================================================================//

// //** TASK-M **//

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   return numbers.map((num: number) => {
//     return {
//       number: num,
//       square: num * num,
//     };
//   });
// }
// const result = getSquareNumbers([2, 5, 7]);
// console.log(result);

// //================================================================//

//** TASK-L **//

// function reverseSentence(str: string): string {
//   const words = str.split(" ");
//   const reversedWords = words.map((word) => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }

// console.log(reverseSentence("I am from UZBEKISTAN"));

//================================================================//

//** TASK-K **//

// function countVowels(str: string): number {
//   const vowels: string[] = ["a", "e", "i", "o", "u"];
//   let count: number = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("marvel"));

//================================================================//

//** TASK-J **//

// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");

//   let longest = "";

//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }
// console.log(findLongestWord("My name is Michael"));

//================================================================//

/** TASK-I **/
// function majorityElement(arr: number[]): number {
//   const count: Record<number, number> = {};

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   let maxCount = 0;
//   let majority: number = arr[0];

//   for (const num in count) {
//     const value = count[Number(num)];
//     if (value > maxCount) {
//       maxCount = value;
//       majority = Number(num);
//     }
//   }

//   return majority;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

//================================================================//

//** TASK-H-2 **//

// function getDigits(s: number | string): string {
//   return String(s).replace(/\D/g, "");
// }

// // Misol:
// console.log(getDigits("m14i1t"));

//================================================================//

//** TASK-H **//

// function getPositive(arr: number[]): string {
//   const positiveNums = arr.filter((num) => num > 0);
//   return positiveNums.join("");
// }

// console.log(getPositive([18, -22, 29]));

//================================================================//

//** TASK-G **//

// function getHighestIndex(arr: number[]): number {
//   if (!Array.isArray(arr) || arr.length === 0) return -1;

//   let maxVal = arr[0];
//   let maxIdx = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//       maxIdx = i;
//     }
//   }

//   return maxIdx;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));

//================================================================//
