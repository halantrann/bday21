document.getElementById('rsvpForm').addEventListener('submit', function(e) {
	e.preventDefault();
  
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
  
	if (name) {
	  // Fake confirmation message - you could hook this up to Google Sheets or a backend later
	  const confirmation = document.getElementById('confirmation');
	  confirmation.textContent = `see you then ${name} :)`;
	  confirmation.classList.remove('hidden');
  
	  // Clear the form
	  document.getElementById('rsvpForm').reset();
	}


  });

  