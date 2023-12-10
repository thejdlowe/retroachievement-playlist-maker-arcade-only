import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";
import { useFileReader } from "./RAFileReader.helper";

export const RAFileReader = ({
	setFileContents,
}: {
	setFileContents: (str: string) => void;
}) => {
	const { inputRef, onChange } = useFileReader(setFileContents);
	return (
		<Paper>
			<Input inputRef={inputRef} type="file" onChange={onChange} />
		</Paper>
	);
};
