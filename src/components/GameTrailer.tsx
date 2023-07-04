import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <video
      src={trailer?.results[0]?.data[480]}
      poster={trailer?.results[0]?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
