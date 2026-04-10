// assessment.js - FULL MEDVI-STYLE FLOW LOGIC

let currentStep = 1;
const totalSteps = 6;

document.addEventListener('DOMContentLoaded', () => {
    initOptionSelection();
    initInputListeners();
    populateDOB();
    checkValidation();
});

function populateDOB() {
    const monthSel = document.getElementById('dob_month');
    const daySel = document.getElementById('dob_day');
    const yearSel = document.getElementById('dob_year');

    if (!monthSel) return;

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    months.forEach((m, i) => {
        let opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerText = m;
        monthSel.appendChild(opt);
    });

    for (let i = 1; i <= 31; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerText = i < 10 ? '0' + i : i;
        daySel.appendChild(opt);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 18; i >= 1950; i--) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerText = i;
        yearSel.appendChild(opt);
    }
}

function initOptionSelection() {
    const panels = document.querySelectorAll('.option-panel');
    panels.forEach(panel => {
        const input = panel.querySelector('input');
        panel.addEventListener('click', (e) => {
            if (input.type === 'radio') {
                const group = document.querySelectorAll(`input[name="${input.name}"]`);
                group.forEach(i => i.closest('.option-panel').classList.remove('selected'));
                input.checked = true;
                panel.classList.add('selected');
            } else {
                // Checkbox toggle logic
                if (e.target.tagName !== 'INPUT') {
                    input.checked = !input.checked;
                }
                panel.classList.toggle('selected', input.checked);
                
                // Logic for "None of the above" behavior
                if (panel.classList.contains('none-option') && input.checked) {
                    const others = panel.closest('.options-list').querySelectorAll('.option-panel:not(.none-option)');
                    others.forEach(o => {
                        o.classList.remove('selected');
                        o.querySelector('input').checked = false;
                    });
                } else if (!panel.classList.contains('none-option') && input.checked) {
                    const noneOpt = panel.closest('.options-list').querySelector('.none-option');
                    if (noneOpt) {
                        noneOpt.classList.remove('selected');
                        noneOpt.querySelector('input').checked = false;
                    }
                }
            }
            checkValidation();
        });
    });
}

function initInputListeners() {
    const inputs = document.querySelectorAll('.clinical-input');
    inputs.forEach(input => {
        input.addEventListener('input', checkValidation);
    });
}

function checkValidation() {
    const btnNext = document.getElementById('btnNext');
    let isValid = false;

    if (currentStep === 1) {
        const hCm = document.querySelector('input[name="height_cm"]').value;
        const wKg = document.querySelector('input[name="weight_kg"]').value;
        const tKg = document.querySelector('input[name="target_weight_kg"]').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const dobM = document.querySelector('select[name="dob_month"]').value;
        const dobD = document.querySelector('select[name="dob_day"]').value;
        const dobY = document.querySelector('select[name="dob_year"]').value;
        isValid = hCm && wKg && tKg && gender && dobM && dobD && dobY;
    } else if (currentStep === 2) {
        // Al menos una condición o "Ninguna"
        const checked = document.querySelectorAll('input[name="hcondition"]:checked');
        isValid = checked.length > 0;
    } else if (currentStep === 3) {
        const bp = document.querySelector('input[name="bp"]:checked');
        const hr = document.querySelector('input[name="hr"]:checked');
        const meds = document.querySelector('input[name="meds"]:checked');
        isValid = bp && hr && meds;
    } else if (currentStep === 4) {
        const pace = document.querySelector('input[name="pace"]:checked');
        isValid = pace;
    } else if (currentStep === 5) {
        const priority = document.querySelector('input[name="priority"]:checked');
        const delivery = document.querySelector('input[name="delivery"]:checked');
        isValid = priority && delivery;
    } else if (currentStep === 6) {
        const fName = document.querySelector('input[name="first_name"]').value.trim();
        const lName = document.querySelector('input[name="last_name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value;
        isValid = fName && lName && email.includes('@');
    }

    btnNext.disabled = !isValid;
}

function handleNext() {
    if (currentStep === 1) {
        updateBMIPreview();
    }
    
    if (currentStep < totalSteps) {
        navigateStep(currentStep + 1);
    } else {
        showLoadingAndResults();
    }
}

function handleBack() {
    if (currentStep > 1) {
        navigateStep(currentStep - 1);
    }
}

function updateBMIPreview() {
    const hCm = parseFloat(document.querySelector('input[name="height_cm"]').value);
    const wKg = parseFloat(document.querySelector('input[name="weight_kg"]').value);
    const tKg = parseFloat(document.querySelector('input[name="target_weight_kg"]').value);

    if (hCm && wKg) {
        // BMI Logic Metric: kg / (m^2)
        const heightMeters = hCm / 100;
        const bmi = wKg / (heightMeters * heightMeters);
        
        document.getElementById('display-bmi').innerText = bmi.toFixed(2);
        document.getElementById('display-weight').innerText = wKg;
        document.getElementById('display-target').innerText = tKg;
    }
}

function navigateStep(step) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`stepIndicator-${currentStep}`).classList.remove('active');
    document.getElementById(`stepIndicator-${currentStep}`).classList.add('completed');
    
    currentStep = step;
    
    document.getElementById(`step-${currentStep}`).classList.add('active');
    document.getElementById(`stepIndicator-${currentStep}`).classList.add('active');
    
    document.getElementById('btnBack').style.visibility = (currentStep === 1) ? 'hidden' : 'visible';
    
    const btnNext = document.getElementById('btnNext');
    if (currentStep === totalSteps) {
        btnNext.innerHTML = "Verificar Elegibilidad →";
    } else {
        btnNext.innerHTML = "Siguiente →";
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    checkValidation();
}

function showLoadingAndResults() {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById('navFooter').style.display = 'none';
    
    const loading = document.getElementById('step-loading');
    loading.classList.add('active');
    
    setTimeout(() => {
        loading.classList.remove('active');
        document.getElementById('step-result').classList.add('active');
    }, 4500);
}
