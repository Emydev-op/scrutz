import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts";
import ErrorPage from "./error/error-page";
import { Overview } from "./pages/overview";
import AllCampaign from "./pages/campaign/all-campaign";
import Settings from "./pages/settings/settings";
import CreateCampaign from "./pages/campaign/create-campaign";
import MarketIntelligence from "./pages/market/market-intelligence";
import CampaignId from "./pages/campaign/campaign-id";

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
            element: <CampaignId />,
            path: ":id",
            id: "campaignId",
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
