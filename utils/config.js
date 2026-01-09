import 'dotenv/config'

export const config = {
    baseUrl: 'https://www.linkedin.com',
    email: process.env.LINKEDIN_EMAIL,
    pass: process.env.LINKEDIN_PASS
};