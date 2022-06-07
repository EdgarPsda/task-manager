import "./App.css";
import TaskList from "./components/TaskList";
import freecodecampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freecodecampLogo} className="freecodecamp-logo" alt="" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
