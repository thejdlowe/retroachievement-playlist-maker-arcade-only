export const splitFileName = (str: string) => {
	return str.split("\\").pop().split("/").pop();
};
