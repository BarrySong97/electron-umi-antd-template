declare module '*.less' {
  const resource: { [className: string]: string };
  export = resource;
}

declare module '*.png';
declare module '*.svg';
declare module '*.module.less' {
  const classes: { [className: string]: string };
  export default classes;
}
