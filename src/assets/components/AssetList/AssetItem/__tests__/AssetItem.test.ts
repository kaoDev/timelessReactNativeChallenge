import { render } from "@testing-library/react-native";
import AssetItem from "../index";
import { Asset } from "../../../../api/type";

describe("AssetItem", () => {
  it("should render asset item correctly", () => {
    const item: Asset = {
      id: "8a48558a-7b62-4d01-b420-c4473a5bcbce",
      label: "Nike SB Dunk Low - City Drop",
      heroImage:
        "https://documents.timeless.investments/assets/8a48558a-7b62-4d01-b420-c4473a5bcbce/hero-image-1648824823.png",
      heroColour: "#efedf8",
      model: "Dunk Low City Drop",
      status: "coming_soon",
    };

    const { getByText } = render(
      AssetItem({ item, onPressAssetItem: () => jest.fn() })
    );
    const AssetItemLabel = getByText("Nike SB Dunk Low - City Drop");
    expect(AssetItemLabel).toBeTruthy();
  });
});
