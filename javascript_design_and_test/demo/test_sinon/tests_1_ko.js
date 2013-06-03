describe('ListView', function() {
  var listView;
  beforeEach(function() {
    listView = new ListView($('<ul>'));
  });

  describe('#remove', function() {
    it('요소를 삭제하는 것', function() {
      listView.remove();
      expect(listView.$el).to.be(null);
    });
  });
});
