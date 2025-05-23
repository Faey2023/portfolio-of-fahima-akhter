'use client';

import Heading from '@/components/Shared/designs/Heading';
import { IProject } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import projectData from '@/data/project.json';
import { FiGithub } from 'react-icons/fi';
import PageWrapper from '@/components/Shared/designs/PageWrapper';
import { FaRegShareSquare } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Projects = () => {
  const handleShare = async ({
    title,
    text,
    url,
  }: {
    title: string;
    text: string;
    url: string;
  }) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
      } catch (err) {
        Swal.fire('Failed to copy link.');

        console.log(err);
      }
    }
  };

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl">
        <Heading heading={'My'} small={'Projects'} title={'works'} />
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-5 px-3 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {projectData.map((project: IProject) => (
            <div key={project.id}>
              <div className="group w-full overflow-hidden rounded-2xl bg-white shadow-lg transition">
                <div className="group relative h-56 w-full overflow-hidden rounded-md">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt="Cycle"
                      fill
                      className="transition duration-300"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800020]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="rounded-full bg-[#800020] p-2 shadow"
                    >
                      <FiGithub className="text-white" />
                    </Link>
                    <button
                      className="cursor-pointer rounded-full bg-[#800020] p-2 shadow"
                      onClick={() =>
                        handleShare({
                          title: project.project_title,
                          text: `Check out my project: ${project.project_title}`,
                          url: `{projects/${project.id}`,
                        })
                      }
                    >
                      <FaRegShareSquare className="text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <h2 className="text-xl font-semibold text-[#800020]">
                    {project.project_title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {project?.description.slice(0, 150)}...
                  </p>
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
