import { IoMdMailOpen, IoMdCall } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { BsMedium } from 'react-icons/bs';
import Heading from '@/components/Shared/designs/Heading';
import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';
import PageWrapper from '@/components/Shared/designs/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper>
    <div className="mx-auto max-w-6xl p-5 md:p-0">
      <Heading heading={'get in '} small={'touch'} title={'contact'} />
      <div className="flex flex-col gap-5 md:flex-row">
        {/* text div */}
        <div className="flex flex-col space-y-3">
          <h3 className="mb-3 text-2xl font-bold text-[#666666]">
            Hey there! Wanna say something?
          </h3>
          <p className="text-[#666666] italic">
            Have a question or want to discuss a potential project? Feel free to
            reach out to me. Whether you&#39;re interested in working together
            or just want to say hello, I&#39;d love to hear from you.
          </p>
          <div className="flex gap-5 text-[#666666]">
            <IoMdMailOpen className="text-4xl text-[#800020]" />
            <div>
              <h3 className="uppercase">Mail me</h3>
              <a className="font-semibold" href="mailto:f.akhter2320@gmail.com">
                f.akhter2320@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-5 text-[#666666]">
            <IoMdCall className="text-4xl text-[#800020]" />
            <div>
              <h3 className="uppercase">call me</h3>
              <span className="font-semibold">+8801951351359</span>
            </div>
          </div>
          {/* social div */}
          <div className="flex flex-row gap-3">
            <div className="cursor-pointer rounded-full border-2 border-[#800020] bg-transparent p-2 text-2xl text-[#800020] hover:bg-[#800020] hover:text-[#f5f5f5]">
              <Link
                href="https://www.linkedin.com/in/fahima-akhter-faey2023"
                target="blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full border-2 border-[#800020] bg-transparent p-2 text-2xl text-[#800020] hover:bg-[#800020] hover:text-[#f5f5f5]">
              <Link href="https://github.com/Faey2023" target="blank">
                <FiGithub />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full border-2 border-[#800020] bg-transparent p-2 text-2xl text-[#800020] hover:bg-[#800020] hover:text-[#f5f5f5]">
              <Link href="mailto:f.akhter2320@gmail.com" target="blank">
                <CgMail />
              </Link>
            </div>
            <div className="cursor-pointer rounded-full border-2 border-[#800020] bg-transparent p-2 text-2xl text-[#800020] hover:bg-[#800020] hover:text-[#f5f5f5]">
              <Link href="https://medium.com/@faey2023" target="blank">
                <BsMedium />
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div></PageWrapper>
  );
};

export default Contact;
