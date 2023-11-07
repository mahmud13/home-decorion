import Image from 'next/image';

export default function Card({ title, description, imgUrl }) {
  return (
    <div className="max-w-sm bg-white rounded shadow p-4">
      <div>
        <Image
          alt="header text"
          src={imgUrl}
          className="w-full h-64 lrounded-t-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="p-5 text-center">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
