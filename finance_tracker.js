const fs = require("fs");

class FinanceTracker {
    constructor() {
        this.records = [];
    }

    addRecord(type, amount, description) {
        this.records.push({ type, amount, description, date: new Date() });
        this.saveRecords();
    }

    saveRecords() {
        fs.writeFileSync("records.json", JSON.stringify(this.records, null, 2));
    }

    getTotalBalance() {
        return this.records.reduce((acc, record) => acc + (record.type === "income" ? record.amount : -record.amount), 0);
    }
}

const tracker = new FinanceTracker();
tracker.addRecord("income", 1000, "Salary");
tracker.addRecord("expense", 200, "Groceries");

console.log("Total Balance:", tracker.getTotalBalance());
