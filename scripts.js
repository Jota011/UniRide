//Bootstrap JS
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
//Inicialização de scripts
// Função de Emergência
function handleEmergency() {
    // Pegar a localização do usuário
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Mostrar alerta (na prática, aqui enviaríamos para um servidor)
        alert(`🚨 SOCORRO SOLICITADO!\nSua localização foi compartilhada com as autoridades.\n\nCoordenadas: ${latitude}, ${longitude}`);

        // Adicionar no console para fins de aprendizado
        console.log('Localização de emergência:', { latitude, longitude });
    }, error => {
        alert('Não foi possível obter sua localização. Por favor, ligue para 190 manualmente.');
        console.error('Erro de geolocalização:', error);
    });
}

// Função para Solicitar Motorista
function requestDriver(driverName) {
    const origin = document.getElementById('origin-input').value;
    const destiny = document.getElementById('destiny-input').value;

    if (!origin || !destiny) {
        alert('Por favor, preencha origem e destino!');
        return;
    }

    console.log(`Solicitando motorista ${driverName} para:
            Origem: ${origin}
            Destino: ${destiny}
            Tipo: ${document.getElementById('ride-type').value}
            Pagamento: ${document.getElementById('payment-type').value}`);

    alert(`Carona solicitada com ${driverName}! Aguarde a confirmação.`);
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    darkModeToggle.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

// Quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada! Pronto para aprender JavaScript.');
});