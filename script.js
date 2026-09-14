    // Datas alvo (ajuste se quiser)
    const targets = [
      new Date(2026, 10, 26, 23, 59, 59), // Cursos Alura
      new Date(2026, 11, 15, 23, 59, 59), // Projetos JS
      new Date(2027, 0, 31, 23, 59, 59),  // Portfolio
      new Date(2026, 9, 30, 23, 59, 59)   // Currículo
    ];

    function updateTimer(index) {
      const now = new Date();
      const diff = targets[index] - now;

      const el = document.getElementById(`timer-${index}`);
      if (!el) return;

      if (diff <= 0) {
        el.textContent = "Tempo esgotado. Agora é só choro e currículo mentiroso.";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    function tick() {
      for (let i = 0; i < targets.length; i++) {
        updateTimer(i);
      }
    }

    // inicia o timer
    tick();
    setInterval(tick, 1000);

    // troca de abas
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // remove active de todos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // ativa o clicado
        tab.classList.add('active');
        const index = tab.getAttribute('data-tab');
        document.getElementById(`tab-${index}`).classList.add('active');
      });
    });