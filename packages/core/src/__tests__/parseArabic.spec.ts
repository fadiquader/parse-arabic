import test from 'ava';
//
import {parseArabic} from '@parse-arabic/core';

test('Parse Arabic/Persian number to English', t => {
  t.is(parseArabic('1234'), 1234);
  t.is(parseArabic(123), 123);
  t.is(parseArabic('123aa'), NaN);
  t.is(parseArabic('a'), NaN);
  t.is(parseArabic(''), NaN);
  t.is(parseArabic(null), NaN);
  t.is(parseArabic(undefined), NaN);
});
