import React from "react";

import { IoIosHelpCircle } from "react-icons/io";
import { IoPizza } from "react-icons/io5";
import { GiMeat } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiHome7Fill, RiLineChartFill } from "react-icons/ri";
import { BiCustomize, BiCog } from "react-icons/bi";

export const sidebarData = [
	{
		title: "Dashboard",
		route: "/",
		icon: <RiHome7Fill />,
	},
	{
		title: "Produtos",
		route: "/produtos",
		icon: <BiCustomize />,
		iconClosed: <MdKeyboardArrowDown />,
		iconOpened: <MdKeyboardArrowUp />,
		subNav: [
			{
				title: "Pizzas",
				route: "/produtos/pizzas",
			},
			{
				title: "Açougue",
				route: "/produtos/acougue",
			},
			{
				title: "Config Produtos",
				route: "/produtos/configProd",
			},
		],
	},
	{
		title: "Pizzas",
		route: "/pizzas",
		icon: <IoPizza />,
		iconClosed: <MdKeyboardArrowDown />,
		iconOpened: <MdKeyboardArrowUp />,
		subNav: [
			{
				title: "Categorias",
				route: "/pizzas/categorias",
			},
			{
				title: "Sabores",
				route: "/pizzas/sabores",
			},
			{
				title: "Ingredientes",
				route: "/pizzas/ingredientes",
			},
			{
				title: "Totens",
				route: "/pizzas/totens",
			},
		],
	},
	{
		title: "Açougue",
		route: "/acougue",
		icon: <GiMeat />,
		iconClosed: <MdKeyboardArrowDown />,
		iconOpened: <MdKeyboardArrowUp />,
		subNav: [
			{
				title: "Produtos",
				route: "/acougue/produtos",
			},
			{
				title: "Tabela de Preços",
				route: "/acougue/tabelaprecos",
			},
			{
				title: "Paineis/Telas",
				route: "/acougue/paineis&telas",
			},
		],
	},
	{
		title: "Relatórios",
		route: "/relatorios",
		icon: <RiLineChartFill />,
	},
	{
		title: "F.A.Q",
		route: "/help",
		icon: <IoIosHelpCircle />,
	},
	{
		title: "Configurações",
		route: "/config",
		icon: <BiCog />,
		iconClosed: <MdKeyboardArrowDown />,
		iconOpened: <MdKeyboardArrowUp />,
		subNav: [
			{
				title: "Sistema",
				route: "/config/sistema",
			},
			{
				title: "Usuários",
				route: "/config/usuarios",
			},
			{
				title: "Lojas",
				route: "/config/lojas",
			},
		],
	},
];
