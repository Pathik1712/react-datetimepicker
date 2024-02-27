interface ComponentsProps<T extends HTMLElement>
  extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T> {}

type ElementProps<
  T extends HTMLElement,
  K extends Record<string, any>
> = ComponentsProps<T> & K

declare module "*.svg" {
  const content: any
  export default content
}
