import { useRef } from "react";
export const useFileReader = (setFileContents: (str: string) => void) => {
	const inputRef = useRef<HTMLInputElement>();
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
