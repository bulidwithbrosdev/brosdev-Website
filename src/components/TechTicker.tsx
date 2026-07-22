"use client";

import { motion } from "framer-motion";

export default function TechTicker() {
  const techLogos = [
    { id: "c", name: "C LANGUAGE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { id: "cplusplus", name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { id: "csharp", name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { id: "php", name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { id: "ruby", name: "RUBY", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    { id: "html5", name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: "css3", name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: "javascript", name: "JAVASCRIPT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: "swift", name: "SWIFT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { id: "go", name: "GO (GOLANG)", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { id: "java", name: "JAVA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { id: "kotlin", name: "KOTLIN", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { id: "python", name: "PYTHON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: "r", name: "R PROGRAMMING", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { id: "mysql", name: "MYSQL / SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: "github", name: "GITHUB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { id: "git", name: "GIT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: "django", name: "DJANGO", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { id: "laravel", name: "LARAVEL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { id: "angular", name: "ANGULAR", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { id: "nodejs", name: "NODE.JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: "sass", name: "SASS / SCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { id: "bootstrap", name: "BOOTSTRAP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { id: "magento", name: "MAGENTO", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    { id: "drupal", name: "DRUPAL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
    { id: "wordpress", name: "WORDPRESS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { id: "npm", name: "NPM", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { id: "linux", name: "LINUX", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { id: "ubuntu", name: "UBUNTU", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    { id: "android", name: "ANDROID", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { id: "apple", name: "APPLE / IOS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
    { id: "dotnet", name: ".NET CORE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { id: "vscode", name: "VS CODE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { id: "unity", name: "UNITY 3D", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { id: "raspberrypi", name: "RASPBERRY PI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { id: "shopify", name: "SHOPIFY", src: "https://cdn.simpleicons.org/shopify/95BF47" },
    { id: "react", name: "REACT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: "nextjs", name: "NEXT.JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { id: "typescript", name: "TYPESCRIPT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: "flutter", name: "FLUTTER", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { id: "aws", name: "AWS CLOUD", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { id: "azure", name: "MS AZURE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { id: "gcp", name: "GOOGLE CLOUD", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { id: "docker", name: "DOCKER", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { id: "kubernetes", name: "KUBERNETES", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { id: "postgresql", name: "POSTGRESQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ];

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#FAF8F5] border-y border-[#E2DDD5] overflow-hidden select-none">
      <div className="relative w-full flex overflow-x-hidden items-center py-4">
        {/* Soft Fade Edges - Responsive Width for Mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-14 sm:gap-20 whitespace-nowrap shrink-0 pt-6"
        >
          {[...techLogos, ...techLogos].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative flex flex-col items-center justify-center cursor-pointer py-2 px-1"
            >
              {/* Floating Name Tag Tooltip on Hover/Touch */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-slate-700 text-white font-condensed text-[11px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 shadow-xl z-40 pointer-events-none whitespace-nowrap flex flex-col items-center">
                <span>{item.name}</span>
                <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-slate-900" />
              </div>

              {/* Official Cloud CDN SVG Image */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center group-hover:scale-125 transition-all duration-300 filter drop-shadow-xs">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
