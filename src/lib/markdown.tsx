import React from "react";

function parseInline(text: string, prefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let matchIdx = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);

    let firstMatch: { type: "bold" | "link"; index: number; match: RegExpMatchArray } | null = null;

    if (boldMatch && boldMatch.index !== undefined) {
      firstMatch = { type: "bold", index: boldMatch.index, match: boldMatch };
    }
    if (linkMatch && linkMatch.index !== undefined) {
      if (!firstMatch || linkMatch.index < firstMatch.index) {
        firstMatch = { type: "link", index: linkMatch.index, match: linkMatch };
      }
    }

    if (!firstMatch) {
      parts.push(remaining);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(remaining.slice(0, firstMatch.index));
    }

    if (firstMatch.type === "bold") {
      parts.push(
        <strong key={`${prefix}-b${matchIdx}`} className="font-medium text-fg">
          {firstMatch.match[1]}
        </strong>,
      );
      remaining = remaining.slice(firstMatch.index + firstMatch.match[0].length);
    } else {
      parts.push(
        <a
          key={`${prefix}-l${matchIdx}`}
          href={firstMatch.match[2]}
          className="text-gold-2 underline underline-offset-2 hover:text-gold-1 transition-colors"
        >
          {firstMatch.match[1]}
        </a>,
      );
      remaining = remaining.slice(firstMatch.index + firstMatch.match[0].length);
    }
    matchIdx++;
  }

  return parts;
}

export function MarkdownContent({ text }: { text: string }) {
  const blocks = text.split("\n\n");

  return (
    <>
      {blocks.map((block, blockIdx) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.startsWith("- "));

        if (isList) {
          return (
            <ul key={`bl${blockIdx}`} className="ml-4 space-y-1 list-disc">
              {lines.map((line, lineIdx) => {
                const content = line.replace(/^- /, "");
                return (
                  <li
                    key={`li${blockIdx}-${lineIdx}`}
                    className="text-sm leading-relaxed text-fg-muted"
                  >
                    {parseInline(content, `li${blockIdx}-${lineIdx}`).map((node, i) => (
                      <React.Fragment key={i}>{node}</React.Fragment>
                    ))}
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p key={`p${blockIdx}`} className="text-sm leading-relaxed text-fg-muted">
            {parseInline(block, `p${blockIdx}`).map((node, i) => (
              <React.Fragment key={i}>{node}</React.Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}
