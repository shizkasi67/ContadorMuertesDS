// Utiliza localStorage para guardar el contador
const COUNTER_KEY = 'ds_death_counter';

const counterDisplay = document.getElementById('counter');
const addBtn = document.getElementById('add-btn');
const editBtn = document.getElementById('edit-btn');
const editModal = document.getElementById('edit-modal');
const editInput = document.getElementById('edit-input');
const saveEdit = document.getElementById('save-edit');
const cancelEdit = document.getElementById('cancel-edit');

// Obtener el valor guardado o iniciar en 0
function getCounter() {
    return parseInt(localStorage.getItem(COUNTER_KEY)) || 0;
}

function setCounter(val) {
    localStorage.setItem(COUNTER_KEY, val);
    counterDisplay.textContent = val;
}

// Inicializar
setCounter(getCounter());

// Sumar muerte
addBtn.addEventListener('click', () => {
    let val = getCounter() + 1;
    setCounter(val);
});

// Abrir modal de edición
editBtn.addEventListener('click', () => {
    editInput.value = getCounter();
    editModal.classList.remove('hidden');
    editInput.focus();
});

// Guardar edición
saveEdit.addEventListener('click', () => {
    let val = parseInt(editInput.value);
    if (isNaN(val) || val < 0) val = 0;
    setCounter(val);
    editModal.classList.add('hidden');
});

// Cancelar edición
cancelEdit.addEventListener('click', () => {
    editModal.classList.add('hidden');
});

// Cerrar modal con Escape
window.addEventListener('keydown', (e) => {
    if (!editModal.classList.contains('hidden') && e.key === 'Escape') {
        editModal.classList.add('hidden');
    }
});

// Evitar scroll en input con rueda del mouse
editInput.addEventListener('wheel', (e) => {
    e.preventDefault();
}, { passive: false }); 