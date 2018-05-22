# tsc_repro

test for version 2.8.3

Set up:
Installed with `npm install -g typescript@latest`
Running with `npm run compile` from command line.

Expected behavior: create `lib` folder with `index.js` compiled file.

Actual behavior: `lib` folder is not created although in console it shows
`Compilation complete. Watching for file changes.`

Note: Tried rolling back to typescript version 2.6.2 with `npm install -g typescript@2.6` and it worked as expected.
