# Mini Lun AI Video 🎬 (v2.0.0)

![Mini Lun AI Video Logo](./assets/logo.jpg)

**Mini Lun AI Video** is a revolutionary CLI tool that implements a **Triple-Stage AI Pipeline** to transform natural language into high-quality cinematic videos. 

## 🧠 Triple-Stage Architecture

The tool operates in three distinct phases to ensure the highest quality output:

1.  **Stage 1: NLP (Meta Llama 3)** 🧠
    - Analyzes the user's raw prompt.
    - Performs advanced Prompt Engineering to create a detailed cinematic description.
2.  **Stage 2: Text-to-Image (Llama Vision/SD)** 🎨
    - Takes the refined prompt and synthesizes a high-resolution keyframe image.
    - This ensures the visual composition is perfect before animation.
3.  **Stage 3: Image-to-Video (CogVideoX I2V)** 🎥
    - Animates the generated image into a smooth, cinematic video.
    - Uses state-of-the-art Image-to-Video (I2V) technology for realistic motion.

## 🚀 Features

- **Local Execution**: Runs entirely on your hardware for maximum privacy.
- **Automated Pipeline**: One command handles the entire process from text to final video.
- **Smart Model Management**: Automatically downloads and configures the necessary models.
- **Professional CLI**: Beautiful terminal interface with real-time progress tracking.

## 📦 Installation

```bash
npm install -g .
```

## 🛠️ Usage

```bash
mini-lun generate "A majestic eagle soaring over the snowy Himalayas"
```

### Options
- `-o, --output <path>`: Final video path (default: `mini-lun-final.mp4`).
- `--keep-image`: Save the intermediate image generated in Stage 2.

---
*Powered by Meta Llama 3 & CogVideoX*
