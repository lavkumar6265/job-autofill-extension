# Job Application Autofill Chrome Extension

## Overview
A Chrome Extension built using Manifest V3 that autofills common job application form fields such as Full Name, Email Address, Phone Number, and Skills/Experience with a single click.

---

## Tech Stack
- JavaScript (ES6+)
- Chrome Extensions (Manifest V3)

---

## Features
- One-click autofill
- Uses content scripts for DOM manipulation
- Works across most job application forms
- Simple and clean implementation

---

## Setup & Installation
1. Clone or download the repository
2. Open Google Chrome
3. Go to `chrome://extensions`
4. Enable **Developer Mode**
5. Click **Load unpacked**
6. Select the project folder

---

## How to Use
1. Open any job application form
2. Click the extension icon
3. Click the **Autofill Form** button
4. The detected fields will be filled automatically

---

## Test Page (For Easy Verification)

Some websites may block content scripts due to **Cloudflare or strict security policies**, which can prevent the extension from working properly.

To verify that the extension is functioning correctly, a simple dummy job application form has been hosted using **GitHub Pages**.

👉 **Test Form Link:**  
https://lavkumar6265.github.io/Form/

### Steps to Test:
1. Open the test form link in Chrome
2. Click the extension icon
3. Click **Autofill Form**
4. All fields (Name, Email, Phone, Skills) should autofill correctly

If the extension works on the test page but not on a specific website, the issue is likely due to website-level restrictions (e.g., Cloudflare protection).

---

## Notes
- Some job portals restrict DOM access using security layers like Cloudflare
- This extension works best on forms with meaningful field labels, names, or placeholders
- The hosted test form is provided only for demonstration and verification purposes

---

## Author
Lav Kumar Gahe
Frontend Developer

---

## License
This project is created for assignment and learning purposes.
