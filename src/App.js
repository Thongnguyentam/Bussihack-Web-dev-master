import './App.css';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Nav_bar from './Components/Nav_bar';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Upload_text from "./Components/Upload_text";
import Upload from "./Components/Upload";
import Items from "./Components/Items";
import Nav_bar_text from "./Components/Nav_bar_text";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
      <Router>
        <Nav_bar />
        <Banner />
            <Switch>
          <Route path="/products" exact component={Products} />
          <Route path="/account" exact component={Profile} />
          <Route path="/" exact component={Login}/>
                <Route path="/images" exact component={Upload} />
                <Route path="/text" exact component={Upload_text} />
        </Switch>
      </Router>
    );
}

export default App;
