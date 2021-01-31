module.exports = {
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    },

    currentMonth() {
        const today = new Date();
        return today.toLocaleString("default", { month: "short" });
    }
};