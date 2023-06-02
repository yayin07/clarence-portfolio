import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(text.slice(0, index), {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 100 },
  });

  return (
    <span>
      {transitions((style, char) => (
        <animated.span style={style}>{char}</animated.span>
      ))}
    </span>
  );
};

export default TypewriterText;

{
  /* <TypewriterText text="Clarence Cabiles" /> */
}
