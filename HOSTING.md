# GitHub Pages

This folder is ready to be the root of a dedicated `tyee-ladder` repository. It needs no build, dependencies, server runtime, or GitHub Actions workflow.

Publish from the `main` branch, root (`/`) folder under repository Settings → Pages → Build and deployment → Deploy from a branch. The empty `.nojekyll` file tells Pages to serve the static files directly. All browser asset paths are relative and support a project URL such as `https://OWNER.github.io/tyee-ladder/`.

GitHub Free supports Pages for public repositories. Use the connected account's actual plan and repository permissions when selecting repository visibility. Do not upload unrelated project files or the parent workspace.

The core playable assets total approximately 81 KB before HTTP compression. After loading, gameplay and progress storage stay in the browser. There are no per-turn API requests. The local `server.cjs` helper is not used by GitHub Pages.

Verify the published page loads the logo, stylesheet and scripts, then complete a practice ladder and test refresh restoration. Actual publication is not complete until the Pages deployment succeeds and returns a working URL.
