# based-on

```javascript
var settings = basedOn({
    key: 'value',
    other: 'value2'
});

settings();
// { key: 'value', other: 'value2' }

settings({ test: 'ing' })
// { key: 'value', other: 'value2', test: 'ing' }

var otherSettings = settings.with({ other: 'true' });

otherSettings();
// { key: 'value', other: 'true' }

otherSettings({ key: 'test' });
// { key: 'test', other: 'true' }
```

## Install

npm:

```sh
npm install based-on
```

Bower:

```sh
bower install based-on
```

Or just download [from here](https://raw.github.com/kjbekkelund/based-on/master/index.js)
