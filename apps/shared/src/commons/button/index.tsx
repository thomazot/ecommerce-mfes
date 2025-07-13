'use client';

import { useState } from 'react';

export const Button = () => {
  const [open, setOpen] = useState(false);
  return (
    <button
      data-open={open ? 'true' : 'false'}
      onClick={() => setOpen((old) => !old)}
      className="bg-blue-950 px-3 py-3 text-white"
    >
      Btton
    </button>
  );
};
