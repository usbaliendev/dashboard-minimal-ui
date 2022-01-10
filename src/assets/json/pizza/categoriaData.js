import React from "react";

//import pizzaCategorias from "../../../assets/JsonData/pizza_categoria.json";

export const chartCategoriaData = {
	series: [
		{
			name: "Pizzas Doces",
			data: [5, 14, 20, 35, 37],
		},
		{
			name: "Pizzas Salgadas",
			data: [8, 18, 36, 54, 62],
		},
		{
			name: "Pizzas Especiais",
			data: [3, 7, 11, 15, 19],
		},
	],
	options: {
		color: ["#6ab04c", "#2980b9", "#d68102"],
		chart: {
			background: "transparent",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: [4, 4],
		},
		xaxis: {
			categories: ["05", "10", "15", "20", "25", "30"],
		},
		legend: {
			position: "bottom",
		},
		grid: {
			show: false,
		},
	},
};

export const categoryRows = [
	{
		id: 15,
		categoria: "Pizzas Doces",
		qtde: 6,
		precode: 16.99,
		precopor: 16.99,
		status: "Ativado",
	},
	{
		id: 14,
		categoria: "Pizzas Salgadas",
		qtde: 6,
		precode: 16.99,
		precopor: 16.99,
		status: "Ativado",
	},
	{
		id: 13,
		categoria: "Pizzas Especiais",
		qtde: 6,
		precode: 16.99,
		precopor: 16.99,
		status: "Desativado",
	},
	{
		id: 12,
		categoria: "Pizzas Premium",
		qtde: 6,
		precode: 16.99,
		precopor: 16.99,
		status: "Desativado",
	},
];
