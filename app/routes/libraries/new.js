import Ember from 'ember';

export default Ember.Route.extend({

    actions: {

        saveLibrary(newLibrary) {
            newLibrary.save().then(() => this.transitionTo('libraries'));
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    },

    model() {
        return this.store.createRecord('library');
    }
});