cflags = -std=c++11 -fno-exceptions -fno-rtti -O2 -Wconversion
jsflags = -s ASM_JS=1 --js-library lib.js

program.js: program.cpp lib.js
	emcc $(cflags) $(jsflags) program.cpp -o $@

program.native: program.cpp lib.cpp
	c++ $(cflags) program.cpp lib.cpp -o $@
