import { useRef } from "react";
import { usePlaylistMakerContext } from "../../../PlaylistMakerContext";
export const useFileReader = () => {
	const inputRef = useRef<HTMLInputElement>();
	const {setFileContents} = usePlaylistMakerContext();
	const onChange = () => {
		if (inputRef && inputRef.current && inputRef.current.files) {
			const files = inputRef.current.files;
			const file = files[0];

			const fileReader = new FileReader();
			fileReader.onload = () => {
				setFileContents(fileReader.result as string);
			};
			fileReader.readAsText(file);
		}
	};

	return { inputRef, onChange };
};
