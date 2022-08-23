import { shallow } from "enzyme";
import HomePage from "./../../atomicDesignComponents/pages/homePage";

describe("app component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should render HeaderOrganism", () => {
    const HeaderOrganism = wrapper.find("HeaderOrganism");
    expect(HeaderOrganism).toHaveLength(1);
  });

  it("should render BannerOrganism", () => {
    const BannerOrganism = wrapper.find("BannerOrganism");
    expect(BannerOrganism).toHaveLength(1);
  });

  it("should render MovieLibraryTemplate", () => {
    const MovieLibraryTemplate = wrapper.find("MovieLibraryTemplate");
    expect(MovieLibraryTemplate).toHaveLength(1);
  });

  it("should render FavoriteCollectionTemplate", () => {
    const FavoriteCollectionTemplate = wrapper.find(
      "FavoriteCollectionTemplate"
    );
    expect(FavoriteCollectionTemplate).toHaveLength(1);
  });

  it("should render ContactUsWrapperTemplate", () => {
    const ContactUsWrapperTemplate = wrapper.find("ContactUsWrapperTemplate");
    expect(ContactUsWrapperTemplate).toHaveLength(1);
  });

  it("should render FooterOrganism", () => {
    const FooterOrganism = wrapper.find("FooterOrganism");
    expect(FooterOrganism).toHaveLength(1);
  });
});
