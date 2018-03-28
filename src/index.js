import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent {

    static defaultProps = {
        delay: 0,
        className: '7c-react-loader'
    };

    static propTypes = {
        loaded: PropTypes.bool.isRequired,
        delay: PropTypes.number,
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.instanceOf(classNames)
        ]),
        children: PropTypes.element
    };

    constructor(props) {
        super(props);

        this.state = {
            isShownDelayedLoader: props.delay === 0,
            removeComponent: false
        };
    }

    componentDidMount() {
        this.loaderTimerId = setTimeout(() => this.setState({isShownDelayedLoader: true}), this.props.delay);
    }

    componentWillUnmount() {
        clearInterval(this.loaderTimerId);
    }

    render() {
        const {loaded, className, children} = this.props;
        const loaderClassName = classNames({[className]: loaded});

        if (!this.state.isShownDelayedLoader) {
            return null;
        }

        return (
            <div className={loaderClassName}>
                {children}
            </div>
        )
    }
}