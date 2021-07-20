# CV

## Update content from the website content

Note: this is now optional. Updating cv.md more manually lately.

Fetches content from the website `content.js` file, re-generates `cv.md`, ready for a new pdf build.

1. `npm install`
2. Copy content to be commonjs readable: `npx babel --plugins transform-es2015-modules-commonjs ../src/content.js -o content.js`
3. Compile, run & output: `npx babel update.js -o output.js; node output.js > cv.md` (second step manual on windows)

## Build .pdf

We are using https://github.com/simonhaenisch/md-to-pdf now

1. Update the content in cv.md
2. Run `md-to-pdf cv.md`

### Old instructions

Via https://github.com/there4/markdown-resume

Run `./build.sh` (`chmod +x ./build.sh` if not executable)

or, manually:

`docker run -v ${PWD}:/resume there4/markdown-resume md2resume pdf --template readable cv.md ./`
