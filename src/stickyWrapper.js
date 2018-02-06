import React from 'react';
import PropTypes from 'prop-types';

export class StickySetter extends React.Component {
  componentDidMount() {
    const setInitialHeights = (elements) => {
      Array.prototype.forEach.call(elements, (sticky) => {
        sticky.setAttribute('data-sticky-initial', sticky.getBoundingClientRect().top);
      });
    };
    const stickies = document.querySelectorAll('[data-sticky]');
    setInitialHeights(stickies);

    document.addEventListener('scroll', () => {
      // TODO: Improve support url: https://stackoverflow.com/questions/20514596/document-documentelement-scrolltop-return-value-differs-in-chrome
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
      // Alternative to Array.prototype.foreach...
      [].forEach.call(stickies, (sticky) => {
        const stickyInitial = parseInt(sticky.dataset.stickyInitial, 10);
        const stickyEnter = parseInt(sticky.dataset.stickyEnter, 10) || stickyInitial;
        const stickyExit = parseInt(sticky.dataset.stickyExit, 10) || bottom;
        const offset = sticky.dataset.stickyOffset || 0;

        if (top >= stickyEnter && top <= stickyExit) {
          sticky.classList.add('sticky');
          sticky.setAttribute('style', `top:${offset};`);
        } else {
          sticky.classList.remove('sticky');
        }
      });
    });
  }
  render() {
    return <div />;
  }
}

const Sticky = ({
  className, enter, exit, children, offset,
}) => (
  <div
    className={`sticky ${className}`}
    data-sticky
    data-sticky-offset={offset}
    data-sticky-enter={enter}
    data-sticky-exit={exit}
  >
    {children}
  </div>
);
Sticky.defaultProps = {
  className: '',
  enter: '',
  exit: '',
  offset: '',
};
Sticky.propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  offset: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Sticky;
