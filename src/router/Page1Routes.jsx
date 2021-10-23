import { Page1 } from "../components/pages/page1/Page1";
import { Page1DetailA } from "../components/pages/page1/Page1DetailA";
import { Page1DetailB } from "../components/pages/page1/Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
