$(function(){
    'use strict'

    window.MyValidator = function(val, rule) {

        this.isValid = function(newVal) {
            var key
            if (newVal !== undefined) {
                val = newVal || val
            }
            if (!rule.Required) {
                return true
            }

            for (key in rule) {
                /*防止重复检查*/
                if (key === 'Required') {
                    continue
                }

                /*调用rule中对应的方法*/
                // console.log('validate' + key)
                 var r = this['validate' + key]()
                    if (!r) {
                        return false
                    }
            }

            return true
        }

        this.validateMax = function() {
            preMaxMin()
            return val <= rule.Max
        }

        this.validateMin = function() {
            preMaxMin()
            return val >= rule.Min
        }

        this.validateMaxlength = function() {
             preLength()
             console.log('rule.Maxlength', rule.Maxlength)
             console.log('val.length', val.length)
             console.log('val.length <= rule.Maxlength', val.length <= rule.Maxlength)

            return val.length <= rule.Maxlength
        }

        this.validateMinlength = function() {
             preLength()
            return val.length >= rule.Minlength
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
             val = val.toString()
            console.log('parseFloat(val)',parseFloat(val))
        }
    }
})
