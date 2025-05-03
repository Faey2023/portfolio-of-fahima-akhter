import { FaFileLines, FaGithub, FaCode } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Heading from '@/components/Shared/designs/Heading';
import projectData from '@/data/project.json';
import React from 'react';
import PageWrapper from '@/components/Shared/designs/PageWrapper';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectData.find((p) => p.id.toString() === id);
  return {
    title: project?.project_title || 'Project Not Found',
    description: project?.heading || 'Detailed project information',
  };
}

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = projectData.find((p) => p.id.toString() === id);

  if (!project) return <div>Project Not Found</div>;

  const {
    project_title,
    image,
    coreTechnologies,
    liveURL,
    github,
    features,
    heading,
  } = project;

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl p-10 md:mb-10 md:p-0">
        <Heading heading={'The'} small={'Project'} title={'details'} />
        <div className="flex items-center gap-10 text-[#666666]">
          <div className="">
            <div className="m-5">
              <h3 className="text-center text-xl font-bold text-[#800020] md:text-3xl">
                {project_title}
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FaFileLines className="text-xl" />
                  <p>
                    <span className="font-bold">Project </span>: {heading}
                  </p>
                </div>
                <div className="flex gap-2">
                  <FaCode className="text-2xl font-bold" />
                  <p>
                    <span className="font-bold">Technologies :</span>{' '}
                    {coreTechnologies.join(', ')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <FaExternalLinkAlt className="text-xl" />
                  <p>
                    <span className="font-bold"> Preview : </span>
                    <a
                      href={liveURL}
                      className="font-medium hover:cursor-pointer hover:text-[#800020] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Presence
                    </a>
                  </p>
                </div>
                <div className="flex gap-2">
                  <FaGithub className="text-xl" />
                  <p>
                    <span className="font-bold"> GitHub Repo :</span>{' '}
                    <a
                      href={github}
                      className="font-medium hover:cursor-pointer hover:text-[#800020] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository Link
                    </a>
                  </p>
                </div>
                <div className="flex gap-2">
                  <p>
                    <span className="font-bold"> Features :</span>
                    <ul>
                      {features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            {image && (
              <Image
                width={384}
                height={500}
                className="mx-auto w-96 md:max-w-lg"
                src={image}
                alt={project_title}
              />
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
