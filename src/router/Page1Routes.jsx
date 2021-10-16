import { Page1 } from "../page1/Page1";
import { Page1DetailA } from "../page1/Page1DetailA";
import { Page1DetailB } from "../page1/Page1DetailB";

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
