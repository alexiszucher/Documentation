import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { BookDetail } from "../components/BookDetail";
import { BooksList } from "../components/BooksList";


export const BooksView = () => {
    const {path} = useRouteMatch();

    return (<>
        <Switch>
            <Route exact path={path} component={BooksList} />
            <Route path={`${path}/:id`} component={BookDetail} />
        </Switch> 
    </>);
}