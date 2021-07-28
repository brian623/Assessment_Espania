import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details';
import Listing from './Listing';

function App() {

  return (
    <Router>
      <Switch>
      <Route path="/" component={Listing} exact/>
      <Route path="/details/:id" component={Details}/>
      </Switch>
    </Router>
  );
}

export default App;
