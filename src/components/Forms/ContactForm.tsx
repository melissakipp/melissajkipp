import FormSumbit from "./FormSumbit";
import InputFields from "../ui/InputFields";
import InputValidation from "./InputValidation";

export default function ContactForm() {
  return (
    <section>
      <h2>ContactForm</h2>
      <p>Fill out the form below and we'll get back to you as soon as possible.</p>
      <form action=""></form>
      <div>
        {/* <InputFields 
          type="text"
          name="email"
          label="Email"
          placeholder="Enter your first name"
          value=""
          // onChange={(event) => console.log(event.target.value)}
          className="mt-2 p-2 block w-full rounded-md border-gray-900 shadow-sm focus:border-zinc-400 focus:ring-zinc-600 focus:ring-offset-2 focus:outline-purple-700"
        /> */}
        {/* <InputValidation /> */}
      </div>
      {/* <FormSumbit /> */}
      </section>
  );
}
