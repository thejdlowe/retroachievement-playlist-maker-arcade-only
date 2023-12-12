import {
	buildAuthorization,
	getGameList,
} from "@retroachievements/api";
import { useState, useEffect } from "react";


export const useGetRAData = () => {
	const [hasRAData, setHasRADataState] = useState<boolean>(false);
	const [raData, setRADataState] = useState<string[]>([]);

	useEffect(() => {
		if (hasRAData) return;

		const fetchData = async () => {
			const userName = `${import.meta.env.VITE_APP_RA_USERNAME}`;
			const webApiKey = `${import.meta.env.VITE_APP_RA_KEY}`;

			const authorization = buildAuthorization({ userName, webApiKey });
			const gameList = await getGameList(authorization, {
				consoleId: 27,
				shouldOnlyRetrieveGamesWithAchievements: true,
				shouldRetrieveGameHashes: true,
			});
			const list: string[] = [];
			gameList.forEach((game) => {
				game?.hashes?.forEach((hash) => {
					list.push(hash.toLocaleUpperCase());
				});
			});
			setRADataState(list);
			setHasRADataState(true);
		};

		fetchData();
	}, [hasRAData]);

	return { hasRAData, raData };
};
