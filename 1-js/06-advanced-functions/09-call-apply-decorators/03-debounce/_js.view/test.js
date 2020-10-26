describe('debounce', function () {
  before(function () {
    this.clock = sinon.useFakeTimers();
  });

  after(function () {
    this.clock.restore();
  });

<<<<<<< HEAD
  it("вызывает функцию один раз в 'ms' мс", function() {
    let log = '';
=======
  it('for one call - runs it after given ms', function () {
    const f = sinon.spy();
    const debounced = debounce(f, 1000);
>>>>>>> 2d5be7b7307b0a4a85e872d229e0cebd2d8563b5

    debounced('test');
    assert(f.notCalled, 'not called immediately');
    this.clock.tick(1000);
    assert(f.calledOnceWith('test'), 'called after 1000ms');
  });

  it('for 3 calls - runs the last one after given ms', function () {
    const f = sinon.spy();
    const debounced = debounce(f, 1000);

<<<<<<< HEAD
    f(1); // вызвана
    f(2); // проигнорирована

    setTimeout(() => f(3), 100);  // проигнорирована (слишком рано)
    setTimeout(() => f(4), 1100); // вызвана (1000 мс истекли)
    setTimeout(() => f(5), 1500); // проигнорирована (менее 1000 мс с последнего вызова)
=======
    debounced('a');
    setTimeout(() => debounced('b'), 200); // ignored (too early)
    setTimeout(() => debounced('c'), 500); // runs (1000 ms passed)
    this.clock.tick(1000);

    assert(f.notCalled, 'not called after 1000ms');
>>>>>>> 2d5be7b7307b0a4a85e872d229e0cebd2d8563b5

    this.clock.tick(500);

    assert(f.calledOnceWith('c'), 'called after 1500ms');
  });

<<<<<<< HEAD
  it("сохраняет контекст вызова", function() {
=======
  it('keeps the context of the call', function () {
>>>>>>> 2d5be7b7307b0a4a85e872d229e0cebd2d8563b5
    let obj = {
      f() {
        assert.equal(this, obj);
      },
    };

    obj.f = debounce(obj.f, 1000);
    obj.f('test');
    this.clock.tick(5000);
  });
<<<<<<< HEAD

=======
  
>>>>>>> 2d5be7b7307b0a4a85e872d229e0cebd2d8563b5
});
