function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}

let currentIndex = 0;

function changeMainImage(thumbnail) {
    const mainImage = document.querySelector('.product-main-image');
    mainImage.src = thumbnail.src; // Altera a imagem principal para a imagem da miniatura
}

function scrollThumbnails(direction) {
    const thumbnailsWrapper = document.querySelector('.thumbnails-wrapper');
    const thumbnails = document.querySelector('.thumbnails');
    const thumbnailWidth = thumbnails.querySelector('.thumbnail').offsetWidth + 5; // Largura da miniatura + margin
    const visibleThumbnails = Math.floor(thumbnailsWrapper.offsetWidth / thumbnailWidth);

    currentIndex += direction;

    const totalThumbnails = thumbnails.children.length;

    // Limitar o índice atual para evitar ultrapassar o número total de miniaturas
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalThumbnails - visibleThumbnails) {
        currentIndex = totalThumbnails - visibleThumbnails;
    }

    const scrollAmount = currentIndex * thumbnailWidth;
    thumbnails.style.transform = `translateX(-${scrollAmount}px)`;
}

function increase() {
    let quantity = document.getElementById('quantity');
    let currentValue = parseInt(quantity.value);
    quantity.value = currentValue + 1;
}

function decrease() {
    let quantity = document.getElementById('quantity');
    let currentValue = parseInt(quantity.value);
    if (currentValue > 1) {
        quantity.value = currentValue - 1;
    }
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('contextmenu', function (event) {
});

     // Desativa o clique com o botão direito do mouse
     document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    // Desativa as teclas F12 (para abrir ferramentas de desenvolvedor), Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J e Ctrl+U
    document.onkeydown = function (e) {
        // F12
        if (e.keyCode == 123) {
            return true;
        }

        // Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J (Chrome DevTools)
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) {
            return true;
        }

        // Ctrl+U (view source code)
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return true;
        }
    };

    function changeMainImage2(thumbnail) {
        const mainImage = document.querySelector('.product-main-image2');
        mainImage.src = thumbnail.src; // Altera a imagem principal para a imagem da miniatura
    }
    
    function scrollThumbnails2(direction) {
        const thumbnailsWrapper = document.querySelector('.thumbnails-wrapper2');
        const thumbnails = document.querySelector('.thumbnails2');
        const thumbnailWidth = thumbnails.querySelector('.thumbnail2').offsetWidth + 5; // Largura da miniatura + margin
        const visibleThumbnails = Math.floor(thumbnailsWrapper.offsetWidth / thumbnailWidth);
    
        currentIndex += direction;

        const totalThumbnails = thumbnails.children.length;
    
        // Limitar o índice atual para evitar ultrapassar o número total de miniaturas
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > totalThumbnails - visibleThumbnails) {
            currentIndex = totalThumbnails - visibleThumbnails;
        }
    
        const scrollAmount = currentIndex * thumbnailWidth;
        thumbnails.style.transform = `translateX(-${scrollAmount}px)`;
    }

    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Quando o usuário começar a arrastar
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Ajuste a velocidade do movimento
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Suporte para toque em dispositivos móveis
    carousel.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('touchend', () => {
        isDown = false;
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });