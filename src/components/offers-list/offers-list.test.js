// import React from 'react';
// import {Router} from 'react-router-dom';
// import renderer from 'react-test-renderer';
// import OffersList, {OffersListType} from './offers-list';
// import history from '../../history';
// import offers from '../../mocks/offers';


// const testing = () => {};

// describe(`Should OffersList render correctly`, () => {
//   it(`Should OffersList render correctly empty component`, () => {
//     const tree = renderer
//       .create(
//           <Router history={history}>
//             <OffersList />
//           </Router>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it(`Should OffersList render correctly whith offers`, () => {
//     const tree = renderer
//       .create(
//           <Router history={history}>
//             <OffersList
//               onOfferHover={testing}
//               offers={offers}
//             />
//           </Router>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it(`Should OffersList render correctly whith offers and favorites type`, () => {
//     const tree = renderer
//       .create(
//           <Router history={history}>
//             <OffersList
//               type={OffersListType.FAVORITES}
//               onOfferHover={testing}
//               offers={offers}
//             />
//           </Router>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it(`Should OffersList render correctly whith offers and main type`, () => {
//     const tree = renderer
//       .create(
//           <Router history={history}>
//             <OffersList
//               type={OffersListType.MAIN}
//               onOfferHover={testing}
//               offers={offers}
//             />
//           </Router>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });

//   it(`Should OffersList render correctly whith offers and near type`, () => {
//     const tree = renderer
//       .create(
//           <Router history={history}>
//             <OffersList
//               type={OffersListType.NEAR}
//               onOfferHover={testing}
//               offers={offers}
//             />
//           </Router>
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

describe(`Simple test`, () => {
  it(`2 + 2 = 4`, () => {
    expect(2 + 2).toBe(4);
  });
});
