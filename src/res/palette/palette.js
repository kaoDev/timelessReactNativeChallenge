import setShadow from "./shadow";

const palette = {
  shadow(type) {
    return {
      ...setShadow(type),
    };
  },
};

export default palette;
