import { MDXProvider } from '@mdx-js/react';
import { GatsbyBrowser, WrapRootElementBrowserArgs } from 'gatsby';
import React from 'react';

import * as components from '../../components/Mdx';
import { StoreProvider } from '../../store';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = (
  props: WrapRootElementBrowserArgs
) => (
  <MDXProvider
    components={components}
  >
    <StoreProvider>
      {props.element}
    </StoreProvider>
  </MDXProvider>
);
