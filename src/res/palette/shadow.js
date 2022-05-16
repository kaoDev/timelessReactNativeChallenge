export default function setShadow(type) {
  let obj = {};
  switch (type) {
    case "narrow":
      obj = {
        width: 1,
        height: 1,
        shadowRadius: 0,
        elevation: 1,
        shadowOpacity: 0.1,
      };
      break;
    case "card":
      obj = {
        width: 1,
        height: 1,
        shadowRadius: 1,
        elevation: 2,
        shadowOpacity: 0.1,
      };
      break;
    case "header":
      obj = {
        width: 0,
        height: 2,
        shadowRadius: 4,
        elevation: 7,
        shadowOpacity: 0.2,
      };
      break;
    case "active":
      obj = {
        width: 0,
        height: 1,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
      };
      break;

    default:
      obj = {
        width: 1,
        height: 1,
        shadowRadius: 0,
        elevation: 1,
        shadowOpacity: 0.1,
      };
      break;
  }
  const { width, height, shadowRadius, elevation, shadowOpacity } = obj;
  return {
    // ios
    shadowOffset: { width, height },
    shadowRadius,
    shadowColor: "black",
    shadowOpacity,
    // android
    elevation,
  };
}
