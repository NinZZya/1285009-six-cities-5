import React from 'react';
import renderer from 'react-test-renderer';
import Star from './star';
import {STARS} from '../../../../../../constants/const';

const star = STARS[1];
const testing = () => {};

it(`Should Star render correctly`, () => {
  const tree = renderer
    .create(
        <Star
          star ={star}
          onStarChange={testing}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
