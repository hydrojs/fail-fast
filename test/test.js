var Hydro = require('hydro');

test('abort the tests after the first failure', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    'fail-fast': true,
    proxies: {
      'describe': 'addSuite',
      'it': 'addTest',
    },
    tests: [__dirname + '/fixtures']
  });

  hydro.on('post:all', function(runner) {
    var failed = runner.suites[0].tests[0];
    var skipped = runner.suites[0].tests[1];

    assert(failed.failed === true);
    assert(skipped.skipped === true);
    done();
  });

  hydro.run();
});
