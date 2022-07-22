import {Routes, Route} from "react-router-dom";
import Inicial from "./pages/Inicial";
import LayoutPublic from "./layouts/LayoutPublic";
import Razas from "./components/Main/Razas";
import DetailRaza from "./components/Main/DetailRaza"
import CrearRaza from "./components/Main/CrearRaza"
import {Provider} from "react-redux";
import store from "./redux/store"
import Error404 from "./pages/Error404"
import UserData from "./components/Main/UserData";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Inicial/>} />
        <Route exact path="/dogs" element={<LayoutPublic><Razas /></LayoutPublic>}/>
        <Route exact path="/dog/:idRaza" element={<LayoutPublic><DetailRaza /></LayoutPublic>}/>
        <Route exact path="/dog/crear" element={<LayoutPublic><CrearRaza /></LayoutPublic>}/>
        <Route exact path="/user" element={<LayoutPublic><UserData /></LayoutPublic>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
