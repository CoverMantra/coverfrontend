// global.d.ts
// declare module "*.css";
// declare module "*.scss";
// declare module "aos/dist/aos.css";
// global.d.ts

// Standard CSS/SCSS support
declare module "*.css";
declare module "*.scss";

// AOS support
declare module "aos/dist/aos.css";

// ✅ Swiper Specific deep imports fix
declare module "swiper/css" {
    const content: any;
    export default content;
}

declare module "swiper/css/effect-fade" {
    const content: any;
    export default content;
}

declare module "swiper/css/navigation" {
    const content: any;
    export default content;
}

declare module "swiper/css/pagination" {
    const content: any;
    export default content;
}

declare module "swiper/css/autoplay" {
    const content: any;
    export default content;
}