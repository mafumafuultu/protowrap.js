# ProtoWrap.js

Extend prototype safely.

## Useage
```html
<script src='./protowrap.js'>
```

```js
const alias = $$(
	// constructor.name
	'line',

	// property object
	{
		_ : {
			configurable: true,
			get () {
				let {id, x1, y1, x2, y2} = this;
				return Object.entries({id, x1, y1, x2, y2}).reduce((e, [k, v]) => (e.setAttribute(k, v), e) , document.createElementNS('http://www.w3.org/2000/svg', 'line'));
			}
		}
	},

	// prototype object
	{
		p1: {
			writeable: true,
			value (x,y) {
				return this.x1 = x, this.y1 = y, this;
			}
		},
		p2: {
			writeable: true,
			value (x,y) {
				return this.x2 = x, this.y2 = y, this;
			}
		}
	}
);


alias.line('elemID').p1(10, 10).p2(20, 20)._
// <line id="elemID" x1="10" y1="10" x2="20" y2="20"></line>
```