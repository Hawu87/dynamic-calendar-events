
// JS for download button
document.getElementById('downloadBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Configure the backend URL - adjust the port as needed
  const backendUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:8000' 
    : 'https://YOUR_RAILWAY_APP_URL'; // Replace with deployed backend URL
  const downloadUrl = `${backendUrl}/api/ipos.ics`;
  
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'ipo-calendar.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
