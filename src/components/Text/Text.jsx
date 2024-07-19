export default function Text(props) {
  return (
    <p>
      {props.text.map((e) => (
        <>
          {e.paragraph ? (
            <span
              style={{
                fontSize: e.fontSize,
                lineHeight: "1.45em",
                fontWeight: e.bold && 700,
                fontStyle: e.italic && "italic",
              }}
            >
              {e.paragraph}
            </span>
          ) : (
            <a
              href={e.link}
              style={{
                fontSize: e.fontSize,
                lineHeight: "1.45em",
                fontWeight: e.bold && 700,
                fontStyle: e.italic && "italic",
                color: "#0d6efd",
              }}
              target={e.target}
            >
              {e.text}
            </a>
          )}
        </>
      ))}
    </p>
  );
}
