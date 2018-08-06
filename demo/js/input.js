$(function(){
    'use strict'

    window.input = function(selector) {
        var $ele
        var rule = {}

        function init() {
            findEle()
            parseRule()
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
