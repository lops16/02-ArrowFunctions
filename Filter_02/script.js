let wordArr = ["palabra", "coche", "día", "mecanico", "letra", "capitan"];

let filteWordArr = wordArr.filter((word) => {
	return word.includes("e");
});

console.log(wordArr);
console.log(filteWordArr);
