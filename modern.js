const factory = require('./factory');

function modern(context, options) {
  return factory(
    Object.assign(
      {
        modules: false,
        useBuiltIns: true,
        targets: {
          browsers: [
            'Chrome >= 60',
            'Safari >= 10.1',
            'iOS >= 10.3',
            'Firefox >= 54',
            'Edge >= 15',
          ],
        },
      },
      options
    )
  );
}

module.exports = modern;
