$(function() {
    'use strict'

    /*选中页面中所有的input[data-rule]*/

    /*解析每一个input的验证规则*/

    /*验证*/
    var Validator = new MyValidator('s.....', {
        maxlength: 5,
        minlength: 3,
        pattern: '^[a-zA-Z0-9]+$',
    })

    // var result =  Validator.ValidateMax()
    // var result =  Validator.ValidateMin()
    // var result =  Validator.ValidateMaxlength()
    // var result =  Validator.validateNumeric()
    // var result =  Validator.validateRequired()
    var result =  Validator.validatePattern()
    console.log('result', result)

})
