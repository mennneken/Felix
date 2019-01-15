<template>
  <ul class="tools__font-list font-list">
    <li v-for="(font, index) in fonts" :key="index">
      <font-card :font="font" :textPreview="textsPreview[index % textsPreview.length]"></font-card>
    </li>
  </ul>
</template>

<script>
// COMPONENTS
import fontCard from "@/components/tools/toolsFontCard";

// Modules
const WebFont = require('webfontloader');

export default {
  components: {
    fontCard
  },

  data() {
    return {
      textsPreview: [
        {
          string:
            "Un docteur en philosophie médite des heures durant sur un yahourt périmé.",
          letters: "Undocteurphilsméay."
        },
        {
          string:
            "Je vous demande d’imaginer les principales décisions possibles pour le futur.",
          letters: "Jevousdman’igrlpcébft."
        },
        {
          string:
            "Du fait de cette inflexion induite, je vous demande de revoir certaines options envisageables, très attentivement.",
          letters: "Dufaitdecnlxo,jvsmrpgbè."
        },
        {
          string:
            "Pour réagir à la crise organisationnelle, il est impératif de budgetiser les opportunités à l'international.",
          letters: "Pouréagiàlcsent,mpfdb'."
        },
        {
          string:
            "À peine eus-je touché le bord, tenant ma branche d'arbre à la main, que je vis sortir des rochers.",
          letters: "Àpeinus-jtochélbrd,am'àqv."
        },
        {
          string:
            "Je vis, et donc il faut vivre le mieux possible, sans gêner personne, en attendant la mort.",
          letters: "Jevis,tdonclfaurmxpbgê."
        },
        {
          string:
            "Quel que fût le cours de ses pensées, il en revenait toujours aux mêmes questions.",
          letters: "Quelqfûtcorsdpné,ivajxmê."
        },
        {
          string:
            "Aimer d'un amour humain, c'est pouvoir passer de l'amour à la haine, tandis que l'amour divin est immuable.",
          letters: "Aimerd'unaoh,cstpvlàqb."
        },
        {
          string: "La grandeur semble exclure le critère du bien et du mal.",
          letters: "Lagrndeusmblxcitè."
        },
        {
          string:
            "Tout dans mes oeuvres est issu du sentiment de certitude que nous appartenons, en fait, à un univers énigmatique.",
          letters: "Toutdansmevricqp,fàég."
        },
        {
          string:
            "Je préfère partager une vie de mortelle avec vous que de devoir affronter tous les ages de ce monde toute seule.",
          letters: "Jepréfèatgunvidmolcsq."
        },
        {
          string:
            "Beaucoup de choses existaient jadis mais aucun de ceux qui vivent aujourd’hui ne s’en souviennent.",
          letters: "Beaucopdhsxitnjmqvr’."
        },
        {
          string:
            "Il y a des blessures qui ne guérissent jamais, quand elles ne vous dévorent pas tout entier.",
          letters: "Ilyadesburqingétjm,vop."
        },
        {
          string:
            "Nombreux sont ceux qui vivent et qui méritent la mort. Et certains qui meurent méritent la vie.",
          letters: "Nombreuxsntcqivéla.E"
        },
        {
          string:
            "Tout ce qui est or ne brille pas, tout ceux qui errent ne sont pas perdus, le vieux qui est fort ne dépérit point.",
          letters: "Toutceqisrnblpa,xdvfé."
        },
        {
          string:
            "Les racines profondes ne sont pas atteintes par le gel. Des cendres, un feu s'éveillera. Des ombres, une lumière jaillira.",
          letters: "Lesracinpofdtlg.D,u'évmbèj"
        },
        {
          string:
            "La magie n’opère que si l’on veut bien consentir à se laisser emporter par Elle.",
          letters: "Lamgien’opèrquslvtbcàE."
        },
        {
          string:
            "Tout ce que nous avons à décider, c'est ce que nous devons faire du temps qui nous est imparti.",
          letters: "Toutceqnsavàdéir,'fmp."
        },
        {
          string:
            "Même la plus petite personne peut changer le cours de l'avenir.",
          letters: "Mêmelapustironchgd'v."
        },
        {
          string:
            "Apprendre les langues prend énormément de temps, et il en est de même pour toutes les choses que l'on souhaite connaître..",
          letters: "Aprendlsaguéomt,iêchq'î."
        },
        {
          string: "Un seul rêve est plus puissant qu'un millier de réalités.",
          letters: "Unseulrêvtpiaq'mdé."
        },
        {
          string:
            "Je ne dirai pas : ne pleurez pas, car toutes les larmes ne sont pas un mal.",
          letters: "Jendiraps:luz,ctom."
        },
        {
          string: "Même les plus grands guerriers sont démunis face à l'amour.",
          letters: "Mêmelspugrandiotéfcà'."
        },
        {
          string:
            "Quand on cherche, on trouve généralement quelque chose, mais ce n'est pas toujours exactement ce qu'on voulait.",
          letters: "Quandocher,tvgélmqsi'pjx."
        },
        {
          string:
            "Il faut écrire pour les enfants comme on leur achète des vêtements : une taille au-dessus.",
          letters: "Ilfautécrieposnmhèdvê:-."
        },
        {
          string:
            "Les récits furent imaginés avant tout pour constituer un univers pour les langues et non pas le contraire.",
          letters: "Lesrécitfunmagvopl."
        },
        {
          string:
            "Mon enfant, ma sœur, songe à la douceur d’aller là-bas vivre ensemble !",
          letters: "Monefat,msœurgàldc’-bvi !"
        },
        {
          string: "Aimer à loisir, aimer et mourir au pays qui te ressemble !",
          letters: "Aimeràlos,atupyqb !"
        },
        {
          string:
            "Les soleils mouillés de ces ciels brouillés, pour mon esprit ont les charmes si mystérieux.",
          letters: "Lesolimuédcbr,pnthayx."
        },
        {
          string: "Là, tout n’est qu’ordre et beauté, Luxe, calme et volupté.",
          letters: "Là,toun’esqrdbaéxclmvp."
        },
        {
          string:
            "Vois sur ces canaux dormir ces vaisseaux dont l’humeur est vagabonde.",
          letters: "Voisurceanxdmvtl’hgb."
        },
        {
          string:
            "La Nature est un temple où de vivants piliers laissent parfois sortir de confuses paroles.",
          letters: "LaNturesnmploùdvifc."
        },
        {
          string:
            "L'homme y passe à travers des forêts de symboles qui l'observent avec des regards familiers.",
          letters: "L'homeypasàtrvdfêblquincg."
        },
        {
          string:
            "Comme de longs échos qui de loin se confondent dans une ténébreuse et profonde unité.",
          letters: "Comedlngséchquiftabrp."
        },
        {
          string:
            "Vaste comme la nuit et comme la clarté, les parfums, les couleurs et les sons se répondent.",
          letters: "Vastecomlnuiré,pfd."
        },
        {
          string:
            "Il est des parfums frais comme des chairs d'enfants, doux comme les hautbois, verts comme les prairies.",
          letters: "Ilestdparfumicoh'n,xbv."
        },
        {
          string:
            "C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent.",
          letters: "C'estunrodvùchaièflmxbg."
        },
        {
          string:
            "Je n'ai jamais vu d'alouette et je me lève inutilement avec l'aurore.",
          letters: "Jen'aijmsvudlotècr."
        },
        {
          string:
            "Des bandes de moineaux gris ou de chardonnerets peints à vif flottent sur les haies d'épines.",
          letters: "Desbandmoiuxgrchtpàvfl'é."
        },
        {
          string:
            "Une caille rase des luzernes et trace au cordeau la ligne droite de son vol.",
          letters: "Unecailrsduztogv."
        },
        {
          string:
            "Derrière le berger qui tricote mieux qu'une femme, les moutons se suivent et se ressemblent.",
          letters: "Derièlbgqutcomx'nf,sv."
        },
        {
          string:
            "Et tout s'imprègne d'une lumière si neuve que le corbeau, qui ne présage rien de bon, fait sourire.",
          letters: "Etous'imprègnedlvqcba,éf."
        },
        {
          string:
            "L'alouette vit au ciel, et c'est le seul oiseau du ciel qui chante jusqu'à nous.",
          letters: "L'alouetvic,sdqhnjà."
        },
        {
          string:
            "Le monde entier fut singulièrement ému par une tentative scientifique sans précédents.",
          letters: "Lemondtirfusglèépavcq."
        },
        {
          string:
            "Le cercle d'artilleurs avaient eu l'idée de se mettre en communication avec la Lune.",
          letters: "Lecrld'atiusvnémo."
        },
        {
          string:
            "L’année 1866 fut marquée par un événement bizarre, un phénomène inexpliqué et inexplicable.",
          letters: "L’anée186futmrqpvbiz,hoèxlc."
        }
      ],
      fonts: []
    };
  },

  methods: {
    // getRandomSentences() {
    //   let n = randomMinMax(0, this.textsPreview.length);
    //   return this.textsPreview[n];
    // },
    randomMinMax(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  },

  // arrayOfSentences.forEach(sentence => {
  // 	let lettersFromSentence = [];

  //   for (let letter of sentence) {
  //   	lettersFromSentence.push(letter);
  // 	}

  //   let stripLetters = [...new Set(lettersFromSentence.filter(letterFromSentence => letterFromSentence !== " "))];

  //   return stripLetters;
  // });

  computed: {
    getRandomSentences(n) {
      // let n = this.randomMinMax(0, this.textsPreview.length);
      return this.textsPreview[n];
    }
  },

  beforeCreate() {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBebdp-th9ZhbrYf0VPiFHZFl1Ja4u750Y"
    )
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      })
      .then(googleFontJson => {
        this.fonts = googleFontJson.items;
        let fontFamilies = []
        this.fonts.forEach(font => {
          fontFamilies.push(font.family)
        });

        return fontFamilies
      })
      .then(fontFamilies => {
        
        WebFont.load({
          classes: false,
          google: {
            families: fontFamilies,
            text: "ABCDEFGHIJKLMNOPQRSTUVWXYZÀabcdefghijklmnopqrstuvwxyzàéèûùœ!:,-.’'"
            // text: this.textPreview.letters
          }
        })
      
      });
  },
};
</script>
