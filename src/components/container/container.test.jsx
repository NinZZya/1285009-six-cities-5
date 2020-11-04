import React from 'react';
import renderer from 'react-test-renderer';
import Container from './container';


const CONTAINER_TYPE = `cities__places`;
const CLASS_NAME = `cities-places__container`;

describe(`Should Container render correctly`, () => {
  it(`Should Container render correctly without type and children`, () => {
    const tree = renderer
      .create(
          <Container>
            <div>Div 1</div>
            <div>Div 2</div>
          </Container>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Container render correctly with type and children`, () => {
    const tree = renderer
      .create(
          <Container type={CONTAINER_TYPE}>
            <div>Div 1</div>
            <div>Div 2</div>
          </Container>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Container render correctly with type, empty and children`, () => {
    const tree = renderer
      .create(
          <Container empty type={CONTAINER_TYPE}>
            <div>Div 1</div>
            <div>Div 2</div>
          </Container>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Container render correctly class name and children`, () => {
    const tree = renderer
      .create(
          <Container className={CLASS_NAME}>
            <div>Div 1</div>
            <div>Div 2</div>
          </Container>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
