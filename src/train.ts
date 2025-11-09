//** TASK-R **//

function calculate(str: string): number {
  const parts = str.split("+");
  let sum = 0;

  for (let i = 0; i < parts.length; i++) {
    sum += Number(parts[i]);
  }

  return sum;
}

console.log(calculate("15+15"));

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
