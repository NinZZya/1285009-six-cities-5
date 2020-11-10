import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BookmarkButton} from './bookmark-button';
import offers from '../../mocks/offers';
import {UserStatus} from '../../constants/const';

const TYPE = `place-card`;
const OFFER = offers[0];
const USER_STATUS = UserStatus.NO_AUTH;

configure({adapter: new Adapter()});

it(`Should BookmarkButton was pressed`, () => {
  const onChangeFavoriteOffer = jest.fn();

  const wrapper = shallow(
      <BookmarkButton
        mark
        type={TYPE}
        userStatus={USER_STATUS}
        offer={OFFER}
        onChangeFavoriteOffer={onChangeFavoriteOffer}
      />
  );

  const bookmarkButton = wrapper.find(`.button`);
  bookmarkButton.simulate(`click`);
  expect(onChangeFavoriteOffer).toHaveBeenCalledTimes(1);
});
