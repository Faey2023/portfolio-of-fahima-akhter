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
    coreTechnologies,
    liveURL,
    github,
    features,
    heading,
    challenges,
    plans,
  } = project || {};

  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl p-10 md:mb-10 md:p-0">
        <Heading heading={'The'} small={'Project'} title={'details'} />
        <div>
          <h3 className="mb-5 text-center text-xl font-bold text-[#800020] md:text-3xl">
            {project_title}
          </h3>
          <div className="flex flex-col justify-between gap-10 text-[#666666] md:mx-5 md:flex-row">
            <div>
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Project Type: </strong> {heading}
                </p>
                <p>
                  <strong>Technologies :</strong> {coreTechnologies.join(', ')}
                </p>

                <p>
                  <strong> Preview : </strong>
                  <a
                    href={liveURL}
                    className="font-medium hover:cursor-pointer hover:text-[#800020] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Presence
                  </a>
                </p>

                <p>
                  <strong> GitHub Repo :</strong>{' '}
                  <a
                    href={github}
                    className="font-medium hover:cursor-pointer hover:text-[#800020] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository Link
                  </a>
                </p>

                <strong> Features :</strong>
                <ul>
                  {features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p>
                  <strong> Challenges Faced :</strong>
                  <p>{challenges}</p>
                </p>

                <p>
                  <strong>Future Plans:</strong>
                  <p>{plans}</p>
                </p>
              </div>
            </div>
            <div className="relative h-45 shrink-0 cursor-pointer overflow-hidden shadow-lg md:mt-10 md:h-88 md:w-96">
              <Image
                src={project.imageScroll}
                width={384}
                height={500}
                alt={`image of ${project_title}`}
                className="mx-auto w-96 transform transition-all duration-[16000ms] hover:-translate-y-full md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetails;
