import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";

import { useFileReader } from "./RAFileReader.helper";


export const RAFileReader = () => {
	const { inputRef, onChange } = useFileReader();
	return (
		<Paper>
			<Input inputRef={inputRef} type="file" onChange={onChange} />
		</Paper>
	);
};
