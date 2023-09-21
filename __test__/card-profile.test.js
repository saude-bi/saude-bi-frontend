import { render, screen } from '@testing-library/react';
import { CardProfile } from '../src/components/CardProfile/CardProfile';
import '@testing-library/jest-dom';

describe('CardProfile', () => {
  it('renders a title on card profile', () => {
    render(<CardProfile title="teste" text="teste2" />);

    const heading = screen.getByRole('heading', {
      name: /teste/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
