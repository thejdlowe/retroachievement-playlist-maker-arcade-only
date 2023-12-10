import { PlaylistMakerApp } from "./components/PlaylistMakerApp";

// import { buildAuthorization } from "@retroachievements/api";

// import { getGameList } from "@retroachievements/api";



// const userName = `${import.meta.env.VITE_APP_RA_USERNAME}`;
// const webApiKey = `${import.meta.env.VITE_APP_RA_KEY}`;

// const authorization = buildAuthorization({ userName, webApiKey });

function App() {

/*  const gameList = await getGameList(authorization, {
    consoleId: 27,
    shouldOnlyRetrieveGamesWithAchievements: true,
    shouldRetrieveGameHashes: true,
  });

  console.log({gameList})

  */
  /*
  {
  "title": "BurgerTime",
  "id": 12015,
  "consoleId": 27,
  "consoleName": "Arcade",
  "imageIcon": "/Images/072979.png",
  "numAchievements": 12,
  "numLeaderboards": 1,
  "points": 270,
  "dateModified": "2023-08-16 17:32:24",
  "forumTopicId": 19036,
  "hashes": [
    "772c5c242f2bc5458f980e8ef5639fe8"
  ]
}
  */

	return (
		<PlaylistMakerApp />
	);
}

export default App;
