Meteor.startup(function () {
    // Need to config Mandril for Meteor: meteor add wylio:mandrill
    // process.env.MAIL_URL="smtp://[YOUR_EMAIL]@gmail.com:[YOUR_PASSWORD]@smtp.gmail.com:465/";
    process.env.MAIL_URL = Meteor.settings.private.mailgun.key;
});