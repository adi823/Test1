var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["AppTemplates"] = this["AppTemplates"] || {};

this["AppTemplates"]["templates/todos.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class = \"task input-group\">\r\n  <span class = \"btnStatusTask input-group-addon "
    + alias3(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"state","hash":{},"data":data}) : helper)))
    + "\">\r\n    <span class = \"glyphicon "
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></span>\r\n  </span>\r\n  <span class = \"taskLabel form-control "
    + alias3(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"state","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n  <span class = \"btnDeleteTask input-group-addon\">\r\n    <span class = \"glyphicon glyphicon-minus\"></span>\r\n  </span>\r\n</div>\r\n";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["AppTemplates"];}