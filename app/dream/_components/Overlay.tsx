import { useState } from 'react';

interface Props {
  rectX: number;
  rectY: number;
  rectWidth: number;
  rectHeight: number;
  name: string;
}
export default function Overlay({
  rectX,
  rectY,
  rectWidth,
  rectHeight,
  name,
}: Props): JSX.Element {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div
      style={{
        left: rectX + 'px',
        top: rectY + 'px',
        width: rectWidth + 'px',
        height: rectHeight + 'px',
      }}
      className={`annotation-rect ${
        selected && 'bg-[#ffffff7e]'
      } rounded-lg absolute flex justify-center items-center`}>
      <Tooltip message={name}>
        <div
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
          onClick={(e) => {
            e.preventDefault();
            window.open('http://www.google.com/search?q=' + name, '_blank');
          }}
          className="ai-point bg-white w-4 h-4 rounded-full cursor-pointer"></div>
      </Tooltip>
    </div>
  );
}

import React, { ReactNode } from 'react';

export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span
        className="flex justify-center"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
        {children}
      </span>
      <div
        className={`absolute whitespace-nowrap bottom-full flex flex-col items-center  group-hover:flex ${
          !show ? 'hidden' : null
        }`}>
        <span className="relative z-10 p-2 leading-none text-base font-semibold text-white whitespace-no-wrap bg-gray-800 shadow-lg rounded-md">
          {message}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600" />
      </div>
    </div>
  );
};
