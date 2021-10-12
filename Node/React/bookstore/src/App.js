import { useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom';
import { BookDetail } from './components/BookDetail';
import {BooksList} from './components/BooksList';
import { BooksView } from './views/BooksView';
import { PageNotFound } from './components/PageNotFound';
import { AdminView } from './views/AdminView';
import { NavBar } from './components/NavBar';
import { AuthView } from './views/AuthView';

export const Test = () => {
  const [toto, setToto] = useState(0);
  const memo = useMemo(() => {
    console.log('Changement !');
  }, [toto]);

  function handleClick() {
    setToto(toto+1);
  }

  return (<div>hey ;) <button onClick={() => handleClick()}></button></div>);
}

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Redirect exact from="/" to="/books" />
            <Route path='/books' component={BooksView} />
            <Route path='/admin' component={AdminView} />
            <Route path='/login' component={AuthView} />
            <Route path="*"><PageNotFound /></Route>
        </Switch>
    </Router>
  );
}

export default App;
