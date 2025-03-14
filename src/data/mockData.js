import wardrobeImage from "../assets/wardrobe-interface.jpeg";
import secondImage from "../assets/wardrobe-interface2.jpeg"; // You'll need these images
import thirdImage from "../assets/wardrobe-interface3.jpeg";
import fourthImage from "../assets/wardrobe-interface4.jpeg";

export const products = [
    {
      image: require("../assets/dress1.png"),
      match: "90",
      name: "Short Dress with Bows",
      price: "660",
    },
    {
      image: require("../assets/dress2.png"),
      match: "85",
      name: "Ribbed Godet Dress",
      price: "660",
    },
    {
      image: require("../assets/dress3.png"),
      match: "92",
      name: "Starpless Midi Dress",
      price: "660",
    },
    {
      image: require("../assets/dress4.png"),
      match: "76",
      name: "Draped Midi Dress",
      price: "660",
    },
    {
      image: require("../assets/dress4.png"),
      match: "76",
      name: "Draped Midi Dress",
      price: "660",
    },
  ];

  export const marketplaceProducts = [
    {
      image: require("../assets/preview1.png"),
      match: "90",
      name: "Short Dress with Bows",
      price: "660",
    },
    {
      image: require("../assets/preview2.png"),
      match: "85",
      name: "Ribbed Godet Dress",
      price: "660",
    },
    {
      image: require("../assets/preview3.png"),
      match: "92",
      name: "Starpless Midi Dress",
      price: "660",
    },
    {
      image: require("../assets/preview4.png"),
      match: "76",
      name: "Draped Midi Dress",
      price: "660",
    }
  ];

  export const landingPageNavItems = [
    { label: "Login", path: "/login" },
    { label: "Get Started", path: "/signup"}
];

  export const homePageNavItems = [
    { label: "Home", path: "/home", textColor: "text-black" },
    { label: "Dashboard", path: "/dashboard"},
    { label: "Shop", path: "/shop"},
    { label: "Magazine", path: "/magazine"},
    { label: "Account", path: "/account"},
    { label: "Cart", path: "/cart"},
  ];

  export const brandStorySections = [
    {
      imageOnRight: true,
      title: "The House of\nSymmetry",
      description: "Our story starts with a simple question: Who? Once we know whom we're designing for, we craft the perfect silhouette to balance and accentuate their shape.",
      buttonText: "Accentuate My Figure",
      image: wardrobeImage
    },
    {
      imageOnRight: false,
      title: "Personalized \nFashion Dashboard",
      description: "Learn the best colors, silhouettes, and necklines based on your Color Analysis, Face, and Body Shape. ",
      buttonText: "Explore Color Analysis and \nAccentuate my Figure",
      image: secondImage
    },
    {
      imageOnRight: true,
      title: "Eveness \nMarketplace",
      description: "The Eveness Algorithm expanded to more than the collection. Shop from a variety of brands with our help pieces that highlight you.",
      buttonText: "Access My Marketplace",
      image: thirdImage
    },
    {
      imageOnRight: false,
      title: "Eveness GPT",
      description: "The Eveness GPT is your on the go fashion stylist. Find out whether a garment matches your features and how to style it.",
      buttonText: "My Personal AI Stylist",
      image: fourthImage
    }
  ];

  export const marketplacePreviewProducts = [
    { image: require("../assets/jeans.png"), name: "Jeans" },
    { image: require("../assets/heels.png"), name: "Shoes" },
    { image: require("../assets/bags.png"), name: "Bags" },
    { image: require("../assets/eyewear.png"), name: "Eyewear" },
    { image: require("../assets/heels.png"), name: "Shoes" },
    { image: require("../assets/jeans.png"), name: "Jeans" },
    { image: require("../assets/eyewear.png"), name: "Eyewear" },
    { image: require("../assets/bags.png"), name: "Bags" },
  ];

  export const testimonials = [
    {
      quote: "Our mission is to help people accentuate their beauty through fashion and technology, not to deceive customers into clearing our inventory. If we feel a garment of ours doesn't work with your figure or color analysis, our algorithm advises you not to purchase it. Each garment is crafted with the purpose of helping people accentuate their favorite parts of themselves. This can only happen if we start with you.",
      author: "Amir Razipour",
      title: "CEO and Founder"
    },
    {
        quote: "Our mission is to help people accentuate their beauty through fashion and technology, not to deceive customers into clearing our inventory. If we feel a garment of ours doesn't work with your figure or color analysis, our algorithm advises you not to purchase it. Each garment is crafted with the purpose of helping people accentuate their favorite parts of themselves. This can only happen if we start with you.",
        author: "Amir Razipour II",
        title: "CTO and Co-Founder"
      },
    // Add more testimonials here
  ];