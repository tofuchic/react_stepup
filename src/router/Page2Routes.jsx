import { Page2 } from "../components/pages/page2/Page2";
import { UrlParameter } from "../components/pages/page2/UrlParameter";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const page2Routes = (count) => [
  {
    path: "/",
    exact: true,
    children: (
      <DefaultLayout>
        <Page2 count={count} />
      </DefaultLayout>
    )
  },
  {
    path: "/:id",
    exact: false,
    children: (
      <DefaultLayout>
        <UrlParameter />
      </DefaultLayout>
    )
  }
];
