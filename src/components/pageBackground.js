const PageBackground = () => {
  const vid = document.getElementById("bg-video");
  if (vid) {
    vid.playbackRate = 0.7;
  }
  return (
    <video autoPlay loop muted id={"bg-video"}>
      <source src="/video/glassBackgroundLoop.mp4" type="video/mp4" />
    </video>
  );
};

export default PageBackground;
