# react-dev-cli

## 安装配置 Babel

```
yarn add babel-core babel-loader --dev
yarn add babel-preset-es2015 babel-preset-react --dev
```

```
touch .babelrc
vim .babelrc
```

```json
{
	"presets":["es2015","react"]
}
```

## 安装配置 ESLint

```
yarn add eslint eslint-loader --dev
yarn add eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --dev
yarn add eslint-config-airbnb --dev
```

```
touch .eslintrc
vim .eslintrc
```

```js
{
	"extends":"airbnb",
	"rules":{
		"comma-dangle":["error","never"]
	}
}
```

## 安装配置 webpack

```
yarn add webpack webpack-dev-server --dev
yarn add html-webpack-plugin --dev
```

```
touch webpack.config.js
vim webpack.config.js
```

```js

```

## 安装 React

```
yarn add react react-dom --dev
```

## 添加CSS样式

```
yarn add style-loader css-loader --dev
```




































