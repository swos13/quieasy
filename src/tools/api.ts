export const fetchData = async (paramsString: string = "amount=10") => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?${paramsString}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error retrieving data:", error);
    }
}