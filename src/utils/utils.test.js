import {
  calcRatePercent,
  convertToReviewDate,
  makeActionCreator,
  extend,
  SortOffers,
  toFirstUpperCase,
} from './utils';

import offers, {
  sortedByRateOffers,
  sortedFromHightToLowOffers,
  sortedFromLowToHightOffers,
} from '../mocks/offers';

import {SortType} from '../constants/const';


describe(`Testing calcRatePercent`, () => {
  it(`If rate 5 then 100 (%)`, () => {
    expect(calcRatePercent(5)).toBe(100);
  });

  it(`If rate 4 then 80 (%)`, () => {
    expect(calcRatePercent(4)).toBe(80);
  });

  it(`If rate 0 then 0 (%)`, () => {
    expect(calcRatePercent(0)).toBe(0);
  });
});


const TestDate = {
  SEP_2017: `Mon Sep 04 2017 03:24:33 GMT+0300 (Moscow Standard Time)`,
  JUL_2020: `Sat Jul 11 2020 19:23:50 GMT+0300 (Moscow Standard Time)`,
  NOV_2020: `Wed Nov 04 2020 13:07:40 GMT+0300 (Moscow Standard Time)`,
};

const FormatDate = {
  SEP_2017: `September 2017`,
  JUL_2020: `July 2020`,
  NOV_2020: `November 2020`,
};

describe(`Testing convertToReviewDate`, () => {
  it(`Date ${TestDate.SEP_2017} format to ${FormatDate.SEP_2017}`, () => {
    expect(convertToReviewDate(TestDate.SEP_2017)).toBe(FormatDate.SEP_2017);
  });

  it(`Date ${TestDate.JUL_2020} format to ${FormatDate.JUL_2020}`, () => {
    expect(convertToReviewDate(TestDate.JUL_2020)).toBe(FormatDate.JUL_2020);
  });

  it(`Date ${TestDate.NOV_2020} format to ${FormatDate.NOV_2020}`, () => {
    expect(convertToReviewDate(TestDate.NOV_2020)).toBe(FormatDate.NOV_2020);
  });
});


const TEST_ACTION_TYPE = `TEST_ACTION_TYPE`;
const TEST_PAYLOAD = `TEST_PAYLOAD`;
const SET_TEST_VALUE = `payload=>({type,payload})`;

const TEST_ACTION = {
  type: TEST_ACTION_TYPE,
  payload: TEST_PAYLOAD,
};

describe(`Testing makeActionCreator`, () => {
  it(`Function makeActionCreator return new function`, () => {
    const setTestValue = makeActionCreator(TEST_ACTION_TYPE);
    const isFunction = typeof setTestValue === `function`;
    expect(isFunction).toBe(true);
  });

  it(`Function makeActionCreator return ${SET_TEST_VALUE}`, () => {
    const setTestValue = makeActionCreator(TEST_ACTION_TYPE);
    expect(
        String(setTestValue).replace(/\s/g, ``)
    ).toBe(SET_TEST_VALUE);
  });

  it(`Function makeActionCreator with type ${TEST_ACTION_TYPE} and payload ${TEST_PAYLOAD} return ${TEST_ACTION}`, () => {
    const setTestValue = makeActionCreator(TEST_ACTION_TYPE);
    expect(setTestValue(TEST_PAYLOAD)).toMatchObject(TEST_ACTION);
  });
});

const objTestA = {
  a: `a`,
};

const objTestB = {
  b: `b`,
};

const objTestC = {
  c: `c`,
};

const objTestAB = {
  a: `a`,
  b: `b`,
};

const objTestABC = {
  a: `a`,
  b: `b`,
  c: `c`,
};

describe(`Testing extend`, () => {
  it(`Object ${objTestA} extends ${objTestB} to be ${objTestAB}`, () => {
    expect(extend(objTestA, objTestB)).toMatchObject(objTestAB);
  });

  it(`Object ${objTestA} extends ${objTestB} and ${objTestC} to be ${objTestAB}`, () => {
    expect(extend(objTestA, objTestB, objTestC)).toMatchObject(objTestABC);
  });
});


describe(`Testing SortOffers`, () => {
  it(`Sorting offers by ${SortType.POPULAR}`, () => {
    expect(SortOffers[SortType.POPULAR](offers)).toEqual(offers);
  });

  it(`Sorting offers by ${SortType.TOP_RATED_FIRST}`, () => {
    expect(SortOffers[SortType.TOP_RATED_FIRST](offers)).toEqual(sortedByRateOffers);
  });

  it(`Sorting offers by ${SortType.HIGH_TO_LOW}`, () => {
    expect(SortOffers[SortType.HIGH_TO_LOW](offers)).toEqual(sortedFromHightToLowOffers);
  });

  it(`Sorting offers by ${SortType.LOW_TO_HIGH}`, () => {
    expect(SortOffers[SortType.LOW_TO_HIGH](offers)).toEqual(sortedFromLowToHightOffers);
  });
});

const testInWord1 = `a`;
const testOutWord1 = `A`;

const testInWord2 = `test`;
const testOutWord2 = `Test`;

describe(`Testing toFirstUpperCase`, () => {
  it(`Word ${testInWord1} transform to ${testOutWord1}`, () => {
    expect(toFirstUpperCase(testInWord1)).toEqual(testOutWord1);
  });

  it(`Word ${testInWord2} transform to ${testOutWord2}`, () => {
    expect(toFirstUpperCase(testInWord2)).toEqual(testOutWord2);
  });
});
