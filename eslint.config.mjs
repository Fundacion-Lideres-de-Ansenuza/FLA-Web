import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      // Existing client-side synchronization patterns are intentional in this app.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]

export default eslintConfig
