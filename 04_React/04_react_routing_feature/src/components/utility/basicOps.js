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



const preCondition = (condition, error) => {
    if (!condition) {
        console.log("Precodition Failure with message: ", error);
        return true;
    }

    return false;
}

export default function basicOps(arrayOfProducts, searchTerm) {
    if (preCondition(arrayOfProducts != null && arrayOfProducts.length != 0, "It's a null or empty array of products")) {
        return [];
    }

    let modifiedArray = arrayOfProducts;

    /** ********************* Filtering Products ****************** */
    modifiedArray = searchItems(modifiedArray, searchTerm);


    return modifiedArray;
}


