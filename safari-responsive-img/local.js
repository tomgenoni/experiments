const wrap = document.querySelector("#img-wrap");

const sizes = "70vw";

const html = `
<picture>
    <source
        type="image/webp"
        sizes="${sizes}"
        srcset="
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/120.webp   120w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/320.webp   320w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/400.webp   400w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/640.webp   640w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/768.webp   768w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1024.webp 1024w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1366.webp 1366w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1600.webp 1600w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1920.webp 1920w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2200.webp 2200w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2350.webp 2350w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2560.webp 2560w
        "
    />
    <source
        type="image/jpeg"
        sizes="${sizes}"
        srcset="
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/120.jpeg   120w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/320.jpeg   320w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/400.jpeg   400w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/640.jpeg   640w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/768.jpeg   768w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1024.jpeg 1024w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1366.jpeg 1366w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1600.jpeg 1600w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/1920.jpeg 1920w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2200.jpeg 2200w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2350.jpeg 2350w,
            https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/2560.jpeg 2560w
        "
    />
    <img
        src="https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/120.jpeg"
        sizes="${sizes}"
    />
</picture>
`;

wrap.innerHTML = html;
