<template>
  <div class="about">
    <section id="hero" class="hero">
      <object
        class="logo"
        type="image/svg+xml"
        data="./assets/images/logos/logo_vertical-fox.svg"
      >Félix</object>
      <h1>Créer facilement et rapidement des prototypes percutants !</h1>
    </section>
    <f-nav></f-nav>
    <main>
      <section class="about__feature about__feature--typo">
        <picture>
          <source srcset="@/assets/images/illu_1.png 1x, @/assets/images/illu_1@2x.png 2x">
          <source src="illu_1.svg">
          <img src="@/assets/images/illu_1.svg" alt="Félix un outils de typographie">
        </picture>
        <div class="about__feature-content">
          <h2>Un outil typographique</h2>
          <p>Utilisez les typographies disponibles sur Google Fonts.</p>
          <p>Associez les fonts ensemble et assurez-vous de leur bonne combinaison.</p>
          <p>Créez une échelle de taille modulaire pour les titres et les textes.</p>
          <p>Gérer les espaces blancs des textes.</p>
          <p>Contrôler la longueur et la hauteur de ligne de vos textes.</p>
        </div>
        <div></div>
      </section>
      <section class="about__feature about__feature--color">
        <picture>
          <source srcset="@/assets/images/illu_2.png 1x, @/assets/images/illu_2@2x.png 2x">
          <source src="illu_2.svg">
          <img src="@/assets/images/illu_2.svg" alt="Félix un outils de typographie">
        </picture>
        <div class="about__feature-content">
          <h2>Un outil de couleurs</h2>
          <p>Créer une palette de couleur facilement pour votre prototype et modifier là selon vos envies.</p>
          <p>Faite votre choix d’harmonie de couleurs et appliquez-le instantanément à votre palette de couleur.</p>
        </div>
      </section>
      <section class="about__feature about__feature--other">
        <picture>
          <source srcset="@/assets/images/illu_3.png 1x, @/assets/images/illu_3@2x.png 2x">
          <source src="illu_3.svg">
          <img src="@/assets/images/illu_3.svg" alt="Félix un outils de typographie">
        </picture>
        <div class="about__feature-content">
          <h2>Un outil qui fait le café… Ou presque.</h2>
          <p>Prévisualiser le résultat en direct.</p>
          <p>Faites plusieurs itérations d’un prototype pour tester vos différentes idées.</p>
          <p>Partagez votre prototype avec vos collègues et vos clients.</p>
          <p>Exportez le résultat de votre travail dans le format de votre choix.</p>
        </div>
      </section>

      <section class="about__feature about__feature--cta">
        <div class="about__feature-content">
          <h2>Allez-y, Félix n'attend que vous !</h2>
          <router-link tag="button" class="btn btn--alt btn--plain" :to="'dashboard'">Essayer Félix</router-link>
        </div>
      </section>
    </main>

    <footer>
      <router-link tag="a" :to="'dashboard'">
        <object
          class="logo"
          type="image/svg+xml"
          data="./assets/images/logos/logo_horizontal-fox.svg"
        >Félix</object>
      </router-link>
      <nav>
        <ul class="navigation navigation--horizontal">
          <li>
            <a class="link" href="#hero">À Propos</a>
          </li>
          <li>
            <router-link class="link" tag="a" :to="'credits'">Crédits</router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>


<script>
// COMPONENTS
import fNav from "@/components/navigation";
export default {
  components: {
    fNav
  }
};
</script>
