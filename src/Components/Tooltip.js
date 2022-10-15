import React,{useState} from 'react'
import PositionInput from "./PositionIn";
import HoverButton from "./HoverButton";

const Tooltip = () => {
    const [position, setPosition] = useState("");
// handling submit button of postionInput component
const handleSubmit = (e) => {
    e.preventDefault();
    if (!position) return;
    setPosition(position);
    console.log("submitted : ", position);
  };

  return (
    // imported components are added here with props
    <div className="App">
      <PositionInput
        position={position}
        setPosition={setPosition}
        handleSubmit={handleSubmit}
      />
      <HoverButton position={position} />
    </div>
  )
}

export default Tooltip






  