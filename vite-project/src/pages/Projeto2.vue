<template>
  <div class="page">
    <!-- HEADER -->
    <header class="header">
      <img src="../assets/riel.png" class="logo" />

      <router-link to="/" class="home-link">
        Início
      </router-link>
    </header>

    <!-- HERO / BANNER -->
    <section class="hero">
      <img src="../assets/banner2.png" class="hero-img" />
    </section>

    <!-- CONTEÚDO -->
    <section class="content">
      <h2>Site do Ensino Médio Potiguar</h2>
      <hr />

      <div class="info">
        <div>
          <p class="label">CATEGORIA</p>
          <p>Web Development e Graphic Design</p>
        </div>

        <div>
          <p>
            O portal Ensino Médio Potiguar reúne informações, iniciativas e recursos
            educacionais em uma experiência simples e acessível. Projetado para apoiar
            estudantes da rede estadual, o site facilita o acesso a conteúdos essenciais
            e fortalece a conexão com o ambiente educacional.
          </p>
        </div>
      </div>

      <!-- GALERIA -->
      <div class="gallery">
        <img src="../assets/imagem4.png" alt="Foto 1" />
        <img src="../assets/imagem5.png" alt="Foto 2" />
        <img src="../assets/imagem6.png" alt="Foto 3" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  background: #E9E6F4;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #1d1d1f;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 60px;
}

.logo {
  width: 48px;
}

.home-link {
  text-decoration: none;
  color: #1d1d1f;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.7;
  transition: 0.3s;
}

.home-link:hover {
  opacity: 1;
}

/* HERO */
.hero {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.hero-img {
  width: 85%;
  max-width: 800px;
  height: 320px;
  object-fit: cover;
  border-radius: 24px;
}

.hero-content {
  position: absolute;
  top: 180px;
  width: 100%;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -1px;
}

.hero-content p {
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: 4px;
  opacity: 0.8;
}

/* CONTENT */
.content {
  padding: 60px;
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

hr {
  margin: 20px 0 40px;
  border: none;
  border-top: 1px solid #d6d3e6;
}

.info {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.label {
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 8px;
}

/* TEXTO MAIS "APPLE" */
.info p {
  font-size: 15px;
  line-height: 1.8;
  color: #3a3a3c;
  max-width: 600px;
}

/* GALERIA */
.gallery {
  display: flex;
  gap: 24px;
}

.gallery img {
  width: 100%;
  width: 320px;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery img:hover {
  transform: scale(1.03);
}
</style>