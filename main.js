// Common Functions

/**
 * This function for convert input value string to number.
 * @param {string} inputFieldId - Input field Id.
 * @returns Convert input field value string to number.
 */
function getValueFromInput(inputFieldId) {
  let totalAmount = document.getElementById(inputFieldId).value;
  return Number(totalAmount);
}

/**
 * This function for convert for element value string to number.
 * @param {string} elementId - Element Id.
 * @returns Convert element value string to number.
 */
function getValueFromElement(elementId) {
  let totalAmount = document.getElementById(elementId).innerText;
  return Number(totalAmount);
}
/**
 * This function for update the value of the element.
 * @param {string} elementId - Element Id.
 * @param {string} preValue - Previous value of the element.
 * @param {string} newValue - New value which will be next value.
 * @param {string} calculation Addition or subtraction.
 */
function setValue(elementId, preValue, newValue, calculation) {
  if (calculation === 'add') {
    document.getElementById(elementId).innerText = preValue + newValue;
  } else if (calculation === 'sub') {
    document.getElementById(elementId).innerText = preValue - newValue;
  }
}

// Deposit calculation
document.getElementById('deposit-btn').addEventListener('click', function () {
  let depositAmount = getValueFromInput('depositAmount');
  let balanceAmount = getValueFromElement('totalBalanceAmount');
  let totalDepositAmount = getValueFromElement('totalDepositAmount');
  if (depositAmount === 0 || typeof depositAmount !== 'number') {
    alert('Invalid input');
    return;
  }

  setValue('totalDepositAmount', totalDepositAmount, depositAmount, 'add');
  setValue('totalBalanceAmount', balanceAmount, depositAmount, 'add');

  document.getElementById('depositAmount').value = '';
});

// Withdraw calculation
document.getElementById('withdraw-btn').addEventListener('click', function () {
  let withdrawAmount = getValueFromInput('withdrawAmount');
  let balanceAmount = getValueFromElement('totalBalanceAmount');
  let totalWithdrawAmount = getValueFromElement('totalWithdrawAmount');
  if (withdrawAmount === 0 || typeof withdrawAmount !== 'number') {
    alert('Invalid input');
    return;
  }

  setValue('totalWithdrawAmount', totalWithdrawAmount, withdrawAmount, 'add');
  setValue('totalBalanceAmount', balanceAmount, withdrawAmount, 'sub');

  document.getElementById('withdrawAmount').value = '';
});
