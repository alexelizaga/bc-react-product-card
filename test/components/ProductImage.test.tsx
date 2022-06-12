import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render with image', () => {
    const wrapper = renderer.create(
        <ProductImage img='https://test-image.png' className='test-class' style={{ borderRadius: '5px' }} />
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();
  });

  test('should show image of product', () => {
    const wrapper = renderer.create(
        <ProductCard product={product2}>
            {
                () => <ProductImage />
            }
        </ProductCard>
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();
  });

});