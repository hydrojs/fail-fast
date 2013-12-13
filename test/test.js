var Hydro = require('hydro');

test('abort the tests after the first failure', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    proxies: {
      'describe': 'addSuite',
      'it': 'addTest',
    },
    'fail-fast': true,
    tests: [__dirname + '/fixtures']
  });

  hydro.on('post:all', function() {
    var tests = hydro.tests();
    assert(tests[0].status === 'failed');
    assert(tests[1].status === 'skipped');
    done();
  });

  hydro.run();
});
