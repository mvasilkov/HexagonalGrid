(function (canvas) {
    'use strict'

    var paint = canvas.getContext('2d'),
        size = 11,
        size_u = Math.sqrt(3) * size,
        size_v = 2 * size,
        pad = 10.5,
        filter = {},
        xx_u, xx_v

    paint.translate(pad, pad)

    paint_grid(0, 0, 48, 24)

    paint.stroke()

    function paint_grid(u, v, col, row) {
        while (row--)
            paint_row(u + (row & 1)? 0.5 * size_u: 0,
                v + 0.75 * size_v * row, col)
    }

    function paint_row(u, v, col) {
        while (col--)
            paint_cell(u + size_u * col, v)
    }

    function paint_cell(u, v) {
        moveto(u + 0.5 * size_u, v)
        lineto(u, v + 0.25 * size_v)
        lineto(u, v + 0.75 * size_v)
        lineto(u + 0.5 * size_u, v + size_v)
        lineto(u + size_u, v + 0.75 * size_v)
        lineto(u + size_u, v + 0.25 * size_v)
        lineto(u + 0.5 * size_u, v)
    }

    function moveto(u, v) {
        paint.moveTo(u, v)
        xx_u = u
        xx_v = v
    }

    function lineto(u, v) {
        var k = (0 | xx_u) + '@' + (0 | xx_v) + '@' + (0 | u) + '@' + (0 | v)
        if (filter[k])
            moveto(u, v)
        else {
            k = (0 | u) + '@' + (0 | v) + '@' + (0 | xx_u) + '@' + (0 | xx_v)
            filter[k] = 1
            paint.lineTo(u, v)
            xx_u = u
            xx_v = v
        }
    }
}(document.getElementById('out')))
