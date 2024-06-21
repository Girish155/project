const monthlyPrices = {
    basic: 10,
    standard: 20,
    premium: 30
};

const yearlyPrices = {
    basic: 100,
    standard: 200,
    premium: 300
};

function updatePricing() {
    const billingType = document.querySelector('input[name="billing"]:checked').value;
    const currency = document.getElementById('currency').value;
    const prices = billingType === 'monthly' ? monthlyPrices : yearlyPrices;
    const unit = billingType === 'monthly' ? '/mo' : '/yr';

    document.getElementById('basic-price').innerHTML = `${currency}${prices.basic}<span class="unit">${unit}</span>`;
    document.getElementById('standard-price').innerHTML = `${currency}${prices.standard}<span class="unit">${unit}</span>`;
    document.getElementById('premium-price').innerHTML = `${currency}${prices.premium}<span class="unit">${unit}</span>`;
}

function updateCurrency() {
    updatePricing();
}

document.addEventListener('DOMContentLoaded', () => {
    updatePricing();
});
