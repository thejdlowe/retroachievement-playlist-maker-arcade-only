import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";

export const RAAppBar = () => {
    const {hasRAData} = usePlaylistMakerContext();
	return (
		<Box>
			<Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
				Playlist Maker {hasRAData + ""}
			</Typography>
		</Box>
	);
};
