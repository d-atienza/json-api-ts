import { useState } from "react";
import EpisodeView from "./EpisodeView";

function App() {
  interface Episode {
    id: number;
    season: number;
    number: number;
    name: string;
    summary: string;
  }

  const [arrayOfEpisodeObjects, setArrayOfEpisodeObjects] = useState<Episode[]>(
    []
  );

  async function handleFetchClick() {
    const response = await fetch("https://api.tvmaze.com/shows/41074/episodes");
    const data = await response.json();
    setArrayOfEpisodeObjects(data);
  }

  const arrayOfEpisodeDetails = arrayOfEpisodeObjects.map((episode, id) => (
    <ul key={id} className="episode-display">
      <li>
        Season {episode.season} Episode {episode.number}
      </li>
      <li>{episode.name}</li>
      <li>{episode.summary.replace(/<\/?p>/gi, "")}</li>
    </ul>
  ));

  return (
    <div className="app">
      <button onClick={() => handleFetchClick()}>get episodes</button>
      <div>
        {arrayOfEpisodeObjects.length > 0
          ? arrayOfEpisodeDetails
          : "empty array"}
      </div>
      <EpisodeView />
    </div>
  );
}

export default App;
