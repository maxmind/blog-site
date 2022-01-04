import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import * as React from 'react';

type ILink = Omit<GatsbyLinkProps<Record<string, unknown>>,'ref'>

const Link: React.FC<ILink> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { to, ...rest } = props;
  return (
    <GatsbyLink
      {...rest}
      // eslint-disable-next-line react/prop-types
      to={to}
    />
  );
};

export default Link;
