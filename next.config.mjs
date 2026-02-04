/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // required for static export when using next/image
    },
};

export default nextConfig;
