# 7c-react-loader
Simple “loader” library for ReactJS. Makes beautiful, animated loader.

## Installation
Install by npm/yarn with 7c-react-loader

```
npm install 7c-react-loader --save
```
or
```
yarn add 7c-react-loader
```

## Basic usage
```js
import Loader from '7c-react-loader';

<Loader active={true}>
    <div>Lorem ipsum</div>
</Loader>
```

## Properties
| Prop name  | Is required | Type of value | Description | Default value |
| --- | --- | --- | --- | --- |
| active | YES | boolean | Loader should be shown. For 'true' CSS classes defined in className prop will be added to <Loader> element | - |
| children | NO  | element | Content to render | - |
| activeClassName | NO  | Any type accepted by [classNames](https://www.npmjs.com/package/classnames) | CSS classes that will be added to <Loader> element when it is active | "7c-react-loader-active" |
| delay | NO | integer | Delayed defined in milliseconds after with CSS classes will be applied to <Loader> element | 0 |
| disabledClassName | NO | Any type accepted by [classNames](https://www.npmjs.com/package/classnames) | CSS classes that will be added to <Loader> element when it isn't active (is disabled)| "7c-react-loader-disabled" |
| tag | NO  | string or function | Tag of <Loader> component | div |

## Usage
CSS classes (default: "7c-react-loader-active") will be applied to <Loader> element immediately. Children props will be rendered regardless of that.
```js
<Loader active={true}>
    ...
</Loader>
```

CSS classes will be applied to <Loader> after 500 milliseconds.
```js
<Loader active={true} delay={500}>
   ...
```

CSS class "loader-active" will be applied to <Loader> after 500 milliseconds. Otherwise will be applied "loader-disabled" CSS class.
<Loader> element will be rendered as "span".
```js
<Loader active={true} activeClassName="loader-active" disabledClassName="loader-disabled" tag="span" delay={500}>
   ...
```

## Dependencies
7c-react-loader requires:
  - [React](https://facebook.github.io/react/index.html) >= 16.3.2
  - [classNames](https://www.npmjs.com/package/classnames) >= 2.2.5
  
### License
MIT License

Copyright (c) 2018 Michał Parulski [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
