import Link from "next/link";

const ThankYou = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      <article className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">Your message has been sent successfully. <br />We will get back to you soon.</p>
        <Link href="/" className="text-blue-500 hover:underline">Back to the Home page</Link>
        {/* <Link className="inline-block px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700" href="/">Back to the Home page</Link> */}
      </article>
    </main>
  );
};

export default ThankYou;
