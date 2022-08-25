import VideoCardItemMolecule from "../videoCardItemMolecule/videoCardItemMolecule";

function VideoCardMolecule(props) {
  const favoritesItem = props.favoritesCollection.map((movie) => {
    return (
      <VideoCardItemMolecule
        key={movie.id}
        movie={movie}
        deleteVideoCardHandler={props.deleteVideoCardHandler}
      />
    );
  });

  return <>{favoritesItem}</>;
}

export default VideoCardMolecule;
