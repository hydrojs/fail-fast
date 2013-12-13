/**
 * Mark all tests after the first failure as skipped.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  if (!hydro.get('fail-fast')) return;

  var fail = false;

  hydro.on('pre:test', function(test) {
    if (fail) test.skip();
  });

  hydro.on('post:test', function(test) {
    if (test.status === 'failed') fail = true;
  });
};

/**
 * CLI flags.
 */

module.exports.flags = {
  '--fail-fast': 'Abort the tests on first failure'
};
