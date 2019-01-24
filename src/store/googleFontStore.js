// Modules
const WebFont = require("webfontloader");

const googleFontStore = {
  namespaced: true,
  state: {
    googleFontList: [],
    letters:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZÀabcdefghijklmnopqrstuvwxyzàéèêûùœ!:,-.’'186",
    textsPreview: [
      "Un docteur en philosophie médite des heures durant sur un yahourt périmé.",
      "Je vis, sans gêner personne, en attendant la mort.",
      "Aimer d'un amour humain, c'est pouvoir passer de l'amour à la haine.",
      "La grandeur semble exclure le critère du bien et du mal.",
      "Nous appartenons à un univers énigmatique.",
      "Beaucoup de choses existaient jadis mais aujourd’hui personne ne s’en souvient.",
      "Il y a des blessures qui ne guérissent jamais, quand elles ne vous dévorent pas tout entier.",
      "Nombreux sont ceux qui vivent et qui méritent la mort.",
      "Et certains qui meurent méritent la vie.",
      "Tout ce qui est or ne brille pas.",
      "Tout ceux qui errent ne sont pas perdus",
      "Le vieux qui est fort ne dépérit point.",
      "Les racines profondes ne sont pas atteintes par le gel.",
      "Des cendres, un feu s'éveillera. Des ombres, une lumière jaillira.",
      "La magie n’opère que si l’on se laisse emporter par elle.",
      "Même la plus petite personne peut changer le cours de l'avenir.",
      "Apprendre prend énormément de temps.",
      "Un seul rêve est plus puissant qu'un millier de réalités.",
      "Je ne dirai pas : ne pleurez pas, car toutes les larmes ne sont pas un mal.",
      "Même les plus grands guerriers sont démunis face à l'amour.",
      "Quand on cherche, on trouve généralement quelque chose.",
      "Mais ce n'est pas toujours exactement ce qu'on voulait.",
      "Il faut écrire pour les enfants comme on leur achète des vêtements : une taille au-dessus.",
      "Les récits furent imaginés avant tout pour constituer un univers pour les langues.",
      "Mon enfant, ma sœur, songe à la douceur d’aller là-bas vivre ensemble !",
      "Aimer à loisir, aimer et mourir au pays qui te ressemble !",
      "Les soleils mouillés de ces ciels brouillés, pour mon esprit ont les charmes si mystérieux.",
      "Là, tout n’est qu’ordre et beauté, Luxe, calme et volupté.",
      "Vois sur ces canaux dormir ces vaisseaux dont l’humeur est vagabonde.",
      "La Nature est un temple où de vivants piliers laissent parfois sortir de confuses paroles.",
      "L'homme y passe à travers des forêts de symboles.",
      "Comme de longs échos qui de loin se confondent dans une ténébreuse et profonde unité.",
      "La clarté, les parfums, les couleurs et les sons se répondent.",
      "Il est des parfums frais comme des chairs d'enfants.",
      "C'est un trou de verdure où chante une rivière.",
      "Je n'ai jamais vu d'alouette et je me lève inutilement avec l'aurore.",
      "Des bandes de moineaux gris peints à vif flottent.",
      "Une caille trace au cordeau la ligne droite de son vol.",
      "Les moutons se suivent et se ressemblent.",
      "Tout s'imprègne d'une lumière si neuve que le corbeau fait sourire.",
      "L'alouette est le seul oiseau du ciel qui chante jusqu'à nous.",
      "Le monde entier fut singulièrement ému par une tentative scientifique sans précédents.",
      "Ils avaient eu l'idée de se mettre en communication avec la Lune.",
      "Un événement bizarre, un phénomène inexpliqué et inexplicable.",
      "J'ai regardé la tempête, si belle et si formidable.",
      "Une fusée rouge se profilait au bord déchiqueté d'une aile.",
      "Presque avant de le savoir, nous avions quitté le sol.",
      "La face de la lune était dans l'ombre.",
      "Elle regarda les étoiles à travers la fenêtre.",
      "Le ciel était sans nuages et d'un bleu profond.",
      "Le spectacle devant nous était vraiment sublime.",
      "Puis vint la nuit de la première étoile filante.",
    ],
    familiesFilters: [
      {
        name: "Sans-serif",
        active: true,
        value: "sans-serif",
      },
      {
        name: "Serif",
        active: true,
        value: "serif",
      },
      {
        name: "Display",
        active: true,
        value: "display",
      },
      {
        name: "Monospace",
        active: true,
        value: "monospace",
      },
      {
        name: "Manuscrit",
        active: true,
        value: "handwriting",
      },
    ],
  },

  getters: {
    familiesFiltersActive(state) {
      return state.familiesFilters.filter(filter => filter.active === true);
    },

    fontListLength(state) {
      return state.googleFontList.length;
    },

    fontListFilteredByFamilies(state, getters) {
      return state.googleFontList.filter(glfItem => {
        return getters.familiesFiltersActive.find(
          ffaItem => ffaItem.value === glfItem.category
        );
      });
    },

    fontListFilteredLength(state, getters) {
      return getters.fontListFilteredByFamilies.length;
    },

    getFontFromList: state => font => {
      return state.googleFontList.find(gFont => gFont.family === font);
    },
  },

  actions: {
    // fetch commit the list and take action to load the font
    fetchGoogleFontList({ commit, state, dispatch }) {
      fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBebdp-th9ZhbrYf0VPiFHZFl1Ja4u750Y"
      )
        .then(response => response.json())
        .then(response => {
          commit("setGoogleFontList", response.items);
        })
        .then(() => {
          let families = [];
          state.googleFontList.forEach(gfl => {
            families.push(gfl.family);
          });
          dispatch("loadFontsLetters", families);
        })
        .catch(error => {
          console.error(error);
        });
    },

    // Load font.
    loadSpecificFonts({}, font) {
      WebFont.load({
        classes: false,
        google: {
          families: [font],
        },
      });
    },

    loadFontsLetters({ state }, families) {
      WebFont.load({
        classes: false,
        google: {
          families,
          text: state.letters,
        },
      });
    },

    // Commit filter to update the filter's list.
    changeFontListFilter({ commit }, filters) {
      commit("updateFontListFilters", filters);
    },
  },

  mutations: {
    // set list of Google Font
    setGoogleFontList(state, list) {
      state.googleFontList = list;
    },

    // Update the fontList.filters to filter the fonts show
    updateFontFamiliesFilters(state, filterName, isActive) {
      state.familiesFilters[filterName].active = isActive;
    },
  },
};

export default googleFontStore;
