define("sxs-list-view",["jquery","underscore","backbone","dispatch","sidebar-list-view","./folder-model","sxs-view"],function(e,t,n,r,i,s,o){var u=i.extend({el:"#sxs-list",events:{"click a":"openSxS"},initialize:function(){var e=this.$el.find(".chunk");this.model=new s({supplementalPath:"sidebar"}),this.model.set(r.getOpenSection(),e),r.on("section:open",this.getAnalyses,this)},openSxS:function(t){t.preventDefault();var n=e(t.target),i=n.data("sxs-paragraph-id"),s=n.data("doc-number");r.set("sxs-analysis",new o({regParagraph:i,version:s}))},getAnalyses:function(e){var t=this.model.get(e);typeof t.done!="undefined"?t.done(function(e){this.render(e)}.bind(this)):this.render(t)},render:function(e){this.$el.html(e)}});return u});