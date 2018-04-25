import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {

    static defaultProps = {
        className: '7c-react-loader',
        delay: 0,
        tag: 'div'
    };

    static propTypes = {
        loaded: PropTypes.bool.isRequired,
        delay: PropTypes.number,
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.instanceOf(classNames)
        ]),
        children: PropTypes.element,
        tag: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]),
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
        const {children, className, loaded, tag} = this.props;
        const loaderClassName = classNames({[className]: loaded});
        const Tag = tag;

        if (!this.state.isShownDelayedLoader) {
            return null;
        }

        return (
            <Tag className={loaderClassName}>
                {children}
            </Tag>
        )
    }
}