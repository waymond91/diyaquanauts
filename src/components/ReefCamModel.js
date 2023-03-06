const model = require("../media/fish_man.glb");

export default function ReefCamModel(props) {
  return (
    <div
      onMouseDown={() => {
        props.setIsPressed(true);
      }}
      onMouseUp={() => {
        props.setIsPressed(false);
      }}
    >
      <model-viewer
        style={{
          height: "90vh",
          width: "100%",
          zIndex: 1000,
          position: "absolute",
          top: "3rem",
          left: 0
        }}
        camera-controls
        id="mv-demo"
        shadow-intensity="1"
        src={model}
        alt="A 3D model of an astronaut"
        auto-rotate
        poster="./spacesuit.jpg"
      >
        {props.children}
      </model-viewer>
    </div>
  );
}
