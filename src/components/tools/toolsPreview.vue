<template>
  <div class="tools__preview">
    <h1 
    :style="[
      styleTitle,
      { fontSize: fontSizeLevel(4) }
    ]"
    >Renard des villes</h1>
    <p :style="styleParagraphe">Le Renard est une figure bien connue de tous, tant il est représenté dans la culture. De la poésie à la série, on lui prête bien des traits de caractère.</p>
    <h2 
    :style=" [
      styleTitle,
      { fontSize: fontSizeLevel(3) }
    ]"
    >Fantastique M. Renard</h2> 
    <p :style="styleParagraphe">Il est souvent considéré comme rusé, comme dans “Le renard et le corbeau” du fabuliste Jean de La Fontaine. Où le Maître Renard, par l’odeur alléchée, trompe un Maître Corbeau par des flatteries sur sa voix. Pour que ce dernier laisse tomber le fromage qu’il tenait dans son bec.</p>
    <h3 
    :style=" [
      styleTitle,
      { fontSize: fontSizeLevel(2)}
    ]"
    >Origine et Évolution</h3>
    <p :style="styleParagraphe">Le renard est aussi malicieux, il feint d'être boiteux et, à l’aide d’un chat qui prétend être aveugle détourne sans cesse Pinocchio du droit chemin dans Pinocchio de Carlo Collodi.</p>
    <h4 
    :style=" [
      styleTitle,
      { fontSize: fontSizeLevel(1)}
    ]"
    >Étimologie</h4>
    <p :style="styleParagraphe">Il peut être doux et sage, en expliquant au petit prince le terme “apprivoiser” et les notions de responsabilité et d’amitié, dans “Le petit prince” de Saint-Exupéry.</p>
    <h5 
    :style=" [
      styleTitle,
      { fontSize: fontSizeLevel(0)}
    ]"
    >Le Petit Prince</h5>
    <p :style="styleParagraphe">Ou bien voleur au grand cœur, comme dans l’adaptation en dessin animé de Robin des bois des studios Disney. Où il incarne le justicier archer, volant aux riches pour donner aux pauvres. Et ravissant, au passage la belle qui n’avait d’yeux que pour lui, des griffes du shérif de Nottingham.</p>
    <h6 
    :style=" [
      styleTitle,
      { fontSize: fontSizeLevel(-1)}
    ]"
    >On ne voit bien qu'avec le cœur. L’essentiel est invisible pour les yeux.</h6>
    <p :style="styleParagraphe">Sauvage et indomptable, quand un renardeau et un chiot se lient d’amitié. Mais lorsque renardeau devient renard, sauvage dans sa forêt et que chiot devient chien dressé et domestiqué par son maître. Leur amitié se transforme en adversité dans “Le Renard et le Chien courant” de Daniel P. Mannix. Inspirant les studios Disney, encore eux, pour le film “Rox et Rouky”.</p>
    <p :style="styleParagraphe">Bref, du renard, en veux-tu en voilà.</p>
  </div>
</template>

<script>

//VUEX
import { mapState } from "vuex";

export default {
  computed: {
    styleParagraphe() {
      return {
        fontSize: this.fontSize.base.value.toString() + this.fontSize.base.unit,
        maxWidth: this.textLine.length.value.toString() + this.textLine.length.unit,
        lineHeight: this.textLine.height,
        marginTop: this.textSpace.before.value.toString() + this.textSpace.before.unit,
        marginBottom: this.textSpace.after.value.toString() + this.textSpace.after.unit
      }
    },
    
    styleTitle() {
      return {
        maxWidth: this.titleLine.length.value.toString() + this.titleLine.length.unit,
        lineHeight: this.titleLine.height,
        marginTop: this.titleSpace.before.value.toString() + this.titleSpace.before.unit,
        marginBottom: this.titleSpace.after.value.toString() + this.titleSpace.after.unit
      }
    },
    
    ...mapState ({
      prototype:  state => state.prototypesStore.prototype.prototype,
      fontSize:   state => state.prototypesStore.prototype.prototype.typography.format.size,
      titleLine:  state => state.prototypesStore.prototype.prototype.typography.format.titles.line,
      titleSpace: state => state.prototypesStore.prototype.prototype.typography.format.titles.spaces,
      textLine:   state => state.prototypesStore.prototype.prototype.typography.format.texts.line,
      textSpace:  state => state.prototypesStore.prototype.prototype.typography.format.texts.spaces
    })
  },

  methods: {
    fontSizeLevel(level) {
      return this.fontSize.base.value * (this.fontSize.ratio ** level) + this.fontSize.base.unit
    }
  }
}
</script>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5, h6 {
    margin: initial;
  }
</style>
