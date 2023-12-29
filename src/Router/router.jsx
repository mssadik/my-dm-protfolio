import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import FacebookPreWork from "../components/PreviousWork/FacebookPreWork";
import InstaPreWork from "../components/PreviousWork/InstaPreWork";
import YoutubePreWork from "../components/PreviousWork/YoutubePreWork";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/facebookPreWork",
          element: <FacebookPreWork></FacebookPreWork>
        },
        {
          path: "/instaPreWork",
          element: <InstaPreWork></InstaPreWork>
        },
        {
          path: "/youtubePreWork",
          element: <YoutubePreWork></YoutubePreWork>
        },
      ]
    },
  ]);