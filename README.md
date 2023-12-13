# RetroAchievement Playlist Refiner (Arcade Only)

Since RetroArch doesn't support filtering by games that have achievements, I decided to make this! Huzzah!

> [!WARNING]
> Do not make a version of this public without refining it! Only because since this exposes your RetroAchievement Web API key. Please keep this in mind before publishing it.

> [!IMPORTANT]
> This only works if you have a playlist of arcade games already created locally. This does not work with other systems.

## Prerequisites

This was written using `node v18.17.1` and should work with versions `v18.x.x`.

## Instructions

1. Pull this to your local machine through your own normal git methods. You do you, boo!
2. Run `npm i`
3. Make a copy of `.env.example` and rename it to `.env` then place your RetroAchievement username in `VITE_APP_RA_USERNAME`, and the web API key in `VITE_APP_RA_KEY`. See https://api-docs.retroachievements.org/getting-started.html for further details on how to get your Web Key.
4. Run `npm run dev` and open http://localhost:5173/ locally.
5. On load, it will reach out to the RetroAchievement Web API and get all currently supported arcade games into memory. It will say "true" in the header once it has successfully loaded the data.
6. Select your already created Arcade Playlist in the file select box. See https://docs.libretro.com/guides/roms-playlists-thumbnails/ for details on how to create a playlist. ![image](https://github.com/thejdlowe/retroachievement-playlist-maker-arcade-only/assets/2357370/d7b6da6d-b22d-416a-893d-89dc414fbcab)
7. Click the download link that now appears, and save it to the folder you have your RetroArch playlists. Feel free to name it whatever you want.
8. Open RetroArch and enjoy!
