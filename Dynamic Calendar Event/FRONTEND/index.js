
// JS for download button
document.getElementById('downloadBtn').addEventListener('click', function(e) {
  e.preventDefault();
  alert("Download feature coming soon!");
  // Later: Replace with API call or actual .ics download link
});

document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
