const filterInput = document.getElementById('filter-input');
        const listItems = document.querySelectorAll('.list-item');

        filterInput.addEventListener('input', filterList);

        function filterList() {
            const filterText = filterInput.value.toLowerCase();

            listItems.forEach(item => {
                const listItemText = item.textContent.toLowerCase();
                if (listItemText.includes(filterText)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            })
        }