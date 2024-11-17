import "./CactusModel.css";

const CactusModel: React.FC = () => {
  return (
    <model-viewer
      auto-rotate
      auto-rotate-delay="0"
      camera-controls
      camera-orbit="auto 80deg auto"
      disable-zoom
      exposure="0.48"
      interaction-prompt="none"
      loading="eager"
      min-camera-orbit="auto 80deg auto"
      max-camera-orbit="auto 80deg auto"
      rotation-per-second="-45deg"
      shadow-intensity="1.07"
      shadow-softness="0.8"
      src="/models/lamp.glb"
      tone-mapping="neutral"
    ></model-viewer>
  );
};

export default CactusModel;
