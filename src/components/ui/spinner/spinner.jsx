import "./Spinner.css";

function Spinner({ size = "md", fullScreen = false }) {
  const spinner = <div className={`spinner spinner-${size}`} />;

  if (fullScreen) {
    return <div className="spinner-overlay">{spinner}</div>;
  }

  return spinner;
}

export default Spinner;