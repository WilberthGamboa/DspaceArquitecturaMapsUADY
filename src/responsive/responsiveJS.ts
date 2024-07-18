window.onload = function() {
    const element:any = document.querySelector('.p-datatable-wrapper');

    if (element) {
        
        element.style.overflow = 'hidden';
    } else {
        console.error('Elemento no encontrado');
    }

    const tableElement:any = document.querySelector('.p-datatable-table');

    if (tableElement) {
        tableElement.style.minWidth = ''; // Elimina la propiedad min-width
    } else {
        console.error('Elemento de tabla no encontrado');
    }

};