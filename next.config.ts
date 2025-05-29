import type {NextConfig} from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
    serverExternalPackages: [], // ['package-name']
    experimental: {
        optimizePackageImports: ['lucide-react'] // ['icon-library']
    }
};

const withNextIntl = createNextIntlPlugin();
export default bundleAnalyzer(withNextIntl(nextConfig));
