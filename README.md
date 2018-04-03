# 7c-react-loader
Simple “loader” library for ReactJS. Makes beautiful, animated loader.

## Installation
Install by npm/yarn with 7c-react-loader

```js
npm install 7c-react-loader --save
```
or
```js
yarn add 7c-react-loader -D
```

## Basic usage
```js
import Loader from '7c-react-loader';

<Loader loaded={true}>
    <div>Lorem ipsum</div>
</Loader>
```

## Props
| Prop name | Is required | Type of value | Description | Default value |
| ---       | --- | ---                                                                         | --- | ---               |
| loaded    | YES | boolean                                                                     | For 'true' CSS classes defined in className prop will be added to <Loader> element       | -                 |
| delay     | NO  | integer                                                                     | Delayed defined in milliseconds after with CSS classes will be applied to <Loader> element | 0                 |
| className | NO  | Any type accepted by [classNames](https://www.npmjs.com/package/classnames) | CSS classes that will be added to <Loader> element for loader={true}                     | "7c-react-loader" |
| children  | NO  | element                                                                     | Content to render | -                 |

## Usage
CSS classes (default: "7c-react-loader") will be applied to <Loader> element immediately. Children props will be rendered regardless of that.
```js
<Loader loaded={true}>
    ...
</Loader>
```

CSS classes  will be applied to <Loader> after 500 milliseconds.
```js
<Loader loaded={true} delay={500}>
   ...
```

## Dependencies
7c-react-loader requires:
  - [React](https://facebook.github.io/react/index.html)
  - [classNames](https://www.npmjs.com/package/classnames)
  
### License
MIT License

Copyright (c) 2018 Michał Parulski [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)