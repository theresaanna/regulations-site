define(["jquery","underscore","backbone","content-view","regs-data","definition-view","sub-head-view","toc-view","regs-dispatch","sidebar-view","konami"],function(e,t,n,r,i,s,o,u,a,f,l){return{getTree:function(t){var n=this;t.children().each(function(){var t=e(this),r=t.attr("id"),s=t.find("ol"),o;i.set({text:r,content:t.html()}),typeof (r,s)!="undefined"&&(o=s?e(s):t,n.getTree(o))})},bindEvents:function(){e("#menu-link, #toc-close").on("click",function(){return e("#menu, #reg-content, #menu-link, #content-header").toggleClass("active"),!1}),new l(function(){document.getElementById("menu-link").className+=" hamburgerify",e(".inline-interpretation .expand-button").addClass("carrotify"),e("#about-tool").html('Made with <span style="color: red"><3</span> by:'),e("#about-reg").html("Find our brilliant attorneys at:")})},fetchModelForms:function(){var t=function(t){var n=e(t),r=n.data("imgUrl"),i=n.data("imgAlt");r&&n.parent().append('<img class="reg-image" src="'+r+'" alt="'+i+'" />')};e("noscript").each(function(){var e=this;setTimeout(function(){t(e)},2e3,e)})},init:function(){this.getTree(e("#reg-content")),window.toc=new u({el:"#menu"}),window.sidebar=new f({el:"#sidebar"}),window.regContent=new r({el:".main-content"}),this.bindEvents(),this.fetchModelForms()}}});