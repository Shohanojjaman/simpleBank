// Deposit calculation
document.getElementById('deposit-btn').addEventListener('click', function () {
  let totalDepositAmountMain = document.getElementById('totalDepositAmount').innerText;
  let totalDepositAmount = Number.parseFloat(totalDepositAmountMain);
  let depositAmount = document.getElementById('depositAmount').value;
  depositAmount = Number(depositAmount);
  let totalBalanceAmountMain = document.getElementById('totalBalanceAmount').innerText;
  let totalBalanceAmount = Number.parseFloat(totalBalanceAmountMain);
  if (depositAmount === 0 || typeof depositAmount !== 'number') {
    alert('Invalid input');
    return;
  }
  document.getElementById('totalDepositAmount').innerText = totalDepositAmount + depositAmount;

  document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount + depositAmount;
  console.log(typeof totalBalanceAmount);

  document.getElementById('depositAmount').value = '';
});

// Withdraw calculation
document.getElementById('withdraw-btn').addEventListener('click', function () {
  let totalWithdrawAmountMain = document.getElementById('totalWithdrawAmount').innerText;
  let totalWithdrawAmount = Number.parseFloat(totalWithdrawAmountMain);
  let withdrawAmount = document.getElementById('withdrawAmount').value;
  withdrawAmount = Number(withdrawAmount);
  let totalBalanceAmountMain = document.getElementById('totalBalanceAmount').innerText;
  let totalBalanceAmount = Number.parseFloat(totalBalanceAmountMain);
  if (withdrawAmount === 0 || typeof withdrawAmount !== 'number') {
    alert('Invalid input');
    return;
  }
  document.getElementById('totalWithdrawAmount').innerText = totalWithdrawAmount + withdrawAmount;

  document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount - withdrawAmount;
  console.log(typeof totalBalanceAmount);

  document.getElementById('withdrawAmount').value = '';
});
