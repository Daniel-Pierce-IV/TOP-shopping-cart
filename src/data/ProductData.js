import Filter from "../enums/Filter";
import ProductFactory from "../factories/ProductFactory";
import handImage from "../img/products/hand.png";
import shoulderImage from "../img/products/shoulder.png";
import armImage from "../img/products/arm.png";
import backImage from "../img/products/back.png";
import neckImage from "../img/products/neck.png";
import spineImage from "../img/products/spine.png";
import legTitaniumImage from "../img/products/leg-titanium.png";
import legCarbonImage from "../img/products/leg-carbon.png";
import legSteelImage from "../img/products/leg-steel.png";
import eyesStarImage from "../img/products/eyes-star.png";
import eyesMobiusImage from "../img/products/eyes-mobius.png";
import eyesUltraImage from "../img/products/eyes-ultra.png";

const productData = [
  ProductFactory(
    "Wrist & Hand",
    "Taking your wrist game to the next level - pro style",
    null,
    handImage,
    Filter.ARMS
  ),
  ProductFactory(
    "Shoulder",
    "Extendable muscle to bring you power like never before",
    null,
    shoulderImage,
    Filter.ARMS
  ),
  ProductFactory(
    "Full Arm Assembly",
    "The complete Pro Arm Collection.",
    null,
    armImage,
    Filter.ARMS
  ),
  ProductFactory(
    "Chest & Traps",
    "The starter kit",
    null,
    backImage,
    Filter.BACK
  ),
  ProductFactory(
    "Neck",
    "Extra stability for the body's weakest link",
    null,
    neckImage,
    Filter.BACK
  ),
  ProductFactory(
    "Spine",
    "Legs or back, lift with whatever you like",
    null,
    spineImage,
    Filter.BACK
  ),
  ProductFactory(
    "Star",
    "Iconic design - perfect for the beginner",
    null,
    eyesStarImage,
    Filter.EYES
  ),
  ProductFactory(
    "Mobius",
    "Work and play - all on the go",
    null,
    eyesMobiusImage,
    Filter.EYES
  ),
  ProductFactory(
    "RX-10 Ultra",
    "Customizable components for everything you need",
    null,
    eyesUltraImage,
    Filter.EYES
  ),
  ProductFactory(
    "Steel Leg",
    "Durability and style - you can have it all",
    null,
    legSteelImage,
    Filter.LEGS
  ),
  ProductFactory(
    "Titanium Leg",
    "The ultimate in durability",
    null,
    legTitaniumImage,
    Filter.LEGS
  ),
  ProductFactory(
    "Carbon Leg",
    "Lightweight and as close to organic as you can get",
    null,
    legCarbonImage,
    Filter.LEGS
  ),
];

export default productData;
