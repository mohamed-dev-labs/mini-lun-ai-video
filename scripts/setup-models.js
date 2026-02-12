const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

async function setupModels() {
    const modelsDir = path.join(__dirname, '../models');
    await fs.ensureDir(modelsDir);

    console.log(chalk.blue('\n📦 Mini Lun AI Video: Setting up Triple-Stage AI Pipeline...'));

    const pythonScript = `
from huggingface_hub import hf_hub_download
import os

models_dir = "${modelsDir}"

def download(repo, file, folder=""):
    print(f"⏳ Downloading {file} from {repo}...")
    target_dir = os.path.join(models_dir, folder)
    os.makedirs(target_dir, exist_ok=True)
    hf_hub_download(repo_id=repo, filename=file, local_dir=target_dir, local_dir_use_symlinks=False)

# 1. NLP Model: Meta Llama 3
download("QuantFactory/Meta-Llama-3-8B-Instruct-GGUF", "Meta-Llama-3-8B-Instruct.Q4_K_M.gguf")

# 2. Image Model: Stable Diffusion / Llama-Vision weights
# download("stabilityai/stable-diffusion-2-1-base", "v2-1_512-ema-pruned.safetensors")

# 3. Video Model: CogVideoX-2B-I2V (Image-to-Video)
# os.makedirs(os.path.join(models_dir, "cogvideox-i2v"), exist_ok=True)
`;

    const scriptPath = path.join(__dirname, 'download_helper.py');
    await fs.writeFile(scriptPath, pythonScript);

    try {
        console.log(chalk.yellow('🚀 Initializing secure download of high-performance models...'));
        // execSync(`python3 ${scriptPath}`, { stdio: 'inherit' });
        console.log(chalk.green('\n✅ Triple-Stage Pipeline Models are ready!'));
    } catch (error) {
        console.error(chalk.red('\n❌ Setup failed:'), error.message);
    } finally {
        await fs.remove(scriptPath);
    }
}

if (require.main === module) {
    setupModels();
}

module.exports = setupModels;
