import video from "../../../assets/video_home.mp4";

export default function Video() {
  return (
    <div className="background-container">
      {/* Video de Fundo */}
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" alt="Video de fundo" />
      </video>
      <div className="transicao1"></div>
    </div>
  );
}