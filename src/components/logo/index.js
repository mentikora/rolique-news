import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './styles.css';

class Logo extends Component {
  render() {
    return(

      <div className={`logo logo--${this.props.size}`}>
        <Typography 
        component='p'
        className="moto"
      >
        це life, як не крути :)
      </Typography>
        <svg id='logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 366.3 165.6'>
        <g fill={this.props.fill} id='XMLID_16_'>
            <path id='XMLID_126_' d='M76.5,43.6l-0.4,0c-20.7,0-33.1,14-33.1,37.5c0,16.6,10.5,34.5,33.5,34.5 c22.9,0,33.3-17.9,33.3-34.5C109.8,57.7,97.3,43.6,76.5,43.6z M76.3,106.4c-15.2,0-22.8-8.8-22.8-26.1c0-11.7,2.4-27.2,22.9-27.2 c9.8,0.1,22.8,2.9,22.8,27.2C99.2,97.8,91.7,106.3,76.3,106.4z'/>
            <path id='XMLID_123_' d='M334.2,106.4c-14.4,0-22-7.9-22.8-23.5h54.8l0-0.4c0-0.4,0-0.9,0-1.3 c0-24.2-11.4-37.5-32-37.5H334c-20.8,0-33.2,14-33.2,37.5c0,17.2,10.2,34.5,32.9,34.5h0.6c23,0,30-16.9,31.9-24.3h-10.6 C351.5,106.3,338.5,106.3,334.2,106.4z M334.3,53.1c9,0.1,19.5,2.6,21.3,21.8h-44C313.5,55.4,325.5,53.1,334.3,53.1z'/>
            <path id='XMLID_122_' d='M9.7,56.7V44.3H0v70.2h10.5V69.5c0-10.1,2.7-16.4,15.8-16.4h16.2v-9.5h-14 C20,43.6,12.2,49.1,9.7,56.7z'/>
            <rect id='XMLID_121_' x='138.5' y='43.6' width='10.6' height='70.8' />
            <path id='XMLID_120_' d='M282.2,84.8c0,17.8-11.7,21.5-21.6,21.5c-8,0-18.6-2.3-18.6-22V43.6h-10.5l0,40 c0,13.7,2.9,32,27.6,32h1.5c9.7,0,17.9-6,22.4-16v14.9h9.9V43.6h-10.6V84.8z'/>
            <path id='XMLID_117_' d='M211.3,57.3c-4.5-9-12.2-13.6-22.9-13.7l-0.6,0c-19.7,0-31,13.7-31,37.5 c0,16.7,7.8,34.5,29.9,34.5h1.5c11.9,0,18.6-6.9,22.3-13.3v50.3h10.8V43.6h-9.9V57.3z M210.3,84.8c0,19.3-12.6,21.5-22.1,21.5 c-5.7,0-20.8,0-20.8-26.1c0-13.4,2.5-27.2,20.9-27.2c10.2,0,22,2.4,22,21.4L210.3,84.8z'/>
            <rect id='XMLID_116_' x='117.4' width='10.6' height='114.5' />
            <rect id='XMLID_115_' x='138.5' width='10.6' height='26.6' />
        </g>
        <g
          fill={this.props.fill}
          display={this.props.extended ? '' : 'none'}
        >
          <path d='M23.8,165.1L3.7,139.8v25.3H0V133h3.1l20.1,25.4V133h3.7v32.2H23.8z'/>
          <path d='M50.4,133h18.2v3.7H54.3V147h12.9v3.7H54.3v10.8H69v3.7H50.4V133z'/>
          <path d='M120.6,165.1H117l-8.8-25.9l-8.6,25.9H96L86.2,133h4.4l7.5,25.6l8.3-25.6h3.8l8.6,25.6l7.3-25.6h3.8 L120.6,165.1z'/>
          <path d='M147.2,140.9c0-4.6,3.6-8.4,9.7-8.4c3.7,0,7,1.3,8.9,3.4l-2.1,2.9c-1.7-1.7-3.7-2.6-6.5-2.6 c-3.6,0-5.8,1.9-5.8,4.7c0,8,15.7,5,15.7,16c0,5.3-4.6,8.7-10.5,8.7c-4,0-8.6-1.8-10.2-4.8l2.3-2.7c1.9,2.5,5.2,3.8,8,3.8 c3.4,0,6.3-1.7,6.3-5C163,149,147.2,151.6,147.2,140.9z'/>
        </g>
        </svg>

      </div>
    );
  }
}

Logo.propTypes = {
  fill: PropTypes.string,
  extended: PropTypes.bool,
  size: PropTypes.string
}
Logo.defaultProps = {
  fill: 'var(--primary-white)',
  extended: false,
  size: 'large'
}

export default Logo;
