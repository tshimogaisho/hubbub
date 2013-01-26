(function () {
  'use strict';

  var $ = window.jQuery;
  var app = window.app;
  var _ = window._;

  var tpl = $('#js-issue-modal-template').html();

  app.IssueModalView = app.View.extend({
    className: 'issue-modal',

    events: {
      // you can use any jQuery selectors here
      'change select[name="category"]': 'categoryChanged',
      'click .modal-mask': 'removeAndBack',
      'click .modal' : 'stopPropogation'
    },

    render: function () {
      this.$el.html(_.template(tpl, {issue: this.model}));
      $('body').prepend(this.$el);
    },

    categoryChanged: function (ev) {
      var category = $(ev.target).val();
      this.model.set('category', category);
      this.removeAndBack();
    },

    stopPropogation: function (ev){
      ev.stopPropagation();
    },

    removeAndBack: function (){
      this.remove();
      // todo: later change to navigate to ""
      app.router.navigate("manage");
    }
  });
})();
