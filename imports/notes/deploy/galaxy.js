/*
 *  Các bước để deploy project:
 *
 *  Step 0: Chuẩn bị tên miền ở Godaddy -> Manage DNS
 *        Cấu hình CNAME: [Name] live -> [Value] us-east-1.galaxy-ingress.meteor.com
 *        Thêm favicon vào project
 *
 *
 *  Step 1: Config settings.json file:
 *        {
 *            "galaxy.meteor.com": {
 *               "env": {
 *                   "MONGO_URL": "mongodb://username:password@mongoURI",
 *                   "ROOT_URL": "https://host.snp-skynet.com",
 *                   "MAIL_URL": "MAILGUN URI"
 *               }
 *            },
 *        }
 *
 *  Step 2: Trong window cmd đang cd trong project:
 *       $ SET DEPLOY_HOSTNAME=galaxy.meteor.com
 *       $ meteor deploy [hostname] --settings path-to-settings.json
 *       $ meteor deploy host.snp-skynet.com --settings settings.json
 *
 *  Step 3: Vào Galaxy Dashboard để bật encrypt option: Enabled + Force HTTPS
 *
 */