import React from "react";

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {}
const Container: React.FC<ComponentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={` ${className} p-.5 `} {...rest}>
      {children}
    </div>
  );
};

export default Container;
