import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should render with title', () => {
    const wrapper = renderer.create(
        <ProductTitle title="Test Title" className='test-class' />
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();
  });

  test('should show name of product', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => <ProductTitle />
            }
        </ProductCard>
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();
  });

});
