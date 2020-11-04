import {
  calcRatePercent,
  convertToReviewDate,
  makeActionCreator,
  extend,
} from './utils';


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
