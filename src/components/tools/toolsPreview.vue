<template>
  <div id="preview" class="tools__preview preview">
    <h1
      style="text-align: center"
      :style="[styleTitle, { fontSize: fontSizeLevel(4), margin: '0 auto'}]"
    >{{prototype.meta.name}}</h1>

    <section class="preview__display-sizes">
      <h2>Titres</h2>
      <ul class="not-a-list">
        <li class="preview__display-elem">
          <h1
            :style="[styleTitle, { fontSize: fontSizeLevel(4)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h1>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(4)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(4)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <h2
            :style="[styleTitle, { fontSize: fontSizeLevel(3)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h2>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(3)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(3)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <h3
            :style="[styleTitle, { fontSize: fontSizeLevel(2)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h3>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(2)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(2)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <h4
            :style="[styleTitle, { fontSize: fontSizeLevel(1)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h4>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(1)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(1)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <p
            :style="[styleTitle, { fontSize: fontSizeLevel(0)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</p>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(0)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(0)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <h5
            :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h5>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(-1)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(-1)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <h6
            :style="[styleTitle, { fontSize: fontSizeLevel(-2)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</h6>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(-2)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(-2)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="preview__display-sizes">
      <h2>Textes</h2>
      <ul class="not-a-list">
        <li class="preview__display-elem">
          <p
            :style="[styleText, {fontSize: fontSizeLevel(1)}]"
            style="font-size: larger;"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</p>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(0)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(0)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <p
            :style="[styleText, {fontSize: fontSizeLevel(0)}]"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</p>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(0)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(0)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
        <li class="preview__display-elem">
          <p
            :style="[styleText, {fontSize: fontSizeLevel(-1)}]"
            style="font-size: smaller;"
          >Le vif zéphyr jubile sur les kumquats du clown gracieux.</p>
          <ul class="preview__data-list not-a-list">
            <li class="text text--shade">{{`${fontSizeLevel(0)}`}}</li>
            <li
              class="text text--shade"
            >{{`${Number.parseInt(fontSizeLevel(0)) / fontSize.base.value}em`}}</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="preview__display-colors">
      <h2>Couleurs</h2>
      <ul class="not-a-list">
        <li class="preview__color" v-for="(color, id) in colors" :key="id">
          <div class="preview__color-tile" :style="{backgroundColor: colorHSLA[id]}"></div>
          <div class="preview__color-data">
            <h3 class="title h3 preview__color-name">{{ id }}</h3>
            <ul class="not-a-list">
              <!-- <li>
                <h5 class="title h5 title--upp">HEX</h5>
                <span></span>
              </li>
              <li>
                <h5 class="title h5 title--upp">RVB</h5>
                <span></span>
              </li>-->
              <li>
                <h5 class="title h5 title--upp">HSL</h5>
                <span>{{Math.abs(Math.round(color.h))}} {{Math.round(color.s)}} {{Math.round(color.l)}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>

    <section class="preview__long-text">
      <h1 :style="[styleTitle, marginTitle, { fontSize: fontSizeLevel(4) }]">Vulpes Vulpes</h1>
      <h2 :style="[styleTitle, marginTitle, { fontSize: fontSizeLevel(3) }]">Ou le Renard.</h2>
      <p
        :style="[styleText, marginText]"
      >Le Renard est une figure bien connue de tous, tant il est représenté dans la culture. De la poésie à la série, on lui prête bien des traits de caractère.</p>
      <p
        :style="[styleText, marginText]"
      >Il est souvent considéré comme rusé, comme dans “Le renard et le corbeau” du fabuliste Jean de La Fontaine. Où le Maître Renard, par l'odeur alléchée, trompe un Maître Corbeau par des flatteries sur sa voix. Pour que ce dernier laisse tomber le fromage qu'il tenait dans son bec.</p>
      <p
        :style="[styleText, marginText]"
      >Le renard est aussi malicieux, il feint d'être boiteux et, à l'aide d'un chat qui prétend être aveugle détourne sans cesse Pinocchio du droit chemin dans Pinocchio de Carlo Collodi.</p>
      <p
        :style="[styleText, marginText]"
      >Il peut être doux et sage, en expliquant au petit prince le terme “apprivoiser” et les notions de responsabilité et d'amitié, dans “Le petit prince” de Saint-Exupéry.</p>
      <p
        :style="[styleText, marginText]"
      >Ou bien voleur au grand cœur, comme dans l'adaptation en dessin animé de Robin des bois des studios Disney. Où il incarne le justicier archer, volant aux riches pour donner aux pauvres. Et ravissant au passage la belle - qui n'avait d'yeux que pour lui - des griffes du shérif de Nottingham.</p>
      <p
        :style="[styleText, marginText]"
      >Sauvage et indomptable, quand un renardeau et un chiot se lient d'amitié. Mais lorsque renardeau devient renard, sauvage dans sa forêt et que chiot devient chien dressé et domestiqué par son maître. Leur amitié se transforme en adversité dans “Le Renard et le Chien courant” de Daniel Mannix. Inspirant les studios Disney, encore eux, pour le film “Rox et Rouky”.</p>
      <p :style="[styleText, marginText]">Bref, du renard, en veux-tu en voilà.</p>
    </section>

    <section class="preview__column-text">
      <div>
        <h3
          :style="[styleTitle, marginTitle, { fontSize: fontSizeLevel(2), color: colorHSLA.main }]"
        >Lieu de vie</h3>
        <p
          :style="[styleText, marginText]"
        >Le renard est le carnivore qui occupe la plus vaste répartition sur le globe. Les seules zones où il est absent sont l’Amérique du Sud et l’Afrique à l'exception du Maroc et le long du Nil.</p>
      </div>
      <div>
        <h3
          :style="[styleTitle, marginTitle, { fontSize: fontSizeLevel(2), color: colorHSLA.main }]"
        >Apparence</h3>
        <p
          :style="[styleText, marginText]"
        >Un corps roux allongé, avec quatre courtes pattes. Une longue queue duveteuse se terminant par une touffe de poils blancs. Une gueule allongée par un fin museau, la gorge, le menton et le pourtour de ses babines blanches.</p>
      </div>
      <div>
        <h3
          :style="[styleTitle, marginTitle, { fontSize: fontSizeLevel(2), color: colorHSLA.main }]"
        >Vie Sociale</h3>
        <p
          :style="[styleText, marginText]"
        >Animal solitaire en apparence, les renards vivent parfois en couple. Mais il n'est pas question de partager son repas avec son partenaire. Sauf lorsque de petits renardeaux pointent le bout de leur museau.</p>
      </div>
    </section>

    <section class="preview__card" :style="{backgroundColor: colorHSLA.darkShade}">
      <div
        class="preview__card-elem preview__card-elem--social"
        :style="{backgroundColor: colorHSLA.lightShade}"
      >
        <h4
          :style="[styleTitle, { fontSize: fontSizeLevel(1), color: colorHSLA.main }]"
        >Renard des villes.</h4>
        <p
          :style="[styleText]"
        >Par manque de territoire forestier, petit à petit, les villes, se nourrissant de déchets et se réfugiant dans les parcs et jardins des quartiers résidentiels. Des élevages ont même été créés pour approvisionner le marché de la fourrure.</p>
        <ul class="not-a-list" :style="{ color: colorHSLA.main }">
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">1234</li>
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">5678</li>
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">90</li>
        </ul>
      </div>
      <div
        class="preview__card-elem preview__card-elem--shoping"
        :style="{backgroundColor: colorHSLA.lightShade}"
      >
        <picture>
          <source
            srcset="/assets/images/mr-fox@1x.jpg 300w, /assets/images/mr-fox@2x.jpg 600w, /assets/images/mr-fox@3x.jpg 800w"
          >
          <img src="/assets/images/mr-fox@2x.jpg" alt="Un enfant avec une vest renard.">
        </picture>
        <div class="preview__card-content">
          <span
            :style="[styleTitle, { fontSize: fontSizeLevel(-1), color: colorHSLA.main}]"
          >Livre pour enfant</span>
          <h4
            class="preview__card-title"
            :style="[styleTitle, { fontSize: fontSizeLevel(1), color: colorHSLA.main}]"
          >Fantastic Mr. Fox</h4>
          <p
            :style="[styleText]"
          >M. Fox, le plus rusé des voleurs de poules, sa femme, Mme Fox, Ash, son fils, le cousin Kristofferson et tous les autres animaux de la forêt défient trois odieux fermiers. Après que ces fermiers malfaisants leur aient déclaré la guerre, M. Fox et ses voisins animaux s'unissent pour se défendre et ils vont vivre la plus périlleuse et délirante des aventures.</p>
          <span :style="[styleTitle, {color: colorHSLA.main}]">Roald Dahl</span>
        </div>
      </div>
      <div
        class="preview__card-elem preview__card-elem--alert"
        :style="{ backgroundColor: colorHSLA.darkAccent, borderColor: colorHSLA.lightAccent, color: colorHSLA.lightAccent}"
      >
        <h3 :style="[styleTitle, { fontSize: fontSizeLevel(2), margin: '0'}]">Gare à toi !</h3>
        <p
          :style="[styleText, { margin: '0' }]"
        >Le principal prédateur du renard est l’Homme. Et oui, comme toutes les espèces vivantes sur cette terre, l'Homme est le prédateur numéro un du renard. Il y en a qui disent que Donald Trump aurait une moumoute en fourrure de renard.</p>
        <button
          :style="[styleTitle, { fontSize: fontSizeLevel(0), color: colorHSLA.lightAccent, borderColor: colorHSLA.lightAccent, backgroundColor: 'transparent'}]"
        >Fakes News</button>
        <button
          :style="[styleTitle, { fontSize: fontSizeLevel(0), color: colorHSLA.darkAccent, borderColor: colorHSLA.lightAccent, backgroundColor: colorHSLA.lightAccent}]"
        >Intox.</button>
      </div>
      <div
        class="preview__card-elem preview__card-elem--alt"
        :style="{backgroundColor: colorHSLA.main, color: colorHSLA.lightShade}"
      >
        <h4 :style="[styleTitle, { fontSize: fontSizeLevel(1), margin: '0'}]">Adaptation.</h4>
        <p :style="[styleText, {margin: '0'}]">
          Le Renard roux a une forte capacité d'adaptation aux conditions du milieu dans lequel il vit. Ainsi, la population se maintient à un niveau stable. En revanche, en cas de surpopulation passagère, on observe un réajustement des effectifs par une plus grande dispersion des animaux à l'automne, et par une plus grande mortalité par le biais de l'arrivée
          <a
            :style="{color: colorHSLA.lightAccent}"
            href="#"
          >d'épizooties.</a>
        </p>
      </div>
    </section>

    <section class="preview__card" :style="{backgroundColor: colorHSLA.lightAccent}">
      <div
        class="preview__card-elem preview__card-elem--social"
        :style="{backgroundColor: colorHSLA.lightShade}"
      >
        <h4
          :style="[styleTitle, { fontSize: fontSizeLevel(1), color: colorHSLA.main}]"
        >Origine et Évolution</h4>
        <p
          :style="[styleText]"
        >Le Renard est considéré comme le membre du genre Vulpes le plus spécialisé et le plus évolué, notamment du fait de sa taille et de son adaptation à un régime carnivore. Son aire faciale est plus développée. Le Renard est originaire d'Eurasie. Le plus ancien spécimen fossilisé de Vulpes vulpes a été découvert en Hongrie, et date d'entre 3,4 et 1,8 million d'années avant le présent.</p>
        <ul class="not-a-list" :style="{color: colorHSLA.main}">
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">1234</li>
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">5678</li>
          <li :style="[styleTitle, { fontSize: fontSizeLevel(-1)}]">90</li>
        </ul>
      </div>
      <div
        class="preview__card-elem preview__card-elem--shoping"
        :style="{backgroundColor: colorHSLA.lightShade}"
      >
        <picture>
          <source
            srcset="/assets/images/mr-fox@1x.jpg 300w, /assets/images/mr-fox@2x.jpg 600w, /assets/images/mr-fox@3x.jpg 800w"
          >
          <img src="/assets/images/mr-fox@2x.jpg" alt="Un enfant avec une vest renard.">
        </picture>
        <div class="preview__card-content">
          <span
            :style="[styleTitle, {fontSize: fontSizeLevel(-1), color: colorHSLA.main}]"
          >Livre pour enfant</span>
          <h4
            class="preview__card-title"
            :style="[styleTitle, { fontSize: fontSizeLevel(1), color: colorHSLA.main}]"
          >Le Petit Prince</h4>
          <p
            :style="[styleText]"
          >Le Petit Prince est un garçon aux cheveux d'or et au rire cristallin. Il habite sur une planète à peine plus grande que lui. Il possède une rose, orgueilleuse et capricieuse, qui l'accable de reproches. Il profite d'une migration d'oiseaux sauvages pour s'enfuir et visiter les planètes voisines. De rencontre en rencontre, il arrive sur Terre et découvre l'amitié avec le renard. Il apprend avec lui que l'essentiel est invisible pour les yeux et réalise à quel point sa rose lui manque...</p>
          <span :style="[styleTitle, {color: colorHSLA.main}]">Antoine de Saint-Exupéry</span>
        </div>
      </div>
      <div
        class="preview__card-elem preview__card-elem--alert"
        :style="{backgroundColor: colorHSLA.lightAccent}"
      >
        <h3
          :style="[styleTitle, { fontSize: fontSizeLevel(2), color: colorHSLA.darkAccent}]"
        >Chasse au renard</h3>
        <p
          :style="[styleText]"
        >Dans certaine région du monde il est encore considéré comme un nuisible et peut donc être chassé. En Angleterre la pratique traditionnel de la chasse à courre du renard est interdite. Mais pas en France, ni au Canada où il n'est pas rare de voir de nostalgiques anglais venant s'adonner à leur passe-temps favori.</p>
        <button
          :style="[styleTitle, { color:colorHSLA.darkAccent, fontSize: fontSizeLevel(0), color: colorHSLA.darkAccent, borderColor: colorHSLA.darkAccent, backgroundColor: 'transparent'}]"
        >À la chasse !</button>
        <button
          :style="[styleTitle, { color:colorHSLA.lightShade, fontSize: fontSizeLevel(0), borderColor: colorHSLA.darkAccent, backgroundColor: colorHSLA.darkAccent}]"
        >Jamais !</button>
      </div>
      <div
        class="preview__card-elem preview__card-elem--alt"
        :style="{backgroundColor: colorHSLA.lightShade}"
      >
        <h4 :style="[styleTitle, { fontSize: fontSizeLevel(1) }]">Étymologie</h4>
        <p :style="[styleText]">
          Le renard était appelé au Moyen-Âge goupil, mot provenant du terme latin Vulpes. Il doit son nom commun actuel au
          <a
            href="#"
          >Roman de Renart</a>, œuvre littéraire très connue du Moyen-Âge dont les héros sont des animaux portant chacun un nom. Ainsi le goupil du livre s'appelle Renart, nom propre qui comme Renaud et Reginald vient de l'allemand “ragin” et hart et signifie « de bon conseil ».
        </p>
      </div>
    </section>

    <section class="preview__quote">
      <blockquote>
        <p
          :style="[styleTitle, {fontSize: fontSizeLevel(4)}]"
        >On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.</p>
        <cite
          :style="[styleTitle, {marginTop: '2em', maxWidth: 'initial'}]"
        >— Renard, Le Petit Prince d’Antoine Saint-Exupéry</cite>
      </blockquote>
    </section>
  </div>
</template>

<script>
//VUEX
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    styleText() {
      return {
        fontFamily: this.fontText.family,
        fontWeight: this.fontText.weight,
        fontStyle: this.fontText.style,
        fontSize: this.fontSize.base.value.toString() + this.fontSize.base.unit,
        maxWidth:
          this.textLine.length.value.toString() + this.textLine.length.unit,
        lineHeight: this.textLine.height,
        margin: 0
      };
    },

    styleTitle() {
      return {
        fontFamily: this.fontTitle.family,
        fontWeight: this.fontTitle.weight,
        fontStyle: this.fontTitle.style,
        maxWidth:
          this.titleLine.length.value.toString() + this.titleLine.length.unit,
        lineHeight: this.titleLine.height,
        margin: 0
      };
    },

    marginTitle() {
      return {
        marginTop: this.titleSpace.before.value + this.titleSpace.before.unit,
        marginBottom: this.titleSpace.after.value + this.titleSpace.after.unit
      };
    },

    marginText() {
      return {
        marginTop: this.textSpace.before.value + this.textSpace.before.unit,
        marginBottom: this.textSpace.after.value + this.textSpace.after.unit
      };
    },

    ...mapGetters({
      colorHSLA: "prototypesStore/getColorHSLA"
    }),

    ...mapState({
      prototype: state => state.prototypesStore.prototype,
      fontTitle: state =>
        state.prototypesStore.prototype.typography.fontChoices.fontTitle,
      fontText: state =>
        state.prototypesStore.prototype.typography.fontChoices.fontText,
      fontSize: state => state.prototypesStore.prototype.typography.format.size,
      titleLine: state =>
        state.prototypesStore.prototype.typography.format.titles.line,
      titleSpace: state =>
        state.prototypesStore.prototype.typography.format.titles.spaces,
      textLine: state =>
        state.prototypesStore.prototype.typography.format.texts.line,
      textSpace: state =>
        state.prototypesStore.prototype.typography.format.texts.spaces,
      colors: state => state.prototypesStore.prototype.color.colors
    })
  },

  methods: {
    fontSizeLevel(level) {
      return `${this.fontSize.base.value * this.fontSize.ratio ** level}${
        this.fontSize.base.unit
      }`;
    },

    colorsHSLA() {
      let dA = this.colors.darkAccent;
      let dS = this.colors.darkShade;
      let lA = this.colors.lightAccent;
      let lS = this.colors.lightShade;
      let main = this.colors.main;

      return {
        darkAccent: `hsla(${Math.round(dA.h)}, ${Math.round(
          dA.s
        )}%, ${Math.round(dA.l)}%, ${Math.round(dA.a)})`,
        darkShade: `hsla(${Math.round(dS.h)}, ${Math.round(
          dS.s
        )}%, ${Math.round(dS.l)}%, ${Math.round(dS.a)})`,
        lightAccent: `hsla(${Math.round(lA.h)}, ${Math.round(
          lA.s
        )}%, ${Math.round(lA.l)}%, ${Math.round(lA.a)})`,
        lightShade: `hsla(${Math.round(lS.h)}, ${Math.round(
          lS.s
        )}%, ${Math.round(lS.l)}%, ${Math.round(lS.a)})`,
        main: `hsla(${Math.round(main.h)}, ${Math.round(main.s)}%, ${Math.round(
          main.l
        )}%, ${Math.round(main.a)})`
      };
    }
  }
};
</script>
