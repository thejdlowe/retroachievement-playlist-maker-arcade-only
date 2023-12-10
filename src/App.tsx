import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { buildAuthorization } from "@retroachievements/api";

import { getGameList } from "@retroachievements/api";



const userName = `${import.meta.env.VITE_APP_RA_USERNAME}`;
const webApiKey = `${import.meta.env.VITE_APP_RA_KEY}`;

const authorization = buildAuthorization({ userName, webApiKey });

async function App() {
	const [count, setCount] = useState(0);

  const gameList = await getGameList(authorization, {
    consoleId: 27,
    shouldOnlyRetrieveGamesWithAchievements: true,
    shouldRetrieveGameHashes: true,
  });

  console.log({gameList})

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
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
