<script setup>
import { ref, onMounted } from 'vue';

const projetos = ref([]);

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/projetos');
  const data = await res.json();
  projetos.value = data;

  const cursor = document.querySelector('.cursor');

  let x = 0;
  let y = 0;

  document.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  });

  function animate() {
    if (cursor) {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
});
</script>

<template>
  <div class="container">

    <header class="navbar">
      <img src="../assets/riel.png" class="logo" />

      <nav>
        <a href="https://github.com/rielps" target="_blank">Projetos</a>
        <a href="https://www.linkedin.com/in/jesrrielmoura/" target="_blank">Contato</a>
      </nav>
    </header>

    <section class="hero">
      <img src="../assets/profile.jpg" class="profile" />

      <div class="info">
        <img src="../assets/riel.png" class="hero-logo" />

        <p class="description">
          Olá, sou Jesrriel Lopes. Designer de produto e Desenvolvedor.
          Faço interfaces intuitivas e pensadas para experiência do usuário.
        </p>
      </div>
    </section>

    <section class="projetos">
      <h2>Projetos em destaque</h2>

      <div class="grid">
        <div v-for="p in projetos" :key="p.id" class="card">
          <img :src="p.imagem" />
          <h3>{{ p.nome }}</h3>

          <!-- LINK CORRETO -->
          <router-link
            :to="p.id === 1 ? '/projeto1' : '/projeto2'"
          >
            Ver projeto →
          </router-link>

        </div>
      </div>
    </section>

  </div>

  <div class="cursor"></div>
</template>

<style scoped>
body {
  margin: 0;
  background: #E9E6F4;
  color: #111;
  font-family: Arial, sans-serif;
}

.container {
  padding: 40px;
  max-width: 1000px;
  margin: auto;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(0, 0, 0, 0.05);
  padding: 15px 25px;
  border-radius: 15px;

  backdrop-filter: blur(10px);
}

.logo {
  height: 40px;
}

.navbar nav {
  display: flex;
  gap: 25px;
}

.navbar nav a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.navbar nav a:hover {
  color: black;
}

/* HERO */
.hero {
  display: flex;
  align-items: center;
  margin-top: 80px;
}

.profile {
  width: 140px;
  border-radius: 20px;
  margin-right: 40px;
}

.info {
  display: flex;
  flex-direction: column;
}

.hero-logo {
  width: 120px;
}

.description {
  color: #555;
  max-width: 400px;
  margin-top: 10px;
  line-height: 1.5;
}

/* PROJETOS */
.projetos {
  margin-top: 80px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
  transition: 0.3s;
  color: #111;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.card h3 {
  margin-top: 10px;
}

.card a {
  color: #5b6cff;
  text-decoration: none;
  font-size: 14px;
}
* {
  cursor: none;
}
.cursor {
  width: 25px;
  height: 25px;
  background: #233336;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  z-index: 9999;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .navbar {
    flex-direction: column;
    gap: 15px;
  }

  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .info {
    align-items: center;
  }

  .hero-logo {
    width: 100px;
  }

}
</style>