"use client";
import React from "react";
import Hero from "../homes/home-2/Hero";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../otherPages/Contact/ContactForm";
import { useLocale, useTranslations } from "use-intl";
import Categories from "@/components/homes/home-15/Categories";
import VideoPanel from "../VideoPanel";
import Contact_campaign from "../otherPages/Contact/Contact_campaign";
import Products from "../homes/home-2/Products";
import TopCollections from "../homes/home-5/TopCollections";

function CityWalk() {
    const locale = useLocale();
    const t = useTranslations();
    return (
        <>
            {/* Hero Section */}
            <div>
            <div className="container-fluid p-0 pt-2">
                <Link href={`/${locale}/product-category/perfumes`}>
                    <Image
                        loading="lazy"
                        className="w-100 h-auto d-none d-lg-block"
                        src="/assets/images/campaigns/Kwait-Summer-sale.jpg"
                        alt="Father's Day Web"
                        width={1500}
                        height={550}
                    />
                </Link>
            </div>
            <div className="container-fluid p-0 pt-2">
                <Link href={`/${locale}/product-category/perfumes`}>
                    <Image
                        loading="lazy"
                        className="w-100 h-auto d-lg-none"
                        src="/assets/images/campaigns/Kwait-Summer-sale-mobile-size.jpg"
                        alt="Father's Day Mobile"
                        width={1500}
                        height={550}
                    />
                </Link>
            </div>
        </div>
        <section className="section-3">
  <div className="w-100">
    <div className="section-content mt-5 pt-5">
      <div className="d-flex flex-column justify-content-around align-items-center text-center px-3">
        <div className="section-head pt-5 pb-3 text-uppercase w-100">
          <h2 className="text-center">
            <span className="d-block h3 h3-sm h2-md">Essence of Bakhoor</span>
            <span className="d-block text-uppercase h3 h3-sm h3-md">Experience its timeless aroma.</span>
          </h2>
        </div>

        {/* Desktop Video */}
        <div className="d-none d-md-block pb-3 w-100">
          <div className="videoarea d-flex justify-content-center">
            <VideoPanel src="/assets/videos/Summer-Sale.mp4" section="" />
          </div>
        </div>

        {/* Mobile Video */}
        <div className="d-block d-sm-none pb-3 w-100">
          <div className="videoarea d-flex justify-content-center">
            <VideoPanel src="/assets/videos/Summer-Mob.mp4" section="hundred" />
          </div>
        </div>

        {/* Button */}
        <div className="pt-3">
          <Link
            href={`/${locale}/shop`}
            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* <div className="container pt-2 mt-3">
        <div className="section2 text-center">
          <h3 className="text-uppercase fs-2 mb-5">
          This Father's Day, Give the Gift of Elegance
          </h3>
        </div>
        <div className="row align-items-center mt-4">
          <div className="col-md-6">
            <video className="w-100" autoPlay loop muted>
              <source
                src="https://www.ahmedalmaghribi.com/wp-content/uploads/2024/07/SHOP-VIDEO-1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-6 text-center pt-5">
            <h4 className="text-uppercase fs-2">
              "The Perfect Father’s Day Gift"
            </h4>
            <p className="mt-3 fs-6">
           
                "Celebrate Father's Day with Gift Set a luxurious fragrance collection that captures the essence of strength, elegance, and timeless sophistication. Thoughtfully curated with premium perfumes, each scent is crafted to perfection making it the perfect gift for the father who deserves nothing but the finest. This Father's Day, honor him with a touch of class and a scent that lasts."
              
            </p>
            <div className="d-flex justify-content-center pt-3">
            <a
                                    className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                                    href={`/${locale}/shop/gift-sets/gift-sets/aazz-o-azeez`}
                                >
                                    Shop Now
                                </a>
                    </div>
          </div>
        </div>
      </div> */}
            <div className="container pt-4 mt-4">
                <div className="row align-items-center">
                    {/* Image column - shown first on mobile/tablet, second on desktop */}
                    <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                        <Image
                            width={0}
                            height={0}
                            sizes="100%"
                            className="img-fluid"
                            src="/assets/images/campaigns/bin-shaikh.jpg"
                            alt="Wedding products display"
                            loading="lazy"
                            style={{ width: "100%", height: "auto" }}
                            aria-label="Wedding products"
                        />
                    </div>

                    {/* Text column - shown second on mobile/tablet, first on desktop */}
                    <div className="col-md-6 text-center px-md-5 mb-2 order-2 order-md-1">
                        <p className="fs-2 text-uppercase font-weight-bold mb-3">
                           Bin Shaikh
                        </p>
                        <p className="fs-6 mb-3">
                        Like priceless wisdom passed down over the ages, the Bin Shaikh was passed down from our forefathers, making this vintage scent a truly priceless work of art. An exotic blend of distinct aromas.A strong sweet and spicy mixture of patchouli, and the sturdy taste of agarwood, provides you with the enduring smell of the sweet-earthy aroma of Ambroxan, in addition to base notes the cologne is sparkled up with a crispy and fresh hint of musk white and finally ending up with the sensual and exotic rich aroma of amber resins.
                        </p>
                        <a
                            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                            href={`/${locale}/shop/perfumes/oriental-fragrance/bin-shaikh`}
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {/* Image column - shown first on desktop, second on mobile/tablet */}
                    <div className="col-md-6 order-1 order-md-1 mb-4 mb-md-0">
                        <Image
                            width={0}
                            height={0}
                            sizes="100%"
                            className="img-fluid"
                            src="/assets/images/campaigns/Zumar.jpg"
                            alt="Aazz-O-Azeez Gift Set"
                            loading="lazy"
                            style={{ width: "100%", height: "auto" }}
                            aria-label="Aazz-O-Azeez Gift Set"
                        />
                    </div>

                    {/* Text column - shown second on desktop, first on mobile/tablet */}
                    <div className="col-md-6 text-center px-md-5 mb-2 order-2 order-md-2">
                        <p className="fs-2 text-uppercase font-weight-bold mb-3">
                        Zumar
                        </p>
                        <p className="fs-6 mb-3">
                        This captivating fragrance opens with tantalizing top notes of saffron, lending a rich, aromatic depth; pear and red berries add a refreshing sweetness that awakens the senses; and Kinam oud accord creates a delightful interplay of fruity and aromatic elements. As the fragrance evolves, it reveals a stunning floral heart composed of gardenia, jasmine, Bulgarian rose, Rose Grasse, and frangipani, enveloping the wearer in a romantic and enchanting aura.
                        </p>
                        <a
                            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                            href={`/${locale}/shop/perfumes/oriental-fragrance/zumar`}
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <TopCollections categoryId={9} category={"perfumes"} sub_category={"Oriental Fragrance"} title={"Discover Your Signature Scent"}/>
            <section className="d-flex flex-column align-items-center pt-5">
                            <span className="t-subtitle text-uppercase fs-4 text-center">
                                {"Unveil the Charm of Traditional Bakhoor"}
                            </span>
                            <div className="d-flex flex-row align-items-center ">
                                <div className="mt-4 mb-5 d-none d-md-block">
                                    <a
                                        href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-marj`}
                                    >
                                        <Image
                                            loading="lazy"
                                            src="/assets/images/campaigns/Bakhoor-Marj.jpg"
                                            width="600"
                                            height="600"
                                            alt="Aazz-o-Azzeez"
                                            className="px-1"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </a>
                                    <div className="d-flex justify-content-center pt-3">
                                        <Link
                                            href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-marj`}
                                            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                                        >
                                            {t("Shop Now")}
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-4 mb-5 d-none d-md-block">
                                    <a
                                        href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-oud-roses`}
                                    >
                                        <Image
                                            className="px-1"
                                            src="/assets/images/campaigns/bakhoor-oud-roses.jpg"
                                            width="600"
                                            height="600"
                                            alt="Antee"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </a>
                                    <div className="d-flex justify-content-center pt-3">
                                        <Link
                                            href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-oud-roses`}
                                           className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                                        >
                                            {t("Shop Now")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
            
                            <div className="mt-4 mb-5 d-block d-sm-none d-flex flex-column">
                            <a
                                        href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-marj`}
                                    >
                                        <Image
                                            loading="lazy"
                                            src="/assets/images/campaigns/Bakhoor-Marj.jpg"
                                            width="600"
                                            height="600"
                                            alt="Aazz-o-Azzeez"
                                            className="px-1"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </a>
                                <div className="d-flex justify-content-center pt-3">
                                    
                                <Link
                                            href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-marj`}
                                            className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                                        >
                                            {t("Shop Now")}
                                        </Link>
                                </div>
                                <a href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-oud-roses`}>
                                    <Image
                                        className="w-100 h-100 px-1"
                                        src="/assets/images/campaigns/bakhoor-oud-roses.jpg"
                                        width="600"
                                        height="600"
                                        alt="Oud-Asateen"
                                        style={{ paddingTop: "1rem", objectFit: "contain" }}
                                    />
                                </a>
                                <div className="d-flex justify-content-center pt-3">
                                    <Link
                                        href={`/${locale}/shop/dakhoon/bakhoor/bakhoor-oud-roses`}
                                       className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                                    >
                                        {t("Shop Now")}
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <TopCollections categoryId={11} category={"Concentrated Parfum"} sub_category={"Concentrated Oil"} title={"Intense Fragrance Elixir"}/>
                        

            {/* <Contact_campaign/> */}
        </>
    );
}

export default CityWalk;
