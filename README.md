
# snowpack-svgr-plugin


this plugin will let you import SVG files and use them as a react component and transform them to browser as normal SVG

>This plugin use [svgr](https://github.com/gregberge/svgr) to transform/convert SVG Files into ready to use React components, then use [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) to transform it to browser code

### Installing
```sh
$ npm i -D snowpack-svgr-plugin
```
### Getting start
Add the plugin to `snowpack.config.js`

```
  plugins: [
   ...
      'snowpack-svgr-plugin',
  ]

```

#### Supported files
We use an odd technique to prevent transforming all SVG files

only files that endsup with `*.svgr.svg` will be transformed
>this was the quicker solution that come to my mind to overpass the lake of filtering option in the snowpack API

 the reason of filtering is because this plugin will replace the targeted files with the generated code so you will not be able to use these JS files as normal SVG like inside HTML `<img>` tag or whatever,but with filtering you can control this habbet.
 ##### example 

`home.svg`->`not transformed`

`messages.svgr.svg`->`transformed` 

### Using with ReactJS

Import your SVG files as you normally do
```
import mySvg from '../mySvg.svgr.svg';
```
then use it as a normal react component
```
 const App=() {
  return (
    <div className="app">
   <mySvg/>
      </div>)

```
### Using with ReactTs
using TypeScript you just need to add the type definition to `*.svgr.svg`
 file add those Line to your `d.ts` file:

```
declare module '*.svgr.svg' {
  const ref: React.ForwardRefRenderFunction<
    SVGSVGElement,
    React.SVGAttributes<SVGSVGElement>
  >;
  export default ref;
}
```
now you will be able to import your `svgr.svg` files without type problems and use them the same as normal JS with some types spices.




# What's next
hopfully its will be a better solution for filtering like to be able to include/exclude folders.
 Im not planing on investigate more in the Snowpack API But I will accept the Good Solutions and ideas via PR so if someone want to help or fork i will appreciate it.
- Also if you have any problems or issues using this plugin please make sure to [Create a Issue](https://github.com/danzo7/snowpack-svgr-plugin/issues) 


<hr/>
Finally, Big thank to myself as this was a personal problem that i need to solve
