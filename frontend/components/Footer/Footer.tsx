export default function Footer() {
  return (
    <footer className='text-center min-h-[14vh] bg-blue-200 w-full p-3 flex items-center'>
      <article className='grid-rows-2 max-w-screen-xl mx-auto w-full'>
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
