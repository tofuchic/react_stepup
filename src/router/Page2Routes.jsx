import { Page2 } from "../components/pages/page2/Page2";
import { UrlParameter } from "../components/pages/page2/UrlParameter";

export const page2Routes = (count) => [
  {
    path: "/",
    exact: true,
    children: <Page2 count={count} />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
