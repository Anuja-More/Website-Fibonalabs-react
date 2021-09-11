import "./styles.css";
import Home from "./Home";
// import Blog from "./Blog";
import Work from "./Work";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Footer";

import "../node_modules/@material-ui/icons/utils/createSvgIcon.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
