import * as React from "react";

interface EmailTemplateProps {
  message: string;
  email: string;
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ message, email, name }) => (
  <div style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "5px" }}>
    <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "5px" }}>
      <h2 style={{ color: "#333333", marginTop: "0" }}>New Message</h2>
      <p style={{ fontSize: "16px", color: "#666666" }}>
        <strong>From:</strong> {name} &lt;{email}&gt;
      </p>
      <hr style={{ borderColor: "#dddddd" }} />
      <p style={{ fontSize: "16px", color: "#333333", lineHeight: "1.5" }}>{message}</p>
    </div>
  </div>
);

export default EmailTemplate;
