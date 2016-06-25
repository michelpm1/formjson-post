'use strict';


describe ('Tests for Form Json Post', function(){



    beforeEach(function(){
        let name = 'test';
        let email = 'test@test.com';
        let token = '123';
        let secret = '321';

        beforeEach(function () {
            setFixtures($("<input id='name' name='nome' type='text' class='animate-me form-control inputCss' placeholder='Nome Completo'>").val(name));
            setFixtures($("<input id='email' name='email' class='animate-me form-control' type='email' placeholder='Email'>").val(email));
            setFixtures($("<input type=hidden name='token'>").val(token));
            setFixtures($("<input type=hidden name='secret'>").val(secret));
            loadFixtures('index.html');

        });
    });

    it ('check name if exists', function () {
        expect($('#name')).toHaveValue(name);
        expect($('#name').get(0)).toHaveValue(name);
    });

    it ('check email if exists', function () {
        expect($('#email')).toHaveValue(email);
        expect($('#email').get(0)).toHaveValue(email);
    });

    it ('check token if exists', function () {
        expect($('#token')).toHaveValue(token);
        expect($('#token').get(0)).toHaveValue(token);
    });

    it ('check secret if exists', function () {
        expect($('#secret')).toHaveValue(name);
        expect($('#secret').get(0)).toHaveValue(name);
    });
    it ('check if button form is working', function () {
        let spyEvent = spyOnEvent('#formBtn', 'click');
        $('#formBtn').click();
        expect('click').toHaveBeenTriggeredOn('#formBtn');
        expect(spyEvent).toHaveBeenTriggered();
    });

});