
import './App.css';

function App() {

  function onClickHendler() {

    const selectSliderBox = document.querySelector(".box-item");

    if (selectSliderBox?.classList.contains("slider")) {
      selectSliderBox?.classList.remove("slider");
    }
    else {
      selectSliderBox?.classList.add("slider");
    }
  }
  return (
    <div className="body" >
      <div className="box-container">
        <h2>Transition</h2>
        <div className="box-item">
          <div className="box-1">
            <h3>
              Contain-1
            </h3>
          </div>
          <div className="box-2">
            <h3>
              Contain-2
            </h3>
          </div>
        </div>
        <button className="button"
          onClick={onClickHendler}
        >Click </button>
      </div>

    </div>
  );
}

export default App;
