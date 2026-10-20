const openingScreen = document.getElementById('opening-screen');
const revealScreen = document.getElementById('reveal-screen');
const storySection = document.getElementById('story');
const surpriseButton = document.getElementById('open-surprise');
const videoGroupsContainer = document.getElementById('video-groups');
const backgroundMusic = document.getElementById('background-music');
let activeVideo = null;

const birthdayFinale = document.getElementById('birthday-finale');
const finaleConfetti = birthdayFinale.querySelector('.final-confetti');
const confettiColors = ['#ffd166', '#ff85b7', '#fff1c7', '#c9a7ff', '#ffb36b'];

for (let index = 0; index < 72; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'final-confetti-piece';
    piece.style.setProperty('--confetti-left', `${Math.random() * 100}%`);
    piece.style.setProperty('--confetti-width', `${5 + Math.random() * 7}px`);
    piece.style.setProperty('--confetti-height', `${8 + Math.random() * 11}px`);
    piece.style.setProperty('--confetti-radius', Math.random() > 0.5 ? '50%' : '2px');
    piece.style.setProperty('--confetti-color', confettiColors[index % confettiColors.length]);
    piece.style.setProperty('--confetti-rotation', `${Math.random() * 360}deg`);
    piece.style.setProperty('--confetti-duration', `${4 + Math.random() * 5}s`);
    piece.style.setProperty('--confetti-delay', `${Math.random() * 4}s`);
    piece.style.setProperty('--confetti-drift', `${Math.random() * 180 - 90}px`);
    finaleConfetti.appendChild(piece);
}

const finaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            birthdayFinale.classList.add('is-celebrating');
        }
    });
}, { threshold: 0.35 });

finaleObserver.observe(birthdayFinale);

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
            if (activeVideo && activeVideo !== video) {
                activeVideo.pause();
            }

            activeVideo = video;
            video.play().catch((error) => {
                console.warn('La lecture automatique de cette vidéo a été bloquée par le navigateur.', error);
            });
        } else {
            video.pause();
            if (activeVideo === video) {
                activeVideo = null;
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.chapter-video').forEach((video) => {
    videoObserver.observe(video);
});

const memoryVideoGroups = [
    {
        title: '',
        videos: [
            { title: 'Vidéo 2', subtitle: 'Une seconde de souvenir', fileName: 'WhatsApp Video 2026-10-19 at 04.31.17.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 3', subtitle: 'Un moment de notre rencontre', fileName: 'WhatsApp Video 2026-10-19 at 04.31.19.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 4', subtitle: 'Le chemin de cette première rencontre', fileName: 'WhatsApp Video 2026-10-19 at 04.31.53.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 5', subtitle: 'Le souvenir s’approfondit', fileName: 'WhatsApp Video 2026-10-19 at 04.32.17.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 6', subtitle: 'Un tournant dans notre histoire', fileName: 'WhatsApp Video 2026-10-19 at 04.32.26.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 7', subtitle: 'Le premier vrai moment', fileName: 'WhatsApp Video 2026-10-19 at 04.32.33.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 8', subtitle: 'Le mouvement du cœur', fileName: 'WhatsApp Video 2026-10-19 at 04.32.45.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 9', subtitle: 'Les premiers instants en tête-à-tête', fileName: 'WhatsApp Video 2026-10-19 at 04.32.52.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 10', subtitle: 'Ce qui a tout commencé', fileName: 'WhatsApp Video 2026-10-19 at 04.32.58.mp4', folder: 'assets/toute les videos' },
            { title: 'Vidéo 11', subtitle: 'Le souvenir qui reste', fileName: 'WhatsApp Video 2026-10-19 at 04.33.06.mp4', folder: 'assets/toute les videos' }
        ]
    },
    {
        title: 'Aujourd’hui',
        videos: [
            { title: 'Vidéo 12', subtitle: 'Moment spontané', fileName: 'WhatsApp Video 2026-10-19 at 04.33.25.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 13', subtitle: 'Un instant précieux', fileName: 'WhatsApp Video 2026-10-19 at 04.33.42.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 14', subtitle: 'Un souvenir simple', fileName: 'WhatsApp Video 2026-10-19 at 04.33.57.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 15', subtitle: 'Le moment compte', fileName: 'WhatsApp Video 2026-10-19 at 04.34.10.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 16', subtitle: 'Rires et tendresse', fileName: 'WhatsApp Video 2026-10-19 at 04.34.41.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 17', subtitle: 'Un détail qui nous ressemble', fileName: 'WhatsApp Video 2026-10-19 at 04.34.52.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 18', subtitle: 'La joie du moment', fileName: 'WhatsApp Video 2026-10-19 at 04.35.08.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 19', subtitle: 'Un instant à garder', fileName: 'WhatsApp Video 2026-10-19 at 04.35.15.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 20', subtitle: 'Des souvenirs qui nous appartiennent', fileName: 'WhatsApp Video 2026-10-19 at 04.35.23.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 21', subtitle: 'Un beau moment', fileName: 'WhatsApp Video 2026-10-19 at 04.35.34.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 22', subtitle: 'La douceur du moment', fileName: 'WhatsApp Video 2026-10-19 at 06.00.50.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 23', subtitle: 'Un instant à chérir', fileName: 'WhatsApp Video 2026-10-19 at 06.01.10.mp4', folder: 'assets/video aujourdhui' },
            { title: 'Vidéo 24', subtitle: 'Et la suite continue', fileName: 'WhatsApp Video 2026-10-19 at 06.01.25.mp4', folder: 'assets/video aujourdhui' }
        ]
    }
];

function buildVideoGallery() {
    if (!videoGroupsContainer) return;

    memoryVideoGroups.forEach((group) => {
        const groupWrapper = document.createElement('div');
        groupWrapper.className = 'video-group';

        if (group.title) {
            const heading = document.createElement('h4');
            heading.textContent = group.title;
            groupWrapper.appendChild(heading);
        }

        const gallery = document.createElement('div');
        gallery.className = 'video-gallery';

        group.videos.forEach((video) => {
            const card = document.createElement('article');
            card.className = 'video-card';

            const player = document.createElement('video');
            player.src = encodeURI(video.folder + '/' + video.fileName);
            player.controls = true;
            player.autoplay = true;
            player.muted = true;
            player.playsInline = true;
            player.preload = 'metadata';
            videoObserver.observe(player);

            player.addEventListener('error', () => {
                card.remove();
            });

            card.appendChild(player);
            gallery.appendChild(card);
        });

        groupWrapper.appendChild(gallery);
        videoGroupsContainer.appendChild(groupWrapper);
    });
}

async function playMusic() {
    try {
        await backgroundMusic.play();
    } catch (error) {
        console.warn('La lecture de la musique a échoué.', error);
    }
}

function revealStory() {
    openingScreen.classList.add('hidden');
    revealScreen.classList.remove('hidden');

    window.setTimeout(() => {
        revealScreen.classList.add('hidden');
        storySection.classList.remove('hidden');
    }, 1700);
}

function createSurpriseBurst() {
    const burst = document.getElementById('surprise-burst');
    const buttonBounds = surpriseButton.getBoundingClientRect();
    const originX = buttonBounds.left + buttonBounds.width / 2;
    const originY = buttonBounds.top + buttonBounds.height / 2;
    const particleCount = 720;

    burst.replaceChildren();
    burst.style.setProperty('--burst-origin-x', `${originX}px`);
    burst.style.setProperty('--burst-origin-y', `${originY}px`);
    burst.classList.remove('hidden');
    burst.classList.add('is-bursting');

    for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement('span');
        const angle = (Math.PI * 2 * index) / particleCount + (Math.random() - 0.5) * 0.3;
        const distance = 100 + Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.48;
        const isSparkle = index % 3 === 0;

        particle.className = isSparkle ? 'burst-particle burst-sparkle' : 'burst-particle burst-confetti';
        particle.textContent = isSparkle ? '✦' : '';
        particle.style.left = `${originX}px`;
        particle.style.top = `${originY}px`;
        particle.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`);
        particle.style.setProperty('--particle-size', `${6 + Math.random() * 13}px`);
        particle.style.setProperty('--particle-delay', `${Math.random() * 100}ms`);
        particle.style.setProperty('--particle-color', ['#fff4c2', '#ffd166', '#ff85b7', '#ffffff', '#c9a7ff'][index % 5]);
        burst.appendChild(particle);
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 1100;
}

function startBackgroundConfetti() {
    const background = document.getElementById('background-confetti');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    background.replaceChildren();
    background.classList.remove('hidden');

    for (let index = 0; index < 110; index += 1) {
        const piece = document.createElement('span');
        piece.className = 'background-confetti-piece';
        piece.style.setProperty('--confetti-left', `${Math.random() * 100}%`);
        piece.style.setProperty('--confetti-size', `${5 + Math.random() * 9}px`);
        piece.style.setProperty('--confetti-duration', `${7 + Math.random() * 9}s`);
        piece.style.setProperty('--confetti-delay', `${Math.random() * -16}s`);
        piece.style.setProperty('--confetti-drift', `${Math.random() * 180 - 90}px`);
        piece.style.setProperty('--confetti-color', ['#fff4c2', '#ffd166', '#ff85b7', '#ffffff', '#c9a7ff'][index % 5]);
        piece.style.setProperty('--confetti-rotation', `${Math.random() * 360}deg`);
        background.appendChild(piece);
    }
}

surpriseButton.addEventListener('click', async () => {
    surpriseButton.disabled = true;
    const burstDuration = createSurpriseBurst();
    startBackgroundConfetti();
    playMusic();

    await new Promise((resolve) => window.setTimeout(resolve, burstDuration));
    document.getElementById('surprise-burst').classList.add('hidden');
    document.getElementById('surprise-burst').classList.remove('is-bursting');
    revealStory();
});

backgroundMusic.addEventListener('error', () => {
    console.error('Impossible de charger le fichier musical.', backgroundMusic.error);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        backgroundMusic.pause();
    }
});

window.addEventListener('pagehide', () => {
    backgroundMusic.pause();
});

buildVideoGallery();
