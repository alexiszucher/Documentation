import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (<div>La page n'a pas pu être trouvé. <Link to="/">Revenir à l'accueil</Link></div>);
};