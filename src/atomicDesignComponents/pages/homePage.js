import FavoriteCollectionTemplate from "./../templates/favoriteCollectionTemplate/favoriteCollectionTemplate";
import MovieLibraryTemplate from "./../templates/movieLibraryTemplate/movieLibraryTemplate";
import ContactUsWrapperTemplate from "./../templates/contactUsWrapperTemplate";
import BannerOrganism from "./../organisms/bannerOrganism/bannerOrganism";
import FooterOrganism from "./../organisms/footerOrganism/footerOrganism";
import HeaderOrganism from "../organisms/headerOrganism/headerOrganism";

const HomePage = () => {
  return (
    <>
      <HeaderOrganism />
      <BannerOrganism />
      <MovieLibraryTemplate />
      <FavoriteCollectionTemplate />
      <ContactUsWrapperTemplate />
      <FooterOrganism />
    </>
  );
};

export default HomePage;
