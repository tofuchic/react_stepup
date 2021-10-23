import { Switch, Route } from "react-router-dom";
import { AtomicDesign } from "../components/pages/atomicDesign/AtomicDesign";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { FooterOnly } from "../components/templates/FooterOnly";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = (props) => {
  const { count } = props;
  return (
    <Switch>
      <Route exact path="/">
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes({ count }).map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/atomicDesign">
        <HeaderOnly>
          <AtomicDesign />
        </HeaderOnly>
      </Route>
      <Route path="*">
        <FooterOnly>
          <div className="App">
            <Page404 />
          </div>
        </FooterOnly>
      </Route>
    </Switch>
  );
};
