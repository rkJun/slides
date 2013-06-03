describe('ListView', function() {
  describe('#remove', function() {
    var stub;
    var listView;
    beforeEach(function() {
      stub = sinon.stub(window, 'confirm');
      listView = new ListView($('<ul>'));
    });
    afterEach(function() {
      stub.restore();
    });

    it('window.confirm을 호출하는 것', function() {
      listView.remove();
      expect(stub.calledOnce).to.ok();
      expect(stub.args[0][0]).to.be('삭제하겠습니까？');
    });

    context('window.confirm에서 OK를 눌렀을 때', function() {
      beforeEach(function() {
        stub.returns(true);
      });

      it('요소를 삭제하는 것', function() {
        listView.remove();
        expect(listView.$el).to.be(null);
      });
    });

    context('window.confirm에서 취소를 눌렀을 때', function() {
      beforeEach(function() {
        stub.returns(false);
      });

      it('요소를 삭제하지 않는 것', function() {
        listView.remove();
        expect(listView.$el).to.not.be(null);
      });
    });
  });
});
