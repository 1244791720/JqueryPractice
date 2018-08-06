$(function() {
    'use strict'

    /*选中页面中所有的input[data-rule]*/
    var $inputs = $('[data-rule]')
    var $form = $('#signup')
    var inputs = []

    $inputs.each(function (index, node) {
        /*解析每一个input的验证规则*/
        var temp = new input(node)
        inputs.push(temp)
    })

    $form.on('submit', function(e) {
        e.preventDefault();
        $inputs.trigger('keyup')
        for (var i = 0; i < inputs.length; i++) {
            var item = inputs[i]
            var r = item.validator.isValid()
            if (!r) {
                alert('注册失败')
                return
            } else {
                alert('注册成功')
            }
        }
    })


})
