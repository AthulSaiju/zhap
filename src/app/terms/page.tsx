import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="text-sm">Last Updated: March 2026</p>
        </header>

        <p>
          By accessing or using our website{" "}
          <a href="https://rudio.in" className="underline">
            https://rudio.in
          </a>{" "}
          or participating in the Rudio Early Access Program, you agree to these Terms of Service.
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Use of the Website</h2>

          <p>
            Rudio currently provides information about our upcoming platform and
            allows users to register for early access. By using this website,
            you agree to use it only for lawful purposes and in a way that does
            not harm the website or other users.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Early Access Program</h2>

          <p>
            By submitting your information, you may be added to the Rudio Early
            Access Program. Early access may be limited and participation is not
            guaranteed.
          </p>

          <p>
            Features available during early access may change, be modified, or
            be discontinued at any time.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Information</h2>

          <p>
            By submitting information through the website, you confirm that the
            information you provide is accurate and belongs to you.
          </p>

          <p>
            Your information will be handled according to our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>

          <p>
            All content on this website, including text, branding, graphics, and
            design elements, is the property of Rudio and may not be copied,
            reproduced, or distributed without permission.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>

          <p>
            The website and its content are provided for informational purposes.
            Rudio is not responsible for any damages or losses arising from the
            use of the website.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Changes to These Terms</h2>

          <p>
            We may update these Terms of Service from time to time. Updated
            versions will be posted on this page with a revised date.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact</h2>

          <p>
            If you have questions regarding these Terms, please contact us at:
          </p>

          <p>
            Email:{" "}
            <a href="mailto:info@rudio.in" className="underline text-blue-800 hover:text-blue-700">
              info@rudio.in
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