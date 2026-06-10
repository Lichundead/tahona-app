import "./common.css";
import { useNavigation } from "../../context/NavigationContext";
import { VIEWS } from "../../constants/views";

const BackButton = ({ to = VIEWS.DASHBOARD }) => {
  const { navigate } = useNavigation();

  return (
    <div className="nav-bar">
      <button type="button" className="btn-back-dark" onClick={() => navigate(to)}>
        ← Regresar
      </button>
    </div>
  );
};

export default BackButton;
