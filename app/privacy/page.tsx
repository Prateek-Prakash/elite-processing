import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Processing Team",
  description:
    "How Elite Processing Team LLC collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="June 22, 2026">
      <p>
        {company.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This policy explains what
        information we collect through this website and how we use it.
      </p>

      <section>
        <h2>Information we collect</h2>
        <p>
          We only collect the information you choose to provide. When you submit
          our contact form, your email application sends us your name, email
          address, company or brokerage name, and your message. We do not
          collect borrower applications, Social Security numbers, or financial
          account information through this website.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to your inquiry and discuss processing services.</li>
          <li>To set up and manage a working relationship with your team.</li>
          <li>To improve our services and communications.</li>
        </ul>
      </section>

      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell or rent your information. We share information only as
          needed to provide loan-processing services on files you assign to us
          (for example, with the relevant lender or underwriter), or where
          required by law.
        </p>
      </section>

      <section>
        <h2>Data security</h2>
        <p>
          We use reasonable administrative and technical safeguards to protect
          information. No method of transmission over the internet is fully
          secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You may request that we update or delete the information you submitted
          by contacting us. To stop receiving emails from us, reply to any
          message and ask to be removed.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>. NMLS #
          {company.nmls}.
        </p>
      </section>
    </LegalShell>
  );
}
