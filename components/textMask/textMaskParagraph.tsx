import TextMask from "./textMask";

interface IProps {
  text: string;
  delay?: number;
  speed?: number;
  lineDelay?: number;
}

const TextMaskParagraph = ({
  text,
  delay = 0,
  speed = 0.06,
  lineDelay = 0.3,
}: IProps) => {
  const lines = text.split("\n");
  return (
    <span className="inline-flex flex-col items-center w-full">
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block w-full">
          <TextMask
            text={line}
            delay={delay + lineIdx * lineDelay}
            speed={speed}
          />
        </span>
      ))}
    </span>
  );
};

export default TextMaskParagraph;
