import { PropsWithChildren, useState } from "react";
import { Item } from "../../_interfaces/Item";

interface Props {
  item: Item;
  parentImg: HTMLImageElement;
  onItemClicked: () => void;
}
export default function Overlay({ item, parentImg, onItemClicked }: Props): JSX.Element {
  const [selected, setSelected] = useState<boolean>(false);

  const imageWidth = parentImg.width;
  const imageHeight = parentImg.height;
  const { vertices } = item;
  const minX = Math.min(...vertices.map((vertex) => vertex.x * imageWidth));
  const minY = Math.min(...vertices.map((vertex) => vertex.y * imageHeight));
  const maxX = Math.max(...vertices.map((vertex) => vertex.x * imageWidth));
  const maxY = Math.max(...vertices.map((vertex) => vertex.y * imageHeight));
  const rectX = minX;
  const rectY = minY;
  const rectWidth = maxX - minX;
  const rectHeight = maxY - minY;
  return (
    <div
      style={{
        left: rectX + "px",
        top: `${rectY}px`,
        width: rectWidth + "px",
        height: rectHeight + "px",
      }}
      className={`annotation-rect ${
        selected && "bg-[#ffffff7e]"
      } rounded-lg absolute flex justify-center items-center`}
    >
      <Tooltip message={item.name}>
        <div
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
          onClick={() => onItemClicked()}
          className="ai-point bg-white w-4 h-4 rounded-full cursor-pointer"
        ></div>
      </Tooltip>
    </div>
  );
}

export const Tooltip = ({
  message,
  children,
}: PropsWithChildren<{message: string}>) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span
        className="flex justify-center"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={`absolute whitespace-nowrap bottom-full flex flex-col items-center  group-hover:flex ${
          !show ? "hidden" : null
        }`}
      >
        <span className="relative z-10 p-2 leading-none text-base font-semibold text-white whitespace-no-wrap bg-gray-800 shadow-lg rounded-md">
          {message}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600" />
      </div>
    </div>
  );
};
