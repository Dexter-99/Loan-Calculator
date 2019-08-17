var myVar;
function preloader() {
  myVar = setTimeout(showPage, 5000);
  document.getElementById('content').style.display="none";
}
function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.transition = "all 0.9s ease";
  document.getElementById("content").style.display = "block";
}

document.getElementById('loan-form').addEventListener('submit',function(e)
{
e.preventDefault();
let loan=parseFloat(document.querySelector('#loan-amount').value);
let interest_percent=parseFloat(document.querySelector('#interest').value);
let years=parseFloat(document.querySelector('#repay-years').value);
let monthlyPayment=document.querySelector('#monthly-payment');
let totalAmount=document.querySelector('#total-payment');
let totalInterest=document.querySelector('#total-interest');
let result=document.querySelector('#result');
let interest;
let monthly_amt;
let total_amount;
console.log(loan);
interest=((loan*interest_percent*years)/100).toFixed(2);
totalInterest.value=interest;
total_amount=(loan+parseFloat(interest)).toFixed(2);
totalAmount.value=total_amount;
monthly_amt=parseFloat(((total_amount)/(years*12)).toFixed(2));
monthlyPayment.value=monthly_amt;
result.style.display="block";
})

