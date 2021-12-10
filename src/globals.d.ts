declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare type SvgElement = React.FC<React.SVGProps<SVGSVGElement>>;
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
