import loadingGif from "../Assets/loading-transparent-bg.png";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="loading" className="image-rotate" />
    </div>
  );
}
