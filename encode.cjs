const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  console.log("Starting ffmpeg encode...");
  execSync(`"${ffmpeg}" -i "/Users/gabriel/Downloads/SYNTAX LP/0_3d_Model_House_1920x1080.mp4" -g 1 -c:v libx264 -preset fast -an -y "/Users/gabriel/Downloads/SYNTAX LP/public/hero-video.mp4"`, {
    stdio: 'inherit'
  });
  console.log("Encode finished successfully!");
} catch (e) {
  console.error("Encode failed:", e);
}
