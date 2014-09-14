module.exports.deleteMe = deleteMe;

// require longjohn to have long stack traces in dev environment
if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}

function deleteMe(){
	console.log('index.deleteMe function is used to check test setup. If everything is ok - delete the function');
}