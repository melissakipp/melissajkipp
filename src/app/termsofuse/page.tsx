import Head from 'next/head';

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Terms of Use - Melissa Kipp Freelance Portfolio</title>
        <meta name="description" content="Terms of Use for Melissa Kipp's freelance portfolio website" />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p>This website serves as a professional portfolio showcasing the work, services, and expertise of Melissa Kipp as a freelance frontend developer, graphic designer, UX-UI designer and marketing specialist. The content is for informational purposes only.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
        <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
        <p>This Site is provided on an &lsquo;as is&rsquo; and &lsquo;as available&rsquo; basis. Melissa Kipp makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site. You expressly agree that your use of this site is at your sole risk.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p>Melissa Kipp will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Melissa Kipp from any and all third party claims, losses, liability, damages, and/or costs (including reasonable attorney fees and costs) arising from your access to or use of the Site, your violation of these Terms of Use, or your infringement of any intellectual property or other right of any person or entity.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications to Terms</h2>
        <p>Melissa Kipp reserves the right to modify these Terms of Use at any time. Your continued use of the Site following any changes indicates your acceptance of the new Terms of Use.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p>These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of Arizona, United States of America, without giving effect to any principles of conflicts of law.</p>
      </section>

      <footer className="mt-12 text-sm text-gray-600">
        <p>Last updated: October, 2024</p>
        <p>If you have any questions about these Terms of Use, please contact me at melissakipp.az@gmail.com.</p>
      </footer>
    </div>
  );
};

export default TermsOfUse;