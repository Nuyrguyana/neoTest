import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./layout/main";
import NavBar from "./navBar";
import '../index.css'
function App() {

  return (
      <BrowserRouter>
        <div>
          {/*<NavBar />*/}
          <Switch>
            <Route path='/' exact component={Main} />
            {/*<Route path='/login:type?' component={Login} />*/}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
