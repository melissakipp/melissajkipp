import {
    BiEnvelope,
    BiLogoGithub,
    BiLogoLinkedinSquare,
    BiLogoBehance,
    BiFile,
  } from 'react-icons/bi';
  
  export default function Footer() {
    return (
      <footer className='flex min-h-[8vh] w-full items-center bg-purple-700 p-[3vh] text-purple-50 text-center'>
        <article className='mx-auto w-full max-w-screen-xl grid-rows-2'>
          <section>
            <h4 className='sr-only'>Social Media Links</h4>
            <ul className='row-auto mb-3 flex justify-center space-x-10 text-3xl '>
              <li>
                <span className='sr-only'>Email</span>
                <a href='mailto:melissakipp.az@gmail.com' target='_blank'>
                  <BiEnvelope aria-hidden='true' />
                </a>
              </li>
              <li>
                <span className='sr-only'>GitHub</span>
                <a href='https://github.com/melissakipp' target='_blank'>
                  <BiLogoGithub aria-hidden='true' />
                </a>
              </li>
              <li>
                <span className='sr-only'>LinkedIn</span>
                <a
                  href='https://www.linkedin.com/in/melissajkipp/'
                  target='_blank'
                >
                  <BiLogoLinkedinSquare aria-hidden='true' />
                </a>
              </li>
              <li>
                <span className='sr-only'>Behance</span>
                <a href='https://www.behance.net/melissajkipp' target='_blank'>
                  <BiLogoBehance aria-hidden='true' />
                </a>
              </li>
              <li>
                <span className='sr-only'>Click to download pdf Resume in a new window</span>
                <a 
                  href='/Melissa_J_Kipp_Frontend-UX-UI_Resume.pdf'
                  rel='noopener noreferrer'
                  target="_blank"
                >
                  <BiFile aria-hidden='true' />
                </a>
              </li>
            </ul>
          </section>
          <section className=''>
            <h4 className='sr-only'>Disclaimer - Copyrights</h4>
            <a
              className='hover:underline'
              href='https://www.linkedin.com/in/melissajkipp/'
              target='_blank'
            >
              Melissa J Kipp
            </a>&nbsp;
            &copy; 2023
          </section>
        </article>
      </footer>
    );
  }