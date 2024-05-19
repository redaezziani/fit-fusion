import React from "react";

interface EmailTemplateProps {
  firstName: string;
  token: string;
  email: string;
  id: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  token,
  email,
  id,
}) => (
  <html dir="ltr" lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Verify your zunder account</title>
      <style>{`
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          mso-font-alt: 'Verdana';
          src: url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
        }
        * {
          font-family: 'Roboto', Verdana;
        }
      `}</style>
    </head>
    <body>
      <table
        align="center"
        width="100%"
        className="min-h-52"
        border={0}
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          maxWidth: "37.5em",
          width: "100%",
          borderRadius: "0.5rem",
          backgroundColor: "rgb(255, 255, 255)",
          borderWidth: "1px",
          borderColor: "rgba(203, 213, 225, 0.3)",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <tbody>
          <tr style={{ width: "100%" }}>
            <td>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  alt="logo"
                  src="https://bmjrnwruypztpiesasil.supabase.co/storage/v1/object/sign/profile/Subtract%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlL1N1YnRyYWN0ICgxKS5wbmciLCJpYXQiOjE3MTM0NTkzNjYsImV4cCI6MjM0NDE3OTM2Nn0.jcmWXEZFGGbmF35sU0U5SspijP_UZqlA4BtzUvPirzc&t=2024-04-18T16%3A56%3A06.954Z"
                  style={{
                    display: "block",
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.75rem",
                    margin: "16px 0",
                    fontWeight: 700,
                    color: "rgb(15, 23, 42)",
                  }}
                >
                  zunder
                </p>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  margin: "16px 0",
                  color: "rgb(71, 85, 105)",
                }}
              >
                Welcome to zunder! Please verify your email to start using our
                service. If you did not sign up, please ignore this email.
              </p>
              <div
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  backgroundColor: "rgba(203, 213, 225, 0.2)",
                  color: "rgb(30, 41, 59)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    margin: "16px 0",
                    textAlign: "center",
                    width: "100%",
                    color: "rgb(30, 41, 59)",
                    fontWeight: 700,
                  }}
                >
                  {token}
                </p>
              </div>
              <a
                href={`https://www.dimach9.online/auth/verefication/${id}`}
                style={{
                  lineHeight: "1.25rem",
                  textDecoration: "none",
                  display: "inline-block",
                  maxWidth: "100%",
                  backgroundColor: "#1e293b",
                  width: "97.5%",
                  textAlign: "center",
                  marginTop: "1.25rem",
                  color: "#f8fafc",
                  textTransform: "lowercase",
                  fontSize: "0.875rem",
                  borderRadius: "0.5rem",
                  padding: "8px 16px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Email
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
);

export default EmailTemplate;
