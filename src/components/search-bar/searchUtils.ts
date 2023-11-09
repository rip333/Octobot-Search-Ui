// searchUtils.ts

// Define the parameters to search across globally if they don't change
const searchParameters = [
    'ru',
    'cl',
    'n',
    'sn',
    'ty',
    'tr'
];

// Function to create search queries based on tokens for multiple parameters
export const createSearchQuery = (searchString: string, filterOptions: { incomplete: boolean; origin: string }) => {
    // Split the search string into tokens by spaces
    const tokens = searchString.split(' ');
    
    // For each token, create a query part that checks all parameters
    const queryParts = tokens.map(token => {
        const encodedToken = encodeURIComponent(token);
        return searchParameters.map(param => `${param}:"${encodedToken}"`).join('|');
    });
    
    // Combine query parts with OR operators
    const combinedQuery = queryParts.join('|');
    
    // Add the filter options to the query
    const filterQueries = [];
    if(!filterOptions.incomplete) {
        filterQueries.push(`i:"false"`);
    }
    if(filterOptions.origin !== "all") {
        filterQueries.push(`o:"${filterOptions.origin === "official"}"`);
    }
    
    // Final combined query with filters and separate text parameters
    return `input=(${combinedQuery})${filterQueries.length > 0 ? '%26' + filterQueries.join('%26') : ''}`;
};
