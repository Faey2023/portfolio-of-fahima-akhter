import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import { FaPaperPlane } from 'react-icons/fa';

const Form = () => {
  //
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'fahima.2023',
        'template_6uwiznd',
        form.current,
        'Qz5oDO67XvR2GvCbS'
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Thanks for emailing. I will contact you soon.',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  //
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
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5"
              // className="w-full h-12 border-2 border-[#800020] rounded-full hover:text-black duration-300 relative group p-5"
              required
            />
            <input
              type="text"
              name="from_subject"
              placeholder="Your Subject"
              className="h-12 w-full rounded-full border-2 border-[#800020] p-5"
              // className="w-full h-12 border-2 border-[#800020] rounded-full hover:text-black duration-300 relative group p-5"
              required
            />
          </div>
          <div className="">
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="h-48 w-full rounded-3xl border-2 border-[#800020] p-5 md:w-[700px]"
              required
            />
          </div>
          <button
            type="submit"
            className="group relative box-border h-14 w-48 rounded-lg border-2 border-[#800020] bg-transparent text-xl text-[#666666]"
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

export default Form;
