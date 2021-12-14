import { GatsbySSR, ReplaceRendererArgs } from 'gatsby';
import React from 'react';

export const replaceRenderer: GatsbySSR['replaceRenderer'] = (
  args: ReplaceRendererArgs
): any => { // eslint-disable-line @typescript-eslint/no-explicit-any
  const { setPostBodyComponents } = args;
  setPostBodyComponents([
    <script
      id="ze-snippet"
      key="zendesk-chat"
      // eslint-disable-next-line max-len
      src="https://static.zdassets.com/ekr/snippet.js?key=e32809b5-6032-4c2f-b1f9-63931adc0cc1"
    />,
  ]);
};
