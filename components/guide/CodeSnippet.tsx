import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/oceanicNext";

type Props = {
  text: string;
};

export default function CodeSnippet({ text }: Props) {
  return (
    <div
      style={{
        textAlign: "start",
        padding: 8,
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: 16,
        width: 900,
        maxWidth: "95vw",
        backgroundColor: "#282c34",
        overflowX: "auto",
        fontSize: "1rem",
      }}
    >
      <Highlight {...defaultProps} code={text} language="tsx" theme={darkTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
