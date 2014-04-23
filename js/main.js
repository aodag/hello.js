// -*- coding:utf-8 -*-
$(function() {

    var ViewModel = function() {

    };

    var viewModel = {
	message: ko.observable(),
	projects: ko.observableArray([
	    {name: ko.observable("プロジェクト1"),
	     description: ko.observable("OK this is")
	    },
	    {name: ko.observable("プロジェクト２"),
	     description: ko.observable()
	    },
	    {name: ko.observable("プロジェクト３"),
	     description: ko.observable()
	    }
	]),
	currentProject: ko.observable(),
	projectSelected: function(project) {
	    viewModel.currentProject(project);
	}
    };
    viewModel.message("Hello, world!"); // Text appears
    ko.applyBindings(viewModel);
});
