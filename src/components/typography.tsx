import { PropsWithChildren } from 'react';

export const Heading1 = ({ children }: PropsWithChildren) => {
  return <h1 className="pb-2 text-4xl font-bold">{children}</h1>;
};

export const Heading2 = ({ children }: PropsWithChildren) => {
  return <h2 className="pb-2 text-2xl font-semibold">{children}</h2>;
};

export const Heading3 = ({ children }: PropsWithChildren) => {
  return <h3 className="pb-2 text-xl font-semibold">{children}</h3>;
};

export const Heading4 = ({ children }: PropsWithChildren) => {
  return <h4 className="pb-2 text-lg">{children}</h4>;
};

export const Heading5 = ({ children }: PropsWithChildren) => {
  return <h5 className="pb-2">{children}</h5>;
};

export const Heading6 = ({ children }: PropsWithChildren) => {
  return <h6 className="pb-1 text-sm">{children}</h6>;
};
