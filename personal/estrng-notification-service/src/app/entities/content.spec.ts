import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create Content', () => {
    const content = new Content('Solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('should not be able to create Content with less then 5 chacacters.', () => {
    expect(() => new Content('')).toThrow(
      'Content must be between 5 and 240 characters.',
    );
  });

  it('should not be able to create Content with more then 240 chacacters.', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(
      'Content must be between 5 and 240 characters.',
    );
  });
});
