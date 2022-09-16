/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  externals: {
    // only define the dependencies you are NOT using as externals!
    canvg: "canvg",
    html2canvas: "html2canvas",
    dompurify: "dompurify"
  }
}
