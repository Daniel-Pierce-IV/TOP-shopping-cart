import Filter from "../enums/Filter";
import allForeground from "../img/products/backgrounds/all-foreground.png";
import allBackground from "../img/products/backgrounds/all-background.png";
import armsForeground from "../img/products/backgrounds/arms-foreground.png";
import armsBackground from "../img/products/backgrounds/arms-background.png";
import legsForeground from "../img/products/backgrounds/legs-foreground.png";
import legsBackground from "../img/products/backgrounds/legs-background.png";
import eyesForeground from "../img/products/backgrounds/eyes-foreground.png";
import eyesBackground from "../img/products/backgrounds/eyes-background.png";
import backForeground from "../img/products/backgrounds/back-foreground.png";
import backBackground from "../img/products/backgrounds/back-background.png";

const FilterToProductsBG = {
  [Filter.DEFAULT]: {
    foreground: allForeground,
    background: allBackground,
  },
  [Filter.ARMS]: {
    foreground: armsForeground,
    background: armsBackground,
  },
  [Filter.LEGS]: {
    foreground: legsForeground,
    background: legsBackground,
  },
  [Filter.EYES]: {
    foreground: eyesForeground,
    background: eyesBackground,
  },
  [Filter.BACK]: {
    foreground: backForeground,
    background: backBackground,
  },
};

export default FilterToProductsBG;
