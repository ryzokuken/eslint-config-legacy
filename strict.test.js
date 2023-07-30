"use strict";

const { RuleTester } = require("eslint");
const rule = require("./node_modules/eslint/lib/rules/strict");

new RuleTester().run("strict", rule, {
  valid: [
    {
      code: '"use strict";\nvar foo = true;',
      options: ["global"],
    },
  ],

  invalid: [
    {
      code: "var foo = true;",
      options: ["global"],
      errors: [{ message: "Use the global form of 'use strict'." }],
    },
  ],
});
