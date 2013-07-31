cflags = -std=c++11 -stdlib=libc++ -fno-exceptions -fno-rtti -O2 -Wconversion
jsflags = -s ASM_JS=1 -s FORCE_ALIGNED_MEMORY=1 -s DOUBLE_MODE=0 --js-library lib.js

program.js: program.cpp lib.js
	emcc $(cflags) $(jsflags) program.cpp -o $@

program.native: program.cpp lib.cpp
	c++ $(cflags) program.cpp lib.cpp -o $@
