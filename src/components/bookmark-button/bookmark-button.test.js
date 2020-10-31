import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {BookmarkButton} from './bookmark-button';
import offers from '../../mocks/offers';
import {UserStatus} from '../../const';
import history from '../../history';


const TYPE = `place-card`;
const OFFER = offers[0];
const USER_STATUS = UserStatus.NO_AUTH;

const testing = () => {};

describe(`Should BookmarkButton render correctly`, () => {
  it(`Should BookmarkButton render correctly with mark`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <BookmarkButton
              mark
              type={TYPE}
              userStatus={USER_STATUS}
              offer={OFFER}
              changeFavoriteOffer={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should BookmarkButton render correctly without mark`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <BookmarkButton
              type={TYPE}
              userStatus={USER_STATUS}
              offer={OFFER}
              changeFavoriteOffer={testing}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
