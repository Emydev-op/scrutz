import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts";
import ErrorPage from "./error/error-page";
import { Overview } from "./pages/overview";
import MarketIntelligence from "./pages/market/market-intelligence";
import Settings from "./pages/settings/settings";
import {
  AllCampaign,
  CampaignId,
  CreateCampaign,
  EditCampaign,
} from "./pages/campaign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Overview />,
        index: true,
        id: "overview",
      },
      {
        path: "campaign",
        id: "Campaign",
        children: [
          {
            element: <AllCampaign />,
            index: true,
            id: "all",
          },
          {
            path: ":id",
            id: "campaignId",
            children: [
              {
                element: <CampaignId />,
                index: true,
                id: "view",
              },
              {
                element: <EditCampaign />,
                path: "edit",
                id: "edit",
              },
            ],
          },
          {
            element: <CreateCampaign />,
            path: "create",
            id: "create",
          },
        ],
      },
      {
        path: "market-intelligence",
        id: "market-intelligence",
        element: <MarketIntelligence />,
      },
      {
        element: <Settings />,
        path: "settings",
        id: "settings",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
