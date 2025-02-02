/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

import Glean from "@mozilla/glean/node";

import main from "./main.js";

main();
// Wait for Glean to finish up before exiting the app.
await Glean.shutdown();

