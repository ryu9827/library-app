import Ember from 'ember';

export default Ember.Controller.extend({
    message: '',
    isMsgValid: Ember.computed.gte('message.length',5),
    msgFeedback: Ember.computed('isMsgValid',function () {
        if (this.get('isMsgValid')===true) {
        return "glyphicon glyphicon-ok form-control-feedback";
        }
    }),

    emailAddress: '',
    isEmailValid: Ember.computed.match('emailAddress',/^.+@.+\..+$/),
    emailFeedback: Ember.computed('isEmailValid',function () {
        if (this.get('isEmailValid') === true){
            return "glyphicon glyphicon-ok form-control-feedback";
        }
    }),
    bothValid:Ember.computed.and('isMsgValid','isEmailValid'),
    isDisabled: Ember.computed.not('bothValid'),

    actions: {
        sendMsg(){
            const email = this.get('emailAddress');
            const message = this.get('message');

            const newContact = this.store.createRecord('contact', {
                email: email,
                message:message
            });

            newContact.save().then((response) => {
            alert(`Sending message to the following email is in progress: ${this.get('emailAddress')}. Message is: ${this.get('message')}`);
            this.set('responseMessage', `You have sent message '${this.get('message')}' to email: ${this.get('emailAddress')}. `);
            this.set('emailAddress', '');
            this.set('message','');
            });
        }
    }
});
