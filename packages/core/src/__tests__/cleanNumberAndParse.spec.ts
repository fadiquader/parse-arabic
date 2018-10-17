import test from 'ava';
//
import {cleanNumberAndParse} from '@parse-arabic/core';

test('Clean number from characters and parse to english', t => {
  t.is(cleanNumberAndParse('a123'), 123);
  t.is(cleanNumberAndParse(''), NaN);
});
