import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";

export const RAFileBuilder = () => {
	const {fileContents} = usePlaylistMakerContext();
	
	return <>{fileContents !== "" ? "File Loaded" : "File Unloaded"}</>;
};
