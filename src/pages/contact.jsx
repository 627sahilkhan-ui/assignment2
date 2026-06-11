import React from "react";

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact ShopVerse</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>🏢 ShopVerse Headquarters</h2>

          <p>
            <strong>📍 Address:</strong>
            <br />
            ShopVerse Corporate Office
            <br />
            Bandra Kurla Complex (BKC)
            <br />
            Mumbai, Maharashtra 400051
            <br />
            India
          </p>

          <p>
            <strong>📞 Customer Support Helpline:</strong>
            <br />
            +91 1800-123-4567
          </p>

          <p>
            <strong>📧 Email Support:</strong>
            <br />
            support@shopverse.com
          </p>

          <p>
            <strong>🕒 Working Hours:</strong>
            <br />
            Monday – Saturday
            <br />
            9:00 AM – 8:00 PM
          </p>

          <div className="query-note">
            <h3>Need Help?</h3>
            <p>
              For questions regarding orders, shipping, returns,
              refunds, payments, or account issues, please contact
              our customer support team using the helpline number
              above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;