let product = [
	{
		name: "leche",
		price: 1.79,
	},
	{
		name: "manzanas",
		price: 2.39,
	},
	{
		name: "merluza",
		price: 7.57,
	},
	{
		name: "pollo",
		price: 5.89,
	},
	{
		name: "arroz",
		price: 1.99,
	},
];

let totalProduct = product.reduce((total, obj) => {
	return total + obj.price;
}, 0);

console.log(totalProduct);
