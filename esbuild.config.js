require('esbuild').build({
  entryPoints: ['./src/main.js'],
  outdir: './public/assets/js',
  target : [ 'chrome58' ,'edge16','firefox57', 'opera45', 'safari11'],
  bundle: true, 
  minify: true, 
  sourcemap: true, 
  watch: true
})