Template.queries.events({
    "click #fullfill": function() {
        Meteor.call("reset", function (err, res) {
            if (err)
                console.log("!!", err);
        });
    }
});

Template.citylist.helpers({
    cities: function() {
        return Cities.find();
    },
    activities: function() {
        return Activities.find();
    }
});


$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.grid-item',
    });
});

Template.formActivity.events({
    'submit input' (event) {
        event.preventDefault();
        
        //Get value from form elements
        const target = event.target;
        const text = target.name.value;
        const description = target.description.value;
        
        Test.insert({
            text,
            description,
            createdAt: new Date()
        });
        
        //Clear form
        target.text.value = '';
        target.description.value = '';
    }
})
