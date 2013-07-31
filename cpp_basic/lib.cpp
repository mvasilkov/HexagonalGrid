#include <cstdio>

extern "C" {
    void canvas_getContext() { puts("canvas_getContext"); }
    void canvas_translate(float, float) { puts("canvas_translate"); }
    void canvas_moveTo(float, float) { puts("canvas_moveTo"); }
    void canvas_lineTo(float, float) { puts("canvas_lineTo"); }
    void canvas_stroke() { puts("canvas_stroke"); }
}
