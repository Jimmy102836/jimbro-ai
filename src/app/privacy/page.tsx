import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last Updated: July 15, 2023</p>
            <div className="w-16 h-1 bg-indigo-600"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At JimBroAI, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Account Information:</strong> When you register, we collect your name, email address, and password.</li>
              <li><strong>Profile Information:</strong> Information you provide in your user profile, such as profile picture, job title, and company.</li>
              <li><strong>Content:</strong> Data you upload to our platform for analysis, visualization, or processing.</li>
              <li><strong>Communications:</strong> Information you provide when contacting us or responding to surveys.</li>
              <li><strong>Payment Information:</strong> When you subscribe, we collect payment details, which are processed by our secure payment processors.</li>
            </ul>

            <p>We also automatically collect certain information when you use our services:</p>
            <ul>
              <li><strong>Usage Data:</strong> Information about how you interact with our services, features you use, and actions you take.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies and similar tracking technologies.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share information with third parties when you have given us your consent to do so.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure and we cannot guarantee the absolute security of your data.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> The right to request copies of your personal data.</li>
              <li><strong>Rectification:</strong> The right to request that we correct inaccurate information.</li>
              <li><strong>Erasure:</strong> The right to request that we delete your personal data.</li>
              <li><strong>Restriction:</strong> The right to request that we restrict the processing of your data.</li>
              <li><strong>Data Portability:</strong> The right to request that we transfer your data to another organization or directly to you.</li>
              <li><strong>Objection:</strong> The right to object to our processing of your personal data.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at privacy@jimbroai.app.</p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@jimbroai.app<br />
              <strong>Address:</strong> JimBroAI Inc., 123 AI Boulevard, San Francisco, CA 94105, USA
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 