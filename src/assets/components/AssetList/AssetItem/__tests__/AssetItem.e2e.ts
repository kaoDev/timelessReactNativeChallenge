describe("AssetItem", () => {
  const testIDs = require("../../../../../res/testIDs");

  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have at least one item", async () => {
    await expect(
      element(by.id(testIDs.assets.list.item.id)).atIndex(0)
    ).toBeVisible();
  });
});
