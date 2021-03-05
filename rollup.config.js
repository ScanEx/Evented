import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.js',
        output: {	 
            file: 'dist/index.js',
            exports: 'auto',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [                      
            resolve({                
                moduleDirectories: ['node_modules', 'src']
            }),
            commonjs(),            
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['src/**']
            }),
        ],
    },       
];