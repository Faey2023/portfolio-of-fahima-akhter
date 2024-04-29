import Heading from '@/components/Shared/designs/Heading';
import { IProject } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import projectData from '../../../public/project.json';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Heading heading={'My'} small={'Projects'} title={'works'} />
      <div className="mx-auto mb-5 grid max-w-5xl grid-cols-1 gap-5 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {projectData.map((project: IProject) => (
          <div key={project.id}>
            <p className="font-bold text-[#800020]">{project.project_title}</p>

            <div className="relative h-48 cursor-pointer overflow-hidden border-2 border-[#800020] shadow-lg">
              <Image
                src={project.imageScroll}
                alt="Image"
                height={100}
                width={320}
                className="transform transition-all duration-[16000ms] hover:-translate-y-full"
              />
            </div>

            <div className="mt-5 flex justify-between">
              <Link href={`/projects/${project.id}`} target="blank">
                <button className="group relative box-border h-10 w-32 cursor-pointer rounded-lg border-2 border-[#800020] bg-transparent text-lg text-[#666666]">
                  <span className="pr-9">Details</span>
                  <span className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-[#800020] px-1 duration-300 group-hover:w-full group-hover:bg-[#800020] group-hover:duration-300">
                    <FaArrowRight className="text-white" />
                  </span>
                </button>
              </Link>
              <Link href={project.liveURL} target="blank">
                <button className="group relative box-border h-10 w-32 cursor-pointer rounded-lg border-2 border-[#800020] bg-transparent text-lg text-[#666666]">
                  <span className="pr-9">Demo</span>
                  <span className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-[#800020] px-1 duration-300 group-hover:w-full group-hover:bg-[#800020] group-hover:duration-300">
                    <FaArrowRight className="text-white" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
