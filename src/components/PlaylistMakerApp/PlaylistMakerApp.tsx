import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { FileReader } from "./components/FileReader";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from '@mui/material/Stack';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const PlaylistMakerApp = () => {
	const [fileContents, setFileContents] = useState<string>("");
    const setContents = (str: string) => {
        setFileContents(str);
    }
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box component="main" flexGrow={1} sx={{ display: "flex", height: "100vh" }}>
				<CssBaseline />
                <Stack>
                <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
					Playlist Maker
				</Typography>
				<Grid container spacing={2}>
					<Grid xs={4}>
						<FileReader setFileContents={setContents} />
					</Grid>
					<Grid xs={8}>
                        {fileContents}
                    </Grid>
				</Grid>    
                </Stack>
				
			</Box>
		</ThemeProvider>
	);
};
