/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true, // required for static export when using next/image
    },
};

export default nextConfig;
