module.exports = [
  [
    'React: jsx',
    `
      let A = () => <div>hello</div>
    `,
  ],
  [
    'React: jsx spread',
    `
      <div a {...b}>hello</div>
    `,
  ],

  [
    'React: function component',
    `
      function Button({ type = 'button', children, ...extraProps }) {
        return (
          <button type={type} {...extraProps}>
            {children}
          </button>
        );
      }
    `,
  ],
  [
    'React: class component',
    `
      import { Component } from 'react';

      class Button extends Component {
        handleClick = async (evt) => {
          evt.preventDefault();
          await fetch('/foo');
        }

        render() {
          const { type = 'button', children, ...extraProps } = this.props;

          return (
            <button type={type} onClick={this.handleClick} {...extraProps}>
              {children}
            </button>
          );
        }
      }
    `,
  ],
];
