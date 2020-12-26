import {Provider} from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Vendor from './components/Vendor';
import store from './store/store';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/vendor-list" render={
              (props)=>(
                <Vendor {...props}/>
              )
            }/>
            <Route path="/">
              <Link className='vendor-link' to="/vendor-list">Vendor List</Link>
            </Route>
          </Switch> 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
