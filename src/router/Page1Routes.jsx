import { Page1 } from "../components/pages/page1/Page1";
import { Page1DetailA } from "../components/pages/page1/Page1DetailA";
import { Page1DetailB } from "../components/pages/page1/Page1DetailB";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: (
      <DefaultLayout>
        <Page1 />
      </DefaultLayout>
    )
  },
  {
    path: "/detailA",
    exact: false,
    children: (
      <DefaultLayout>
        <Page1DetailA />
      </DefaultLayout>
    )
  },
  {
    path: "/detailB",
    exact: false,
    children: (
      <DefaultLayout>
        <Page1DetailB />
      </DefaultLayout>
    )
  }
];
