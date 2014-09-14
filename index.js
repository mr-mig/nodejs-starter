// require longjohn to have long stack traces in dev environment
if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}