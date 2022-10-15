//import bootstrap Component
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

// positionInput component with props
const PositionIn = ({ position, setPosition, handleSubmit }) => {
  return (
    // select position from
    <Form
      className="col-md-2 mx-auto"
      style={{ marginTop: "6rem" }}
      onSubmit={handleSubmit}
    >
        <h1 className="mb-3">Select Position</h1>
      <Stack gap={2}>
        <Form.Select
          aria-label="Default select example"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="right">Right</option>
          <option value="left">Left</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </Form.Select>
      </Stack>
    </Form>
  );
};

export default PositionIn;