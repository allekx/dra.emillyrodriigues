type OgFrameProps = {
  kicker: string;
  title: string;
};

export function OgFrame({ kicker, title }: OgFrameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#F7F4F0",
        color: "#3A322C",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#8A7E74",
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 64,
          letterSpacing: -1,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
    </div>
  );
}
