import { createBrowserRouter } from "react-router-dom";
import NewsOverview from "../modules/news-overview";
import NewsDetail from "../modules/news-details";
import ErrorPage from "./errorHandler";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NewsOverview,
  },
  {
    path: "news/:newsid",
    Component: NewsDetail,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
