import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { scenarios } from "./products.mocks";

// Since the worker is registered on the client, you can read
// the page's query parameters before assigning request handlers.
const scenarioName = new URLSearchParams(window.location.search).get(
  "scenario"
);

const runtimeScenarios = scenarioName
  ? scenarios[scenarioName as "error" | "success"]
  : [];

export const worker = setupWorker(...runtimeScenarios, ...handlers);
