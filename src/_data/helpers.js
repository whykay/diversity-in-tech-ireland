module.exports = {
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    },

    currentMonth() {
        const today = new Date();
        return today.toLocaleString("en-us", { month: "short" });
    }
};