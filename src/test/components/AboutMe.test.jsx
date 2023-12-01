import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { AboutMe } from '../../Components/AboutMe';

const setup = () =>
  render(
    <AboutMe></AboutMe>
  );

describe('<AboutMe/> Render', () => {
  test('Should render component', async () => {
    setup();
  });
});

describe('<AboutMe/> UI Testing', () => {
  beforeEach(() => setup());
  afterEach(cleanup);
  test('Verify if it has the Title expected', async () => {
    const texts = ['About Me'];
    texts.map(async (texto) => {
      const label = await screen.findByText(texto);
      expect(label).toBeInTheDocument();
    });
  });
});
