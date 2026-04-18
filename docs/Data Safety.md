# Google Play Data Safety Guide 🛡️

When deploying VaultKeep to the Google Play Store, you will need to fill out the **Data Safety** section in the Google Play Console. Based on VaultKeep's current architecture, here is how you should answer the key questions.

## 1. Data Collection and Security
- **Does your app collect or share any of the required user data types?**
  - Answer: **No**.
- **Is all of the user data collected by your app encrypted in transit?**
  - Answer: **N/A** (No data is collected or transmitted).
- **Do you provide a way for users to request that their data be deleted?**
  - Answer: **Yes** (Users can delete their data directly within the app or by uninstalling the app).

## 2. Data Types
Since VaultKeep does not upload any data to a server, you can state that **no data is collected**.

*Note: Even though the app "processes" images and text on-device, Google Play generally defines "collection" as data that is sent off the device. Since VaultKeep is 100% offline, you are not "collecting" data in the context of the Play Store's privacy requirements.*

## 3. Functional Permissions
You should disclose the permissions the app uses:
- **Camera**: Used for the receipt scanning feature.
- **Photos and Videos**: Used to save and display receipt images locally.
- **Notifications**: Used for warranty expiration alerts.

## 4. Privacy Policy URL
Google Play requires a public URL for your Privacy Policy. You can host the content of `docs/app/Privacy Policy.md` on a simple website or GitHub Pages and provide that link in the Play Console.

## 5. Summary for Users
In the Play Store listing, you can highlight:
- **No data shared with third parties**: Your data never leaves your device.
- **No data collected**: The developer does not see your information.
- **Data is encrypted**: Uses your device's native secure storage.
- **Data can be deleted**: You are in full control of your information.
