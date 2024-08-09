import { cn } from "@/lib/utils";
import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";

const classNameText = {
  h1: "text-7xl font-extrabold tracking-tight",
  h2: "border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold tracking-tight",
  h6: "text-base font-semibold tracking-tight",
};

interface TitleProps extends Omit<ComponentPropsWithRef<"h1">, "as"> {
  as?: ElementType & keyof typeof classNameText;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(function Title(
  { as: Component = "h1", className, children, ...props },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={cn(
        "scroll-m-20",
        classNameText[Component as keyof typeof classNameText],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

const Text = forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(function Paragraph(props, ref) {
  return (
    <p ref={ref} className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {props.children}
    </p>
  );
});

const Blockquote = forwardRef<
  HTMLQuoteElement,
  React.HTMLProps<HTMLQuoteElement>
>(function Blockquote(props, ref) {
  return (
    <blockquote ref={ref} className="mt-6 border-l-2 pl-6 italic" {...props}>
      {props.children}
    </blockquote>
  );
});

interface ListProps extends React.HTMLProps<HTMLUListElement> {
  items: (string | React.ReactNode | number)[];
}

const List = forwardRef<HTMLUListElement, ListProps>(function List(
  { children, items, ...restProps },
  ref,
) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" ref={ref} {...restProps}>
      {items
        ? items.map((item, index) => <li key={index}>{item}</li>)
        : children}
    </ul>
  );
});

const InlineCode = forwardRef<
  HTMLQuoteElement,
  React.HTMLProps<HTMLQuoteElement>
>(function InlineCode(props, ref) {
  return (
    <code
      ref={ref}
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    >
      {props.children}
    </code>
  );
});

const Typography = {
  Title,
  Text,
  Blockquote,
  List,
  InlineCode,
};

export default Typography;
