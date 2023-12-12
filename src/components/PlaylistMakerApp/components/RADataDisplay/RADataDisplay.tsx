import { Box } from "@mui/material";
import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";

export const RADataDisplay = () => {
	const { raData } = usePlaylistMakerContext();
	return <Box>{JSON.stringify({ raData })}</Box>;
};
