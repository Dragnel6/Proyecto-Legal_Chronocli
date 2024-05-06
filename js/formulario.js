document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'block';
});
  
document.addEventListener('click', function(e) {
    if (e.target.id === 'popupForm') {
      document.getElementById('popupForm').style.display = 'none';
    }
});
  