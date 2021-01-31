var obj ={
    message:["下载","Download"],
    url:[ { location:"index.html",              name:"主页"},
          { location:"https://www.deepinos.org",name:"博客"},
          { location:"https://www.deepinos.org",name:"论坛"},
          { location:"about.html",              name:"关于"}
        ],
    url_name:[["主页","博客","论坛","关于"],["HOME","BLOCK","DISCUSS","ABOUT"]],
    name:'下载',
    counter:0,
};
var app1 = new Vue({
    el: '#app',
    data:obj,
    methods:{
        change:function(){
            let isChange = 1-this.counter;
            this.counter=isChange;
            this.name=this.message[isChange];
            for(let index in this.url)
            {
                this.url[index].name=this.url_name[isChange][index];
            }
        },
    },

});
