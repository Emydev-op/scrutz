export const routes = {
  OVERVIEW: "/",
  CAMPAIGN: "/campaign",
  VIEW_CAMPAIGN: (id: number | string) => "/campaign/" + id,
  ADD_CAMPAIGN: "/campaign/create",
  EDIT_CAMPAIGN: (id: number | string) => "/campaign/" + id + "/edit",
  MARKET_INTELLIGENCE: "/market-intelligence",
  ACCOUNT_SETTINGS: "/settings",
};
