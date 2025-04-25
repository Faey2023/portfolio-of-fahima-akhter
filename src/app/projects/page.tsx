import Heading from '@/components/Shared/designs/Heading';
import { IProject } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import projectData from '@/data/project.json';
import { FiGithub } from 'react-icons/fi';
import PageWrapper from '@/components/Shared/designs/PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl">
        <Heading heading={'My'} small={'Projects'} title={'works'} />
        <div className="mx-auto mb-5 grid max-w-6xl grid-cols-1 gap-5 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {projectData.map((project: IProject) => (
            <div key={project.id}>
              <div className="group w-full overflow-hidden rounded-2xl bg-white shadow-lg transition">
                <div className="relative">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt="Cycle"
                      width={1000}
                      height={224}
                      className="h-56 w-full"
                    />
                  )}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Link
                      href={project.github}
                      target="blank"
                      className="rounded-full bg-[#800020] p-2 shadow"
                    >
                      <FiGithub className="text-white" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <h2 className="text-xl font-semibold text-[#800020]">
                    {project.project_title}
                  </h2>
                  <p className="text-sm text-gray-600">{project.heading}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.coreTechnologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 font-medium text-[#800020]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Link
                      className="rounded-xl bg-[#800020] px-4 py-2 text-sm text-white"
                      href={`/projects/${project.id}`}
                      target="blank"
                    >
                      View Details
                    </Link>
                    <Link
                      className="rounded-xl border border-[#800020] px-4 py-2 text-sm text-[#800020] hover:bg-blue-50"
                      href={project.liveURL}
                      target="blank"
                    >
                      Web Presence
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
