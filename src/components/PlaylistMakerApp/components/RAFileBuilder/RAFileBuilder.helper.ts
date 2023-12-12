export const splitFileName = (str: any) => {
	return str.split("\\").pop().split("/").pop();
};
