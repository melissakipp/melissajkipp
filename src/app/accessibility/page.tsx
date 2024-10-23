import Head from 'next/head';

const AccessibilityStatement: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Accessibility Statement - Melissa J Kipp Portfolio</title>
        <meta name="description" content="Accessibility Statement for Melissa J Kipp's freelance portfolio website" />
      </Head>
    
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Commitment to Accessibility</h2>
        <p>I am committed to ensuring web accessibility for people with disabilities. I am continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
      </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">2. Measures to Support Accessibility</h2>
      <p>Melissajkipp.com takes the following measures to ensure accessibility of the website:</p>
      <ul className="list-disc pl-5">
        <li>Include accessibility as part of our mission statement.</li>
        <li>Include accessibility throughout our internal policies.</li>
        <li>Provide continual accessibility training for our staff.</li>
        <li>Assign clear accessibility targets and responsibilities.</li>
        <li>Employ formal accessibility quality assurance methods.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">3. Compatibility with Browsers and Assistive Technology</h2>
      <p>Melissajkipp.com is designed to be compatible with the following assistive technologies:</p>
      <ul className="list-disc pl-5">
        <li>Screen readers</li>
        <li>Text-to-speech software</li>
        <li>Speech recognition software</li>
        <li>Keyboard-only navigation</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">4. Technical Specifications</h2>
      <p>Accessibility of Melissajkipp.com relies on the following technologies:</p>
      <ul className="list-disc pl-5">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <br />
      <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">5. Limitations and Alternatives</h2>
      <p>Despite our best efforts to ensure accessibility of Melissajkipp.com, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
      <br />
      <p>Known limitations for Melissajkipp.com:</p>
      <ul className="list-disc pl-5">
        <li>PDFs with images may not have text alternatives. We are working on fixing this issue.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">6. Assessment approach</h2>
      <p>Melissajkipp.com assesses the accessibility of our website in the following ways:</p>
      <ul className="list-disc pl-5">
        <li>Self-evaluation</li>
        <li>External evaluation</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">7. Feedback</h2>
      <p>I welcome your feedback on the accessibility of Melissajkipp.com. Please let me know if you encounter accessibility barriers on Melissajkipp.com:</p>
      <ul className="list-disc pl-5">
        <li>E-mail: <a className='border-b border-black hover:font-bold' href="mailto:melissakipp.az@gmail.com">melissakipp.az@gmail.com</a></li>
      </ul>
      <br />
      <p>I try to respond to feedback within 3 business days.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">8. Compatibility with Standards</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Melissajkipp.com is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.</p>
    </section>

    {/* <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">9. Additional Considerations for Dyslexia</h2>
      <p>As someone with dyslexia, I understand the importance of making web content accessible to individuals with reading difficulties. Here are some additional measures I&apos;ve taken:</p>
      <ul className="list-disc pl-5">
        <li>Use of clear, sans-serif fonts throughout the website</li>
        <li>Ability to adjust text size and line spacing</li>
        <li>High contrast between text and background</li>
        <li>Avoidance of pure white backgrounds, which can cause visual stress</li>
        <li>Clear and consistent navigation</li>
        <li>Use of headings and bullet points to break up text</li>
        <li>Option to use a dyslexia-friendly font (e.g., OpenDyslexic)</li>
      </ul>
      <p>If you have any suggestions on how I can further improve the accessibility of my website, especially for individuals with dyslexia or other reading difficulties, please don&apos;t hesitate to contact me.</p>
    </section> */}

    <footer className="mt-12 text-sm text-gray-600">
      <p>This statement was created on October 18, 2024 using the W3C Accessibility Statement Generator Tool.</p>
      <p>If you have any questions about this Accessibility Statement, please contact me at melissakipp.az@gmail.com.</p>
    </footer>
    </div>
  );
};

export default AccessibilityStatement;