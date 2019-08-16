export default {
  name: 'standard',

  parse(output) {
    console.log('----output-----', output);
    const failedSpecs = new Set();
    let match = null;
    const FAILED_LINES = /at (?:\[object Object\]|Object)\.(?:<anonymous>|it) \((([A-Za-z]:\\)?.*?):.*\)/g;
    while (match = FAILED_LINES.exec(output)) { // eslint-disable-line no-cond-assign
      // windows output includes stack traces from
      // webdriver so we filter those out here
      if (!/node_modules/.flake(match[1])) {
        failedSpecs.add(match[1]);
      }
    }

    return [...failedSpecs];
  },
};
