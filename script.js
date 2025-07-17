const products = [
    {
        "image": "http://localhost:3845/assets/f36ab4bdbafb12e639710b19bc167bc2d334d319.png",
        "name": "먼작귀 우사기 플러피 파우치",
        "price": "20,000원"
    },
    {
        "image": "http://localhost:3845/assets/ed0b2eed4576e0c2beaed9febddc9277cb6a930a.png",
        "name": "산리오 x 치이카와 폼폼푸린 치이카와 마스코트 홀더 우사기",
        "price": "50,000원"
    },
    {
        "image": "http://localhost:3845/assets/4a476e971a456c57130837a0948020af78efa364.png",
        "name": "[먼작귀] 먼가 작고 귀여운 반팔 파자마(LIGHT YELLOW)_SPPPF37U01",
        "price": "39,900원"
    },
    {
        "image": "http://localhost:3845/assets/7186eec1b444f5281f7014839af8528fe5aa7f4c.png",
        "name": "먼작귀 메이트 우사기 워터볼 키링",
        "price": "40,000원"
    },
    {
        "image": "http://localhost:3845/assets/547db64b480e9fea3593b0ae7b0ae3708714e77d.png",
        "name": "산리오 x 치이카와 폼폼푸린 치이카와 봉제 토이 우사기",
        "price": "79,000원"
    },
    {
        "image": "http://localhost:3845/assets/a535906ae95f20a274c38591b8acf8672a8af534.png",
        "name": "[먼작귀] 먼가 작고 귀여운 긴팔 파자마(LIGHT YELLOW)_SPPPE12KU6",
        "price": "39,900원"
    },
    {
        "image": "http://localhost:3845/assets/a5986bed4dbd440ae1d58a103c07f38c7afcc953.png",
        "name": "산리오 x 치이카와 폼폼푸린 치이카와 봉제 토이 우사기",
        "price": "90,000원"
    },
    {
        "image": "http://localhost:3845/assets/fcb2a18a431c1f4c94c3cecebe2fa3c09243294f.png",
        "name": "산리오 x 치이카와 폼폼푸린 치이카와 포쉐트 우사기",
        "price": "30,000원"
    },
    {
        "image": "http://localhost:3845/assets/c9bf00fbb54565b984e37fe1a1acdad808a28953.png",
        "name": "[먼작귀] 먼가 따뜻한 수면 파자마(YELLOW)_SPPPE4TU09",
        "price": "49,000원"
    }
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const image = document.createElement('div');
    image.className = 'product-image';
    image.style.backgroundImage = `url(${product.image})`;
		image.style.height = '250px';
		image.style.width = '100%';
		image.style.backgroundSize = 'contain';
		image.style.backgroundRepeat = 'no-repeat';


    const name = document.createElement('div');
    name.className = 'product-name';
    name.textContent = product.name;

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = product.price;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    productGrid.appendChild(card);
});