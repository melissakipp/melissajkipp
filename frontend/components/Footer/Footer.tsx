export default function Footer() {
  return (
    <footer className='flex min-h-[14vh] w-full items-center bg-blue-200 p-3 text-center'>
      <article className='mx-auto w-full max-w-screen-xl grid-rows-2'>
        <section>Social Media Links</section>
        <section>
          <h4>
            <a
              className='hover:underline'
              href='https://www.linkedin.com/in/melissajkipp/'
              target='_blank'
            >
              Melissa J Kipp
            </a>{' '}
            &copy; 2023
          </h4>
        </section>
      </article>
    </footer>
  );
}
