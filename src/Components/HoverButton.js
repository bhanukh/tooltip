import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

// hoverButoon component with position props
const HoverButton = ({ position }) => {
  return (
    // hover button with bootstrap tooltip
    <>
      <OverlayTrigger
        style={{ overflow: "hidden" }}
        placement={position ? position : "right"}
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip className="tool" id="button-tooltip-2" style={{ overflow: "visible"}}>
            ToolTip At{" "}
            <Badge className="badge" bg="warning" text="dark">
              {position ? position.toUpperCase() : "RIGHT"}
            </Badge>
            Position
          </Tooltip>
        }
      >
        <div className="Hover-Button">
          <span>Hover Me</span>
        </div>
      </OverlayTrigger>
    </>
  );
};

export default HoverButton;

