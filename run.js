const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to remove the 'dist' directory
function removeDist() {
  const distDir = path.join(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    console.log('Removing dist directory...');
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log('dist directory removed.');
  } else {
    console.log('No dist directory to remove.');
  }
}

// Function to prompt the user for input
function askUserToRemoveDist() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Do you want to delete the dist directory after starting the project? (yes | y | no | n): ', (answer) => {
      rl.close();
      const normalizedAnswer = answer.trim().toLowerCase();
      if (normalizedAnswer === 'yes' || normalizedAnswer === 'y') {
        resolve(true);
      } else if (normalizedAnswer === 'no' || normalizedAnswer === 'n') {
        resolve(false);
      } else {
        console.log('Invalid input. Please enter "yes", "y", "no", or "n".');
        resolve(false);  // Default to not removing the directory on invalid input
      }
    });
  });
}

async function run() {
  try {
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('Starting project...');
    execSync('npm run start', { stdio: 'inherit' });

    // Ask user if they want to delete the 'dist' directory
    const shouldRemoveDist = await askUserToRemoveDist();
    
    if (shouldRemoveDist) {
      removeDist();
    } else {
      console.log('Dist directory was not removed.');
    }
  } catch (error) {
    console.error('Error during build or start:', error);
    process.exit(1);
  }
}

// Execute the main function
run();
