#include <cmath>

extern "C" {
    extern void canvas_getContext();
    extern void canvas_translate(float u, float v);
    extern void canvas_moveTo(float u, float v);
    extern void canvas_lineTo(float u, float v);
    extern void canvas_stroke();
}

static const float size {11};
static const float size_u {sqrtf(3) * size};
static const float size_v {2 * size};
static const float pad {10.5};

static inline void moveto(float u, float v) {
    canvas_moveTo(u, v);
}

static inline void lineto(float u, float v) {
    canvas_lineTo(u, v);
}

static inline void paint_cell(float u, float v) {
    moveto(u + 0.5 * size_u, v);
    lineto(u, v + 0.25 * size_v);
    lineto(u, v + 0.75 * size_v);
    lineto(u + 0.5 * size_u, v + size_v);
    lineto(u + size_u, v + 0.75 * size_v);
    lineto(u + size_u, v + 0.25 * size_v);
    lineto(u + 0.5 * size_u, v);
}

static inline void paint_row(float u, float v, int col) {
    while (col--) {
        paint_cell(u + size_u * col, v);
    }
}

static inline void paint_grid(float u, float v, int col, int row) {
    while (row--) {
        paint_row(u + (row & 1)? 0.5 * size_u: 0,
            v + 0.75 * size_v * row, col);
    }
}

int main() {
    canvas_getContext();
    canvas_translate(pad, pad);
    paint_grid(0, 0, 48, 24);
    canvas_stroke();
}
