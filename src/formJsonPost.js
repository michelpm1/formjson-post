'use strict';

function getFormData($form){
    let unindexed_array = $form.serializeArray();
    let indexed_array = {};

    $.map(unindexed_array, function(n){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}


$.fn.postForm = function(formOpt) {

    this.append($('<form id="postForm">'));


    if (formOpt.token) $('#postForm').append($("<input type=hidden name=token value='"+formOpt.token+"'>"));
    if (formOpt.secret) $('#postForm').append($("<input type=hidden name=secret value='"+formOpt.secret+"'>"));
    $('#postForm').append($("<input id='email' name='email' class='animate-me form-control' type='email' placeholder='Email'>"));
    $('#postForm').append($("<input id='name' name='nome' type='text' class='animate-me form-control inputCss' placeholder='Nome Completo'>"));


    $.each(formOpt.fields, function (fieldName, fieldValue) {

        if (fieldValue.length > 1) {
            let upperFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            let select = "<p class='textCss text-center'>"+upperFieldName+ "<select name='"+fieldName+"' class='animate-me col-centered selectorsCss form-control'>"
            $.each(fieldValue, function (index,selectOpt) {
                select += "<option class='animate-me text-center'>"+selectOpt+"</option>"
            });
            select += "</select>";
            $('#postForm').append($(select));
        }
        else {
            let upperFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
            $('#postForm').append($("<p class='text-center'>"+upperFieldName+ "<input name='"+fieldName+"' class='col-centered selectorsCss form-control' type='text'></p>"));
        }

    });

    if (formOpt.url) {
        $('#postForm').append($("<input id='formBtn' class='btnCss col-centered btn-lg btn-success' type='submit' value='Enviar'>"));
    } else {
        alert('You forgot the URL in json, fella!');
    }
    $(function(){

        $('#postForm').submit(function(e){
            let $form = $('#postForm');
            let formData = getFormData($form);
            if (formData.hasOwnProperty('estado') == false){
                formData.estado = '';
            }
            if (formData.hasOwnProperty('nível') == false){
                formData.nível = '';
            }
            let jsonData = {
                token: formData.token,
                secret: formData.secret,
                lead: {
                    name: formData.nome,
                    email: formData.email,
                    estado: formData.estado,
                    nível: formData.nível
                }

            };
            jsonData = JSON.stringify(jsonData);

            e.preventDefault();
            $.post('/add', jsonData)
                .success(function() {
                    alert('Sent with success');
                }).error(function() {
                    alert('something happen with your post request');
                });
        });
    });
};
