exports.emailVerificationTemplate = (otp) => {
    return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Email Verification</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
        .message {
          font-size: 10px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .body {
          font-size: 15px;
          margin-bottom: 16px;
        }
        .support {
          font-size: 14px;
          color: #999999;
          margin-top: 20px;
        }
        .highlight {
          font-weight: bold;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <a href="https://studynotion-edtech-project.vercel.app">
          <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion logo" />
        </a>
        <div class="body">
          <p>Thank you for registering with StudyNotion. To complete your registration, please use the following OTP to verify your account:</p>
          <h2 class="highlight">${otp}</h2>
          <p>This OTP is valid for 5 minutes.</p>
        </div>
        <div class="support">
          If you have any questions or need assistance, please feel free to reach out to
          <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We are here to help!
        </div>
      </div>
    </body>
  </html>`;
  };
  