import { useRef } from "react";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";

export const RAFileBuilder = ({ fileContents }: { fileContents: string }) => {
	//console.log(JSON.parse(fileContents ?? JSON.stringify({})))
	return <>{fileContents}</>;
};
