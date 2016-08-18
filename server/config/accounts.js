import {SSR} from 'meteor/meteorhacks:ssr';
import { Email } from 'meteor/email';


Accounts.config({
    loginExpirationInDays: 7
});

// WELCOME EMAIL

SSR.compileTemplate('welcomeEmail', Assets.getText('templates/welcomeEmail.html'));

Accounts.onCreateUser(function(options, user) {
    if (options.profile)
        user.profile = options.profile;
    // Send welcome email here
    Email.send({
        to: user.emails[0].address,
        from: "Skynet <no-reply@skynet.com>",
        subject: "Chào mừng bạn đến với Skynet",
        html: SSR.render('welcomeEmail'),
    });
    return user;
});

// RESET PASSWORD EMAIL

SSR.compileTemplate('resetPasswordEmail', Assets.getText('templates/resetPasswordEmail.html'));

Accounts.emailTemplates.siteName = "Skynet Project";
Accounts.emailTemplates.from = "Skynet <no-reply@skynet.com>";
Accounts.emailTemplates.resetPassword.subject = function(user) {
    return "Khôi phục mật khẩu của bạn tại Skynet"
};
Accounts.urls.resetPassword = function(token){
    return Meteor.absoluteUrl("reset-password/" + token);
};
Accounts.emailTemplates.resetPassword.html = function(user, url) {
    let emailData = {
        userName: user.profile.name,
        resetUrl: url
    };
    return SSR.render('resetPasswordEmail', emailData);
};