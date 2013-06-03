describe('Todo', function() {
  describe('.add', function() {
    it('Todo.list에 인스턴스가 추가 되는 것', function() {
      Todo.add({ text: 'foo' });
      expect(Todo.list).to.have.length(1);
      expect(Todo.list[0]).to.be.a(Todo);
    });
  });

  describe('#setComplete', function() {
    var todo;
    beforeEach(function() {
      todo = new Todo({});
    });

    it('complete가 설정되는 것', function() {
      todo.setComplete(true);
      expect(todo.complete).to.be(true);
    });

    it('change:complete이벤트가 발화하는 것', function(done) {
      todo.on('change:complete', function() {
        expect(todo.complete).to.be(true);
        done();
      });
      todo.setComplete(true);
    });
  });
});
