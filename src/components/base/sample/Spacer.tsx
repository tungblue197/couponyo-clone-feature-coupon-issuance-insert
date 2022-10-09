import React from 'react';

interface SpacerProps {
  size?: number;
  vertical?: boolean;
}

export default function Spacer({ size = 10, vertical = false }: SpacerProps) {
  return <div style={vertical ? { height: size } : { width: size, display: 'inline-block', flexShrink: 0 }} />;
}
