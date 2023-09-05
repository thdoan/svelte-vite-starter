# Svelte Vite Starter

**Known issue:** `onwarn` code in `svelte.config.js` does not appear to work with Svelte v4.2.0.

Steps to reproduce:

1. Install Svelte for VS Code extension
2. There should be no warnings.
3. Update `package.json`: `"svelte": "^4.2.0",`
4. In terminal: `npm install`
5. In VS Code: Ctrl + Shift + P -> "Svelte: Restart Language Server"
6. ISSUE: You should see a11y warning.
