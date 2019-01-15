<template>
  <div class="about">
    <header>
      <object class="logo" type="image/svg+xml" data="/assets/images/logos/logo_vertical-fox.svg">Félix</object>
      <h1>Créer facilement et rapidement des prototypes percutants !</h1>
    </header>
    <main>
      <section>
        <h2>Un outil typographique</h2>
        <p>Utilisez les typographies disponibles sur Google Fonts.</p>
        <p>Associez les fonts ensemble et assurez-vous de leur bonne combinaison.</p>
        <p>Créez une échelle de taille modulaire pour les titres et les textes.</p>
        <p>Gérer les espaces blancs des textes.</p>
        <p>Contrôler la longueur et la hauteur de ligne de vos textes.</p>
      </section>
      <section>
        <h2>Un outil de couleurs</h2>
        <p>Créer une palette de couleur facilement pour votre prototype et modifier là selon vos envies.</p>
        <p>Faite votre choix d’harmonie de couleurs et appliquez-le instantanément à votre palette de couleur.</p>
      </section>
      <section>
        <h2>Un outil qui fait le café… Ou presque.</h2>
        <p>Prévisualiser le résultat en direct.</p>
        <p>Faites plusieurs itérations d’un prototype pour tester vos différentes idées.</p>
        <p>Partagez votre prototype avec vos collègues et vos clients.</p>
        <p>Exportez le résultat de votre travail dans le format de votre choix.</p>
      </section>

      <section>
        <h2>Allez-y, Félix n'attend que vous !</h2>
        <router-link tag="button" :to="'dashboard'">Essayer Félix</router-link>
      </section>
    </main>

    <footer>
      <div class="logo"></div>
      <ul>
        <li><a href="">Crédits</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>
