import { useEffect } from "react";
import { splitFileName } from "./RAFileBuilder.helper";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";

export const RAFileBuilder = ({ fileContents }: { fileContents: string }) => {
	//console.log(JSON.parse(fileContents ?? JSON.stringify({})))
	useEffect(() => {
		if (fileContents) {
			console.log(JSON.parse(fileContents));
			const fileObject: {
				items: {
					core_name: string;
					core_path: string;
					crc32: string;
					db_name: string;
					label: string;
					path: string;
				}[];
				default_core_name: string;
				default_core_path: string;
				label_display_mode: number;
				left_thumbnail_mode: number;
				right_thumbnail_mode: number;
				sort_mode: number;
				version: string;
			} = JSON.parse(fileContents);
			fileObject.items.forEach((gameObject) => {
				const path = gameObject.path;
				console.log(splitFileName(path));
			});
		}
	}, [fileContents]);
	return <>{fileContents}</>;
};
