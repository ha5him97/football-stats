// Store original order for resetting
let originalTableData = [];

// Initialize the table data on page load
document.addEventListener('DOMContentLoaded', function() {
    saveOriginalOrder();
    addSortListeners();
    addHoverEffects();
});

// Save the original order of rows
function saveOriginalOrder() {
    const table = document.getElementById('ucl-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    originalTableData = rows.map(row => ({
        html: row.outerHTML,
        points: parseInt(row.cells[9].textContent) || 0,
        gd: parseFloat(row.cells[8].textContent) || 0,
        wins: parseInt(row.cells[3].textContent) || 0,
        team: row.cells[1].textContent
    }));
}

// Add click listeners to table headers
function addSortListeners() {
    const headers = document.querySelectorAll('#ucl-table th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            sortByColumn(index);
        });
    });
}

// Sort by column index
function sortByColumn(columnIndex) {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // Determine sort type based on column
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        
        // Column 0: Position (numeric)
        // Column 1: Team name (string)
        // Columns 2-7, 9: Numeric stats
        // Column 8: GD (numeric with +-)
        
        if (columnIndex === 1) { // Team name
            return cellA.localeCompare(cellB);
        } else if (columnIndex === 8) { // GD column
            const numA = parseFloat(cellA) || 0;
            const numB = parseFloat(cellB) || 0;
            return numB - numA; // Descending (higher GD first)
        } else { // All other numeric columns
            const numA = parseInt(cellA) || 0;
            const numB = parseInt(cellB) || 0;
            return numB - numA; // Descending (higher values first)
        }
    });
    
    // Clear and re-add sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
    
    updatePositions();
}

// Sort by Points (P column - index 9)
function sortTable(sortType) {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((rowA, rowB) => {
        if (sortType === 'points') {
            const pointsA = parseInt(rowA.cells[9].textContent) || 0;
            const pointsB = parseInt(rowB.cells[9].textContent) || 0;
            if (pointsB !== pointsA) {
                return pointsB - pointsA; // Primary sort by points
            }
            // Tiebreaker: GD
            const gdA = parseFloat(rowA.cells[8].textContent) || 0;
            const gdB = parseFloat(rowB.cells[8].textContent) || 0;
            return gdB - gdA;
            
        } else if (sortType === 'gd') {
            const gdA = parseFloat(rowA.cells[8].textContent) || 0;
            const gdB = parseFloat(rowB.cells[8].textContent) || 0;
            if (gdB !== gdA) {
                return gdB - gdA; // Primary sort by GD
            }
            // Tiebreaker: Points
            const pointsA = parseInt(rowA.cells[9].textContent) || 0;
            const pointsB = parseInt(rowB.cells[9].textContent) || 0;
            return pointsB - pointsA;
            
        } else if (sortType === 'wins') {
            const winsA = parseInt(rowA.cells[3].textContent) || 0;
            const winsB = parseInt(rowB.cells[3].textContent) || 0;
            if (winsB !== winsA) {
                return winsB - winsA; // Primary sort by wins
            }
            // Tiebreaker: Points
            const pointsA = parseInt(rowA.cells[9].textContent) || 0;
            const pointsB = parseInt(rowB.cells[9].textContent) || 0;
            return pointsB - pointsA;
        }
        return 0;
    });
    
    // Clear and re-add sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
    
    updatePositions();
}

// Reset to original order
function resetSort() {
    const table = document.getElementById('ucl-table');
    const tbody = table.querySelector('tbody');
    
    // Clear current rows
    tbody.innerHTML = '';
    
    // Add original rows in order
    originalTableData.forEach(rowData => {
        tbody.innerHTML += rowData.html;
    });
    
    // No need to update positions as original HTML already has them
}

// Update position numbers in first column
function updatePositions() {
    const table = document.getElementById('ucl-table');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}

// Add hover effects for table rows
function addHoverEffects() {
    const rows = document.querySelectorAll('#ucl-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.002)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Optional: Add search functionality
function addSearchFunctionality() {
    const searchContainer = document.querySelector('.table-header');
    
    // Create search input if it doesn't exist
    if (!document.querySelector('.search-input')) {
        const searchDiv = document.createElement('div');
        searchDiv.className = 'search-container';
        searchDiv.innerHTML = `
            <input type="text" class="search-input" placeholder="Search teams..." 
                   style="padding: 10px 15px; border-radius: 25px; border: 2px solid #001489; 
                          width: 250px; font-size: 1rem; margin-top: 10px;">
        `;
        searchContainer.appendChild(searchDiv);
        
        // Add search event listener
        const searchInput = searchDiv.querySelector('.search-input');
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const rows = document.querySelectorAll('#ucl-table tbody tr');
            let visibleCount = 0;
            
            rows.forEach(row => {
                const teamName = row.cells[1].textContent.toLowerCase();
                if (teamName.includes(searchTerm) || searchTerm === '') {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
            
            // Update positions based on visible rows
            updateVisiblePositions();
            
            // Show message if no results
            showNoResultsMessage(visibleCount, searchTerm);
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

// Show message when no results found
function showNoResultsMessage(visibleCount, searchTerm) {
    // Remove any existing message
    const existingMsg = document.querySelector('.no-results');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // If no results and search term isn't empty
    if (visibleCount === 0 && searchTerm !== '') {
        const tableContainer = document.querySelector('.table-container');
        const message = document.createElement('div');
        message.className = 'no-results';
        message.innerHTML = `<p style="text-align: center; padding: 20px; color: #666; font-style: italic;">
            No teams found matching "${searchTerm}"
        </p>`;
        tableContainer.appendChild(message);
    }
}

// Optional: Add this CSS for the search input
const searchStyles = `
.search-container {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.search-input {
    padding: 12px 20px !important;
    border-radius: 25px !important;
    border: 2px solid #001489 !important;
    width: 300px !important;
    font-size: 1rem !important;
    outline: none;
    transition: all 0.3s;
}

.search-input:focus {
    border-color: #ffcc00 !important;
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.2) !important;
}

.no-results {
    background: #f8f9fa;
    border-radius: 8px;
    margin: 20px;
}
`;

// Add the styles to the page
const styleSheet = document.createElement("style");
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Uncomment the line below to add search functionality automatically
// document.addEventListener('DOMContentLoaded', addSearchFunctionality);
