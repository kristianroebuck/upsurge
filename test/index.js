import test from 'tape';
import uploadr from '../src/index';


test('uploadr', t => {
    const result = uploadr();
    t.equal(result, 'Hello');
    t.end();
});
