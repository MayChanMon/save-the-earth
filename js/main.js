// Simple animated counter
function animateCounter(id, target) {
  let count = 0;
  const step = Math.ceil(target / 100);
  const element = document.getElementById(id);

  const counter = setInterval(() => {
    count += step;
    if (count >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = count;
    }
  }, 30);
}

// Start counting when page loads
window.onload = () => {
  animateCounter('trees', 1200);
  animateCounter('volunteers', 300);
};

window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });


  document.querySelectorAll('.earth-thumb').forEach(img => {
    img.addEventListener('mouseover', function () {
      const target = document.getElementById(this.dataset.target);
      target.src = this.src;
    });
  });



// Volunteer form submission
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('volunteerName').value;
  const area = document.getElementById('volunteerArea').value;
  document.getElementById('volunteerMsg').textContent =
    `Thank you, ${name}, for joining us as a volunteer in ${area}!.We will contact you soon.`;
 
});



  document.getElementById("mySubscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mySubscribeMsg").style.display = "block";
    this.reset();
  });