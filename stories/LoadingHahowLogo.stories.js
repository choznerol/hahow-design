/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import {
  number, text, withKnobs,
} from '@storybook/addon-knobs';
import React from 'react';

import { LoadingHahowLogo } from '../src';

export default {
  title: 'LoadingHahowLogo',
  decorators: [withKnobs],
  component: LoadingHahowLogo,
};

export const Playground = () => (
  <div>
    <LoadingHahowLogo
      className={text('className', 'my-class')}
      size={number('size', 120)}
    />
  </div>
);
