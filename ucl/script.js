// Store original order for resetting
let originalTableData = [];

// Initialize the table data on page load
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('ucl-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    
    // Store original data
    originalTableData = rows.map(row => row.outerHTML);
    
    // Add click event to sort by column headers
    const headers = document.querySelectorAll('#ucl-table th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            sortByColumn(index);
        });
    });
});

// Function to sort by column index
function sortByColumn(columnIndex) {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Determine sort type based on column
    const isNumeric = columnIndex !== 1; // Column 1 is team names (not numeric)
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent;
        const cellB = rowB.cells[columnIndex].textContent;
        
        if (isNumeric) {
            // Handle GD column with +/-
            if (columnIndex === 8) {
                const numA = parseFloat(cellA);
                const numB = parseFloat(cellB);
                return numB - numA; // Descending for GD
            }
            // Handle other numeric columns
            const numA = parseInt(cellA) || 0;
            const numB = parseInt(cellB) || 0;
            return numB - numA; // Descending for most columns
        } else {
            // Alphabetical for team names
            return cellA.localeCompare(cellB);
        }
    });
    
    // Reorder rows
    rows.forEach(row => tbody.appendChild(row));
    
    // Update position numbers
    updatePositions();
}

// Sort functions for buttons
function sortTable(sortType) {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((rowA, rowB) => {
        if (sortType === 'points') {
            const pointsA = parseInt(rowA.cells[9].textContent);
            const pointsB = parseInt(rowB.cells[9].textContent);
            return pointsB - pointsA;
        } else if (sortType === 'gd') {
            const gdA = parseFloat(rowA.cells[8].textContent);
            const gdB = parseFloat(rowB.cells[8].textContent);
            return gdB - gdA;
        } else if (sortType === 'wins') {
            const winsA = parseInt(rowA.cells[3].textContent);
            const winsB = parseInt(rowB.cells[3].textContent);
            return winsB - winsA;
        }
        return 0;
    });
    
    // Reorder rows
    rows.forEach(row => tbody.appendChild(row));
    
    // Update position numbers
    updatePositions();
}

// Reset to original order
function resetSort() {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    
    // Clear current rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    // Add original rows
    originalTableData.forEach(rowHtml => {
        tbody.innerHTML += rowHtml;
    });
    
    // Update position numbers (should be 1-36 in original order)
    updatePositions();
}

// Update position numbers in first column
function updatePositions() {
    const table = document.getElementById('ucl-table');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}

// Add hover effect for table rows
function addHoverEffects() {
    const rows = document.querySelectorAll('#ucl-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.002)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Initialize hover effects when page loads
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Search functionality (optional enhancement)
function addSearchFunctionality() {
    const searchContainer = document.querySelector('.table-header');
    
    // Create search input if it doesn't exist
    if (!document.querySelector('.search-input')) {
        const searchDiv = document.createElement('div');
        searchDiv.className = 'search-container';
        searchDiv.innerHTML = `
            <input type="text" class="search-input" placeholder="Search teams..." 
                   style="padding: 10px; border-radius: 20px; border: 2px solid #001489; width: 250px;">
        `;
        searchContainer.appendChild(searchDiv);
        
        // Add search event listener
        const searchInput = searchDiv.querySelector('.search-input');
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#ucl-table tbody tr');
            
            rows.forEach(row => {
                const teamName = row.cells[1].textContent.toLowerCase();
                if (teamName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            // Update positions based on visible rows
            updateVisiblePositions();
        });
    }
}

// Update positions for visible rows only
function updateVisiblePositions() {
    const table = document.getElementById('ucl-table');
    const rows = table.querySelectorAll('tbody tr');
    let position = 1;
    
    rows.forEach(row => {
        if (row.style.display !== 'none') {
            row.cells[0].textContent = position;
            position++;
        }
    });
}

// Add search button if wanted (uncomment to add)
// document.addEventListener('DOMContentLoaded', addSearchFunctionality);
