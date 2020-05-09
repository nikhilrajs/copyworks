const heroImageWrapper = document.querySelector('.ng-c-hero');
const heroImage = document.querySelector('img');

function setHeroImage() {
    heroImage.style.display = 'none';
    heroImageWrapper.style.backgroundImage = `url(${heroImage.src})`;
}

export default setHeroImage;