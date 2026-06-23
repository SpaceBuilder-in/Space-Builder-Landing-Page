export function getEmailTemplate({
    userName,
    userEmail,
    userNumber,
    userQuery,
}: {
    userName: string;
    userEmail: string;
    userNumber: string;
    userQuery: string;
}) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Query Submission</title>
    <style>
        /* Base Reset */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            background-color: #f4f4f5; /* Light gray background */
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
    </style>
</head>
<body style="background-color: #f4f4f5; margin: 0; padding: 0;">

    <!-- Wrapper Table -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <!-- Main Card -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background-color: #18181b; padding: 24px 20px; color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;">
                            New Contact Submission
                        </td>
                    </tr>

                    <!-- Content Body -->
                    <tr>
                        <td style="padding: 32px 24px;">
                            
                            <!-- User Details Data Table -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 15px; line-height: 1.6; color: #3f3f46;">
                                <!-- Name Row -->
                                <tr>
                                    <td width="100" style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #09090b;">
                                        Name:
                                    </td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;">
                                        ${userName}
                                    </td>
                                </tr>
                                
                                <!-- Email Row -->
                                <tr>
                                    <td width="100" style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #09090b;">
                                        Email:
                                    </td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;">
                                        <a href="mailto:${userEmail}" style="color: #2563eb; text-decoration: none;">${userEmail}</a>
                                    </td>
                                </tr>

                                <!-- Number Row -->
                                <tr>
                                    <td width="100" style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-weight: 600; color: #09090b;">
                                        Number:
                                    </td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5;">
                                        ${userNumber}
                                    </td>
                                </tr>
                            </table>

                            <!-- Query Section -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 24px;">
                                <tr>
                                    <td style="font-weight: 600; color: #09090b; font-size: 15px; padding-bottom: 10px;">
                                        Message / Query:
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f4f4f5; padding: 16px; border-radius: 6px; color: #27272a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${userQuery}</td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding: 20px; background-color: #fafafa; border-top: 1px solid #e4e4e7; font-size: 13px; color: #71717a;">
                            This email was generated automatically from your application.
                        </td>
                    </tr>

                </table>
                <!-- End Main Card -->

            </td>
        </tr>
    </table>
</body>
</html>`;
}
