import { ReactNode } from 'react';

const Heading = ({
  heading,
  title,
  small,
}: {
  heading: ReactNode;
  title: ReactNode;
  small: ReactNode;
}) => {
  return (
    <div className="mx-auto my-5 max-w-md text-center md:my-20">
      <div className="relative">
        <h2 className="text-2xl font-black text-gray-700 uppercase md:text-6xl">
          {heading} <span className="text-[#800020]">{small}</span>
        </h2>
        <p className="absolute bottom-2 left-0 -z-10 hidden text-center text-2xl font-bold uppercase opacity-5 sm:flex md:text-9xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Heading;
