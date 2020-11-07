import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferItem from './offers-item';
import {OffersListType} from '../../offers-list';
import offers from '../../../../mocks/offers';


const OFFER = offers[0];

configure({adapter: new Adapter()});

it(`Should OfferItem was mouse overed and mouse outed`, () => {
  const onOfferHover = jest.fn();

  const wrapper = shallow(
      <OfferItem
        type={OffersListType.MAIN}
        onOfferHover={onOfferHover}
        offer={OFFER}
      />
  );

  const imageLink = wrapper.find(`.place-card__image-link`);
  imageLink.simulate(`mouseOver`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  imageLink.simulate(`mouseOut`);
  expect(onOfferHover).toHaveBeenCalledTimes(2);

  const nameLink = wrapper.find(`.place-card__name-link`);
  nameLink.simulate(`mouseOver`);
  expect(onOfferHover).toHaveBeenCalledTimes(3);
  nameLink.simulate(`mouseOut`);
  expect(onOfferHover).toHaveBeenCalledTimes(4);
});
