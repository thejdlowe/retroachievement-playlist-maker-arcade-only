import { useEffect } from "react";
import { splitFileName } from "./RAFileBuilder.helper";
import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";

export const RAFileBuilder = () => {
	const {fileContents} = usePlaylistMakerContext();
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
                const fileName = splitFileName(path);
				console.log(fileName);
			});
		}
	}, [fileContents]);
	return <>{fileContents}</>;
};
