/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormEvent, useRef } from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'fahima.2023',
        'template_6uwiznd',
        form.current,
        'Qz5oDO67XvR2GvCbS'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          const alertOptions: SweetAlertOptions = {
            icon: 'success',
            title: 'Thanks for emailing. I will contact you soon.',
            showConfirmButton: false,
            timer: 1500,
          };

          Swal.fire(alertOptions);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 md:flex-row">
            {/*  */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5 outline-none"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5 outline-none"
              required
            />
            <input
              type="text"
              name="from_subject"
              placeholder="Your Subject"
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5 outline-none"
              required
            />
          </div>
          <div className="">
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="h-48 w-full rounded-3xl border-2 border-[#800020] p-5 outline-none md:w-[700px]"
              required
            />
          </div>
          <button
            type="submit"
            className="group relative box-border h-14 w-48 cursor-pointer rounded-lg border-2 border-[#800020] bg-transparent text-xl text-[#666666]"
          >
            <span className="pr-8">Send Email</span>
            <span className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-[#800020] px-1 duration-300 group-hover:w-full group-hover:bg-[#800020] group-hover:duration-300">
              <FaPaperPlane className="text-white" />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
