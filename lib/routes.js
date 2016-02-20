Router.route('/', function () {
    this.render('home');
});

Router.route('/interface', function () {
    this.render('interface');
});

Router.route(":_id",{
    template: "item",
    data:function(){
        return teacherList.findOne({_id: this.params._id});
    }
});