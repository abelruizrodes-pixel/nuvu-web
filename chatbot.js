document.addEventListener('DOMContentLoaded', () => {
    // Inject CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'chatbot.css';
    document.head.appendChild(link);

    // Inject HTML for the bot widget
    const botHTML = `
    <div id="nuvu-bot-container" class="nuvu-bot-closed">
        <button id="nuvu-bot-trigger">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
        <div id="nuvu-bot-window">
            <div class="nuvu-bot-header">
                <div>
                    <div style="font-weight: 800; letter-spacing: 1px;">NUVU ASSISTANT</div>
                    <div style="font-size: 0.75rem; color: #999;">Atención V.I.P</div>
                </div>
                <button id="nuvu-bot-close">×</button>
            </div>
            <div id="nuvu-bot-messages">
                <div class="bot-msg">Es un placer recibirle en NUVU, Señor/a. Soy el asistente de su protocolo. ¿Desea orientación para elevar su rendimiento biométrico en el día de hoy?</div>
            </div>
            <div class="nuvu-bot-input">
                <input type="text" id="nuvu-bot-text" placeholder="Escriba su consulta..." autocomplete="off">
                <button id="nuvu-bot-send">→</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', botHTML);

    const trigger = document.getElementById('nuvu-bot-trigger');
    const closeBtn = document.getElementById('nuvu-bot-close');
    const container = document.getElementById('nuvu-bot-container');
    const sendBtn = document.getElementById('nuvu-bot-send');
    const input = document.getElementById('nuvu-bot-text');
    const messages = document.getElementById('nuvu-bot-messages');

    trigger.addEventListener('click', () => {
        container.classList.remove('nuvu-bot-closed');
        container.classList.add('nuvu-bot-open');
    });

    closeBtn.addEventListener('click', () => {
        container.classList.remove('nuvu-bot-open');
        container.classList.add('nuvu-bot-closed');
    });

    sendBtn.addEventListener('click', () => sendMessage());
    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = input.value.trim();
        if(!text) return;
        
        // Añadir mensaje del usuario
        messages.innerHTML += `<div class="user-msg">${text}</div>`;
        input.value = '';
        messages.scrollTop = messages.scrollHeight;

        // Simular latencia de "pensamiento de la IA"
        setTimeout(() => {
            const aiResponse = getLuxuryResponse(text);
            messages.innerHTML += `<div class="bot-msg">${aiResponse}</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }

    function getLuxuryResponse(text) {
        text = text.toLowerCase();
        
        if (text.includes('precio') || text.includes('cuesta')) {
            return "Nuestros protocolos representan una inversión meticulosa en su perfección física. Thermo Matrix está disponible por 34.90€, y nuestro Aislado Premium por 59.90€. Sería un honor para mí preparar su pedido ahora mismo.";
        }
        
        if (text.includes('adelgazar') || text.includes('grasa') || text.includes('quemagrasas')) {
            return "Entendido. Para una recomposición corporal impecable, le sugiero Thermo Matrix. Su formulación clínica induce la oxidación lipídica en total silencio y sin perturbar sus biorritmos. Permítame acompañarle a la ficha del producto si lo desea.";
        }

        if (text.includes('musculo') || text.includes('proteína') || text.includes('crecer')) {
            return "Por supuesto. El Premium Whey Isolate ha sido concebido exactamente para esa demanda. Aportará 30g de la más pura materia prima a sus fibras musculares tras el impacto del entrenamiento. Es una decisión excelente.";
        }

        return "Comprendo su solicitud perfectamente. En NUVU, cada cliente recibe mi atención más exclusiva. Permítame unos instantes para analizar sus requerimientos e indicarle la dirección más adecuada hacia su Evolución.";
    }
});
