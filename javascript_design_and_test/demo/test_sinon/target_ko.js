function ListView($el) {
  this.$el = $el;
}

ListView.prototype.remove = function() {
  if (window.confirm('삭제하겠습니까')) {
    this.$el.remove();
    this.$el = null;
  }
};
