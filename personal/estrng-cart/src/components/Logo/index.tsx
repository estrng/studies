import { ImgHTMLAttributes } from 'react';

import { Container } from './styles';

export function Logo({ src, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  return <Container src={src} {...rest} />;
}

