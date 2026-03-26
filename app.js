// Application State
let currentView = 'scanner';
let scannerActive = false;
let currentTribe = null;

// DOM Elements
const scannerTab = document.getElementById('scanner-tab');
const cardsTab = document.getElementById('cards-tab');
const scannerSection = document.getElementById('scanner-section');
const cardGridSection = document.getElementById('card-grid-section');
const tribeDetailSection = document.getElementById('tribe-detail-section');
const startScannerBtn = document.getElementById('start-scanner');
const stopScannerBtn = document.getElementById('stop-scanner');
const scannerStatus = document.getElementById('scanner-status');
const backButton = document.getElementById('back-button');

// Suit symbols
const SUIT_SYMBOLS = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeCardGrid();
    initializeScanner();

    // Check for test parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const testBarcode = urlParams.get('test');

    if (testBarcode) {
        // Simulate barcode scan from URL parameter
        const tribe = getTribeByBarcode(testBarcode);
        if (tribe) {
            setTimeout(() => {
                showTribeDetail(tribe);
            }, 500);
        }
    }
});

// Navigation
function initializeNavigation() {
    scannerTab.addEventListener('click', () => switchView('scanner'));
    cardsTab.addEventListener('click', () => switchView('cards'));
    backButton.addEventListener('click', () => switchView('cards'));
}

function switchView(view) {
    // Update navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    if (view === 'scanner') {
        scannerTab.classList.add('active');
        scannerSection.classList.add('active');
        cardGridSection.classList.remove('active');
        tribeDetailSection.classList.remove('active');
    } else if (view === 'cards') {
        cardsTab.classList.add('active');
        scannerSection.classList.remove('active');
        cardGridSection.classList.add('active');
        tribeDetailSection.classList.remove('active');

        // Stop scanner if active
        if (scannerActive) {
            stopScanner();
        }
    } else if (view === 'tribe') {
        scannerSection.classList.remove('active');
        cardGridSection.classList.remove('active');
        tribeDetailSection.classList.add('active');
    }

    currentView = view;
}

// Card Grid
function initializeCardGrid() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

    suits.forEach(suit => {
        const grid = document.getElementById(`${suit}-grid`);
        const tribes = getTribesBySuit(suit);

        tribes.forEach(tribe => {
            const card = createCardElement(tribe);
            grid.appendChild(card);
        });
    });
}

function createCardElement(tribe) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
    <div class="card-number">${tribe.number}</div>
    <div class="card-suit-symbol suit-${tribe.suit}">${SUIT_SYMBOLS[tribe.suit]}</div>
    <div class="card-tribe-name">${tribe.name}</div>
    <div class="card-region">${tribe.region}</div>
  `;

    card.addEventListener('click', () => showTribeDetail(tribe));

    return card;
}

// Tribe Detail
function showTribeDetail(tribe) {
    currentTribe = tribe;

    // Update tribe information
    document.getElementById('tribe-card-info').textContent =
        `${SUIT_SYMBOLS[tribe.suit]} ${tribe.number}`;
    document.getElementById('tribe-name').textContent = tribe.name;
    document.getElementById('tribe-region').textContent = tribe.region;
    document.getElementById('tribe-population').textContent = tribe.population;
    document.getElementById('tribe-language').textContent = tribe.language;
    document.getElementById('tribe-description').textContent = tribe.description;
    document.getElementById('tribe-culture').textContent = tribe.culture;
    document.getElementById('tribe-traditions').textContent = tribe.traditions;

    // Switch to tribe detail view
    switchView('tribe');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Barcode Scanner
function initializeScanner() {
    startScannerBtn.addEventListener('click', startScanner);
    stopScannerBtn.addEventListener('click', stopScanner);
}

function startScanner() {
    const config = {
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-video'),
            constraints: {
                width: { min: 640 },
                height: { min: 480 },
                facingMode: "environment",
                aspectRatio: { min: 1, max: 2 }
            }
        },
        decoder: {
            readers: [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                "code_39_reader",
                "code_39_vin_reader",
                "codabar_reader",
                "upc_reader",
                "upc_e_reader",
                "i2of5_reader"
            ],
            debug: {
                drawBoundingBox: true,
                showFrequency: true,
                drawScanline: true,
                showPattern: true
            }
        },
        locate: true,
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: 4,
        frequency: 10
    };

    Quagga.init(config, (err) => {
        if (err) {
            console.error('Error initializing scanner:', err);
            showScannerStatus('Gagal mengakses kamera. Pastikan izin kamera telah diberikan.', 'error');
            return;
        }

        Quagga.start();
        scannerActive = true;

        startScannerBtn.classList.add('hidden');
        stopScannerBtn.classList.remove('hidden');
        showScannerStatus('Scanner aktif. Arahkan ke barcode...', 'success');
    });

    Quagga.onDetected((result) => {
        const code = result.codeResult.code;
        console.log('Barcode detected:', code);

        // Try to find tribe by barcode
        const tribe = getTribeByBarcode(code);

        if (tribe) {
            // Stop scanner and show tribe
            stopScanner();
            showTribeDetail(tribe);
        } else {
            showScannerStatus(`Barcode terdeteksi: ${code} - Tidak ditemukan suku yang sesuai`, 'error');
        }
    });
}

function stopScanner() {
    if (scannerActive) {
        Quagga.stop();
        scannerActive = false;

        startScannerBtn.classList.remove('hidden');
        stopScannerBtn.classList.add('hidden');
        scannerStatus.classList.add('hidden');
    }
}

function showScannerStatus(message, type) {
    scannerStatus.textContent = message;
    scannerStatus.className = `scanner-status ${type}`;
    scannerStatus.classList.remove('hidden');
}

// Test function for development (can be called from console)
function testBarcode(cardNumber) {
    const barcode = `CARD_${String(cardNumber).padStart(2, '0')}`;
    const tribe = getTribeByBarcode(barcode);

    if (tribe) {
        console.log('Testing barcode:', barcode);
        showTribeDetail(tribe);
    } else {
        console.error('Tribe not found for barcode:', barcode);
    }
}

// Make test function available globally
window.testBarcode = testBarcode;

// Handle page visibility changes (pause scanner when tab is hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && scannerActive) {
        stopScanner();
    }
});
