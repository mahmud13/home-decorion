import Image, { StaticImageData } from 'next/image';

interface serviceType {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

export default function Service({
  service,
}: {
  service: serviceType;
}): JSX.Element {
  const { icon, title, description } = service;

  return (
    <div className="max-w-sm bg-white rounded shadow py-8 px-6 relative before:content-[''] before:h-1 before:w-5 before:bg-[#ff4800] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:before:w-full cursor-default group">
      <div className="text-[#ff4800] mb-5 bg-[#ffe4d9] group-hover:bg-[#ff4800d3] rounded-md text-center transition duration-500 w-20 h-20 p-4">
        <Image
          alt={title}
          src={icon}
          width={80}
          height={80}
        />
      </div>
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-[#212529] ">
          {title}
        </h5>
      </div>
      <p className="font-normal text-[#57647c] text-base leading-[18px] mt-3">
        {description}
      </p>
    </div>
  );
}
