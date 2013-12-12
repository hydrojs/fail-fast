describe('--fail-fast test', function() {
  it('fails', function() {
    throw new Error('test');
  });

  it('should not be executed', function() {
    throw new Error('test 2');
  });
});
