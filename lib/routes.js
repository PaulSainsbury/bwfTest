Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',
  {
    name: 'home',
    template: 'workoutList',
    data: function() {
      return {
        workouts : Workouts.find()
      };
    }
  }
);

Router.route('/workout/:shortName', {
  name: 'workout',
  template: 'workout',
  data: function() {
    var workout = Workouts.findOne({ shortName : this.params.shortName});
    return workout;

  }
});
