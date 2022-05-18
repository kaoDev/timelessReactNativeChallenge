describe("setup", () => {
  const testIDs = require("../src/res/testIDs");

  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have title", async () => {
    await expect(
      element(by.id(testIDs.assets.list.header.title.id)).atIndex(0)
    ).toBeVisible();
  });
});
