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

Router.route(":_id/send",{
    template: "sendGoodies",
    data:function(){
        return teacherList.findOne({_id: this.params._id});
    }
});

Router.route('/transaction', function () {
    this.render('transaction');
});