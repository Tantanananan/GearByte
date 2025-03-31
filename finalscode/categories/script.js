let previewContainer = document.querySelector('.products-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex'; // Show the preview container
        let name = product.getAttribute('data-name'); // Get the data-name attribute from the clicked product
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active'); // Show the corresponding preview
            }
        });
    };
});

previewBoxes.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active'); // Close the preview
        previewContainer.style.display = 'none'; // Hide the preview container
    };
});
