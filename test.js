var test = require('tape');
var basedOn = require('./index');

test('contains sent in values', function(t){
    t.plan(1);
    var settings = basedOn({ key: 'value' });

    var obj = settings();

    t.equal(obj.key, 'value');
});

test('includes values added when calling created function', function(t) {
    t.plan(1);
    var settings = basedOn({ key: 'value' });

    var obj = settings({ key2: 'test' });

    t.equal(obj.key2, 'test');
});

test('can override a key', function(t) {
    t.plan(1);
    var settings = basedOn({ key: 'value' });
    var newSettings = settings.with({ key: 'test' });

    var obj = newSettings();

    t.equal(obj.key, 'test');
});

test('keeps keys that are not overridden', function(t) {
    t.plan(2);
    var settings = basedOn({ key: 'value' });
    var newSettings = settings.with({ key2: 'test' });

    var obj = newSettings();

    t.equal(obj.key, 'value');
    t.equal(obj.key2, 'test');
});

test('can specify values when newly created function is used', function(t) {
    t.plan(1);
    var settings = basedOn({ key: 'value' });
    var newSettings = settings.with({ key2: 'test' });

    var obj = newSettings({ key3: 'great' });

    t.equal(obj.key3, 'great');
});
