// components/ContextMenu.tsx
import React from 'react';

interface ContextMenuProps {
  visible: boolean;
  x: number;
  y: number;
  onClose: () => void;
  onOpenImage: () => void;
  onDownloadImage: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ visible, x, y, onClose, onOpenImage, onDownloadImage }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed bg-zinc-950 text-gray-400 rounded shadow-lg z-50"
      style={{ top: y, left: x }}
      onMouseLeave={onClose}
    >
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer" onClick={onOpenImage}>
          <span className="mr-2">📷</span> Open SVG in new tab
        </li>
        <li className="px-4 py-2 hover:bg-gray-900 cursor-pointer" onClick={onDownloadImage}>
          <span className="mr-2">💾</span> Download logo as SVG
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;