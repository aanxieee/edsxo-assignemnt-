# NLP-assisted Grammar Detection System

## Overview
A Chrome Extension that detects basic grammar and spelling mistakes in text fields using rule-based NLP techniques.

## Features
- Works on input fields and text areas
- Detects common spelling & grammar issues
- Highlights errors in real-time
- Shows suggestions via tooltip

## NLP Approach
- Rule-based grammar detection
- Token-level pattern matching
- Deterministic and explainable logic
- No external APIs used

## Installation
1. Clone the repository
2. Open chrome://extensions
3. Enable Developer Mode
4. Click Load Unpacked
5. Select the project folder

## How It Works
- Content scripts monitor text input
- NLP rules analyze text
- Errors are highlighted instantly

## ⚠️ Implementation Note: Chrome Extension Module Limitation

During development, an issue was encountered while structuring the extension code using ES module imports.

**Issue**

Initially, the content script attempted to import NLP logic using:

import { detectErrors } from "./nlp.js";

This resulted in the following runtime error:

Uncaught SyntaxError: Cannot use import statement outside a module

**Root Cause**

In Chrome Extensions (Manifest v3), content scripts are not treated as ES modules by default. As a result, standard JavaScript import statements are not supported directly inside content scripts without additional bundling or configuration.

**Resolution**

To ensure maximum compatibility and simplicity:

- The NLP rule-based logic was inlined directly into the content script
- External module imports were removed
- This avoided the need for bundlers or complex module loaders

**Design Rationale**

This approach:

- Keeps the extension lightweight and dependency-free
- Ensures consistent behavior across all supported websites
- Aligns with Chrome Extension best practices for content scripts
- Improves readability and ease of evaluation for reviewers

## Demo
A short demo video (2–3 minutes) is included showing:
- Extension installation
- Real-time grammar detection
- Highlighted errors and suggestions

## Limitations
- Rule-based (not ML-powered)
- Limited grammar coverage

## Future Improvements
- Transformer-based grammar models
- Context-aware corrections
- Multi-language support

## Credits
- Built by Aanya Mittal — see more at https://aanxiee.com
