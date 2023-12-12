import { useEffect } from "react";
import { Box } from "@mui/material";
import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";
import { splitFileName } from "../RAFileBuilder/RAFileBuilder.helper";
import {Md5} from 'ts-md5';

type gameObjectType = {
    core_name: string;
    core_path: string;
    crc32: string;
    db_name: string;
    label: string;
    path: string;
}
export const RADataDisplay = () => {
	const { raData, hasRAData, fileContents } = usePlaylistMakerContext();
    useEffect(() => {
        if(hasRAData && raData.length && fileContents.length) {
            const fileObject: {
				items: gameObjectType[];
				default_core_name: string;
				default_core_path: string;
				label_display_mode: number;
				left_thumbnail_mode: number;
				right_thumbnail_mode: number;
				sort_mode: number;
				version: string;
			} = JSON.parse(fileContents);
            const finalFiles: gameObjectType[] = [];

			fileObject.items.forEach((gameObject) => {
				const path = gameObject.path;
                const fileName = splitFileName(path);
                let spliter = fileName.split(".");
                spliter.pop();
                const finalName = spliter.join(".");
                const md5FileName = Md5.hashStr(finalName).toUpperCase();
                if(raData.indexOf(md5FileName) !== -1) {
                    finalFiles.push(gameObject);
                }
			});

            fileObject.items = finalFiles;

        }
    }, [raData, hasRAData, fileContents]);
    
	return <Box>{raData.join(", ")}</Box>;
};
