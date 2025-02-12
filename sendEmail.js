const nodemailer = require('nodemailer');

async function sendReportEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Abc@gmail.com',  // Replace with your email
            pass: 'xyz'  // Use an app password if 2FA is enabled
        }
    });

    let mailOptions = {
        from: 'abc.com',
        to: 'XYZ@gmail.com', // Replace with recipient email
        subject: 'Test Automation Report',
        text: 'Hello,\n\nPlease find the attached test execution report.\n\nRegards,\nQA Team',
        attachments: [
            {
                filename: 'cucumber_report.html',
                path: './reports/cucumber_report.html'
            }
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Call function to send email
sendReportEmail();
