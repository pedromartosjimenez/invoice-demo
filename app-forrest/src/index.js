import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

import { appFeature } from "./features/app";
import { usersFeature } from "./features/users";

runHookApp({
  services: [reactRoot, reactRouter],
  features: [appFeature, usersFeature]
});