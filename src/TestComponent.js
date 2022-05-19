import React, { useState, useEffect, useRef } from "react";

const urls = [
  "https://random.imagecdn.app/500/150",
  "https://random.imagecdn.app/450/200",
  "https://random.imagecdn.app/400/250",
  "https://random.imagecdn.app/350/300",
];

export default function TestComponent() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div style={{ display: loading ? "block" : "none" }}>Loading images,</div>
      <div style={{ display: loading ? "none" : "block" }}>
        {urls.map((url) => (
          <img key={url} src={url} onLoad={imageLoaded} />
        ))}
      </div>
    </React.Fragment>
  );
}
