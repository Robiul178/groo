// pages/terms-and-conditions.js
export default function TermsAndConditions() {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to [Your Agency Name]! These terms and conditions outline the
          rules and regulations for the use of our website, located at{" "}
          <span className="text-blue-500 underline">[samplewebsite.com]</span>.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use [ Agency Name] if you do not agree
          to take all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          2. Use of the Website
        </h2>
        <p className="text-gray-600 mb-4">
          Unless otherwise stated, [ Agency Name] and/or its licensors own the
          intellectual property rights for all material on this website. All
          intellectual property rights are reserved.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>You may not republish material from our website.</li>
          <li>
            You may not sell, rent, or sub-license material from our website.
          </li>
          <li>
            You may not reproduce, duplicate, or copy material from our website.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          3. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          [ Agency Name] will not be held accountable for any damages arising
          out of the use of this website or services provided by it.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          4. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to modify these terms and conditions at any time.
          By continuing to use our website, you agree to follow the updated
          terms and conditions.
        </p>
        <p className="text-gray-600 mt-6">
          If you have any questions about these terms, please contact us at{" "}
          <span className="text-blue-500 underline">info@youragency.com</span>.
        </p>
      </div>
    </div>
  );
}
