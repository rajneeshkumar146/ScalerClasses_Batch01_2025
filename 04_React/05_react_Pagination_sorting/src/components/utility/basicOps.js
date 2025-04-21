const PAGE_SIZE = 4;
const ALL_CATEGORIES = "All Categories";


const searchItems = (array, searchTerm) => {
    let modifiedArray = array;
    if (searchTerm != "" && searchTerm.trim().length != 0) {
        modifiedArray = modifiedArray.filter(product => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerCaseTitle = product.title.toLowerCase();

            return lowerCaseTitle.includes(lowerSearchTerm);
        });
    }

    return modifiedArray;
}

const sortingOfProducts = (arrayOfProducts, sortDirection) => {
    let modifiedArray = arrayOfProducts;

    // Means we need to sort the data.
    if (sortDirection != 0) {

        if (sortDirection === 1) {
            // Sort in increasing order.    
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product1.price - product2.price;
            });
        } else {
            // Sort in decreasing order.  
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }

    }
    return modifiedArray;
}

const categorization = (arrayOfProducts, currCategories) => {
    let modifiedArray = arrayOfProducts;
    if (currCategories.localeCompare(ALL_CATEGORIES) != 0) {
        modifiedArray = modifiedArray.filter((product) =>
            product.category === currCategories)
    }

    return modifiedArray;
}

const pagination = (arrayOfProducts, pageNum) => {
    let modifiedArray = arrayOfProducts;
    let totalPages = Math.ceil(modifiedArray.length / PAGE_SIZE);

    let sidx = (pageNum - 1) * PAGE_SIZE;
    let eidx = Math.min((sidx + (PAGE_SIZE - 1)), modifiedArray.length - 1);

    modifiedArray = modifiedArray.slice(sidx, eidx + 1);

    return { modifiedArray, totalPages };
}




const preCondition = (condition, error) => {
    if (!condition) {
        console.log("Precodition Failure with message: ", error);
        return true;
    }

    return false;
}

const isArrayCheck = (array, methodName) => {
    if (!Array.isArray(array)) {
        console.log(`You forget to return modified array from ${methodName}`);
    }
}

export default function basicOps(arrayOfProducts, searchTerm, sortDirection, currCategories, pageNum) {
    if (preCondition(arrayOfProducts != null && Array.isArray(arrayOfProducts) && arrayOfProducts.length != 0, "It's a null or empty array of products")) {
        return [];
    }

    let modifiedArray = arrayOfProducts;

    /** ********************* Filtering Products ****************** */
    modifiedArray = searchItems(modifiedArray, searchTerm);
    isArrayCheck(modifiedArray, "searchItems");

    /******************** Sorting products ********************/
    modifiedArray = sortingOfProducts(modifiedArray, sortDirection);
    isArrayCheck(modifiedArray, "sortingOfProducts");

    /********************categorization /********************/
    modifiedArray = categorization(modifiedArray, currCategories);
    isArrayCheck(modifiedArray, "categorization");

    return pagination(modifiedArray, pageNum);
}


