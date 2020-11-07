import React from 'react';
import renderer from 'react-test-renderer';
import Message from './message';


const TITLE = `Title`;
const TEXT = `Text`;

describe(`Should Message render correctly`, () => {
  it(`Should Message render correctly with title`, () => {
    const tree = renderer
      .create(
          <Message
            title={TITLE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Message render correctly with text`, () => {
    const tree = renderer
      .create(
          <Message
            text={TEXT}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Message render correctly with title and text`, () => {
    const tree = renderer
      .create(
          <Message
            title={TITLE}
            text={TEXT}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should error Message render correctly with title`, () => {
    const tree = renderer
      .create(
          <Message
            error
            title={TITLE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should error Message render correctly with text`, () => {
    const tree = renderer
      .create(
          <Message
            error
            text={TEXT}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should error Message render correctly with title and text`, () => {
    const tree = renderer
      .create(
          <Message
            error
            title={TITLE}
            text={TEXT}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
