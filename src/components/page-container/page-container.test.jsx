import React from 'react';
import renderer from 'react-test-renderer';
import PageContainer from './page-container';


const PAGE_CONTAINER_TYPE = `index`;

describe(`Should PageContainer render correctly`, () => {
  it(`Should PageContainer render correctly without type and children`, () => {
    const tree = renderer
      .create(
          <PageContainer>
            <div>Div 1</div>
            <div>Div 2</div>
          </PageContainer>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PageContainer render correctly with type and children`, () => {
    const tree = renderer
      .create(
          <PageContainer type={PAGE_CONTAINER_TYPE}>
            <div>Div 1</div>
            <div>Div 2</div>
          </PageContainer>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should PageContainer render correctly with type, empty and children`, () => {
    const tree = renderer
      .create(
          <PageContainer empty type={PAGE_CONTAINER_TYPE}>
            <div>Div 1</div>
            <div>Div 2</div>
          </PageContainer>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
