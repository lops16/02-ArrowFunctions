let paints = [
	{
		color: "black",
		type: "contrast",
		brand: "citadel",
		name: "abadonn black",
	},
	{
		color: "red",
		type: "normal",
		brand: "vallejo",
		name: "gory red",
	},
	{
		color: "yellow",
		type: "contrast",
		brand: "citadel",
		name: "imperial fist yellow",
	},
	{
		color: "green",
		type: "air",
		brand: "citadel",
		name: "caliban green",
	},
	{
		color: "thinner",
		type: "auxiliar",
		brand: "vallejo",
		name: "airbrush thinner",
	},
	{
		color: "white",
		type: "normal",
		brand: "vallejo",
		name: "dead white",
	},
];

let paintInfo = paints.map(({ name }) => name);

console.log(paints);
console.log(paintInfo);
