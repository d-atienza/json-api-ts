import { Episode } from "./App";

function EpisodeView(props: { episode: Episode }) {
  const episode = props.episode;

  return (
    <div className="episodeView">
      <div>
        Season {episode.season} Episode {episode.number}
      </div>
      <div>{episode.name}</div>
      <div>{episode.summary.replace(/<\/?p>/gi, "")}</div>
      <div>
        <img src={episode.image.medium} />
      </div>
    </div>
  );
}

export default EpisodeView;
