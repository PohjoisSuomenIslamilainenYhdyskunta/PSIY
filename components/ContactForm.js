export default function ContactForm() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3f60a37b-e10e-4bae-b3ba-92e766acb2f2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

  return (
    <>
    <div id="contactform" className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 pt-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            {/* <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Form</h2> */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Form</h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-2xl">Fill up the form below to send us a message.</h3>
            <div className="mt-3">
            </div>
            <div class="m-7">

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          class="needs-validation"
          novalidate
        >
          <input type="hidden" name="access_key" value="3f60a37b-e10e-4bae-b3ba-92e766acb2f2" />
          <input
            type="hidden"
            name="subject"
            value="New Submission from Web3Forms"
          />
          <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label
                for="fname"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >First Name</label
              >
              <input
                type="text"
                name="name"
                id="first_name"
                placeholder="Abdullah"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please provide your first name.
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label
                for="lname"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Last Name</label
              >
              <input
                type="text"
                name="last_name"
                id="lname"
                placeholder="Mujahid"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please provide your last name.
              </div>
            </div>
          </div>

          <div class="flex mb-6 space-x-4">
            <div class="w-full md:w-1/2">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Email Address</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div class="empty-feedback text-red-400 text-sm mt-1">
                Please provide your email address.
              </div>
              <div class="invalid-feedback text-red-400 text-sm mt-1">
                Please provide a valid email address.
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label
                for="phone"
                class="block text-sm mb-2 text-gray-600 dark:text-gray-400"
                >Phone Number</label
              >
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+358 123456789"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />

              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please provide your phone number.
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Your Message</label
            >

            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Your Message"
              class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            ></textarea>
            <div
              class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
            >
              Please enter your message.
            </div>
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              style={{ backgroundColor: '#95112d' }}
            >
              Send Message
            </button>
          </div>
          <p class="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}