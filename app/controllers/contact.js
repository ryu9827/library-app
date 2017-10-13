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
            alert(`Sending message to the following email is in progress: ${this.get('emailAddress')}. Message is: ${this.get('message')}`);
            this.set('responseMessage', `We have saved your email: ${this.get('emailAddress')}. We got your message and we’ll get in touch soon.`);
            this.set('emailAddress', '');
            this.set('message','');
        }
    }
});
