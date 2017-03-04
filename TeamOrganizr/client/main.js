import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { testGroups } from './sorting.js';

import './main.html';


Template.body.onCreated(function bodyOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('userData');
});
