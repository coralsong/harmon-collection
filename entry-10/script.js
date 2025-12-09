
		const links = document.querySelectorAll('.balloon');
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		// Initialize properties for each link
		links.forEach(link => {
			link.style.top = Math.random() * windowHeight + 'px';
			link.style.left = Math.random() * windowWidth + 'px';
			link.dataset.dx = (Math.random() * 2 + 0.1);
			link.dataset.dy = (Math.random() * 2 + 0.1);
		});

		// Function to animate links
		function animateLinks() {
			links.forEach(link => {
				let x = parseFloat(link.style.left);
				let y = parseFloat(link.style.top);
				let dx = parseFloat(link.dataset.dx);
				let dy = parseFloat(link.dataset.dy);

				// Bounce off edges
				if (x + link.offsetWidth >= windowWidth || x <= 0) {
					dx = -dx; // Reverse direction
				}
				if (y + link.offsetHeight >= windowHeight || y <= 0) {
					dy = -dy; // Reverse direction
				}

				// Update positions and dataset values
				link.style.left = x + dx + 'px';
				link.style.top = y + dy + 'px';
				link.dataset.dx = dx;
				link.dataset.dy = dy;
			});

			requestAnimationFrame(animateLinks);
		}

		// Start animation
		animateLinks();
	