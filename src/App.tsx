import { useState } from "react";
import EpisodeView from "./EpisodeView";

export interface Episode {
  id: number;
  season: number;
  number: number;
  name: string;
  summary: string;
  image: { medium: string };
}

function App() {
  const [arrayOfEpisodeObjects, setArrayOfEpisodeObjects] = useState<Episode[]>(
    []
  );

  async function handleFetchClick() {
    const response = await fetch("https://api.tvmaze.com/shows/41074/episodes");
    const data = await response.json();
    setArrayOfEpisodeObjects(data);
  }

  const arrayOfEpisodeDetails = arrayOfEpisodeObjects.map((ep, id) => (
    <EpisodeView episode={ep} key={id} />
  ));

  return (
    <div className="app">
      <button onClick={() => handleFetchClick()}>get episodes</button>
      <div className="episodeList">
        {arrayOfEpisodeObjects.length > 0
          ? arrayOfEpisodeDetails
          : "empty array"}
      </div>
    </div>
  );
}

export default App;
