# append-loader

Used to insert arbitrary content at the end of a module.

## Installation

```
npm install append-loader
```

## Usage
To inject Javascript, pass in a value to `content`. All other parameters will be ignored. For
example:

```
'append?content=' + encodeURIComponent('module.exports="foobar";module={exports:{}}')
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
