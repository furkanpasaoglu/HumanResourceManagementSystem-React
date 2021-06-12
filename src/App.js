import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from "./layouts/navbar/Navi";
import {Container} from "semantic-ui-react";
import Dashboard from "./layouts/content/Dashboard";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <div className="App">
        <Navi/>
            <Container className="main">
                <Dashboard/>
            </Container>
        <Footer/>
    </div>
  );
}

export default App;
