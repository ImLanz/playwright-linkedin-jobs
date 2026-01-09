export class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByRole('textbox', { name: 'Email or phone' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signInButton = page.getByRole('button', { 
            name: 'Sign in',
            exact: true
        });

    }

    async goto() {
        await this.page.goto('https://www.linkedin.com/login');
    }

    async login(email, pass) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.signInButton.click();
    }
}