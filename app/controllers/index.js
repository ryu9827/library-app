import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress',/^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    actions: {
        saveInvitation(){
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `We have saved your email: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }


});
