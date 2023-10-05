let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 12, 14, 15, 18, 19, 20];

let evenArr = numbersArr.filter((number) => {
	return number % 2 === 0;
});
console.log(numbersArr);
console.log(evenArr);
