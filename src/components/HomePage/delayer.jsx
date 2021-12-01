import React from 'react';
import PropTypes from 'prop-types';

class Delayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delayer.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
};

export default Delayer;