import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('Should render a div App', () => {
    render(<App />);

    const divApp = screen.getByTestId("App");

    expect(divApp).toBeInTheDocument();
  });
});
