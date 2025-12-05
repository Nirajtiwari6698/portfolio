# Portfolio Backend

Backend server for handling contact form submissions and sending emails.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment variables:
```bash
cp .env.example .env
```

3. Configure your email settings in `.env`:
- `EMAIL_HOST`: SMTP server (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (e.g., 587)
- `EMAIL_USER`: Your email address
- `EMAIL_PASS`: Your email password or app password
- `EMAIL_FROM`: From email address

4. Start the server:
```bash
npm start
```

For development:
```bash
npm run dev
```

## API Endpoints

- `POST /api/contact` - Send contact form email
- `GET /api/health` - Health check

## Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `EMAIL_PASS`

### Other Email Providers
Update the SMTP settings in your `.env` file accordingly.

## Security Notes

- Never commit your `.env` file
- Use app passwords instead of regular passwords
- Consider using a dedicated email service for production
