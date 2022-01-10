import React from "react";

import { RiUserLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

export const userMenu = [
	{
		icon: <RiUserLine />,
		content: "Profile",
	},
	{
		icon: <BiCog />,
		content: "Settings",
	},
	{
		icon: <IoMdLogOut />,
		content: "Logout",
	},
];
