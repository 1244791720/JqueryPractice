$(function(){
    'use strict'

    window.MyValidator = function(val, rule) {
        // this.isValid = function() {
        //
        // }

        this.ValidateMax = function() {
            preMaxMin()
            return val <= rule.max
        }

        this.ValidateMin = function() {
            preMaxMin()
            return val >= rule.min
        }

        this.ValidateMaxlength = function() {
             preLength()
            return val.length <= rule.maxlength
        }

        this.ValidateMinlength = function() {
             preLength()
            return val.length >= rule.minlength
        }

        this.validateNumeric = function() {
            return $.isNumeric(val)
        }

        this.validateRequired = function() {
            var real = $.trim(val)
            if(!(real && real != 0)) {
                return false
            }
            return true
        }

        this.validatePattern = function() {
            var reg = new RegExp(rule.pattern)
            return reg.test(val)
        }

        /*用于this.ValidateMax this.ValidateMin 前置工作*/
        function preMaxMin() {
            val = parseFloat(val)
        }

        /*用于this.ValidateMaxlength this.ValidateMinlength 前置工作*/
        function preLength() {
            val = parseFloat(val)
        }
    }
})
