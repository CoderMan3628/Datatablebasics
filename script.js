$(document).ready(function() {
    $('#myTable').DataTable({
      paging: true, // Enable pagination
      pageLength: 10, // Display 10 rows per page
      ordering: true, // Enable sorting
      order: [[0, 'asc']], // Sort by the first column in ascending order
      columns: [
        null, // Use default configuration for the first column
        { searchable: false }, // Disable search/filtering on the second column
        { orderable: false } // Disable sorting on the third column
      ]
    });
  });
  