import React, { useMemo } from "react";

// Render decorative hand-drawn images around the projects section.
// Uses all images with deterministic layout (no randomness) and tries to avoid covering cards.
export default function Doodles() {
  // Import all images in the handdrawn folder
  const importAll = (r) => r.keys().map(r);
  const allImages = useMemo(
    () =>
      importAll(
        require.context(
          "../assets/img/handdrawn",
          false,
          /\.(png|jpe?g|svg|webp)$/
        )
      ),
    []
  );

  // Deterministic placement along the container edges (top/right/bottom/left)
  // to avoid overlapping the central card grid
  const nodes = useMemo(() => {
    const count = allImages.length;
    if (!count) return null;
    const items = [];
    const topCount = Math.ceil(count * 0.32);
    const rightCount = Math.ceil(count * 0.18);
    const bottomCount = Math.ceil(count * 0.32);
    const leftCount = count - topCount - rightCount - bottomCount;

    let idx = 0;
    // Top edge: y ~ 8%, split left and right to leave a gap at center title
    const topLeftSlots = Math.floor(topCount * 0.5);
    const topRightSlots = topCount - topLeftSlots;
    for (let i = 0; i < topLeftSlots; i++, idx++) {
      const t = i / Math.max(1, topLeftSlots - 1);
      const left = 6 + t * 36; // 6% -> 42%
      const top = 8;
      const src = allImages[idx];
      const size = 54 + ((idx * 13) % 34); // 54-88
      const rotation = ((idx * 23) % 20) - 10;
      const opacity = 0.22 + ((idx * 7) % 10) / 100;
      items.push(
        <img key={`d-topL-${idx}`} src={src} alt="" aria-hidden="true" style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: "auto",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity,
          pointerEvents: "none",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.08))",
        }} />
      );
    }
    for (let i = 0; i < topRightSlots; i++, idx++) {
      const t = i / Math.max(1, topRightSlots - 1);
      const left = 58 + t * 36; // 58% -> 94%
      const top = 8;
      const src = allImages[idx];
      const size = 54 + ((idx * 13) % 34);
      const rotation = ((idx * 23) % 20) - 10;
      const opacity = 0.22 + ((idx * 7) % 10) / 100;
      items.push(
        <img key={`d-topR-${idx}`} src={src} alt="" aria-hidden="true" style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: "auto",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity,
          pointerEvents: "none",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.08))",
        }} />
      );
    }
    // Right edge: x ~ 96%, y 18% -> 90%
    for (let i = 0; i < rightCount; i++, idx++) {
      const t = i / Math.max(1, rightCount - 1);
      const top = 18 + t * 72;
      const left = 96;
      const src = allImages[idx];
      const size = 50 + ((idx * 11) % 36);
      const rotation = ((idx * 19) % 26) - 13;
      const opacity = 0.22 + ((idx * 5) % 10) / 100;
      items.push(
        <img key={`d-right-${idx}`} src={src} alt="" aria-hidden="true" style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: "auto",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity,
          pointerEvents: "none",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.08))",
        }} />
      );
    }
    // Bottom edge: y ~ 94%, left 8% -> 92%
    for (let i = 0; i < bottomCount; i++, idx++) {
      const t = i / Math.max(1, bottomCount - 1);
      const left = 8 + t * 84;
      const top = 94;
      const src = allImages[idx];
      const size = 58 + ((idx * 17) % 40);
      const rotation = ((idx * 13) % 24) - 12;
      const opacity = 0.22 + ((idx * 9) % 10) / 100;
      items.push(
        <img key={`d-bottom-${idx}`} src={src} alt="" aria-hidden="true" style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: "auto",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity,
          pointerEvents: "none",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.08))",
        }} />
      );
    }
    // Left edge: x ~ 4%, y 18% -> 90%
    for (let i = 0; i < leftCount; i++, idx++) {
      const t = i / Math.max(1, leftCount - 1);
      const top = 18 + t * 72;
      const left = 4;
      const src = allImages[idx];
      const size = 50 + ((idx * 11) % 36);
      const rotation = ((idx * 19) % 26) - 13;
      const opacity = 0.22 + ((idx * 5) % 10) / 100;
      items.push(
        <img key={`d-left-${idx}`} src={src} alt="" aria-hidden="true" style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: "auto",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          opacity,
          pointerEvents: "none",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.08))",
        }} />
      );
    }
    return items;
  }, [allImages]);

  return (
    <div
      className="projects-doodles"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      {nodes}
    </div>
  );
}


