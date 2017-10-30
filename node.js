const factory = require('./factory');

function node(context, options) {
  return factory(
    Object.assign(
      {
        useBuiltIns: true,
        targets: {
          node: 8,
        },
      },
      options
    )
  );
}

module.exports = node;
