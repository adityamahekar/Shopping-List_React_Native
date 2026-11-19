# LUNA – Inventory Management App

A React Native mobile application built with Expo to manage inventory, track stock quantities, add items, and identify low-stock products.

---

## Features

- Add new inventory items with name and stock quantity.
- View all available inventory items.
- Track stock quantities in real time.
- Identify low-stock items automatically.
- Highlight items with low stock using a red background.
- Display normal-stock items using a green background.
- Manage application data using React Context and React Hooks.
- Simple and user-friendly mobile interface.

## Screenshots

Add your application screenshots inside the `assets/screenshots/` folder.

| Home Screen | Low Stock |
|:---:|:---:|
| ![Home Screen](./assets/home.png) | ![Low Stock](./assets/low-stock.png) |

| Create Item | Edit Item |
|:---:|:---:|
| ![Create Item](./assets/create-item.png) | ![Edit Item](./assets/p57.png) |

---

## Tech Stack

| Technology | Purpose |
|:---|:---|
| React Native | Mobile application development |
| JavaScript (ES6+) | Application logic |
| Expo | Development and testing environment |
| React Hooks | State management |
| Context API | Sharing application data |
| React Native Components | Mobile UI development |
| FlatList | Displaying inventory items |
| StyleSheet | Component styling |
| npm | Package management |

---

## Project Structure

```text
LUNA/
│
├── android/
├── ios/
├── src/
│   ├── context/
│   │   └── UserContext.jsx
│   │
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   ├── AllItems.jsx
│   │   ├── CreateScreen.jsx
│   │   └── LowStock.jsx
│   │
│   └── Temp.jsx
│
├── App.jsx
├── app.json
├── package.json
├── babel.config.js
├── metro.config.js
└── README.md
```

---

## Low Stock Detection

LUNA automatically identifies products with a stock quantity of 5 or less.

**Stock Status:**

| Condition | Status | Background |
|:---|:---|:---|
| Stock ≤ 5 | Low Stock | Red (`#f16d78`) |
| Stock > 5 | Available | Green (`#cdf3d7`) |

**Implementation:**

```javascript
backgroundColor:
  item.stock <= 5 ? '#f16d78' : '#cdf3d7'
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adityamahekar/LUNA.git
```

### 2. Navigate to Project Folder

```bash
cd LUNA
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Expo Development Server

```bash
npx expo start
```

### 5. Run the Application

- Install Expo Go on your mobile device.
- Scan the QR code displayed in the terminal.
- Open the application in Expo Go.

---

## Development

To run the application on an Android emulator:

```bash
npm run android
```

To start the Expo development server:

```bash
npx expo start
```

---

## Future Enhancements

- Edit and delete inventory items.
- Search and filter inventory products.
- Stock quantity update notifications.
- Inventory analytics and dashboard.
- Persistent storage using a database.
- User authentication and authorization.

<p align="center">
  Developed with React Native and Expo
</p>

---
---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
