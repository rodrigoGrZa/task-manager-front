export const getTodayStartDate = () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    return `${formattedDate}T00:00:00`;
};