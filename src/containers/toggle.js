import { useSelector } from "react-redux";

const Toggle = ({ id, children }) => {
  const show = useSelector((state) => state.toggles[id]);
  return show ? children : null;
};

export default Toggle;
