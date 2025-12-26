// Client-side search functionality for Hugo blog
let allPosts = [];

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all blog cards
    const blogCards = document.querySelectorAll('.blog-card');

    // Store post data
    blogCards.forEach(card => {
        allPosts.push({
            element: card,
            title: card.getAttribute('data-title') || '',
            excerpt: card.getAttribute('data-excerpt') || ''
        });
    });

    // Get search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
});

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    const noResults = document.getElementById('no-results');

    if (query === '') {
        // Show all posts
        allPosts.forEach(post => {
            post.element.style.display = '';
        });
        if (noResults) noResults.style.display = 'none';
        return;
    }

    // Filter posts
    let hasResults = false;
    allPosts.forEach(post => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt.toLowerCase().includes(query);

        if (titleMatch || excerptMatch) {
            post.element.style.display = '';
            hasResults = true;
        } else {
            post.element.style.display = 'none';
        }
    });

    // Show/hide no results message
    if (noResults) {
        noResults.style.display = hasResults ? 'none' : 'block';
    }
}
