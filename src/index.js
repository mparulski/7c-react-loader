import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const _manageDelayTimer = Symbol();

export default class Loader extends Component {

    static defaultProps = {
        activeClassName: '7c-react-loader-active',
        children: null,
        delay: 0,
        disabledClassName: '7c-react-loader-disabled',
        tag: 'div'
    };

    static propTypes = {
        active: PropTypes.bool.isRequired,
        activeClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.instanceOf(classNames)
        ]),
        children: PropTypes.element,
        delay: PropTypes.number,
        disabledClassName: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.instanceOf(classNames)
        ]),
        duration: PropTypes.number,
        tag: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]),
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoaderActive: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {isLoaderActive: !prevState.isLoaderActive && nextProps.active && nextProps.delay === 0};

    }

    componentDidMount() {
        this[_manageDelayTimer]();
    }

    componentDidUpdate() {
        this[_manageDelayTimer]();
    }

    componentWillUnmount() {
        clearInterval(this.delayedTimerId);
    }

    render() {
        const {children, activeClassName, disabledClassName, tag} = this.props;
        const {isLoaderActive} = this.state;
        const className = classNames({
            [activeClassName]: isLoaderActive,
            [disabledClassName]: !isLoaderActive
        });
        const Tag = tag;

        return (
            <Tag className={className}>
                {children}
            </Tag>
        )
    }

    [_manageDelayTimer]() {
        const {active, delay} = this.props;
        const {isLoaderActive} = this.state;

        if (!this.delayedTimerId && active && !isLoaderActive && delay > 0) {
            this.delayedTimerId = setTimeout(() => this.setState((prevState, props) => {
                return {isLoaderActive: props.active}
            }), delay);
        }

        if (this.delayedTimerId && !active) {
            clearTimeout(this.delayedTimerId);
            this.delayedTimerId = null;
        }
    }
}