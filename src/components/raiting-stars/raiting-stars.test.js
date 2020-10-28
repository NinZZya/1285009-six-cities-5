import React from 'react';
import renderer from 'react-test-renderer';
import RaitingStars from './raiting-stars';


const RAITING_TYPE = `place-card__stars`;

describe(`Should RaitingStars render correctly`, () => {
  it(`Should RaitingStars render correctly without type and rate 0`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            rate={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should RaitingStars render correctly without type and rate 2.5`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            rate={2.5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should RaitingStars render correctly without type and rate 5`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            rate={5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should RaitingStars render correctly with type and rate 0`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            type={RAITING_TYPE}
            rate={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should RaitingStars render correctly with type and rate 2.5`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            type={RAITING_TYPE}
            rate={2.5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should RaitingStars render correctly with type and rate 5`, () => {
    const tree = renderer
      .create(
          <RaitingStars
            type={RAITING_TYPE}
            rate={5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
