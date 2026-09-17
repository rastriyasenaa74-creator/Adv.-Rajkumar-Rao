# ADVOCATE RAJKUMAR RAO — PROFESSIONAL WEBSITE

## Folder structure
- `index.html` — Home
- `about.html` — About Advocate
- `practice-areas.html` — Practice Areas
- `court.html` — Court & Legal Expertise
- `blog.html` — Legal Articles
- `article.html` — Individual article
- `faq.html` — FAQ
- `consultation.html` — Consultation Form
- `contact.html` — Contact
- `disclaimer.html` — Disclaimer
- `admin.html` — Admin Panel
- `assets/style.css` — Complete CSS
- `assets/app.js` — Front-end JavaScript
- `assets/config.js` — Backend URL/config
- `assets/logo.jpg` — Uploaded advocacy logo
- `backend/Code.gs` — Google Apps Script backend

## Google Sheets + backend setup
1. Google Sheet बनाइए.
2. Extensions → Apps Script खोलें.
3. `backend/Code.gs` का पूरा code paste करें.
4. `ADMIN_PASSWORD` में अपना strong admin password डालें.
5. Save करें.
6. `setupSheet()` को एक बार Run करें और permissions allow करें.
7. Deploy → New deployment → Web app.
8. Execute as: Me.
9. Who has access: Anyone.
10. Web App URL copy करें.
11. `assets/config.js` में:
   `API_URL: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"`
   की जगह अपना Web App URL डालें.
12. अब website upload करें.

## Admin
Website के `/admin.html` page पर Apps Script वाला password डालकर login करें.

Admin से:
- Consultation requests देख सकते हैं
- Status बदल सकते हैं
- Requests delete कर सकते हैं
- Blog articles add/edit/delete कर सकते हैं
- Dashboard counts देख सकते हैं

## Important
- Uploaded logo `assets/logo.jpg` के रूप में Home और Header में इस्तेमाल किया गया है.
- Bar Council Enrollment/COP, office address और office hours को बिना verification के publish नहीं किया गया है.
- Website का content general legal awareness के लिए है और legal outcome की guarantee नहीं देता.
