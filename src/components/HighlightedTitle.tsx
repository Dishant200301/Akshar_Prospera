import React from "react";

interface HighlightedTitleProps {
  title: string;
  highlightWord: string;
  className?: string;
}

const HighlightedTitle: React.FC<HighlightedTitleProps> = ({ title, highlightWord, className }) => {
  const parts = title.split(new RegExp(`(${highlightWord})`, "gi")); // split, keeping word (case-insensitive)

  return (
    <h1 className={className}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlightWord.toLowerCase() ? (
          <span key={index} className="bg-gradient-primary bg-clip-text text-transparent">
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </h1>
  );
};

export default HighlightedTitle;
