# VaultKeep 🛡️

VaultKeep is an offline-first, privacy-respecting asset and warranty management application for Android and iOS. Built with React Native, it leverages device-native machine learning and "Hybrid Intelligence" to automatically parse and digitize complex Philippine store receipts with zero cloud dependencies.

## 🚀 Key Features

*   **100% Offline AI & OCR**: Your financial data never leaves your device. VaultKeep uses Google's ML Kit for text recognition and a local, on-device Large Language Model (via `llama.rn`) for semantic understanding.
*   **Dual-Mode Hybrid Intelligence**: 
    *   *Deterministic Parser*: A highly robust, code-based vision engine that physically slices receipts based on columnar layout (e.g., Abenson) or intelligently walks text patterns (e.g., Mercury Drug) to guarantee 100% duplicate-free line item extraction.
    *   *Neural Auditor*: A lightweight local AI prompt that focuses purely on deducing high-level metadata (Merchant, Category, Branch, Date, Grand Total) without hallucinating items.
*   **Asset & Warranty Tracking**: Digitize physical receipts into searchable, editable assets. Track expiring warranties with instant PDF exporting for easy sharing.
*   **Multi-Currency Support**: Built-in, localized currency conversion to track asset values accurately across different markets.

## 🛠 Tech Stack

*   **Framework**: React Native (CLI)
*   **Language**: TypeScript
*   **Vision Engine**: `@react-native-ml-kit/text-recognition` + Custom Spatial Reconstructor
*   **Local AI**: `llama.rn` (GGUF Model Inference)
*   **Camera**: `react-native-vision-camera`
*   **PDF Generation**: `react-native-html-to-pdf`

---

## 🏗 Architecture for Future Developers

The core innovation of VaultKeep lies in its **Hybrid Capture Pipeline** (`src/features/capture/OCRProcessingScreen.tsx`). If you are contributing to the parsing engine, understand the separation of concerns:

1.  **Vision Engine (`parser.ts`)**: This is the *Source of Truth* for line items. Do not rely on the AI to extract item rows. The parser uses two modes:
    *   **Mode A (Header Slicing)**: Detects `QTY | ITEM | PRICE` headers and uses character indices to slice strings vertically.
    *   **Mode B (Pattern Walking)**: For headerless drugstores/supermarkets, it anchors on `[Name] ... [Price]` and looks ahead for unit details (e.g., `@ 10.00`).
2.  **Neural Auditor (`LlamaService.ts`)**: Handles the "Fuzzy" logic. It parses the OCR dump to extract the `merchant`, `category`, `branch`, `date`, and the final `amount` payable. 
3.  **The Merge**: The UI takes the rigid items from the Vision Engine and overlays the metadata from the Neural Auditor to present a final, editable screen to the user.

### Semantic Noise Gate
Philippine receipts are notoriously complex, containing internal tax codes (`PO.01`, `VAT-Exempt`). The app uses a TypeScript-level "Semantic Merge" to discard non-vowel alphanumeric codes and ensures clean deduplication. Keep this list in mind when adding support for new store POS formats.

---

## 🏃‍♂️ Getting Started

### Prerequisites
*   Node.js (v18+)
*   React Native CLI
*   Android Studio / Xcode for native builds
*   A GGUF format model file (placed in your device storage or via the in-app Model Downloader).

### Installation

1.  **Clone the repository & Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run on Android:**
    ```bash
    # Ensure any native module updates are linked
    npm run rebuild:android
    ```

3.  **Run on iOS:**
    ```bash
    cd ios && pod install && cd ..
    npm run ios
    ```

*Note: Since this app utilizes heavy native bridges (`llama.rn`, `ml-kit`, `html-to-pdf`), Expo Go is not supported. Use bare React Native CLI for all builds.*

# Future Features

## Notification

1. Notify users about warranty expirations
2. Avoid notification spam (100 assets expiring = 1 notification, not 100)
3. Smart frequency settings (global vs per-asset)
4. Timing options (year before, month before, day before, custom)
5. Grouping logic (batch similar expirations)
6. Deep linking from notifications to filtered view
7. Additional filters for expiration timeframes (next month, next day, next year)

### Frequency Settings:
    Global settings make more sense for the initial implementation because:
    - Simpler UX - users don't want to configure each asset individually
    - Most users want consistent behavior
    - Per-asset could be an advanced feature later

### Notification Timing:
Smart defaults with user control:
    - First notification: 30 days before (gives time to plan)
    - Reminder: 7 days before 
    - Final: 1 day before
    - Configurable in settings (30/14/7/1 days)

### Grouping Strategy:
    - Group by time bucket (same day/week/month)
    - One notification per time bucket
    - "12 assets expiring in the next 30 days"
    - "3 assets expiring in the next 7 days"
    - "1 asset expires tomorrow!"

### Deep Linking:
    - Notifications open Dashboard with pre-applied filter
    - New filter: "Expiring In" (1 day, 7 days, 30 days, custom)

### Database/Storage:
  Need to track:
    - Last notification sent per time bucket
    - User preferences for notification timing
    - Maybe notification history to avoid duplicates

## Onboarding screens
Intial screens for setting up the application.
Welcome Screen
Currency Selection Screen
Model Selection Screen (if device is capable, use multi modal vision model, if not just use the normal text only model)
Congrats Screen

## Upgrade to Multi modal Vision Approach
Implement a multimodal agent capable of directly analyzing receipt images to extract detailed information.

## Backup and Restore Feature (Data Portability)
Enable local storage of records for seamless reloading on other devices.
Restore feature will be disabled if Cloud Storage Synchronization is enabled.

## Cloud Storage Synchronization
Synchronize your data with online cloud storage providers such as Google Drive, OneDrive, and Dropbox.
Enabling this feature will disable the Restore Feature, only backup feature is available here.
Sync check is available upon enabling this feature. If there is existing data on the cloud, we let the user decide where to get the data.

# Prompts

## Priming Prompt
```text 
Read AGENTS.md. Acknowledge the current System State and the Technical Guardrails. Once ready, suggest the first step for the Active Feature we were working on.
```

## Update Prompt
```text
Hey OpenCode, we're done for today. Please update the Current Mission in AGENTS.md to reflect that we finished.
```

