const draggable = document.querySelectorAll(".draggable");
const col = document.querySelectorAll(".col");

let draggedElement = null;

draggable.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
        draggedElement = draggable;
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        draggedElement = null;
    });
});

col.forEach(col => {
    col.addEventListener('dragover', event => {
        event.preventDefault();
    });

    col.addEventListener('drop', event => {
        event.preventDefault();
        if (draggedElement) {
            if (col.firstChild) {
                col.removeChild(col.firstElementChild);
            }
            col.appendChild(draggedElement);
            draggedElement = null;
        }

    });
});


