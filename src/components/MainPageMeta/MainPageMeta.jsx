import React from 'react';
import { Helmet } from 'react-helmet';

const MainPageMeta = () => {
  const productName = "Critterspell";
  const productDescription =
    "Create lasting memories with Critter Spell, personalized kids framed name art. The perfect baby shower or newborn gift for moms and their little ones.";
  const productImage = "image.png";
  const productUrl = "https://critterspell.com";

  return (
      <Helmet>
        <title>{productName}</title>
        <meta name="description" content={productDescription} />
        <meta property="og:title" content={productName} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:image" content={productImage} />
        <meta property="og:url" content={productUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productName} />
        <meta name="twitter:description" content={productDescription} />
        <meta name="twitter:image" content={productImage} />
        <link rel="canonical" href={productUrl} />

        {/* Additional SEO tags */}
        <meta
          name="keywords"
          content="baby shower gift, newborn gift, personalized kids art, framed name art, unique baby gifts, baby room decor"
        />
        <meta name="author" content="Critter Spell" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
      </Helmet>
  );
};

export default MainPageMeta;
