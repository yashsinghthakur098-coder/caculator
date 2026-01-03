# Random Color Zen

A beautifully simple, production-ready React Native app that generates random colors instantly. Built with Expo for cross-platform compatibility (Android, iOS, Web).

## Features

- ✨ One-tap random color generation
- 🎨 Large, beautiful color display (80% of screen)
- 📝 Clear HEX and RGB color values
- 🧘 Modern Zen theme with calming colors
- 📱 Fully responsive (mobile and web)
- 🚀 Minimal code, no external dependencies

## Design

The app uses a Modern Zen color palette:
- **Button**: Sage Green `#5A8B6F`
- **Background**: Warm Sand `#E8DCC4`

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Expo Go app on your device (for testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# Start Expo development server
npm start

# Scan QR code with Expo Go app on your device
# Or press one of these keys:

a - Open on Android
i - Open on iOS simulator
w - Open in web browser
```

## Building for Production

### Android APK

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS (one-time setup)
eas build:configure

# Build Android APK
npm run build:android
```

### iOS

For iOS builds, you'll need an Apple Developer account:
```bash
eas build --platform ios
```

### Web

The web version is automatically built when you run:
```bash
npm start
```
Then press `w` to open in your browser.

## Project Structure

```
random-color-zen/
├── app/
│   ├── _layout.tsx    # Root layout with navigation
│   └── index.tsx      # Main color generator screen
├── assets/            # App icons and images
├── app.json          # Expo configuration
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Usage

1. Open the app
2. Tap the "Generate Color" button
3. See the new random color displayed
4. View the HEX and RGB values below the color
5. Repeat as desired!

## Tech Stack

- **React Native** 0.76.6
- **Expo** SDK 52
- **TypeScript** 5.3
- **Expo Router** 4.0 for navigation

## License

MIT
