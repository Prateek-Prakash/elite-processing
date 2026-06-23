import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | Elite Processing Team",
  description:
    "The terms governing use of the Elite Processing Team LLC website.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="June 22, 2026">
      <p>
        These terms govern your use of the {company.legalName} website. By using
        this site, you agree to them.
      </p>

      <section>
        <h2>Who we are</h2>
        <p>
          {company.legalName} is a third-party (contract) loan processing
          company that supports mortgage loan originators. We are not a lender or
          a mortgage broker. We do not make loans or loan commitments, take loan
          applications, or negotiate loan terms.
        </p>
      </section>

      <section>
        <h2>Informational purpose</h2>
        <p>
          Content on this website is provided for general information only and
          does not constitute financial, legal, or lending advice. Service
          availability, approved states, and lender relationships may change
          without notice.
        </p>
      </section>

      <section>
        <h2>No guarantee of results</h2>
        <p>
          Testimonials reflect individual experiences and are not a promise of
          any particular outcome, turnaround time, or loan approval. Results
          depend on factors outside our control, including lender and underwriter
          decisions.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Elite Processing Team name, logo, and site content are our
          property. Third-party lender names and logos shown on this site are the
          property of their respective owners and are used for identification
          only; their display does not imply endorsement.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {company.legalName} is not
          liable for any indirect or consequential damages arising from your use
          of this website.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Michigan, without
          regard to its conflict-of-laws rules.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes means you accept the revised terms. Questions? Email{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>
    </LegalShell>
  );
}
