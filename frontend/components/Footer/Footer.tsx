export default function Footer() {
  return (
    <footer className='flex min-h-[14vh] w-full items-center bg-purple-200  p-3 text-center'>
      <article className='mx-auto w-full max-w-screen-xl grid-rows-2'>
        <section>
          <h4 className='sr-only'>Social Media Links</h4>
          <ul>
            <li>
              <span className='sr-only'>Email</span>
            </li>
            <li>
              <span className='sr-only'>GitHub</span>
            </li>
            <li>
              <span className='sr-only'>LinkedIn</span>
            </li>
            <li>
              <span className='sr-only'>Behance</span>
            </li>
            <li>
              <span className='sr-only'>Resume</span>
            </li>
          </ul>
        </section>
        <section>
          <h4 className='sr-only'>Disclaimer</h4>
          <a
            className='hover:underline'
            href='https://www.linkedin.com/in/melissajkipp/'
            target='_blank'
          >
            Melissa J Kipp
          </a>{' '}
          &copy; 2023
        </section>
      </article>
    </footer>
  );
}
