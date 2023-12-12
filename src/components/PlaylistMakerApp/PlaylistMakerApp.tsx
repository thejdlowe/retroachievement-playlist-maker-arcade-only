import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PlaylistMakerContextProvider } from "../PlaylistMakerContext";
import { RAFileReader } from "./components/RAFileReader";
import { RAFileBuilder } from "./components/RAFileBuilder";
import { RADataDisplay } from "./components/RADataDisplay";
import { RAAppBar } from "./components/RAAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const PlaylistMakerApp = () => {
	return (
		<PlaylistMakerContextProvider>
			<ThemeProvider theme={defaultTheme}>
				<Box
					component="main"
					flexGrow={1}
					sx={{ display: "flex", height: "100vh", overflow: "auto" }}
				>
					<CssBaseline />
					<Stack>
						<RAAppBar />
						<Grid container spacing={2}>
							<Grid xs={4}>
								<RAFileReader />
							</Grid>
							<Grid xs={4}>
								<RAFileBuilder />
							</Grid>
							<Grid xs={4}>
								<RADataDisplay />
							</Grid>
						</Grid>
					</Stack>
				</Box>
			</ThemeProvider>
		</PlaylistMakerContextProvider>
	);
};
