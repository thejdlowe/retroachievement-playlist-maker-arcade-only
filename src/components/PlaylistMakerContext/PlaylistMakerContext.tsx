import React, { createContext, useContext, useState } from "react";
import { useGetRAData } from "./PlaylistMakerContext.helper";
import {
		GameList,
} from "@retroachievements/api";

export interface PlaylistMakerContextProviderProps {
	children?: React.ReactNode | React.ReactNode[];
}

interface PlaylistMakerContextValues {
	hasRAData: boolean;
	raData: GameList;
	fileContents: string;
	setFileContents: (value: string) => void;
}

const PlaylistMakerContext = createContext<PlaylistMakerContextValues>({
	hasRAData: false,
	raData: [],
	fileContents: "",
	setFileContents: () => {},
});

export const PlaylistMakerContextProvider: React.FC<
	PlaylistMakerContextProviderProps
> = ({ children }) => {
	const [fileContents, setFileContentsState] = useState<string>("");
	const {hasRAData, raData} = useGetRAData();

    const setFileContents = (value: string) => {
        setFileContentsState(value);
    };

	const everything = {
        hasRAData,
        raData,
        fileContents,
        setFileContents,
    };
	return (
		<PlaylistMakerContext.Provider value={everything}>
			{children}
		</PlaylistMakerContext.Provider>
	);
};

export const usePlaylistMakerContext = () => {
	return useContext(PlaylistMakerContext);
};
