import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-4">Last Updated: July 15, 2023</p>
            <div className="w-16 h-1 bg-indigo-600"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to JimBroAI. Please read these Terms of Service ("Terms") carefully as they contain important information regarding your legal rights, remedies, and obligations. By accessing or using the JimBroAI platform, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              JimBroAI provides an artificial intelligence platform that offers various data analysis, visualization, and machine learning capabilities ("Services"). We reserve the right to modify, update, or discontinue any aspect of our Services at any time.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our Services, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your account information as necessary to keep it accurate and current</li>
              <li>Notify us immediately of any unauthorized access to or use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
            <p>
              We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with these Terms.
            </p>

            <h2>4. Subscription and Payments</h2>
            <p>
              Some of our Services require payment of fees. When purchasing a subscription:
            </p>
            <ul>
              <li>You agree to pay all fees associated with your chosen subscription plan</li>
              <li>Subscription fees are billed in advance on a recurring basis</li>
              <li>You authorize us to charge your selected payment method for all applicable fees</li>
              <li>All payments are non-refundable except as expressly stated in these Terms or as required by applicable law</li>
            </ul>
            <p>
              We may change our subscription fees at any time. If we change our fees, we will provide notice of the change on our website or by email at least 30 days before the change takes effect.
            </p>

            <h2>5. Intellectual Property Rights</h2>
            <p>
              <strong>Our Content:</strong> All content included in our Services, such as text, graphics, logos, images, and software, is the property of JimBroAI or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              <strong>Your Content:</strong> You retain ownership of any content you upload to our Services. By uploading content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in connection with providing our Services.
            </p>

            <h2>6. User Conduct</h2>
            <p>
              When using our Services, you agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Upload or transmit any malicious code or attempt to interfere with our Services</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our Services or systems</li>
              <li>Use our Services in a manner that could damage, disable, overburden, or impair our servers or networks</li>
              <li>Collect or harvest any personally identifiable information from other users</li>
            </ul>

            <h2>7. Third-Party Services</h2>
            <p>
              Our Services may include links to third-party websites, services, or content. We do not control, endorse, or assume responsibility for any third-party services. Your use of third-party services is subject to their terms of service and privacy policies.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall JimBroAI, its affiliates, or its licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to your use of or inability to use our Services.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless JimBroAI, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of our Services, your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2>10. Term and Termination</h2>
            <p>
              These Terms will continue to apply until terminated by either you or us. You may terminate these Terms at any time by discontinuing the use of our Services and closing your account. We may terminate these Terms and your access to all or part of our Services at any time, with or without cause, with or without notice.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website and updating the "Last Updated" date. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@jimbroai.app<br />
              <strong>Address:</strong> JimBroAI Inc., 123 AI Boulevard, San Francisco, CA 94105, USA
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 