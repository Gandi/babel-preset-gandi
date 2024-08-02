module.exports = [
  [
    'ES: object rest spread',
    `
      let b = {...a}
    `,
  ],
  [
    'ES: class properties',
    `
      class A { a = () => 'hello' }
    `,
  ],
  [
    'ES: static class properties',
    `
      class A { static a = 'hello' }
    `,
  ],
  [
    'ES: dynamic imports',
    `
      import('./a')
    `,
  ],
  [
    'ES: optional chaining',
    `
    let obj = {
      foo: {
        bar: {
          baz: 42,
        },
      },
    };

    let baz = obj?.foo?.bar?.baz; // 42

    let safe = obj?.qux?.baz; // undefined
    `,
  ],
  [
    'ES: nullish coalescing',
    `
    let obj = {};

    let foo = obj.foo ?? 'default';
    `,
  ],
  [
    'ES: async await',
    `
    (async function() {
      await foo();
    }());
    `,
  ],
  [
    'ES: Runtime ponyfills',
    `
      new Map()
      new Set()
      new Promise()
    `,
  ],

  [
    'ES: Promise.allSettled',
    `
    Promise.allSettled([
      Promise.resolve(1),
      Promise.resolve(2),
    ])
    .then((rs) => rs.forEach((r) => console.log(r.status)));
    `,
  ],
  [
    'ES: Object.entries',
    `
    Object.entries({ a: 1 });
    `,
  ],
  [
    'ES: Array.flatMap',
    `
    [1, 2].flatMap(x => [x * 2])
    `,
  ],
];
