$(function(){
    'use strict'

    window.input = function(selector) {
        var $ele
        var $errorEle
        var me = this
        var rule = {
            Required : true
        }

        this.loadValidator = function() {
            var val = this.getVal()
            this.validator = new MyValidator(val, rule)

        }

        this.getVal = function() {
            return $ele.val()
        }
        function init() {
            findEle()
            getErrorEle()
            parseRule()
            me.loadValidator()
            listen()
        }

        function listen() {
            $ele.on('keyup', function() {
                var r = me.validator.isValid(me.getVal())
                if (!r) {
                    $errorEle.show()
                } else {
                    $errorEle.hide()
                }
                console.log(r)
            })
        }

        function getErrorEle() {
            $errorEle = $(getErrorId())
        }

        function getErrorId() {
            return '#' + $ele.attr('name') + '-input-error'
        }

        function findEle() {
            if (selector instanceof jQuery) {
                $ele = selector
            } else {
                $ele = $(selector)
            }
        }

        function parseRule() {
            var i
            var ruleString = $ele.data('rule')
            if (!ruleString) return

            var ruleArr = ruleString.split('|')
            for (i = 0; i < ruleArr.length; i++) {
                var itemArr = ruleArr[i].split(':')
                rule[itemArr[0]] = JSON.parse(itemArr[1])
            }
        }
        init()
    }
})
