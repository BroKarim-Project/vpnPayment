export const importAllSVGs = (r) => {
  let svgs = {};
  r.keys().forEach((item) => {
    svgs[item.replace('./', '')] = r(item);
  });
  return svgs;
};

// Fungsi untuk mengimpor SVG dari folder src/assets/svgs
export const importPublicSVGs = () => {
  const requireContext = require.context('../assets/svgs', false, /\.svg$/);
  return importAllSVGs(requireContext);
};
