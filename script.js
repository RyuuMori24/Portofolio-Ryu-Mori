 const typing = document.getElementById("typing");

      const text = [
        " Website Developer",
        "UI Designer",
        "Siswa SMK Telkom Jakarta",
      ];

      let textIndex = 0;
      let charIndex = 0;

      function typeEffect() {
        if (charIndex < text[textIndex].length) {
          typing.innerHTML += text[textIndex].charAt(charIndex);

          charIndex++;

          setTimeout(typeEffect, 100);
        } else {
          setTimeout(eraseEffect, 1500);
        }
      }

      function eraseEffect() {
        if (charIndex > 0) {
          typing.innerHTML = text[textIndex].substring(0, charIndex - 1);

          charIndex--;

          setTimeout(eraseEffect, 50);
        } else {
          textIndex++;

          if (textIndex >= text.length) {
            textIndex = 0;
          }

          setTimeout(typeEffect, 500);
        }
      }

      typeEffect();

      // MOBILE MENU

      const menuBtn = document.getElementById("menu-btn");
      const navLinks = document.querySelector(".nav-links");

      menuBtn.onclick = () => {
        navLinks.classList.toggle("active");
      };

