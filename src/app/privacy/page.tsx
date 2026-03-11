import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 space-y-8 md:space-y-14 pt-24">
      <div className="max-w-3xl mx-auto space-y-10 text-lg mt-4 md:mt-4">
 <Link
    href="/"
    className="inline-block text-sm  hover:text-black transition"
  >
    ← Back to Rudio
  </Link>
        <header className="space-y-2">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="text-sm">Last Updated: March 2026</p>
        </header>

        <p className=" ">
          Rudio ("we", "our", or "us") is committed to protecting the privacy and
          security of users visiting our website{" "}
          <a
            href="https://rudio.in"
            className="underline hover:text-white"
          >
            https://rudio.in
          </a>. This Privacy Policy explains how we collect, use, store, and
          protect your personal information when you access our website or join
          the early access.
        </p>

        <p className=" ">
          By accessing or using this website, you agree to the terms outlined in
          this Privacy Policy.
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

          <p className="">
            When you use our website or join the early access, we may collect
            the following information:
          </p>

          <h3 className="font-semibold">Personal Information Provided by You</h3>

          <ul className="list-disc pl-6 space-y-1 ">
            <li>Name</li>
            <li>Email address</li>
            <li>State or region</li>
            <li>Preferred language</li>
            <li>Mobile phone number (optional)</li>
          </ul>

          <h3 className="font-semibold mt-4">Automatically Collected Information</h3>

          <p className="">
            When you access the website, certain information may be collected
            automatically, including:
          </p>

          <ul className="list-disc pl-6 space-y-1 ">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type and device information</li>
            <li>Pages visited on our website</li>
            <li>Date and time of access</li>
            <li>Referring website</li>
          </ul>

          <p className="">
            This information helps us improve the website and understand user
            behavior.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Purpose of Collecting Information</h2>

          <p className="">
            The information collected may be used for the following purposes:
          </p>

          <ul className="list-disc pl-6 space-y-1 ">
            <li>To register users for the Rudio early access program</li>
            <li>To notify users when early access or updates become available</li>
            <li>To improve our website and services</li>
            <li>
              To understand user demographics such as region and language
              preferences
            </li>
            <li>To respond to user inquiries or support requests</li>
          </ul>

          <p className="">
            Your information will only be used for legitimate business purposes
            related to the Rudio platform.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Cookies</h2>

          <p className="">
            Our website may use cookies or similar technologies to enhance the
            user experience and analyze website traffic.
          </p>

          <p className="">Cookies help us:</p>

          <ul className="list-disc pl-6 space-y-1 ">
            <li>Understand website usage patterns</li>
            <li>Improve website performance</li>
            <li>Remember user preferences</li>
          </ul>

          <p className="">
            Users may disable cookies through their browser settings if they
            prefer.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Data Sharing and Disclosure</h2>

          <p className="">
            We do not sell, rent, or trade your personal information.
          </p>

          <p className="">
            However, we may share information with trusted third-party service
            providers who assist us in operating the website, such as:
          </p>

          <ul className="list-disc pl-6 space-y-1 ">
            <li>Website hosting providers</li>
            <li>Analytics providers</li>
            <li>Email communication services</li>
          </ul>

          <p className="">
            These providers are obligated to protect your information and use it
            only for the purposes for which it was shared.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Data Security</h2>

          <p className="">
            We take reasonable technical and organizational measures to
            safeguard the personal information collected through our website.
          </p>

          <p className="">
            While we strive to protect user information, no method of data
            transmission over the internet can be guaranteed to be completely
            secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            6. Links to Third-Party Websites
          </h2>

          <p className="">
            Our website may contain links to external websites. Rudio is not
            responsible for the privacy practices or content of such
            third-party websites.
          </p>

          <p className="">
            Users are advised to review the privacy policies of those websites
            separately.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            7. Changes to This Privacy Policy
          </h2>

          <p className="">
            Rudio may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>

          <p className="">
            Users are encouraged to review this page periodically to stay
            informed about how we protect their information.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contact Information</h2>

          <p className="">
            If you have any questions regarding this Privacy Policy or how your
            information is handled, please contact us at:
          </p>

          <p className="">
            Email:{" "}
            <a
              href="mailto:info@rudio.in"
              className="underline text-blue-800 hover:text-blue-700"
            >
              info@rudio.in
            </a>
          </p>

          <p className="">
            Website:{" "}
            <a
              href="https://rudio.in"
              className="underline text-blue-800 hover:text-blue-700"
            >
              https://rudio.in
            </a>
          </p>
        </section>

      </div>
      <footer className="text-sm text-neutral-700 text-center py-3">
  © 2026 Rudio. All rights reserved.
</footer>
    </main>
  );
}