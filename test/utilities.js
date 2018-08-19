'use strict';

api.metatests.test('Check called filename/filepath', (test) => {
  test.ok(api.common.callerFilepath().endsWith('test/utilities.js'));
  test.strictSame(api.common.callerFilename(), 'utilities.js');
  test.end();
});

api.metatests.test('Check called filename/filepath parent', (test) => {
  child(test, 1);
  test.end();
});

function child(test, depth) {
  test.ok(api.common.callerFilepath(depth).endsWith('test/utilities.js'));
  test.strictSame(api.common.callerFilename(depth), 'utilities.js');
}
