(function () {
    'use strict'

    var _canvas = null

    mergeInto(LibraryManager.library, {
        canvas_getContext: function () {
            var canvas = document.getElementById('out')
            _canvas = canvas.getContext('2d')
        },
        canvas_translate: function (a, b) { _canvas.translate(a, b) },
        canvas_moveTo: function (a, b) { _canvas.moveTo(a, b) },
        canvas_lineTo: function (a, b) { _canvas.lineTo(a, b) },
        canvas_stroke: function () { _canvas.stroke() }
    })
}())
